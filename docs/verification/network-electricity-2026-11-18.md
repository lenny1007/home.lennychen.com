# 網路設備＋電費小批查證（2026-11-18）

產出：Claude（本 session）。查證：獨立 fresh-context agent，只對各篇 `sources` 官方頁逐句反查、重算全部算術。

| 文章 | 結論 | 修正 |
|---|---|---|
| electricity-bill-calculation | 修後可上線 | 「占 60 天」改「占整個計費期間天數」；刪掉沒來源的耗電功率查法。400 度範例與「114 年 10 月 1 日起實施」：agent 讀不到 PDF，主控用瀏覽器親自打開台電《各類電價表及計算範例》第 1–2 頁確認無誤 |
| asus-router-factory-reset | 修後可上線 | 強制還原分組不是依系列新舊（FAQ 1039074 分八組，同系列可能在不同組） |
| tp-link-router-factory-reset | 可上線 | 「很多」改「部分（例如 Archer 系列）」 |
| wifi-2-4ghz-5ghz-6ghz | 修後可上線 | 5GHz 干擾欄改「—」、2.4GHz 適用裝置改依原文、6GHz 干擾改「通常較少」 |
| asus-router-change-wifi-channel | 修後可上線 | DFS 段落：新版韌體是 5GHz、舊版韌體是 5GHz-2 要先取消勾選（原稿誤寫舊版直接選） |

算術（agent 重算）：400 度 1,015.1；300 度 672.6；540 度 1,600.7；差額 928.1、每度 3.87、全月平均 2.96。
