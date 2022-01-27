let navbarItems = ["Home", "About", "Work", "Contact"],
    ul = document.createElement("ul");

    document.getElementById("navbar").appendChild(ul);
    navbarItems.forEach(function (item) {
        let li = document.createElement("li");
        ul.appendChild(li);
        let a = document.createElement("a");
        li.appendChild(a);
        a.innerHTML += item;
        
    })