import Link from "next/link";
import SocialIcon from "./SocialIcon";
import { socialLinks } from "@/data/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-400">
              © {currentYear} M. Fatihul Iqmal. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 justify-center md:justify-end text-sm">
            <Link
              href="/projects"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
