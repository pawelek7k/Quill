interface LoginLinks {
  firstP: string;
  firstText: string;
  firstLink: string;
  secP: string;
  secText: string;
  secLink: string;
}

export const LoginLinks = ({
  firstP,
  firstText,
  firstLink,
  secP,
  secText,
  secLink,
}: LoginLinks) => (
  <div className="flex flex-col justify-center items-center">
    <p className="mt-10 text-sm">
      {firstP}{" "}
      <a href={firstLink} className="font-semibold leading-6">
        {firstText}
      </a>
    </p>
    <p className=" text-sm">
      {secP}{" "}
      <a href={secLink} className="font-semibold">
        {secText}
      </a>
    </p>
  </div>
);
