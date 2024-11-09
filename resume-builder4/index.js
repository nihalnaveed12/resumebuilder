const form = document.getElementById("resumeForm");

// Function jo form submission ko handle krega
form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // form input ki values lengay
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const profile = document.getElementById("profile").value;
  const college = document.getElementById("college").value;
  const group = document.getElementById("group").value;
  const startYear = document.getElementById("startYear").value;
  const endYear = document.getElementById("endYear").value;
  const skills = document.getElementById("skills").value.split(",");
  const skillLevel = document.getElementById("skillLevel").value;
  const company = document.getElementById("company").value;
  const workYear = document.getElementById("workYear").value;
  const roleTitle = document.getElementById("roleTitle").value;
  const workDescription = document.getElementById("description").value;
  const languages = document.getElementById("languages").value.split(",");

  // Profile picture handle horahi ha
  const profilePicture = document.getElementById("profilePicture").files[0]; // 0 index pr jo file ha wo milay gi
  const displayProfileImage = document.getElementById("displayProfileImage"); // profile jaha display hogi

  // agr profilepicture ha to file read krengay using new fileReader()

  if (profilePicture) {
    const reader = new FileReader();

    reader.onload = function(event) {
      displayProfileImage.src = event.target.result;
      displayProfileImage.style.display = "block"; // profile image show krwayengay
    };
    reader.readAsDataURL(profilePicture);
  } else {
    displayProfileImage.style.display = "none"; // agr image upload nhi ki to display none krwayengay
  }

  // resume ke andar values add krengay 
  document.getElementById("displayName").textContent = name;
  document.getElementById("displayRole").textContent = role;
  document.getElementById("displayEmail").textContent = email;
  document.getElementById("displayPhone").textContent = phone;
  document.getElementById("displayAddress").textContent = address;
  document.getElementById("displayProfile").textContent = profile;
  document.getElementById("displayCollege").textContent = college;
  document.getElementById("displayGroup").textContent = group;
  document.getElementById("displayStartYear").textContent = startYear;
  document.getElementById("displayEndYear").textContent = endYear;
  
  // commas laga kr value add hongi phir comma split krengay and list show krengay
  const skillsList = document.getElementById("displaySkills");
  skillsList.innerHTML = ""; // Clear previous skills
  skills.forEach(skill => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill.trim();
    skillsList.appendChild(skillItem);
  });

  // work experience display krwayengay
  document.getElementById("displayCompany").textContent = company;
  document.getElementById("displayWorkYear").textContent = workYear;
  document.getElementById("displayRoleTitle").textContent = roleTitle;
  document.getElementById("displayWorkDescription").textContent = workDescription;

  // Display languages 
  const languagesList = document.getElementById("displayLanguages");
  languagesList.innerHTML = "";
  languages.forEach(language => {
    const languageItem = document.createElement("li");
    languageItem.textContent = language.trim();
    languagesList.appendChild(languageItem);
  });
});

const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", () => {
  const element = document.querySelector(".resume"); 
  html2pdf()
    .from(element)
    .save("resume.pdf");
}); 
