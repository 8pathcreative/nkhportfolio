import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gleamy Design | Test Page",
  description: "A test page with agency-style design",
};

export default function GleamyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 