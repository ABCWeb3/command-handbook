import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ar',
  dir: 'rtl',
  title: 'Command Handbook',
  titleTemplate: 'الدليل العربي للأوامر',
  description: 'مرجع عربي منظم لأوامر Linux وWindows وmacOS',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  markdown: {
    codeCopyButton: { tooltipText: 'نسخ الأمر', copiedText: 'تم النسخ' },
    container: {
      tipLabel: 'معلومة',
      warningLabel: 'تحذير',
      dangerLabel: 'خطر',
      infoLabel: 'ملاحظة',
      detailsLabel: 'التفاصيل'
    }
  },
  themeConfig: {
    siteTitle: 'Command Handbook',
    logo: { src: '/logo.svg', alt: 'Command Handbook' },
    nav: [
      { text: 'الرئيسية', link: '/' },
      { text: 'Linux', link: '/linux/' },
      { text: 'Windows', link: '/windows/' },
      { text: 'macOS', link: '/macos/' },
      { text: 'GitHub', link: 'https://github.com/ABCWeb3/command-handbook' }
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'بحث', buttonAriaLabel: 'البحث في الدليل' },
          modal: {
            noResultsText: 'لا توجد نتائج',
            resetButtonTitle: 'مسح البحث',
            footer: { selectText: 'اختيار', navigateText: 'تنقل', closeText: 'إغلاق' }
          }
        }
      }
    },
    sidebar: {
      '/linux/': [
        { text: 'Linux', link: '/linux/' },
        { text: 'الأوامر المشتركة', collapsed: false, items: [
          { text: 'الملفات والمجلدات', link: '/linux/common/basics/file-management' },
          { text: 'الشبكات والتشخيص', link: '/linux/common/networking/network-diagnostics' },
          { text: 'النظام والخدمات', link: '/linux/common/system/system-services' },
          { text: 'المستخدمون والمجموعات', link: '/linux/common/users/users-groups' },
          { text: 'الأقراص والتخزين', link: '/linux/common/storage/disks-filesystems' },
          { text: 'العمليات والمهام', link: '/linux/common/processes/processes-jobs' },
          { text: 'الأرشفة والضغط', link: '/linux/common/archives/archives-compression' },
          { text: 'SSH ونقل الملفات', link: '/linux/common/remote/ssh-transfer' },
          { text: 'معالجة النصوص', link: '/linux/common/text/text-processing' },
          { text: 'الأمان المصرح به', link: '/linux/common/security/authorized-security-checks' }
        ]},
        { text: 'التوزيعات', collapsed: false, items: [
          { text: 'دليل التوزيعات', link: '/linux/distributions/' },
          { text: 'Debian', link: '/linux/distributions/debian-family/debian' },
          { text: 'Ubuntu', link: '/linux/distributions/debian-family/ubuntu' },
          { text: 'Kali Linux', link: '/linux/distributions/debian-family/kali' },
          { text: 'Fedora', link: '/linux/distributions/redhat-family/fedora' },
          { text: 'RHEL ومشتقاته', link: '/linux/distributions/redhat-family/rhel' },
          { text: 'Arch Linux', link: '/linux/distributions/arch-family/arch-linux' },
          { text: 'openSUSE', link: '/linux/distributions/suse-family/opensuse' }
        ]}
      ],
      '/windows/': [
        { text: 'Windows', link: '/windows/' },
        { text: 'الأقسام', items: [
          { text: 'الملفات والمجلدات', link: '/windows/basics/file-management' },
          { text: 'الشبكات والتشخيص', link: '/windows/networking/network-diagnostics' },
          { text: 'النظام والخدمات', link: '/windows/system/system-services' },
          { text: 'المستخدمون والمجموعات', link: '/windows/users/users-groups' },
          { text: 'الأقراص والتخزين', link: '/windows/storage/disks-filesystems' },
          { text: 'العمليات والمهام', link: '/windows/processes/processes-jobs' },
          { text: 'الأرشفة والضغط', link: '/windows/archives/archives-compression' },
          { text: 'إدارة البرامج', link: '/windows/packages/software-management' },
          { text: 'الوصول البعيد', link: '/windows/remote/remote-management' },
          { text: 'الأمان المحلي', link: '/windows/security/local-security-checks' }
        ]}
      ],
      '/macos/': [
        { text: 'macOS', link: '/macos/' },
        { text: 'الأقسام', items: [
          { text: 'الملفات والمجلدات', link: '/macos/basics/file-management' },
          { text: 'الشبكات والتشخيص', link: '/macos/networking/network-diagnostics' },
          { text: 'النظام والخدمات', link: '/macos/system/system-services' },
          { text: 'المستخدمون والمجموعات', link: '/macos/users/users-groups' },
          { text: 'الأقراص والتخزين', link: '/macos/storage/disks-filesystems' },
          { text: 'العمليات والمهام', link: '/macos/processes/processes-jobs' },
          { text: 'الأرشفة والضغط', link: '/macos/archives/archives-compression' },
          { text: 'إدارة البرامج', link: '/macos/packages/software-management' },
          { text: 'SSH ونقل الملفات', link: '/macos/remote/ssh-transfer' },
          { text: 'الأمان المحلي', link: '/macos/security/local-security-checks' }
        ]}
      ]
    },
    outline: { level: [2, 3], label: 'في هذه الصفحة' },
    docFooter: { prev: 'السابق', next: 'التالي' },
    lastUpdated: { text: 'آخر تحديث' },
    darkModeSwitchLabel: 'المظهر',
    sidebarMenuLabel: 'القائمة',
    returnToTopLabel: 'العودة إلى الأعلى',
    externalLinkIcon: true,
    socialLinks: [{ icon: 'github', link: 'https://github.com/ABCWeb3/command-handbook' }],
    footer: { message: 'مرجع عربي مفتوح المصدر', copyright: 'MIT License' }
  }
})
