var _a;
var profilePictureURL;
var profilePictureInput = document.getElementById('profile-picture');
profilePictureInput.addEventListener('change', function (event) {
    var _a;
    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            profilePictureURL = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(file);
    }
});
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var institution = document.getElementById('institution').value;
    var year = document.getElementById('year').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var workDescription = document.getElementById('workDescription').value;
    var skills = document.getElementById('skills').value.split(',');
    var resumeOutput = document.getElementById('resume-output');
    resumeOutput.innerHTML = "\n        <div style=\"background-color: #003366; color: white; padding: 15px; text-align: center; border-radius: 10px;\">\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n            <h2>").concat(name, "</h2>\n            <p>Email: ").concat(email, " | Phone: ").concat(phone, "</p>\n        </div>\n        <section>\n            <h3>Education</h3>\n            <p><strong>").concat(degree, "</strong> <br> ").concat(institution, " - ").concat(year, "</p>\n        </section>\n        <section>\n            <h3>Skills</h3>\n            ").concat(skills.map(function (skill) { return "<span class=\"skills-badge\">".concat(skill.trim(), "</span>"); }).join(''), "\n        </section>\n        <section>\n            <h3>Work Experience</h3>\n            <p><strong>").concat(jobTitle, "</strong> <br> ").concat(company, " <br> ").concat(workDescription, "</p>\n        </section>\n    ");
});
