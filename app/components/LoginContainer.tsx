import { Button } from "@nextui-org/button";
import { InputContainer } from "./Input";
import { Logo } from "./Logo";
import { Heading } from "./SecondaryHeading";

export const LoginContainer = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 lg:px-8 h-screen align-center">
        <div className="flex justidy-center items-center flex-col gap-6">
          <Logo />
          <Heading>Log in</Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <InputContainer label={"E-mail"} type={"email"} name={"email"} />
            </div>

            <div>
              <InputContainer
                label={"Password"}
                type={"password"}
                name={"password"}
              />
            </div>

            <div className="flex justify-center">
              <Button
                radius="full"
                className="bg-myPrimary text-secondaryBg font-semibold"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </form>
          <div className="flex flex-col justify-center items-center">
            <p className="mt-10 text-sm">
              Not accound yet?{" "}
              <a href="#" className="font-semibold leading-6">
                Register now!
              </a>
            </p>
            <p className=" text-sm">
              Forgot password?{" "}
              <a href="#" className="font-semibold">
                Click here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
