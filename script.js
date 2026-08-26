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

        description:
            "Yeni bir hikâye geliyor...",

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

    if (!bookList) return;

    bookList.innerHTML = "";

    bookArray.forEach((book, index) => {

        const card = document.createElement("div");

        card.className = "book-card";

        let coverHTML = "";

        if (book.cover && book.cover !== "") {

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

        } else {

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
// KİTABI AÇ
// ========================================

function openBook(index) {

    const book = books[index];

    if (!book) return;


    // Daha önce açılmış kitap ekranı varsa kaldır

    const oldPage =
        document.getElementById("bookDetailPage");

    if (oldPage) {
        oldPage.remove();
    }


    // Kitap detay ekranı

    const page =
        document.createElement("div");

    page.id = "bookDetailPage";


    page.innerHTML = `

        <div
            style="
                position: fixed;
                inset: 0;
                z-index: 9999;
                background: #ffffff;
                overflow-y: auto;
                padding: 30px 20px 60px;
            "
        >

            <div
                style="
                    max-width: 850px;
                    margin: 0 auto;
                "
            >

                <button
                    type="button"
                    onclick="closeBook()"
                    style="
                        border: none;
                        background: none;
                        font-size: 16px;
                        cursor: pointer;
                        margin-bottom: 40px;
                        padding: 5px 0;
                    "
                >
                    ← Kitaplara dön
                </button>


                <p
                    style="
                        font-size: 11px;
                        letter-spacing: 3px;
                        color: #888888;
                        margin-bottom: 10px;
                    "
                >
                    ${book.status}
                </p>


                <h1
                    style="
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: clamp(38px, 7vw, 60px);
                        line-height: 1.1;
                        margin-bottom: 15px;
                        color: #222222;
                    "
                >
                    ${book.title}
                </h1>


                <p
                    style="
                        color: #888888;
                        margin-bottom: 20px;
                    "
                >
                    ${book.genre}
                </p>


                <p
                    style="
                        color: #666666;
                        font-size: 17px;
                        line-height: 1.7;
                        max-width: 700px;
                        margin-bottom: 50px;
                    "
                >
                    ${book.description}
                </p>


                <h2
                    style="
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 32px;
                        margin-bottom: 25px;
                        color: #222222;
                    "
                >
                    Bölümler
                </h2>


                <div
                    style="
                        border-top: 1px solid #eeeeee;
                    "
                >

                    ${
                        book.chapters.map((chapter, chapterIndex) => `

                            <button
                                type="button"
                                onclick="openChapter(${index}, ${chapterIndex})"
                                style="
                                    width: 100%;
                                    display: flex;
                                    align-items: center;
                                    gap: 18px;
                                    text-align: left;
                                    border: none;
                                    border-bottom: 1px solid #eeeeee;
                                    background: #ffffff;
                                    padding: 20px 8px;
                                    cursor: pointer;
                                    font-family: Georgia, 'Times New Roman', serif;
                                "
                            >

                                <span
                                    style="
                                        width: 45px;
                                        color: #888888;
                                        font-size: 13px;
                                    "
                                >
                                    ${chapter.number}
                                </span>


                                <span
                                    style="
                                        flex: 1;
                                        color: #222222;
                                        font-size: 17px;
                                    "
                                >
                                    ${chapter.title}
                                </span>


                                <span
                                    style="
                                        color: #888888;
                                        font-size: 18px;
                                    "
                                >
                                    →
                                </span>

                            </button>

                        `).join("")
                    }

                </div>

            </div>

        </div>

    `;


    document.body.appendChild(page);

    document.body.style.overflow = "hidden";

}


// ========================================
// KİTABI KAPAT
// ========================================

function closeBook() {

    const page =
        document.getElementById("bookDetailPage");

    if (page) {
        page.remove();
    }

    document.body.style.overflow = "";

}


// ========================================
// BÖLÜMÜ AÇ
// ========================================

function openChapter(bookIndex, chapterIndex) {

    const book = books[bookIndex];

    if (!book || !book.chapters) return;

    const chapter =
        book.chapters[chapterIndex];

    if (!chapter) return;


    if (chapter.unfinished) {

        alert(
            "Bu bölüm henüz tamamlanmadı. 📖"
        );

        return;

    }


    // Şimdilik bölüm içeriği eklenmediği için
    // bölümün seçildiğini gösteriyoruz.

    const page =
        document.getElementById("bookDetailPage");

    if (!page) return;


    page.innerHTML = `

        <div
            style="
                position: fixed;
                inset: 0;
                z-index: 9999;
                background: #ffffff;
                overflow-y: auto;
                padding: 30px 20px 60px;
            "
        >

            <div
                style="
                    max-width: 750px;
                    margin: 0 auto;
                "
            >

                <button
                    type="button"
                    onclick="openBook(${bookIndex})"
                    style="
                        border: none;
                        background: none;
                        font-size: 16px;
                        cursor: pointer;
                        margin-bottom: 50px;
                        padding: 5px 0;
                    "
                >
                    ← Bölümlere dön
                </button>


                <p
                    style="
                        font-size: 11px;
                        letter-spacing: 3px;
                        color: #888888;
                        margin-bottom: 15px;
                    "
                >
                    ${book.title}
                </p>


                <h1
                    style="
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: clamp(35px, 7vw, 55px);
                        line-height: 1.1;
                        margin-bottom: 35px;
                        color: #222222;
                    "
                >
                    ${chapter.title}
                </h1>


                <div
                    style="
                        border-top: 1px solid #eeeeee;
                        padding-top: 30px;
                        color: #666666;
                        font-family: Georgia, 'Times New Roman', serif;
                        font-size: 18px;
                        line-height: 1.8;
                    "
                >

                    <p>
                        Bu bölümün metni henüz eklenmedi.
                    </p>

                    <p>
                        Bölüm metnini daha sonra buraya
                        ekleyebiliriz.
                    </p>

                </div>

            </div>

        </div>

    `;

}


// ========================================
// ARAMA
// ========================================

function openSearch() {

    const searchBox =
        document.getElementById("searchBox");

    const searchInput =
        document.getElementById("searchInput");

    if (!searchBox) return;

    searchBox.classList.add("active");

    if (searchInput) {
        searchInput.focus();
    }

}


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


function searchBooks() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;

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

    if (!container) return;

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
// SAYFA AÇILDIĞINDA
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        displayBooks();

        displayAnnouncements();

    }
);
