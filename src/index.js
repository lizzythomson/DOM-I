const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

const navItems = document.querySelectorAll("header a");

navItems.forEach((item, index) => {
  item.className = "italic";
  item.textContent = siteContent.nav[`nav-item-${index}`];
});

const companyLogo = document.querySelector("#logo-img");

companyLogo.src = "../src/mocks/img/logo.png";

const headerContent = document.querySelector(".cta-text");

const headerTitle = headerContent.querySelector("h1");
const headerButton = headerContent.querySelector("button");

headerTitle.textContent = siteContent.cta["h1"];
headerButton.textContent = siteContent.cta["button"];

const headerImg = document.querySelector("#cta-img");

headerImg.src = "../src/mocks/img/cta.png";

const mainTopContent = document.querySelector(".text-content");

// mainTopContent.forEach((item) => item.textContent === )

const contactSection = document.querySelector(".contact");

const contactTitle = contactSection.querySelector("h4");

contactTitle.textContent = siteContent.contact["contact-h4"];

const contactAddress = contactSection.querySelector("p:nth-of-type(1)");
const contactPhone = contactSection.querySelector("p:nth-of-type(2)");
const contactEmail = contactSection.querySelector("p:nth-of-type(3)");

contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

const footerContent = document.querySelector("footer");

const footerCopyright = footerContent.querySelector("a");

footerCopyright.className = "bold";

footerContent.textContent = siteContent.footer.copyright;

{
  /* <section class="contact">
        <h4></h4>
        <p></p>
        <p></p>
        <p></p>
      </section>

<section class="contact">
<h4>Contact</h4>
<p>123 Way 456 Street Somewhere, USA</p>
<p>1 (888) 888-8888</p>
<p>sales@greatidea.io</p>
</section> */
}
