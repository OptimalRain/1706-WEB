//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    banners: [
      '/assets/coffee.jpg',
      '/assets/2.jpg',
      '/assets/3.jpg',
      '/assets/4.jpg'
    ],
    list:[
      {title:'香飘飘',image:'/assets/2.jpg',id:1},
      { title: '铁观音', image: '/assets/3.jpg' ,id:2},
      { title: '普洱', image: '/assets/4.jpg',id:3 },
      { title: '毛尖', image: '/assets/5.jpg',id:4 },
      { title: '雨前龙井', image: '/assets/2.jpg',id:5 },
      { title: '大红袍', image: '/assets/3.jpg',id:6 },
      { title: '特供', image: '/assets/4.jpg',id:7 },
    ]
  }
  
})
