

// Funzione per mostrare/nascondere il menu dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
document.addEventListener('DOMContentLoaded', function () {
  var navbarCollapse = document.getElementById('navbarNav');
  var navLinks = navbarCollapse.querySelectorAll('.nav-link');
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          bsCollapse.hide();
      });
  });
});
//Chiudere il menu dropdown se l'utente clicca fuori di esso
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
          }
      }
  }
}
// Oggetto per le traduzioni
let language = {
  eng: {
      hello:"Hi, \n I'm Ilaria!",
      trad: "Hello, I'm Ilaria Pace, a passionate web developer based in French Riviera, with a deep interest in creating user-friendly and visually appealing websites. I strive to create interactive and responsive web experiences. I enjoy working in collaborative environments, leveraging my problem-solving skills to deliver efficient solutions. Constantly staying up-to-date with the latest industry trends, I am dedicated to honing my skills and expanding my knowledge.",
      motto:"Let's collaborate and bring your digital solutions to life!",
      aboutme: "About me",
      cv:"Resume",
      dl:"Download",
      skills: "Skills",
      skills_text1:"My Programming Language Skills Are Always Growing",
      skills_text2:"I have experience with these technologies:",
      projects: "Projects",
      contacts: "Contacts",
      contacts_text1: "For any question or request of collaboration feel free to send me a message...",
      contacts_text2: "...or contact me on my social medias!",
      name:"Name",
      email:"Email",
      object:"Object",
      message:"Message",
      submit:"Submit Your Message",
  },
  ita: {
      hello: 'Ciao,\n sono Ilaria!',
      trad: "Ciao, sono Ilaria Pace, vivo in Costa Azzurra e sono una programmatrice che ama il suo lavoro, con un profondo interesse nel creare siti web con un design accattivante e di facile utilizzo per gli utenti. Mi impegno per creare esperienze web interattive e adattabili ad ogni dispositivo. Mi piace lavorare in un ambiente collaborativo, sfruttando le mie capacità di problem-solving per apportare soluzioni efficienti e ottimali. Rimanendo costantemente aggiornata sugli ultimi trands del mercato, mi dedico ogni giorno ad affinare le mie competenze ed espandere la mie conoscenze.",
      motto:"Collaboriamo e portiamo in vita le tue soluzioni digitali!",
      aboutme: "Chi sono",
      cv:"CV",
      dl:"Scarica",
      skills: "Competenze",
      skills_text1:"Le mie competenze linguistiche di programmazione sono sempre in crescita",
      skills_text2:"Ho esperienza con queste tecnologie:",
      projects: "Progetti",
      contacts: "Contatti",
      contacts_text1: "Per qualsiasi domanda o richiesta di collaborazione, non esitate a scrivermi...",
      contacts_text2: "...oppure potete contattarmi sui miei social media!",
      name:"Nome",
      email:"Email",
      object:"Oggetto",
      message:"Messaggio",
      submit:"Invia il tuo messaggio",
  },
  fra: {
      hello:"Salut,\n moi c'est Ilaria!",
      trad: "Bonjour, je suis Ilaria Pace, développeuse web passionnée basée sur la Côte d'Azur, avec un profond intérêt pour la création de sites web conviviaux et esthétiquement agréables. Je m'efforce de créer des expériences web interactives et réactives. J'aime travailler dans des environnements collaboratifs, en tirant parti de mes compétences en résolution de problèmes pour fournir des solutions efficaces. En restant constamment à jour avec les dernières tendances du secteur, je m'engage à affiner mes compétences et à élargir mes connaissances.",
      motto:"Collaborons ensemble pour donner vie à vos solutions numériques !",
      aboutme: "À propos de moi",
      cv:"CV",
      dl:"Télécharger",
      skills: "Compétences",
      skills_text1:"Mes compétences en langage de programmation sont toujours en expansion",
      skills_text2:"J'ai de l'expérience avec ces technologies :",
      projects: "Projets",
      contacts: "Contacts",
      contacts_text1: "Pour toute question ou demande de collaboration, n'hésitez pas à m'envoyer un message...",
      contacts_text2: "...ou retrouvez-moi sur les réseaux sociaux !",
      name:"Nom",
      email:"Email",
      object:"Objet",
      message:"Message",
      submit:"Envoyer Ton Message",
  },
    esp: {
        hello: "¡Hola! \n ¡Soy Ilaria!",
        trad: "Hola, soy Ilaria Pace, una apasionada desarrolladora web con sede en la Riviera Francesa, con un profundo interés en crear sitios web fáciles de usar y visualmente atractivos. Me esfuerzo por crear experiencias web interactivas y receptivas. Disfruto trabajando en entornos colaborativos, aprovechando mis habilidades para resolver problemas y ofrecer soluciones eficientes. Manteniéndome constantemente al día con las últimas tendencias de la industria, estoy dedicada a perfeccionar mis habilidades y expandir mis conocimientos.",
        motto: "¡Colaboremos y demos vida a sus soluciones digitales!",
        aboutme: "Acerca de mí",
        cv: "Currículum",
        dl: "Descargar",
        skills: "Habilidades",
        skills_text1: "Mis habilidades en lenguajes de programación siempre están en crecimiento",
        skills_text2: "Tengo experiencia con estas tecnologías:",
        projects: "Proyectos",
        contacts: "Contactos",
        contacts_text1: "Para cualquier pregunta o solicitud de colaboración, no dude en enviarme un mensaje...",
        contacts_text2: "...o contácteme en mis redes sociales.",
        name: "Nombre",
        email: "Correo electrónico",
        object: "Asunto",
        message: "Mensaje",
        submit: "Enviar su mensaje",
  },
    deu: {
        hello: "Hallo, \nich bin Ilaria!",
        trad: "Hallo, ich bin Ilaria Pace, eine leidenschaftliche Webentwicklerin mit Sitz an der Côte d'Azur, mit großem Interesse an der Erstellung benutzerfreundlicher und visuell ansprechender Websites. Ich bemühe mich, interaktive und responsive Web-Erlebnisse zu schaffen. Ich arbeite gerne in kooperativen Umgebungen und nutze meine Problemlösungsfähigkeiten, um effiziente Lösungen zu liefern. Indem ich ständig auf dem neuesten Stand der Branchentrends bleibe, bin ich bestrebt, meine Fähigkeiten zu verbessern und mein Wissen zu erweitern.",
        motto: "Lassen Sie uns zusammenarbeiten und Ihre digitalen Lösungen zum Leben erwecken!",
        aboutme: "Über mich",
        cv: "Lebenslauf",
        dl: "Herunterladen",
        skills: "Fähigkeiten",
        skills_text1: "Meine Programmiersprachkenntnisse wachsen ständig",
        skills_text2: "Ich habe Erfahrung mit diesen Technologien:",
        projects: "Projekte",
        contacts: "Kontakte",
        contacts_text1: "Für Fragen oder Anfragen zur Zusammenarbeit können Sie mir gerne eine Nachricht senden...",
        contacts_text2: "...oder kontaktieren Sie mich über meine sozialen Medien!",
        name: "Name",
        email: "E-Mail",
        object: "Betreff",
        message: "Nachricht",
        submit: "Ihre Nachricht absenden",
  },
   rus: {
    hello: "Привет,\n я - Илария!",
    trad: "Привет, я Илария Пасе, страстный веб-разработчик с учебой на Лазурном берегу Франции, с глубоким интересом к созданию удобных для пользователя и визуально привлекательных веб-сайтов. Я стремлюсь создавать интерактивные и адаптивные веб-приложения. Мне нравится работать в коллективной среде, используя мои навыки решения проблем для достижения эффективных решений. Постоянно следя за последними тенденциями в индустрии, я посвящена совершенствованию своих навыков и расширению знаний.",
    motto: "Давайте сотрудничать и оживим ваши цифровые решения!",
    aboutme: "Обо мне",
    cv: "Резюме",
    dl: "Скачать",
    skills: "Навыки",
    skills_text1: "Мои навыки в области языков программирования постоянно растут",
    skills_text2: "У меня есть опыт работы с этими технологиями:",
    projects: "Проекты",
    contacts: "Контакты",
    contacts_text1: "Для любых вопросов или запросов о сотрудничестве не стесняйтесь отправить мне сообщение...",
    contacts_text2: "...или свяжитесь со мной через мои социальные сети!",
    name: "Имя",
    email: "Электронная почта",
    object: "Тема",
    message: "Сообщение",
    submit: "Отправить ваше сообщение",
   }
}

        // Funzione per cambiare la lingua
        function changeLanguage(lang) {
          // Cambia il contenuto del sito in base alla lingua selezionata
          document.getElementById('hello').textContent = language[lang].hello;
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
          document.getElementById('contacts-text1').textContent = language[lang].contacts_text1;
          document.getElementById('contacts-text2').textContent = language[lang].contacts_text2;
          document.getElementById('name').textContent = language[lang].name;
          document.getElementById('email').textContent = language[lang].email;
          document.getElementById('object').textContent = language[lang].object;
          document.getElementById('message').textContent = language[lang].message;
          document.getElementById('submit').textContent = language[lang].submit;

          // Cambia l'hash della URL per mantenere la lingua selezionata
          window.location.hash = lang;
      }

      // Carica la lingua corrente in base all'hash
      window.onload = function() {
          let hash = window.location.hash.substring(1);
          if (hash) {
              document.getElementById('lang').value = hash;
              changeLanguage(hash);
          }
      };

      $(document).ready(function() {
        // Aggiungi le icone delle bandiere come sfondo alle opzioni di lingua
        $('#lang option').each(function() {
            $(this).css('background-image', 'url(' + $(this).data('icon') + ')');
        });
    });
