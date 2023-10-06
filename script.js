// Mengambil elemen-elemen yang dibutuhkan dari DOM
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiResult = document.getElementById("result");
const comment = document.querySelector(".comment");

// Fungsi untuk menghitung BMI
function calculate() {
    // Mengambil nilai berat dan tinggi dari input
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value) / 100; // Konversi tinggi ke meter

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Harap masukkan nilai berat dan tinggi yang valid.");
        return;
    }

    // Menghitung BMI
    const bmi = weight / (height * height);

    // Menampilkan hasil BMI
    bmiResult.textContent = bmi.toFixed(2);

    // Menentukan komentar berdasarkan BMI
    const result = '';
    if (bmi < 18.5) {
        result = 'You are Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'You are Healthy';
    } else if (bmi >= 25 && bmi <= 29.9) {
        result  = 'You are Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
        result  = 'You are Obese';
    } else if (bmi >= 35) {
        result = 'You are Extremely obese';
    }
 
    resultArea.style.display = "block";
    document.querySelector(".comment").innerHTML = 'You Are <span id="comment"> ${result}</span>';
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Menambahkan event listener untuk tombol "Calculate BMI"
const calculateButton = document.getElementById("submit");
calculateButton.addEventListener("click", calculate);
