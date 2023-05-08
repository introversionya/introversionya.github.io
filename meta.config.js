export default {
  meta: [
    // верификация
    { name: 'yandex-verification', content: '0197e3180d82e5e0' },
    { name: 'google-site-verification', content: '6GocpScyTXZ42fzAdnkkYNW-fuZ6zuWzWO2FGAson1c' },
    { name: 'msvalidate.01', content: '3E62586F4C1C151955C5679FDD6DA1CD' },
    // favicon meta
    { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
    { name: 'msapplication-TileColor', content: '#2b5797' },
    { name: 'theme-color', content: '#849a98' },
  ],
  link: [
    // favicon link: https://realfavicongenerator.net
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#435e66' },
  ],
};
