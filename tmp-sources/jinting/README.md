# 金鼎冷氣（南亨科技股份有限公司）故障碼：官方來源

- 來源網址：https://www.jin-ting.com.tw/error-code/
- 頁面標題：「4.4 故障碼查詢 – 金鼎冷氣」
- 抓取日期：2026-11-19（直接 HTTP 取得 HTML，表格是 TablePress 靜態表 `#tablepress-error-code`，不需 JS）
- 文件編號／版本／日期：頁面上沒有印。
- 原表欄名（依序）：故障碼／機型敘述／故障說明／維修方式 → 對應 TSV 的 code／models／meaning／action。

## 檔案
- `jinting-error-codes.tsv`：完整 502 列（不含表頭），順序與官網相同。
  - 官網格子內的換行（`<br>`）在 TSV 中換成一個半形空格，其他文字原樣保留（含官網自己的空格、斜線寫法不一致，例如 `JCV-xxHD /JSV-xxHD/HD`）。
  - 官網表本身有 2 列完全重複（例如第 1、2 列都是 `0b / JCV-xxHD / JSV-xxHD/HD / JCM-xxHD`），照抄未去重。
  - 不重複故障碼 199 個；「機型敘述」字串 42 種（同一組機型因空格/斜線寫法不同而被算成不同字串，例如 `CSM-xxSG / JCV-xxSG` 28 列與 `CSM-xxSG/JCV-xxSG` 2 列）。

## 表格上下方印的文字（原文）
- 表格上方只有搜尋框：「代碼：」「機型：」「重新輸入」。沒有任何說明或注意事項。
- 表格下方直接是頁尾聯絡資訊：電話 0800-589-100、(06)593-1111；地址 台南市安定區中沙里沙崙26-1號；營業時間 週一至週五: 08:30~12:30 13:30~17:30。

## 機型敘述字串分布（列數 機型）
```
5 CSK-xxx
28 CSM-xxSG / JCV-xxSG
2 CSM-xxSG/JCV-xxSG
2 HR-xxNH
8 HR-xxNH / CSK-xxKA / JW-xxR
1 HR-xxNH / JS-xx
1 HRV-xxHD / JCV-xxHD
16 HRV-xxSD / JCV-xxSD
1 HRV-xxSD/JCV-xxSD
27 JCM-xxAG / JSV-xxAG / HRV-xxAG
23 JCV-xxCN / HRV-xxCN
13 JCV-xxHD / HRV-xxHD / JCM-xxHD / JCV-xxSG / HRV-xxSG / HRV-xxSD / JCV-xxAF
4 JCV-xxHD / HRV-xxHD / JCM-xxHD JCV-xxSG / HRV-xxSG / HRV-xxSD / JCV-xxAF
24 JCV-xxHD / JSV-xxHD / JCM-xxHD
11 JCV-xxHD / JSV-xxHD/HD / JCM-xxHD
1 JCV-xxHD /HRV-xxHD / JCM-xxHD JCV-xxSG / HRV-xxSG / HRV-xxSD / JCV-xxAF
1 JCV-xxHD /JSV-xxHD/HD / JCM-xxHD
26 JCV-xxRN / JSV-xxRN
33 JCV-xxRT / JSV-xxRT / HRV-xxRT
7 JCV-xxRT / JSV-xxRT /HRV-xxRT
7 JCV-xxSG / JSV-xxSG
36 JCV-xxXT / JSV-xxXT / HRV-23XT
65 JCV-xxxSG
19 JCV-xxxSG / CSK-xxxSG
3 JCV-xxxSG / CSK-xxxSG / JC-xxxNH / CSK-xxxKA
1 JCV-xxxSG / CSK-xxxSG / JC-xxxNH /CSK-xxxKA
1 JCV-xxxSG / CSK-xxxSG /JC-xxxNH/CSK-xxxKA
5 JCV-xxxSG/ CSK-xxxSG
1 JCV-xxxSG/ CSK-xxxSG /JC-xxxNH/CSK-xxxKA
2 JS-xx
10 JS-xxAE / JS-xxAF
4 JS-xxG
2 JS-xxG / JS-xx
4 JS-xxG / JS-xx / HR-xxNH
6 JS-xxN / JC-xxN
1 JS-xxN/JC-xxN
8 JS-xxSR
15 JSV-xx
36 JSV-xxCD / JCV-xxCD
26 JSV-xxK / JCV-xxK
13 JSV-xxxSG / HRV-xxxSG / JCV-xxSG
3 JW-xxC
```

