const privatePath = {
  profile: '/admin/profile',
}

const publicPath = {
  main: '/',
}
const sessionPath = {
  login: '/login',
  registration: '/registration',
}
export const ROUTES_PATH = {
  ...privatePath,
  ...publicPath,
  ...sessionPath,
}
