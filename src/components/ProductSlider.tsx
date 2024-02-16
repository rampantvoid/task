import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import SlideIndicator from "./SlideIndicator";

const ProductSlider = () => {
  const [images, setImages] = React.useState([
    "https://m.media-amazon.com/images/I/41MloPxj+VL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/518vel6lTLL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
    "https://cdn.vox-cdn.com/thumbor/m1erwKNNUQpO1Gr4M7bzcgJR9AM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22014571/hhargreaves_201103_ecl1040_ps5_main_26394.jpg",
    "https://www.cnet.com/a/img/resize/f0298c37fef58d83fea311d00d0200da7736ef5d/hub/2021/03/08/13fe47c0-4f8e-4f7f-9ec1-6623d3d13bd1/ps5-playstation-5-sony-hoyle-promo-12.jpg?auto=webp&fit=crop&height=1200&width=1200",
  ]);
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

  const handleColorChange = (e: any) => {
    if (e.target.id === "black") {
      setImages([
        "https://m.media-amazon.com/images/I/51Dv1vnD+IL.jpg",
        "https://www.luxskinsofficial.com/cdn/shop/products/LUXPS50001SLM_1_1500x.jpg?v=1701435080",
        "https://images.hindustantimes.com/tech/img/2021/02/12/960x540/Screenshot_2021-02-12_at_4.44.09_PM_1613138305309_1613138319368.png",
      ]);
    }
    if (e.target.id === "white") {
      setImages([
        "https://m.media-amazon.com/images/I/41MloPxj+VL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/518vel6lTLL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
        "https://cdn.vox-cdn.com/thumbor/m1erwKNNUQpO1Gr4M7bzcgJR9AM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22014571/hhargreaves_201103_ecl1040_ps5_main_26394.jpg",
        "https://www.cnet.com/a/img/resize/f0298c37fef58d83fea311d00d0200da7736ef5d/hub/2021/03/08/13fe47c0-4f8e-4f7f-9ec1-6623d3d13bd1/ps5-playstation-5-sony-hoyle-promo-12.jpg?auto=webp&fit=crop&height=1200&width=1200",
      ]);
    }
  };

  return (
    <>
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
      <div className="flex px-16 gap-2 justify-center py-4 lg:justify-normal">
        <div
          id="black"
          className=" bg-black w-8 h-8 rounded-lg border-gray-400 border-[1px] hover:cursor-pointer"
          onClick={(e) => handleColorChange(e)}
        ></div>
        <div
          id="white"
          className=" bg-white w-8 h-8 rounded-lg  border-gray-400 border-[1px] hover:cursor-pointer"
          onClick={(e) => handleColorChange(e)}
        ></div>
      </div>
    </>
  );
};

export default ProductSlider;
