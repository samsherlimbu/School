"use client";

import React, { useState } from "react";
import TextInput from "../FormInputs/textinput";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/submitButton";
import { Send } from "lucide-react";
import TextArea from "../FormInputs/textAreaInput";
import CustomPhoneInput from "../FormInputs/phoneInput";

const roles = [
  { Label: "Principal", value: "principal" },
  { Label: "School Administrator", value: "school administrator" },
  { Label: "Head Teacher", value: "Head teacher" },
  { Label: "Teacher", value: "teacher" },
  { Label: "Parents", value: "parents" },
  { Label: "Student", value: "student" },
  { Label: "Consultant", value: "consultant" },
  { Label: "Others", value: "others" },
];

const media = [
  { Label: "Facebook", value: "facebook" },
  { Label: "Instagram", value: "instagram" },
  { Label: "Twitter", value: "twitter" },
  { Label: "LinkedIn", value: "linkedin" },
  { Label: "YouTube", value: "youtube" },
  { Label: "Other", value: "other" },
];

export type RegisterInputProps = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  country: string;
  schoolPage: string;
  students: string;
  role: string;
  media: string;
  message: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  async function onSubmit(data: RegisterInputProps) {
    console.log("Submitted Data:", data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Form submitted");
      reset();
    }, 1000);
  }

  return (
    <section className="bg-gray-100 h-full py-12 px-4">
      <div className="max-w-6xl mx-auto h-full">
        <div className="flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full lg:w-3/4">
            <h3 className="text-center text-2xl font-semibold mb-4">
              Tell us about your institution and requirements
            </h3>
            <p className="text-gray-600 text-sm text-center px-4 mb-6">
              Our team will reach out within 24 hours to schedule a personalized demo and discuss your specific needs.
            </p>
            <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Your Full Name"
                register={register}
                name="fullName"
                type="text"
                errors={errors}
                placeholder="Enter Full Name"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="Email Address"
                  register={register}
                  name="email"
                  type="email"
                  errors={errors}
                  placeholder="Enter email address"
                />
                <CustomPhoneInput
                  name="phone"
                  label="Your Phone Number"
                  setValue={setValue}
                  watch={watch}
                  errors={errors}
                  defaultCountry="NP"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="School"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Enter your school name"
                />
                <TextInput
                  label="Country"
                  register={register}
                  name="country"
                  errors={errors}
                  placeholder="Enter your country"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  label="School Website/University/Social Media Page"
                  register={register}
                  name="schoolPage"
                  errors={errors}
                  placeholder="https://www.schoolwebsite.com"
                />
                <TextInput
                  label="Number of Students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="Enter your students number"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Role
                  </label>
                  <select
                    id="role"
                    {...register("role", { required: "Role is required" })}
                    className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm ${
                      errors.role ? "border-red-500" : ""
                    }`}
                  >
                    {roles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.Label}
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.role.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="media"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How did you hear about us?
                  </label>
                  <select
                    id="media"
                    {...register("media", { required: "Media is required" })}
                    className={`mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 sm:text-sm ${
                      errors.media ? "border-red-500" : ""
                    }`}
                  >
                    {media.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.Label}
                      </option>
                    ))}
                  </select>
                  {errors.media && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.media.message}
                    </p>
                  )}
                </div>
              </div>
              <TextArea
                label="Please share with us the key pain points you want to solve"
                register={register}
                name="message"
                errors={errors}
              />
              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Submitting..."
              />
            </form>
          </div>
        </div>
        <div className="py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          <div className="bg-green-700 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4">
              To create a more value-added solution, it's essential to analyze the possibilities of improvement.
            </p>
            <button className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-gray-100">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="text-xl font-semibold mb-2">Contact our team</h3>
            <p className="text-sm mb-4">
              To create a more value-added solution, it's essential to analyze the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full font-semibold transition duration-300 hover:bg-green-700">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
