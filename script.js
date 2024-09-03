document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const occupation = document.getElementById('occupation').value;
    const department = document.getElementById('department').value;

    addUser(fullName, email, occupation, department);
    clearForm();
});

function addUser(name, email, occupation, department) {
    const tableBody = document.getElementById('userTableBody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${occupation}</td>
        <td>${department}</td>
        <td class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Handle delete action
    row.querySelector('.delete').addEventListener('click', function() {
        row.remove();
    });

    // Handle edit action
    row.querySelector('.edit').addEventListener('click', function() {
        editUser(row, name, email, occupation, department);
    });
}

function clearForm() {
    document.getElementById('userForm').reset();
}

function editUser(row, name, email, occupation, department) {
    // Populate the form with existing data for editing
    document.getElementById('fullName').value = name;
    document.getElementById('email').value = email;
    document.getElementById('occupation').value = occupation;

    document.getElementById('department').value = department;

    // Remove the row being edited
    row.remove();
}

    