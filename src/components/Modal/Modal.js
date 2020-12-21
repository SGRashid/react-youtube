import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {
    render() {
        return (
            <React.Fragment>
                <button>Open modal</button>

                <div className='my-modal'>
                    <div className='my-modal__body'>
                        <div className='my-modal__header'>
                            <button className='btn-red btn ml-auto'>&#10060;</button>
                        </div>
                        <div className='my-modal__text my-auto'>
                            <h1>Modal title</h1>
                            <p>I am awesome modal!</p>
                            <button className='btn btn-primary'>Close modal</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}