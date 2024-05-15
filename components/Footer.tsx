import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

function Footer() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/polpages/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/polpagesdev",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "mailto:polpages1999@gmail.com",
      label: "Mail",
      Icon: SiGmail,
    },
  ];

  return (
    <nav className="sm:px-16 py-8 px-8 flex justify-between items-center gap-2 flex-wrap">
      <a href="https://www.polpages.dev">
        <h1 className="text-xl font-bold underline underline-offset-8 decoration-[#ffc800] -rotate-2 lg:hover:-rotate-6 lg:hover:scale-105 lg:transition-all">
          polpages.dev
        </h1>
      </a>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-2 sm:gap-4">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link
              href={social.link}
              key={index}
              aria-label={social.label}
              target="_blank"
            >
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Footer;
