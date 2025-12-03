// 결혼식 날짜 설정 (YYYY-MM-DD 형식)
const weddingDate = new Date('2024-12-25T14:00:00');

// 카운트다운 업데이트 함수
function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate.getTime() - now;

    if (distance < 0) {
        // 결혼식이 지났을 경우
        document.getElementById('days').textContent = '0';
        document.getElementById('hours').textContent = '0';
        document.getElementById('minutes').textContent = '0';
        document.getElementById('seconds').textContent = '0';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// 초기 카운트다운 설정
updateCountdown();

// 1초마다 카운트다운 업데이트
setInterval(updateCountdown, 1000);

// 부드러운 스크롤 효과
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 스크롤 시 애니메이션 효과
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 섹션 요소들에 애니메이션 적용
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// 갤러리 아이템 클릭 이벤트 (실제 사진을 추가할 수 있도록)
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        // 여기에 이미지 모달이나 확대 기능을 추가할 수 있습니다
        console.log(`갤러리 아이템 ${index + 1} 클릭됨`);
    });
});

// 날짜 포맷팅 함수
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    
    return `${year}년 ${month}월 ${day}일 (${weekday})`;
}

// 결혼식 날짜 표시 업데이트
document.getElementById('weddingDate').textContent = formatDate(weddingDate);

