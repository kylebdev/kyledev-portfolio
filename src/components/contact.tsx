import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useRef, useEffect } from "react";

export default function Contact() {
  //
  //
  const [isVisible, setIsVisible] = useState(false);
  const animateRef = useRef<HTMLDivElement>(null);
  const [state, handleSubmit] = useForm("movqeqog");
  const [showForm, setShowForm] = useState(true);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleSubmit(e);
    if (state.succeeded) {
      setShowForm(false);
      setTimeout(() => setShowForm(true), 5000); // Show form again after 5 seconds
    }
  };

  // for transition
  useEffect(() => {
    const currentElement = animateRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // console.log("Intersecting:", entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  if (!showForm) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-b-2xl bg-black p-5">
        <p className="text-center font-semibold tracking-tighter text-amber-700">
          Thanks for your message! We'll get back to you soon.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="rounded-lg border border-amber-500 bg-amber-700 p-2 text-sm text-white hover:bg-amber-800"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <section id="contact">
      <div
        className={`${isVisible ? "opacity-100" : "opacity-0"} relative m-auto pb-16 transition-all duration-700 ease-in md:container md:pb-0`}
        ref={animateRef}
      >
        <div className="h-full max-h-[800px] items-center justify-center md:flex md:h-[calc(100vh-2rem)]">
          {/* circle 1 */}

          <div className="block md:flex">
            {/* 1 */}
            <div className="h-full w-full border-8 border-none border-black border-opacity-80 bg-white bg-opacity-90 p-4 md:h-[37rem] md:w-[18rem] md:border-dotted md:p-6 lg:h-[35rem] lg:w-[20rem] 2xl:h-[35rem]">
              <div className="flex h-full w-full flex-col items-center justify-center">
                <h1 className="text-center text-xl font-extrabold tracking-widest text-amber-700 md:text-2xl">
                  CONTACT ME
                </h1>

                <div className="mt-10">
                  <p className="text-balance text-center text-base text-neutral-700 md:text-lg">
                    Bring your ideas to life with creativity and expertise.
                    Let's collaborate to turn your vision into reality!
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-center text-xs text-neutral-700">
                    Write me on my social networks
                  </p>

                  <div className="flex-cols flex justify-center pt-3">
                    <a
                      href="https://www.facebook.com/kaelmotivated/"
                      className="mx-1 duration-75 ease-in hover:scale-125"
                    >
                      <Facebook
                        sx={{
                          fontSize: {
                            xl: 25,
                            lg: 25,
                            md: 25,
                            sm: 25,
                            xs: 25,
                          },
                          color: "black",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/kyleburdeos/"
                      className="mx-1 duration-75 ease-in hover:scale-125"
                    >
                      <Instagram
                        sx={{
                          fontSize: {
                            xl: 25,
                            lg: 25,
                            md: 25,
                            sm: 25,
                            xs: 25,
                          },
                          color: "black",
                        }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kyle-burdeos-541a11248/"
                      className="mx-1 stroke-1 duration-75 ease-in hover:scale-125"
                    >
                      <LinkedIn
                        sx={{
                          fontSize: {
                            xl: 25,
                            lg: 25,
                            md: 25,
                            sm: 25,
                            xs: 25,
                          },
                          color: "black",
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-full bg-black bg-opacity-0 md:h-[37rem] md:w-[28rem] md:bg-opacity-10 lg:h-[35rem] lg:w-[35rem] 2xl:h-[35rem]">
              <div className="flex h-full w-full flex-col items-center justify-center p-8 md:p-12">
                <h1 className="text-center text-lg font-semibold uppercase tracking-wider text-white/80">
                  Send me a message
                </h1>
                <p className="text-center text-xs text-white/50">
                  to: krburdeos20dev@gmail.com
                </p>
                <div className="mt-10" />
                <form
                  className="w-full text-xs text-neutral-700 md:text-base lg:text-sm"
                  onSubmit={handleFormSubmit}
                >
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm text-neutral-500"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        className="w-full rounded-lg border border-neutral-500 p-3"
                      />
                      <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm text-neutral-500"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full rounded-lg border border-neutral-500 p-3"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <label
                        htmlFor="subject"
                        className="text-sm text-neutral-500"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Enter Subject"
                        className="w-full rounded-lg border border-neutral-500 p-3"
                      />
                      <ValidationError
                        prefix="Subject"
                        field="subject"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div>
                      <label
                        htmlFor="message"
                        className="text-sm text-neutral-500"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Enter Message"
                        className="w-full resize-none rounded-lg border border-neutral-500 p-3"
                      />
                      <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <button
                      type="submit"
                      className="rounded-lg border border-amber-500 bg-amber-700 p-3 text-white hover:bg-amber-800 disabled:opacity-50"
                      disabled={state.submitting}
                    >
                      {state.submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
