# 文章範本

放在 `src/content/articles/<slug>.mdx`。slug 用英文、品牌在前，例如 `daikin-aircon-error-codes`。

```mdx
---
title: 大金冷氣閃燈與錯誤碼對照表
description: 一句話說清楚這頁解決什麼問題，含主要關鍵字。
pubDate: 2026-11-20
category: aircon            # aircon | washer | dehumidifier | cooker | cookware
kind: troubleshoot          # troubleshoot | cleaning | setting | guide
brands: ['大金']
takeaways:
  - 三到五條重點，數字要跟內文一致
  - …
  - …
sources:
  - title: 原廠說明書或客服頁的名稱
    url: https://…（原廠網址）
    checked: 2026-11
draft: true                 # 查證通過才改 false
---
import CodeTable from '../../components/CodeTable.astro';
import SafetyNote from '../../components/SafetyNote.astro';
import VideoRef from '../../components/VideoRef.astro';

## 先看閃燈還是看代碼

…

<CodeTable caption="適用型號系列：…" rows={[
  { code: 'A1', meaning: '…', action: '…' },
  { code: 'U4', meaning: '…', action: '…', pro: true },
]} />

<SafetyNote />

<VideoRef id="YouTube影片ID" t="1:23" channel="頻道名" title="影片標題" note="這段示範什麼" />
```

上線前檢查：
1. 每個代碼都能在 `sources` 的說明書找到。
2. takeaways、description 的數字跟內文一致。
3. 獨立 agent 查證通過，再把 `draft` 改 false。
