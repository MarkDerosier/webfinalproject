function makecomment(author, message){
      let container = document.createElement("comment-container");

      let authorLine = document.createElement("b");
      authorLine.appendChild(document.createTextNode(author));
      container.appendChild(authorLine);


      let messageBody = document.createElement("comment-body");
      messageBody.appendChild(document.createTextNode(message));
      container.appendChild(messageBody);

      return container;
}
