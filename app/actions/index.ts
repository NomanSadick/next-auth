'use server'

import { signIn, signOut } from "@/auth";

// Google Sign In
export async function doSignInGoogle() {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
}

// LinkedIn Sign In
export async function doSignInLinkedIn() {
    await signIn("linkedin", { callbackUrl: "http://localhost:3000" });
}

// Facebook Sign In
export async function doSignInFacebook() {
    await signIn("facebook", { callbackUrl: "http://localhost:3000" });
}

// Sign Out
export async function doSignOut() {
    await signOut();
}




// export async function login(formData) {
//     try {
//       const response = await signIn("credentials", {
//         email: formData.get("email"),
//         password: formData.get("password"),
//         redirect: false,
//       });
//       return response;
//     } catch (err) {
//       throw err;
//     }
//   }