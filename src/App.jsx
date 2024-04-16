import { Helmet, HelmetProvider } from "react-helmet-async";
import useLazyImage from "./hooks/useLazyImage";
import logoImg from "./assets/logo.svg";
import rocketImg from "./assets/rocket.png";
import earthImg from "./assets/earth.png";
import earthImgPlaceholder from "./assets/earth-placeholder.png";
import "./App.scss";

// Mock data
import { offersData } from "./data/offers.json";

function App() {
  return (
    <HelmetProvider>
      <div className="page" role="main">
        <Helmet>
          <title>Discover Space - Embark on a Space Journey</title>
          <meta
            name="description"
            content="Join us to explore the vast expanses of space and experience the endless possibilities. Discover planets, stars, and galaxies."
          />
          <meta name="robots" content="index, follow" />
          <meta
            property="og:title"
            content="Discover Space - Embark on a Space Journey"
          />
          <meta
            property="og:description"
            content="Join us to explore the vast expanses of space and experience the endless possibilities. Discover planets, stars, and galaxies."
          />
        </Helmet>

        <Header />

        <main aria-label="Main Content">
          <HeroSection />
          <section className="page-section" aria-labelledby="offers-title">
            <div className="global-container">
              <h3 id="offers-title" className="page-section__title">
                Offers
              </h3>
              <div className="offers">
                {offersData?.map(
                  ({
                    id,
                    title,
                    description,
                    imageUrl,
                    placeholderUrl,
                    linkUrl,
                  }) => (
                    <OfferItem
                      key={id}
                      {...{
                        title,
                        description,
                        imageUrl,
                        placeholderUrl,
                        linkUrl,
                      }}
                    />
                  )
                )}
              </div>
            </div>
          </section>

          <section
            className="page-section"
            aria-labelledby="space-journey-title"
          >
            <div className="global-container">
              <h3 id="space-journey-title" className="page-section__title">
                Embark on a space journey
              </h3>
              <div className="promo-text">
                <input
                  type="checkbox"
                  id="expand-trigger"
                  className="promo-text__expand-trigger"
                />
                <div className="promo-text__expandable-content">
                  Traveling into space is one of the most exciting and
                  unforgettable adventures that can change your life forever.
                  And if you have ever dreamed of exploring stars, planets and
                  galaxies, then our company is ready to help you realize this
                  dream. We offer a unique experience that will allow you to go
                  on a space journey and see all the secrets of the universe. We
                  guarantee that every moment in space will be filled with
                  incredible impressions, excitement and new discoveries. Our
                  team of professionals takes care of your safety and comfort so
                  that you can fully enjoy your adventure in space. We offer
                  various options for space excursions. Traveling into space is
                  one of the most exciting and unforgettable adventures that can
                  change your life forever. And if you have ever dreamed of
                  exploring stars, planets and galaxies, then our company is
                  ready to help you realize this dream. We offer a unique
                  experience that will allow you to go on a space journey and
                  see all the secrets of the universe. We guarantee that every
                  moment in space will be filled with incredible impressions,
                  excitement and new discoveries. Our team of professionals
                  takes care of your safety and comfort so that you can fully
                  enjoy your adventure in space. We offer various options for
                  space excursions.
                </div>
                <label
                  htmlFor="expand-trigger"
                  className="promo-text__expand-label"
                >
                  <span className="expand">Learn more</span>
                  <span className="collapse">Learn less</span>
                </label>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

function Header() {
  return (
    <header role="banner" className="header">
      <div className="global-container">
        <div className="header__inner">
          <a href="/" aria-label="Home" className="header__logo">
            <img src={logoImg} alt="loGO" className="header__logo-img" />
          </a>

          <input type="checkbox" id="menu-checkbox" className="menu-checkbox" />
          <label htmlFor="menu-checkbox" className="burger-menu">
            <svg
              className="burder-menu__closed"
              width="32"
              height="38"
              viewBox="0 0 32 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_80_40)">
                <path
                  d="M4.75 11.0212H27.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4.75 18.8934H27.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M4.75 26.7657H27.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_80_40"
                  x="0"
                  y="10.2712"
                  width="32"
                  height="25.2446"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_80_40"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_80_40"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              className="burder-menu__opened"
              width="33"
              height="38"
              viewBox="0 0 33 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_80_34)">
                <line
                  x1="5.40561"
                  y1="27.1958"
                  x2="28.4056"
                  y2="10.1958"
                  stroke="white"
                  strokeWidth="2"
                />
                <line
                  x1="28.4289"
                  y1="26.8209"
                  x2="5.42894"
                  y2="10.8209"
                  stroke="white"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_80_34"
                  x="0.811035"
                  y="9.39166"
                  width="32.189"
                  height="26.6083"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_80_34"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_80_34"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </label>

          <nav className="header__nav" id="navigation" role="navigation">
            <a href="/" className="header__nav-link">
              Home
            </a>
            <a href="/products" className="header__nav-link">
              Products
            </a>
            <a href="/cart" className="header__nav-link" aria-label="View Cart">
              <svg
                className="cart-icon"
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"
                  fill="url(#paint0_linear_16_42)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_16_42"
                    x1="8"
                    y1="4"
                    x2="19"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" className="cart-icon__stop-1" />
                    <stop
                      offset="1"
                      stopColor="white"
                      className="cart-icon__stop-2"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const imageUrlLoaded = useLazyImage("./hero.jpg", "./hero-placeholder.jpg");
  const heroSectionStyle = {
    background: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) -0.52%,
      rgba(15, 20, 32, 0.79) 99.48%
    ),
    url(${imageUrlLoaded}) center/cover no-repeat, var(--black)`,
  };

  const earthUrlLoaded = useLazyImage(earthImg, earthImgPlaceholder);

  return (
    <section
      style={heroSectionStyle}
      className="hero"
      role="banner"
      aria-labelledby="hero-title"
      tabIndex="-1"
    >
      <div className="hero-container global-container">
        <img
          src={earthUrlLoaded}
          width={330}
          height={370}
          alt="Earth image"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 id="hero-title" className="hero__title">
            Discover the vast expanses of{" "}
            <span className="text-pink">space</span>
          </h1>
          <p className="hero__description">
            Where the possibilities are{" "}
            <span className="text-yellow">endless!</span>
          </p>
          <button className="hero__button button button--primary">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

function OfferItem({ title, description, imageUrl, placeholderUrl, linkUrl }) {
  const imageUrlLoaded = useLazyImage(imageUrl, placeholderUrl);
  const offerItemStyle = {
    background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(15, 20, 32, 0.79) 100%), url(${imageUrlLoaded}) center/cover no-repeat, var(--black)`,
  };
  return (
    <article
      style={offerItemStyle}
      className="offers__item"
      aria-labelledby={`title-${title}`}
      tabIndex="0"
    >
      <h3 id={`title-${title}`} className="offers__item-title">
        {title}
      </h3>
      <p className="offers__item-description">{description}</p>
      <a href={linkUrl} className="button button--outline">
        Learn more
      </a>
    </article>
  );
}

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="global-container">
        <div className="footer__inner">
          <div className="footer__icon">
            <img src={rocketImg} width={67} height={58} alt="Rocket image" />
          </div>
          <div className="footer__text">Exciting space adventure!</div>
        </div>
      </div>
    </footer>
  );
}

export default App;
