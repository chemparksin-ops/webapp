"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ContactIcon } from "./icons/contact";

const POPUP_DELAY = 5 * 60 * 1000; // 5 minutes

export function PhoneCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;

    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      return;
    }

    const formSubmitted = localStorage.getItem("leadCaptureFormSubmitted");
    if (formSubmitted) {
      return;
    }

    const lastShown = localStorage.getItem("leadCapturePopupShown");
    if (lastShown && Date.now() - parseInt(lastShown) < POPUP_DELAY) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsOpen(true);
        localStorage.setItem("leadCapturePopupShown", Date.now().toString());
        window.removeEventListener("scroll", handleScroll);
      }
    };

    const handleInteraction = () => {
      setIsOpen(true);
      localStorage.setItem("leadCapturePopupShown", Date.now().toString());
      document.removeEventListener("click", handleInteraction);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleInteraction);


    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleInteraction);
    };
  }, [isClient]);

  useEffect(() => {
    const openPopup = () => setIsOpen(true);
    window.addEventListener('open-contact-popup', openPopup);
    return () => window.removeEventListener('open-contact-popup', openPopup);
  }, []);


  useEffect(() => {
    // Only run on client-side
    if (!isClient) return;

    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      return;
    }

    const formSubmitted = localStorage.getItem("leadCaptureFormSubmitted");
    if (formSubmitted) {
      return;
    }

    const lastShown = localStorage.getItem("leadCapturePopupShown");
    if (lastShown && Date.now() - parseInt(lastShown) < POPUP_DELAY) {
      return;
    }

    if (pathname !== "/") {
      setIsOpen(true);
      localStorage.setItem("leadCapturePopupShown", Date.now().toString());
    }
  }, [pathname, isClient]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const phone = formData.get("phone");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ phone }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your submission.",
        });
        setIsOpen(false);
        localStorage.setItem("leadCaptureFormSubmitted", "true");
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Don't render on server-side
  if (!isClient) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex justify-center">
            <ContactIcon className="h-8 w-8" />
          </div>
          <DialogTitle>Get in Touch</DialogTitle>
          <DialogDescription>
            Leave your mobile number below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your mobile number"
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
