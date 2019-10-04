import UseLocal from './UseLocal'
import { useEffect } from 'react';
import '../App.css';


const useDarkMode = (theme, initialValue) => {
    const [value, setValue] = UseLocal(theme, initialValue);


    useEffect(() => {
        if (value === true) {
            console.log('dark mode on')
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
            console.log('dark mode off')
        }
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;