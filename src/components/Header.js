import { useNavigate } from "react-router-dom";
import {StyledHeader, StyledButton} from "../style"
import { goToHome, goToLoginPage, goToProlile } from "../Routes/coodinator";

function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => {goToHome(navigate)}}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => {goToProlile(navigate)}}>
        Ir para página de perfil
      </StyledButton>

      <StyledButton onClick={() => {goToLoginPage(navigate)}}>
        Fazer Login
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
