import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import StructuredData from "@/components/structured-data";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    template: "%s | Aishwarya Shivanna",
    default: "Aishwarya Shivanna - Business Analytics Master's Student",
  },
  description:
    "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, cloud architecture, and modern development.",
  icons: {
    icon: "/headshot/image.png",
    apple: "/headshot/image.png",
  },
  openGraph: {
    type: "website",
    title: "Aishwarya Shivanna - Business Analytics Master's Student",
    description:
      "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, cloud architecture, and modern development.",
    images: [
      {
        url: "/screenshots/hero-preview.png",
        width: 1200,
        height: 630,
        alt: "Aishwarya Shivanna - Portfolio Hero Section",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishwarya Shivanna - Business Analytics Master's Student",
    description:
      "Senior Data Scientist and Cloud Solutions Architect specializing in AI/ML, GenAI innovation, cloud architecture, and modern development.",
    images: ["/screenshots/hero-preview.png"],
  },
  keywords: [
    "Neuro-symbolic AI",
    "Deep Learning",
    "Reinforcement Learning",
    "Machine Learning",
    "AWS Machine Learning Engineer",
    "AWS Solutions Architect",
    "AWS SysOps Administrator",
    "AWS Developer",
    "AWS AI Practitioner",
    "Cloud Architecture",
    "MLOps",
    "Data Science",
    "Python",
    "Java",
    "TypeScript",
    "FastAPI",
    "Next.js",
    "React",
    "Neural Networks",
    "TensorFlow",
    "PyTorch",
    "LangChain",
    "CloudFormation",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Vector Databases",
    "Statistical Modeling",
    "Clustering Algorithms",
    "PCA",
    "Feature Engineering",
    "Databricks",
    "AWS SageMaker",
    "Generative AI",
    "Large Language Models",
    "Serverless",
    "Innovation",
    "Node.js",
    "Full-Stack Development",
    "Cloud Computing",
  ],
  authors: [{ name: "Aishwarya Shivanna" }],
  creator: "Aishwarya Shivanna",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 pt-16 pb-8">{children}</main>
            <Footer />
          </div>
        </Providers>
        <StructuredData type="both" />
      </body>
    </html>
  );
}
