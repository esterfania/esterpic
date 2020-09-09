import { browser, element, by } from 'protractor';
export class SignInPage {

    acessarHome() {
        return browser.get('');
    }
    
    getCurrentUrl() {
        return browser.getCurrentUrl();
    }
    pegarInput(param, valor) {
        return element(by.formControlName(param)).sendKeys(valor);

    }
    pegarBotao() { 
        return element(by.buttonText('login'));
    }
}