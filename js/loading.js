// 获取加载动画元素
var loader = document.getElementById("loader");

// 监听window的load事件
window.addEventListener("load", function() {
  // 延迟1秒后隐藏加载动画
  setTimeout(function() {
    loader.style.display = "none";
  }, 2000);
});