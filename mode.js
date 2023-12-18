
//ilk onnce queriyselectorla body-i secirik
let body = document.querySelector("body");
//consola body-i cixardiriq
console.log(body);
//sonra ise asaqdaki input ve buttonlari yaradiriq
let input = document.createElement("input")
let openBtn = document.createElement("button");
let closeBtn = document.createElement("button");
//yaratdigimiz input openbuttonunu ve closebuttonunu bodye elave edirik
body.append(input, openBtn, closeBtn)
//open ve close buttonlarinin dahilindeki yazilari yaziriq
openBtn.innerText = "ac"
closeBtn.innerText = "bagla"
/* 
   biz burada ise yerine yetireceyimiz tapsiriqin esasi 
   olan open clikt emeliyatini yerine yetireceyi ardicilligi
   teyin edirik
*/
openBtn.addEventListener("click", () => {
    input.removeAttribute("disabled");
    openBtn.setAttribute("disabled", true);
    closeBtn.removeAttribute("disabled");
});
/* 
   biz burada ise yerine yetireceyimiz tapsiriqin esasi 
   olan close clikt emeliyatini yerine yetireceyi ardicilligi
   teyin edirik
*/
closeBtn.addEventListener("click", () => {
    //burada disabled yazdiqda element isledile bilmir
    input.setAttribute("disabled", true);
    // burada ise setatributla disableyidi yeniden elave edirik
    closeBtn.setAttribute("disabled", true);
    //burada yazdigimiz removeAttribute ise disabled hususiyyetini dayandirir
    openBtn.removeAttribute("disabled");
});
