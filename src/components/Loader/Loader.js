import React from 'react';
import './Loader.css';

export default () => (
    <div className='loader-container d-flex flex-column'>
        <h1 className='loader-title mx-auto'>Загрузка...</h1>
        <div className='box-big box-red d-flex rotate-clockwise m-auto'>
            <div className='box-small box-yellow m-auto rotate-conterclockwise'></div>
        </div>
    </div>
    );