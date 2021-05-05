import AuthStore from './auth'

export default class RootStore {
  auth: AuthStore
  constructor() {
    this.auth = new AuthStore(this)
  }
}
