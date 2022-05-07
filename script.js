const liElements = document.querySelectorAll(".navigation li a");

for (let el of liElements) {
    el.addEventListener("mouseover", () => {
       el.classList.add("normal");
       for (let el of liElements) {
           if (!el.classList.contains("normal")) {
               el.classList.add("other");
           }
       }
    })
    el.addEventListener("mouseout",() => {
        el.classList.remove("normal");
        for (let el of liElements) {
            if(el.classList.contains("other"))
                el.classList.remove("other");
        }
    })
}