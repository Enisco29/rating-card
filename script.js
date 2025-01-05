const ratingCard = document.getElementById('rating-card')
const thankYouCard = document.getElementById('container2')
const ratingButton = document.querySelectorAll('.rating-btn')
const submitBtn = document.getElementById('submit-btn')
const selectedRatingSpan = document.getElementById('selected-rating')

let selectedRating = null;

ratingButton.forEach((button) => {
    button.addEventListener('click', () => {
        ratingButton.forEach((btn) => 
        btn.classList.remove('selected'));

        button.classList.add('selected')

        selectedRating = button.dataset.value

        submitBtn.disabled = false;
    })
})

submitBtn.addEventListener('click', () => {
    if(selectedRating){
        ratingCard.style.display = 'none'
        thankYouCard.style.display = 'flex'

        selectedRatingSpan.textContent = selectedRating
    }
   
})