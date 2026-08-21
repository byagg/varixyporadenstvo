export function KalkulackySectionCta3() {
  return (
    <div className="text-start w-full h-full relative z-[3] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-8 max-lg:row-end-9 lg:col-start-7 lg:col-end-8 lg:row-start-4 lg:row-end-7">
      <div
        id="zhxIpd"
        height="839"
        className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
      >
        <iframe
          title="custom code element"
          className="w-full h-auto inline grid-embed__iframe overflow-clip"
          srcDoc={
            '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Kalkulačka rizika progresie varixov</title>\n \n\n\n <h1>Kalkulačka rizika progresie varixov</h1>\n <div class="input-group">\n <label for="age">Váš vek:</label>\n <input type="number" id="age" min="18" max="100" value="40">\n </div>\n <div class="input-group">\n <label for="gender">Pohlavie:</label>\n <select id="gender">\n <option value="female">Žena</option>\n <option value="male">Muž</option>\n </select>\n </div>\n <div class="input-group">\n <label for="bmi">Váš BMI:</label>\n <input type="number" id="bmi" min="15" max="50" step="0.1" value="25">\n </div>\n <div class="input-group">\n <label for="family_history">Rodinná anamnéza varixov:</label>\n <select id="family_history">\n <option value="no">Nie</option>\n <option value="yes">Áno</option>\n </select>\n </div>\n <div class="input-group">\n <label for="pregnancy">Počet tehotenstiev (pre ženy):</label>\n <input type="number" id="pregnancy" min="0" max="10" value="0">\n </div>\n <div class="input-group">\n <label for="standing">Priemerne hodín denne strávených státím alebo sedením:</label>\n <input type="number" id="standing" min="0" max="24" value="8">\n </div>\n <div class="input-group">\n <label for="exercise">Pravidelné cvičenie (aspoň 30 minút 3x týždenne):</label>\n <select id="exercise">\n <option value="yes">Áno</option>\n <option value="no">Nie</option>\n </select>\n </div>\n <button onclick="calculateRisk()">Vypočítať riziko</button>\n <div id="result"></div>\n\n \n\n\n\n</body>\n</html>'
          }
        />
      </div>
    </div>
  );
}

export default KalkulackySectionCta3;
