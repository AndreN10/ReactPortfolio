import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['header', 'about', 'experience', 'services', 'portfolio', 'testimonials', 'contact'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;


