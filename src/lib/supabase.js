import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yfphwdlmvilfjivuisvi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmcGh3ZGxtdmlsZmppdnVpc3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzNDU3NzksImV4cCI6MjA5MDkyMTc3OX0._2GBfpUjLYD6pj0HHekhri_1zZgGyyzgpPrzGZyi1vw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
