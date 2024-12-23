import { containerPlugin } from '@vuepress/plugin-container'
import { defaultTheme } from '@vuepress/theme-default'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { path } from '@vuepress/utils'

//module.exports= ({ extendsMarkdown: md => { md.use(require('markdown-it-mathjax3')); } })

module.exports = {
  lang: 'nl_BE',
  title: 'IoT Lab Basic',
  description: 'Curus voor Graduaat studenten Internet Of Things VIVES Kortrijk',
   head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?familiy=Material+Icons' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML', async: true }]
  ],
  //extendsMarkdown: md => { md.use(require('markdown-it-mathjax3')); },

  theme: defaultTheme({
    logo: 'https://www.vives.be/sites/default/files/uploads/huisstijl/Logo VIVES Hogeschool - Smile.png',
    navbar: [
      { text: 'Toledo', link: 'https://toledo.kuleuven.be/portal' },
      { text: 'Report Issue', link: 'https://github.com/WimDejonghe/iot-lab-basic-python/issues' },
      { text: 'Organization', link: 'https://github.com/WimDejonghe/iot-lab-basic-python' }
    ],
    sidebar: [
      {
        text: 'About this Course',
        link: '/about-this-course/README.md',
      },
      {
        text: 'ESP32 en MicroPython',
        children: [
          '/a-introductory/01-introduction/README.md',
          '/a-introductory/02-introduction/README.md',
          '/a-introductory/03-introduction/README.md',
          '/a-introductory/04-introduction/README.md',
          
        ]
      },
      {
        text: 'Extra Library',
        children: [
          '/h-bib/README.md',
          
          
                   
        ]
      },
      {
        text: 'ESP32 pinnen',
        children: [
          '/b-esp32/01-pinlayout/README.md',
          '/b-esp32/02-powermanag/README.md',
          
                   
        ]
      },
      {
        text: 'ESP32 GPIO',
        children: [
         
          '/c-esp32/01-digout/README.md',
          '/c-esp32/02-digin/README.md',
        ]
      },
      {
        text: 'Variabelen in ESP32',
        children: [
         
          '/d-var/01-vars/README.md',
        ]
      },
      {
        text: 'Starten met MicroPython',
        children: [
         
          '/arduino_c/README.md',
        ]
      },
      {
        text: 'Analoge IO',
        children: [
         
          '/e-ana/01-ana-in/README.md',
          '/e-ana/02-ana-out/README.md',         
                   
        ]
      },
      {
        text: 'Extension Shield',
        children: [
         
          '/f-ext/01-exshield/README.md',
             
                   
        ]
      },
      {
        text: 'PWM',
        children: [
         
          '/g-pwm/01-werking/README.md',
          '/g-pwm/02-pinnen/README.md',
          '/g-pwm/03-software/README.md',
          '/g-pwm/04-dimmen/README.md',
          '/g-pwm/05-hardware/README.md',
             
                   
        ]
      },
     
    ],
    sidebarDepth: 1,
    repo: 'WimDejonghe/iot-lab-basic',
    docsDir: 'docs',
    docsBranch: 'master'
  }),
  serviceWorker: true,
  plugins: [
    


    containerPlugin({
      type: 'codeoutput',
      locales: {
        '/': {
          defaultInfo: 'Output',
        },
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    
  ],

  
}