export function KalkulackySectionCta() {
  return (
    <div className="text-start w-full h-full relative z-[1] grid grid-cols-[100%] max-lg:col-start-1 max-lg:col-end-4 max-lg:row-start-2 max-lg:row-end-3 lg:col-start-7 lg:col-end-8 lg:row-start-10 lg:row-end-11">
      <div
        id="zMZmIX"
        className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
      >
        <iframe
          title="custom code element"
          className="w-full h-auto inline grid-embed__iframe overflow-clip"
          srcDoc={
            '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Kalkulačka rizika pre kŕčové žily pri lete lietadlom</title>\n \n\n\n <h1>Kalkulačka miery rizika pre kŕčové žily pri lete lietadlom</h1>\n <div class="input-group">\n <label for="severity">Závažnosť vašich kŕčových žíl:</label>\n <select id="severity">\n <option value="mild">Mierna (ojedinelé nepohodlie)</option>\n <option value="moderate">Stredná (citeľné nepohodlie)</option>\n <option value="severe">Závažná (výrazná bolesť alebo opuch)</option>\n </select>\n </div>\n <div class="input-group">\n <label for="flightDuration">Dĺžka letu (hodiny):</label>\n <input type="number" id="flightDuration" min="1" max="24" value="4">\n </div>\n <div class="input-group">\n <label for="age">Váš vek:</label>\n <input type="number" id="age" min="18" max="100" value="40">\n </div>\n <div class="input-group">\n <label for="bmi">Váš BMI (kalkulačka BMI je nižšie):</label>\n <input type="number" id="bmi" min="15" max="50" step="0.1" value="25">\n </div>\n <div class="input-group">\n <label for="compression">Budete nosiť kompresné pančuchy?</label>\n <select id="compression">\n <option value="yes">Áno</option>\n <option value="no">Nie</option>\n </select>\n </div>\n <div class="input-group">\n <label for="medication">Užívate lieky na riedenie krvi alebo hormonálnu antikoncepciu?</label>\n <select id="medication">\n <option value="no">Nie</option>\n <option value="thinners">Lieky na riedenie krvi</option>\n <option value="contraceptives">Hormonálna antikoncepcia</option>\n </select>\n </div>\n <button onclick="calculateRisk()">Vypočítať riziko</button>\n <div id="result"></div>\n\n \n\n\n\n</body>\n</html>'
          }
        />
      </div>
    </div>
  );
}

export default KalkulackySectionCta;
