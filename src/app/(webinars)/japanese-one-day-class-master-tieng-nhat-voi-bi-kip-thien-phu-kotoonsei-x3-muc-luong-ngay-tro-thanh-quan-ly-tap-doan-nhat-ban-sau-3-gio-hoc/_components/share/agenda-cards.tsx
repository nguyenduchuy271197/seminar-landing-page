"use client";

import { padZero } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Clock } from "lucide-react";
import { useRef, useState } from "react";

interface CurriculumCard {
  time: string;
  title: string;
  description: string;
}

interface CurriculumCardProps extends CurriculumCard {
  ordNum: string;
}

function AgendaCard({ ordNum, time, title, description }: CurriculumCardProps) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: [0.8, 0.5],
  });
  return (
    <li ref={cardRef} className="relative pl-8 sm:pl-16">
      <div className="bg-secondary text-white py-8 px-6 rounded-md">
        <div className="flex gap-4 items-baseline">
          <h3 className="sm:text-5xl text-[40px] font-bold">{ordNum}</h3>
          <p className="body1-semi">{time}</p>
        </div>

        <div className="space-y-3">
          <p className="h3">{title}</p>

          <p className="body2-regular">{description}</p>
        </div>
      </div>
      <motion.div
        className="absolute top-12 left-0 w-10 h-10 rounded-full bg-secondary -translate-x-1/2 -translate-y-1/2 text-white flex items-center justify-center"
        style={{ opacity: scrollYProgress }}
      >
        <Clock />
      </motion.div>
    </li>
  );
}

export default function AgendaCards({
  curriculum,
}: {
  curriculum: CurriculumCard[];
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [-0.18, 1.4],
  });
  const [hookedYPosition, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest);
  });

  return (
    <div ref={containerRef} className="relative">
      <ul className="space-y-20">
        {curriculum.map((calendar, idx) => (
          <AgendaCard key={idx} ordNum={padZero(idx + 1)} {...calendar} />
        ))}
      </ul>

      <div className="absolute top-12 left-0 w-1 h-full -translate-x-1/2 -z-10 bg-neutral-200">
        <motion.div
          className="bg-secondary w-full h-full origin-top"
          style={{ scaleY: scrollYProgress }}
        ></motion.div>
        {hookedYPosition === 1 && (
          <motion.div className="w-10 h-10 rounded-full absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center justify-center text-5xl">
            🎓
          </motion.div>
        )}
      </div>
    </div>
  );
}