## 官網目前在售系列（產品頁，2026-11-19 以瀏覽器讀取 JS 規格表）
選單上只有四個系列：RT 金抑菌系列、XT 金清新系列、NH 金清涼定頻系列、SG 金商用系列。

| 頁面 | 網址 | 規格表上的型號 |
|---|---|---|
| 家用／壁掛式－RT | /product-rt-wall-mounted/ | 室外 JCV-28/36/41/50/63/72/85/91RT；室內 JSV-28/36/41/50/63/72/85/91RT（全部標「第1級」） |
| 家用／吊隱式（送風機）－RT | /product-rt-fcu/ | JCV-28~91RT；HRV-28/36/41/50/63/72/85/91RT |
| 家用／壁掛式－XT | /product-xt-wall-mounted/ | JCV-23/28/36/41/50/63/72/80XT；JSV-23/28/36/41/50/63/72/80XT |
| 家用／吊隱式－XT | /product-xt-fcu/ | JCV-23~80XT；HRV-23/28/36/41/50/63/72/80XT |
| 家用／壁掛式－NH（定頻） | /product-nh-wall-mounted/ | 室外 JC-28/36/41/50/63/72/85/91NH；室內 JS-28/36/41/50/63/72/85/91RD |
| 商用／壁掛式－SG | /product-sg-office-wall-mounted/ | JCV-101/112/140SG；JSV-101/112/140SG；另有 GJCV-140SG |
| 商用／吊隱式－SG | /product-sg-office-fcu/ | JCV-101/112/140SG；HRV-101/112/140SG；GJCV-140SG |
| 商用／櫃機－SG | /product-sg-office-cabinet/ | JCV-112/140SG；CSK-112/140SG |
| 商用／四方吹－SG | /product-sg-office-four-way/ | JCV-112/140SG；CSM-112/140SG |
| 商用／壁掛式－NH | /product-nh-office-wall-mounted/ | JC-101/112/140NH；JS-101/112RD |
| 商用／櫃機－NH | /product-nh-office-cabinet/ | JC-112/140NH；CSK-112/140KA；CSK-112/140KN |
| 商用／四方吹－NH | /product-nh-office-four-way/ | JC-101/112/140NH |

另有官網型錄 PDF：https://www.jin-ting.com.tw/wp-content/uploads/2024/04/240130金鼎型錄v1.pdf（未下載）。

## 需要注意／不明確的地方
- 主力家用系列 = RT（`JCV-xxRT / JSV-xxRT / HRV-xxRT`，40 列）與 XT（`JCV-xxXT / JSV-xxXT / HRV-23XT`，36 列）。XT 那組官網寫 `HRV-23XT`（不是 `HRV-xxXT`），照抄。
- NH 定頻家用室內機在產品頁是 `JS-xxRD`，但故障碼表裡沒有任何 `RD` 字樣；NH 相關列寫成 `HR-xxNH`、`JC-xxxNH`、`HR-xxNH / JS-xx` 等，是否涵蓋 JS-xxRD 室內機官網沒說明。
- SG 商用：表中有 `JCV-xxxSG`（65 列）、`JCV-xxSG / JSV-xxSG`（7 列）、`JSV-xxxSG / HRV-xxxSG / JCV-xxSG`（13 列）、`CSM-xxSG / JCV-xxSG`（30 列）等多組，同一代碼在不同 SG 組合下意思可能不同，寫文章時要按機型組分開。
- 其餘系列（HD、SD、AG、CN、RN、CD、K、AE/AF、SR、G、N、JSV-xx、JW 等）在官網產品頁已不再列出，應是舊機種。
