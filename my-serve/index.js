const express = require("express")
const app = express()
const port = 3000
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("This's my Restful API service")
})
app.listen(port, () => {
    console.log(`My Service start at port ${port}`)
})
const cors = require("cors")
app.use(cors())

let curriculum = [
    {
        "Id": "gt1",
        "Tensach": "Giáo trình tin học cơ bản",
        "Giaban": 26000,
        "Mota": "Nội dung của cuốn. Tin Học Cơ Bản Windows XP gồm có 7 chương Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cu và thanh thực đơn trong My Computer và Windows Explorer. Chương 3. Các thao tác trong windows XP. Chương 4. Các thiết lập trong Windows XP Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiêu cuốn sách cùng bạn",
        "Anhbia": "THCB.jpg",
        "Ngaycapnhat": "25/10/2014 12:00:00 SA",
        "Soluongton": 120,
        "MaCD": 7,
        "MaNXB": 7,
    },
    {
        "Id": "gt2",
        "Tensach": "Giáo trình cơ sở dữ liệu với Visual Basic 2005 và ADO Net 2.00",
        "Giaban": 12000,
        "Mota": "Cuốn sách này gồm 3 phần sau. Phần 1: Xử lý văn bản trong Microsoft thiệu các nội dung sau: Chương 1. Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3. Bộ chứa dữ liệu DataSet Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiển ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report Chương 7: ADO.NET và XML Xin trân trọng giới thiệu cùng các bạn",
        "Anhbia": "TH004.jpg",
        "Ngaycapnhat": "23/10/2013 12:00:00 SA",
        "Soluongton": 25,
        "MaCD": 3,
        "MaNXB": 2,
    },
    {
        "Id": "gt3",
        "Tensach": "Visual Basic 2005 Tập 3, Quyển 2: Lập trình Web",
        "Giaban": 20000,
        "Mota": "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu sẽ cung cấp kỹ thuật và hướng dẫn bạn. Tự học xây dựng ứng dụng Web quản lý CSDL toàn diễn với ADO NET 2.0 và ASP NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thủ dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web Quản lý CD Shop trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và NET Framework Sách có kèm theo CD-ROM bài tập",
        "Anhbia": "LTWeb2005.jpg",
        "Ngaycapnhat": "23/10/2013 12:00:00 SA",
        "Soluongton": 240,
        "MaCD": 8,
        "MaNXB": 4,
    },
]

app.get("/curriculums", cors(), (req, res) => {
    res.send(curriculum)
})
app.get("/curriculums/:id", cors(), (req, res) => {
    id = req.params["id"]
    let p = curriculum.find(x => x.Id == id)
    res.send(p)
})
app.post("/curriculums", cors(), (req, res) => {
    //put json book into database
    curriculum.push(req.body);
    //send message to client(send all database to client)
    res.send(curriculum)
})
app.put("/curriculums", cors(), (req, res) => {
    book = curriculum.find(x => x.Id == req.body.Id)
    if (book != null) {
        book.Tensach = req.body.Tensach
        book.Giaban = req.body.Giaban
        book.Mota = req.body.Mota
        book.Anhbia = req.body.Anhbia
        book.Ngaycapnhat = req.body.Ngaycapnhat
        book.Soluongton = req.body.Soluongton
        book.MaCD = req.body.MaCD
        book.MaNXB = req.body.MaNXB

    }
    res.send(curriculum)
})
app.delete("/curriculums/:id", cors(), (req, res) => {
    id = req.params["id"]
    curriculum = curriculum.filter(x => x.Id !== id);
    res.send(curriculum)
})