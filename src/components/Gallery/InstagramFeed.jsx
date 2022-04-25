import React, { Component } from 'react';

class InstagramFeed extends Component {
    render() {
        return (
            <div>
                <div>
                    <div class="col-12">
                        <h4>LATEST FROM INSTAGRAM</h4>
                        <div class="tagembed-container" style={{ width: '96%', height: '300px', overflow: 'auto' }}>
                            <div class="tagembed-socialwall" data-wall-id="37711" view-url="https://widget.tagembed.com/37711?view">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstagramFeed;