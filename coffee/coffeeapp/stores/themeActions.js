import { lightTheme,darkTheme } from "../constants";

export const TOGGLE_THEME_BEGIN = "TOGGLE_THEME_BEGIN"
export const TOGGLE_THEME_SUCCESS = "TOGGLE_THEME_SUCCESS"
export const TOGGLE_THEME_FAILURE = "TOGGLE_THEME_FAILURE"

export const toggleThemeBegin = () => ({
    type: TOGGLE_THEME_BEGIN
})

export const toggleThemeSuccess = (selectedTheme) => ({
    type: TOGGLE_THEME_SUCCESS,
    payload: {selectedTheme}
})

export const toggleThemeError = (error) => ({
    type: TOGGLE_THEME_BEGIN,
    payload:{error}
})

export const toggleTheme = (themeType) => {
    return dispatch => {
        dispatch(toggleThemeBegin())

        switch (themeType) {
            case "dark":
                dispatch(toggleThemeSuccess(darkTheme))
                break;
            case "light":
                dispatch(toggleThemeSuccess(lightTheme))
            default:
                dispatch(toggleThemeError({error: "Invalid theme type"}))
                break;
        }
    }
}