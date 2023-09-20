"use client"

import React from "react"
import {
  Card,
  CardTitle,
} from "../ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "../ui/textarea"
import { useFormik } from 'formik'
import { contactMeSchema } from "./validations"

const onSubmit: any = async (values: any, actions: any) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  actions.resetForm()
}

function Hero() {


  const { handleChange, errors, handleBlur, handleSubmit, values, touched, isSubmitting } = useFormik({
    initialValues: {
      email: "",
      message: ""
    },
    validationSchema: contactMeSchema,
    onSubmit
  })

  console.log(errors)

  return (
    <Card className="w-full max-w-7xl space-y-6 mx-auto p-12">
      <Avatar className="w-16 h-16">
        <AvatarImage src="https://github.com/sefakpsz.png" />
        <AvatarFallback className="font-bold text-xl">SF</AvatarFallback>
      </Avatar>
      <CardTitle className="leading-relaxed text-xl font-semibold max-w-5xl text-zinc-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, rerum autem a, totam dicta dolorum temporibus itaque repellat fugit iusto excepturi in, sit incidunt.</CardTitle>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Contact Me</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              To contact with me please fill the blanks.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} autoComplete="off">

            <div className="grid gap-4 py-4">

              <div>
                <Label htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  //defaultValue="example@mail.com"
                  className={errors.email && touched.email ? "border-2 border-red-600 mb-1" : ""}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && <p className="text-red-600 font-sans font-medium text-xs">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="message">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your messages..."
                  //defaultValue="Your messages..."
                  className={errors.message && touched.message ? "border-2 border-red-600 mb-1" : ""}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.message && touched.message && <p className="text-red-600 font-sans font-medium text-xs">{errors.message}</p>}
              </div>

            </div>

            <DialogFooter>
              <Button disabled={isSubmitting} className="bg-purple-400" type="submit">Send</Button>
            </DialogFooter>

          </form>
        </DialogContent>
      </Dialog>

    </Card>
  )
}

export default Hero
