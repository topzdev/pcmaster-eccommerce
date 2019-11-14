import React from "react";

const ProductDescription = () => {
  return (
    <div className="details__tab--description">
      <div className="container">
        <div className="row">
          <h2>Description</h2>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4">
            <h3>CPU</h3>
          </div>
          <div className="col-12 col-lg-8">
            <p>
              AMD AM4 Socket 2nd and 1st Gen AMD Ryzen™ with Radeon™ Vega
              Graphics/AMD Ryzen™ 2nd Generation/3rd Gen AMD Ryzen™ Processors
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4">
            <h3>Chipset</h3>
          </div>
          <div className="col-12 col-lg-8">
            <p>AMD X570</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4">
            <h3>Memory</h3>
          </div>
          <div className="col-12 col-lg-8">
            <p>
              <b>3rd Gen AMD Ryzen™ Processors</b> <br /> 4 x DIMM, Max. 128GB,
              DDR4
              4400(O.C)/3466(O.C.)/3400(O.C.)/3200(O.C.)/3000(O.C.)/2933(O.C.)/2800(O.C.)/2666/2400/2133
              MHz Un-buffered Memory
              <br />
              <b>2nd Gen AMD Ryzen™ Processors</b>
              <br /> 4 x DIMM, Max. 128GB, DDR4
              3600(O.C.)/3466(O.C.)/3400(O.C.)/3200(O.C.)/3000(O.C.)/2933(O.C.)/2800(O.C.)/2666/2400/2133
              MHz Un-buffered Memory 2nd and 1st Gen AMD Ryzen™ with Radeon™
              Vega Graphics Processors 4 x DIMM, Max. 128GB, DDR4
              3200(O.C.)/3000(O.C.)/2933(O.C.)/2800(O.C.)/2666/2400/2133 MHz
              Un-buffered Memory Dual Channel Memory Architecture ECC Memory
              (ECC mode) support varies by CPU. * Refer to www.asus.com for the
              Memory QVL (Qualified Vendors Lists).
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 col-lg-4">
            <h3>Graphic</h3>
          </div>
          <div className="col-12 col-lg-8">
            <p>
              Integrated Graphics in the 2nd and 1st Gen AMD Ryzen™ with Radeon™
              Vega Graphics Processors Multi-VGA output support :
              HDMI/DisplayPort ports – Supports HDMI 1.4b with max. resolution
              4096 x 2160 @ 24 Hz – Supports DisplayPort with max. resolution
              4096 x 2160 @ 60 HzMulti-GPU Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
