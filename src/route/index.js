// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// !################################################################ mainPage
// ================================================================ mainPage
// router.get Створює нам один ентпоїнт
//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку
  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'index',
    page: {
      title: 'Our Studio',
    },
    logo: {
      text: 'logo',
      url: 'https://google.com/',
    },
    hero_text: 'Welcome To Our Studio!',
    hero_title: 'It’s nice to Meet you',
    header: [
      {
        text: 'Home',
        url: 'https://google.com/',
      },
      {
        text: 'Services',
        url: 'https://google.com/',
      },
      {
        text: 'Portfolio',
        url: 'https://google.com/',
      },
      {
        text: 'About',
        url: 'https://google.com/',
      },
      {
        text: 'Contact',
        url: 'https://google.com/',
      },
    ],
    blockServices: {
      title: 'Services',
      text: 'Proin iaculus purus concequat sem cure.',

      services: [
        {
          class: 'services',
          href: 'http://google.com',
          pictures: '../img/icon1.png',
          title: 'E-Commerce',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. `,
        },
        {
          class: 'services',
          href: 'http://youtube.com/',
          pictures: '../img/icon2.png',
          title: 'Responsive Web',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. `,
        },
        {
          class: 'services',
          href: 'http://google.com/maps/',
          pictures: '../img/icon3.png',
          title: 'Web Security',
          description: `Proin iaculis purus consequat sem cure 
			digni ssim. Donec porttitora entum suscipit 
			aenean rhoncus posuere odio in tincidunt. `,
        },
      ],
    },
    blockPortfolio: {
      title: 'Our portfolio',
      text: 'Proin iaculus purus concequat sem cure.',
      portfolio: [
        {
          class: 'portfolio',
          href: 'http://youtube.com/',
          pictures: '../img/img1.jpg',
          //  title: 'E-Commerce',
          //   description: `Proin`,
        },
        {
          class: 'portfolio',
          href: 'http://youtube.com/',
          pictures: '../img/img2.jpg',
          //   title: 'Responsive Web',
          //   description: `Proin`,V
        },
        {
          class: 'portfolio',
          href: 'http://youtube.com/',
          pictures: '../img/img3.jpg',
          //   title: 'Web Security',
          //   description: `Proin`,
        },
      ],
    },
    blockAbout: {
      class: 'clas',
      title: 'About Us',
      text: 'Proin iaculus purus concequat sem cure.',
      about: [
        {
          id: 'start',
          class: 'about',
          href: 'http://youtube.com/',
          pictures: '../img/about1.jpg',
          date: 'July 2010',
          title: 'Our Humble Beginnings',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. Proin 
			 iaculis purus consequat sem cure digni 
			 ssim. Donec porttitora entum suscipit.`,
        },
        {
          id: 'end',
          class: 'about',
          href: 'http://youtube.com/',
          pictures: '../img/about2.jpg',
          date: 'January 2011',
          title: 'Facing Startup Battles',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. Proin 
			 iaculis purus consequat sem cure digni 
			 ssim. Donec porttitora entum suscipit aenean 
			 rhoncus posuere odio in tincidunt.`,
        },
        {
          id: 'start',
          class: 'about',
          href: 'http://youtube.com/',
          pictures: '../img/about3.jpg',
          date: 'December 2012',
          title: 'Enter The Dark Days',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. Proin 
			 iaculis purus consequat sem cure digni.`,
        },
        {
          id: 'end',
          class: 'about',
          href: 'http://youtube.com/',
          pictures: '../img/about4.jpg',
          date: 'february 2014',
          title: 'Our Triumph',
          description: `Proin iaculis purus consequat sem cure 
			 digni ssim. Donec porttitora entum suscipit 
			 aenean rhoncus posuere odio in tincidunt. Proin 
			 iaculis purus consequat sem cure digni
			 ssim. Donec porttitora entum suscipit aenean.`,
        },
      ],
    },
    Copyright: '© Copyright 2014 FreebiesXpress.com',
  })
})
// Експортуємо глобальний роутер
module.exports = router
