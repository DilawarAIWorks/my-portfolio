import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dilawarshah.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dilawar Shah | AI Engineer, RAG Developer & Automation Specialist",
    template: "%s | Dilawar Shah",
  },
  description:
    "Dilawar Shah is a full-stack AI engineer building RAG knowledge agents, computer vision systems, workflow automation, and scalable web applications for modern teams.",
  keywords: [
    "Dilawar Shah",
    "AI engineer",
    "RAG developer",
    "AI automation consultant",
    "computer vision engineer",
    "full stack AI developer",
    "workflow automation",
    "LangChain developer",
    "TensorFlow developer",
    "n8n automation",
    "Azure AI certified developer",
    "Pakistan AI developer",
  ],
  authors: [{ name: "Dilawar Shah" }],
  creator: "Dilawar Shah",
  publisher: "Dilawar Shah",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Dilawar Shah | AI Engineer & Automation Specialist",
    description:
      "Portfolio of AI systems, RAG pipelines, computer vision projects, and workflow automation built by Dilawar Shah.",
    siteName: "Dilawar Shah Portfolio",
    images: [
      {
        url: "/assets/resume-automation-pipeline.png",
        width: 1200,
        height: 630,
        alt: "AI automation workflow project by Dilawar Shah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilawar Shah | AI Engineer & Automation Specialist",
    description:
      "RAG knowledge agents, computer vision applications, workflow automation, and full-stack AI software.",
    images: ["/assets/resume-automation-pipeline.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
