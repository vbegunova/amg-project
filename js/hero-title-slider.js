const titles = [
    "Improve security standards with our proven solutions",
    "AMG's promise:<br />precision security,<br />no hidden costs! ",
    "Take advantage of<br />premium security services<br />tailored to your needs",
  ];
  
  let currentTitle = 0;
  const titleElement = document.querySelector(".hero-title");
  
  function changeTitle() {
    if(window.innerWidth >= 1440) {
      if (currentTitle === 2) {
        titleElement.style.width = "100%";
      } else {
        titleElement.style.width = "621px";
      }
    }
    titleElement.innerHTML = titles[currentTitle];
  }
  
  changeTitle();
  
  function nextTitle() {
    currentTitle++;
    if (currentTitle >= titles.length) {
      currentTitle = 0;
    }
    changeTitle();
  }
  
  function prevTitle() {
    currentTitle--;
    if (currentTitle < 0) {
      currentTitle = titles.length - 1;
    }
    changeTitle();
  }
  
  const nextButtonHero = document.querySelector(
    ".hero-slider-button:last-of-type"
  );
  const prevButtonHero = document.querySelector(
    ".hero-slider-button:first-of-type"
  );
  
  nextButtonHero.addEventListener("click", nextTitle);
  prevButtonHero.addEventListener("click", prevTitle);
  