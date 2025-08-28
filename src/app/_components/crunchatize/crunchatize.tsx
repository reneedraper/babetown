import React, { useState } from 'react';
import './crunchatize.scss';

import { InsideMouth, LowerGums, LowerTeeth, UpperGums, UpperTeeth } from './mouthParts'

export default function CrunchatizeMeCapn() {

   const [isChompin, setIsChompin] = useState(false)

   const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Enter' && !isChompin) {

         setIsChompin(true);
      }  
      else  {
         setIsChompin(false)
      }
   }



   return (
      <>
         <button type='button' className="button is-primary" onMouseDown={ ()=> setIsChompin(true)} onKeyDown={handleKeyDown}>{`Crunchatize Me Cap\'n`}!</button>
         {isChompin &&
            <div id="crunchatize" className="modal is-active is-justify-content-flex-start" onClick={() => setIsChompin(false)}>
               <svg className="chompers animate-mouth-into-frame" id="chomp chomp" viewBox="0 0 476.68 271.168" overflow="visible" enableBackground="new 0 0 476.68 271.168">
                  <g className="animate-inner-mouth">
                     <InsideMouth />
                  </g>
                  <UpperGums />
                  <g id="lower gums n teeth" className='animate-lower-mouth'>
                     <LowerGums />
                     <LowerTeeth />

                  </g>
                  <UpperTeeth />
               </svg>
            </div>}

      </>)

};



