document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function () {
        const textId = this.getAttribute('data-text-id'); // get id of the hidden text
        const hiddenText = document.getElementById(textId); // find hidden text

        if (hiddenText) {
            this.style.backgroundImage = 'none'; // hide bg image
            this.style.backgroundColor = 'var(--dark-bg)'; // hide bg color
            this.textContent = hiddenText.textContent; // set text content
            this.style.textAlign = 'center'; // later we can change this to left
            this.style.padding = '10px'; // padding for better look
            this.style.fontSize = '18px'; // and changed font size bcs we dont want our text to be 50px lmaoo

            // add fade in effect
            this.classList.add('fade-in');
        }
    });
});