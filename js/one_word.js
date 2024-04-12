// 一言部分
var oneWordElement = document.querySelector('.one-word');

function updateOneWord() {
  setTimeout(() => {
    fetch('https://www.mxnzp.com/api/daily_word/recommend?count=1&app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2')
      .then(response => response.json())
      .then(data => {
        if (data.code === 1) {
          const dailyWords = data.data[0];
          const author = dailyWords.author;
          const content = dailyWords.content;
          const text = author ? `${content}「${author}」` : content;
          oneWordElement.innerText = text;
        } else {
          oneWordElement.innerText = '请点击刷新一言';
        }
      })
      .catch(error => {
        oneWordElement.innerText = '请点击刷新一言';
      });
  }, 500);
}

document.addEventListener('DOMContentLoaded', updateOneWord);

if (oneWordElement) {
  oneWordElement.addEventListener('click', updateOneWord);
}
