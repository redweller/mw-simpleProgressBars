local logger = require("logging.logger")

local mod = {}
local this = {}
local log = {}

this.init = function(MDIR)
	mod = require(MDIR .. ".lib.mod")

	log = logger.new{
		name = mod.id,
		logLevel = mod.config.logLevel,
		logToConsole = mod.config.logToConsole == "BOTH",
		includeTimestamp = mod.config.logTimestamps,
	}

	local inject = function (id)
		return function(self, str)
			if (type(self) ~= "table") then str = self end
			return log[id](log, str)
		end
	end

	local setLogParam = function (self, id, val)
		if (type(self) ~= "table") then id, val = self, id end
		log[id] = val
	end

	this.trace = inject("trace")
	this.debug = inject("debug")
	this.info = inject("info")
	this.warn = inject("warn")
	this.error = inject("error")
	
	this.setLogLevel = inject("setLogLevel")
	this.setLogParam = setLogParam

	if mod.id ~= MDIR then
		log:warn("Mod ID doesn't match modInfo.lua")
	end

	return this
end

return this
