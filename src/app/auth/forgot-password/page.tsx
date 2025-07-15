'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, Mail, ArrowLeft } from "lucide-react";
import  Link  from 'next/Link';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Hero Section */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-2xl shadow-warm">
            <img 
              src='/whyUsAlt.jpeg' 
              alt="Beautiful cooking ingredients" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero flex items-end p-8">
              <div className="text-foreground">
                <div className="flex items-center gap-3 mb-4">
                  <ChefHat className="h-10 w-10 text-primary" />
                  <h1 className="text-4xl font-bold">Coquina</h1>
                </div>
                <p className="text-xl text-muted-foreground">
                  Reset your password and continue your culinary journey
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Form Section */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChefHat className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold">Coquina</h1>
            </div>
            <p className="text-muted-foreground">
              Reset your password
            </p>
          </div>

          <Card className="shadow-warm border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                {emailSent ? "Check your email" : "Forgot your password?"}
              </CardTitle>
              <CardDescription>
                {emailSent 
                  ? "We've sent a password reset link to your email address."
                  : "Enter your email address and we'll send you a link to reset your password."
                }
              </CardDescription>
            </CardHeader>
            
            {!emailSent ? (
              <>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="reset-email"
                          type="email"
                          placeholder="chef@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Reset Link"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="text-center">
                  <Link 
                    href="/auth" 
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition duration-300" />
                    Back to sign in
                  </Link>
                </CardFooter>
              </>
            ) : (
              <CardFooter className="flex flex-col space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Didn't receive the email? Check your spam folder or try again.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 w-full">
                  <Button 
                    variant="outline" 
                    onClick={() => setEmailSent(false)}
                    className="flex-1"
                  >
                    Try Again
                  </Button>
                  <Button 
                    asChild
                    className="flex-1"
                  >
                    <Link href="/auth">Back to Sign In</Link>
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;