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


    // ====================================
    // YAKINDA GELECEK KİTAPLAR
    // ====================================

    {
        title: "",

        genre: "",

        description:
            "Yeni bir hikâye geliyor...",

        cover: "",

        status: "YAKINDA"

    }

];



// ========================================
// KİTAPLARI EKRANA GETİR
// ========================================

function displayBooks(bookArray = books) {

    const bookList =
        document.getElementById("bookList");

    bookList.innerHTML = "";


    bookArray.forEach((book, index) => {

        const card =
            document.createElement("div");

        card.className = "book-card";


        // --------------------------------
        // KAPAK
        // --------------------------------

        let coverHTML = "";

        if (book.cover !== "") {

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

                    ${book.status === "YAKINDA"
                        ? "COMING SOON"
                        : "📖"
                    }

                </div>
            `;

        }


        // --------------------------------
        // YAKINDA KİTABI
        // --------------------------------

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


        // --------------------------------
        // NORMAL KİTAP
        // --------------------------------

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

    if (book.status === "YAYINDA") {
        window.location.href = "book.html";
    }

}



// ========================================
// ARAMA
// ========================================

function openSearch() {

    const searchBox =
        document.getElementById("searchBox");

    searchBox.classList.add("active");

    document
        .getElementById("searchInput")
        .focus();

}


function closeSearch() {

    const searchBox =
        document.getElementById("searchBox");

    searchBox.classList.remove("active");

    document
        .getElementById("searchInput")
        .value = "";

    displayBooks();

}


function searchBooks() {

    const text =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();


    const filteredBooks =
        books.filter(book =>

            book.title
                .toLowerCase()
                .includes(text)

        );


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
            "Hikâyelerimin dünyasına hoş geldiniz. Okyanus Dalgaları'nın bölümleri şimdi yayında."
    }

];


function displayAnnouncements() {

    const container =
        document.getElementById(
            "announcementList"
        );

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


        container.appendChild(
            announcement
        );

    });

}



// ========================================
// SAYFA AÇILDIĞINDA
// ========================================

displayBooks();

displayAnnouncements();
