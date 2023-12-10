// Đọc dữ liệu XML
function loadXML(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "K20411001.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
  
    // Lấy thông tin sinh viên
    var mssv = xmlDoc.getElementsByTagName("mssv")[0].childNodes[0].nodeValue;
    var name = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    var lop = xmlDoc.getElementsByTagName("class")[0].childNodes[0].nodeValue;
    var sdt = xmlDoc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
    var email = xmlDoc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    var moTa = xmlDoc.getElementsByTagName("description")[0].childNodes[0].nodeValue;
  
    // Hiển thị lên table
    var table = "<tr><td>MSSV</td><td>" + mssv + "</td></tr>";
    table += "<tr><td>Họ và tên</td><td>" + name + "</td></tr>";
    table += "<tr><td>Lớp</td><td>" + lop + "</td></tr>";
    table += "<tr><td>SĐT</td><td>" + sdt + "</td></tr>";
    table += "<tr><td>Email</td><td>" + email + "</td></tr>";
    table += "<tr><td>Mô tả</td><td>" + moTa + "</td></tr>";
  
    document.getElementById("studentInfo").innerHTML = table;
  }
  
  // Lấy ngày hiện tại
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  document.getElementById("currentDate").innerHTML = date;
  
  // Gọi hàm load dữ liệu
  loadXML();


