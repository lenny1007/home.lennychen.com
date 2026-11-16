# home.lennychen.com — 協作規則

Codex 與 Claude Code 都讀這份（AGENTS.md 指向這裡）。只寫讀程式看不出來的事。

## 基本
- 回覆、PR 說明、commit 訊息一律繁體中文。
- 正式站 https://home.lennychen.com （lennychen.com 的子網域，Vercel 獨立專案，仿 tech.lennychen.com）。推到 `main` = 自動部署。
- Astro 5 靜態站，骨架來自 pickleball-tw。驗收順序：`npm run check`（0 errors）→ `npm run build`。CI 跑同樣兩步。

## 定位與測試
- 這是 **AdSense 測試站**：驗證「說明書＋影片萃取」在運動以外的主題能不能帶來自然流量。範圍＝家裡用品（家電＋廚具）。
- 檢討日 **2027-02-15**：第 3 個月月自然瀏覽 ≥3,000 擴大（搬獨立網域）、1,000–3,000 維持、<500 停。計畫見 `docs/PLAN.md`。
- 前三個月只做 5 類：冷氣、洗衣機、除濕機、電鍋與氣炸鍋、鍋具與廚具。不擴到傢俱、裝潢、清潔劑。
- 家電教學長尾很分散（「冷氣 清洗」約只有「羽球」的 1–4% 搜尋量），所以靠「品牌 × 機型 × 問題」的廣度取勝，不靠幾篇大文。

## 內容可信度（比運動站更嚴：寫錯可能讓讀者弄壞機器）
- 錯誤碼與保養步驟**只以原廠說明書、官方客服 FAQ 為準**。影片只當示範補充。每篇 frontmatter `sources` 至少一筆，含查證年月。
- 新文章上線前派獨立 fresh-context agent 逐條對說明書反查；產出者不得自驗。
- 品牌、型號、代碼查不到原廠來源就不寫。不同型號代碼不同時，寫清楚適用型號系列。
- **只寫使用者層級的操作**（拆濾網、重開機、清水箱、槽洗）。拆外殼、電路、冷媒、瓦斯一律用 `<SafetyNote />`，不寫步驟。
- 不轉貼說明書全文或截圖，整理成自己的表格（`<CodeTable />`）並連回原廠。
- 用字照台灣說法：冷氣（不寫空調）、滾筒洗衣機、電鍋外鍋、鑄鐵鍋／鐵鍋開鍋。

## 結構
- 分類在 `src/consts.ts` 的 `CATEGORIES`；文章類型 `KINDS`（troubleshoot／cleaning／setting／guide），三個月後用它比較哪種頁面最有效。
- 文章 schema 在 `src/content.config.ts`；範本見 `docs/ARTICLE-TEMPLATE.md`。
- 知識卡在 `src/content/knowledge/cards.json`，預設 `index: false`（不進 sitemap、noindex）。理由：badminton-tw 卡片全開時 sitemap 88% 是卡、77% 零曝光。
- 沒有文章的分類頁自動 noindex。

## 設計
- 家的平面圖當首頁導覽，是唯一的重點裝飾。顏色只用 `src/styles/global.css` 的 token。見 `docs/DESIGN.md`。

## AdSense
- `src/consts.ts` 的 `ADSENSE_CLIENT` 填 `ca-pub-…` 才會載入廣告。AdSense 只能登記主網域 lennychen.com，審過後子網域直接可用。
- 要手動版位時用 `<AdSlot slot="…" />`。noindex 頁不載廣告。

## 分支
- Claude 雲端 session 用系統指定的 `claude/*` 分支，開 draft PR，不直接推 `main`。
- Codex 用 `codex/*` 分支，交辦單在 `docs/codex/`。Codex 寫的文章一律 `draft: true`，由 Claude 逐句查證後才改 false。
