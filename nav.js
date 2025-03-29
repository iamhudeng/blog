document.addEventListener("DOMContentLoaded", function () {
    const titleContainer = document.getElementById("titleishere");

    if (sessionStorage.getItem("cachedTitle")) {
        titleContainer.innerHTML = sessionStorage.getItem("cachedTitle");
    }

    fetch("uptitle.html")
    .then(response => response.text())
    .then(data => {
        const titleContainer = document.getElementById("titleishere");
        if (!titleContainer) {
            console.error("titleishere 요소를 찾을 수 없음!");
            return;
        }

        titleContainer.innerHTML = data;
        sessionStorage.setItem("cachedTitle", data);

        // DOM 업데이트 후 실행
        setTimeout(() => {
            const logo = document.querySelector(".logo img");
            const modal = document.getElementById("profile-modal");
            const closeModal = document.querySelector(".close");

            console.log("로고 요소:", logo);
            console.log("모달 요소:", modal);

            if (logo && modal) {
                logo.addEventListener("click", function () {
                    console.log("로고 클릭됨! 모달을 염니다.");
                    modal.style.display = "flex";
                });
            }

            if (closeModal && modal) {
                closeModal.addEventListener("click", function () {
                    console.log("닫기 버튼 클릭! 모달을 닫습니다.");
                    modal.style.display = "none";
                });
            }

            window.addEventListener("click", function (event) {
                if (event.target === modal) {
                    console.log("모달 바깥 클릭! 모달을 닫습니다.");
                    modal.style.display = "none";
                }
            });
        }, 100); // DOM 업데이트 기다리기
    })
    .catch(error => console.error("타이틀 로딩 오류:", error));
