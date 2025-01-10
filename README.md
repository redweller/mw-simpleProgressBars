# Simple Progress Bars

Have you ever wondered how long it's gonna take you to rise the next level in Athletics? Sometimes it seems to take forever to level up while running or swimming somewhere. Or were you curious when your shiny cuirass would be destroyed? It's sometimes hard to keep track of things during a heated fight. And you need to open the character menu and hover the skill/item each time you want to check it. Well, now you don't need to.

## Progress bars

This mod can add progress-bars to your Morrowind HUD to show various stats and skills progress on screen without the hassle of browsing through menus. The supported progress-bar values are:

* Progress to skill level-up*, skill info on mouseover
* Armor condition (by slot)*, item info on mouseover
* Character stats, including the following
	* Progress to next level up (current / 10)
	* Current encumbrance value (current / max)
	* Reputation (dynamically scaled)
	* Bounty (dynamically scaled)
	* Effective armor rating (current / max with 100% condition)
	* Armor rating to Unarmored (current / max unarmored)
	* Armor piece in worst condition*, armor summary on mouseover

## Timers

Values marked with * can display estimated time left to skill level up or to armor destruction next to the corresponding bar. The timer is updated each second and represents simple extrapolation of your recent activities. It may be inaccurate, but for steady activities such as running or constant jumping / cast spell spam it is fairly reliable.

To enable timers functionality, switch on the countdowns option in Mod config menu. The timers will show up automatically, after enough consecutive value changes are registered.

___

## Usage

### Requirements

This simple mod uses Morrowind Script Extender lua to work. Install MGE XE and run "MWSE-Update.exe" from the game folder to make sure it's functional. The skills and items are updated from the active game files, so it would probably work with any custom ones. Armor slots and character stats lists are fixed and use vanilla formulas for calculations.

Obviously, this won't work on OpenMW.

### Installation

Unzip the archive to Morrowind "Data Files" folder or use your favorite mod manager to install from NEXUS. You may also clone this repo, add path to your Morrowind installation to node\install.js and run it.

### Configuration

In the included MCM settings menu you can configure bars position, size and layout. The settings are applied as you change them, so simply move the sliders to see where you want the bars to be displayed.

Important note: **NO BARS** are shown by default on a fresh install. To see anything added by this mod, you have to select the bars from from the list in "Select bars" MCM tab first. Some bars won't show if the appropriate content is unavailable, e.g. the boots condition bar won't show if you don't have any boots equipped, and "Worst condition armor" won't show up if you don't have any armor equipped, and so on.

### Uninstall

Remove or rename the main.lua file. To completely remove the mod, delete the "Simple Progress Bars" from the MWSE\mods folder and remove json file from the MWSE\config directory. There is also a MCM configuration option to temporarily disable the mod.

___

### Included translations

This mod is fully translation-ready and utilizes MWSE's translation system. The primary language is English, with French and Russian translations already included
