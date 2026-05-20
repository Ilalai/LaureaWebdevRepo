const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "darkTheme" ? "lightTheme" : "darkTheme";
    document.documentElement.setAttribute("data-theme", next);
});