const booksWrapperRef = document.getElementById('books-wrapper');

function renderBooks() {
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
    if (likeBtnRef.classList.toggle('liked')) {
        // Quelle: Ulrike Hässler, JavaScript Schnelleinstieg, Kapitel 10.3.5 „CSS‑Stile ändern“
        // CSS-Animation per JavaScript setzen
        likeBtnRef.style.animationName = 'myAnimation';
        likeBtnRef.style.animationDuration = '2s';
        likeDisplayerRef.innerHTML = parseInt(likeDisplayerRef.innerHTML) + 1;
    }
    else likeDisplayerRef.innerHTML = parseInt(likeDisplayerRef.innerHTML) - 1;
}

function addComment(i) {
    const inputRef = document.getElementById('input' + i);
    const tableRef = document.getElementById('comments-table' + i);

    tableRef.innerHTML += `
<tr>
    <th>[anonym]</th>
    <td>:  ${inputRef.value}</td>
</tr>
`;
    inputRef.value = "";
}

