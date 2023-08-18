import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:natacaet@gmail?suject=${formData.subject}{formData.subject}&body=Hi, my name is ${formData.name}.
    ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase xl:tracking-[20px] lg:tracking-[20px] tracking-[15px] text-gray-500 text-2xl">
        Contato
      </h3>

      <div className="flex flex-col xl:space-y-10 lg:space-y-10 space-y-4 xl:mt-20 mt-32">
        <h4 className="2xl:text-4xl xl:text-4xl lg:text-4xl font-semibold text-center">
          Eu tenho o que você precisa.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">
            Vamos Conversar.
          </span>
        </h4>

        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2x-l">+55(51)98610-2483</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2x-l">natacaet@gmail.com</p>
        </div>

        <div className="flex xl:items-center xl:space-x-5 justify-center">
          <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
          <p className="text-2x-l">Rua Tenente Alberto Mendes Júnior, 250</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto 2xl:mt-20 xl:mt-20 lg:mt-20"
      >
        <div className="2xl:flex xl:flex lg-flex 2xl:space-x-2 xl:space-x-2 lg-space-x-2">
          <input
            {...register("name")}
            placeholder="Nome"
            className="contactInput pr-24 xl:mb-0 lg:mb-0 mb-1.5"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput pr-24"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Assunto"
          className="contactInput"
          type="text"
        />

        <textarea
          {...register("message")}
          placeholder="Mensagem"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
