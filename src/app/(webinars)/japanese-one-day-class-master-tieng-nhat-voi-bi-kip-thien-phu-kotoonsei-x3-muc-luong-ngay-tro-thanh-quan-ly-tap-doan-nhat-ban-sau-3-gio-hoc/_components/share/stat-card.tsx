"use client";
import CountUp from "react-countup";

export default function StatCard({
  value,
  postfix,
  title,
}: {
  value?: number;
  postfix?: string;
  title: string;
}) {
  return (
    <li className="md:flex md:gap-2 items-center text-balance">
      <h1 className="h1 text-primary">
        {/* {value !== undefined && <CountUp end={value} />} */}
        {value}
        {postfix}
      </h1>
      <p className="text-gray-600 body1-regular uppercase">{title}</p>
    </li>
  );
}
