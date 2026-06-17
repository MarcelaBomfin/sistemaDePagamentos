
class SistemaPagamento {
  constructor() {
    this.pagamentos = [
      { id: 1, cliente: "João", valor: 100.0, status: "PAGO" },
      { id: 2, cliente: "Maria", valor: 200.0, status: "PENDENTE" },
      { id: 3, cliente: "João", valor: 150.0, status: "CANCELADO" },
    ];
  }

  consultarPorId(pagamentoId) {
    const pagamento = this.pagamentos.find(p => p.id === pagamentoId);
    return pagamento || { erro: "Pagamento não encontrado" };
  }

  listarPorStatus(status) {
    return this.pagamentos.filter(p => p.status === status);
  }

  listarPorCliente(cliente) {
    return this.pagamentos.filter(p => p.cliente === cliente);
  }
}

module.exports = SistemaPagamento;