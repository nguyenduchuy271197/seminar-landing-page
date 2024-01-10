"use client";

import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import PaymentContent from "../thanh-toan/_components/payment-content";

export default function ThankYouPage() {
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post("/api/success-confirmation"),
  });
  useEffect(() => {
    mutate();
    console.log("Ok!");
  }, [mutate]);

  return (
    <section>
      <div className="max-w-screen-lg mx-auto px-8">
        <div className="grid sm:grid-cols-2 gap-12 py-20">
          <PaymentContent />
          <div className="bg-neutral-100 rounded-md">
            <div className="flex flex-col py-[87px] px-[60px] items-center gap-6">
              <div className="size-[100px] bg-[#008900] rounded-full flex justify-center items-center">
                <Check className="size-[70px] text-white" />
              </div>

              <div className="text-center">
                <h4 className="subtitle1">Bạn đã đặt vé thành công</h4>
                <p className="body2-regular">
                  Theo dõi email thường xuyên để nhận được thông báo mới nhất từ
                  chúng tôi.
                </p>
              </div>

              <Button className="uppercase bg-neutral-600">
                <Link href="/">Trở về trang chủ</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
