export default class UI {
    static header() {
        return `
            <header class="header-section">
            <nav class="navbar nav">
            <i class="menu-icon fa-solid fa-bars mobile-only"></i>
            <section class="nav-popup mobile-only">
                <ul class="nav-popup-list">
                <a href="#" class="nav-popup-list-link">
                    <li class="nav-popup-list-item active-page"> Home</li>
                </a>
                <a href="#" id="about">class="nav-popup-list-link">
                    <li class="nav-popup-list-item"> About</li>
                </a>
                <a href="#" class="nav-popup-list-link">
                    <li class="nav-popup-list-item"> Program</li>
                </a>
                <a href="#" class="nav-popup-list-link">
                    <li class="nav-popup-list-item"> Join</li>
                </a>
                <a href="#" class="nav-popup-list-link">
                    <li class="nav-popup-list-item"> Sponsor</li>
                </a>
                <a href="#" class="nav-popup-list-link">
                    <li class="nav-popup-list-item"> News</li>
                </a>
                </ul>
            </section>
            <section class="nav-desktop desktop-only">
                <ul class="nav-links-list">
                <div class="nav-links-list-logo">
                    <a href="#" id="logo" class="nav-links-list-logo-link">
                    <li class="nav-links-list-item">
                        <img
                        src="../assets/images/favicon/android-chrome-192x192.png"
                        alt="codingCon logo"
                        class="nav-links-list-logo"
                        height="80px"
                        />
                    </li>
                    </a>
                </div>
                <div class="nav-links-list">
                    <a href="#" class="nav-links-list-link">
                    <li id="about" class="nav-links-list-item">About</li>
                    </a>
                    <a href="#" class="nav-links-list-link">
                    <li class="nav-links-list-item">Program</li>
                    </a>
                    <a href="#" class="nav-links-list-link">
                    <li class="nav-links-list-item">Join</li>
                    </a>
                    <a href="#" class="nav-links-list-link">
                    <li class="nav-links-list-item">Sponsor</li>
                    </a>
                    <a href="#" class="nav-links-list-link">
                    <li class="nav-links-list-item">News</li>
                    </a>
                </div>
                </ul>
            </section>
            </nav>
        </header>
       `
    }

    static main() {
            return `
            <main class="main">
                <section class="main-intro">
                <p class="main-intro-preheading">"Hello World!"</p>
                <h1 class="main-intro-heading">
                    CodingCon <br />
                    2023
                </h1>
                <p class="main-intro-description">
                    CodingCon is an annual conference for developers and designers to
                    learn about the latest trends in the industry. We are excited to
                    announce that the 2023 edition will be held in the beautiful city of
                    New York. We hope to see you there!
                </p>
        
                <h2 class="main-intro-date">2023.10.20(FRI) ~ 22(SUN)</h2>
                <p class="main-intro-location">@ New York, USA</p>
                </section>
        
                <section class="main-main-program">
                <h2 class="main-main-program-heading">Main Program</h2>
                <hr class="main-main-program-hr hr-orange" />
        
                <article class="main-main-program-programs">
                    <div class="main-main-program-programs-program">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    <h3 class="main-main-program-programs-program-heading">Keynote</h3>
                    <p class="main-main-program-programs-program-description">
                        Listen to the speakers from various countries about the messages
                        of sharing and opening.
                    </p>
                    </div>
        
                    <div class="main-main-program-programs-program">
                    <i class="fa-solid fa-store"></i>
                    <h3 class="main-main-program-programs-program-heading">
                        Exhibition
                    </h3>
                    <p class="main-main-program-programs-program-description">
                        Listen to the speakers from various countries about the messages
                        of sharing and opening.
                    </p>
                    </div>
        
                    <div class="main-main-program-programs-program">
                    <i class="fa-solid fa-comment"></i>
                    <h3 class="main-main-program-programs-program-heading">Forum</h3>
                    <p class="main-main-program-programs-program-description">
                        Listen to the speakers from various countries about the messages
                        of sharing and opening.
                    </p>
                    </div>
        
                    <div class="main-main-program-programs-program">
                    <i class="fa-solid fa-laptop"></i>
                    <h3 class="main-main-program-programs-program-heading">Workshop</h3>
                    <p class="main-main-program-programs-program-description">
                        Listen to the speakers from various countries about the messages
                        of sharing and opening.
                    </p>
                    </div>
                </article>
        
                <a href="#" class="main-main-program-more-link desktop-only">
                    <p class="main-main-program-more-link-text">SEE THE WHOLE PROGRAM</p>
                </a>
        
                <button class="main-main-program-button btn mobile-only">
                    Join CodingCon 2023
                </button>
                </section>
        
                <section class="main-featured-speakers">
                <h2 class="main-featured-speakers-heading">Features Speakers</h2>
                <hr class="main-featured-speakers-hr hr-orange" />
                <article class="main-featured-speakers-speakers"></article>
                </section>
        
                <section class="about-partners desktop-only">
                <h2 class="about-partners-heading">Partner</h2>
                <hr class="about-partners-hr hr-orange" />
        
                <article class="about-partners-list">
                    <a
                    href="https://www.airbnb.com"
                    target="_blank"
                    class="about-partners-list-link"
                    >
                    <img
                        src="../assets/partners/airbnb.png"
                        alt="airbnb logo"
                    />
                    </a>
                    <a
                    href="https://www.google.com"
                    target="_blank"
                    class="about-partners-list-link"
                    >
                    <img
                        src="../assets/partners/google.png"
                        alt="google logo"
                    />
                    </a>
                    <a
                    href="https://www.facebook.com/Meta"
                    target="_blank"
                    class="about-partners-list-link"
                    >
                    <img src="../assets/partners/meta.png" alt="meta logo" />
                    </a>
                    <a
                    href="https://www.microsoft.com"
                    target="_blank"
                    class="about-partners-list-link"
                    >
                    <img
                        src="../assets/partners/microsoft.png"
                        alt="microsoft logo"
                    />
                    </a>
                    <a
                    href="https://www.mozilla.org"
                    target="_blank"
                    class="about-partners-list-link"
                    >
                    <img
                        src="../assets/partners/mozilla.webp"
                        alt="mozilla logo"
                    />
                    </a>
                </article>
                </section>
        
                <section class="about-attribution desktop-only">
                <img
                    src="../assets/cc-logo.png"
                    alt="creative commons logo"
                />
                <div class="about-attribution-text-div">
                    <p class="about-attribution-text">
                    Design by
                    <a href="https://www.behance.net/adagio07" target="_blank"
                        >Cindy Shin</a
                    >
                    </p>
                    <p class="about-attribution-text">
                    Developed by
                    <a href="https://github.com/roniy68" target="_blank"
                        >AH Rony</a
                    >
                    </p>
                </div>
                </section>
            </main>
        `
    }

