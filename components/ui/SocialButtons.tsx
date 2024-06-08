"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SocialsButton = ({
  idProps,
  imgProps,
  linkProps,
}: {
  idProps: number;
  imgProps: string;
  linkProps: string;
}) => {
  const router = useRouter();
  return (
    <button key={idProps} type="button" onClick={() => router.push(linkProps)}>
      <div className="p-2 border border-[#463F3A] rounded-full">
        <img
          src={imgProps}
          alt="socials"
          width={20}
          height={20}
          className="lg:w-[25px]"
        />
      </div>
    </button>
  );
};

export default SocialsButton;
