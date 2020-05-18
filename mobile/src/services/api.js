import axios from "axios";

const api = axios.create({
  baseURL: "192.168.0.3:3333",
});

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com dispositivo físico: IP da máquina (Preferência -> Network)
 * 
 * Android com Emulador: localhost / $ adb reverse tcp:3333 tcp:3333
 * Android com dispositivo: IP da máquina
 */