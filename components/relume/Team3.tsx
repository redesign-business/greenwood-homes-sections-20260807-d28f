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
  const { tagline, heading, description, teamMembers, footer } = {
    ...Team3Defaults,
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
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
        <div className="mt-14 w-full max-w-md md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-h4 font-bold md:mb-4">{footer.heading}</h4>
          <p className="text-medium">{footer.description}</p>
          <div className="mt-6 md:mt-8">
            <Button {...footer.button}>{footer.button.title}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-5 size-20 min-h-20 min-w-20 overflow-hidden rounded-full md:mb-6">
        <img src={member.image.src} alt={member.image.alt} className="size-full object-cover" />
      </div>
      <div className="mb-3 md:mb-4">
        <p className="text-large font-semibold">{member.name}</p>
        <p className="text-medium">{member.jobTitle}</p>
      </div>
      <p>{member.description}</p>
      <div className="mt-5 flex gap-3.5 md:mt-6">
        {member.socialLinks.map((link, index) => (
          <a key={index} href={link.href}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export const Team3Defaults: Props = {
  tagline: "Tagline",
  heading: "Our team",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  teamMembers: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 1",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 2",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 3",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 4",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 5",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 6",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 7",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image 8",
      },
      name: "Full name",
      jobTitle: "Job title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      socialLinks: [
        { href: "#", icon: <LinkedinLogo className="size-6 text-scheme-text" /> },
        { href: "#", icon: <XLogo className="size-6 p-0.5 text-scheme-text" /> },
        { href: "#", icon: <DribbbleLogo className="size-6 text-scheme-text" /> },
      ],
    },
  ],
  footer: {
    heading: "We're hiring!",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: { title: "Open positions", variant: "secondary" },
  },
};
