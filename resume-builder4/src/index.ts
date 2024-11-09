// @ts-ignore

const form = document.getElementById("resumeForm") as HTMLFormElement;


form.addEventListener("submit", function (event: Event) {
  event.preventDefault();

  // Get form input values
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const role = (document.getElementById("role") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const address = (document.getElementById("address") as HTMLInputElement)
    .value;
  const profile = (document.getElementById("profile") as HTMLInputElement)
    .value;
  const college = (document.getElementById("college") as HTMLInputElement)
    .value;
  const group = (document.getElementById("group") as HTMLInputElement).value;
  const startYear = (document.getElementById("startYear") as HTMLInputElement)
    .value;
  const endYear = (document.getElementById("endYear") as HTMLInputElement)
    .value;
  const skills = (
    document.getElementById("skills") as HTMLInputElement
  ).value.split(",");
  const company = (document.getElementById("company") as HTMLInputElement)
    .value;
  const workYear = (document.getElementById("workYear") as HTMLInputElement)
    .value;
  const roleTitle = (document.getElementById("roleTitle") as HTMLInputElement)
    .value;
  const workDescription = (
    document.getElementById("description") as HTMLInputElement
  ).value;
  const languages = (
    document.getElementById("languages") as HTMLInputElement
  ).value.split(",");

  // Handle profile picture
  const profilePicture = (
    document.getElementById("profilePicture") as HTMLInputElement
  ).files?.[0];
  const displayProfileImage = document.getElementById(
    "displayProfileImage"
  ) as HTMLImageElement;

  // If profile picture exists, read file using FileReader
  if (profilePicture) {
    const reader = new FileReader();

    reader.onload = function (event) {
      if (event.target) {
        displayProfileImage.src = event.target.result as string;
        displayProfileImage.style.display = "block";
      }
    };
    reader.readAsDataURL(profilePicture);
  } else {
    displayProfileImage.style.display = "none";
  }

  // Add values to resume display
  (document.getElementById("displayName") as HTMLElement).textContent = name;
  (document.getElementById("displayRole") as HTMLElement).textContent = role;
  (document.getElementById("displayEmail") as HTMLElement).textContent = email;
  (document.getElementById("displayPhone") as HTMLElement).textContent = phone;
  (document.getElementById("displayAddress") as HTMLElement).textContent =
    address;
  (document.getElementById("displayProfile") as HTMLElement).textContent =
    profile;
  (document.getElementById("displayCollege") as HTMLElement).textContent =
    college;
  (document.getElementById("displayGroup") as HTMLElement).textContent = group;
  (document.getElementById("displayStartYear") as HTMLElement).textContent =
    startYear;
  (document.getElementById("displayEndYear") as HTMLElement).textContent =
    endYear;

  // Display skills as list
  const skillsList = document.getElementById("displaySkills") as HTMLElement;
  skillsList.innerHTML = "";
  skills.forEach((skill) => {
    const skillItem = document.createElement("li");
    skillItem.textContent = skill.trim();
    skillsList.appendChild(skillItem);
  });

  // Display work experience
  (document.getElementById("displayCompany") as HTMLElement).textContent =
    company;
  (document.getElementById("displayWorkYear") as HTMLElement).textContent =
    workYear;
  (document.getElementById("displayRoleTitle") as HTMLElement).textContent =
    roleTitle;
  (
    document.getElementById("displayWorkDescription") as HTMLElement
  ).textContent = workDescription;

  // Display languages as list
  const languagesList = document.getElementById(
    "displayLanguages"
  ) as HTMLElement;
  languagesList.innerHTML = "";
  languages.forEach((language) => {
    const languageItem = document.createElement("li");
    languageItem.textContent = language.trim();
    languagesList.appendChild(languageItem);
  });
});

function DownloadResume() {
  const resumeElement = document.querySelector(".resume") as HTMLElement;

 
  const opt = {
    margin: 0,
    filename: `My_Resume.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

 
  if (resumeElement) {
    (window as any).html2pdf().from(resumeElement).set(opt).save();
  } else {
    console.error("Resume element not found.");
  }
}

const downloadButton = document.getElementById("downloadBtn");
if (downloadButton) {
  downloadButton.addEventListener("click", DownloadResume);
} else {
  console.error("Download button not found!");
}
