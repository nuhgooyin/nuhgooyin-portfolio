document.addEventListener('DOMContentLoaded', () => {
    const aboutImage = document.getElementById('about-image');
    const hobbiesImage = document.getElementById('hobbies-image');
    const dropdownCards = document.querySelectorAll('.dropdown-card');

    dropdownCards.forEach(card => {
        const title = card.querySelector('h3');
        const content = card.querySelector('.dropdown-content');
        
        title.addEventListener('click', () => {
            // Toggle active class with animation
            card.classList.toggle('active');
            
            // Change image with animation
            const imageSrc = card.dataset.image;
            const section = card.closest('section');
            const imageElement = section.id === 'about' ? aboutImage : hobbiesImage;
            
            imageElement.style.opacity = '0';
            imageElement.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                imageElement.src = imageSrc;
                imageElement.style.opacity = '1';
                imageElement.style.transform = 'scale(1)';
            }, 300);

            // Close other dropdowns in the same section
            const siblingCards = section.querySelectorAll('.dropdown-card');
            siblingCards.forEach(siblingCard => {
                if (siblingCard !== card && siblingCard.classList.contains('active')) {
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