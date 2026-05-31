# -*- coding: utf-8 -*-
"""
改良版定位腳本 (v2)：
- 依地區套用地理邊界框 (viewbox + bounded=1)，避免抓到都市範圍外的錯誤座標。
- 一併重新定位東京遺漏的 9 間，並擴充大阪、京都名單。
僅使用標準庫 (urllib)，不需安裝套件。輸出 new_entries2.json。
"""
import json
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass

# 各地區邊界框 (lon1, lat1, lon2, lat2)，配合 bounded=1 限制結果範圍
VIEWBOX = {
    "東京": (139.30, 35.90, 139.95, 35.50),
    "大阪": (135.35, 34.85, 135.62, 34.55),
    "京都": (135.64, 35.10, 135.82, 34.94),
}

# 第一批東京遺漏者 (重新嘗試)
TOKYO_RETRY = [
    {"name": "らぁ麺や 嶋", "cat": "拉麵", "reason": "Tabelog 高分榜首，細膩淡麗系醬油拉麵，湯頭乾淨優雅。", "mq": "らぁ麺や 嶋 中野"},
    {"name": "中華そば しば田", "cat": "拉麵", "reason": "把樸實中華そば做到極致，湯麵相得益彰。", "mq": "中華そば しば田 狛江市東野川"},
    {"name": "中華ラーメン 多賀野", "cat": "拉麵", "reason": "長年排隊名店，醬油拉麵極具代表性。", "mq": "中華ラーメン 多賀野 品川区中延"},
    {"name": "手打ち 陰日向", "cat": "拉麵", "reason": "超寬手打麵搭濃郁湯底，創新風格令人驚艷。", "mq": "ラーメン 陰日向 府中市"},
    {"name": "大塚 A Bull", "cat": "燒肉", "reason": "平價黑毛和牛燒肉，CP 值極高。", "mq": "A Bull 大塚 焼肉 豊島区"},
    {"name": "淺草今半 國際通本店", "cat": "壽喜燒", "reason": "百年壽喜燒老店，秘傳醬汁配黑毛和牛。", "mq": "浅草今半 国際通り本店 西浅草"},
    {"name": "玄品 河豚", "cat": "海鮮", "reason": "平價享用河豚全餐，刺身與火鍋一應俱全。", "mq": "玄品 ふぐ 新宿東口"},
    {"name": "淺草花月堂", "cat": "咖啡甜點", "reason": "日銷數千個的巨大菠蘿麵包，外酥內軟。", "mq": "浅草 花月堂 本店 浅草2丁目"},
    {"name": "木村家總本店", "cat": "咖啡甜點", "reason": "百年紅豆麵包創始店，酒種紅豆麵包必嘗。", "mq": "銀座木村家 銀座4丁目"},
]

# 大阪新店
OSAKA = [
    {"name": "きじ お好み燒", "cat": "大阪燒", "reason": "新梅田食堂街名店，摩登燒香氣十足、麵體紮實。", "mq": "きじ お好み焼き 新梅田食道街"},
    {"name": "八重勝 串炸", "cat": "串炸", "reason": "新世界排隊名店，外酥內嫩、醬汁經典（禁止二次沾醬）。", "mq": "八重勝 串カツ 新世界"},
    {"name": "だるま 達摩串炸", "cat": "串炸", "reason": "大阪串炸代表，元祖醬料串炸必嘗。", "mq": "串かつ だるま 道頓堀"},
    {"name": "たこ家道頓堀 くくる", "cat": "章魚燒", "reason": "招牌大章魚『驚愕章魚燒』份量驚人。", "mq": "たこ家道頓堀くくる 本店"},
    {"name": "会津屋 (元祖章魚燒)", "cat": "章魚燒", "reason": "章魚燒元祖，無醬原味更能吃出高湯麵糊香。", "mq": "会津屋 たこ焼き 難波"},
    {"name": "蟹道樂 道頓堀本店", "cat": "海鮮", "reason": "道頓堀大螃蟹招牌地標，螃蟹全餐豐盛。", "mq": "かに道楽 道頓堀本店"},
    {"name": "北極星 蛋包飯", "cat": "蛋包飯", "reason": "蛋包飯發源店，蛋皮滑嫩、番茄醬汁懷舊。", "mq": "北極星 オムライス 心斎橋"},
    {"name": "どうとんぼり 神座", "cat": "拉麵", "reason": "獨特白菜甜味醬油拉麵，深夜也好吃。", "mq": "どうとんぼり 神座 道頓堀"},
    {"name": "麵屋 丈六", "cat": "拉麵", "reason": "高井田系濃厚醬油拉麵，麵體粗實有嚼勁。", "mq": "麺屋 丈六 大阪"},
    {"name": "美津の 大阪燒", "cat": "大阪燒", "reason": "道頓堀人氣大阪燒，食材新鮮、醬汁夠味。", "mq": "美津の お好み焼き 道頓堀"},
    {"name": "あぶりや 燒肉吃到飽", "cat": "燒肉", "reason": "國產牛燒肉吃到飽，CP 值高、選擇豐富。", "mq": "あぶりや 難波 焼肉"},
    {"name": "肉匠 なか田", "cat": "燒肉", "reason": "高級 A5 黑毛和牛燒肉，適合慶祝場合。", "mq": "肉匠 なか田 道頓堀"},
    {"name": "宇治園 (抹茶刨冰)", "cat": "抹茶甜點", "reason": "心齋橋老茶舖，正宗抹茶刨冰與聖代。", "mq": "宇治園 心斎橋本店"},
    {"name": "551 蓬萊 (豬肉包)", "cat": "點心", "reason": "大阪伴手禮代表，現蒸豬肉包熱騰騰必買。", "mq": "551蓬莱 本店 難波"},
    {"name": "夫婦善哉", "cat": "甜點", "reason": "法善寺百年紅豆湯名店，一份兩碗寓意圓滿。", "mq": "夫婦善哉 法善寺"},
]

