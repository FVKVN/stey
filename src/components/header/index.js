import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from '../../assets/svg/stey.svg';

const baseClass = "main-header";

import './header.scss';

const Header = ({ siteTitle }) => (
    <header className={baseClass}>
        <Link to="/">
            <Logo />
            {siteTitle}
        </Link>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
