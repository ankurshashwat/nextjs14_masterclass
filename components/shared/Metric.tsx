import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgurl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyle?: string;
  isAuthor: boolean;
}

const Metric = ({
  imgurl,
  alt,
  value,
  title,
  href,
  textStyle,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgurl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? "rounded-full" : "rounded-md"}`}
      />
      <p className={`${textStyle} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex-center gap-1">{metricContent}</div>;
};

export default Metric;
