var navlist = new Vue({
    el: '#navbar',
    data: {
      items: [
        { text: 'About', link: '#info'},
        { text: 'Work', link: '#work'},
        { text: 'Contact', link: '#contact'}
      ]
    }
  })

function asyncSleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function print_text(print_into, text, delay) {
    $(print_into).html("");
    for (var char of text) {
        await asyncSleep(delay);
        $(print_into).append(char);
    }
}
(async function init_hello(){
  await asyncSleep(1000);
  print_text("#hello", "Hello, I'm Anh", 100);
})();

function reveal() {
  let reveals = document.querySelectorAll(".info");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if(elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
function skillRun() {
  let skillRun = document.querySelectorAll(".skill");
  let skillSet = ["html", "css", "JavaScript"];
  for (let i = 0; i < skillRun.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = skillRun[i].getBoundingClientRect().top;
    let elementVisible = 50;
    if(elementTop < windowHeight - elementVisible) {
      skillRun[i].classList.add(skillSet[i]);
    } else {
      skillRun[i].classList.remove(skillSet[i]);
    }
  }
}

function revealsWork() {
  let revealWork = document.querySelectorAll(".work");
  for (let i = 0; i < revealWork.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = revealWork[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if(elementTop < windowHeight - elementVisible) {
      revealWork[i].classList.add("active-work");
    } else {
      revealWork[i].classList.remove("active-work");
    }
  }
}
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", skillRun);
window.addEventListener("scroll", revealsWork);
