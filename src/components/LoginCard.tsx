import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import Link from "next/link";


function LoginCard() {
  return (
    <main className="bg-[#56C1FF] h-screen flex items-center justify-center p-10 w-full">
      <Card className="w-[600px] h-[550px] mx-auto p-6 shadow-lg border-2 border-blue-400">
        <CardHeader>
          <h2 className="text-2xl font-bold">Login</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </CardContent>
        <Link href='\trainerdashboard'>
        <div className="flex justify-center">
          <Button className="mt-1 w-[500px] bg-[#FDCE29] text-black hover:bg-yellow-500">
            Login
          </Button>
        </div>
        </Link>
        <Link href='\userdashboard'>
        <div className="flex justify-center">
          <Button  className="mt-1 w-[500px] bg-[#D22B2B] text-black hover:bg-[#880808]">
            Cancel
          </Button>
        </div>
        </Link>
        <CardFooter className="text-center mt-4">
          <div className="flex justify-between w-[350px]">
            <div className="text-sm">
              Don't have an account yet?{" "}
              <Link href="/signup">
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Create one!
                </span>
              </Link>
            </div>
          </div>
          <div className="text-sm ml-7">
            <Link href="/login">
              <span className="text-blue-600 cursor-pointer hover:underline ">
                Forgot Password?
              </span>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
export default LoginCard;