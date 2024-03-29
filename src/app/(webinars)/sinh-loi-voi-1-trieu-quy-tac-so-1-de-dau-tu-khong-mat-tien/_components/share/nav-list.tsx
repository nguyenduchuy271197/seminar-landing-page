"use client";
import { Link } from "react-scroll";

export default function NavList() {
  const navigation = [
    { title: "Phương pháp", target: "hero" },
    { title: "Tại sao học?", target: "benefits" },
    { title: "Người thật chuyện thật", target: "story" },
    { title: "Diễn giả", target: "speaker" },
    { title: "Lộ trình", target: "agenda" },
    { title: "FAQ", target: "faq" },
  ];
  return (
    <ul className="justify-center items-center lg:flex lg:gap-8">
      {navigation.map((item, idx) => {
        return (
          <Link
            key={idx}
            smooth
            spy
            offset={-64}
            duration={500}
            to={item.target}
            className="block font-medium transition duration-200 cursor-pointer hover:text-primary text-gray-600 py-4 lg:py-0"
            href={`#${item.target}`}
            activeClass="text-primary font-bold"
          >
            {item.title}
          </Link>
        );
      })}
    </ul>
  );
}
