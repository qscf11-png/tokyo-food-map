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
    },
    // ===== 從 Threads 搜尋 + 美食彙整文章擴充的東京名單 (2026 更新) =====
    // --- 拉麵 / 沾麵 ---
    {
        name: "らぁ麺や 嶋",
        reason: "Tabelog 高分榜首，細膩淡麗系醬油拉麵，湯頭乾淨優雅。",
        category: "拉麵",
        type: "food",
        region: "東京",
        mapsQuery: "らぁ麺や 嶋 新宿"
    },
    {
        name: "中華そば 鴨福",
        reason: "以合鴨與地雞熬製湯頭，風味層次豐富。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.65831,
        lng: 139.32855,
        mapsQuery: "中華そば 鴨福 八王子"
    },
    {
        name: "むかん (牡蠣拉麵)",
        reason: "獨特牡蠣鹽味拉麵，食材講究、口感創新。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.68388,
        lng: 139.68327,
        mapsQuery: "むかん 中野 ラーメン"
    },
    {
        name: "Homemade Ramen 麦苗",
        reason: "不使用化學調味，天然食材熬製的米其林級拉麵。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.68672,
        lng: 139.77483,
        mapsQuery: "ホームメイドラーメン 麦苗 大森"
    },
    {
        name: "宍道湖しじみ中華蕎麦 琥珀",
        reason: "以蜆貝熬製的清澈湯頭，鮮甜回甘。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.55125,
        lng: 139.71119,
        mapsQuery: "宍道湖しじみ中華蕎麦 琥珀 蒲田"
    },
    {
        name: "中華そば しば田",
        reason: "把樸實中華そば做到極致，湯麵相得益彰。",
        category: "拉麵",
        type: "food",
        region: "東京",
        mapsQuery: "中華そば しば田 狛江"
    },
    {
        name: "麺屋 吉左右",
        reason: "濃厚豚骨魚介湯底配直麵，老饕激推。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.66813,
        lng: 139.80991,
        mapsQuery: "麺屋 吉左右 木場"
    },
    {
        name: "中華ラーメン 多賀野",
        reason: "長年排隊名店，醬油拉麵極具代表性。",
        category: "拉麵",
        type: "food",
        region: "東京",
        mapsQuery: "中華ラーメン 多賀野 荏原中延"
    },
    {
        name: "燦燦斗",
        reason: "夜間限定短時營業，豚骨魚介湯頭值得排隊。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.76548,
        lng: 139.7274,
        mapsQuery: "燦燦斗 東十条"
    },
    {
        name: "手打ち 陰日向",
        reason: "超寬手打麵搭濃郁湯底，創新風格令人驚艷。",
        category: "拉麵",
        type: "food",
        region: "東京",
        mapsQuery: "手打ち 陰日向 府中"
    },
    {
        name: "無敵家",
        reason: "池袋排隊名店，濃厚豚骨拉麵配厚切叉燒。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.72692,
        lng: 139.71163,
        mapsQuery: "無敵家 池袋"
    },
    {
        name: "麺屋 翔 本店",
        reason: "新宿拉麵前三名，濃厚鹽味雞湯拉麵必吃。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.6966,
        lng: 139.69659,
        mapsQuery: "麺屋 翔 新宿"
    },
    {
        name: "蔦 (Tsuta)",
        reason: "米其林一星醬油拉麵，松露香氣細膩高雅。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.7407,
        lng: 139.73503,
        mapsQuery: "Japanese Soba Noodles 蔦 巣鴨"
    },
    {
        name: "一蘭 上野",
        reason: "知名豚骨拉麵連鎖，獨立座位輕鬆好上手。",
        category: "拉麵",
        type: "food",
        region: "東京",
        lat: 35.70843,
        lng: 139.77355,
        mapsQuery: "一蘭 上野"
    },
    // --- 燒肉 / 壽喜燒 ---
    {
        name: "六歌仙",
        reason: "超人氣 A5 和牛燒肉吃到飽，肉量驚人。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.69339,
        lng: 139.69885,
        mapsQuery: "焼肉 六歌仙 新宿"
    },
    {
        name: "大塚 A Bull",
        reason: "平價黑毛和牛燒肉，CP 值極高。",
        category: "燒肉",
        type: "food",
        region: "東京",
        mapsQuery: "A Bull 大塚 焼肉"
    },
    {
        name: "聽屋 (POUND-YA)",
        reason: "以重量計價的黑毛和牛，吃多少算多少。",
        category: "燒肉",
        type: "food",
        region: "東京",
        lat: 35.71976,
        lng: 139.56596,
        mapsQuery: "ポンドや 吉祥寺 焼肉"
    },
    {
        name: "淺草今半 國際通本店",
        reason: "百年壽喜燒老店，秘傳醬汁配黑毛和牛。",
        category: "壽喜燒",
        type: "food",
        region: "東京",
        mapsQuery: "浅草今半 国際通り本店"
    },
    // --- 壽司 / 海鮮 ---
    {
        name: "壽司大",
        reason: "豐洲超人氣板前壽司，產地直送新鮮無比。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.64448,
        lng: 139.78209,
        mapsQuery: "寿司大 豊洲市場"
    },
    {
        name: "大和壽司",
        reason: "豐洲排隊神店，鮪魚前腹肉必點。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.6450,
        lng: 139.7864,
        mapsQuery: "大和寿司 豊洲市場"
    },
    {
        name: "根室花丸 (迴轉壽司)",
        reason: "北海道直送的高 CP 值迴轉壽司。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.67177,
        lng: 139.76219,
        mapsQuery: "根室花まる 銀座"
    },
    {
        name: "つじ半",
        reason: "招牌『ぜいたく丼』海鮮珠寶盒堆滿多種海味。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.68076,
        lng: 139.7716,
        mapsQuery: "つじ半 日本橋"
    },
    {
        name: "雛鮨 (壽司吃到飽)",
        reason: "高級壽司吃到飽，海膽鮪魚任你夾。",
        category: "壽司",
        type: "food",
        region: "東京",
        lat: 35.73472,
        lng: 139.75435,
        mapsQuery: "雛鮨 銀座"
    },
    {
        name: "蟹道樂",
        reason: "螃蟹料理專門店，多種蟹料理一次滿足。",
        category: "海鮮",
        type: "food",
        region: "東京",
        lat: 35.69229,
        lng: 139.70533,
        mapsQuery: "かに道楽 新宿"
    },
    {
        name: "玄品 河豚",
        reason: "平價享用河豚全餐，刺身與火鍋一應俱全。",
        category: "海鮮",
        type: "food",
        region: "東京",
        mapsQuery: "玄品 ふぐ 新宿"
    },
    // --- 炸豬排 / 炸牛排 ---
    {
        name: "牛かつ もと村",
        reason: "外酥內嫩的炸牛排，可自烤至喜好熟度。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.6977,
        lng: 139.77155,
        mapsQuery: "牛かつ もと村 渋谷"
    },
    {
        name: "まい泉 (邁泉豬排)",
        reason: "招牌軟嫩炸豬排三明治，入口即化。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.6680,
        lng: 139.7093,
        mapsQuery: "とんかつ まい泉 青山本店"
    },
    {
        name: "とんかつ 山家",
        reason: "上野平價炸豬排定食，份量厚實。",
        category: "炸豬排/牛排",
        type: "food",
        region: "東京",
        lat: 35.70828,
        lng: 139.77545,
        mapsQuery: "とんかつ 山家 御徒町"
    },
    // --- 鰻魚 ---
    {
        name: "名代 宇奈とと",
        reason: "超平價鰻魚飯，銅板價也能吃到炭烤鰻魚。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.71113,
        lng: 139.77489,
        mapsQuery: "名代 宇奈とと 上野"
    },
    {
        name: "うな鐵 (惠比壽店)",
        reason: "單點吃到撐，鰻魚油脂肥美、炭香十足。",
        category: "鰻魚",
        type: "food",
        region: "東京",
        lat: 35.71191,
        lng: 139.79807,
        mapsQuery: "うな鐵 恵比寿"
    },
    // --- 咖啡甜點 / 麵包 ---
    {
        name: "HARBS",
        reason: "招牌水果千層蛋糕，份量大、口感清爽。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.65981,
        lng: 139.72947,
        mapsQuery: "HARBS 六本木"
    },
    {
        name: "千疋屋總本店",
        reason: "百年高級水果店，水果聖代奢華新鮮。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.68686,
        lng: 139.77334,
        mapsQuery: "千疋屋総本店 日本橋"
    },
    {
        name: "淺草花月堂",
        reason: "日銷數千個的巨大菠蘿麵包，外酥內軟。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.71461,
        lng: 139.79519,
        mapsQuery: "浅草 花月堂 メロンパン"
    },
    {
        name: "木村家總本店",
        reason: "百年紅豆麵包創始店，酒種紅豆麵包必嘗。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.67171,
        lng: 139.76522,
        mapsQuery: "木村家總本店 銀座"
    },
    {
        name: "椿山莊 (庭園下午茶)",
        reason: "庭園景觀下午茶，環境典雅、甜點精緻。",
        category: "咖啡甜點",
        type: "food",
        region: "東京",
        lat: 35.71221,
        lng: 139.72556,
        mapsQuery: "ホテル椿山荘東京"
    },
    // ===== 大阪美食 (2026 擴充) =====
    {
        name: "きじ お好み燒",
        reason: "新梅田食堂街名店，摩登燒香氣十足、麵體紮實。",
        category: "大阪燒",
        type: "food",
        region: "大阪",
        mapsQuery: "きじ お好み焼き 新梅田食道街"
    },
    {
        name: "八重勝 串炸",
        reason: "新世界排隊名店，外酥內嫩、醬汁經典（禁止二次沾醬）。",
        category: "串炸",
        type: "food",
        region: "大阪",
        lat: 34.64968,
        lng: 135.506,
        mapsQuery: "八重勝 串カツ 新世界"
    },
    {
        name: "だるま 達摩串炸",
        reason: "大阪串炸代表，元祖醬料串炸必嘗。",
        category: "串炸",
        type: "food",
        region: "大阪",
        mapsQuery: "串かつ だるま 道頓堀"
    },
    {
        name: "たこ家道頓堀 くくる",
        reason: "招牌大章魚『驚愕章魚燒』份量驚人。",
        category: "章魚燒",
        type: "food",
        region: "大阪",
        mapsQuery: "たこ家道頓堀くくる 本店"
    },
    {
        name: "会津屋 (元祖章魚燒)",
        reason: "章魚燒元祖，無醬原味更能吃出高湯麵糊香。",
        category: "章魚燒",
        type: "food",
        region: "大阪",
        lat: 34.70359,
        lng: 135.50028,
        mapsQuery: "会津屋 たこ焼き 難波"
    },
    {
        name: "蟹道樂 道頓堀本店",
        reason: "道頓堀大螃蟹招牌地標，螃蟹全餐豐盛。",
        category: "海鮮",
        type: "food",
        region: "大阪",
        mapsQuery: "かに道楽 道頓堀本店"
    },
    {
        name: "北極星 蛋包飯",
        reason: "蛋包飯發源店，蛋皮滑嫩、番茄醬汁懷舊。",
        category: "蛋包飯",
        type: "food",
        region: "大阪",
        mapsQuery: "北極星 オムライス 心斎橋"
    },
    {
        name: "どうとんぼり 神座 (梅田店)",
        reason: "獨特白菜甜味醬油拉麵，深夜也好吃。",
        category: "拉麵",
        type: "food",
        region: "大阪",
        lat: 34.70437,
        lng: 135.49912,
        mapsQuery: "どうとんぼり 神座 道頓堀"
    },
    {
        name: "麵屋 丈六",
        reason: "高井田系濃厚醬油拉麵，麵體粗實有嚼勁。",
        category: "拉麵",
        type: "food",
        region: "大阪",
        lat: 34.66375,
        lng: 135.50487,
        mapsQuery: "麺屋 丈六 大阪"
    },
    {
        name: "美津の 大阪燒",
        reason: "道頓堀人氣大阪燒，食材新鮮、醬汁夠味。",
        category: "大阪燒",
        type: "food",
        region: "大阪",
        lat: 34.66837,
        lng: 135.50322,
        mapsQuery: "美津の お好み焼き 道頓堀"
    },
    {
        name: "あぶりや 燒肉吃到飽",
        reason: "國產牛燒肉吃到飽，CP 值高、選擇豐富。",
        category: "燒肉",
        type: "food",
        region: "大阪",
        mapsQuery: "あぶりや 難波 焼肉"
    },
    {
        name: "肉匠 なか田",
        reason: "高級 A5 黑毛和牛燒肉，適合慶祝場合。",
        category: "燒肉",
        type: "food",
        region: "大阪",
        mapsQuery: "肉匠 なか田 道頓堀"
    },
    {
        name: "宇治園 (抹茶刨冰)",
        reason: "心齋橋老茶舖，正宗抹茶刨冰與聖代。",
        category: "抹茶甜點",
        type: "food",
        region: "大阪",
        lat: 34.67309,
        lng: 135.50148,
        mapsQuery: "宇治園 心斎橋本店"
    },
    {
        name: "551 蓬萊 (豬肉包)",
        reason: "大阪伴手禮代表，現蒸豬肉包熱騰騰必買。",
        category: "點心",
        type: "food",
        region: "大阪",
        mapsQuery: "551蓬莱 本店 難波"
    },
    {
        name: "夫婦善哉",
        reason: "法善寺百年紅豆湯名店，一份兩碗寓意圓滿。",
        category: "甜點",
        type: "food",
        region: "大阪",
        lat: 34.66779,
        lng: 135.5024,
        mapsQuery: "夫婦善哉 法善寺"
    },
    // ===== 京都美食 (2026 擴充) =====
    {
        name: "順正 湯豆腐",
        reason: "清水寺旁名店，以京都好水製作的湯豆腐與湯葉鍋。",
        category: "湯豆腐",
        type: "food",
        region: "京都",
        mapsQuery: "順正 湯豆腐 清水"
    },
    {
        name: "文之助茶屋",
        reason: "百年茶屋，蕨餅與抹茶甘味在地經典。",
        category: "抹茶甜點",
        type: "food",
        region: "京都",
        mapsQuery: "文の助茶屋 本店 東山"
    },
    {
        name: "阿古屋茶屋",
        reason: "京漬物與京野菜茶泡飯吃到飽，清水坂人氣店。",
        category: "京料理",
        type: "food",
        region: "京都",
        lat: 34.99805,
        lng: 135.78093,
        mapsQuery: "阿古屋茶屋 清水"
    },
    {
        name: "本家西尾八ツ橋",
        reason: "生八橋老舖，包餡軟糯是熱門伴手禮。",
        category: "和菓子",
        type: "food",
        region: "京都",
        mapsQuery: "本家西尾八ツ橋 清水店"
    },
    {
        name: "山元麵藏",
        reason: "票選京都第一烏龍麵，麵體 Q 彈、牛蒡天婦羅必點。",
        category: "烏龍麵",
        type: "food",
        region: "京都",
        lat: 35.01427,
        lng: 135.78479,
        mapsQuery: "山元麺蔵 岡崎"
    },
    {
        name: "名代 おめん 銀閣寺",
        reason: "知名冷沾烏龍麵，配大量蔬菜清爽美味。",
        category: "烏龍麵",
        type: "food",
        region: "京都",
        mapsQuery: "おめん 銀閣寺本店"
    },
    {
        name: "日の出 咖哩烏龍麵",
        reason: "南禪寺旁名店，吸滿咖哩湯汁的烏龍麵風味獨特。",
        category: "烏龍麵",
        type: "food",
        region: "京都",
        lat: 35.01626,
        lng: 135.79374,
        mapsQuery: "日の出うどん 南禅寺"
    },
    {
        name: "奧丹 南禪寺",
        reason: "京都湯豆腐代表老舖，豆腐料理水準極高。",
        category: "湯豆腐",
        type: "food",
        region: "京都",
        lat: 35.01244,
        lng: 135.79307,
        mapsQuery: "総本家ゆどうふ奥丹 南禅寺"
    },
    {
        name: "茶寮都路里 祇園",
        reason: "宇治抹茶聖代名店，抹茶控朝聖地。",
        category: "抹茶甜點",
        type: "food",
        region: "京都",
        lat: 35.0037,
        lng: 135.77448,
        mapsQuery: "茶寮都路里 祇園本店"
    },
    {
        name: "祇園德屋",
        reason: "現做蕨餅滑嫩 Q 彈，搭配抹茶絕配。",
        category: "抹茶甜點",
        type: "food",
        region: "京都",
        lat: 35.0025,
        lng: 135.77489,
        mapsQuery: "ぎおん徳屋 祇園"
    },
    {
        name: "十二段家",
        reason: "涮涮鍋與壽喜燒發源店，牛肉品質上乘。",
        category: "壽喜燒",
        type: "food",
        region: "京都",
        lat: 35.00296,
        lng: 135.77534,
        mapsQuery: "十二段家 祇園"
    },
    {
        name: "鍵善良房",
        reason: "祇園百年和菓子舖，黑糖葛切口感獨特。",
        category: "和菓子",
        type: "food",
        region: "京都",
        lat: 35.00401,
        lng: 135.77474,
        mapsQuery: "鍵善良房 四条本店 祇園"
    },
    {
        name: "肉割烹 祇園 牛牛",
        reason: "祇園和牛割烹，肉質鮮嫩、氛圍雅緻。",
        category: "和牛",
        type: "food",
        region: "京都",
        mapsQuery: "肉割烹 祇園 牛牛"
    },
    {
        name: "いづ重 (鯖姿壽司)",
        reason: "八坂神社旁京壽司老店，鯖姿壽司風味經典。",
        category: "壽司",
        type: "food",
        region: "京都",
        mapsQuery: "いづ重 祇園 八坂"
    },
    {
        name: "麵屋 豬一",
        reason: "米其林必比登拉麵，魚介湯頭細膩高雅。",
        category: "拉麵",
        type: "food",
        region: "京都",
        lat: 35.00081,
        lng: 135.76676,
        mapsQuery: "麺屋 猪一 河原町"
    },
    {
        name: "京の焼肉処 弘",
        reason: "京都人氣燒肉，肉質極佳、價格合理。",
        category: "燒肉",
        type: "food",
        region: "京都",
        lat: 35.0097,
        lng: 135.77095,
        mapsQuery: "京の焼肉処 弘 木屋町"
    },
    {
        name: "Smart Coffee",
        reason: "懷舊洋食咖啡店，鬆餅與布丁是招牌。",
        category: "洋食",
        type: "food",
        region: "京都",
        lat: 35.00953,
        lng: 135.76724,
        mapsQuery: "スマート珈琲店 寺町"
    },
    {
        name: "三嶋亭",
        reason: "百年壽喜燒老舖，頂級和牛入口即化。",
        category: "壽喜燒",
        type: "food",
        region: "京都",
        lat: 35.00844,
        lng: 135.76708,
        mapsQuery: "三嶋亭 本店 寺町三条"
    },
    {
        name: "六傳屋",
        reason: "先斗町擔擔麵名店，黑芝麻擔擔麵濃郁順口。",
        category: "拉麵",
        type: "food",
        region: "京都",
        lat: 35.00601,
        lng: 135.77105,
        mapsQuery: "六傳屋 先斗町"
    },
    {
        name: "柚子元 (柚子火鍋)",
        reason: "先斗町柚子鹽味火鍋，清香解膩、肉質鮮嫩。",
        category: "海鮮",
        type: "food",
        region: "京都",
        lat: 35.00496,
        lng: 135.77119,
        mapsQuery: "柚子元 先斗町"
    },
    {
        name: "錦 大安 (生牡蠣)",
        reason: "錦市場牡蠣專門店，多產地生牡蠣與烤牡蠣。",
        category: "海鮮",
        type: "food",
        region: "京都",
        lat: 35.00497,
        lng: 135.76267,
        mapsQuery: "大安 だいやす 錦市場"
    },
    {
        name: "三木雞卵 (玉子燒)",
        reason: "錦市場玉子燒名店，高湯蛋捲鬆軟多汁。",
        category: "京料理",
        type: "food",
        region: "京都",
        mapsQuery: "三木鶏卵 錦市場"
    },
    {
        name: "本家 第一旭",
        reason: "京都車站旁排隊名店，醬油豚骨拉麵 CP 值高。",
        category: "拉麵",
        type: "food",
        region: "京都",
        lat: 34.98669,
        lng: 135.76249,
        mapsQuery: "本家 第一旭 たかばし本店"
    },
    {
        name: "新福菜館 本店",
        reason: "黑色濃醬油湯頭中華拉麵，搭炒飯一絕。",
        category: "拉麵",
        type: "food",
        region: "京都",
        lat: 34.98676,
        lng: 135.76249,
        mapsQuery: "新福菜館 本店 京都"
    },
    {
        name: "鯛匠 HANANA",
        reason: "嵐山米其林平民美食，鯛魚茶泡飯三吃。",
        category: "壽司",
        type: "food",
        region: "京都",
        mapsQuery: "鯛匠 HANANA 嵐山"
    },
    {
        name: "廣川 鰻魚飯",
        reason: "嵐山米其林一星鰻魚飯，肉質肥美值得排隊。",
        category: "鰻魚",
        type: "food",
        region: "京都",
        lat: 35.01696,
        lng: 135.67725,
        mapsQuery: "うなぎ 廣川 嵐山"
    },
    {
        name: "ひさご (親子丼)",
        reason: "高台寺旁名店，半熟蛋與嫩雞的完美親子丼。",
        category: "親子丼",
        type: "food",
        region: "京都",
        lat: 35.00056,
        lng: 135.77882,
        mapsQuery: "ひさご 親子丼 高台寺"
    },
    {
        name: "中村藤吉 京都站店",
        reason: "宇治抹茶名店於京都站的分店，竹筒抹茶聖代必點。",
        category: "抹茶甜點",
        type: "food",
        region: "京都",
        lat: 34.98523,
        lng: 135.75803,
        mapsQuery: "中村藤吉 京都駅店 伊勢丹"
    },
    // ===== 東京餐廳補充 =====
    {
        name: "Peter Luger Steak House Tokyo",
        reason: "紐約 130 年傳奇牛排館首家海外分店，招牌乾式熟成丁骨牛排霸氣分享。",
        category: "牛排",
        type: "food",
        region: "東京",
        lat: 35.64498,
        lng: 139.71397,
        mapsQuery: "Peter Luger Steak House Tokyo 恵比寿"
    },
    // ===== 東京必買 (Threads + 伴手禮排行擴充) =====
    {
        name: "東京香蕉 Tokyo Banana",
        reason: "東京伴手禮銷售冠軍，香蕉造型海綿蛋糕經典必帶。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "東京ばな奈 東京駅"
    },
    {
        name: "NewYork Perfect Cheese",
        reason: "排隊夢幻逸品，薄餅捲入濃郁起司與鮮奶油。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "NewYork Perfect Cheese 東京駅"
    },
    {
        name: "N.Y.C.SAND",
        reason: "焦糖與巧克力雙層夾心餅，在地人也瘋搶。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "N.Y.C.SAND 東京駅"
    },
    {
        name: "砂糖奶油樹 (Sugar Butter Tree)",
        reason: "年銷數千萬片，全麥酥餅夾白巧克力，鹹甜涮嘴。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "シュガーバターの木 東京駅"
    },
    {
        name: "楓糖男孩 The Maple Mania",
        reason: "加拿大楓糖夾心餅，東京車站伴手禮榜常勝軍。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "ザ・メープルマニア 東京駅"
    },
    {
        name: "TOKYO TULIP ROSE",
        reason: "鬱金香花瓣造型餅乾，外型如藝術品、口味多樣。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "TOKYO TULIP ROSE 東京駅"
    },
    {
        name: "NUMBER SUGAR 手工牛奶糖",
        reason: "表參道手工牛奶糖，鹽味與杏仁口味香氣迷人。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "NUMBER SUGAR 表参道本店"
    },
    {
        name: "YOKU MOKU 雪茄蛋捲",
        reason: "南青山老牌洋菓子，酥脆奶香蛋捲送禮首選。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "ヨックモック 南青山本店"
    },
    {
        name: "ECHIRÉ 艾許奶油餅乾",
        reason: "頂級發酵奶油製作，鐵盒餅乾與費南雪奢華。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "ECHIRE 丸の内"
    },
    {
        name: "ねんりん家 年輪蛋糕",
        reason: "號稱東京最好吃的年輪蛋糕，外酥內濕潤。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "ねんりん家 東京駅"
    },
    {
        name: "AUDREY 草莓花束餅乾",
        reason: "草莓奶油花束造型餅乾，少女心爆棚的人氣伴手禮。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "AUDREY 東京 グランスタ"
    },
    {
        name: "東京牛奶起司工坊",
        reason: "鹽味起司夾心餅，奶香濃郁的東京限定點心。",
        category: "伴手禮",
        type: "shop",
        region: "東京",
        mapsQuery: "東京ミルクチーズ工場 東京駅"
    },
    {
        name: "二木の菓子 (上野阿美橫町)",
        reason: "上野阿美橫町零食殿堂，伴手禮一站掃齊、價格實惠。",
        category: "零食",
        type: "shop",
        region: "東京",
        lat: 35.7106,
        lng: 139.7741,
        mapsQuery: "二木の菓子 上野 アメ横"
    },
    {
        name: "OS Drug 平價藥妝",
        reason: "上野、新宿在地平價藥妝，不退稅也常比別家便宜。",
        category: "藥妝",
        type: "shop",
        region: "東京",
        mapsQuery: "OSドラッグ 上野"
    },
    // ===== 鋼彈 / 仙台 / 青森 擴充 (2026) =====
    {
        name: "實物大獨角獸鋼彈立像",
        reason: "台場地標！19.7m 高 1:1 獨角獸鋼彈，夜間有變身燈光秀。⚠️官方宣布 2026 年 8 月底結束展示，把握最後機會！",
        category: "鋼彈",
        type: "spot",
        region: "東京",
        lat: 35.6256,
        lng: 139.7748,
        mapsQuery: "ダイバーシティ東京プラザ ユニコーンガンダム立像"
    },
    {
        name: "The Gundam Base Tokyo",
        reason: "全球最大鋼彈模型旗艦店 (DiverCity 7F)，限定鋼普拉與週邊讓鋼彈迷失心瘋。",
        category: "鋼彈",
        type: "shop",
        region: "東京",
        lat: 35.62542,
        lng: 139.77592,
        mapsQuery: "The Gundam Base Tokyo ダイバーシティ お台場"
    },
    {
        name: "Animate 池袋本店",
        reason: "全球最大動漫週邊旗艦店，鋼彈、模型與各式動漫商品齊全。",
        category: "動漫週邊",
        type: "shop",
        region: "東京",
        lat: 35.73034,
        lng: 139.71525,
        mapsQuery: "アニメイト池袋本店"
    },
    {
        name: "利久 牛舌 (仙台駅店)",
        reason: "仙台牛舌名店代表，厚切炭烤牛舌鮮嫩多汁，套餐附麥飯與牛尾湯。",
        category: "牛舌",
        type: "food",
        region: "仙台",
        lat: 38.26274,
        lng: 140.88032,
        mapsQuery: "牛たん炭焼 利久 仙台駅"
    },
    {
        name: "旨味 太助",
        reason: "炭烤牛舌創始老店之一，傳承元祖風味、炭香十足。",
        category: "牛舌",
        type: "food",
        region: "仙台",
        lat: 38.26489,
        lng: 140.86979,
        mapsQuery: "旨味 太助 仙台 国分町"
    },
    {
        name: "ずんだ茶寮 毛豆甜點",
        reason: "毛豆泥(ずんだ)甜點專門店，毛豆奶昔(ずんだシェイク)清爽必喝。",
        category: "毛豆甜點",
        type: "food",
        region: "仙台",
        mapsQuery: "ずんだ茶寮 仙台駅"
    },
    {
        name: "すし哲",
        reason: "塩釜起家的頂級壽司名店，鮪魚與當季海鮮新鮮度一流。",
        category: "壽司",
        type: "food",
        region: "仙台",
        lat: 38.25893,
        lng: 140.88154,
        mapsQuery: "すし哲 本店 塩釜"
    },
    {
        name: "仙台城跡 (青葉城)",
        reason: "伊達政宗築城遺跡，騎馬銅像與市區夜景眺望點。",
        category: "城跡",
        type: "spot",
        region: "仙台",
        lat: 38.25284,
        lng: 140.85673,
        mapsQuery: "仙台城跡 青葉城"
    },
    {
        name: "瑞鳳殿",
        reason: "伊達政宗的豪華靈廟，桃山風格金碧輝煌、四季皆美。",
        category: "神社寺院",
        type: "spot",
        region: "仙台",
        lat: 38.25047,
        lng: 140.86671,
        mapsQuery: "瑞鳳殿 仙台"
    },
    {
        name: "松島",
        reason: "日本三景之一，260 座小島散布海灣，搭遊覽船賞景一絕。",
        category: "自然景觀",
        type: "spot",
        region: "仙台",
        lat: 38.3718,
        lng: 141.07011,
        mapsQuery: "松島 宮城 観光"
    },
    {
        name: "藏王御釜",
        reason: "翡翠綠的火口湖，隨光線變色，藏王連峰的代表絕景。",
        category: "自然景觀",
        type: "spot",
        region: "仙台",
        lat: 38.1437,
        lng: 140.4519,
        mapsQuery: "蔵王 御釜 宮城"
    },
    {
        name: "萩の月",
        reason: "仙台必買經典名產，鬆軟海綿蛋糕包濃郁卡士達奶餡。",
        category: "伴手禮",
        type: "shop",
        region: "仙台",
        mapsQuery: "萩の月 仙台駅"
    },
    {
        name: "喜久福 (毛豆生奶油大福)",
        reason: "麻糬包毛豆生奶油，冷凍半解凍吃口感最佳，季節限定。",
        category: "伴手禮",
        type: "shop",
        region: "仙台",
        lat: 38.26891,
        lng: 140.88704,
        mapsQuery: "喜久福 仙台駅"
    },
    {
        name: "牛舌仙貝 (牛たん煎餅)",
        reason: "薄脆仙貝帶牛舌香氣，鹹香涮嘴的人氣伴手禮。",
        category: "零食",
        type: "shop",
        region: "仙台",
        mapsQuery: "牛たん煎餅 仙台駅"
    },
    {
        name: "白石溫麵 (白石うーめん)",
        reason: "宮城白石名產短細素麵，不加油、好消化，煮法多變。",
        category: "伴手禮",
        type: "shop",
        region: "仙台",
        mapsQuery: "白石温麺 仙台駅"
    },
    {
        name: "古川市場 のっけ丼",
        reason: "買票券自選海鮮鋪到飯上，DIY 專屬海鮮丼，青森市必吃。",
        category: "海鮮丼",
        type: "food",
        region: "青森",
        mapsQuery: "青森魚菜センター のっけ丼 古川市場"
    },
    {
        name: "鶴龜屋食堂",
        reason: "份量驚人的爆量生魚片蓋飯，鮪魚堆成小山，CP 值爆表。",
        category: "海鮮丼",
        type: "food",
        region: "青森",
        mapsQuery: "鶴亀屋食堂 青森"
    },
    {
        name: "味の札幌 大西 (味噌咖哩牛奶拉麵)",
        reason: "青森獨有的味噌咖哩牛奶拉麵發源名店，濃郁滑順意外順口。",
        category: "拉麵",
        type: "food",
        region: "青森",
        lat: 40.82478,
        lng: 140.7368,
        mapsQuery: "味の札幌 大西 青森"
    },
    {
        name: "弘前城 (弘前公園)",
        reason: "東北賞櫻名所第一，天守閣與護城河櫻吹雪夢幻絕美。",
        category: "城跡",
        type: "spot",
        region: "青森",
        lat: 40.6077,
        lng: 140.4637,
        mapsQuery: "弘前城 弘前公園"
    },
    {
        name: "奧入瀨溪流",
        reason: "原始森林中的溪流秘境，苔蘚與瀑布，秋楓季最迷人。",
        category: "自然景觀",
        type: "spot",
        region: "青森",
        lat: 40.5466,
        lng: 140.9433,
        mapsQuery: "奥入瀬渓流"
    },
    {
        name: "八甲田山 (纜車/樹冰)",
        reason: "冬季樹冰聖地，搭纜車登頂飽覽銀白世界。",
        category: "自然景觀",
        type: "spot",
        region: "青森",
        lat: 40.67838,
        lng: 140.84534,
        mapsQuery: "八甲田ロープウェー 青森"
    },
    {
        name: "睡魔之家 WA RASSE",
        reason: "青森睡魔祭主題館，近距離欣賞巨大睡魔燈籠花車的魄力。",
        category: "博物館",
        type: "spot",
        region: "青森",
        lat: 40.82957,
        lng: 140.73595,
        mapsQuery: "ねぶたの家 ワ・ラッセ 青森"
    },
    {
        name: "青森縣立美術館",
        reason: "奈良美智『青森犬』所在地，現代藝術迷必訪。",
        category: "博物館",
        type: "spot",
        region: "青森",
        lat: 40.80729,
        lng: 140.70089,
        mapsQuery: "青森県立美術館"
    },
    {
        name: "蕪嶋神社",
        reason: "八戶海邊神社，上千隻海鷗環繞，求財運的能量景點。",
        category: "神社寺院",
        type: "spot",
        region: "青森",
        lat: 40.53863,
        lng: 141.55762,
        mapsQuery: "蕪嶋神社 八戸"
    },
    {
        name: "A-FACTORY 蘋果工坊",
        reason: "青森站旁蘋果伴手禮殿堂，現釀蘋果氣泡酒(Cidre)必試。",
        category: "伴手禮",
        type: "shop",
        region: "青森",
        lat: 40.83001,
        lng: 140.73497,
        mapsQuery: "A-FACTORY 青森"
    },
    {
        name: "Patissier's 蘋果派",
        reason: "全國菓子博覽會金賞，酥皮包紅玉蘋果，青森代表伴手禮。",
        category: "甜點",
        type: "shop",
        region: "青森",
        mapsQuery: "ラグノオ アップルパイ 青森"
    },
    {
        name: "青森大蒜仙貝",
        reason: "用青森頂級大蒜製作，濃郁酥脆、一吃上癮。",
        category: "零食",
        type: "shop",
        region: "青森",
        mapsQuery: "青森 にんにくせんべい"
    },
    {
        name: "APPLE SNACK 蘋果乾",
        reason: "保留蘋果酸甜原味的蘋果乾，輕巧好攜帶。",
        category: "零食",
        type: "shop",
        region: "青森",
        mapsQuery: "青森 りんごスナック ドライアップル"
    },
    {
        name: "睡魔金魚羊羹",
        reason: "金魚睡魔造型蘋果風味羊羹，美味又有趣的伴手禮。",
        category: "甜點",
        type: "shop",
        region: "青森",
        mapsQuery: "金魚ねぷた 羊羹 青森"
    },
    {
        name: "干貝糖 (帆立糖)",
        reason: "鎖住青森干貝鮮甜，柔軟有嚼勁，當零食或調味皆宜。",
        category: "零食",
        type: "shop",
        region: "青森",
        mapsQuery: "青森 ホタテ 干し 帆立"
    },
    // ===== 台場 (Odaiba) 購物 / 景點 =====
    {
        name: "DiverCity Tokyo Plaza",
        reason: "台場地標商場，集結 Uniqlo、GU、ABC-Mart 與鋼彈基地，2 樓美食廣場好逛。",
        category: "購物中心",
        type: "shop",
        region: "東京",
        lat: 35.6254,
        lng: 139.7755,
        mapsQuery: "ダイバーシティ東京プラザ お台場"
    },
    {
        name: "AQUA CiTY 台場",
        reason: "可眺望彩虹大橋與自由女神，有 Disney Store、Air BicCamera 與東京拉麵國技館。",
        category: "購物中心",
        type: "shop",
        region: "東京",
        lat: 35.62781,
        lng: 139.773,
        mapsQuery: "アクアシティお台場"
    },
    {
        name: "DECKS 台場一丁目商店街",
        reason: "昭和復古商店街，便宜零食、雜貨與扭蛋，小額伴手禮首選。",
        category: "購物中心",
        type: "shop",
        region: "東京",
        lat: 35.6291,
        lng: 139.7745,
        mapsQuery: "デックス東京ビーチ 台場一丁目商店街"
    },
    {
        name: "お台場章魚燒博物館",
        reason: "集結大阪名店的章魚燒主題館（DECKS 內），一次吃遍多家口味。",
        category: "章魚燒",
        type: "food",
        region: "東京",
        lat: 35.6293,
        lng: 139.7746,
        mapsQuery: "お台場たこ焼きミュージアム デックス東京ビーチ"
    },
    {
        name: "台場海濱公園 (自由女神像)",
        reason: "免費眺望彩虹大橋、自由女神與東京灣夜景的人氣海濱公園。",
        category: "公園",
        type: "spot",
        region: "東京",
        lat: 35.6308,
        lng: 139.7737,
        mapsQuery: "お台場海浜公園 自由の女神像"
    },
    // ===== 八戶 (青森) / 角館 (秋田) 擴充 =====
    {
        name: "八食中心 (八食センター)",
        reason: "青森最大海鮮市場，60+ 店家，現買海鮮可在『七厘村』自助炭烤現吃。",
        category: "市場",
        type: "spot",
        region: "青森",
        lat: 40.5264,
        lng: 141.45349,
        mapsQuery: "八食センター 八戸"
    },
    {
        name: "館鼻岸壁朝市",
        reason: "日本最大級週日早市，300+ 攤位海鮮、小吃、古物，清晨限定超熱鬧。",
        category: "市場",
        type: "spot",
        region: "青森",
        lat: 40.5296,
        lng: 141.5347,
        mapsQuery: "館鼻岸壁朝市 八戸"
    },
    {
        name: "みろく横丁 (屋台村)",
        reason: "八戶屋台村，昭和風小店林立，適合一家家吃喝感受在地夜生活。",
        category: "居酒屋",
        type: "food",
        region: "青森",
        lat: 40.50942,
        lng: 141.49064,
        mapsQuery: "みろく横丁 八戸"
    },
    {
        name: "種差海岸",
        reason: "天然草坪一路鋪到海邊的療癒海岸線，適合散步野餐。",
        category: "自然景觀",
        type: "spot",
        region: "青森",
        lat: 40.5273,
        lng: 141.5662,
        mapsQuery: "種差海岸 八戸"
    },
    {
        name: "味のめん匠 (煮干拉麵)",
        reason: "みろく横丁人氣煮干拉麵，小魚乾湯頭清爽濃郁。",
        category: "拉麵",
        type: "food",
        region: "青森",
        lat: 40.50901,
        lng: 141.49122,
        mapsQuery: "味のめん匠 みろく横丁 八戸"
    },
    {
        name: "八戶煎餅湯 (せんべい汁)",
        reason: "南部鄉土料理，南部煎餅煮進醬油雞湯，吸湯後 QQ 有嚼勁。",
        category: "鄉土料理",
        type: "food",
        region: "青森",
        mapsQuery: "八戸 せんべい汁"
    },
    {
        name: "南部煎餅",
        reason: "八戶名產烤煎餅，原味或夾餡都涮嘴，經典伴手禮。",
        category: "伴手禮",
        type: "shop",
        region: "青森",
        mapsQuery: "南部せんべい 八戸"
    },
    {
        name: "角館 武家屋敷通",
        reason: "保存完整的江戶武家宅邸街道，黑板塀與枝垂櫻宛如時代劇場景。",
        category: "老街",
        type: "spot",
        region: "秋田",
        lat: 39.6015,
        lng: 140.561,
        mapsQuery: "角館 武家屋敷通"
    },
    {
        name: "檜木内川堤 櫻並木",
        reason: "約 2km 染井吉野櫻花隧道，東北三大賞櫻名所、國家名勝。",
        category: "自然景觀",
        type: "spot",
        region: "秋田",
        lat: 39.6042,
        lng: 140.5557,
        mapsQuery: "檜木内川堤 桜並木 角館"
    },
    {
        name: "お食事処 桜の里 (櫻之里)",
        reason: "角館人氣名店，比內地雞親子丼與稻庭烏龍麵一次滿足。",
        category: "親子丼",
        type: "food",
        region: "秋田",
        lat: 39.6006,
        lng: 140.5614,
        mapsQuery: "お食事処 桜の里 角館"
    },
    {
        name: "食事処 ふきや",
        reason: "可吃到佐藤養助正宗稻庭烏龍麵，滑順細麵是日本三大烏龍麵之一。",
        category: "烏龍麵",
        type: "food",
        region: "秋田",
        mapsQuery: "食事処 ふきや 角館"
    },
    {
        name: "月のしずく (烤米棒鍋)",
        reason: "旬菜料理名店，秋田烤米棒鍋(きりたんぽ)暖心必嘗。",
        category: "鄉土料理",
        type: "food",
        region: "秋田",
        mapsQuery: "月のしずく 角館"
    },
    {
        name: "あきたプリン亭",
        reason: "秋田布丁專賣，濃郁滑嫩，逛武家屋敷的甜點補給站。",
        category: "甜點",
        type: "food",
        region: "秋田",
        lat: 39.6009,
        lng: 140.5613,
        mapsQuery: "あきたプリン亭 角館"
    },
    {
        name: "樺細工 (櫻皮工藝)",
        reason: "角館傳統工藝，櫻樹皮製茶筒與飾品，質感溫潤獨特（樺細工傳承館可參觀）。",
        category: "工藝品",
        type: "shop",
        region: "秋田",
        lat: 39.59953,
        lng: 140.56116,
        mapsQuery: "角館 樺細工伝承館"
    },
    {
        name: "安藤釀造 本店",
        reason: "百年釀造老舖，味噌、醬油與醃漬物，磚造建築也好拍。",
        category: "伴手禮",
        type: "shop",
        region: "秋田",
        mapsQuery: "安藤醸造 本店 角館"
    },
    // ===== 大阪/京都 觀光地圖擴充 (姪子行程) =====
    {
        name: "心齋橋筋商店街",
        reason: "大阪最熱鬧的有頂商店街，藥妝、服飾、美食一條龍逛到飽。",
        category: "購物中心",
        type: "shop",
        region: "大阪",
        lat: 34.67335,
        lng: 135.50137,
        mapsQuery: "心斎橋筋商店街"
    },
    {
        name: "心齋橋 PARCO",
        reason: "心齋橋潮流百貨，集結動漫、扭蛋、潮牌與美食樓層。",
        category: "購物中心",
        type: "shop",
        region: "大阪",
        lat: 34.67387,
        lng: 135.50097,
        mapsQuery: "心斎橋PARCO"
    },
    {
        name: "寶可夢中心大阪 DX",
        reason: "大丸心齋橋 13F，全西日本最大寶可夢中心，皮卡丘迷必朝聖。",
        category: "玩具",
        type: "shop",
        region: "大阪",
        lat: 34.672,
        lng: 135.5006,
        mapsQuery: "ポケモンセンターオーサカDX 大丸心斎橋"
    },
    {
        name: "道頓堀 (固力果跑跑人)",
        reason: "大阪地標！固力果看板、運河與滿街美食，必拍打卡。",
        category: "老街",
        type: "spot",
        region: "大阪",
        lat: 34.66903,
        lng: 135.50157,
        mapsQuery: "道頓堀 グリコサイン"
    },
    {
        name: "道頓堀黑船 (鰻魚飯)",
        reason: "東心齋橋鰻魚飯名店，Google 近滿分，只賣中午幾小時、建議預約。",
        category: "鰻魚",
        type: "food",
        region: "大阪",
        lat: 34.6724,
        lng: 135.5014,
        mapsQuery: "道頓堀黒船 東心斎橋"
    },
    {
        name: "難波八阪神社",
        reason: "巨大獅子頭舞台超震撼，祈求勝運與生意興隆的人氣神社。",
        category: "神社寺院",
        type: "spot",
        region: "大阪",
        lat: 34.66148,
        lng: 135.49673,
        mapsQuery: "難波八阪神社"
    },
    {
        name: "新世界串カツ いっとく 総本店",
        reason: "新世界人氣串炸，種類多、氣氛熱鬧（記得醬汁不能沾兩次）。",
        category: "串炸",
        type: "food",
        region: "大阪",
        lat: 34.6527,
        lng: 135.5058,
        mapsQuery: "新世界 串カツ いっとく 総本店"
    },
    {
        name: "通天閣",
        reason: "新世界地標展望塔，可俯瞰大阪、摸幸運神 Billiken 腳底。",
        category: "展望台",
        type: "spot",
        region: "大阪",
        lat: 34.65254,
        lng: 135.50631,
        mapsQuery: "通天閣"
    },
    {
        name: "一蘭拉麵 道頓堀店",
        reason: "知名豚骨拉麵，獨立座位、可自選濃度，道頓堀也有店。",
        category: "拉麵",
        type: "food",
        region: "大阪",
        lat: 34.66845,
        lng: 135.50321,
        mapsQuery: "一蘭 道頓堀店"
    },
    {
        name: "海遊館",
        reason: "世界級大型水族館，巨大鯨鯊優游的太平洋大水槽必看，親子最愛。",
        category: "水族館",
        type: "spot",
        region: "大阪",
        lat: 34.65455,
        lng: 135.42892,
        mapsQuery: "海遊館 大阪港"
    },
    {
        name: "味乃家 大阪燒",
        reason: "難波 60 年米其林推薦大阪燒，綜合燒料多味濃，必吃名店。",
        category: "大阪燒",
        type: "food",
        region: "大阪",
        lat: 34.6646,
        lng: 135.5016,
        mapsQuery: "味乃家 難波本店"
    },
    {
        name: "KITTE 大阪",
        reason: "JR 大阪站新商場，集結全國名店與大阪在地美食、伴手禮。",
        category: "購物中心",
        type: "shop",
        region: "大阪",
        lat: 34.70062,
        lng: 135.494,
        mapsQuery: "KITTE大阪 JR大阪駅"
    },
    {
        name: "大阪城",
        reason: "大阪象徵地標，金碧天守閣與護城河，春櫻秋楓皆美。",
        category: "城跡",
        type: "spot",
        region: "大阪",
        lat: 34.68737,
        lng: 135.52586,
        mapsQuery: "大阪城 天守閣"
    },
    {
        name: "黑門市場",
        reason: "大阪的廚房，現烤海鮮、和牛串、河豚與水果一路吃過去。",
        category: "市場",
        type: "spot",
        region: "大阪",
        lat: 34.66371,
        lng: 135.50693,
        mapsQuery: "黒門市場"
    },
    {
        name: "Joshin Super Kids Land 日本橋本店",
        reason: "日本橋電電城大型玩具模型店，鋼普拉、鐵道模型、扭蛋齊全。",
        category: "玩具",
        type: "shop",
        region: "大阪",
        lat: 34.65929,
        lng: 135.50561,
        mapsQuery: "ジョーシン スーパーキッズランド本店 日本橋"
    },
    {
        name: "Taito Station 日本橋",
        reason: "日本橋大型電玩遊樂場，夾娃娃、街機、扭蛋一次玩個夠。",
        category: "遊樂場",
        type: "spot",
        region: "大阪",
        lat: 34.66035,
        lng: 135.50614,
        mapsQuery: "タイトーステーション 日本橋"
    },
    {
        name: "箕面大瀧 (箕面瀑布)",
        reason: "大阪近郊賞楓秘境，沿溪步道走到 33m 大瀑布，順吃炸楓葉。",
        category: "自然景觀",
        type: "spot",
        region: "大阪",
        lat: 34.85389,
        lng: 135.47197,
        mapsQuery: "箕面大滝"
    },
    {
        name: "勝尾寺",
        reason: "箕面『勝運』達摩寺，滿山紅色不倒翁超好拍，祈求心想事成。",
        category: "神社寺院",
        type: "spot",
        region: "大阪",
        lat: 34.86562,
        lng: 135.49226,
        mapsQuery: "勝尾寺 箕面"
    },
    {
        name: "大鳥大社",
        reason: "和泉國一之宮（堺市），千年古社，求勝運與開運的能量景點。",
        category: "神社寺院",
        type: "spot",
        region: "大阪",
        lat: 34.53628,
        lng: 135.46048,
        mapsQuery: "大鳥大社 堺"
    },
    {
        name: "綱敷天神社 (網敷天滿宮)",
        reason: "梅田鬧區中的天神社，祭祀學問之神菅原道真，求學業順利。",
        category: "神社寺院",
        type: "spot",
        region: "大阪",
        lat: 34.7036,
        lng: 135.5024,
        mapsQuery: "綱敷天神社 御本社 大阪"
    },
    {
        name: "Henry's Pizza (谷町四丁目)",
        reason: "潮流藝術家 VERDY 開的紐約風披薩，明星愛店，餅皮香氣十足（位於大阪谷町，非京都）。",
        category: "洋食",
        type: "food",
        region: "大阪",
        lat: 34.6817,
        lng: 135.5147,
        mapsQuery: "Henry's Pizza 谷町四丁目 大阪"
    },
    {
        name: "千代松 かつ丼",
        reason: "地圖標記的炸豬排丼店（尚未查得確切座標，導航以店名搜尋）。",
        category: "炸豬排/牛排",
        type: "food",
        region: "大阪",
        mapsQuery: "千代松 かつ丼 大阪 道頓堀"
    },
    {
        name: "麵太郎拉麵",
        reason: "地圖標記的拉麵店（尚未查得確切座標，導航以店名搜尋）。",
        category: "拉麵",
        type: "food",
        region: "大阪",
        mapsQuery: "麺太郎 ラーメン 大阪"
    },
    {
        name: "蔥蔥章魚燒",
        reason: "道頓堀運河旁的章魚燒攤（尚未查得確切座標，導航以店名搜尋）。",
        category: "章魚燒",
        type: "food",
        region: "大阪",
        mapsQuery: "ねぎ たこ焼き 道頓堀"
    },
    {
        name: "丸 はるみ 哈密瓜霜淇淋",
        reason: "新世界附近的哈密瓜霜淇淋（尚未查得確切座標，導航以店名搜尋）。",
        category: "甜點",
        type: "food",
        region: "大阪",
        mapsQuery: "はるみ メロンソフトクリーム 新世界"
    },
    {
        name: "Liberty Walk Osaka",
        reason: "改裝車品牌 Liberty Walk 的大阪據點，車迷打卡點（座標請再確認）。",
        category: "汽車",
        type: "shop",
        region: "大阪",
        mapsQuery: "Liberty Walk Osaka"
    },
    {
        name: "金閣寺 (鹿苑寺)",
        reason: "京都必訪世界遺產，金箔閣樓倒映鏡湖池，金光燦爛。",
        category: "神社寺院",
        type: "spot",
        region: "京都",
        lat: 35.03953,
        lng: 135.72954,
        mapsQuery: "金閣寺"
    },
    {
        name: "伏見稻荷大社",
        reason: "千本鳥居一路綿延上山，朱紅隧道是京都最具代表性的絕景。",
        category: "神社寺院",
        type: "spot",
        region: "京都",
        lat: 34.96752,
        lng: 135.77971,
        mapsQuery: "伏見稲荷大社"
    },
    {
        name: "月下美人 醬油團子",
        reason: "地圖標記的醬油團子（尚未查得確切座標，導航以店名搜尋）。",
        category: "和菓子",
        type: "food",
        region: "京都",
        mapsQuery: "月下美人 みたらし団子 京都"
    },
    // ===== 青森海鮮 + 蕎麥麵 擴充 =====
    {
        name: "大間鮪魚 (大間崎)",
        reason: "本州最北端大間崎，現撈黑鮪魚號稱『黑鑽石』，海鮮丼鮪魚肥美無比。",
        category: "海鮮",
        type: "food",
        region: "青森",
        lat: 41.5278,
        lng: 140.9103,
        mapsQuery: "大間崎 大間まぐろ 食堂"
    },
    {
        name: "みなと食堂 (八戶)",
        reason: "八戶陸奧湊名店，招牌比目魚漬け丼三吃，清晨就能吃到。",
        category: "海鮮丼",
        type: "food",
        region: "青森",
        lat: 40.52395,
        lng: 141.52892,
        mapsQuery: "みなと食堂 八戸 陸奥湊"
    },
    {
        name: "もりや商店 (浅虫溫泉)",
        reason: "浅虫溫泉排隊名店，陸奧灣帆立貝定食鮮甜肥美。",
        category: "海鮮",
        type: "food",
        region: "青森",
        lat: 40.90144,
        lng: 140.85661,
        mapsQuery: "もりや商店 浅虫温泉"
    },
    {
        name: "食事処 おさない",
        reason: "青森駅旁老牌食堂，名物帆立貝燒味噌與新鮮海鮮丼。",
        category: "海鮮",
        type: "food",
        region: "青森",
        lat: 40.8256,
        lng: 140.7356,
        mapsQuery: "おさない 青森駅前"
    },
    {
        name: "神田 藪そば",
        reason: "百年江戶蕎麥御三家『藪』，清雅高湯沾汁配細蕎麥麵。",
        category: "蕎麥麵",
        type: "food",
        region: "東京",
        lat: 35.696,
        lng: 139.7693,
        mapsQuery: "神田藪そば 淡路町"
    },
    {
        name: "並木藪蕎麦",
        reason: "淺草雷門旁百年藪流蕎麥，濃郁沾汁是在地人心頭好。",
        category: "蕎麥麵",
        type: "food",
        region: "東京",
        lat: 35.7095,
        lng: 139.7957,
        mapsQuery: "並木藪蕎麦 浅草"
    },
    {
        name: "神田まつや",
        reason: "創業 1884 年江戶蕎麥名店，職人每日現打二八蕎麥麵。",
        category: "蕎麥麵",
        type: "food",
        region: "東京",
        lat: 35.69612,
        lng: 139.76878,
        mapsQuery: "神田まつや"
    },
    {
        name: "室町砂場",
        reason: "『天もり・天ざる』發源的砂場流派江戶蕎麥老舖。",
        category: "蕎麥麵",
        type: "food",
        region: "東京",
        lat: 35.6894,
        lng: 139.77179,
        mapsQuery: "室町砂場 日本橋"
    },
    {
        name: "更科堀井",
        reason: "更科流派老舖，雪白『御前そば』口感細緻高雅。",
        category: "蕎麥麵",
        type: "food",
        region: "東京",
        lat: 35.65849,
        lng: 139.73679,
        mapsQuery: "更科堀井 麻布十番"
    },
    {
        name: "本家尾張屋 本店",
        reason: "創業 1465 年京都蕎麥老舖，多層『寶來そば』必試。",
        category: "蕎麥麵",
        type: "food",
        region: "京都",
        lat: 35.0127,
        lng: 135.7616,
        mapsQuery: "本家尾張屋 本店 京都"
    },
    {
        name: "そばきり 有喜屋 (角館)",
        reason: "角館手打蕎麥名店，蕎麥配比內地雞親子丼的鄉土組合。",
        category: "蕎麥麵",
        type: "food",
        region: "秋田",
        lat: 39.5998,
        lng: 140.5615,
        mapsQuery: "そばきり 有喜屋 角館"
    }
];
