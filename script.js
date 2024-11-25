// Get references to form and resume container
var form = document.getElementById("resume-form");
var resumeContainer = document.getElementById("resume");
// Event listener for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var profilePic = document.getElementById("profile-pic").value;
    var education = document.getElementById("education").value;
    var workExperience = document.getElementById("work-experience").value;
    var skills = document.getElementById("skills").value;
    // Clear existing resume
    resumeContainer.innerHTML = "";
    // Create dynamic resume content
    var resumeHTML = "\n    <div class=\"resume-header\">\n      <img src=\"".concat(profilePic, "\" alt=\"Profile Picture\">\n      <h2>").concat(name, "</h2>\n      <p>").concat(email, " | ").concat(phone, "</p>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Education</h3>\n      <ul>\n        ").concat(education.split(";").map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join(""), "\n      </ul>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Work Experience</h3>\n      <ul>\n        ").concat(workExperience.split(";").map(function (item) { return "<li>".concat(item.trim(), "</li>"); }).join(""), "\n      </ul>\n    </div>\n    <div class=\"resume-section\">\n      <h3>Skills</h3>\n      <p>").concat(skills.split(",").map(function (item) { return "<span class=\"skill\">".concat(item.trim(), "</span>"); }).join(", "), "</p>\n    </div>\n  ");
    // Append generated resume to the container
    resumeContainer.innerHTML = resumeHTML;
});
