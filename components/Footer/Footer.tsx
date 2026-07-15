import css from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NOTEShub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>Developer: User Name</p>
          <p>
            Contact us:
            <Link href="mailto:customer@noteshub.app">
              customer@noteshub.app
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
