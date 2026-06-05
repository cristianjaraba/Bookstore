const booksWrapperRef = document.getElementById('books-wrapper');

function saveToLocalStorage() {
    localStorage.setItem("myBooks", JSON.stringify(books));
}

function getFromLocalStorage() {
    let booksFromLocalStorage = JSON.parse(localStorage.getItem("myBooks"));
    if (booksFromLocalStorage == null) {
        saveToLocalStorage();
        books = JSON.parse(localStorage.getItem("myBooks"));
    } else {
        books = JSON.parse(localStorage.getItem("myBooks"));
    }
}

function renderBooks() {
    getFromLocalStorage();
    booksWrapperRef.innerHTML = "";
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        booksWrapperRef.innerHTML += getBookHTML(bookIndex);
        if (books[bookIndex].liked) {
            const likeBtnRef = document.getElementById('heart-icon' + bookIndex);
            likeBtnRef.classList.add('liked');
        }
        const commentsTableRef = document.getElementById('comments-table' + bookIndex);
        for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
            commentsTableRef.innerHTML += getCommentHTML(bookIndex, commentIndex);
        }
    }
}

function likeDislike(i) {
    const likeBtnRef = document.getElementById('heart-icon' + i);
    const likeDisplayerRef = document.getElementById('like-displayer' + i);
    let newLikesAmount;
    if (likeBtnRef.classList.contains('liked')) {
        likeBtnRef.classList.remove('liked');
        newLikesAmount = parseInt(likeDisplayerRef.innerHTML) - 1;
        books[i].liked = false;
    }
    else {
        likeBtnRef.classList.add('liked');
        newLikesAmount = parseInt(likeDisplayerRef.innerHTML) + 1;
        books[i].liked = true;
    }
    books[i].likes = newLikesAmount;
    saveToLocalStorage();
    renderBooks();
}

function addComment(i) {
    const inputRef = document.getElementById('input' + i);
    books[i].comments.push(
        {
            "name": "anonym",
            "comment": `${inputRef.value}`
        }
    );
    saveToLocalStorage();
    renderBooks();
}

