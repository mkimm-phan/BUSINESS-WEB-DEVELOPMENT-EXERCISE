export interface ICurriculum{
    Id:string,
    Tensach: string,
    Giaban: number,
    Mota: string,
    Anhbia: string,
    Ngaycapnhat: string,
    Soluongton: number,
    MaCD: number,
    MaNXB: number
}
export class Curriculum{
    constructor(
        public Id:string="",
        public Tensach:string="",
        public Giaban:number=0,
        public Mota:string="",
        public Anhbia:string="",
        public Ngaycapnhat:string="",
        public Soluongton:number=0,
        public MaCD:number=0,
        public MaNXB:number=0
        )
    {}
}