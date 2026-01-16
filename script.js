// IPO Data Array (Simulating API)
const ipoData = [
    {
        name: "TechNova Solutions",
        price: "₹450 - ₹480",
        issueSize: "500 Cr",
        status: "Open"
    },
    {
        name: "GreenEnergy Ltd",
        price: "₹120 - ₹135",
        issueSize: "1200 Cr",
        status: "Open"
    },
    {
        name: "Urban BuildCon",
        price: "₹210 - ₹225",
        issueSize: "300 Cr",
        status: "Closed"
    }
];

// DOM Elements
const container = document.getElementById("ipo-list-container");
const modal = document.getElementById("application-modal");
const modalCompanyLabel = document.getElementById("modal-company-name");

// --- INITIALIZATION ---
function loadDashboard() {
    console.log("Initializing Dashboard...");
    
    // Clear container to be safe
    container.innerHTML = "";

    // Loop through data and create cards
    ipoData.forEach((ipo) => {
        let card = document.createElement("div");
        card.classList.add("ipo-card");

        // Conditional rendering for button
        let buttonHTML;
        if (ipo.status === "Open") {
            // If open, call apply() function with company name
            buttonHTML = `<button class="btn-apply" onclick="apply('${ipo.name}')">Apply Now</button>`;
        } else {
            // If closed, disable button
            buttonHTML = `<button class="btn-apply btn-disabled">Bidding Closed</button>`;
        }

        card.innerHTML = `
            <div class="company-name">${ipo.name}</div>
            <div class="details">Price Band: ${ipo.price}</div>
            <div class="details">Issue Size: ${ipo.issueSize}</div>
            <div class="details">Status: <strong style="color: ${ipo.status === 'Open' ? 'green' : 'red'}">${ipo.status}</strong></div>
            ${buttonHTML}
        `;

        container.appendChild(card);
    });
}

// --- MODAL FUNCTIONS ---

// 1. Open Modal
function apply(companyName) {
    console.log("Opening application for:", companyName);
    modalCompanyLabel.innerText = "Applying for: " + companyName;
    modal.style.display = "flex"; // Shows the overlay
}

// 2. Close Modal
function closeModal() {
    modal.style.display = "none";
    // Clear inputs for next time
    document.getElementById("applicant-name").value = "";
    document.getElementById("lot-quantity").value = "";
}

// 3. Submit Form Logic
function submitApplication() {
    const name = document.getElementById("applicant-name").value;
    const quantity = document.getElementById("lot-quantity").value;

    // Validation: Check if fields are empty
    if (name.trim() === "" || quantity.trim() === "") {
        alert("Please enter both your Name and Quantity.");
        return; // Stop function here
    }

    // Success Simulation
    alert(`Success! Application submitted for ${quantity} lots under name: ${name}`);
    
    closeModal();
}

// 4. Close modal when clicking outside the box
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}

// Load the dashboard when script runs
loadDashboard();