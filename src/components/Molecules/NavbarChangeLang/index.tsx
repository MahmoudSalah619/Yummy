import styles from "./styles.module.scss";

export default function NavbarChangeLang() {
  const language = localStorage.getItem("gtoLang");

  const changeLanguage = (lang: string) => () => {
    localStorage.setItem("gtoLang", lang);
    window.location.reload();
  };
  const isEng = language === "en";

  return (
    <div>
      <div className={styles.langCon}>
        <button
          className={styles.langBtn}
          onClick={isEng ? changeLanguage("ar") : changeLanguage("en")}
        >
          {isEng ? "التغيير للعربية" : "Change To English"}
        </button>
      </div>
    </div>
  );
}
