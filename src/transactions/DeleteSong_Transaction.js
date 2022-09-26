import jsTPS_Transaction from "../common/jsTPS.js"

export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, id, song) {
        super();
        this.model = initModel;
        this.id = id;
        this.song = song;
    }

    doTransaction() {
        this.model.deleteSong(this.id);
    }
    
    undoTransaction() {
        this.model.addSong(this.id, this.song);
    }
}