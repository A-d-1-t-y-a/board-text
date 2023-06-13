"use client";

import { useEffect, useState } from "react";

import { signIn, useSession } from "next-auth/react";

import { useRouter } from "next/navigation";

import Image from "next/image";

import Button from "@/components/Button";
import Input from "@/components/Input";

function page() {
  const route = useRouter();

  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: "",
    password: "",
    userNull: null,
  });
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => setEmail(e.target.value);

  const handlePassword = (e) => setPassword(e.target.value);

  const handleNavigate = () => route.push("/dashboard");

  const handleValidation = () => {
    if (email.length && password.length) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        setError({
          password: "",
          userNull: null,
          email: "Please Enter a Valid Email",
        });
      else fetchUserDetails();
    } else {
      if (email.length)
        setError({
          email: "",
          userNull: null,
          password: "This field is required* please enter any value",
        });
      else
        setError({
          password: "",
          userNull: null,
          email: "This field is required*",
        });
    }
  };

  const fetchUserDetails = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/signin/${email}`, { method: "GET" });

      const data = await res.json();

      if (data) {
        localStorage.setItem("Email", data);
        handleNavigate();
      } else
        setError({
          email: "",
          password: "",
          userNull:
            "User doesn't existed, please click on continue with google for create an Account",
        });
    } catch {
      setError({
        email: "",
        password: "",
        userNull: "Network error or Api error, please try again",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderErrorMessage = (errorMessage) => (
    <p className="text-red-500 mt-1 ml-1 max-w-[20rem]">{errorMessage}</p>
  );

  const renderEmailAndPasswordIp = () => (
    <div className="bg-white p-5 sm:p-[1.875rem] rounded-[0.625rem] flex flex-col gap-5 mb-5 mt-[1.5625rem] font-lato">
      <Input
        labelText="Email address"
        labelClassName="text-black text-base mb-[0.625rem]"
        placeholder="Enter your email address"
        className="text-black bg-emailPlaceholder"
        value={email}
        onChange={handleEmail}
        type="email"
        wrapperClassName="bg-emailPlaceholder pt-[0.625rem] pb-[0.6875rem] w-full sm:w-[20.3125rem]"
        error={error.email && renderErrorMessage(error.email)}
      />
      <Input
        labelText="Password"
        labelClassName="text-black text-base mb-[0.625rem]"
        placeholder="Enter your password"
        className="text-black bg-emailPlaceholder"
        type="password"
        onChange={handlePassword}
        value={password}
        wrapperClassName="bg-emailPlaceholder pt-[0.625rem] pb-[0.6875rem]"
        error={error.password && renderErrorMessage(error.password)}
      />
      <p className="text-linkText text-base">Forgot password?</p>
      <Button
        title={
          loading ? (
            <Image
              src="/assets/icons/Infinity-loading.svg"
              width={30}
              height={10}
              alt="icon"
            />
          ) : (
            "Sign In"
          )
        }
        // disabled={!password.length || !email.length}
        className="bg-black py-[0.5625rem] rounded-[0.625rem] text-white font-bold text-base justify-center w-full font-montserrat disabled:bg-slate-500 hover:bg-slate-500"
        onClick={handleValidation}
      />
      {error.userNull && renderErrorMessage(error.userNull)}
    </div>
  );

  const renderSignInBox = () => (
    <div className="py-4 px-2 sm:p-0">
      <p className="font-bold text-black text-4xl text-center sm:text-left">
        Sign In
      </p>
      <p className="text-black text-base mt-[0.3125rem] mb-[1.625rem] font-lato text-center sm:text-left">
        Sign in to your account
      </p>
      <div className="flex gap-[1.5625rem]">
        <Button
          className="gap-[0.625rem] bg-white px-[1.1875rem] py-[0.4375rem] text-xs text-subTitle rounded-[0.625rem] flex-1"
          onClick={signIn}
          title="Sign in with Google"
          imageIcon="google-logo.svg"
        />
        <Button
          className="gap-[0.625rem] bg-white px-[1.1875rem] py-[0.4375rem] text-xs text-subTitle rounded-[0.625rem] flex-1"
          title="Sign in with Apple"
          imageIcon="apple-logo.svg"
        />
      </div>
      {renderEmailAndPasswordIp()}
      <p className="text-base text-subTitle text-center font-lato">
        Don’t have an account?{" "}
        <span className="text-linkText"> Register here</span>
      </p>
    </div>
  );

  useEffect(() => {
    if (session?.user) handleNavigate();
  }, [session]);

  return (
    <main className="h-screen w-full block sm:flex">
      <div className="flex items-center justify-center w-full sm:w-5/12 md:w-5/12 lg:w-[36.75rem] xl:w-5/12 min-h-[30vh] bg-black">
        <p className="font-bold text-white text-7xl">Board.</p>
      </div>
      <div className="flex-1 flex items-center justify-center bg-backgroundColor min-h-[70vh]">
        {renderSignInBox()}
      </div>
    </main>
  );
}

export default page;
