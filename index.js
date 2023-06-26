var MenuItem = document.getElementById("nav");

MenuItem.style.display = "flex";

function menutoggle() {
     if (MenuItem.style.display == "none")
      MenuItem.style.display = "block";
     else {
       MenuItem.style.display = "none";
     }
   }