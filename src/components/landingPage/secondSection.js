import React from 'react';
import "./secondSection.css";

const SecondSection = () => {
  return (
    <>
      <div className='secondSectionMain'>
        <div className='flexStart'>
          {/* First Flex Container */}
          <div className='flex-half'>
            <img className='fi' src='https://images.unsplash.com/photo-1507639451670-111c698d43a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9yZ2FuaWMlMjBsZW1vbnxlbnwwfHwwfHx8MA%3D%3D' alt='First Image'></img>
          </div>

          {/* Second Flex Container */}
          <div className='flex-half d-flex flex-column'>
            <div className='flex-half'>
              <img className='fis ' src='https://images.unsplash.com/photo-1526424382096-74a93e105682?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9yZ2FuaWMlMjBsZW1vbnxlbnwwfHwwfHx8MA%3D%3D' alt='Second Image'></img>
            </div>
            <div className='flex-half'>
              <img className='fis ' src='https://plus.unsplash.com/premium_photo-1661765766441-5c552265c730?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9yZ2FuaWMlMjBsZW1vbnxlbnwwfHwwfHx8MA%3D%3D' alt='Third Image'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
