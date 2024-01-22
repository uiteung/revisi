import {postWithToken} from "https://jscroot.github.io/api/croot.js";
import {getCookie} from "https://jscroot.github.io/cookie/croot.js";
import {getValue} from "https://jscroot.github.io/element/croot.js";


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formrevisi");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const InputNPM = getValue('inputNilaiNIM');
      const InputTahun = getValue('inputNilaiTahun');
      const InputRevisi = getValue('inputrevisi');

      let split = InputRevisi.split(",")
  
      let data = {
        "nim" : InputNPM,
        "tahun_aka" : InputTahun,
        "revisi" : split
    };
  
      console.log(data);
  
      postWithToken("https://kimteungbim.ulbi.ac.id/public/revisi", "AUTH", getCookie("login"),  data, responsesdata());
    });
})  

function responsesdata(value) {
    console.log(value)
}