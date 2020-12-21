import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    state = { isOpen: false };

    openModal = () => this.setState({ isOpen: true });

    closeModal = () => this.setState({ isOpen: false });

    render() {
        return (
            <React.Fragment>
                <button className='btn btn-outline-primary' onClick={ this.openModal }>
                    Open modal
                </button>

                {this.state.isOpen && (
                    <div className='my-modal'>
                        <div className='my-modal__body'>
                            <div className='my-modal__header'>
                                <button className='btn-red btn ml-auto'
                                        onClick={ this.closeModal }
                                >
                                    &#10060;
                                </button>
                            </div>
                            <div className='my-modal__text my-auto'>
                                <h1>Modal title</h1>
                                <p>I am awesome modal!</p>
                                <button className='btn btn-primary'
                                        onClick={ this.closeModal }
                                >
                                    Close modal
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}