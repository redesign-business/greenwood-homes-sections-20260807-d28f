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
  const { heading, description, buttons, image } = {
    ...Header145Defaults,
    ...props,
  };
  return (
    <section>
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container flex flex-col items-center text-center">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="mb-5 text-h1 font-bold md:mb-6">{heading}</h1>
            <p className="text-medium">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <img
          src={image.src}
          className="aspect-video size-full rounded-image object-cover"
          alt={image.alt}
        />
      </div>
    </section>
  );
};

export const Header145Defaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
