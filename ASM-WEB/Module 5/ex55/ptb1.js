function giaiPhuongTrinhBac1(a, b) {
    if (a==0 && b==0){
        ketQua.innerHTML="Vo so nghiem"
    }
    else if(a==0 && b!=0){
        ketQua.innerHTML="Vo nghiem"
    }
    else{
    let x = -b / a;}
    return "x = " + x;
} 

function giaiPhuongTrinh() {
let a = parseFloat(document.getElementById("ida").value);
let b = parseFloat(document.getElementById("idb").value);

let ketQua = giaiPhuongTrinhBac1(a, b);

document.getElementById("ketQua").innerHTML = ketQua;
}

function resetForm() {
document.getElementById("ida").value = "";
document.getElementById("idb").value = "";
document.getElementById("ketQua").innerText = "";
}

function changecolor(value){
    // alert(value)
    value=parseInt(value)
    mydiv = document.getElementById("mydiv")
    switch(value)
    {
        case 0:
            mydiv.style.backgroundColor = "yellow";
            break;
        case 1:
            mydiv.style="background-color: green; width:100px; height: 100px;"
            break;
        case 2:
            mydiv.style="background-color: black; width:100px; height: 100px;"
            break;
        default: 
            break;
    }