import React from "react";

interface TSectionHeaderProps {
  title: string;
  description: string;
  isCenter?: boolean;
}

const SectionHeader = ({
  title,
  description,
  isCenter,
}: TSectionHeaderProps) => {
  return (
    <div className={`mb-8 ${isCenter?'text-center':''}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default SectionHeader;
