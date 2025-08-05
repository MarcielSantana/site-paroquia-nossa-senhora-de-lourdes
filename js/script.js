const eventos = [
  {
    titulo: "Festa da Padroeira",
    data: "11/02/2025",
    descricao: "Celebração solene em honra a Nossa Senhora de Lourdes."
  },
  {
    titulo: "Campanha de Doação de Alimentos",
    data: "20/03/2025",
    descricao: "Arrecadação para famílias em situação de vulnerabilidade."
  }
];

const container = document.getElementById("lista-eventos");

eventos.forEach(evento => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${evento.titulo}</h3>
    <p><strong>Data:</strong> ${evento.data}</p>
    <p>${evento.descricao}</p>
    <hr />
  `;
  container.appendChild(div);
});






const form = document.getElementById("form-contato");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });
}
