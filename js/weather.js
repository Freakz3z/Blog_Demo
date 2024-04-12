//天气部分
document.addEventListener('DOMContentLoaded', () => {
    const weatherButton = document.querySelector('.weather');
    let isCurrentWeather = true;
  
    function getWeatherData() {
      const address = '海口市';
      let apiUrl = '';
  
      if (isCurrentWeather) {
        apiUrl = `https://www.mxnzp.com/api/weather/current/${address}?app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2`;
      } else {
        apiUrl = `https://www.mxnzp.com/api/weather/forecast/${address}?app_id=jfmnsns7irehsmjx&app_secret=hoLhLGu7MMQRDbBHbq09QAdUCGOCgKk2`;
      }
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          let weatherText = '';
  
          if (data.code === 1) {
            if (isCurrentWeather) {
              const temp = data.data.temp;
              const weather = data.data.weather;
              weatherText = `Hello World\n${address}  天气${weather}  温度${temp}`;
            } else {
              const forecasts = data.data.forecasts;
  
              if (forecasts && forecasts.length > 0) {
                const todayForecast = forecasts[0];
                const date = todayForecast.date;
                const dayOfWeek = todayForecast.dayOfWeek;
                const dayWeather = todayForecast.dayWeather;
                const nightWeather = todayForecast.nightWeather;
                const dayTemp = todayForecast.dayTemp;
                const nightTemp = todayForecast.nightTemp;
  
                weatherText = `Hello World\n${dayWeather}~${nightWeather}  ${dayTemp}~${nightTemp}`;
              } else {
                weatherText = '没有可用的天气预报数据';
              }
            }
          } else {
            weatherText = '请点击刷新天气';
          }
  
          if (weatherButton) {
            weatherButton.innerText = weatherText;
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    // 初始加载天气数据
    setTimeout(getWeatherData, 500);
    
    // 按钮点击事件处理程序
    if (weatherButton) {
      weatherButton.addEventListener('click', () => {
        isCurrentWeather = !isCurrentWeather;
        getWeatherData();
        showMessage("天气已经更新");
      });
    }
  });