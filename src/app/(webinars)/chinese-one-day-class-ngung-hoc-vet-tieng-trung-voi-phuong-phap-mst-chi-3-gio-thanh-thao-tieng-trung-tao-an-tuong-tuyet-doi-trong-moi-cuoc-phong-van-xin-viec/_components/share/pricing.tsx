import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
export default function Pricing() {
  return (
    <div className="space-y-2">
      <div className="-space-y-2 md:-space-y-3">
        <div className="flex gap-3 items-center mb-2">
          {/* Giá giảm */}
          <p className="line-through body1-regular">210.000 VNĐ</p>
          {/* Tag giảm */}
          <p className="bg-primary text-primary-foreground rounded-full px-2 py-1 md:px-3 md:py-1 body3">
            Đăng ký sớm giảm 53%
          </p>
        </div>

        <div className="flex justify-between">
          {/* Giá mới */}
          <h3 className="h2 text-secondary">99.000 VNĐ</h3>
          {/* % giảm */}
          <div className=" text-primary font-bold flex items-baseline">
            <ArrowDown className="mb-1 size-4 md:size-6" />
            <span className="h2">53</span>
            <span className="body1-semi">%</span>
          </div>
        </div>
      </div>

      <Link href="/thanh-toan" className="flex">
        <Button
          variant="secondary"
          size="lg"
          className="w-full flex justify-center"
        >
          Giữ vé ngay
        </Button>
      </Link>
    </div>
  );
}
