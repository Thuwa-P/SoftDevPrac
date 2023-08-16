document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const cname = document.getElementById("cName").value;
    const contactPerson = document.getElementById("contactPerson").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const boothSize = document.getElementById("boothSize").value;
    const chair = document.getElementById("chair").value;

    const errors = [];

    // Check if cName, contactPerson, and phoneNum are not empty
    if (!cname.trim()) {
      errors.push("ชื่อร้านห้ามเป็นค่าว่าง");
    }
    if (!contactPerson.trim()) {
      errors.push("ชื่อผู้ติดต่อห้ามเป็นค่าว่าง");
    }
    if (!phoneNum.trim()) {
      errors.push("เบอร์โทรศัพท์ผู้ติดต่อห้ามเป็นค่าว่าง");
    }

    // Check if boothSize is selected
    if (boothSize === "") {
      errors.push("กรุณาเลือกขนาดของร้าน");
    }

    // Check if chair is between 1 and 10
    const parsedChair = parseInt(chair);
    if (isNaN(parsedChair) || parsedChair < 1 || parsedChair > 10) {
      errors.push("จำนวนเก้าอี้ต้องอยู่ระหว่าง 1 ถึง 10");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      const form = document.getElementById("registration form");
      form.submit();
    }
  });
});
