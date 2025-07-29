<h1>LocalStorage İletişim Formu & Admin Paneli</h1>

  <h2>Ön Koşullar</h2>
  <ul>
    <li>Basit bir metin editörü (VS Code, Sublime Text, Notepad++ vb.)</li>
    <li>Güncel bir web tarayıcısı (Chrome, Firefox, Edge vb.)</li>
  </ul>

  <h2>Proje Dosya Yapısı</h2>
  <ul>
    <li><strong>index.html</strong> – Ziyaretçi tarafı; iletişim formunu içerir.</li>
    <li><strong>admin.html</strong> – Yönetici paneli; kaydedilmiş mesajları listeler, düzenler, siler.</li>
    <li><strong>style.css</strong> – Tüm sayfalarda ortak kullanılan stil tanımları.</li>
    <li><strong>script.js</strong> – index.html ve admin.html’de form işleme ve listeleme kodları.</li>
  </ul>

  <h2>Kurulum Adımları</h2>
  <ol>
    <li>
      Depoyu klonlayın veya ZIP indirip açın:
      <pre>git clone https://github.com/kullaniciadi/portfolio.git</pre>
    </li>
    <li>
      Proje klasörünü açın:
      <pre>cd portfolio</pre>
    </li>
    <li>
      Tüm dosyaların aynı dizinde olduğundan emin olun. Şu dört dosya olmalı:
      <ul>
        <li>index.html</li>
        <li>admin.html</li>
        <li>style.css</li>
        <li>script.js</li>
      </ul>
    </li>
  </ol>

  <h2>Kullanım</h2>
  <h3>1. Form Gönderme</h3>
  <ol>
    <li>Tarayıcıda <code>index.html</code> dosyasını açın.</li>
    <li>Ad, e‑posta ve mesaj alanlarını doldurun.</li>
    <li>“Gönder” butonuna tıklayın.</li>
    <li>Veriler, tarayıcı LocalStorage’ında <code>contactMessages</code> anahtarına kaydedilir.</li>
    <li>Aşağıda “Mesajınız kaydedildi!” uyarısı çıkar.</li>
  </ol>

  <h3>2. Kayıtları Görüntüleme ve Düzenleme</h3>
  <ol>
    <li>Aynı tarayıcı penceresinde yeni bir sekme açın ve <code>admin.html</code> dosyasını yükleyin.</li>
    <li>Liste halinde tüm kayıtlar görüntülenecek.</li>
    <li>Her satırdaki giriş alanlarını doğrudan düzenleyip “Kaydet” butonuna basarak güncelleyin.</li>
    <li>“Sil” butonuyla seçili kaydı kaldırabilirsiniz.</li>
  </ol>

  <h2>Yerel Sunucu Önerisi</h2>
  <p>Dosyaları doğrudan açarken bazı tarayıcılar LocalStorage’ı izole edebilir. Sorun yaşamamak için basit bir HTTP sunucu kullanın:</p>
  <pre>python -m http.server 8000</pre>
  <p>Sonra tarayıcıya şunları yazın:</p>
  <ul>
    <li><code>http://localhost:8000/index.html</code></li>
    <li><code>http://localhost:8000/admin.html</code></li>
  </ul>

  <h2>Lisans</h2>
  <p>MIT Lisansı</p>
