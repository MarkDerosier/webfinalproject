window.addEventListener("load", function(event) {

    let review = document.querySelector("comments-section");

    let commentstore = document.querySelector("textarea[name=commentbody]").id;


    let comments = JSON.parse(localStorage.getItem(commentstore));
    if(comments === null) {} else {

        comments.forEach(function(x) {
            review.appendChild(makecomment(x.author, x.message));
        });
    }
     
});

