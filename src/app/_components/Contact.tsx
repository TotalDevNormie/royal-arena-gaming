"use client";

import flare from "../_utils/flareBackgroud";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div id="contact" className="relative pb-24 " style={flare([{position: 'bottom -150% left -80%'}, {position: 'top -150% left -80%'}, {position: 'center right -80%', red: true}])}>
      <h2 className="mb-4 pt-36 text-center">Contact us</h2>
      <p className="mx-auto mb-36 max-w-[32rem] text-center text-[#E7E7E7]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit nulla adipiscing
        tincidunt interdum tellus du.
      </p>
      <div className="grid gap-24 w-[min(80rem,100%)] mx-auto pb-24">
        <div className="grid gap-24 md:grid-cols-2">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.277552813421!2d-122.38220822342592!3d37.73663231435513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f12a782fea9%3A0x827b2362084fd107!2s58%20Middle%20Point%20Rd%2C%20San%20Francisco%2C%20CA%2094124%2C%20USA!5e0!3m2!1sen!2slv!4v1739187407348!5m2!1sen!2slv"
              className="h-full w-full rounded-xl border-none"
              loading="lazy"
            ></iframe>
          </div>
          <div className="relative grid gap-12">
            <h2 className="mb-12 text-left font-openSans font-bold text-light-blue">
              Contact details
            </h2>
            <div>
              <h3 className="mb-4 text-light-blue">OUR LOCATION</h3>
              <p className="text-3xl font-bold text-blue-1">
                58 Middle Point Rd San Francisco, 94124
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-light-blue">CALL US</h3>
              <p className="text-3xl font-bold text-blue-1">(123) 456 - 789</p>
            </div>
            <div>
              <h3 className="mb-4 text-light-blue">EMAIL US</h3>
              <p className="text-3xl font-bold text-blue-1">
                contact@company.com
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <h2 className="mb-12">Get in touch</h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid max-w-[40rem] grid-cols-2 gap-6"
          >
            <label htmlFor="name" className="grid">
              Name
              <input
                type="text"
                placeholder="Name"
                name="name"
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
            <label htmlFor="message" className="col-span-2 grid gap-2">
              Message
              <textarea
                name="message"
                className="rounded-[2rem] border-none bg-white p-4"
                placeholder="Please type your message here..."
              ></textarea>
            </label>
            <button className="col-span-2 rounded-full bg-blue-3 p-4">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
