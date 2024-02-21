// Responsive Menu Toggle
document.getElementById('menuToggle').addEventListener('click', function() {
    const navbar = document.querySelector('nav ul');
    navbar.classList.toggle('open');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamically Loading Project Details
const projects = [
    { title: 'Project 1', description: 'Description of Project 1' },
    { title: 'Project 2', description: 'Description of Project 2' }
    // Add more projects as needed
];

const projectsSection = document.getElementById('projects');

projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'project';
    projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectsSection.appendChild(projectElement);
});
