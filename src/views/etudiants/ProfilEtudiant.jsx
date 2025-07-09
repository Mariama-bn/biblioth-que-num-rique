import { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Badge,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nom: "Gueye",
    prenom: "Fatou",
    email: "fatou.gueye@uadb.edu.sn",
    role: "Étudiant",
    adresse: "Université Iba Der Thiam, Thiés",
    matricule: "STD2023-456",
    faculte: "Faculté des Sciences",
    dateInscription: "15/01/2023"
  });

  const [stats] = useState([
    { title: "Livres Empruntés", value: 27 },
    { title: "Lectures en cours", value: 3 },
    { title: "Retards enregistrés", value: 1, danger: true },
    { title: "Livres réservés", value: 2 }
  ]);

  const [currentLoans, setCurrentLoans] = useState([
    {
      id: 1,
      title: "L'Alchimiste",
      author: "Paulo Coelho",
      dueDate: "15/11/2023",
      status: "À rendre dans 3 jours"
    },
    {
      id: 2,
      title: "Une si longue lettre",
      author: "Mariama Bâ",
      dueDate: "10/11/2023",
      status: "En retard",
      late: true
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [newDueDate, setNewDueDate] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    const handleStartEdit = () => setIsEditing(true);
    window.addEventListener("start-edit-profile", handleStartEdit);
    return () => {
      window.removeEventListener("start-edit-profile", handleStartEdit);
    };
  }, []);

  const getRoleColor = () => {
    switch (formData.role) {
      case "Admin":
        return "danger";
      case "Enseignant":
        return "warning";
      default:
        return "primary";
    }
  };

  const openProlongModal = (loan) => {
    setSelectedLoan(loan);
    setNewDueDate(loan.dueDate);
    setModalOpen(true);
  };

  const handleProlong = () => {
    if (selectedLoan && newDueDate) {
      const updatedLoans = currentLoans.map((loan) =>
        loan.id === selectedLoan.id
          ? { ...loan, dueDate: newDueDate, status: `Prolongé jusqu'au ${newDueDate}` }
          : loan
      );
      setCurrentLoans(updatedLoans);
      setModalOpen(false);

      // Simulation notification admin
      console.log(`Notification admin : ${formData.nom} a prolongé l'emprunt du livre "${selectedLoan.title}" jusqu'au ${newDueDate}`);
    }
  };

  return (
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="Photo de profil"
                      className="rounded-circle"
                      src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pb-0">
                <h3 className="mb-0">Profil Utilisateur</h3>
              </CardHeader>
              <CardBody className="pt-0">
                <div className="text-center mt-2">
                  <h4 className="mb-1">{formData.prenom} {formData.nom}</h4>
                  <Badge color={getRoleColor()} className="mt-2 mb-3">
                    {formData.role}
                  </Badge>
                  <div className="mt-2">
                    <i className="ni ni-badge mr-2" />
                    {formData.matricule}
                  </div>
                  <div className="mt-2">
                    <i className="ni ni-email-83 mr-2" />
                    {formData.email}
                  </div>
                  <div className="mt-2">
                    <i className="ni ni-hat-3 mr-2" />
                    {formData.faculte}
                  </div>
                  <div className="mt-2">
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Membre depuis: {formData.dateInscription}
                  </div>
                </div>
              </CardBody>
            </Card>
            <Row className="mt-4">
              {stats.map((stat, index) => (
                <Col key={index} md="6" className="mb-3">
                  <Card className="shadow border-0">
                    <CardBody className="py-3 text-center">
                      <h6 className="text-uppercase text-muted mb-1">{stat.title}</h6>
                      <h2 className={stat.danger ? "text-danger mb-0" : "mb-0"}>{stat.value}</h2>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Mon compte</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button color="primary" size="sm" onClick={toggleEdit}>
                      {isEditing ? "Sauvegarder" : "Modifier"}
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">Informations personnelles</h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="nom">Nom</label>
                          <Input id="nom" value={formData.nom} type="text" onChange={handleChange} disabled={!isEditing} />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="prenom">Prénom</label>
                          <Input id="prenom" value={formData.prenom} type="text" onChange={handleChange} disabled={!isEditing} />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="email">Email</label>
                          <Input id="email" value={formData.email} type="email" onChange={handleChange} disabled={!isEditing} />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="role">Rôle</label>
                          <Input id="role" value={formData.role} type="text" disabled />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="matricule">Matricule</label>
                          <Input id="matricule" value={formData.matricule} type="text" disabled />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label htmlFor="faculte">Faculté</label>
                          <Input id="faculte" value={formData.faculte} type="text" disabled />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>

                  <hr className="my-4" />

                  <h6 className="heading-small text-muted mb-4">Adresse de contact</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label htmlFor="adresse">Adresse</label>
                      <Input id="adresse" value={formData.adresse} type="text" onChange={handleChange} disabled={!isEditing} />
                    </FormGroup>
                  </div>
                </Form>

                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Emprunts en cours</h6>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Titre</th>
                      <th scope="col">Auteur</th>
                      <th scope="col">Date de retour</th>
                      <th scope="col">Statut</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentLoans.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.author}</td>
                        <td>{item.dueDate}</td>
                        <td>
                          <Badge color={item.late ? "danger" : "success"}>{item.status}</Badge>
                        </td>
                        <td>
                          <Button color="primary" size="sm" onClick={() => openProlongModal(item)} disabled={item.late}>Prolonger</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Modal de prolongation */}
      <Modal isOpen={modalOpen} toggle={() => setModalOpen(!modalOpen)}>
        <ModalHeader toggle={() => setModalOpen(!modalOpen)}>Prolonger l'emprunt</ModalHeader>
        <ModalBody>
          <FormGroup>
            <label>Nouvelle date de retour</label>
            <Input
              type="date"
              value={newDueDate}
              onChange={(e) => setNewDueDate(e.target.value)}
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleProlong}>Valider</Button>{" "}
          <Button color="secondary" onClick={() => setModalOpen(false)}>Annuler</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Profile;
