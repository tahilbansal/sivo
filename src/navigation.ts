import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Platform',
      links: [
        {
          text: 'For Venues',
          href: getPermalink('/services#venues'),
        },
        {
          text: 'For Suppliers',
          href: getPermalink('/services#suppliers'),
        },
        {
          text: 'Features Overview',
          href: getPermalink('/services#features'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Case Studies (Coming Soon)',
          href: '#', // Placeholder
        },
        {
          text: 'FAQs',
          href: getPermalink('/#faqs'), // Link to FAQs section on homepage
        },
      ],
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About Sivo',
          href: getPermalink('/about'),
        },
        {
          text: 'Contact Us',
          href: getPermalink('/contact'),
        },
        {
          text: 'Careers (We are hiring!)',
          href: '#', // Placeholder
        },
      ],
    },
  ],
  actions: [
    // {
    //   text: 'Login',
    //   href: 'https://app.sivo.in/login', // Replace with your actual app login URL
    //   target: '_blank',
    //   variant: 'secondary',
    // },
    {
      text: 'Request a Demo',
      href: getPermalink('/contact?demo=true'), // Link to contact page with a demo query
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'For Venues', href: getPermalink('/services#venues') },
        { text: 'For Suppliers', href: getPermalink('/services#suppliers') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Request a Demo', href: getPermalink('/contact?demo=true') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Features', href: getPermalink('/services#features') },
        { text: 'Integrations (Coming Soon)', href: '#' },
        { text: 'Security', href: getPermalink('/privacy') }, // Or a dedicated security page
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Help Center (Coming Soon)', href: '#' },
        { text: 'FAQs', href: getPermalink('/#faqs') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Sivo', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
        { text: 'Careers', href: '#' }, // Placeholder
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms of Service', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' }, // Add your LinkedIn
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Copyright &copy; ${new Date().getFullYear()} Sivo Inc. All rights reserved.
  `,
};