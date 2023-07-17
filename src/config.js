const config = {
  // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
  // like '/berry-material-react/react/default'
  basename: '/',
  defaultPath: '/dashboard',
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  // BASE_URL_API : "http://localhost:9002/pms-service/v1/" ,  //localurl
  BASE_URL_API :"https://pms-api.broadvisions.online/pms-user-service/v1/",  //liveURL
};

export default config;
