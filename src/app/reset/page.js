export default function SignInPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 py-8 mx-auto md:h-screen lg:py-0 shadow-md" // Added shadow-md here
      style={{ backgroundImage: `url("/jollof.avif")` }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset
            </h1>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset Password
              </button>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="ml-3 text-sm">
                    <a
                      href="/login"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Sign In
                    </a>
                  </div>
                </div>
                <a
                  href="/register"
                  className="text-sm font-medium text-orange-600 hover:underline dark:text-primary-500"
                >
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
