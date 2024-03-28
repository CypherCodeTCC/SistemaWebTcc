## Guia de Instruções para Iniciar o Projeto 🚀

**Pré-requisitos**  
Antes de começar, certifique-se de ter o Node.js instalado em seu sistema. Se você ainda não o tem, pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

**Instalação**
1. Clone este repositório para o seu ambiente local:
### git clone https://github.com/CypherCodeTCC/SistemaWebTcc

2. Navegue até o diretório do projeto:
### cd SistemaWebTcc

**Instalando Dependências**  
*Antes de iniciar o projeto, instale as dependências necessárias.*

3. No terminal, execute o seguinte comando:
### npm install

**Rodando o Projeto**  
Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento.

No terminal, execute o seguinte comando:
### npm run dev

Isso iniciará o servidor de desenvolvimento e abrirá automaticamente o seu navegador padrão com o projeto em execução. Qualquer alteração feita nos arquivos será refletida no navegador. 😊

## Estrutura de Pasta do Projeto

Este projeto segue uma estrutura de pasta organizada para facilitar o desenvolvimento, manutenção e escalabilidade do código. Abaixo está a descrição da estrutura de pasta e o propósito de cada diretório:

### `src`

O diretório `src` contém todo o código-fonte do projeto.

#### `components`

O diretório `components` contém todos os componentes reutilizáveis do projeto. Cada componente é agrupado em seu próprio diretório, o que inclui todos os arquivos relacionados a esse componente, como arquivos JSX, CSS, imagens e outros recursos.

##### `Navbar`

O diretório `Navbar` contém o componente de barra de navegação do projeto.

- `Navbar.jsx`: O arquivo principal do componente de barra de navegação, que importa e organiza todos os elementos e subcomponentes da barra de navegação.
- `css`: O diretório que contém todos os arquivos CSS relacionados à barra de navegação.

###### `NavBar-components`

O diretório `NavBar-components` contém os subcomponentes que compõem a barra de navegação.

- `LogoComponent.jsx`: Componente para renderizar o logotipo da empresa.
- `MenuLinks.jsx`: Componente para renderizar os links do menu.
- `SearchBar.jsx`: Componente para renderizar a barra de pesquisa.
- `CartLoginIcons.jsx`: Componente para renderizar os ícones de carrinho e login.
- `MobileMenu.jsx`: Componente para renderizar o menu móvel.

### `css`

O diretório `css` contém todos os arquivos de estilo do projeto.

### `images`

O diretório `images` contém todas as imagens utilizadas no projeto.

Esta estrutura de pasta foi projetada para oferecer uma organização clara e escalável do código, facilitando a manutenção e o desenvolvimento contínuo do projeto.
