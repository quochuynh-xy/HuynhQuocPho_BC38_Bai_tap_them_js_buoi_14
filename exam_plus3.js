/**
 * INPUT
 * Nhập vào số nguyên có 3 chữ số
 * PROCESS
 * Tách riêng các chữ số hàng trăm, chục, đơn vị
 * số hàng trăm = Math.floor(số nhập vào/100)
 * số hàng chục = Math.floor((số nhập vào%100)/10)
 * số hàng đơn vị = (số nhập vào%10)
 * Cách đọc:
 * số hàng trăm + số hàng chục + số hàng đơn vị
 * số hàng trăm là 0 thì không đọc
 * Nếu số hàng trăm khác 0 thì đọc:
 * số hàng trăm = 1 => một trăm
 * ...
 * số hàng trăm = 9 => chín trăm
 * số hàng chục = 1 => mười
 * Xét các trường hợp đặc biệt với chữ số hàng chục là 0 
 * ...
 * số hàng chục = 9 => chín mươi
 *
 * số hàng đơn vị = 0 => " ";
 * Xét các trường hợp khi số hàng đơn vị là 1
 * ...
 * số hàng đơn vị = 9 => chín
 * OUTPUT:
 * in ra cách đọc = đọc số hàng trăm + hàng chục + hàng đơn vị
 *
 *
 *
 */
function readNumber() {
  var input = document.getElementById("ex3_number").value * 1;
  var message = document.getElementById("exam3Result");
  var hundreds = Math.floor(input / 100);
  var dozens = Math.floor((input % 100) * (1 / 10));
  var units = input % 10;
  var readHundreds;
  var readDozens;
  var readUnits;
  //Đọc số hàng trăm:
  switch (hundreds) {
    case 1:
      readHundreds = "Một trăm";
      break;
    case 2:
      readHundreds = "Hai trăm";
      break;
    case 3:
      readHundreds = "Ba trăm";
      break;
    case 4:
      readHundreds = "Bốn trăm";
      break;
    case 5:
      readHundreds = "Năm trăm";
      break;
    case 6:
      readHundreds = "Sáu trăm";
      break;
    case 7:
      readHundreds = "Bảy trăm";
      break;
    case 8:
      readHundreds = "Tám trăm";
      break;
    default:
      9;
      readHundreds = "Chín trăm";
      break;
  }
  // Đọc số hàng chục
  switch (dozens) {
    case 0:
      if (units != 0) {
        readDozens = " lẻ";
      } else {
        readDozens = "";
      }
      break;
    case 1:
      readDozens = " mười";
      break;
    case 2:
      readDozens = " hai mươi";
      break;
    case 3:
      readDozens = " ba mươi";
      break;
    case 4:
      readDozens = " bốn mươi";
      break;
    case 5:
      readDozens = " năm mươi";
      break;
    case 6:
      readDozens = " sáu mươi";
      break;
    case 7:
      readDozens = " bảy mươi";
      break;
    case 8:
      readDozens = " tám mươi";
      break;
    default:
      readDozens = " chín mươi";
      break;
  }
  // Đọc số hàng đơn vị
  switch (units) {
    case 0:
      readUnits = "";
      break;
    case 1:
      if (dozens == 1 || dozens == 0) {
        readUnits = " một";
      } else {
        readUnits = " mốt";
      }
      break;
    case 2:
      readUnits = " hai";
      break;
    case 3:
      readUnits = " ba";
      break;
    case 4:
      readUnits = " bốn";
      break;
    case 5:
      readUnits = " năm";
      break;
    case 6:
      readUnits = " sáu";
      break;
    case 7:
      readUnits = " bảy";
      break;
    case 8:
      readUnits = " tám";
      break;
    default:
      readUnits = " chín";
      break;
  }
  if (input <= 999 && input >= 100) {
    message.innerHTML = readHundreds + "" + readDozens + "" + readUnits;
  } else {
    alert("Vui lòng nhập số nguyên lớn hơn 99 và bé hơn 1000!");
  }
}
