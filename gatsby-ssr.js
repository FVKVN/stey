/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react");

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: `nl` });
    setHeadComponents([
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-300.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            key="josefinFont300"
        />,
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-300.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="josefinFont300"
        />,
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-600.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            key="josefinFont600"
        />,
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="josefinFont600"
        />,
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            key="josefinFontRegular"
        />,
        <link
            rel="preload"
            href="/fonts/josefin-sans-v25-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="josefinFontRegular"
        />,
        <link
            rel="preload"
            href="/fonts/yeseva-one-v20-latin-regular.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
            key="yesevaFont"
        />,
        <link
            rel="preload"
            href="/fonts/yeseva-one-v20-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
            key="yesevaFont"
        />,
    ]);
}
