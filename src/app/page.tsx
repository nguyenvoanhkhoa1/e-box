"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons"
import {
  faStarHalfStroke as halfStar,
  faStar as solidStar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ArrowCounterClockwise,
  ArrowLeft,
  ArrowRight,
  ArrowsClockwise,
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
    FICTION = "Fiction",
    HISTORY = "History",
    THRILLER = "Thriller",
    NON_FICTION = "Non Fiction",
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

  const BOOKS_LIST = [
    {
      id: 1,
      title: "A Brief History of America",
      code: "ISBN-100236547851",
      oldPrice: "$7.99",
      newPrice: "$3.36",
      image: "/assets/images/book-1.png",
      rating: 4.5,
      type: BookType.BIOGRAPHY,
    },
    {
      id: 2,
      title: "Dark in Mask Gratitude",
      code: "ISBN-100236547852",
      oldPrice: "$10.99",
      newPrice: "$6.49",
      image: "/assets/images/book-2.png",
      rating: 4.7,
      type: BookType.HORROR,
    },
    {
      id: 3,
      title: "Drawn to the Sky by Marcos Trison",
      code: "ISBN-100236547853",
      oldPrice: "$8.99",
      newPrice: "$5.50",
      image: "/assets/images/book-3.png",
      rating: 4.2,
      type: BookType.POETRY,
    },
    {
      id: 4,
      title: "The unreal and the real.",
      code: "ISBN-100236547854",
      oldPrice: "$9.99",
      newPrice: "$4.99",
      image: "/assets/images/book-4.png",
      rating: 4.0,
      type: BookType.THRILLER,
    },
    {
      id: 5,
      title: "Forever Is A Long Time To Be Wrong",
      code: "ISBN-100236547855",
      oldPrice: "$6.99",
      newPrice: "$3.99",
      image: "/assets/images/book-5.png",
      rating: 4.3,
      type: BookType.FANTASY,
    },
    {
      id: 6,
      title: "Glenn meade the cairo code.",
      code: "ISBN-100236547856",
      oldPrice: "$12.99",
      newPrice: "$8.99",
      image: "/assets/images/book-6.png",
      rating: 4.8,
      type: BookType.ROMANCE,
    },
    {
      id: 7,
      title: "Glitterings stars by Amver Davis",
      code: "ISBN-100236547857",
      oldPrice: "$11.99",
      newPrice: "$7.99",
      image: "/assets/images/book-7.png",
      rating: 4.6,
      type: BookType.SELF_HELP,
    },
    {
      id: 8,
      title: "Horror Nights",
      code: "ISBN-100236547858",
      oldPrice: "$14.99",
      newPrice: "$10.99",
      image: "/assets/images/book-8.png",
      rating: 4.1,
      type: BookType.HORROR,
    },
    {
      id: 9,
      title: "Learn Abstract Design",
      code: "ISBN-100236547859",
      oldPrice: "$13.99",
      newPrice: "$9.99",
      image: "/assets/images/book-9.png",
      rating: 4.9,
      type: BookType.BIOGRAPHY,
    },
    {
      id: 10,
      title: "Let the sun shine – Angelika glow",
      code: "ISBN-100236547860",
      oldPrice: "$9.99",
      newPrice: "$5.99",
      image: "/assets/images/book-10.png",
      rating: 4.4,
      type: BookType.NON_FICTION,
    },
    {
      id: 11,
      title: "Living The Life You Always Wanted",
      code: "ISBN-100236547861",
      oldPrice: "$10.99",
      newPrice: "$7.36",
      image: "/assets/images/book-11.png",
      rating: 4.0,
      type: BookType.THRILLER,
    },
    {
      id: 12,
      title: "Lucinda Riley The Seven Sister.",
      code: "ISBN-100236547862",
      oldPrice: "$15.99",
      newPrice: "$11.49",
      image: "/assets/images/book-12.png",
      rating: 4.8,
      type: BookType.FICTION,
    },
    {
      id: 13,
      title: "Never stop your spirit",
      code: "ISBN-100236547863",
      oldPrice: "$9.49",
      newPrice: "$5.49",
      image: "/assets/images/book-13.png",
      rating: 4.3,
      type: BookType.HISTORY,
    },
    {
      id: 14,
      title: "One year on a bike – Bookpress",
      code: "ISBN-100236547864",
      oldPrice: "$8.99",
      newPrice: "$6.99",
      image: "/assets/images/book-14.png",
      rating: 4.2,
      type: BookType.POETRY,
    },
    {
      id: 15,
      title: "The Birds",
      code: "ISBN-100236547865",
      oldPrice: "$10.99",
      newPrice: "$7.49",
      image: "/assets/images/book-15.png",
      rating: 4.5,
      type: BookType.SELF_HELP,
    },
    {
      id: 16,
      title: "The Waterfall story",
      code: "ISBN-100236547866",
      oldPrice: "$6.99",
      newPrice: "$4.49",
      image: "/assets/images/book-16.png",
      rating: 4.3,
      type: BookType.ROMANCE,
    },
    // {
    //   id: 17,
    //   title: "The Fantasy Chronicles",
    //   code: "ISBN-100236547867",
    //   oldPrice: "$13.49",
    //   newPrice: "$9.99",
    //   image: "/assets/images/book-17.png",
    //   rating: 4.9,
    //   type: BookType.FANTASY,
    // },
    // {
    //   id: 18,
    //   title: "Horror Tales Untold",
    //   code: "ISBN-100236547868",
    //   oldPrice: "$14.99",
    //   newPrice: "$12.99",
    //   image: "/assets/images/book-18.png",
    //   rating: 4.0,
    //   type: BookType.HORROR,
    // },
    // {
    //   id: 19,
    //   title: "Biography of Legends",
    //   code: "ISBN-100236547869",
    //   oldPrice: "$11.49",
    //   newPrice: "$8.99",
    //   image: "/assets/images/book-19.png",
    //   rating: 4.7,
    //   type: BookType.BIOGRAPHY,
    // },
    // {
    //   id: 20,
    //   title: "The Real Stories",
    //   code: "ISBN-100236547870",
    //   oldPrice: "$9.99",
    //   newPrice: "$6.99",
    //   image: "/assets/images/book-20.png",
    //   rating: 4.4,
    //   type: BookType.NON_FICTION,
    // },
  ]

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

  const [activeType, setActiveType] = useState<BookType | "All">("All")
  const [visibleBooks, setVisibleBooks] = useState(8)
  const filteredBooks =
    activeType === "All"
      ? BOOKS_LIST
      : BOOKS_LIST.filter((book) => book.type === activeType)
  const handleLoad = () => {
    setVisibleBooks((prev) => prev + 8) // Show 8 more books
  }
  const filterOptions = ["All", ...Object.values(BookType)].slice(0, 5)

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
              <div className="text-4xl font-bold leading-tight tracking-[-0.07em]">
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
        <section className="bg-gradient-to-br from-yellow-50 from-0% via-red-50 via-30% to-blue-50 to-100%">
          <div className="section-container p-20">
            <div className="flex justify-between">
              <div className="text-4xl font-bold leading-tight tracking-[-0.07em]">
                Popular Collections
              </div>
              <div className="flex items-center justify-center">
                {filterOptions.map((type) => (
                  <>
                    {type !== "All" && (
                      <span className="h-2 w-px border-l-2 border-gray-300"></span>
                    )}
                    <button
                      key={type}
                      onClick={() => setActiveType(type as BookType | "All")}
                      className={`px-3 py-2 text-xl font-medium ${
                        activeType === type
                          ? "text-secondary-default"
                          : "text-gray-600"
                      }`}
                    >
                      {type}
                    </button>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredBooks.slice(0, visibleBooks).map((book) => (
                <div
                  key={book.id}
                  className="flex flex-col items-center bg-white p-6 hover:shadow-lg"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="mb-4 h-56 w-auto rounded-md object-cover"
                  />
                  <div className="mb-2 flex items-center">
                    {Array.from({ length: 5 }).map((_, index) => {
                      const ratingValue = book.rating - index

                      return (
                        <FontAwesomeIcon
                          key={index}
                          icon={
                            ratingValue >= 1
                              ? solidStar
                              : ratingValue >= 0.5
                                ? halfStar
                                : emptyStar
                          }
                          className="mr-1 text-primary-default"
                        />
                      )
                    })}
                  </div>
                  <h3
                    className="mb-2 line-clamp-1 text-center font-semibold"
                    title={book.title}
                  >
                    {book.title}
                  </h3>
                  <p className="mb-2 text-sm text-gray-600">{book.code}</p>
                  <div className="mb-4">
                    <span className="mr-2 text-sm font-semibold text-red-500 line-through">
                      {book.oldPrice}
                    </span>
                    <span className="font-bold text-secondary-default">
                      {book.newPrice}
                    </span>
                  </div>
                  <button className="group flex items-center gap-3 rounded-md border border-secondary-default px-3 py-2 text-sm font-semibold text-secondary-default transition hover:bg-secondary-default hover:text-white">
                    Purchase
                    <ShoppingCart
                      size={20}
                      className="fill-secondary-default transition group-hover:fill-white"
                    />
                  </button>
                </div>
              ))}
            </div>
            {filteredBooks.length > visibleBooks && (
              <div className="mt-10 text-center">
                <button
                  onClick={handleLoad}
                  className="mx-auto flex items-center gap-3 rounded-full bg-secondary-default px-6 py-2 text-white transition hover:bg-green-600"
                >
                  <ArrowsClockwise size={20} className="fill-white" />
                  Load More
                </button>
              </div>
            )}
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
