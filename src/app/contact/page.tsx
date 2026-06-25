import type { Metadata } from "next";
import { ContactCard } from "@/components/ContactCard";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "联系方式",
  description: "张博垚的求职方向、当前状态和公开联系说明。"
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <SectionTitle
        eyebrow="Contact"
        title="联系方式"
        description="正在寻找实习、校招和初级开发岗位机会，公开页面不展示手机号和私人邮箱，可通过简历或招聘平台联系。"
      />
      <div className="mt-8">
        <ContactCard />
      </div>
    </div>
  );
}