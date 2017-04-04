export class Artist {
    public id: number;
    public static idCounter: number = 1;

    constructor(public artistName: string, public genreConId: number) {
        this.id = Artist.idCounter;
        Artist.idCounter++
    }

}
