import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import './hero.scss';

const baseClass = "hero";

const Hero = () => {
    return (
        <div className={baseClass}>
            <StaticImage
                src="../../images/hero.jpg"
                loading="eager"
                layout="fullWidth"
                aspectRatio={4 / 3}
                formats={["auto", "webp", "avif"]}
                alt=""
                className={`${baseClass}__bg`}
            />
            <div className={`${baseClass}__content`}>
                <h1 className={`${baseClass}__title page-title`}>
                    Firmin Steyaert
                </h1>
            </div>
        </div>
    )
}

export default Hero;
