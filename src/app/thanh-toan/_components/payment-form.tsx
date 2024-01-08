"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { SingleImageDropzone } from "@/components/ui/dropzone";
import { useEdgeStore } from "@/lib/edgestore";
import { useRouter } from "next/navigation";

const CHECKOUT_PAYMENT_URL =
  "https://likelion.notion.site/B-n-gi-v-th-nh-c-ng-vui-l-ng-thanh-to-n-trong-24h-12453ec766eb40508ec09b2aff321add?pvs=4";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

// const MAX_FILE_SIZE = 50000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

const paymentFormSchema = z.object({
  name: z.string().min(2, {
    message: "Tên không hợp lệ",
  }),

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

  // image: z
  //   .any()
  //   .refine((file) => !!file, "Image is required.")
  //   .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  //   .refine(
  //     (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
  //     ".jpg, .jpeg, .png and .webp files are accepted."
  //   ),

  code: z.string().optional(),
});

type PaymentForm = z.infer<typeof paymentFormSchema>;
// interface Payment extends Omit<PaymentForm, "image"> {
//   url: string;
// }
interface Payment {
  name: string;
  phone: string;
  email: string;
  code?: string;
}

export default function PaymentForm() {
  const form = useForm<PaymentForm>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      code: "",
    },
  });
  const router = useRouter();

  // const { edgestore } = useEdgeStore();

  const { mutate: mutateSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: (paymentInfo: Payment) =>
      axios.post("/api/payment", paymentInfo),
    // onMutate: () => {
    //   toast.success("Bạn đã đăng ký thành công!");
    //   form.reset();
    // },
  });

  async function onSubmit(data: PaymentForm) {
    // if (data.image) {
    //   const res = await edgestore.publicFiles.upload({
    //     file: data.image,
    //     onProgressChange: (progress) => {
    //       console.log(progress);
    //     },
    //   });
    //   const fileUrl = res.url;

    mutateSubmit({
      name: data.name,
      phone: data.phone,
      email: data.email,
      // url: fileUrl,
      code: data.code,
    });

    router.replace(CHECKOUT_PAYMENT_URL);
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

        {/* <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ảnh chụp màn hình chuyển khoản</FormLabel>
              <FormControl>
                <SingleImageDropzone
                  width={200}
                  height={200}
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mã giới thiệu</FormLabel>
              <FormControl>
                <Input
                  placeholder="Mã giới thiệu"
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
            Thực hiện thanh toán
          </Button>
        </div>
      </form>
    </Form>
  );
}
