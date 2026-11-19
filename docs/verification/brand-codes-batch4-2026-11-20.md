# 查證紀錄：第四批品牌錯誤碼（三星洗衣機、三菱電機除濕機、象印電子鍋、國際牌電子鍋，2026-11-20）

## 來源
全部是台灣官方來源，存在站主電腦 `home-knowledge-extractor\manuals\`（不進 repo，README 記網址）。

| 文章 | 來源 |
|---|---|
| samsung-washer-error-codes | 三星台灣說明書：直立 WA80F 系列（OID84387）、滾筒 WW12BB 系列（DC68-04464F-01）；三星台灣客服頁 4 篇（WA80F19B9BTW、WF90F22ADSTW、WD12DB9B84GN 資訊代碼說明，及未標機型的「錯誤代碼解決方法」），2026-11-20 抓取 |
| mitsubishi-electric-dehumidifier-error-codes | 台灣三菱電機客服「說明書下載」：MJ-EV250HM-TW、MJ-E195HM-TW、MJ-E160HN-TW |
| zojirushi-rice-cooker-error-codes | 象印台灣官網下載專區：NW-YAF10/18、NW-QAF10/18、NL-EAF10/18 |
| panasonic-rice-cooker-error-codes | Panasonic 台灣說明書下載：SR-PBA100/180、SR-JMX188／JMN188／JMN108 |

## 流程
Codex CLI（訂閱額度）依本機說明書產稿（draft: true）→ 兩位獨立 fresh-context 查證員以推翻為目標逐列對原文；七段顯示字型的代碼表一律把 PDF 頁轉成圖片看。

| 文章 | 判定 | 修正 |
|---|---|---|
| samsung-washer-error-codes | 小修後通過（漏收列） | WA80F 補 9C2；WW12BB 表頁碼改 59～61、補 3CP、AC、AC6、DC1；滾筒客服頁表補 DC1（WD12、WF90 各自說法）、UB1、NC、LC／LC1；4C2 意思欄改成「說明書只列處理方式」；1C 刪「配線檢查」改為聯絡客服；加註 DC1 直立與滾筒意思不同 |
| mitsubishi-electric-dehumidifier-error-codes | 通過 | 無 |
| zojirushi-rice-cooker-error-codes | 通過 | 「可能不顯示」改回原文「不會顯示」；註明表中另有兩項非代碼列未收 |
| panasonic-rice-cooker-error-codes | 通過 | description 的 U15 限定為 SR-PBA |

三星修正後另派 fresh-context agent 複查：再抓到 WA80F 漏 9C1（已補，處理方式只寫確認電源、聯絡客服，不寫 PCB／配線）；WW12BB 冷熱水管列意思改為「說明書只列處理方式」；WF90 的 DC1 補上客服頁同列的自動開門說明；客服頁表 caption 註明「節錄」。第三輪複查 5/5 通過。

限制：三星客服頁只對本機 2026-11-20 抓下的副本；官方網址是否仍可開啟只對照 README 記錄。
