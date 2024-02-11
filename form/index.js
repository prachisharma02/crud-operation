function addRow(email, password, address, city, state, zip) {
  const tableBody = document.getElementById("userTableBody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <th scope="row">${tableBody.children.length + 1}</th>
    <td>${email}</td>
    <td>${password}</td>
    <td>${address}</td>
   
    <td>${city}</td>
    <td>${state}</td>
    <td>${zip}</td>
    <td>
      <button class="btn btn-warning btn-sm edit-btn">Edit</button>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    </td>
  `;
  tableBody.appendChild(newRow);
  const editButton = newRow.querySelector(".edit-btn");
  const deleteButton = newRow.querySelector(".delete-btn");
  //deleting
  deleteButton.addEventListener("click", function () {
    newRow.remove();
    console.log("Delete clicked for:", email);
  });
}
//editing
document.querySelector("#userTableBody").addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("edit-btn")) {
    const selectedRow = target.closest("tr");
    document.getElementById("inputEmail4").value =
      selectedRow.cells[1].textContent;
    document.getElementById("inputPassword4").value =
      selectedRow.cells[2].textContent;
    document.getElementById("inputAddress").value =
      selectedRow.cells[3].textContent;

    document.getElementById("inputCity").value =
      selectedRow.cells[5].textContent;
    document.getElementById("inputState").value =
      selectedRow.cells[6].textContent;
    document.getElementById("inputZip").value =
      selectedRow.cells[7].textContent;
    selectedRow.remove();

    document
      .getElementById("userForm")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        selectedRow.cells[1].textContent =
          document.getElementById("inputEmail4").value;
        selectedRow.cells[2].textContent =
          document.getElementById("inputPassword4").value;
        selectedRow.cells[3].textContent =
          document.getElementById("inputAddress").value;

        selectedRow.cells[5].textContent =
          document.getElementById("inputCity").value;
        selectedRow.cells[6].textContent =
          document.getElementById("inputState").value;
        selectedRow.cells[7].textContent =
          document.getElementById("inputZip").value;

        document.getElementById("userForm").reset();

        document
          .getElementById("userForm")
          .removeEventListener("submit", arguments.callee);
      });
  }
});
//adding
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("inputEmail4").value;
    const password = document.getElementById("inputPassword4").value;
    const address = document.getElementById("inputAddress").value;
    const city = document.getElementById("inputCity").value;
    const state = document.getElementById("inputState").value;
    const zip = document.getElementById("inputZip").value;

    addRow(email, password, address, city, state, zip);
    alert("data submitted successfully");

    document.getElementById("userForm").reset();
  });
