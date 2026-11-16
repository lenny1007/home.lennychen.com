# Codex 交辦單：第二批文章（2026-11-16）

給 Codex CLI 執行。先讀 `CLAUDE.md`、`docs/ARTICLE-TEMPLATE.md`、`docs/PLAN.md`，再看兩篇範例：
`src/content/articles/hitachi-aircon-timer-light-blinking.mdx`（品牌篇）、`src/content/articles/washer-tub-cleaning.mdx`（跨品牌篇），以及 `docs/verification/` 裡的查證紀錄（看清楚過去被抓到的錯）。

## 目標
新增 **16 篇**，讓全站到 30 篇。全部 `draft: true`。寫完後由 Claude 另行逐句查證，通過才改 `draft: false`（產出者不得自驗）。

## 題目（依序，找不到台灣官方來源就跳過並記在最後的報告）
| # | slug（建議） | 分類 | kind | 來源要求 |
|---|---|---|---|---|
| 1–4 | `<brand>-washer-error-codes` ×4 品牌（國際牌、日立、LG、台灣三洋或東元，挑找得到台灣說明書的） | washer | troubleshoot | 該品牌台灣官方洗衣機說明書。說明書有代碼表才寫代碼意思，沒有就只寫閃燈／代碼出現時的處理與叫修前檢查 |
| 5 | `washer-odor` | washer | cleaning | 至少兩家原廠說明書或客服頁 |
| 6 | `washer-drum-vs-top-load-care`（滾筒與直立式保養差異） | washer | cleaning | 原廠說明書 |
| 7–8 | `<brand>-dehumidifier-troubleshooting` ×2 品牌 | dehumidifier | troubleshoot | 台灣官方除濕機說明書 |
| 9 | `dehumidifier-filter-tank-cleaning` | dehumidifier | cleaning | 原廠說明書 |
| 10 | `tatung-rice-cooker-water-ratio`（大同電鍋外鍋水量） | cooker | setting | 大同官方說明書或官網 |
| 11 | `tatung-rice-cooker-descaling`（電鍋除垢、清潔） | cooker | cleaning | 大同官方 |
| 12 | `air-fryer-cleaning` | cooker | cleaning | 至少兩家氣炸鍋台灣說明書（如飛利浦） |
| 13 | `cast-iron-seasoning`（鐵鍋／鑄鐵鍋開鍋與生鏽處理） | cookware | cleaning | 鍋具原廠保養說明（如 Lodge、Staub 官網） |
| 14 | `nonstick-pan-care`（不沾鍋保養、何時該換） | cookware | cleaning | 鍋具原廠保養說明 |
| 15 | `stainless-pan-sticking`（不鏽鋼鍋怎麼不沾） | cookware | setting | 鍋具原廠說明 |
| 16 | `cutting-board-mold`（砧板發霉清潔） | cookware | cleaning | 原廠或衛福部食藥署等政府資料 |

## 硬規則（違反就整篇不收）
1. **每一句事實都要能在 `sources` 列的原文找到。** 原廠沒寫的建議不要寫成原廠說的；一家原廠的說法不要寫成通則；不要加碼數字或用「一律」「最」「多半」。
2. **型號範圍**：寫明適用的型號系列（「適用機種」段）。不同機種說法不同時分開寫。
3. **安全**：拆外殼、電路、冷媒、瓦斯一律用 `<SafetyNote />`，不寫步驟。
4. **不寫價格**、不寫健康宣稱、不推薦購買特定產品。
5. **來源取得**：只用原廠官網、政府網站。**不要偽造 User-Agent 或繞過網站的機器人阻擋**；抓不到就換來源或跳過。說明書 PDF 存到 `C:\Users\USER\Desktop\home-knowledge-extractor\manuals\` 並在其 README.md 記錄文件編號與網址，**不要放進 repo**。
6. 繁體中文、台灣用語（冷氣、滾筒洗衣機、電鍋外鍋）。frontmatter 照 schema；`takeaways` 3–5 條且與內文一致；`sources.checked` 寫 `2026-11`。
7. 同主題文章互相內部連結（例如品牌篇連到跨品牌篇）。不要改現有 14 篇的內容。

## 每篇附來源摘錄（給查證用）
每寫一篇，在 `docs/codex/evidence/<slug>.md` 列出：每段文章對應的原文頁碼與原文短句（每句 ≤ 40 字）。查證者會照這份逐句對。

## 驗收與交付
- `npm run check` 0 errors、`npm run build` 通過。
- 在分支 `codex/batch-2` commit（繁中訊息），push 到 origin，**不要推 main**。
- 最後輸出一份報告到 `docs/codex/BATCH-2-REPORT.md`：寫了哪幾篇、跳過哪幾題和原因、每篇用的來源。
