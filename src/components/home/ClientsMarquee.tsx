"use client";

import Image from "next/image";

export function ClientsMarquee() {
  const customClients = [
    {
      name: "Client 1",
      imageSrc: "/clients/client-1.png",
    },
    {
      name: "Client 2",
      imageSrc: "/clients/client-2.png",
    },
    {
      name: "Client 3",
      imageSrc: "/clients/client-3.png",
    },
    {
      name: "Client 4",
      imageSrc: "/clients/client-4.png",
    },
    {
      name: "Client 5",
      imageSrc: "/clients/client-5.png",
    },
    {
      name: "Client 6",
      imageSrc: "/clients/client-6.png",
    }
  ];

  return (
    <section className="py-12 bg-[#E7EBEA]/50 border-y border-[#C6C2C1]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h3 className="text-center text-[15px] font-semibold text-[#544643] tracking-wide">
          A few of the amazing clients we've worked with.
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 w-full">
          {customClients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center w-[180px] h-[72px] rounded-2xl bg-[#EFF0EF] border border-[#C6C2C1] shadow-xs hover:border-[#544643] hover:shadow-sm transition-all duration-300 shrink-0 p-2 overflow-hidden relative"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={client.imageSrc} 
                  alt={client.name} 
                  width={160}
                  height={56}
                  loading="lazy"
                  className="max-h-full w-auto object-contain filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
