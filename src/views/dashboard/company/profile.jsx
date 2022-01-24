import { Card, Image } from "react-bootstrap";
import header from "../../../assets/header-company.jpg";
import logo from "../../../assets/logo-company.png";
import "./company.css";

const Profile = () => {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={header} className="img-header" />
        <Image
          src={logo}
          className="rounded-circle mx-auto d-block img-logo border"
        ></Image>
        <Card.Body>
          <Card.Title>
            <center>Mitramas Infosys Global</center>
          </Card.Title>
          <Card.Text>
            <center>Layanan IT</center>
          </Card.Text>
          <center>
            <a href="/">
              <i class="bi bi-pencil"></i> Sunting profil
            </a>
          </center>

          <div className="mt-4">
            <h7>Status Perusahaan</h7>
            <h6>Aktif</h6>
            <h7>Singkatan</h7>
            <h6>MIG</h6>
            <h7>Alamat Perusahaan</h7>
            <h6>Jl. Tebet Raya No.42, Jakarta Selatan</h6>
            <h7>Penanggung Jawab (PIC)</h7>
            <h6>John Doe</h6>
            <h7>Tanggal PKP</h7>
            <h6>02 Maret 2021</h6>
            <h7>E-mail</h7>
            <h6>
              {" "}
              <a href="/company">
                <i class="bi bi-envelope"></i> mig@mitasolusi.group
              </a>
            </h6>
            <h7>No. Telp</h7>
            <h6>
              {" "}
              <a href="/company">
                <i class="bi bi-telephone"></i> 021-5678-1234
              </a>
            </h6>
            <h7>Situs Web</h7>
            <h6>
              <a href="/company">
                <i class="bi bi-globe"></i> mitramas.com
              </a>
            </h6>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Profile;
