import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Mohamed Ashraf - Software Developer",
  description:
    "I'm a driven Full Stack Web Developer with a passion for building digital experiences that blend performance, design, and innovation. My expertise spans the MERN stack and modern frameworks like Next.js and Laravel, empowering me to create everything from sleek frontends to scalable backend architectures.\n\nI thrive on turning complex ideas into clean, functional code — crafting responsive, high-performing web apps with Tailwind CSS, TypeScript, and cutting-edge JavaScript tools. Beyond coding, I'm a natural problem solver and team collaborator who values precision, scalability, and user impact above all.\n\nEvery project I work on is an opportunity to push boundaries, learn something new, and build technology that actually matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
