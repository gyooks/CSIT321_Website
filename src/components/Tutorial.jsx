
import { motion } from 'framer-motion';

function Tutorial() {
  return (
    <section
      id="Tutorial"
      className="min-h-screen bg-gradient-to-tr from-purple-900 via-black to-purple-900 px-6 pt-32 pb-20 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">Tutorial: Getting Started with Gaming with Bare Hands</h2>
          <p className="text-lg text-white/80 mb-8 text-center">
            Learn how to set up and use Gaming with Bare Hands to control your games with custom hand gestures. Follow these steps to create presets, define gestures, bind keys, test your webcam, and start playing!
          </p>

          {/* Starting Screen Buttons Image */}
          <div className="mb-16 flex justify-center">
            <motion.div
              className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10 max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src="/assets/How-To-Use.jpg" 
                alt="Starting Screen Buttons Overview"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-center text-white/60 mt-2">Overview of Buttons on the Starting Screen</p>
            </motion.div>
          </div>

          {/* Section 1: Presets */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">1. Managing Presets</h3>
            <div>
              <p className="text-white/80 mb-4">
                Presets allow you to save and switch between different gesture-to-key mappings for various games or applications. Here's how to manage them:
              </p>
              <ul className="list-decimal list-inside text-white/80 mb-4">
                <li>
                  <strong>Select or Create a Preset</strong>: Choose an existing preset from the dropdown menu or click "Create New Preset" to start fresh.
                </li>
                <li>
                  <strong>Name Your Preset</strong>: Enter a unique name for your preset (e.g., "FPS Controls" or "RPG Gestures").
                </li>
                <li>
                  <strong>Map Gestures</strong>: Assign at least one existing gesture to the preset. You can add more gestures later.
                </li>
                <li>
                  <strong>Choose Your Preset</strong>: Select the preset you want to use before starting the app.
                </li>
                <li>
                  <strong>Delete Presets</strong>: Remove any unwanted presets by selecting them and clicking "Delete."
                </li>
              </ul>
              <p className="text-white/80 italic">
                Tip: Create separate presets for different game genres (e.g., racing, shooters) to optimize your gesture controls.
              </p>
            </div>
          </div>

          {/* Section 2: Gestures */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">2. Creating and Managing Gestures</h3>
            <div>
              <p className="text-white/80 mb-4">
                Gestures are the hand movements you define to control your games. Follow these steps to create and manage them:
              </p>
              <ul className="list-decimal list-inside text-white/80 mb-4">
                <li>
                  <strong>Create a New Gesture</strong>: Navigate to the "Create Gesture" page and enter a name for your gesture (e.g., "Fist" or "Wave").
                </li>
                <li>
                  <strong>Follow Instructions</strong>: The app will prompt you to perform the gesture. Follow the on-screen guide to position your hand correctly.
                </li>
                <li>
                  <strong>Record Gestures</strong>: Move your hand to different angles and depths to capture photos automatically. This ensures robust gesture recognition.
                </li>
                <li>
                  <strong>Rename or Delete Gestures</strong>: Edit gesture names or remove unwanted gestures from the list.
                </li>
              </ul>
              <p className="text-white/80 italic">
                Tip: Record gestures in a well-lit area with a plain background to improve detection accuracy.
              </p>
            </div>
          </div>

          {/* Section 3: Binding */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">3. Binding Gestures to Keys</h3>
            <div>
              <p className="text-white/80 mb-4">
                Bind your gestures to keyboard keys to control your games seamlessly:
              </p>
              <ul className="list-decimal list-inside text-white/80 mb-4">
                <li>
                  <strong>Select a Gesture</strong>: Choose a gesture from the list in the binding menu.
                </li>
                <li>
                  <strong>Assign a Key</strong>: Type the desired key (e.g., "W" for forward movement) to bind it to the gesture.
                </li>
                <li>
                  <strong>Retrain the Model</strong>: After binding gestures, click "Retrain Model" to update the system with your new settings.
                </li>
              </ul>
              <p className="text-white/80 italic">
                Tip: Test your bindings with a simple game to ensure the gestures trigger the correct keys.
              </p>
            </div>
          </div>

          {/* Section 4: Webcam Testing */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">4. Webcam Testing</h3>
            <div>
              <p className="text-white/80 mb-4">
                Ensure your webcam is set up correctly for gesture recognition:
              </p>
              <ul className="list-decimal list-inside text-white/80 mb-4">
                <li>
                  <strong>Test Your Webcam</strong>: Open the webcam testing page to verify that your camera is detected.
                </li>
                <li>
                  <strong>Select Your Webcam</strong>: Choose the correct webcam from the list if you have multiple cameras.
                </li>
                <li>
                  <strong>Save Preferences</strong>: Save your webcam settings to avoid reconfiguring each time.
                </li>
              </ul>
              <p className="text-white/80 italic">
                Tip: Use a webcam with at least 720p resolution for optimal gesture detection. Ensure your camera is not obstructed.
              </p>
            </div>
          </div>

          {/* Section 5: Running the Application */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">5. Running the Application</h3>
            <div>
              <p className="text-white/80 mb-4">
                Once you've set up your presets, gestures, bindings, and webcam, you're ready to start the application:
              </p>
              <ul className="list-decimal list-inside text-white/80 mb-4">
                <li>
                  <strong>Choose Your Preset</strong>: Select the preset you want to use from the main menu.
                </li>
                <li>
                  <strong>Retrain Model (if needed)</strong>: If you've made changes to gestures or bindings, retrain the model to apply them.
                </li>
                <li>
                  <strong>Click Start</strong>: Launch the application to begin using your gestures for gameplay.
                </li>
              </ul>
              <p className="text-white/80 italic">
                Tip: Ensure your game is running in the background before starting the app to allow gesture inputs to register.
              </p>
            </div>
          </div>

          {/* Supplementary Information */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Additional Tips and System Requirements</h3>
            <p className="text-white/80 mb-4">
              To get the best experience with Gaming with Bare Hands, consider the following:
            </p>
            <ul className="list-disc list-inside text-white/80 mb-4">
              <li>
                <strong>Lighting</strong>: Use a well-lit environment to improve gesture detection accuracy.
              </li>
              <li>
                <strong>Camera Placement</strong>: Position your webcam at eye level, about 2–3 feet away, for optimal hand tracking.
              </li>
              <li>
                <strong>System Requirements</strong>:
                <ul className="list-disc list-inside ml-4">
                  <li><strong>Operating System</strong>: Windows 10 or later (64-bit versions only)</li>
                  <li><strong>Processor</strong>: Intel i5 (or equivalent) and above</li>
                  <li><strong>RAM</strong>: 8 GB minimum (16 GB recommended)</li>
                  <li><strong>Storage</strong>: At least 4 GB of free space</li>
                  <li><strong>Webcam</strong>: Minimum 720p resolution for optimal gesture detection</li>
                </ul>
              </li>
              <li>
                <strong>Supported Games</strong>: Gaming with Bare Hands works best with games that support keyboard inputs such as racing, or simulation genres.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Tutorial;
