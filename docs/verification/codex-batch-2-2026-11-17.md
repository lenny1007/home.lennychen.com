# 查證紀錄：Codex 第二批 16 篇（2026-11-17）

產出：Codex CLI（gpt-6-astra，effort high，ChatGPT 訂閱額度），一篇一個 `codex exec`，只讀本機已下載的台灣官方說明書／原廠保養頁，不上網。每篇附 `docs/codex/evidence/<slug>.md`。
來源：Claude 先收集，存在 `home-knowledge-extractor\manuals\`（不進 repo），README 記錄文件編號與官方網址。

方法（跨模型）：每篇派 Claude fresh-context agent，以推翻為目標逐句判定 SUPPORTED／UNSUPPORTED／CONTRADICTED／ATTRIBUTION-WRONG。Codex 的 evidence 只當線索，每條都回原文確認。代碼表、表格、數字與所有 OCR 掃描檔都把頁面轉成圖目視核對。修正後再派一個 fresh-context agent 複查所有修正句。

| 文章 | 首次判定 | 修正 |
|---|---|---|
| panasonic-washer-error-codes | 通過（18/18） | 無 |
| hitachi-washer-error-codes | 通過（17/17） | 無 |
| lg-washer-error-codes | 通過（26/26） | 無 |
| sampo-washer-error-codes | 不通過（1 項） | ES-P14DV／P16DV「代碼欄空白」與原文矛盾：頁面圖印有 E1–E5、Ed、E9（OCR 漏抓七段字型），改為「代碼表與上表大致相同，E1 只寫不能注水」；Codex evidence 同步更正 |
| washer-odor | 通過（32/32） | 無 |
| washer-drum-vs-top-load-care | 不通過（1 項） | 開頭把品牌差異寫成「滾筒與直立式的差別」（LG WT 直立式也要擦機門），改為依型號說明；槽洗表註明三星 WW「不加洗劑」只限該機型（三星 WA、Panasonic DW 槽洗用含氯漂白劑）；小標改「依型號對照」；takeaway 補「僅限適用型號」 |
| panasonic-dehumidifier-troubleshooting | 通過（24/24） | 無 |
| sampo-dehumidifier-troubleshooting | 不通過（1 項） | H1 處理步驟混入保養章節的「關電、拔插頭」，改為代碼表原文三步，另註明清洗濾網前依保養章節關電拔插頭 |
| dehumidifier-filter-tank-cleaning | 不通過（1 項） | Panasonic「停機、拔插頭」改原文「拔下電源插頭並排掉水箱的水」；三菱「內層濾網」改原文「濾網」；標題「清潔頻率」改「清潔方式」（日立段無頻率） |
| tatung-rice-cooker-water-ratio | 通過（25/25） | 無 |
| tatung-rice-cooker-descaling | 通過（23/23） | 無 |
| philips-air-fryer-cleaning | 通過（32/32） | 小標「炸籃、烤盤、內鍋」改手冊零件名「炸鍋、網籃、炸鍋底網」 |
| cast-iron-seasoning | 不通過（1 項） | 「日常鑄鐵鍋養鍋，Lodge《How to Clean》的順序」改為「Lodge《How to Clean》的日常清洗三步」（原文是清洗步驟，且只代表 Lodge） |
| nonstick-pan-care | 通過 | 無 |
| stainless-pan-sticking | 不通過（1 項） | 標題「三品牌白斑保養」改「白斑、加鹽保養」（Fissler 沒有白斑處理） |
| cutting-board-mold | 通過（22/22） | 無 |

觀察：Codex 這批錯誤率明顯比首批低（16 篇共 6 項必修，首批 13 篇平均 2–6 項），主要錯型是「把一家／一型的說法寫成通則」與「OCR 漏字被當成原文沒寫」。後者是新錯型：掃描檔一律要看頁面圖。

限制：
- 氣炸鍋只找到飛利浦台灣可用的官方說明書，所以「跨品牌氣炸鍋清潔」改寫成單一品牌篇。
- 鍋具類來源是原廠保養頁（Lodge、All-Clad、Fissler、John Boos 為英文）與地方衛生局轉載食藥署的衛教頁；食藥署 GHP Q&A 是業者規範，文中已註明。
- 部分說明書沒有文件編號，README 記為「未取得」。
