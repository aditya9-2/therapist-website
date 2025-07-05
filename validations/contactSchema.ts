import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    preferredTime: z.string().optional(),
    preferredMethod: z.enum(["call", "email"], {
        required_error: "Please select a preferred method",
    }),
    message: z.string().min(5, "Message is required"),
    terms: z.literal(true, {
        errorMap: () => ({ message: "You must accept the terms" }),
    }),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;
