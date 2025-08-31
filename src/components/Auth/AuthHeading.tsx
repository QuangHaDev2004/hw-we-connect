type AuthHeadingProps = {
  title: string;
  subtitle: string;
};

export const AuthHeading = ({ title, subtitle }: AuthHeadingProps) => {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-secondary mb-[6px] text-[22px] font-medium">
          {title}
        </h1>
        <p className="text-secondary text-[15px] font-normal">{subtitle}</p>
      </div>
    </>
  );
};
