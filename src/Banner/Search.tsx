import React from 'react';
import styles from './Banner.module.css';

interface SearchInputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    handleSearch: () => void;
    handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    notFound: boolean;
    t: any;
}

const SearchInput: React.FC<SearchInputProps> = ({
    inputValue,
    setInputValue,
    handleSearch,
    handleKeyPress,
    notFound,
    t
}) => {
    return (
        <div className={styles.SearchContainer}>
            <div className={styles.hover_input}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder={t('Banner.search.text')}
                />
                {notFound && <span>{t('Banner.search.span_text')}</span>}
            </div>
            
                <img className={styles.imgSearch} src={`/findHotelWeb/image/sertch.png`} alt="delete" loading="lazy" onClick={handleSearch} />
        </div>
    );
};

export default SearchInput;