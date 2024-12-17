import { MdBorderAll } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { GiShoppingCart } from "react-icons/gi";
import { IoCarOutline } from "react-icons/io5";
import { GiComb } from "react-icons/gi";
import { PiPark } from "react-icons/pi";
import { LiaTheaterMasksSolid } from "react-icons/lia";
import { TbWashGentle } from "react-icons/tb";
import { RiBeerLine } from "react-icons/ri";
import { CiDumbbell } from "react-icons/ci";

import { NavLink } from "react-router-dom";
import { link } from "@nextui-org/react";
import Carousel from "../common/Carousel";

const headerData = [
  {
    id: 1,
    title: "All",
    logo: (
      <>
        <MdBorderAll />
      </>
    ),
    link: "/all",
  },
  {
    id: 2,
    title: "Restaurants",
    logo: (
      <>
        <IoRestaurantSharp />
      </>
    ),
    link: "/",
  },
  {
    id: 3,
    title: "Hotels",
    logo: (
      <>
        <RiHotelLine />
      </>
    ),
    link: "/hotels",
  },
  {
    id: 4,
    title: "Home services",
    logo: (
      <>
        <AiOutlineHome />
      </>
    ),
    link: "/homeServices",
  },
  {
    id: 5,
    title: "Shopping",
    logo: (
      <>
        <GiShoppingCart />
      </>
    ),
    link: "/shopping",
  },
  {
    id: 6,
    title: "Car location",
    logo: (
      <>
        <IoCarOutline />
      </>
    ),
    link: "/carLocation",
  },
  {
    id: 7,
    title: "Beauty & Spa",
    logo: (
      <>
        <GiComb />
      </>
    ),
    link: "/beauty&Spa",
  },
  {
    id: 8,
    title: "Park",
    logo: (
      <>
        <PiPark />
      </>
    ),
    link: "/park",
  },
  {
    id: 9,
    title: "Museum",
    logo: (
      <>
        <LiaTheaterMasksSolid />
      </>
    ),
    link: "/museum",
  },
  {
    id: 10,
    title: "Car wash",
    logo: (
      <>
        <TbWashGentle />
      </>
    ),
    link: "/carWash",
  },
  {
    id: 11,
    title: "Bars",
    logo: (
      <>
        <RiBeerLine />
      </>
    ),
    link: "/bars",
  },
  {
    id: 12,
    title: "Gyms",
    logo: (
      <>
        <CiDumbbell />
      </>
    ),
    link: "/gyms",
  },
];

const HeroArea = () => {
  return (
    <section>
      {/* Header section */}
      <section className="pt-[42px] pb-16 container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-[67px]">
          {headerData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <NavLink to={item.link}  className={({ isActive }) => `flex flex-col flex-1 w-full items-center gap-3 pb-3 ${isActive ? 'border-b-1 border-primary text-primary' : 'text-accent_light'}`}>
                <span className="text-3xl w-auto">{item.logo}</span>
                <p className="text-sm font-body md:text-[15.5px] md:leading-[18.16px]">{item.title}</p>
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Hero section */}
      <section>
        <div>
            <Carousel data={CarouselData} tags={TagData} />
        </div>
      </section>
    </section>
  );
};

export default HeroArea;


const CarouselData = [
    {
      id: 1,
      image: "Img/drink/DrinkCarousel.png",
      heading:
        "GTCO Food and Drink Festival 2022: Africa’s Biggest Food and Drink Festival",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      image: "Img/slider.png",
      heading: "Hablu Programmer Is The Best",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      image: "Img/drink/DrinkCarousel.png",
      heading: "We Learning Full Stack Web Development",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
  ];
  
  const TagData = [
    {
      id: 1,
      img: "Img/Calendar.png",
      title: "Dec 12 2024",
    },
    {
      id: 2,
      img: "Img/Mark.png",
      title: "TBS  Lagos",
    },
    {
      id: 3,
      img: "Img/Clock.png",
      title: "9:00 PM",
    },
    {
      id: 4,
      img: "Img/Tag.png",
      title: "N20,000",
    },
  ];
  