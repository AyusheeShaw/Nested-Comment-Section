document.addEventListener("DOMContentLoaded", function () {
    const Commentinput = document.getElementById("Commentinput");
    const submitbtn = document.getElementById("submitComment");
    const commentContainer = document.querySelector(".commentContainer");

    submitbtn.addEventListener("click", (e) => {
        const textareacontent = Commentinput.value.trim();
        console.log(textareacontent);
        if (textareacontent) {
            createCommentBox(textareacontent);
            Commentinput.value = "";
        }
    });
    commentContainer.addEventListener("click", (e) => {
        if (e.target.className.includes("replyBtn")) {
            const parent = e.target.parentElement;
            const textbox = parent.querySelector(".replyInput").value.trim();
            if (textbox) {
                createreply(parent, textbox);
                parent.querySelector(".replyInput").value = "";
            }
        }
    });
    function createCommentBox(text) {
        const div = document.createElement("div");
        div.classList = "repliesContainer";
        div.innerHTML = `
                        <p>${text}</p>
                <button class="replyBtn">Reply</button>
                <textarea
                    class="replyInput"
                    placeholder="write a reply..."
                ></textarea>
        `;
        commentContainer.appendChild(div);
    }
    function createreply(parent, text) {
        const div = document.createElement("div");
        div.classList = "repliesContainer";
        div.innerHTML = `
                        <p>${text}</p>
                <button class="replyBtn">Reply</button>
                <textarea
                    class="replyInput"
                    placeholder="write a reply..."
                ></textarea>
        `;
        parent.appendChild(div);
    }
});
