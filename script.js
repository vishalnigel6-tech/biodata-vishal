/* =========================================
   DATA DEFAULT
========================================= */

const defaultData = {
    nama: "Vishal Pratama",
    panggilan: "Vishal",
    ttl: "Medan, 22 Juli 2009",
    gender: "Laki-laki",
    alamat: "Medan, Sumatera Utara",
    sekolah: "SMK BRIGJEND KATAMSO I",
    kelas: "XII",
    jurusan: "Rekayasa Perangkat Lunak",
    hobi: "Coding, Musik, Gaming",
    citaCita: "Software Developer",
    email: "vishalnigel*@example.com",
    telepon: "0821-7739-6716",
    deskripsi:
        "Halo! Saya adalah seorang pelajar yang memiliki ketertarikan pada teknologi, desain, dan pemrograman. Saya senang mempelajari hal-hal baru dan mengembangkan kemampuan saya."
};


/* =========================================
   LOAD DATA
========================================= */

let data =
    JSON.parse(localStorage.getItem("biodata")) ||
    defaultData;


/* =========================================
   FUNGSI UNTUK MENAMPILKAN DATA
========================================= */

function tampilkanData() {

    document.getElementById("displayNama").textContent =
        data.nama;

    document.getElementById("displaySekolah").textContent =
        `Pelajar • ${data.sekolah}`;

    document.getElementById("displayPanggilan").textContent =
        data.panggilan;

    document.getElementById("displayTTL").textContent =
        data.ttl;

    document.getElementById("displayGender").textContent =
        data.gender;

    document.getElementById("displayAlamat").textContent =
        data.alamat;

    document.getElementById("displaySekolahDetail").textContent =
        data.sekolah;

    document.getElementById("displayKelas").textContent =
        data.kelas;

    document.getElementById("displayJurusan").textContent =
        data.jurusan;

    document.getElementById("displayHobi").textContent =
        data.hobi;

    document.getElementById("displayCitaCita").textContent =
        data.citaCita;

    document.getElementById("displayEmail").textContent =
        data.email;

    document.getElementById("displayTelepon").textContent =
        data.telepon;

    document.getElementById("displayDeskripsi").textContent =
        data.deskripsi;
}


/* =========================================
   DETAIL MODAL
========================================= */

const detailModal =
    document.getElementById("detailModal");

const detailBtn =
    document.getElementById("detailBtn");

const closeDetail =
    document.getElementById("closeDetail");


detailBtn.addEventListener("click", () => {

    document.getElementById("modalNama").textContent =
        data.nama;

    document.getElementById("modalPanggilan").textContent =
        data.panggilan;

    document.getElementById("modalTTL").textContent =
        data.ttl;

    document.getElementById("modalGender").textContent =
        data.gender;

    document.getElementById("modalAlamat").textContent =
        data.alamat;

    document.getElementById("modalSekolah").textContent =
        data.sekolah;

    document.getElementById("modalKelas").textContent =
        data.kelas;

    document.getElementById("modalJurusan").textContent =
        data.jurusan;

    document.getElementById("modalHobi").textContent =
        data.hobi;

    document.getElementById("modalCitaCita").textContent =
        data.citaCita;

    document.getElementById("modalEmail").textContent =
        data.email;

    document.getElementById("modalTelepon").textContent =
        data.telepon;

    detailModal.classList.add("active");
});


closeDetail.addEventListener("click", () => {

    detailModal.classList.remove("active");

});


/* =========================================
   EDIT MODAL
========================================= */

const editModal =
    document.getElementById("editModal");

const editBtn =
    document.getElementById("editBtn");

const closeEdit =
    document.getElementById("closeEdit");


editBtn.addEventListener("click", () => {

    isiForm();

    editModal.classList.add("active");

});


closeEdit.addEventListener("click", () => {

    editModal.classList.remove("active");

});


/* =========================================
   MENGISI FORM
========================================= */

function isiForm() {

    document.getElementById("nama").value =
        data.nama;

    document.getElementById("panggilan").value =
        data.panggilan;

    document.getElementById("ttl").value =
        data.ttl;

    document.getElementById("gender").value =
        data.gender;

    document.getElementById("alamat").value =
        data.alamat;

    document.getElementById("sekolah").value =
        data.sekolah;

    document.getElementById("kelas").value =
        data.kelas;

    document.getElementById("jurusan").value =
        data.jurusan;

    document.getElementById("hobi").value =
        data.hobi;

    document.getElementById("citaCita").value =
        data.citaCita;

    document.getElementById("email").value =
        data.email;

    document.getElementById("telepon").value =
        data.telepon;

    document.getElementById("deskripsi").value =
        data.deskripsi;
}


/* =========================================
   SIMPAN DATA
========================================= */

const editForm =
    document.getElementById("editForm");


editForm.addEventListener("submit", (event) => {

    event.preventDefault();


    /* Ambil nilai dari form */

    data = {

        nama:
            document.getElementById("nama").value.trim(),

        panggilan:
            document.getElementById("panggilan").value.trim(),

        ttl:
            document.getElementById("ttl").value.trim(),

        gender:
            document.getElementById("gender").value,

        alamat:
            document.getElementById("alamat").value.trim(),

        sekolah:
            document.getElementById("sekolah").value.trim(),

        kelas:
            document.getElementById("kelas").value.trim(),

        jurusan:
            document.getElementById("jurusan").value.trim(),

        hobi:
            document.getElementById("hobi").value.trim(),

        citaCita:
            document.getElementById("citaCita").value.trim(),

        email:
            document.getElementById("email").value.trim(),

        telepon:
            document.getElementById("telepon").value.trim(),

        deskripsi:
            document.getElementById("deskripsi").value.trim()

    };


    /* Simpan ke Local Storage */

    localStorage.setItem(
        "biodata",
        JSON.stringify(data)
    );


    /* Update tampilan */

    tampilkanData();


    /* Tutup modal */

    editModal.classList.remove("active");


    /* Notifikasi */

    alert("Data berhasil diperbarui!");


});


/* =========================================
   DARK MODE
========================================= */

const darkModeBtn =
    document.getElementById("darkModeBtn");


darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const icon =
        darkModeBtn.querySelector("i");


    if (document.body.classList.contains("dark")) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "darkMode",
            "enabled"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "darkMode",
            "disabled"
        );

    }

});


/* =========================================
   LOAD DARK MODE
========================================= */

if (
    localStorage.getItem("darkMode") ===
    "enabled"
) {

    document.body.classList.add("dark");

    const icon =
        darkModeBtn.querySelector("i");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");
}


/* =========================================
   TUTUP MODAL KETIKA KLIK DI LUAR
========================================= */

window.addEventListener("click", (event) => {

    if (event.target === detailModal) {

        detailModal.classList.remove("active");

    }


    if (event.target === editModal) {

        editModal.classList.remove("active");

    }

});


/* =========================================
   JALANKAN PROGRAM
========================================= */

tampilkanData();