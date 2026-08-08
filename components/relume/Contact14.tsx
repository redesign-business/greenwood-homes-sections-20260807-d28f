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
  const { tagline, heading, description, contacts, map } = {
    ...Contact14Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h2>
          <p className="text-medium">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            {contacts.map((contact, index) => (
              <div key={index}>
                <div className="mb-3 md:mb-4">{contact.icon}</div>
                <h3 className="mb-2 text-h6 font-bold">{contact.title}</h3>
                <p className="mb-2">{contact.description}</p>
                {contact.title === "Office" && contact.button ? (
                  <div className="mt-5 md:mt-6">
                    <Button {...contact.button}>{contact.button.title}</Button>
                  </div>
                ) : (
                  contact.link && (
                    <a className="underline" href={contact.link.url}>
                      {contact.link.label}
                    </a>
                  )
                )}
              </div>
            ))}
          </div>
          <a href={map.url} className="block">
            <img
              src={map.image.src}
              alt={map.image.alt}
              className="h-[320px] w-full rounded-image object-cover md:h-[565px] lg:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export const Contact14Defaults: Props = {
  tagline: "Tagline",
  heading: "Contact us",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  contacts: [
    {
      icon: <Mail className="size-8 text-scheme-text" />,
      title: "Email",
      description: "Lorem ipsum dolor sit amet.",
      link: {
        label: "email@example.com",
        url: "#",
      },
    },
    {
      icon: <Call className="size-8 text-scheme-text" />,
      title: "Phone",
      description: "Lorem ipsum dolor sit amet.",
      link: {
        label: "+1 (555) 000-0000",
        url: "#",
      },
    },
    {
      icon: <LocationOn className="size-8 text-scheme-text" />,
      title: "Office",
      description: "123 Sample St, Sydney NSW 2000 AU",
      button: {
        title: "Get Directions",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight className="text-scheme-text" />,
      },
    },
  ],
  map: {
    url: "#",
    image: {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-map-image.jpeg",
      alt: "Relume placeholder map image",
    },
  },
};
