"use client";

import React from "react";
import SocialLogins from "./SocialLogins";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Form submitted");
  
    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      console.log("Form data:", name, email, password);
  
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
  
      const data = await response.json();
      console.log("Response:", data);
  
      if (response.ok) {
        console.log("Success:", data.message);
        console.log("Redirecting to Home...");
        router.push("/"); // This should now work after successful registration
      } else {
        console.error("Error:", data.error);
      }
    } catch (e) {
      console.error("Fetch error:", e);
    }
  }
  

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="my-5 flex flex-col items-center border p-3 border-gray-200 rounded-md"
      >
        <div className="my-2">
          <label htmlFor="name">Name</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email Address</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="password">Password</label>
          <input
            className="border mx-2 border-gray-500 rounded"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-300 mt-4 rounded flex justify-center items-center w-36"
        >
          Register
        </button>
      </form>
      <SocialLogins />
    </>
  );
};

export default RegistrationForm;