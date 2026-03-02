function bookRoom(roomName) {
    alert("Booking confirmed for " + roomName);
}

function openModal() {
    document.getElementById("bookingModal").style.display = "block";
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

// Close when clicking outside
window.onclick = function (event) {
    let modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form Submit
document.getElementById("bookingForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Room Booked Successfully!");
    closeModal();
});

