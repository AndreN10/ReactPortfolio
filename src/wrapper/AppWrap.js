import React from 'react'
import { NavigationDots, HeaderSocials } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${classNames}`}>
            {/* <HeaderSocials /> */}

            <div className='app__wrapper app__flex'>
                <Component />
                
            </div>
            
            <NavigationDots active={idName}/>
        </div>
    )
}

export default AppWrap