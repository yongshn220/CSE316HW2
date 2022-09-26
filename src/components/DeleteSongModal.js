import React, { Component } from 'react';

export default class DeleteSongModal extends Component {

    render() {
        const { deleteSongCallback, hideDeleteSongModal } = this.props;

        return (
            <div class="modal" id="delete-song-modal" defaultValue="" data-animation="slideInOutLeft">
                <div class="modal-root" id='verify-delete-song-root'>
                    <div class="modal-north">
                        Delete Song?
                    </div>                
                    <div class="modal-center">
                        <div class="modal-center-content">
                            Are you sure you wish to permanently remove <span id="delete-song-span"></span> from the playlist?
                        </div>
                    </div>
                    <div class="modal-south">
                        <input 
                            type="button" 
                            id="delete-song-confirm-button" 
                            class="modal-button" 
                            value='Confirm' 
                            onClick={deleteSongCallback}
                        />
                        <input 
                            type="button" 
                            id="delete-song-cancel-button" 
                            class="modal-button" 
                            value='Cancel'
                            onClick={hideDeleteSongModal}
                        />
                    </div>
                </div>
            </div>
        );
    }
}