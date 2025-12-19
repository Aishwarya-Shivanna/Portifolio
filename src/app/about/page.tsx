import type { Metadata } from "next";
import { AboutDetail } from "@/components/sections/about-detail";

export const metadata: Metadata = {
  title: "About - Aishwarya Shivanna | Business Analyst",
  description:
    "Learn more about Aishwarya Shivanna, Graduate student pursuing a Master’s in Business Analytics at Northern Arizona University, with expertise in Data Warehousing,Python, Descriptive Analytics, and Visualization.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <AboutDetail />
    </main>
  );
}
