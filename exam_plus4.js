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
 * OUPUT
 * IN RA hs xa trường nhất dựa vào kết quả so sánh
 */
var schoolX = 1;
var schoolY = 1;
var student1X = 3;
var studen1Y = 3;
var student2X = 3;
var studen2Y = 3;
var student3X = 3;
var studen3Y = 3;
var toSchoolStudent1;
var toSchoolStudent2;
var toSchoolStudent3;
toSchoolStudent1 = Math.sqrt(
  (student1X - schoolX) ** 2 + (studen1Y - schoolY) ** 2
);
toSchoolStudent2 = Math.sqrt(
  (student2X - schoolX) ** 2 + (studen2Y - schoolY) ** 2
);
toSchoolStudent3 = Math.sqrt(
  (student3X - schoolX) ** 2 + (studen3Y - schoolY) ** 2
);
if (toSchoolStudent1 > toSchoolStudent2 && toSchoolStudent1 > toSchoolStudent3) {
    console.log("Sinh viên xa trường nhất là sinh viên 1");
}
if (toSchoolStudent2 > toSchoolStudent1 && toSchoolStudent2 > toSchoolStudent3) {
    console.log("Sinh viên xa trường nhất là sinh viên 2");
}
if (toSchoolStudent3 > toSchoolStudent1 && toSchoolStudent3 > toSchoolStudent2) {
    console.log("Sinh viên xa trường nhất là sinh viên 3");
}
if (toSchoolStudent1 == toSchoolStudent2 && toSchoolStudent1 == toSchoolStudent3) {
    console.log("Ở cách xa như nhau");
}
if (toSchoolStudent1 == toSchoolStudent2 && toSchoolStudent1 > toSchoolStudent3) {
    console.log("Sinh viên 3 ở xa trường nhất");
}
if (toSchoolStudent1 == toSchoolStudent3 && toSchoolStudent1 > toSchoolStudent2) {
    console.log("Sinh viên 2 ở gần trường nhất");
}
if (toSchoolStudent2 == toSchoolStudent3 && toSchoolStudent2 > toSchoolStudent1) {
    console.log("Sinh viên 1 ở gần trường nhất");
}