import { Carousel } from "flowbite-react";

const MyCarousel = ({ data }) => {
  return (
    <section>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="h-[1900px] sm:h-[950px] lg:h-[1000px] xl:h-[500px]">
          <Carousel>
            {data.map((section, id) => (
              <div
                className="h-[1900px] sm:h-[950px] lg:h-[1000px] xl:h-[500px] bg-primary"
                key={id}
              >
                <h1 className="text-white font-heading text-xl md:text-[32px] md:leading-10 font-bold text-center md:text-start ml-[32px] mt-4">
                  Find the best restaurant ratings below
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full ">
                  {section.items?.map((item, idx) => (
                    <div key={idx} className="p-7 text-primary">
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
                        <div className="text-center md:text-start font-body px-1 md:px-4">
                          <h3 className="font-semibold text-[19px] leading-[22.27px] text-accent mt-[13px] pb-1">
                            {item.title}
                          </h3>
                          <p className="text-sm leading-[16.41px] text-accent_dark mb-6">
                            {item.des}
                          </p>
                          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center  text-yellow-400 mt-2 gap-[9px]">
                            <div className="flex items-center justify-center">
                              {item.star}
                            </div>
                            <p className="text-xs 2xl:text-sm 2xl:leading-[16.41px] text-primary_light">
                              Rating:
                              <span className="font-semibold text-accent px-1">
                                {item.rating}
                              </span>
                              {item.review}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default MyCarousel;
