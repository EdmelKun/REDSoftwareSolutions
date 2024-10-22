import { motion } from "framer-motion";
import { forwardRef, useState, useRef } from "react";
import { divVariants, itemVariants } from "../animationVariants/variants";
import {
  MapPinIcon,
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

const Contacts = forwardRef<HTMLDivElement>((_props, ref) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setModalMessage("Copied to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  const contactData = [
    {
      id: 1,
      title: "Location",
      data: "1392 Mansion Road Roxas City, Capiz",
      icon: <MapPinIcon />,
      action: () => {
        window.location.href =
          "https://www.google.com/maps/place/1392+Mansion+Rd,+Roxas+City,+Capiz/@11.5759542,122.7509515,17z/data=!3m1!4b1!4m5!3m4!1s0x33a5f2fca1c6c9e5:0xdd059e012969ef91!8m2!3d11.5759542!4d122.7535264?entry=ttu";
      },
    },
    {
      id: 2,
      title: "Phone Number",
      data: "09336216080",
      icon: <PhoneIcon />,
      action: () => {
        copyToClipboard("09336216080");
      },
    },
    {
      id: 3,
      title: "Domain",
      data: "www.redsoftwaresolutions.org",
      icon: <GlobeAltIcon />,
      action: () => {
        window.location.href = "www.redsoftwaresolutions.org";
      },
    },
    {
      id: 4,
      title: "Email",
      data: "redsoftwaresolutions1@gmail.com",
      icon: <EnvelopeIcon />,
      action: () => {
        copyToClipboard("redsoftwaresolutions1@gmail.com");
      },
    },
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_0r7pxju", "template_idrgjna", formRef.current!, {
        publicKey: "Yz8Pw8dBJdrBeAnxK",
      })
      .then(
        () => {
          setLoading(false);
          formRef.current!.reset();
          setModalMessage("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
          setModalMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
      {modalMessage && (
        <Modal message={modalMessage} onClose={() => setModalMessage(null)} />
      )}
      <motion.div
        variants={divVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="flex flex-col-reverse md:flex-row md:h-[100vh] justify-center items-center md:items-stretch"
        ref={ref}
      >
        <div className="grid md:grid-cols-2 md:w-[40%] w-[40%] h-[60%] md:items-stretch md:justify-normal items-center justify-center md:m-12 gap-5 mb-5 md:mt-[10%]">
          {contactData.map((contact, index) => {
            return (
              <motion.button
                key={contact.id}
                onClick={contact.action}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                custom={index}
                className="flex flex-col bg-gray-900 justify-evenly items-center rounded-lg hover:bg-gray-800 transition duration-300"
              >
                <div className="flex flex-col justify-evenly items-center rounded-lg p-5">
                  <span className="h-20 w-20 text-gray-200">
                    {contact.icon}
                  </span>
                  <span className="text-lg font-bold text-gray-200 font-roboto">
                    {contact.title}
                  </span>
                  <span className="text-md text-gray-200 font-roboto">
                    {contact.data}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
        <div className="flex md:w-[50%] w-full justify-center items-center mt-[40%] md:mt-[0%]">
          <div className="flex flex-col w-[100%] bg-zinc-300 justify-center items-center rounded-lg md:m-10 m-5">
            <span className="text-5xl my-10 font-roboto font-bold">
              Contact Us
            </span>
            <form
              ref={formRef}
              className="flex flex-col w-[90%] h-[50%] justify-center gap-5"
              onSubmit={sendEmail}
            >
              <input
                className="h-14 rounded-lg font-roboto"
                type="text"
                name="from_name"
                placeholder="Enter your name"
                required
              />
              <input
                className="h-14 rounded-lg font-roboto"
                type="email"
                name="email_id"
                placeholder="Enter your valid email"
                required
              />
              <textarea
                className="resize-none rounded-lg font-roboto"
                name="message"
                rows={8}
                placeholder="What would you like to inquire?"
                required
              />
              <button
                className={`h-14 w-[25%] bg-gray-900 text-gray-200 rounded-lg self-center mb-5 font-roboto ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth="4" />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
});

export default Contacts;
