// src/app/auth/page.tsx
'use client'

import { useState } from "react"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import {  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent} from '@/components/ui/tabs'
import { Mail, Lock, User, ChefHat } from 'lucide-react'
import Link from "next/link"

export default function AuthPage() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen flex bg-foreground">
        <div className="hidden lg:flex w-1/2 h-auto bg-gray-100 items-center justify-center">
            <Image
            src="/eat-healthier.jpeg"
            alt="Cooking illustration"
            width={600}
            height={400}
            className="object-contain rounded-4xl"
            />
        </div>

        {/* Form section */}
        <div className="flex flex-1 items-center justify-center px-8 -mt-24 md:-mt-0">
            <div className="w-full">
                {/* Logo */}
                <div className="flex items-center justify-center mb-8">
                    <ChefHat className="w-8 h-8 text-orange-500" />
                    <h1 className="ml-2 text-2xl font-bold text-gray-700">Coquina</h1>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="login" className="flex justify-center items-center">
                    <TabsList className="flex flex-row rounded-xl shadow-sm p-2">
                        <TabsTrigger value="login" className="py-3 text-sm ">Sign In</TabsTrigger>
                        <TabsTrigger value="signup" className="py-3 text-sm">Sign Up</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login" className="mt-6 md:w-md md:px-6">
                        <Card className="shadow-none">
                            <CardHeader className="text-center mb-4">
                                <CardTitle className="text-xl">Welcome Back</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm">
                                    Please sign in to your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <form className="space-y-4">
                                <div className="relative">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="pl-10"
                                    required
                                />
                                </div>
                                <div className="relative">
                                <Label htmlFor="password" className="sr-only">Password</Label>
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="pl-10"
                                    required
                                />
                                </div>
                                <Button type="submit" className="w-full">
                                Sign In
                                </Button>
                            </form>
                            </CardContent>
                            <CardFooter className="text-center pt-2">
                            <a href="#" className="text-sm text-orange-500 hover:underline">
                                Forgot password?
                            </a>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="signup" className="mt-6 md:w-md md:px-6">
                        <Card className="shadow-none">
                            <CardHeader className="text-center mb-4">
                                <CardTitle className="text-xl">Create Account</CardTitle>
                                <CardDescription className="text-muted-foreground text-sm">
                                    Start your culinary journey
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                            <form className="space-y-4">
                                <div className="relative">
                                <Label htmlFor="name" className="sr-only">Full Name</Label>
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className="pl-10"
                                    required
                                />
                                </div>
                                <div className="relative">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Email address"
                                    className="pl-10"
                                    required
                                />
                                </div>
                                <div className="relative">
                                <Label htmlFor="password" className="sr-only">Password</Label>
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    className="pl-10"
                                    required
                                />
                                </div>
                                <Button type="submit" className="w-full">
                                Create Account
                                </Button>
                            </form>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-4 text-center pt-2 text-xs text-gray-500">
                                <p>By signing up, you agree to our</p>
                                <div className="flex flex-row space-x-2">
                                    <Link href="#" className="text-orange-500 hover:underline">Terms & Conditions</Link> <p>and</p> <Link href="#" className="text-orange-500 hover:underline">Privacy Policy</Link>
                                </div>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </div>
  )
}
