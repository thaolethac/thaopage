import React, { Fragment,useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


const Profile = () => {

    const [validated, setValidated] = useState(false);
    const [admin, setAdmin] = useState("");

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };

  useEffect(() => {
    const adminer = JSON.parse(localStorage.getItem("user"));
    if (adminer) {
      setAdmin(adminer);
    }
  },[admin])

  
  return (
    <Fragment>
        <h3>
            Thông tin của tôi
        </h3>
        <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue="Lê Thạc"
            />
            <Form.Control.Feedback>Ổn rồi đó!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Tên</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Thao"
            />
            <Form.Control.Feedback>Ổn rồi đó!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                value={`${admin}@gmail.com`}
                aria-describedby="inputGroupPrepend"
                required
                disabled
              />
              <Form.Control.Feedback type="invalid">
                Vui lòng nhập username
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Tỉnh/Thành Phố</Form.Label>
            <Form.Control type="text" placeholder="Nghệ An" required />
            <Form.Control.Feedback type="invalid">
              Vui lòng điền tỉnh vào!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Quốc tịch</Form.Label>
            <Form.Control type="text" placeholder="Việt Nam" required />
            <Form.Control.Feedback type="invalid">
                Vui lòng điền đầy đủ!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>File</Form.Label>
            <Form.Control type="text" placeholder="File" required />
            <Form.Control.Feedback type="invalid">
              Vui lòng tải file đúng.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Tôi đồng ý với tất cả các điều kiện."
            feedback="Phải đồng ý trước khi lưu lại."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Lưu lại</Button>
      </Form>
    
        </div>
    </Fragment>
  )
}

export default Profile;