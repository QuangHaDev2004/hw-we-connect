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
          className="text-secondary mb-1 block text-[13px] font-normal"
        >
          {label}
        </label>
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          id={id}
          className={`text-secondary h-10 w-full rounded-md border px-[14px] text-[14px] font-normal ${error ? "border-red-500" : "border-three"} `}
        />
        {error && (
          <p className="mt-1 text-[12px] text-red-500">{error.message}</p>
        )}
      </div>
    </>
  );
};
