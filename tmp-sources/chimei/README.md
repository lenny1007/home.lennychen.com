# 奇美（CHIMEI）洗衣機故障碼：官方來源

入口：奇美官網「檔案與型錄下載」https://www.chimei.com.tw/download → 類別「洗/乾衣機」→ 產品「洗衣機」→ 系列 → 型號 → 確認送出。2026-11-19 以瀏覽器操作取得各型號的「使用說明書」連結（檔案都在 chimei.com.tw/files/…）。

**注意：這些手冊大多是掃描圖檔（無文字層），代碼是我把 PDF 頁面轉成圖片後逐字讀出來的；TSV 文字請在寫文章前再對一次原 PDF。** 代碼用七段顯示器字型印，例如 `E1` 印成「E!」樣子、`Eb` 是小寫 b。

## 官網目前列出的洗衣機型號（下載頁下拉選單）
- 變頻直立式：WS-P17DVS、WS-P168VS-S、WS-V1799W、WS-V2055W、WS-V158PW、WS-P188VS、WS-P188VS-S、WS-P168VS、WS-V179PW、WS-V138PW、WS-V1588W、WS-P20LVS
- 定頻直立式：WS-F128PW、WS-F108PW、WS-F1288W、WS-F808PW、WS-F1088W、WS-F818PW、WS-P158ST、WS-P1388S、WS-P1588S
- 滾筒式 洗脫烘：WS-V139WD、WS-H139WD、WS-V117WD
- 雙槽：WS-P128TW

## 已抽取的手冊（代碼系統分三種）
| 代碼系統 | 手冊 | 官方網址 | 涵蓋型號（封面印的） | 代碼頁（印刷頁碼） | 文件編號 | 存檔 |
|---|---|---|---|---|---|---|
| E1–E5／EL／EA Eb EC | V158-179PW說明書.pdf | https://www.chimei.com.tw/files/series/washing-machine/WS-V179PW/V158-179PW說明書.pdf | WS-V158PW、WS-V179PW | 「故障的排除」p.15（PDF 第 16 頁） | 未見 | 已存本資料夾（2.9 MB） |
| 同上（無 EL） | WS-V138PW說明書(o).pdf | https://www.chimei.com.tw/files/series/washing-machine/WS-V138PW說明書(o).pdf | WS-V138PW | 「故障的排除」p.14（PDF 第 15 頁） | 未見 | 已存本資料夾（2.7 MB） |
| 同上＋E901 E902 E920 | 230307-WS-F128PW說明書(O)_S.pdf | https://www.chimei.com.tw/files/series/washing-machine/10/230307-WS-F128PW說明書(O)_S.pdf | WS-F108PW、WS-F128PW | 「故障的排除」p.13（PDF 第 14 頁） | 檔名日期 230307 | 8.5 MB 未存 |
| U11–U15／U99／H□□ | WS-P188-168-17DVS說明書.pdf | https://www.chimei.com.tw/files/series/washing-machine/WS-P188-168-17DVS說明書.pdf | WS-P188VS、WS-P168VS、WS-P17DVS（下載頁 WS-P188VS-S、WS-P168VS-S 也連到這份） | 「故障代碼」p.29 | 封面下方印 AWW9901H15H1-0H0 | 11 MB 未存 |
| U11–U15／H□□（無 U99） | WS-P20LVS-說明書.pdf | https://www.chimei.com.tw/files/series/washing-machine/WS-P20LVS-說明書.pdf | WS-P20LVS | 「故障代碼」p.28 | 未記 | 5.02 MB 未存 |
| E11／E12／H／U4／其餘代碼＋Add／Hot | V139&117WD洗衣機說明書).pdf | https://www.chimei.com.tw/files/series/washing-machine/V139&117WD洗衣機說明書).pdf | 滾筒式洗乾衣機 WS-V117WD、WS-V139WD | 「故障的排除」p.22；「非故障的情況」p.21 | 未見 | 13 MB 未存 |

## 表格上下方原文
- E 系列手冊（V158/179PW、V138PW、F108/128PW）表格上方：「故障顯示一覽表：用響笛聲和「行程」顯示的同時閃爍（ * ）來表示機器出現的故障，請按“啟動/暫停”鍵後，檢查以下各項。排除故障後，按“啟動/暫停”鍵，繼續進行運轉。」表格欄名：症狀／故障顯示／原因。第一列「完全不運轉」沒有代碼。
- P188/168/17DVS 表格上方：「洗衣機若發出嗶嗶聲，且輪流顯示「U」和數字，請做以下檢查。若問題仍未解決，請洽詢服務站。」欄名：顯示／自行檢查／頁次。下方：「註：當出現「U」、「H」異常時 ‧ 按壓【電源】鍵可立即關機。( 適用於 WS-P188VS/WS-P168VS) ‧ 按壓電源【關】鍵可立即關機。( 適用於 WS-P17DVS) (H09 及 U99 異常無法直接關機，請拔除電源插頭。)」
- P20LVS 下方：「註：當出現「U」、「H」異常時，按押電源鍵可立即關機。(H09 異常無法直接關機，請拔除電源插頭)」
- V139/117WD 表格欄名：故障代碼／故障現象／檢查要點／解決方法；前兩列（不運轉、不脫水）沒有代碼。

## 不明確／待處理
- **WS-V1588W、WS-V1799W、WS-V2055W 的說明書連結壞掉**：官網連到 `260410_WS-V(1588+1799)2055W_說明書_K(o)_compressed.pdf`，2026-11-19 實測 HTTP 404（多種編碼都試過）。這三台的代碼目前沒有來源。
- 沒抓：WS-H139WD（熱泵滾筒，說明書 https://www.chimei.com.tw/files/series/washing-machine/WS-H139WD/熱泵洗衣機_WS-H1309WD_說明書-SS.pdf ，注意檔名寫 H1309WD）、WS-P158ST、WS-P1388S/1588S（2017 舊檔）、WS-P128TW 雙槽、其餘定頻 F 系列。需要再補。
- 同一個 `H` 在不同系列意思完全不同：P 系列「H＋兩位數字＝需要維修」；滾筒 V139/117WD 的單獨「H」＝門蓋無法打開（高溫鎖門）。
- 官網下載查詢會限流（連續查十幾個型號後回 HTTP 429）。
