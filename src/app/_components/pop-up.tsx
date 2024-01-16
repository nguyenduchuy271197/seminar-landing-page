"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function PopUp() {
  const [isOpen, setIsOpen] = useState();

  useEffect(() => {}, []);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-3xl">
          <Image
            src="/Pop-up slogan.png"
            alt="slogan"
            width={800}
            height={600}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
