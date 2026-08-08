## components/ui/button.tsx

```tsx
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded-button whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-background-tertiary bg-background-tertiary text-scheme-btn-text",
        alternate: "border border-white bg-white text-neutral-darkest",
        secondary: "border border-scheme-border text-scheme-text",
        "secondary-alt": "border border-white text-white",
        link: "gap-2 text-scheme-text",
        "link-alt": "gap-2 text-white",
        ghost: "hover:bg-neutral-darkest hover:text-white",
        none: "",
      },
      size: { default: "px-6 py-3", sm: "px-5 py-2", link: "p-0", icon: "size-10", none: "" },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    title?: string;
    href?: string;
    url?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

export function Button({ className, variant, size, asChild = false, title, href, url, type, onClick, iconLeft, iconRight, children, ...props }: ButtonProps) {
```

## components/relume/Navbar15.tsx

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KeyboardArrowDown, KeyboardArrowUp } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  button: ButtonProps;
};

export type Navbar15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar15 = (props: Navbar15Props) => {
```

## components/relume/Header145.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header145Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header145 = (props: Header145Props) => {
```

## components/relume/Stats13.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type StatsProps = {
  percentage: string;
  heading: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  buttons: ButtonProps[];
  stats: StatsProps[];
};

export type Stats13Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stats13 = (props: Stats13Props) => {
```

## components/relume/GridList5.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bathtub, Bed, Bookmark, LocationOn, Search } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type PropertyCard = {
  image: ImageProps;
  title: string;
  description: string;
  location: string;
  numberOfBeds: string;
  numberOfBaths: string;
  price: string;
  priceDuration: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  inputIcon: React.ReactNode;
  selectPlaceholder: string;
  selectItems: string[];
  properties: PropertyCard[];
};

export type GridList5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList5 = (props: GridList5Props) => {
```

## components/relume/GridList4.tsx

```tsx
import { MoreHoriz, RelumeIcon } from "relume-icons";

import { Button, type ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ProjectCard = {
  projectName: string;
  category: string;
  date: string;
  options: string[];
  description: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  options: string[];
  projects: ProjectCard[];
};

export type GridList4Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const GridList4 = (props: GridList4Props) => {
```

## components/relume/Logo5.tsx

```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  logos: ImageProps[];
};

export type Logo5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Logo5 = (props: Logo5Props) => {
```

## components/relume/Testimonial43.tsx

```tsx
"use client";

import { useState, useEffect } from "react";
import React from "react";
import clsx from "clsx";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  logo: ImageProps;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
  button: ButtonProps;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial43Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial43 = (props: Testimonial43Props) => {
```

## components/relume/Team3.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";
import { DribbbleLogo, LinkedinLogo, XLogo } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Footer = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type SocialLink = {
  href: string;
  icon: React.ReactNode;
};

type TeamMember = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLink[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMember[];
  footer: Footer;
};

export type Team3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team3 = (props: Team3Props) => {
```

## components/relume/Contact14.tsx

```tsx
import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Call, ChevronRight, LocationOn, Mail } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type LinkProps = {
  label: string;
  url: string;
};

type Map = {
  url: string;
  image: ImageProps;
};

type Contact = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: LinkProps;
  button?: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: Contact[];
  map: Map;
};

export type Contact14Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Contact14 = (props: Contact14Props) => {
```

## components/relume/Footer7.tsx

```tsx
type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer7 = (props: Footer7Props) => {
```
