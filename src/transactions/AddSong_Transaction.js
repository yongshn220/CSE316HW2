import jsTPS_Transaction from "../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addNewSong();
    }
    
    undoTransaction() {
        this.model.deleteSong(this.model.currentList.songs.length - 1);
    }
}