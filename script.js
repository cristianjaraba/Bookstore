const booksWrapperRef = document.getElementById('books-wrapper');

function renderBooks() {
    getFromLocalStorage();
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        booksWrapperRef.innerHTML += getBookHTML(bookIndex);
        if (books[bookIndex].liked) {
            const likeBtnRef = document.getElementById('heart-icon' + bookIndex);
            likeBtnRef.classList.add('liked');
        }
        if (books[bookIndex].favorite) {
            const favoriteBtnRef = document.getElementById('favorite-icon' + bookIndex);
            favoriteBtnRef.classList.add('favorite');
        }
        if (books[bookIndex].comments.length == 0) {
            document.getElementById("display-comments" + bookIndex).innerHTML = "Noch keine Kommentare";
        }
        const commentsTableRef = document.getElementById('comments-table' + bookIndex);
        for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
            commentsTableRef.innerHTML += getCommentHTML(bookIndex, commentIndex);
        }
    }
}

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

function getNewLikesAmount(i) {
    let newLikesAmount;
    const likesDisplayerRef = document.getElementById('like-displayer' + i);
    if (books[i].liked) {
        newLikesAmount = parseInt(likesDisplayerRef.innerHTML) - 1;
        books[i].liked = false;
    } else {
         newLikesAmount = parseInt(likesDisplayerRef.innerHTML) + 1;
         books[i].liked = true;
    }
    likesDisplayerRef.innerHTML = newLikesAmount;
    books[i].likes = newLikesAmount;
    saveToLocalStorage();
    return books[i].liked;
}

function toggleHeart_BeatClass(i) {
    const likeBtnRef = document.getElementById('heart-icon' + i);
    if (getNewLikesAmount(i)) {
        likeBtnRef.classList.add('heart-beat');
    }
    else {
        likeBtnRef.classList.remove('liked');
        likeBtnRef.classList.remove('heart-beat');
    }
}

function getNewLikesAmount(i) {
    let newLikesAmount;
    const likesDisplayerRef = document.getElementById('like-displayer' + i);
    if (books[i].liked) {
        newLikesAmount = parseInt(likesDisplayerRef.innerHTML) - 1;
        books[i].liked = false;
    } else {
         newLikesAmount = parseInt(likesDisplayerRef.innerHTML) + 1;
         books[i].liked = true;
    }
    likesDisplayerRef.innerHTML = newLikesAmount;
    books[i].likes = newLikesAmount;
    saveToLocalStorage();
    return books[i].liked;
}

function addComment(i) {
    const inputRef = document.getElementById('input' + i);
    if (inputRef.value == "") {
        return;
    }
    if (document.getElementById("display-comments" + i).innerHTML == "Noch keine Kommentare") {
        document.getElementById("display-comments" + i).innerHTML = `
        <table id="comments-table${i}">
                </table>`;
    }
    const commentsTableRef = document.getElementById('comments-table' + i);
    commentsTableRef.innerHTML += getNewCommentHTML(inputRef.value);
    books[i].comments.push(
        {
            "name": "anonym",
            "comment": `${inputRef.value}`
        }
    );
    inputRef.value = '';
    saveToLocalStorage();
}
function toggleFavoriteClass(i) {
   const favoriteBtnRef = document.getElementById('favorite-icon' + i);
    if (addFavorite(i)) {
        favoriteBtnRef.classList.add('favorite');
    }
    else {
        favoriteBtnRef.classList.remove('favorite');
    }
}
function addFavorite(i) {
    if (books[i].favorite) {
        books[i].favorite = false;
    }
    else{
        books[i].favorite = true;
    }
    saveToLocalStorage();
    return books[i].favorite;
}

function renderAllBooks() {
    booksWrapperRef.innerHTML = "";
    renderBooks();
}

function renderFavoriteBooks(){
    getFromLocalStorage();
    booksWrapperRef.innerHTML = "";
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        if (books[bookIndex].favorite) {
            booksWrapperRef.innerHTML += getBookHTML(bookIndex);
            const favoriteBtnRef = document.getElementById('favorite-icon' + bookIndex);
            favoriteBtnRef.classList.add('favorite');
            const commentsTableRef = document.getElementById('comments-table' + bookIndex);
            for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
            commentsTableRef.innerHTML += getCommentHTML(bookIndex, commentIndex);
            }
        }      
    }
}
