import {postWithToken} from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import {getValue} from "https://jscroot.github.io/element/croot.js";


let token = getCookie("login")
if (token == "") {
    window.location.href("https://euis.ulbi.ac.id/")
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("forminputfe");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const InputNPM = getValue('inputNilaiNIMfe');
      const InputTahun = getValue('inputNilaiTahun');
      const Input1 = getValue('input1fe');
      const Input2 = getValue('input2fe');
      const Input3 = getValue('input3fe');
      const Input4 = getValue('input4fe');
      const Input5 = getValue('input5fe');
      const Input6 = getValue('input6fe');
      const Input7 = getValue('input7fe');

      let url = "https://kimteungbim.ulbi.ac.id//nilai/"

  
      let data = {
        "prodi" : 14,
        "nim" : InputNPM,
        "tahun_aka" : InputTahun,
        "tipe" : "i1",
        "assessment_inputs" : [
            {"assess_name" : "content", "assess_weight": 15, "value" : Input1},
            {"assess_name" : "Delivery Written article and oral presentation", "assess_weight": 15, "value" : Input2},
            {"assess_name" : "Penjelasan dan Pembahasan Terkait topik penelitian", "assess_weight": 15, "value" : Input3},
            {"assess_name" : "Penyusunan Dokumen Penelitian", "assess_weight": 15, "value" : Input4},
            {"assess_name" : "Hasil Penelitian", "assess_weight": 20, "value" : Input5},
            {"assess_name" : "Kesimpulan Penelitian", "assess_weight": 10, "value" : Input6},
            {"assess_name" : "Daftar Pustaka", "assess_weight": 10, "value" : Input7},
        ]
    };
  
      console.log(data);
  
      postWithToken(url, "LOGIN", token,  data, (results) => {
        // Handle results for the second action
        alert(results.status)
      });
    });
})  