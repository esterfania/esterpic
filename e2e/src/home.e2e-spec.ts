import { SignInPage } from "./home/sign-in.po";
import { SignUpPage } from "./home/sign-up.po";
import { NewUser } from "src/app/modules/home/signup/new-user";

describe('Testando a página Home', () => {

    let siginPage: SignInPage;
    let signupPage: SignUpPage;

    let newUser = {
        userName: 'Aninha',
        email: 'aninha@alura.com',
        fullName: 'Aninha Fonseca',
        password: '87654321'
    };

    beforeEach(() => {
        siginPage = new SignInPage();
        signupPage = new SignUpPage();
    });

    it('Acessar component de SignUp', () => {
        expect(signupPage.navegarParaSignUp());
    });

    it('Incluir novo usuário', () => {
        for (let p in newUser) {
            signupPage.registrarInput(p, newUser[p]);
        }
        expect(signupPage.pegarBotao().click())
    });

    it('O component de login', () => {
        expect(siginPage.acessarHome());
    });

    it('Verifica URL', () => {
        expect(siginPage.getCurrentUrl()).toBe('http://localhost:4200/home');
    });

    it('Deve validar login', () => {
        expect(siginPage.pegarInput('userName', 'flavio'));
        expect(siginPage.pegarInput('password', '123'));
        expect(siginPage.pegarBotao().click())
    });


})