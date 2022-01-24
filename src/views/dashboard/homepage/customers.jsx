import { Table, OverlayTrigger, Tooltip, Row, Col } from "react-bootstrap";
import axios from "axios";
import swal from "sweetalert";
import allStore from "../../../store/actions/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Customers = () => {
  const dispatch = useDispatch();

  /* --------------------------- GET CUSTOMERS WITH REDUX -------------------------- */
  const Customers = useSelector(({ dataCustomers }) => dataCustomers);
  useEffect(() => {
    dispatch(allStore.fetchCustomers());
    // console.log(Customers);
  }, [dispatch, Customers]);

  /* --------------------------- DELETE CUSTOMERS -------------------------- */
  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const config = {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        };
        console.log(id);
        const body = {
          id: id,
        };
        // return;
        axios
          .delete(`https://mitramas-test.herokuapp.com/customers`, body, config)
          .then((data) => {
            console.log(data);
            // swal(data.data.message);
            // swal("Your data has been deleted!", {
            //   icon: "success",
            // });
          })
          .catch((err) => {
            const online = window.navigator.onLine;
            console.log(err);
            if (online) {
              console.log("Back Online");
              swal(err);
            } else if (!online) {
              swal(err);
            }
          });
        swal("Your data has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
  };

  return (
    <>
      <Table responsive className="mt-5">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Country</th>
            <th>Phone Number</th>
            <th>Job Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Customers.map((el, idx) => (
            <tr>
              <td>{idx + 1}</td>
              <td>{el.name}</td>
              <td>{el.address}</td>
              <td>{el.country}</td>
              <td>{el.phone_number}</td>
              <td>{el.job_title}</td>
              <td>{el.status ? "active" : "inactive"}</td>
              <td>
                <Row>
                  <Col md={6}>
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={<Tooltip id="tooltip-bottom">edit</Tooltip>}
                    >
                      <i
                        class="bi bi-pencil m-3 cursor"
                        // onClick={() => handleEdit(el.ID)}
                      ></i>
                    </OverlayTrigger>
                  </Col>
                  <Col md={6}>
                    <OverlayTrigger
                      key="bottom"
                      placement="bottom"
                      overlay={<Tooltip id="tooltip-bottom">delete</Tooltip>}
                    >
                      <i
                        class="bi bi-trash m-3 cursor"
                        onClick={() => {
                          handleDelete(el.id);
                        }}
                      ></i>
                    </OverlayTrigger>
                  </Col>
                </Row>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Customers;
