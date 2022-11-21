import "./SearchEngineDesktop.scss";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SearchEngineDesktop = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);

  const [initialRender, setInitialRender] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [selectType, setSelectType] = useState();

  const [propertyTypeSelected, setPropertyTypeSelected] = useState("");
  const [transactionTypeSelected, setTransactionTypeSelected] = useState("");
  const [placeSelected, setPlaceSelected] = useState("");
  const [provinceSelected, setProvinceSelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");
  const [selectedMarketType, setSelectedMarketType] = useState("");
  const [minimumValueLivingArea, setMinimumValueLivingArea] = useState("");
  const [maximumValueLivingArea, setMaximumValueLivingArea] = useState("");
  const [minimalPrice, setMinimalPrice] = useState("");
  const [maximalPrice, setMaximalPrice] = useState("");
  const [minimumRoomsNumber, setMinimumRoomsNumber] = useState("");
  const [maximumRoomsNumber, setMaximumRoomsNumber] = useState("");
  const [minimumFloor, setMinimumFloor] = useState("");
  const [maximumFloor, setMaximumFloor] = useState("");
  const [minimalBuildYear, setMinimalBuildYear] = useState("");
  const [maximalBuildYear, setMaximalBuildYear] = useState("");
  const [selectedOfferNumber, setSelectedOfferNumber] = useState("");

  const propertyTypeHandler = (event) => {
    setPropertyTypeSelected(event.target.value);
    setShowOptions(false);
  };

  const transactionTypeHandler = (event) => {
    setTransactionTypeSelected(event.target.value);
    setShowOptions(false);
  };

  const placeSelectedHandler = (event) => {
    setPlaceSelected(event.target.value);
  };

  const provinceHandler = (event) => {
    setProvinceSelected(event.target.value);
    setShowOptions(false);
  };

  const districtSelectedHandler = (event) => {
    setDistrictSelected(event.target.value);
  };

  const marketTypeHandler = (event) => {
    setSelectedMarketType(event.target.value);
    setShowOptions(false);
  };

  const selectedOfferNumberHandler = (event) => {
    setSelectedOfferNumber(event.target.value);
  };

  const minimumValueLivingAreaHandler = (event) => {
    setMinimumValueLivingArea(event.target.value);
  };

  const maximumValueLivingAreaHandler = (event) => {
    setMaximumValueLivingArea(event.target.value);
  };

  const minimalPriceHandler = (event) => {
    setMinimalPrice(event.target.value);
  };

  const maximalPriceHandler = (event) => {
    setMaximalPrice(event.target.value);
  };

  const minimumRoomsNumberHandler = (event) => {
    setMaximumRoomsNumber(event.target.value);
  };

  const maximumRoomsNumberHandler = (event) => {
    setMinimumRoomsNumber(event.target.value);
  };

  const minimumFloorHandler = (event) => {
    setMinimumFloor(event.target.value);
  };

  const maximumFloorHandler = (event) => {
    setMaximumFloor(event.target.value);
  };

  const minimalBuildYearHandler = (event) => {
    setMinimalBuildYear(event.target.value);
  };

  const maximalBuildYearHandler = (event) => {
    setMaximalBuildYear(event.target.value);
  };

  const submitSearchEngineHandler = (event) => {
    event.preventDefault();
    setShowOptions(false);
  };

  useEffect(() => {
    setInitialRender(false);
    if (!initialRender) {
      if (showOptions) {
        selectType.style.display = "block";
      }
      if (!showOptions) {
        selectType.style.display = "none";
      }
    }
  }, [showOptions, setShowOptions]);

  const showOptionsHandler = (event) => {
    setShowOptions((previousState) => !previousState);
    setSelectType(event.target.nextSibling);
  };

  return (
    <form onSubmit={submitSearchEngineHandler} className={darkMode ? "searchEngineDesktop searchEngineDesktop--dark" : "searchEngineDesktop searchEngineDesktop--bright"}>
      <div className="searchEngineDesktop__fieldsContainer">
        <div className="fieldsContainer__column">
          <div className="column__selectContainer">
            <div onClick={showOptionsHandler} className="selectContainer__field">
              {propertyTypeSelected.length > 1 ? `${propertyTypeSelected}` : `${languagePrimary ? "RODZAJ NIERUCHOMOŚCI" : "PROPERTY TYPE"}`}
            </div>
            <div className="selectContainer__options">
              <option onClick={propertyTypeHandler} className="options__option" value="">
                {languagePrimary ? "WSZYSTKIE" : "ALL"}
              </option>
              <option onClick={propertyTypeHandler} className="options__option" value={languagePrimary ? "MIESZKANIA" : "APARTMENT"}>
                {languagePrimary ? "MIESZKANIA" : "APARTMENT"}
              </option>
              <option onClick={propertyTypeHandler} className="options__option" value={languagePrimary ? "DOMY" : "HOUSES"}>
                {languagePrimary ? "DOMY" : "HOUSES"}
              </option>
              <option onClick={propertyTypeHandler} className="options__option" value={languagePrimary ? "LOKALE" : "PREMISES"}>
                {languagePrimary ? "LOKALE" : "PREMISES"}
              </option>
              <option onClick={propertyTypeHandler} className="options__option" value={languagePrimary ? "GRUNTY" : "LAND"}>
                {languagePrimary ? "GRUNTY" : "LAND"}
              </option>
            </div>
          </div>
          <div className="column__selectContainer">
            <div onClick={showOptionsHandler} className="selectContainer__field">
              {provinceSelected.length > 1 ? `${provinceSelected}` : `${languagePrimary ? "WOJEWÓDZTWO" : "PROVINCE"}`}
            </div>
            <div className="selectContainer__options">
              <option onClick={provinceHandler} className="options__option" value="">
                {languagePrimary ? "WSZYSTKIE" : "ALL"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "DOLNOŚLĄSKIE" : "LOWER SILESIA"}>
                {languagePrimary ? "DOLNOŚLĄSKIE" : "LOWER SILESIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "KUJAWSKO-POMORSKIE" : "KUYAVIA-POMERANIA"}>
                {languagePrimary ? "KUJAWSKO-POMORSKIE" : "KUYAVIA-POMERANIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "ŁÓDZKIE" : "LODZKIE"}>
                {languagePrimary ? "ŁÓDZKIE" : "LODZKIE"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "LUBELSKIE" : "LUBLIN"}>
                {languagePrimary ? "LUBELSKIE" : "LUBLIN"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "LUBUSKIE" : "LUBUSZ"}>
                {languagePrimary ? "LUBUSKIE" : "LUBUSZ"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "MAŁOPOLSKIE" : "LESSER POLAND"}>
                {languagePrimary ? "MAŁOPOLSKIE" : "LESSER POLAND"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "MAZOWIECKIE" : "MASOVIA"}>
                {languagePrimary ? "MAZOWIECKIE" : "MASOVIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "PODKARPACKIE" : "SUBCARPATHIA"}>
                {languagePrimary ? "PODKARPACKIE" : "SUBCARPATHIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "POMORSKIE" : "POMERANIA"}>
                {languagePrimary ? "POMORSKIE" : "POMERANIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "ŚLĄSKIE" : "SILESIA"}>
                {languagePrimary ? "ŚLĄSKIE" : "SILESIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "WARMIŃSKO-MAZURSKIE" : "WARMIA-MASURIA"}>
                {languagePrimary ? "WARMIŃSKO-MAZURSKIE" : "WARMIA-MASURIA"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "WIELKOPOLSKIE" : "GREATER POLAND"}>
                {languagePrimary ? "WIELKOPOLSKIE" : "GREATER POLAND"}
              </option>
              <option onClick={provinceHandler} className="options__option" value={languagePrimary ? "ZACHODNIOPOMORSKIE" : "WEST POMERANIA"}>
                {languagePrimary ? "ZACHODNIOPOMORSKIE" : "WEST POMERANIA"}
              </option>
            </div>
          </div>
          <div className="column__container">
            <div className="container__fieldContainer">
              <input onChange={minimumValueLivingAreaHandler} value={minimumValueLivingArea} className="fieldContainer__field" placeholder={languagePrimary ? "POWIERZCHNIA OD" : "LIVING AREA FROM"} />
              <div className="fieldContainer__info">M2</div>
            </div>
            <div className="container__fieldContainer">
              <input onChange={maximumValueLivingAreaHandler} value={maximumValueLivingArea} className="fieldContainer__field" placeholder={languagePrimary ? "POWIERZCHNIA DO" : "LIVING AREA TO"} />
              <div className="fieldContainer__info">M2</div>
            </div>
          </div>
          <div className="column__container">
            <div className="container__fieldContainer">
              <input onChange={minimumFloorHandler} value={minimumFloor} className="fieldContainer__field" placeholder={languagePrimary ? "PIĘTRO" : "FLOOR"} />
              <div className="fieldContainer__info">{languagePrimary ? "OD" : "FROM"}</div>
            </div>
            <div className="container__fieldContainer">
              <input onChange={maximumFloorHandler} value={maximumFloor} className="fieldContainer__field" placeholder={languagePrimary ? "PIĘTRO" : "FLOOR"} />
              <div className="fieldContainer__info">{languagePrimary ? "DO" : "TO"}</div>
            </div>
          </div>
        </div>
        <div className="fieldsContainer__column">
          <div className="column__selectContainer">
            <div onClick={showOptionsHandler} className="selectContainer__field">
              {transactionTypeSelected.length > 1 ? `${transactionTypeSelected}` : `${languagePrimary ? "RODZAJ TRANSAKCJI" : "TRANSACTION TYPE"}`}
            </div>
            <div className="selectContainer__options">
              <option onClick={transactionTypeHandler} className="options__option" value="">
                {languagePrimary ? "WSZYSTKIE" : "ALL"}
              </option>
              <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "SPRZEDAŻ" : "SALE"}>
                {languagePrimary ? "SPRZEDAŻ" : "SALE"}
              </option>
              <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "WYNAJEM" : "RENT"}>
                {languagePrimary ? "WYNAJEM" : "RENT"}
              </option>
              <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "PRZETARG" : "AUCTION"}>
                {languagePrimary ? "PRZETARG" : "AUCTION"}
              </option>
            </div>
          </div>
          <input type="text" onChange={placeSelectedHandler} value={placeSelected} className="column__field" placeholder={languagePrimary ? "MIEJSCOWOŚĆ" : "PLACE"} />
          <div className="column__container">
            <div className="container__fieldContainer">
              <input onChange={minimalPriceHandler} value={minimalPrice} className="fieldContainer__field" placeholder={languagePrimary ? "CENA OD" : "PRICE FROM"} />
              <div className="fieldContainer__info">{languagePrimary ? "ZŁ" : "PLN"}</div>
            </div>
            <div className="container__fieldContainer">
              <input onChange={maximalPriceHandler} value={maximalPrice} className="fieldContainer__field" placeholder={languagePrimary ? "CENA DO" : "PRICE TO"} />
              <div className="fieldContainer__info">{languagePrimary ? "ZŁ" : "PLN"}</div>
            </div>
          </div>
          <div className="column__container">
            <div className="container__fieldContainer">
              <input onChange={minimalBuildYearHandler} value={minimalBuildYear} className="fieldContainer__field" placeholder={languagePrimary ? "ROK BUDOWY" : "BUILD YEAR"} />
              <div className="fieldContainer__info">{languagePrimary ? "OD" : "FROM"}</div>
            </div>
            <div className="container__fieldContainer">
              <input onChange={maximalBuildYearHandler} value={maximalBuildYear} className="fieldContainer__field" placeholder={languagePrimary ? "ROK BUDOWY" : "BUILD YEAR"} />
              <div className="fieldContainer__info">{languagePrimary ? "DO" : "TO"}</div>
            </div>
          </div>
        </div>
        <div className="fieldsContainer__column">
          <div className="column__selectContainer">
            <div onClick={showOptionsHandler} className="selectContainer__field">
              {selectedMarketType.length > 1 ? `${selectedMarketType}` : `${languagePrimary ? "RODZAJ RYNKU" : "MARKET TYPE"}`}
            </div>
            <div className="selectContainer__options">
              <option onClick={marketTypeHandler} className="options__option" value="">
                {languagePrimary ? "WSZYSTKIE" : "ALL"}
              </option>
              <option onClick={marketTypeHandler} className="options__option" value={languagePrimary ? "PIERWOTNY" : "PRIMARY"}>
                {languagePrimary ? "PIERWOTNY" : "PRIMARY"}
              </option>
              <option onClick={marketTypeHandler} className="options__option" value={languagePrimary ? "WTÓRNY" : "AFTERMARKET"}>
                {languagePrimary ? "WTÓRNY" : "AFTERMARKET"}
              </option>
            </div>
          </div>
          <input type="text" onChange={districtSelectedHandler} value={districtSelected} className="column__field" placeholder={languagePrimary ? "DZIELNICA" : "DISTRICT"} />
          <div className="column__container">
            <div className="container__fieldContainer">
              <input onChange={minimumRoomsNumberHandler} value={minimumRoomsNumber} className="fieldContainer__field" placeholder={languagePrimary ? "LICZBA POKOI" : "NUMBER OF ROOMS"} />
              <div className="fieldContainer__info">{languagePrimary ? "OD" : "FROM"}</div>
            </div>
            <div className="container__fieldContainer">
              <input onChange={maximumRoomsNumberHandler} value={maximumRoomsNumber} className="fieldContainer__field" placeholder={languagePrimary ? "LICZBA POKOI" : "NUMBER OF ROOMS"} />
              <div className="fieldContainer__info">{languagePrimary ? "DO" : "TO"}</div>
            </div>
          </div>
          <input type="number" onChange={selectedOfferNumberHandler} value={selectedOfferNumber} className="column__field" placeholder={languagePrimary ? "NUMER OFERTY" : "OFFER NUMBER"} />
        </div>
      </div>
      <button type="submit" className="searchEngineDesktop__searchButton">
        <span className="searchButton__text">{languagePrimary ? "SZUKAJ" : "SEARCH"}</span>
      </button>
      <div className="searchEngineDesktop__decoration--left"></div>
      <div className="searchEngineDesktop__decoration--right"></div>
    </form>
  );
};

export default SearchEngineDesktop;
