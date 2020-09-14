import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {


    const initialValue = false;
    const [darkMode, setDarkMode] = useLocalStorage('theDarkMode', initialValue);

    return [darkMode, setDarkMode];

}

export default useDarkMode;