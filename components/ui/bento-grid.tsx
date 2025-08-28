"use client"
import { cn } from "@/lib/utils";
import BentoGradientComponent from "./bento-item-gradient";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Nest.js", "Typescript"];
  const rightLists = ["HTMX", "Golang", "Postgres"];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        backgroundColor: "rgb(4,7,29)",
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      {(img != "" || spareImg != "") && (<div className={`${id === 6 && "flex justify-center"} h-full`}>
        {img && (<div className="w-full h-full absolute">
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover object-center")}
          />
        </div>)}
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
      </div>)
      }
      {id === 6 &&
        <BentoGradientComponent title={title} titleClassName={titleClassName}></BentoGradientComponent>
      }
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 group-hover/bento:z-40 transition duration-200 relative md:h-full min-h-40 p-5 lg:p-8 xl:p-10",
          `${id === 6 ? "hidden" : "flex flex-col"} `
        )}
      >
        <div className="font-sans font-extralight md:max-w-48 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
          {description}
        </div>
        <div
          className={`font-sans text-bold text-lg lg:text-2xl max-w-96 z-10`}
        >
          {title}
        </div>
        {/* for the github 3d globe */}
        {/* {id === 2 && <GridGlobe />} */}
        {/* Tech stack list div */}
        {id === 3 && (
          <div className="flex gap-1 lg:gap-4 w-fit absolute -top-2 -right-1 xl:-right-0 xl:top-4">
            {/* tech stack lists */}
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-4 xl:gap-5">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="xl:py-4 xl:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
              <span className="xl:py-4 xl:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
            </div>
            <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
              <span className="xl:py-4 xl:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="xl:py-4 xl:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
