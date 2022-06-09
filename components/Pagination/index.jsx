import React from "react";
import "./Pagination.css";

function Pagination(props) {
  const { className } = props;

  return (
    <div className={`pagination ${className || ""}`}>
      <div className="btn-prev border-1px-silver-sand">
        <div className="ic_chevron">
          <div className="vector-container-12">
            <img className="vector-60" src="/img/vector-115@1x.png" />
            <img className="vector-61" src="/img/vector-116@1x.png" />
          </div>
        </div>
      </div>
      <div className="number-12">
        <div className="overlap-group-71">
          <div className="background-11 border-1px-silver-sand"></div>
          <div className="selected-page"></div>
          <div className="number-13 poppins-bold-white-18px">1</div>
          <div className="number-14 poppins-medium-eerie-black-18px">2</div>
          <div className="number-15 poppins-medium-eerie-black-18px">3</div>
          <div className="number-16 poppins-medium-eerie-black-18px">4</div>
        </div>
      </div>
      <div className="btn-next border-1px-silver-sand">
        <div className="ic_chevron-1">
          <div className="vector-container-12">
            <img className="vector-62" src="/img/vector-117@1x.png" />
            <img className="vector-63" src="/img/vector-118@1x.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
