import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        return (
            <div class="songinfo" id="edit-songinfo" defaultValue="" onChange={this.handleValueChange}>
                <div class="songinfo-root" id='verify-delete-songinfo-root'>
                    <div class="songinfo-north">
                        Edit songinfo
                    </div>                
                    <div class="songinfo-center">
                        <div class="songinfo-center-content">
                            <div class="songinfo-content-key">Title</div>
                            <input id="edit-input-title" class="songinfo-content-input" defaultValue="this is title"></input>
                        </div>
                        <div class="songinfo-center-content">
                            <div class="songinfo-content-key">Artist</div>
                            <input id="edit-input-artist" class="songinfo-content-input" defaultValue="this is title"></input>
                        </div>
                        <div class="songinfo-center-content">
                            <div class="songinfo-content-key" >Youtube ID</div>
                            <input id="edit-input-youtubeId" class="songinfo-content-input" defaultValue="this is title"></input>
                        </div>
                    </div>
                    <div class="songinfo-south">
                        <input type="button" id="edit-songinfo-confirm-button" class="songinfo-button" defaultValue='Confirm' />
                        <input type="button" id="edit-songinfo-cancel-button" class="songinfo-button" defaultValue='Cancel' onClick={this.props.hideEditSongCallback}/>
                    </div>
                </div>
            </div>
        );
    }
}