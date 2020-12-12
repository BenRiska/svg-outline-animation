const logo = document.querySelectorAll('#logo2 path');
console.log(logo)

for (let i = 0; i < logo.length; i++){
    console.log(`Letter is ${logo[i].getTotalLength()}`)
}