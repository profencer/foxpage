const mongoConfig = process.env.MONGO_CONFIG;

export default {
  host: '',
  port: 50000,
  jwtKey: 'test',
  ignoreTokenPath: [
    '/swagger/swagger.json',
    '/swagger/swagger',
    '/users/login',
    '/users/register',
    '/healthcheck',
    '/applications/list',
    '/components/live-versions',
    '/components/version-infos',
    '/pages/lives',
    '/templates/lives',
    '/content/tag-versions',
    '/contents',
    '/contents/changes',
    '/functions/lives',
    '/conditions/lives',
    '/variables/lives',
    '/pages/live-infos',
    '/pages/draft-infos',
    '/files',
  ],
  mongodb: mongoConfig || 'mongodb://127.0.0.1:27017/test?retryWrites=false',
  locale: 'en',
  plugins: ['@foxpage/foxpage-plugin-unpkg'],
  allLocales: ['en-US', 'zh-HK', 'en-HK', 'ko-KR', 'ja-JP'], // Supported locales
};
