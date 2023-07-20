document.getElementsByClassName("button1")[0].addEventListener("click", hitungBMI);
document.getElementsByClassName("button2")[0].addEventListener("click", resetBMI);

function hitungBMI()
{
  var inputWeight = parseInt(document.getElementById("weight").value);
  var inputHeight = parseInt(document.getElementById("height").value);

  var result = (inputWeight/((inputHeight / 100) ** 2)).toFixed(2);

  console.log(result)
  
  document.getElementById("nilairesult").textContent = result;
  var result_2 = document.getElementById("result_2");

  if(result < 18.59)
  {
    result_2.innerText = "Kekurangan berat badan";
    observation.innerText = "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk meningkatkan berat badan anda adalah makan makanan sehat dan bergizi secara teratur minimal 3 kali sehari.";
    illness.innerText = "Beberapa penyakit yang berasal dari kekurangan berat badan antara lain Anemia, Tekanan darah tinggi, Masalah Kesuburan, serta meningkatkan risiko penyakit jantung."
  }
  else if(result >= 18.59 && result <= 24.99)
  {
    result_2.innerText = "Normal (ideal)";
    observation.innerText = "Anda berada dalam kategori berat badan normal. Cara terbaik untuk mempertahankan berat badan anda adalah makan makanan sehat dan bergizi secara teratur minimal 3 kali sehari."
  }
  else if(result >= 25.0 && result <= 29.99)
  {
    result_2.innerText = "Kelebihan berat badan";
    observation.innerText = "Anda berada dalam kategori kelebihan berat badan. Cara terbaik untuk mengurangi berat badan anda adalah mengurangi asupan kalori (defisit kalori), serta rutin berolahraga minimal 30 menit per hari.";
    illness.innerText = "Beberapa penyakit yang berasal dari kegemukan adalah Diabetes, Tekanan darah tinggi, Osteoarthritis, serta meningkatkan risiko penyakit jantung."

  }
  else
  {
    result_2.innerText = "Kegemukan (Obesitas)";
    observation.innerText = "Anda berada dalam kategori kekurangan berat badan. Cara terbaik untuk Cara terbaik untuk mengurangi berat badan anda adalah mengurangi asupan kalori (defisit kalori), serta rutin berolahraga minimal 30 menit per hari.";
    illness.innerText = "Beberapa penyakit yang berasal dari kegemukan adalah Diabetes, Tekanan darah tinggi, Osteoarthritis, serta meningkatkan risiko penyakit jantung."

  }

  
  document.getElementById('boxresult').scrollIntoView({behaviour: 'smooth'});
}

function resetBMI() {
    console.log("reset button")
}