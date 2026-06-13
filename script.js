/* ==================================================
   ALIYA BOOK PUBLICATION
   script.js
   Popup + Language Toggle + Mobile Navbar
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       FRAUD ALERT POPUP
    ========================================== */

    const popup = document.getElementById("fraudPopup");
    const closePopup = document.getElementById("closePopup");

    // Close Popup
    if (closePopup && popup) {
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }


    /* ==========================================
       LANGUAGE TOGGLE
    ========================================== */

    const englishBtn = document.getElementById("englishBtn");
    const hindiBtn = document.getElementById("hindiBtn");

    const englishContent = document.getElementById("englishContent");
    const hindiContent = document.getElementById("hindiContent");

    // English
    if (englishBtn) {
        englishBtn.addEventListener("click", function () {

            englishContent.style.display = "block";
            hindiContent.style.display = "none";

            englishBtn.classList.add("active");
            hindiBtn.classList.remove("active");

        });
    }

    // Hindi
    if (hindiBtn) {
        hindiBtn.addEventListener("click", function () {

            englishContent.style.display = "none";
            hindiContent.style.display = "block";

            hindiBtn.classList.add("active");
            englishBtn.classList.remove("active");

        });
    }


    /* ==========================================
       MOBILE NAVIGATION MENU
    ========================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            // Icon Change
            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
            } else {
                menuToggle.innerHTML = "☰";
            }

        });

    }


    /* ==========================================
       AUTO CLOSE MENU AFTER CLICK
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                navMenu.classList.remove("active");

                if (menuToggle) {
                    menuToggle.innerHTML = "☰";
                }

            }

        });

    });


    /* ==========================================
       CLOSE MENU ON WINDOW RESIZE
    ========================================== */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            navMenu.classList.remove("active");

            if (menuToggle) {
                menuToggle.innerHTML = "☰";
            }

        }

    });

});
/* ==========================================
   PROJECTS SECTION JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       SCROLL ANIMATION
    ========================= */

    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show-card");

            }

        });

    }, {
        threshold: 0.15
    });

    projectCards.forEach(function(card){

        card.classList.add("hide-card");

        observer.observe(card);

    });


    /* =========================
       APPLY BUTTON CLICK EFFECT
    ========================= */

    const applyButtons = document.querySelectorAll(".project-btn");

    applyButtons.forEach(function(button){

        button.addEventListener("click", function(){

            button.classList.add("clicked");

            setTimeout(function(){

                button.classList.remove("clicked");

            }, 300);

        });

    });

});
/* ==========================================
   HOW IT WORKS SECTION JAVASCRIPT
   Add this code at the end of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       STEP CARDS SCROLL ANIMATION
    ========================================== */

    const stepCards = document.querySelectorAll(".step-card");
    const trustCards = document.querySelectorAll(".trust-card");

    const observerOptions = {
        threshold: 0.15
    };

    const cardObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show-animation");

                cardObserver.unobserve(entry.target);
            }

        });

    }, observerOptions);


    /* Observe Step Cards */
    stepCards.forEach(function(card){

        card.classList.add("hidden-animation");

        cardObserver.observe(card);

    });


    /* Observe Trust Cards */
    trustCards.forEach(function(card){

        card.classList.add("hidden-animation");

        cardObserver.observe(card);

    });

});
/* ==========================================
   ABOUT US SECTION JAVASCRIPT
   Add this code at the end of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       ABOUT SECTION SCROLL ANIMATION
    ========================================== */

    const aboutContent = document.querySelector(".about-content");
    const missionCards = document.querySelectorAll(
        ".mission-card, .vision-card"
    );
    const statCards = document.querySelectorAll(".stat-card");

    const aboutObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("about-show");

                aboutObserver.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });


    /* About Content */
    if (aboutContent) {

        aboutContent.classList.add("about-hidden");

        aboutObserver.observe(aboutContent);
    }


    /* Mission & Vision Cards */
    missionCards.forEach(function(card){

        card.classList.add("about-hidden");

        aboutObserver.observe(card);

    });


    /* Stats Cards */
    statCards.forEach(function(card){

        card.classList.add("about-hidden");

        aboutObserver.observe(card);

    });

});
/* ==========================================
   REVIEWS SECTION JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       REVIEW CARDS SCROLL ANIMATION
    ========================================== */

    const reviewCards = document.querySelectorAll(".review-card");

    const reviewObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("review-show");

                reviewObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    /* Observe Each Review Card */
    reviewCards.forEach(function(card){

        card.classList.add("review-hidden");

        reviewObserver.observe(card);

    });


    /* ==========================================
       OPTIONAL: STAGGERED ANIMATION DELAY
    ========================================== */

    reviewCards.forEach(function(card, index){

        card.style.transitionDelay = (index * 0.1) + "s";

    });

});
/* ==========================================
   FAQ SECTION JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* Select all FAQ Questions */
    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function(question){

        question.addEventListener("click", function(){

            const currentItem = this.parentElement;
            const currentIcon = this.querySelector(".faq-icon");

            /* Close all other FAQs */
            faqQuestions.forEach(function(item){

                const faqItem = item.parentElement;
                const icon = item.querySelector(".faq-icon");

                if(faqItem !== currentItem){

                    faqItem.classList.remove("active");

                    icon.textContent = "+";

                }

            });

            /* Toggle Current FAQ */
            currentItem.classList.toggle("active");

            if(currentItem.classList.contains("active")){

                currentIcon.textContent = "−";

            }else{

                currentIcon.textContent = "+";

            }

        });

    });

});
/* ==========================================
   CONTACT US SECTION JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       CONTACT CARDS SCROLL ANIMATION
    ========================================== */

    const contactCards = document.querySelectorAll(".contact-card");

    const contactObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("contact-show");

                contactObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    /* Observe Contact Cards */
    contactCards.forEach(function(card, index){

        card.classList.add("contact-hidden");

        /* Stagger Animation Delay */
        card.style.transitionDelay = (index * 0.1) + "s";

        contactObserver.observe(card);

    });


    /* ==========================================
       BUTTON CLICK EFFECT
    ========================================== */

    const contactButtons = document.querySelectorAll(".contact-btn");

    contactButtons.forEach(function(button){

        button.addEventListener("click", function(){

            button.classList.add("contact-clicked");

            setTimeout(function(){

                button.classList.remove("contact-clicked");

            }, 200);

        });

    });

});
/* ==========================================
   PRIVACY POLICY JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       PRIVACY POLICY SCROLL ANIMATION
    ========================================== */

    const privacyCards = document.querySelectorAll(".privacy-card");

    const privacyObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("privacy-show");

                privacyObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    /* Observe Privacy Cards */
    privacyCards.forEach(function(card, index){

        card.classList.add("privacy-hidden");

        /* Stagger Effect */
        card.style.transitionDelay = (index * 0.1) + "s";

        privacyObserver.observe(card);

    });

});
/* ==========================================
   TERMS & CONDITIONS JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       TERMS & CONDITIONS SCROLL ANIMATION
    ========================================== */

    const termsCards = document.querySelectorAll(".terms-card");

    const termsObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("terms-show");

                termsObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    /* Observe Terms Cards */
    termsCards.forEach(function(card, index){

        card.classList.add("terms-hidden");

        /* Stagger Animation Delay */
        card.style.transitionDelay = (index * 0.1) + "s";

        termsObserver.observe(card);

    });

});
/* ==========================================
   FOOTER JAVASCRIPT
   Add this code at the END of script.js
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       FOOTER FADE-IN ANIMATION
    ========================================== */

    const footerColumns = document.querySelectorAll(".footer-column");

    const footerObserver = new IntersectionObserver(function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("footer-show");

                footerObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    /* Observe Footer Columns */
    footerColumns.forEach(function(column, index){

        column.classList.add("footer-hidden");

        /* Stagger Effect */
        column.style.transitionDelay = (index * 0.1) + "s";

        footerObserver.observe(column);

    });


    /* ==========================================
       SMOOTH SCROLL FOR FOOTER LINKS
    ========================================== */

    const footerLinks = document.querySelectorAll('.footer a[href^="#"]');

    footerLinks.forEach(function(link){

        link.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if(targetSection){

                e.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});