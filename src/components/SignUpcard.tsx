"use client"; 
import * as React from "react"
import { Button } from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";

function SignUpcard() {
  return (
    <main className="bg-white h-screen flex items-center justify-center p-10">
          <Card className="max-w-lg mx-auto p-6">
            <CardHeader>
                <h2 className="text-xl font-semibold">Create your account</h2>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div>
                    <Label htmlFor="confirmpassword">Confirm Password</Label>
                    <Input type="password" id="password" placeholder="Enter your password again" />
                </div>
                <Button className="w-full mt-4 bg-[#00866E]">Create Account</Button> 
                </div>
            </CardContent>
            <CardFooter className="text-center mt-4">
            <div className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-600 cursor-pointer">Login here!</span>
          </Link>
        </div>
            </CardFooter>
            </Card>
        </main>
  )
}
 export  default SignUpcard