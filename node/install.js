const fs = require ('fs');

const mw = "path to your Morrowind installation";
const id = "Simple Progress Bars";

const path = mw.slice(-1) === "\\"
	? `${mw}Data Files\\MWSE\\mods`
	: `${mw}\\Data Files\\MWSE\\mods`;

const src = `MWSE\\mods\\${id}`;
const dest = `${path}\\${id}`;

if (fs.existsSync(path)) {
	console.log("Morrowind directory found. Installing mod");
	fs.rmSync(dest, {recursive: true, force: true});
	fs.cpSync(src, dest, {recursive: true})
} else {
	console.log("Morrowind directory not found")
}

console.log("Finished");
