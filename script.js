// ==============================
// NAVIGASI HALAMAN
// ==============================

const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const pageName = item.dataset.page;

        showPage(pageName);

    });

});


function showPage(pageName) {

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);
    const selectedNav = document.querySelector(
        `.nav-item[data-page="${pageName}"]`
    );

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    if (selectedNav) {
        selectedNav.classList.add("active");
    }

}


// ==============================
// MODAL
// ==============================

function openModal(id) {

    document.getElementById(id).classList.add("show");

}


function closeModal(id) {

    document.getElementById(id).classList.remove("show");

}


// Klik luar modal

window.addEventListener("click", function(event) {

    if (event.target.classList.contains("modal")) {
        event.target.classList.remove("show");
    }

});


// ==============================
// TAMBAH KARYAWAN
// ==============================

const employeeForm = document.getElementById("employeeForm");

employeeForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("employeeName").value;
    const email = document.getElementById("employeeEmail").value;
    const position = document.getElementById("employeePosition").value;
    const department = document.getElementById("employeeDepartment").value;

    const initials = name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>

            <div class="employee">

                <div class="avatar blue-avatar">
                    ${initials}
                </div>

                <div>

                    <strong>${name}</strong>

                    <small>
                        ${email}
                    </small>

                </div>

            </div>

        </td>

        <td>
            EMP-${Math.floor(Math.random() * 900 + 100)}
        </td>

        <td>
            ${position}
        </td>

        <td>
            ${department}
        </td>

        <td>
            <span class="badge green-badge">
                Aktif
            </span>
        </td>

        <td>

            <button class="action-btn">
                ✏️
            </button>

            <button
                class="action-btn"
                onclick="this.closest('tr').remove()"
            >
                🗑️
            </button>

        </td>

    `;

    document.getElementById("allEmployees").appendChild(row);

    document.getElementById("employeeCount").textContent =
        document.getElementById("allEmployees").rows.length + 24;

    employeeForm.reset();

    closeModal("employeeModal");

    showToast(
        "Karyawan berhasil ditambahkan!"
    );

});


// ==============================
// TOAST
// ==============================

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.querySelector("p").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// ==============================
// ABSENSI
// ==============================

function checkIn() {

    const now = new Date();

    const time = now.toLocaleTimeString(
        "id-ID",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );

    showToast(
        `Absensi berhasil pada ${time}`
    );

}


// ==============================
// TAMBAH TUGAS
// ==============================

function addTask() {

    const task = prompt(
        "Masukkan nama tugas:"
    );

    if (!task) return;

    showToast(
        `Tugas "${task}" berhasil dibuat`
    );

}


// ==============================
// SEARCH KARYAWAN
// ==============================

const employeeSearch =
    document.getElementById("employeeSearch");

if (employeeSearch) {

    employeeSearch.addEventListener(
        "input",
        function() {

            const keyword =
                this.value.toLowerCase();

            const rows =
                document.querySelectorAll(
                    "#allEmployees tr"
                );

            rows.forEach(row => {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(keyword)
                        ? ""
                        : "none";

            });

        }
    );

}


// ==============================
// GLOBAL SEARCH
// ==============================

const globalSearch =
    document.getElementById("globalSearch");

globalSearch.addEventListener(
    "keypress",
    function(e) {

        if (e.key === "Enter") {

            showToast(
                `Mencari: ${this.value}`
            );

        }

    }
);


// ==============================
// DARK MODE
// ==============================

const themeBtn =
    document.getElementById("themeBtn");

let darkMode =
    localStorage.getItem("darkMode") === "true";

function applyTheme() {

    if (darkMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#0f172a"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#1e293b"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f8fafc"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#334155"
        );

        themeBtn.textContent = "☀️";

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#f5f7fb"
        );

        document.documentElement.style.setProperty(
            "--card",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#e5e7eb"
        );

        themeBtn.textContent = "🌙";

    }

}

applyTheme();

themeBtn.addEventListener("click", () => {

    darkMode = !darkMode;

    localStorage.setItem(
        "darkMode",
        darkMode
    );

    applyTheme();

});


// ==============================
// CHART DASHBOARD
// ==============================

const activityCanvas =
    document.getElementById("activityChart");

if (activityCanvas) {

    new Chart(
        activityCanvas,
        {

            type: "line",

            data: {

                labels: [
                    "Sen",
                    "Sel",
                    "Rab",
                    "Kam",
                    "Jum",
                    "Sab",
                    "Min"
                ],

                datasets: [

                    {
                        label: "Aktivitas",

                        data: [
                            45,
                            60,
                            52,
                            75,
                            68,
                            82,
                            70
                        ],

                        borderWidth: 3,

                        tension: .4,

                        fill: true
                    }

                ]

            },

            options: {

                responsive: true,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {

                    y: {
                        beginAtZero: true
                    }

                }

            }

        }
    );

}


// ==============================
// REPORT CHART
// ==============================

const reportCanvas =
    document.getElementById("reportChart");

if (reportCanvas) {

    new Chart(
        reportCanvas,
        {

            type: "bar",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Agu"
                ],

                datasets: [

                    {
                        label: "Pendapatan",

                        data: [
                            45,
                            52,
                            48,
                            65,
                            70,
                            62,
                            78,
                            85
                        ],

                        borderRadius: 7

                    }

                ]

            },

            options: {

                responsive: true,

                plugins: {

                    legend: {
                        display: false
                    }

                }

            }

        }
    );

}