
function giaiPhuongTrinhBacHai(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            return "Phương trình vô nghiệm";
        } else {
            let x = -c / b;
            return "x = " + x;
        }
    } else {
        let delta = b * b - 4 * a * c;
        let x1, x2;

        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a);
            x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return "x1 = " + x1 + ", x2 = " + x2;
        } else if (delta === 0) {
            x1 = -b / (2 * a);
            return "x1 = x2 = " + x1;
        } else {
            return "Phương trình vô nghiệm";
        }
    }
}

function giaiPhuongTrinh() {
    let a = parseFloat(document.getElementById("ida").value);
    let b = parseFloat(document.getElementById("idb").value);
    let c = parseFloat(document.getElementById("idc").value);

    let ketQua = giaiPhuongTrinhBacHai(a, b, c);

    document.getElementById("ketQua").innerHTML = ketQua;
}

function resetForm() {
    document.getElementById("ida").value = "";
    document.getElementById("idb").value = "";
    document.getElementById("idc").value = "";
    document.getElementById("ketQua").innerText = "";
}

