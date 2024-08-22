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
    <div className="grid w-full max-w-lg items-center gap-3">
  <Label htmlFor="firstName">FIRST NAME</Label>
  <Input type="text" id="firstName"  />

  <Label htmlFor="lastName">LAST NAME</Label>
  <Input type="text" id="lastName" />

  <Label htmlFor="dob">DATE OF BIRTH</Label>
  <Input type="date" id="dob" />

  <Label htmlFor="gender">GENDER</Label>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Gender" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="male">MALE</SelectItem>
      <SelectItem value="female">FEMALE</SelectItem>
    </SelectContent>
  </Select>

  <Label htmlFor="relationship">RELATIONSHIP</Label>
  <Input type="text" id="relationship" />

  <Label htmlFor="address">ADDRESS</Label>
  <Input type="text" id="address" />

  <Label htmlFor="city">CITY</Label>
  <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select City" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="mumbai">MUMBAI</SelectItem>
      <SelectItem value="delhi">DELHI</SelectItem>
      <SelectItem value="haryana">HARYANA</SelectItem>
    </SelectContent>
  </Select>

  <Label htmlFor="school">SCHOOL OF THE LEARNER</Label>
  <Input type="text" id="school" />

  <Label htmlFor="doctorName">FAMILY DOCTOR NAME</Label>
  <Input type="text" id="doctorName" />

  <Label htmlFor="doctorContact">FAMILY DOCTOR CONTACT NUMBER</Label>
  <Input type="tel" id="doctorContact" />

  <Button className="bg-yellow-300">Register</Button>
</div>

    
  )
}
export default Page
