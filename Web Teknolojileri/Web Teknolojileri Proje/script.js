// Tarih ve Saat

function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("zaman").innerHTML = date;
}
setInterval(tarihSaat, 1000);




// Yarışma Soruları

// Doğru cevapları içeren dizi
const correctAnswers = ['E', 'E', 'E', 'E', 'E'];

// HTML'deki form ve sonuç elementlerini seçme
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');
let hasWon = false; // Kullanıcının ödül kazanıp kazanmadığını kontrol etmek için bir bayrak

// Form gönderildiğinde çalışacak olan olay dinleyicisi
form.addEventListener('submit', e => {
    e.preventDefault();

    // Eğer kullanıcı ödülü daha önce kazanmışsa, tekrar gönder tuşuna basmasını engelle
    if (hasWon) {
        return;
    }

    let score = 0;
    // Kullanıcının verdiği cevapları bir dizi içinde topla
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    console.log(userAnswers);

    // Her bir soru için kullanıcının cevabını kontrol et ve puan hesapla
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 20;
        }
    });

    // Sonucu göstermek için gerekli olan div'i görünür yap
    result.classList.remove('d-none');

    // Sonucu yüzde olarak göstermek için bir interval kullan
    let points = 0;
    const interval = setInterval(() => {
        result.querySelector('span').textContent = `${points}%`;
        if (points === score) {
            clearInterval(interval);
            if (points === 100) {
                hasWon = true; // Kullanıcı ödülü kazandı, bir daha gönder tuşuna basmasını engelle
                displayCongratulations();
            }
        } else {
            points++;
        }
    }, 10);
});

    // Tebrik mesajını göstermek için fonksiyon
      function displayCongratulations() {
    // Sonucu gösteren div'i gizle
  result.style.display = 'none';

    // Tebrik mesajını içeren alert penceresini göster
  alert('Tebrikler! Hediye çiçek kazandınız. Aşağıdaki formu doldurunuz.');

    // Kullanıcı bilgilerini toplamak için bir form oluştur
    const userInfoForm = document.createElement('form');
    userInfoForm.id = 'user-info-form';
    userInfoForm.innerHTML = `
        <label for="name">Ad:</label>
        <input type="text" id="name" name="name" required>
        <label for="surname">Soyad:</label>
        <input type="text" id="surname" name="surname" required>
        <label for="phone">Telefon Numarası:</label>
        <input type="tel" id="phone" name="phone" required>
        <label for="address">Adres:</label>
        <textarea id="address" name="address" rows="4" required></textarea>
        <button type="submit">Gönder</button>
    `;
    document.body.appendChild(userInfoForm);

  // Form gönderilmesini dinle
  userInfoForm.addEventListener('submit', e => {
    e.preventDefault();
    // Teşekkür mesajını göster
    alert('Hediye çiçeğinizi en kısa sürede teslim edeceğiz. Yarışmamıza katıldığınız için teşekkür eder. İyi günler dileriz.');
});
}



  


// JavaScript ile karanlık modu açma ve kapama işlevi
function toggleDarkMode() {
    const body = document.body;

    // "dark-mode" sınıfının varlığını kontrol et ve ekleyip kaldırmak
    body.classList.toggle("dark-mode");

    // Eğer karanlık mod açıksa, butonun ikonunu değiştir ve rengini beyaz yap
    const darkModeIcon = document.querySelector('.dark-mode-toggle i');
    if (body.classList.contains("dark-mode")) {
        darkModeIcon.classList.remove('fa-adjust');
        darkModeIcon.classList.add('fa-sun');
        darkModeIcon.style.color = 'white'; // Beyaz renk ekle
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-adjust');
        darkModeIcon.style.color = ''; // Eski rengine geri dön
    }
}










  
