/** 
 * 請求失敗的錯誤處理 
 * @param {Number} status 失敗的狀態碼
 */
 export default (status, other) => {
  switch (status) {
    case 404:
      console.log(status);
      break;
    default:
      console.log(other);   
  }
}