import { TEvent } from "@/types/eventType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventCard = ({
  title,
  imageUrl,
  date,
  location,
  description,
}: TEvent) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          {date} - {location}
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link
          href="#"
          className="text-customPurple hover:text-purple-600 dark:text-purple-400 dark:hover:text-purple-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
