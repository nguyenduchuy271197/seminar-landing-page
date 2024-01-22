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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const nameRegex = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
);

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const genderOptions = ["Nam", "Nữ", "Khác"] as const;

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
    .max(10, "Số điện thoại phải có 10 chữ số")
    .regex(phoneRegex, "Số điện thoại chỉ có số"),

  email: z
    .string()
    .min(2, {
      message: "Địa chỉ email không hợp lệ",
    })
    .email("Phải là địa chỉ email có thật"),
  gender: z.enum(genderOptions),
  brief: z.string().optional(),
});

type WaitlistForm = z.infer<typeof waitlistFormSchema>;

interface Waitlist {
  name: string;
  phone: string;
  email: string;
  gender: string;
  brief?: string;
}

export default function WaitlistForm() {
  const form = useForm<WaitlistForm>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      gender: "Nam",
      brief: "",
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
      gender: data.gender,
      brief: data.brief,
    });

    toast.success("Cám ơn bạn đã đăng ký khoá", {
      description:
        "Chúng tôi sẽ liên hệ với bạn thông qua email khi khoá sẵn sàng",
    });

    form.reset();
    // router.replace("/");
  }

  return (
    <section className="space-y-8">
      <div>
        <h2 className="h2">Khóa học sắp diễn ra để thay đổi cuộc đời bạn...</h2>
        <p className="body2-regular">
          Hãy đăng ký vào danh sách chờ để tham gia vào khóa học của chúng tôi!
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 rounded-md"
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

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Giới tính<span className="text-primary">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn giới tính" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {genderOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="brief"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Bạn mong đợi gì từ khóa học của chúng tôi?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tôi muốn khóa học này có..."
                    {...field}
                    disabled={form.formState.isSubmitting}
                    className="resize-none"
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
              Đăng ký vào danh sách chờ
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
