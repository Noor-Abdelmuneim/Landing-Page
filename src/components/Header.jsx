import { useEffect, useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-[#0c1524] py-[20px]" : "bg-transparent py-[60px]"
      }`}
    >
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
