import { createStore } from "redux";

const initialState = { darkMode: localStorage.getItem("darkMode") === "true", 
                      languagePrimary: localStorage.getItem("languagePrimary") === "true",
                      changedMouse: false 
                     };

const websiteReducer = (state = initialState, action) => {
  if (action.type === "switchMode") {
    return {
      darkMode: !state.darkMode,
      languagePrimary: state.languagePrimary,
      changedMouse: state.changedMouse 
    };
  }
  if (action.type === "switchLanguage") {
    return {
      darkMode: state.darkMode,
      languagePrimary: action.languagePrimary,
      changedMouse: state.changedMouse 
    };
  }
  if (action.type === "switchMouse") {
    return {
      darkMode: state.darkMode,
      languagePrimary: state.languagePrimary,
      changedMouse: !state.changedMouse
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
