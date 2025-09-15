const form = document.getElementById("visitorForm");
const qrCanvas = document.getElementById("qrcode");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // جمع البيانات
    const fullName = document.getElementById("fullName").value;
    const organization = document.getElementById("organization").value;
    const category = document.getElementById("category").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // توليد معرف فريد للزائر
    const visitorID = "VIS-" + Date.now();

    // البيانات لتخزينها أو عرضها في QR
    const qrData = `ID: ${visitorID}\nالاسم: ${fullName}\nجهة العمل: ${organization}\nالفئة: ${category}`;

    // توليد QR
    QRCode.toCanvas(qrCanvas, qrData, function (error) {
        if (error) console.error(error);
        console.log("QR Code generated!");
    });

    alert(`تم تسجيل الزائر بنجاح! ID: ${visitorID}`);
});
