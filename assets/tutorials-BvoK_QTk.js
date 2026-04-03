const a=[{slug:"getting-started",title:"Getting Started",description:"Panduan awal untuk memulai perjalanan RTL IFUMMI 2025",icon:"rocket",steps:[{title:"Pengenalan RTL",content:`Selamat datang di RTL IFUMMI 2025! Program Rencana Tindak Lanjut ini dirancang untuk memperkenalkan mahasiswa Teknik Informatika dengan dunia IoT dan embedded systems.

Dalam program ini, kamu akan belajar:
- Dasar-dasar elektronika dan mikrokontroler
- Pemrograman Arduino
- Visual programming dengan Blockly
- Membuat proyek IoT sederhana

Mari kita mulai perjalanan seru ini!`},{title:"Persiapan Perangkat",content:`Sebelum memulai, pastikan kamu memiliki:

**Hardware:**
- Arduino Uno atau board compatible
- Kabel USB Type-A to Type-B
- Breadboard
- LED, resistor, dan komponen dasar lainnya

**Software:**
- Arduino IDE (download di halaman Download)
- Driver USB untuk Arduino
- Browser modern untuk Blockly

Semua software dapat diunduh melalui halaman Download di website ini.`},{title:"Instalasi Software",content:`Langkah-langkah instalasi Arduino IDE:

1. Buka halaman Download Software
2. Unduh Arduino IDE sesuai sistem operasi
3. Jalankan installer dan ikuti petunjuk
4. Buka Arduino IDE setelah instalasi selesai

Untuk Blockly:
- Akses melalui browser
- Tidak perlu instalasi tambahan
- Pastikan browser mendukung JavaScript`},{title:"First Program",content:`Saatnya membuat program pertamamu! Kita akan membuat LED blink sederhana.

Buka Arduino IDE dan ketik kode berikut:`,code:`void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}]},{slug:"arduino-ide",title:"Arduino IDE",description:"Pelajari cara menggunakan Arduino IDE untuk programming",icon:"code",steps:[{title:"Pengenalan Arduino IDE",content:`Arduino IDE adalah Integrated Development Environment resmi untuk pemrograman board Arduino.

**Fitur Utama:**
- Code editor dengan syntax highlighting
- Compiler built-in
- Serial monitor untuk debugging
- Library manager
- Board manager

IDE ini mendukung bahasa C/C++ yang telah disederhanakan khusus untuk Arduino.`},{title:"Instalasi dan Setup",content:`**Langkah Instalasi:**

1. Download Arduino IDE dari halaman Download
2. Jalankan installer
3. Ikuti wizard instalasi
4. Install driver USB jika diperlukan

**Konfigurasi Board:**
1. Buka Tools > Board
2. Pilih Arduino Uno (atau board yang sesuai)
3. Pilih Port yang terdeteksi
4. Pastikan koneksi berhasil`},{title:"Struktur Program",content:`Setiap program Arduino memiliki dua fungsi utama:

**setup()** - Dijalankan sekali saat board dinyalakan
**loop()** - Dijalankan berulang-ulang setelah setup`,code:`void setup() {
  // Inisialisasi
  Serial.begin(9600);
  pinMode(13, OUTPUT);
}

void loop() {
  // Program utama
  digitalWrite(13, HIGH);
  delay(500);
  digitalWrite(13, LOW);
  delay(500);
}`},{title:"Upload Code",content:`Untuk mengupload kode ke Arduino:

1. Pastikan board sudah terhubung via USB
2. Pilih board dan port yang benar di Tools
3. Klik tombol Verify (centang) untuk compile
4. Klik tombol Upload (panah) untuk upload
5. Tunggu hingga proses selesai

LED pada board akan berkedip saat upload berhasil.`},{title:"Serial Monitor",content:`Serial Monitor berguna untuk debugging dan komunikasi:

1. Buka Tools > Serial Monitor
2. Set baud rate sesuai program (biasanya 9600)
3. Lihat output dari Serial.print()`,code:`void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hello RTL IFUMMI 2025!");
  delay(1000);
}`}]},{slug:"blockly",title:"Blockly Programming",description:"Visual programming dengan drag-and-drop blocks",icon:"puzzle",steps:[{title:"Apa itu Blockly?",content:`Blockly adalah visual programming language yang menggunakan blok-blok untuk membuat program.

**Keunggulan Blockly:**
- Tidak perlu mengetik kode
- Mudah dipahami pemula
- Mengurangi syntax error
- Visualisasi logic programming
- Generate kode Arduino otomatis

Sangat cocok untuk yang baru mulai belajar programming!`},{title:"Interface Blockly",content:`**Komponen Interface:**

1. **Toolbox** - Panel berisi kategori blok
2. **Workspace** - Area untuk menyusun blok
3. **Code Preview** - Tampilan kode yang dihasilkan
4. **Control Buttons** - Upload, download, dll

**Kategori Blok:**
- Logic (if, comparison)
- Loops (repeat, while)
- Math (operasi matematika)
- Variables (variabel)
- Arduino (fungsi khusus Arduino)`},{title:"Membuat Program",content:`**Langkah membuat program:**

1. Pilih kategori blok di Toolbox
2. Drag blok ke Workspace
3. Hubungkan blok sesuai logic
4. Preview kode yang dihasilkan
5. Upload ke Arduino

**Tips:**
- Mulai dari blok setup dan loop
- Hubungkan blok secara berurutan
- Gunakan blok delay untuk timing`},{title:"Blockly vs Arduino IDE",content:`**Kapan pakai Blockly:**
- Belajar konsep dasar
- Prototype cepat
- Visual learner

**Kapan pakai Arduino IDE:**
- Proyek kompleks
- Butuh library khusus
- Optimasi kode

**Rekomendasi:**
Mulai dengan Blockly, lalu transisi ke Arduino IDE setelah memahami konsep dasar.`}]},{slug:"example-projects",title:"Contoh Proyek",description:"Kumpulan proyek praktis untuk latihan",icon:"lightbulb",steps:[{title:"LED Blink",content:`Proyek paling dasar - membuat LED berkedip.

**Komponen:**
- Arduino Uno
- LED (built-in atau external)
- Resistor 220 ohm (jika external)

**Konsep yang dipelajari:**
- Digital Output
- Fungsi delay()
- Loop program`,code:`void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`},{title:"Traffic Light",content:`Simulasi lampu lalu lintas dengan 3 LED.

**Komponen:**
- Arduino Uno
- LED Merah, Kuning, Hijau
- Resistor 220 ohm (3x)
- Breadboard dan kabel jumper`,code:`const int RED = 11;
const int YELLOW = 10;
const int GREEN = 9;

void setup() {
  pinMode(RED, OUTPUT);
  pinMode(YELLOW, OUTPUT);
  pinMode(GREEN, OUTPUT);
}

void loop() {
  // Hijau
  digitalWrite(GREEN, HIGH);
  delay(5000);
  digitalWrite(GREEN, LOW);
  
  // Kuning
  digitalWrite(YELLOW, HIGH);
  delay(2000);
  digitalWrite(YELLOW, LOW);
  
  // Merah
  digitalWrite(RED, HIGH);
  delay(5000);
  digitalWrite(RED, LOW);
}`},{title:"Button Input",content:`Membaca input dari tombol untuk mengontrol LED.

**Komponen:**
- Arduino Uno
- Push button
- LED
- Resistor 10k ohm (pull-down)
- Resistor 220 ohm (LED)`,code:`const int BUTTON = 2;
const int LED = 13;

void setup() {
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int state = digitalRead(BUTTON);
  
  if (state == HIGH) {
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(LED, LOW);
  }
}`},{title:"Temperature Sensor",content:`Membaca suhu menggunakan sensor LM35.

**Komponen:**
- Arduino Uno
- Sensor suhu LM35
- Kabel jumper

**Konsep:**
- Analog Input
- Konversi ADC ke suhu
- Serial communication`,code:`const int SENSOR = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int reading = analogRead(SENSOR);
  float voltage = reading * 5.0 / 1024.0;
  float temperature = voltage * 100;
  
  Serial.print("Suhu: ");
  Serial.print(temperature);
  Serial.println(" C");
  
  delay(1000);
}`}]}];export{a as t};
