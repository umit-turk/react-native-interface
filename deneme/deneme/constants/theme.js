import { Dimensions } from "react-native";
const {width, height} = Dimensions.get("window");

export const COLORS = {
    blue: "#3B5998",
    lighgray: "#9DA6BA",
    white: "#FFFFFF",
    blurwhite:"rgba(255, 255, 255, 0.1)",
    red: "#EF1549",
    lightgreen: 'rgba(37, 211, 102, 0.1)',
    lightgreen2:"rgba(30, 186, 190, 0,1)",
    green : "#25D366",
    green2:"#1EBABE",
    lightblue: "rgba(0, 159, 227, 0.1)",
    blue2: "#009FE3",
    lightpurple: "rgba(123, 97, 255, 0.1)",
    purple: "#7B61FF",
    darkpurple:"#7B61FF",
    lightyellow: "rgba(255, 204, 24, 0.1)",
    yellow: "#FFCC18",
    sun:"rgba(255, 204, 24, 0.1)",
    lightred: "rgba(255, 34, 153, 0.1)",
    red2: "#FF2299",
    lightblack: "#0A0A36",
    lightgreen3:'rgba(37, 211, 102, 0.2)',
    background:"#E5E5E5",
    tabbarBack: "#C4C4C4",
};
export const SIZES = {
    radius:13,
    radius2:24,

    width,
    height,
}
export const FONTS = {
    Poppins: "Poppins-Medium"
}