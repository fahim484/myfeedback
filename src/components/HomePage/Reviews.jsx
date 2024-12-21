import { MdStars } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { reviewsData } from "../../lib/utils";
import { Carousel } from "flowbite-react";

const renderStars = (count) => {
  // Dynamically create the correct number of star icons
  return Array(count)
    .fill(null)
    .map((_, i) => <MdStars key={i} />); // Ensure unique keys for each star
};

const Reviews = () => {
  return (
    <section className="w-full py-10 px-10 lg:py-20 my-[50px] sm:my-[80px] lg:my-[100px] xl:my-[150px] border-b-2 border-accent_light_5">
      <h2 className="font-heading text-secondary text-xl sm:text-lg lg:text-[32px] lg:leading-10 font-extrabold ml-7">
        Recent activities
      </h2>

      <div className="h-[2000px] md:h-[1500px] xl:h-[580px]">
        <Carousel>
          {reviewsData.map((section, id) => (
            <div className="h-[1500px] md:h-[1500px] xl:h-[580px]" key={id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
                {section.items?.map((item, idx) => (
                  <div key={idx} className="p-7">
                    <div className="bg-accent_light_2 rounded-[14px] px-[13px] py-[24px] h-[670px]  sm:h-[530px] md:h-[650px] lg:h-[550px] xl:h-[800px] ">
                      <div className="flex justify-center md:justify-start items-center gap-3">
                        <span className="text-2xl md:text-3xl w-auto bg-white rounded-full p-2 md:p-4">
                          {item.logo}
                        </span>
                        <div className="flex flex-col font-body">
                          <p className="text-accent text-sm md:text-[21px] md:leading-[24.61px] font-semibold">
                            {item.personName}
                          </p>
                          <p className="text-xs md:text-[16.5px] md:leading-[19.34px] text-accent_dark_3">
                            {item.address}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center md:justify-start items-center gap-3 mt-[23px] mb-[21px]">
                        <div className="flex items-center justify-start text-yellow-400 font-body">
                          {/* Render stars dynamically */}
                          {renderStars(item.stars)}
                        </div>
                        <span className="text-xs md:text-[14.5px] md:leading-[17.58px] text-accent_light_4">
                          {item.date}
                        </span>
                      </div>
                      <div className="h-[120px] text-center md:text-start text-primary_dark font-body text-xs md:text-base md:leading-[18.75px] space-y-5">
                        <p>{item.des}</p>
                        <p>{item.des2}</p>
                      </div>
                        <div>
                      <div className=" flex flex-wrap justify-center md:justify-start items-center gap-3 mt-10 mb-5">
                          {item.image?.map((image, imageId) => (
                            <img
                              key={imageId}
                              src={image}
                              alt={`card-${imageId}`}
                              className="w-1/3 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="text-center md:text-start">
                        <NavLink className="text-accent font-heading text-xs md:text-[17px] md:leading-[21.25px] font-medium underline mt-5">
                          {item.link}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
