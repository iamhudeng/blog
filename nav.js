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

            // ⚡ 수정된 부분: 이벤트 리스너를 데이터 로드 후에 설정
            setTimeout(() => {
                const logo = document.querySelector(".logo img");
                const modal = document.getElementById("profile-modal");
                const closeModal = document.querySelector(".close");

                // 디버깅: 콘솔에 요소들이 제대로 선택되었는지 확인
                console.log("Logo:", logo);
                console.log("Modal:", modal);
                console.log("Close Button:", closeModal);

                // 로고 클릭 시 모달 열기
                if (logo && modal) {
                    logo.addEventListener("click", function () {
                        console.log("로고 클릭됨! 모달을 염니다."); // 디버깅 로그
                        modal.style.display = "flex"; // 모달 보이기
                    });
                }

                // 닫기 버튼 클릭 시 모달 닫기
                if (closeModal && modal) {
                    closeModal.addEventListener("click", function () {
                        console.log("닫기 버튼 클릭! 모달을 닫습니다."); // 디버깅 로그
                        modal.style.display = "none"; // 모달 숨기기
                    });
                }

                // 모달 바깥을 클릭하면 닫기
                window.addEventListener("click", function (event) {
                    if (event.target === modal) {
                        console.log("모달 바깥 클릭! 모달을 닫습니다."); // 디버깅 로그
                        modal.style.display = "none";
                    }
                });
            }, 100); // 🔥 약간의 지연을 줘서 요소들이 완전히 로드된 후 실행되도록 함
        })
        .catch(error => console.error("타이틀 로딩 오류:", error));
});
