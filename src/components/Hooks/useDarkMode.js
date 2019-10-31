import {useEffect} from 'react';
import {useLocalStorage} from './useLocaleStorage';

export const useDarkMode = (enableDark, initalValue) => {
  const [enableDarkMode, setEnableDarkMode] =  useLocalStorage(enableDark, initalValue)

  useEffect (() => {
    var b = document.querySelector('body');
      if (enableDarkMode === true){        
        b.classList.add('dark-mode');
      } else {
        b.classList.remove('dark-mode')
      }
  },[enableDarkMode])

    return( [enableDarkMode, setEnableDarkMode] )
}