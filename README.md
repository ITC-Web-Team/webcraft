# 🚀 WebCraft Project Submission Guide

Welcome! Follow these steps to submit your React project to the **WebCraft** platform.

---

## 📁 Overview

You’ll be contributing your project by:

1. Forking the WebCraft repository
2. Adding your project to the `mentees/` folder
3. Submitting a pull request (PR)

---

## 🛠️ Steps to Submit

### 1. Fork the Repository

Visit the [WebCraft GitHub repository](https://github.com/your-mentor/webcraft-final-website) and click **"Fork"** to create your own copy.

---

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/webcraft-final-website.git
cd webcraft-final-website
```

---

### 3. Create Your Project Folder

Inside the `src/mentees/` directory, create a new folder named after your **name or username** (e.g., `Bob/`).

```bash
mkdir src/mentees/YourName
```

---

### 4. Add Your Project

Your folder should include:

- A React app (can be minimal or fully built)
- A file named `index.jsx` that:
  - Imports your main component
  - Exports project metadata

Example folder structure:

```
src/
└── mentees/
    └── Bob/
        ├── public/
        ├── src/
        │   └── App.jsx
        └── index.jsx
```

---

### 5. Set Up Your Metadata

In your `index.jsx`, use the following format:

```jsx
import BobApp from './App'

export const meta = {
  title: 'Analog Clock',
  author: 'Bob',
  description: 'A React analog clock using CSS and hooks.',
  thumbnail: '/assets/thumbnails/clock.png'
}

export default BobApp
```

> 💡 Store your `thumbnail` in the main repo’s `public/assets/thumbnails/` folder.

---

### 6. Commit Your Changes

```bash
git add .
git commit -m "Added Bob’s analog clock project"
```

---

### 7. Push & Create a Pull Request

```bash
git push origin main
```

Then, go to your GitHub fork and open a **Pull Request** to the original repository's `main` branch.

---

## 📌 Notes

- ✅ Use a **unique folder name**
- ❌ Do **not** use `meta.json`; use `index.jsx` for metadata
- 🖼️ Place your thumbnails in `public/assets/thumbnails/`
- 🔒 Do **not** edit files outside your own folder (except for thumbnails)
- 🧩 Once merged, your project card will appear on the homepage automatically

---

## 🙋‍♀️ Need Help?

Open an issue in the GitHub repo or contact a mentor.

---

**Happy Building and Keep Coding!**
