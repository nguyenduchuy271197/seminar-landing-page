"use client";

import Image from "next/image";
import Link from "next/link";
import { NAVBAR_HEIGHT } from "../(marketing)/_components/navbar";
import { Badge } from "@/components/ui/badge";
import Category, { categoryOptions } from "./category";
import { useState } from "react";
import { classes } from "./data";

const statuses = {
  upcoming: {
    bgColor: "#ffffff",
    color: "#010174",
    label: "Sắp diễn ra",
  },
  occurring: {
    bgColor: "#010174",
    color: "#ffffff",
    label: "Đang diễn ra",
  },
  happened: {
    bgColor: "#495057",
    color: "#ffffff",
    label: "Đã diễn ra",
  },
};

export default function SeminarList() {
  const [category, setCategory] = useState("all");
  function handleCategoryChange(value: string) {
    setCategory(value);
  }

  const filteredClasses = classes.filter(
    (c) => c.category === category || category === "all"
  );

  // const sorted = filteredClasses.sort(() => {
  //   const order = { occurring: 0, happened: 1, upcoming: 2 };
  // });

  return (
    <section
      id="cac-khoa-hoc"
      style={{
        scrollMarginTop: NAVBAR_HEIGHT,
      }}
    >
      <div className="container">
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl/[44px] sm:text-5xl/[64px] font-bold text-balance">
              Khóa học của chúng tôi
            </h2>
            <p className="body2-regular text-balance">
              Những khóa học trải dài trên nhiều lĩnh vực có thể giúp bạn thay
              đổi cuộc sống
            </p>
          </div>

          <Category value={category} onChange={handleCategoryChange} />

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((item, idx) => (
              <li key={idx} className="space-y-4">
                <Link
                  href={
                    item.status === "upcoming"
                      ? `/waitlist?slug=${item.slug}`
                      : `/${item.slug}`
                  }
                  className="relative group"
                >
                  <p
                    className="absolute top-4 left-6 rounded-md body2-semi py-1 px-3 z-10 whitespace-nowrap"
                    style={{
                      backgroundColor: statuses[item.status].bgColor,
                      color: statuses[item.status].color,
                    }}
                  >
                    {statuses[item.status].label}
                  </p>

                  <div className="relative overflow-hidden rounded-md">
                    <Image
                      src={item.src}
                      alt="Class"
                      width={1201}
                      height={676}
                      className="w-full group-hover:scale-105 transition"
                    />
                  </div>
                </Link>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <Badge>
                      {
                        categoryOptions.find((c) => c.value === item.category)
                          ?.label
                      }
                    </Badge>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="body2-regu line-clamp-2 text-neutral-800">
                      {item.description}
                    </p>
                  </div>
                  <ul className="flex items-center gap-1">
                    {item.tags.map((tag) => (
                      <li key={tag}>
                        <Badge variant="gray">{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
