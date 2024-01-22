import {postWithToken} from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import {getValue} from "https://jscroot.github.io/element/croot.js";


let token = getCookie("login")
if (token == "") {
    window.location.href("https://euis.ulbi.ac.id/")
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formrevisi");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const InputNPM = getValue('inputNilaiNIM');
      const InputTahun = getValue('inputNilaiTahun');
      const InputRevisi = getValue('inputrevisi');
      const InputTipe = getValue('tipebimbingan')

      let url = ""
      if (InputTipe != "p3"){
        url = "https://kimteungbim.ulbi.ac.id/revisi/"
      } else {
        url = "https://kimteungbim.ulbi.ac.id/sidang/p3/revisi/"
      }

      let split = InputRevisi.split(",")
  
      let data = {
        "nim" : InputNPM,
        "tahun_aka" : InputTahun,
        "tipe" : InputTipe,
        "revisi" : split
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