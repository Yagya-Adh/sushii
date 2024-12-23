"use client";
import Image from "next/image";
import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setEmail("");
      }, 2000);
    }
  };
  return (
    <section className="mx-auto max-w-screen-lg md:px-7  md:py-12 lg:px-7">
      <div className="md:rounded-tl-3xl md:rounded-br-3xl bg-black flex items-center gap-10 relative py-12 px-7 lg:px-12">
        <div className="hidden md:flex items-center inset-0 -translate-y-14 z-20">
          <Image
            src="/assets/subscribe.png"
            alt="food and taste"
            width={250}
            height={380}
            className="object-center object-cover h-[380px] w-[250px] rounded-bl-3xl"
          />
        </div>
        <div>
          <h2 className="text-white text-3xl lg:text-4xl text-center md:text-start font-poppins font-extrabold mb-2.5">
            Subscribe to our newsletter
          </h2>
          <p className="text-white font-poppins font-normal text-base xl:text-xl text-center md:text-start max-w-screen-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus.
          </p>
          {submitted ? (
            <div className="mt-10 py-3 px-2 rounded-xl md:w-2/3 w-full text-base lg:text-xl text-center text-white bg-sushii-coral-10 font-poppins font-normal">
              You have been added to the list!
            </div>
          ) : (
            <form className="flex inset-0" onSubmit={handleSubmit}>
              <div className="bg-white rounded-xl w-full md:w-3/4 px-2 py-2 mt-10 flex items-center">
                <input
                  required
                  maxLength={256}
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="outline-none w-full px-2 py-1"
                />
                <button
                  type="submit"
                  className="bg-sushii-coral-10 ml-2 rounded-xl h-10 w-2/3 md:w-1/2 hover:scale-105 duration-200 transition-all ease-linear flex flex-col justify-center items-center"
                  disabled={loading}
                >
                  <span className="text-xs text-white font-poppins px-6 py-2">
                    {loading ? "Please wait..." : "SUBSCRIBE"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
