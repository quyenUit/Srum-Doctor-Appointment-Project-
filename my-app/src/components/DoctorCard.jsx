// import React from 'react'
// import { doctors } from '../constants';
// const DoctorCard = (id) => {
//   // {imgURL, name, faculty, info, hospital }
//   return (
//     <div class="max-w-sm rounded overflow-hidden shadow-lg">
//       <img src={doctors[id].imgURL} alt="Doc1" className="w-full" />
//       <div class="px-6 py-4">
//         <div class="font-bold text-xl mb-2">{doctors[id].name}</div>
//         <p class="text-gray-700 text-base">
//         {doctors[id].info}
//         </p>
//       </div>
//       <div class="px-6 pt-4 pb-2">
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//         {doctors[id].hospital}
//         </span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//         {doctors[id].faculty}
//         </span>

//       </div>
//     </div>
//   );
// }

// export default DoctorCard

import React from "react";
const DoctorCard = ({ imgURL, name, faculty, info, hospital }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={imgURL} alt="Doc1" className="w-full" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{name}</div>
        <p class="text-gray-700 text-base">{info}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {hospital}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {faculty}
        </span>
      </div>
    </div>
  );
};

export default DoctorCard;
