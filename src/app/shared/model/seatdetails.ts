export class SeatDetail {
    id: number;
    userId: number;
    bookStatus: number;

    constructor(id, userId, bookStatus)
    {
        this.id=id;
        this.userId=userId;
        this.bookStatus=bookStatus;
    }
}
