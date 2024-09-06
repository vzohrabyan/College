import React, {useState} from "react";
import i18n from '../../i18n';
import "./LanguageSelector.scss"

const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); 

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   
        setSelectedLanguage(e.target.value);
    }

    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage}>  
            <option value="am">ՀԱՅ</option>
            <option value="en">ENG</option>
            <option value="ru">РУС</option>
        </select>
    );
};

export default LanguageSelector;