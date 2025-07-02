import React from 'react';

const partners = [
  {
    name: 'CHE',
    logo: 'https://www.che.nl/themes/custom/che/images/logos/logo.svg',
    url: 'https://www.che.nl',
  },
  {
    name: 'Imdigital',
    logo: 'https://imdigital.info/img/logo(los).png',
    url: 'https://imdigital.info',
  },
  {
    name: 'Arjan den Hartog',
    logo: 'https://arjandenhartog.com/favicon.ico',
    url: 'https://arjandenhartog.com',
  },
  
];

const Partners: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-8 sm:py-16 dark:border-y dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-white">
            Onze Partners
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="col-span-1 flex justify-center"
            >
              <img
                className="max-h-12 w-full object-contain"
                src={partner.logo}
                alt={partner.name}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners; 