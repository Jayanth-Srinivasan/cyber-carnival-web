import React from "react";
import {
  BadgeCheck,
  Banknote,
  FileCheck2,
  FileEdit,
  LucideIcon,
  Newspaper,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";


function EventCards() {
  interface EventCardsData {
    Svg: LucideIcon;
    title: string;
    link: string;
  }
  [];
  const EventCards: EventCardsData[] = [
    {
      Svg: Search,
      title: "Technical",
      link: "technical",
    },
    {
      Svg: FileEdit,
      title: "Non-Technical",
      link: "non-technical",
    },
    {
      Svg: FileCheck2,
      title: "Hackathon",
      link: "hackathon",
    },
    {
      Svg: Newspaper,
      title: "Cyber Awareness Campaign",
      link: "campaign",
    },
  ];
  return (
    <section className="bg=[#1e1e1e]" id="events">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 md:pb-16 sm:px-6 lg:pb-32 lg:px-8">
        <div className="mx-auto flex flex-col gap-4 max-w-xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold font-mono">Events</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-4 ">
          {EventCards.map((feat, idx) => (
            <>
            <Link href={feat.link} target="_self">
            <Card
              key={idx}
              className="h-40 flex justify-center items-center text-center transition-all duration-300 hover:bg-center hover:bg-cover hover:bg-[url('https://images.unsplash.com/photo-1548092372-0d1bd40894a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3liZXJ8ZW58MHx8MHx8fDA%3D')]"
            >
              <CardHeader>
                <CardTitle className="font-mono">{feat.title}</CardTitle>
              </CardHeader>
            </Card>
            </Link>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventCards;
