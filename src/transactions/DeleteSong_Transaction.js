import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, id, song) {
        super();
        this.app = initApp;
        this.id = id;
        this.song = song;
    }

    doTransaction() {
        this.app.deleteSong(this.id);
    }
    
    undoTransaction() {
        this.app.addSong(this.id, this.song);
    }
}