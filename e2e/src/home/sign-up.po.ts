import { browser, element, by } from 'protractor';

export class SignUpPage {

    navegarParaSignUp() {
        return browser.get('/home/signup');
    }

    registrarInput(param, valor) { 
        return element(by.formControlName(param)).sendKeys(valor);
    }
    pegarBotao(){
        return element(by.buttonText('Register'));
    }
}