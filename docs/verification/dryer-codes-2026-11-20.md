# 查證紀錄：乾衣機錯誤碼（三星熱泵、三星瓦斯型、LG，2026-11-20）

## 來源
全部是台灣官方來源，存在站主電腦 `home-knowledge-extractor\manuals\dryer\`（README 記網址）。

| 文章 | 來源 |
|---|---|
| samsung-heat-pump-dryer-error-codes | 三星台灣說明書 DV10DB7440（DC68-04543J-00，p42–43）、DV90F20CDSTW（OID127201，p51）；三星台灣客服頁「DV90F20CDSTW 熱泵乾衣機資訊代碼說明」（2026-10-20 更新） |
| samsung-gas-dryer-error-codes | 三星台灣說明書 DVG16CG8600（DC68-04299R-01，p48、安裝檢查碼 p23–24）、DVG17CB8700（DC68-04394H-01，p49） |
| lg-dryer-error-codes | LG 台灣手冊 WR-100VW／WR-100VB（MFL71712146，p36）、WR-90TW／WR-90TV／WR-80TW（MFL69702081，印刷頁 36） |

未收：三星冷氣、除濕機（三星台灣官網沒有這兩類）；LG 冷氣（台灣手冊只寫指示燈閃爍聯絡服務中心，沒有代碼表）；LG WR-20DW、WR-10X（螢幕只顯示中文訊息，沒有代碼）。

## 流程
Codex CLI 依本機說明書產稿 → 兩位 fresh-context 查證員以推翻為目標對原文；LG WR-100VW 七段字型（文字層把 2 抽成 z、F1 抽成 FI）轉圖核對。

| 文章 | 判定 | 修正 |
|---|---|---|
| samsung-heat-pump-dryer-error-codes | 通過 | DC1、DV10 tC5 刪掉原文沒有的「持續出現就聯絡客服」；補「關閉乾衣機門，然後重試」仍持續要叫修 |
| samsung-gas-dryer-error-codes | 不通過→修正後通過 | **漏了說明書明列的瓦斯洩漏緊急處理**（勿觸摸設備或電源線、立即通風、不要用排氣風扇；僅憑氣味可能無法偵測），照兩份說明書原文補上；FC、HC、9C1、tC、tC5、偵測桶槽內有衣物改為不標 pro（說明書先由使用者處理） |
| lg-dryer-error-codes | 通過 | SafetyNote 刪掉原文沒有的「請交給服務中心」 |

複查：fresh-context agent 確認瓦斯洩漏句兩份說明書逐字相符、熱泵修正與 p42 一致、check 0 errors。複查指出「通風口幾乎堵塞」說明書先列使用者動作（清濾網、檢查通風）再寫「必須透過專業人員採取措施（如清潔）」；本站刻意保留 pro 標示，因為瓦斯型的排氣管清潔必須交給專業人員。
