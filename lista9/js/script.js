const URL_DA_API = 'https://openlibrary.org/search.json';
const URL_DAS_CAPAS = 'https://covers.openlibrary.org/b/id';
const URL_DO_SITE = 'https://openlibrary.org';
const TEMPO_LIMITE = 8000; // 8 segundos
const OBRAS_POR_PAGINA = 20;

const formulario = document.querySelector('.formulario');
const modal = document.querySelector('#modal-resultados');
const tituloResultados = document.querySelector('#titulo-resultados');
const termosBusca = document.querySelector('#termos-busca');
const avisoReserva = document.querySelector('#aviso-reserva');
const listaDeFichas = document.querySelector('#lista-fichas');
const dica = document.querySelector('#dica');
const erroCarregar = document.querySelector('#erro-carregar');
const botaoCarregarMais = document.querySelector('#carregar-mais');
const botaoFechar = modal.querySelector('form button');
const painelBusca = document.querySelector('.painel');



// Guarda a busca em andamento, para o botão "Carregar mais".
let buscaAtual = null;
let carregando = false;

function lerCampo(id) {
  return document.querySelector(id).value.trim();
}


function normalizar(texto) {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function montarUrl(busca) {
  const parametros = new URLSearchParams({
    fields: 'key,title,author_name,first_publish_year,publisher,isbn,cover_i',
    limit: String(OBRAS_POR_PAGINA),
    page: String(busca.pagina),
  });

  if (busca.autores[0]) parametros.set('author', busca.autores[0]);
  if (busca.titulo) parametros.set('title', busca.titulo);
  if (busca.isbn) parametros.set('isbn', busca.isbn);

  return `${URL_DA_API}?${parametros}`;
}

function criarTexto(tag, classe, texto) {
  const elemento = document.createElement(tag);
  elemento.className = classe;
  elemento.textContent = texto;
  return elemento;
}

function criarCapaVazia() {
  return criarTexto('div', 'capa-vazia', '');
}

function criarCapa(obra) {
  if (!obra.cover_i) return criarCapaVazia();

  const capa = document.createElement('img');
  capa.className = 'ficha-capa';
  capa.src = `${URL_DAS_CAPAS}/${obra.cover_i}-M.jpg`;
  capa.alt = ''; // o título da obra já está ao lado
  capa.loading = 'lazy';
  capa.addEventListener('error', () => capa.replaceWith(criarCapaVazia()));

  return capa;
}

function criarFicha(obra) {
  const ficha = document.createElement('li');
  const info = document.createElement('div');
  const tituloObra = obra.title ?? 'Título não informado';

  ficha.className = 'ficha';
  info.className = 'ficha-info';
  info.append(criarTexto('h3', '', tituloObra));

  // Só aparece o que a API informou.
  const autorEAno = [obra.author_name?.join(', '), obra.first_publish_year].filter(Boolean).join(', ');
  if (autorEAno) info.append(criarTexto('p', 'ficha-autor', autorEAno));

  const detalhes = [
    obra.publisher?.[0],
    obra.isbn?.[0] && `ISBN ${obra.isbn[0]}`,
  ].filter(Boolean).join(' | ');
  if (detalhes) info.append(criarTexto('p', 'ficha-detalhes', detalhes));

  if (obra.key) {
    const link = criarTexto('a', 'ficha-link', 'Ver detalhes');
    link.href = `${URL_DO_SITE}${obra.key}`;
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', `Ver detalhes de ${tituloObra} na Open Library, abre em nova aba`);
    info.append(link);
  }

  ficha.append(criarCapa(obra), info);
  return ficha;
}

function mostrarEspera() {
  const esqueletos = Array.from({ length: 6 }, () => {
    const item = document.createElement('li');
    item.className = 'ficha-esqueleto';
    item.setAttribute('aria-hidden', 'true');
    return item;
  });

  listaDeFichas.replaceChildren(...esqueletos);
}

function descreverTermos(busca) {
  const termos = [];

  if (busca.autores.length === 1) termos.push(`Autor: ${busca.autores[0]}`);
  if (busca.autores.length > 1) termos.push(`Autores: ${busca.autores.join(', ')}`);
  if (busca.titulo) termos.push(`Título: ${busca.titulo}`);
  if (busca.isbn) termos.push(`ISBN: ${busca.isbn}`);

  return termos.join(' | ');
}

function atualizarTitulo(busca) {
  const visiveis = listaDeFichas.children.length;

  if (visiveis === 0 && !busca.temMais) {
    tituloResultados.textContent = 'Nenhuma obra encontrada';
  } else if (busca.autores.length > 1 && busca.temMais) {
    // Com vários autores, o total da API inclui obras que serão filtradas.
    tituloResultados.textContent = `${visiveis} ${visiveis === 1 ? 'obra encontrada' : 'obras encontradas'} até agora`;
  } else if (busca.autores.length <= 1 && visiveis < busca.total) {
    tituloResultados.textContent = `Mostrando ${visiveis} de ${busca.total} obras`;
  } else {
    tituloResultados.textContent = `${visiveis} ${visiveis === 1 ? 'obra encontrada' : 'obras encontradas'}`;
  }
}

function filtrarPorOutrosAutores(obras, autores) {
  // A API recebe um único autor: os demais são conferidos aqui.
  const outrosAutores = autores.slice(1).map(normalizar);

  return obras.filter((obra) => {
    const nomes = normalizar((obra.author_name ?? []).join(' '));
    return outrosAutores.every((autor) => nomes.includes(autor));
  });
}

async function buscarNaApi(busca) {
  const resposta = await fetch(montarUrl(busca), {
    signal: AbortSignal.timeout(TEMPO_LIMITE),
  });

  if (!resposta.ok) {
    throw new Error(`A API respondeu com o status ${resposta.status}`);
  }

  const dados = await resposta.json();

  return {
    obras: filtrarPorOutrosAutores(dados.docs, busca.autores),
    total: dados.numFound ?? dados.docs.length,
  };
}

function buscarNaReserva(busca) {
  return OBRAS_RESERVA.filter((obra) => {
    const nomes = normalizar(obra.author_name.join(' '));
    const atendeAutores = busca.autores.every((autor) => nomes.includes(normalizar(autor)));
    const atendeTitulo = !busca.titulo || normalizar(obra.title).includes(normalizar(busca.titulo));
    const atendeIsbn = !busca.isbn || obra.isbn.includes(busca.isbn);

    return atendeAutores && atendeTitulo && atendeIsbn;
  });
}

function mostrarPagina(busca, obras, total) {
  busca.total = total;
  busca.temMais = busca.pagina * OBRAS_POR_PAGINA < total;

  listaDeFichas.append(...obras.map(criarFicha));
  botaoCarregarMais.hidden = !busca.temMais;
  dica.hidden = listaDeFichas.children.length > 0 || busca.temMais;
  atualizarTitulo(busca);
}

async function buscarObras() {
  const autores = [lerCampo('#autor'), lerCampo('#autor2'), lerCampo('#autor3')].filter(Boolean);
  const titulo = lerCampo('#titulo');
  const isbn = lerCampo('#isbn').replace(/[\s-]/g, '');

  if (autores.length === 0 && !titulo && !isbn) return;

  const busca = { autores, titulo, isbn, pagina: 1, total: 0, temMais: false };
  buscaAtual = busca;

  mostrarEspera();
  avisoReserva.hidden = true;
  dica.hidden = true;
  erroCarregar.hidden = true;
  botaoCarregarMais.hidden = true;
  tituloResultados.textContent = 'Buscando obras...';
  termosBusca.textContent = descreverTermos(busca);
  modal.showModal();

  let resultado;

  try {
    resultado = await buscarNaApi(busca);
  } catch (erro) {
    // Plano B: se a API falhar, a busca continua no catálogo de reserva.
    console.error(erro);
    const obras = buscarNaReserva(busca);
    resultado = { obras, total: obras.length };
    if (busca === buscaAtual) avisoReserva.hidden = false;
  }

  // Ignora a resposta se outra busca começou nesse meio-tempo.
  if (busca !== buscaAtual) return;

  listaDeFichas.replaceChildren();
  mostrarPagina(busca, resultado.obras, resultado.total);
}

async function carregarMais() {
  const busca = buscaAtual;

  if (carregando || !busca) return;

  carregando = true;
  erroCarregar.hidden = true;
  botaoCarregarMais.textContent = 'Carregando...';
  busca.pagina += 1;

  try {
    const { obras, total } = await buscarNaApi(busca);
    if (busca === buscaAtual) {
      mostrarPagina(busca, obras, total);
      // O botão some na última página: o foco do teclado não pode se perder.
      if (botaoCarregarMais.hidden) botaoFechar.focus();
    }
  } catch (erro) {
    console.error(erro);
    busca.pagina -= 1;
    if (busca === buscaAtual) erroCarregar.hidden = false;
  } finally {
    carregando = false;
    botaoCarregarMais.textContent = 'Carregar mais';
  }
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  buscarObras();
});

botaoCarregarMais.addEventListener('click', carregarMais);

// Clicar na área escura, fora do modal, também fecha.
modal.addEventListener('click', (evento) => {
  if (evento.target === modal) modal.close();
});

const modalLimpar = document.querySelector('#modal-limpar');

formulario.querySelector('.limpar').addEventListener('click', () => {
  modalLimpar.showModal();
});

modalLimpar.addEventListener('close', () => {
  if (modalLimpar.returnValue === 'limpar') {
    formulario.reset();
    document.querySelector('#autor').focus();
  }

  // Sem isso, fechar com Esc repetiria a última resposta.
  modalLimpar.returnValue = '';
});

modalLimpar.addEventListener('click', (evento) => {
  if (evento.target === modalLimpar) modalLimpar.close();
});


// Fica vermelha ao clicar em buscar sem preencher nada.
formulario.querySelector('.buscar-inativo').addEventListener('click', () => {
  painelBusca.classList.add('tentou-buscar');
});

// Volta ao normal quando a pessoa começa a digitar.
formulario.addEventListener('input', () => {
  painelBusca.classList.remove('tentou-buscar');
});