import React, { useState, useEffect } from "react";
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
} from "reactstrap";

const documentsParDomaine = {
  "Sciences Économiques et Sociales": [
    {
      titre: "Management informatisé des organisations",
      description: "Une exploration des outils informatiques pour une gestion efficace des organisations.",
      image: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Sciences Économiques et gestion",
      description: "Principes fondamentaux de l'économie appliqués à la gestion moderne.",
      image: "https://cdn.pixabay.com/photo/2016/11/29/05/08/analysis-1868728_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Banque finance et assurance",
      description: "Comprendre les mécanismes bancaires, les systèmes financiers et la gestion des risques.",
      image: "https://cdn.pixabay.com/photo/2018/01/18/07/03/money-3085074_960_720.jpg",
      lien: "#",
    },
  ],
  "Sciences et Technologies": [
    {
      titre: "Mathématiques et Applications",
      description: "Les outils mathématiques au service des sciences appliquées et de l'ingénierie.",
      image: "https://cdn.pixabay.com/photo/2016/03/27/20/58/mathematics-1285019_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Réseaux et Télécommunication",
      description: "Bases des réseaux informatiques et infrastructures de communication.",
      image: "https://cdn.pixabay.com/photo/2017/03/02/09/04/technology-2116013_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Génie logiciel",
      description: "Méthodes et pratiques de conception de logiciels robustes et maintenables.",
      image: "https://cdn.pixabay.com/photo/2015/05/31/10/55/code-791175_960_720.jpg",
      lien: "#",
    },
  ],
  "Sciences de la Santé": [
    {
      titre: "Médecine",
      description: "Les fondements de la médecine moderne et les parcours de soin.",
      image: "https://cdn.pixabay.com/photo/2016/11/18/17/20/doctor-1836466_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Pharmacie",
      description: "Science du médicament et rôle du pharmacien dans la chaîne de soin.",
      image: "https://cdn.pixabay.com/photo/2020/06/28/18/31/pills-5342638_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Odontologie",
      description: "Étude de la dentition humaine et soins dentaires.",
      image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/dentist-593984_960_720.jpg",
      lien: "#",
    },
  ],
  "Sciences de l’Ingénierie": [
    {
      titre: "Ingénieur de conception en géotechnique",
      description: "Étude des sols et fondations pour des ouvrages stables et durables.",
      image: "https://cdn.pixabay.com/photo/2018/02/01/08/53/engineering-3128497_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Ingénieur de conception en génie civil",
      description: "Conception et gestion de projets d’infrastructure et de bâtiment.",
      image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/architecture-820272_960_720.jpg",
      lien: "#",
    },
    {
      titre: "Ingénieur de conception en hydrogéologie",
      description: "Gestion et exploitation des ressources en eau souterraine.",
      image: "https://cdn.pixabay.com/photo/2017/04/25/08/40/water-2267083_960_720.jpg",
      lien: "#",
    },
  ],
};

const CounterCard = ({ color, label, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <Col md="4">
      <Card className={`border-${color} text-center mb-4`}>
        <CardBody>
          <h2 className={`text-${color}`}>{count.toLocaleString()}</h2>
          <p>{label}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

const Documents = () => {
  const [search, setSearch] = useState("");

  const statistiques = [
    { label: "Revues numériques", color: "primary", target: 18000 },
    { label: "Ebooks", color: "success", target: 170000 },
    { label: "Bases & plateformes", color: "info", target: 138 },
  ];

  return (
    <div className="content">
      <Container fluid>
        <div
          className="py-5 text-white text-center mb-4"
          style={{ background: "#2dce89", borderRadius: "10px" }}
        >
          <h1>Bienvenue à la bibliothèque numérique de l'UIDT</h1>
          <p>Explorez les ouvrages classés par UFR, accessibles partout</p>
        </div>

        <Row className="mb-5">
          {statistiques.map((stat, index) => (
            <CounterCard
              key={index}
              label={stat.label}
              color={stat.color}
              target={stat.target}
            />
          ))}
        </Row>

        <Row className="mb-5">
          <Col md="10">
            <Input
              placeholder="Rechercher un titre, un auteur ou un domaine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
          <Col md="2">
            <Button color="primary" className="w-100">
              Rechercher
            </Button>
          </Col>
        </Row>

        {Object.entries(documentsParDomaine).map(([domaine, livres], index) => {
          const livresFiltres = livres.filter(
            (livre) =>
              livre.titre.toLowerCase().includes(search.toLowerCase()) ||
              livre.description.toLowerCase().includes(search.toLowerCase()) ||
              domaine.toLowerCase().includes(search.toLowerCase())
          );

          if (livresFiltres.length === 0) return null;

          return (
            <div key={index} className="mb-5">
              <div
                className="d-flex justify-content-between align-items-center px-3 py-2 mb-3"
                style={{ backgroundColor: "#5e72e4", borderRadius: "6px" }}
              >
                <h4 className="text-white mb-0">{domaine}</h4>
                <Button
                  color="light"
                  size="sm"
                  onClick={() => alert(`Voir tous les documents de ${domaine}`)}
                >
                  Voir plus
                </Button>
              </div>

              <Row>
                {livresFiltres.map((livre, i) => (
                  <Col md="4" key={i} className="mb-4">
                    <Card className="shadow-sm">
                      <img
                        alt={livre.titre}
                        src={livre.image}
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <CardBody>
                        <CardTitle tag="h5">{livre.titre}</CardTitle>
                        <CardText className="text-muted">{livre.description}</CardText>
                        <Button color="info" size="sm" href={livre.lien}>
                          Consulter
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Documents;