    static about() {
        return `
            <section class="about-main-intro main-intro">
            <p class="main-intro-preheading about-intro-preheading">
            "Hello World!"
            </p>
            <h1 class="main-intro-heading about-intro-heading">CodingCon 2023</h1>
            <p class="about-intro-description">
            CodingCon brings together the world's leading experts, developers,
            designers, and business leaders who are shaping the future of
            technology. Join us for three days of inspiration, learning, and
            connection. We can't wait to see you in 2023!
            <br /><br /><br /><br />
            Please contact us via email @<a href="mailto:codingcon@codingcon.org"
                >codingCon@codingCon.org</a
            >
            for any further questions.
            </p>
        </section>

        <section class="about-codingcon-logo desktop-only">
            <h2 class="about-codingcon-logo-heading">CodingCon logo 2023</h2>
            <hr class="about-codingcon-logo-hr hr-orange" />
            <p class="about-codingcon-logo-description">
            The logo of CodingCon 2023 was decided through a competition among
            designers from all over the world. The logo was decided based on the
            logo competition's results.
            </p>
            <img
            class="about-codingcon-logo-img"
            src="../assets/images/codingConLogo.png"
            alt="codingCon logo"
            />
        </section>

        <section class="about-past-codingcons">
            <h2 class="about-past-codingcons-heading">See the past CodingCons</h2>
            <hr class="about-past-codingcons-hr hr-orange" />

            <article class="about-past-codingcons-list">
            <div class="about-past-codingcons-list-codingcon" id="year2022">
                <h2 class="year">2022</h2>
                <h3 class="place">London</h3>
            </div>
            <div class="about-past-codingcons-list-codingcon" id="year2021">
                <h2 class="year">2021</h2>
                <h3 class="place">Tokyo</h3>
            </div>
            <div class="about-past-codingcons-list-codingcon" id="year2020">
                <h2 class="year">2020</h2>
                <h3 class="place">Dubai</h3>
            </div>
            </article>
        </section>

        <section class="about-partners mobile-only">
            <h2 class="about-partners-heading">Partner</h2>
            <hr class="about-partners-hr hr-orange" />
            <article class="about-partners-list">
            <a
                href="https://www.airbnb.com"
                target="_blank"
                class="about-partners-list-link"
            >
                <img
                src="../assets/images/partners/airbnb.png"
                alt="airbnb logo"
                />
            </a>
            <a
                href="https://www.google.com"
                target="_blank"
                class="about-partners-list-link"
            >
                <img
                src="../assets/images/partners/google.png"
                alt="google logo"
                />
            </a>
            <a
                href="https://www.facebook.com/Meta"
                target="_blank"
                class="about-partners-list-link"
            >
                <img src="../assets/images/partners/meta.png" alt="meta logo" />
            </a>
            <a
                href="https://www.microsoft.com"
                target="_blank"
                class="about-partners-list-link"
            >
                <img
                src="../assets/images/partners/microsoft.png"
                alt="microsoft logo"
                />
            </a>
            <a
                href="https://www.mozilla.org"
                target="_blank"
                class="about-partners-list-link"
            >
                <img
                src="../assets/images/partners/mozilla.webp"
                alt="mozilla logo"
                />
            </a>
            </article>
        </section>

        <section class="about-attribution">
            <img
            class="mobile-only"
            src="../assets/images/cc-logo.png"
            alt="creative commons logo"
            />
            <img
            class="desktop-only"
            src="../assets/images/cc-logo-white.png"
            alt="creative commons logo"
            />
            <div class="about-attribution-text-div">
            <p class="about-attribution-text">
                Design by
                <a href="https://www.behance.net/adagio07" target="_blank"
                >Cindy Shin</a
                >
            </p>
            <p class="about-attribution-text">
                Developed by
                <a href="https://github.com/roniy68" target="_blank"
                >AH Rony</a
                >
            </p>
            </div>
        </section>     
        `
    }

}