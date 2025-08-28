"use client"

import React, { useState } from 'react'
import { BackgroundGradient } from './background-gradient';
import animationData from "@/data/confetti.json";
import Lottie from 'react-lottie';
import MagicButton, { PositionEnum } from './magic-button';
import { IoCopyOutline } from 'react-icons/io5';

const BentoGradientComponent = ({
  title,
  titleClassName,
}: {
  title?: string | React.ReactNode;
  titleClassName?: string;
}) => {
      const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "mdnazmussakibcse@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    console.log(text, copied)
  };
  return (
            <BackgroundGradient>
          <div className={`${titleClassName} transition duration-200 relative font-sans text-bold text-lg lg:text-2xl max-w-96 z-10`}>
            {title}
          </div>
          <div className="mt-2 relative">
            <div
              className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                }`}
            >
              {/* <img src="/confetti.gif" alt="confetti" /> */}
              <Lottie options={defaultOptions} height={200} width={400} />
            </div>
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position={PositionEnum.Left}
              handleClick={handleCopy}
              otherClasses="!bg-[#161A31]"
            />
          </div>
        </BackgroundGradient>
  )
}

export default BentoGradientComponent