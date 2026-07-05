const scanBtn = document.getElementById("scanBtn");
const result = document.getElementById("result");

scanBtn.addEventListener("click", startScanner);

let scanner = null;

function startScanner() {

    result.innerHTML = "Đang mở camera...";

    document.getElementById("reader").style.display = "block";

    scanner = new Html5Qrcode("reader");

    scanner.start(
        {
            facingMode: "environment"
        },
        {
            fps: 10,
            qrbox: 250
        },
        function(decodedText) {

            scanner.stop();

            result.innerHTML = "Đã quét: " + decodedText;

        },
        function(error) {
            // Không cần xử lý
        }
    );

}
