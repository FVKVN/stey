import React from 'react';

export default function Text(props) {
    return React.createElement('p', {
        className: props.className,
        dangerouslySetInnerHTML: {
            __html: props.data,
        },
    });
}
