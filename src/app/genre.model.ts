export class Genre {
    public id: number;
    public static idCounter: number = 1;

    constructor(public genreName: string) {
        this.id = Genre.idCounter;
        Genre.idCounter++
    }

}
