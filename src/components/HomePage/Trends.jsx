import { MdStars } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { Button } from "@nextui-org/react";
import { trendsData } from "../../lib/utils";



const renderStars = (count) => {
  // Dynamically create the correct number of star icons
  return Array(count)
    .fill(null)
    .map((_, i) => <MdStars key={i} />); // Ensure unique keys for each star
};

const Trends = () => {
  return (
    <section className="mt-[102px] mb-[52px]">
      <div className="container mx-auto px-5 lg:px-0">
        <h2 className="text-secondary font-heading text-[32px] leading-10 font-extrabold pb-[25px] xl:pb-0 text-center lg:text-start">
          The latest trends
        </h2>
        <div>
          {trendsData.map((section, id) => (
            <div
              key={id}
              className="h-[1620px] sm:h-[800px] lg:h-[785px] xl:h-[400px] "
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {section.items?.map((item, idx) => (
                  <div key={idx} className="xl:py-7 md:max-w-[350px]">
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
                            {/* Render stars dynamically */}
                            {renderStars(item.stars)}
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
        </div>
      </div>

      {/* More Section */}
      <div className="text-center mt-[52px]">
        <h4 className="text-secondary font-heading text-base sm:text-[22px] sm:leading-[27.5px]   pb-5">Discover more cool restaurants</h4>
        <Button radius="full" size="lg" className="bg-primary font-body text-white text-base sm:text-[19px] sm:leading-[22.27px]">Show more</Button>
      </div>
    </section>
  );
};

export default Trends;
