import { Carousel } from "flowbite-react";

const Card = () => {
  return (
    <div key={idx} className="p-10 text-primary">
      <div className="bg-accent_light_2 rounded-[14px] pb-5">
        <Carousel className="h-[213px]">
          {item.image?.map((image, imageId) => (
            <img
              key={imageId}
              src={image}
              alt={`carousel-${imageId}`}
              className="object-cover h-full w-full"
            />
          ))}
        </Carousel>
        <div className="text-center sm:text-start font-body px-4">
          <h3 className="font-semibold text-[19px] leading-[22.27px] text-accent mt-[13px]">
            {item.title}
          </h3>
          <p className="text-sm leading-[16.41px] text-accent_dark mb-6">
            {item.des}
          </p>
          <div className="flex justify-center items-center text-yellow-400 mt-2 gap-[9px]">
            <div className="flex items-center justify-center">{item.star}</div>
            <p className="text-sm leading-[16.41px] text-primary_light">
              <span className="font-semibold text-accent">{item.rating}</span>
              {item.review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
