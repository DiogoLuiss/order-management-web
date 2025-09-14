# Gerenciamento de Pedidos - Front-End

Front-end do sistema de **Gerenciamento de Pedidos**, desenvolvido para pequenas lojas, com interface **limpa, responsiva e interativa**, permitindo gerenciar clientes, produtos e pedidos de forma prática.

---

## 🛠 Tecnologias Utilizadas

- **HTML5** 
- **CSS3**
- **Javascript**
- **Bootstrap 5** – responsividade e componentes prontos.  
- **jQuery** – facilita a manipulação da interface, eventos e atualizações de conteúdo na página, permitindo implementar funcionalidades como filtros e atualizações do grid de forma mais prática e eficiente.


## 🎯 Funcionalidades Principais

### 1. Gerenciamento de Clientes
- CRUD completo: cadastro, edição, listagem e exclusão de clientes.  
- Listagem com filtros por **Nome** e **Email**.  
- Interface amigável e responsiva para dispositivos móveis e desktop.

### 2. Gerenciamento de Produtos
- CRUD completo: cadastro, edição, listagem e exclusão de produtos.  
- Listagem com filtro por **Nome**.  
- Validação de campos (ex: preço e quantidade) antes de salvar.  

### 3. Registro e Gerenciamento de Pedidos
- Seleção de cliente existente ao criar um pedido.  
- Adição de múltiplos produtos ao pedido de forma dinâmica.  
- Cálculo automático do **valor total** do pedido.  
- Validação de **estoque disponível** antes de adicionar produtos.  
- Visualização detalhada de cada pedido, incluindo itens e preços unitários.  
- Alteração do **status do pedido** (ex: Novo → Processando → Finalizado).  
- Filtros de pedidos por **cliente** ou **status**.  

### 4. Experiência do Usuário
- Interações dinâmicas usando **jQuery**.  
- Interface limpa e intuitiva com **Bootstrap**, garantindo responsividade.  
- Feedback visual em ações importantes (ex: adicionar produto, atualizar pedido).  

## 🔗 Integração com Back-End

Este front-end foi desenvolvido para se conectar com o back-end do projeto de **Gerenciamento de Pedidos**, disponível em:

[Order Management API](https://github.com/DiogoLuiss/order-management-api)

Todas as operações de CRUD para clientes, produtos e pedidos são feitas via chamadas **HTTP usando Axios**.

## 🚀 Como Executar

Clone o repositório:
    <pre><code>git clone https://github.com/DiogoLuiss/order-management-web.git</code></pre>
    
  <li>Configure a URL da API no arquivo <code>src/js/service/api.js</code>, pois é o único lugar onde precisa ser alterada.</li>
  <li>Execute o projeto utilizando o comando: <code>npm run start </code>. Ou execute dentro do caminho src: <code>npx live-server</code></li>


<!-- Link para o vídeo -->
<p>
  <a href="./assets/demo.mp4" target="_blank">Veja a demo do sistema</a>
</p>

<!-- Galeria de imagens do projeto -->
<div class="project-gallery">
  <img src="./assets/imgProject1.png" alt="Projeto 1" width="200">
  <img src="./assets/imgProject2.png" alt="Projeto 2" width="200">
  <img src="./assets/imgProject3.png" alt="Projeto 3" width="200">
  <img src="./assets/imgProject4.png" alt="Projeto 4" width="200">
  <img src="./assets/imgProject5.png" alt="Projeto 5" width="200">
  <img src="./assets/imgProject6.png" alt="Projeto 6" width="200">
  <img src="./assets/imgProject7.png" alt="Projeto 7" width="200">
  <img src="./assets/imgProject8.png" alt="Projeto 8" width="200">
</div>