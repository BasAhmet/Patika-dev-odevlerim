// tarih oluşturma fonksiyonu
function showTime() {
    let dt = new Date();    // DATE() ile yeni bir tarih nesnesi oluşturuldu.
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second = dt.getSeconds();
    let day = dt.getUTCDay();

    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

    day = days[day];

    minute = tik(minute);
    second = tik(second);
    hour = tik(hour);

    let myClock = document.getElementById('myClock');
    myClock.innerText = hour + ":" + minute + ":" + second + " " + day;

    // her 1 saniyede bir yenileme yapılıyor.
    let time
    time = setInterval('showTime()', 1000);
}
// Tek basamaklı saat, dakika, saniyenin başına 0 eklendi
function tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}
showTime();
