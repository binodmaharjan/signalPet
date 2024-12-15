import { useEffect } from "react";
import { reportHeader } from "../utils/constants";
import useTranslation from "../hooks/useTranslation";

const styles = {
    container: {
        backgroundColor: "#064c60",
        display: "flex",
        flexDirection: "row" as "row",
        justifyContent: "space-between",
        padding: "1rem",
        width: "100%",
    },
    logo: {
        width: "10rem",
    },
    secondaryText: {
        color: "#fff",
    },
};

const ReportHeader = () => {

    const { fetchTranslation, translations} = useTranslation();

    useEffect(() => {
            const loadTranslations = async () => {
              // Fetch translation for loading text
              await fetchTranslation(reportHeader.secondaryText);
    
            };
        
            loadTranslations();
          }, []);

    return (
        <div style={styles.container}>
            <img
                alt="Logo"
                src={require("../static/logo.png")}
                style={styles.logo}
            />
            <span style={styles.secondaryText} translate="yes" title={translations[reportHeader.secondaryText]}> 
                {translations[reportHeader.secondaryText]}
            </span>
        </div>
    );
};

export default ReportHeader;
