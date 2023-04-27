(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    const num = Math.floor(Math.random() * (max - min) + min);
    return num;
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    return function start() {
      const botAnswer = FIGURES_RUS[getRandomIntInclusive(0, 3)];

      function requestAnswer() {
        return function check() {
          const answer = String(prompt('камень, ножницы, бумага?'));
          const lowerA = answer.toLowerCase();
          console.log(lowerA);

          if (
            FIGURES_RUS.some((item) => item === lowerA) ||
            FIGURES_RUS.some((item) => item.slice(0, 3) === lowerA.slice(0, 3))
          ) {
            const compare = (() => {
              if (
                (lowerA[0] === 'к' && botAnswer[0] === 'к') ||
                (lowerA[0] === 'н' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'б')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                ничья`);
                console.log(lowerA[0]);
                console.log(botAnswer[0]);
                check();
              }

              if (
                (lowerA[0] === 'к' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'н' && botAnswer[0] === 'б') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'к')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                вы выйграли`);
                console.log(lowerA[0]);
                console.log(botAnswer[0]);
                result.player += 1;
                console.log(result.player);
                console.log(result.computer);
                start();
              }

              if (
                (lowerA[0] === 'н' && botAnswer[0] === 'к') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'к' && botAnswer[0] === 'б')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                компьютер выйграл`);
                console.log(lowerA[0]);
                console.log(botAnswer[0]);
                result.computer += 1;
                console.log(result.player);
                console.log(result.computer);
                start();
              }
            })();
            return lowerA[0];
          } else {
            return check();
          }
        };
      }
      const res = requestAnswer()();
    };
  };

  window.rps = game;
})();
