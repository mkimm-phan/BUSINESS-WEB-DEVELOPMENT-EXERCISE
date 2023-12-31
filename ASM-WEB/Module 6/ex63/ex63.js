<div>
<label> Birthday (*)</label>
    Day: <select id="birth-day"></select>
    Month: <select id="birth-month"></select>
    Year: <select id="birth-year"></select>           
</div>
    // Ngay
    var x = document.getElementById("birth-day");

    for (let i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = i.toString();
        x.add(option, x[i]);
    }

    // Thang
    var x = document.getElementById("birth-month");

    for (let i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.text = i.toString();
        x.add(option, x[i]);
    }

    // Nam
    var x = document.getElementById("birth-year");

    for (let i = 1950; i <= 2023; i++) {
        var option = document.createElement("option");
        option.text = i.toString();
        x.add(option, x[i]);
    }

    // DUA THONG TIN VAO BANG THONG TIN

    function addRow() {

        // Get name
        var str = document.getElementById("in4-name").value;
        // Get email
        var email = document.getElementById("email").value
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            email = email;
        } else {
            alert("Vui lòng nhập lại địa chỉ email!")
            email = "";
        }
        // Get sex
        var sex = "";
        if (document.getElementById("Nam").checked || document.getElementById("Nu").checked) {
            if (document.getElementById("Nam").checked) {
                sex = document.getElementById("Nam").value;
            }
            if (document.getElementById("Nu").checked) {
                sex = document.getElementById("Nu").value;
            }
        } else {
            sex = "";
            alert("Vui lòng nhập chọn giới tính!")
        }


        // Get birth day
        var birth_day = document.getElementById("birth-day").value + "/" + document.getElementById("birth-month").value + "/" + document.getElementById("birth-year").value;

        // Get hobbies
        var hobbies = "";
        if (document.getElementById("mua-sam").checked || document.getElementById("du-lich").checked || document.getElementById("tan-gau").checked || document.getElementById("doc-sach").checked || document.getElementById("nghe-nhac").checked) {
            if (document.getElementById("mua-sam").checked) {
                hobbies += document.getElementById("mua-sam").value + ", ";
            }
            if (document.getElementById("du-lich").checked) {
                hobbies += document.getElementById("du-lich").value + ", ";
            }
            if (document.getElementById("tan-gau").checked) {
                hobbies += document.getElementById("tan-gau").value + ", ";
            }
            if (document.getElementById("doc-sach").checked) {
                hobbies += document.getElementById("doc-sach").value + ", ";
            }
            if (document.getElementById("nghe-nhac").checked) {
                hobbies += document.getElementById("nghe-nhac").value + ", ";
            }
        } else {
            hobbies = "";
            alert("Vui lòng chọn sở thích!")
        }


        // Get favorite color
        var favorite_color = document.querySelector('input[name="color"]:checked').value;
        if (favorite_color == null) {
            favorite_color = "";
        }


        if ((str != null) && (email != null) && (sex != null) && (birth_day != null) && (hobbies != null) && (favorite_color != null))

            var table = document.getElementById("tbl-registered-table");
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        cell1.innerHTML = str;
        cell2.innerHTML = email;
        cell3.innerHTML = sex;
        cell4.innerHTML = birth_day;
        cell5.innerHTML = hobbies;
        cell6.innerHTML = favorite_color;
    }

    function delRow() {
        document.getElementById("in4-name").value = '';
        document.getElementById("in4-name").focus();
        document.getElementById("birth-day").value = '';
        document.getElementById("birth-month").value = '';
        document.getElementById("birth-year").value = '';
        document.getElementById("mua-sam").checked = false;
        document.getElementById("du-lich").checked = false;
        document.getElementById("tan-gau").checked = false;
        document.getElementById("doc-sach").checked = false;
        document.getElementById("nghe-nhac").checked = false;
        document.getElementsByName("color").value = '';
        document.getElementById("form-email").value = '';
        document.getElementById("Nam").checked = false;
        document.getElementById("Nu").checked = false;
        document.getElementById("blue").checked = false;
        document.getElementById("red").checked = false;
        document.getElementById("yellow").checked = false;
        document.getElementById("green").checked = false;
        document.getElementById("plum").checked = false;
    }