import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  const handleEditClick = (e) => {
    e.preventDefault();
    const event = new Event("start-edit-profile");
    window.dispatchEvent(event); // détection dans Profile.js
  };

  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <span className="mask bg-gradient-default opacity-8" />
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Bonjour Fatou</h1>
              <p className="text-white mt-0 mb-5">
                Tu es sur ta page personnelle. Ici, tu peux modifier tes
                informations et suivre ton activité dans la bibliothèque.
              </p>
              <Button color="info" onClick={handleEditClick}>
                Modifier profil
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
