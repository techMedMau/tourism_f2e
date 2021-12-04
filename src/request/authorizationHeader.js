import jsSHA from "jssha";

const auth = {
  AppID: 'c5b8e02c8db2442aba2a9f4bc9d311a5',
  AppKey: 'R9V9PUMhKYLZRFuwX6qnc6Rwgus',
}

export default () => {
  const { AppID, AppKey } = auth;
  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}