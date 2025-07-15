'use client';

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChefHat, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  if (!mounted) return null;

  return (
    <motion.header
      className={`sticky top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        scrolled
          ? "shadow-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800"
          : "bg-white/95 dark:bg-gray-900/95"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              Coquina
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/features" className="nav-link">Features</Link>
            <Link href="/pricing" className="nav-link">
              Pricing
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Link href="/signin">
              <Button variant="ghost" className="text-sm">Sign In</Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4 text-sm">
              <Link href="/" className="mobile-link">Home</Link>
              <Link href="/features" className="mobile-link">Features</Link>
              <Link href="/pricing" className="mobile-link font-semibold text-blue-600 dark:text-blue-400">
                Pricing
              </Link>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col space-y-2">
                <Link href="/signin">
                  <Button variant="ghost" className="justify-start w-full">Sign In</Button>
                </Link>
                <Link href="/auth">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white justify-center w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
