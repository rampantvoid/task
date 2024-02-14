import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import SlideIndicator from "./SlideIndicator";

export const images = [
  "https://m.media-amazon.com/images/I/41MloPxj+VL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/518vel6lTLL._SX679_.jpg",
  "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
];

const ProductSlider = () => {
  const [activeIndex, setCurrent] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scroll = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <div className="flex gap-5">
      {" "}
      <SlideIndicator
        images={images}
        scroll={scroll}
        activeIndex={activeIndex}
      />
      <Carousel orientation="vertical" setApi={setApi}>
        <CarouselContent className="max-h-[350px] md:max-h-[600px]">
          {images.map((image, index) => (
            <CarouselItem key={index} className="">
              <img
                className="lg:w-[600px] lg:h-[600px] lg:object-contain "
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
