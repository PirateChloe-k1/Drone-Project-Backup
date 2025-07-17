import CryptoJS from "crypto-js";

export function encryptByCry(txt:string, key:any) {
  key = CryptoJS.enc.Utf8.parse(key);
  let iv = CryptoJS.enc.Utf8.parse(key);
  let srcs = CryptoJS.enc.Utf8.parse(txt);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.ciphertext.toString();
}