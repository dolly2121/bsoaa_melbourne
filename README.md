# BSOAA Melbourne — Official Website

Official website for the **Basava Samithi of Australasia Inc. — Melbourne Chapter**

🌐 **Live at:** [bsoaamelbourne.org](https://bsoaamelbourne.org)

---

## About

A community website built to preserve and promote Sharana/Basava philosophy across Melbourne and Australasia. The site serves as the digital home for BSOAA Melbourne — sharing events, philosophy, community gallery, membership information, and the Basava Sadana vision.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Build Tool | Vite |
| Language | JSX + JavaScript (ES6+) |
| Styling | Vanilla CSS + Inline JSX styles |
| Fonts | Google Fonts (Cinzel Decorative, Cormorant Garamond, Lato) |
| Hosting | GitHub Pages |
| Deployment | gh-pages npm package |
| Version Control | Git + GitHub |
| AI Chatbot (planned) | Anthropic Claude API (Haiku) |

---

## Project Structure

```
bsoaa-melbourne/
├── public/                         # Static assets (images)
│   ├── basava_logo.png
│   ├── hero_picture.jpg
│   ├── basava_members_image.jpg
│   └── ...
├── src/
│   ├── App.jsx                     # Main app — all pages and components
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global reset styles
│   └── components/
│       └── Chatbot/                # AI Chatbot (ready to activate)
│           ├── Chatbot.jsx
│           ├── Chatbot.css
│           ├── useChatbot.js
│           └── chatbotConfig.js
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, Pillars (Kayaka/Dasoha/Prasada), About, Vachanas, Purposes |
| About Us | Our Beliefs, Vision & Mission, Basavanna, Basava Sadana, Executive Committee |
| Events | Featured event card, upcoming events, Basava Sadana proposed activities |
| Gallery | Community photo gallery with lightbox |
| Recognition | Global recognition and honours |
| Membership | Join form (Google Forms), Dasoha volunteering, President's messages |
| Contact | Contact form, email addresses, location |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

---

## Deployment

The site is deployed via **GitHub Pages** using the `gh-pages` branch.

**For custom domain (`bsoaamelbourne.org`):**
```js
// vite.config.js
base: '/'
```

**For GitHub Pages subdirectory (`dolly2121.github.io/bsoaa_melbourne/`):**
```js
// vite.config.js
base: '/bsoaa_melbourne/'
```

### DNS Records (HostPapa)
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | dolly2121.github.io |

---

## Chatbot (Planned)

A Claude AI-powered chatbot is ready to activate. Files are in `src/components/Chatbot/`.

To activate:
1. Add Anthropic API key
2. Add to `App.jsx`:
```jsx
import Chatbot from './components/Chatbot/Chatbot'
// Add <Chatbot /> before closing </div> in return
```

Estimated cost: **~$1 AUD/month** for community-level traffic.

---

## Contact

- General: contact.bsoamelbourne@gmail.com
- Secretary: secretary.bsoamelbourne@gmail.com
- Website: [bsoaamelbourne.org](https://bsoaamelbourne.org)

---

## Acknowledgements

Built with ❤️ for the BSOAA Melbourne community.  
Inspired by the teachings of Basavanna — *"Kayakave Kailasa"* — Work is Divine.
