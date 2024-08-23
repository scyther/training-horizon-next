"use client"; 
import * as React from "react"
import { Button } from "@/Components/Shared/ui/button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/Components/Shared/ui/card"
import { Input } from "@/Components/Shared/ui/input"
import { Label } from "@/Components/Shared/ui/label"
import Link from "next/link";

function SignUpcard() {
  return (
    <main className="bg-[#56C1FF] h-screen flex items-center justify-center p-10 w-full">
          <Card className="w-[600px] h-[550px] mx-auto p-6 shadow-lg border-2 border-blue-400">
            <CardHeader>
                <h2 className="text-2xl font-bold">Create your account</h2>
            </CardHeader>
            <CardContent>
                <div className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Email</Label>
                    <Input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg">Password</Label>
                    <Input type="password" id="password" placeholder="Enter your password" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmpassword" className="text-lg">Confirm Password</Label>
                    <Input type="password" id="password" placeholder="Enter your password again" />
                </div>
                </div>
            </CardContent>
            <div className="flex justify-center">
            <Button className="mt-1 w-[500px] bg-[#FDCE29] text-black hover:bg-yellow-500">Create Account</Button>      
            </div>
            <CardFooter className="text-center mt-4">
            <div className="text-sm">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-600 cursor-pointer hover:underline">Login here!</span>
          </Link>
        </div>
            </CardFooter>
            </Card>
        </main>
  )
}
 export  default SignUpcard