document.addEventListener("DOMContentLoaded", function() {
    function showSection(section) {
        document.getElementById("postJob").style.display = section === "postJob" ? "block" : "none";
        document.getElementById("applyJob").style.display = section === "applyJob" ? "block" : "none";
    }

    window.showSection = showSection;

    const postJobForm = document.getElementById("postJobForm");
    const applyJobForm = document.getElementById("applyJobForm");

    if (postJobForm) {
        postJobForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let jobDetails = {
                email: document.getElementById("email").value,
                jobType: document.getElementById("jobType").value,
                description: document.getElementById("description").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value,
                salary: document.getElementById("salary").value,
                location: document.getElementById("location").value,
                contact: document.getElementById("contactDetails").value
            };

            localStorage.setItem("jobDetails", JSON.stringify(jobDetails));
            alert("Job Posted Successfully!");
            showSection("applyJob");
        });
    }

    if (applyJobForm) {
        applyJobForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let applicantDetails = {
                name: document.getElementById("applicantName").value,
                email: document.getElementById("applicantConfirmEmail").value,
                mobile: document.getElementById("applicantMobile").value
            };

            let jobPosterEmail = JSON.parse(localStorage.getItem("jobDetails")).email;
            
            alert("Application Sent!");
            console.log(`Email Sent to: ${jobPosterEmail} with details:`, applicantDetails);
        });
    }
});
