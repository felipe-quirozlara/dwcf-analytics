import { algunaConfig } from "./module/config.js"

const data = algunaConfig;

function createData(data){
  localStorage.setItem("data", data)
}