"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


import { RadioGroup, RadioGroupItem } from "@/components/trainer-dashboard/ui/radio-group"
import { Button } from "@/components/trainer-dashboard/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/trainer-dashboard/ui/form"
import { Input } from "@/components/trainer-dashboard/ui/input"
import JobDetailForm from "./jobDetailForm"
import { Label } from "./ui/label"


export function TrainerForm() {
    const formSchema = z.object({
        firstname: z.string().min(3, {
            message: "Enter atleast 3 character"
        }),
        lastname: z.string().min(3, {
            message: "Enter atleast 3 character"
        }),
        qualification: z.string().min(1, {
            message: "Please enter qualification"
        }),
        email: z.string().email({
            message: "Please enter a valid email address."
        }),
        number: z.string(),
        experience: z.string(),
        profile: z.string().url({
            message: "Please eneter a valid url."
        }),
        currentlyWorking: z.boolean(),

        currentInstitute: z.string().min(1, {
            message: "Please enter current institute"
        }),
        instituteImageUrl: z.string(),
        aboutInstitute: z.string()
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            qualification: "",
            email: "",
            experience: "",
            profile: "",
            currentlyWorking: false,
            currentInstitute: "",
            instituteImageUrl: "",
            aboutInstitute: "",
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-1">
                    <div className="grid grid-cols-2 w-full gap-2 max-[769px]:grid-cols-1">
                        <div>
                            <div className="flex  max-sm:flex-col">
                                <FormField
                                    name="firstname"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem className="mr-2">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    name="lastname"
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                name="qualification"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Qualification</FormLabel>
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
                                            <Input placeholder="Enter your mail address " {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="number"
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
                                name="profile"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Linkedin Profile</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your linkedin profile link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="text-xs flex justify-between max-sm:text-[8px] pt-2">
                                Are you currently working somewhere
                                    <RadioGroup defaultValue="yes" className="flex">

                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="r1" />
                                        <Label htmlFor="r1">Yes</Label>
                                    </div>    
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="r2" />
                                        <Label htmlFor="r2">No</Label>
                                    </div>
                                    </RadioGroup>
                                </div>
                            
                        </div>
                        <div>
                            <JobDetailForm />
                            <FormField
                                name="currentInstitute"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel >Current working institute name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter the details of the place you are working now" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="instituteImageUrl"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Upload Institute Logo</FormLabel>
                                        <FormControl>
                                            <div className="w-full flex gap-2">
                                                <Input placeholder="Upload your institute logo" {...field} />
                                                <Button size={'sm'} className="absoulte top-0 right-0">Upload Logo</Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="aboutInstitute"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>About institue</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Tell us about your institute" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className="flex justify-between py-4">
                        <Button variant={"outline"} type="button">Cancel</Button>
                        <Button type="submit">Submit Details</Button>
                    </div>
                </form>
            </Form>
        </>
    )
}
