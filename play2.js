// URL video pertama yang akan ditampilkan saat halaman dimuat
const videoPertama = 'https://ambontv.my.id/embed/spotv1.html';

// Atur video pertama saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    gantiVideo(videoPertama);
});

// Fungsi untuk mengganti video di iframe
function gantiVideo(url) {
    var frame = document.getElementById("vidio");
    if (frame) {
        frame.src = url;
    }
}

function spotv1() {
    var frame = document.getElementById("vidio");
    frame.src = "https://ambontv.my.id/embed/spotv1.html";
}

function spotv2() {
    var frame = document.getElementById("vidio");
    frame.src = "https://ambontv.my.id/embed/spotv2.html";
}

// Fungsi untuk mengganti video ke sumber SSC1
function ssc1() {
    var frame = document.getElementById("vidio");
    frame.src = "https://canhabsyi.github.io/plyr/?url=https://ssc1-ak.akamaized.net/out/v1/c696e4819b55414388a1a487e8a45ca1/index.mpd&keyId=d84c325f36814f39bbe59080272b10c3&key=550727de4c96ef1ecff874905493580f";
}

// Fungsi untuk mengganti video ke sumber SSC2
function ssc2() {
    var frame = document.getElementById("vidio");
    frame.src = "https://canhabsyi.github.io/plyr/?url=https://ssc2-ak.akamaized.net/out/v1/a16db2ec338a445a82d9c541cc9293f9/index.mpd?keyId=8bcfc55359e24bd7ad1c5560a96ddd3c&key=b5dcf721ab522af92a9d3bf0bd55b596";
}

// Fungsi untuk mengganti video ke sumber SSC3
function ssc3() {
    var frame = document.getElementById("vidio");
    frame.src = "https://canhabsyi.github.io/plyr/?url=https://ssc3-ak.akamaized.net/out/v1/42e86125555242aaa2a12056832e7814/index.mpd&keyId=7de5dd08ad8041d586c2f16ccc9490a1&key=5e1503f3398b34f5099933fedab847ef";
}

// Fungsi untuk mengganti video ke sumber SSC4
function ssc4() {
    var frame = document.getElementById("vidio");
    frame.src = "https://canhabsyi.github.io/plyr/?url=https://ssc4-ak.akamaized.net/out/v1/5267ea5772874b0db24559d643eaad93/index.mpd&keyId=5c672f6b85a94638872d0214f7806ed4&key=bf8756fbb866ee2d5c701c2289dd8de3";
}
