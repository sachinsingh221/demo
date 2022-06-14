// export default {
//   siteName: 'CMA',
//   siteIcon: 'ion-medkit',
//   footerText: ``,
//   enableAnimatedRoute: false,
//   apiUrl: 'http://yoursite.com/api/',
//   google: {
//     analyticsKey: 'UA-xxxxxxxxx-1',
//   },
//   dashboard: '/dashboard',
// };

const dev = {
  api_url: 'http://localhost:8000',
    footerText: `test app by sachin`,
}
const stage = {
  api_url: 'https://devapi.medcobox.in',
    footerText: `test app by sachin`,
}
const prod = {
  api_url: 'https://api.medcobox.in',
    footerText: `test app by sachin`,
}
console.log(process.env)
const config =
  process.env.REACT_APP_STAGE === "production"
    ? prod
    : process.env.REACT_APP_STAGE === "stage"
    ? stage
    : process.env.REACT_APP_STAGE === "demo"
    ? dev
    : dev;

  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };