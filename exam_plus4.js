/**
 * INPUT:
 * Tọa độ (x0, y0) của trường
 * tọa độ (x1, y1) của hs1
 * tọa độ (x2, y2) của hs2
 * tọa độ (x3, y3) của hs3
 * PROCESS
 * Tính khoảng cách của từng sinh viên đến trường
 * a1 = Math.sqrt((x1-x0)**2 + (y1-y2)**2)
 * tương tự với a2 và a3
 * so sánh a1, a2 và a3 để tìm số lớn nhất
 * nếu a1>a2 và a1>a3 thì xa trường nhất là hs1
 * nếu a2>a1 và a2>a3 thì xa trường nhất là hs2
 * nếu a3>a1 và a3>a2 thì xa trường nhất là hs3
 * Tính đến các khả năng có hai sinh viên cách xa trường như nhau thì 
 * liệu người còn lại là gần nhất hay xa nhất.
 * OUPUT
 * IN RA hs xa trường nhất dựa vào kết quả so sánh
 */
function handleDistance() {
  var schoolX = document.getElementById("schoolX").value * 1;
  var schoolY = document.getElementById("schoolY").value * 1;
  var student1X = document.getElementById("student1X").value * 1;
  var studen1Y = document.getElementById("studen1Y").value * 1;
  var student2X = document.getElementById("student2X").value * 1;
  var studen2Y = document.getElementById("studen2Y").value * 1;
  var student3X = document.getElementById("student3X").value * 1;
  var studen3Y = document.getElementById("studen3Y").value * 1;
  var toSchoolStudent1;
  var toSchoolStudent2;
  var toSchoolStudent3;
  var message = document.getElementById("exam4Result");
  toSchoolStudent1 = Math.sqrt(
    (student1X - schoolX) ** 2 + (studen1Y - schoolY) ** 2
  );
  toSchoolStudent2 = Math.sqrt(
    (student2X - schoolX) ** 2 + (studen2Y - schoolY) ** 2
  );
  toSchoolStudent3 = Math.sqrt(
    (student3X - schoolX) ** 2 + (studen3Y - schoolY) ** 2
  );
  if (
    toSchoolStudent1 > toSchoolStudent2 &&
    toSchoolStudent1 > toSchoolStudent3
  ) {
    message.innerHTML = "Sinh viên xa trường nhất là sinh viên 1";
  }
  if (
    toSchoolStudent2 > toSchoolStudent1 &&
    toSchoolStudent2 > toSchoolStudent3
  ) {
    message.innerHTML = "Sinh viên xa trường nhất là sinh viên 2";
  }
  if (
    toSchoolStudent3 > toSchoolStudent1 &&
    toSchoolStudent3 > toSchoolStudent2
  ) {
    message.innerHTML = "Sinh viên xa trường nhất là sinh viên 3";
  }
  if (
    toSchoolStudent1 == toSchoolStudent2 &&
    toSchoolStudent1 == toSchoolStudent3
  ) {
    message.innerHTML = "Cả 3 cách xa trường như nhau";
  }
// Khả năng có 2 sinh viên cách xa trường như nhau
  if (
    toSchoolStudent1 == toSchoolStudent2 &&
    toSchoolStudent1 != toSchoolStudent3
  ) {
    if (toSchoolStudent1 > toSchoolStudent3) {
      message.innerHTML =
        "Sinh viên 1 và 2 ở xa trường nhất, có quãng đường đến trường bằng nhau";
    } else {
      message.innerHTML = "Sinh viên 3 ở xa trường nhất";
    }
  }
  if (
    toSchoolStudent1 == toSchoolStudent3 &&
    toSchoolStudent1 != toSchoolStudent2
  )
    if (toSchoolStudent1 > toSchoolStudent2) {
      message.innerHTML =
        "Sinh viên 1 và 3 ở xa trường nhất, có quãng đường đến trường bằng nhau";
    } else {
      message.innerHTML = "Sinh viên 2 ở xa trường nhất";
    }
  if (
    toSchoolStudent2 == toSchoolStudent3 &&
    toSchoolStudent2 != toSchoolStudent1
  ) {
    if (toSchoolStudent2 > toSchoolStudent1) {
      message.innerHTML =
        "Sinh viên 2 và 3 ở xa trường nhất, có quãng đường đến trường bằng nhau";
    } else {
      message.innerHTML = "Sinh viên 1 ở xa trường nhất";
    }
  }
}
