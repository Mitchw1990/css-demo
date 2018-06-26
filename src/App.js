import React, {Component} from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label for="navi-toggle" className="navigation__button">
            MENU
          </label>
          <div className="navigation__background">
            &nbsp;
          </div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                   About Natours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                   Your Benefits
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Popular Tours
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Stories
                </a>
              </li>
              <li className="navigation__item">
                <a href="#" className="navigation__link">
                  Book Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <header className="header">
          <div className="header__logo-box">
            <img className="header__logo" src={require("./img/logo-white.png")} alt="Logo"/>
          </div>
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Outdoors</span>
              <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">Discover Our Tours</a>
          </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-lg">
              <h2 className="heading-secondary">
                Exciting Tours for Adventurous People
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-sm">
                  You're going to fall in love with nature
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae consequatur dolorum facilis fugit hic incidunt iure modi
                  necessitatibus quas recusandae reprehenderit sit, voluptatum.
                  Atque blanditiis commodi eius facilis officia voluptatem.
                </p>
                <h3 className="heading-tertiary u-margin-bottom-sm">
                  Live adventures like you never have before
                </h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                  aliquid beatae blanditiis, consectetur distinctio eum incidunt itaque,
                  iusto laborum maiores modi nam nobis officiis placeat, quae quidem quod
                  reprehenderit voluptas.
                </p>
                <a href="#" className="btn-text">
                  Learn more &rarr;
                </a>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img src={require("./img/nat-1-large.jpg")}
                       alt="img1"
                       className="composition__photo composition__photo--p1"/>
                  <img src={require("./img/nat-2-large.jpg")}
                       alt="img2"
                       className="composition__photo composition__photo--p2"/>
                  <img src={require("./img/nat-3-large.jpg")}
                       alt="img3"
                       className="composition__photo composition__photo--p3"/>
                </div>
              </div>
            </div>
          </section>
          <section className="section-features">
            <div className="row">
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-world"/>
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Explore the world
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-compass"/>
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Meet Nature
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-map"/>
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Find Your Way
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate.
                  </p>
                </div>
              </div>
              <div className="col-1-of-4">
                <div className="feature-box">
                  <i className="feature-box__icon icon-basic-heart"/>
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    Live a Healthier Life
                  </h3>
                  <p className="feature-box__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section-tours">
            <div className="u-center-text u-margin-bottom-lg">
              <h2 className="heading-secondary">
                Most Popular Tours
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--1">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">
                                                The Sea Explorer
                                            </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>3 day tour</li>
                        <li>Up to 30 people</li>
                        <li>2 tour guides</li>
                        <li>Sleep in cozy hotels</li>
                        <li>Difficulty: easy</li>
                      </ul>

                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-1">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Only
                        </p>
                        <p className="card__price-value">
                          $297
                        </p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--2">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--2">
                                                The Forest Hiker
                                            </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>7 day tour</li>
                        <li>Up to 40 people</li>
                        <li>6 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: medium</li>
                      </ul>

                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-2">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Only
                        </p>
                        <p className="card__price-value">
                          $497
                        </p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1-of-3">
                <div className="card">
                  <div className="card__side card__side--front">
                    <div className="card__picture card__picture--3">
                      &nbsp;
                    </div>
                    <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--3">
                                                The Snow Adventurer
                                            </span>
                    </h4>
                    <div className="card__details">
                      <ul>
                        <li>5 day tour</li>
                        <li>Up to 15 people</li>
                        <li>3 tour guides</li>
                        <li>Sleep in provided tents</li>
                        <li>Difficulty: hard</li>
                      </ul>
                    </div>
                  </div>
                  <div className="card__side card__side--back card__side--back-3">
                    <div className="card__cta">
                      <div className="card__price-box">
                        <p className="card__price-only">
                          Only
                        </p>
                        <p className="card__price-value">
                          $897
                        </p>
                      </div>
                      <a href="#" className="btn btn--white">
                        Book now!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-xl">
              <a href="#" className="btn btn--green">
                Discover all tours
              </a>
            </div>
          </section>
          <section className="section-stories">
            <div className="background-video">
              <video className="background-video__content" autoPlay muted loop>
                <source src={require("./img/video.mp4")} type="video/mp4"/>
                <source src={require("./img/video.webm")} type="video/webm"/>
                Your browser is not supported.
              </video>
            </div>
            <div className="u-center-text u-margin-bottom-lg">
              <h2 className="heading-secondary">
                We make people genuinely happy
              </h2>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img className="story__img" src={require("./img/nat-8.jpg")} alt="person on tour"/>
                  <figcaption className="story__caption">
                    Mary Smith
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    I had the best week ever with my family
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa
                    fuga hic illo,
                    maiores neque nesciunt non optio quasi quos sapiente ut veniam! Aliquid
                    exercitationem impedit
                    reiciendis tenetur vero. maiores neque nesciunt non optio quasi quos sapiente ut
                    veniam!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="story">
                <figure className="story__shape">
                  <img className="story__img" src={require("./img/nat-9.jpg")} alt="person on tour"/>
                  <figcaption className="story__caption">
                    Jack Wilson
                  </figcaption>
                </figure>
                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom-sm">
                    wow! My life is completely different now
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa
                    fuga hic illo,
                    maiores neque nesciunt non optio quasi quos sapiente ut veniam! Aliquid
                    exercitationem impedit
                    reiciendis tenetur vero. maiores neque nesciunt non optio quasi quos sapiente ut
                    veniam!
                  </p>
                </div>
              </div>
            </div>
            <div className="u-center-text u-margin-top-xl">
              <a href="#" className="btn-text">
                Read all stories &rarr;
              </a>
            </div>
          </section>
          <section className="section-booking">
            <div className="row">
              <div className="booking">
                <div className="booking__form">
                  <form action="#" className="form">
                    <h2 className="heading-secondary u-margin-bottom-md">
                      Start booking now
                    </h2>
                    <div className="form__group">
                      <input type="text"
                             className="form__input"
                             placeholder="Full Name"
                             id="name"
                             required
                      />
                      <label htmlFor="name" className="form__label">
                        Full Name
                      </label>
                    </div>
                    <div className="form__group">
                      <input type="email"
                             className="form__input"
                             placeholder="Email Address"
                             id="email"
                             required
                      />
                      <label htmlFor="email" className="form__label">
                        Email Address
                      </label>
                    </div>
                    <div className="form__group u-margin-bottom-md">
                      <div className="form__radio-group">
                        <input type="radio"
                               className="form__radio-input"
                               id="small"
                               name="size"
                        />
                        <label htmlFor="small" className="form__radio-label">
                          <span className="form__radio-button"/>
                          Small tour group
                        </label>
                      </div>
                      <div className="form__radio-group">
                        <input type="radio"
                               className="form__radio-input"
                               id="large"
                               name="size"
                        />
                        <label htmlFor="large" className="form__radio-label">
                          <span className="form__radio-button"/>
                          Large tour group
                        </label>
                      </div>
                    </div>
                    <div className="form__group">
                      <button className="btn btn--green">
                        Next step &rarr;
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="footer__logo-box">
            <img src={require("./img/logo-green-1x.png")}
                 alt="Full logo"
                 className="footer_logo"
            />
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#" className="footer__link">Company</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">Contact us</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">Careers</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">Privacy policy</a>
                  </li>
                  <li className="footer__item">
                    <a href="#" className="footer__link">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-1-of-2">
              <p className="footer__copyright">
                Built by&nbsp;
                <a href="#" className="footer__link">Mitch Warrenburg</a>&nbsp;
                for his online course&nbsp;
                <a href="#" className="footer__link">Advanced CSS and Sass</a>.&nbsp;
                Copyright &copy by Mitch Warrenburg
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
