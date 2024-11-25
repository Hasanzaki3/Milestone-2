// Get references to form and resume container
const form = document.getElementById("resume-form") as HTMLFormElement;
const resumeContainer = document.getElementById("resume")!;

// Event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const profilePic = (document.getElementById("profile-pic") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLTextAreaElement).value;
  const workExperience = (document.getElementById("work-experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

  // Clear existing resume
  resumeContainer.innerHTML = "";

  // Create dynamic resume content
  const resumeHTML = `
    <div class="resume-header">
      <img src="${profilePic}" alt="Profile Picture">
      <h2>${name}</h2>
      <p>${email} | ${phone}</p>
    </div>
    <div class="resume-section">
      <h3>Education</h3>
      <ul>
        ${education.split(";").map((item) => `<li>${item.trim()}</li>`).join("")}
      </ul>
    </div>
    <div class="resume-section">
      <h3>Work Experience</h3>
      <ul>
        ${workExperience.split(";").map((item) => `<li>${item.trim()}</li>`).join("")}
      </ul>
    </div>
    <div class="resume-section">
      <h3>Skills</h3>
      <p>${skills.split(",").map((item) => `<span class="skill">${item.trim()}</span>`).join(", ")}</p>
    </div>
  `;

  // Append generated resume to the container
  resumeContainer.innerHTML = resumeHTML;
});
