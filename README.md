# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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