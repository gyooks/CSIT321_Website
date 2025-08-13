import { motion } from 'framer-motion';

function DevLog() {
  return (
    <section
      id="DevLog"
      className="min-h-screen bg-gradient-to-br from-[#1a032d] to-[#20062e] px-6 pt-32 pb-20 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold mb-12 text-center">Development Log</h2>

          {/* Week of August 11–17, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of August 11–17, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>JJ: Finalized app testing and documentation updates</li>
                  <li>Leong: Updated test cases and meeting minutes</li>
                  <li>Malcolm: Updated wireframes for final submission</li>
                  <li>Sheng Yue: Enhanced tutorial page and user manual</li>
                  <li>Yukin: Finalized demo and promo videos</li>
                  <li>Rohith: Completed DevLog page for website</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Ensured app functionality and updated documents for submission.<br />
                  <strong>Sheng Yue:</strong> Improved tutorial page and manual for clarity.<br />
                  <strong>Rohith:</strong> Finalized DevLog page and website content.<br />
                  <strong>Malcolm:</strong> Updated wireframes to align with final app.<br />
                  <strong>Yukin:</strong> Completed demo and promo videos for presentation.<br />
                  <strong>Leong:</strong> Updated test cases and compiled meeting minutes.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Assigned final tasks for documentation, wireframes, videos, and DevLog; prepared for submission.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of August 4–10, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of August 4–10, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>JJ: Added cursor toggle and tested functionality</li>
                  <li>Malcolm: Fixed BOM error in edit preset and improved preset display</li>
                  <li>Yukin: Added GitHub Actions deploy workflow and fixed routing bug</li>
                  <li>Yukin: Removed Hero.jsx and react-router-dom to resolve multi-page issues</li>
                  <li>Yukin: Added reviews page and updated vite.config.js for deployment</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Assigned final roles and tested cursor toggle for demo.<br />
                  <strong>Sheng Yue:</strong> Edited app and tutorial page for submission readiness.<br />
                  <strong>Rohith:</strong> Refined website and prepared for final feedback.<br />
                  <strong>Malcolm:</strong> Fixed BOM error and improved preset display logic.<br />
                  <strong>Yukin:</strong> Hosted website using GitHub Actions after resolving routing issues.<br />
                  <strong>Leong:</strong> Reviewed website and selected demo games with third-party input support.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Planned final app build with keybind recording. Assigned tasks for Dev Log, videos, and documentation.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of July 28–August 3, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of July 28–August 3, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Sheng Yue: Added prompt and hid button for better UX</li>
                  <li>JJ: Reverted and updated create_gesture.py</li>
                  <li>Malcolm: Updated CSV file saving and preset creation logic</li>
                  <li>Yukin: Updated index.html and package.json for website deployment</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Implemented toggle cursor mode with left-click for menu navigation.<br />
                  <strong>Sheng Yue:</strong> Added auto-capture prompt to “Create Gesture” for better UX.<br />
                  <strong>Rohith:</strong> Fixed website bugs and discussed commercial features.<br />
                  <strong>Malcolm:</strong> Resolved CSV encoding issues due to locale settings.<br />
                  <strong>Yukin:</strong> Attempted GitHub Pages hosting but faced routing issues.<br />
                  <strong>Leong:</strong> Reviewed repository changes for PRD preparation.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed loading animations and gesture integration. Planned website enhancements and deployment fixes.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of July 21–27, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of July 21–27, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Added edit preset functions and fixed minor errors</li>
                  <li>JJ: Implemented hand cursor functionality</li>
                  <li>Leong: Added loading indicator and fixed cursor error</li>
                  <li>Sheng Yue: Improved “Create Gesture” to capture 50 photos automatically</li>
                  <li>Rohith: Added WhyBuy section and created Footer with social links</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Developed hand cursor for menu navigation, unsuitable for some games.<br />
                  <strong>Sheng Yue:</strong> Automated “Create Gesture” capture for 50 photos.<br />
                  <strong>Rohith:</strong> Added social links and “Why Buy” section to website.<br />
                  <strong>Malcolm:</strong> Implemented edit preset page, fixing bugs.<br />
                  <strong>Yukin:</strong> Designed tutorial and reviews pages for website.<br />
                  <strong>Leong:</strong> Added loading indicator for “Retrain Model” per feedback.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Discussed UX improvements, game compatibility, and website section additions.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of July 14–20, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of July 14–20, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Enhanced create preset functionality and tested error handling</li>
                  <li>JJ: Enabled keyboard inputs to hold and fixed retraining bug</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Enabled hold-down keyboard inputs for WASD games.<br />
                  <strong>Sheng Yue:</strong> Improved website design for marketing appeal.<br />
                  <strong>Rohith:</strong> Added “Why Buy” section inspired by commercial sites.<br />
                  <strong>Malcolm:</strong> Planned default preset file integration for creation.<br />
                  <strong>Yukin:</strong> Designed essential website pages with futuristic CSS.<br />
                  <strong>Leong:</strong> Fixed repository push issues with JJ’s help.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed gesture recognition and assigned tasks for preset fixes and website content.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of July 7–13, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of July 7–13, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Sheng Yue: Added “Rename” and “Delete Gesture” functions</li>
                  <li>Malcolm: Adjusted frames and fixed typos in preset code</li>
                  <li>JJ: Added requirements.txt and fixed retraining bug</li>
                  <li>Yukin: Initialized website repository and updated CSS</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Researched loading animations for retraining feedback.<br />
                  <strong>Sheng Yue:</strong> Learned CSV/JSON integration for gesture functions.<br />
                  <strong>Rohith:</strong> Suggested pricing and reviews pages for website.<br />
                  <strong>Malcolm:</strong> Adjusted preset page to use default gesture CSVs.<br />
                  <strong>Yukin:</strong> Drafted futuristic website design for marketing.<br />
                  <strong>Leong:</strong> Prepared for GUI development assistance.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed phase 1 feedback, planned simpledialog prompts, and assigned website hosting tasks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of June 30–July 6, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of June 30–July 6, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Constructed create preset functionality for testing</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Created to-do list and researched website hosting.<br />
                  <strong>Sheng Yue:</strong> Implemented simpledialog for gesture input prompts.<br />
                  <strong>Rohith:</strong> Took up commercial website development role.<br />
                  <strong>Malcolm:</strong> Modified preset code for CSV file integration.<br />
                  <strong>Yukin:</strong> Set up website repository with marketing focus.<br />
                  <strong>Leong:</strong> Reviewed prototype feedback for GUI improvements.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Adjusted timeline, reviewed prototype feedback, and finalized technical documents.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of June 23–29, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of June 23–29, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>No commits this week</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Assigned website tasks despite other module deadlines.<br />
                  <strong>Sheng Yue:</strong> Researched gesture creation UX improvements.<br />
                  <strong>Rohith:</strong> Developed unit test cases for app reliability.<br />
                  <strong>Malcolm:</strong> Planned preset page updates amid other commitments.<br />
                  <strong>Yukin:</strong> Researched modern website designs for marketing.<br />
                  <strong>Leong:</strong> Reviewed feedback for GUI and gesture control enhancements.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Kicked off website development and planned gesture control enhancements.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of June 16–22, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of June 16–22, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Created create preset page and fixed UI issues</li>
                  <li>Sheng Yue: Added gesture creation logic and saved coordinates to CSV</li>
                  <li>JJ: Set up preset page and model training button</li>
                  <li>Rohith: Created unit test cases and suites</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Set up preset page and model training button.<br />
                  <strong>Sheng Yue:</strong> Added gesture creation with CSV coordinate saving.<br />
                  <strong>Rohith:</strong> Preprocessed EgoGesture dataset for model training.<br />
                  <strong>Malcolm:</strong> Built create preset page, fixing UI issues.<br />
                  <strong>Yukin:</strong> Drafted website design with gaming theme inspiration.<br />
                  <strong>Leong:</strong> Cross-checked use case descriptions for accuracy.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Tested app flow, finalized “Create Gestures,” and achieved 80% model accuracy.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of June 9–15, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of June 9–15, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>JJ: Updated start.py for dual-hand tracking and added .gitignore</li>
                  <li>Sheng Yue: Improved “How to Use” page with images and back button</li>
                  <li>Malcolm: Added change preset functionality and “How to Use” page</li>
                  <li>Rohith: Updated model training code</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Enhanced dual-hand tracking for gesture detection.<br />
                  <strong>Sheng Yue:</strong> Improved “How to Use” page for better UX.<br />
                  <strong>Rohith:</strong> Improved model accuracy to 80% with 3D CNN.<br />
                  <strong>Malcolm:</strong> Added change preset functionality and “How to Use” page.<br />
                  <strong>Yukin:</strong> Contributed to website’s essential page designs.<br />
                  <strong>Leong:</strong> Completed use case diagrams for demo preparation.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Planned demo with gesture recognition and assigned preset bug fixes.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of June 2–8, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of June 2–8, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>JJ: Created gesture page</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Created gesture page despite minor issues.<br />
                  <strong>Sheng Yue:</strong> Researched TensorFlow for gesture integration.<br />
                  <strong>Rohith:</strong> Finalized EgoGesture dataset for model robustness.<br />
                  <strong>Malcolm:</strong> Planned preset page work amid exam prep.<br />
                  <strong>Yukin:</strong> Drafted user story diagrams for technical report.<br />
                  <strong>Leong:</strong> Started use case descriptions for system behavior.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed user stories, finalized EgoGesture dataset, and planned demo tasks.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of May 26–June 1, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of May 26–June 1, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Updated preset page to use frames instead of toplevel</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Planned gesture page setup during exam break.<br />
                  <strong>Sheng Yue:</strong> Researched custom Tkinter for UI design.<br />
                  <strong>Rohith:</strong> Built basic CNN model for gesture datasets.<br />
                  <strong>Malcolm:</strong> Improved preset page UI with frames.<br />
                  <strong>Yukin:</strong> Studied user stories for technical documentation.<br />
                  <strong>Leong:</strong> Revised user stories for technical report.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed front-end edits, “How to Use” page, and dataset. Adjusted pace for exams.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of May 19–25, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of May 19–25, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>JJ: Updated preset page with buttons</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Updated main menu and preset page per wireframe.<br />
                  <strong>Sheng Yue:</strong> Developed settings page GUI using Tkinter.<br />
                  <strong>Rohith:</strong> Researched CNNs and datasets for gestures.<br />
                  <strong>Malcolm:</strong> Planned UI work despite other module deadlines.<br />
                  <strong>Yukin:</strong> Drafted PRD sections on stakeholders and ethics.<br />
                  <strong>Leong:</strong> Finalized Gantt chart and market analysis.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed PRD feedback, planned menu and settings updates, and discussed gesture tools.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of May 12–18, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of May 12–18, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Added UI for change preset page</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Finalized PRD structure with documenters.<br />
                  <strong>Sheng Yue:</strong> Learned Tkinter for settings page GUI.<br />
                  <strong>Rohith:</strong> Researched MediaPipe and gesture datasets.<br />
                  <strong>Malcolm:</strong> Added change preset page UI per wireframe.<br />
                  <strong>Yukin:</strong> Finalized PRD Agile methodology section.<br />
                  <strong>Leong:</strong> Revised PRD based on feedback, focusing on goals.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Finalized user stories, stretch goals, and ML-based gesture algorithm improvements.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of May 5–11, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of May 5–11, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Malcolm: Added initial UI for the app</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Structured PRD with documenters for clarity.<br />
                  <strong>Sheng Yue:</strong> Researched Tkinter and OpenCV for GUI integration.<br />
                  <strong>Rohith:</strong> Studied CNNs for gesture recognition.<br />
                  <strong>Malcolm:</strong> Started app UI with Tkinter per wireframe.<br />
                  <strong>Yukin:</strong> Drafted PRD sections on stakeholders and ethics.<br />
                  <strong>Leong:</strong> Completed Gantt chart and market analysis for PRD.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Reviewed PRD feedback, planned GUI and gesture tools (Tkinter, OpenCV, MediaPipe).
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of April 28–May 4, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of April 28–May 4, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>No commits this week</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Researched Tkinter and OpenCV for app development.<br />
                  <strong>Sheng Yue:</strong> Studied OpenCV and MediaPipe for hand tracking.<br />
                  <strong>Rohith:</strong> Explored ML datasets for gesture recognition.<br />
                  <strong>Malcolm:</strong> Suggested rhythm and RPG genres for gestures.<br />
                  <strong>Yukin:</strong> Drafted PRD development methodology section.<br />
                  <strong>Leong:</strong> Worked on Gantt chart and market research.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Discussed wireframe and user stories, assigned PRD tasks to team members.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of April 21–27, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of April 21–27, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>Yukin: Created README.md and initialized repository</li>
                  <li>Malcolm: Added initial settings and GWBHands files</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Clarified project scope and started PRD.<br />
                  <strong>Sheng Yue:</strong> Researched hand tracking tools with team.<br />
                  <strong>Rohith:</strong> Began ML research for gesture recognition.<br />
                  <strong>Malcolm:</strong> Suggested genres and started settings UI.<br />
                  <strong>Yukin:</strong> Researched MediaPipe and drafted PRD methodology.<br />
                  <strong>Leong:</strong> Contributed Gantt chart and market analysis to PRD.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Discussed FYP with Andrew, researched gesture tools, and confirmed website requirements.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of April 14–20, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of April 14–20, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>No commits this week</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Conducted PRD quality checks for clarity.<br />
                  <strong>Sheng Yue:</strong> Drafted user stories for gesture UX.<br />
                  <strong>Rohith:</strong> Explored ML datasets for gesture recognition.<br />
                  <strong>Malcolm:</strong> Drafted wireframe for app UI.<br />
                  <strong>Yukin:</strong> Contributed to PRD methodology section.<br />
                  <strong>Leong:</strong> Worked on Gantt chart and market analysis.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Discussed wireframe and user stories, assigned PRD tasks for team members.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Week of April 7–13, 2025 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold mb-4 text-pink-400">Week of April 7–13, 2025</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-xl font-bold mb-4">Commits</h4>
                <ul className="list-disc list-inside text-white/80">
                  <li>No commits this week</li>
                </ul>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-xl font-bold mb-4">Team Reflections</h4>
                <p className="text-white/80">
                  <strong>JJ:</strong> Researched project requirements and tools.<br />
                  <strong>Sheng Yue:</strong> Familiarized with team and project goals.<br />
                  <strong>Rohith:</strong> Explored ML algorithms for gestures.<br />
                  <strong>Malcolm:</strong> Researched game genres for gesture controls.<br />
                  <strong>Yukin:</strong> Studied MediaPipe and OpenCV for PRD.<br />
                  <strong>Leong:</strong> Initiated market research for PRD.
                </p>
              </motion.div>
              <motion.div
                className="bg-white/5 p-6 rounded-xl shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Meeting Minutes</h4>
                <p className="text-white/80">
                  Met with Andrew to discuss FYP, researched gesture tools, and confirmed website requirements.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DevLog;