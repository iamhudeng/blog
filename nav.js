document.addEventListener("DOMContentLoaded", function () {
    const titleContainer = document.getElementById("titleishere");

    if (sessionStorage.getItem("cachedTitle")) {
        titleContainer.innerHTML = sessionStorage.getItem("cachedTitle");
    }

    fetch("uptitle.html")
        .then(response => response.text())
        .then(data => {
            titleContainer.innerHTML = data;
            sessionStorage.setItem("cachedTitle", data);

            // 모달 기능 추가
            const profileImg = document.querySelector("#profile-btn img");
            const modal = document.getElementById("profile-modal");
            const closeModal = document.getElementById("close-modal");

            profileImg.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

        })
        .catch(error => console.error("타이틀 로딩 오류:", error));
});
/* HERE IS about*/
document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function revealTimeline() {
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealTimeline);
    revealTimeline(); // 페이지 로드시 실행
});
