import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./AllHotels.module.css";

interface Props {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
  showDiscounted: boolean;
  setShowDiscounted: (val: boolean) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
  sortOrder: string;
  setSortOrder: (val: string) => void;
  resetFilters: () => void;
}

const HotelFilters: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  showDiscounted,
  setShowDiscounted,
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  resetFilters
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.divContainerFil_Sort}>
      <div className={styles.divFilter}>
        <input
          type="text"
          placeholder={t("AllHotels.searchPlaceholder")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.DivSortFilters}>
        <div>
          <label>{t("AllHotels.sortBy")}</label>
          <select className={styles.selectSorting} onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="none">{t("AllHotels.noSorting")}</option>
            <option value="price">{t("AllHotels.sortByPrice")}</option>
            <option value="rating">{t("AllHotels.sortByRating")}</option>
            <option value="discount">{t("AllHotels.showDiscounted")}</option>
            <option value="date">{t("AllHotels.sortByDate")}</option>
          </select>
        </div>

        {sortBy !== "none" && (
          <div className={styles.divSortOrder}>
            <label>{t("AllHotels.sortOrder")}</label>
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="ascending">{t("AllHotels.ascending")}</option>
              <option value="descending">{t("AllHotels.descending")}</option>
            </select>
          </div>
        )}

        <div className={styles.labelCheckbox}>
          <label>{t("AllHotels.showDiscounted")}</label>
          <input type="checkbox" checked={showDiscounted} onChange={() => setShowDiscounted(!showDiscounted)} />
        </div>

        <button className={styles.buttonReset} onClick={resetFilters}>
          {t("AllHotels.resetFilters")}
        </button>
      </div>
    </div>
  );
};

export default HotelFilters;
