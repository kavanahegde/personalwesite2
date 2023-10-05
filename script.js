function showSection(sectionId) {
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('hidden');
    });

    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

// Handle form submission and redirect to success page
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Redirect to a success page (you need to create this HTML page)
    window.location.href = 'success.html';
});
