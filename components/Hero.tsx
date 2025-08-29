import { cn } from "@/lib/utils"
import { Spotlight } from "./ui/spotlight-new"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import MagicButton, { PositionEnum } from "./ui/magic-button"
import { FaLocationArrow } from "react-icons/fa"
import Grid from "./Grid"

const Hero = () => {
    return (
        <section className="pb-20 pt-36">
            <div >
                <Spotlight ></Spotlight>
            </div>
            <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black-100">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:90px_90px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)]",
                    )}
                />
                {/* Radial gradient for the container to give a faded look */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
                <div className="flex justify-center relative my-20 z-10">
                    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                        <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                            Dynamic Web Magic with Next.js
                        </p>
                        <TextGenerateEffect
                            words="Transforming Concepts into Seamless User Experiences"
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        />

                        <p className="text-center md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl">
                            Hi! I&apos;m Sakib, a Fullstack Developer based in Bangladesh.
                        </p>
                        <MagicButton title="Show my work" icon={<FaLocationArrow />} position={PositionEnum.Left} />
                    </div>
                </div>
                {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                    Backgrounds
                </p>
                <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                    Backgrounds
                </p> */}
            </div>
            <Grid />
        </section>
    )
}

export default Hero