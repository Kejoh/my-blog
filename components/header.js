import styles from './header.module.css'

const Header = () => (
    <div className="header-content">
        <div className="header-title-text">Do you want contact me?</div>
        <input type="button" value="Contact" className="header-button-add"/>
    </div>
);

export default Header;