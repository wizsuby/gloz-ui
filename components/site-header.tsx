"use client";
import MainNav from "./main-nav";
import MobileNav from "./mobile-nav";
import { CommandMenu } from "./command-menu";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Github, Hand, HandMetal, Linkedin } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "./icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const SiteHeader = () => {
  const site = usePathname();
  if (site.startsWith("/examples")) return null;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-4 md:justify-end">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-3.5 w-3.5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CustomButton />
          </div>
        </div>
      </div>
    </header>
  );
};

const CustomButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full space-x-2">
          <span className="font-semibold">Custom Build</span>
          <span>
            <HandMetal size={17} />
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <div className="rounded-full overflow-clip w-max">
          <Image
            src="/twitter-profile.png"
            width={50}
            height={50}
            alt="founder of Gloz"
          />
        </div>
        <DialogHeader>
          <DialogTitle>👋 Hey, I'm Suby</DialogTitle>
          <p>Founder of gloz.tech</p>
          <DialogDescription className="pt-2">
            <Balancer>
              DM me on Twitter or LinkedIn if you are looking for Custom
              Landing-pages, Custom Sections & Custom Components.
            </Balancer>
          </DialogDescription>
          <div className="space-x-3 pt-3">
            <Button variant={"secondary"} size={"sm"} className="rounded-full space-x-2 pr-5">
              <span><Icons.twitter className="h-3 fill-current"/></span>
              <span>Twitter</span>
            </Button>
            <Button variant={"secondary"} size={"sm"} className="rounded-full space-x-2 px-5">
              <span><Linkedin size={15}/></span>
              <span>Linkedin</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SiteHeader;
