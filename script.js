// funcao com valores de endereco cidade uf bairro
const preencher_Formulario = endereco => {
  document.getElementById('endereco').value = endereco.logradouro
  document.getElementById('bairro').value = endereco.bairro
  document.getElementById('cidade').value = endereco.localidade
  document.getElementById('estado').value = endereco.uf
}

// funcao assincrona API
const pesquisarCep = async () => {
  const cep = document.getElementById('cep').value // value do input cep
  const url = `http://viacep.com.br/ws/${cep}/json/` // API que pega o .value do cep

  const dados = await fetch(url) // pego todos os dados da promise e armazeno na variavel dados
  const endereco = await dados.json() // pega o dado e aplica formato json me traz somente as informacoes que eu quero e aplica no metodo que eu quiser
  preencher_Formulario(endereco)
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep) // quando tirar o foco do input dispara o resultado
