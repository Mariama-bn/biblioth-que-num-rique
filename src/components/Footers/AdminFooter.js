import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

const AdminFooter = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          {/* Colonne 1 - Description */}
          <Col md="4" className="mb-4">
            <h5 className="text-white">Bibliothèque UIDT</h5>
            <p className="text-muted">
              Plateforme numérique pour la gestion et l'accès aux ressources documentaires de l’Université Iba Der Thiam de Thiès.
            </p>
          </Col>

          {/* Colonne 2 - Liens rapides */}
          <Col md="3" className="mb-4">
            <h6 className="text-light mb-3">Liens rapides</h6>
            <Nav vertical>
              <NavItem>
                <NavLink href="/admin/index" className="text-muted">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/documents" className="text-muted">Documents</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/contact" className="text-muted">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin/about" className="text-muted">À propos</NavLink>
              </NavItem>
            </Nav>
          </Col>

          {/* Colonne 3 - Contact */}
          <Col md="3" className="mb-4">
            <h6 className="text-light mb-3">Contact</h6>
            <p className="text-muted mb-1">Université Iba Der Thiam de Thiès</p>
            <p className="text-muted mb-1">Email : uidt@univ-thies.sn</p>
            <p className="text-muted mb-1">Téléphone : +221 33 000 00 00</p>
          </Col>

          {/* Colonne 4 - Réseaux sociaux */}
          <Col md="2" className="mb-4">
            <h6 className="text-light mb-3">Suivez-nous</h6>
            <Nav className="d-flex">
              <NavItem>
                <NavLink
                  href="https://facebook.com"
                  target="_blank"
                  className="text-white pr-2"
                >
                  <i className="fab fa-facebook-f" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://youtube.com"
                  target="_blank"
                  className="text-white pr-2"
                >
                  <i className="fab fa-youtube" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-white pr-2"
                >
                  <i className="fab fa-linkedin-in" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>

        {/* Ligne du bas */}
        <Row className="mt-4">
          <Col md="12" className="text-center text-muted">
            <hr className="bg-secondary" />
            <p className="mb-0 text-light">
              © {new Date().getFullYear()} Université Iba Der Thiam – Tous droits réservés.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AdminFooter;
