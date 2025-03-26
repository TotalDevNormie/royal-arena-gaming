import Link from "next/link";
import Image from "next/image";
import flare from "../_utils/flareBackgroud";

const Services = () => {
  return (
    <div id="services" className="relative pt-36" style={flare([{ position: 'top 0% right -80%' }, { position: 'top 35% left -60%' }, { position: 'bottom 5% right 0%' }])}>
      <h2>Our Services</h2>
      <h3 className="mt-4 text-center font-oswald text-3xl">Computer Rental</h3>
      <div className="mx-auto mt-24 flex w-fit-grid justify-center gap-8 flex-wrap">
        <Card
          title={"Room Rental"}
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
        <Card
          title={"Computer rental"}
          gradient
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
        <Card
          title={"Boot camp"}
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
      </div>
      <h3 className="mt-24 text-center font-oswald text-3xl">Special offers</h3>
      <div className="relative mx-auto mt-24 flex w-fit-grid justify-center gap-8 flex-wrap">
        <Card
          gradient
          title={"Day passes"}
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
        <Card
          title={"Night passes"}
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
        <Card
          gradient
          title={"Monthly passes"}
          description={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
          ]}
          price={35}
        />
      </div>
      <h3 className="mt-24 text-center font-oswald text-3xl">Price</h3>
      <div className="relative mx-auto mt-24 flex w-fit-grid justify-center gap-8 flex-wrap">
        <PriceCard title={"Standart"} price={150} description={"description"} />
        <PriceCard title={"Standart"} price={150} description={"description"} />
        <PriceCard title={"Standart"} price={150} description={"description"} />
        <PriceCard title={"Standart"} price={150} description={"description"} />
        <PriceCard title={"Standart"} price={150} description={"description"} />
      </div>
      <h3 className="mb-24 mt-36 text-center font-oswald text-3xl">
        Online booking
      </h3>
      <div className="mx-auto px-8 flex w-fit-grid justify-between relative">
        <form action="" className="grid md:grid-cols-2 gap-6">
          <label htmlFor="name" className="grid">
            First name
            <input
              type="text"
              placeholder="First name"
              name="name"
              className="rounded-full border-none bg-white p-4"
            />
          </label>
          <label htmlFor="surname" className="grid gap-2">
            Last name
            <input
              type="text"
              placeholder="Last name"
              name="surname"
              className="rounded-full border-none bg-white p-4"
            />
          </label>
          <label htmlFor="email" className="grid gap-2">
            Email
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="rounded-full border-none bg-white p-4"
            />
          </label>
          <label htmlFor="phone" className="grid gap-2">
            Phone
            <input
              type="text"
              placeholder="(414) 804 - 987"
              name="phone"
              className="rounded-full border-none bg-white p-4"
            />
          </label>
          <label htmlFor="rent" className="grid gap-2">
            What do you want to rent
            <select
              name="rent"
              className="rounded-full border-none bg-white p-4"
            >
              <option value="computer">computer</option>
            </select>
          </label>
          <label htmlFor="term" className="grid gap-2">
            Term
            <input
              type="datetime"
              placeholder="Term"
              name="term"
              className="rounded-full border-none bg-white p-4"
            />
          </label>
          <button className="col-span-2 rounded-full bg-blue-3 p-4">
            Get started
          </button>
        </form>
        <div className="aspect-square w-96 rounded-[2rem] bg-white"></div>
      </div>
      <div className="relative mt-48 flex py-24 px-8  justify-center gap-4 p-4">
        <div className="mx-auto flex justify-between w-fit-grid h-[30vh]">
          <div className="grid gap-4 self-start border-l-[7px] border-l-white px-4 z-1">
            <span className="font-oswald text-5xl text-blue-4">
              Download our app!
            </span>
            <span className="font-oswald text-5xl">
              Our convenient application will help you
            </span>
          </div>
          <div className="grid gap-4 w-48 self-end z-1">
            <button>
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={400}
                height={400}
              />
            </button>
            <button>
              <Image
                src="/app-store.png"
                alt="App Store"
                width={400}
                height={400}
              />
            </button>
          </div>
          <Image
            src="/download-app.png"
            alt="Landing"
            width={1000}
            height={500}
            className="absolute inset-0 z-0 h-full w-full bg-cover object-cover grayscale"
          />
        </div>
      </div>
    </div>
  );
};

type CardProps = {
  title: string;
  description: string[];
  price: number;
  gradient?: boolean;
};

const Card = ({ title, description, price, gradient = false }: CardProps) => (
  <div
    className={`flex flex-col gap-4 rounded-[2rem] ${gradient ? "bg-gradient-pink-blue-60" : "bg-light-blue"} min-w-sm p-8`}
  >
    <h4
      className={`font-oswald text-4xl ${gradient ? "text-light-blue" : "text-sapphire"}`}
    >
      {title}
    </h4>
    <ul
      className={`m-[initial] pl-6 ${gradient ? "text-light-blue" : "text-black"}`}
      style={{ listStyle: "initial" }}
    >
      {description.map((text, index) => (
        <li key={index} className={gradient ? "text-light-blue" : "text-black"}>
          {text}
        </li>
      ))}
    </ul>
    <h4
      className={`text-center font-oswald text-4xl ${gradient ? "text-light-blue" : "text-sapphire"}`}
    >
      {price}&euro;/hour
    </h4>
    <Link
      href="#"
      className={`mt-4 w-full rounded-[2rem] ${gradient ? "bg-light-blue" : "bg-sapphire"} p-2 text-center ${gradient ? "text-sapphire" : "text-light-blue"} font-oswald text-3xl text-light-blue`}
    >
      Buy plan
    </Link>
  </div>
);

type PriceCardProps = {
  title: string;
  description: string;
  price: number;
};

const PriceCard = ({ title, description, price }: PriceCardProps) => (
  <div className="flex aspect-square flex-col justify-around rounded-[2rem] bg-[#D9D9D9] p-8">
    <span className="text-center font-oswald text-3xl text-black">{title}</span>
    <span className="text-center font-oswald text-[5rem] text-[#625E5E]">
      {price}&euro;
    </span>
    <span className="text-center text-xl text-black">{description}</span>
  </div>
);

export default Services;
