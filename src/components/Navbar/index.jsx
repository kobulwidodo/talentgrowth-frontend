import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo/logo.png";
import logoFull from "../../assets/logo/logo-full.png";
import ButtonPrimary from "../ButtonPrimary";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames";
import { useUserContext } from "../../context/userContext";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Internship", href: "/internship" },
    { name: "Webinar", href: "/event/webinar" },
    { name: "Bootcamp", href: "/event/course" },
  ];

  const { isAuthenticated, userInfo, logout } = useUserContext();

  return (
    <Disclosure as="nav" className="bg-white drop-shadow-sm">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-max"
                    src={logoFull}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) => {
                          return classNames(
                            isActive
                              ? "bg-gray-200 text-gray-700"
                              : "text-gray-700 hover:bg-gray-100",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          );
                        }}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {isAuthenticated ? (
                  <>
                    <Link to="/me">Hi, {userInfo?.name}</Link>
                    <div className="hidden sm:flex">
                      <div className="mx-2">|</div>
                      <button onClick={logout}>Logout</button>
                    </div>
                  </>
                ) : (
                  <div className="gap-5 hidden sm:flex">
                    <ButtonPrimary
                      className=""
                      isLink={true}
                      label="Login"
                      to="/login"
                    />
                    <ButtonPrimary
                      className=""
                      isLink={true}
                      label="Register"
                      to="/register"
                      type="secondary"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-700 hover:bg-gray-100",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              {!isAuthenticated ? (
                <>
                  <ButtonPrimary
                    className="block"
                    isLink={true}
                    label="Login"
                    to="/login"
                  />
                  <ButtonPrimary
                    className="block"
                    isLink={true}
                    label="Register"
                    to="/register"
                    type="secondary"
                  />
                </>
              ) : (
                <ButtonPrimary
                  className="block w-full"
                  isLink={false}
                  label="Logout"
                  onClick={logout}
                  type="secondary"
                />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
