// import { Box } from '@mui/material';
// import React, { useState } from 'react'

// function CompanyCard(props) {
//   const [selected,setSelected]=useState(false)
//     const tagstyle = {
//         fontFamily: "Poppins",
//         fontSize: "14px",
//         fontWeight: 400,
//         lineHeight: "15px",
//         textAlign: "left",
//         color: "rgba(183, 182, 189, 1)",
//       };
//       const values = {
//         fontFamily: "Poppins",
//         fontSize: "14px",
//         fontWeight: 500,
//         textAlign: "left",
//       };
//       const handleSelect=()=>{
//         setSelected(!selected)
//       }
//   return (
// <Box
//   sx={{
//     width: "100%",
//     boxShadow: "5px 10px #F0FFFF",
//     cursor:'pointer',
//     border: selected && 'solid 2px blue'
//   }}
//   onClick={handleSelect}
// >    <div>
//                     <div style={{ marginTop: "1.5rem", display: "flex" }}>
//               <img
//                 src={props.img}
//                 alt=""
//                 style={{ height: "60px" }}
//               />
//               <div>
//                 <div>
//                   <div
//                     className="text-gray-900 font-bold text-xl"
//                     style={{ marginLeft: "1rem", ...values }}
//                   >
//                     {props.title}
//                   </div>
//                   <p style={{ ...tagstyle, marginLeft: "1rem" }}>
//                   {props.note}
//                   </p>
//                 </div>
//               </div>
//             </div>
//     </div>
//     </Box>
//   )
// }

// export default CompanyCard

// CompanyCard.jsx
import { Box } from '@mui/material';
import React from 'react'

function CompanyCard(props) {
  const { title, note, img, onSelect, selected } = props;

  const tagstyle = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "15px",
    textAlign: "left",
    color: "rgba(183, 182, 189, 1)",
  };

  const values = {
    fontFamily: "Poppins",
    fontSize: "14px",
    fontWeight: 500,
    textAlign: "left",
  };

  const handleSelect = () => {
    onSelect(title);
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "5px 10px #F0FFFF",
        cursor: 'pointer',
        border: selected ? 'solid 2px rgba(0, 145, 255, 1)' : 'none'
      }}
      onClick={handleSelect}
    >
      <div>
        <div style={{ marginTop: "1.5rem", display: "flex" }}>
          <img
            src={img}
            alt=""
            style={{ height: "60px" }}
          />
          <div>
            <div>
              <div
                className="text-gray-900 font-bold text-xl"
                style={{ marginLeft: "1rem", ...values }}
              >
                {title}
              </div>
              <p style={{ ...tagstyle, marginLeft: "1rem" }}>
                {note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default CompanyCard;
