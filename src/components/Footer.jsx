import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [contact, setContact] = useState([
    {
      icon: "icon-phone.svg",
      text: "+202029837558",
    },
    {
      icon: "icon-email.svg",
      text: "example@example.com",
    },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Privacy",
    "Press",
    "Blog",
  ]);
  const [socialLinks, setSocialLinks] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);
  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus mollitia dignissimos neque id ad sed, eos dolore unde
              rerum a.
            </p>
          </div>
          <div>
            {contact.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                >
                  <img
                    src={`/src/assets/images/${item.icon}`}
                    alt="contact-icon"
                    className="w-[18px] h-[18px] object-contain"
                  />
                  <p className="font-normal text-sm tracking-[0.8px] ml-[10px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="font-normal text-sm tracking-[0.8px] mb-[10px]"
                >
                  <a
                    href={`/${link.toLocaleLowerCase()}`}
                    className="hover:underline hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialLinks.map((socialLink) => {
              return (
                <li
                  key={socialLink}
                  className="flex items-start gap-[10px] hover:text-[#42b0d1] transition-colors duration-200"
                >
                  <a href="">
                    <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                      {socialLink === "facebook" ? (
                        <FaFacebookF />
                      ) : socialLink === "twitter" ? (
                        <FaTwitter />
                      ) : (
                        <FaInstagram />
                      )}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