# 京都新店
KYOTO = [
    {"name": "順正 湯豆腐", "cat": "湯豆腐", "reason": "清水寺旁名店，以京都好水製作的湯豆腐與湯葉鍋。", "mq": "順正 湯豆腐 清水"},
    {"name": "文之助茶屋", "cat": "抹茶甜點", "reason": "百年茶屋，蕨餅與抹茶甘味在地經典。", "mq": "文の助茶屋 本店 東山"},
    {"name": "阿古屋茶屋", "cat": "京料理", "reason": "京漬物與京野菜茶泡飯吃到飽，清水坂人氣店。", "mq": "阿古屋茶屋 清水"},
    {"name": "本家西尾八ツ橋", "cat": "和菓子", "reason": "生八橋老舖，包餡軟糯是熱門伴手禮。", "mq": "本家西尾八ツ橋 清水店"},
    {"name": "山元麵藏", "cat": "烏龍麵", "reason": "票選京都第一烏龍麵，麵體 Q 彈、牛蒡天婦羅必點。", "mq": "山元麺蔵 岡崎"},
    {"name": "名代 おめん 銀閣寺", "cat": "烏龍麵", "reason": "知名冷沾烏龍麵，配大量蔬菜清爽美味。", "mq": "おめん 銀閣寺本店"},
    {"name": "日の出 咖哩烏龍麵", "cat": "烏龍麵", "reason": "南禪寺旁名店，吸滿咖哩湯汁的烏龍麵風味獨特。", "mq": "日の出うどん 南禅寺"},
    {"name": "奧丹 南禪寺", "cat": "湯豆腐", "reason": "京都湯豆腐代表老舖，豆腐料理水準極高。", "mq": "総本家ゆどうふ奥丹 南禅寺"},
    {"name": "茶寮都路里 祇園", "cat": "抹茶甜點", "reason": "宇治抹茶聖代名店，抹茶控朝聖地。", "mq": "茶寮都路里 祇園本店"},
    {"name": "祇園德屋", "cat": "抹茶甜點", "reason": "現做蕨餅滑嫩 Q 彈，搭配抹茶絕配。", "mq": "ぎおん徳屋 祇園"},
    {"name": "十二段家", "cat": "壽喜燒", "reason": "涮涮鍋與壽喜燒發源店，牛肉品質上乘。", "mq": "十二段家 祇園"},
    {"name": "鍵善良房", "cat": "和菓子", "reason": "祇園百年和菓子舖，黑糖葛切口感獨特。", "mq": "鍵善良房 四条本店 祇園"},
    {"name": "肉割烹 祇園 牛牛", "cat": "和牛", "reason": "祇園和牛割烹，肉質鮮嫩、氛圍雅緻。", "mq": "肉割烹 祇園 牛牛"},
    {"name": "いづ重 (鯖姿壽司)", "cat": "壽司", "reason": "八坂神社旁京壽司老店，鯖姿壽司風味經典。", "mq": "いづ重 祇園 八坂"},
    {"name": "麵屋 豬一", "cat": "拉麵", "reason": "米其林必比登拉麵，魚介湯頭細膩高雅。", "mq": "麺屋 猪一 河原町"},
    {"name": "京の焼肉処 弘", "cat": "燒肉", "reason": "京都人氣燒肉，肉質極佳、價格合理。", "mq": "京の焼肉処 弘 木屋町"},
    {"name": "Smart Coffee", "cat": "洋食", "reason": "懷舊洋食咖啡店，鬆餅與布丁是招牌。", "mq": "スマート珈琲店 寺町"},
    {"name": "三嶋亭", "cat": "壽喜燒", "reason": "百年壽喜燒老舖，頂級和牛入口即化。", "mq": "三嶋亭 本店 寺町三条"},
    {"name": "六傳屋", "cat": "拉麵", "reason": "先斗町擔擔麵名店，黑芝麻擔擔麵濃郁順口。", "mq": "六傳屋 先斗町"},
    {"name": "柚子元 (柚子火鍋)", "cat": "海鮮", "reason": "先斗町柚子鹽味火鍋，清香解膩、肉質鮮嫩。", "mq": "柚子元 先斗町"},
    {"name": "錦 大安 (生牡蠣)", "cat": "海鮮", "reason": "錦市場牡蠣專門店，多產地生牡蠣與烤牡蠣。", "mq": "大安 だいやす 錦市場"},
    {"name": "三木雞卵 (玉子燒)", "cat": "京料理", "reason": "錦市場玉子燒名店，高湯蛋捲鬆軟多汁。", "mq": "三木鶏卵 錦市場"},
    {"name": "本家 第一旭", "cat": "拉麵", "reason": "京都車站旁排隊名店，醬油豚骨拉麵 CP 值高。", "mq": "本家 第一旭 たかばし本店"},
    {"name": "新福菜館 本店", "cat": "拉麵", "reason": "黑色濃醬油湯頭中華拉麵，搭炒飯一絕。", "mq": "新福菜館 本店 京都"},
    {"name": "鯛匠 HANANA", "cat": "壽司", "reason": "嵐山米其林平民美食，鯛魚茶泡飯三吃。", "mq": "鯛匠 HANANA 嵐山"},
    {"name": "廣川 鰻魚飯", "cat": "鰻魚", "reason": "嵐山米其林一星鰻魚飯，肉質肥美值得排隊。", "mq": "うなぎ 廣川 嵐山"},
    {"name": "ひさご (親子丼)", "cat": "親子丼", "reason": "高台寺旁名店，半熟蛋與嫩雞的完美親子丼。", "mq": "ひさご 親子丼 高台寺"},
    {"name": "中村藤吉 本店 (宇治)", "cat": "抹茶甜點", "reason": "宇治抹茶老舖總本店，竹筒抹茶聖代必排。", "mq": "中村藤吉本店 宇治"},
]


