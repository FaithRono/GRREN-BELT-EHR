import { signUp, signIn } from "./Auth/authService";
import handleAuthChange from "./Auth/authHandler";

async function registerUser() {
    try {
        const { user, session } = await signUp('user@example.com', 'password123');
        console.log('User signed up:', user.email);
        console.log('Session:', session);
    } catch (error) {
        console.error('Signup failed:', error.message);
    }
}

async function loginUser() {
    try {
        const { user, session } = await signIn('user@example.com', 'password123');
        console.log('User signed in:', user.email);
        console.log('Session:', session);
    } catch (error) {
        console.error('Signin failed:', error.message);
    }
}

handleAuthChange();
await registerUser();
await loginUser();