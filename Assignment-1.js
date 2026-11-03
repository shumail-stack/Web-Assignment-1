// //part1
// let form=document.getElementById("reading-form");
// form.addEventListener('submit',(e)=>
// {
//     e.preventDefault();
//     let username = document.getElementById("username").value;
//     let email = document.getElementById("email").value;

//     if(username != null && email != null)
//     {
//         let message=document.getElementById("form-message");
//         message.textContent=`Thank you for visiting ${username}! We will contact you at ${email}.`
//     }
//     else
//     { 
//         message.textContent = "Please enter your name and email.";
//     }
// })

// //part2
// let tableHeading=document.getElementById("heading-row");

// tableHeading.addEventListener("mouseover", () => {
//     tableHeading.style.backgroundColor = "red";
//     tableHeading.style.color = "grey";
// });

// tableHeading.addEventListener("mouseout", () => {
//     tableHeading.style.backgroundColor = "#3d2922";
//     tableHeading.style.color = "white";
// });

// let tableData = document.querySelectorAll(".data");

// for (let i = 0; i < tableData.length; i++)
// {
//     tableData[i].style.backgroundColor = "#f5eadc";
// }

// //part3
// let toggleButton = document.getElementById("theme-button");

// toggleButton.addEventListener("click", () => {

//     if (document.body.style.backgroundColor === "black") {

//         document.body.style.backgroundColor = "#f8f1e7";
//         document.body.style.color = "#3d2b25";

//     } else {

//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";

//     }

// });

// //method 2 using classList
// toggleButton.addEventListener("click", () => {

//     document.body.classList.toggle("dark-mode");

// });


// //part4
// let checkboxes = document.querySelectorAll(".book-check");
// let total = document.getElementById("total");

// for (let box of checkboxes) {

//     box.addEventListener("change", () => {

//         let sum = 0;

//         for (let item of checkboxes) {

//             if (item.checked) {
//                 sum = sum + parseInt(item.value);
//             }

//         }

//         total.textContent = "Total: $" + sum;

//     });

// }
// //part5
// let birthYear = document.getElementById("birth-year");

// birthYear.addEventListener("change", () => {

//     let message = document.getElementById("discount-message");

//     let year = parseInt(birthYear.value);

//     // Year validation
//     if (isNaN(year) || year > 2026) {
//         message.textContent = "INVALID YEAR";
//         return;
//     }

//     let age = 2026 - year;

//     // Student: 18 to 25
//     if (age >= 18 && age <= 25) {

//         message.textContent = "You qualify for a Student Discount!";

//     }

//     // Under 18: no discount
//     else if (age < 18) {

//         message.textContent = "You are under 18. No discount available.";

//     }

//     // Senior: 50+
//     else if (age >= 50) {

//         message.textContent = "You qualify for a Senior Discount!";

//     }

//     else {

//         message.textContent = "No special discount available.";

//     }

// });

// //part6
// let readMoreButton = document.getElementById("read-more");
// let extraText = document.getElementById("extra-text");

// extraText.style.display = "none";

// readMoreButton.addEventListener("click", () => {

//     if (extraText.style.display === "none") {

//         extraText.style.display = "block";
//         readMoreButton.textContent = "Read Less";

//     } else {

//         extraText.style.display = "none";
//         readMoreButton.textContent = "Read More";

//     }

// });
// //part7

// let filterButtons = document.querySelectorAll(".filter");
// let bookRows = document.querySelectorAll(".data");

// for (let button of filterButtons) {

//     button.addEventListener("click", () => {

//         let category = button.getAttribute("data-category");

//         for (let row of bookRows) {

//             if (
//                 category === "all" ||
//                 row.getAttribute("data-category") === category
//             ) {
//                 row.style.display = "";
//             }
//             else {
//                 row.style.display = "none";
//             }

//         }

//     });

// }
// //part8
// let status = document.getElementById("status");
// let hour = new Date().getHours();

// if (hour >= 8 && hour < 22) {

//     status.textContent = "We are Open!";
//     status.style.color = "green";

// }
// else {

//     status.textContent = "Closed - Open at 8 AM";
//     status.style.color = "red";

// }

// //part9
// let notes = document.getElementById("special-notes");
// let counter = document.getElementById("counter");

// notes.addEventListener("input", () => {

//     let remaining = 100 - notes.value.length;

//     counter.textContent = remaining + " characters remaining";

// });
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