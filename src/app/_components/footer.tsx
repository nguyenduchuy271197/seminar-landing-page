"use client";

import { useInViewStore } from "@/hooks/use-inview";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const hide = useInViewStore((state) => state.hide);
  const show = useInViewStore((state) => state.show);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      hide();
    } else {
      show();
    }
  }, [inView, hide, show]);

  return (
    <section className="bg-neutral-900 text-white" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 py-20">
          <div className="space-y-6">
            <div>
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={24}
                className="h-auto w-auto"
              />
            </div>

            <p className="body2-semi max-w-xs">
              Từ người mới bắt đầu đến người đã có kiến thức, bạn đều có thể tìm
              được khoá học phù hợp để nâng cao kỹ năng của mình.
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="subtitle2 uppercase">Liên hệ chúng tôi</h3>

            <div className="flex flex-col space-y-4">
              <div>
                <h4 className="body1-semi">Điện thoại</h4>
                <p className="body2-regular">(+84) 86 713 3779</p>
              </div>

              <div>
                <h4 className="body1-semi">Email</h4>
                <p className="body2-regular">likelion.vn@likelion.net</p>
              </div>

              <div className="space-y-2">
                <h4 className="body1-semi">Mạng xã hội</h4>
                <ul className="flex gap-2">
                  <li>
                    <Link href="https://www.facebook.com/profile.php?id=61555492979045">
                      <svg
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M29.7273 14.8636C29.7273 6.65454 23.0727 0 14.8636 0C6.65454 0 0 6.65454 0 14.8636C0 22.2818 5.43409 28.4318 12.5386 29.5432V19.1591H8.76818V14.8636H12.5386V11.5909C12.5386 7.86818 14.7545 5.80909 18.15 5.80909C19.7795 5.80909 21.4773 6.10227 21.4773 6.10227V9.75682H19.6023C17.7545 9.75682 17.1818 10.9023 17.1818 12.075V14.8636H21.3068L20.6455 19.1591H17.1818V29.5432C24.2864 28.425 29.7205 22.2818 29.7205 14.8636H29.7273Z"
                          fill="white"
                        />
                        <path
                          d="M20.6449 19.1591L21.3062 14.8636H17.1812V12.075C17.1812 10.9023 17.7539 9.75681 19.6017 9.75681H21.4767V6.10226C21.4767 6.10226 19.7789 5.80908 18.1494 5.80908C14.7539 5.80908 12.538 7.86817 12.538 11.5909V14.8636H8.76758V19.1591H12.538V29.5432C13.2949 29.6591 14.0721 29.7204 14.863 29.7204C15.6539 29.7204 16.4312 29.6591 17.188 29.5432V19.1591H20.6517H20.6449Z"
                          fill="#212529"
                        />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <svg
                      width={31}
                      height={30}
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5902 29.7273C23.7992 29.7273 30.4538 23.0726 30.4538 14.8636C30.4538 6.65468 23.7992 0 15.5902 0C7.38124 0 0.726562 6.65468 0.726562 14.8636C0.726562 23.0726 7.38124 29.7273 15.5902 29.7273Z"
                        fill="white"
                      />
                      <path
                        d="M15.5909 7.19288C18.0863 7.19288 18.3863 7.1997 19.375 7.24743C20.2886 7.28833 20.7795 7.43833 21.1136 7.56788C21.55 7.73833 21.8636 7.94288 22.1909 8.27015C22.5181 8.59743 22.7227 8.91106 22.8931 9.34743C23.0227 9.6747 23.1727 10.1724 23.2136 11.0861C23.2613 12.0747 23.2681 12.3679 23.2681 14.8702C23.2681 17.3724 23.2613 17.6656 23.2136 18.6542C23.1727 19.5679 23.0227 20.0588 22.8931 20.3929C22.7227 20.8292 22.5181 21.1429 22.1909 21.4702C21.8636 21.7974 21.55 22.002 21.1136 22.1724C20.7863 22.302 20.2886 22.452 19.375 22.4929C18.3863 22.5406 18.0931 22.5474 15.5909 22.5474C13.0886 22.5474 12.7954 22.5406 11.8068 22.4929C10.8931 22.452 10.4022 22.302 10.0681 22.1724C9.63178 22.002 9.31815 21.7974 8.99087 21.4702C8.6636 21.1429 8.45906 20.8292 8.2886 20.3929C8.15906 20.0656 8.00906 19.5679 7.96815 18.6542C7.92042 17.6656 7.9136 17.3724 7.9136 14.8702C7.9136 12.3679 7.92042 12.0747 7.96815 11.0861C8.00906 10.1724 8.15906 9.68152 8.2886 9.34743C8.45906 8.91106 8.6636 8.59743 8.99087 8.27015C9.31815 7.94288 9.63178 7.73833 10.0681 7.56788C10.3954 7.43833 10.8931 7.28833 11.8068 7.24743C12.7954 7.1997 13.0886 7.19288 15.5909 7.19288ZM15.5909 5.50879C13.0477 5.50879 12.7341 5.52243 11.7318 5.56333C10.7363 5.61106 10.0545 5.76788 9.46133 5.9997C8.84769 6.23833 8.32269 6.55879 7.80451 7.07697C7.28632 7.59515 6.96587 8.12015 6.72724 8.73379C6.49542 9.32697 6.3386 10.0088 6.29087 11.0042C6.24315 11.9997 6.23633 12.3202 6.23633 14.8633C6.23633 17.4065 6.24997 17.7202 6.29087 18.7224C6.3386 19.7179 6.49542 20.3997 6.72724 20.9929C6.96587 21.6065 7.28632 22.1315 7.80451 22.6497C8.32269 23.1679 8.84769 23.4883 9.46133 23.727C10.0545 23.9588 10.7363 24.1156 11.7318 24.1633C12.7272 24.2111 13.0477 24.2179 15.5909 24.2179C18.1341 24.2179 18.4477 24.2042 19.45 24.1633C20.4454 24.1156 21.1272 23.9588 21.7204 23.727C22.3341 23.4883 22.8591 23.1679 23.3772 22.6497C23.8954 22.1315 24.2159 21.6065 24.4545 20.9929C24.6863 20.3997 24.8431 19.7179 24.8909 18.7224C24.9386 17.727 24.9454 17.4065 24.9454 14.8633C24.9454 12.3202 24.9318 12.0065 24.8909 11.0042C24.8431 10.0088 24.6863 9.32697 24.4545 8.73379C24.2159 8.12015 23.8954 7.59515 23.3772 7.07697C22.8591 6.55879 22.3341 6.23833 21.7204 5.9997C21.1272 5.76788 20.4454 5.61106 19.45 5.56333C18.4545 5.51561 18.1341 5.50879 15.5909 5.50879Z"
                        fill="#212529"
                      />
                      <path
                        d="M15.59 10.0566C12.9378 10.0566 10.7832 12.2112 10.7832 14.8635C10.7832 17.5157 12.9378 19.6703 15.59 19.6703C18.2423 19.6703 20.3968 17.5157 20.3968 14.8635C20.3968 12.2112 18.2423 10.0566 15.59 10.0566ZM15.59 17.9794C13.865 17.9794 12.4673 16.5816 12.4673 14.8566C12.4673 13.1316 13.865 11.7339 15.59 11.7339C17.315 11.7339 18.7127 13.1316 18.7127 14.8566C18.7127 16.5816 17.315 17.9794 15.59 17.9794Z"
                        fill="#212529"
                      />
                      <path
                        d="M20.5898 10.9907C21.2112 10.9907 21.7148 10.487 21.7148 9.86572C21.7148 9.2444 21.2112 8.74072 20.5898 8.74072C19.9685 8.74072 19.4648 9.2444 19.4648 9.86572C19.4648 10.487 19.9685 10.9907 20.5898 10.9907Z"
                        fill="#212529"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={31}
                      height={30}
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3168 29.7273C23.5257 29.7273 30.1804 23.0726 30.1804 14.8636C30.1804 6.65468 23.5257 0 15.3168 0C7.1078 0 0.453125 6.65468 0.453125 14.8636C0.453125 23.0726 7.1078 29.7273 15.3168 29.7273Z"
                        fill="white"
                      />
                      <path
                        d="M24.8078 10.091C24.5828 9.23876 23.9078 8.56376 23.0556 8.33876C21.5078 7.92285 15.3101 7.92285 15.3101 7.92285C15.3101 7.92285 9.11239 7.92285 7.56467 8.33876C6.71239 8.56376 6.03739 9.23876 5.81239 10.091C5.39648 11.6388 5.39648 14.8638 5.39648 14.8638C5.39648 14.8638 5.39648 18.0888 5.81239 19.6365C6.03739 20.4888 6.71239 21.1638 7.56467 21.3888C9.11239 21.8047 15.3101 21.8047 15.3101 21.8047C15.3101 21.8047 21.5078 21.8047 23.0556 21.3888C23.9078 21.1638 24.5828 20.4888 24.8078 19.6365C25.2238 18.0888 25.2238 14.8638 25.2238 14.8638C25.2238 14.8638 25.2238 11.6388 24.8078 10.091ZM13.3328 17.8365V11.891L18.4806 14.8638L13.3328 17.8365Z"
                        fill="#212529"
                      />
                    </svg>
                  </li>
                  <li>
                    <svg
                      width={31}
                      height={30}
                      viewBox="0 0 31 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1797 30C23.464 30 30.1797 23.2843 30.1797 15C30.1797 6.71573 23.464 0 15.1797 0C6.89542 0 0.179688 6.71573 0.179688 15C0.179688 23.2843 6.89542 30 15.1797 30Z"
                        fill="white"
                      />
                      <path
                        d="M11.1767 21.0201C11.1945 21.0356 11.2122 21.0534 11.23 21.069C11.3967 21.1867 11.5167 21.3556 11.6745 21.4823C12.1678 21.8778 12.7233 22.0934 13.3589 22.1334C14.8656 22.2267 16.1789 21.0934 16.35 19.6023C16.3589 19.529 16.3545 19.4556 16.3545 19.3845C16.3545 14.8978 16.3545 10.4112 16.3545 5.92229C16.3545 5.72081 16.4552 5.62007 16.6567 5.62007C17.3389 5.62007 18.0211 5.62007 18.7033 5.62007C18.7678 5.62007 18.8345 5.60896 18.8922 5.64896C18.8967 5.6534 18.8989 5.65562 18.9033 5.65785C18.9367 5.69118 18.9456 5.73562 18.9545 5.77785C19.2167 6.98674 19.8522 7.95118 20.85 8.68007C20.9122 8.72451 20.9656 8.78229 21.0233 8.83118C21.0678 8.86896 21.11 8.90451 21.1545 8.94229C21.3145 9.0334 21.43 9.18007 21.57 9.29785C22.1211 9.75785 22.7456 10.0756 23.4411 10.2534C23.5033 10.269 23.5722 10.269 23.6167 10.3267C23.6189 10.3312 23.6234 10.3334 23.6278 10.3356C23.6678 10.3778 23.6611 10.4334 23.6611 10.4845C23.6611 11.2756 23.6611 12.0667 23.6611 12.8578C23.6611 13.0378 23.6367 13.049 23.4545 13.049C22.8745 13.049 22.3056 12.9712 21.7433 12.8423C20.7745 12.6201 19.8811 12.2267 19.0522 11.6823C19.01 11.6534 18.9633 11.5934 18.9167 11.6134C18.8589 11.6401 18.8878 11.7156 18.8878 11.769C18.8878 13.9956 18.8967 16.2223 18.8834 18.4512C18.8745 20.009 18.3789 21.4001 17.3589 22.5867C16.2767 23.8467 14.9011 24.5778 13.25 24.7801C11.9767 24.9356 10.77 24.7045 9.62335 24.1401C9.43891 24.049 9.26113 23.9423 9.09446 23.8178C9.04335 23.7712 8.99002 23.7245 8.93668 23.6778C8.54113 23.3512 8.26779 22.929 8.01002 22.4978C7.61446 21.8312 7.3589 21.1112 7.23446 20.3467C7.16335 19.909 7.12557 19.469 7.15002 19.0267C7.22779 17.6001 7.70779 16.329 8.62779 15.229C9.3989 14.3067 10.3633 13.6623 11.4989 13.2734C11.9722 13.1112 12.4611 13.0112 12.9633 12.9756C13.0567 12.969 13.1478 12.9467 13.2411 12.9534C13.2856 12.9556 13.33 12.9534 13.37 12.9823C13.3745 12.9867 13.3789 12.989 13.3833 12.9912C13.41 13.0356 13.4033 13.0867 13.4033 13.1334C13.4033 13.9356 13.4033 14.7401 13.4033 15.5423C13.4033 15.5712 13.4033 15.6001 13.4033 15.6267C13.3989 15.7067 13.3589 15.7334 13.2833 15.7134C13.0633 15.6512 12.8389 15.6223 12.6122 15.6112C12.2611 15.5934 11.9145 15.6423 11.5833 15.7645C10.4789 16.1712 9.81002 16.9623 9.67002 18.1267C9.53224 19.2734 9.98557 20.1912 10.9389 20.8534C11.0189 20.909 11.1011 20.9601 11.1767 21.0223V21.0201Z"
                        fill="#212529"
                      />
                      <path
                        d="M9.09766 23.8177C9.13988 23.8066 9.16432 23.8399 9.19321 23.8577C9.91099 24.2955 10.6843 24.5821 11.5154 24.7155C11.9332 24.7821 12.3532 24.811 12.7754 24.7888C14.1865 24.7155 15.451 24.2466 16.5443 23.3421C17.5954 22.4732 18.2954 21.3755 18.6443 20.0577C18.7554 19.6421 18.8154 19.2177 18.8377 18.7866C18.851 18.5399 18.8488 18.291 18.8488 18.0443C18.8488 15.9221 18.8488 13.7999 18.8488 11.6777V11.5332C18.9043 11.5177 18.9288 11.5599 18.9599 11.5799C19.7154 12.0977 20.5332 12.4799 21.4177 12.7243C21.9021 12.8577 22.3954 12.9466 22.8977 12.991C23.1088 13.0088 23.3199 13.0066 23.5288 13.0221C23.6199 13.0288 23.6221 13.0243 23.6243 12.9288C23.6243 12.8266 23.6243 12.7266 23.6243 12.6243C23.6243 11.9066 23.6243 11.1888 23.6243 10.4688C23.6243 10.4243 23.6265 10.3799 23.6288 10.3354C23.8177 10.3577 24.0043 10.3977 24.1954 10.411C24.3132 10.4199 24.431 10.431 24.5488 10.4266C24.6065 10.4266 24.631 10.4443 24.6243 10.5043C24.6221 10.5288 24.6243 10.5532 24.6243 10.5777V13.6932C24.6243 13.7132 24.6243 13.7332 24.6243 13.7532C24.6221 13.8443 24.6221 13.8466 24.5265 13.8443C24.2021 13.8443 23.8777 13.8221 23.5554 13.7799C22.8977 13.6932 22.2577 13.5332 21.6399 13.291C21.0488 13.0599 20.491 12.7666 19.9665 12.4066C19.9332 12.3843 19.8999 12.3643 19.851 12.331V12.4777C19.851 14.7466 19.851 17.0132 19.851 19.2821C19.851 20.491 19.5377 21.6154 18.891 22.6399C18.111 23.8777 17.031 24.7466 15.6577 25.2466C14.8243 25.5488 13.9599 25.6666 13.0732 25.5999C11.5777 25.4888 10.2843 24.9177 9.1821 23.9043C9.15321 23.8777 9.12654 23.8443 9.09988 23.8154L9.09766 23.8177Z"
                        fill="#495057"
                      />
                      <path
                        d="M18.8927 5.64657C18.8482 5.64657 18.8038 5.65323 18.7594 5.65323C18.0282 5.65323 17.2971 5.65323 16.5682 5.65323C16.4557 5.65323 16.3994 5.70805 16.3994 5.81768C16.3994 10.2821 16.3994 14.7443 16.3994 19.2088C16.3994 19.5199 16.3771 19.8243 16.2794 20.1199C15.9371 21.1643 15.2349 21.8532 14.1638 22.0977C13.0149 22.3599 12.0394 22.0088 11.2616 21.1177C11.2482 21.1021 11.2394 21.0843 11.2305 21.0666C11.4527 21.1555 11.6749 21.2443 11.9105 21.291C12.6594 21.4399 13.366 21.3243 14.0149 20.9243C14.766 20.4621 15.2082 19.7843 15.3638 18.9199C15.3927 18.7555 15.3971 18.5888 15.3971 18.4221C15.3971 13.951 15.3971 9.47768 15.3971 5.00657C15.3971 4.79768 15.3682 4.82435 15.5749 4.82435C16.606 4.82435 17.6371 4.82435 18.6682 4.82435C18.6927 4.82435 18.7171 4.82435 18.7416 4.82435C18.846 4.82435 18.8482 4.82435 18.8482 4.93323C18.8482 5.17323 18.8438 5.41101 18.8905 5.64657H18.8927Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M13.3726 12.9825C12.7437 13.0025 12.126 13.1025 11.5282 13.3025C10.6637 13.5891 9.89486 14.0402 9.22375 14.658C8.34375 15.4691 7.74375 16.4513 7.41486 17.6002C7.29708 18.0091 7.23041 18.4291 7.1993 18.8536C7.18152 19.1091 7.17486 19.3647 7.19041 19.618C7.22819 20.3269 7.37486 21.0113 7.64375 21.6691C7.94375 22.4047 8.36597 23.0625 8.91486 23.638C8.92597 23.6491 8.93263 23.6647 8.94152 23.678C8.81708 23.6247 8.71708 23.5336 8.61263 23.4513C7.59041 22.6402 6.86819 21.618 6.47263 20.3713C6.33486 19.938 6.24819 19.4936 6.20597 19.0402C6.17486 18.7113 6.17263 18.3825 6.19263 18.0558C6.24152 17.3002 6.42152 16.5758 6.73263 15.8847C7.0593 15.1625 7.50375 14.5225 8.06819 13.9691C8.72597 13.3247 9.48819 12.8425 10.3571 12.5291C10.9015 12.3336 11.4615 12.2136 12.0393 12.1713C12.4571 12.1402 12.8726 12.1491 13.2904 12.2002C13.346 12.2069 13.3793 12.218 13.3793 12.2847C13.3749 12.5158 13.3749 12.7469 13.3726 12.978V12.9825Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M11.175 21.0198C10.9216 20.9042 10.7016 20.7398 10.5016 20.5487C10.0016 20.0665 9.70387 19.4798 9.62609 18.7887C9.46387 17.3398 10.3772 16.0909 11.6461 15.7042C12.1883 15.5398 12.7305 15.5331 13.275 15.6798C13.3061 15.6887 13.335 15.702 13.3683 15.6931C13.3861 15.6487 13.3772 15.6042 13.3772 15.5598C13.3772 14.7487 13.3772 13.9376 13.3772 13.1265C13.3772 13.082 13.3816 13.0376 13.3839 12.9931C13.6972 12.9709 14.0083 12.9998 14.3172 13.0354C14.3661 13.0398 14.3794 13.0642 14.3772 13.1065C14.3772 13.1309 14.3772 13.1554 14.3772 13.1798C14.3772 14.2554 14.3772 15.3309 14.3772 16.4042C14.3772 16.4442 14.3883 16.4842 14.3616 16.5287C14.2194 16.502 14.0816 16.4598 13.9372 16.4398C13.1061 16.3242 12.3572 16.5176 11.6994 17.0354C11.1216 17.4909 10.7661 18.0887 10.6461 18.8131C10.5194 19.582 10.6794 20.2954 11.1216 20.942C11.1394 20.9687 11.155 20.9954 11.1728 21.0242L11.175 21.0198Z"
                        fill="#495057"
                      />
                      <path
                        d="M21.0265 8.83119C20.7132 8.64674 20.4399 8.41341 20.1887 8.15341C19.5132 7.45785 19.0865 6.63341 18.9043 5.68007C18.9043 5.67119 18.9043 5.66452 18.9043 5.65563C19.1954 5.64007 19.4887 5.65563 19.7799 5.64896C19.831 5.64896 19.8554 5.66896 19.8487 5.72007C19.8487 5.74007 19.8487 5.76007 19.8487 5.78007C19.8332 6.59785 20.0754 7.34452 20.4754 8.04674C20.6176 8.29785 20.7887 8.52896 20.9732 8.75119C20.9932 8.77563 21.0221 8.79563 21.0265 8.83119Z"
                        fill="#495057"
                      />
                      <path
                        d="M23.6165 10.3265C22.7854 10.1488 22.0543 9.77319 21.4187 9.20875C21.3254 9.12653 21.2299 9.04431 21.1543 8.94208C21.1854 8.93986 21.2076 8.95764 21.2321 8.97097C21.7365 9.25986 22.2743 9.44875 22.8476 9.54208C23.0699 9.57986 23.2965 9.60208 23.5232 9.59986C23.6187 9.59986 23.621 9.60208 23.621 9.69319C23.621 9.90431 23.6187 10.1132 23.6165 10.3243V10.3265Z"
                        fill="#6C757D"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="uppercase subtitle2">Địa chỉ</h3>
              <p className="body2-regular">
                Tầng 25, Tòa nhà Lim Tower
                <br />9 - 11 Tôn Đức Thắng, Phường Bến Nghé, Quận 1, TP. HCM
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="uppercase subtitle2">Chính sách</h3>
              <div className="flex flex-col items-start underline text-xs md:text-base">
                <Link href="/dieu-khoan-dich-vu">Điều khoản dịch vụ</Link>
                <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="body2-regular text-neutral-500 text-center p-8">
          Copyright @ 2023, LIKELION Co., Ltd
        </p>
      </div>
    </section>
  );
}
