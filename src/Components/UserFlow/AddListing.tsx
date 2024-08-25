"use client"; 
import * as React from "react"
import { Button } from "@/components/Shared/ui/button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/Shared/ui/card"
import { Input } from "@/components/Shared/ui/input"
import { Label } from "@/components/Shared/ui/label"
import Link from "next/link";

function AddListing() {
  return (
    <main className="bg-[#56C1FF] h-screen flex items-center justify-center p-10 w-full">
          <Card className="w-[600px] h-[550px] mx-auto p-6 shadow-lg border-2 border-blue-400">
            <CardHeader>
                <h2 className="text-2xl font-bold">Add your Listing</h2>
            </CardHeader>
            <CardContent>
                <div className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="email" className="text-lg">Title</Label>
                    <Input type="email" id="email" placeholder="Enter your title" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password" className="text-lg">Description</Label>
                    <Input type="text" id="text" placeholder="Enter Description" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmpassword" className="text-lg">Price</Label>
                    <Input type="numbers" id="numbers" placeholder="Enter price" />
                </div>
                </div>
            </CardContent>
            <div className="flex justify-center">
            <Button className="mt-1 w-[500px] bg-[#FDCE29] text-black hover:bg-yellow-500">Create List</Button>      
            </div>
            <CardFooter className="text-center mt-4">
            
            </CardFooter>
            </Card>
        </main>
  )
}
 export  default AddListing;
