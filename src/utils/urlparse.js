// export function GetUrlParam(url,paraName) {
// 　　　　var arrObj = url.split("?");
// 　　　　if (arrObj.length > 1) {
// 　　　　　　var arrPara = arrObj[1].split("&");
// 　　　　　　var arr;

// 　　　　　　for (var i = 0; i < arrPara.length; i++) {
// 　　　　　　　　arr = arrPara[i].split("=");

// 　　　　　　　　if (arr != null && arr[0] == paraName) {
//      　　　　　　　　　　return arr[1];
// 　　　　　　　　}
// 　　　　　　}
//     　　　　　　
// 　　　　}
// 　　　　else {
// 　　　　　  return null
// 　　　　}
// 　　}


// export function GetUrlParam () {
//     let url = window.location.search
//     let obj = {}
//     let reg = /[?&][^?&]+=[^?&]]+/g
//     let arr = url.match(reg)
//     // ['?id=123454','&a=b']
  
//     if (arr) {
//       arr.forEach((item) => {
//         let tempArr = item.substring(1).split('=')
//         let key = tempArr[0]
//         let val = tempArr[1]
//         obj[key] = val
//       })
//     }
//     return obj
//   };
  

export function GetUrlParam (name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return unescape(r[2]); 
    return null; 
}