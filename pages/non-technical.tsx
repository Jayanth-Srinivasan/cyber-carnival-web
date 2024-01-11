import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function NonTechnical() {
      const data = [
        {
          id: 1,
          name: "Channel Surfing",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 2,
          name: "Shipwreck",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 3,
          name: "Cyber Safe Cinema",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 4,
          name: "Valorant",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 5,
          name: "Green Screen",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 6,
          name: "Adzap",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 7,
          name: "Title Event",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          banner:
            "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D",
        },
      ];
  return (
    <section className="p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-outfit py-[50px] md:py-[80px]">
      <div className="mx-auto flex flex-col lg:max-w-3xl gap-4 text-center pb-[50px] md:pb-[80px]">
        <h2 className="text-3xl font-bold lg:text-5xl">Non-Technical Events</h2>
        <p className="text-slate-200 md:text-lg">
          Browse listings, submit your proposals, and collaborate with clients
          who value your talents. Find the projects that align with your
          expertise and take your freelancing career to the next level.
        </p>
      </div>
      <div className="p-4 md:p-16">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center">
          {data.map((event, index) => (
            <Link className="m-3" href={`events/${event.id}`} key={index}>
              <div className="hover:scale-[101%] ease-out transition-all active:scale-95 duration-100 border-2 h-full hover:bg-[url('https://res.cloudinary.com/dwncfhjpd/image/upload/v1679059113/eventBG_wln7po.png')] bg-center bg-cover bg-no-repeat border-gray-800 rounded-md cursor-pointer">
                <Image
                  alt="banner"
                  width={500}
                  height={500}
                  src={
                    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D"
                  }
                />
                <div className="p-4 ">
                  <div className="flex items-center text-center mb-3">
                    <h1 className="text-md md:text-xl mr-2 lg:text-2xl ">
                      {event.name}
                    </h1>
                    <svg
                      className="h-8 w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>

                  <p className="text-xs md:text-sm text-slate-300 mb-2">
                    {event.desc.substring(0, 200)}...
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NonTechnical