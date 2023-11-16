# Apresentação

### Author

Nome: João Vinicius de Paula

Profissão: Programador

Especialidade: Frontend

Inicio: 2008

---

### Objetivo desta apresentação

Não é ser uma verdade absoluta, uma cagação de regra, ou uma bala de prata até pq isso não existe.

Também não vou falar da última funcionalidade lançada da biblioteca mais hypada do momento ou do novo framework da moda

Então esteja a vontade para fazer perguntas, compartilhar a sua experiência ou o seu ponto de vista.

---

### Frontend

Momento de incubação: Rich Internet Applications - RIA (2002) || Web 2.0

Ajax (acrônimo em língua inglesa de Asynchronous Javascript and XML) + jQuery (2006)

O nascimento: HTML5 (2010-2014), CSS3(2010-2012), ES5(2009), Lançamento do iPhone 3 e App Store (2008), ES6(2015), Bootstrap2(2011)

A evolução: Bundlers/ESM,Reatividade, Bibliotecas/Frameworks, SPA/SSR/SSG/PWA (Hoje)

---

### E o mercado?

[Video](https://www.youtube.com/watch?v=3xKxSNw26ZU)

---

### Como sobreviver em um mundo VUCA?

Volátil (Volatility), Incerto (Uncertainty), Complexo (Complexity) e Ambiguo (Ambiguity)

---

### Jeff Bezos vai na contra-mão do mercado

> Eu frequentemente recebo a pergunta: "O que vai mudar nos próximos 10 anos?", Mas raramente escuto: "O que não vai mudar nos próximos 10 anos?"

Que pra ele é: preços mais baixos e entregas mais rápidas.

---

### Para o frontend o core seria:

Disponibilidade, Usabilidade, Performance, Consistência e SEO*.

---

#### Disponibilidade

Infraestrutura suficiente para garantir o crescimento consistente com CDN e testes E2E

---

#### Usabilidade

HTML semântico + ARIA (Accessible Rich Internet Applications)

---

#### Performance

FCP: Abaixo de 1,6s – Quando o navegador renderiza o primeiro bit de conteúdo do DOM, fornecendo o primeiro feedback ao usuário de que a página está realmente carregando.

Utilizar técnicas como: SSR, Hydration, virtual-scroll, lazy-load, dinamic imports, imagens/pictures with src srcset,...

---

#### Consistência

A diagramaçao, o design e o comportamento dos elementos devem estar bem definidos e consistentes em todo projeto.
Feedbacks claros sobre os erros, mudanças de estado e contextos.

---

#### SEO

Seria a soma da Disponibilidade + Usabilidade + Performance

---

### Ou seja, pergunta de 1 milhão de dólares é:

Como entregar Disponibilidade, Usabilidade, Performance, Consistência e SEO hoje ou daqui 10 anos?

---

### Com o imutável

Por exemplo: "Princípios"

---

### O primeiro princípio que gostaria de mencionar é: O princípio de Pareto

Ele afirma que, para muitos trabalhos, 80% dos resultados resultam de 20% das causas.

Em outras palavras podemos dizer que 80% do uso do seu sistema se concentra em 20% das funcionalidades

---

### Para o frontend

80% das suas páginas usa 20% dos seus componentes

Você constrói 80% das suas páginas com 20% dos seus componentes

Concordam?

---

### Exemplo

- Menu de navegação
- Tabela
- Formulario (input, select, checkbox, radio, ...)
- Icones
- Botões
- Dropdown

---

### Aí surge aquelas perguntas

- E porque tantos bugs?
- E porque tão dificil modificar?
- Como criar componentes realmente reutilizaveis?
- Como paro com o meu vício de dar mais um ctrl-c ctrl-v no stack overflow?
- Quando vão lançar um chatgpt que me entregue um código que funcione de primeira?
- Como fazer com que a equipe esteja alinhada em relação ao projeto? Mesmo aqueles que não são desenvolvedores (Designer, PM, QA, ...)

---

### Utilização de metodologia

Ela ditará qual o caminho ou abordagem a seguir para o problema ser resolvido.

A metodologia mais adequada, será aquela que proporciona os melhores métodos para solucionar o seu problema.

---

### Design Token

Design Tokens são um arquivo central que contém todos os elementos fundamentais de design como: fontes, espaçamento, cores, borda, ícones, entre outros. Os design tokens se inserem como os ‘elétrons’, ou seja, partículas subatômicas que guardam as propriedades e atributos de cada ‘átomo’ da interface em variáveis. Uma vez que é feita uma mudança na cor primária, por exemplo, de um elemento, ela é propagada pra todo website ou aplicação mobile, sem a necessidade de checar o código.

> [é oque você configura](https://chakra-ui.com/docs/styled-system/customize-theme#customizing-theme-tokens) - JV

---

### Atomic Design

O Atomic Design é uma metodologia composta por cinco estágios distintos trabalhando juntos para criar sistemas de design de interface de forma mais deliberada e hierárquica. Os cinco estágios do design atômico são:

> Uma maneira de por em prática os princípios do SOLID ou pelo menos o S - JV

---

#### Átomos

São blocos de construção básicos da matéria que formam a interface.

Exemplo: um input, um button, um ícone

> é aqui que mora a cilada, nem todo átomo deve ser um componente, pense nisso.

---

#### Moléculas

Grupos simples de elementos da interface do usuário que funcionam juntos como uma unidade.

> se juntamos **2 componentes do tipo átomo** temos uma molécula, tipo H2O

---

#### Organismos

Conjuntos de moléculas que funcionam juntas como uma unidade. Uma molécula com outra molécula (ou mais), formam um organismo
Exemplo: um formulário.

> Se juntarmos **diferentes componentes do tipo átomo/moleculas** com o que está escrito aqui em cima - JV

---

#### Templates

Saindo um pouco dos termos da química, os templates são objetos no nível de página, onde colocamos componentes em um layout formando a estrutura de página.

> Onde você faz a diagramação da página - JV

---

#### Páginas

É o resultado final, exatamente como o template, só que completa de informações reais.

> Onde você junta tudo - JV

---

# E ai? Bora pra prática?

Spoiler:

* SOLID
* Design Patters: Composition
* ou seja + princípios.

[Desafio](https://www.figma.com/community/file/1262021268640305233/saas-login-page-design-concept-desktop-mobile-viewpoint)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---