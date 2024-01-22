import {postWithToken} from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import {getValue} from "https://jscroot.github.io/element/croot.js";


let token = getCookie("login")
if (token == "") {
    window.location.href("https://euis.ulbi.ac.id/")
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("forminputbe");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const InputNPM = getValue('inputNilaiNIMbe');
      const InputTahun = getValue('inputNilaiTahun');
      const inputBagian = getValue('inputbagianbe');
      const InputTipe = getValue('tipebimbinganbe');
      const Input1 = getValue('input1');
      const Input2 = getValue('input2');
      const Input3 = getValue('input3');
      const Input4 = getValue('input4');

      let url = "https://kimteungbim.ulbi.ac.id/sidang/p3/nilai/"

  
      let data = {
        "prodi" : 14,
        "nim" : parseInt(InputNPM),
        "tahun_aka" : InputTahun,
        "tipe" : InputTipe,
        "assessment_inputs" : [
            {"assess_name" : "Semua endpoint berfungsi termasuk otorisasi dan autentikasi token", "assess_weight": 25, "value" : parseInt(Input1)},
            {"assess_name" : "Package dibuat sendiri dan semua digunakan", "assess_weight": 25, "value" : parseInt(Input2)},
            {"assess_name" : "Semua endpoint di GCF memakai package yang dibuat dan lokasi server di jakarta", "assess_weight": 25, "value" : parseInt(Input3)},
            {"assess_name" : "Terintegrasi dengan wa.my.id", "assess_weight": 25, "value" : parseInt(Input4)},
        ]
    };
  
      console.log(data);
  
      postWithToken(url, "LOGIN", token,  data, (results) => {
        // Handle results for the second action
        alert(results.status)
      });
    });
})  

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("forminputfe");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const InputNPM = getValue('inputNilaiNIMfe');
      const InputTahun = getValue('inputNilaiTahun');
      const inputBagian = getValue('inputbagianfe');
      const InputTipe = getValue('tipebimbinganfe');
      const Input1 = getValue('input1fe');
      const Input2 = getValue('input2fe');
      const Input3 = getValue('input3fe');
      const Input4 = getValue('input4fe');

      let url = "https://kimteungbim.ulbi.ac.id/sidang/p3/nilai/"

  
      let data = {
        "prodi" : 14,
        "nim" : parseInt(InputNPM),
        "tahun_aka" : InputTahun,
        "tipe" : InputTipe,
        "assessment_inputs" : [
            {"assess_name" : "semua js di rilis versi di jsdelivr dari semua js buatan sendiri yang dipakai frontend", "assess_weight": 25, "value" : parseInt(Input1)},
            {"assess_name" : "pemanggilan jsdelivr pada html yang sudah pasti pakai type module", "assess_weight": 25, "value" : parseInt(Input2)},
            {"assess_name" : "kelengkapan css, favicon, 404.html, modal, transisi, loading, responsive dan hasil analisis dari gtmetrix.com", "assess_weight": 25, "value" : parseInt(Input3)},
            {"assess_name" : "memakai custom domain pada github pages nya.", "assess_weight": 25, "value" : parseInt(Input4)},
        ]
    };
  
      console.log(data);
  
      postWithToken(url, "LOGIN", token,  data, (results) => {
        // Handle results for the second action
        alert(results.status)
      });
    });
})  

function responsesdata(value) {
    console.log(value)
}