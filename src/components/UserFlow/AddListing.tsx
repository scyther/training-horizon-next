"use client";

import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { useState, useEffect } from "react";

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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/trainer-dashboard/ui/select";
import { Dialog, DialogContent, DialogHeader } from "../trainer-dashboard/ui/dialog";
import { DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

export function AddListing() {
  const categories = ["Basketball", "Table Tennis", "Yoga", "Other"] as const;
  const gender = ["Male", "Female", "Other"] as const;
  const agegroup = ["5-8", "8-12", "13-18", "18-21", "21+"] as const;
  const mode = ["Offline", "Online"] as const;

  const formSchema = z.object({
    category: z.string(),
    title: z.string(),
    price: z.string(),
    mode: z.string(),
    location: z.string(),
    quantity: z.string().optional(),
    startDate: z.string(),
    endDate: z.string(),
    days: z.string(),
    gender: z.string(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
    ageGroup: z.string(),
    description: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: "",
      startTime: "",
      endTime: "",
    }
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("");
  const [formValues, setFormValues] = useState<z.infer<typeof formSchema>>({
    category: "",
    title: "",
    price: "",
    mode: "",
    location: "",
    quantity: "",
    startDate: "",
    endDate: "",
    days: "",
    gender: "",
    startTime: "",
    endTime: "",
    ageGroup: "",
    description: "",
  });

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('http://localhost:3005/api/v1/listing/add-listing', values, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmQxZDM0MWQ1YTcyMGU5MGFlYTJiNjQiLCJpYXQiOjE3MjU0MDgyODJ9.YH3aJtElSKnWsacQtGDrriUhZAwlNcjkDOhUAK49WIY`,
          'Content-Type': 'application/json',
        },
      });
      const listingId = response.data.listingId

      router.push(`/dashboard/teacher/preview?listingId=${listingId}`);
      // router.push('/dashboard/teacher/thankyou')
      return response.data;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  const handleDateChange = () => {
    const startDate = form.getValues("startDate");
    const endDate = form.getValues("endDate");

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end < start) {
        form.setError("endDate", {
          type: "manual",
          message: "End date must be greater than start date",
        });
      } else {
        form.clearErrors("endDate");
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        form.setValue("days", String(diffDays));
      }
    }
  };

  useEffect(() => {
    const subscription = form.watch((_, { name }) => {
      if (name === "startDate" || name === "endDate") {
        handleDateChange();
      }
    });
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const handleReviewClick = () => {
    setFormValues(form.getValues());
    setIsDialogOpen(true);
  };

  const handleSubmit = () => {
    handleDateChange();

  // Check if there are any validation errors
  const hasErrors = form.formState.errors.startDate || form.formState.errors.endDate;
  
  if (hasErrors) {
    // If there are errors, do not submit
    return;
  }
    form.handleSubmit(onSubmit)();
    setIsDialogOpen(false);
  };

  return (
    <div className="m-4">
      <div className="text-xl font-bold">Add Listing</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full py-4 space-y-2"
        >
          {/* Category Field */}
          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>CATEGORY</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categories</SelectLabel>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Title Field */}
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>TITLE</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price Field */}
          <FormField
            name="price"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>PRICE</FormLabel>
                <FormControl>
                  <Input type="number" {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Mode Field */}
          <FormField
            name="mode"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mode</FormLabel>
                <FormControl>
                  <Select onValueChange={(value) => { 
                    field.onChange(value);
                    setSelectedMode(value); // Update state with selected mode
                  } } value={field.value ?? ""}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Mode</SelectLabel>
                        {mode.map((mode) => (
                          <SelectItem key={mode} value={mode}>
                            {mode}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Location Field */}
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{selectedMode === "Online" ? "ZOOM LINK" : "LOCATION"}</FormLabel>
                <FormControl>
                <Input {...field} value={field.value ?? ""} placeholder={selectedMode === "Online" ? "Enter Zoom link" : "Enter location"} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Quantity Field */}
          <FormField
            name="quantity"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>QUANTITY (OPTIONAL)</FormLabel>
                <FormControl>
                  <Input type="number" {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Start Date Field */}
          <FormField
            name="startDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>START DATE</FormLabel>
                <FormControl>
                  <Input type="date" {...field} onChange={field.onChange} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End Date Field */}
          <FormField
            name="endDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>END DATE</FormLabel>
                <FormControl>
                  <Input type="date" {...field} onChange={field.onChange} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Days Field */}
          <FormField
            name="days"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>DAYS</FormLabel>
                <FormControl>
                  <Input type="number" readOnly {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Gender Field */}
          <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>GENDER</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        {gender.map((gender) => (
                          <SelectItem key={gender} value={gender}>
                            {gender}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Start Time Field */}
          <FormField
            name="startTime"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>START TIME (OPTIONAL)</FormLabel>
                <FormControl>
                  <Input type="time" {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* End Time Field */}
          <FormField
            name="endTime"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>END TIME (OPTIONAL)</FormLabel>
                <FormControl>
                  <Input type="time" {...field} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Age Group Field */}
          <FormField
            name="ageGroup"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>AGE GROUP</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value ?? ""}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Age Group</SelectLabel>
                        {agegroup.map((agegroup) => (
                          <SelectItem key={agegroup} value={agegroup}>
                            {agegroup}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Description Field */}
          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>DESCRIPTION</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex justify-between">
            <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
              <DialogTrigger asChild>
                <Button type="button" onClick={handleReviewClick}>Review</Button>
              </DialogTrigger>
              <DialogContent className="max-sm:w-[425px">
                <DialogHeader>
                  <DialogTitle>Review Details</DialogTitle>
                  <DialogDescription>Click edit to make changes, Click submit when done</DialogDescription>
                </DialogHeader>
                <div>
                  <div className="flex justify-between"><strong>Category:</strong> {formValues.category}</div>
                  <div className="flex justify-between"><strong>Title:</strong> {formValues.title}</div>
                  <div className="flex justify-between"><strong>Price:</strong> {formValues.price}</div>
                  <div className="flex justify-between"><strong>Mode:</strong> {formValues.mode}</div>
                  <div className="flex justify-between"><strong>Location:</strong> {formValues.location}</div>
                  <div className="flex justify-between"><strong>Quantity:</strong> {formValues.quantity}</div>
                  <div className="flex justify-between"><strong>Start Date:</strong> {formValues.startDate}</div>
                  <div className="flex justify-between"><strong>End Date:</strong> {formValues.endDate}</div>
                  <div className="flex justify-between"><strong>Days:</strong> {formValues.days}</div>
                  <div className="flex justify-between"><strong>Gender:</strong> {formValues.gender}</div>
                  <div className="flex justify-between"><strong>Start Time:</strong> {formValues.startTime}</div>
                  <div className="flex justify-between"><strong>End Time:</strong> {formValues.endTime}</div>
                  <div className="flex justify-between"><strong>Age Group:</strong> {formValues.ageGroup}</div>
                  <div className="flex justify-between"><strong>Description:</strong> {formValues.description}</div>
                </div><div className="flex justify-between mt-4">
                  <Button type="button" onClick={() => setIsDialogOpen(false)}>Edit</Button>
                  <Button type="button" onClick={handleSubmit}>Submit Listing</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </Form>
    </div>
  );
}
