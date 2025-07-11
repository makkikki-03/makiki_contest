//お知らせ一覧
document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("newsList");

  if (!newsData || newsData.length === 0) {
    listContainer.innerHTML = "<p>現在お知らせはありません。</p>";
    return;
  }

  newsData.forEach((news) => {
    const div = document.createElement("div");
    div.classList.add("news-item");
    div.innerHTML = `
                    <a href="news_detail.html?id=${news.id}">
                     <div class="news-card fade-in">
                      <div class="news-card-content">
                        <p class="news-date">${news.date}</p>
                        <img src="${news.img}" alt="ニュース画像">
                        <br/>
                        <h4 id="news-title">${news.title}</h4>
                      </div>
                     </div>
                    </a>`;
    listContainer.appendChild(div);
  });
});

