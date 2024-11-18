# Vefforritun 1 - 2024, Hópverkefni 2

Í þessu verkefni gerðum við vefsíðu sem birtir efni um vefforritun.
Markmið þess er að læra að vinna með JSON gögn og JavaScript.
Verkefnið krefst einfalds útlits sem er skalanlegt og virkar í nýjustu
útgáfu af Firefox og Chrome.

---

## Hvernig skal keyra verkefnið

1. Sækja verkefnið:
Smelltu á græna "Code" takkann á GitHub síðunni til að sækja zip skránna eða
 notaðu `git clone`.

```bash
git clone git@github.com:MonSteroids/vef1-2024-h2.git
cd < slóð á möppu >
# Dæmi cd /verkefni/vef1-2024-h2
```

2. Setja upp "node modules"
Eftir að þú hefur sótt kóðann, keyrðu eftirfarandi skipun til að setja upp "node modules".

```bash
npm install
```

3. Keyra verkefni
Eftir að "node modules" hafa verið sótt getur þú notað eftirfarandi skipanir til þess
að keyra forritið.

- Til að keyra þróunarumhverfi:
```bash
npm run dev
```

- Til að athuga hvort bæði stylelint og eslint sé með villur:
```bash
npm run lint
```

- Til að athuga hvort stylelint sé með villur:
```bash
npm run lint:css
```

- Til að athuga hvort eslint sé með villur:
```bash
npm run lint:js
```

---

## Skipulag verkefnis
Verkefninu er skipt niður í eftirfarandi möppur:

- **dist/** - Inniheldur skrár sem eru tilbúnar til dreifingu (Vite).
- **lib/** - Inniheldur allan kóða sem tengist virkni forritsins.
- **public/** - Inniheldur allar skrár sem eru aðgengilegar í vafra.
- **node_modules/** - Inniheldur alla npm pakka sem eru notaðir til að keyra forritið.
- **styles/** - Inniheldur allar SCSS skrár sem við höfum skrifað fyrir verkefnið.

Auk þess eru "Höfuðskrár" í rót verkefnisins:
- **.gitignore** - Inniheldur þær skrár sem eiga ekki að vera í Git.
- **.stylelintrc.json** - Stillingar fyrir Stylelint.
- **index.html** - Aðalsíða verkefnis.
- **main.js** - Inniheldur allan JavaScript kóða.
- **readme.md** - Upplýsingar um verkefnið.
- **styles.css** - Samansafn af öllum SCSS skrám.
- **styles.css.map** - Inniheldur kóða sem tengir CSS skránna við SCSS skrárnar.
- **styles.scss** - Inniheldur "import" á öllum SCSS skrám til að þýða yfir í CSS.

---

## Útfærð aukaverkefni
### 1. Birting á námsefni
  - Innihald úr /public/data/css/lectures.json
  - Innihald úr /public/data/html/lectures.json
  - Innihald úr /public/data/js/lectures.json

### 2. Birting á lykilhugtökum
  - Innihald úr /public/data/css/keywords.json
  - Innihald úr /public/data/html/keywords.json
  - Innihald úr /public/data/js/keywords.json

### 3. Birting á spurningum
  - Innihald úr /public/data/css/questions.json
  - Innihald úr /public/data/html/questions.json
  - Innihald úr /public/data/js/questions.json

### 4. Flashcards
  - Útfært fyrir lykilhugtök.
  - Virkni þar sem birt er lykilhugtak og notandi getur smellt á til að sjá skilgreiningu.

---

## Nemendur sem unnu að hópverkefni 2 - Hópur 12:

|  Nafn                        | Netfang         | Github       |
| :--------------------------- | :-------------: | :----------: |
| Eggert Örn Sigurðsson        | eos13@hi.is     | eggigeggi1   |
| Elfar Oliver Sigurðarson     | eos35@hi.is     | elfaroliver  |
| Snæfríður Ebba Ásgeirsdóttir | sea28@hi.is     | snaefi       |
| Veigar Ágúst Hafþórsson      | vah29@hi.is     | MonSteroids  |