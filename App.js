// using animation for navbar 
gsap.to(".gsap-nav",{
    x:-1200,
    duration:7,
    delay:0.5,
    repeat:-1,
})

// responsive menubar 
const menuIcon = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const cancelBtn = document.getElementById('cancelBtn');
const fullScreenMenu = document.getElementById('fullScreenMenu');
const overlay = document.getElementById('overlay');
                                        
menuIcon.addEventListener("click", ()=>{
    if(menu.className ==="hidden"){
        menu.classList.remove("hidden");
        // console.log("button is clicked")
        // Toggle icon class and rotation
       
    }
    else{
        menu.classList.toggle("hidden");
    }
    menu.classList.toggle("menu-visible");
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
    menuIcon.classList.toggle("rotate-icon");
    // menuIcon.classList.toggle("cancelBtn");
});
// Show full-screen menu
menuBtn.addEventListener('click', () => {
    fullScreenMenu.classList.add('active');
    overlay.classList.add('active');
  });
// Hide full-screen menu
cancelBtn.addEventListener('click', () => {
    fullScreenMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  // Optional: Hide menu if overlay is clicked
  overlay.addEventListener('click', () => {
    fullScreenMenu.classList.remove('active');
    overlay.classList.remove('active');
  });
  
  // Function to show the menu only on screens below 1112px
function toggleMenu() {
    if (window.innerWidth < 1112) {
      fullScreenMenu.classList.add('active');
      overlay.classList.add('active');
    }
  }
  
  // Function to hide the menu
  function hideMenu() {
    fullScreenMenu.classList.remove('active');
    overlay.classList.remove('active');
  }
  
  // Show full-screen menu on menu button click, only when below 1112px
  menuIcon.addEventListener('click', toggleMenu);
  
  // Hide full-screen menu on cancel button click
  cancelBtn.addEventListener('click', hideMenu);
  
  // Optional: Hide menu if overlay is clicked
  overlay.addEventListener('click', hideMenu);
  
  // Listen for window resize to close the menu if resized above 1112px
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1112) {
      hideMenu(); // Close the menu if the screen is resized larger than 1112px
    }
  });

// Language translations
const translations = {
    en: {
        title: "Shop Plant-Based Snacks and Bevarages | Buddha Brands",
        title1:"VISIT OUR BRAND STORE ON",
        title2:"Products",
        title3:"Learn",
        title4:"Where to Buy",
        title5:"Contact",
        title6:"Thirsty Buddha R Coconut Water",
        title7:"Thirsty Buddha R Sparkling Coconut Water",
        title8:"Thirsty Buddha R Soda",
        title9:"Thirsty Buddha R Bars",
        title10:"POWERED BY PLANTS.",
        // title11:"FLELED BY PURPOSE.",
        title12:"Inspiration Delivered to your Inbox!",
        title13:"Shop",
        title14:"Support",
        // subtitle1:"Our Story",
        // subtitle2:"Sustainability",
        // subtitle3:"Recipes",
        btn:"SHOP NOW",
        cocoBtn:"SHOP NOW",
        sparklingBtn:"SHOP NOW",
        sodaBtn:"SHOP NOW",
        barsBtn:"SHOP NOW",
        proBtn:"VIEW PRODUCTS ON AMAZON.CA",
        description:"Natural plant-Based Snacks and Bevarages",
        description1:"Delicious Taste. Plant-Based. Nothing Artificial.",
        description2:"Shop Plant-Based Bars and Drinks",
        description3:"Live better with clean & nutritious ingredients!",
        description4:"Join the Buddha Brands TM Community and get notified of exclusive promotions and discounts, new products, announcements and more.",
        description5:"By subscribing to our newsletter you understand and accept that we may share your information with vendors or other third parties who perform services on our behalf. The personal information collected may be stored, processed, and transferred to a country or region outside of Quebec. Please read our privacy policy for more details.",
    },
    

  
    fr: {
        title: "Magasinez les collations et les boissons à base de plantes | Marques Bouddha",
        title1:"VISITEZ NOTRE BOUTIQUE DE MARQUE SUR",
        title2:"Products",
        title3:"En Savoir plus",
        title4:"OU Acheter",
        title5:"Contactez-Nous",
        title6:"Eau de coco Thirsty Buddha MD",
        title7:"Eau de coco pe Thirsty Buddha MD",
        title8:"Soda Thirsty Buddha MD",
        title9:"Bars Thirsty Buddha MD",
        title10:"ALIMENTÉS PARDES PLANTES.",
        title11:"MOTIVÉS PARNOTRE RAISON D'ÊTRE.",
        title12:"De l’inspiration distribuée dans votre boîte de réception!",
        title13:"Magasiner",
        title14:"Soutien",
        // subtitle1:"Notre histoire",
        // subtitle2:"Durabilite",
        // subtitle3:"Recipes",
        btn:"MAGASINER MAINTENANT", 
        cocoBtn:"MAGASINER MAINTENANT", 
        sparklingBtn:"MAGASINER MAINTENANT", 
        sodaBtn:"MAGASINER MAINTENANT", 
        barsBtn:"MAGASINER MAINTENANT", 
        proBtn:"MAGASINER Tous Les Produits", 
        description:"Boissons et collations naturelles  à base de plantes",
        description1:"Goût délicieux. À base de plantes.Sans aucun élément artificiel.",
        description2:"Magasiner des boissons et des barres à base de plantes",
        description3:"Vivez mieux avec des ingrédients propres et nutritifs!",
        description4:"De l’inspiration distribuée dans votre boîte de réception!",
        description5:"Rejoignez la communauté Buddha Brands et économisez 10 % sur votre première commande! Soyez informé des promotions et remises exclusives, des nouveaux produits, des annonces et plus.",
        
        
    },
    
};

