const restaurantsData = [
    {
        name: "淺草 米久本店",
        reason: "4000yen 內吃到那麼漂亮的壽喜燒真的很少見，百年老店。",
        category: "壽喜燒",
        lat: 35.7142,
        lng: 139.7946,
        mapsQuery: "米久本店 淺草"
    },
    {
        name: "炭燒鰻魚富士 有樂町店",
        reason: "炭燒鰻魚名店，東京推薦鰻魚飯之一。",
        category: "鰻魚",
        lat: 35.6726,
        lng: 139.7601,
        mapsQuery: "炭燒鰻魚富士 有樂町店"
    },
    {
        name: "烤飛魚鹽味拉麵 高橋 上野店",
        reason: "烤飛魚鹽味拉麵，湯頭非常鮮美。",
        category: "拉麵",
        lat: 35.7077,
        lng: 139.7744,
        mapsQuery: "焼きあご塩らー麺 たかはし 上野店"
    },
    {
        name: "牛舌檸檬 淺草店",
        reason: "淺草熱門牛舌名店。",
        category: "牛舌",
        lat: 35.7126,
        lng: 139.7963,
        mapsQuery: "牛舌檸檬 淺草店"
    },
    {
        name: "色川鰻魚飯",
        reason: "淺草知名鰻魚飯老店。",
        category: "鰻魚",
        lat: 35.7099,
        lng: 139.7945,
        mapsQuery: "色川 鰻魚飯 淺草"
    },
    {
        name: "金色不如歸",
        reason: "米其林推薦的精緻拉麵。",
        category: "拉麵",
        lat: 35.6883,
        lng: 139.7042,
        mapsQuery: "金色不如歸 新宿"
    },
    {
        name: "Negishi (ねぎし)",
        reason: "平價美味的高CP值牛舌連鎖店。",
        category: "牛舌",
        lat: 35.6989,
        lng: 139.7743,
        mapsQuery: "ねぎし"
    },
    {
        name: "楢製麵 (Nara Seimen)",
        reason: "竹筍拉麵很特別且好喝。",
        category: "拉麵",
        lat: 35.6841,
        lng: 139.6999,
        mapsQuery: "楢製麵"
    },
    {
        name: "Kenyan Shibuya",
        reason: "奶茶極受推薦，非常好喝。",
        category: "咖啡甜點",
        lat: 35.6606,
        lng: 139.6974,
        mapsQuery: "Kenyan Shibuya"
    },
    {
        name: "Patisserie ten&",
        reason: "泡芙口感絕佳，受網友大推。",
        category: "咖啡甜點",
        lat: 35.6751,
        lng: 139.6480,
        mapsQuery: "Patisserie ten&"
    },
    {
        name: "房家一頭牛燒肉",
        reason: "價格合理且牛肉鮮嫩多汁，在上野和日暮里均有分店。",
        category: "燒肉",
        lat: 35.7095,
        lng: 139.7745,
        mapsQuery: "房家一頭牛燒肉 上野"
    },
    {
        name: "yellow 池袋店",
        reason: "知名歐姆蛋包飯，視覺與味覺的享受。",
        category: "洋食",
        lat: 35.7313,
        lng: 139.7123,
        mapsQuery: "yellow 池袋店 蛋包飯"
    },
    {
        name: "Yoroniku",
        reason: "頂級燒肉名店，需預約，單人亦可現場嘗試。",
        category: "燒肉",
        lat: 35.6617,
        lng: 139.7208,
        mapsQuery: "Yoroniku 南青山"
    },
    {
        name: "牛舌檸檬 新宿店",
        reason: "新宿地區極受好評的牛舌專賣店。",
        category: "牛舌",
        lat: 35.6946,
        lng: 139.6984,
        mapsQuery: "牛舌檸檬 新宿店"
    },
    {
        name: "銀座 五代目 花山烏冬",
        reason: "寬麵烏冬面非常有特色，冬天吃冷麵也值得排隊。",
        category: "烏龍麵",
        lat: 35.6698,
        lng: 139.7651,
        mapsQuery: "五代目 花山烏龍麵 銀座"
    },
    {
        name: "極味屋 (Kiwamiya)",
        reason: "熱門漢堡排名店，肉質鮮美。",
        category: "洋食",
        lat: 35.6601,
        lng: 139.6992,
        mapsQuery: "極味屋 涉谷"
    },
    {
        name: "入鹿Tokyo",
        reason: "精緻拉麵代表，湯底與層次豐富。",
        category: "拉麵",
        lat: 35.6657,
        lng: 139.7303,
        mapsQuery: "入鹿Tokyo 六本木"
    },
    {
        name: "淺草炸牛排",
        reason: "排隊名店，炸牛排口感極佳。",
        category: "炸豬排/牛排",
        lat: 35.7118,
        lng: 139.7960,
        mapsQuery: "淺草牛かつ"
    },
    {
        name: "人形町今半",
        reason: "經典壽喜燒老店，品質非常穩定。",
        category: "壽喜燒",
        lat: 35.6865,
        lng: 139.7825,
        mapsQuery: "人形町今半 本店"
    },
    {
        name: "三明治専門店 ポポー",
        reason: "日暮里車站附近的老店，三明治內餡超豐盛且價格實惠。",
        category: "麵包三明治",
        lat: 35.7305,
        lng: 139.7684,
        mapsQuery: "三明治専門店 ポポー 日暮里"
    },
    {
        name: "銀座梅林豬排",
        reason: "傳統炸豬排名店，還有期間限定的漢堡排定食。",
        category: "炸豬排/牛排",
        lat: 35.6696,
        lng: 139.7630,
        mapsQuery: "銀座梅林豬排"
    },
    {
        name: "丸一 (Tonkatsu Maruichi)",
        reason: "被稱為炸豬排天花板，位於蒲田站，肉質極佳且份量十足。",
        category: "炸豬排/牛排",
        lat: 35.5615,
        lng: 139.7153,
        mapsQuery: "丸一 炸豬排 蒲田"
    },
    {
        name: "煮干しつけ麺 宮元",
        reason: "位於蒲田的濃厚沾麵名店，煮干（小魚乾）湯頭非常濃郁。",
        category: "拉麵",
        lat: 35.5631,
        lng: 139.7135,
        mapsQuery: "煮干しつけ麺 宮元"
    },
    {
        name: "NIBOSHIMANIA",
        reason: "拉麵愛好者必訪，主打極限強度的煮干風味拉麵。",
        category: "拉麵",
        lat: 35.5606,
        lng: 139.7158,
        mapsQuery: "NIBOSHIMANIA"
    },
    {
        name: "森本燒鳥 (Yakitori Morimoto)",
        reason: "澀谷區老字號燒鳥店，串燒技術精湛，是體驗當地居酒屋文化的推薦地。",
        category: "燒肉",
        lat: 35.6587,
        lng: 139.6998,
        mapsQuery: "鳥ぜん 瀬口（原森本）"
    },
    {
        name: "EDW yellow",
        reason: "澀谷熱門咖啡廳，其起司蛋包飯口感極佳，是社交媒體上的熱門選手。",
        category: "洋食",
        lat: 35.6620,
        lng: 139.6985,
        mapsQuery: "EDW yellow 涉谷"
    },
    {
        name: "銀座 Ukai tei",
        reason: "頂級鐵板燒，環境極致奢華，適合追求高品質餐飲體驗的旅客。",
        category: "燒肉",
        lat: 35.6695,
        lng: 139.7675,
        mapsQuery: "銀座 Ukai tei"
    },
    {
        name: "IZUMO Asakusa Yokocho",
        reason: "淺草區極具視覺衝擊力的鰻魚飯，份量大到驚人，拍照與美味兼具。",
        category: "鰻魚",
        lat: 35.7135,
        lng: 139.7943,
        mapsQuery: "いづも 淺草橫町"
    },
    {
        name: "山下本氣烏龍麵",
        reason: "以白色奶油明太子烏龍麵聞名，口感獨特且視覺上非常吸睛。",
        category: "烏龍麵",
        lat: 35.6595,
        lng: 139.7023,
        mapsQuery: "山下本氣烏龍麵 涉谷"
    },
    {
        name: "とんかつ檍 銀座店",
        reason: "位於銀座地下室的隱藏名店，炸豬排外酥內嫩，品質穩定。",
        category: "炸豬排/牛排",
        lat: 35.6688,
        lng: 139.7615,
        mapsQuery: "とんかつ檍 銀座店"
    },
    {
        name: "挽肉と米 (Hiki niku to Kome)",
        reason: "超人氣現烤漢堡排，炭火香氣十足，搭配現炊白飯非常美味。",
        category: "燒肉",
        lat: 35.7048,
        lng: 139.5798,
        mapsQuery: "挽肉と米 吉祥寺"
    },
    {
        name: "Truffle Bakery",
        reason: "白松露鹽麵包是其招牌，香氣四溢，經常大排長龍。",
        category: "麵包三明治",
        lat: 35.6725,
        lng: 139.7745,
        mapsQuery: "Truffle Bakery 三軒茶屋"
    },
    {
        name: "六厘舍 (Rokurinsha)",
        reason: "東京車站沾麵代表，以濃厚魚介豬骨湯頭聞名。",
        category: "拉麵",
        lat: 35.6815,
        lng: 139.7675,
        mapsQuery: "六厘舍 東京車站"
    },
    {
        name: "壽司之美登利",
        reason: "高CP值壽司店，食材新鮮、份量充足，深受觀光客與在地客喜愛。",
        category: "壽司",
        lat: 35.6585,
        lng: 139.7015,
        mapsQuery: "壽司之美登利 涉谷"
    },
    {
        name: "Bills 銀座",
        reason: "號稱「世界第一早餐」，經典鬆餅與炒蛋是東京早午餐的首選。",
        category: "咖啡甜點",
        lat: 35.6735,
        lng: 139.7655,
        mapsQuery: "Bills 銀座"
    },
    {
        name: "根津 釜竹",
        reason: "由百年建築改建，擁有傳統日式庭園與美味的釜揚烏龍麵。",
        category: "烏龍麵",
        lat: 35.7185,
        lng: 139.7658,
        mapsQuery: "根津 釜竹"
    },
    {
        name: "鳥めし ふみや",
        reason: "專精於雞肉料理的傳統店鋪，雞肉炊飯深受當地人推薦。",
        category: "洋食",
        lat: 35.6655,
        lng: 139.7705,
        mapsQuery: "鳥めし ふみや築地"
    },
    {
        name: "AFURI (阿夫利)",
        reason: "主打清爽的柚子鹽拉麵，味道優雅，在多處商圈均有分店。",
        category: "拉麵",
        lat: 35.6475,
        lng: 139.7075,
        mapsQuery: "AFURI 惠比壽"
    }
];
