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
import { classes } from "@/app/_components/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const nameRegex = new RegExp(
  /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
);

// const MAX_FILE_SIZE = 50000;
// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

const codeOption = [
  "Quảng cáo từ Facebook và Instagram",
  "KOL",
  "Bạn bè giới thiệu",
] as const;

const paymentFormSchema = z.object({
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

  // image: z
  //   .any()
  //   .refine((file) => !!file, "Image is required.")
  //   .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  //   .refine(
  //     (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
  //     ".jpg, .jpeg, .png and .webp files are accepted."
  //   ),

  code: z.enum(codeOption).optional(),
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

export default function PaymentForm({ slug }: { slug?: string }) {
  const form = useForm<PaymentForm>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      code: undefined,
    },
  });
  const router = useRouter();

  // const { edgestore } = useEdgeStore();

  const { mutate: mutateSubmit, isPending: isSubmitting } = useMutation({
    mutationFn: (paymentInfo: Payment) =>
      axios.post(`/api/payment?slug=${slug}`, paymentInfo),
    // onMutate: () => {
    //   toast.success("Bạn đã đăng ký thành công!");
    //   form.reset();
    // },
  });

  const classDetail = classes.find((c) => c.slug === slug);

  if (!classDetail) return null;

  const CHECKOUT_PAYMENT_URL = classDetail.checkoutUrl;

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
              <FormLabel>Bạn biết đến khoá học qua đâu?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Bạn biết đến khoá học qua đâu?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {codeOption.map((option) => (
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
