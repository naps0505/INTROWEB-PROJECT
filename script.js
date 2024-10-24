document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsSection = document.getElementById('reviews');

    // Function to create a new review element
    function createReview(productName, rating, comment) {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        const productTitle = document.createElement('h3');
        productTitle.textContent = productName;

        const productRating = document.createElement('div');
        productRating.classList.add('rating');
        productRating.textContent = `Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}`;

        const productComment = document.createElement('p');
        productComment.textContent = comment;

        reviewDiv.appendChild(productTitle);
        reviewDiv.appendChild(productRating);
        reviewDiv.appendChild(productComment);

        return reviewDiv;
    }

    // Event listener for form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page refresh on form submit

        const productName = document.getElementById('product-name').value;
        const rating = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('comment').value;

        // Validate rating to be between 1 and 5
        if (rating < 1 || rating > 5) {
            alert('Please enter a rating between 1 and 5.');
            return;
        }

        // Create a new review and add it to the reviews section
        const newReview = createReview(productName, rating, comment);
        reviewsSection.appendChild(newReview);

        // Clear the form inputs
        reviewForm.reset();
    });
});
