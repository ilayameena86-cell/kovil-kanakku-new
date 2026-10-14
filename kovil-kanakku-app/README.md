# கோவில் கணக்கு – Android செயலி
ஶ்ரீ ஏழைகாத்த அம்மன் வல்லடிகார சுவாமி திருக்கோவில், பல்லவராயன்பட்டி

Stitch வடிவமைப்புத் திரைகள் (HTML + Tailwind) → **Capacitor** மூலம் Android APK.

## APK பெறுவது (கணினியில் எதுவும் நிறுவ வேண்டாம்)
1. GitHub-ல் புதிய repository உருவாக்கவும் (எ.கா. `kovil-kanakku-app`).
2. இந்த கோப்புறையிலுள்ள அனைத்தையும் (`.github` உட்பட) `main` கிளையில் upload செய்யவும்.
3. GitHub → **Actions** → *Build Kovil Kanakku Android APK* → முடிந்ததும் கீழே **Artifacts → Kovil-Kanakku-APK** பதிவிறக்கவும்.
4. ZIP-ஐ திறந்து `app-debug.apk`-ஐ மொபைலுக்கு அனுப்பி, "Unknown sources" அனுமதித்து நிறுவவும்.

## கணினியில் build செய்ய (Node 20, JDK 17, Android Studio)
```bash
npm install
npx cap add android
npm run icons
npx cap sync android
npx cap open android      # Android Studio → Build → Build APK(s)
```

## கோப்பு அமைப்பு
- `www/index.html` – தொடக்கத் திரை (Admin / பொதுமக்கள்)
- `www/screens/` – அனைத்து 40 திரைகள்; `www/all-screens.html` – எல்லா திரைகளின் பட்டியல்
- `www/js/app.js` – கீழ் வழிசெலுத்தல், பொத்தான் இணைப்புகள், Android Back பொத்தான்
- `assets/` – ஆப் ஐகான் & splash (build-ல் தானாக அளவுகளாக மாற்றப்படும்)

## தெரிந்த வரம்புகள்
- தற்போது இவை **வடிவமைப்பு மாதிரி (UI prototype)**: தரவு சேமிப்பு, உள்நுழைவு, PDF/Excel உருவாக்கம் இன்னும் செயல்படாது.
- Tailwind, எழுத்துருக்கள், சின்னங்கள் இணையத்திலிருந்து (CDN) ஏற்றப்படும் → இணையம் தேவை.
- Play Store-க்கு signed release build தேவை (debug APK சோதனைக்கு மட்டும்).
