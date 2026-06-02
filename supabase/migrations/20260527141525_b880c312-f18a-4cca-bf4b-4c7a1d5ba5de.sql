ALTER TABLE public.contact_leads
  ADD COLUMN IF NOT EXISTS company text,
  ADD COLUMN IF NOT EXISTS service text,
  ADD COLUMN IF NOT EXISTS city text;

DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.contact_leads;

CREATE POLICY "Anyone can submit a lead"
ON public.contact_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 100
  AND length(email) BETWEEN 3 AND 255
  AND length(message) BETWEEN 1 AND 2000
  AND (phone IS NULL OR length(phone) <= 30)
  AND (subject IS NULL OR length(subject) <= 100)
  AND (company IS NULL OR length(company) <= 150)
  AND (service IS NULL OR length(service) <= 100)
  AND (city IS NULL OR length(city) <= 100)
);