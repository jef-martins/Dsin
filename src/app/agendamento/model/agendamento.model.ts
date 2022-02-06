
export interface Agendamento {
    idAgenda?:number,
    name: string,
    phone: string,
    service: string,
    date: string,
    time: string,
    createdAt?:string,
    updatedAt?:string
}

export interface Phone {
    phone: string
}

export interface Edit{
    edit:boolean,
    id:number
}