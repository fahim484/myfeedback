import { Button, cn } from "@nextui-org/react";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Carousel = ({ data, tags }) => {
  

  return (
    // <section className="overflow-hidden p-12">
    //   <div className="relative w-full max-w-screen-2xl mx-auto">
    //     <div className="flex items-center justify-between">
    //       <button
    //         onClick={handlePrev}
    //         className=
    //           "absolute left-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12"
    //       >
    //         <SlArrowLeft size={60} />
    //       </button>

    //       <div className="flex flex-col lg:flex-row items-center gap-6 w-full px-12">
    //         <div className="w-full lg:w-1/2">
    //           <h3
    //             className=
    //               "text-3xl  font-semibold text-[#26395C] lg:ms-10 text-center lg:text-start"
    //           >
    //             Upcoming Eat & Drink Events
    //           </h3>
    //           <img
    //             className="object-cover w-full h-auto"
    //             src={currentSlider.image}
    //             alt=""
    //           />
    //         </div>

    //         <div className="w-full lg:w-1/2 flex flex-col gap-4">
    //           <h2 className="text-2xl lg:text-5xl font-bold lg:w-[50%] leading-tight">
    //             {currentSlider.heading}
    //           </h2>
    //           <p
    //             className=
    //               "text-gray-700 lg:w-[70%] text-xl"
    //           >
    //             {currentSlider.des}
    //           </p>

    //           <div className="grid grid-cols-2 lg:w-[60%]">
    //             {tags.map((data, id) => (
    //               <div key={id} className="flex items-center mt-5 mb-5">
    //                 <img src={data.img} alt="" />
    //                 <p className="ms-2 text-lg font-semibold">{data.title}</p>
    //               </div>
    //             ))}
    //           </div>
    //           <div className="flex items-center gap-4">
    //             <Button
    //               color="primary"
    //               variant="bordered"
    //               className="font-bold"
    //               size="lg"
    //               radius="sm"
    //             >
    //               Add To Cart
    //             </Button>
    //             <Button color="primary" size="lg" radius="sm" className="font-bold">
    //               Book Now
    //             </Button>
    //           </div>

    //           <div className="flex gap-4 mt-5">
    //             <p>Connect with us on:</p>

    //             <div className="flex gap-3">
    //               <img src="/Img/Twitter.png" alt="" />
    //               <img src="/Img/Instagram.png" alt="" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <button
    //         onClick={handleNext}
    //         className="absolute right-0 transform -translate-x-6 flex items-center justify-center  text-black rounded-full w-12 h-12"
    //       >
    //         <SlArrowRight size={60} />
    //       </button>
    //     </div>

    //     <div className="flex justify-center items-center gap-2 mt-6">
    //       {data.map((_, index) => (
    //         <button
    //           key={index}
    //           onClick={() => handleDotClick(index)}
    //           className={`w-3 h-3 rounded-full ${
    //             index === currentIndex ? "bg-secondary_dark" : "bg-green-300"
    //           }`}
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section>
      
    </section>
  );
};

export default Carousel;
