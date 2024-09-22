var currentPage = 1;
var newsPerPage = 2;
var newsList = document.getElementById('news-list');
var prevBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');
var pageNum = document.getElementById('page-num');

function showPage(page) {
  var startIndex = (page - 1) * newsPerPage;
  var endIndex = startIndex + newsPerPage;

  var newsItems = newsList.getElementsByClassName('news-item');
  for (var i = 0; i < newsItems.length; i++) {
    newsItems[i].style.display = 'none';
  }

  for (var j = startIndex; j < endIndex; j++) {
    if (newsItems[j]) {
      newsItems[j].style.display = 'block';
    }
  }

  pageNum.textContent = page;
}

function showPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    showPage(currentPage);
  }
}

function showNextPage() {
  var totalNews = newsList.getElementsByClassName('news-item').length;
  var totalPages = Math.ceil(totalNews / newsPerPage);

  if (currentPage < totalPages) {
    currentPage++;
    showPage(currentPage);
  }
}

showPage(currentPage);