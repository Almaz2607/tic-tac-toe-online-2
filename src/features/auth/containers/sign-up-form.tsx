"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { AuthFormLayout } from "../ui/auth-form-layout";
import { AuthFields } from "../ui/fields";
import { ErrorMessage } from "../ui/error-message";
import { BottomLink } from "../ui/bottom-link";
import { SubmitButton } from "../ui/submit-button";
import { right } from "@/shared/lib/either";

export function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Sign up successful:", { email, password });
      router.push("/dashboard");
    } catch (err) {
      setError("An error occured during sign-up. Please try again.");
    }
  };

  return (
    <AuthFormLayout
      title="Sign up"
      description="Create your account to get started"
      onSubmit={handleSubmit}
      fields={
        <AuthFields
          login={email}
          password={password}
          onChangeLogin={setEmail}
          onChangePassword={setPassword}
        />
      }
      error={<ErrorMessage error={right(null)} />}
      actions={<SubmitButton>Sign Up</SubmitButton>}
      link={
        <BottomLink
          text=" Already have an account?"
          linkText="Sign in"
          url="/sign-in"
        />
      }
    />
  );
}
