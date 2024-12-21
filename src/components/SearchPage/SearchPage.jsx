import { MdStars } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { trendsData } from "../../lib/utils";
import { BsSortDown } from "react-icons/bs";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const renderStars = (count) => {
  // Dynamically create the correct number of star icons
  return Array(count)
    .fill(null)
    .map((_, i) => <MdStars key={i} />); // Ensure unique keys for each star
};

const SearchPage = ({ title }) => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 py-9 px-7">
        {/* left section */}
        <div>
          <Breadcrumbs
            itemClasses={{
              separator: "px-2",
            }}
            separator="/"
            className="font-body font-semibold text-base leading-[18.75px] text-primary_dark"
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>All restaurants</BreadcrumbItem>
          </Breadcrumbs>
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-[30px] font-body mt-[11px] mb-7">
            <h2 className="text-secondary font-heading text-xl md:text-[32px] md:leading-10 font-extrabold pb-[25px] xl:pb-0 text-center lg:text-start">
              best restaurants in singapore
            </h2>
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <Button variant="bordered" className="text-primary_dark">
                    <BsSortDown size={24} />
                    <span className="font-body font-medium text-sm md:text-[17px] md:leading-[19.92px]">
                      Sort
                    </span>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Action event example"
                  onAction={(key) => alert(key)}
                  className="font-body text-[17px] leading-[19.92px] bg-[#B0C2FF21]"
                >
                  <DropdownItem color="primary">All feedbacks</DropdownItem>
                  <DropdownItem color="primary">Highest rated</DropdownItem>
                  <DropdownItem color="primary">Oldest rated</DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {trendsData.map((section, id) => (
            <div key={id}>
              <div className="flex flex-col gap-5">
                {section.items?.map((item, idx) => (
                  <div
                    key={idx}
                    className="xl:py-7 w-full lg:max-w-[550px] border-b-1 border-accent_light_5 pb-[34px]"
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-[15px] ">
                      <Carousel className="h-[169px] w-[430px]">
                        {item.image?.map((image, imageId) => (
                          <img
                            key={imageId}
                            src={image}
                            alt={`carousel-${imageId}`}
                          />
                        ))}
                      </Carousel>
                      <div className="text-center md:text-start font-body">
                        <h3 className="font-semibold text-base md:text-[22px] md:leading-[25.74px] text-accent mt-[13px] pb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-base md:leading-[18.75px] text-accent_dark mb-6">
                          {item.des}
                        </p>
                        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center  text-yellow-400 mt-2 gap-[9px]">
                          <div className="flex items-center justify-center">
                            {/* Render stars dynamically */}
                            {renderStars(item.stars)}
                          </div>
                          <p className="text-xs 2xl:text-sm 2xl:leading-[16.41px] text-primary_light">
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
          <Button
            color="primary"
            radius="full"
            variant="flat"
            size="lg"
            className="bg-primary text-white text-[10px] sm:text-[19px] sm:leading-[22.27px] mt-[74px]"
          >
            Show more
          </Button>
        </div>

        {/* right section */}
        <div>
          <img src="/Img/SearchPage/map.png" alt="Map Image" />
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
