
# Sistema de Consulta de Pagamentos

## Descrição do Projeto
Este projeto consiste em um sistema simples de consulta de pagamentos desenvolvido em **JavaScript (Node.js)**.  
O sistema permite consultar pagamentos, listar por status e por cliente.

Além disso, o projeto implementa **testes automatizados** utilizando Jest e um pipeline de **Integração Contínua (CI)** com GitHub Actions.

---

## Tecnologias Utilizadas

- Node.js
- JavaScript
- Jest (Testes automatizados)
- GitHub Actions (CI/CD)

---

## Estrutura do Projeto

.
├── src/
│   └── sistemaDePagamento.js
├── test/
│   └── sistemaDePagamento.test.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── package.json
└── README.md

---

## Funcionalidades

- ✔ Consultar pagamento por ID
- ✔ Listar pagamentos por status
- ✔ Listar pagamentos por cliente

---

## Testes Automatizados

Os testes foram implementados com **Jest** e cobrem:

- ✔ Consulta de pagamento válido 
- ✔ Tratamento de erro
- ✔ Filtro por status

Execução local:

```bash
npm test
