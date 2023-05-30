"use client"
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "AboutUs", href: "/about", current: false },
  { name: "Services", href: "/services", current: false },
  { name: "Pricing", href: "/pricing", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="min-w-7xl mx-auto border-b border-gray-50 bg-white px-2 sm:px-6 lg:px-8">
            <div className="relative mx-0 flex h-16 items-center justify-between md:mx-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#27a776] hover:bg-[#27a776] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <GrFormClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <GiHamburgerMenu
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <h1 className="cursor-pointer text-xl font-semibold text-gray-500">
                    Unik<span className="text-[#27a776]">Vision</span>
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block md:ml-[1100px]">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-[#27a776] text-white shadow-lg"
                            : "text-gray-500 hover:bg-[#27a776] hover:text-white hover:shadow-lg",
                          "rounded-full px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#27a776] text-white shadow-lg"
                      : "text-gray-500 hover:bg-[#27a776] hover:text-white hover:shadow-lg",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}