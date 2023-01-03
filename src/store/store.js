import { createStore } from "redux";

const initialState = { darkMode: localStorage.getItem("darkMode") === "true", // WHEN PAGE IS INITALLY RENDER, WILL RETURN FALSE
                      languagePrimary: localStorage.getItem("languagePrimary") === "true", // WHEN PAGE IS INITALLY RENDER, WILL RETURN FALSE
                     };

const websiteReducer = (state = initialState, action) => {
  if (action.type === "switchMode") { // RESPONSIBLE FOR WEBSITE COLORS - DARK OR BRIGHT WEBSITE, BY DEFAULT IS BRIGHT
    return {
      darkMode: !state.darkMode,
      languagePrimary: state.languagePrimary,
    };
  }
  if (action.type === "switchLanguage") { // RESPONSIBLE FOR WEBSITE LANGUAGE - ENGLISH OR POLISH, BY DEFAULT IS SET TO ENGLISH (languagePrimary is false)
    return {
      darkMode: state.darkMode,
      languagePrimary: action.languagePrimary,
    };
  }
  return state;
};

const store = createStore(websiteReducer);

const storeSubscribe = () => {
  localStorage.setItem("darkMode", store.getState().darkMode);
  localStorage.setItem("languagePrimary", store.getState().languagePrimary);
};

store.subscribe(storeSubscribe);

export default store;
