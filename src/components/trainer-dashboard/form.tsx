"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/trainer-dashboard/ui/radio-group";
import { Button } from "@/components/trainer-dashboard/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/trainer-dashboard/ui/form";
import { Input } from "@/components/trainer-dashboard/ui/input";
import { Label } from "./ui/label";
import Popup from "./PopUp";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

export function TrainerForm() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const formSchema = z.object({
    fname: z.string().min(3, {
      message: "Enter at least 3 characters",
    }),
    lname: z.string().min(3, {
      message: "Enter at least 3 characters",
    }),
    qualifications: z.string().min(1, {
      message: "Please enter your qualifications",
    }),
    linkedin: z.string().url({
      message: "Please enter a valid LinkedIn profile URL",
    }),
    experience: z.string().min(1, {
      message: "Please enter your experience",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    phone: z.string().min(10, {
      message: "Please enter a valid phone number",
    }),
    address: z.string().min(1, {
      message: "Please enter your address",
    }),
    availability: z.array(z.string()).optional(),
    password: z.string().min(1, {
      message: "Please enter a valid password",
    })
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      qualifications: "",
      linkedin: "",
      experience: "",
      email: "",
      phone: "",
      address: "",
      availability: [],
      password: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios.post("http://localhost:3005/api/v1/trainers/signup", values);
      console.log("Trainer added" + response.data)
      setPopupMessage("Trainer added successfully!");
      setPopupVisible(true);
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.status === 409) {
        setPopupMessage("User already exists!");
      } else {
        setPopupMessage("An error occurred. Please try again.");
      }
      setPopupVisible(true);
    }
  }

  return (
    <div>
      <Popup
        message={popupMessage}
        isOpen={popupVisible}
        onClose={() => setPopupVisible(false)}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-1">
          <div className="grid grid-cols-2 w-full gap-2 max-[769px]:grid-cols-1">
            <div>
              <div className="flex gap-2 w-full max-sm:flex-col">
                <div className="flex w-1/2 max-sm:w-full">
                  <FormField
                    name="fname"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-1/2 max-sm:w-full">
                  <FormField
                    name="lname"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                name="qualifications"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Qualifications</FormLabel>
                    <FormControl>
                      <Input placeholder="Qualification" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Enter your mobile number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="experience"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Teaching Experience</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter your teaching experience in years" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="linkedin"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn Profile</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your LinkedIn profile link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <div className='flex justify-center'>
                <Card className="w-full">
                  <CardContent className='h-full pt-2 w-full '>
                    <div className='w-full flex justify-center'>
                      <Image src={'/img/profile.png'}
                        alt='map'
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className='py-2 flex text-xs w-full justify-center'>Upload your photo</div>
                    <Button className=' w-full' size={'sm'} type='button' variant={'outline'}>Select from Computer</Button>
                  </CardContent>
                </Card>
              </div>
              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* <Card>
                <CardHeader>
                  <CardTitle>
                    See near your location
                  </CardTitle>
                  <CardDescription>Northern Street, Chicago, United States</CardDescription>
                </CardHeader>
                <CardContent>

                  <Image src={'/img/basemap.png'}
                    alt='map'
                    width={300}
                    height={200}
                  />
                </CardContent>
              </Card> */}

              {/* <FormField
                name="availability"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your availability" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              {/* <JobDetailForm /> */}
            </div>

          </div>
          <div className="flex justify-between py-4">
            <Button variant={"outline"} type="button">Cancel</Button>
            <Button type="submit">Submit Details</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
