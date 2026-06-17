
const SistemaPagamento = require("../src/sistemaDePagamento.js");

describe("Sistema de Pagamentos", () => {


  test("Deve retornar pagamento quando ID existe", () => {
    const sistema = new SistemaPagamento();
    const resultado = sistema.consultarPorId(1);

    expect(resultado.id).toBe(1);
    expect(resultado.cliente).toBe("João");
    expect(resultado.status).toBe("PAGO");
  });

  
  test("Deve retornar erro quando ID não existe", () => {
    const sistema = new SistemaPagamento();
    const resultado = sistema.consultarPorId(99);

    expect(resultado).toHaveProperty("erro");
    expect(resultado.erro).toBe("Pagamento não encontrado");
  });

  
  test("Deve retornar apenas pagamentos pendentes", () => {
    const sistema = new SistemaPagamento();
    const resultado = sistema.listarPorStatus("PENDENTE");

    expect(resultado.length).toBe(1);
    expect(resultado[0].cliente).toBe("Maria");
    expect(resultado[0].status).toBe("PENDENTE");
  });

});