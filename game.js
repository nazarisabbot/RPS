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
          const answer = prompt('камень, ножницы, бумага?');

          if (answer === null) {
            const statusA = alert('Вы точно хотите выйти из игры?');
            if (!statusA) {
              alert(`Компьютер: ${result.computer}; Вы: ${result.player}`);
              window.location.reload();
            }
          }

          const lowerA = answer.toLowerCase();

          if (
            FIGURES_RUS.some((item) => item === lowerA) ||
            FIGURES_RUS.some((item) => item.slice(0, 3) === lowerA.slice(0, 3))
          ) {
            const compare = () => {
              if (
                (lowerA[0] === 'к' && botAnswer[0] === 'к') ||
                (lowerA[0] === 'н' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'б')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                ничья`);
                start();
              }

              if (
                (lowerA[0] === 'к' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'н' && botAnswer[0] === 'б') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'к')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                вы выйграли`);
                result.player += 1;
                start();
              }

              if (
                (lowerA[0] === 'н' && botAnswer[0] === 'к') ||
                (lowerA[0] === 'б' && botAnswer[0] === 'н') ||
                (lowerA[0] === 'к' && botAnswer[0] === 'б')
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                компьютер выйграл`);
                result.computer += 1;
                start();
              }
            };
            compare();
            return lowerA[0];
          } else {
            return check();
          }
        };
      }
      requestAnswer()();
    };
  };

  window.rps = game;
})();
