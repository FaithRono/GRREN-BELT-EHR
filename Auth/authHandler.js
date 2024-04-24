import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import supabase from SupabaseAuthClient;

function handleAuthChange() {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log('Auth event:', event);
        console.log('Current session:', session);
    });
}

export default handleAuthChange;