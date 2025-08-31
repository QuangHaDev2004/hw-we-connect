type AuthHeadingProps = {
  title: string;
  subtitle: string;
};

export const AuthHeading = ({ title, subtitle }: AuthHeadingProps) => {
  return (
    <>
      <div className="mb-[26px]">
        <h1 className="text-secondary mb-[6px] text-[22px] font-[500]">
          {title}
        </h1>
        <p className="text-secondary text-[15px] font-[400]">{subtitle}</p>
      </div>
    </>
  );
};
