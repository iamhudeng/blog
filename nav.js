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

            // 모달 기능 추가
            const logo = document.querySelector(".logo img");
            const modal = document.getElementById("profile-modal");
            const closeModal = document.querySelector(".close");

            logo.addEventListener("click", function () {
                modal.style.display = "flex"; // 모달 보이기
            });

            closeModal.addEventListener("click", function () {
                modal.style.display = "none"; // 모달 숨기기
            });

            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        })
        .catch(error => console.error("타이틀 로딩 오류:", error));
});
