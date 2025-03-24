import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternate Design | Neil Humphrey",
  description: "A modern, minimalist design with animated wavy background",
};

export default function AlternateHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 