"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export default function EmailConfirmation() {
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post("/api/success-confirmation"),
  });
  useEffect(() => {
    mutate();
  }, [mutate]);
  return null;
}
