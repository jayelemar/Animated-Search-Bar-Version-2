const tabLinks = getElementsByClassName("tab-link");
const allContent = document.querySelectorAll(".tab-content");

for() {
    tabLinks.addEventListener("click", function(e){
        const current = document.querySelector(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        // Switching Content
        const filter = e.target.dataset.filter;
        console.log(filter);
        allContent.forEach((Ocontent) => {
            if(content.classList.contains(filter)){
                content.style.display = "block";
            }else {
                content.style.display = "none";
            }
        });
    })
}
const tabLinks = document.getElementsByClassName("tab-link");
const allContent = document.querySelectorAll(".tab-content");

for(let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function(e){
        const current = document.querySelector(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";

        // Switching Content
        const filter = e.target.dataset.filter;
        console.log(filter);
        allContent.forEach((content) => {
            if(content.classList.contains(filter)){
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
}