import { defineConfig } from './utils/defineConfig'

export default defineConfig({
  site: {
    url: 'https://hathaict.github.io',
    title: 'Hà Thái Blog',
    description:
      'Blog cá nhân của Cao Trần Hà Thái - Chia sẻ về lập trình, công nghệ và cuộc sống.',
    keywords: 'HaThaiCT, Hà Thái, Cao Trần Hà Thái, blog cá nhân, lập trình, công nghệ',
    lang: 'vi-VN',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  author: {
    name: 'Cao Trần Hà Thái',
    twitterId: '',
    avatar: 'https://github.com/HaThaiCT.png',
  },
  hero: {
    name: 'Hà Thái',
    bio: 'Lập trình viên & Người đam mê công nghệ.',
    description: 'Học hỏi, chia sẻ và sáng tạo mỗi ngày.',
    socials: [
      {
        name: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/HaThaiCT',
        color: 'rgb(24, 23, 23)',
      },
    ],
    yiyan: 'Hành trình vạn dặm bắt đầu từ một bước chân.',
  },
  color: {
    accent: [
      { light: '#F55555', dark: '#FCCF31' },
      { light: '#0396FF', dark: '#ABDCFF' },
      { light: '#fb7287', dark: '#99D8CF' },
      { light: '#F072B6', dark: '#FFF886' },
      { light: '#9F44D3', dark: '#E2B0FF' },
      { light: '#FF6666', dark: '#A1CCD1' },
      { light: '#F6416C', dark: '#838BC6' },
      { light: '#32CCBC', dark: '#90F7EC' },
      { light: '#33A6B8', dark: '#79F1A4' },
      { light: '#F55555', dark: '#FCCF31' },
    ],
    bg: {
      primary: { light: '#ffffff', dark: '#1c1c1e' },
      secondary: { light: '#f4f4f5', dark: '#27272a' },
    },
    text: {
      primary: { light: '#373a3c', dark: '#ffffff' },
      secondary: { light: '#71717a', dark: '#d1d5db' },
    },
    border: {
      primary: { light: '#e4e4e7', dark: '#3f3f46' },
      secondary: { light: '#e4e4e7', dark: '#3f3f46' },
    },
  },
  menus: [
    {
      name: 'Trang chủ',
      link: '/',
      icon: 'icon-pantone',
    },
    {
      name: 'Lưu trữ',
      link: '/archives',
      icon: 'icon-archive',
    },
    {
      name: 'Dự án',
      link: '/projects',
      icon: 'icon-flask',
    },
    {
      name: 'Giới thiệu',
      link: '/about',
      icon: 'icon-ghost',
    },
    {
      name: 'Liên kết',
      link: '/friends',
      icon: 'icon-hearts',
    },
  ],
  posts: {
    perPage: 10,
  },
  footer: {
    startTime: '2026-10-06T00:00:00Z',
  },
  comments: {
    enable: false,
    giscus: {
      repo: 'HaThaiCT/HaThaiCT.github.io',
      repoId: '',
      category: 'Announcements',
      categoryId: '',
    },
    waline: {
      serverURL: '',
    },
  },
  sponsor: {
    wechat: '',
    alipay: '',
    paypal: '',
    github: 'https://github.com/HaThaiCT',
    patreon: '',
    buymeacoffee: '',
  },
  analytics: {
    enable: false,
    google: {
      measurementId: '',
    },
    umami: {
      serverUrl: '',
      websiteId: '',
    },
    microsoftClarity: {
      projectId: '',
    },
  },
})
