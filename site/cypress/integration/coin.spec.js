/// <reference types="cypress" />

describe('Тесты функционала сайта Coin.', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
    cy.url().then(($url) => {
      if (
        !(
          $url.includes('accounts') ||
          $url.includes('banks') ||
          $url.includes('currencies')
        )
      ) {
        cy.get('input[name="login"]').type('developer');
        cy.get('input[name="password"]').type('skillbox');
        cy.get('.auth-btn').click();
      }
    });
  });

  it('Проверка на прохождение авторизации', () => {
    cy.get('.nav').should('have.class', 'open');
  });

  it('Проверка возможности просмотреть список счетов', () => {
    cy.get('.accounts-list');
  });

  it('Проверка возможности перевести сумму со счёта на счёт', () => {
    cy.get('.accounts-item-btn').eq(0).click();
    cy.get('.choices__input--cloned').type('74213041477477406320783754');
    cy.get('.account-transfer-amount').focus().type('0');
    cy.get('.account-transfer-btn').click();
    cy.get('.message-text').should('have.text', 'Перевод отправлен');
  });

  it('Проверка возможности создать новый счёт и перевести с него сумму', () => {
    cy.get('.accounts-btn-new').click();
    cy.get('.message-text').should('have.text', 'Счёт создан');
    cy.get('.accounts-item-btn').eq(0).click();
    cy.get('.choices__input--cloned').type('74213041477477406320783754');
    cy.get('.account-transfer-amount').focus().type('0');
    cy.get('.account-transfer-btn').click();
    cy.get('.message-text').should('have.text', 'Перевод отправлен');
  });
});
