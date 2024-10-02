var items = [];
function addItem() {
    var input = document.getElementById("user-input").value;
    if (input !== "") {

        ////////// add input to array
        items.push(input)
        document.getElementById("itemList").innerHTML = "";

        //////////start loop
        for (let i = 0; i < items.length; i++) {
            var li = document.createElement("li");
            li.textContent = items[i];

            document.getElementById("itemList").appendChild(li);

        }

        /////////////  clear input field
        document.getElementById("user-input").value = "";
    } else {
        alert("Please Enter the value under the Input :")
    }
}