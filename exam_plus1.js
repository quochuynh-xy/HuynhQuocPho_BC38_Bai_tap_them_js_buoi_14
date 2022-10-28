// Bài tập 4:
/**
 * Input:
 *    nhập ngày
 *    nhập tháng
 *    nhập năm
 * Process:
 * TÍNH NGÀY TIẾP THEO
 *  Kiếm tra ngày nhập vào có phải là ngày 31 tháng 12 hay không.
 *    Nếu đúng:
 *      ngày tiếp theo sẽ là (ngày 1) (tháng 1) (năm +1)
 *    Nếu sai:
 *     xét riêng các tháng không phải là tháng 2:
 * Kiểm tra tháng nhập vào:
 *  Nếu là tháng có 30 ngày: 4- 6 - 9 - 11
 *    nếu rơi vào các tháng 30 ngày và ngày nhập vào là 30 thì ngày tiếp theo là ngày 1, tháng = tháng + 1;
 *    nếu ngày nhập vào không phải là cuối tháng thì ngày tiếp theo là ngày + 1
 *  Nếu là tháng có 31 ngày: 1 - 3 - 5 - 7 - 8 - 10 - 12
 *    nếu rơi vào các tháng 31 ngày và ngày nhập vào là 31 thì ngày tiếp theo là ngày 1, tháng = tháng +1;
 *    nếu ngày nhập vào không phải là cuối tháng thì ngày tiếp theo là ngày + 1
 *  Xét đến tháng 2
 *  Kiểm tra năm nhập vào có phải là năm nhuận hay không
 *    nếu là năm nhuận:
 *      nếu ngày nhập vào là ngày 29 thì ngày tiếp theo là ngày 1
 *      nếu không phải thì là ngày +1
 *    nếu không phải là năm nhuận:
 *      nếu ngày nhập vào là 28 thì ngày tiếp theo là ngày 1
 *      nếu không phải thì là ngày +1
 * TÍNH NGÀY TRƯỚC ĐÓ:
 * Kiểm tra xem ngày nhập vào có phải là ngày 1 tháng 1 hay không
 *  Nếu như là ngày 1 tháng 1 thì:
 *  Ngày trước đó: 31 / 12 / năm -1
 * Trường hợp tháng trước là tháng có 31 ngày
 * Kiếm tra ngày nhập vào có phải là ngày 1 và tháng nhập vào có phải là các tháng 2-4-6-8-9-11-1 hay không
 *  Nếu đúng: ngày trước đó là 31 / tháng -1 / năm
 * Trường hợp tháng trước là tháng có 30 ngày
 * Kiểm tra ngày nhập vào có phải là ngày  1 và tháng nhập vào có phải là các tháng 5-7-10-12 hay không
 *  Nếu đúng: ngày trước đó là ngày 30 / tháng -1 / năm
 * Trường hợp ngày nhập vào là ngày 1 và tháng nhập vào là tháng 3
 *  Kiểm tra năm có phải là năm nhuận hay không.
 *    Nếu là năm nhuận: ngày trước đó: ngày 29 / tháng 2/ năm
 *    Nếu không phải là năm nhuận: ngày trước đó: 28 / tháng 2/ năm
 * Trường hợp ngày nhập vào không phải là ngày đầu tháng:
 *    Ngày trước đó: ngày -1/ tháng -1/ năm
 */
