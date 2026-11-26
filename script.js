
// Function to filter clubs by category

function filterClubs(category) {

    let clubs = document.querySelectorAll(".club-card");

    clubs.forEach(function(club) {

        if (category === "All" ||
            club.dataset.category === category) {

            club.style.display = "block";

        } else {

            club.style.display = "none";

        }

    });

}


// Function to show club details

function showDetails(clubName) {

    let details = {

        "Coding Club": "Activities: Programming, coding competitions and hackathons. Lead: Coding Club Coordinator. Contact: coding.club@example.com",

        "Robotics Club": "Activities: Robotics, automation and electronics. Lead: Robotics Club Coordinator. Contact: robotics.club@example.com",

        "Music Club": "Activities: Singing, dancing and music competitions. Lead: Music Club Coordinator. Contact: music.club@example.com",

        "Art Club": "Activities: Painting, photography and designing. Lead: Art Club Coordinator. Contact: art.club@example.com",

        "Literary Club": "Activities: Reading, writing and debates. Lead: Literary Club Coordinator. Contact: literary.club@example.com",

        "Writing Club": "Activities: Poetry and creative writing. Lead: Writing Club Coordinator. Contact: writing.club@example.com",

        "Football Club": "Activities: Football practice and tournaments. Lead: Football Club Coordinator. Contact: football.club@example.com",

        "Badminton Club": "Activities: Badminton practice and competitions. Lead: Badminton Club Coordinator. Contact: badminton.club@example.com"

    };

    alert(clubName + "\n\n" + details[clubName]);

}


// Function for event registration

function registerEvent(eventName) {

    alert("You selected " + eventName +
          ". Please fill out the registration form.");

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


// Membership Form Validation

document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();

    // Check selected interests
    let interests = document.querySelectorAll(
        'input[name="interest"]:checked'
    );

    if (interests.length === 0) {

        alert("Please select at least one interest.");

        return;

    }

    // Get student name
    let name = document.getElementById("name").value;

    // Show success message
    alert("Congratulations " + name +
          "! Your registration was successful.");

    // Clear the form
    this.reset();

});
