const jobExperienceSheet = document.getElementById("job-experience-sheet");
const educationSheet = document.getElementById("education-sheet");
const skillsSheet = document.getElementById("skills-sheet");

const jobExperienceTriangle = document.getElementById("job-experience-triangle");
const educationTriangle = document.getElementById("education-triangle");
const skillsTriangle = document.getElementById("skills-triangle");

let skillsTitle = document.getElementById("s-header-div");
let educationTitle = document.getElementById("e-header-div");
let jobExperienceTitle = document.getElementById("j-header-div");

jobExperienceTriangle.style.visibility = "hidden";
educationTriangle.style.visibility = "visible";
skillsTriangle.style.visibility = "hidden";

jobExperienceSheet.className = "info-sheet-invisible";
educationSheet.className = "info-sheet-visible";
skillsSheet.className = "info-sheet-invisible";




function Suomi() {
  window.location.href = "Suomi.html";
}

function English() {
  window.location.href = "English.html";
}

function showJobExperience() {
  educationTriangle.style.visibility = "hidden";
  skillsTriangle.style.visibility = "hidden";
  jobExperienceTriangle.style.visibility = "visible";

  jobExperienceTitle.className = "active-header";
  educationTitle.className = "header-div";
  skillsTitle.className = "header-div";

  jobExperienceSheet.className = "info-sheet-visible";
  educationSheet.className = "info-sheet-invisible";
  skillsSheet.className = "info-sheet-invisible";
}

function showEducation() {
  educationTriangle.style.visibility = "visible";
  skillsTriangle.style.visibility = "hidden";
  jobExperienceTriangle.style.visibility = "hidden";

  educationTitle.className = "active-header";
  jobExperienceTitle.className = "header-div";
  skillsTitle.className = "header-div";

  jobExperienceSheet.className = "info-sheet-invisible";
  educationSheet.className = "info-sheet-visible";
  skillsSheet.className = "info-sheet-invisible";
}

function showSkills() {
  educationTriangle.style.visibility = "hidden";
  skillsTriangle.style.visibility = "visible";
  jobExperienceTriangle.style.visibility = "hidden";

  skillsTitle.className = "active-header";
  educationTitle.className = "header-div";
  jobExperienceTitle.className = "header-div";

  jobExperienceSheet.className = "info-sheet-invisible";
  educationSheet.className = "info-sheet-invisible";
  skillsSheet.className = "info-sheet-visible";
}

function leftChevron() {
  if (jobExperienceSheet.style.visibility == "visible") {
    showEducation()
  } else if (educationSheet.style.visibility == "visible") {
    showSkills()
  } else {
    showJobExperience()
  }
}

function rightChevron() {
  if (jobExperienceSheet.style.visibility == "visible") {
    showSkills()
  } else if (educationSheet.style.visibility == "visible") {
    showJobExperience()
  } else {
    showEducation()
  }
}



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});



function toggleInfoRow(id, pm) {
  if (document.getElementById(id).className == "info-row") {
    document.getElementById(id).className = "info-row-open"
    document.getElementById(pm).innerHTML = "<img src='icons/minus.svg'>"
  } else {
    document.getElementById(id).className = "info-row"
    document.getElementById(pm).innerHTML = "<img src='icons/plus.svg'>"
  }
}

function plusMinus(id) {
  if (document.getElementById(id).style.width = "0px") {
    document.getElementById(id).style.width = "60px"
  } else {
    document.getElementById(id).style.width = "0px"
  }
}

