// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wvksmwyiajqlisnmejit.supabase.co'; // Replace with your actual project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2a3Ntd3lpYWpxbGlzbm1laml0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjEwNzMsImV4cCI6MjAyOTEzNzA3M30.dtyej_wD3t_OT6Uwsyn1fEO43XhBPQK6xbI4CcA2wGs'; // Replace with your actual anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
