"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const nameRegex = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
);

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const waitlistFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Tên không hợp lệ",
    })
    .regex(nameRegex, "Tên không được phép ghi số"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có 10 chữ số")
    .regex(phoneRegex, "Số điện thoại chỉ có số"),

  email: z
    .string()
    .min(2, {
      message: "Địa chỉ email không hợp lệ",
    })
    .email("Phải là địa chỉ email có thật"),
});

type WaitlistForm = z.infer<typeof waitlistFormSchema>;

interface Waitlist {
  name: string;
  phone: string;
  email: string;
}

export default function WaitlistForm() {
  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  const router = useRouter();

  const { mutate: mutateSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: (waitlistInfo: Waitlist) =>
      axios.post("/api/waitlist", waitlistInfo),
  });

  async function onSubmit(data: WaitlistForm) {
    mutateSubmit({
      name: data.name,
      phone: data.phone,
      email: data.email,
    });

    toast.success("Cám ơn bạn đã đăng ký khoá", {
      description:
        "Chúng tôi sẽ liên hệ với bạn thông qua email khi khoá sẵn sàng",
    });

    form.reset();
    // router.replace("/");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-[#F8F9FA] px-6 py-10 rounded-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Họ và tên<span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Họ và tên"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                SĐT<span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="0xx xxx xx xx"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email<span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="!mt-6">
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="uppercase"
          >
            Join Waitlist
          </Button>
        </div>
      </form>
    </Form>
  );
}
