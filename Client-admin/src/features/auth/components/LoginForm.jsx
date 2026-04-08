import { useForm } from 'react-hook-form'

export const LoginForm = ({ onForgot }) => {

      const { register, handleSubmit, formState: { errors }} = useForm();
 
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label
          htmlFor="emailOrUsername"
          className="block text-sm font-medium text-gray-800 mb-1.5"
        >
          Correo Electrónico o Usuario
        </label>
        <input
          id="emailOrUsername"
          type="text"
          placeholder="correo@ejemplo.com o nombre de usuario"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          {...register("emailOrUsername", {
            required: "Este campo es obligatorio"
          })}
        />

        {errors.emailOrUsername && (
          <p className="text-xs text-red-500 mt-1">
            {errors.emailOrUsername.message}
          </p>
        )}

      </div>

      <div>
        <label htmlFor="password"
          className="block text-sm font-medium text-gray-800 mb-1.5"
        >
          contraseña
        </label>
        <input
          id="password"
          type="password"
          placeholder="•••••••••"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          {...register("password", {
            required: "la contraseña es obligatoria"
          })}
        />

          {errors.password && (
          <p className="text-xs text-red-500 mt-1">
            {errors.password.message}
          </p>
        )}

      </div>
      <button
        type="submit"
        className="w-full bg-main-blue hover:opacity-90 text-white font-medium py-2.5 px-4 rounded-lg"
      >
        Iniciar Sesión
      </button>
      <p className="text-center text-sm">
        <button
          type="button"
          onClick={onForgot}
          className="text-main-blue hover:underline">
          ¿Olvidaste tu contraseña?
        </button>
      </p>


    </form>
  )
}
