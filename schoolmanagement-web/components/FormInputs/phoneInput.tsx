import React, { useState, useEffect } from "react";
import PhoneInput, {
  isValidPhoneNumber,
  type Country,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { FieldErrors, UseFormSetValue, UseFormWatch } from "react-hook-form";
import { RegisterInputProps } from "../frontend/contact-us";

export type CustomPhoneInputProps = {
  label?: string;
  name: keyof RegisterInputProps; // Ensure 'name' is a valid key from RegisterInputProps
  errors: FieldErrors<RegisterInputProps>; // Specify the correct type for errors
  setValue: UseFormSetValue<RegisterInputProps>; // For controlled inputs with react-hook-form
  watch: UseFormWatch<RegisterInputProps>;
  required?: boolean;
  defaultCountry?: Country;
};

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  label = "Phone Number",
  name,
  errors,
  setValue,
  watch, // Include watch in props
  required = true,
  defaultCountry = "NP",
}) => {
  const phoneValue = watch(name); // Use watch to get the value
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(
    defaultCountry
  );
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (
      phoneValue &&
      selectedCountry &&
      !isValidPhoneNumber(phoneValue, selectedCountry)
    ) {
      setError(`Invalid phone number for ${selectedCountry}`);
    } else {
      setError(undefined); // Clear the error if valid
    }
  }, [phoneValue, selectedCountry]);

  const handleChange = (val: string | undefined) => {
    setValue(name, val || ""); // Update react-hook-form state
  };

  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-900">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <PhoneInput
        international
        defaultCountry={defaultCountry}
        value={phoneValue}
        onChange={handleChange}
        onCountryChange={setSelectedCountry}
        className="flex items-center w-full rounded-lg px-2 py-1 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-none"

      />

      {error && <span className="text-xs text-red-600">{error}</span>}
      {errors[name]?.message && (
        <span className="text-xs text-red-600">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default CustomPhoneInput;
