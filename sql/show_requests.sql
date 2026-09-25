CREATE TABLE show_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  first_name TEXT NOT NULL,
  last_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  mailing_list_opt_in BOOLEAN NOT NULL DEFAULT FALSE,

  preferred_date_first_choice DATE,
  preferred_date_second_choice DATE,
  preferred_date_third_choice DATE,

  location TEXT NOT NULL CHECK (location IN ('stl-area', 'outside-stl-area')),
  city TEXT,
  state TEXT,

  place_to_crash_opt_in BOOLEAN,
  place_to_crash_description TEXT,
  needs_help_finding_place_to_crash BOOLEAN,

  has_venue BOOLEAN NOT NULL,
  venue_type TEXT CHECK (venue_type IN ('house', 'bar/club', 'other')),
  venue_name TEXT,
  venue_website TEXT,
  venue_address TEXT,
  can_arrange_venue BOOLEAN,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);