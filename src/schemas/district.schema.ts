import z from 'zod';

export const DistrictSchema = z.object({
    id: z.number(),
    name: z.string(),
    code: z.number(),
    province: z.string(),
});

export type DistrictType = z.infer<typeof DistrictSchema>;

export const DistrictResponseSchema = z.object({
    data: z.array(DistrictSchema),
    meta: z.object({
        total: z.number(),
        page: z.number(),
        pageSize: z.number(),
    }),
});

export type DistrictResponse = z.infer<typeof DistrictResponseSchema>;