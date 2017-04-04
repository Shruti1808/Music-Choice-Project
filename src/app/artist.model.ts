export class Artist {
    public artistId: number;
    public static idCounter: number = 1;

    constructor(public artistName: string) {
        this.artistId = Artist.idCounter;
        Artist.idCounter++
    }

}
