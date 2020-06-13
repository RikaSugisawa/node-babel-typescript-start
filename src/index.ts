import 'core-js/index'
import 'regenerator-runtime'
import Axios from "axios";

async function request(url: string) {
  return await Axios.get(url)
}