// Function to change the language
function changeLanguage() {
    const lang = document.getElementById("lang").value;
    
    // Update text content based on selected language
    document.getElementById("title").innerText = translations[lang].title;
    document.getElementById("title1").innerText = translations[lang].title1;
    document.getElementById("title2").innerText = translations[lang].title2;
    document.getElementById("title3").innerText = translations[lang].title3;
    document.getElementById("title4").innerText = translations[lang].title4;
    document.getElementById("title5").innerText = translations[lang].title5;
    document.getElementById("title6").innerText = translations[lang].title6;
    document.getElementById("title7").innerText = translations[lang].title7;
    document.getElementById("title8").innerText = translations[lang].title8;
    document.getElementById("title9").innerText = translations[lang].title9;
    document.getElementById("title10").innerText = translations[lang].title10;
    // document.getElementById("title11").innerText = translations[lang].title11;
     document.getElementById("title12").innerText = translations[lang].title12;
     document.getElementById("title13").innerText = translations[lang].title13;
     document.getElementById("title14").innerText = translations[lang].title14;
    // document.getElementById("subtitle1").innerText = translations[lang].subtitle1;
    // document.getElementById("subtitle2").innerText = translations[lang].subtitle2;
    // document.getElementById("subtitle3").innerText = translations[lang].subtitle3;
    document.getElementById("btn").innerText = translations[lang].btn;
    document.getElementById("cocoBtn").innerText = translations[lang].cocoBtn;
    document.getElementById("sparklingBtn").innerText = translations[lang].sparklingBtn;
    document.getElementById("sodaBtn").innerText = translations[lang].sodaBtn;
    document.getElementById("barsBtn").innerText = translations[lang].barsBtn;
    document.getElementById("proBtn").innerText = translations[lang].proBtn;
    document.getElementById("description").innerText = translations[lang].description;
    document.getElementById("description1").innerText = translations[lang].description1;
    document.getElementById("description2").innerText = translations[lang].description2;
    document.getElementById("description3").innerText = translations[lang].description3;
    document.getElementById("description4").innerText = translations[lang].description4;
    document.getElementById("description5").innerText = translations[lang].description5; 
}