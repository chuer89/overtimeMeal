
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: true,
      title: '点餐小工具',
      dll: true,
      pwa: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  history: 'hash',
}
