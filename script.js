const searchInput = document.getElementById("searchInput");
const retter = document.querySelectorAll(".ret-kort");

searchInput.addEventListener("input", () => {
    const søgning = searchInput.value.toLowerCase();

    retter.forEach(ret => {
        const tekst = ret.textContent.toLowerCase();
        ret.style.display = tekst.includes(søgning) ? "" : "none";
    });
});
