/**
 * main.js — App Entry Point
 * Imports and mounts all components (mirrors React's main.jsx pattern).
 */

import { Navbar }     from './components/Navbar.js';
import { CarDisplay } from './components/CarDisplay.js';
import { Footer }     from './components/Footer.js';

// ── Mount Components ────────────────────────────────────────────────────
Navbar();
CarDisplay();
Footer();
