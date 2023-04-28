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
              if (lowerA.slice(0, 3) === botAnswer.slice(0, 3)) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                ничья`);
                start();
              }

              if (
                (lowerA === FIGURES_RUS[0] && botAnswer === FIGURES_RUS[1]) ||
                (lowerA === FIGURES_RUS[1] && botAnswer === FIGURES_RUS[2]) ||
                (lowerA === FIGURES_RUS[2] && botAnswer === FIGURES_RUS[0])
              ) {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                вы выйграли`);
                result.player += 1;
                start();
              } else {
                alert(`вы: ${lowerA}; компьютер: ${botAnswer};
                вы проиграли`);
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
