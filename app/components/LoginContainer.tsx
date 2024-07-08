import { Button } from "@nextui-org/button";
import { Logo } from "./Logo";
import { Heading } from "./SecondaryHeading";

export const LoginContainer = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 lg:px-8 h-screen align-center">
        <div className="flex justidy-center items-center">
          <Logo />
          <Heading>Sign in to your account</Heading>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
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

          <p className="mt-10 text-center text-sm text-gray-500">
            Not accound yet?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Register now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
