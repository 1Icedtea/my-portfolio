"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";
import SocialsButton from "./ui/SocialButtons";

const Hero = () => {
  function Redirect(url: string) {
    // window.location.replace(url);
    window.open(url);
  }
  return (
    <div className="relative w-full lg:min-h-[70vh] md:min-h-[100vh] pb-20 pt-36">
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <img
        src="/texture.png"
        alt="avatar"
        width={1000}
        className="absolute top-0 opacity-50 w-full h-full"
      />
      <div className="flex justify-center relative my-20 z-10">
        <div className="flex flex-col items-center justify-center max-w-[70vw] md:max-w-2xl lg:max-w-[60vw]">
          <img
            src="/avatar.png"
            width={120}
            height={120}
            alt="avatar"
            className="rounded-full backdrop-blur-lg shadow-xl border border-white-200 mb-4 md:w-[150px] lg:w-[200px]"
          />
          <h2 className="uppercase tracking-widest text-sm mb-2 md:text-lg lg:text-2xl">
            Follow my web devt journey
          </h2>
          <TextGenerateEffect words="Jerome Cabatit Jr." />
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl">
            He is an aspiring front-end web developer based in Rizal! Are you
            curious, come check his work!
          </p>
          <div className="my-8 flex flex-row gap-2">
            {socialMedia.map((profile) => (
              <button
                key={profile.id}
                onClick={() => Redirect(profile.link)}
                type="button"
                formTarget="_blank"
              >
                <div className="p-2 border border-[#463F3A] rounded-full">
                  <img src={profile.img} alt="socials" width={20} height={20} />
                </div>
              </button>
              // <SocialsButton
              //   key={profile.id}
              //   idProps={profile.id}
              //   imgProps={profile.img}
              //   linkProps={profile.link}
              // />
            ))}
          </div>
          <button
            className="bg-transparent border border-[#463F3A] my-6 px-6 py-3 rounded-full hover:bg-white transition-all"
            id="shopifyBtn"
            onClick={() => Redirect("https://filmgray.myshopify.com/")}
            type="button"
          >
            Visit Demo Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
