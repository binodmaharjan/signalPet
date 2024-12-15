import { CSSProperties, ReactNode } from "react";
import useTranslation from "../hooks/useTranslation";
import { useEffect } from "react";

interface ReportSectionInterface {
    children?: ReactNode;
    title: string | ReactNode;
    secondaryText?: string | ReactNode;
    style?: CSSProperties;
    contentWrapperStyle?: CSSProperties;
}

const styles = {
    container: {
        border: "1px solid #064c60",
    },
    headerContainer: {
        backgroundColor: "#064c60",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "1%",
        paddingRight: "3%",
    },
    titleText: {
        color: "#fff",
    },
    childrenWrapper: {
        display: "inline-grid",
        width: "100%",
    },
};

const ReportSection = (props: ReportSectionInterface) => {
    const { title, children, secondaryText, style, contentWrapperStyle } =
        props;

        const { fetchTranslation, translations } = useTranslation();

        useEffect(() => {
                const loadTranslations = async () => {
          
            
                  // Fetch translation for loading text
                  if (typeof title === 'string') {
                    await fetchTranslation(title);
                  }
                  if (typeof secondaryText === 'string') {
                    await fetchTranslation(secondaryText);
                  }
            
                
                };
            
                loadTranslations();
              }, [title, secondaryText]);
    
    return (
        <div style={{ ...styles.container, ...style }}>
            <div style={styles.headerContainer}>
                <span style={styles.titleText} translate="yes" title={typeof title === 'string' ? title : ''}>
                    {typeof title === 'string' ? translations[title] : title}
                </span>
                <span style={styles.titleText} translate="yes" title={typeof secondaryText === 'string' ? secondaryText : ''}>
                    {typeof secondaryText === 'string' ? translations[secondaryText] : secondaryText}
                </span>
            </div>
            <div style={{ ...styles.childrenWrapper, ...contentWrapperStyle }}>
                {children}
            </div>
        </div>
    );
};

export default ReportSection;
