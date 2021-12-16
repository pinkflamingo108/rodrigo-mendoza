//Toggle Menu for Navbar, This is the music section

const musicNav = document.querySelector(".music-nav");
const theatreNav = document.querySelector(".theatre-nav");

musicNav.addEventListener("click", function () {
  const musicLinks = document.querySelector(".music-links");
  const musicContainer = document.querySelector("#music-container");
  const imgContainer = document.querySelector("img-container");

  if (musicContainer.classList.contains("no-display")) {
    musicContainer.classList.remove("no-display");
  } else {
    musicContainer.classList.add("no-display");
  }
});

//Toggle Menu for Navbar, This is the theatre section

theatreNav.addEventListener("click", function () {
  const theatreLinks = document.querySelector(".theatre-links");
  const theatreContainer = document.querySelector("#theatre-container");

  if (theatreContainer.classList.contains("no-display")) {
    theatreContainer.classList.remove("no-display");
  } else {
    theatreContainer.classList.add("no-display");
  }
});

// Songs

// Song One
const songOne = document.querySelector(".song1");

songOne.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container1");
  const firstIcon = document.getElementById("icon01");
  const xIcon = document.getElementById("xIcon01");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

// Song Two
const songTwo = document.querySelector(".song2");

songTwo.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container2");
  const firstIcon = document.getElementById("icon02");
  const xIcon = document.getElementById("xIcon02");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songThree = document.querySelector(".song3");

songThree.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container3");
  const firstIcon = document.getElementById("icon03");
  const xIcon = document.getElementById("xIcon03");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songFour = document.querySelector(".song4");

songFour.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container4");
  const firstIcon = document.getElementById("icon04");
  const xIcon = document.getElementById("xIcon04");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songFive = document.querySelector(".song5");

songFive.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container5");
  const firstIcon = document.getElementById("icon05");
  const xIcon = document.getElementById("xIcon05");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songSix = document.querySelector(".song6");

songSix.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container6");
  const firstIcon = document.getElementById("icon06");
  const xIcon = document.getElementById("xIcon06");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songSeven = document.querySelector(".song7");

songSeven.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container7");
  const firstIcon = document.getElementById("icon07");
  const xIcon = document.getElementById("xIcon07");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songEight = document.querySelector(".song8");

songEight.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container8");
  const firstIcon = document.getElementById("icon08");
  const xIcon = document.getElementById("xIcon08");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songNine = document.querySelector(".song9");

songNine.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container9");
  const firstIcon = document.getElementById("icon09");
  const xIcon = document.getElementById("xIcon09");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

const songTen = document.querySelector(".song10");

songTen.addEventListener("click", function () {
  const iFrameContainer = document.getElementById("iframe-container10");
  const firstIcon = document.getElementById("icon10");
  const xIcon = document.getElementById("xIcon10");
  const yesDisplay = document.querySelector(".yes-display");

  if (iFrameContainer.classList.contains("no-display") && xIcon.classList.contains("no-display")) {
    iFrameContainer.classList.remove("no-display");
    xIcon.classList.remove("no-display");
  } else {
    iFrameContainer.classList.add("no-display");
    xIcon.classList.add("no-display");
  }

  if (firstIcon.classList.contains("yes-display")) {
    firstIcon.classList.remove("yes-display");
    firstIcon.classList.add("no-display");
  } else {
    firstIcon.classList.remove("no-display");
    firstIcon.classList.add("yes-display");
  }
});

// X icon when clicking the button
