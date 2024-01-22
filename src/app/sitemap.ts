import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.turningpoint.asia",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.turningpoint.asia/chinese-one-day-class-ngung-hoc-vet-tieng-trung-voi-phuong-phap-mst-chi-3-gio-thanh-thao-tieng-trung-tao-an-tuong-tuyet-doi-trong-moi-cuoc-phong-van-xin-viec",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.turningpoint.asia/japanese-one-day-class-master-tieng-nhat-voi-bi-kip-thien-phu-kotoonsei-x3-muc-luong-ngay-tro-thanh-quan-ly-tap-doan-nhat-ban-sau-3-gio-hoc",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.turningpoint.asia/waitlist",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.turningpoint.asia/dieu-khoan-dich-vu",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.turningpoint.asia/chinh-sach-bao-mat",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://www.turningpoint.asia/thanh-toan",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: "https://www.turningpoint.asia/cam-on",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}
