import React from "react";

const schools = [
  {
    name: "Transistor",
    src: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg",
  },
  {
    name: "Reform",
    src: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg",
  },
  {
    name: "Tuple",
    src: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg",
  },
  {
    name: "SavvyCal",
    src: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg",
  },
  {
    name: "Statamic",
    src: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg",
  },
];

const LogoCloud = () => {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by Leading Educational Institutions Worldwide.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {schools.map((school, i) => (
            <img
              key={i}
              alt=""
              src={school.src}
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
