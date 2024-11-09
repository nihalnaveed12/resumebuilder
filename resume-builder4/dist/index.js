"use strict";
// @ts-ignore
var form = document.getElementById("resumeForm");
// Function to handle form submission
form.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    // Get form input values
    var name = document.getElementById("name").value;
    var role = document.getElementById("role").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address")
        .value;
    var profile = document.getElementById("profile")
        .value;
    var college = document.getElementById("college")
        .value;
    var group = document.getElementById("group").value;
    var startYear = document.getElementById("startYear")
        .value;
    var endYear = document.getElementById("endYear")
        .value;
    var skills = document.getElementById("skills").value.split(",");
    // const skillLevel = (document.getElementById("skillLevel") as HTMLInputElement).value;
    var company = document.getElementById("company")
        .value;
    var workYear = document.getElementById("workYear")
        .value;
    var roleTitle = document.getElementById("roleTitle")
        .value;
    var workDescription = document.getElementById("description").value;
    var languages = document.getElementById("languages").value.split(",");
    // Handle profile picture
    var profilePicture = (_a = document.getElementById("profilePicture").files) === null || _a === void 0 ? void 0 : _a[0];
    var displayProfileImage = document.getElementById("displayProfileImage");
    // If profile picture exists, read file using FileReader
    if (profilePicture) {
        var reader = new FileReader();
        reader.onload = function (event) {
            if (event.target) {
                displayProfileImage.src = event.target.result;
                displayProfileImage.style.display = "block";
            }
        };
        reader.readAsDataURL(profilePicture);
    }
    else {
        displayProfileImage.style.display = "none";
    }
    // Add values to resume display
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayRole").textContent = role;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayAddress").textContent =
        address;
    document.getElementById("displayProfile").textContent =
        profile;
    document.getElementById("displayCollege").textContent =
        college;
    document.getElementById("displayGroup").textContent = group;
    document.getElementById("displayStartYear").textContent =
        startYear;
    document.getElementById("displayEndYear").textContent =
        endYear;
    // Display skills as list
    var skillsList = document.getElementById("displaySkills");
    skillsList.innerHTML = "";
    skills.forEach(function (skill) {
        var skillItem = document.createElement("li");
        skillItem.textContent = skill.trim();
        skillsList.appendChild(skillItem);
    });
    // Display work experience
    document.getElementById("displayCompany").textContent =
        company;
    document.getElementById("displayWorkYear").textContent =
        workYear;
    document.getElementById("displayRoleTitle").textContent =
        roleTitle;
    document.getElementById("displayWorkDescription").textContent = workDescription;
    // Display languages as list
    var languagesList = document.getElementById("displayLanguages");
    languagesList.innerHTML = "";
    languages.forEach(function (language) {
        var languageItem = document.createElement("li");
        languageItem.textContent = language.trim();
        languagesList.appendChild(languageItem);
    });
});
function DownloadResume() {
    var resumeElement = document.querySelector(".resume");
    // Define the options for html2pdf
    var opt = {
        margin: 0,
        filename: "My_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    // Ensure the resumeElement is not null before calling html2pdf
    if (resumeElement) {
        // Using html2pdf with TypeScript
        window.html2pdf().from(resumeElement).set(opt).save();
    }
    else {
        console.error("Resume element not found.");
    }
}
var downloadButton = document.getElementById("downloadBtn");
if (downloadButton) {
    downloadButton.addEventListener("click", DownloadResume);
}
else {
    console.error("Download button not found!");
}
