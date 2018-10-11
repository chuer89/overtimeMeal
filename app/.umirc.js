
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      dll: true,
      pwa: false,
      routes: {
        exclude: [/models\//, /components/],
      },
      hardSource: true,
      polyfills: ['ie9'],
      title: '大农小工具集成',
    }],
  ],
  history: 'hash',
  hash: true,
}
