import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders'; 

const servers = defineCollection({
    loader: file('src/data/servers.json'),
    schema: z.object({
        name: z.string(),
        ip: z.string(),
        country: z.string(),
        id: z.number()
    })
})

export const collections = {servers}