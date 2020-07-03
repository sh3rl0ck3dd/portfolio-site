
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title:  'Rajat_Sharma',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:400,700'},

    ]
  },
   fontawesome: {
    icons: {
      solid: ['faEnvelope'],
      regular: ['faAdjust']
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // ['@nuxtjs/fontawesome', {
    //   component: 'fa',
    //   suffix: true,
    //   proIcons: { // if you have bought the Pro packages
    //     // list the icons you want to add, not listed icons will be tree-shaked
    //     solid: [
    //       'faHome',
    //       'faHeart'
    //     ],
    //     // include all icons. But dont do this.
    //     regular: true
    //   }
    // }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
       
           [
      'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
