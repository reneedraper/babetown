import React, { useState, useRef } from 'react';
import './crunchatize.scss';

import { InsideMouth, LowerGums, LowerTeeth, UpperGums, UpperTeeth } from './mouthParts'

export default function CrunchatizeMeCapn() {

   const [isChompin, setIsChompin] = useState(false)

   const cancelChompinB = (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === 'Escape') {
         setIsChompin(false)
      }
   }

   const cancelChompin = () => {
      setIsChompin(false)
   }

   const startChompin = () => {
      setIsChompin(true);
   }

   return (
      <>
         <button className="button is-primary" onMouseDown={startChompin} onKeyDown={cancelChompinB}>{`Crunchatize Me Cap\'n`}!</button>

         {isChompin &&
            <div id="crunchatize" className="modal is-active is-justify-content-flex-start" onClick={cancelChompin} >
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



