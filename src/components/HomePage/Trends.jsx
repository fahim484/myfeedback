import { MdStars } from "react-icons/md";
import { Carousel } from "flowbite-react";

const trendsData = [
  {
    items: [
      {
        id: 1,
        image: [
          "Img/Trends/trends-card-img-1.png",
          "Img/Trends/trends-card-img-2.png",
          "Img/Trends/trends-card-img-3.png",
          "Img/Trends/trends-card-img-4.png",
        ],
        title: "Bella Italia",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 4,
        rating: "4.8",
        review: "(34 reviews)",
      },
      {
        id: 2,
        image: [
          "Img/Trends/trends-card-img-2.png",
          "Img/Trends/trends-card-img-3.png",
          "Img/Trends/trends-card-img-4.png",
          "Img/Trends/trends-card-img-1.png",
        ],
        title: "Little Shucker",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(253 reviews)",
      },
      {
        id: 3,
        image: [
          "Img/Trends/trends-card-img-3.png",
          "Img/Trends/trends-card-img-4.png",
          "Img/Trends/trends-card-img-1.png",
        ],
        title: "Marafuku Ramen",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 3,
        rating: "3.5",
        review: "(87 reviews)",
      },
      {
        id: 4,
        image: [
          "Img/Trends/trends-card-img-4.png",
          "Img/Trends/trends-card-img-1.png",
          "Img/Trends/trends-card-img-2.png",
          "Img/Trends/trends-card-img-3.png",
        ],
        title: "Bottega",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(876 reviews)",
      },
    ],
  },

  {
    items: [
      {
        id: 5,
        image: [
          "Img/Trends/trends-card-img-5.png",
          "Img/Trends/trends-card-img-6.png",
          "Img/Trends/trends-card-img-7.png",
          "Img/Trends/trends-card-img-8.png",
        ],
        title: "Arabia Nights",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 3,
        rating: "3.5",
        review: "(334 reviews)",
      },
      {
        id: 6,
        image: [
          "Img/Trends/trends-card-img-6.png",
          "Img/Trends/trends-card-img-8.png",
          "Img/Trends/trends-card-img-7.png",
          "Img/Trends/trends-card-img-5.png",
          "Img/Trends/trends-card-img-9.png",
          "Img/Trends/trends-card-img-10.png",
          "Img/Trends/trends-card-img-11.png",
        ],
        title: "Lokma",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(253 reviews)",
      },
      {
        id: 7,
        image: [
          "Img/Trends/trends-card-img-7.png",
          "Img/Trends/trends-card-img-8.png",
          "Img/Trends/trends-card-img-6.png",
        ],
        title: "The snug",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 4,
        rating: "4.5",
        review: "(654 reviews)",
      },
      {
        id: 8,
        image: [
          "Img/Trends/trends-card-img-8.png",
          "Img/Trends/trends-card-img-7.png",
          "Img/Trends/trends-card-img-6.png",
          "Img/Trends/trends-card-img-5.png",
        ],
        title: "Starbelly",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(876 reviews)",
      },
    ],
  },

  {
    items: [
      {
        id: 9,
        image: [
          "Img/Trends/trends-card-img-9.png",
          "Img/Trends/trends-card-img-10.png",
          "Img/Trends/trends-card-img-11.png",
          "Img/Trends/trends-card-img-12.png",
        ],
        title: "Iori",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 3,
        rating: "3.5",
        review: "(334 reviews)",
      },
      {
        id: 10,
        image: [
          "Img/Trends/trends-card-img-10.png",
          "Img/Trends/trends-card-img-12.png",
          "Img/Trends/trends-card-img-11.png",
          "Img/Trends/trends-card-img-9.png",
          "Img/Trends/trends-card-img-7.png",
          "Img/Trends/trends-card-img-8.png",
        ],
        title: "Ngalley",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(876 reviews)",
      },
      {
        id: 11,
        image: [
          "Img/Trends/trends-card-img-11.png",
          "Img/Trends/trends-card-img-12.png",
          "Img/Trends/trends-card-img-9.png",
        ],
        title: "Diogonal",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 4,
        rating: "4.5",
        review: "(654 reviews)",
      },
      {
        id: 12,
        image: [
          "Img/Trends/trends-card-img-12.png",
          "Img/Trends/trends-card-img-9.png",
          "Img/Trends/trends-card-img-10.png",
          "Img/Trends/trends-card-img-11.png",
        ],
        title: "Kitoko",
        des: "The lorem ipsum is, in printing, a series of meaningless words used temporarily to calibrate a layout.",
        stars: 5,
        rating: "5.0",
        review: "(876 reviews)",
      },
    ],
  },
];

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
              className="h-[1650px] sm:h-[800px] lg:h-[785px] xl:h-[400px] "
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
    </section>
  );
};

export default Trends;
