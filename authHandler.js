// authHandler.js
import supabase from './supabaseClient.js';

function handleAuthChange() {
    supabase.auth.onAuthStateChange((event, session) => {
        console.log('Auth event:', event);
        console.log('Current session:', session);
    });
}

export default handleAuthChange;