import React, { useState, useRef } from 'react';
import './crunchatize.scss';
import { useSpring, animated } from '@react-spring/web'

export default function CrunchatizeMeCapn() {
   const cancelRef = useRef(null)
   const [isChompin, setIsChompin] = useState(false)
   const [springs, api] = useSpring(() => ({
      from: {
         x: 0,
         y: 0,
         scale: [.1, .1]
      }
   }))

   const cancelChompin = () => {
      if (cancelRef.current) {
         clearTimeout(cancelRef.current)
      };
      api.start({
         from: {
            x: 0,
            y: -150,
            scale: [1, 1],
            opacity: 1
         },
         to: {
            x: 0,
            y: -400,
            scale: [.1, .1],
            opacity: 0
         },
         config: {
            duration: 300,
            tension: 100
         }, onRest: () => setIsChompin(false)
      })
   }

   const startChompin = () => {
      setIsChompin(true);
      cancelRef.current = setTimeout(() => {
         setIsChompin(false);
      }, 2900);
      api.start({
         from: {
            x: -100,
            y: 0,
            scale: [.1, .1],
            opacity: 1
         },
         to: {
            x: 0,
            y: -150,
            scale: [1, 1],
            opacity: 1
         },
         config: {
            duration: 500,
            tension: 300
         }
      })
   }



   return (
      <>
         <button className="button is-primary" onMouseDown={startChompin}>Crunchatize Me Cap'n!</button>

         {isChompin &&
            <div id="crunchatize" className="modal is-active" onMouseDown={cancelChompin} >
               <animated.div
                  style={{
                     top: '150px',
                     left: '0px',
                     position: 'absolute',
                     height: '100vh',
                     width: '100vw',
                     ...springs,
                  }}>

                  <svg className="chompers top" id="chomp chomp" viewBox="0 0 476.68 271.168" overflow="visible" enableBackground="new 0 0 476.68 271.168">
                     <g id="insidemouth" className="bottom">

                        <animateTransform
                           attributeName="transform"
                           begin="0s"
                           type="scale"
                           from="1,4.5"
                           to="1,.8"
                           dur="1.5s" />

                        <animateTransform
                           attributeName="transform"
                           begin="1.5s"
                           type="skewX"
                           from="0"
                           to="-3"
                           dur=".2s" />
                        <animateTransform
                           attributeName="transform"
                           begin="1.7s"
                           type="skewX"
                           from="-3"
                           to="3"
                           dur=".2s" />
                        <animateTransform
                           attributeName="transform"
                           begin="1.9s"
                           type="skewX"
                           from="3"
                           to="0"
                           dur=".2s" />
                        <animateTransform
                           attributeName="transform"
                           begin="2.1s"
                           type="skewX"
                           from="0"
                           to="-3"
                           dur=".2s" />
                        <animateTransform
                           attributeName="transform"
                           begin="2.3s"
                           type="skewX"
                           from="-3"
                           to="3"
                           dur=".2s" />
                        <animateTransform
                           attributeName="transform"
                           begin="2.5s"
                           type="skewX"
                           from="3"
                           to="0"
                           dur=".2s" />

                        <g xmlns="http://www.w3.org/2000/svg" id="OBJECTS" transform="translate(-445,-580) scale(2,2)" >

                           <g xmlns="http://www.w3.org/2000/svg">
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#9E4B4B' }} d="M411.064,311.35c-23.515-5.25-45.43-1.271-68.582-1.079c-23.152-0.192-46.013-4.171-69.529,1.079      c-21.377,4.772-38.746,29.232-38.521,55.363c0.225,26.13,18.668,50.489,40.358,52.304c19.285,1.614,37.17-12.485,56.43-14.478      c3.604-0.373,7.199-0.309,10.788,0.009c3.589-0.318,7.184-0.382,10.788-0.009c19.261,1.993,37.145,16.092,56.43,14.478      c21.69-1.815,40.133-26.173,40.358-52.304C449.81,340.582,432.441,316.122,411.064,311.35z" />
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#874040' }} d="M251.724,378.452c-1.722-16.251-3.445-32.502-5.167-48.752      c-7.55,10.171-12.241,23.361-12.124,37.013c0.144,16.712,7.746,32.688,18.876,42.516c5.523-19.574,15.255-37.965,28.441-53.455      C271.922,363.305,261.552,370.921,251.724,378.452z" />
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#874040' }} d="M419.281,365.168c-3.39-2.594-6.781-5.188-10.172-7.782c10.708,16.11,17.094,35.028,18.559,54.31      c12.767-9.464,21.759-26.789,21.916-44.983c0.125-14.508-5.178-28.494-13.575-38.888      C428.671,339.378,423.008,351.997,419.281,365.168z" />
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#522727' }} d="M413.367,377.769c-7.354-14.798-19.605-27.111-34.366-34.539      c-7.039-3.542-16.628-5.557-21.975,0.232c-6.722,7.279-0.764,20.308-6.565,28.339c-3.431,4.75-10.822,6.02-15.642,2.687      c-4.819-3.333-6.24-10.697-3.006-15.584c2.806-4.239,8.665-7.324,8.062-12.372c-0.407-3.408-3.988-5.729-7.418-5.871      c-3.43-0.142-6.696,1.356-9.75,2.922c-28.712,14.728-52.408,38.934-66.792,67.797c5.675,4.314,12.117,7.069,18.875,7.635      c19.285,1.614,37.17-12.485,56.43-14.478c3.604-0.373,7.199-0.309,10.788,0.009c3.589-0.318,7.184-0.382,10.788-0.009      c19.261,1.993,37.145,16.092,56.43,14.478c4.184-0.35,8.245-1.547,12.081-3.426      C421.877,402.585,419.163,389.431,413.367,377.769z" />
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#FF7651' }} d="M276.958,403.54c4.693-10.065,15.103-16.925,26.155-20.322      c11.053-3.397,22.846-3.795,34.46-4.163c13.56-0.43,27.358-0.836,40.454,2.517c13.097,3.354,25.627,11.092,31.081,22.854      C366.013,395.904,320.328,396.368,276.958,403.54z" />
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path style={{ 'fill': '#422020' }} d="M409.11,406.132c-0.11,0-0.221-0.011-0.331-0.033c-40.77-8.062-86.255-8.366-131.542-0.876      c-0.618,0.104-1.253-0.148-1.636-0.652c-0.383-0.504-0.455-1.178-0.187-1.751c4.451-9.548,14.365-17.287,27.199-21.233      c11.353-3.489,23.328-3.869,34.907-4.237c13.512-0.429,27.487-0.873,40.932,2.57c15.269,3.91,27.007,12.581,32.205,23.788      c0.27,0.582,0.191,1.267-0.207,1.771C410.124,405.896,409.627,406.132,409.11,406.132z M342.179,396.41      c21.96,0,43.394,1.889,63.727,5.665c-5.38-8.698-15.688-15.621-28.3-18.851c-12.973-3.322-26.7-2.885-39.978-2.465      c-11.355,0.361-23.097,0.734-34.013,4.089c-10.53,3.236-18.902,9.139-23.497,16.456      C300.939,398.041,321.786,396.41,342.179,396.41z" />
                                 </g>
                              </g>


                              <g>
                                 <g>
                                    <path style={{ 'fill': '#422020' }} d="M406.145,420.849c-10.087,0-19.814-3.8-29.251-7.486c-7.904-3.088-16.078-6.281-24.273-7.129      c-3.208-0.333-6.631-0.329-10.462,0.012c-0.1,0.008-0.201,0.008-0.301,0c-3.834-0.341-7.257-0.344-10.461-0.012      c-8.195,0.848-16.369,4.041-24.273,7.129c-10.438,4.077-21.232,8.289-32.475,7.353c-22.487-1.881-41.685-26.605-41.921-53.988      c-0.228-26.497,17.651-52.086,39.855-57.043c16.902-3.773,33.644-2.835,49.834-1.925c6.58,0.369,13.383,0.75,20.08,0.806      c6.707-0.056,13.45-0.44,19.973-0.813c15.781-0.901,32.103-1.831,48.966,1.932c22.204,4.957,40.083,30.545,39.855,57.043      c-0.236,27.383-19.434,52.107-41.921,53.988C408.29,420.806,407.216,420.849,406.145,420.849z M347.686,402.578      c1.831,0,3.585,0.088,5.287,0.264c8.655,0.895,17.047,4.174,25.163,7.344c10.539,4.116,20.494,8.003,30.949,7.13      c20.45-1.711,38.578-25.364,38.795-50.619c0.215-24.976-16.467-49.058-37.187-53.683c-16.402-3.661-31.765-2.786-48.03-1.856      c-6.562,0.375-13.349,0.762-20.167,0.819c-6.806-0.057-13.652-0.441-20.271-0.812c-15.961-0.895-32.462-1.821-48.901,1.85      c-20.72,4.625-37.402,28.708-37.187,53.683c0.217,25.255,18.345,48.908,38.795,50.619c10.447,0.876,20.409-3.014,30.948-7.13      c8.116-3.17,16.508-6.449,25.163-7.344c3.384-0.35,6.973-0.351,10.964-0.007C343.992,402.664,345.877,402.578,347.686,402.578z" />
                                 </g>
                              </g>

                           </g>
                        </g></g>
                     <g id="upper gums">
                        <radialGradient id="XMLID_4_" cx="336.3303" cy="635.7402" r="170.3486" gradientTransform="matrix(1 0 0 1.012 -97.2002 -576.3146)" gradientUnits="userSpaceOnUse">
                           <stop offset="0.0056" style={{ 'stopColor': '#E39892' }} />
                           <stop offset="1" style={{ 'stopColor': '#DD9AA4' }} />
                        </radialGradient>
                        <path fill="url(#XMLID_4_)" stroke="#000000" strokeWidth="2" d="M11.986,58.669c2.935-6.397,42.845-25.551,93.648-40.514   C150.715,4.876,213.462,2.868,236.875,2.091c25.295-0.841,94.248-0.303,144.04,13.598c48.54,13.551,81.174,31.952,85.713,38.479   c7.397,10.63,4.824,38.615,0,48.069c-17.32,33.955-434.313,42.66-453.875,7.566C4.726,95.404,5.695,72.383,11.986,58.669z" />
                     </g>
                     <g id="lower gums n teeth">
                        <g id="lower gums">
                           <radialGradient id="XMLID_3_" cx="342.178" cy="796.165" r="156.4507" gradientTransform="matrix(1 0 0 1.012 -97.2002 -576.3146)" gradientUnits="userSpaceOnUse">
                              <stop offset="0.0056" style={{ 'stopColor': '#E39892' }} />
                              <stop offset="1" style={{ 'stopColor': '#DD9AA4' }} />
                           </radialGradient>
                           <path fill="url(#XMLID_3_)" stroke="#000000" strokeWidth="2" d="M453.434,211.747c-10.113-10.236-191.535-22.527-212.647-22.089   c-19.853,0.409-184.351,11.104-201.518,24.1c-11.318,8.565-16.921,36.032-6.581,37.778c5.572,0.942,102.75,18.063,205.683,17.627   c102.934-0.436,211.622-18.431,219.022-20.475C467.068,246.018,462.231,220.647,453.434,211.747z" />

                        </g>

                        <g id="lower teeth">
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M32.363,203.449c2.026-11.151,8.983-17.293,14.082-13.959   c15.221,9.947,4.868,40.599-5.154,40.418C31.757,229.738,27.526,230.071,32.363,203.449z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M452.516,201.103c-1.307-11.26-7.603-17.827-12.908-14.827   c-15.826,8.95-7.711,40.194,2.301,40.657C451.434,227.374,455.632,227.978,452.516,201.103z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M49.062,206.271c1.848-20.644,18.096-40.035,25.85-28.833   c7.758,11.202,16.372,40.465,5.603,49.081C69.741,235.138,46.475,235.138,49.062,206.271z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M435.61,208.424c-1.847-20.641-18.096-40.033-25.85-28.831   c-7.757,11.201-16.372,40.463-5.603,49.082C414.929,237.293,438.198,237.293,435.61,208.424z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M134.368,210.147c-1.898,18.063-20.25,28.007-25.418,28.436   c-5.168,0.43-16.804,0.861-23.264-14.649c-6.462-15.51-8.619-38.311-2.586-50.374c6.032-12.063,18.957-22.835,31.882-13.788   C127.906,168.822,138.677,169.218,134.368,210.147z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M348.335,213.163c1.901,18.064,20.249,28.008,25.42,28.437   c5.169,0.43,16.805,0.861,23.265-14.65c6.463-15.509,8.619-38.31,2.587-50.373c-6.031-12.063-18.959-22.835-31.884-13.788   C354.799,171.837,344.027,172.234,348.335,213.163z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M164.959,234.821c-12.317,0.361-27.144-20.216-30.159-38.31   c-3.017-18.096-6.895-30.159,5.17-36.621c12.063-6.462,39.635-8.186,45.667,2.154c6.033,10.338,8.001,20.604,3.447,37.448   C184.777,215.435,179.607,234.392,164.959,234.821z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M318.036,240.423c12.316,0.362,27.143-24.127,30.158-42.223   c3.017-18.094,6.895-26.247-5.171-32.708c-12.063-6.462-39.634-8.186-45.666,2.154c-6.033,10.34-8,20.604-3.446,37.448   C298.217,221.036,303.385,239.991,318.036,240.423z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M203.501,236.232c13.336,4.928,18.096,1.29,27.144-22.836   c9.048-24.127,10.338-34.003,6.893-49.082c-2.611-11.427-41.362-14.217-46.532,0.863S183.681,228.905,203.501,236.232z" />
                           <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M274.503,237.504c-13.337,4.929-18.096,1.293-27.145-22.835   c-9.047-24.127-10.34-34.001-6.892-49.08c2.611-11.427,41.36-14.219,46.527,0.861C292.167,181.531,294.323,230.182,274.503,237.504   z" />

                        </g>
                        <animateTransform
                           attributeName="transform"
                           begin="0s"
                           dur="1.5s"
                           type="translate"
                           from="0 900"
                           to="0 000"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="1.5s"
                           dur=".2s"
                           type="translate"
                           from="0 0"
                           to="-15 20"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="1.7s"
                           dur=".2s"
                           type="translate"
                           from="-15 20"
                           to="5 40"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="1.9s"
                           dur=".2s"
                           type="translate"
                           from="5 40"
                           to="-5 0"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="2.1s"
                           dur=".2s"
                           type="translate"
                           from="-5 0"
                           to="-15 20"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="2.3s"
                           dur=".2s"
                           type="translate"
                           from="-15 20"
                           to="5 40"
                        />
                        <animateTransform
                           attributeName="transform"
                           begin="2.5s"
                           dur=".2s"
                           type="translate"
                           from="5 40"
                           to="-5 0"
                        />
                     </g>
                     <g id="upper teeth">
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M455.779,99.496c-3.812,2.2-15.101,77.112-13.37,79.157   c5.746,6.786,16.008-4.244,19.087-41.04C463.086,118.6,461.083,96.436,455.779,99.496z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M19.484,99.183c10.594-0.878,25.334,89.222,14.17,86.179   c-6.362-1.733-13.355-22.403-15.51-41.36S13.381,99.689,19.484,99.183z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M28.804,94.478c2.562-5.823,3.408-0.037,7.322,6.032   c6.974,10.808,18.614,80.402,15.169,85.143c-3.447,4.738-6.362,11.566-18.508-18.221C21.174,138.952,24.063,105.249,28.804,94.478z   " />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M448.543,89.186c-2.56-5.823-6.056-3.874-8.21,3.019   c-2.155,6.893-18.525,83.154-15.08,87.892c3.444,4.737,13.356,9.477,19.388-20.682C450.674,129.257,453.283,99.957,448.543,89.186z   " />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M431.634,72.079c-8.559-3.208-33.317,13.683-38.057,22.299   c-4.741,8.618-16.804,46.964-4.308,65.919c12.491,18.958,23.695,27.573,28.437,17.234c4.739-10.34,12.229-24.002,14.81-48.425   C435.131,104.326,435.082,73.372,431.634,72.079z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M382.186,67.777c-19.79-1.759-38.801,20.922-43.54,32.986   c-4.741,12.064-7.816,54.519,5.537,62.271c13.355,7.757,23.999,11.463,32.744,5.171c16.107-11.589,20.646-21.287,20.944-43.253   C398.167,103.402,389.531,68.43,382.186,67.777z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M302.557,45.882c-19.564-3.417-37.051,6.031-41.36,15.079   c-4.306,9.048-22.138,46.707-21.706,67.387c0,29.729,4.041,43.34,44.141,43.34c29.298,0,51.593-2.118,51.593-31.704   S329.699,50.62,302.557,45.882z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M42.284,79.883c8.558-3.209,30.588,14.217,35.327,22.834   c4.741,8.617,16.805,46.962,4.309,65.919c-12.492,18.957-23.694,27.574-28.434,17.234c-4.739-10.341-12.926-22.836-12.926-47.392   C40.56,113.919,38.839,81.175,42.284,79.883z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M96.148,74.677c9.027-1.061,36.191,17.665,40.932,29.729   c4.74,12.063,9.048,50.409-4.308,58.162c-13.356,7.756-24.127,11.634-32.744,5.171c-8.617-6.462-19.015-14.308-18.362-39.899   C82.224,105.878,88.825,75.538,96.148,74.677z" />
                        <path fill="#FFFFFF" stroke="#000000" strokeWidth="2" d="M176.539,46.569c19.565-3.416,37.053,6.032,41.361,15.08   c4.309,9.046,21.903,46.896,21.476,67.576c0,29.831-2.201,42.79-33.499,42.79c-44.183,0-65.041-2.445-65.041-32.521   C140.836,109.661,149.396,51.308,176.539,46.569z" />
                     </g >
                     {/* <g id="upper lips">
                        <path fill="#a33633" stroke="#000000" strokeWidth="2" d="M10,232 C10,310 483,300 483,232 C483,200 380,280 30,227 C20,225 12,225 10,232" transform="translate(490,300) rotate(180) scale(1.01,1.05)" />
                     </g> */}
                  </svg>

               </animated.div>
            </div>}

      </>)

};



