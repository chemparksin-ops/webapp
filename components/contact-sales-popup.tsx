"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContactIcon } from "./icons/contact";

export function ContactSalesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const openPopup = () => setIsOpen(true);
    window.addEventListener("open-contact-sales-popup", openPopup);
    return () => window.removeEventListener("open-contact-sales-popup", openPopup);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Success! Thank you for your submission.");
        setIsOpen(false);
      } else {
        alert("Error: Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error: Something went wrong. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex justify-center">
            <ContactIcon className="h-8 w-8" />
          </div>
          <DialogTitle>Contact Sales</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="col-span-4"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              className="col-span-4"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              className="col-span-4"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="col-span-4"
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
