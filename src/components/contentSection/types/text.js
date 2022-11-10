import React from "react";

const TextContent = ({ className, content }) => {
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: content.join('') }}
        />
    )
}

export default TextContent;
