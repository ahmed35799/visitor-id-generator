const form = document.getElementById("visitorForm");
const qrCanvas = document.getElementById("qrcode");
const idCard = document.getElementById("idCard");
const idName = document.getElementById("idName");
const idCategory = document.getElementById("idCategory");
const idOrganization = document.getElementById("idOrganization");
const idQR = document.getElementById("idQR");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const organization = document.getElementById("organization").value;
    const category = document.getElementById("category").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const visitorID = "VIS-" + Date.now();

    const qrData = `ID: ${visitorID}\nالاسم: ${fullName}\nجهة العمل: ${organization}\nالفئة: ${category}`;

    // توليد QR للعرض العام
    QRCode.toCanvas(qrCanvas, qrData, function (error) {
        if (error) console.error(error);
    });

    // ملئ بطاقة ID
    idName.textContent = `الاسم: ${fullName}`;
    idCategory.textContent = `الفئة: ${category}`;
    idOrganization.textContent = `جهة العمل/الجهة التابعة: ${organization}`;
    
    // توليد QR داخل البطاقة
    QRCode.toCanvas(idQR, qrData, function (error) {
        if (error) console.error(error);
    });

    // عرض البطاقة
    idCard.style.display = "block";

    alert(`تم تسجيل الزائر بنجاح! ID: ${visitorID}`);
});
