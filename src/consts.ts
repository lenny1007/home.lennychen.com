export const SITE_NAME = '家用說明書';
export const SITE_URL = 'https://home.lennychen.com';
export const SITE_DESCRIPTION =
  '冷氣閃燈、洗衣機錯誤碼、除濕機、電鍋氣炸鍋、鍋具保養與家用路由器。對照原廠說明書整理成看得懂的中文，每一條都標來源。';

/**
 * AdSense 發布商 ID（ca-pub-…）。留空就不載入廣告。
 * AdSense 只能登記主網域：lennychen.com 審過後，子網域可直接用同一組 ID。
 */
export const ADSENSE_CLIENT = 'ca-pub-9146224692033168';

/** 讀者回報錯誤、隱私權問題的聯絡信箱。關於本站、隱私權政策頁共用。 */
export const CONTACT_EMAIL = 'lenny0929@gmail.com';

/**
 * 分類＝家裡的位置。首頁平面圖、導覽列、文章與知識卡共用。
 * 順序依 2026-11-15 Google Trends 需求排（冷氣最高）。
 */
export const CATEGORIES = [
  { slug: 'aircon', name: '冷氣', room: '客廳臥室', note: '閃燈與錯誤碼、濾網清洗、省電溫度設定。' },
  { slug: 'washer', name: '洗衣機', room: '陽台', note: '直立式與滾筒的錯誤碼、槽洗、異味處理。' },
  { slug: 'dehumidifier', name: '除濕機', room: '儲藏室', note: '故障燈號、不除濕排除、濕度設定。' },
  { slug: 'cooker', name: '電鍋與氣炸鍋', room: '廚房', note: '時間溫度表、外鍋水量、除垢與油汙。' },
  { slug: 'cookware', name: '鍋具與廚具', room: '廚房', note: '鐵鍋開鍋與生鏽、不沾鍋保養、砧板與刀。' },
  // 2026-11-18 站主同意加測：Trends 上 wifi ≈ 羽球 1 倍，先放一小批看 GSC。
  { slug: 'network', name: '網路設備', room: '書房', note: 'Wi-Fi 頻段怎麼選、路由器重置與換頻道。' },
] as const;
export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

/** 文章類型：用來比較哪種頁面最有效（計畫的 3 個月檢討會看）。 */
export const KINDS = {
  troubleshoot: '錯誤碼與故障',
  cleaning: '清潔保養',
  setting: '使用設定',
  guide: '選購與觀念',
} as const;
