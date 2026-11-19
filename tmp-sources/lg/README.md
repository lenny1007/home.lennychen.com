# LG 除濕機（台灣）故障碼：官方來源

## 結論：官方完整故障碼表目前拿不到
- 指定頁 https://www.lg.com/tw/support/product-help/CT30003841-20152911466992 （【除濕機】除濕機故障代碼）2026-11-19 在瀏覽器開啟：先轉到 `.../help-library/cs-CT30003841-20152911466992/`，頁面只剩標題「支援資料庫︰ | LG 台灣」，接著 JS 直接導回 https://www.lg.com/tw/support/ 。伺服器回傳的 HTML 沒有文章內容（Next.js 的 notFound 版型），也找不到 `doc-` 新網址版本。**判定 LG 已下架這篇文章。**
- Wayback Machine 查無這兩個網址的快照（`archived_snapshots: {}`）。
- 搜尋引擎的摘要仍殘留這篇的片段（提到「【CH38】UV燈故障」需申請維修、CL 為兒童安全鎖），但只是摘要，不能當來源；我沒有取得原文，**CH 系列代碼目前沒有可引用的官方來源**。
- 下面 5 本台灣使用手冊（含 PDF 與 HTML 電子手冊）都**沒有 CH 錯誤代碼表**；故障排除只寫「智慧診斷時產生錯誤代碼／自我診斷時產生錯誤代碼 → 請立即連絡服務中心」，並建議用 LG ThinQ 的 Smart Diagnosis。手冊中出現的面板代碼只有 dF、CL、Lo、Hi、[O（自動乾燥／自動清潔圖示），已整理到 `lg-dehumidifier-codes.tsv`。

## 仍在線的官方 help library 文章
1. 【除濕機】代碼：dF — https://www.lg.com/tw/support/product-support/troubleshoot/help-library/cs-CT30003841-20152911471153/ （分類 Product Usage 空氣清淨機/除濕機，日期 2024/02/27）
2. [LG 除濕機]「CL」代碼是什麼意思？如何修復無反應按鈕 — https://www.lg.com/tw/support/product-support/troubleshoot/help-library/cs-doc-20155118509737-tw-LGETT/ （Troubleshooting 空氣清淨機/除濕機，日期 2026/04/13）
   - 文末原文：「本指南是為所有型號製作的，因此圖片或內容可能與你的產品有所不同。」另有「機型年份可能因地區而異。」「2012 年以前製造的型號不支援兒童鎖。」

## 查過的台灣使用手冊（全部來自 lg.com/tw 支援頁 → gscs-b2c.lge.com / gscs-manual.lge.com）
| 支援頁機型 | 文件 | 網址 | 版本／日期 | 涵蓋機型 | 頁數 |
|---|---|---|---|---|---|
| MD161QPK3、DD121QWK0（兩頁都連同一份） | HTML 電子手冊 MFL05902201 | http://gscs-manual.lge.com/DLZ/MFL05902201/zh-tw/main.html （zip: https://gscs-b2c.lge.com/downloadFile?fileId=1cIvVnGBctazTmGgDKE9g ） | 「Version Info MFL05902201/00」；DD121QWK0 支援頁標 2026/10/26 | 手冊內未列型號 | 相關章節：使用附加功能、故障排除 > 產品叫修之前 > 使用相關 |
| MD161QPK3 | PDF「Owner's Manual MFL68026039_TT_03.pdf」 | https://gscs-b2c.lge.com/open/downloadFile?fileId=Cn9dvNcTtneeqCpFfAiZlg | 23 MB，幾乎全是圖片無文字，未下載進 repo | — | — |
| DD121QWK0 | PDF「MFL68026076 nonUV ??.pdf」 | https://gscs-b2c.lge.com/open/downloadFile?fileId=ujTdG5AmHwigzzASV9JQ | MFL68026076 Rev.00_090225 2025；支援頁標 2025/10/15；32 MB 未存 | 封面只寫「型號：LG 除濕機」 | dF p.18、CL p.21、故障排除 p.30 |
| MD191QEE0 | PDF「MFL68026046_TT_221104 19L.pdf」 | https://gscs-b2c.lge.com/open/downloadFile?fileId=j0GIxqoK7k0iHvPCyJyQ | MFL68026046 Rev.01_100422；支援頁標 2022/11/04；32 MB 未存 | 內文出現 MD191QCE0、MD191QEE0 | dF p.18、CL p.21、故障排除 p.30 |
| DD121MWE0 | PDF「AC_ATT_MFL72146401_00_240813_00_OM_WEB.pdf」（**已存於本資料夾**，2.3 MB） | https://gscs-b2c.lge.com/open/downloadFile?fileId=0eFQAydkjHZV7VsREvsR9A ；另有 HTML 版 http://gscs-manual.lge.com/DLZ/MFL72146401/zh-tw/main.html | MFL72146401 Rev.00_081324，版權 2017-2024；支援頁標 2024/08/16 | 封面「DD**1M**0」；內文 DD121MWE0、DD121MWK0、DD141MWE0、DD161MWE0 | Lo/Hi p.13、dF p.16、[O p.17、錯誤代碼→聯絡服務中心 p.28、故障排除 p.29 |
| WD261VKF0 | PDF「MFL68026050_WD261VKF0_03.pdf」 | https://gscs-b2c.lge.com/open/downloadFile?fileId=KQXOQAMvnWazns1IwoObIw | MFL68026050 Rev.03_041223 2023；6 MB 未存 | WD261VKF0 | dF／CL p.16、故障排除 p.36 |

## 注意
- PDF 頁碼是 PDF 檔的第幾頁（pdftotext 分頁），不一定等於印在頁面上的頁碼。
- 寫文章時 LG 除濕機只能寫 dF、CL、Lo/Hi 等「狀態顯示」，不能寫 CH 系列故障碼（沒有官方原文）。若要 CH 碼，可能要找 LG 服務手冊（技師用）或請站主向 LG 客服索取。
