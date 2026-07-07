import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    icon: z.string().optional(),
    tags: z.array(z.string()),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export const collections = { projects };
