// Catálogo de reserva: usado apenas quando a API não responde.
// Títulos, autores e anos são de obras reais.
// Editoras e ISBNs são fictícios e servem só para a demonstração.
const OBRAS_RESERVA = [
  { title: 'Dom Casmurro', author_name: ['Machado de Assis'], first_publish_year: 1899, publisher: ['Editora Exemplo'], isbn: ['9780000000001'] },
  { title: 'Memórias Póstumas de Brás Cubas', author_name: ['Machado de Assis'], first_publish_year: 1881, publisher: ['Editora Exemplo'], isbn: ['9780000000002'] },
  { title: 'Quincas Borba', author_name: ['Machado de Assis'], first_publish_year: 1891, publisher: ['Editora Exemplo'], isbn: ['9780000000003'] },
  { title: 'A Hora da Estrela', author_name: ['Clarice Lispector'], first_publish_year: 1977, publisher: ['Editora Exemplo'], isbn: ['9780000000004'] },
  { title: 'Vidas Secas', author_name: ['Graciliano Ramos'], first_publish_year: 1938, publisher: ['Editora Exemplo'], isbn: ['9780000000005'] },
  { title: 'Capitães da Areia', author_name: ['Jorge Amado'], first_publish_year: 1937, publisher: ['Editora Exemplo'], isbn: ['9780000000006'] },
  { title: 'Grande Sertão: Veredas', author_name: ['João Guimarães Rosa'], first_publish_year: 1956, publisher: ['Editora Exemplo'], isbn: ['9780000000007'] },
  { title: 'O Cortiço', author_name: ['Aluísio Azevedo'], first_publish_year: 1890, publisher: ['Editora Exemplo'], isbn: ['9780000000008'] },
  { title: 'Iracema', author_name: ['José de Alencar'], first_publish_year: 1865, publisher: ['Editora Exemplo'], isbn: ['9780000000009'] },
  { title: 'Assassinato no Expresso do Oriente', author_name: ['Agatha Christie'], first_publish_year: 1934, publisher: ['Editora Exemplo'], isbn: ['9780000000010'] },
  { title: 'E Não Sobrou Nenhum', author_name: ['Agatha Christie'], first_publish_year: 1939, publisher: ['Editora Exemplo'], isbn: ['9780000000011'] },
  { title: 'Belas Maldições', author_name: ['Neil Gaiman', 'Terry Pratchett'], first_publish_year: 1990, publisher: ['Editora Exemplo'], isbn: ['9780000000012'] },
];