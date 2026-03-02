function openModal(roomName) {
    document.getElementById("bookingModal").style.display = "block";
    document.getElementById("roomTitle").innerText = "Book " + roomName;
}

function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
}

window.onclick = function (event) {
    let modal = document.getElementById("bookingModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bookingForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Room Booked Successfully!");
        closeModal();
    });
});