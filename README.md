<br/>

<p align="center"><a href="https://pi-frontend-six.vercel.app" style="font-size: 35px; font-weight: 500" target="_blank">Projeto Integrador</a></p>

<br/>

<p align="center">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next JS" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

## Sobre
Uma aplicação para gestão de empresas por uma incubadora ou aceleradora, onde o responsável por uma incubadora ou aceleradora pode gerenciar as empresas que estão incubadas ou aceleradas por ela, e as empresas podem gerenciar seus profissionais e seus projetos.

O objetivo é que a empresa consiga, em uma única plataforma, gerenciar seus colaboradores, compromissos, contratos, receitas e despesas. Em contrapartida, a incubadora ou aceleradora consegue gerenciar as empresas que estão incubadas ou aceleradas por ela de tal forma que consiga ter uma visão geral de todas as empresas e de cada uma individualmente.

A aplicação contará com um chat entre as duas partes, onde a incubadora ou aceleradora pode se comunicar com as empresas e vice-versa, além das funcionalidades já mencionadas anteriormente.

## :warning: Arquivos importantes
.env
-------------

O arquivo ***.env*** deve ser criado com base no arquivo ***.env.example***.  
  
Esse arquivo deve estar na pasta raiz do projeto e conter obrigatóriamente as váriaveis de desenvolvimento abaixo:
```cpp
# Ainda não há variáveis obrigatórias
```
>EM HIPÓTESE ALGUMA SUBA SEU ARQUIVO .ENV PARA O GITHUB
  
Caso seja necessário criar uma nova variável de desenvolvimento, observe que há um padrão:
```javascript
NEXT_PUBLIC_<NOME_DA_VARIAVEL>=VALOR
```
_Caso tenha criado uma variável, especifique isso em um Pull Request_  
Para chamar sua variável faça como o código abaixo: 
```javascript
let myVar = process.env.NEXT_PUBLIC_MY_VAR
```
-----------------

## Requisitos
- [x] Configurar .env ou .env.local
- [x] Configurar backend Newhappen para testes finais
- [x] Instalar dependências com `yarn` ou `npm install`

## Rodando o frontend
Execute o frontend com
```javascript
yarn dev
```