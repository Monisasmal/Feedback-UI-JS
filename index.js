const btnResponse = document.getElementById('btn');
const feedbackContainer = document.getElementById('container');
const ratingFace = document.querySelectorAll('.rating');


// feedbackContainer.style.height = "200px"

let selectedFace = "";
ratingFace.forEach((face) =>{
    face.addEventListener("click", (event) => {
        removeActive();
        selectedFace =  event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnResponse.addEventListener("click", () =>{
    if(selectedFace !== ""){
        feedbackContainer.innerHTML = `
        <strong>😊THANK YOU😀</strong>
        <br>
        <br>
        <strong>Feedback:  ${selectedFace}</strong>
        <br>
        <br>
        <p>We'll use your feedback to improve our customer support.</p>
        ` 
    }
    
})

function removeActive() {
    ratingFace.forEach((face) =>{
        face.classList.remove("active");
    });
}