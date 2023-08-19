# Chrome Extension - IP Location Tracker

![Chrome Extension Logo](/images/logo.png)

This Chrome Extension, built using the Plasmo framework with TypeScript and Tailwind CSS, allows users to track their IP address and view their current location. The extension communicates with a Node.js backend to retrieve and send API requests for fetching IP address and location information.



## Installation

To use the Chrome Extension locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chrome-extension-ip-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd chrome-extension-my-location
   ```

3. Install the dependencies:

   ```bash
   pnpm install
   ```

4. Build the TypeScript files and Tailwind CSS:

   ```bash
   pnpm dev
   ```

5. Load the extension in Chrome:
   - Open Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` directory from the project

## Usage

Once the extension is installed, you can use it by clicking on the extension icon in your Chrome browser. A popup will display your IP address and approximate location information.

## Backend Setup

The backend for this extension is built using Node.js. To set up the backend:

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

3. Run the Node.js server:

   ```bash
   npm start
   ```

The backend server will start and listen for requests from the extension to fetch IP address and location information.

## Plasmo Framework

The Plasmo framework is used to build this Chrome Extension. Plasmo is a lightweight framework that simplifies the process of creating browser extensions with TypeScript and Tailwind CSS. You can find the Plasmo framework documentation [here](https://plasmo.dev/docs).

## Contributing

Contributions to this project are welcome! If you find any bugs or want to add new features, feel free to create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-new-feature`
3. Make your changes and commit them: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-new-feature`
5. Open a pull request describing your changes.



Feel free to contact me for any questions or feedback. Enjoy using the Chrome Extension for tracking your IP address and location, powered by the Plasmo framework!
