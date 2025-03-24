import { Metadata } from "next"
import AlternateHomeVersion2 from "../alternate-home-version-2"

export const metadata: Metadata = {
  title: "Alternate Home Design V2 | Neil Humphrey Portfolio",
  description: "A sleek, dark agency design inspired by Gleamy with vertical navigation and circular elements.",
  keywords: "dark theme, agency design, vertical navigation, minimalist UI, experimental design",
}

export default function AlternateHomeV2Page() {
  return <AlternateHomeVersion2 />
} 