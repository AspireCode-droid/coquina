'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  ChefHat,
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export function Header(){
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
    setMounted(true)
    }, [])

    if (!mounted) return null

    return(
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800" >
            <nav className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <ChefHat className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-semibold text-gray-900 dark:text-white">Coquina</span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="/features"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="/benefits"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        >
                            Benefits
                        </Link>
                        <Link href="/pricing" className="text-blue-500 font-medium">
                            Pricing
                        </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        >
                            Sign In
                        </Button>
                        <Link href="/auth">
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Get Started</Button>
                        </Link>    
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center space-x-2">
                        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                        </Button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
                        <div className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                            Home
                            </Link>
                            <Link
                            href="/features"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                            Features
                            </Link>
                            <Link
                            href="/benefits"
                            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                            >
                            Benefits
                            </Link>
                            <Link href="/pricing" className="text-blue-500 font-medium">
                            Pricing
                            </Link>
                            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                                <Button variant="ghost" className="justify-start">
                                    Sign In
                                </Button>
                                <Link href='/auth'>
                                <Button className="bg-blue-500 hover:bg-blue-600 text-white justify-start">Get Started</Button>
                                </Link>
                            </div>
                        
                        </div>
                    </div>
                )}
                </div>
            </nav>
        </header>
    )
}