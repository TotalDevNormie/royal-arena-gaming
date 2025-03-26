import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import type { PopUpChild } from "./PopUpWrapper";
import { api } from "~/trpc/react";

const Auth: PopUpChild = ({ close, isOpen }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Mode: login or register.
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  // Common feedback messages.
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Login state.
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  // Register state.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerMutation = api.auth.register.useMutation({
    onSuccess: () => {
      // Registration was successful.
      setSuccessMessage("Registration successful. Please log in.");
      setError("");
    },
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!identifier || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");

    try {
      const res = await signIn("credentials", {
        identifier,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Username or password is incorrect.");
      } else {
        router.refresh();
        close && close(); // Close popup if a close function is provided.
        // Alternatively, you can redirect using router.push() e.g.:
        // router.push("/dashboard");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred during login.");
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    registerMutation.mutate({ username, email, password });
  };

  console.log(registerMutation?.error?.message);

  return (
    <div className="grid gap-8">
      {authMode === "login" ? (
        <form
          onSubmit={handleLogin}
          className="w-fit-small flex flex-col gap-4"
        >
          <h2 className="text-left">Sign in</h2>
          {error && <span className="text-red-500">{error}</span>}
          {successMessage && (
            <span className="text-green-500">{successMessage}</span>
          )}
          <label htmlFor="identifier" className="grid gap-2">
            <span className="ml-4 text-xl">Username or Email</span>
            <input
              type="text"
              name="identifier"
              autoComplete="username"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="grid gap-2">
            <span className="ml-4 text-xl">Password</span>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="bg-blue-3 mt-4 w-full rounded-full p-4">
            Login
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setAuthMode("register");
                setError("");
                setSuccessMessage("");
              }}
            >
              Register
            </button>
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleRegister}
          className="w-fit-small flex flex-col gap-4"
        >
          <h2 className="text-left">Register</h2>
          <span className="text-red-500">
            {registerMutation?.error?.message || error}
          </span>
          <label htmlFor="username" className="grid gap-2">
            <span className="ml-4 text-xl">Username</span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="grid gap-2">
            <span className="ml-4 text-xl">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="grid gap-2">
            <span className="ml-4 text-xl">Password</span>
            <input
              type="password"
              name="password"
              autoComplete="new-password"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label htmlFor="confirmPassword" className="grid gap-2">
            <span className="ml-4 text-xl">Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              className="w-full rounded-full border-none bg-white p-4"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <button
            className="bg-blue-3 mt-4 w-full rounded-full p-4"
            disabled={registerMutation.isPending}
          >
            {registerMutation.isPending ? "Registering..." : "Register"}
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <button
              type="button"
              className="underline"
              onClick={() => {
                setAuthMode("login");
                setError("");
              }}
            >
              Login
            </button>
          </p>
        </form>
      )}

      <div className="relative flex justify-center">
        <span className="z-10 bg-black p-4 text-center">or</span>
        <span className="absolute top-1/2 right-0 w-full border-1 border-[#3A393B]"></span>
      </div>
      <button
        onClick={() => signIn("discord")}
        className="flex w-full justify-center gap-2 rounded-full bg-[#7289da] p-4"
      >
        <Image
          src="/discord.png"
          className="invert"
          alt="discord"
          width={30}
          height={20}
        />
        Sign in with Discord
      </button>
    </div>
  );
};

export default Auth;
