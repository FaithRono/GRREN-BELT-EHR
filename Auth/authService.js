import supabase from supabaseClient;

export async function signUp(email, password) {
    const { user, session, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    if (error) throw error;
    return { user, session };
}

export async function signIn(email, password) {
    const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password
    });

    if (error) throw error;
    return { user, session };
}
export default {signIn, signUp};