var date = 30;
var month = 4;
// Year > 100
var year = 2020;
var nextDay;
var nextMonth;
var previousDay;
var previousMonth;
var yearNext = year;
var yearPre = year;
//***************************
if ((year % 4 == 0 && year / 100 != 0) || year % 400 == 0) {
  is366 = true;
} else {
  is366 = false;
}
console.log("năm nhuận: ", is366);
// *************************************************************
var accept = true;
if (year < 100) {
  accept = false;
}
if (month < 1 || month > 12) {
  accept = false;
}
if (date > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
  accept = false;
}
if (
  date > 31 &&
  (month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12)
) {
  accept = false;
}
if (month == 2) {
  if (is366 == true) {
    if (date > 29) {
      accept = false;
    }
  } else {
    if (date > 28) {
      accept = false;
    }
  }
}
console.log("Chấp nhận tính ngày: ", accept);
//*****************************
// Tính ngày hôm sau
function theNextDay() {
  // Hàm chỉ chạy khi thỏa điều kiện accept == true
  if (accept == true) {
    // Ngày nhập vào thuộc tháng 12
    if (month == 12) {
      if (date == 31) {
        nextDay = 01;
        nextMonth = 01;
        yearNext = year + 1;
      } else {
        nextDay = date + 1;
        nextMonth = month;
      }
    }
    // Ngày nhập vào thuộc tháng có 30 ngày.
    if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (date == 30) {
        nextDay = 01;
        nextMonth = month + 1;
      } else {
        nextDay = date + 1;
        nextMonth = month;
      }
    }
    //Ngày nhập vào thuộc tháng có 31 ngày
    if (
      month == 1 ||
      month == 3 ||
      month == 5 ||
      month == 7 ||
      month == 8 ||
      month == 10
    ) {
      if (date == 31) {
        nextDay = 01;
        nextMonth = month + 1;
      } else {
        nextDay = date + 1;
        nextMonth = month;
      }
    }
    // Nếu tháng nhập vào là tháng 2
    if (month == 2) {
      // Kiểm tra nếu là tháng 2 năm nhuận
      if (is366) {
        if (date == 29) {
          nextDay = 01;
          nextMonth = month + 1;
        } else {
          nextDay = date + 1;
          nextMonth = month;
        }
      }
      // đối với tháng 2 không phải là của năm nhuận
      else {
        if (date == 28) {
          nextDay = 01;
          nextMonth = month + 1;
        } else if (date < 28) {
          nextDay = date + 1;
          nextMonth = month;
        }
      }
    }
    console.log("Nhập vào:", date, month, year);
    console.log("Ngày tiếp theo:", nextDay, nextMonth, yearNext);
    return nextDay, nextMonth, yearNext;
  } else {
    console.log("KHÔNG THỎA MÃN ĐIỀU KIỆN TÍNH NGÀY");
  }
}
// Tính Ngày trước đó
function thePreviousDay() {
  // Hàm chỉ chạy khi thỏa điều kiện accept == true
  if (accept == true) {
    // Trường hợp nhập vào ngày 1 tháng 1
    if (date == 1 && month == 1) {
      previousDay = 31;
      previousMonth = 12;
      yearPre = year - 1;
    }
    // Tháng trước là tháng 30 ngày, ngày nhập vào là ngày đầu tháng
    if (date == 1 && month != 3) {
      if (month == 5 || month == 7 || month == 10 || month == 12) {
        previousDay = 30;
        previousMonth = month - 1;
      }
      // Tháng trước là tháng 31 ngày, ngày nhập vào là ngày đầu tháng
    } else if (
      date == 1 &&
      (month == 2 ||
        month == 4 ||
        month == 6 ||
        month == 8 ||
        month == 9 ||
        month == 10)
    ) {
      previousDay = 31;
      previousMonth = month - 1;
    } else if (date == 1 && month == 3) {
      // Tháng trước là tháng 2
      //Tháng 2 năm nhuận
      if (is366 == true) {
        previousDay = 29;
        previousMonth = month - 1;
      }
      //Tháng 2 năm bình thường
      else {
        previousDay = 28;
        previousMonth = month - 1;
      }
    } else {
      //Trường hợp khác ngày 1
      previousDay = date - 1;
      previousMonth = month;
    }
    console.log("Ngày trước đó:", previousDay, previousMonth, yearPre);
    return nextDay, nextMonth, yearPre;
  } else {
    console.log("KHÔNG THỎA MÃN ĐIỀU KIỆN TÍNH NGÀY");
  }
}
// Cho chạy hàm
console.log("*************");
theNextDay();
thePreviousDay();
