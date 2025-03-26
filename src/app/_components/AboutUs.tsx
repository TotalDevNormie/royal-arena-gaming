"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import PrimaryButton from "./Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Image from "next/image";
import flare from "../_utils/flareBackgroud";

const AboutUs = () => {
  const reasons = [
    {
      title: "Simple and Quick Reservation",
      description:
        "Our streamlined booking system allows you to reserve a computer with just a few clicks. No long queues, no waiting—simply choose your setup and time slot, and we’ll have it ready for you.",
    },
    {
      title: "High-Performance Equipment",
      description:
        "We pride ourselves on offering the latest, high-quality computers that are ideal for gaming, design, programming, video editing, and more. Our equipment is regularly updated to ensure it meets the highest standards of speed, reliability, and power.",
    },
    {
      title: "Flexible Reservation Options",
      description:
        "Need a computer for an hour or an entire day? We offer a range of reservation options to fit your schedule. Our flexible hours allow you to book whenever it’s convenient for you.",
    },
    {
      title: "Professional Environment",
      description:
        "Our club is designed with your productivity and comfort in mind. Enjoy an ergonomic workspace, a quiet atmosphere, and high-speed internet—all in a clean, welcoming environment that’s ideal for focused work or leisure.",
    },
  ];
  return (
    <div
      id="about"
      style={flare([
        { position: "top 5% right -60%" },
      ])}
    >
      <h2 className="pt-36">About Us</h2>
      <div className="relative mx-auto grid w-[min(100%,80rem)] grid-cols-[3fr_2fr] items-start gap-12 p-8">
        <div className="before:bg-gradient-blue-mono relative flex flex-col p-8 before:absolute before:top-0 before:left-0 before:h-full before:w-[7px] before:content-['']">
          <p>
            Welcome to Royal Arena – your go-to hub for reliable, high-quality
            computer reservations. Founded on the idea that everyone deserves
            access to top-notch technology in a comfortable, professional
            environment, Royal Arena provides a seamless solution for reserving
            computers equipped for any purpose – from work and study to gaming
            and creative projects.
          </p>
          <p>
            At Royal Arena, we’re passionate about technology and committed to
            ensuring that each of our members has access to the tools they need
            when they need them. With state-of-the-art hardware, flexible
            reservation options, and a dedicated support team, we make it easy
            to book a workstation that’s ready to meet your unique demands.
          </p>
          <p>
            Our club is designed to foster productivity and creativity, offering
            not only cutting-edge equipment but also a space that’s clean,
            comfortable, and focused on helping you achieve your best. Whether
            you’re a professional, a student, or a tech enthusiast, Royal Arena
            is here to provide the space and resources for you to thrive.
          </p>
        </div>
        <div className="aspect-square rounded-[4rem] bg-white"></div>
      </div>
      <h2 className="mt-36">Why Choose Us?</h2>

      <div className="wrap my-24 flex justify-center gap-12 px-8">
        {reasons.map(({ title, description }) => (
          <div
            className="grid w-80 gap-8 rounded-2xl bg-[#08256780] p-4 shadow-[1rem_1rem_.25rem_#300F20] even:bg-[#3A393B]"
            key={title}
          >
            <div className="aspect square h-36 w-36 rounded-full bg-white"></div>
            <p className="font-oswald text-4xl">{title}</p>
            <p className="text-xl">{description}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <PrimaryButton href="#" className="mx-auto px-12">
          Reserve a computer
        </PrimaryButton>
      </div>
      <div style={flare([{ position: "top -10% right -60%" }])}>
        <p className="font-oswald mt-36 mb-8 text-center text-5xl">
          Our Equipment
        </p>
        <p className="font-oswald mb-8 text-center text-4xl">
          High-Performance Computer Workstations
        </p>
        <p className="mx-auto w-[min(100%,40rem)] text-center text-xl">
          Explore our top-of-the-line setups designed to handle any task—from
          gaming and graphic design to programming and video editing.
        </p>
        <WorkstationCarousel />
      </div>
      <Gallery />
    </div>
  );
};

type WorkstationCardProps = {
  title: string;
  specs: { [key: string]: string };
};
const WorkstationCard = ({ title, specs }: WorkstationCardProps) => (
  <div className="h-full rounded-lg">
    <div className="mb-4 h-96 w-full rounded-xl bg-white"></div>
    <h2 className="mb-4 text-left text-4xl text-blue-300">{title}</h2>
    <div className="space-y-2 text-gray-300">
      {Object.entries(specs).map(([key, value]) => (
        <div key={key}>
          <span className="font-medium">{key}: </span>
          <span className="text-gray-400">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const WorkstationCarousel = () => {
  const workstations: WorkstationCardProps[] = [
    {
      title: "Professional Workstations for Design and Modeling",
      specs: {
        Processor: "Intel Xeon / AMD Ryzen Threadripper",
        "Graphics Card": "NVIDIA Quadro RTX 5000 / GeForce RTX 3080",
        RAM: "64GB DDR4",
        Storage: "2TB NVMe SSD",
        Display: "32-inch, 4K monitor with color calibration",
        "Ideal for": "Graphic design, 3D modeling, animation",
      },
    },
    {
      title: "Gaming and High-Performance Setups",
      specs: {
        Processor: "Intel Core i9 / AMD Ryzen 9",
        "Graphics Card": "NVIDIA GeForce RTX 3090 / AMD Radeon RX 6900 XT",
        RAM: "32GB DDR4",
        Storage: "1TB NVMe SSD + 2TB HDD",
        Display: "27-inch, 144Hz, 4K monitor",
        "Ideal for": "Gaming, graphic-intensive work, video editing",
      },
    },
    {
      title: "Standard Workstations for Office",
      specs: {
        Processor: "Intel Core i7 / AMD Ryzen 7",
        RAM: "16GB DDR4",
        Storage: "512GB SSD",
        Display: "24-inch, Full HD monitor",
        "Ideal for": "Office work, programming, data analysis",
      },
    },
    {
      title: "Gaming and High-Performance Setups",
      specs: {
        Processor: "Intel Core i9 / AMD Ryzen 9",
        "Graphics Card": "NVIDIA GeForce RTX 3090 / AMD Radeon RX 6900 XT",
        RAM: "32GB DDR4",
        Storage: "1TB NVMe SSD + 2TB HDD",
        Display: "27-inch, 144Hz, 4K monitor",
        "Ideal for": "Gaming, graphic-intensive work, video editing",
      },
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="relative mx-auto my-24 w-[min(100%,80rem)] p-8">
      <Carousel
        responsive={responsive}
        showDots
        infinite
        swipeable
        renderButtonGroupOutside={true}
        arrows={false}
        customButtonGroup={<ButtonGroup />}
      >
        {workstations.map((workstation, index) => (
          <div key={index} className="px-4">
            <WorkstationCard
              title={workstation.title}
              specs={workstation.specs}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const ButtonGroup = ({ next, previous }: any) => {
  return (
    <div className="">
      <button
        onClick={previous}
        className="absolute top-1/2 left-0 mx-2 -translate-x-2/3 -translate-y-1/2 rounded-full px-4 py-2 text-white"
      >
        <ChevronLeft size={128} color="#2e69a9" strokeWidth={0.75} />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 mx-2 -translate-y-1/2 translate-x-2/3 rounded-full px-4 py-2 text-white"
      >
        <ChevronRight size={128} color="#2e69a9" strokeWidth={0.75} />
      </button>
    </div>
  );
};

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633545499432-285bae66cbf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683880731785-e5b632e0ea13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1581351123004-757df051db8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687119905599-09fe40700389?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1624717369095-ebacc7d68a40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXB1dGVyJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1633545495735-25df17fb9f31?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1687119905599-09fe40700389?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633545495735-25df17fb9f31?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1633545499432-285bae66cbf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  console.log([...images].splice(0, images.length / 2));

  return (
    <div className="relative mx-auto w-[min(100%,80rem)] px-4 py-8">
      <h2 className="mb-24">Gallery</h2>
      <div className="md:none grid grid-cols-[1fr_auto_1fr] gap-12">
        <div className="grid grid-cols-2 gap-4">
          {[...images].slice(0, images.length / 2).map((img, index) => (
            <div
              key={index}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-90"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <span
          className="font-oswald py-8 text-5xl"
          style={{ writingMode: "vertical-rl" }}
        >
          Step Into the World of Innovation – Explore Our Space!
        </span>
        <div className="grid grid-cols-2 gap-4">
          {[...images]
            .slice(images.length / 2, images.length)
            .map((img, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg transition-opacity hover:opacity-90"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <Image
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={images.map((src) => ({ src }))}
        />
      )}
    </div>
  );
};

export default AboutUs;
