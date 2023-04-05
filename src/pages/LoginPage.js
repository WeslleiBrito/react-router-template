import Header from "../components/Header"
import { ButtonLogin, ContainerButtons, ContainerLogin, ContainerPageLogin, InputText } from "../style"



export const LoginPage = () => {

    return(
        <>
            <Header/>
            <ContainerPageLogin>
                <h1>Acessar</h1>
                <ContainerLogin>
                    <InputText type="text"/>
                    <InputText type="password"/>
                    <ContainerButtons>
                        <ButtonLogin>Cadastra - se</ButtonLogin>
                        <ButtonLogin>Entrar</ButtonLogin>
                    </ContainerButtons>
                </ContainerLogin>
            </ContainerPageLogin>
        </>
)
}