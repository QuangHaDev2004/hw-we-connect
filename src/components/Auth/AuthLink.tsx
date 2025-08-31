import { Link } from "react-router-dom";

type AuthLinkProps = {
  text: string;
  linkText: string;
  to: string;
};

export const AuthLink = ({ text, linkText, to }: AuthLinkProps) => {
  return (
    <>
      <div className="text-secondary mt-[16px] flex flex-wrap items-center justify-center gap-[10px] text-[15px] font-normal">
        {text}
        <Link to={to} className="text-primary">
          {linkText}
        </Link>
      </div>
    </>
  );
};
