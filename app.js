// app.js for Inventory Management System

// Example: Function to display a welcome message in the console
function displayWelcome() {
    console.log('Welcome to the Inventory Management System');
}

// Call the welcome function
displayWelcome();

// Placeholder for future inventory logic
// Example: Function to add a new item (to be expanded as needed)
function addItem(name, quantity) {
    console.log(`Added item: ${name}, Quantity: ${quantity}`);
}

// Example usage
addItem('Sample Item', 10);

console.log('hello');
console.log('world');

// Enhanced interactivity for User Details Form

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const result = document.getElementById('result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const age = document.getElementById('age').value.trim();

        // Simple validation
        if (!name || !email || !age) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        if (isNaN(age) || age < 1 || age > 120) {
            showMessage('Please enter a valid age (1-120).', 'error');
            return;
        }

        // Show user details with animation
        result.innerHTML = `
            <div class="user-card animate-in">
                <h3>🎉 User Details Submitted!</h3>
                <p><strong>👤 Name:</strong> ${name}</p>
                <p><strong>📧 Email:</strong> ${email}</p>
                <p><strong>🎂 Age:</strong> ${age}</p>
            </div>
        `;
        form.reset();
    });

    function showMessage(msg, type) {
        result.innerHTML = `<div class="message ${type} animate-in">${msg}</div>`;
        setTimeout(() => {
            const msgDiv = document.querySelector('.message');
            if (msgDiv) msgDiv.classList.remove('animate-in');
        }, 2000);
    }

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }
});