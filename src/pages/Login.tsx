function Login() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Login Form */}
      <div className="flex w-full items-center justify-center px-4 py-10 sm:px-6 md:w-1/2 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bienvenido</h1>
            <p className="mt-2 text-sm text-gray-600">Por favor, ingrese sus credenciales.</p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4 rounded-md">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-indigo-500"
                  placeholder="Correo"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:border-indigo-500"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="hidden w-1/2 bg-gradient-to-br from-indigo-900 via-indigo-600 to-indigo-300 md:block">
        {/* Degradado de color índigo */}
      </div>
    </div>
  )
}

export default Login