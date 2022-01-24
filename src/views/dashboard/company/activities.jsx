import { Card } from "react-bootstrap";
import "./company.css";

const Activities = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <b>Aktivitas</b>
          </Card.Title>
          <Card.Subtitle className="mt-5 text-muted">{""}</Card.Subtitle>
          <h6>
            Yusron baru saja menambahkan lokasi baru Kantor Cabang Jagakarsa
          </h6>
          <h8>Hari ini, 06:00</h8>
          <h6 className="mt-4">
            Bintang baru saja menghapus sublokasi KCP Tebet 4 dari Induk Kantor
            Cabang Tebet
          </h6>
          <h8>Kemarin, 17:32</h8>
          <h6 className="mt-4">
            Yusron melakukan perubahan profilepada induk Kantor Cabang Bekasi
          </h6>
          <h8>Kemarin, 17:32</h8>
        </Card.Body>
      </Card>
    </>
  );
};

export default Activities;
