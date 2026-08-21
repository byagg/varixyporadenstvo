export function KalkulackySectionCta2() {
  return (
    <div className="text-start w-full h-full relative z-[2] grid grid-cols-[100%] row-start-4 row-end-5 max-lg:col-start-1 max-lg:col-end-4 lg:col-start-3 lg:col-end-6">
      <div
        id="z6gBHb"
        height="753"
        className="self-start w-full col-start-1 col-end-[-1] row-start-1 row-end-[-1] grid-embed layout-element__component--GridEmbed"
      >
        <iframe
          title="custom code element"
          className="w-full h-auto inline grid-embed__iframe overflow-clip"
          srcDoc={
            '<!DOCTYPE html>\n\t<head>\n\n</head>\n\t<body>\n\n\n <meta charset="UTF-8">\n <meta name="viewport" content="width=device-width, initial-scale=1.0">\n <title>Kalkulačka rizika syndrómu panvovej vénovej kongescie (SVPK)</title>\n \n\n\n <h1>Kalkulačka rizika syndrómu panvovej vénovej kongescie (SVPK)</h1>\n <div class="input-group">\n <label for="symptoms">Príznaky bolesti:</label>\n <select id="symptoms">\n <option value="mild">Mierne (zriedkavé nepohodlie)</option>\n <option value="moderate">Stredné (časté nepohodlie)</option>\n <option value="severe">Závažné (neustála bolesť)</option>\n </select>\n </div>\n <div class="input-group">\n <label for="age">Vek:</label>\n <input type="number" id="age" min="18" max="100" value="35">\n </div>\n <div class="input-group">\n <label for="bmi">BMI (Index telesnej hmotnosti):</label>\n <input type="number" id="bmi" min="15" max="50" step="0.1" value="22">\n </div>\n <div class="input-group">\n <label for="pregnancies">Počet tehotenstiev:</label>\n <input type="number" id="pregnancies" min="0" max="10" value="2">\n </div>\n <div class="input-group">\n <label for="lifestyle">Životný štýl (sedavý alebo aktívny):</label>\n <select id="lifestyle">\n <option value="active">Aktívny</option>\n <option value="sedentary">Sedavý</option>\n </select>\n </div>\n <div class="input-group">\n <label for="hormones">Hormonálna antikoncepcia alebo hormonálna liečba:</label>\n <select id="hormones">\n <option value="no">Nie</option>\n <option value="yes">Áno</option>\n </select>\n </div>\n <button onclick="calculateRisk()">Vypočítať riziko</button>\n <div id="result"></div>\n\n \n\n\n\n\n</body>\n</html>'
          }
        />
      </div>
    </div>
  );
}

export default KalkulackySectionCta2;
