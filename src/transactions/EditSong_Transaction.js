import jsTPS_Transaction from "../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, id, prevSong, newSong) {
        super();
        this.model = initModel;
        this.id = id;
        this.prevSong = prevSong;
        this.newSong = newSong;
    }

    doTransaction() {
        this.model.editSong(this.id, this.newSong);
    }
    
    undoTransaction() {
        this.model.editSong(this.id, this.prevSong);
    }
}