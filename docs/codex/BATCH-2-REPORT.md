# 第二批報告（2026-11-17）

## 執行方式（與交辦單的差異）
- 交辦單第 5 條「來源取得」改由 Claude 先做：四類台灣官方說明書／原廠保養頁共 54 份，存在 `C:\Users\USER\Desktop\home-knowledge-extractor\manuals\`（不進 repo），README.md 記錄文件編號、官方網址、是否 OCR。沒有偽造 User-Agent 或繞過防機器人。
- Codex CLI（0.167.0-alpha，gpt-6-astra，effort high，auth_mode=chatgpt，執行時移除 OPENAI_API_KEY／CODEX_API_KEY）一篇一個 `codex exec -s workspace-write`，只讀本機來源、不上網、不 commit。執行器：`home-knowledge-extractor\codex_runner\run_articles.py`。
- 16 篇都完成；Codex 合計約 166 萬 tokens，單篇 4–10 分鐘，四條並行，牆鐘約 1 小時。沒有遇到額度或限流。聲寶除濕機第一次因 Codex 環境沒有 PyMuPDF 停下詢問，允許改用 pypdfium2 後重跑成功。
- 查證、修正、改 `draft: false` 由 Claude 做，紀錄見 `docs/verification/codex-batch-2-2026-11-17.md`。

## 寫了哪些
| # | slug | 來源 |
|---|---|---|
| 1 | panasonic-washer-error-codes | 國際牌 NA-V190NM 系列（直立）、NA-V178DW 系列（滾筒）說明書 |
| 2 | hitachi-washer-error-codes | 日立 BD-SX150JJ／JJR（滾筒）、SF-200ZHV（直立）說明書（阿奇立克日立台灣家電） |
| 3 | lg-washer-error-codes | LG WT-SD179HVG 等 12 型（直立）、WD-S13VDW（滾筒）使用者手冊 |
| 4 | sampo-washer-error-codes | 聲寶 ES-P13DV／P15DV、ES-P14DV／P16DV（直立）、ES-PD13DH（滾筒）說明書（東元官網無說明書，改聲寶） |
| 5 | washer-odor | 國際牌、LG、三星洗衣機說明書 6 份 |
| 6 | washer-drum-vs-top-load-care | 同上 |
| 7 | panasonic-dehumidifier-troubleshooting | 國際牌 F-YV20QBH 系列、F-YV32MH 系列、F-Y20JH 系列說明書 |
| 8 | sampo-dehumidifier-troubleshooting | 聲寶 AD-S552DT、AD-W520T／W532T、AD-WA618T 說明書 |
| 9 | dehumidifier-filter-tank-cleaning | 國際牌、日立、LG、夏普、三菱電機除濕機說明書 |
| 10 | tatung-rice-cooker-water-ratio | 大同電鍋使用說明書（有保溫、無保溫兩版） |
| 11 | tatung-rice-cooker-descaling | 同上 |
| 12 | philips-air-fryer-cleaning | 飛利浦 NA32X／33X／34X、NA230／231 使用手冊（繁中段） |
| 13 | cast-iron-seasoning | Lodge 保養頁 4 頁、ZWILLING 台灣（STAUB／鐵炒鍋）、Le Creuset 台灣琺瑯鑄鐵手冊 |
| 14 | nonstick-pan-care | Tefal 台灣官網 3 頁、ZWILLING 台灣、Le Creuset 台灣不沾鍋手冊 2 份 |
| 15 | stainless-pan-sticking | All-Clad、ZWILLING 台灣、Fissler 保養頁與手冊 |
| 16 | cutting-board-mold | 苗栗縣政府衛生局（資料來源食藥署）、食藥署 GHP Q&A（業者規範）、John Boos 保養頁 |

## 跳過或改題
- 題 12「air-fryer-cleaning」（至少兩家）：只找到飛利浦台灣官方說明書（特福台灣網站連不上、麗克特台灣頁 404、大同與國際牌台灣官網沒有氣炸鍋說明書），改寫成 `philips-air-fryer-cleaning`。
- 題 1–4 的「台灣三洋或東元」：東元官網沒有說明書下載，改用聲寶。
