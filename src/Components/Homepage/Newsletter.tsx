"use client"
import { useState } from "react";
import { RiLoader5Fill } from "react-icons/ri";

export const Newsletter = () => {
  const [mail, setMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [messageState, setMessageState] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a delay for loading
    setTimeout(() => {
      setLoading(false);
      setMessageState("Thank you for subscribing!"); // Simulated success message
    }, 1000);
  };

  return (
    <section className="container mx-auto my-16 max-w-7xl px-4 sm:px-6 lg:px-8 relative font-serif">
      {/* Gradient Background */}
      <div className='absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5),rgb(14,0,36,.5)_78%,transparent)] z-10'></div>

      <div className="grid items-center gap-10 bg-black py-[15%] px-[6%] dark:bg-zinc-900 md:p-[6%] lg:grid-cols-2 relative z-20">
        <div>
        <h1 className='text-3xl font-semibold tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,_white,_white,_rgb(74,32,138,.5))] bg-clip-text text-transparent text-center '>
          Join Our News Letter
        </h1>
          <p className="mt-5 text-lg text-neutral-200">
            Join our newsletter to get new posts before anyone else, I&apos;ll
            send you an email with links to all of the articles.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="gap-3 md:flex">
            <input
              type="email"
              className="peer block w-full rounded-md border-gray-300 bg-black py-3 pl-7 pr-12 text-white focus:border-white focus:ring-white peer-invalid:text-pink-600 dark:border-zinc-500 dark:bg-zinc-900 dark:focus:ring-white sm:text-sm"
              placeholder="Your Email"
              autoComplete="email"
              required
              onChange={(e) => setMail(e.target.value)}
            />

            <button
              disabled={loading}
              type="submit"
              className="mt-5 w-full rounded-md bg-white py-3 px-5 text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-opacity-60 md:mt-0 md:w-auto"
            >
              {!loading ? (
                "SUBSCRIBE"
              ) : (
                <div className="flex w-full items-center justify-center">
                  <RiLoader5Fill className="w-8 animate-spin" />
                </div>
              )}
            </button>
          </div>

          {messageState && (
            <p className={`mt-2 ${loading ? "text-pink-500" : "text-green-400"} dark:text-green-400`}>
              {messageState}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
