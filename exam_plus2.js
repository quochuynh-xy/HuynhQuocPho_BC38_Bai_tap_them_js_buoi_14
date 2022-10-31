/**
 * INPUT:
 * Nhập vào tháng
 * Nhập vào năm
 * PROCESS:
 * Xét tháng nhập vào là tháng mấy:
 * Nếu là các tháng 1 - 3 - 5 - 7 - 8 - 10 - 12:
 *  => 31 ngày
 * Nếu là các tháng 4 - 6 - 9 - 11:
 *  => 30 ngày
 * Nếu là tháng 2 thì xét đến năm nhuận
 * Kiểm tra năm nhập vào có phải là năm nhuận hay không.
 * Năm nhuận thì chia hết cho 4 và không chia hết cho 100 hoặc chia hết cho 400
 * Nếu có:
 *  => 29 ngày
 * Nếu không
 *  => 28 ngày
 *
 * OUTPUT:
 * In ra tháng nhập vào có bao nhiêu ngày
 */
function handldeCheckDate() {
  var month = document.getElementById("ex2Month").value * 1;
  var year = document.getElementById("ex2Year").value * 1;
  var message = document.getElementById("exam2Result");
  if (year < 100 || month < 1 || month > 12) {
    alert("Nhập đúng tháng - năm (năm >100)");
  } else {
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        message.innerHTML = "Tháng có 31 ngày";
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        message.innerHTML = "Tháng có 30 ngày";
        break;
      default:
        2;
        if ((year % 4 == 0 && year / 100 != 0) || year % 400 == 0) {
          message.innerHTML = "Tháng có 29 ngày";
        } else {
          message.innerHTML = "Tháng có 28 ngày";
        }
    }
  }
}
