var MenuItem = document.getElementById("nav");

MenuItem.style.display = "flex";

function menutoggle() {
     if (MenuItem.style.display == "none")
      MenuItem.style.display = "block";
     else {
       MenuItem.style.display = "none";
     }
   }

// toggle button 


   const toggleButton = document.getElementsByClassName('')[0]
    const navbarLinks = document.getElementsByClassName('nav')[0]
   
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
