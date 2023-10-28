import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {!isAuthenticated ? (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            {/* // outlet means signup or signin form */}
            <Outlet />
          </section>

          <img
            src="./assets/images/side-img.svg
          "
            alt=""
            className="hidden xl:block h-screen w-1/2  object-cover bg-no-repeat"
          />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AuthLayout;
