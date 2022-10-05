import { createStore } from "redux";

const initialState = { darkMode: localStorage.getItem("darkMode") === "true", languagePrimary: localStorage.getItem("languagePrimary") === "true" };

const darkModeReducer = (state = initialState, action) => {
  if (action.type === "switchMode") {
    return {
      darkMode: !state.darkMode,
      languagePrimary: state.languagePrimary,
    };
  }
  if (action.type === "switchLanguage") {
    return {
      darkMode: state.darkMode,
      languagePrimary: action.languagePrimary,
    };
  }
  return state;
};

const store = createStore(darkModeReducer);

const storeSubscribe = () => {
  localStorage.setItem("darkMode", store.getState().darkMode);
  localStorage.setItem("languagePrimary", store.getState().languagePrimary);
};

store.subscribe(storeSubscribe);

export default store;
