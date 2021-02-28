<img src="/public/logo-full.svg" alt="Logo">

## O Projeto

O move.it foi a aplicação desenvolvida durante a quarta edição da [Next Level Week](https://rocketseat.com.br/) na trilha de [React JS](https://pt-br.reactjs.org/).
"A ideia do move.it é ajudar pessoas que ficam muito tempo na frente do computador e se esquecem de movimentar-se. Por isso o nome Move.it"

## Como funciona o app?

Ao entrar no App você pode iniciar um novo ciclo de foco/trabalho de 25 minutos - seguindo a [Técnica de Pomodoro](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro)

<img src="/public/screenshots/main.png" alt="Página inicial">

Esse ciclo, após inciado, só pode ser parado se você abandoná-lo, não há pauses

<img src="/public/screenshots/challenge.png" alt="Novo Desafio">

Após terminado o ciclo completo, você receberá um desafio para completar, sempre algo relacionado ao seu bem-estar, vamos lá Move It!

<img src="/public/screenshots/congrats.png" alt="Párabéns">

Se você completar o desafio, receberá o XP equivalemente a aquele desafio, e, quando alcançar o XP necessário para subir de nível, será parabenizado e passará pro próximo level

## Como foi desenvolvido?

O move it foi construído com [Next JS](https://nextjs.org/), para manipular os desafios e countdown foram utilizados contextos pois tais informações eram requiridas por vários componentes em tela. 
Além disso, para salvar os dados de nível, experiência e desafios completos do usuário, utilizamos o storage de cookies pois utilizamos SSR ( Server Side Rendering ) e essas informações de cookies podem ser acessadas pelo Servidor, diferente do Local Storage. 
Elementos como notificações sonoras e de pop-up foram utilizados assim que os ciclos são finalizados para alertar o usuário que é o momento de realizar uma pausa.

## Rodando localmente

Para rodar o move.it localmente em modo desenvolvimento você deve:

```
git clone https://github.com/Fernanda-Kipper/MoveIt.git project_name
cd project_name
npm install
npm start
```

No local de npm você pode utilizar o package manager de sua preferência
