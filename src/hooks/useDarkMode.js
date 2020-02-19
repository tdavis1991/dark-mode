import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkmode = () => {
    const [dark, setDark] = useLocalStorage('dark-mode', false)

    useEffect(() => {
       const body = document.querySelector('body');
       if(dark){
           body.classList.add('dark-mode')
       }else{
           body.classList.remove('dark-mode')
       }
    }, [dark])

    return [dark, setDark]
}

export default useDarkmode;