/*
  # Contact Reasons Schema

  1. New Tables
    - `contact_reasons`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `contact_reasons` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS contact_reasons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_reasons ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access"
  ON contact_reasons
  FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO contact_reasons (title, description, icon) VALUES
  ('Fast Response', 'Fast response time - typically within 24 hours', 'M5 13l4 4L19 7'),
  ('Collaborative Approach', 'Collaborative approach to bring your vision to life', 'M5 13l4 4L19 7'),
  ('Clear Communication', 'Transparent communication throughout the process', 'M5 13l4 4L19 7');