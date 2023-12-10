import axios from "axios";

class Client {
  constructor() {
    this.req = axios.create();
  }

  loginByEmail({username, password}) {
    const url = '/api/v1/users/loginByEmail';
    return this.req.post(url, { username, password });
  }

}

const client = new Client();

export default client;
