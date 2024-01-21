 let reg = document.querySelector(".section__btn-reg")
 let opreg = document.querySelector(".section__reg")

reg.addEventListener("click", function(){
    opreg.classList.toggle("openRegBlock")
})

let log = document.querySelector(".section__btn-log")
let oplog = document.querySelector(".section__log")

log.addEventListener("click", function(){
   oplog.classList.toggle("openlogBlock")
})