// 时间部分
// 获取时间按钮和时间元素
const timeButton = document.getElementById("time-button");
const currentTime = document.getElementById("current-time");

// 定时更新时间
setInterval(() => {
  // 获取当前时间
  const currentDate = new Date();

  // 格式化时间为所需的字符串
  const hour = String(currentDate.getHours()).padStart(2, "0");
  const minute = String(currentDate.getMinutes()).padStart(2, "0");
  const second = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedTime = `${hour}:${minute}:${second}`;

  // 设置时间元素的 datetime 属性和文本内容
  if (currentTime) {
    currentTime.setAttribute("datetime", formattedTime);
    currentTime.textContent = formattedTime;
  }
}, 1000);