import { Button } from "@nextui-org/button";
import { Form } from "./Form";
import { InputContainer } from "./Input";
import { LoginLinks } from "./LoginLinks";
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
          <Form>
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
                Log in <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </Form>
          <LoginLinks
            firstP={"Not account yet?"}
            firstText={"Register now!"}
            firstLink={"#"}
            secP={"Forgot password?"}
            secText={"Click here!"}
            secLink={"#"}
          />
        </div>
      </div>
    </>
  );
};
