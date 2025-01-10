const fs = require ('fs');

const mw = "path to your Morrowind installation";
const id = "Simple Progress Bars";

const path = mw.slice(-1) === "\\"
	? `${mw}Data Files\\MWSE\\`
	: `${mw}\\Data Files\\MWSE\\`;

const mods = `${path}\\mods\\${id}`;
const conf = `${path}\\config\\${id}.json`;

if (fs.existsSync(path)) {
	console.log("Morrowind directory found. Uninstalling mod");
	fs.rmSync(mods, {recursive: true, force: true});
	fs.rmSync(conf, {force: true});
} else {
	console.log("Morrowind directory not found");
}

console.log("Finished");
