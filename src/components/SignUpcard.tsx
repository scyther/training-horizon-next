
"use client"; 
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


 function SignUpcard() {
  return (
    <Card className="w-[600px]  h-[500px]">
      <CardHeader>
        <CardTitle className="text-3xl">Registration</CardTitle>
        
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-8 text-lg">
            <div className="flex flex-col space-y-1.5">
              <Label className="text-2xl" htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="email"  className=" text-2xl h-12"   />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="text-2xl" htmlFor="password">password</Label>
              <Input type="password" id="password" placeholder="password"  className="text-2xl h-12"/>
            </div>
            
           <Button className="bg-green-800 mt-4 text-2xl h-16 rounded-lg ">Register</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
       <h1 className="text-xl">Aready have an account?</h1> <h1 className="text-blue-500 text-xl">sign in</h1>
      </CardFooter>
    </Card>
  )
}
 export  default SignUpcard