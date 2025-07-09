import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

const AdminNavbar = (props) => {
  return (
    <Navbar className="navbar-top navbar-dark bg-primary" expand="md" id="navbar-main">
      <Container fluid>
        {/* Nom de la page */}
        <Link className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" to="/">
          {props.brandText}
        </Link>

        {/* Barre de recherche stylée */}
        <form className="form-inline mx-auto w-50">
          <div className="input-group input-group-alternative w-100">
            <input
              className="form-control"
              placeholder="Rechercher un document, un auteur..."
              type="text"
            />
            <div className="input-group-append">
              <span className="input-group-text bg-white">
                <i className="fas fa-search text-primary" />
              </span>
            </div>
          </div>
        </form>

        {/* Profil utilisateur */}
        <Nav className="align-items-center" navbar>
          <UncontrolledDropdown nav>
            <DropdownToggle className="pr-0 d-flex align-items-center" nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={require("../../assets/img/theme/team-4-800x800.jpg")}
                  />
                </span>
                <Media className="ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm font-weight-bold text-white">
                    Fatou Gueye <i className="fas fa-chevron-down ml-1" />
                  </span>
                </Media>
              </Media>
            </DropdownToggle>

            {/* Sous-menu déroulant */}
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>Mon profil</span>
              </DropdownItem>
              <DropdownItem to="/admin/consultations" tag={Link}>
                <i className="ni ni-books" />
                <span>Mes consultations</span>
              </DropdownItem>
              <DropdownItem to="/admin/emprunts" tag={Link}>
                <i className="ni ni-archive-2" />
                <span>Mes emprunts</span>
              </DropdownItem>
              <DropdownItem to="/admin/telechargements" tag={Link}>
                <i className="ni ni-cloud-download-95" />
                <span>Téléchargements</span>
              </DropdownItem>
              <DropdownItem to="/admin/settings" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Paramètres</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#" onClick={(e) => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Se déconnecter</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AdminNavbar;
