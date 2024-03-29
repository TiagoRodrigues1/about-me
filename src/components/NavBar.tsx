import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ChangeTheme from "./ChangeTheme";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "About", href: "about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-darkWhite dark:bg-gray">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black dark:text-white hover:bg-gray-700 hover:dark:text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black focus:dark:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center justify-center">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-black dark:text-lightgray underline hover:underline-anchor"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <ChangeTheme />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "dark:bg-gray text-black bg-darkWhite dark:text-lightgrey hover:underline-anchor"
                      : "dark:text-white text-black hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <ChangeTheme />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
