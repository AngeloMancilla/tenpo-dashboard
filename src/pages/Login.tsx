function Login() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Left side - Login Form */}
      <div className="flex w-full items-center justify-center px-4 py-10 sm:px-6 md:w-1/2 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Bienvenido</h1>
            <p className="mt-2 text-sm text-gray-600">Por favor, ingrese sus credenciales.</p>
          </div>Se requiere crear una aplicación en un repositorio personal que haga lo siguiente:
● Levante una pantalla de login (correo y pass) y haga un fake-login (código 200-OK +
token-fake).
● Levantar una home, la cual se conecte con una API pública (a elección) y muestre
una lista de 2000 elementos.
● Mostrar un botón de logout que te devuelva al login y limpie la sesión.
Requisitos sobre la solución:

● Desarrollar una app en react con typescript que sea responsiva (web y mobile).
● El manejo de estilos o uso de librerías CSS es a elección.
● Readme con los pasos para correr el proyecto y documentación necesaria.
● Almacenar token en memoria, seleccionar la forma/herramienta/librería que se crea
más conveniente para este propósito (persistencia de token).
● Definir el diseño/arquitectura que creas más conveniente para tener un contex
público (login) y privado (home) que luego te permita crecer en el tiempo con
nuevos módulos. Ej: módulo de cambio de contraseña (público) ó módulo de datos
del usuario (privado).
● Usar axios para el fetching y configurarlo para enviar el token-fake en las request

más allá de que no se use.
● Definir la mejor forma bajo su criterio para mostrar la lista de la home
argumentando en unas pocas líneas su solución.
● Defina una estrategia de logout que haga sentido con el diseño de context
público/privado.
● Proponer una mejora teórica sobre

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
  );
}

export default Login;
