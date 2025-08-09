## Development
```bash
npm install
npm install framer-motion
npm install react-router-dom
npm run dev
```

## Production
```bash
npm run build
```

## Deploy to GitHub Pages
Use a plugin like `vite-plugin-gh-pages`, or manually push the `dist/` folder to the `gh-pages` branch.

## Installation Guide

Follow these steps to install and run the project:

1. **Clone the repository**:

   If you haven't already, clone the repository to your local machine:

   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. **Install dependencies**:

   After cloning the project, you will need to install the required dependencies. Run the following command:

   ```bash
   npm install
   ```

   This will automatically install all the dependencies listed in `package.json`.

3. **Run the project**:

   Once the dependencies are installed, you can run the project using:

   ```bash
   npm run dev
   npm start
   ```


4. **Production**

    ```bash
    npm run build
    ```


    1. Install dependencies
If it’s been a while since you cloned the repo or switched machines:

bash
Copy
Edit
npm install
2. Run a local dev server
Most modern front-end projects have a dev script:

bash
Copy
Edit
npm run dev
This will spin up a local server (e.g., http://localhost:5173 or http://localhost:3000)

You can see changes live as you edit.

3. Create a production build locally
GitHub Pages serves the build output, not your raw source files, so it’s good to check the final build:

bash
Copy
Edit
npm run build
This will generate the dist folder (or whatever your build directory is).

4. Preview the production build
Some frameworks have a preview command:

bash
Copy
Edit
npm run preview
If your framework doesn’t have that, you can install a small static server globally and serve the dist folder:

bash
Copy
Edit
npm install -g serve
serve dist
This lets you view exactly what GitHub Pages will serve.

5. Push when ready
Once you’re happy:

bash
Copy
Edit
git add .
git commit -m "Your message"
git push origin main
Your GitHub Actions workflow will take over, rebuild, and deploy to gh-pages.

💡 Pro tip for GitHub Pages testing
Since Pages often serves from a subpath like

arduino
Copy
Edit
https://username.github.io/repo-name/
you should set your project’s base (Vite) or homepage (Create React App) so assets load correctly. Otherwise, they might work locally but break on Pages.

If you want, I can check your current repo setup and tell you exactly what base path you should configure so your local build matches the live GitHub Pages one. That will save you from “works locally but not online” headaches.










