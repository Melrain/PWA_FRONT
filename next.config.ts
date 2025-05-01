import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  // 不要写 i18n，这会报 warning
};

export default withPWA({
  dest: 'public',
  register: !isDev, // ⛔ 不注册 service worker 在 dev 模式
  skipWaiting: true,
  disable: isDev, // ✅ 禁用 PWA 功能
})(nextConfig);
