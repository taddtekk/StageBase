import { z } from "zod";

export const organizationNameSchema = z.string().trim().min(1);
