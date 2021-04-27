import React from 'react';
import './style.scss';
import orange from 'assets/images/orange-bg.jpg';

interface BannerProps{
    title?: string,
    backgroundUrl?: string
}

const defaultProps: BannerProps = {
    title: '',
    backgroundUrl: orange
}

const Banner:React.FC<BannerProps> =
    (
        props
    ):React.ReactElement => {

    const {title, backgroundUrl} = props;

    return (
        <section className='banner'
                 style={{backgroundImage: `url(${backgroundUrl})`}}
        >
            <h1 className='banner__title'>{title}</h1>
        </section>
    );
};

Banner.defaultProps = defaultProps;

export default Banner;
