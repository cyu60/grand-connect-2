import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <main className="">
        <InputPage></InputPage>
      </main>
    </>
  );
};

const Header = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        {/* <svg
          className="mr-2 h-8 w-8 fill-current"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}
        <span className="text-xl font-semibold tracking-tight">
          Discampus
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
         <div className="text-sm lg:flex-grow">
          {/* <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Blog
          </a> */}
        </div> 
        <div>
          <Link
            href="organizer"
            className="btn btn-secondary"
          >
            I am an organizer
          </Link>
        </div>
      </div>
    </nav>
  );
};

const InputPage = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage: `url("https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/gilman_quad0508.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-neutral-content lg:text-left">
          <h1 className="text-5xl font-bold">Sign up now!</h1>
          <p className="py-6">Welcome to the personalized mailing list.</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="text"
                placeholder="Phone number"
                className="input-bordered input"
              />
              <label className="label">
                <Link
                  href="passwordRecovery"
                  className="link-hover label-text-alt link"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link href="preferences">
                <button className="btn-primary btn">Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
