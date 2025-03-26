"use client";
import Image from "next/image";
import PrimaryButton from "./Button";
import SecondaryButton from "./SecondaryButton";
import flare from "../_utils/flareBackgroud";

const HomeSection = () => {
  const explanations = [
    {
      title: "Choose Your Setup ",
      description:
        "Select from our variety of computer configurations and pick the one that best suits your requirements.",
    },
    {
      title: "Reserve Your Spot ",
      description:
        "Schedule your preferred time and date. Your workstation will be ready and waiting for you.",
    },
    {
      title: "Enjoy Your Time",
      description:
        "Arrive at our club, log in, and start working or gaming with zero delays.",
    },
  ];
  return (
    <div
      id="home"
      className="relative"
      style={flare([
        { position: "top 10% right -80%" },
        { position: "bottom -20% left -60%" },
      ])}
    >
      <div className="relative flex h-auto flex-col justify-center gap-4 p-8 md:h-[70vh]">
        <h1>Join Royal Arena Today!</h1>
        <h2>Your Productive Workspace Away from Home</h2>
        <div className="mt-12 flex justify-center gap-8 md:mt-32 md:gap-16 lg:gap-32">
          <PrimaryButton
            className="grid w-full max-w-sm place-items-center text-xs sm:text-base md:text-xl"
            href="#"
          >
            Reserve a computer
          </PrimaryButton>
          <SecondaryButton
            className="grid w-full max-w-sm place-items-center text-xs sm:text-base md:text-xl"
            href="#"
          >
            Contact Us
          </SecondaryButton>
          <PrimaryButton
            className="grid w-full max-w-sm place-items-center text-xs sm:text-base md:text-xl"
            href="#"
          >
            Price
          </PrimaryButton>
        </div>
        <Image
          src="/landing.png"
          alt="Landing"
          width={1000}
          height={500}
          className="absolute inset-0 z-[-1] h-full w-full bg-cover object-cover brightness-50"
        />
      </div>
      <p className="mx-auto my-8 w-full px-4 px-8 text-center text-xl text-xs sm:text-base md:w-3/4">
        Need a quiet and productive space to work or study? Royal Arena offers a
        clean, comfortable, and well-equipped workspace. Our computers are
        perfect for remote work, online classes, and research. Enjoy free
        high-speed Wi-Fi, printing, and scanning services.Need a quiet and
        productive space to work or study? Royal Arena offers a clean,
        comfortable, and well-equipped workspace.
      </p>
      <h2 className="mt-48">How It Works?</h2>
      <div className="w-fit-grid mx-auto mt-16 mb-4 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-4">
        {explanations.map((explanation) => (
          <ExplanationCard key={explanation.title} {...explanation} />
        ))}
      </div>
      <div className="relative mt-48 flex min-h-[50vh] flex-col justify-center gap-4 p-8">
        <div className="w-fit-grid mx-auto grid gap-8">
          <div className="z-1 grid gap-4 border-l-[7px] border-l-white px-4">
            <span className="text-blue-4 font-oswald text-5xl">
              Happy Hours - 20%
            </span>
            <span className="font-oswald text-5xl">
              Off All Reservations from 9 AM o 12 PM!
            </span>
          </div>
          <p className="z-1 max-w-96 place-self-end text-right text-xl">
            Start your day with a discount! Book your workstation during our
            Happy Hours and save 20% on your reservation.
          </p>
          <Image
            src="/happy-hours.png"
            alt="Landing"
            width={1000}
            height={500}
            className="absolute inset-0 z-0 h-full w-full bg-cover object-cover brightness-[0.6] grayscale"
          />
        </div>
      </div>
    </div>
  );
};

type Card = {
  title: string;
  description: string;
};

const ExplanationCard = ({ title, description }: Card) => {
  return (
    <div className="explanation-card relative grid aspect-square grid-rows-[1fr_1fr] gap-4 overflow-hidden rounded-[4rem] p-4 transition-transform before:absolute before:inset-[2px] before:z-[-5] before:rounded-[4rem] before:bg-black before:transition-opacity before:content-[''] after:absolute after:top-1/2 after:left-1/2 after:z-[-6] after:h-[200%] after:w-[200%] after:-translate-x-1/2 after:-translate-y-1/2 after:transition-transform after:duration-700 after:content-[''] hover:scale-[1.025] hover:before:opacity-70 hover:after:rotate-[120deg] md:p-8">
      <div className="flex items-center gap-4">
        <div className="aspect-square w-48 rounded-full bg-white"></div>
        <span className="text-4xl font-bold">{title}</span>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default HomeSection;
