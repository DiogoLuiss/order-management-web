<h1>Gerenciamento de Pedidos - Front-End</h1>

<p>Front-end do sistema de <strong>Gerenciamento de Pedidos</strong>, desenvolvido para pequenas lojas, com interface <strong>limpa, responsiva e interativa</strong>.<br>
Permite gerenciar clientes, produtos e pedidos de forma prática e eficiente.</p>

<hr>

<h2>Tecnologias Utilizadas</h2>
<ul>
  <li><strong>HTML5</strong> – marcação da interface.</li>
  <li><strong>CSS3</strong> – estilização e responsividade.</li>
  <li><strong>JavaScript</strong> – lógica de interação e manipulação de dados.</li>
  <li><strong>Bootstrap 5</strong> – componentes prontos e responsividade.</li>
  <li><strong>jQuery</strong> – facilita manipulação da interface, eventos e atualização de conteúdo dinâmico.</li>
</ul>

<hr>

<h2>Funcionalidades Principais</h2>

<h3>1. Gerenciamento de Clientes</h3>
<ul>
  <li>CRUD completo: cadastro, edição, listagem e exclusão.</li>
  <li>Listagem com filtros por <strong>Nome</strong> e <strong>Email</strong>.</li>
  <li>Interface amigável e responsiva para dispositivos móveis e desktop.</li>
</ul>

<h3>2. Gerenciamento de Produtos</h3>
<ul>
  <li>CRUD completo: cadastro, edição, listagem e exclusão.</li>
  <li>Listagem com filtro por <strong>Nome</strong>.</li>
  <li>Validação de campos (ex: preço e quantidade) antes de salvar.</li>
</ul>

<h3>3. Registro e Gerenciamento de Pedidos</h3>
<ul>
  <li>Seleção de cliente existente ao criar um pedido.</li>
  <li>Adição de múltiplos produtos ao pedido de forma dinâmica.</li>
  <li>Cálculo automático do <strong>valor total</strong> do pedido.</li>
  <li>Validação de <strong>estoque disponível</strong> antes de adicionar produtos.</li>
  <li>Visualização detalhada de cada pedido, incluindo itens e preços unitários.</li>
  <li>Alteração do <strong>status do pedido</strong> (ex: Novo → Processando → Finalizado).</li>
  <li>Filtros de pedidos por <strong>cliente</strong> ou <strong>status</strong>.</li>
</ul>

<h3>4. Experiência do Usuário</h3>
<ul>
  <li>Interações dinâmicas usando <strong>jQuery</strong>.</li>
  <li>Interface limpa e intuitiva com <strong>Bootstrap</strong>, garantindo responsividade.</li>
  <li>Feedback visual em ações importantes (ex: adicionar produto, atualizar pedido).</li>
</ul>

<hr>

<h2>Integração com Back-End</h2>
<p>Este front-end foi desenvolvido para se conectar com o back-end do projeto de <strong>Gerenciamento de Pedidos</strong>.<br>
Repositório back-end: <a href="https://github.com/DiogoLuiss/order-management-api">Order Management API</a></p>

<p>Todas as operações de CRUD para clientes, produtos e pedidos são feitas via chamadas <strong>HTTP usando Axios</strong>.</p>

<hr>

<h2>Como Executar</h2>
<ol>
  <li>
    Clone o repositório:<br>
    <pre><code>git clone https://github.com/DiogoLuiss/order-management-web.git</code></pre>
  </li>
  <li>
    Configure a URL da API no arquivo <code>src/js/services/api.js</code>, pois é o único lugar que precisa ser alterado.
  </li>
  <li>
    Execute o projeto:
    <ul>
      <li>Usando npm: <code>npm run start</code></li>
      <li>Ou diretamente com live-server: <code>npx live-server</code></li>
    </ul>
  </li>
</ol>

[Veja a demo do sistema](./assets/demo.mp4)
