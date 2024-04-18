import { Box } from '@mui/material';
import React from 'react'

function CompanyCard(props) {
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
      
  return (
    <Box sx={{ width: "100%", boxShadow: "5px 10px #F0FFFF" }}>
    <div>
                    <div style={{ marginTop: "1.5rem", display: "flex" }}>
              <img
                src={props.img}
                alt=""
                style={{ height: "60px" }}
              />
              <div>
                <div>
                  <div
                    className="text-gray-900 font-bold text-xl"
                    style={{ marginLeft: "1rem", ...values }}
                  >
                    {props.title}
                  </div>
                  <p style={{ ...tagstyle, marginLeft: "1rem" }}>
                  {props.note}
                  </p>
                </div>
              </div>
            </div>
    </div>
    </Box>
  )
}

export default CompanyCard