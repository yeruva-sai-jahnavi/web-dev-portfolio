import React from "react";

function NavBar() {
    return (
        <nav
            className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
            id="mainNav"
        >
            <div className="container">
                <a className="navbar-brand" href="#page-top">
                    YSJ
                </a>
                <button
                    className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#header"
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#portfolio"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#skills"
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item mx-0 mx-lg-1">
                            <a
                                className="nav-link py-3 px-0 px-lg-3 rounded"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
function typingEffect() {
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["hard", "fun", "a journey", "LIFE"];
    const typingDelay = 300;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            if (!cursorSpan.classList.contains("typing"))
                cursorSpan.classList.add("typing");
            typedTextSpan.textContent +=
                textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            if (!cursorSpan.classList.contains("typing"))
                cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(
                0,
                charIndex - 1
            );
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    // document.addEventListener("DOMContentLoaded", function () {
    //     // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
    // });
}

function MastHead() {
    typingEffect();
    return (
        <header
            className="masthead bg-primary text-white text-center"
            id="header"
        >
            <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-upp mb-0">
                    <span className="text-light text-opacity-75">Hi, I'm </span>
                    Yeruva Sai Jahnavi
                </h1>
                <br />
                <p className="masthead-subheading font-weight-light mb-0 text-light text-opacity-50">
                    (It's a mouthful, I know.)
                </p>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    {/* <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div> */}
                    <div class="type-container">
                        <p>
                            Coding is <span class="typed-text"></span>
                            <span class="cursor">&nbsp;</span>
                        </p>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0 w-75">
                    I'm a full-stack web developer who loves to bring creative
                    ideas to life with a few keystrokes. My journey in web
                    development is fueled by my curiosity and a strong belief in
                    lifelong learning. I'm also diving into the world of AI and
                    machine learning, always eager to explore new horizons.
                    Let's create some digital magic together!
                </p>
                {/* <!-- About Section Button--> */}
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="#">
                        <i className="fas fa-download me-2"></i>
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
}

function PortfolioComp() {
    return (
        // <!-- Portfolio Section-->
        <section className="page-section portfolio" id="portfolio">
            <div className="container">
                {/* <!-- Portfolio Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Portfolio
                </h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Portfolio Grid Items--> */}
                <div className="row justify-content-center">
                    {/* <!-- Portfolio Item 1--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#URLShortener"
                        >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="assets/img/portfolio/url.png"
                                alt="..."
                            />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 2--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#Builderz"
                        >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="assets/img/portfolio/builderz.gif"
                                alt="..."
                            />
                        </div>
                    </div>
                    {/* <!-- Portfolio Item 3--> */}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div
                            className="portfolio-item mx-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#Calculator"
                        >
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white">
                                    <i className="fas fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img
                                className="img-fluid"
                                src="assets/img/portfolio/calculator.gif"
                                alt="..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function URLShortener() {
    return (
        // <!-- Portfolio Modal 1-->
        <div
            className="portfolio-modal modal fade"
            id="URLShortener"
            tabindex="-1"
            aria-labelledby="URLShortener"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        URL Shortener
                                    </h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img
                                        className="img-fluid rounded mb-5"
                                        src="assets/img/portfolio/url.png"
                                        alt="..."
                                    />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-4">
                                        Uses Django, HTML and CSS • Implemented
                                        URL shortening logic and database
                                        integration • Designed User Friendly
                                        Interface to input long URLs and
                                        generate shortened versions
                                    </p>
                                    <a
                                        href="https://github.com/yeruva-sai-jahnavi/url-shortener"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="btn btn-primary mx-2">
                                            <i className="fa-brands fa-github"></i>
                                            <span className="ms-2">
                                                View Code
                                            </span>
                                        </button>
                                    </a>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Builderz() {
    return (
        // <!-- Portfolio Modal 2-->
        <div
            className="portfolio-modal modal fade"
            id="Builderz"
            tabindex="-1"
            aria-labelledby="Builderz"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        Builderz
                                    </h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img
                                        className="img-fluid rounded mb-5"
                                        src="assets/img/portfolio/builderz.gif"
                                        alt="..."
                                    />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-4">
                                        Using HTML, CSS to build an attractive
                                        website for a Company 'Builderz'
                                    </p>
                                    <a
                                        href="https://github.com/yeruva-sai-jahnavi/mern-practice-2/blob/main/bs_task2.html"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="btn btn-primary mx-2">
                                            <i className="fa-brands fa-github"></i>
                                            <span className="ms-2">
                                                View Code
                                            </span>
                                        </button>
                                    </a>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Calculator() {
    return (
        // <!-- Portfolio Modal 3-->
        <div
            className="portfolio-modal modal fade"
            id="Calculator"
            tabindex="-1"
            aria-labelledby="Calculator"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0">
                        <button
                            className="btn-close"
                            type="button"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* <!-- Portfolio Modal - Title--> */}
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        Calculator
                                    </h2>
                                    {/* <!-- Icon Divider--> */}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon">
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    {/* <!-- Portfolio Modal - Image--> */}
                                    <img
                                        className="img-fluid rounded mb-5"
                                        src="assets/img/portfolio/calculator.gif"
                                        alt="..."
                                    />
                                    {/* <!-- Portfolio Modal - Text--> */}
                                    <p className="mb-4">
                                        Uses HTML, CSS, and JS. Built using the
                                        React Framework. Performs all the
                                        essential mathematical operations with
                                        an elegant UI
                                    </p>
                                    <button
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                    >
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Close Window
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    return (
        // <!-- Skills Section-->
        <section
            className="page-section bg-primary text-white mb-0"
            id="skills"
        >
            <div className="container">
                {/* <!-- Skills Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-white">
                    Skills
                </h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Skills Section Content--> */}
                <div className="row">
                    <div className="col-lg-3 ms-auto border border-3 rounded m-3 mt-0 py-3">
                        <h3 className="text-center">Frontend</h3>
                        <div className="lead d-flex flex-wrap justify-content-evenly">
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                ReactJS
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                JavaScript
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                HTML
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                CSS
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                Bootstrap
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 me-auto border border-3 rounded m-3 mt-0 py-3">
                        <h3 className="text-center">Backend</h3>
                        <div className="lead d-flex flex-wrap justify-content-evenly">
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                NodeJS
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                Django
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                MongoDB
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                Express
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                SQL
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 ms-auto border border-3 rounded m-3 mb-0 py-3">
                        <h3 className="text-center">Languages</h3>
                        <div className="lead d-flex flex-wrap justify-content-evenly">
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                C/C++
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                Java
                            </span>
                            <span class="badge rounded-pill text-bg-light bg-opacity-50 p-3 my-2">
                                Python
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-3 me-auto border border-3 rounded m-3 mb-0 py-3">
                        <h3 className="text-center">Dev Tools</h3>
                        <div className="lead d-flex flex-wrap justify-content-evenly">
                            <span class="badge rounded-pill bg-opacity-50 text-bg-light p-3 my-2">
                                VSCode
                            </span>
                            <span class="badge rounded-pill bg-opacity-50 text-bg-light p-3 my-2">
                                Git
                            </span>
                            <span class="badge rounded-pill bg-opacity-50 text-bg-light p-3 my-2">
                                GitHub
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function handleSubmit(e) {
    e.preventDefault();
    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = true;
    submitButton.innerText = "Message sent!";
}

function Contact() {
    return (
        // <!-- Contact Section-->
        <section className="page-section" id="contact">
            <div className="container">
                {/* <!-- Contact Section Heading--> */}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
                    Contact Me
                </h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                        <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* <!-- Contact Section Form--> */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <form
                            id="contactForm"
                            data-sb-form-api-token="API_TOKEN"
                        >
                            {/* <!-- Name input--> */}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name..."
                                    required
                                />
                                <label for="name">Full name</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="name:required"
                                >
                                    A name is required.
                                </div>
                            </div>
                            {/* <!-- Email address input--> */}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label for="email">Email address</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="email:required"
                                >
                                    An email is required.
                                </div>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="email:email"
                                >
                                    Email is not valid.
                                </div>
                            </div>
                            {/* <!-- Phone number input--> */}
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="phone"
                                    type="tel"
                                    placeholder="(123) 456-7890"
                                    required
                                />
                                <label for="phone">Phone number</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="phone:required"
                                >
                                    A phone number is required.
                                </div>
                            </div>
                            {/* <!-- Message input--> */}
                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    type="text"
                                    placeholder="Enter your message here..."
                                    style={{ height: "10rem" }}
                                    required
                                ></textarea>
                                <label for="message">Message</label>
                                <div
                                    className="invalid-feedback"
                                    data-sb-feedback="message:required"
                                >
                                    A message is required.
                                </div>
                            </div>
                            {/* <!-- Submit success message--> */}
                            {/* <!----> */}
                            {/* <!-- This is what your users will see when the form--> */}
                            {/* <!-- has successfully submitted--> */}
                            <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center mb-3">
                                    <div className="fw-bolder">
                                        Form submission successful!
                                    </div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">
                                        https://startbootstrap.com/solution/contact-forms
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Submit error message--> */}
                            {/* <!----> */}
                            {/* <!-- This is what your users will see when there is--> */}
                            {/* <!-- an error submitting the form--> */}
                            <div className="d-none" id="submitErrorMessage">
                                <div className="text-center text-danger mb-3">
                                    Error sending message!
                                </div>
                            </div>
                            {/* <!-- Submit Button--> */}
                            <button
                                className="btn btn-primary btn-xl"
                                id="submitButton"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                Send!
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        //<!-- Footer-->
        <footer className="footer text-center">
            <div className="container">
                <div className="row align-items-center">
                    {/* <!-- Footer Location--> */}
                    <div className="col-lg-6 mb-5 mb rounded m-3-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">Hyderabad, Telangana</p>
                    </div>
                    {/* <!-- Footer Social Icons--> */}
                    <div className="col-lg-6 mb-5 mb rounded m-3-lg-0">
                        <h5>Made with &hearts; by Yeruva Sai Jahnavi</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Portfolio() {
    return (
        <div>
            <NavBar />
            <MastHead />
            <PortfolioComp />
            <URLShortener />
            <Builderz />
            <Calculator />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default Portfolio;
