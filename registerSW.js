if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/kamaeff-vue/sw.js', { scope: '/kamaeff-vue/' })})}