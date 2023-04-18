const mainContainer = document.querySelector(".main")
const thanksContainer = document.querySelector(".thank-you")

const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")

const rating= document.getElementById("rating")
const rates = document.querySelectorAll(".rate")


submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.style.display = "none"

})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block"

})

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
    rating.innerHTML=rate.innerHTML
     
    }

    )
}

)



// let btn = document.querySelector(".rate");
// btn.addEventListener("onclick", function toggler(){
//     alert("hello");
// });
