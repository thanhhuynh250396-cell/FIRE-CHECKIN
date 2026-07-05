const scanBtn = document.getElementById("scanBtn");
const result = document.getElementById("result");
const reader = document.getElementById("reader");

let scanner = null;

scanBtn.addEventListener("click", startScanner);

function startScanner() {

    result.innerHTML = "📷 Đang mở camera...";

    reader.style.display = "block";

    scanner = new Html5Qrcode("reader");

    scanner.start(
        { facingMode: "environment" },
        {
            fps: 10,
            qrbox: 250
        },
        function(decodedText) {

            scanner.stop().then(function() {

                reader.style.display = "none";

                result.innerHTML =
                    "✅ Đã đọc mã:<br><br><b>" + decodedText + "</b>";

            });

        },
        function(errorMessage) {
            // Bỏ qua lỗi khi đang dò mã
        }
    ).catch(function(err) {

        result.innerHTML =
            "❌ Không mở được camera<br><br>" + err;

    });

}

