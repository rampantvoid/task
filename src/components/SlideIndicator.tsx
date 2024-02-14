const SlideIndicator = ({
  images,
  scroll,
  activeIndex,
}: {
  images: Array<string>;
  scroll: any;
  activeIndex: number;
}) => {
  return (
    <div className="lg:flex-col justify-center gap-5 lg:flex hidden">
      {images.map((_, index) => (
        <span
          key={index}
          onClick={() => scroll(index)}
          className={`w-3 h-3 mx-2 cursor-pointer rounded-full border-gray-400 border-[1px] ${
            index === activeIndex ? "bg-indigo-500" : "bg-gray-100"
          }`}
        ></span>
      ))}
    </div>
  );
};

export default SlideIndicator;
