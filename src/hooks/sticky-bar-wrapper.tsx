"use client";

import React, { HTMLAttributes, ReactNode, useEffect } from "react";
import { useInViewStore } from "./use-inview";
import { useInView } from "react-intersection-observer";

export default function StickyBarWrapper({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const hide = useInViewStore((state) => state.hide);
  const show = useInViewStore((state) => state.show);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      show();
    } else {
      hide();
    }
  }, [inView, hide, show]);
  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
