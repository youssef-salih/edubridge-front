import { Link } from "react-router";

const Page404 = () => {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-light">
      <h1 class="text-9xl font-extrabold text-secondary tracking-widest text-shadow-outline">
        404
      </h1>
      <div class="bg-secondary text-white px-2 text-sm rounded rotate-12 absolute border border-primary">
        Page Not Found
      </div>
      <button class="mt-5">
        <div class="relative inline-block text-sm font-medium text-white group active:text-primary focus:outline-none focus:ring">
          <span class="absolute inset-0 transition-transform translate-x-1 translate-y-1 bg-primary group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-secondary border border-current">
            <Link to="/">Go Home</Link>
          </span>
        </div>
      </button>
    </main>
  );
};

export default Page404;
