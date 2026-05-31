# -*- coding: utf-8 -*-
"""定位鋼彈相關 + 仙台 + 青森 的新項目，輸出可併入 data.js 的 JS 區塊。"""
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

# 各區邊界框 (lon1, lat1, lon2, lat2)
VIEWBOX = {
    "東京": (139.30, 35.90, 139.95, 35.50),
    "仙台": (140.40, 38.55, 141.20, 37.85),
    "青森": (140.10, 41.10, 141.60, 40.25),
}

# 欄位: name / reason / cat / type / region / mq
CANDIDATES = [
    # ===== 鋼彈相關 (東京) =====
    {"name": "實物大獨角獸鋼彈立像", "cat": "鋼彈", "type": "spot", "region": "東京",
     "reason": "台場地標！19.7m 高 1:1 獨角獸鋼彈，夜間有變身燈光秀。⚠️官方宣布 2026 年 8 月底結束展示，把握最後機會！",
     "mq": "ダイバーシティ東京プラザ ユニコーンガンダム立像"},
    {"name": "The Gundam Base Tokyo", "cat": "鋼彈", "type": "shop", "region": "東京",
     "reason": "全球最大鋼彈模型旗艦店 (DiverCity 7F)，限定鋼普拉與週邊讓鋼彈迷失心瘋。",
     "mq": "The Gundam Base Tokyo ダイバーシティ お台場"},
    {"name": "Animate 池袋本店", "cat": "動漫週邊", "type": "shop", "region": "東京",
     "reason": "全球最大動漫週邊旗艦店，鋼彈、模型與各式動漫商品齊全。",
     "mq": "アニメイト池袋本店"},
    # ===== 仙台 美食 =====
    {"name": "利久 牛舌 (仙台駅店)", "cat": "牛舌", "type": "food", "region": "仙台",
     "reason": "仙台牛舌名店代表，厚切炭烤牛舌鮮嫩多汁，套餐附麥飯與牛尾湯。",
     "mq": "牛たん炭焼 利久 仙台駅"},
    {"name": "旨味 太助", "cat": "牛舌", "type": "food", "region": "仙台",
     "reason": "炭烤牛舌創始老店之一，傳承元祖風味、炭香十足。",
     "mq": "旨味 太助 仙台 国分町"},
    {"name": "ずんだ茶寮 毛豆甜點", "cat": "毛豆甜點", "type": "food", "region": "仙台",
     "reason": "毛豆泥(ずんだ)甜點專門店，毛豆奶昔(ずんだシェイク)清爽必喝。",
     "mq": "ずんだ茶寮 仙台駅"},
    {"name": "すし哲 (塩釜)", "cat": "壽司", "type": "food", "region": "仙台",
     "reason": "塩釜港邊頂級壽司名店，鮪魚與當季海鮮新鮮度一流。",
     "mq": "すし哲 本店 塩釜"},
    # ===== 仙台 景點 =====
    {"name": "仙台城跡 (青葉城)", "cat": "城跡", "type": "spot", "region": "仙台",
     "reason": "伊達政宗築城遺跡，騎馬銅像與市區夜景眺望點。",
     "mq": "仙台城跡 青葉城"},
    {"name": "瑞鳳殿", "cat": "神社寺院", "type": "spot", "region": "仙台",
     "reason": "伊達政宗的豪華靈廟，桃山風格金碧輝煌、四季皆美。",
     "mq": "瑞鳳殿 仙台"},
    {"name": "松島", "cat": "自然景觀", "type": "spot", "region": "仙台",
     "reason": "日本三景之一，260 座小島散布海灣，搭遊覽船賞景一絕。",
     "mq": "松島 宮城 観光"},
    {"name": "藏王御釜", "cat": "自然景觀", "type": "spot", "region": "仙台",
     "reason": "翡翠綠的火口湖，隨光線變色，藏王連峰的代表絕景。",
     "mq": "蔵王 御釜 宮城"},
    # ===== 仙台 必買 =====
    {"name": "萩の月", "cat": "伴手禮", "type": "shop", "region": "仙台",
     "reason": "仙台必買經典名產，鬆軟海綿蛋糕包濃郁卡士達奶餡。",
     "mq": "萩の月 仙台駅"},
    {"name": "喜久福 (毛豆生奶油大福)", "cat": "伴手禮", "type": "shop", "region": "仙台",
     "reason": "麻糬包毛豆生奶油，冷凍半解凍吃口感最佳，季節限定。",
     "mq": "喜久福 仙台駅"},
    {"name": "牛舌仙貝 (牛たん煎餅)", "cat": "零食", "type": "shop", "region": "仙台",
     "reason": "薄脆仙貝帶牛舌香氣，鹹香涮嘴的人氣伴手禮。",
     "mq": "牛たん煎餅 仙台駅"},
    {"name": "白石溫麵 (白石うーめん)", "cat": "伴手禮", "type": "shop", "region": "仙台",
     "reason": "宮城白石名產短細素麵，不加油、好消化，煮法多變。",
     "mq": "白石温麺 仙台駅"},
    # ===== 青森 美食 =====
    {"name": "古川市場 のっけ丼", "cat": "海鮮丼", "type": "food", "region": "青森",
     "reason": "買票券自選海鮮鋪到飯上，DIY 專屬海鮮丼，青森市必吃。",
     "mq": "青森魚菜センター のっけ丼 古川市場"},
    {"name": "鶴龜屋食堂", "cat": "海鮮丼", "type": "food", "region": "青森",
     "reason": "份量驚人的爆量生魚片蓋飯，鮪魚堆成小山，CP 值爆表。",
     "mq": "鶴亀屋食堂 青森"},
    {"name": "味の札幌 大西 (味噌咖哩牛奶拉麵)", "cat": "拉麵", "type": "food", "region": "青森",
     "reason": "青森獨有的味噌咖哩牛奶拉麵發源名店，濃郁滑順意外順口。",
     "mq": "味の札幌 大西 青森"},
    # ===== 青森 景點 =====
    {"name": "弘前城 (弘前公園)", "cat": "城跡", "type": "spot", "region": "青森",
     "reason": "東北賞櫻名所第一，天守閣與護城河櫻吹雪夢幻絕美。",
     "mq": "弘前城 弘前公園"},
    {"name": "奧入瀨溪流", "cat": "自然景觀", "type": "spot", "region": "青森",
     "reason": "原始森林中的溪流秘境，苔蘚與瀑布，秋楓季最迷人。",
     "mq": "奥入瀬渓流"},
    {"name": "八甲田山 (纜車/樹冰)", "cat": "自然景觀", "type": "spot", "region": "青森",
     "reason": "冬季樹冰聖地，搭纜車登頂飽覽銀白世界。",
     "mq": "八甲田ロープウェー 青森"},
    {"name": "睡魔之家 WA RASSE", "cat": "博物館", "type": "spot", "region": "青森",
     "reason": "青森睡魔祭主題館，近距離欣賞巨大睡魔燈籠花車的魄力。",
     "mq": "ねぶたの家 ワ・ラッセ 青森"},
    {"name": "青森縣立美術館", "cat": "博物館", "type": "spot", "region": "青森",
     "reason": "奈良美智『青森犬』所在地，現代藝術迷必訪。",
     "mq": "青森県立美術館"},
    {"name": "蕪嶋神社", "cat": "神社寺院", "type": "spot", "region": "青森",
     "reason": "八戶海邊神社，上千隻海鷗環繞，求財運的能量景點。",
     "mq": "蕪嶋神社 八戸"},
    # ===== 青森 必買 =====
    {"name": "A-FACTORY 蘋果工坊", "cat": "伴手禮", "type": "shop", "region": "青森",
     "reason": "青森站旁蘋果伴手禮殿堂，現釀蘋果氣泡酒(Cidre)必試。",
     "mq": "A-FACTORY 青森"},
    {"name": "Patissier's 蘋果派", "cat": "甜點", "type": "shop", "region": "青森",
     "reason": "全國菓子博覽會金賞，酥皮包紅玉蘋果，青森代表伴手禮。",
     "mq": "ラグノオ アップルパイ 青森"},
    {"name": "青森大蒜仙貝", "cat": "零食", "type": "shop", "region": "青森",
     "reason": "用青森頂級大蒜製作，濃郁酥脆、一吃上癮。",
     "mq": "青森 にんにくせんべい"},
    {"name": "APPLE SNACK 蘋果乾", "cat": "零食", "type": "shop", "region": "青森",
     "reason": "保留蘋果酸甜原味的蘋果乾，輕巧好攜帶。",
     "mq": "青森 りんごスナック ドライアップル"},
    {"name": "睡魔金魚羊羹", "cat": "甜點", "type": "shop", "region": "青森",
     "reason": "金魚睡魔造型蘋果風味羊羹，美味又有趣的伴手禮。",
     "mq": "金魚ねぷた 羊羹 青森"},
    {"name": "干貝糖 (帆立糖)", "cat": "零食", "type": "shop", "region": "青森",
     "reason": "鎖住青森干貝鮮甜，柔軟有嚼勁，當零食或調味皆宜。",
     "mq": "青森 ホタテ 干し 帆立"},
]


