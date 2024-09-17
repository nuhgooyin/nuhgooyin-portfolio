document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.getElementById('about-image');
    const hobbiesImage = document.getElementById('hobbies-image');
    const dropdownCards = document.querySelectorAll('.dropdown-card');

    dropdownCards.forEach(card => {
        const title = card.querySelector('h3');
        title.addEventListener('click', () => {
            // Toggle active class
            card.classList.toggle('active');

            // Change image
            const imageSrc = card.dataset.image;
            const section = card.closest('section');
            if (section.id === 'about') {
                aboutImage.src = imageSrc;
            } else if (section.id === 'hobbies') {
                hobbiesImage.src = imageSrc;
            }

            // Close other dropdowns in the same section
            const siblingCards = section.querySelectorAll('.dropdown-card');
            siblingCards.forEach(siblingCard => {
                if (siblingCard !== card) {
                    siblingCard.classList.remove('active');
                }
            });
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Here you would typically send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Clear the form
        contactForm.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
});