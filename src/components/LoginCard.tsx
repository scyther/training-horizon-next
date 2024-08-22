import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Link from "next/link";

export default function page (){
    return (
        <main className="bg-white h-screen flex items-center justify-center p-10">
          <Card className="max-w-lg mx-auto p-6">
            <CardHeader>
                <h2 className="text-xl font-semibold">Login</h2>
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
                <Button className="w-full mt-4 bg-[#00866E]">Sign In</Button>
                </div>
            </CardContent>
            <CardFooter className="text-center mt-4">
            <div className="text-sm text-gray-600">
          Don't have an account yet?{" "}
          <Link href="/signup">
            <span className="text-blue-600 cursor-pointer">Create one!</span>
          </Link>
        </div>
            </CardFooter>
            </Card>
        </main>
      );
}