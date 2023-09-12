import "./styles.css";


const dataCard = [
  {
    id: 1,
    title: "Adidas",
    job: "Front-end Developer",
    image: "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg",
    desc: `              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
    voluptatibus ut quod ipsa recusandae tempore magnam sequi vel
    asperiores expedita, minima placeat ullam nobis saepe! Lorem ipsum
    dolor sit amet, consectetur adipisicing elit. Nam voluptatibus ut
    quod ipsa recusandae tempore magnam sequi vel asperiores expedita,
    minima placeat ullam nobis saepe! Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Nam voluptatibus ut quod ipsa
    recusandae tempore magnam sequi vel asperiores expedita, minima
    placeat ullam nobis saepe!
    
    `
  },
  {
    id: 2,
    title: "Adidas Bag",
    job: "IOS Developer",
    image: "https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
    voluptatibus ut quod ipsa recusandae tempore magnam sequi vel
    asperiores expedita, minima placeat ullam nobis saepe! Lorem ipsum
    dolor sit amet, consectetur adipisicing elit. Nam voluptatibus ut
    quod ipsa recusandae tempore magnam sequi vel asperiores expedita,
    minima placeat ullam nobis saepe! Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Nam voluptatibus ut quod ipsa
    recusandae tempore magnam sequi vel asperiores expedita, minima
    placeat ullam nobis saepe!
    
     `
  },
  {
    id: 3,
    title: "Adidas Shoes",
    job: "UI / UX Design",
    image: "https://images.pexels.com/photos/9993287/pexels-photo-9993287.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
     odit quia aut! Aut mollitia, impedit cupiditate?
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
     voluptatibus ut quod ipsa recusandae tempore magnam sequi vel
     asperiores expedita, minima placeat ullam nobis saepe! Lorem ipsum
     dolor sit amet, consectetur adipisicing elit. Nam voluptatibus ut
     quod ipsa recusandae tempore magnam sequi vel asperiores expedita,
     minima placeat ullam nobis saepe! Lorem ipsum dolor sit amet,
     consectetur adipisicing elit. Nam voluptatibus ut quod ipsa
     recusandae tempore magnam sequi vel asperiores expedita, minima
     placeat ullam nobis saepe!
     `
  },
  {
    id: 4,
    title: "Adidas",
    job: "Front-end Developer",
    image: "https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg",
    desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Dolore inventore odit quia aut! Aut mollitia, impedit cupiditate?
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
    voluptatibus ut quod ipsa recusandae tempore magnam sequi vel
    asperiores expedita, minima placeat ullam nobis saepe! Lorem ipsum
    dolor sit amet, consectetur adipisicing elit. Nam voluptatibus ut
    quod ipsa recusandae tempore magnam sequi vel asperiores expedita,
    minima placeat ullam nobis saepe! Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Nam voluptatibus ut quod ipsa
    recusandae tempore magnam sequi vel asperiores expedita, minima
    placeat ullam nobis saepe!
     
     `
  }
]


const cards = [...document.querySelectorAll(".container__card")]




//=========DISPLAY LESS MORE===========
window.onload = function(){
cards.forEach((card) => {
  let seeMoreBtn = card.querySelector("#seeMore")
  let textContent = card.querySelector(".card__content .card__text")

  if(textContent.scrollHeight === textContent.clientHeight){
  seeMoreBtn.style.display = "none"
  textContent.style.height = "fit-content"
  }else{
  card.classList.add("gradient")
  }
})
}


//=========SEE MORE FUNCTION===========
cards.forEach((card) => {
let seeMoreBtn = card.querySelector("#seeMore")
let textContent = card.querySelector(".card__content .card__text")

seeMoreBtn.addEventListener("click" , ()=>{
card.classList.toggle("active")
card.classList.toggle("gradient")

if(card.classList.contains("active")){
  seeMoreBtn.innerHTML = "See Less"
  textContent.style.height = textContent.scrollHeight + "px"
}else{
  seeMoreBtn.innerHTML = "See More"
  textContent.style.height = "100px"
}
})
})




// const profileCard = document.querySelector("#home");

// // -------Render Profile--------------
// function dispday(){
//   dataCard.forEach((item) => {
    
//  const {title, image, desc} = item;

//  profileCard.innerHTML =`
//  <div class="container__card" >
//  <div class="card__img">
//    <img
//      src=${image}
//      alt=${title}
//    />
//  </div>
//  <div class="card__content">
//    <h2>${title}</h2>
//    <p class="card__text">
//     ${desc}
//    </p>
//    <span class="see__more__btn" id="seeMore">See more</span>
//  </div>
// </div>

//  `
//   })
// }

// window.onload = dispday();

