import z from "zod";

export const checkoutSchema = z.object({
  details: z
    .string()
    .nonempty("Details are required")
    .min(10, "Details must be at least 10 characters long")
    .max(500, "Details must be less than 500 characters"),
  phone: z
    .string()
    .nonempty('Phone number is required')
    .regex(/^(\+2)?01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
  city: z
    .string()
    .nonempty("City is required")
    .min(2, "City must be at least 2 characters long")
    .max(100, "City must be less than 100 characters"),
});

export type CheckoutForm = z.infer<typeof checkoutSchema>;
