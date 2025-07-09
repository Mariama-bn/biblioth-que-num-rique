import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import { FaFileUpload, FaImage, FaBook } from "react-icons/fa";

const domaines = [
  "Développement & Administration d'applications",
  "Ingénierie Juridique",
  "Santé Communautaire",
  "Développement Durable",
  "Systèmes Réseaux & Télécoms",
];

const GestionDocuments = () => {
  const [documents, setDocuments] = useState([
    {
      titre: "JavaScript : Les bases",
      domaine: "Développement & Administration d'applications",
      description: "Comprendre les fondamentaux de JavaScript pour concevoir des interfaces interactives.",
      lien: "#",
    },
    {
      titre: "Introduction aux bases de données",
      domaine: "Informatique",
      description: "Les concepts de base des bases de données relationnelles",
      lien: "#",
    },
    {
      titre: "Analyse Financière",
      domaine: "Économie",
      description: "Méthodes d'évaluation et ratios financiers",
      lien: "#",
    },
    {
      titre: "Méthodologie de recherche",
      domaine: "Sciences Sociales",
      description: "Les étapes d'un bon mémoire",
      lien: "#",
    },
    {
      titre: "Droit Constitutionnel",
      domaine: "Droit",
      description: "Les grands principes de la Constitution",
      lien: "#",
    },
  ]);

  const [modal, setModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    titre: "",
    domaine: "",
    description: "",
    lien: "",
  });

  const toggle = () => setModal(!modal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDocument = () => {
    if (editIndex !== null) {
      const updated = [...documents];
      updated[editIndex] = formData;
      setDocuments(updated);
    } else {
      setDocuments([...documents, formData]);
    }
    setFormData({
      titre: "",
      domaine: "",
      description: "",
      lien: "",
    });
    setEditIndex(null);
    toggle();
  };

  const handleDelete = (index) => {
    if (window.confirm("Supprimer ce document ?")) {
      const updated = [...documents];
      updated.splice(index, 1);
      setDocuments(updated);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(documents[index]);
    setModal(true);
  };

  const [search, setSearch] = useState("");
  const [selectedDomaine, setSelectedDomaine] = useState("");

  const filteredDocuments = documents.filter((doc) => {
    const matchSearch =
      doc.titre.toLowerCase().includes(search.toLowerCase()) ||
      doc.domaine.toLowerCase().includes(search.toLowerCase());
    const matchDomaine = selectedDomaine ? doc.domaine === selectedDomaine : true;
    return matchSearch && matchDomaine;
  });

  // Nouveau state pour formulaire moderne (image)
  const [formDataModern, setFormDataModern] = useState({
    titre: "",
    categorie: "",
    acces: "Public",
    auteur: "",
    isbn: "",
    description: "",
    motsCles: "",
    fichier: null,
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataModern({ ...formDataModern, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormDataModern({ ...formDataModern, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Document soumis : " + JSON.stringify(formDataModern, null, 2));
  };

  return (
    <div className="content">
      <Container fluid>
        <Row className="mb-4">
          <Col>
            <h2 className="text-primary display-6 fw-bold">Gestion des documents</h2>
            <p className="text-muted">Ajoutez, modifiez ou supprimez les documents de la bibliothèque.</p>
          </Col>
        </Row>

        {/* SECTION 1 : FORMULAIRE MODERNE COMPLET */}
        <h3 className="text-success mb-4">Ajouter une ressource</h3>
        <Form onSubmit={handleSubmit} className="mb-5">
          <Row>
            <Col md="6">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5" className="mb-4 text-success">
                    <FaBook className="me-2" /> Informations générales
                  </CardTitle>

                  <FormGroup>
                    <Label for="titre">Titre <span className="text-danger">*</span></Label>
                    <Input
                      id="titre"
                      name="titre"
                      placeholder="Titre de la ressource"
                      value={formDataModern.titre}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Catégorie</Label>
                        <Input
                          type="select"
                          name="categorie"
                          value={formDataModern.categorie}
                          onChange={handleInputChange}
                        >
                          <option value="">Sélectionner</option>
                          <option value="Informatique">Informatique</option>
                          <option value="Droit">Droit</option>
                          <option value="Santé">Santé</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>Accès</Label>
                        <Input
                          type="select"
                          name="acces"
                          value={formDataModern.acces}
                          onChange={handleInputChange}
                        >
                          <option value="Public">🌐 Public</option>
                          <option value="Privé">🔒 Privé</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="6">
                      <FormGroup>
                        <Label>Auteur</Label>
                        <Input
                          name="auteur"
                          placeholder="Nom de l'auteur"
                          value={formDataModern.auteur}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>ISBN</Label>
                        <Input
                          name="isbn"
                          placeholder="ISBN (optionnel)"
                          value={formDataModern.isbn}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label>Description <span className="text-danger">*</span></Label>
                    <Input
                      type="textarea"
                      name="description"
                      placeholder="Décrivez la ressource..."
                      value={formDataModern.description}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label>Mots-clés <span className="text-danger">*</span></Label>
                    <Input
                      name="motsCles"
                      placeholder="Mots-clés séparés par des virgules"
                      value={formDataModern.motsCles}
                      onChange={handleInputChange}
                      required
                    />
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>

            <Col md="6">
              <Card className="mb-4">
                <CardBody>
                  <CardTitle tag="h5" className="text-primary">
                    <FaFileUpload className="me-2" /> Fichier principal <span className="text-danger">*</span>
                  </CardTitle>
                  <div className="border border-dashed p-4 text-center rounded mb-4">
                    <p>Glissez votre fichier ici</p>
                    <input
                      type="file"
                      name="fichier"
                      accept=".pdf,.doc,.docx,.txt"
                      onChange={handleFileChange}
                      className="form-control"
                      required
                    />
                    <small className="text-muted">PDF, DOCX, DOC, TXT (max. 50MB)</small>
                  </div>

                  <CardTitle tag="h6" className="text-warning">
                    <FaImage className="me-2" /> Image (optionnel)
                  </CardTitle>
                  <div className="border border-dashed p-4 text-center rounded">
                    <p>Glissez votre image ici</p>
                    <input
                      type="file"
                      name="image"
                      accept=".jpg,.jpeg,.png,.webp"
                      onChange={handleFileChange}
                      className="form-control"
                    />
                    <small className="text-muted">JPEG, PNG, WebP (max. 10MB)</small>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2">
            <Button type="button" color="secondary">
              Annuler
            </Button>
            <Button type="submit" color="success">
              Enregistrer
            </Button>
          </div>

          <p className="text-muted mt-3">
            <span className="text-success">●</span> Sécurisé &nbsp;&nbsp;|&nbsp;&nbsp;
            <span className="text-warning">●</span> Champs obligatoires marqués par *
          </p>
        </Form>

        {/* SECTION 2 : TABLEAU DOCUMENTS */}

        {/* Section documents existants */}
        <Row className="mb-3">
          <Col md={8}>
            <Input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher un document par titre ou domaine..."
            />
          </Col>
          <Col md={4} className="text-end">
            <Button color="info" className="w-100" onClick={() => {}}>
              Rechercher
            </Button>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={4}>
            <Input
              type="select"
              value={selectedDomaine}
              onChange={(e) => setSelectedDomaine(e.target.value)}
            >
              <option value="">-- Filtrer par domaine --</option>
              {domaines.map((dom, i) => (
                <option key={i} value={dom}>
                  {dom}
                </option>
              ))}
            </Input>
          </Col>
          <Col className="text-end">
            <Button color="primary" onClick={() => { setEditIndex(null); toggle(); }}>
              + Ajouter un document
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table responsive bordered hover>
              <thead className="thead-light">
                <tr>
                  <th>Titre</th>
                  <th>Domaine</th>
                  <th style={{ maxWidth: "200px" }}>Description</th>
                  <th>Lien</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.titre}</td>
                    <td>{doc.domaine}</td>
                    <td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{doc.description}</td>
                    <td>
                      <a href={doc.lien} target="_blank" rel="noreferrer">
                        Voir
                      </a>
                    </td>
                    <td>
                      <Button color="warning" size="sm" onClick={() => handleEdit(index)}>
                        Modifier
                      </Button>{" "}
                      <Button
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(index)}
                      >
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Modal isOpen={modal} toggle={toggle} backdrop="static">
          <ModalHeader toggle={toggle}>
            {editIndex !== null ? "Modifier le document" : "Ajouter un document"}
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Titre</Label>
                <Input
                  name="titre"
                  value={formData.titre}
                  onChange={handleChange}
                  placeholder="Ex: Programmation Python"
                />
              </FormGroup>

              <FormGroup>
                <Label>Domaine</Label>
                <Input
                  type="select"
                  name="domaine"
                  value={formData.domaine}
                  onChange={handleChange}
                >
                  <option value="">-- Choisir un domaine --</option>
                  {domaines.map((dom, i) => (
                    <option key={i} value={dom}>
                      {dom}
                    </option>
                  ))}
                </Input>
              </FormGroup>

              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label>Lien du document</Label>
                <Input
                  name="lien"
                  value={formData.lien}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={handleAddDocument}>
              Enregistrer
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    </div>
  );
};

export default GestionDocuments;
