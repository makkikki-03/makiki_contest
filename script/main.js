// TOPページに最新3件のニュースを表示
function displayLatestNews() {
  const newsContainer = document.getElementById('news-list');
  if (!newsContainer) return;

  const latestNews = newsData.slice(0, 3);

  newsContainer.innerHTML = latestNews.map(news => `
                        <div class="news-data">
                          <p>${news.date}</p>
                          <a href="news_detail.html?id=${news.id}">
                            ${news.title}
                          </a>
                        </div>
            `).join('');
}


// ページ初期化
function initializePage() {
  displayLatestNews();
}

// DOM読み込み完了後に初期化
document.addEventListener('DOMContentLoaded', function () {
  initializePage();

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.includes('javascript:')) return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});

// Header scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (header) {
    if (window.scrollY > 100) {
      header.style.background = 'rgba(26, 32, 44, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
    } else {
      header.style.background = 'rgba(26, 32, 44, 0.95)';
      header.style.boxShadow = 'none';
    }
  }
});

// Form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Simple validation
  if (!data.company || !data.name || !data.email || !data.message) {
    alert('必須項目を入力してください。');
    return;
  }

  // Show success message
  alert('お問い合わせありがとうございます。3営業日以内にご連絡いたします。');

  // Reset form
  event.target.reset();
}