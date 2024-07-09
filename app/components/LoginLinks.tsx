import Link from "next/link";

interface LoginLinks {
  firstP: string;
  firstText: string;
  firstLink: string;
}

export const LoginLinks = ({ firstP, firstText, firstLink }: LoginLinks) => (
  <div className="flex flex-col justify-center items-center">
    <p className=" text-sm">
      {firstP}{" "}
      <Link href={firstLink} className="font-semibold leading-6">
        {firstText}
      </Link>
    </p>
  </div>
);
