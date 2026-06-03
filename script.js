const booksWrapperRef = document.getElementById('books-wrapper');

// const likeBtnRef = document.getElementById('heart-icon');

function renderBooks() {
    booksWrapperRef.innerHTML = "";
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
        booksWrapperRef.innerHTML += getBookHTML(bookIndex);
        const commentsTableRef = document.getElementById('comments-table' + bookIndex);
        for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
            commentsTableRef.innerHTML += getCommentHTML(bookIndex, commentIndex);
        }
    }
}

// function toggleLikeAndLiked() {
//     likeBtnRef.classList.toggle('liked');
// }