# Calculator-Using-JavaScript


A fully responsive, feature-rich scientific calculator built using **HTML**, **JavaScript**, **Tailwind CSS (CLI)**, and **Bootstrap 5**. This app supports advanced math functions including trigonometry (with DEG/RAD toggle), logarithms, factorials, constants like π and e, and more.

---

## 🚀 Features

-  Responsive layout (mobile & desktop)
-  Trigonometric functions: `sin`, `cos`, `tan`
-  DEG/RAD toggle mode
-  Advanced operations: `xʸ`, `√x`, `log`, `n!`, `%`
-  Constants: `π`, `e`
-  Built with:
  - **Tailwind CSS** via CLI (no CDN)
  - **Bootstrap 5** (optional layout utility)
  - **Vanilla JavaScript**

---

## 🛠️ Project Structure
```
scientific-calculator/
├── dist/
│ └── style.css # Compiled Tailwind output
├── src/
│ ├── index.html # Main app HTML
│ └── input.css # Tailwind directives
├── script.js # All JS logic
├── tailwind.config.js # Tailwind config
├── package.json # NPM metadata
└── README.md
```
---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/scientific-calculator.git
cd scientific-calculator
```

## 2. Install Dependencies
```bash
npm install
```
## 3. Build Tailwind CSS

## Initialize Node Project
```bash
npm init -y
```

## Install Tailwind CSS (CLI)
```bash
npm install -D tailwindcss
```

## Generate Tailwind Config
```bash
npx tailwindcss init
```

If that fails, use:
```bash
.\node_modules\.bin\tailwindcss init
```

For development (with watch mode):
```bash
npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
```

For production (minified):
```bash
npx tailwindcss -i ./src/input.css -o ./dist/style.css --minify
```

## 4. Open App
```bash
open src/index.html
# or double-click the file
```

## Preview - 
<img width="929" height="917" alt="image" src="https://github.com/user-attachments/assets/63fcb283-f239-40e1-bbc7-5a8c5f5c3b24" />

## Author
- Developed by **Shandhini Parthiban** 
