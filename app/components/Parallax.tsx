import { Button } from "@nextui-org/button";
import { Heading } from "./Heading";

export const Parallax = () => (
  <div className=" bg-hero-bg bg-fixed bg-center bg-no-repeat bg-cover h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600  hover:ring-gray-900/20 bg-secondaryBg backdrop-blur-sm border border-myPrimary">
            Announcing our next round of funding.{" "}
            <a href="#" className="font-semibold text-indigo-600 ">
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <Heading>Data to enrich your online business</Heading>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-secondaryBg text-text" radius="full">
              Get started
            </Button>
            <Button className="bg-accent text-text" radius="full">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
