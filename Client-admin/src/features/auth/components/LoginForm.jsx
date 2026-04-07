


export const LoginForm = ({ onForgot }) => {
  return (
    <form action="" className="space-y-S">
      <div>
        <label
          htmlFor=""
          className="block text-sm font-medium text-gray-800 mb-1.5"
        >
          Email o Usuario
        </label>

        <input
          id="emailOrUsername"
          type="text"
          placeholder="correo@ejemplo.com o usuario"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg foc"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-800 mb-1.5"
        >
          Contraseña
        </label>

        <input
          id="password"
          type="password"
          placeholder="••••••••"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="button"
        onClick={onForgot}
        className="w-full bg-main-blue hover:opacity-90 text-medium py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm disabled:opacity-50"
      >
        Iniciar sesión
      </button>

      <p className="text-sm text-gray-600">
        ¿Olvidaste tu contraseña?{' '}
        <button
          type="button"
          onClick={onForgot}
          className="text-main-blue hover:underline"
        >
          Recuperar contraseña
        </button>
      </p>
    </form>
  )
}

