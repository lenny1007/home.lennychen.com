# 開廣告前檢查清單

2026-11-18 先補好隱私權政策（`/privacy/`）與聯絡信箱，廣告維持關閉。等 lennychen.com 的 AdSense 審過、要在本站填 `ADSENSE_CLIENT` 時，照下面做。

## 已完成
- `/privacy/` 隱私權政策：第三方廣告 cookie、個人化廣告與停用方式（Google 廣告設定、aboutads.info）、Google Fonts、YouTube、Vercel、聯絡方式。頁尾每頁都有連結。
- 聯絡信箱放在 `src/consts.ts` 的 `CONTACT_EMAIL`，關於本站與隱私權政策頁共用。
- 隱私權政策的「廣告與 Cookie」段落依 `ADSENSE_CLIENT` 自動切換：留空時寫「目前還沒有刊登廣告」，填了就變成「本站使用 Google AdSense」。

## 開廣告時要做
1. `src/consts.ts` 填 `ADSENSE_CLIENT = 'ca-pub-…'`（和 lennychen.com 同一組）。
2. `public/ads.txt` 加一行：`google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0`（換成自己的 pub ID）。
3. **歐洲經濟區（EEA）、英國、瑞士的同意聲明**：Google 規定對這些地區的訪客顯示廣告，必須用經 Google 認證、支援 IAB TCF 的同意管理平台（CMP）。最省事的做法是在 AdSense 後台「隱私權與訊息」建立 GDPR 訊息（Google 自家的 CMP，不用改程式）。訪客幾乎都在台灣，但沒設定的話，這些地區只會顯示有限廣告或不顯示。
4. 改 `/privacy/` 的「最後更新」日期；如果用了 Google 以外的 CMP，在隱私權政策補一段說明。
5. 如果之後加了 GA4，在隱私權政策的「流量統計」段落改寫成實際狀況（可參考 pickleball-tw 的 `/privacy/`）。
