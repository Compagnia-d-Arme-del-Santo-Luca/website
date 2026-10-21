import type { Event } from './types.js'

export const events: Event[] = [
  {
    id: '1',
    title: '4 Passi nel Medioevo',
    date: new Date('2026-05-03'),
    endDate: new Date('2026-05-04'),
    location: {
      name: 'Castello dei Ronchi',
      city: 'Crevalcore (BO)',
      lat: 44.7559844,
      lng: 11.1382366,
      link: 'https://maps.app.goo.gl/eqNB13PpJ4G7Sq2DA',
    },
    link: 'https://www.4passinelmedioevo.com/',
    image: 'https://www.4passinelmedioevo.com/wp-content/uploads/2026/04/cropped-565125388_1208800397957599_3322632688455654651_n-scaled-1.jpg',
    details: {
      description:
        "La Compagnia d'Arme del Santo Luca partecipa al tradizionale Palio di Ferrara con uno spettacolo di combattimento storico e una mostra della vita civile medievale.",
    },
  },
  {
    id: '2',
    title: 'Armi e Bagabli',
    date: new Date('2026-03-21'),
    endDate: new Date('2026-03-22'),
    location: {
      name: 'Piacenza Expo',
      city: 'Piacenza (PC)',
      lat: 45.0423607,
      lng: 9.75375,
      link: 'https://maps.app.goo.gl/FQAtyyK5zCZyaGzx9',
    },
    link: 'https://armiebagagli.org/',
    image:
      'https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/687039739_1615155693950230_1523012821653618722_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=301psXNiznUQ7kNvwFIU2A_&_nc_oc=AdqgQ3sUtKe-X02NMO-pOaTgFocqAEc4rep8ZTUFvGN7e1sij1OdLeErW01aLp6NJKE&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=vfSFXIAfYJiRdDTqz1le-g&_nc_ss=7b2a8&oh=00_Af5QgkkEnukOrBqB9EiDmBbgNtXI4_Qi3WZ8eNzsg1MwZA&oe=69FFD320',
    details: {
      description:
        'La più grande manifestazione italiana per operatori e appassionati della Rievocazione Storica, presso il quartiere fieristico di Piacenza, appuntamento imperdibile per chiunque operi nel settore storico/rievocativo.',
    },
  },
  {
    id: 'trecentesca',
    title: 'Trecentesca',
    date: new Date('2026-05-16'),
    endDate: new Date('2026-05-17'),
    location: {
      name: 'Abbazia di Morimondo',
      city: 'Morimondo (MI)',
      lat: 45.351915,
      lng: 8.954823,
      link: 'https://maps.app.goo.gl/oV97GdTZejNjpneD8',
    },
    link: 'https://www.abbaziamorimondo.it/trecentesca-2026',
    image:
      'https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/645894440_26176732645298731_6691381800434721321_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=25d718&_nc_ohc=EIa29pGGa5QQ7kNvwHIRuQt&_nc_oc=AdpEUIYfsBiSh8HpwsT5KkFdSYvlZYkUOCOUl9DYdEQ9PTbGR0uaDmVjI5HKy6cugb4&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=EcW53pTVT3DWReZnsh_SSw&_nc_ss=7b2a8&oh=00_Af5duE5CS05V2-KRwthjoxoib2SIeP18zu5obSxr1R6J7g&oe=69FFBB66',
  },
  {
    id: 'Palio dello Sparviero - Voci dal Medioevo di Trambaque',
    title: 'Palio dello Sparviero',
    date: new Date('2026-06-20'),
    location: {
      name: 'Castello di San Martino della Vaneza',
      city: 'Cervarese Santa Croce (PD)',
      lat: 45.4145888,
      lng: 11.7110493,
      link: 'https://maps.app.goo.gl/j1QwPm2CYL24vMQz6',
    },
    link: 'https://www.paliodellosparviero.it/',
    image: 'https://www.paliodellosparviero.it/wp-content/uploads/2021/06/e3c1afa4-630c-480f-acdd-0a5685c5c0ae.jpg',
    details: {
      title: 'Palio dello Sparviero - Voci dal Medioevo di Trambaque',
    },
  },
  {
    id: '3',
    title: 'Giostra del Borgo',
    date: new Date('2026-06-13'),
    location: {
      name: 'Ippodromo',
      city: 'Ferrara',
      lat: 44.82578,
      lng: 11.612924,
      link: 'https://maps.app.goo.gl/mqgVWmm8crAz7ofUA',
    },
    image:
      'https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/495026144_998527592485792_333972602704298657_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2a1932&_nc_ohc=V-Rj6Zro94UQ7kNvwGL_LTQ&_nc_oc=AdqbGYdKAgeN0MyVzbsnRbz31W9qqEIyJMzesfZl9r0f33UcVC-00gGtdM62Y6eLZso&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=XaR2VZ5CeSlQhvYnG2Ofbg&_nc_ss=7b2a8&oh=00_Af6CgCkib7vEwAVeuiPwlTTjkQrBeeLqzpE2ZkxzdWmxDA&oe=69FFB224',
    link: 'https://www.quintana.it',
  },
  {
    id: 'Mantova Medievale',
    title: 'Mantova Medievale',
    date: new Date('2026-11-07'),
    endDate: new Date('2026-11-08'),
    location: {
      name: 'Lungolago Gonzaga',
      city: 'Mantova',
      lat: 45.160947,
      lng: 10.799786,
      link: 'https://maps.app.goo.gl/QF5UjjLb5HRYgLxg8',
    },
    link: 'http://www.mantovamedievale.it/',
    image:
      'https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-6/475772202_928196622760603_187755049466880515_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2a1932&_nc_ohc=GFNIVf-3cKoQ7kNvwHWpMoA&_nc_oc=AdqCNjkyT6mYI9D8sIsmAgfQdXtrVMNOthjth3dfcGCvVgxVSJSG_SVWroEcBPbyI7k&_nc_zt=23&_nc_ht=scontent-fco2-1.xx&_nc_gid=nD82EIE8zEzhzr8oQIF78A&_nc_ss=7b2a8&oh=00_Af6Jg9HJBlMy--pZ0eQp_QZ18k1b-hSmMDp-zUC6ID5Yrw&oe=69FFE2CC',
  },
  {
    id: 'Autunno Ducale nelle Terre Estensi',
    title: 'Autunno Ducale nelle Terre Estensi',
    date: new Date('2026-10-24'),
    endDate: new Date('2026-10-25'),
    location: {
      name: 'Ferrara',
      city: 'Ferrara',
      lat: 44.5,
      lng: 11.37,
      link: 'https://maps.app.goo.gl/TYLWP51PvjCjsxdw6',
    },
    link: 'https://www.prolocoferrara.org/category/eventi/autunno-ducale/',
    image: 'https://www.prolocoferrara.org/wp-content/uploads/2026/07/locandina-AUTUNNO-DUCALE-2026.jpg',
    details: {
      description:
        "La Compagnia d'Arme del Santo Luca partecipa al tradizionale Palio di Ferrara con uno spettacolo di combattimento storico e una mostra della vita civile medievale.",
    },
  },
  {
    id: 'Usi & Costumi',
    title: 'Usi & Costumi',
    date: new Date('2026-11-07'),
    endDate: new Date('2026-11-08'),
    location: {
      name: 'Ferrara Fiere',
      city: 'Ferrara',
      lat: 44.8141398,
      lng: 11.584555,
      link: 'https://maps.app.goo.gl/q6MgoYrjm1uGxrrD8',
    },
    link: 'https://www.usiecostumi.org/',
    image: 'https://www.usiecostumi.org/wp-content/uploads/2024/04/usi-e-costumi-box.jpg',
    details: {
      description: 'La prima grande fiera internazionale, dedicata alla tradizione come strumento al servizio del turismo sostenibile.',
    },
  },
  //
]
