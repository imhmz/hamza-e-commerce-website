let words = document.querySelectorAll(".word");

words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent="";

  letters.forEach((letter)=>{
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;

words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
  let currentWord = words[currentWordIndex]; // Change `word` to `words`
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
      letter.className = "letter out"; // Use `classList.add` to add a class
    },i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className = "letter behind";
    setTimeout(()=>{
      letter.className = "letter in";
      
    },340 + i * 80);
  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);
////////////////////////////////////////circle skills*//////////////////////////////////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
    const dots = parseInt(circle.getAttribute("data-dots")); // Convert to an integer
    const marked = parseInt(circle.getAttribute("data-percent")); // Convert to an integer
    const percent = Math.floor((dots * marked) / 100);
    let points = "";

    const rotate = 360 / dots;
    
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }

    circle.innerHTML = points;
    
    const pointsMarked = circle.querySelectorAll('.points');
    
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});

//mix it up porfolio lkhadma lamliha //
var mixer = mixitup('.portfolio-gallery');


/////////////active scroll menu//////////////////////////////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let sections = document.querySelectorAll('section');

function activeMenu() {
  let len = sections.length;
  while (--len >= 0 && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

/////////////sticky navbar scroll menu//////////////////////////////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky",window.scrollY > 50)
})
/////////toggle icon//////////////////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
}

window.onscroll = ()=>{
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
}

/////////scroll aniamation/////////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show-items");

    }else{
      entry.target.classList.remove("show-items");

    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));