import { Button } from "@nextui-org/button";
import { Heading } from "./Heading";
import { NavBtn } from "./NavBtn";
import { ThirdHeading } from "./ThirdHeading";

export const Parallax = () => (
  <div className=" bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover h-screen">
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600  hover:ring-gray-900/20 bg-secondaryBg backdrop-blur-sm border border-myPrimary">
            Support us.{" "}
            <a href="#" className="font-semibold text-indigo-600 ">
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <Heading>Your Words, Your Rules</Heading>
          <ThirdHeading>Craft Stories Your Way</ThirdHeading>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavBtn>Get started</NavBtn>
            <Button className="bg-accent text-text" radius="full">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
