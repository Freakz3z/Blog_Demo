document.addEventListener('DOMContentLoaded', () => {
    const musicPlayer = document.getElementById('musicPlayer');
    const musicUrl = 'music/Tangent - DAYDREAM.mp3';
    
    // 检查本地存储中是否有保存的音乐播放时间
    if (localStorage.getItem('musicProgress')) {
      musicPlayer.currentTime = localStorage.getItem('musicProgress');
    }
    
    // 设置音乐源
    musicPlayer.src = musicUrl;

    // 设置音量
    musicPlayer.volume = 0.1;
    
    // 监听音乐播放时间的变化，并将当前播放时间保存到本地存储
    musicPlayer.addEventListener('timeupdate', () => {
      localStorage.setItem('musicProgress', musicPlayer.currentTime);
    });
    
    // 设置重复循环播放
    musicPlayer.loop = true;

    // 播放音乐
    musicPlayer.play();
  });
  