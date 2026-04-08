import {useForm} from "react-hook-form";

export const ForgotPasswordForm = ({ onSwitch }) => {

      const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-s">
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1.5">
          Email
        </label>

        <input type="email"
          placeholder="correo@ejemplo.com"
          className="w-full px-3 py-2 border rounded-lg"
          {...register("emailOrUsername", { 
            required: "El email es obligatorio",
          })}
        />

        {errors.emailOrUsername && (
          <p className="text-xs text-red-500 mt-1">
            {errors.emailOrUsername.message}
          </p>
        )}

      </div>
      <button type="submit" className="w-full bg-main-blue text-white py-2 rounded-lg disiable:opacity-50 hover:opacity-90 ">
        Enviar correo
      </button>
      <p className="text-center text-sm text-gray-600">
        Recordaste tu contraseña?{""}
        <button type="button" className="text-main-blue font-medium hover:opacity-80"
          onClick={onSwitch}
        >
          Iniciar sesión
        </button>
      </p>
    </form>
  )
}

