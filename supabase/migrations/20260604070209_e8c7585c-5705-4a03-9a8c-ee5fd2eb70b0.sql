CREATE TABLE public.whatsapp_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_name text NOT NULL,
  product_slug text,
  page_url text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.whatsapp_clicks TO anon, authenticated;
GRANT SELECT ON public.whatsapp_clicks TO authenticated;
GRANT ALL ON public.whatsapp_clicks TO service_role;

ALTER TABLE public.whatsapp_clicks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can log a click"
  ON public.whatsapp_clicks FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(product_name) >= 1 AND length(product_name) <= 200
    AND (product_slug IS NULL OR length(product_slug) <= 100)
    AND (page_url IS NULL OR length(page_url) <= 500)
    AND (user_agent IS NULL OR length(user_agent) <= 500)
  );

CREATE POLICY "Admins view clicks"
  ON public.whatsapp_clicks FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));