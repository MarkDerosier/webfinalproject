window.addEventListener("load", function(event) {

    let commentstore = document.querySelector("textarea[name=commentbody]").id;    

    document.querySelector("write-comment > form").addEventListener("submit", function(event){
        event.preventDefault();
        let author  = document.querySelector("input[name=commentauthor]");    
        let message = document.querySelector("textarea[name=commentbody]");    
        let comment  = {author: author.value, message: message.value};

        if(author.value === "" || message.value == "") { alert("Both fields need to be filled!"); return 1;}

        let comments = localStorage.getItem(commentstore);
        if(comments === null) {
            localStorage.setItem(commentstore, JSON.stringify([comment]));
        } else {
            let parsedcomments = JSON.parse(comments);
            localStorage.setItem(commentstore, JSON.stringify(parsedcomments.concat(comment)));
        }


        author.value  = "";
        message.value = "";

        let review = document.querySelector("comments-section");
        review.appendChild(makecomment(comment.author, comment.message));
        

    });

});
