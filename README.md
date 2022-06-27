# angular-spring-linketinder
Projeto do programa de aceleração da ZG Soluções com o objetivo de aprendizado de Spring e Angular.

# ZG-Hero Project trilha (K3-T2): Angular Framework
  O desenvolvimento da aplicação teve como objetivo permitir o cadastro de empresas e suas vagas e de candidatos, relacionando com suas competências.
  
<h2>Frontend</h2>

O Frontend foi dividido nos seguintes módulos: 

  - cadastro(de empresas e candidatos)
  - competencia
  - inicial(contém o componente da página inicial)
  - perfil(de empresas e candidatos)
  - vaga

<h3>Executando o projeto Angular</h3>

  Para executar o projeto Angular, abra o arquivo no caminho "frontend/view-linketinder" e execute o seguinte comando: "ng serve". Após isso, abra no navegador 
  o localhost na porta de execução.
  

<h2>Backend</h2>

O Backend está em uma estrutura monlítica, e separado nos diretórios controller e model, do MVC. As seguintes entidades foram criadas:
  
  - Candidato
  - CandidatoCompetencia
  - Competencia
  - Empresa
  - Vaga
  - VagaCompetencia

também foram criados controllers para cada uma das entidades.

<h3>Executando o projeto Spring</h3>

  Para executar o projeto Spring, abra o projeto no caminho "backend/zghero-api", configure a build da API e dê run. Tenha certeza que o banco de dados utilizado é o <a href="https://github.com/hideki-abe/angular-spring-linketinder/blob/master/bd.sql">sql</a> com o PostgreeSQL. Utilize a IDE
  Intellij para uma maior compatibilidade no código.

