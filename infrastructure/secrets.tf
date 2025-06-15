resource "aws_secretsmanager_secret" "supabase_service_key" {
  name = "supabase/service_role_key"
  description = "Stores the Supabase service role key for backend services."
}