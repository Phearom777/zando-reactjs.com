import React from 'react';
import '../style/Carousel.css';
function Carousel(props) {
    return (
        <div
          id="carouselExampleControls"
          className="carousel slide container-fluid mt-1"
          data-bs-ride="carousel"
        >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/465568052_1002891475212212_4446726890531430262_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeGGZCxgQppVDv1kIAuDpmBsn43wfZMhtKqfjfB9kyG0qiB2vicBasHp1-LCgYlwDoxa1niJxQuYaJSPiEFen7JB&_nc_ohc=neTumF_n6PcQ7kNvgFA7805&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=AiWZbbcpTDoZuzKy_33zqcy&oh=00_AYAOg0x9aXfcfD5bl7-_zp9qsS3utpMlO78kB8QI828t9g&oe=6732492E"
        className="d-block w-100 "
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/465060743_868498728786763_5468638455775575393_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFvB0up55jGXM_X1ctSaQ5iBaiOF7vTKLMFqI4Xu9Mos0t3jOX1yKBotukUw2HN2wyk9cCxahf4Ur7AYOOPg5BR&_nc_ohc=Smb3jB6OaCEQ7kNvgGdB9k_&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AKErw9Hwgtd1_WxSm9BDrPg&oh=00_AYDwYTiN-pA7d4xsLbM3AsX4e64hdD-UTsdErBOPkEly4w&oe=6732472B"
        className="d-block w-100 "
        alt="..."
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/462959926_984227327078627_4862995785088657064_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGdzZRFxgWlugspOCLmXZfIv1DvO8oTcEC_UO87yhNwQCg4ZESYtdu7hFIejMdEx0U97a_a2D8gEEY0FKr_LIxW&_nc_ohc=AiCVIirfmLEQ7kNvgFDS2nM&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=AZ5Ktlw7-uGjY1zNohOZOUx&oh=00_AYC4joWfOFeiI_FQrJRzFSNKZ0oUbhNnjhit3Ti9GraNLw&oe=673244D0"
        className="d-block w-100 "
        alt="..."
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    );
}

export default Carousel;