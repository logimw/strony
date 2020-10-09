import React from 'react';

const Thumbnail = ({category, img, url}) => {
    return (
        <div className="thumbnail">
            <a className="thumbnail__link" href={url}>
                <div className={`thumbnail--${img}`}>
                    <div className="thumbnail__slide">
                        <span className="thumbnail__info">{category}</span>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Thumbnail;
