document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.getElementById("about-image");
  const hobbiesImage = document.getElementById("hobbies-image");
  const dropdownCards = document.querySelectorAll(".dropdown-card");

  dropdownCards.forEach((card) => {
    const title = card.querySelector("h3");
    const content = card.querySelector(".dropdown-content");

    title.addEventListener("click", () => {
      // Toggle active class
      card.classList.toggle("active");

      // Change image with animation
      const imageSrc = card.dataset.image;
      const section = card.closest("section");
      const imageElement = section.id === "about" ? aboutImage : hobbiesImage;

      imageElement.style.opacity = "0";
      imageElement.style.transform = "scale(0.95)";

      setTimeout(() => {
        imageElement.src = imageSrc;
        imageElement.style.opacity = "1";
        imageElement.style.transform = "scale(1)";
      }, 300);

      // Close other dropdowns in the same section
      const siblingCards = section.querySelectorAll(".dropdown-card");
      siblingCards.forEach((siblingCard) => {
        if (siblingCard !== card && siblingCard.classList.contains("active")) {
          siblingCard.classList.remove("active");
          siblingCard.querySelector(".dropdown-content").style.maxHeight = "0";
          siblingCard.querySelector(".dropdown-content").style.opacity = "0";
        }
      });

      // Animate the clicked dropdown
      if (card.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.opacity = "1";
      } else {
        content.style.maxHeight = "0";
        content.style.opacity = "0";
      }
    });
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      image: "images/project1.jpg",
      tags: ["hardware", "embedded"],
      projectLink: "#",
      githubLink: "#",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      image: "images/project2.jpg",
      tags: ["fullstack", "web"],
      projectLink: "#",
      githubLink: "#",
    },
    // Add more projects...
  ];

  const projectsPerPage = 3;
  let currentPage = 1;
  let currentFilter = "all";

  function displayProjects() {
    console.log("Displaying projects...");
    const projectGrid = document.getElementById("project-grid");
    projectGrid.innerHTML = "";

    const filteredProjects =
      currentFilter === "all"
        ? projects
        : projects.filter((project) => project.tags.includes(currentFilter));

    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const pageProjects = filteredProjects.slice(startIndex, endIndex);

    pageProjects.forEach((project) => {
      console.log("Adding project to grid...");
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.projectLink}" class="button">View Project</a>
                    <a href="${project.githubLink}" class="button">GitHub</a>
                </div>
            `;
      projectGrid.appendChild(projectCard);
    });

    updatePagination(filteredProjects.length);
  }

  function updatePagination(totalProjects) {
    const pageInfo = document.getElementById("page-info");
    const prevBtn = document.getElementById("prev-page");
    const nextBtn = document.getElementById("next-page");

    const totalPages = Math.ceil(totalProjects / projectsPerPage);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  function setupEventListeners() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        currentPage = 1;
        displayProjects();
        updateActiveFilter(btn);
      });
    });

    document.getElementById("prev-page").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayProjects();
      }
    });

    document.getElementById("next-page").addEventListener("click", () => {
      const totalProjects =
        currentFilter === "all"
          ? projects.length
          : projects.filter((project) => project.tags.includes(currentFilter))
              .length;
      const totalPages = Math.ceil(totalProjects / projectsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        displayProjects();
      }
    });
  }

  function updateActiveFilter(activeBtn) {
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
  }

  document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
    setupEventListeners();
  });
});
