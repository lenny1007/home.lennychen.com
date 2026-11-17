import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { CATEGORIES, KINDS } from './consts';

const categorySlugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];
const kindKeys = Object.keys(KINDS) as [string, ...string[]];

/** 一手來源：原廠說明書、客服 FAQ、官方影片。每篇至少一筆，上線前查證用。 */
const source = z.object({
  title: z.string(),
  url: z.string().url(),
  checked: z.string().regex(/^\d{4}-\d{2}$/, '查證年月，格式 YYYY-MM'),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    /** 開頭情境圖（AI 生成，只當情境、不示範步驟）：放 src/assets/covers/<slug>.webp。 */
    cover: image().optional(),
    cover_alt: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(categorySlugs),
    kind: z.enum(kindKeys),
    /** 適用品牌（錯誤碼頁一定要填），例如 ['大金']。 */
    brands: z.array(z.string()).default([]),
    takeaways: z.array(z.string()).min(3).max(5).optional(),
    sources: z.array(source).min(1),
    related_knowledge: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

// 知識卡：影片萃取的卡，欄位沿用 pickleball-tw，zone 換成家電分類。
const knowledge = defineCollection({
  loader: file('src/content/knowledge/cards.json'),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(categorySlugs),
    type: z.enum(['cleaning', 'troubleshoot', 'setting', 'tip']).optional(),
    what: z.string(),
    why: z.string().nullable().optional(),
    how: z.array(z.string()).default([]),
    check: z.string().nullable().optional(),
    /** 涉及拆機、電路、冷媒就是 true：頁面會加「請聯絡原廠」提醒。 */
    needs_pro: z.boolean().default(false),
    source_channel: z.string(),
    source_title: z.string(),
    source_video_id: z.string(),
    timestamp: z.string(), // "mm:ss"
    /** 進 sitemap 與否。預設不進，有搜尋需求再開。 */
    index: z.boolean().default(false),
  }),
});

export const collections = { articles, knowledge };
