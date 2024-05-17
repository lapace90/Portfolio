export const language = {
    eng: {
      hello: "Hi,<br>I'm Ilaria!",
      trad: "Hello, I'm Ilaria Pace, a passionate web developer based in French Riviera, with a deep interest in creating user-friendly and visually appealing websites. I strive to create interactive and responsive web experiences. I enjoy working in collaborative environments, leveraging my problem-solving skills to deliver efficient solutions. Constantly staying up-to-date with the latest industry trends, I am dedicated to honing my skills and expanding my knowledge.",
      motto: "Let's collaborate and bring your digital solutions to life!",
      aboutme: "About me",
      cv: "Resume",
      dl: "Download",
      skills: "Skills",
      skills_text1: "My Programming Language Skills Are Always Growing",
      skills_text2: "I have experience with these technologies:",
      projects: "Projects",
      contacts: "Contacts",
    },
    ita: {
      hello: "Ciao,<br>sono Ilaria!",
      trad: "Ciao, sono Ilaria Pace, vivo in Costa Azzurra e sono una programmatrice che ama il suo lavoro, con un profondo interesse nel creare siti web con un design accattivante e di facile utilizzo per gli utenti. Mi impegno per creare esperienze web interattive e adattabili ad ogni dispositivo. Mi piace lavorare in un ambiente collaborativo, sfruttando le mie capacità di problem-solving per apportare soluzioni efficienti e ottimali. Rimanendo costantemente aggiornata sugli ultimi trands del mercato, mi dedico ogni giorno ad affinare le mie competenze ed espandere la mie conoscenze.",
      motto: "Collaboriamo e portiamo in vita le tue soluzioni digitali!",
      aboutme: "Chi sono",
      cv: "CV",
      dl: "Scarica",
      skills: "Competenze",
      skills_text1: "Le mie competenze linguistiche di programmazione sono sempre in crescita",
      skills_text2: "Ho esperienza con queste tecnologie:",
      projects: "Progetti",
      contacts: "Contatti",
    },
    fra: {
      hello: "Salut,<br>moi c'est Ilaria!",
      trad: "Bonjour, je suis Ilaria Pace, développeuse web passionnée basée sur la Côte d'Azur, avec un profond intérêt pour la création de sites web conviviaux et esthétiquement agréables. Je m'efforce de créer des expériences web interactives et réactives. J'aime travailler dans des environnements collaboratifs, en tirant parti de mes compétences en résolution de problèmes pour fournir des solutions efficaces. En restant constamment à jour avec les dernières tendances du secteur, je m'engage à affiner mes compétences et à élargir mes connaissances.",
      motto: "Collaborons ensemble pour donner vie à vos solutions numériques !",
      aboutme: "À propos de moi",
      cv: "CV",
      dl: "Télécharger",
      skills: "Compétences",
      skills_text1: "Mes compétences en langage de programmation sont toujours en expansion",
      skills_text2: "J'ai de l'expérience avec ces technologies :",
      projects: "Projets",
      contacts: "Contacts",
    }
  };
  
  export function changeLanguage(lang) {
    document.getElementById('hello').innerHTML = language[lang].hello;
    document.getElementById('siteContent').textContent = language[lang].trad;
    document.getElementById('motto').textContent = language[lang].motto;
    document.getElementById('aboutme-link').textContent = language[lang].aboutme;
    document.getElementById('aboutme1').textContent = language[lang].aboutme;
    document.getElementById('cv').textContent = language[lang].cv;
    document.getElementById('dl').textContent = language[lang].dl;
    document.getElementById('skills-link').textContent = language[lang].skills;
    document.getElementById('skills-title').textContent = language[lang].skills;
    document.getElementById('skills-text1').textContent = language[lang].skills_text1;
    document.getElementById('skills-text2').textContent = language[lang].skills_text2;
    document.getElementById('projects-link').textContent = language[lang].projects;
    document.getElementById('projects-title').textContent = language[lang].projects;
    document.getElementById('contacts-link').textContent = language[lang].contacts;
    document.getElementById('contacts-title').textContent = language[lang].contacts;
  
    window.location.hash = lang;
  }
  
  export function loadCurrentLanguage() {
    window.onload = function() {
      let hash = window.location.hash.substring(1);
      if (hash) {
        document.getElementById('lang').value = hash;
        changeLanguage(hash);
      }
    };
  }
  