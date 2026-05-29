# ✅ Passo a passo completo — Portfólio Eugenio Neto

## O que está neste ZIP

Todos os arquivos do portfólio recriados do zero com:
- ✅ Cor de acento verde (#10b981) em todo o site
- ✅ Botão "Baixar currículo" em destaque no hero
- ✅ Vídeo autoplay do pipeline no card do Bitcoin
- ✅ Certificações reais (Data Science Academy)
- ✅ Design responsivo e profissional
- ✅ Dark mode com toggle
- ✅ GitHub Actions para deploy automático

---

## PASSO 1 — Abra o terminal na pasta do projeto

```bash
cd caminho/para/seu/Portifolio
```

---

## PASSO 2 — Copie os arquivos do ZIP para o projeto

Extraia o ZIP e copie TODOS os arquivos para dentro da pasta do seu projeto,
substituindo os existentes. A estrutura deve ficar assim:

```
Portifolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Journey.tsx
│   │   ├── Projects.tsx
│   │   ├── Stack.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── README.md
└── .gitignore
```

---

## PASSO 3 — Adicione o currículo PDF

```bash
cp "Jose_Eugenio_Paiva_Neto_CV_.pdf" public/curriculo.pdf
```

---

## PASSO 4 — Adicione o vídeo do pipeline

Coloque o vídeo da gravação de tela em:

```bash
cp "Gravação_de_Tela_2026-05-21_174447.mp4" public/pipeline-bitcoin.mp4
```

---

## PASSO 5 — Adicione sua foto de perfil (opcional)

```bash
cp sua-foto.png public/profile.png
```
(Se não tiver, o site mostra as iniciais "JE" automaticamente)

---

## PASSO 6 — Instale as dependências

```bash
npm install
```

---

## PASSO 7 — Teste localmente

```bash
npm run dev
```
Abra http://localhost:5173/Portifolio/ no navegador.
Se estiver tudo certo, continue para o passo 8.

---

## PASSO 8 — Faça o build e o git push

```bash
npm run build
git add .
git commit -m "feat: portfólio redesenhado — CTA currículo, cor acento verde, vídeo pipeline"
git push origin main
```

---

## PASSO 9 — Aguarde o deploy

O GitHub Actions vai rodar automaticamente e publicar o site.
Aguarde ~2 minutos e acesse:

🌐 https://netoeugenio.github.io/eugenio-portfolio/

---

## ⚠️ Importante — Configurar GitHub Pages

Se o deploy não funcionar, verifique no GitHub:
1. Vá em Settings → Pages
2. Em "Source", selecione "GitHub Actions"
3. Salve e aguarde o próximo push

---

## Dúvidas?

Se der algum erro no terminal, me manda a mensagem de erro que resolvo!
