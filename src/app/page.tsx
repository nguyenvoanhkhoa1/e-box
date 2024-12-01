"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Bag,
  List,
  MagnifyingGlass,
  ShoppingCart,
  User,
  X,
} from "@phosphor-icons/react"
import Slider, { Settings } from "react-slick"
import { useLockBodyScroll, useMedia } from "react-use"

import useScrollStatus from "@/hooks/useScrollStatus"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const HEADER_LINKS = [
    {
      label: "Home",
      href: "#",
      isActive: true,
    },
    {
      label: "Categories",
      href: "#",
      isActive: false,
    },
    {
      label: "Store",
      href: "#",
      isActive: false,
    },
    {
      label: "Contact",
      href: "#",
      isActive: false,
    },
    {
      label: "About Us",
      href: "#",
      isActive: false,
    },
  ]

  enum BookType {
    NON_FICTION = "Non Fiction",
    FICTION = "Fiction",
    HISTORY = "History",
    THRILLER = "Thriller",
    POETRY = "Poetry",
    FANTASY = "Fantasy",
    BIOGRAPHY = "Biography",
    SELF_HELP = "Self Help",
    ROMANCE = "Romance",
    HORROR = "Horror",
  }

  // Define the metadata for each book type
  const BOOK_TYPE_DATA = {
    [BookType.NON_FICTION]: {
      item: "302 Items",
      icon: "/assets/icons/type-1.png",
    },
    [BookType.FICTION]: { item: "296 Items", icon: "/assets/icons/type-2.png" },
    [BookType.HISTORY]: { item: "258 Items", icon: "/assets/icons/type-3.png" },
    [BookType.THRILLER]: {
      item: "169 Items",
      icon: "/assets/icons/type-4.png",
    },
    [BookType.POETRY]: { item: "302 Items", icon: "/assets/icons/type-5.png" },
    [BookType.FANTASY]: { item: "198 Items", icon: "/assets/icons/type-6.png" },
    [BookType.BIOGRAPHY]: {
      item: "276 Items",
      icon: "/assets/icons/type-7.png",
    },
    [BookType.SELF_HELP]: {
      item: "189 Items",
      icon: "/assets/icons/type-8.png",
    },
    [BookType.ROMANCE]: { item: "321 Items", icon: "/assets/icons/type-9.png" },
    [BookType.HORROR]: { item: "175 Items", icon: "/assets/icons/type-10.png" },
  }

  const FOOTER_LINKS = [
    {
      title: "Help & Information",
      links: [
        { label: "Help", href: "#" },
        { label: "Track order", href: "#" },
        { label: "Delivery & returns", href: "#" },
      ],
    },
    {
      title: "About Etalon",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers of Etalon", href: "#" },
        { label: "Investors' site", href: "#" },
      ],
    },
    {
      title: "More from Etalon",
      links: [
        { label: "Mobile and Etalon apps", href: "#" },
        { label: "Gift vouchers", href: "#" },
        { label: "Black Friday", href: "#" },
      ],
    },
  ]

  const isDesktop = useMedia("(min-width: 1024px)", true)
  const { isAtTop, isAtBottom, scrollDirection } = useScrollStatus()

  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [current, setCurrent] = useState(0)

  useLockBodyScroll(openMobileMenu)

  const sliderRef = useRef<Slider>(null)
  var settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    arrows: false,
    swipe: false,

    beforeChange(_, nextSlide) {
      setCurrent(nextSlide)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipe: true,
        },
      },
    ],
  }

  return (
    <>
      <header
        className={`fixed z-10 w-full py-4 transition-all duration-300 ease-in-out ${isAtTop ? "bg-transparent py-8" : "bg-white/60 py-4 shadow-md"}`}
      >
        <div className={`section-container flex items-center justify-between`}>
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-md bg-primary-default px-3 py-1 text-2xl font-semibold text-white">
                eB
              </div>
            </Link>
            <button className="flex items-center gap-2 rounded-md bg-white p-3 shadow-md">
              <Image
                src={"/assets/icons/gift-box.png"}
                alt={""}
                width={24}
                height={24}
              />
              Festival Gift Overs
            </button>
          </div>
          <nav className="hidden lg:block">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`body-lg-600 p-4 transition-all duration-300 ease-in-out ${
                  link.isActive
                    ? "text-primary-default"
                    : "text-gray-900 hover:text-primary-default"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              className="body-md-500 flex size-12 items-center justify-center rounded-md p-2 text-white transition-colors duration-300 ease-in-out hover:bg-white/10 lg:hidden"
              onClick={() => setOpenMobileMenu(true)}
            >
              <List size={24} />
            </button>
            <button className="flex size-12 items-center justify-center rounded-full bg-transparent transition-colors duration-300 ease-in-out hover:bg-black/10">
              <MagnifyingGlass size={24} />
            </button>
            <button className="flex size-12 items-center justify-center rounded-full bg-transparent transition-colors duration-300 ease-in-out hover:bg-black/10">
              <ShoppingCart size={24} />
            </button>
            <button className="flex items-center gap-2 rounded-md border-2 border-primary-default px-3 py-2 font-semibold">
              <User size={24} /> Login
            </button>
          </div>
          <div
            className={`fixed left-0 top-0 block h-screen w-screen bg-black/90 transition-all duration-300 ease-in-out lg:hidden ${openMobileMenu ? "left-0" : "left-full"}`}
          >
            <div className={`section-container ${isAtTop ? "py-8" : "py-4"}`}>
              <button
                className="top-4 float-end flex size-12 items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg"
                onClick={() => setOpenMobileMenu(false)}
              >
                <X size={24} className="fill-white" />
              </button>
              <div className="float-none mt-12 flex flex-col gap-2">
                {HEADER_LINKS.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="active:text-secondary-dark block py-4 text-center text-primary-default transition-all duration-200 ease-in-out active:bg-primary-default"
                    onClick={() =>
                      setTimeout(() => {
                        setOpenMobileMenu(false)
                      }, 500)
                    }
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="mx-auto mt-4 flex size-12 items-center justify-center rounded-full bg-primary-default transition-colors duration-300 ease-in-out">
                  <Bag size={24} className="fill-secondary-dark" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-tr from-white from-0% via-red-50 via-50% to-yellow-50 to-100%">
          <div className="section-container grid grid-cols-2 gap-6 pb-20 pt-32">
            <div className="relative flex flex-col gap-8">
              <div className="text-5xl font-bold leading-tight tracking-[-0.07em]">
                Unleash Your{" "}
                <span className="text-primary-default">Creativity</span> With
                The Power Of A Book.
              </div>
              <div className="text-lg font-semibold">
                This should be used to tell a story and let your users know a
                little more about your product or service.
              </div>
              <div className="flex gap-5">
                <button className="flex items-center gap-2 rounded-md border-2 border-secondary-default bg-secondary-default px-3 py-2 font-semibold text-white">
                  Purchase Now
                </button>
                <button className="flex items-center gap-2 rounded-md border-2 border-primary-default px-3 py-2 font-semibold">
                  Explore Bookshop
                </button>
              </div>
              <Image
                src={"/assets/icons/arrow-down.png"}
                alt={""}
                width={128}
                height={128}
                className="absolute bottom-0 right-0 size-20 translate-y-1/2"
              />
            </div>
            <div className="relative flex items-center">
              <Image
                src={"/assets/images/bookcase.png"}
                alt={""}
                width={1000}
                height={459}
                className="mx-auto size-4/5"
              />
              <Image
                src={"/assets/icons/right-up.png"}
                alt={""}
                width={128}
                height={128}
                className="absolute bottom-0 right-0 size-20 -translate-y-1/2 translate-x-1/2"
              />
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-white from-0% via-red-50 via-50% to-purple-50 to-100%">
          <div className="section-container p-20">
            <div className="flex items-center justify-between">
              <div className="text-5xl font-bold leading-tight tracking-[-0.07em]">
                Browse By Book Types
              </div>
              <div className="hidden gap-5 lg:flex">
                <button
                  className={`group rounded-full border-2 border-solid border-primary-default p-3 shadow-lg shadow-primary-default/20 transition-colors duration-300 ease-in-out hover:bg-primary-default`}
                  onClick={sliderRef.current?.slickPrev}
                >
                  <ArrowLeft
                    weight="bold"
                    size={24}
                    className="fill-primary-default transition-colors duration-300 ease-in-out group-hover:fill-white"
                  />
                </button>
                <button
                  className={`group rounded-full border-2 border-solid border-primary-default p-3 shadow-lg shadow-primary-default/20 transition-colors duration-300 ease-in-out hover:bg-primary-default`}
                  onClick={sliderRef.current?.slickNext}
                >
                  <ArrowRight
                    weight="bold"
                    size={24}
                    className="fill-primary-default transition-colors duration-300 ease-in-out group-hover:fill-white"
                  />
                </button>
              </div>
            </div>
            <div className="-mx-4 mt-10">
              <Slider {...settings} ref={sliderRef}>
                {Object.entries(BOOK_TYPE_DATA).map(([type, data], index) => (
                  <div key={index} className="">
                    <div className="mx-4 my-8 flex items-center gap-4 rounded-lg bg-white p-5 shadow-xl shadow-blue-100">
                      <Image
                        src={data.icon}
                        alt={`${type} Icon`}
                        width={128}
                        height={128}
                        className="size-8"
                      />
                      <div>
                        <div className="whitespace-nowrap font-semibold">
                          {type}
                        </div>
                        <div className="text-sm text-gray-700">{data.item}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tr from-yellow-50 from-0% via-red-50 via-50% to-purple-50 to-100%">
          <div className="section-container flex justify-between p-20">
            <div className="flex w-full items-center justify-between bg-gradient-to-r from-red-100 to-orange-100 px-10 py-12">
              <Image
                src={"/assets/images/two-book.png"}
                alt={""}
                width={774}
                height={460}
                className="h-40 w-auto"
              />
              <div>
                <div className="text-5xl font-bold leading-tight tracking-[-0.07em]">
                  Books <span className="text-primary-default">50% off</span>{" "}
                  now!
                  <br />
                  Don&apos;t miss such a deal!
                </div>
                <div className="mt-5 flex gap-5">
                  <button className="flex items-center gap-2 rounded-md border border-primary-default bg-primary-default px-3 py-2 font-semibold text-white">
                    Purchase Now
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-gray-900 bg-white px-3 py-2 font-semibold">
                    Get Coupon
                  </button>
                </div>
              </div>
              <Image
                src={"/assets/images/book-orange.png"}
                alt={""}
                width={3000}
                height={1871}
                className="h-52 w-auto"
              />
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-yellow-50 from-0% via-red-50 via-30% to-green-50 to-100%">
          <div className="section-container p-20">
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer className="border-t border-gray-700">
        <div className="bg-[#191919]">
          <div className="section-container grid grid-cols-2 gap-6 py-16 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src={"/assets/etalon-logo.png"}
                  alt={""}
                  width={308}
                  height={308}
                  className="size-9 rounded-full"
                />
                <div className="text-3xl font-bold text-white">etalon</div>
              </Link>
            </div>
            {FOOTER_LINKS.map((column) => (
              <div key={column.title}>
                <div className="text-lg font-semibold text-white">
                  {column.title}
                </div>
                <div className="mt-5 flex flex-col items-start gap-1">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center py-1.5"
                    >
                      <div className="text-gray-500 transition-colors duration-150 ease-in-out hover:text-gray-300">
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#070707]">
          <div className="section-container flex flex-col items-center justify-between gap-4 py-5 text-sm text-gray-400 md:flex md:flex-row">
            <div>Etalon, 2023. All Rights Reserved</div>
            <div>
              <Link
                href="/"
                className="transition-colors duration-150 ease-in-out hover:text-gray-200"
              >
                Privacy & Cookies
              </Link>
              <span> | </span>
              <Link
                href={""}
                className="transition-colors duration-150 ease-in-out hover:text-gray-200"
              >
                T&Cs
              </Link>
              <span> | </span>
              <Link
                href={""}
                className="transition-colors duration-150 ease-in-out hover:text-gray-200"
              >
                Accessibility{" "}
              </Link>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  )
}
