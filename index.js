// toggle button 

   const toggleButton = document.getElementsByClassName('fa-bars')[0]
    const navbarLinks = document.getElementsByClassName('nav')[0]
   
    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })


    // toggle button 