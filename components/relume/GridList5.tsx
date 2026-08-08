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
  const { heading, description, inputIcon, selectPlaceholder, selectItems, properties } = {
    ...GridList5Defaults,
    ...props,
  };
  return (
    <section>
      <div className="grid auto-cols-fr grid-cols-1 items-end gap-4 pb-5 md:grid-cols-[1fr_max-content] md:gap-6 md:pb-6">
        <div className="w-full max-w-lg">
          <h1 className="text-h5 font-bold">{heading}</h1>
          <p className="mt-2">{description}</p>
        </div>
        <div className="flex items-center justify-between md:justify-normal">
          <Input placeholder="Search" icon={inputIcon} className="mr-4" />
          <Select>
            <SelectTrigger className="w-[110px] px-4 py-2">
              <SelectValue placeholder={selectPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {selectItems.map((item, index) => (
                <SelectItem key={index} value={`${item.toLowerCase().replace(/\s/g, "-")}`}>
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid w-full auto-cols-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((property, index) => (
          <div key={index} className="border border-scheme-border">
            <div className="w-full overflow-hidden">
              <img
                src={property.image.src}
                alt={property.image.alt}
                className="aspect-[3/2] size-full object-cover"
              />
            </div>
            <div className="flex flex-col p-6">
              <div className="mb-2 flex items-center justify-between gap-4">
                <h2 className="text-h6 font-bold">{property.title}</h2>
                <div className="p-2">
                  <Bookmark className="size-6 text-scheme-text" />
                </div>
              </div>
              <p className="mb-3 md:mb-4">{property.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <LocationOn className="size-6 text-scheme-text" />
                  <span className="text-small">{property.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed className="size-6 text-scheme-text" />
                  <span className="text-small">{property.numberOfBeds}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bathtub className="size-6 text-scheme-text" />
                  <span className="text-small">{property.numberOfBaths}</span>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between gap-4 md:mt-6">
                <div>
                  <h5 className="text-h5 font-bold">{property.price}</h5>
                  <span className={`before:content-['_']`}>{property.priceDuration}</span>
                </div>
                <Button {...property.button}>{property.button.title}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const GridList5Defaults: Props = {
  heading: "Popular Properties",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  selectPlaceholder: "Sort by",
  inputIcon: <Search className="size-6 text-scheme-text" />,
  selectItems: ["Option 1", "Option 2", "Option 3"],
  properties: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 1",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 2",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 3",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 4",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 5",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
        alt: "Property Image 6",
      },
      title: "Property name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      numberOfBeds: "2 Beds",
      numberOfBaths: "1 Bath",
      price: "$520",
      priceDuration: "/ night",
      button: {
        title: "View deal",
        size: "sm",
      },
    },
  ],
};
