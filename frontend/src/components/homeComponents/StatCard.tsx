import React from "react";
import { IconType } from "react-icons";

type TStatCardProps = {
  Icon: IconType;
  number: string;
  label: string;
};
const StatCard = ({ Icon, number, label }: TStatCardProps) => {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-5xl mb-2" />
      <h2 className="text-2xl font-bold">{number}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;
