import styles from "./styles.module.scss";

export default function NavbarChangeLang() {
  const language = localStorage.getItem("gtoLang");

  const changeLanguage = (lang: string) => () => {
    localStorage.setItem("gtoLang", lang);
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.langCon}>
        <button
          className={styles.langBtn}
          onClick={
            language === "en" ? changeLanguage("ar") : changeLanguage("en")
          }
        >
          {language === "en" ? "التغيير للعربية" : "Change To English"}
        </button>
      </div>
    </div>
  );
}
