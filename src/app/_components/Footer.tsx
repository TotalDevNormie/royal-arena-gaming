import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-sapphire flex flex-col">
      <div className="w-fit-grid mx-auto mt-16 flex flex-wrap gap-y-8 p-8">
        <div className="flex w-full grow items-start justify-center sm:w-1/2 sm:justify-start lg:w-1/3">
          <Image
            src="/full-logo.svg"
            alt="logo"
            width={200}
            height={400}
            className="mt-12"
          />
        </div>
        <div className="flex w-full grow justify-center sm:w-1/2 sm:justify-end lg:order-3 lg:w-1/3">
          <div className="flex flex-col justify-self-center lg:justify-self-end">
            <span className="mb-4 text-center text-xl font-bold">
              Contact us
            </span>
            <div className="grid grid-cols-[auto_1fr] gap-4">
              <Mail color="#A4C5FF" />
              <span>text</span>
              <Phone color="#A4C5FF" />
              <span>text</span>
              <MapPin color="#A4C5FF" />
              <span>text</span>
            </div>
          </div>
        </div>
        <div className="w-full grow sm:w-1/2 lg:w-1/3">
          <div className="grid items-start sm:order-2">
            <span className="text-center text-xl font-bold">
              Subscribe to our newsletter
            </span>
            <div className="mt-4 grid grid-cols-[1fr_auto] rounded-full bg-white p-2">
              <input
                type="text"
                className="boreder-none w-full outline-hidden"
              />
              <button className="bg-blue-3 rounded-full px-4 py-2">
                Subscribe
              </button>
            </div>
            <span className="mt-12 text-center text-xl font-bold">
              Follow us
            </span>
            <div className="mx-auto mt-8 flex gap-4">
              <div className="rounded-full bg-white p-2">
                <Facebook size={26} className="text-blue-1" />
              </div>
              <div className="rounded-full bg-white p-2">
                <Instagram size={26} className="text-blue-1" />
              </div>
              <div className="rounded-full bg-white p-2">
                <Twitter size={26} className="text-blue-1" />
              </div>
              <div className="rounded-full bg-white p-2">
                <Youtube size={26} className="text-blue-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="w-full bg-black px-4 py-12 text-center text-xl font-bold sm:px-8">
        &copy; Royal Arena 2025
      </span>
    </footer>
  );
};

export default Footer;
