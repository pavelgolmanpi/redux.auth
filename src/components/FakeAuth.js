const fakeAuth = {

  AUTH_TOKEN: null,

  authenticate(AUTH_TOKEN) {
    this.AUTH_TOKEN = AUTH_TOKEN;
  },
  signout() {
    this.AUTH_TOKEN = null;
  },
  isAuthenticated(){
    return this.AUTH_TOKEN != null;
  },
  state(){
    return {
      type: "AUTH",
      payload: this.AUTH_TOKEN
    }
  }
}

export default fakeAuth;
