import { Progress } from "@/components/ui/progress";
import { Button } from "./ui/button";
import { Rating } from "react-simple-star-rating";
import ProductSlider from "./ProductSlider";

const Product = () => {
  return (
    <div className="w-full bg-[#edede9] flex">
      <div className="flex-col w-full p-2 mx-[10%]  mt-14 mb-28">
        {/* product name */}
        <div className="flex flex-col w-full lg:pl-11">
          <p>
            <p className="text-4xl font-md">Sony</p>
            <p className="text-5xl font-bold">Playstation 5</p>
          </p>
        </div>

        <div className="flex flex-col w-full gap-24 mt-5 justify-between items-center lg:flex-row lg:items-start">
          {/* Product gallery column */}

          <div className="flex flex-col lg:w-[30%]">
            <ProductSlider />
          </div>

          {/* Product Detail Section */}
          <div className="flex flex-col lg:w-[40%] gap-5">
            <div className="flex-col">
              <p className="text-xl font-bold">About this item</p>
              <p>
                Next wave of invites will be sent on 11/11/2022 to qualifying
                customers. While supplies lasts.
              </p>
              <p className="font-semibold">Model Number CFI-1215AXXXXXX</p>
            </div>

            <div className="flex-col">
              <p className="text-xl font-bold">Stunning games</p>
              <p>
                Marvel at incredible graphics and experience new PS5 features.
              </p>
            </div>

            <div className="flex-col">
              <p className="text-xl font-bold">Breathtaking Immersion</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident voluptate ratione voluptas ipsa.
              </p>
            </div>

            <div className="flex-col">
              <p className="text-xl font-bold">Lightning Speed</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
                eum assumenda quibusdam omnis, voluptatem placeat.
              </p>
            </div>

            {/* Price */}
            <div className="flex flex-col md:items-center gap-5 md:flex-row items-start">
              <div className="bg-black rounded-lg px-4 py-4 flex gap-2">
                <p className="text-white font-bold">&#8377; 24,000</p>
                <p className="text-white font-light line-through">
                  {" "}
                  &#8377; 31,500
                </p>
              </div>

              <p className="text-[#48cae4] font-semibold">
                You will save &#8377; 7500/-
              </p>
            </div>

            {/* Completed orders */}

            <Progress value={62} className="lg:w-[40%] bg-gray-300 " />
            <p className="text-lg font-bold">62% orders completed</p>

            {/* TnC */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>

            {/* Enter Deal */}
            <Button className="md:w-[150px] rounded-full bg-yellow-400 text-black font-bold text-lg shadow-md hover:bg-yellow-500  border-none">
              Enter Deal
            </Button>

            <p className="text-muted-foreground">
              PS: Item will be delivered to your address within 5 days after
              100% completion of deal
            </p>
          </div>

          {/* User Rating Column */}
          <div className="flex-col">
            <Rating
              readonly
              initialValue={4.6}
              size={30}
              SVGclassName="inline-block"
              allowFraction
            />
            <p className="text-lg font-bold">Average 4.6</p>
            <p className="text-muted-foreground">From all the channels</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
