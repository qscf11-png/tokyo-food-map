const japanRecommendationData = [
    // --- 美食 (Food) ---
    {
        name: "淺草 米久本店",
        reason: "4000yen 內吃到那麼漂亮的壽喜燒真的很少見，百年老店。",
        category: "壽喜燒",
        type: "food",
        region: "東京",
        lat: 35.7142,
        lng: 139.7946,
        mapsQuery: "米久本店 淺草"
    },
    {
        name: "碳燒鰻魚富士 有樂町店",
        reason: "碳燒鰻魚名店，東京推薦鰻魚飯之一。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.6726,
        lng: 139.7601,
        mapsQuery: "碳燒鰻魚富士 有樂町店"
    },
    {
        name: "烤飛魚鹽味拉麵 高橋 上野店",
        reason: "烤飛魚鹽味拉麵，湯頭非常鮮美。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.7077,
        lng: 139.7744,
        mapsQuery: "焼きあご塩らー麺 たかはし 上野店"
    },
    {
        name: "牛舌檸檬 淺草店",
        reason: "淺草熱門牛舌名店。",
        category: "牛舌",
        type: "food",
        region: "東京",
        lat: 35.7126,
        lng: 139.7963,
        mapsQuery: "牛舌檸檬 淺草店"
    },
    {
        name: "色川鰻魚飯",
        reason: "淺草知名鰻魚飯老店。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.7099,
        lng: 139.7945,
        mapsQuery: "色川 鰻魚飯 淺草"
    },
    {
        name: "金色不如歸",
        reason: "米其林推薦的精緻拉麵。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6883,
        lng: 139.7042,
        mapsQuery: "金色不如歸 新宿"
    },
    {
        name: "Negishi (ねぎし)",
        reason: "平價美味的高CP值牛舌連鎖店。",
        category: "牛舌",
        type: "food",
        region: "東京",
        lat: 35.6989,
        lng: 139.7743,
        mapsQuery: "ねぎし"
    },
    {
        name: "楢製麵 (Nara Seimen)",
        reason: "竹筍拉麵很特別且好喝。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6841,
        lng: 139.6999,
        mapsQuery: "楢製麵"
    },
    {
        name: "Kenyan Shibuya",
        reason: "奶茶極受推薦，非常好喝。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.6606,
        lng: 139.6974,
        mapsQuery: "Kenyan Shibuya"
    },
    {
        name: "Patisserie ten&",
        reason: "泡芙口感絕佳，受網友大推。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.6751,
        lng: 139.6480,
        mapsQuery: "Patisserie ten&"
    },
    {
        name: "房家一頭牛燒肉",
        reason: "價格合理且牛肉鮮嫩多汁，在上野和日暮里均有分店。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.7095,
        lng: 139.7745,
        mapsQuery: "房家一頭牛燒肉 上野"
    },
    {
        name: "yellow 池袋店",
        reason: "知名歐姆蛋包飯，視覺與味覺的享受。",
        category: "洋食",
        type: "food",
        region: "東京",
        lat: 35.7313,
        lng: 139.7123,
        mapsQuery: "yellow 池袋店 蛋包飯"
    },
    {
        name: "Yoroniku",
        reason: "頂級燒肉名店，需預約，單人亦可現場嘗試。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.6617,
        lng: 139.7208,
        mapsQuery: "Yoroniku 南青山"
    },
    {
        name: "牛舌檸檬 新宿店",
        reason: "新宿地區極受好評的牛舌專賣店。",
        category: "牛舌",
        type: "food",
        region: "東京",
        lat: 35.6946,
        lng: 139.6984,
        mapsQuery: "牛舌檸檬 新宿店"
    },
    {
        name: "銀座 五代目 花山烏冬",
        reason: "寬麵烏冬面非常有特色，冬天吃冷麵也值得排隊。",
        category: "烏龍麵",
        type: "food",
        region: "東京",
        lat: 35.6698,
        lng: 139.7651,
        mapsQuery: "五代目 花山烏龍麵 銀座"
    },
    {
        name: "極味屋 (Kiwamiya)",
        reason: "熱門漢堡排名店，肉質鮮美。",
        category: "洋食",
        type: "food",
        region: "東京",
        lat: 35.6601,
        lng: 139.6992,
        mapsQuery: "極味屋 涉谷"
    },
    {
        name: "入鹿Tokyo",
        reason: "精緻拉麵代表，湯底與層次豐富。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6657,
        lng: 139.7303,
        mapsQuery: "入鹿Tokyo 六本木"
    },
    {
        name: "淺草炸牛排",
        reason: "排隊名店，炸牛排口感極佳。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.7118,
        lng: 139.7960,
        mapsQuery: "淺草牛かつ"
    },
    {
        name: "人形町今半",
        reason: "經典壽喜燒老店，品質非常穩定。",
        category: "壽喜燒",
        type: "food",
        region: "東京",
        lat: 35.6865,
        lng: 139.7825,
        mapsQuery: "人形町今半 本店"
    },
    {
        name: "三明治専門店 ポポー",
        reason: "日暮里車站附近的老店，三明治內餡超豐盛且價格實惠。",
        category: "麵包三明治",
        type: "food",
        region: "東京",
        lat: 35.7305,
        lng: 139.7684,
        mapsQuery: "三明治専門店 ポポー 日暮里"
    },
    {
        name: "銀座梅林豬排",
        reason: "傳統炸豬排名店，還有期間限定的漢堡排定食。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.6696,
        lng: 139.7630,
        mapsQuery: "銀座梅林豬排"
    },
    {
        name: "丸一 (Tonkatsu Maruichi)",
        reason: "被稱為炸豬排天花板，位於蒲田站，肉質極佳且份量十足。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.5615,
        lng: 139.7153,
        mapsQuery: "丸一 炸豬排 蒲田"
    },
    {
        name: "煮干しつけ麺 宮元",
        reason: "位於蒲田的濃厚沾麵名店，煮干（小魚乾）湯頭非常濃郁。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.5631,
        lng: 139.7135,
        mapsQuery: "煮干しつけ麺 宮元"
    },
    {
        name: "NIBOSHIMANIA",
        reason: "拉麵愛好者必訪，主打極限強度的煮干風味拉麵。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.5606,
        lng: 139.7158,
        mapsQuery: "NIBOSHIMANIA"
    },
    {
        name: "森本燒鳥 (Yakitori Morimoto)",
        reason: "澀谷區老字號燒鳥店，串燒技術精湛，是體驗當地居酒屋文化的推薦地。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.6587,
        lng: 139.6998,
        mapsQuery: "鳥ぜん 瀬口（原森本）"
    },
    {
        name: "EDW yellow",
        reason: "澀谷熱門咖啡廳，其起司蛋包飯口感極佳，是社交媒體上的熱門選手。",
        category: "洋食",
        type: "food",
        region: "東京",
        lat: 35.6620,
        lng: 139.6985,
        mapsQuery: "EDW yellow 涉谷"
    },
    {
        name: "銀座 Ukai tei",
        reason: "頂級鐵板燒，環境極致奢華，適合追求高品質餐飲體驗的旅客。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.6695,
        lng: 139.7675,
        mapsQuery: "銀座 Ukai tei"
    },
    {
        name: "IZUMO Asakusa Yokocho",
        reason: "淺草區極具視覺衝擊力的鰻魚飯，份量大到驚人，拍照與美味兼具。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.7135,
        lng: 139.7943,
        mapsQuery: "いづ走 淺草橫町"
    },
    {
        name: "山下本氣烏龍麵",
        reason: "以白色奶油明太子烏龍麵聞名，口感獨特且視覺上非常吸睛。",
        category: "烏龍麵",
        type: "food",
        region: "東京",
        lat: 35.6595,
        lng: 139.7023,
        mapsQuery: "山下本氣烏龍麵 涉谷"
    },
    {
        name: "とんかつ檍 銀座店",
        reason: "位於銀座地下室的隱藏名店，炸豬排外酥內嫩，品質穩定。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.6688,
        lng: 139.7615,
        mapsQuery: "とんかつ檍 銀座店"
    },
    {
        name: "挽肉と米 (Hiki niku to Kome)",
        reason: "超人氣現烤漢堡排，炭火香氣十足，搭配現炊白飯非常美味。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.7048,
        lng: 139.5798,
        mapsQuery: "挽肉と米 吉祥寺"
    },
    {
        name: "Truffle Bakery",
        reason: "白松露鹽麵包是其招牌，香氣四溢，經常大排長龍。",
        category: "麵包三明治",
        type: "food",
        region: "東京",
        lat: 35.6725,
        lng: 139.7745,
        mapsQuery: "Truffle Bakery 三軒茶屋"
    },
    {
        name: "六厘舍 (Rokurinsha)",
        reason: "東京車站沾麵代表，以濃厚魚介豬骨湯頭聞名。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6815,
        lng: 139.7675,
        mapsQuery: "六厘舍 東京車站"
    },
    {
        name: "壽司之美登利",
        reason: "高CP值壽司店，食材新鮮、份量充足，深受觀光客與在地客喜愛。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.6585,
        lng: 139.7015,
        mapsQuery: "壽司之美登利 涉谷"
    },
    {
        name: "Bills 銀座",
        reason: "號稱「世界第一早餐」，經典鬆餅與炒蛋是東京早午餐的首選。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.6735,
        lng: 139.7655,
        mapsQuery: "Bills 銀座"
    },
    {
        name: "根津 釜竹",
        reason: "由百年建築改建，擁有傳統日式庭園與美味的釜揚烏龍麵。",
        category: "烏龍麵",
        type: "food",
        region: "東京",
        lat: 35.7185,
        lng: 139.7658,
        mapsQuery: "根津 釜竹"
    },
    {
        name: "鳥めし ふみや",
        reason: "專精於雞肉料理的傳統店鋪，雞肉炊飯深受當地人推薦。",
        category: "洋食",
        type: "food",
        region: "東京",
        lat: 35.6655,
        lng: 139.7705,
        mapsQuery: "鳥めし ふみや築地"
    },
    {
        name: "AFURI (阿夫利)",
        reason: "主打清爽的柚子鹽拉麵，味道優雅，在多處商圈均有分店。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6475,
        lng: 139.7075,
        mapsQuery: "AFURI 惠比壽"
    },
    {
        name: "日山壽喜燒",
        reason: "日本橋知名壽喜燒老店，肉質頂級且服務周到。",
        category: "壽喜燒",
        type: "food",
        region: "東京",
        lat: 35.6853,
        lng: 139.7801,
        mapsQuery: "日山 壽喜燒 日本橋"
    },
    {
        name: "築地 鮨國",
        reason: "築地清單代表，滿出來的海膽丼是視覺與味覺的饗宴。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.6656,
        lng: 139.7712,
        mapsQuery: "鮨國 築地"
    },
    {
        name: "築地 虎杖",
        reason: "以海鮮丼聞名，多種新鮮食材組合讓網友讚不絕口。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.6658,
        lng: 139.7710,
        mapsQuery: "築地 虎杖"
    },
    {
        name: "和牛放題 肉屋橫町",
        reason: "肉質非常好的和牛吃到飽，適合想要痛快吃肉的旅客。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.6981,
        lng: 139.7738,
        mapsQuery: "肉屋橫町 秋葉原"
    },
    {
        name: "肉屋台所",
        reason: "熱門的和牛吃到飽連鎖店，CP值極高。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.7101,
        lng: 139.7742,
        mapsQuery: "肉屋台所 上野"
    },
    {
        name: "一心たん助",
        reason: "厚切牛舌吃到飽名店，喜歡牛舌的朋友千萬別錯過。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.7088,
        lng: 139.7739,
        mapsQuery: "一心たん助 上野"
    },
    {
        name: "USHIGORO S Ginza",
        reason: "烤肉界的頂峰！銀座店難訂，油脂豐富，入口即化，堪稱日本最美味牛肉。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.671158,
        lng: 139.763459,
        mapsQuery: "USHIGORO S Ginza"
    },
    {
        name: "人形町今半 銀座店",
        reason: "關東壽喜燒無敵！服務貼心，和牛鮮嫩，吃完超滿足。",
        category: "壽喜燒",
        type: "food",
        region: "東京",
        lat: 35.670131,
        lng: 139.762760,
        mapsQuery: "人形町今半 銀座店"
    },
    {
        name: "熊本あか牛しゃぶしゃぶ (Ginza Six)",
        reason: "柚子醬獨特，可嘗和牛 5 種珍稀部位。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.669563,
        lng: 139.764004,
        mapsQuery: "熊本あか牛しゃぶしゃぶ 甲ら 銀座"
    },
    {
        name: "銀座 五代目 花山烏冬",
        reason: "咖喱寬烏冬與熱湯烏冬受歡迎，豬肉熱湯麵更別具風味。",
        category: "烏龍麵",
        type: "food",
        region: "東京",
        lat: 35.6699002,
        lng: 139.7691376,
        mapsQuery: "銀座 五代目 花山烏龍麵"
    },
    {
        name: "銀座 篝 (Ginza Kagari)",
        reason: "米芝蓮推薦平價雞湯拉麵。雞白湯經典，蛤蜊牡蠣湯驚艷。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.671282,
        lng: 139.761320,
        mapsQuery: "銀座 篝"
    },
    {
        name: "BONGEN COFFEE (Bogen咖啡館)",
        reason: "拿鐵天堂。咖啡與牛奶平衡完美，必試。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.669614,
        lng: 139.766352,
        mapsQuery: "BONGEN COFFEE"
    },
    {
        name: "中村藤吉銀座店",
        reason: "Ginza Six 4F，全日本獨有抹茶芭菲超吸睛，層次豐富，抹茶奶蓋絲滑。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.669884,
        lng: 139.764448,
        mapsQuery: "中村藤吉 銀座店"
    },
    {
        name: "福みみ 串燒 (Ginza)",
        reason: "亞洲頂級串燒，氣氛熱鬧。贈送芝士餅乾超美味，下酒一流。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.671936,
        lng: 139.760448,
        mapsQuery: "福みみ 銀座店"
    },
    {
        name: "銀座によろ助",
        reason: "專攻鰻魚，除蒲燒還有生魚片與火鍋吃法，免預約即可享用。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.669926,
        lng: 139.765103,
        mapsQuery: "銀座によろ助"
    },
    {
        name: "Mixology Salon (Ginza Six)",
        reason: "創意茶底雞尾酒驚艷，萃茶技術一流，風味絕佳。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.669563,
        lng: 139.764004,
        mapsQuery: "Mixology Salon Ginza"
    },
    // --- 景點 (Spot) ---
    {
        name: "SHIBUYA SKY",
        reason: "澀谷最高的戶外展望台，可以 360 度俯瞰東京美景，甚至是富士山。",
        category: "展望台",
        type: "spot",
        region: "東京",
        lat: 35.6585,
        lng: 139.7022,
        mapsQuery: "SHIBUYA SKY"
    },
    {
        name: "淺草寺",
        reason: "東京最古老的寺廟，雷門是大標誌，充滿下町風情。",
        category: "神社寺院",
        type: "spot",
        region: "東京",
        lat: 35.7148,
        lng: 139.7967,
        mapsQuery: "淺草寺"
    },
    {
        name: "環球影城 (USJ)",
        reason: "位於大阪的超級主題樂園，瑪利歐與哈利波特園區必去。",
        category: "主題樂園",
        type: "spot",
        region: "大阪",
        lat: 34.6654,
        lng: 135.4323,
        mapsQuery: "日本環球影城"
    },
    {
        name: "清水寺",
        reason: "京都最著名的寺院，清水舞台宏偉壯觀，四季皆美。",
        category: "神社寺院",
        type: "spot",
        region: "京都",
        lat: 34.9949,
        lng: 135.7850,
        mapsQuery: "清水寺"
    },
    // --- 必買 (Shop) ---
    {
        name: "日本限定文具",
        reason: "款式多樣且設計精美，文具控必入。",
        category: "文具",
        type: "shop",
        region: "全日本"
    },
    {
        name: "Bic Camera 負離子吹風機",
        reason: "比台灣便宜許多，型號齊全。",
        category: "電器",
        type: "shop",
        region: "大阪",
        lat: 34.6669,
        lng: 135.5022,
        mapsQuery: "Bic Camera 難波店"
    },
    {
        name: "獺祭二割三分",
        reason: "日本必買清酒，機場或大型百貨均有售。",
        category: "伴手禮",
        type: "shop",
        region: "全日本"
    },
    {
        name: "Ikinari Steak",
        reason: "站著吃的牛排名店，肉質鮮美且價格實惠，牛排愛好者必試。",
        category: "牛排",
        type: "food",
        region: "東京",
        lat: 35.6921,
        lng: 139.7022,
        mapsQuery: "いきなり！ステーキ 新宿"
    },
    {
        name: "第一三共 口內炎貼 (溶化型)",
        reason: "Threads 封神神物！會隨時間溶解，不需要撕除，迅速緩解嘴破。",
        category: "伴手禮",
        type: "shop",
        region: "全日本",
        mapsQuery: "松本清 東京"
    },
    {
        name: "Lypo-C 維他命 C",
        reason: "被譽為「美白神器」，吸收率極高，脆友激推回購品。",
        category: "伴手禮",
        type: "shop",
        region: "全日本",
        mapsQuery: "Lypo-C 取扱店"
    },
    {
        name: "小林製藥 一滴消臭元",
        reason: "如廁救星，一滴即可瞬間消除異味，攜帶超方便。",
        category: "伴手禮",
        type: "shop",
        region: "全日本",
        mapsQuery: "小林製藥 一滴消臭元"
    },
    {
        name: "FANCL 纖體錠",
        reason: "大餐救星，幫助代謝並減少油脂與糖分吸收。",
        category: "伴手禮",
        type: "shop",
        region: "全日本",
        mapsQuery: "FANCL 銀座"
    },
    {
        name: "BEAMS SUPER Spiral Cable",
        reason: "高顏值螺旋充電線，既實用又是時尚配件，Threads 爆紅品。",
        category: "文具",
        type: "shop",
        region: "全日本",
        lat: 35.6705,
        lng: 139.7640,
        mapsQuery: "BEAMS 銀座"
    },
    {
        name: "TOKYO RICH CHEESECAKE",
        reason: "口感極其濃郁的起司蛋糕，網友建議一定要多買幾盒。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "TOKYO RICH CHEESECAKE 東京車站"
    },
    {
        name: "MUJI 鹽奶油拿鐵",
        reason: "鹹甜滋味比例極佳，是許多人後悔在東京沒多掃幾袋的遺珠。",
        category: "伴手禮",
        type: "shop",
        region: "全日本",
        mapsQuery: "無印良品 銀座"
    },
    {
        name: "Press Butter Sand",
        reason: "經典焦糖奶油夾心餅乾，酥脆外殼與流心焦糖完美結合。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        lat: 35.6815,
        lng: 139.7672,
        mapsQuery: "Press Butter Sand 東京車站"
    }
];

