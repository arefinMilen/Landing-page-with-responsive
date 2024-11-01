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
                                        
menuIcon.addEventListener("click", ()=>{
    if(menu.className ==="hidden"){
        menu.classList.remove("hidden");
        // console.log("button is clicked")
    }
    else{
        menu.classList.add("hidden");
        // console.log("button is clicked")
    }
    // console.log("button is clicked")
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
        description3:"Live better with clean & nutritious ingredients!"
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
        description3:"Vivez mieux avec des ingrédients propres et nutritifs!"
        
        
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
    
}