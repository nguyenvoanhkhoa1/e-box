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
  ArrowLeft,
  ArrowRight,
  ArrowsClockwise,
  Bag,
  BehanceLogo,
  ChatCircleDots,
  DribbbleLogo,
  FacebookLogo,
  InstagramLogo,
  List,
  MagnifyingGlass,
  PhoneCall,
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

  const AUTHORS_LIST = [
    {
      id: 1,
      name: "Ronald Richards",
      image: "/assets/images/author-1.png",
      description: "236 Books Published",
    },
    {
      id: 2,
      name: "Eleanor Pena",
      image: "/assets/images/author-2.png",
      description: "150 Books Published",
    },
    {
      id: 3,
      name: "Bessie Cooper",
      image: "/assets/images/author-3.png",
      description: "120 Books Published",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      image: "/assets/images/author-4.png",
      description: "98 Books Published",
    },
    {
      id: 5,
      name: "Cameron Williamson",
      image: "/assets/images/author-5.png",
      description: "75 Books Published",
    },
  ]

  const FOOTER_LINKS = [
    {
      title: "Delivery",
      links: [
        { label: "Cost of delivery", href: "#" },
        { label: "Payment Method", href: "#" },
        { label: "Delivery Areas", href: "#" },
        { label: "Delivery Dates", href: "#" },
        { label: "Complaints & Return", href: "#" },
      ],
    },
    {
      title: "Discovery",
      links: [
        { label: "Latest News & Blog", href: "#" },
        { label: "My Checkout", href: "#" },
        { label: "return & Exchange", href: "#" },
        { label: "Shipping & Delivery", href: "#" },
        { label: "Tark Your Order", href: "#" },
      ],
    },
  ]

  const isDesktop = useMedia("(min-width: 1024px)", true)
  const isMd = useMedia("(min-width: 768px)", true)
  const { isAtTop, isAtBottom, scrollDirection } = useScrollStatus()

  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [current, setCurrent] = useState(0)
  const [currentAuthor, setCurrentAuthor] = useState(0)

  useLockBodyScroll(openMobileMenu)

  const sliderRef = useRef<Slider>(null)
  const authorSliderRef = useRef<Slider>(null)
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
        breakpoint: 1279,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          rows: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          rows: 2,
          swipe: true,
        },
      },
    ],
  }
  var settingsAuthorSlider: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    arrows: false,
    swipe: false,

    beforeChange(_, nextSlide) {
      setCurrentAuthor(nextSlide)
    },
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          swipe: true,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          swipe: true,
          fade: true,
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
        className={`fixed z-10 w-full py-4 transition-all duration-300 ease-in-out ${isAtTop ? "bg-transparent py-8" : "bg-white/80 py-4 shadow-md"}`}
      >
        <div className={`section-container flex items-center justify-between`}>
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-md bg-primary-default px-3 py-1 text-2xl font-semibold text-white">
                eB
              </div>
            </Link>
            <button className="hidden items-center gap-2 rounded-md bg-white p-3 shadow-md transition duration-300 hover:shadow-lg lg:flex">
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
                className={`body-lg-600 p-4 transition duration-300 ${
                  link.isActive
                    ? "text-primary-default"
                    : "text-gray-900 hover:text-primary-default"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <button
            className="body-md-500 flex size-12 items-center justify-center rounded-md p-2 text-white transition duration-300 hover:bg-white/10 lg:hidden"
            onClick={() => setOpenMobileMenu(true)}
          >
            <List size={24} className="fill-black" />
          </button>
          <div className="hidden items-center gap-2 lg:flex">
            <button className="group flex size-12 items-center justify-center rounded-full bg-transparent transition duration-300 hover:bg-black/10">
              <MagnifyingGlass
                size={24}
                className="transition duration-300 group-hover:fill-primary-default"
              />
            </button>
            <button className="group flex size-12 items-center justify-center rounded-full bg-transparent transition duration-300 hover:bg-black/10">
              <ShoppingCart
                size={24}
                className="transition duration-300 group-hover:fill-primary-default"
              />
            </button>
            <button className="group flex items-center gap-2 rounded-md border-2 border-primary-default px-3 py-2 font-semibold transition duration-300 hover:bg-primary-default hover:text-white hover:shadow-lg hover:shadow-primary-default/20">
              <User
                size={24}
                className="fill-black transition duration-300 group-hover:fill-white"
              />{" "}
              Login
            </button>
          </div>
          <div
            className={`fixed left-0 top-0 block h-screen w-screen bg-black/90 transition-all duration-300 ease-in-out lg:hidden ${openMobileMenu ? "left-0" : "left-full"}`}
          >
            <div className={`section-container ${isAtTop ? "py-8" : "py-4"}`}>
              <button
                className="top-4 float-end flex size-12 items-center justify-center transition duration-300 hover:shadow-lg"
                onClick={() => setOpenMobileMenu(false)}
              >
                <X size={24} className="fill-white" />
              </button>
              <div className="mt-12 flex flex-col items-center gap-2">
                {HEADER_LINKS.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="active:text-secondary-dark block py-4 text-center text-primary-default transition duration-200 active:bg-primary-default"
                    onClick={() =>
                      setTimeout(() => {
                        setOpenMobileMenu(false)
                      }, 500)
                    }
                  >
                    {item.label}
                  </Link>
                ))}
                <button className="mx-auto mt-4 flex size-12 items-center justify-center rounded-full bg-primary-default transition duration-300">
                  <MagnifyingGlass size={24} className="fill-secondary-dark" />
                </button>
                <button className="mx-auto mt-4 flex size-12 items-center justify-center rounded-full bg-primary-default transition duration-300">
                  <ShoppingCart size={24} className="fill-secondary-dark" />
                </button>
                <button className="group mt-8 flex items-center gap-2 rounded-md border-2 border-primary-default px-3 py-2 font-semibold text-primary-default transition duration-300 hover:bg-primary-default hover:text-white hover:shadow-lg hover:shadow-primary-default/20">
                  <User size={24} className="fill-secondary-dark" />
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-gradient-to-tr from-white from-0% via-red-50 via-50% to-yellow-50 to-100%">
          <div className="section-container grid grid-cols-1 gap-10 pb-10 pt-24 sm:pt-28 md:grid-cols-2 md:gap-6 md:pb-20 md:pt-32">
            <div className="relative flex flex-col items-center gap-6 text-center md:items-start md:text-start lg:gap-8">
              <div className="text-[40px] font-bold leading-tight tracking-[-0.07em] md:text-3xl lg:text-[40px] xl:text-5xl">
                Unleash Your{" "}
                <span className="text-primary-default">Creativity</span> With
                The Power Of A Book.
              </div>
              <div className="text-base font-semibold lg:text-lg">
                This should be used to tell a story and let your users know a
                little more about your product or service.
              </div>
              <div className="flex gap-5">
                <button className="flex items-center gap-2 rounded-md border-2 border-secondary-default bg-secondary-default px-3 py-2 font-semibold text-white shadow-secondary-default/20 transition duration-300 hover:bg-green-600 hover:shadow-lg">
                  Purchase Now
                </button>
                <button className="flex items-center gap-2 rounded-md border-2 border-primary-default px-3 py-2 font-semibold shadow-primary-default/20 transition duration-300 hover:bg-primary-default hover:text-white hover:shadow-lg">
                  Explore Bookshop
                </button>
              </div>
              <Image
                src={"/assets/icons/arrow-down.png"}
                alt={""}
                width={128}
                height={128}
                className="absolute bottom-0 right-0 size-16 translate-y-full lg:size-20 lg:translate-y-1/2"
              />
            </div>
            <div className="relative flex items-center">
              <Image
                src={"/assets/images/bookcase.png"}
                alt={""}
                width={1000}
                height={459}
                className="mx-auto size-4/5 h-auto"
              />
              <Image
                src={"/assets/icons/right-up.png"}
                alt={""}
                width={128}
                height={128}
                className="absolute bottom-0 size-16 translate-y-full md:bottom-1/2 md:right-0 md:-translate-y-1/2 lg:size-20 xl:bottom-0 xl:translate-x-1/2"
              />
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-br from-white from-0% via-red-50 via-50% to-purple-50 to-100%">
          <div className="section-container pb-8 pt-16 xl:pb-10 xl:pt-20">
            <div className="flex items-center justify-center md:justify-between">
              <div className="text-center text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-[40px] md:text-start xl:text-5xl">
                Browse By Book Types
              </div>
              <div className="hidden gap-5 lg:flex">
                <button
                  className={`group rounded-full border-2 border-solid border-primary-default p-3 shadow-lg shadow-primary-default/20 transition duration-300 hover:bg-primary-default`}
                  onClick={sliderRef.current?.slickPrev}
                >
                  <ArrowLeft
                    weight="bold"
                    size={24}
                    className="fill-primary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
                <button
                  className={`group rounded-full border-2 border-solid border-primary-default p-3 shadow-lg shadow-primary-default/20 transition duration-300 hover:bg-primary-default`}
                  onClick={sliderRef.current?.slickNext}
                >
                  <ArrowRight
                    weight="bold"
                    size={24}
                    className="fill-primary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
              </div>
            </div>
            <div className="-mx-4 mt-10 lg:mt-14">
              <Slider {...settings} ref={sliderRef}>
                {Object.entries(BOOK_TYPE_DATA).map(([type, data], index) => (
                  <div key={index} className="">
                    <div className="mx-auto mb-8 flex max-w-36 cursor-pointer flex-col items-center gap-6 rounded-lg bg-white px-6 py-4 shadow-xl shadow-blue-100 transition duration-300 hover:shadow-blue-200 sm:mx-4 sm:max-w-full sm:flex-row md:px-8 md:py-6">
                      <Image
                        src={data.icon}
                        alt={`${type} Icon`}
                        width={128}
                        height={128}
                        className="size-8"
                      />
                      <div className="text-center sm:text-start">
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
          <div className="section-container flex justify-between py-10 md:py-16 xl:py-20">
            <div className="flex w-full flex-col items-center justify-between gap-6 bg-gradient-to-r from-red-100 to-orange-100 px-10 py-12 md:flex-row md:gap-0">
              <Image
                src={"/assets/images/two-book.png"}
                alt={""}
                width={774}
                height={460}
                className="h-40 w-auto"
              />
              <div>
                <div className="text-center text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-[40px] md:text-start xl:text-5xl">
                  Books <span className="text-primary-default">50% off</span>{" "}
                  now!
                  <br />
                  Don&apos;t miss such a deal!
                </div>
                <div className="mt-5 flex justify-center gap-5 md:justify-start">
                  <button className="flex items-center gap-2 rounded-md border border-primary-default bg-primary-default px-3 py-2 font-semibold text-white shadow-primary-default/20 transition duration-300 hover:bg-orange-600 hover:shadow-lg">
                    Purchase Now
                  </button>
                  <button className="flex items-center gap-2 rounded-md border border-gray-900 bg-white px-3 py-2 font-semibold transition duration-300 hover:bg-gray-900 hover:text-white">
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
          <div className="section-container py-10 md:py-16 xl:py-20">
            <div className="flex flex-col justify-between md:flex-row">
              <div className="text-center text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-[40px] md:text-start xl:text-5xl">
                Popular Collections
              </div>
              <div className="flex flex-wrap items-center justify-center">
                {filterOptions.map((type) => (
                  <>
                    {type !== "All" && (
                      <span className="h-2 w-px border-l-2 border-gray-300"></span>
                    )}
                    <button
                      key={type}
                      onClick={() => setActiveType(type as BookType | "All")}
                      className={`px-3 py-2 text-xl font-medium transition duration-300 ${
                        activeType === type
                          ? "text-secondary-default"
                          : "text-gray-600 hover:text-secondary-default"
                      }`}
                    >
                      {type}
                    </button>
                  </>
                ))}
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {filteredBooks.slice(0, visibleBooks).map((book) => (
                <div
                  key={book.id}
                  className="mx-auto flex w-full max-w-72 flex-col items-center bg-white p-6 transition duration-300 hover:shadow-lg"
                >
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={300}
                    height={400}
                    className="mb-4 h-56 w-auto cursor-pointer rounded-md object-cover"
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
                    className="mb-2 line-clamp-1 cursor-pointer text-center font-semibold transition duration-300 hover:text-secondary-default"
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
                  className="mx-auto flex items-center gap-3 rounded-full bg-secondary-default px-6 py-2 text-white transition duration-300 hover:bg-green-600 hover:shadow-lg hover:shadow-secondary-default/20"
                >
                  <ArrowsClockwise size={20} className="fill-white" />
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
        <section className="bg-[#FFF3EB]">
          <div className="section-container py-10 md:py-16 xl:py-20">
            <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:gap-0 md:text-start">
              <div className="text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-[40px] xl:text-5xl">
                Why Choice
                <br />
                The <span className="text-primary-default">eDox</span> Bookshop
              </div>
              <div className="max-w-[450px] font-semibold leading-loose text-gray-700">
                Starting off in an eighteenth century London, this book invites
                readers to an exciting journey. The lifelong fight of main
                protagonist&apos;s crime solving. The life of his fight against
                the biggest villains,
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-between rounded-[64px] bg-white px-6 py-12 sm:px-20 lg:flex-row lg:px-28 lg:py-20">
              <div className="relative">
                <div className="absolute left-1/2 z-0 size-full shrink-0 -translate-x-1/2 rounded-full bg-primary-default lg:size-64" />
                <Image
                  src={"/assets/images/graduation.png"}
                  alt={""}
                  width={256}
                  height={256}
                  className="relative z-10 mx-auto size-56 lg:translate-x-1/3"
                />
              </div>
              <div className="flex flex-col items-center gap-6 lg:w-1/2 lg:items-start">
                <div className="mfont-bold text-center text-4xl leading-tight tracking-[-0.07em] sm:text-[40px] lg:text-start xl:text-5xl">
                  Expand your mind,{" "}
                  <span className="text-secondary-default">Reading</span> a book
                </div>
                <div className="text-center font-semibold text-gray-700 lg:text-start">
                  Starting off in an eighteenth century London, this book
                  invites readers to an exciting journey.
                </div>
                <div className="flex flex-wrap justify-center gap-5 sm:flex-nowrap">
                  <div className="flex shrink-0 cursor-pointer items-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-blue-600 shadow-xl shadow-blue-100 transition duration-300 hover:shadow-blue-200">
                    <Image
                      src={"/assets/icons/productivity.png"}
                      alt={""}
                      width={64}
                      height={64}
                      className="size-8"
                    />
                    Productivity
                  </div>
                  <div className="flex shrink-0 cursor-pointer items-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-orange-500 shadow-xl shadow-orange-100 transition duration-300 hover:shadow-orange-200">
                    <Image
                      src={"/assets/icons/puzzle.png"}
                      alt={""}
                      width={64}
                      height={64}
                      className="size-8"
                    />
                    Solution
                  </div>
                  <div className="flex shrink-0 cursor-pointer items-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-green-500 shadow-xl shadow-green-100 transition duration-300 hover:shadow-green-200">
                    <Image
                      src={"/assets/icons/skills.png"}
                      alt={""}
                      width={64}
                      height={64}
                      className="size-8"
                    />
                    Options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-to-tr from-green-50 from-0% via-yellow-50 via-50% to-purple-50 to-100%">
          <div className="section-container flex flex-col items-center py-10 md:py-16 xl:py-20">
            <div className="text-4xl font-bold leading-tight tracking-[-0.07em] sm:text-[40px] xl:text-5xl">
              Meet our Author
            </div>
            <div className="mt-8 text-center font-semibold text-gray-700">
              Education is the most powerful weapon which you can use to change
              the world. Leadership is not about a title or a designation.
              It&apos;s about impact, influence inspiration. Impact involves
              getting results
            </div>
            <div className="relative mt-10 w-full md:px-24">
              <Slider {...settingsAuthorSlider} ref={authorSliderRef}>
                {AUTHORS_LIST.map((author) => (
                  <div key={author.id} className="">
                    <div className="relative mx-auto mb-8 max-w-96 sm:mx-6">
                      <Image
                        src={author.image}
                        alt={`${author.name}`}
                        width={400}
                        height={500}
                        className="rounded-xl"
                      />
                      <div className="absolute top-0 size-full rounded-xl bg-gradient-to-t from-black/40 to-transparent"></div>
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pb-3 text-center text-white">
                        <div className="whitespace-nowrap text-lg font-bold">
                          {author.name}
                        </div>
                        <div className="text-sm font-light">
                          {author.description}
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-full flex w-5/6 -translate-x-1/2 -translate-y-1/2 justify-evenly gap-4 rounded-xl bg-white p-4 shadow-lg sm:w-auto xl:px-8">
                        <button className="rounded bg-secondary-default p-2 transition duration-300 hover:bg-green-600">
                          <PhoneCall
                            weight="fill"
                            size={isMd ? 20 : 28}
                            className="fill-white"
                          />
                        </button>
                        <button className="rounded bg-secondary-default p-2 transition duration-300 hover:bg-green-600">
                          <User
                            weight="fill"
                            size={isMd ? 20 : 28}
                            className="fill-white"
                          />
                        </button>
                        <button className="rounded bg-secondary-default p-2 transition duration-300 hover:bg-green-600">
                          <ChatCircleDots
                            weight="fill"
                            size={isMd ? 20 : 28}
                            className="fill-white"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="absolute left-0 top-1/2 hidden w-full -translate-y-1/2 justify-between md:flex">
                <button
                  className={`group rounded-full border-2 border-solid border-secondary-default p-3 shadow-lg shadow-secondary-default/20 transition duration-300 hover:bg-secondary-default`}
                  onClick={authorSliderRef.current?.slickPrev}
                >
                  <ArrowLeft
                    weight="bold"
                    size={24}
                    className="fill-secondary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
                <button
                  className={`group rounded-full border-2 border-solid border-secondary-default p-3 shadow-lg shadow-secondary-default/20 transition duration-300 hover:bg-secondary-default`}
                  onClick={authorSliderRef.current?.slickNext}
                >
                  <ArrowRight
                    weight="bold"
                    size={24}
                    className="fill-secondary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-default">
          <div className="section-container flex flex-col items-center justify-between gap-6 py-10 text-center text-white md:py-16 lg:flex-row lg:text-start">
            <div className="whitespace-nowrap text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
              50% Sale!
            </div>
            <div className="max-w-[70%] text-3xl font-bold leading-tight tracking-[-0.07em] lg:text-[40px] xl:text-5xl">
              Purchase your Selected item up to 50% Discount in every week
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="bg-[#191919]">
          <div className="section-container flex flex-wrap justify-center gap-6 py-12 lg:justify-between lg:gap-0">
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="rounded-md bg-primary-default px-3 py-1 text-2xl font-semibold text-white">
                  eB
                </div>
              </Link>
              <div className="max-w-80 text-white">
                Starting off in an eighteenth century London, this book invites
                readers to an exciting journey. The lifelong fight of main
                protagonist&apos;s crime solving.
              </div>
              <div className="flex gap-3">
                <button>
                  <FacebookLogo size={24} className="fill-white" />
                </button>
                <button>
                  <InstagramLogo size={24} className="fill-white" />
                </button>
                <button>
                  <DribbbleLogo size={24} className="fill-white" />
                </button>
                <button>
                  <BehanceLogo size={24} className="fill-white" />
                </button>
              </div>
            </div>
            {FOOTER_LINKS.map((column) => (
              <div key={column.title} className="shrink-0">
                <div className="text-lg font-bold text-secondary-default">
                  {column.title}
                </div>
                <div className="mt-8 flex flex-col items-start">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center py-1.5"
                    >
                      <div className="text-white/70 transition duration-150 hover:text-white">
                        {link.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex shrink-0 flex-col items-start gap-8">
              <div className="text-lg font-bold text-secondary-default">
                Contact Us
              </div>
              <div className="flex items-center gap-4">
                <button className="group rounded-md bg-white p-3 transition duration-300 hover:bg-secondary-default">
                  <PhoneCall
                    weight="fill"
                    size={26}
                    className="fill-secondary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
                <div className="text-white">
                  <div className="text-lg font-light">Call</div>
                  <div className="text-xl font-bold">+012 34-56789</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="group rounded-md bg-white p-3 transition duration-300 hover:bg-secondary-default">
                  <ChatCircleDots
                    weight="fill"
                    size={26}
                    className="fill-secondary-default transition duration-300 group-hover:fill-white"
                  />
                </button>
                <div className="text-white">
                  <div className="text-lg font-light">Call</div>
                  <div className="text-xl font-bold">+012 34-56789</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="section-container flex flex-col items-center justify-between gap-4 py-6 font-semibold md:flex md:flex-row">
            <div>©2023-All Rights Reserved</div>
            <div className="flex flex-col gap-6 text-center sm:flex-row">
              <Link href="/" className="hover:black transition duration-150">
                Terms And Condition
              </Link>
              <Link href={""} className="hover:black transition duration-150">
                Claim
              </Link>
              <Link href={""} className="hover:black transition duration-150">
                Privacy & policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
