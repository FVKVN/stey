import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero";
import Header from "../components/header";

import Data from "../assets/content.json";
import ContentSection from "../components/contentSection";
import { slugify } from "../helpers/slugify";

const IndexPage = () => (
    <Layout>
        <Hero />
        <Header />
        {Data.pageSections.map(section => {
            return (
                <ContentSection key={slugify(section.content.title)} type={section.type} content={section.content} />
            )
        })}
    </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
