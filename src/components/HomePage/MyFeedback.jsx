import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const MyFeedback = () => {
  return (
    <section className="mt-[102px] mb-[52px] bg-accent_light_3 py-[26px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-5">
          {/* Left section */}
          <div>
            <h2 className="max-w-[502px] font-heading text-secondary text-xl sm:text-lg lg:text-[26px] lg:leading-[32.5px] font-extrabold">
              MyFeedback for Business has resources to help you plan, start,
              grow, and advertise your small business
            </h2>
            <p className="max-w-[453px] text-sm lg:text-base lg:leading-[18.75px] text-primary_dark font-body mt-[28px] mb-5 sm:mb-[63px]">
              The lorem ipsum is, in printing, a series of meaningless words
              used temporarily to calibrate a layout.
            </p>
            <NavLink to="#">
              <Button
                color="primary"
                radius="full"
                variant="flat"
                className="bg-secondary text-white text-xs md:text-[17.5px] md:leading-[19.92px]"
              >
                Explore MyFeedback business
              </Button>
            </NavLink>
          </div>

          {/* Right section */}
          <div>
            <img className="w-full" src="/Img/HomePage/MyFeedback/myfeedback-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyFeedback;
