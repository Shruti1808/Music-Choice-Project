export class Album {
    public albumId: number;
    public static idCounter: number = 1;

    constructor(public albumName: string, public artist: string, public description: string) {
        this.albumId = Album.idCounter;
        Album.idCounter++
    }

}
