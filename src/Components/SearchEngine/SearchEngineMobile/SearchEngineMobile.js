import "./SearchEngineMobile.scss";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SearchEngineMobile = () => {
  const darkMode = useSelector((state) => state.darkMode);
  const languagePrimary = useSelector((state) => state.languagePrimary);
  const [visibilityMoreFields, setVisibilityMoreFields] = useState(false);
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

  useEffect(() => {
    if (visibilityMoreFields === false) {
      let background = document.querySelector(".offer__searchBackground");
      let searchEngineMobileHeight = document.querySelector(".searchEngineMobile").offsetHeight;
      background.style.height = `${searchEngineMobileHeight + 50}px`;
    } else {
      let searchEngineMobileHeight;
      let background = document.querySelector(".offer__searchBackground");
      let backgroundCurrentHeight = document.querySelector(".offer__searchBackground").offsetHeight;
      let counter = 0;
      setTimeout(() => {
        searchEngineMobileHeight = document.querySelector(".searchEngineMobile").offsetHeight;
      }, 500);
      const heightInterval = setInterval(() => {
        counter += 5;
        background.style.height = `${backgroundCurrentHeight + counter}px`;
        if (background.offsetHeight >= searchEngineMobileHeight + 50) {
          clearInterval(heightInterval);
          console.log(background.offsetHeight, searchEngineMobileHeight);
        }
      }, 1);
    }
  }, [visibilityMoreFields, setVisibilityMoreFields]);

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

  const moreFieldsHandler = () => {
    setVisibilityMoreFields((previousState) => !previousState);
  };
  let additionalFields;

  if (visibilityMoreFields) {
    additionalFields = (
      <Fragment>
        <div className="searchEngineMobile__selectContainer">
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
        <input type="text" onChange={districtSelectedHandler} value={districtSelected} className="searchEngineMobile__field searchEngineMobile__field--additional searchEngineMobile__field--2" placeholder={languagePrimary ? "DZIELNICA" : "DISTRICT"} />
        <div className="searchEngineMobile__selectContainer">
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
        <input type="number" onChange={selectedOfferNumberHandler} value={selectedOfferNumber} className="searchEngineMobile__field searchEngineMobile__field--additional searchEngineMobile__field--4" placeholder={languagePrimary ? "NUMER OFERTY" : "OFFER NUMBER"} />
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--livingAreaFromPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--livingAreaFromEN"}>
          <input onChange={minimumValueLivingAreaHandler} value={minimumValueLivingArea} className="fieldContainer__field fieldContainer__field--1" placeholder={languagePrimary ? "POWIERZCHNIA OD" : "LIVING AREA FROM"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--livingAreaToPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--livingAreaToEN"}>
          <input onChange={maximumValueLivingAreaHandler} value={maximumValueLivingArea} className="fieldContainer__field fieldContainer__field--2" placeholder={languagePrimary ? "POWIERZCHNIA DO" : "LIVING AREA TO"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--priceFromPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--priceFromEN"}>
          <input onChange={minimalPriceHandler} value={minimalPrice} className="fieldContainer__field fieldContainer__field--3" placeholder={languagePrimary ? "CENA OD" : "PRICE FROM"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--priceToPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--priceToEN"}>
          <input onChange={maximalPriceHandler} value={maximalPrice} className="fieldContainer__field fieldContainer__field--4" placeholder={languagePrimary ? "CENA DO" : "PRICE TO"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--roomsFromPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--roomsFromEN"}>
          <input onChange={minimumRoomsNumberHandler} value={minimumRoomsNumber} className="fieldContainer__field fieldContainer__field--5" placeholder={languagePrimary ? "LICZBA POKOI" : "NUMBER OF ROOMS"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--roomsToPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--roomsToEN"}>
          <input onChange={maximumRoomsNumberHandler} value={maximumRoomsNumber} className="fieldContainer__field fieldContainer__field--6" placeholder={languagePrimary ? "LICZBA POKOI" : "NUMBER OF ROOMS"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--floorFromPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--floorFromEN"}>
          <input onChange={minimumFloorHandler} value={minimumFloor} className="fieldContainer__field fieldContainer__field--7" placeholder={languagePrimary ? "PIĘTRO" : "FLOOR"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--floorToPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--floorToEN"}>
          <input onChange={maximumFloorHandler} value={maximumFloor} className="fieldContainer__field fieldContainer__field--8" placeholder={languagePrimary ? "PIĘTRO" : "FLOOR"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--buildYearFromPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--buildYearFromEN"}>
          <input onChange={minimalBuildYearHandler} value={minimalBuildYear} className="fieldContainer__field fieldContainer__field--9" placeholder={languagePrimary ? "ROK BUDOWY" : "BUILD YEAR"} />
        </div>
        <div className={languagePrimary ? "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--buildYearToPL" : "searchEngineMobile__fieldContainer searchEngineMobile__fieldContainer--buildYearToEN"}>
          <input onChange={maximalBuildYearHandler} value={maximalBuildYear} className="fieldContainer__field fieldContainer__field--10" placeholder={languagePrimary ? "ROK BUDOWY" : "BUILD YEAR"} />
        </div>
      </Fragment>
    );
  } else {
    additionalFields = "";
  }

  return (
    <form onSubmit={submitSearchEngineHandler} className={darkMode ? "searchEngineMobile searchEngineMobile--dark" : "searchEngineMobile searchEngineMobile--bright"}>
      <div className="searchEngineMobile__selectContainer">
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
      <div className="searchEngineMobile__selectContainer">
        <div onClick={showOptionsHandler} className="selectContainer__field">
          {transactionTypeSelected.length > 1 ? `${transactionTypeSelected}` : `${languagePrimary ? "RODZAJ TRANSAKCJI" : "TRANSACTION TYPE"}`}
        </div>
        <div className="selectContainer__options">
          <option onClick={transactionTypeHandler} className="options__option" value="">
            {languagePrimary ? "WSZYSTKIE" : "ALL"}
          </option>
          <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "SPRZEDAŻ" : "SELL"}>
            {languagePrimary ? "SPRZEDAŻ" : "SELL"}
          </option>
          <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "WYNAJEM" : "RENT"}>
            {languagePrimary ? "WYNAJEM" : "RENT"}
          </option>
          <option onClick={transactionTypeHandler} className="options__option" value={languagePrimary ? "PRZETARG" : "AUCTION"}>
            {languagePrimary ? "PRZETARG" : "AUCTION"}
          </option>
        </div>
      </div>
      <input type="text" onChange={placeSelectedHandler} value={placeSelected} className="searchEngineMobile__field" placeholder={languagePrimary ? "MIEJSCOWOŚĆ" : "PLACE"} />
      {additionalFields}
      <div onClick={moreFieldsHandler} className="searchEngineMobile__field searchEngineMobile__field--more">
        {visibilityMoreFields ? `${languagePrimary ? "MNIEJ" : "LESS PROPERTIES"}` : `${languagePrimary ? "WIĘCEJ" : "MORE PROPERTIES"}`}
      </div>
      <button type="submit" className="searchEngineMobile__field searchEngineMobile__field--search">
        {languagePrimary ? "SZUKAJ" : "SEARCH"}
      </button>
      <div className="searchEngineMobile__decoration--left"></div>
      <div className="searchEngineMobile__decoration--right"></div>
    </form>
  );
};

export default SearchEngineMobile;
