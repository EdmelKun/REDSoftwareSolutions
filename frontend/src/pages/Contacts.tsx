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

const Contacts = forwardRef<HTMLDivElement, {}>((_props, ref) => {
  const contactData = [
    {
      id: 1,
      title: "Location",
      data: "Mansion Road, Mt Carmel",
      icon: <MapPinIcon />,
    },
    {
      id: 2,
      title: "Phone Number",
      data: "09336216080",
      icon: <PhoneIcon />,
    },
    {
      id: 3,
      title: "Domain",
      data: "www.RedSoftwareSolutions.com",
      icon: <GlobeAltIcon />,
    },
    {
      id: 4,
      title: "Email",
      data: "redsoftwaresolutions1@gmail.com",
      icon: <EnvelopeIcon />,
    },
  ];

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_0r7pxju', 'template_idrgjna', formRef.current, {
        publicKey: 'Yz8Pw8dBJdrBeAnxK',
      })
      .then(
        (res) => {
          console.log(res.status);
          console.log('SUCCESS!');
          setLoading(false);
          formRef.current.reset(); // Reset the form after submission

          // Show success alert
          alert("Message sent successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <motion.div
      variants={divVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
      }}
      className="flex h-[100vh] justify-center"
      ref={ref}
    >
      <div className="grid grid-cols-2 w-[50%] m-12 gap-5 mt-[15vh]">
        {contactData.map((contact, index) => {
          return (
            <motion.div
              key={contact.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              custom={index}
              className="flex flex-col bg-gray-900 justify-evenly items-center rounded-lg"
            >
              <span className="h-20 w-20 text-gray-200">{contact.icon}</span>
              <span className="text-lg font-bold text-gray-200">
                {contact.title}
              </span>
              <span className="text-md text-gray-200">{contact.data}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="flex w-[50%] justify-center items-center">
        <div className="flex flex-col w-[100%] bg-zinc-300 justify-center items-center rounded-lg m-10 mt-[15vh]">
          <span className="text-5xl font-medium my-10 font-poppins">Contact Us</span>
          <form
            ref={formRef}
            className="flex flex-col w-[90%] h-[50%] justify-center gap-5"
            onSubmit={sendEmail}
          >
            <input
              className="h-14 rounded-lg"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
            />
            <input
              className="h-14 rounded-lg"
              type="email"
              name="email_id"
              placeholder="Enter your valid email"
              required
            />
            <textarea
              className="resize-none rounded-lg"
              name="message"
              rows={8}
              placeholder="What would you like to inquire?"
              required
            />
            <button
              className={`h-14 w-[25%] bg-gray-900 text-gray-200 rounded-lg self-center mb-5 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
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
  );
});

export default Contacts;
