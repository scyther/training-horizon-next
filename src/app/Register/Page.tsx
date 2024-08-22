import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
 function Page() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email">First name</Label>
      <Input type="email" id="email"  />
      <Label htmlFor="email">Last Name</Label>
      <Input type="email" id="email"  />
      <Label htmlFor="email">DATE OF BIRTH</Label>
      <Input type="email" id="email" />
      <Label htmlFor="gender">GENDER</Label>
      
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">MALE</SelectItem>
    <SelectItem value="dark">FEMALE</SelectItem>
   
  </SelectContent>
</Select>
      <Label htmlFor="email">RELATIONSHIT</Label>
      <Input type="email" id="email" />
      <Label htmlFor="email">ADDRESS</Label>
      <Input type="email" id="email" />
      <Label htmlFor="email">CITY</Label>
      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue  />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">MUMBAI</SelectItem>
    <SelectItem value="dark">DELHI</SelectItem>
    <SelectItem value="system">HARYANA</SelectItem>
  </SelectContent>
</Select>

      <Label htmlFor="email">SCHOOL OF THE LEARNER</Label>
      <Input type="email" id="email" />
      <Label htmlFor="email">FAMILY DOCTOR NAME</Label>
      <Input type="email" id="email" />
      <Label htmlFor="email">FAMILY DOCTOR CONTACT NUMBER</Label>
      <Input type="email" id="email"  />
      <Button className="bg-yellow-300">Register</Button>

    </div>
    
    
  )
}
export default Page
