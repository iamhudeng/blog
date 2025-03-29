document.addEventListener("DOMContentLoaded", function () {
    const titleContainer = document.getElementById("titleishere");

    if (sessionStorage.getItem("cachedTitle")) {
        titleContainer.innerHTML = sessionStorage.getItem("cachedTitle");
    }

    fetch("uptitle.html")
        .then(response => response.text())
        .then(data => {
            titleContainer.innerHTML = data;
            sessionStorage.setItem("cachedTitle", data); // 캐시에 저장
        })
        .catch(error => console.error("타이틀 로딩 오류:", error));
});
