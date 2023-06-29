const searchIcon = document.querySelector(`.fa-search`);
const closeIcon = document.querySelector(`.fa-times`);
const searchEl = document.querySelector(`.search`);
const searchInput = document.querySelector(`.search input`);

searchIcon.addEventListener("click", () => {
    searchIcon.style.display = "none";
    // searchEl.style.transform = "translateX(0)";
    showSearchEl();
    setTimeout(() => {
        closeIcon.style.display = "block";
    }, 1500);   
});

closeIcon.addEventListener("click", () => {
    closeIcon.style.display = "none";
    hideSearchEl();
});

function showSearchEl() {
    searchEl.style.transform = "translateX(0)";
    setTimeout(() => {
        searchEl.style.width = "30rem";
    }, 500);
    setTimeout(()=> {
        searchInput.setAttribute("placeholder"," Search...")
    }, 1500)
}

function hideSearchEl() {
    searchEl.style.transform = "translateX(0)";
    setTimeout(()=> {
        searchInput.setAttribute("placeholder","")
    }, 500)
    setTimeout(() => {
        searchEl.style.width = "4.5rem";
    }, 1500);
    setTimeout(() => {
        searchEl.style.transform = "translateX(200)";
    }, 1500);
    setTimeout(() => {
        searchIcon.style.display = "block";
    },2000);
    
}