def geocode(query: str, region: str):
    box = VIEWBOX[region]
    params = urllib.parse.urlencode({
        "q": query,
        "format": "json",
        "limit": 1,
        "countrycodes": "jp",
        "viewbox": ",".join(str(v) for v in box),
        "bounded": 1,
    })
    url = f"https://nominatim.openstreetmap.org/search?{params}"
    req = urllib.request.Request(url, headers={
        "User-Agent": "TokyoFoodMap/2.0 (personal project)",
        "Accept-Language": "ja,en",
    })
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if data:
                return round(float(data[0]["lat"]), 5), round(float(data[0]["lon"]), 5)
    except Exception as e:
        print(f"    ! 查詢錯誤: {e}")
    return None


def process(items, region):
    results = []
    for i, c in enumerate(items, 1):
        coord = None
        for q in [c["mq"], f'{c["name"].split(" (")[0]} {region}']:
            coord = geocode(q, region)
            time.sleep(1.1)
            if coord:
                break
        entry = {
            "name": c["name"], "reason": c["reason"], "category": c["cat"],
            "type": "food", "region": region, "mapsQuery": c["mq"],
        }
        if coord:
            entry["lat"], entry["lng"] = coord
            print(f"  [{region}][{i:>2}/{len(items)}] OK   {c['name']} -> {coord}")
        else:
            print(f"  [{region}][{i:>2}/{len(items)}] MISS {c['name']}")
        results.append(entry)
    return results


def main():
    all_results = {}
    print("=== 東京 (重新定位遺漏) ===")
    all_results["tokyo_retry"] = process(TOKYO_RETRY, "東京")
    print("\n=== 大阪 ===")
    all_results["osaka"] = process(OSAKA, "大阪")
    print("\n=== 京都 ===")
    all_results["kyoto"] = process(KYOTO, "京都")

    Path("new_entries2.json").write_text(
        json.dumps(all_results, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    total = sum(len(v) for v in all_results.values())
    hit = sum(1 for v in all_results.values() for e in v if "lat" in e)
    print(f"\n完成！共 {total} 筆，命中座標 {hit} 筆、未命中 {total - hit} 筆。")
    print("輸出: new_entries2.json")


if __name__ == "__main__":
    main()
