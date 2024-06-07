const inputValue = document.getElementById("user-input");

const numbers = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if(inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        } else if(inputValue.innerText === "0"){
            inputValue.innerText = "";
        } else {
            inputValue.innerText += e.target.innerHTML.trim();
        }
    });
})
