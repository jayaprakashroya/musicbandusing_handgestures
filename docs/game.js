function _array_like_to_array(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
	return arr2;
}
function _array_with_holes(arr) {
	if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	try {
		var info = gen[key](arg);
		var value = info.value;
	} catch (error) {
		reject(error);
		return;
	}
	if (info.done) {
		resolve(value);
	} else {
		Promise.resolve(value).then(_next, _throw);
	}
}
function _async_to_generator(fn) {
	return function() {
		var self = this, args = arguments;
		return new Promise(function(resolve, reject) {
			var gen = fn.apply(self, args);
			function _next(value) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
			}
			function _throw(err) {
				asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
			}
			_next(undefined);
		});
	};
}
function _class_call_check(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}
function _defineProperties(target, props) {
	for(var i = 0; i < props.length; i++){
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, descriptor.key, descriptor);
	}
}
function _create_class(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	return Constructor;
}
function _define_property(obj, key, value) {
	if (key in obj) {
		Object.defineProperty(obj, key, {
			value: value,
			enumerable: true,
			configurable: true,
			writable: true
		});
	} else {
		obj[key] = value;
	}
	return obj;
}
function _iterable_to_array_limit(arr, i) {
	var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	if (_i == null) return;
	var _arr = [];
	var _n = true;
	var _d = false;
	var _s, _e;
	try {
		for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
			_arr.push(_s.value);
			if (i && _arr.length === i) break;
		}
	} catch (err) {
		_d = true;
		_e = err;
	} finally{
		try {
			if (!_n && _i["return"] != null) _i["return"]();
		} finally{
			if (_d) throw _e;
		}
	}
	return _arr;
}
function _non_iterable_rest() {
	throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
	for(var i = 1; i < arguments.length; i++){
		var source = arguments[i] != null ? arguments[i] : {};
		var ownKeys = Object.keys(source);
		if (typeof Object.getOwnPropertySymbols === "function") {
			ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
				return Object.getOwnPropertyDescriptor(source, sym).enumerable;
			}));
		}
		ownKeys.forEach(function(key) {
			_define_property(target, key, source[key]);
		});
	}
	return target;
}
function _sliced_to_array(arr, i) {
	return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _array_like_to_array(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(n);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
	var f, y, t, g, _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	};
	return g = {
		next: verb(0),
		"throw": verb(1),
		"return": verb(2)
	}, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([
				n,
				v
			]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while(_)try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [
				op[0] & 2,
				t.value
			];
			switch(op[0]){
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [
						0
					];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [
				6,
				e
			];
			y = 0;
		} finally{
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
import * as THREE from 'three';
import { MusicManager } from './MusicManager.js'; // Import the MusicManager
export var Game = /*#__PURE__*/ function() {
	"use strict";
	function Game(renderDiv) {
		var _this = this;
		_class_call_check(this, Game);
		this.renderDiv = renderDiv;
		this.scene = null;
		this.camera = null;
		this.renderer = null;
		this.videoElement = null;
		this.handLandmarker = null;
		this.lastVideoTime = -1;
		this.hands = []; // Stores data about detected hands (landmarks, anchor position, line group)
		this.handLineMaterial = null; // Material for hand lines
		this.fingertipMaterialHand1 = null; // Material for first hand's fingertip circles (blue)
		this.fingertipMaterialHand2 = null; // Material for second hand's fingertip circles (green)
		this.fingertipLandmarkIndices = [
			0,
			4,
			8,
			12,
			16,
			20
		]; // WRIST + TIP landmarks
		this.handConnections = null; // Landmark connection definitions
		// this.handCollisionRadius = 30; // Conceptual radius for hand collision, was 25 (sphere radius) - Not needed for template
		this.gameState = 'loading'; // loading, ready, tracking, error
		this.gameOverText = null; // Will be repurposed or simplified
		this.clock = new THREE.Clock();
		this.musicManager = new MusicManager(); // Create an instance of MusicManager
		this.waveformVisualizer = null; // To be initialized
		// this.drumManager = new DrumManager(); // DrumManager is now a static module, no instance needed
		this.lastLandmarkPositions = [
			[],
			[]
		]; // Store last known smoothed positions for each hand's landmarks
		this.smoothingFactor = 0.4; // Alpha for exponential smoothing (0 < alpha <= 1). Smaller = more smoothing.
		this.loadedModels = {}; // To store loaded models if any (e.g. a generic hand model in future)
		this.beatIndicators = []; // Array to hold the 16 beat indicator meshes
		this.beatIndicatorMaterials = []; // Array to hold the base material for each indicator
		this.beatIndicatorColors = {
			kick: new THREE.Color("#c03838ff"),
			snare: new THREE.Color("#d5c9c4ff"),
			clap: new THREE.Color("#851db6ff"),
			hihat: new THREE.Color("#84C34E"),
			off: new THREE.Color("#7d3232ff") // Off state remains white
		};
		this.beatIndicatorGroup = null; // Group to hold all indicators for easy repositioning
		this.labelColors = {
			evaPurple: {
				r: 123,
				g: 67,
				b: 148,
				a: 0.9
			},
			evaGreen: {
				r: 132,
				g: 195,
				b: 78,
				a: 0.9
			},
			evaOrange: {
				r: 243,
				g: 110,
				b: 47,
				a: 0.9
			},
			evaRed: {
				r: 215,
				g: 40,
				b: 40,
				a: 0.9
			},
			white: {
				r: 255,
				g: 255,
				b: 255,
				a: 1.0
			},
			black: {
				r: 0,
				g: 0,
				b: 0,
				a: 1.0
			}
		};
		this.waveformColors = [
			new THREE.Color("#7B4394"),
			new THREE.Color("#84C34E"),
			new THREE.Color("#F36E2F"),
			new THREE.Color("#D72828"),
			new THREE.Color("#66ffff")
		];
		// Initialize asynchronously
		this._init().catch(function(error) {
			console.error("Initialization failed:", error);
			_this._showError("Initialization failed. Check console.");
		});
	}
	_create_class(Game, [
		{
			key: "_init",
			value: function _init() {
				var _this = this;
				return _async_to_generator(function() {
					return _ts_generator(this, function(_state) {
						switch(_state.label){
							case 0:
								_this._setupDOM(); // Sets up basic DOM, including speech bubble container
								_this._setupThree();
								return [
									4,
									_this._loadAssets()
								];
							case 1:
								_state.sent(); // Add asset loading step
								return [
									4,
									_this._setupHandTracking()
								];
							case 2:
								_state.sent(); // This needs to complete before we can proceed
								// Ensure webcam is playing before starting game logic dependent on it
								return [
									4,
									_this.videoElement.play()
								];
							case 3:
								_state.sent();
								window.addEventListener('resize', _this._onResize.bind(_this));
								_this._startGame(); // Start the game directly
								_this._setupEventListeners(); // Set up interaction listeners
								_this._animate(); // Start the animation loop (it will check state)
								return [
									2
								];
						}
					});
				})();
			}
		},
		// Additional methods and logic should be defined here as needed for the Game class.
	]);
	return Game;
}();
