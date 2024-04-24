// index.js or app.js
import { signUp, signIn } from './authService.js';
import handleAuthChange from './authHandler.js';

// Register auth change handler
handleAuthChange();

// Example usage of signUp and signIn
async function registerUser() {
    try {
        const { user, session } = await signUp('user@example.com', 'password123');
        console.log('User signed up:', user);
        console.log('Session:', session);
    } catch (error) {
        console.error('Signup failed:', error.message);
    }
}

async function loginUser() {
    try {
        const { user, session } = await signIn('user@example.com', 'password123');
        console.log('User signed in:', user);
        console.log('Session:', session);
    } catch (error) {
        console.error('Signin failed:', error.message);
    }
}

// Uncomment these to test functionality after setup
// registerUser();
// loginUser();
