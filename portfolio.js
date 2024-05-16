/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

  function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
};

let language = {
    eng: {
        trad: "Hello, I'm Ilaria Pace, a passionate web developer based in French Riviera, with a deep interest in creating user-friendly and visually appealing websites. I strive to create interactive and responsive web experiences." + "I enjoy working in collaborative environments, leveraging my problem-solving skills to deliver efficient solutions. Constantly staying up-to-date with the latest industry trends, I am dedicated to honing my skills and expanding my knowledge."
    },
    ita: {
        trad: "Ciao, sono Ilaria Pace, vivo in Costa Azzurra e sono una programmatrice che ama il suo lavoro, con un profondo interesse nel creare siti web con un design accattivante e di facile utilizzo per gli utenti.Mi impegno per creare esperienze web interattive e adattabili ad ogni dispositivo. Mi piace lavorare in un ambiente collaborativo, sfruttando le mie capacità di problem-solving per apportare soluzioni efficienti e ottimali. Rimanendo costantemente aggiornata sugli ultimi trands del mercato, mi dedico ogni giorno ad affinare le mie competenze ed espandere la mie conoscenze."
    },
    fra: {
        trad: ""
    }
}

// Check if a hash value exists in the URL
if (window.location.hash) {
 
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#ita") {
        siteContent.textContent =
            language.ita.trad;
    }
    else if (window.location.hash == "#fra") {
        siteContent.textContent =
            language.fra.trad;
    }
}