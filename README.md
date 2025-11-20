# Cyberpunk PM Portfolio

A stunning cyberpunk-themed portfolio website showcasing Product Management experience, skills, and achievements.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![Build](https://img.shields.io/badge/Build-Passing-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Live Demo

**Deployed on Render**: [Coming Soon]

## ✨ Features

- **Cyberpunk Aesthetic**: Neon colors, custom cursor, glitch effects, and animated background
- **Responsive Design**: Full-width layout optimized for all screen sizes
- **7 Navigation Sections**:
  - 🏠 Home - Profile overview with education
  - 💼 Experience - 8 detailed work experiences
  - ⚡ Skills - 12 technical and soft skills
  - 🎓 Certifications - 10+ professional certifications
  - 🏆 Achievements - Publications, awards, projects, volunteer work
  - 🎮 Funzone - Interactive games (9x9 Sudoku, Wordle)
  - 📧 Contact - Get in touch
- **Interactive Elements**: Sound effects, hover animations, smooth transitions
- **Games**: Classic 9x9 Sudoku and tech-themed Wordle

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Audio**: Web Audio API
- **Deployment**: Render

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/arjuaman/My-PM-Portfolio.git

# Navigate to project directory
cd My-PM-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

This project is configured for deployment on Render. See [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) for detailed instructions.

**Quick Deploy**:
1. Push to GitHub
2. Connect to Render
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📁 Project Structure

```
├── public/              # Static assets
│   └── assets/         # Images and media
├── src/
│   ├── components/     # React components
│   ├── data/          # Profile and content data
│   ├── hooks/         # Custom React hooks
│   ├── App.tsx        # Main application
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── dist/              # Production build
└── package.json       # Dependencies
```

## 🎨 Customization

### Update Profile Data
Edit `src/data/profile.ts` to update:
- Personal information
- Work experience
- Education
- Skills
- Certifications
- Achievements

### Modify Theme Colors
Edit `tailwind.config.js` to customize the cyberpunk color palette.

### Add/Remove Sections
Modify `src/App.tsx` and `src/components/CyberNav.tsx`.

## 🎮 Games

### Sudoku
- Classic 9x9 grid
- Medium difficulty
- Sound effects for correct/incorrect moves

### Wordle
- 5-letter tech-themed words
- 6 attempts
- Color-coded feedback

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Arju Aman**
- Product Manager | Ex-Game Dev
- IIM Ahmedabad MBA Candidate
- Email: p24arju@iima.ac.in
- Location: Ahmedabad, India

## 🙏 Acknowledgments

- Cyberpunk 2077 for design inspiration
- React and Vite communities
- Tailwind CSS team

---

**Built with ❤️ and lots of ☕**
