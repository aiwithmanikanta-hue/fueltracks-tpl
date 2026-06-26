import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  city: z.string().trim().max(100).optional().or(z.literal("")),
  product: z.string().trim().min(1, "Product is required").max(100),
  subject: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Message is required").max(2000),
  source: z.string().trim().max(100).optional(),
});

export const submitContactLead = createServerFn({ method: "POST" })
  .inputValidator((input) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const userAgent = getRequestHeader("user-agent") ?? null;

    const { error } = await supabaseAdmin.from("contact_leads").insert({
      name: data.name,
      phone: data.phone || null,
      email: data.email || "",
      company: data.company || null,
      city: data.city || null,
      product: data.product || null,
      subject: data.subject || data.product || null,
      message: data.message,
      source: data.source || "website-contact",
      user_agent: userAgent,
    });

    if (error) {
      console.error("Failed to insert contact lead:", error);
      throw new Error("Could not save your message. Please try again.");
    }

    return { ok: true as const };
  });
