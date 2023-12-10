export interface IBook {
    BookId: string,
    BookName: string,
    Price: number,
    Image: string
}

export class Book {
tenSach: any;
giaBan: any;
moTa: any;
anhBia: any;
ngayCapNhat: any;
soLuongTon: any;
maCD: any;
maNXB: any;
    maSach!: string;
    constructor(
        public BookId: string = "",
        public BookName: string = "",
        public Price: number = 0,
        public Image: string = "") { }
}

export interface IBook2{
    BookId:string,
    Tensach:string,
    Giaban:number,
    Mota:string,
    Anhbia: string,
    Ngaycapnhat:string,
    Soluongton:number,
    MaCD:number,
    MaNXB:number
    }
    export class Book2{
        constructor(
        public BookId:string="",
        public Tensach:string="",
        public Giaban:number=0,
        public Mota:string="",
        public Anhbia: string="",
        public Ngaycapnhat:string="",
        public Soluongton:number=0,
        public MaCD:number=0,
        public MaNXB:number=0
        )
        {}
    }