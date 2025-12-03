// 결혼식 날짜 설정 (YYYY-MM-DD 형식)
const weddingDate = new Date('2024-03-15T14:00:00');

// 날짜 포맷팅 함수
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    const weekday = weekdays[date.getDay()];
    
    return {
        number: `${month} ${day}`,
        full: `${year}년 ${month}월 ${day}일 (${weekday})`
    };
}

// 날짜 표시 업데이트
const dateInfo = formatDate(weddingDate);
document.getElementById('dateDisplay').textContent = dateInfo.number;
document.getElementById('weddingDateTime').innerHTML = `${dateInfo.full}<br>오후 2시`;

// 커플 이미지 플레이스홀더 (실제 이미지로 교체 가능)
// AI 생성 이미지 URL을 여기에 추가하시면 됩니다
const coupleImage = document.getElementById('coupleImage');
coupleImage.style.backgroundImage = 'url("https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop")';
coupleImage.style.backgroundSize = 'cover';
coupleImage.style.backgroundPosition = 'center';
coupleImage.textContent = '';

// 갤러리 이미지 플레이스홀더 (실제 이미지로 교체 가능)
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryImages = [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop'
];

galleryItems.forEach((item, index) => {
    if (galleryImages[index]) {
        item.style.backgroundImage = `url("${galleryImages[index]}")`;
        item.style.backgroundSize = 'cover';
        item.style.backgroundPosition = 'center';
        item.textContent = '';
    }
    
    // 클릭 이벤트
    item.addEventListener('click', () => {
        // 이미지 모달이나 확대 기능을 추가할 수 있습니다
        console.log(`갤러리 아이템 ${index + 1} 클릭됨`);
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
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// 섹션 요소들에 애니메이션 적용
document.querySelectorAll('.message-section, .info-section, .gallery-section').forEach(section => {
    observer.observe(section);
});

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
