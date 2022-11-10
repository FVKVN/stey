import React from "react";
import { slugify } from "../../helpers/slugify";
import TextContent from "./types/text";

const ContentSection = ({ type, content }) => {
    return (
        <div id={slugify(content.title)} className="page-section content-section">
            <div className="page-section__content content-section__content">
                <header className="page-section__header content-section__header">
                    <h2 className="page-section__title content-section__title">
                        {content.title}
                    </h2>
                </header>
                <div className="page-section__body content-section__body">
                    {content.subTitle !== '' &&
                        <h3 className="page-section__sub-title content-section__sub-title">
                            {content.subTitle}
                        </h3>
                    }
                    {renderBody({ type, content: content.body })}
                </div>
            </div>
        </div>
    );
};

const renderBody = ({ type, content }) => {
    switch (type) {
        case "media": return false;
        default: return <TextContent className="content-section__body__content" content={content} />;
    }
}

export default ContentSection;
