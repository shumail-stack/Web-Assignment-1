// part1 - form submit
let form = document.getElementById("reading-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("form-message");
    if (username !== "" && email !== "") {
        message.textContent = `Thank you for visiting ${username}! We will contact you at ${email}.`;
    } else {
        message.textContent = "Please enter your name and email.";
    }
});
// part2 - table row highlighting
let rows = document.querySelectorAll(".data");

for (let row of rows) {
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "#4a3128";
    });

    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = "";
    });
}
// part3 - dark mode toggle (classList method)
let toggleButton = document.getElementById("theme-button");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// part4 - total of selected books
let checkboxes = document.querySelectorAll(".book-check");
let total = document.getElementById("total");
for (let box of checkboxes) {
    box.addEventListener("change", () => {
        let sum = 0;
        for (let item of checkboxes) {
            if (item.checked) {
                sum = sum + parseInt(item.value);
            }
        }
        total.textContent = "Total: $" + sum;
    });
}

// part5 - birth year discount
let birthYear = document.getElementById("birth-year");
birthYear.addEventListener("change", () => {
    let message = document.getElementById("discount-message");
    let year = parseInt(birthYear.value);
    // Year validation
    if (isNaN(year) || year > 2026) {
        message.textContent = "INVALID YEAR";
        return;
    }
    let age = 2026 - year;
    if (age < 18) {
        message.textContent = "You are under 18. No discount available.";
    } else if (age <= 25) {
        message.textContent = "You qualify for a Student Discount!";
    } else if (age >= 50) {
        message.textContent = "You qualify for a Senior Discount!";
    } else {
        message.textContent = "No special discount available.";
    }
});

// part6 - read more / read less
let readMoreButton = document.getElementById("read-more");
let extraText = document.getElementById("extra-text");
readMoreButton.addEventListener("click", () => {
    if (extraText.style.display === "none") {
        extraText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        extraText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});

// part7 - filter books by category
let filterButtons = document.querySelectorAll(".filter");
let bookRows = document.querySelectorAll(".data");
for (let button of filterButtons) {
    button.addEventListener("click", () => {
        let category = button.getAttribute("data-category");
        for (let row of bookRows) {
            if (category === "all" || row.getAttribute("data-category") === category) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    });
}

// part8 - open / closed status
let statusText = document.getElementById("status");
let hour = new Date().getHours();
if (hour >= 8 && hour < 22) {
    statusText.textContent = "We are Open!";
    statusText.style.color = "#6fcf7f";
} else {
    statusText.textContent = "Closed - Open at 8 AM";
    statusText.style.color = "#e5736f";
}

// part9 - character counter
let notes = document.getElementById("special-notes");
let counter = document.getElementById("counter");
notes.addEventListener("input", () => {
    let remaining = 100 - notes.value.length;
    counter.textContent = remaining + " characters remaining";
});