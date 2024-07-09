import { Button } from "@nextui-org/button";
import { Form } from "./Form";
import { InputContainer } from "./Input";
import { LoginLinks } from "./LoginLinks";
import { Logo } from "./Logo";
import { Heading } from "./SecondaryHeading";

export const RegisterContainer = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 lg:px-8 h-screen align-center">
        <div className="flex justidy-center items-center flex-col gap-6">
          <Logo />
          <Heading>Join us</Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form>
            <div>
              <InputContainer
                label={"Username"}
                type={"name"}
                name={"name"}
                autocomplate={"name"}
              />
            </div>
            <div>
              <InputContainer
                label={"E-mail"}
                type={"email"}
                name={"email"}
                autocomplate={"email"}
              />
            </div>

            <div>
              <InputContainer
                label={"Password"}
                type={"password"}
                name={"password"}
                autocomplate={"current-password"}
              />
            </div>

            <div className="flex justify-center">
              <Button
                radius="full"
                className="bg-myPrimary text-secondaryBg font-semibold"
              >
                Register <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </Form>
          <div className="mt-10">
            <LoginLinks
              firstP={"You already have an account?"}
              firstText={"Log in!"}
              firstLink={"/login"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
