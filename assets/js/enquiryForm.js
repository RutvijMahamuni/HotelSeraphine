// Modal code given below
const form = document.getElementById("enquiry-form");
const fname = document.getElementById("fname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const loc = document.getElementById("location");
const dateIn = document.getElementById("chkIn");
const roomType = document.getElementById("room");
const subButton = document.getElementById("modalSubmit");
const modalContent = document.getElementById("modalTable");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission (no reload)
  modalContent.innerHTML = `<div class="modal-content">
            <div class="modal-header">
              <h1 class="text-center">Enquiry Confirmation</h1>
              <button class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <table>
                <tr>
                  <td>Name</td>
                  <td>${fname.value}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>${phone.value}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>${email.value}</td>
                </tr>
                <tr>
                  <td>Preferred Location</td>
                  <td>${loc.value}</td>
                </tr>
                <tr>
                  <td>Expected Check In</td>
                  <td>${dateIn.value}</td>
                </tr>
                <tr>
                  <td>Room type</td>
                  <td>${roomType.value}</td>
                </tr>
              </table>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success" id="modalSubmit"
               data-bs-dismiss="modal">
                Confirm
              </button>
            </div>
          </div>`;
  // Show the modal
  let myModal = new bootstrap.Modal(document.getElementById("confirmModal"));
  myModal.show();
});
