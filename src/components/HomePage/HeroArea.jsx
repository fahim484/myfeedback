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
import { MdStars } from "react-icons/md";


import { NavLink } from "react-router-dom";
import MyCarousel from "../common/Carousel";

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
      <section className="pt-[42px] pb-16 container mx-auto px-4 lg:px-0">
        <div className="flex flex-wrap items-center justify-evenly md:justify-between gap-8 md:gap-[67px]">
          {headerData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex flex-col flex-1 w-full items-center gap-3 pb-3 ${
                    isActive
                      ? "border-b-1 border-primary text-primary"
                      : "text-accent_light"
                  }`
                }
              >
                <span className="text-3xl w-auto">{item.logo}</span>
                <p className="text-sm font-body md:text-[15.5px] md:leading-[18.16px]">
                  {item.title}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </section>

      {/* Hero section */}
      <section>
        <MyCarousel data={CarouselData} />
      </section>
    </section>
  );
};

export default HeroArea;

const CarouselData = [
  {
    items: [
      {
        id: 1,
        image: ["Img/common/Carousel/carousel-card-img-1.png", "Img/common/Carousel/carousel-card-img-2.png", "Img/common/Carousel/carousel-card-img-3.png", "Img/common/Carousel/carousel-card-img-4.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 2,
        image: ["Img/common/Carousel/carousel-card-img-2.png", "Img/common/Carousel/carousel-card-img-1.png", "Img/common/Carousel/carousel-card-img-3.png", "Img/common/Carousel/carousel-card-img-4.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 3,
        image: ["Img/common/Carousel/carousel-card-img-3.png", "Img/common/Carousel/carousel-card-img-1.png", "Img/common/Carousel/carousel-card-img-2.png",  "Img/common/Carousel/carousel-card-img-4.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 4,
        image: ["Img/common/Carousel/carousel-card-img-4.png", "Img/common/Carousel/carousel-card-img-1.png", "Img/common/Carousel/carousel-card-img-2.png", "Img/common/Carousel/carousel-card-img-3.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
    ],
  },

  {
    items: [
      {
        id: 5,
        image: ["Img/common/Carousel/carousel-card-img-5.png", "Img/common/Carousel/carousel-card-img-6.png", "Img/common/Carousel/carousel-card-img-7.png", "Img/common/Carousel/carousel-card-img-8.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 6,
        image: ["Img/common/Carousel/carousel-card-img-6.png", "Img/common/Carousel/carousel-card-img-5.png", "Img/common/Carousel/carousel-card-img-7.png", "Img/common/Carousel/carousel-card-img-8.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 7,
        image: ["Img/common/Carousel/carousel-card-img-7.png", "Img/common/Carousel/carousel-card-img-5.png", "Img/common/Carousel/carousel-card-img-6.png", "Img/common/Carousel/carousel-card-img-8.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 8,
        image: ["Img/common/Carousel/carousel-card-img-8.png", "Img/common/Carousel/carousel-card-img-5.png", "Img/common/Carousel/carousel-card-img-6.png", "Img/common/Carousel/carousel-card-img-7.png"],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        star: (
          <>
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
            <MdStars />
          </>
        ),
        rating: "5.0",
        review: "(876 reviews)",
      },
    ],
  },
];
