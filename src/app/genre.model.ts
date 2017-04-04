export class Genre {
    public genreId: number;
    public static idCounter: number = 1;

    constructor(public genreName: string) {
        this.genreId = Genre.idCounter;
        Genre.idCounter++
    }

}