def geocode(query, region):
    box = VIEWBOX[region]
    params = urllib.parse.urlencode({
        "q": query, "format": "json", "limit": 1, "countrycodes": "jp",
        "viewbox": ",".join(str(v) for v in box), "bounded": 1,
    })
    url = f"https://nominatim.openstreetmap.org/search?{params}"
    req = urllib.request.Request(url, headers={
        "User-Agent": "TokyoFoodMap/3.0 (personal project)", "Accept-Language": "ja,en"})
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            d = json.loads(r.read().decode("utf-8"))
            if d:
                return round(float(d[0]["lat"]), 5), round(float(d[0]["lon"]), 5)
    except Exception as e:
        print(f"    ! {e}")
    return None


def to_js(e):
    parts = [
        f'        name: {json.dumps(e["name"], ensure_ascii=False)}',
        f'        reason: {json.dumps(e["reason"], ensure_ascii=False)}',
        f'        category: {json.dumps(e["cat"], ensure_ascii=False)}',
        f'        type: {json.dumps(e["type"], ensure_ascii=False)}',
        f'        region: {json.dumps(e["region"], ensure_ascii=False)}',
    ]
    if "lat" in e:
        parts.append(f'        lat: {e["lat"]}')
        parts.append(f'        lng: {e["lng"]}')
    parts.append(f'        mapsQuery: {json.dumps(e["mq"], ensure_ascii=False)}')
    return "    {\n" + ",\n".join(parts) + "\n    },"


def main():
    hit = 0
    js_lines = ["    // ===== 鋼彈 / 仙台 / 青森 擴充 ====="]
    for i, c in enumerate(CANDIDATES, 1):
        coord = None
        for q in [c["mq"], f'{c["name"].split(" (")[0]} {c["region"]}']:
            coord = geocode(q, c["region"])
            time.sleep(1.1)
            if coord:
                break
        if coord:
            c["lat"], c["lng"] = coord
            hit += 1
            print(f"[{i:>2}/{len(CANDIDATES)}] OK   {c['region']} {c['name']} -> {coord}")
        else:
            print(f"[{i:>2}/{len(CANDIDATES)}] MISS {c['region']} {c['name']}")
        js_lines.append(to_js(c))

    Path("data_append3.txt").write_text("\n".join(js_lines), encoding="utf-8")
    Path("new_entries3.json").write_text(json.dumps(CANDIDATES, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\n完成！共 {len(CANDIDATES)} 筆，命中 {hit}、未命中 {len(CANDIDATES)-hit}。輸出 data_append3.txt")


if __name__ == "__main__":
    main()
