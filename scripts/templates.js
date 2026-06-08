function getBookHTML(i) {
    return `
 <div class="book">
        <div class="book-title">
            <h3>${books[i].name}</h3>
        </div>
        <div class="img-wrapper">
            <div class="bg-img"></div>
            <button class="favorite-btn" onclick="toggleFavoriteClass(${i})">
                <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 116.864" enable-background="new 0 0 122.88 116.864" xml:space="preserve"><g><polygon id="favorite-icon${i}" stroke="black" stroke-width="6" fill="none" fill-rule="evenodd" clip-rule="evenodd" points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"/></g></svg>
            </button>
            <img class="book-img" src="./assets/img/book_img.png" alt="Bild eines Buches">
        </div>
        <div class="book-content">
            <div class="book-price-likes">
                <p>${books[i].price}€</p>
                <div class="book-likes">
                    <p class="like-displayer" id="like-displayer${i}">${books[i].likes}</p>
                    <button onclick="toggleHeart_BeatClass(${i})" class="like-btn">
                        <svg id="heart-icon${i}" stroke="black" stroke-width="1" 
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#07516a"
                            class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                    </button>
                    
                </div>
            </div>
            <table>
                <tr>
                    <th>Author</th>
                    <td>: ${books[i].author}</td>
                </tr>
                <tr>
                    <th>Erscheinungsjahr&nbsp;&nbsp;</th>
                    <td>: ${books[i].publishedYear}</td>
                </tr>
                <tr>
                    <th>Genre</th>
                    <td>: ${books[i].genre}</td>
                </tr>
            </table>
        </div>
        <div class="book-comments">
            <h4>Kommentare:</h4>
            <div class="display-comments" id="display-comments${i}">
                <table id="comments-table${i}">
                </table>
            </div>
            <div class="input-container">
                <input id="input${i}" placeholder="Schreibe dein Kommentar..." type="text">
                <button class="send-comment-btn" onclick="addComment(${i})">
                    <svg fill="#000000" width="800" height="800" viewBox="0 0 31.806 31.806"
                        xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M1.286,12.465c-0.685,0.263-1.171,0.879-1.268,1.606c-0.096,0.728,0.213,1.449,0.806,1.88l6.492,4.724L30.374,2.534
                    L9.985,22.621l8.875,6.458c0.564,0.41,1.293,0.533,1.964,0.33c0.67-0.204,1.204-0.713,1.444-1.368l9.494-25.986
                    c0.096-0.264,0.028-0.559-0.172-0.756c-0.199-0.197-0.494-0.259-0.758-0.158L1.286,12.465z" />
                            <path d="M5.774,22.246l0.055,0.301l1.26,6.889c0.094,0.512,0.436,0.941,0.912,1.148c0.476,0.206,1.025,0.162,1.461-0.119
                    c1.755-1.132,4.047-2.634,3.985-2.722L5.774,22.246z" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>`;
}

function getCommentHTML(i, j) {
    return `
<tr>
    <th>[${books[i].comments[j].name}]&nbsp;&nbsp;</th>
    <td>:  ${books[i].comments[j].comment}</td>
</tr>`;
}

function getNewCommentHTML(value) {
    return `
<tr>
    <th>[anonym]&nbsp;&nbsp;</th>
    <td>:  ${value}</td>
</tr>`;
}

