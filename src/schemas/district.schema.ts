import z from 'zod';

export const DistrictSchema = z.object({
    key: z.number(),
    name: z.string(),
    code: z.number(),
    province: z.string(),
});

export type DistrictType = z.infer<typeof DistrictSchema>;