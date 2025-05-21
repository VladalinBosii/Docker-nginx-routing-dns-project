document.addEventListener("DOMContentLoaded", function () {
    const studentList = document.getElementById('studentList');
    const form = document.getElementById('studentForm');
    const alertContainer = document.getElementById('alertContainer');
    const subtitle = document.getElementById('student-subtitle');

    function showAlert(type, message) {
        alertContainer.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    }

    function fetchStudents() {
        fetch('/app/api/students')
            .then(res => res.json())
            .then(students => {
                studentList.innerHTML = '';
                if (students.length === 0) {
                    studentList.innerHTML = '<li class="text-muted text-center">No students yet.</li>';
                    subtitle.textContent = "";
                } else {
                    students.forEach(stu => {
                        studentList.innerHTML += `
              <li class="student-item">
                <span>
                  <i class="fas fa-user text-primary me-2"></i>
                  <strong>${stu.name}</strong> <span class="text-muted">(${stu.email})</span>
                </span>
              </li>`;
                    });
                }
            })
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        if (!name || !email) {
            showAlert('warning', 'Please fill out all fields.');
            return;
        }
        fetch('/app/api/students', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email})
        })
            .then(res => {
                if (!res.ok) throw new Error('Add failed');
                return res.json();
            })
            .then(() => {
                showAlert('success', 'Student added successfully!');
                fetchStudents();
                form.reset();
            })
            .catch(() => showAlert('danger', 'Failed to add student!'));
    });

    fetchStudents();
});
