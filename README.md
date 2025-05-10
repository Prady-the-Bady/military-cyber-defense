# WarGuard Defense System

A high-fidelity military-grade cybersecurity simulation that visualizes intrusion detection, attack patterns, and countermeasures deployment through an immersive interface.

![WarGuard Defense System](https://i.imgur.com/example.png)

## Overview

The WarGuard Defense System is an interactive web-based simulation that recreates a military command center during a cybersecurity attack scenario. It features real-time visualization of network compromises, AI-powered defense systems, and interactive command terminal interfaces.

## Features

- **Interactive Military Dashboard**: Realistic command-center interface with secure/compromised status indicators
- **Dynamic Map Visualization**: Geographical network representation with interactive nodes showing attack vectors
- **Real-time Attack Visualization**: Visual representation of malware injection with screen flickers and attack traces
- **Military-grade UI Elements**: Film grain effect, scan lines, and authentic military styling
- **Interactive Terminal**: Command-line interface that accepts user input for deploying countermeasures
- **Sound Effects**: Ambient audio, alarm sounds, and keyboard feedback
- **AI Defense System**: Animated boot sequence and threat analysis visualizations
- **Interactive Features**: Press ENTER to trigger the intrusion and enter "BTF" (case-insensitive) in the terminal to deploy countermeasures

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/warguard-defense-system.git
   cd warguard-defense-system
   ```

2. No additional dependencies needed! This project uses vanilla HTML, CSS, and JavaScript.

## How to Run

### Method 1: Using a local web server

1. Start a simple HTTP server (if you have Python installed):
   ```
   # For Python 3.x
   python -m http.server 8080
   
   # For Python 2.x
   python -m SimpleHTTPServer 8080
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

### Method 2: Direct file opening

Simply open the `index.html` file in your web browser by double-clicking it or using the browser's "Open File" option.

## Usage Instructions

1. When the simulation starts, you'll see the military dashboard with secure status indicators
2. After a few seconds, you'll see a yellow warning prompting you to "Press ENTER to start the intrusion"
3. Press the ENTER key to trigger the intrusion detection sequence
4. Watch as the system detects unauthorized access and initializes defense protocols
5. When the command terminal appears, type "BTF" (case-insensitive) and press ENTER to deploy countermeasures
6. Observe the counter-attack sequence and system lockdown

## Key Interactive Elements

- **Skip Intro Button**: Click to skip to the command terminal phase
- **Fullscreen Toggle**: Click to enter/exit fullscreen mode
- **ENTER Key**: Press to trigger the intrusion detection sequence
- **BTF Command**: Type in the command terminal to deploy countermeasures

## File Structure

- `index.html`: Main HTML structure of the application
- `styles.css`: CSS styling for all components and animations
- `script.js`: JavaScript handling all interactions and animation sequences
- `fullscreen.html`: Alternative entry point with fullscreen prompt
- `standalone.html`: Launcher page with options to open in new tab or fullscreen

## Technologies Used

- HTML5
- CSS3 (with advanced animations and effects)
- Vanilla JavaScript (ES6+)
- Font Awesome icons

## Browser Compatibility

Tested and optimized for:
- Google Chrome 80+
- Mozilla Firefox 75+
- Microsoft Edge 80+
- Safari 13+

## Credits

- Font Awesome for icons
- Military UI inspiration from authentic command interfaces
- Audio effects from various royalty-free sources
