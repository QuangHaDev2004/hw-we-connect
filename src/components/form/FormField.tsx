import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormFieldProps = {
  label: string;
  id: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const FormField = ({
  label,
  id,
  placeholder,
  type = "text",
  register,
  error,
}: FormFieldProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="text-secondary mb-[4px] block text-[13px] font-[400]"
        >
          {label}
        </label>
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          id={id}
          className={`text-secondary h-[38px] w-full rounded-[6px] border px-[14px] text-[14px] font-[400] ${error ? "border-red-500" : "border-[#DBDADE]"} `}
        />
        {error && (
          <p className="mt-[4px] text-[12px] text-red-500">{error.message}</p>
        )}
      </div>
    </>
  );
};
