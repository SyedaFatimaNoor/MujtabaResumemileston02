let profilePictureURL: string | undefined;
const profilePictureInput = document.getElementById('profile-picture') as HTMLInputElement;
profilePictureInput.addEventListener('change', (event) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePictureURL = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const year = (document.getElementById('year') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const workDescription = (document.getElementById('workDescription') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    resumeOutput.innerHTML = `
        <div style="background-color: #003366; color: white; padding: 15px; text-align: center; border-radius: 10px;">
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ''}
            <h2>${name}</h2>
            <p>Email: ${email} | Phone: ${phone}</p>
        </div>
        <section>
            <h3>Education</h3>
            <p><strong>${degree}</strong> <br> ${institution} - ${year}</p>
        </section>
        <section>
            <h3>Skills</h3>
            ${skills.map(skill => `<span class="skills-badge">${skill.trim()}</span>`).join('')}
        </section>
        <section>
            <h3>Work Experience</h3>
            <p><strong>${jobTitle}</strong> <br> ${company} <br> ${workDescription}</p>
        </section>
    `;
});
