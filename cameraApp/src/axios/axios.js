import axios from 'axios';
// import * as SecureStore from "expo-secure-store";

const api = axios.create({
    baseURL:"https://io.adafruit.com/api/v2/.../feeds",
    headers:{
        'accept':"application/json",
        'Content-Type':"application/json",
        'X-AIO-Key':"...",
    },
});

const sheets = {
    toggleLed : (state) =>api.post("/botao-led/data", state),

}

export default sheets;