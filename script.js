// ========================================
// ELISIABOOKS
// ========================================


// ========================================
// KİTAPLAR
// ========================================

const books = [

    {
        title: "Okyanus Dalgaları",

        genre: "Cinayet · Aksiyon · Dram",

        description:
            "Rusya'nın en başarılı yazılım mühendislerinden Natalia Deesmi, kendisinin bile bilmediği gerçekler yüzünden bir örgüt tarafından tutsak edilir. Peki bu örgütün Natalia'dan isteği nedir? Natalia, oradan kurtulabilecek ve gerçekleri öğrenebilecek midir?",

        cover: "",

        status: "YAYINDA",

        chapters: [
            {
                number: "Giriş",
                title: "GİRİŞ"
            },
            {
                number: "1",
                title: "OTOPARK"
            },
            {
                number: "2",
                title: "TANIŞMA"
            },
            {
                number: "3",
                title: "MAVİ"
            },
            {
                number: "4",
                title: "BİLMEMEN DAHA İYİ",
                unfinished: true
            }
        ]
    },

    {
        title: "",

        genre: "",

        description: "Yeni bir hikâye geliyor...",

        cover: "",

        status: "YAKINDA",

        chapters: []
    }

];


// ========================================
// KİTAPLARI EKRANA GETİR
// ========================================

function displayBooks(bookArray = books) {

    const bookList = document.getElementById("bookList");

    if (!bookList) {
        console.error("bookList bulunamadı.");
        return;
    }

    bookList.innerHTML = "";

    bookArray.forEach((book, index) => {

        const card = document.createElement("div");

        card.className = "book-card";


        // KAPAK

        let coverHTML;

        if (book.cover && book.cover.trim() !== "") {

            coverHTML = `
                <img
                    src="${book.cover}"
                    alt="${book.title}"
                    class="book-cover-image"
                >
            `;

        } else {

            coverHTML = `
                <div class="book-cover">
                    ${
                        book.status === "YAKINDA"
                            ? "COMING SOON"
                            : "📖"
                    }
                </div>
            `;

        }


        // YAKINDA OLAN KİTAP

        if (book.status === "YAKINDA") {

            card.innerHTML = `

                ${coverHTML}

                <div class="book-content">

                    <p class="eyebrow">
                        YAKINDA
                    </p>

                    <h3>
                        Yeni Bir Hikâye
                    </h3>

                    <p>
                        ${book.description}
                    </p>

                </div>

            `;

        }


        // YAYINDA OLAN KİTAP

        else {

            card.innerHTML = `

                ${coverHTML}

                <div class="book-content">

                    <p class="eyebrow">
                        ${book.status}
                    </p>

                    <h3>
                        ${book.title}
                    </h3>

                    <p class="book-genre">
                        ${book.genre}
                    </p>

                    <p>
                        ${book.description}
                    </p>

                    <button
                        type="button"
                        class="book-button"
                        onclick="openBook(${index})">

                        Kitabı incele →

                    </button>

                </div>

            `;

        }


        bookList.appendChild(card);

    });

}


// ========================================
// KİTAP AÇ
// ========================================

function openBook(index) {

    const book = books[index];

    if (!book) {
        return;
    }

    const chapterCount =
        book.chapters ? book.chapters.length : 0;

    alert(
        book.title +
        "\n\n" +
        "Bölüm sayısı: " +
        chapterCount
    );

}


// ========================================
// ARAMA PENCERESİNİ AÇ
// ========================================

function openSearch() {

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    if (!searchBox) {
        return;
    }

    searchBox.classList.add("active");

    if (searchInput) {
        searchInput.focus();
    }

}


// ========================================
// ARAMA PENCERESİNİ KAPAT
// ========================================

function closeSearch() {

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    if (searchBox) {
        searchBox.classList.remove("active");
    }

    if (searchInput) {
        searchInput.value = "";
    }

    displayBooks();

}


// ========================================
// KİTAP ARA
// ========================================

function searchBooks() {

    const input =
        document.getElementById("searchInput");

    if (!input) {
        return;
    }

    const text =
        input.value.trim().toLowerCase();


    if (text === "") {

        displayBooks();

        return;

    }


    const filteredBooks =
        books.filter(book => {

            const title =
                book.title
                    ? book.title.toLowerCase()
                    : "";

            const genre =
                book.genre
                    ? book.genre.toLowerCase()
                    : "";

            const description =
                book.description
                    ? book.description.toLowerCase()
                    : "";

            return (
                title.includes(text) ||
                genre.includes(text) ||
                description.includes(text)
            );

        });


    displayBooks(filteredBooks);

}


// ========================================
// KARANLIK MOD
// ========================================

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}


// ========================================
// DUYURULAR
// ========================================

const announcements = [

    {
        title: "ElisiaBooks açıldı! 🎉",

        text:
            "Hikâyelerimin dünyasına hoş geldiniz. Okyanus Dalgaları'nın bölümleri yakında burada olacak."
    }

];


function displayAnnouncements() {

    const container =
        document.getElementById("announcementList");

    if (!container) {
        return;
    }

    container.innerHTML = "";


    announcements.forEach(item => {

        const announcement =
            document.createElement("div");

        announcement.className =
            "announcement";


        announcement.innerHTML = `

            <h3>
                ${item.title}
            </h3>

            <p>
                ${item.text}
            </p>

        `;


        container.appendChild(announcement);

    });

}


// ========================================
// SAYFA TAMAMEN YÜKLENDİĞİNDE ÇALIŞTIR
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayBooks();

        displayAnnouncements();

    }
);

alert("SCRIPT CALISIYOR");
