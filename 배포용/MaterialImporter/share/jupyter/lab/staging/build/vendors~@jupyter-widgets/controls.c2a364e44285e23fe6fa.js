(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~@jupyter-widgets/controls"],{

/***/ "+RhG":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_bool.js ***!
  \*******************************************************************/
/*! exports provided: BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return BoolModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return CheckboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return CheckboxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return ToggleButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return ToggleButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return ValidModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return ValidView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BoolModel = /** @class */ (function (_super) {
    __extends(BoolModel, _super);
    function BoolModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoolModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: false,
            disabled: false,
            _model_name: 'BoolModel'
        });
    };
    return BoolModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxModel = /** @class */ (function (_super) {
    __extends(CheckboxModel, _super);
    function CheckboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            indent: true,
            _view_name: 'CheckboxView',
            _model_name: 'CheckboxModel'
        });
    };
    return CheckboxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var CheckboxView = /** @class */ (function (_super) {
    __extends(CheckboxView, _super);
    function CheckboxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    CheckboxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-checkbox');
        // adding a zero-width space to the label to help
        // the browser set the baseline correctly
        this.label.innerHTML = '&#8203;';
        // label containing the checkbox and description span
        this.checkboxLabel = document.createElement('label');
        this.checkboxLabel.classList.add('widget-label-basic');
        this.el.appendChild(this.checkboxLabel);
        // checkbox
        this.checkbox = document.createElement('input');
        this.checkbox.setAttribute('type', 'checkbox');
        this.checkboxLabel.appendChild(this.checkbox);
        // span to the right of the checkbox that will render the description
        this.descriptionSpan = document.createElement('span');
        this.checkboxLabel.appendChild(this.descriptionSpan);
        this.listenTo(this.model, 'change:indent', this.updateIndent);
        this.update(); // Set defaults.
        this.updateDescription();
        this.updateIndent();
    };
    /**
     * Overriden from super class
     *
     * Update the description span (rather than the label) since
     * we want the description to the right of the checkbox.
     */
    CheckboxView.prototype.updateDescription = function () {
        // can be called before the view is fully initialized
        if (this.checkboxLabel == null) {
            return;
        }
        var description = this.model.get('description');
        this.descriptionSpan.innerHTML = description;
        this.typeset(this.descriptionSpan);
        this.descriptionSpan.title = description;
        this.checkbox.title = description;
    };
    /**
     * Update the visibility of the label in the super class
     * to provide the optional indent.
     */
    CheckboxView.prototype.updateIndent = function () {
        var indent = this.model.get('indent');
        this.label.style.display = indent ? '' : 'none';
    };
    CheckboxView.prototype.events = function () {
        return {
            'click input[type="checkbox"]': '_handle_click'
        };
    };
    /**
     * Handles when the checkbox is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    CheckboxView.prototype._handle_click = function () {
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    CheckboxView.prototype.update = function (options) {
        this.checkbox.checked = this.model.get('value');
        if (options === undefined || options.updated_view != this) {
            this.checkbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    return CheckboxView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonModel = /** @class */ (function (_super) {
    __extends(ToggleButtonModel, _super);
    function ToggleButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'ToggleButtonView',
            _model_name: 'ToggleButtonModel',
            tooltip: '',
            icon: '',
            button_style: ''
        });
    };
    return ToggleButtonModel;
}(BoolModel));

var ToggleButtonView = /** @class */ (function (_super) {
    __extends(ToggleButtonView, _super);
    function ToggleButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ToggleButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-toggle-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    ToggleButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    ToggleButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ToggleButtonView.class_map, 'button_style');
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonView.prototype.update = function (options) {
        if (this.model.get('value')) {
            this.el.classList.add('mod-active');
        }
        else {
            this.el.classList.remove('mod-active');
        }
        if (options === undefined || options.updated_view !== this) {
            this.el.disabled = this.model.get('disabled');
            this.el.setAttribute('title', this.model.get('tooltip'));
            var description = this.model.get('description');
            var icon = this.model.get('icon');
            if (description.trim().length === 0 && icon.trim().length === 0) {
                this.el.innerHTML = '&nbsp;'; // Preserve button height
            }
            else {
                this.el.textContent = '';
                if (icon.trim().length) {
                    var i = document.createElement('i');
                    this.el.appendChild(i);
                    i.classList.add('fa');
                    i.classList.add('fa-' + icon);
                }
                this.el.appendChild(document.createTextNode(description));
            }
        }
        return _super.prototype.update.call(this);
    };
    ToggleButtonView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'click': '_handle_click'
        };
    };
    /**
     * Handles and validates user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        var value = this.model.get('value');
        this.model.set('value', !value, { updated_view: this });
        this.touch();
    };
    Object.defineProperty(ToggleButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ToggleButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ToggleButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));

var ValidModel = /** @class */ (function (_super) {
    __extends(ValidModel, _super);
    function ValidModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            readout: 'Invalid',
            _view_name: 'ValidView',
            _model_name: 'ValidModel'
        });
    };
    return ValidModel;
}(BoolModel));

var ValidView = /** @class */ (function (_super) {
    __extends(ValidView, _super);
    function ValidView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ValidView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-valid');
        this.el.classList.add('widget-inline-hbox');
        var icon = document.createElement('i');
        this.el.appendChild(icon);
        this.readout = document.createElement('span');
        this.readout.classList.add('widget-valid-readout');
        this.readout.classList.add('widget-readout');
        this.el.appendChild(this.readout);
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ValidView.prototype.update = function () {
        this.el.classList.remove('mod-valid');
        this.el.classList.remove('mod-invalid');
        this.readout.textContent = this.model.get('readout');
        if (this.model.get('value')) {
            this.el.classList.add('mod-valid');
        }
        else {
            this.el.classList.add('mod-invalid');
        }
    };
    return ValidView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));



/***/ }),

/***/ "01zH":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_upload.js ***!
  \*********************************************************************/
/*! exports provided: FileUploadModel, FileUploadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return FileUploadModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return FileUploadView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var FileUploadModel = /** @class */ (function (_super) {
    __extends(FileUploadModel, _super);
    function FileUploadModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileUploadModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FileUploadModel',
            _view_name: 'FileUploadView',
            _counter: 0,
            accept: '',
            description: 'Upload',
            tooltip: '',
            disabled: false,
            icon: 'upload',
            button_style: '',
            multiple: false,
            metadata: [],
            data: [],
            error: '',
            style: null
        });
    };
    FileUploadModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { data: { serialize: function (buffers) { return buffers.slice(); } } });
    return FileUploadModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

var FileUploadView = /** @class */ (function (_super) {
    __extends(FileUploadView, _super);
    function FileUploadView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FileUploadView.prototype, "tagName", {
        get: function () {
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    FileUploadView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-upload');
        this.el.classList.add('jupyter-button');
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';
        this.fileInput.style.display = 'none';
        this.el.appendChild(this.fileInput);
        this.el.addEventListener('click', function () {
            _this.fileInput.click();
        });
        this.fileInput.addEventListener('click', function () {
            _this.fileInput.value = '';
        });
        this.fileInput.addEventListener('change', function () {
            var promisesFile = [];
            Array.from(_this.fileInput.files).forEach(function (file) {
                promisesFile.push(new Promise(function (resolve, reject) {
                    var metadata = {
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        lastModified: file.lastModified,
                    };
                    _this.fileReader = new FileReader();
                    _this.fileReader.onload = function (event) {
                        var buffer = event.target.result;
                        resolve({
                            buffer: buffer,
                            metadata: metadata,
                            error: '',
                        });
                    };
                    _this.fileReader.onerror = function () {
                        reject();
                    };
                    _this.fileReader.onabort = _this.fileReader.onerror;
                    _this.fileReader.readAsArrayBuffer(file);
                }));
            });
            Promise.all(promisesFile)
                .then(function (contents) {
                var metadata = [];
                var li_buffer = [];
                contents.forEach(function (c) {
                    metadata.push(c.metadata);
                    li_buffer.push(c.buffer);
                });
                var counter = _this.model.get('_counter');
                _this.model.set({
                    _counter: counter + contents.length,
                    metadata: metadata,
                    data: li_buffer,
                    error: '',
                });
                _this.touch();
            })
                .catch(function (err) {
                console.error('error in file upload: %o', err);
                _this.model.set({
                    error: err,
                });
                _this.touch();
            });
        });
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    FileUploadView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description') + " (" + this.model.get('_counter') + ")";
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        this.fileInput.accept = this.model.get('accept');
        this.fileInput.multiple = this.model.get('multiple');
        return _super.prototype.update.call(this);
    };
    FileUploadView.prototype.update_button_style = function () {
        this.update_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.prototype.set_button_style = function () {
        this.set_mapped_classes(FileUploadView.class_map, 'button_style', this.el);
    };
    FileUploadView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return FileUploadView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "0c3I":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_core.js ***!
  \*******************************************************************/
/*! exports provided: CoreWidgetModel, CoreDOMWidgetModel, CoreDescriptionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreWidgetModel", function() { return CoreWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDOMWidgetModel", function() { return CoreDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDescriptionModel", function() { return CoreDescriptionModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// widget_core implements some common patterns for the core widget collection
// that are not to be used directly by third-party widget authors.




var CoreWidgetModel = /** @class */ (function (_super) {
    __extends(CoreWidgetModel, _super);
    function CoreWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WidgetModel"]));

var CoreDOMWidgetModel = /** @class */ (function (_super) {
    __extends(CoreDOMWidgetModel, _super);
    function CoreDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDOMWidgetModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDOMWidgetModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDOMWidgetModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var CoreDescriptionModel = /** @class */ (function (_super) {
    __extends(CoreDescriptionModel, _super);
    function CoreDescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CoreDescriptionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'CoreDescriptionModel',
            _view_module: '@jupyter-widgets/controls',
            _model_module: '@jupyter-widgets/controls',
            _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    return CoreDescriptionModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionModel"]));



/***/ }),

/***/ "0pQw":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_controller.js ***!
  \*************************************************************************/
/*! exports provided: ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return ControllerButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return ControllerButtonView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return ControllerAxisModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return ControllerAxisView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return ControllerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return ControllerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var ControllerButtonModel = /** @class */ (function (_super) {
    __extends(ControllerButtonModel, _super);
    function ControllerButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerButtonModel',
            _view_name: 'ControllerButtonView',
            value: 0.0,
            pressed: false
        });
    };
    return ControllerButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad button.
 */
var ControllerButtonView = /** @class */ (function (_super) {
    __extends(ControllerButtonView, _super);
    function ControllerButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerButtonView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-button');
        this.el.style.width = 'fit-content';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '16px';
        this.support.style.height = '16px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.el.appendChild(this.support);
        this.bar = document.createElement('div');
        this.bar.style.position = 'absolute';
        this.bar.style.width = '100%';
        this.bar.style.bottom = '0px';
        this.bar.style.background = 'gray';
        this.support.appendChild(this.bar);
        this.update();
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.el.appendChild(this.label);
    };
    ControllerButtonView.prototype.update = function () {
        this.bar.style.height = (100 * this.model.get('value')) + '%';
    };
    return ControllerButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerAxisModel = /** @class */ (function (_super) {
    __extends(ControllerAxisModel, _super);
    function ControllerAxisModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerAxisModel',
            _view_name: 'ControllerAxisView',
            value: 0.0
        });
    };
    return ControllerAxisModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * Very simple view for a gamepad axis.
 */
var ControllerAxisView = /** @class */ (function (_super) {
    __extends(ControllerAxisView, _super);
    function ControllerAxisView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerAxisView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller-axis');
        this.el.style.width = '16px';
        this.el.style.padding = '4px';
        this.support = document.createElement('div');
        this.support.style.position = 'relative';
        this.support.style.margin = '1px';
        this.support.style.width = '4px';
        this.support.style.height = '64px';
        this.support.style.border = '1px solid black';
        this.support.style.background = 'lightgray';
        this.bullet = document.createElement('div');
        this.bullet.style.position = 'absolute';
        this.bullet.style.margin = '-3px';
        this.bullet.style.boxSizing = 'unset';
        this.bullet.style.width = '10px';
        this.bullet.style.height = '10px';
        this.bullet.style.background = 'gray';
        this.label = document.createElement('div');
        this.label.textContent = this.model.get('description');
        this.label.style.textAlign = 'center';
        this.support.appendChild(this.bullet);
        this.el.appendChild(this.support);
        this.el.appendChild(this.label);
        this.update();
    };
    ControllerAxisView.prototype.update = function () {
        this.bullet.style.top = (50 * (this.model.get('value') + 1)) + '%';
    };
    return ControllerAxisView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));

var ControllerModel = /** @class */ (function (_super) {
    __extends(ControllerModel, _super);
    function ControllerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_4__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ControllerModel',
            _view_name: 'ControllerView',
            index: 0,
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0,
            buttons: [],
            axes: []
        });
    };
    ControllerModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        if (navigator.getGamepads === void 0) {
            // Checks if the browser supports the gamepad API
            this.readout = 'This browser does not support gamepads.';
            console.error(this.readout);
        }
        else {
            // Start the wait loop, and listen to updates of the only
            // user-provided attribute, the gamepad index.
            this.readout = 'Connect gamepad and press any button.';
            if (this.get('connected')) {
                // No need to re-create Button and Axis widgets, re-use
                // the models provided by the backend which may already
                // be wired to other things.
                this.update_loop();
            }
            else {
                // Wait for a gamepad to be connected.
                this.wait_loop();
            }
        }
    };
    /**
     * Waits for a gamepad to be connected at the provided index.
     * Once one is connected, it will start the update loop, which
     * populates the update of axes and button values.
     */
    ControllerModel.prototype.wait_loop = function () {
        var index = this.get('index');
        var pad = navigator.getGamepads()[index];
        if (pad) {
            var that_1 = this;
            this.setup(pad).then(function (controls) {
                that_1.set(controls);
                that_1.save_changes();
                window.requestAnimationFrame(that_1.update_loop.bind(that_1));
            });
        }
        else {
            window.requestAnimationFrame(this.wait_loop.bind(this));
        }
    };
    /**
     * Given a native gamepad object, returns a promise for a dictionary of
     * controls, of the form
     * {
     *     buttons: list of Button models,
     *     axes: list of Axis models,
     * }
     */
    ControllerModel.prototype.setup = function (pad) {
        // Set up the main gamepad attributes
        this.set({
            name: pad.id,
            mapping: pad.mapping,
            connected: pad.connected,
            timestamp: pad.timestamp
        });
        // Create buttons and axes. When done, start the update loop
        var that = this;
        return _utils__WEBPACK_IMPORTED_MODULE_5__["resolvePromisesDict"]({
            buttons: Promise.all(pad.buttons.map(function (btn, index) {
                return that._create_button_model(index);
            })),
            axes: Promise.all(pad.axes.map(function (axis, index) {
                return that._create_axis_model(index);
            })),
        });
    };
    /**
     * Update axes and buttons values, until the gamepad is disconnected.
     * When the gamepad is disconnected, this.reset_gamepad is called.
     */
    ControllerModel.prototype.update_loop = function () {
        var index = this.get('index');
        var id = this.get('name');
        var pad = navigator.getGamepads()[index];
        if (pad && index === pad.index && id === pad.id) {
            this.set({
                timestamp: pad.timestamp,
                connected: pad.connected
            });
            this.save_changes();
            this.get('buttons').forEach(function (model, index) {
                model.set({
                    value: pad.buttons[index].value,
                    pressed: pad.buttons[index].pressed
                });
                model.save_changes();
            });
            this.get('axes').forEach(function (model, index) {
                model.set('value', pad.axes[index]);
                model.save_changes();
            });
            window.requestAnimationFrame(this.update_loop.bind(this));
        }
        else {
            this.reset_gamepad();
        }
    };
    /**
     * Resets the gamepad attributes, and start the wait_loop.
     */
    ControllerModel.prototype.reset_gamepad = function () {
        this.get('buttons').forEach(function (button) {
            button.close();
        });
        this.get('axes').forEach(function (axis) {
            axis.close();
        });
        this.set({
            name: '',
            mapping: '',
            connected: false,
            timestamp: 0.0,
            buttons: [],
            axes: []
        });
        this.save_changes();
        window.requestAnimationFrame(this.wait_loop.bind(this));
    };
    /**
     * Creates a gamepad button widget.
     */
    ControllerModel.prototype._create_button_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerButtonModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerButtonView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    /**
     * Creates a gamepad axis widget.
     */
    ControllerModel.prototype._create_axis_model = function (index) {
        return this.widget_manager.new_widget({
            model_name: 'ControllerAxisModel',
            model_module: '@jupyter-widgets/controls',
            model_module_version: this.get('_model_module_version'),
            view_name: 'ControllerAxisView',
            view_module: '@jupyter-widgets/controls',
            view_module_version: this.get('_view_module_version'),
        }).then(function (model) {
            model.set('description', index);
            return model;
        });
    };
    ControllerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"].serializers, { buttons: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] }, axes: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["unpack_models"] } });
    return ControllerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDOMWidgetModel"]));

/**
 * A simple view for a gamepad.
 */
var ControllerView = /** @class */ (function (_super) {
    __extends(ControllerView, _super);
    function ControllerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ControllerView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    ControllerView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_6___default()(this.pWidget.node);
    };
    ControllerView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.button_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_button, null, this);
        this.listenTo(this.model, 'change:buttons', function (model, value) {
            this.button_views.update(value);
        });
        this.axis_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["ViewList"](this.add_axis, null, this);
        this.listenTo(this.model, 'change:axes', function (model, value) {
            this.axis_views.update(value);
        });
        this.listenTo(this.model, 'change:name', this.update_label);
    };
    ControllerView.prototype.render = function () {
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-controller');
        this.label = document.createElement('div');
        this.el.appendChild(this.label);
        this.axis_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.axis_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.axis_box);
        this.button_box = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        this.button_box.node.style.display = 'flex';
        this.pWidget.addWidget(this.button_box);
        this.button_views.update(this.model.get('buttons'));
        this.axis_views.update(this.model.get('axes'));
        this.update_label();
    };
    ControllerView.prototype.update_label = function () {
        this.label.textContent = this.model.get('name') || this.model.readout;
    };
    ControllerView.prototype.add_button = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.button_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.button_box.widgets, dummy);
            _this.button_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child button view to controller', true));
    };
    ControllerView.prototype.add_axis = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        this.axis_box.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.axis_box.widgets, dummy);
            _this.axis_box.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_5__["reject"]('Could not add child axis view to controller', true));
    };
    ControllerView.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this.button_views.remove();
        this.axis_views.remove();
    };
    return ControllerView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_1__["DOMWidgetView"]));



/***/ }),

/***/ "1OD8":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_description.js ***!
  \**************************************************************************/
/*! exports provided: DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return DescriptionStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return DescriptionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return DescriptionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return LabeledDOMWidgetModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return LabeledDOMWidgetView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var DescriptionStyleModel = /** @class */ (function (_super) {
    __extends(DescriptionStyleModel, _super);
    function DescriptionStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionStyleModel', _model_module: '@jupyter-widgets/controls', _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"] });
    };
    DescriptionStyleModel.styleProperties = {
        description_width: {
            selector: '.widget-label',
            attribute: 'width',
            default: null
        },
    };
    return DescriptionStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var DescriptionModel = /** @class */ (function (_super) {
    __extends(DescriptionModel, _super);
    function DescriptionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DescriptionModel', _view_name: 'DescriptionView', _view_module: '@jupyter-widgets/controls', _model_module: '@jupyter-widgets/controls', _view_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"], description: '', description_tooltip: null });
    };
    return DescriptionModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetModel"]));

var DescriptionView = /** @class */ (function (_super) {
    __extends(DescriptionView, _super);
    function DescriptionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DescriptionView.prototype.render = function () {
        this.label = document.createElement('label');
        this.el.appendChild(this.label);
        this.label.className = 'widget-label';
        this.label.style.display = 'none';
        this.listenTo(this.model, 'change:description', this.updateDescription);
        this.listenTo(this.model, 'change:description_tooltip', this.updateDescription);
        this.updateDescription();
    };
    DescriptionView.prototype.typeset = function (element, text) {
        this.displayed.then(function () { return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["typeset"])(element, text); });
    };
    DescriptionView.prototype.updateDescription = function () {
        var description = this.model.get('description');
        var description_tooltip = this.model.get('description_tooltip');
        if (description_tooltip === null) {
            description_tooltip = description;
        }
        if (description.length === 0) {
            this.label.style.display = 'none';
        }
        else {
            this.label.innerHTML = description;
            this.typeset(this.label);
            this.label.style.display = '';
        }
        this.label.title = description_tooltip;
    };
    return DescriptionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionModel instead.
 */
var LabeledDOMWidgetModel = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetModel, _super);
    function LabeledDOMWidgetModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetModel;
}(DescriptionModel));

/**
 * For backwards compatibility with jupyter-js-widgets 2.x.
 *
 * Use DescriptionView instead.
 */
var LabeledDOMWidgetView = /** @class */ (function (_super) {
    __extends(LabeledDOMWidgetView, _super);
    function LabeledDOMWidgetView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LabeledDOMWidgetView;
}(DescriptionView));



/***/ }),

/***/ "2TPD":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "2Ynt":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "2tFh":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "p/1U");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "4IhH":
/*!**************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/accordion.js ***!
  \**************************************************************************/
/*! exports provided: Collapse, Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return Collapse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _currentselection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currentselection */ "XIYl");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The class name added to Collapse instances.
 */
var COLLAPSE_CLASS = 'p-Collapse';
/**
 * The class name added to a Collapse's header.
 */
var COLLAPSE_HEADER_CLASS = 'p-Collapse-header';
/**
 * The class name added to a Collapse's contents.
 */
var COLLAPSE_CONTENTS_CLASS = 'p-Collapse-contents';
/**
 * The class name added to a Collapse when it is opened
 */
var COLLAPSE_CLASS_OPEN = 'p-Collapse-open';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse(options) {
        var _this = _super.call(this, options) || this;
        _this._collapseChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass(COLLAPSE_CLASS);
        _this._header = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]();
        _this._header.addClass(COLLAPSE_HEADER_CLASS);
        _this._header.node.addEventListener('click', _this);
        _this._content = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]();
        _this._content.addClass(COLLAPSE_CONTENTS_CLASS);
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["PanelLayout"]();
        _this.layout = layout;
        layout.addWidget(_this._header);
        layout.addWidget(_this._content);
        if (options.widget) {
            _this.widget = options.widget;
        }
        _this.collapsed = false;
        return _this;
    }
    Collapse.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        this._header = null;
        this._widget = null;
        this._content = null;
    };
    Object.defineProperty(Collapse.prototype, "widget", {
        get: function () {
            return this._widget;
        },
        set: function (widget) {
            var oldWidget = this._widget;
            if (oldWidget) {
                oldWidget.disposed.disconnect(this._onChildDisposed, this);
                oldWidget.title.changed.disconnect(this._onTitleChanged, this);
                oldWidget.parent = null;
            }
            this._widget = widget;
            widget.disposed.connect(this._onChildDisposed, this);
            widget.title.changed.connect(this._onTitleChanged, this);
            this._onTitleChanged(widget.title);
            this._content.addWidget(widget);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collapse.prototype, "collapsed", {
        get: function () {
            return this._collapsed;
        },
        set: function (value) {
            // TODO: should we have this check here?
            if (value === this._collapsed) {
                return;
            }
            if (value) {
                this._collapse();
            }
            else {
                this._uncollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.toggle = function () {
        this.collapsed = !this.collapsed;
    };
    Object.defineProperty(Collapse.prototype, "collapseChanged", {
        get: function () {
            return this._collapseChanged;
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype._collapse = function () {
        this._collapsed = true;
        if (this._content) {
            this._content.hide();
        }
        this.removeClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    Collapse.prototype._uncollapse = function () {
        this._collapsed = false;
        if (this._content) {
            this._content.show();
        }
        this.addClass(COLLAPSE_CLASS_OPEN);
        this._collapseChanged.emit(void 0);
    };
    /**
     * Handle the DOM events for the Collapse widget.
     *
     * @param event - The DOM event sent to the panel.
     *
     * #### Notes
     * This method implements the DOM `EventListener` interface and is
     * called in response to events on the panel's DOM node. It should
     * not be called directly by user code.
     */
    Collapse.prototype.handleEvent = function (event) {
        switch (event.type) {
            case 'click':
                this._evtClick(event);
                break;
            default:
                break;
        }
    };
    Collapse.prototype._evtClick = function (event) {
        this.toggle();
    };
    /**
     * Handle the `changed` signal of a title object.
     */
    Collapse.prototype._onTitleChanged = function (sender) {
        this._header.node.textContent = this._widget.title.label;
    };
    Collapse.prototype._onChildDisposed = function (sender) {
        this.dispose();
    };
    return Collapse;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Widget"]));

/**
 * The class name added to Accordion instances.
 */
var ACCORDION_CLASS = 'p-Accordion';
/**
 * The class name added to an Accordion child.
 */
var ACCORDION_CHILD_CLASS = 'p-Accordion-child';
var ACCORDION_CHILD_ACTIVE_CLASS = 'p-Accordion-child-active';
/**
 * A panel that supports a collapsible header, made from the widget's title.
 * Clicking on the title expands or contracts the widget.
 */
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(options) {
        var _this = _super.call(this, options) || this;
        _this._selection = new _currentselection__WEBPACK_IMPORTED_MODULE_3__["Selection"](_this.widgets);
        _this._selection.selectionChanged.connect(_this._onSelectionChanged, _this);
        _this.addClass(ACCORDION_CLASS);
        return _this;
    }
    Object.defineProperty(Accordion.prototype, "collapseWidgets", {
        /**
         * A read-only sequence of the widgets in the panel.
         *
         * #### Notes
         * This is a read-only property.
         */
        /*  get widgets(): ISequence<Widget> {
            return new ArraySequence(toArray(map((this.layout as PanelLayout).widgets, (w: Collapse) => w.widget)));
          }
        */
        get: function () {
            return this.layout.widgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Accordion.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        enumerable: true,
        configurable: true
    });
    Accordion.prototype.indexOf = function (widget) {
        return _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].findFirstIndex(this.collapseWidgets, function (w) { return w.widget === widget; });
    };
    /**
     * Add a widget to the end of the accordion.
     *
     * @param widget - The widget to add to the accordion.
     *
     * @returns The Collapse widget wrapping the added widget.
     *
     * #### Notes
     * The widget will be wrapped in a CollapsedWidget.
     */
    Accordion.prototype.addWidget = function (widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.addWidget.call(this, collapse);
        this._selection.adjustSelectionForInsert(this.widgets.length - 1, collapse);
        return collapse;
    };
    /**
     * Insert a widget at the specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the accordion.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     */
    Accordion.prototype.insertWidget = function (index, widget) {
        var collapse = this._wrapWidget(widget);
        collapse.collapsed = true;
        _super.prototype.insertWidget.call(this, index, collapse);
        this._selection.adjustSelectionForInsert(index, collapse);
    };
    Accordion.prototype.removeWidget = function (widget) {
        var index = this.indexOf(widget);
        if (index >= 0) {
            var collapse = this.collapseWidgets[index];
            widget.parent = null;
            collapse.dispose();
            this._selection.adjustSelectionForRemove(index, null);
        }
    };
    Accordion.prototype._wrapWidget = function (widget) {
        var collapse = new Collapse({ widget: widget });
        collapse.addClass(ACCORDION_CHILD_CLASS);
        collapse.collapseChanged.connect(this._onCollapseChange, this);
        return collapse;
    };
    Accordion.prototype._onCollapseChange = function (sender) {
        if (!sender.collapsed) {
            this._selection.value = sender;
        }
        else if (this._selection.value === sender && sender.collapsed) {
            this._selection.value = null;
        }
    };
    Accordion.prototype._onSelectionChanged = function (sender, change) {
        // Collapse previous widget, open current widget
        var pv = change.previousValue;
        var cv = change.currentValue;
        if (pv) {
            pv.collapsed = true;
            pv.removeClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
        if (cv) {
            cv.collapsed = false;
            cv.addClass(ACCORDION_CHILD_ACTIVE_CLASS);
        }
    };
    return Accordion;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_2__["Panel"]));



/***/ }),

/***/ "AUoe":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "CbjS":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  this.fill = match[1] || " ";
  this.align = match[2] || ">";
  this.sign = match[3] || "-";
  this.symbol = match[4] || "";
  this.zero = !!match[5];
  this.width = match[6] && +match[6];
  this.comma = !!match[7];
  this.precision = match[8] && +match[8].slice(1);
  this.trim = !!match[9];
  this.type = match[10] || "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "EUnC":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "EjHT":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale */ "sXBl");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "JMIS":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_button.js ***!
  \*********************************************************************/
/*! exports provided: ButtonStyleModel, ButtonModel, ButtonView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return ButtonStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return ButtonModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return ButtonView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ButtonStyleModel = /** @class */ (function (_super) {
    __extends(ButtonStyleModel, _super);
    function ButtonStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ButtonStyleModel',
            _model_module: '@jupyter-widgets/controls',
            _model_module_version: _version__WEBPACK_IMPORTED_MODULE_2__["JUPYTER_CONTROLS_VERSION"],
        });
    };
    ButtonStyleModel.styleProperties = {
        button_color: {
            selector: '',
            attribute: 'background-color',
            default: null
        },
        font_weight: {
            selector: '',
            attribute: 'font-weight',
            default: ''
        }
    };
    return ButtonStyleModel;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["StyleModel"]));

var ButtonModel = /** @class */ (function (_super) {
    __extends(ButtonModel, _super);
    function ButtonModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            description: '',
            tooltip: '',
            disabled: false,
            icon: '',
            button_style: '',
            _view_name: 'ButtonView',
            _model_name: 'ButtonModel',
            style: null
        });
    };
    return ButtonModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ButtonView = /** @class */ (function (_super) {
    __extends(ButtonView, _super);
    function ButtonView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    ButtonView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('jupyter-button');
        this.el.classList.add('widget-button');
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
        this.set_button_style();
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ButtonView.prototype.update = function () {
        this.el.disabled = this.model.get('disabled');
        this.el.setAttribute('title', this.model.get('tooltip'));
        var description = this.model.get('description');
        var icon = this.model.get('icon');
        if (description.length || icon.length) {
            this.el.textContent = '';
            if (icon.length) {
                var i = document.createElement('i');
                i.classList.add('fa');
                i.classList.add('fa-' + icon);
                if (description.length === 0) {
                    i.classList.add('center');
                }
                this.el.appendChild(i);
            }
            this.el.appendChild(document.createTextNode(description));
        }
        return _super.prototype.update.call(this);
    };
    ButtonView.prototype.update_button_style = function () {
        this.update_mapped_classes(ButtonView.class_map, 'button_style');
    };
    ButtonView.prototype.set_button_style = function () {
        this.set_mapped_classes(ButtonView.class_map, 'button_style');
    };
    /**
     * Dictionary of events and handlers
     */
    ButtonView.prototype.events = function () {
        // TODO: return typing not needed in Typescript later than 1.8.x
        // See http://stackoverflow.com/questions/22077023/why-cant-i-indirectly-return-an-object-literal-to-satisfy-an-index-signature-re and https://github.com/Microsoft/TypeScript/pull/7029
        return { 'click': '_handle_click' };
    };
    /**
     * Handles when the button is clicked.
     */
    ButtonView.prototype._handle_click = function (event) {
        event.preventDefault();
        this.send({ event: 'click' });
    };
    Object.defineProperty(ButtonView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'button';
        },
        enumerable: true,
        configurable: true
    });
    ButtonView.class_map = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
    return ButtonView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "MIQu":
/*!*********************************************!*\
  !*** ./node_modules/jquery-ui/ui/widget.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var widgetUuid = 0;
var widgetSlice = Array.prototype.slice;

$.cleanData = ( function( orig ) {
	return function( elems ) {
		var events, elem, i;
		for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
			try {

				// Only trigger remove when necessary to save time
				events = $._data( elem, "events" );
				if ( events && events.remove ) {
					$( elem ).triggerHandler( "remove" );
				}

			// Http://bugs.jquery.com/ticket/8235
			} catch ( e ) {}
		}
		orig( elems );
	};
} )( $.cleanData );

$.widget = function( name, base, prototype ) {
	var existingConstructor, constructor, basePrototype;

	// ProxiedPrototype allows the provided prototype to remain unmodified
	// so that it can be used as a mixin for multiple widgets (#8876)
	var proxiedPrototype = {};

	var namespace = name.split( "." )[ 0 ];
	name = name.split( "." )[ 1 ];
	var fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	if ( $.isArray( prototype ) ) {
		prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
	}

	// Create selector for plugin
	$.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
		return !!$.data( elem, fullName );
	};

	$[ namespace ] = $[ namespace ] || {};
	existingConstructor = $[ namespace ][ name ];
	constructor = $[ namespace ][ name ] = function( options, element ) {

		// Allow instantiation without "new" keyword
		if ( !this._createWidget ) {
			return new constructor( options, element );
		}

		// Allow instantiation without initializing for simple inheritance
		// must use "new" keyword (the code above always passes args)
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	// Extend with the existing constructor to carry over any static properties
	$.extend( constructor, existingConstructor, {
		version: prototype.version,

		// Copy the object used to create the prototype in case we need to
		// redefine the widget later
		_proto: $.extend( {}, prototype ),

		// Track widgets that inherit from this widget in case this widget is
		// redefined after a widget inherits from it
		_childConstructors: []
	} );

	basePrototype = new base();

	// We need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
	basePrototype.options = $.widget.extend( {}, basePrototype.options );
	$.each( prototype, function( prop, value ) {
		if ( !$.isFunction( value ) ) {
			proxiedPrototype[ prop ] = value;
			return;
		}
		proxiedPrototype[ prop ] = ( function() {
			function _super() {
				return base.prototype[ prop ].apply( this, arguments );
			}

			function _superApply( args ) {
				return base.prototype[ prop ].apply( this, args );
			}

			return function() {
				var __super = this._super;
				var __superApply = this._superApply;
				var returnValue;

				this._super = _super;
				this._superApply = _superApply;

				returnValue = value.apply( this, arguments );

				this._super = __super;
				this._superApply = __superApply;

				return returnValue;
			};
		} )();
	} );
	constructor.prototype = $.widget.extend( basePrototype, {

		// TODO: remove support for widgetEventPrefix
		// always use the name + a colon as the prefix, e.g., draggable:start
		// don't prefix for widgets that aren't DOM-based
		widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
	}, proxiedPrototype, {
		constructor: constructor,
		namespace: namespace,
		widgetName: name,
		widgetFullName: fullName
	} );

	// If this widget is being redefined then we need to find all widgets that
	// are inheriting from it and redefine all of them so that they inherit from
	// the new version of this widget. We're essentially trying to replace one
	// level in the prototype chain.
	if ( existingConstructor ) {
		$.each( existingConstructor._childConstructors, function( i, child ) {
			var childPrototype = child.prototype;

			// Redefine the child widget using the same prototype that was
			// originally used, but inherit from the new version of the base
			$.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
				child._proto );
		} );

		// Remove the list of existing child constructors from the old constructor
		// so the old child constructors can be garbage collected
		delete existingConstructor._childConstructors;
	} else {
		base._childConstructors.push( constructor );
	}

	$.widget.bridge( name, constructor );

	return constructor;
};

$.widget.extend = function( target ) {
	var input = widgetSlice.call( arguments, 1 );
	var inputIndex = 0;
	var inputLength = input.length;
	var key;
	var value;

	for ( ; inputIndex < inputLength; inputIndex++ ) {
		for ( key in input[ inputIndex ] ) {
			value = input[ inputIndex ][ key ];
			if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

				// Clone objects
				if ( $.isPlainObject( value ) ) {
					target[ key ] = $.isPlainObject( target[ key ] ) ?
						$.widget.extend( {}, target[ key ], value ) :

						// Don't extend strings, arrays, etc. with objects
						$.widget.extend( {}, value );

				// Copy everything else by reference
				} else {
					target[ key ] = value;
				}
			}
		}
	}
	return target;
};

$.widget.bridge = function( name, object ) {
	var fullName = object.prototype.widgetFullName || name;
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string";
		var args = widgetSlice.call( arguments, 1 );
		var returnValue = this;

		if ( isMethodCall ) {

			// If this is an empty collection, we need to have the instance method
			// return undefined instead of the jQuery instance
			if ( !this.length && options === "instance" ) {
				returnValue = undefined;
			} else {
				this.each( function() {
					var methodValue;
					var instance = $.data( this, fullName );

					if ( options === "instance" ) {
						returnValue = instance;
						return false;
					}

					if ( !instance ) {
						return $.error( "cannot call methods on " + name +
							" prior to initialization; " +
							"attempted to call method '" + options + "'" );
					}

					if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
						return $.error( "no such method '" + options + "' for " + name +
							" widget instance" );
					}

					methodValue = instance[ options ].apply( instance, args );

					if ( methodValue !== instance && methodValue !== undefined ) {
						returnValue = methodValue && methodValue.jquery ?
							returnValue.pushStack( methodValue.get() ) :
							methodValue;
						return false;
					}
				} );
			}
		} else {

			// Allow multiple hashes to be passed on init
			if ( args.length ) {
				options = $.widget.extend.apply( null, [ options ].concat( args ) );
			}

			this.each( function() {
				var instance = $.data( this, fullName );
				if ( instance ) {
					instance.option( options || {} );
					if ( instance._init ) {
						instance._init();
					}
				} else {
					$.data( this, fullName, new object( options, this ) );
				}
			} );
		}

		return returnValue;
	};
};

$.Widget = function( /* options, element */ ) {};
$.Widget._childConstructors = [];

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	defaultElement: "<div>",

	options: {
		classes: {},
		disabled: false,

		// Callbacks
		create: null
	},

	_createWidget: function( options, element ) {
		element = $( element || this.defaultElement || this )[ 0 ];
		this.element = $( element );
		this.uuid = widgetUuid++;
		this.eventNamespace = "." + this.widgetName + this.uuid;

		this.bindings = $();
		this.hoverable = $();
		this.focusable = $();
		this.classesElementLookup = {};

		if ( element !== this ) {
			$.data( element, this.widgetFullName, this );
			this._on( true, this.element, {
				remove: function( event ) {
					if ( event.target === element ) {
						this.destroy();
					}
				}
			} );
			this.document = $( element.style ?

				// Element within the document
				element.ownerDocument :

				// Element is window or document
				element.document || element );
			this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
		}

		this.options = $.widget.extend( {},
			this.options,
			this._getCreateOptions(),
			options );

		this._create();

		if ( this.options.disabled ) {
			this._setOptionDisabled( this.options.disabled );
		}

		this._trigger( "create", null, this._getCreateEventData() );
		this._init();
	},

	_getCreateOptions: function() {
		return {};
	},

	_getCreateEventData: $.noop,

	_create: $.noop,

	_init: $.noop,

	destroy: function() {
		var that = this;

		this._destroy();
		$.each( this.classesElementLookup, function( key, value ) {
			that._removeClass( value, key );
		} );

		// We can probably remove the unbind calls in 2.0
		// all event bindings should go through this._on()
		this.element
			.off( this.eventNamespace )
			.removeData( this.widgetFullName );
		this.widget()
			.off( this.eventNamespace )
			.removeAttr( "aria-disabled" );

		// Clean up events and states
		this.bindings.off( this.eventNamespace );
	},

	_destroy: $.noop,

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;
		var parts;
		var curOption;
		var i;

		if ( arguments.length === 0 ) {

			// Don't return a reference to the internal hash
			return $.widget.extend( {}, this.options );
		}

		if ( typeof key === "string" ) {

			// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
			options = {};
			parts = key.split( "." );
			key = parts.shift();
			if ( parts.length ) {
				curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
				for ( i = 0; i < parts.length - 1; i++ ) {
					curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
					curOption = curOption[ parts[ i ] ];
				}
				key = parts.pop();
				if ( arguments.length === 1 ) {
					return curOption[ key ] === undefined ? null : curOption[ key ];
				}
				curOption[ key ] = value;
			} else {
				if ( arguments.length === 1 ) {
					return this.options[ key ] === undefined ? null : this.options[ key ];
				}
				options[ key ] = value;
			}
		}

		this._setOptions( options );

		return this;
	},

	_setOptions: function( options ) {
		var key;

		for ( key in options ) {
			this._setOption( key, options[ key ] );
		}

		return this;
	},

	_setOption: function( key, value ) {
		if ( key === "classes" ) {
			this._setOptionClasses( value );
		}

		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this._setOptionDisabled( value );
		}

		return this;
	},

	_setOptionClasses: function( value ) {
		var classKey, elements, currentElements;

		for ( classKey in value ) {
			currentElements = this.classesElementLookup[ classKey ];
			if ( value[ classKey ] === this.options.classes[ classKey ] ||
					!currentElements ||
					!currentElements.length ) {
				continue;
			}

			// We are doing this to create a new jQuery object because the _removeClass() call
			// on the next line is going to destroy the reference to the current elements being
			// tracked. We need to save a copy of this collection so that we can add the new classes
			// below.
			elements = $( currentElements.get() );
			this._removeClass( currentElements, classKey );

			// We don't use _addClass() here, because that uses this.options.classes
			// for generating the string of classes. We want to use the value passed in from
			// _setOption(), this is the new value of the classes option which was passed to
			// _setOption(). We pass this value directly to _classes().
			elements.addClass( this._classes( {
				element: elements,
				keys: classKey,
				classes: value,
				add: true
			} ) );
		}
	},

	_setOptionDisabled: function( value ) {
		this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

		// If the widget is becoming disabled, then nothing is interactive
		if ( value ) {
			this._removeClass( this.hoverable, null, "ui-state-hover" );
			this._removeClass( this.focusable, null, "ui-state-focus" );
		}
	},

	enable: function() {
		return this._setOptions( { disabled: false } );
	},

	disable: function() {
		return this._setOptions( { disabled: true } );
	},

	_classes: function( options ) {
		var full = [];
		var that = this;

		options = $.extend( {
			element: this.element,
			classes: this.options.classes || {}
		}, options );

		function processClassString( classes, checkOption ) {
			var current, i;
			for ( i = 0; i < classes.length; i++ ) {
				current = that.classesElementLookup[ classes[ i ] ] || $();
				if ( options.add ) {
					current = $( $.unique( current.get().concat( options.element.get() ) ) );
				} else {
					current = $( current.not( options.element ).get() );
				}
				that.classesElementLookup[ classes[ i ] ] = current;
				full.push( classes[ i ] );
				if ( checkOption && options.classes[ classes[ i ] ] ) {
					full.push( options.classes[ classes[ i ] ] );
				}
			}
		}

		this._on( options.element, {
			"remove": "_untrackClassesElement"
		} );

		if ( options.keys ) {
			processClassString( options.keys.match( /\S+/g ) || [], true );
		}
		if ( options.extra ) {
			processClassString( options.extra.match( /\S+/g ) || [] );
		}

		return full.join( " " );
	},

	_untrackClassesElement: function( event ) {
		var that = this;
		$.each( that.classesElementLookup, function( key, value ) {
			if ( $.inArray( event.target, value ) !== -1 ) {
				that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
			}
		} );
	},

	_removeClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, false );
	},

	_addClass: function( element, keys, extra ) {
		return this._toggleClass( element, keys, extra, true );
	},

	_toggleClass: function( element, keys, extra, add ) {
		add = ( typeof add === "boolean" ) ? add : extra;
		var shift = ( typeof element === "string" || element === null ),
			options = {
				extra: shift ? keys : extra,
				keys: shift ? element : keys,
				element: shift ? this.element : element,
				add: add
			};
		options.element.toggleClass( this._classes( options ), add );
		return this;
	},

	_on: function( suppressDisabledCheck, element, handlers ) {
		var delegateElement;
		var instance = this;

		// No suppressDisabledCheck flag, shuffle arguments
		if ( typeof suppressDisabledCheck !== "boolean" ) {
			handlers = element;
			element = suppressDisabledCheck;
			suppressDisabledCheck = false;
		}

		// No element argument, shuffle and use this.element
		if ( !handlers ) {
			handlers = element;
			element = this.element;
			delegateElement = this.widget();
		} else {
			element = delegateElement = $( element );
			this.bindings = this.bindings.add( element );
		}

		$.each( handlers, function( event, handler ) {
			function handlerProxy() {

				// Allow widgets to customize the disabled handling
				// - disabled as an array instead of boolean
				// - disabled class as method for disabling individual parts
				if ( !suppressDisabledCheck &&
						( instance.options.disabled === true ||
						$( this ).hasClass( "ui-state-disabled" ) ) ) {
					return;
				}
				return ( typeof handler === "string" ? instance[ handler ] : handler )
					.apply( instance, arguments );
			}

			// Copy the guid so direct unbinding works
			if ( typeof handler !== "string" ) {
				handlerProxy.guid = handler.guid =
					handler.guid || handlerProxy.guid || $.guid++;
			}

			var match = event.match( /^([\w:-]*)\s*(.*)$/ );
			var eventName = match[ 1 ] + instance.eventNamespace;
			var selector = match[ 2 ];

			if ( selector ) {
				delegateElement.on( eventName, selector, handlerProxy );
			} else {
				element.on( eventName, handlerProxy );
			}
		} );
	},

	_off: function( element, eventName ) {
		eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
			this.eventNamespace;
		element.off( eventName ).off( eventName );

		// Clear the stack to avoid memory leaks (#10056)
		this.bindings = $( this.bindings.not( element ).get() );
		this.focusable = $( this.focusable.not( element ).get() );
		this.hoverable = $( this.hoverable.not( element ).get() );
	},

	_delay: function( handler, delay ) {
		function handlerProxy() {
			return ( typeof handler === "string" ? instance[ handler ] : handler )
				.apply( instance, arguments );
		}
		var instance = this;
		return setTimeout( handlerProxy, delay || 0 );
	},

	_hoverable: function( element ) {
		this.hoverable = this.hoverable.add( element );
		this._on( element, {
			mouseenter: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
			},
			mouseleave: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
			}
		} );
	},

	_focusable: function( element ) {
		this.focusable = this.focusable.add( element );
		this._on( element, {
			focusin: function( event ) {
				this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
			},
			focusout: function( event ) {
				this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
			}
		} );
	},

	_trigger: function( type, event, data ) {
		var prop, orig;
		var callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();

		// The original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// Copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );
		return !( $.isFunction( callback ) &&
			callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
			event.isDefaultPrevented() );
	}
};

$.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
	$.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
		if ( typeof options === "string" ) {
			options = { effect: options };
		}

		var hasOptions;
		var effectName = !options ?
			method :
			options === true || typeof options === "number" ?
				defaultEffect :
				options.effect || defaultEffect;

		options = options || {};
		if ( typeof options === "number" ) {
			options = { duration: options };
		}

		hasOptions = !$.isEmptyObject( options );
		options.complete = callback;

		if ( options.delay ) {
			element.delay( options.delay );
		}

		if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
			element[ method ]( options );
		} else if ( effectName !== method && element[ effectName ] ) {
			element[ effectName ]( options.duration, options.easing, callback );
		} else {
			element.queue( function( next ) {
				$( this )[ method ]();
				if ( callback ) {
					callback.call( element[ 0 ] );
				}
				next();
			} );
		}
	};
} );

return $.widget;

} ) );


/***/ }),

/***/ "NHgk":
/*!*****************************************!*\
  !*** ./node_modules/jquery-ui/ui/ie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

// This file is deprecated
return $.ui.ie = !!/msie [\w.]+/.exec( navigator.userAgent.toLowerCase() );
} ) );


/***/ }),

/***/ "P3jZ":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "qnQu");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "QBwY":
/*!*****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/slider.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Slider 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Slider
//>>group: Widgets
//>>description: Displays a flexible slider with ranges and accessibility via keyboard.
//>>docs: http://api.jqueryui.com/slider/
//>>demos: http://jqueryui.com/slider/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/slider.css
//>>css.theme: ../../themes/base/theme.css

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ./mouse */ "iGnl"),
			__webpack_require__(/*! ../keycode */ "vBzC"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

return $.widget( "ui.slider", $.ui.mouse, {
	version: "1.12.1",
	widgetEventPrefix: "slide",

	options: {
		animate: false,
		classes: {
			"ui-slider": "ui-corner-all",
			"ui-slider-handle": "ui-corner-all",

			// Note: ui-widget-header isn't the most fittingly semantic framework class for this
			// element, but worked best visually with a variety of themes
			"ui-slider-range": "ui-corner-all ui-widget-header"
		},
		distance: 0,
		max: 100,
		min: 0,
		orientation: "horizontal",
		range: false,
		step: 1,
		value: 0,
		values: null,

		// Callbacks
		change: null,
		slide: null,
		start: null,
		stop: null
	},

	// Number of pages in a slider
	// (how many times can you page up/down to go through the whole range)
	numPages: 5,

	_create: function() {
		this._keySliding = false;
		this._mouseSliding = false;
		this._animateOff = true;
		this._handleIndex = null;
		this._detectOrientation();
		this._mouseInit();
		this._calculateNewMax();

		this._addClass( "ui-slider ui-slider-" + this.orientation,
			"ui-widget ui-widget-content" );

		this._refresh();

		this._animateOff = false;
	},

	_refresh: function() {
		this._createRange();
		this._createHandles();
		this._setupEvents();
		this._refreshValue();
	},

	_createHandles: function() {
		var i, handleCount,
			options = this.options,
			existingHandles = this.element.find( ".ui-slider-handle" ),
			handle = "<span tabindex='0'></span>",
			handles = [];

		handleCount = ( options.values && options.values.length ) || 1;

		if ( existingHandles.length > handleCount ) {
			existingHandles.slice( handleCount ).remove();
			existingHandles = existingHandles.slice( 0, handleCount );
		}

		for ( i = existingHandles.length; i < handleCount; i++ ) {
			handles.push( handle );
		}

		this.handles = existingHandles.add( $( handles.join( "" ) ).appendTo( this.element ) );

		this._addClass( this.handles, "ui-slider-handle", "ui-state-default" );

		this.handle = this.handles.eq( 0 );

		this.handles.each( function( i ) {
			$( this )
				.data( "ui-slider-handle-index", i )
				.attr( "tabIndex", 0 );
		} );
	},

	_createRange: function() {
		var options = this.options;

		if ( options.range ) {
			if ( options.range === true ) {
				if ( !options.values ) {
					options.values = [ this._valueMin(), this._valueMin() ];
				} else if ( options.values.length && options.values.length !== 2 ) {
					options.values = [ options.values[ 0 ], options.values[ 0 ] ];
				} else if ( $.isArray( options.values ) ) {
					options.values = options.values.slice( 0 );
				}
			}

			if ( !this.range || !this.range.length ) {
				this.range = $( "<div>" )
					.appendTo( this.element );

				this._addClass( this.range, "ui-slider-range" );
			} else {
				this._removeClass( this.range, "ui-slider-range-min ui-slider-range-max" );

				// Handle range switching from true to min/max
				this.range.css( {
					"left": "",
					"bottom": ""
				} );
			}
			if ( options.range === "min" || options.range === "max" ) {
				this._addClass( this.range, "ui-slider-range-" + options.range );
			}
		} else {
			if ( this.range ) {
				this.range.remove();
			}
			this.range = null;
		}
	},

	_setupEvents: function() {
		this._off( this.handles );
		this._on( this.handles, this._handleEvents );
		this._hoverable( this.handles );
		this._focusable( this.handles );
	},

	_destroy: function() {
		this.handles.remove();
		if ( this.range ) {
			this.range.remove();
		}

		this._mouseDestroy();
	},

	_mouseCapture: function( event ) {
		var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
			that = this,
			o = this.options;

		if ( o.disabled ) {
			return false;
		}

		this.elementSize = {
			width: this.element.outerWidth(),
			height: this.element.outerHeight()
		};
		this.elementOffset = this.element.offset();

		position = { x: event.pageX, y: event.pageY };
		normValue = this._normValueFromMouse( position );
		distance = this._valueMax() - this._valueMin() + 1;
		this.handles.each( function( i ) {
			var thisDistance = Math.abs( normValue - that.values( i ) );
			if ( ( distance > thisDistance ) ||
				( distance === thisDistance &&
					( i === that._lastChangedValue || that.values( i ) === o.min ) ) ) {
				distance = thisDistance;
				closestHandle = $( this );
				index = i;
			}
		} );

		allowed = this._start( event, index );
		if ( allowed === false ) {
			return false;
		}
		this._mouseSliding = true;

		this._handleIndex = index;

		this._addClass( closestHandle, null, "ui-state-active" );
		closestHandle.trigger( "focus" );

		offset = closestHandle.offset();
		mouseOverHandle = !$( event.target ).parents().addBack().is( ".ui-slider-handle" );
		this._clickOffset = mouseOverHandle ? { left: 0, top: 0 } : {
			left: event.pageX - offset.left - ( closestHandle.width() / 2 ),
			top: event.pageY - offset.top -
				( closestHandle.height() / 2 ) -
				( parseInt( closestHandle.css( "borderTopWidth" ), 10 ) || 0 ) -
				( parseInt( closestHandle.css( "borderBottomWidth" ), 10 ) || 0 ) +
				( parseInt( closestHandle.css( "marginTop" ), 10 ) || 0 )
		};

		if ( !this.handles.hasClass( "ui-state-hover" ) ) {
			this._slide( event, index, normValue );
		}
		this._animateOff = true;
		return true;
	},

	_mouseStart: function() {
		return true;
	},

	_mouseDrag: function( event ) {
		var position = { x: event.pageX, y: event.pageY },
			normValue = this._normValueFromMouse( position );

		this._slide( event, this._handleIndex, normValue );

		return false;
	},

	_mouseStop: function( event ) {
		this._removeClass( this.handles, null, "ui-state-active" );
		this._mouseSliding = false;

		this._stop( event, this._handleIndex );
		this._change( event, this._handleIndex );

		this._handleIndex = null;
		this._clickOffset = null;
		this._animateOff = false;

		return false;
	},

	_detectOrientation: function() {
		this.orientation = ( this.options.orientation === "vertical" ) ? "vertical" : "horizontal";
	},

	_normValueFromMouse: function( position ) {
		var pixelTotal,
			pixelMouse,
			percentMouse,
			valueTotal,
			valueMouse;

		if ( this.orientation === "horizontal" ) {
			pixelTotal = this.elementSize.width;
			pixelMouse = position.x - this.elementOffset.left -
				( this._clickOffset ? this._clickOffset.left : 0 );
		} else {
			pixelTotal = this.elementSize.height;
			pixelMouse = position.y - this.elementOffset.top -
				( this._clickOffset ? this._clickOffset.top : 0 );
		}

		percentMouse = ( pixelMouse / pixelTotal );
		if ( percentMouse > 1 ) {
			percentMouse = 1;
		}
		if ( percentMouse < 0 ) {
			percentMouse = 0;
		}
		if ( this.orientation === "vertical" ) {
			percentMouse = 1 - percentMouse;
		}

		valueTotal = this._valueMax() - this._valueMin();
		valueMouse = this._valueMin() + percentMouse * valueTotal;

		return this._trimAlignValue( valueMouse );
	},

	_uiHash: function( index, value, values ) {
		var uiHash = {
			handle: this.handles[ index ],
			handleIndex: index,
			value: value !== undefined ? value : this.value()
		};

		if ( this._hasMultipleValues() ) {
			uiHash.value = value !== undefined ? value : this.values( index );
			uiHash.values = values || this.values();
		}

		return uiHash;
	},

	_hasMultipleValues: function() {
		return this.options.values && this.options.values.length;
	},

	_start: function( event, index ) {
		return this._trigger( "start", event, this._uiHash( index ) );
	},

	_slide: function( event, index, newVal ) {
		var allowed, otherVal,
			currentValue = this.value(),
			newValues = this.values();

		if ( this._hasMultipleValues() ) {
			otherVal = this.values( index ? 0 : 1 );
			currentValue = this.values( index );

			if ( this.options.values.length === 2 && this.options.range === true ) {
				newVal =  index === 0 ? Math.min( otherVal, newVal ) : Math.max( otherVal, newVal );
			}

			newValues[ index ] = newVal;
		}

		if ( newVal === currentValue ) {
			return;
		}

		allowed = this._trigger( "slide", event, this._uiHash( index, newVal, newValues ) );

		// A slide can be canceled by returning false from the slide callback
		if ( allowed === false ) {
			return;
		}

		if ( this._hasMultipleValues() ) {
			this.values( index, newVal );
		} else {
			this.value( newVal );
		}
	},

	_stop: function( event, index ) {
		this._trigger( "stop", event, this._uiHash( index ) );
	},

	_change: function( event, index ) {
		if ( !this._keySliding && !this._mouseSliding ) {

			//store the last changed value index for reference when handles overlap
			this._lastChangedValue = index;
			this._trigger( "change", event, this._uiHash( index ) );
		}
	},

	value: function( newValue ) {
		if ( arguments.length ) {
			this.options.value = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, 0 );
			return;
		}

		return this._value();
	},

	values: function( index, newValue ) {
		var vals,
			newValues,
			i;

		if ( arguments.length > 1 ) {
			this.options.values[ index ] = this._trimAlignValue( newValue );
			this._refreshValue();
			this._change( null, index );
			return;
		}

		if ( arguments.length ) {
			if ( $.isArray( arguments[ 0 ] ) ) {
				vals = this.options.values;
				newValues = arguments[ 0 ];
				for ( i = 0; i < vals.length; i += 1 ) {
					vals[ i ] = this._trimAlignValue( newValues[ i ] );
					this._change( null, i );
				}
				this._refreshValue();
			} else {
				if ( this._hasMultipleValues() ) {
					return this._values( index );
				} else {
					return this.value();
				}
			}
		} else {
			return this._values();
		}
	},

	_setOption: function( key, value ) {
		var i,
			valsLength = 0;

		if ( key === "range" && this.options.range === true ) {
			if ( value === "min" ) {
				this.options.value = this._values( 0 );
				this.options.values = null;
			} else if ( value === "max" ) {
				this.options.value = this._values( this.options.values.length - 1 );
				this.options.values = null;
			}
		}

		if ( $.isArray( this.options.values ) ) {
			valsLength = this.options.values.length;
		}

		this._super( key, value );

		switch ( key ) {
			case "orientation":
				this._detectOrientation();
				this._removeClass( "ui-slider-horizontal ui-slider-vertical" )
					._addClass( "ui-slider-" + this.orientation );
				this._refreshValue();
				if ( this.options.range ) {
					this._refreshRange( value );
				}

				// Reset positioning from previous orientation
				this.handles.css( value === "horizontal" ? "bottom" : "left", "" );
				break;
			case "value":
				this._animateOff = true;
				this._refreshValue();
				this._change( null, 0 );
				this._animateOff = false;
				break;
			case "values":
				this._animateOff = true;
				this._refreshValue();

				// Start from the last handle to prevent unreachable handles (#9046)
				for ( i = valsLength - 1; i >= 0; i-- ) {
					this._change( null, i );
				}
				this._animateOff = false;
				break;
			case "step":
			case "min":
			case "max":
				this._animateOff = true;
				this._calculateNewMax();
				this._refreshValue();
				this._animateOff = false;
				break;
			case "range":
				this._animateOff = true;
				this._refresh();
				this._animateOff = false;
				break;
		}
	},

	_setOptionDisabled: function( value ) {
		this._super( value );

		this._toggleClass( null, "ui-state-disabled", !!value );
	},

	//internal value getter
	// _value() returns value trimmed by min and max, aligned by step
	_value: function() {
		var val = this.options.value;
		val = this._trimAlignValue( val );

		return val;
	},

	//internal values getter
	// _values() returns array of values trimmed by min and max, aligned by step
	// _values( index ) returns single value trimmed by min and max, aligned by step
	_values: function( index ) {
		var val,
			vals,
			i;

		if ( arguments.length ) {
			val = this.options.values[ index ];
			val = this._trimAlignValue( val );

			return val;
		} else if ( this._hasMultipleValues() ) {

			// .slice() creates a copy of the array
			// this copy gets trimmed by min and max and then returned
			vals = this.options.values.slice();
			for ( i = 0; i < vals.length; i += 1 ) {
				vals[ i ] = this._trimAlignValue( vals[ i ] );
			}

			return vals;
		} else {
			return [];
		}
	},

	// Returns the step-aligned value that val is closest to, between (inclusive) min and max
	_trimAlignValue: function( val ) {
		if ( val <= this._valueMin() ) {
			return this._valueMin();
		}
		if ( val >= this._valueMax() ) {
			return this._valueMax();
		}
		var step = ( this.options.step > 0 ) ? this.options.step : 1,
			valModStep = ( val - this._valueMin() ) % step,
			alignValue = val - valModStep;

		if ( Math.abs( valModStep ) * 2 >= step ) {
			alignValue += ( valModStep > 0 ) ? step : ( -step );
		}

		// Since JavaScript has problems with large floats, round
		// the final value to 5 digits after the decimal point (see #4124)
		return parseFloat( alignValue.toFixed( 5 ) );
	},

	_calculateNewMax: function() {
		var max = this.options.max,
			min = this._valueMin(),
			step = this.options.step,
			aboveMin = Math.round( ( max - min ) / step ) * step;
		max = aboveMin + min;
		if ( max > this.options.max ) {

			//If max is not divisible by step, rounding off may increase its value
			max -= step;
		}
		this.max = parseFloat( max.toFixed( this._precision() ) );
	},

	_precision: function() {
		var precision = this._precisionOf( this.options.step );
		if ( this.options.min !== null ) {
			precision = Math.max( precision, this._precisionOf( this.options.min ) );
		}
		return precision;
	},

	_precisionOf: function( num ) {
		var str = num.toString(),
			decimal = str.indexOf( "." );
		return decimal === -1 ? 0 : str.length - decimal - 1;
	},

	_valueMin: function() {
		return this.options.min;
	},

	_valueMax: function() {
		return this.max;
	},

	_refreshRange: function( orientation ) {
		if ( orientation === "vertical" ) {
			this.range.css( { "width": "", "left": "" } );
		}
		if ( orientation === "horizontal" ) {
			this.range.css( { "height": "", "bottom": "" } );
		}
	},

	_refreshValue: function() {
		var lastValPercent, valPercent, value, valueMin, valueMax,
			oRange = this.options.range,
			o = this.options,
			that = this,
			animate = ( !this._animateOff ) ? o.animate : false,
			_set = {};

		if ( this._hasMultipleValues() ) {
			this.handles.each( function( i ) {
				valPercent = ( that.values( i ) - that._valueMin() ) / ( that._valueMax() -
					that._valueMin() ) * 100;
				_set[ that.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
				$( this ).stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );
				if ( that.options.range === true ) {
					if ( that.orientation === "horizontal" ) {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								left: valPercent + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								width: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					} else {
						if ( i === 0 ) {
							that.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
								bottom: ( valPercent ) + "%"
							}, o.animate );
						}
						if ( i === 1 ) {
							that.range[ animate ? "animate" : "css" ]( {
								height: ( valPercent - lastValPercent ) + "%"
							}, {
								queue: false,
								duration: o.animate
							} );
						}
					}
				}
				lastValPercent = valPercent;
			} );
		} else {
			value = this.value();
			valueMin = this._valueMin();
			valueMax = this._valueMax();
			valPercent = ( valueMax !== valueMin ) ?
					( value - valueMin ) / ( valueMax - valueMin ) * 100 :
					0;
			_set[ this.orientation === "horizontal" ? "left" : "bottom" ] = valPercent + "%";
			this.handle.stop( 1, 1 )[ animate ? "animate" : "css" ]( _set, o.animate );

			if ( oRange === "min" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "horizontal" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					width: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
			if ( oRange === "min" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: valPercent + "%"
				}, o.animate );
			}
			if ( oRange === "max" && this.orientation === "vertical" ) {
				this.range.stop( 1, 1 )[ animate ? "animate" : "css" ]( {
					height: ( 100 - valPercent ) + "%"
				}, o.animate );
			}
		}
	},

	_handleEvents: {
		keydown: function( event ) {
			var allowed, curVal, newVal, step,
				index = $( event.target ).data( "ui-slider-handle-index" );

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
				case $.ui.keyCode.END:
				case $.ui.keyCode.PAGE_UP:
				case $.ui.keyCode.PAGE_DOWN:
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					event.preventDefault();
					if ( !this._keySliding ) {
						this._keySliding = true;
						this._addClass( $( event.target ), null, "ui-state-active" );
						allowed = this._start( event, index );
						if ( allowed === false ) {
							return;
						}
					}
					break;
			}

			step = this.options.step;
			if ( this._hasMultipleValues() ) {
				curVal = newVal = this.values( index );
			} else {
				curVal = newVal = this.value();
			}

			switch ( event.keyCode ) {
				case $.ui.keyCode.HOME:
					newVal = this._valueMin();
					break;
				case $.ui.keyCode.END:
					newVal = this._valueMax();
					break;
				case $.ui.keyCode.PAGE_UP:
					newVal = this._trimAlignValue(
						curVal + ( ( this._valueMax() - this._valueMin() ) / this.numPages )
					);
					break;
				case $.ui.keyCode.PAGE_DOWN:
					newVal = this._trimAlignValue(
						curVal - ( ( this._valueMax() - this._valueMin() ) / this.numPages ) );
					break;
				case $.ui.keyCode.UP:
				case $.ui.keyCode.RIGHT:
					if ( curVal === this._valueMax() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal + step );
					break;
				case $.ui.keyCode.DOWN:
				case $.ui.keyCode.LEFT:
					if ( curVal === this._valueMin() ) {
						return;
					}
					newVal = this._trimAlignValue( curVal - step );
					break;
			}

			this._slide( event, index, newVal );
		},
		keyup: function( event ) {
			var index = $( event.target ).data( "ui-slider-handle-index" );

			if ( this._keySliding ) {
				this._keySliding = false;
				this._stop( event, index );
				this._change( event, index );
				this._removeClass( $( event.target ), null, "ui-state-active" );
			}
		}
	}
} );

} ) );


/***/ }),

/***/ "Qwlt":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/version.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {

$.ui = $.ui || {};

return $.ui.version = "1.12.1";

} ) );


/***/ }),

/***/ "SisM":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/utils.js ***!
  \*************************************************************/
/*! exports provided: uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return reject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return typeset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return escape_html; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.


/**
 * Creates a wrappable Promise rejection function.
 *
 * Creates a function that returns a Promise.reject with a new WrappedError
 * that has the provided message and wraps the original error that
 * caused the promise to reject.
 */
function reject(message, log) {
    return function promiseRejection(error) {
        var wrapped_error = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["WrappedError"](message, error);
        if (log) {
            console.error(wrapped_error);
        }
        return Promise.reject(wrapped_error);
    };
}
/**
 * Apply MathJax rendering to an element, and optionally set its text.
 *
 * If MathJax is not available, make no changes.
 *
 * Parameters
 * ----------
 * element: Node
 * text: optional string
 */
function typeset(element, text) {
    if (text !== void 0) {
        element.textContent = text;
    }
    if (window.MathJax !== void 0) {
        MathJax.Hub.Queue(['Typeset', MathJax.Hub, element]);
    }
}
/**
 * escape text to HTML
 */
function escape_html(text) {
    var esc = document.createElement('div');
    esc.textContent = text;
    return esc.innerHTML;
}


/***/ }),

/***/ "TtYL":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_int.js ***!
  \******************************************************************/
/*! exports provided: IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return IntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return BoundedIntModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return SliderStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return IntSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return IntRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return BaseIntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return IntRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return IntSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return IntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return BoundedIntTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return IntTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return ProgressStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return IntProgressModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return ProgressView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return PlayModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return PlayView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-format */ "rWgG");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery-ui/ui/widgets/slider */ "QBwY");
/* harmony import */ var jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_slider__WEBPACK_IMPORTED_MODULE_7__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var IntModel = /** @class */ (function (_super) {
    __extends(IntModel, _super);
    function IntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntModel',
            value: 0,
        });
    };
    return IntModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedIntModel = /** @class */ (function (_super) {
    __extends(BoundedIntModel, _super);
    function BoundedIntModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntModel',
            max: 100,
            min: 0
        });
    };
    return BoundedIntModel;
}(IntModel));

var SliderStyleModel = /** @class */ (function (_super) {
    __extends(SliderStyleModel, _super);
    function SliderStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SliderStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SliderStyleModel' });
    };
    SliderStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { handle_color: {
            selector: '.ui-slider-handle',
            attribute: 'background-color',
            default: null
        } });
    return SliderStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntSliderModel = /** @class */ (function (_super) {
    __extends(IntSliderModel, _super);
    function IntSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntSliderModel',
            _view_name: 'IntSliderView',
            step: 1,
            orientation: 'horizontal',
            readout: true,
            readout_format: 'd',
            continuous_update: true,
            style: null,
            disabled: false,
        });
    };
    IntSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    IntSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_4__["format"])(this.get('readout_format'));
    };
    return IntSliderModel;
}(BoundedIntModel));

var IntRangeSliderModel = /** @class */ (function (_super) {
    __extends(IntRangeSliderModel, _super);
    function IntRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return IntRangeSliderModel;
}(IntSliderModel));

var BaseIntSliderView = /** @class */ (function (_super) {
    __extends(BaseIntSliderView, _super);
    function BaseIntSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        return _this;
    }
    BaseIntSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-slider');
        this.el.classList.add('widget-hslider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_6___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.contentEditable = 'true';
        this.readout.style.display = 'none';
        // Set defaults.
        this.update();
    };
    BaseIntSliderView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            // JQuery slider option keys.  These keys happen to have a
            // one-to-one mapping with the corresponding keys of the model.
            var jquery_slider_keys = ['step', 'disabled'];
            var that_1 = this;
            that_1.$slider.slider({});
            jquery_slider_keys.forEach(function (key) {
                var model_value = that_1.model.get(key);
                if (model_value !== undefined) {
                    that_1.$slider.slider('option', key, model_value);
                }
            });
            if (this.model.get('disabled')) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            var max = this.model.get('max');
            var min = this.model.get('min');
            if (min <= max) {
                if (max !== undefined) {
                    this.$slider.slider('option', 'max', max);
                }
                if (min !== undefined) {
                    this.$slider.slider('option', 'min', min);
                }
            }
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'orientation', orientation_1);
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.add('widget-vslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.add('widget-hslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                this.readout.style.display = '';
                this.displayed.then(function () {
                    if (that_1.readout_overflow()) {
                        that_1.readout.classList.add('overflow');
                    }
                    else {
                        that_1.readout.classList.remove('overflow');
                    }
                });
            }
            else {
                this.readout.style.display = 'none';
            }
        }
        return _super.prototype.update.call(this);
    };
    /**
     * Returns true if the readout box content overflows.
     */
    BaseIntSliderView.prototype.readout_overflow = function () {
        return this.readout.scrollWidth > this.readout.clientWidth;
    };
    BaseIntSliderView.prototype.events = function () {
        return {
            // Dictionary of events and their handlers.
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged',
            'blur [contentEditable=true]': 'handleTextChange',
            'keydown [contentEditable=true]': 'handleKeyDown'
        };
    };
    BaseIntSliderView.prototype.handleKeyDown = function (e) {
        if (e.keyCode === 13) { /* keyboard keycodes `enter` */
            e.preventDefault();
            this.handleTextChange();
        }
    };
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    BaseIntSliderView.prototype._validate_slide_value = function (x) {
        return Math.floor(x);
    };
    return BaseIntSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var IntRangeSliderView = /** @class */ (function (_super) {
    __extends(IntRangeSliderView, _super);
    function IntRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // range numbers can be separated by a hyphen, colon, or an en-dash
        _this._range_regex = /^\s*([+-]?\d+)\s*[-:–]\s*([+-]?\d+)/;
        return _this;
    }
    IntRangeSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        this.$slider.slider('option', 'range', true);
        // values for the range case are validated python-side in
        // _Bounded{Int,Float}RangeWidget._validate
        var value = this.model.get('value');
        this.$slider.slider('option', 'values', value.slice());
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntRangeSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return value.map(function (v) {
            return format(v);
        }).join(' – ');
    };
    /**
     * Parse value from a string
     */
    IntRangeSliderView.prototype.stringToValue = function (text) {
        // ranges can be expressed either 'val-val' or 'val:val' (+spaces)
        var match = this._range_regex.exec(text);
        if (match) {
            return [this._parse_value(match[1]), this._parse_value(match[2])];
        }
        else {
            return null;
        }
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntRangeSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        // reject input where NaN or lower > upper
        if (value === null ||
            isNaN(value[0]) ||
            isNaN(value[1]) ||
            (value[0] > value[1])) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            // clamp to range
            value = [Math.max(Math.min(value[0], vmax), vmin),
                Math.max(Math.min(value[1], vmax), vmin)];
            if ((value[0] !== this.model.get('value')[0]) ||
                (value[1] !== this.model.get('value')[1])) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = ui.values.map(this._validate_slide_value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntRangeSliderView;
}(BaseIntSliderView));

var IntSliderView = /** @class */ (function (_super) {
    __extends(IntSliderView, _super);
    function IntSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        if (value > max) {
            value = max;
        }
        else if (value < min) {
            value = min;
        }
        this.$slider.slider('option', 'value', value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    IntSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    IntSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    IntSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, vmax), vmin);
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    IntSliderView.prototype.handleSliderChange = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    IntSliderView.prototype.handleSliderChanged = function (e, ui) {
        var actual_value = this._validate_slide_value(ui.value);
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    return IntSliderView;
}(BaseIntSliderView));

var IntTextModel = /** @class */ (function (_super) {
    __extends(IntTextModel, _super);
    function IntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return IntTextModel;
}(IntModel));

var BoundedIntTextModel = /** @class */ (function (_super) {
    __extends(BoundedIntTextModel, _super);
    function BoundedIntTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedIntTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedIntTextModel',
            _view_name: 'IntTextView',
            disabled: false,
            continuous_update: false,
            step: 1,
        });
    };
    return BoundedIntTextModel;
}(BoundedIntModel));

var IntTextView = /** @class */ (function (_super) {
    __extends(IntTextView, _super);
    function IntTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseInt;
        _this._default_step = '1';
        return _this;
    }
    IntTextView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.type = 'number';
        this.textbox.required = true;
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    IntTextView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var value = this.model.get('value');
            if (this._parse_value(this.textbox.value) !== value) {
                this.textbox.value = value.toString();
            }
            if (this.model.get('min') !== undefined) {
                this.textbox.min = this.model.get('min');
            }
            if (this.model.get('max') !== undefined) {
                this.textbox.max = this.model.get('max');
            }
            if (this.model.get('step') !== undefined
                && this.model.get('step') !== null) {
                this.textbox.step = this.model.get('step');
            }
            else {
                this.textbox.step = this._default_step;
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    IntTextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'keyup input': 'handleKeyUp',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    IntTextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     */
    IntTextView.prototype.handleKeypress = function (e) {
        if (/[e,.\s]/.test(String.fromCharCode(e.keyCode))) {
            e.preventDefault();
        }
    };
    /**
     * Handle key up
     */
    IntTextView.prototype.handleKeyUp = function (e) {
        if (e.altKey || e.ctrlKey) {
            return;
        }
        var target = e.target;
        /* remove invalid characters */
        var value = target.value;
        value = value.replace(/[e,.\s]/g, "");
        if (value.length >= 1) {
            var subvalue = value.substr(1);
            value = value[0] + subvalue.replace(/[+-]/g, "");
        }
        if (target.value != value) {
            e.preventDefault();
            target.value = value;
        }
    };
    /**
     * Call the submit handler if continuous update is true and we are not
     * obviously incomplete.
     */
    IntTextView.prototype.handleChanging = function (e) {
        var target = e.target;
        var trimmed = target.value.trim();
        if (trimmed === '' || (['-', '-.', '.', '+.', '+'].indexOf(trimmed) >= 0)) {
            // incomplete number
            return;
        }
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Applies validated input.
     */
    IntTextView.prototype.handleChanged = function (e) {
        var target = e.target;
        var numericalValue = this._parse_value(target.value);
        // If parse failed, reset value to value stored in model.
        if (isNaN(numericalValue)) {
            target.value = this.model.get('value');
        }
        else {
            // Handle both the unbounded and bounded case by
            // checking to see if the max/min properties are defined
            var boundedValue = numericalValue;
            if (this.model.get('max') !== undefined) {
                boundedValue = Math.min(this.model.get('max'), boundedValue);
            }
            if (this.model.get('min') !== undefined) {
                boundedValue = Math.max(this.model.get('min'), boundedValue);
            }
            if (boundedValue !== numericalValue) {
                target.value = boundedValue;
                numericalValue = boundedValue;
            }
            // Apply the value if it has changed.
            if (numericalValue !== this.model.get('value')) {
                this.model.set('value', numericalValue, { updated_view: this });
                this.touch();
            }
        }
    };
    return IntTextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ProgressStyleModel = /** @class */ (function (_super) {
    __extends(ProgressStyleModel, _super);
    function ProgressStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressStyleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ProgressStyleModel' });
    };
    ProgressStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { bar_color: {
            selector: '.progress-bar',
            attribute: 'background-color',
            default: null
        } });
    return ProgressStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var IntProgressModel = /** @class */ (function (_super) {
    __extends(IntProgressModel, _super);
    function IntProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'IntProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return IntProgressModel;
}(BoundedIntModel));

var ProgressView = /** @class */ (function (_super) {
    __extends(ProgressView, _super);
    function ProgressView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:bar_style', this.update_bar_style);
        this.pWidget.addClass('jupyter-widgets');
    };
    ProgressView.prototype.render = function () {
        _super.prototype.render.call(this);
        var orientation = this.model.get('orientation');
        var className = orientation === 'horizontal' ?
            'widget-hprogress' : 'widget-vprogress';
        this.el.classList.add(className);
        this.progress = document.createElement('div');
        this.progress.classList.add('progress');
        this.progress.style.position = 'relative';
        this.el.appendChild(this.progress);
        this.bar = document.createElement('div');
        this.bar.classList.add('progress-bar');
        this.bar.style.position = 'absolute';
        this.bar.style.bottom = '0px';
        this.bar.style.left = '0px';
        this.progress.appendChild(this.bar);
        // Set defaults.
        this.update();
        this.set_bar_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ProgressView.prototype.update = function () {
        var value = this.model.get('value');
        var max = this.model.get('max');
        var min = this.model.get('min');
        var orientation = this.model.get('orientation');
        var percent = 100.0 * (value - min) / (max - min);
        if (orientation === 'horizontal') {
            this.el.classList.remove('widget-inline-vbox');
            this.el.classList.remove('widget-vprogress');
            this.el.classList.add('widget-inline-hbox');
            this.el.classList.add('widget-hprogress');
            this.bar.style.width = percent + '%';
            this.bar.style.height = '100%';
        }
        else {
            this.el.classList.remove('widget-inline-hbox');
            this.el.classList.remove('widget-hprogress');
            this.el.classList.add('widget-inline-vbox');
            this.el.classList.add('widget-vprogress');
            this.bar.style.width = '100%';
            this.bar.style.height = percent + '%';
        }
        return _super.prototype.update.call(this);
    };
    ProgressView.prototype.update_bar_style = function () {
        this.update_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.prototype.set_bar_style = function () {
        this.set_mapped_classes(ProgressView.class_map, 'bar_style', this.bar);
    };
    ProgressView.class_map = {
        success: ['progress-bar-success'],
        info: ['progress-bar-info'],
        warning: ['progress-bar-warning'],
        danger: ['progress-bar-danger']
    };
    return ProgressView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PlayModel = /** @class */ (function (_super) {
    __extends(PlayModel, _super);
    function PlayModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_5__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'PlayModel',
            _view_name: 'PlayView',
            _playing: false,
            _repeat: false,
            show_repeat: true,
            interval: 100,
            step: 1,
            disabled: false,
        });
    };
    PlayModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
    };
    PlayModel.prototype.loop = function () {
        if (this.get('_playing')) {
            var next_value = this.get('value') + this.get('step');
            if (next_value <= this.get('max')) {
                this.set('value', next_value);
                this.schedule_next();
            }
            else {
                if (this.get('_repeat')) {
                    this.set('value', this.get('min'));
                    this.schedule_next();
                }
                else {
                    this.set('_playing', false);
                }
            }
            this.save_changes();
        }
    };
    PlayModel.prototype.schedule_next = function () {
        window.setTimeout(this.loop.bind(this), this.get('interval'));
    };
    PlayModel.prototype.stop = function () {
        this.set('_playing', false);
        this.set('value', this.get('min'));
        this.save_changes();
    };
    PlayModel.prototype.pause = function () {
        this.set('_playing', false);
        this.save_changes();
    };
    PlayModel.prototype.play = function () {
        this.set('_playing', true);
        if (this.get('value') == this.get('max')) {
            // if the value is at the end, reset if first, and then schedule the next
            this.set('value', this.get('min'));
            this.schedule_next();
            this.save_changes();
        }
        else {
            // otherwise directly start with the next value
            // loop will call save_changes in this case
            this.loop();
        }
    };
    PlayModel.prototype.repeat = function () {
        this.set('_repeat', !this.get('_repeat'));
        this.save_changes();
    };
    return PlayModel;
}(BoundedIntModel));

var PlayView = /** @class */ (function (_super) {
    __extends(PlayView, _super);
    function PlayView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-play');
        this.playButton = document.createElement('button');
        this.pauseButton = document.createElement('button');
        this.stopButton = document.createElement('button');
        this.repeatButton = document.createElement('button');
        this.playButton.className = 'jupyter-button';
        this.pauseButton.className = 'jupyter-button';
        this.stopButton.className = 'jupyter-button';
        this.repeatButton.className = 'jupyter-button';
        this.el.appendChild(this.playButton); // Toggle button with playing
        this.el.appendChild(this.pauseButton); // Disable if not playing
        this.el.appendChild(this.stopButton); // Disable if not playing
        this.el.appendChild(this.repeatButton); // Always enabled, but may be hidden
        var playIcon = document.createElement('i');
        playIcon.className = 'fa fa-play';
        this.playButton.appendChild(playIcon);
        var pauseIcon = document.createElement('i');
        pauseIcon.className = 'fa fa-pause';
        this.pauseButton.appendChild(pauseIcon);
        var stopIcon = document.createElement('i');
        stopIcon.className = 'fa fa-stop';
        this.stopButton.appendChild(stopIcon);
        var repeatIcon = document.createElement('i');
        repeatIcon.className = 'fa fa-retweet';
        this.repeatButton.appendChild(repeatIcon);
        this.playButton.onclick = this.model.play.bind(this.model);
        this.pauseButton.onclick = this.model.pause.bind(this.model);
        this.stopButton.onclick = this.model.stop.bind(this.model);
        this.repeatButton.onclick = this.model.repeat.bind(this.model);
        this.listenTo(this.model, 'change:_playing', this.update_playing);
        this.listenTo(this.model, 'change:_repeat', this.update_repeat);
        this.listenTo(this.model, 'change:show_repeat', this.update_repeat);
        this.update_playing();
        this.update_repeat();
        this.update();
    };
    PlayView.prototype.update = function () {
        var disabled = this.model.get('disabled');
        this.playButton.disabled = disabled;
        this.pauseButton.disabled = disabled;
        this.stopButton.disabled = disabled;
        this.repeatButton.disabled = disabled;
        this.update_playing();
    };
    PlayView.prototype.update_playing = function () {
        var playing = this.model.get('_playing');
        var disabled = this.model.get('disabled');
        if (playing) {
            if (!disabled) {
                this.pauseButton.disabled = false;
            }
            this.playButton.classList.add('mod-active');
        }
        else {
            if (!disabled) {
                this.pauseButton.disabled = true;
            }
            this.playButton.classList.remove('mod-active');
        }
    };
    PlayView.prototype.update_repeat = function () {
        var repeat = this.model.get('_repeat');
        this.repeatButton.style.display = this.model.get('show_repeat') ? this.playButton.style.display : 'none';
        if (repeat) {
            this.repeatButton.classList.add('mod-active');
        }
        else {
            this.repeatButton.classList.remove('mod-active');
        }
    };
    return PlayView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_2__["DOMWidgetView"]));



/***/ }),

/***/ "WSRZ":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_link.js ***!
  \*******************************************************************/
/*! exports provided: DirectionalLinkModel, LinkModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return DirectionalLinkModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return LinkModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var DirectionalLinkModel = /** @class */ (function (_super) {
    __extends(DirectionalLinkModel, _super);
    function DirectionalLinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectionalLinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            target: undefined,
            source: undefined,
            _model_name: 'DirectionalLinkModel'
        });
    };
    DirectionalLinkModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change', this.updateBindings, this);
        this.updateBindings();
    };
    DirectionalLinkModel.prototype.updateValue = function (sourceModel, sourceAttr, targetModel, targetAttr) {
        if (this._updating) {
            return;
        }
        this._updating = true;
        try {
            if (targetModel) {
                targetModel.set(targetAttr, sourceModel.get(sourceAttr));
                targetModel.save_changes();
            }
        }
        finally {
            this._updating = false;
        }
    };
    DirectionalLinkModel.prototype.updateBindings = function () {
        var _a, _b;
        var _this = this;
        this.cleanup();
        _a = this.get('source') || [null, null], this.sourceModel = _a[0], this.sourceAttr = _a[1];
        _b = this.get('target') || [null, null], this.targetModel = _b[0], this.targetAttr = _b[1];
        if (this.sourceModel) {
            this.listenTo(this.sourceModel, 'change:' + this.sourceAttr, function () {
                _this.updateValue(_this.sourceModel, _this.sourceAttr, _this.targetModel, _this.targetAttr);
            });
            this.updateValue(this.sourceModel, this.sourceAttr, this.targetModel, this.targetAttr);
            this.listenToOnce(this.sourceModel, 'destroy', this.cleanup);
        }
        if (this.targetModel) {
            this.listenToOnce(this.targetModel, 'destroy', this.cleanup);
        }
    };
    DirectionalLinkModel.prototype.cleanup = function () {
        // Stop listening to 'change' and 'destroy' events of the source and target
        if (this.sourceModel) {
            this.stopListening(this.sourceModel, 'change:' + this.sourceAttr, null);
            this.stopListening(this.sourceModel, 'destroy', null);
        }
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'destroy', null);
        }
    };
    DirectionalLinkModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"].serializers, { target: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] }, source: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return DirectionalLinkModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreWidgetModel"]));

var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LinkModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'LinkModel'
        });
    };
    LinkModel.prototype.updateBindings = function () {
        var _this = this;
        _super.prototype.updateBindings.call(this);
        if (this.targetModel) {
            this.listenTo(this.targetModel, 'change:' + this.targetAttr, function () {
                _this.updateValue(_this.targetModel, _this.targetAttr, _this.sourceModel, _this.sourceAttr);
            });
        }
    };
    LinkModel.prototype.cleanup = function () {
        _super.prototype.cleanup.call(this);
        if (this.targetModel) {
            this.stopListening(this.targetModel, 'change:' + this.targetAttr, null);
        }
    };
    return LinkModel;
}(DirectionalLinkModel));



/***/ }),

/***/ "XIYl":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/currentselection.js ***!
  \*********************************************************************************/
/*! exports provided: Selection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
/**
 * A variety of convenience methods for maintaining a current selection
 */


var Selection = /** @class */ (function () {
    function Selection(sequence, options) {
        if (options === void 0) { options = {}; }
        this._array = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](this);
        this._array = sequence;
        this._insertBehavior = options.insertBehavior || 'select-item-if-needed';
        this._removeBehavior = options.removeBehavior || 'select-item-after';
    }
    Object.defineProperty(Selection.prototype, "selectionChanged", {
        /**
         * A signal emitted when the current item is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected item is changed either
         * through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current item
         * changes due to other items being inserted, removed, or moved, but the
         * current item remains the same. It is only emitted when the actual current
         * item is changed.
         */
        get: function () {
            return this._selectionChanged;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust for setting an item.
     *
     * This should be called *after* the set.
     *
     * @param index - The index set.
     * @param oldValue - The old value at the index.
     */
    Selection.prototype.adjustSelectionForSet = function (index) {
        // We just need to send a signal if the currentValue changed.
        // Get the current index and value.
        var pi = this.index;
        var pv = this.value;
        // Exit early if this doesn't affect the selection
        if (index !== pi) {
            return;
        }
        this._updateSelectedValue();
        var cv = this.value;
        // The previous item is now null, since it is no longer in the array.
        this._previousValue = null;
        // Send signal if there was a change
        if (pv !== cv) {
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: pi, currentValue: cv
            });
        }
    };
    Object.defineProperty(Selection.prototype, "value", {
        /**
         * Get the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._value;
        },
        /**
         * Set the currently selected item.
         *
         * #### Notes
         * If the item does not exist in the vector, the currentValue will be set to
         * `null`. This selects the first entry equal to the desired item.
         */
        set: function (value) {
            if (value === null) {
                this.index = null;
            }
            else {
                this.index = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_0__["ArrayExt"].firstIndexOf(this._array, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "index", {
        /**
         * Get the index of the currently selected item.
         *
         * #### Notes
         * This will be `null` if no item is selected.
         */
        get: function () {
            return this._index;
        },
        /**
         * Set the index of the currently selected tab.
         *
         * @param index - The index to select.
         *
         * #### Notes
         * If the value is out of range, the index will be set to `null`, which
         * indicates no item is selected.
         */
        set: function (index) {
            // Coerce the value to an index.
            var i;
            if (index !== null) {
                i = Math.floor(index);
                if (i < 0 || i >= this._array.length) {
                    i = null;
                }
            }
            else {
                i = null;
            }
            // Bail early if the index will not change.
            if (this._index === i) {
                return;
            }
            // Look up the previous index and item.
            var pi = this._index;
            var pv = this._value;
            // Update the state
            this._index = i;
            this._updateSelectedValue();
            this._previousValue = pv;
            // Emit the current changed signal.
            this._selectionChanged.emit({
                previousIndex: pi, previousValue: pv,
                currentIndex: i, currentValue: this._value
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "insertBehavior", {
        /**
         * Get the selection behavior when inserting a tab.
         */
        get: function () {
            return this._insertBehavior;
        },
        /**
         * Set the selection behavior when inserting a tab.
         */
        set: function (value) {
            this._insertBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "removeBehavior", {
        /**
         * Get the selection behavior when removing a tab.
         */
        get: function () {
            return this._removeBehavior;
        },
        /**
         * Set the selection behavior when removing a tab.
         */
        set: function (value) {
            this._removeBehavior = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adjust the current index for a tab insert operation.
     *
     * @param i - The new index of the inserted item.
     * @param j - The inserted item.
     *
     * #### Notes
     * This method accounts for the tab bar's insertion behavior when adjusting
     * the current index and emitting the changed signal. This should be called
     * after the insertion.
     */
    Selection.prototype.adjustSelectionForInsert = function (i, item) {
        // Lookup commonly used variables.
        var cv = this._value;
        var ci = this._index;
        var bh = this._insertBehavior;
        // Handle the behavior where the new item is always selected,
        // or the behavior where the new item is selected if needed.
        if (bh === 'select-item' || (bh === 'select-item-if-needed' && ci === null)) {
            this._index = i;
            this._value = item;
            this._previousValue = cv;
            this._selectionChanged.emit({
                previousIndex: ci, previousValue: cv,
                currentIndex: i, currentValue: item
            });
            return;
        }
        // Otherwise, silently adjust the current index if needed.
        if (ci >= i) {
            this._index++;
        }
    };
    /**
     * Adjust the current index for move operation.
     *
     * @param i - The previous index of the item.
     * @param j - The new index of the item.
     *
     * #### Notes
     * This method will not cause the actual current item to change. It silently
     * adjusts the current index to account for the given move.
     */
    Selection.prototype.adjustSelectionForMove = function (i, j) {
        if (this._index === i) {
            this._index = j;
        }
        else if (this._index < i && this._index >= j) {
            this._index++;
        }
        else if (this._index > i && this._index <= j) {
            this._index--;
        }
    };
    /**
     * Clear the selection and history.
     */
    Selection.prototype.clearSelection = function () {
        // Get the current index and item.
        var pi = this._index;
        var pv = this._value;
        // Reset the current index and previous item.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        // If no item was selected, there's nothing else to do.
        if (pi === null) {
            return;
        }
        // Emit the current changed signal.
        this._selectionChanged.emit({
            previousIndex: pi, previousValue: pv,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Adjust the current index for an item remove operation.
     *
     * @param i - The former index of the removed item.
     * @param item - The removed item.
     *
     * #### Notes
     * This method accounts for the remove behavior when adjusting the current
     * index and emitting the changed signal. It should be called after the item
     * is removed.
     */
    Selection.prototype.adjustSelectionForRemove = function (i, item) {
        // Lookup commonly used variables.
        var ci = this._index;
        var bh = this._removeBehavior;
        // Silently adjust the index if the current item is not removed.
        if (ci !== i) {
            if (ci > i) {
                this._index--;
            }
            return;
        }
        // No item gets selected if the vector is empty.
        if (this._array.length === 0) {
            // Reset the current index and previous item.
            this._index = null;
            this._value = null;
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the next sibling item is selected.
        if (bh === 'select-item-after') {
            this._index = Math.min(i, this._array.length - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous sibling item is selected.
        if (bh === 'select-item-before') {
            this._index = Math.max(0, i - 1);
            this._updateSelectedValue();
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this._value
            });
            return;
        }
        // Handle behavior where the previous history item is selected.
        if (bh === 'select-previous-item') {
            if (this._previousValue) {
                this.value = this._previousValue;
            }
            else {
                this._index = Math.min(i, this._array.length - 1);
                this._updateSelectedValue();
            }
            this._previousValue = null;
            this._selectionChanged.emit({
                previousIndex: i, previousValue: item,
                currentIndex: this._index, currentValue: this.value
            });
            return;
        }
        // Otherwise, no item gets selected.
        this._index = null;
        this._value = null;
        this._previousValue = null;
        this._selectionChanged.emit({
            previousIndex: i, previousValue: item,
            currentIndex: this._index, currentValue: this._value
        });
    };
    /**
     * Set the current value based on the current index.
     */
    Selection.prototype._updateSelectedValue = function () {
        var i = this._index;
        this._value = i !== null ? this._array[i] : null;
    };
    return Selection;
}());



/***/ }),

/***/ "XPeQ":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/index.js ***!
  \*************************************************************/
/*! exports provided: JUPYTER_CONTROLS_VERSION, version, uuid, WrappedError, resolvePromisesDict, reject, typeset, escape_html, DirectionalLinkModel, LinkModel, BoolModel, CheckboxModel, CheckboxView, ToggleButtonModel, ToggleButtonView, ValidModel, ValidView, ButtonStyleModel, ButtonModel, ButtonView, BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel, ImageModel, ImageView, VideoModel, VideoView, AudioModel, AudioView, ColorPickerModel, ColorPickerView, serialize_date, deserialize_date, DatePickerModel, DatePickerView, IntModel, BoundedIntModel, SliderStyleModel, IntSliderModel, IntRangeSliderModel, BaseIntSliderView, IntRangeSliderView, IntSliderView, IntTextModel, BoundedIntTextModel, IntTextView, ProgressStyleModel, IntProgressModel, ProgressView, PlayModel, PlayView, FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel, ControllerButtonModel, ControllerButtonView, ControllerAxisModel, ControllerAxisView, ControllerModel, ControllerView, SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView, SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView, StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView, DescriptionStyleModel, DescriptionModel, DescriptionView, LabeledDOMWidgetModel, LabeledDOMWidgetView, FileUploadModel, FileUploadView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uuid"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrappedError", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["WrappedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolvePromisesDict", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["resolvePromisesDict"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["reject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeset", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["typeset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape_html", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["escape_html"]; });

/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "VKie");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JUPYTER_CONTROLS_VERSION", function() { return _version__WEBPACK_IMPORTED_MODULE_1__["JUPYTER_CONTROLS_VERSION"]; });

/* harmony import */ var _widget_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_link */ "WSRZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectionalLinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["DirectionalLinkModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkModel", function() { return _widget_link__WEBPACK_IMPORTED_MODULE_2__["LinkModel"]; });

/* harmony import */ var _widget_bool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widget_bool */ "+RhG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoolModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["BoolModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["CheckboxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ToggleButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidModel", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidView", function() { return _widget_bool__WEBPACK_IMPORTED_MODULE_3__["ValidView"]; });

/* harmony import */ var _widget_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget_button */ "JMIS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonStyleModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonModel", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonView", function() { return _widget_button__WEBPACK_IMPORTED_MODULE_4__["ButtonView"]; });

/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["BoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["HBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["VBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return _widget_box__WEBPACK_IMPORTED_MODULE_5__["GridBoxModel"]; });

/* harmony import */ var _widget_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget_image */ "uhLQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return _widget_image__WEBPACK_IMPORTED_MODULE_6__["ImageView"]; });

/* harmony import */ var _widget_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widget_video */ "abMj");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return _widget_video__WEBPACK_IMPORTED_MODULE_7__["VideoView"]; });

/* harmony import */ var _widget_audio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widget_audio */ "iBkU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return _widget_audio__WEBPACK_IMPORTED_MODULE_8__["AudioView"]; });

/* harmony import */ var _widget_color__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widget_color */ "lGQ9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return _widget_color__WEBPACK_IMPORTED_MODULE_9__["ColorPickerView"]; });

/* harmony import */ var _widget_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget_date */ "XZ5k");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["serialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["deserialize_date"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return _widget_date__WEBPACK_IMPORTED_MODULE_10__["DatePickerView"]; });

/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SliderStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["SliderStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseIntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BaseIntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntRangeSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntSliderView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedIntTextModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["BoundedIntTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntTextView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressStyleModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IntProgressModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["IntProgressModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["ProgressView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayModel", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayView", function() { return _widget_int__WEBPACK_IMPORTED_MODULE_11__["PlayView"]; });

/* harmony import */ var _widget_float__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widget_float */ "xOfY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatLogSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatRangeSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["BoundedFloatTextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatTextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return _widget_float__WEBPACK_IMPORTED_MODULE_12__["FloatProgressModel"]; });

/* harmony import */ var _widget_controller__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widget_controller */ "0pQw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerButtonView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerButtonView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerAxisView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerAxisView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerModel", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControllerView", function() { return _widget_controller__WEBPACK_IMPORTED_MODULE_13__["ControllerView"]; });

/* harmony import */ var _widget_selection__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widget_selection */ "d61g");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["DropdownView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["RadioButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["ToggleButtonsView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionSliderView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["MultipleSelectionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectMultipleView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return _widget_selection__WEBPACK_IMPORTED_MODULE_14__["SelectionRangeSliderView"]; });

/* harmony import */ var _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget_selectioncontainer */ "rCYf");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["SelectionContainerModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorAccordionWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["AccordionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["JupyterPhosphorTabPanelWidget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return _widget_selectioncontainer__WEBPACK_IMPORTED_MODULE_15__["TabView"]; });

/* harmony import */ var _widget_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widget_string */ "Y/0+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["StringModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["HTMLMathView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["LabelView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextareaView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["TextView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["PasswordView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return _widget_string__WEBPACK_IMPORTED_MODULE_16__["ComboboxView"]; });

/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionStyleModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionStyleModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DescriptionView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["DescriptionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetModel", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabeledDOMWidgetView", function() { return _widget_description__WEBPACK_IMPORTED_MODULE_17__["LabeledDOMWidgetView"]; });

/* harmony import */ var _widget_upload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./widget_upload */ "01zH");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadModel", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FileUploadView", function() { return _widget_upload__WEBPACK_IMPORTED_MODULE_18__["FileUploadView"]; });

// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.



















var version = __webpack_require__(/*! ../package.json */ "iPdL").version;


/***/ }),

/***/ "XZ5k":
/*!*******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_date.js ***!
  \*******************************************************************/
/*! exports provided: serialize_date, deserialize_date, DatePickerModel, DatePickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize_date", function() { return serialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize_date", function() { return deserialize_date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerModel", function() { return DatePickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerView", function() { return DatePickerView; });
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




function serialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        return {
            year: value.getUTCFullYear(),
            month: value.getUTCMonth(),
            date: value.getUTCDate()
        };
    }
}
function deserialize_date(value) {
    if (value === null) {
        return null;
    }
    else {
        var date = new Date();
        date.setUTCFullYear(value.year, value.month, value.date);
        date.setUTCHours(0, 0, 0, 0);
        return date;
    }
}
var DatePickerModel = /** @class */ (function (_super) {
    __extends(DatePickerModel, _super);
    function DatePickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: null,
            _model_name: 'DatePickerModel',
            _view_name: 'DatePickerView'
        });
    };
    DatePickerModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"].serializers, { value: {
            serialize: serialize_date,
            deserialize: deserialize_date
        } });
    return DatePickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDescriptionModel"]));

var DatePickerView = /** @class */ (function (_super) {
    __extends(DatePickerView, _super);
    function DatePickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-datepicker');
        this._datepicker = document.createElement('input');
        this._datepicker.setAttribute('type', 'date');
        this._datepicker.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this._datepicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    DatePickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            this._datepicker.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    DatePickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._picker_focusout;
        return {
            'change [type="date"]': '_picker_change',
            'focusout [type="date"]': '_picker_focusout'
        };
    };
    DatePickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._datepicker.valueAsDate = value;
    };
    DatePickerView.prototype._picker_change = function () {
        if (!this._datepicker.validity.badInput) {
            this.model.set('value', this._datepicker.valueAsDate);
            this.touch();
        }
    };
    DatePickerView.prototype._picker_focusout = function () {
        if (this._datepicker.validity.badInput) {
            this.model.set('value', null);
            this.touch();
        }
    };
    return DatePickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_0__["DescriptionView"]));



/***/ }),

/***/ "Y/0+":
/*!*********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_string.js ***!
  \*********************************************************************/
/*! exports provided: StringModel, HTMLModel, HTMLView, HTMLMathModel, HTMLMathView, LabelModel, LabelView, TextareaModel, TextareaView, TextModel, TextView, PasswordModel, PasswordView, ComboboxModel, ComboboxView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringModel", function() { return StringModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLModel", function() { return HTMLModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLView", function() { return HTMLView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathModel", function() { return HTMLMathModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMathView", function() { return HTMLMathView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModel", function() { return LabelModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelView", function() { return LabelView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaModel", function() { return TextareaModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaView", function() { return TextareaView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextModel", function() { return TextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextView", function() { return TextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordModel", function() { return PasswordModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordView", function() { return PasswordView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxModel", function() { return ComboboxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboboxView", function() { return ComboboxView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




/**
 * Class name for a combobox with an invlid value.
 */
var INVALID_VALUE_CLASS = 'jpwidgets-invalidComboValue';
var StringModel = /** @class */ (function (_super) {
    __extends(StringModel, _super);
    function StringModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: '',
            disabled: false,
            placeholder: '\u200b',
            _model_name: 'StringModel'
        });
    };
    return StringModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var HTMLModel = /** @class */ (function (_super) {
    __extends(HTMLModel, _super);
    function HTMLModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLView',
            _model_name: 'HTMLModel'
        });
    };
    return HTMLModel;
}(StringModel));

var HTMLView = /** @class */ (function (_super) {
    __extends(HTMLView, _super);
    function HTMLView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-html');
        this.content = document.createElement('div');
        this.content.classList.add('widget-html-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    HTMLView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        return _super.prototype.update.call(this);
    };
    return HTMLView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var HTMLMathModel = /** @class */ (function (_super) {
    __extends(HTMLMathModel, _super);
    function HTMLMathModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HTMLMathModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HTMLMathView',
            _model_name: 'HTMLMathModel'
        });
    };
    return HTMLMathModel;
}(StringModel));

var HTMLMathView = /** @class */ (function (_super) {
    __extends(HTMLMathView, _super);
    function HTMLMathView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    HTMLMathView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-htmlmath');
        this.content = document.createElement('div');
        this.content.classList.add('widget-htmlmath-content');
        this.el.appendChild(this.content);
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     */
    HTMLMathView.prototype.update = function () {
        this.content.innerHTML = this.model.get('value');
        this.typeset(this.content);
        return _super.prototype.update.call(this);
    };
    return HTMLMathView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var LabelModel = /** @class */ (function (_super) {
    __extends(LabelModel, _super);
    function LabelModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LabelModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'LabelView',
            _model_name: 'LabelModel'
        });
    };
    return LabelModel;
}(StringModel));

var LabelView = /** @class */ (function (_super) {
    __extends(LabelView, _super);
    function LabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    LabelView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-label');
        this.update(); // Set defaults.
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    LabelView.prototype.update = function () {
        this.typeset(this.el, this.model.get('value'));
        return _super.prototype.update.call(this);
    };
    return LabelView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextareaModel = /** @class */ (function (_super) {
    __extends(TextareaModel, _super);
    function TextareaModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextareaView',
            _model_name: 'TextareaModel',
            rows: null,
            continuous_update: true,
        });
    };
    return TextareaModel;
}(StringModel));

var TextareaView = /** @class */ (function (_super) {
    __extends(TextareaView, _super);
    function TextareaView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    TextareaView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-textarea');
        this.textbox = document.createElement('textarea');
        this.textbox.setAttribute('rows', '5');
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.update_placeholder();
    };
    TextareaView.prototype.update_placeholder = function (value) {
        value = value || this.model.get('placeholder');
        this.textbox.setAttribute('placeholder', value.toString());
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TextareaView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            this.textbox.value = this.model.get('value');
            var rows = this.model.get('rows');
            if (rows === null) {
                rows = '';
            }
            this.textbox.setAttribute('rows', rows);
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextareaView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input textarea': 'handleChanging',
            'change textarea': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the event isn't sent to the application.
     */
    TextareaView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles key press
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextareaView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
    };
    /**
     * Triggered on input change
     */
    TextareaView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Sync the value with the kernel.
     *
     * @param e Event
     */
    TextareaView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextareaView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var TextModel = /** @class */ (function (_super) {
    __extends(TextModel, _super);
    function TextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'TextView',
            _model_name: 'TextModel',
            continuous_update: true,
        });
    };
    return TextModel;
}(StringModel));

var TextView = /** @class */ (function (_super) {
    __extends(TextView, _super);
    function TextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'text';
        return _this;
    }
    /**
     * Called when view is rendered.
     */
    TextView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-text');
        this.textbox = document.createElement('input');
        this.textbox.setAttribute('type', this.inputType);
        this.textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.textbox);
        this.update(); // Set defaults.
        this.listenTo(this.model, 'change:placeholder', function (model, value, options) {
            _this.update_placeholder(value);
        });
        this.listenTo(this.model, 'change:description_tooltip', this.update_title);
        this.listenTo(this.model, 'change:description', this.update_title);
        this.update_placeholder();
        this.update_title();
    };
    TextView.prototype.update_placeholder = function (value) {
        this.textbox.setAttribute('placeholder', value || this.model.get('placeholder'));
    };
    TextView.prototype.update_title = function () {
        var title = this.model.get('description_tooltip');
        if (!title) {
            this.textbox.removeAttribute('title');
        }
        else if (this.model.get('description').length === 0) {
            this.textbox.setAttribute('title', title);
        }
    };
    TextView.prototype.update = function (options) {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        if (options === undefined || options.updated_view !== this) {
            if (this.textbox.value !== this.model.get('value')) {
                this.textbox.value = this.model.get('value');
            }
            this.textbox.disabled = this.model.get('disabled');
        }
        return _super.prototype.update.call(this);
    };
    TextView.prototype.events = function () {
        return {
            'keydown input': 'handleKeyDown',
            'keypress input': 'handleKeypress',
            'input input': 'handleChanging',
            'change input': 'handleChanged'
        };
    };
    /**
     * Handle key down
     *
     * Stop propagation so the keypress isn't sent to the application.
     */
    TextView.prototype.handleKeyDown = function (e) {
        e.stopPropagation();
    };
    /**
     * Handles text submission
     */
    TextView.prototype.handleKeypress = function (e) {
        e.stopPropagation();
        // The submit message is deprecated in widgets 7
        if (e.keyCode === 13) { // Return key
            this.send({ event: 'submit' });
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanging = function (e) {
        if (this.model.get('continuous_update')) {
            this.handleChanged(e);
        }
    };
    /**
     * Handles user input.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    TextView.prototype.handleChanged = function (e) {
        var target = e.target;
        this.model.set('value', target.value, { updated_view: this });
        this.touch();
    };
    return TextView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var PasswordModel = /** @class */ (function (_super) {
    __extends(PasswordModel, _super);
    function PasswordModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PasswordModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'PasswordView',
            _model_name: 'PasswordModel'
        });
    };
    return PasswordModel;
}(TextModel));

var PasswordView = /** @class */ (function (_super) {
    __extends(PasswordView, _super);
    function PasswordView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'password';
        return _this;
    }
    return PasswordView;
}(TextView));

/**
 * Combobox widget model class.
 */
var ComboboxModel = /** @class */ (function (_super) {
    __extends(ComboboxModel, _super);
    function ComboboxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComboboxModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ComboboxModel', _view_name: 'ComboboxView', options: [], ensure_options: false });
    };
    return ComboboxModel;
}(TextModel));

/**
 * Combobox widget view class.
 */
var ComboboxView = /** @class */ (function (_super) {
    __extends(ComboboxView, _super);
    function ComboboxView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInitialRender = true;
        return _this;
    }
    ComboboxView.prototype.render = function () {
        this.datalist = document.createElement('datalist');
        this.datalist.id = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        _super.prototype.render.call(this);
        this.textbox.setAttribute('list', this.datalist.id);
        this.el.appendChild(this.datalist);
    };
    ComboboxView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        if (!this.datalist) {
            return;
        }
        var valid = this.isValid(this.model.get('value'));
        this.highlightValidState(valid);
        // Check if we need to update options
        if ((options !== undefined && options.updated_view) || (!this.model.hasChanged('options') &&
            !this.isInitialRender)) {
            // Value update only, keep current options
            return;
        }
        this.isInitialRender = false;
        var opts = this.model.get('options');
        var optLines = opts.map(function (o) {
            return "<option value=\"" + o + "\"></option>";
        });
        this.datalist.innerHTML = optLines.join('\n');
    };
    ComboboxView.prototype.isValid = function (value) {
        if (true === this.model.get('ensure_option')) {
            var options = this.model.get('options');
            if (options.indexOf(value) === -1) {
                return false;
            }
        }
        return true;
    };
    ComboboxView.prototype.handleChanging = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanging.call(this, e);
        }
    };
    ComboboxView.prototype.handleChanged = function (e) {
        // Override to validate value
        var target = e.target;
        var valid = this.isValid(target.value);
        this.highlightValidState(valid);
        if (valid) {
            _super.prototype.handleChanged.call(this, e);
        }
    };
    ComboboxView.prototype.highlightValidState = function (valid) {
        this.textbox.classList.toggle(INVALID_VALUE_CLASS, !valid);
    };
    return ComboboxView;
}(TextView));



/***/ }),

/***/ "abMj":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_video.js ***!
  \********************************************************************/
/*! exports provided: VideoModel, VideoView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModel", function() { return VideoModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoView", function() { return VideoView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var VideoModel = /** @class */ (function (_super) {
    __extends(VideoModel, _super);
    function VideoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'VideoModel',
            _view_name: 'VideoView',
            format: 'mp4',
            width: '',
            height: '',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    VideoModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return VideoModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var VideoView = /** @class */ (function (_super) {
    __extends(VideoView, _super);
    function VideoView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    VideoView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "video/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Height and width
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        // Video attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    VideoView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(VideoView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'video';
        },
        enumerable: true,
        configurable: true
    });
    return VideoView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "d61g":
/*!************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selection.js ***!
  \************************************************************************/
/*! exports provided: SelectionModel, DropdownModel, DropdownView, SelectModel, SelectView, RadioButtonsModel, RadioButtonsView, ToggleButtonsStyleModel, ToggleButtonsModel, ToggleButtonsView, SelectionSliderModel, SelectionSliderView, MultipleSelectionModel, SelectMultipleModel, SelectMultipleView, SelectionRangeSliderModel, SelectionRangeSliderView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownModel", function() { return DropdownModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownView", function() { return DropdownView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModel", function() { return SelectModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectView", function() { return SelectView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsModel", function() { return RadioButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButtonsView", function() { return RadioButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsStyleModel", function() { return ToggleButtonsStyleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsModel", function() { return ToggleButtonsModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonsView", function() { return ToggleButtonsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderModel", function() { return SelectionSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionSliderView", function() { return SelectionSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleSelectionModel", function() { return MultipleSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleModel", function() { return SelectMultipleModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectMultipleView", function() { return SelectMultipleView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderModel", function() { return SelectionRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionRangeSliderView", function() { return SelectionRangeSliderView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};






var SelectionModel = /** @class */ (function (_super) {
    __extends(SelectionModel, _super);
    function SelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionModel', index: '', _options_labels: [], disabled: false });
    };
    return SelectionModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var DropdownModel = /** @class */ (function (_super) {
    __extends(DropdownModel, _super);
    function DropdownModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DropdownModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'DropdownModel', _view_name: 'DropdownView', button_style: '' });
    };
    return DropdownModel;
}(SelectionModel));

// TODO: Make a phosphor dropdown control, wrapped in DropdownView. Also, fix
// bugs in keyboard handling. See
// https://github.com/jupyter-widgets/ipywidgets/issues/1055 and
// https://github.com/jupyter-widgets/ipywidgets/issues/1049
// For now, we subclass SelectView to provide DropdownView
// For the old code, see commit f68bfbc566f3a78a8f3350b438db8ed523ce3642
var DropdownView = /** @class */ (function (_super) {
    __extends(DropdownView, _super);
    function DropdownView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    DropdownView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
    };
    /**
     * Called when view is rendered.
     */
    DropdownView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-dropdown');
        this.listbox = document.createElement('select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
    };
    /**
     * Update the contents of this view
     */
    DropdownView.prototype.update = function () {
        // Disable listbox if needed
        this.listbox.disabled = this.model.get('disabled');
        // Select the correct element
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
        return _super.prototype.update.call(this);
    };
    DropdownView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    DropdownView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    DropdownView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex === -1 ? null : this.listbox.selectedIndex);
        this.touch();
    };
    return DropdownView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var SelectModel = /** @class */ (function (_super) {
    __extends(SelectModel, _super);
    function SelectModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectModel', _view_name: 'SelectView', rows: 5 });
    };
    return SelectModel;
}(SelectionModel));

var SelectView = /** @class */ (function (_super) {
    __extends(SelectView, _super);
    function SelectView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.listenTo(this.model, 'change:_options_labels', function () { return _this._updateOptions(); });
        this.listenTo(this.model, 'change:index', function (model, value, options) { return _this.updateSelection(options); });
        // Create listbox here so that subclasses can modify it before it is populated in render()
        this.listbox = document.createElement('select');
    };
    /**
     * Called when view is rendered.
     */
    SelectView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-select');
        this.listbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this.el.appendChild(this.listbox);
        this._updateOptions();
        this.update();
        this.updateSelection();
    };
    /**
     * Update the contents of this view
     */
    SelectView.prototype.update = function () {
        _super.prototype.update.call(this);
        this.listbox.disabled = this.model.get('disabled');
        var rows = this.model.get('rows');
        if (rows === null) {
            rows = '';
        }
        this.listbox.setAttribute('size', rows);
    };
    SelectView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var index = this.model.get('index');
        this.listbox.selectedIndex = index === null ? -1 : index;
    };
    SelectView.prototype._updateOptions = function () {
        this.listbox.textContent = '';
        var items = this.model.get('_options_labels');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var option = document.createElement('option');
            option.textContent = item.replace(/ /g, '\xa0'); // space -> &nbsp;
            option.setAttribute('data-value', encodeURIComponent(item));
            option.value = item;
            this.listbox.appendChild(option);
        }
    };
    SelectView.prototype.events = function () {
        return {
            'change select': '_handle_change'
        };
    };
    /**
     * Handle when a new value is selected.
     */
    SelectView.prototype._handle_change = function () {
        this.model.set('index', this.listbox.selectedIndex, { updated_view: this });
        this.touch();
    };
    return SelectView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var RadioButtonsModel = /** @class */ (function (_super) {
    __extends(RadioButtonsModel, _super);
    function RadioButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'RadioButtonsModel', _view_name: 'RadioButtonsView', tooltips: [], icons: [], button_style: '' });
    };
    return RadioButtonsModel;
}(SelectionModel));

var RadioButtonsView = /** @class */ (function (_super) {
    __extends(RadioButtonsView, _super);
    function RadioButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    RadioButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-radio');
        this.container = document.createElement('div');
        this.el.appendChild(this.container);
        this.container.classList.add('widget-radio-box');
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    RadioButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var radios = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](this.container.querySelectorAll('input[type="radio"]'), 'value');
        var stale = items.length != radios.length;
        if (!stale) {
            for (var i = 0, len = items.length; i < len; ++i) {
                if (radios[i] !== items[i]) {
                    stale = true;
                    break;
                }
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.container.textContent = '';
            items.forEach(function (item, index) {
                var label = document.createElement('label');
                label.textContent = item;
                view.container.appendChild(label);
                var radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.value = index.toString();
                radio.setAttribute('data-value', encodeURIComponent(item));
                label.appendChild(radio);
            });
        }
        items.forEach(function (item, index) {
            var item_query = 'input[data-value="' +
                encodeURIComponent(item) + '"]';
            var radio = view.container.querySelectorAll(item_query);
            if (radio.length > 0) {
                var radio_el = radio[0];
                radio_el.checked = view.model.get('index') === index;
                radio_el.disabled = view.model.get('disabled');
            }
        });
        // Schedule adjustPadding asynchronously to
        // allow dom elements to be created properly
        setTimeout(this.adjustPadding, 0, this);
        return _super.prototype.update.call(this, options);
    };
    /**
     * Adjust Padding to Multiple of Line Height
     *
     * Adjust margins so that the overall height
     * is a multiple of a single line height.
     *
     * This widget needs it because radio options
     * are spaced tighter than individual widgets
     * yet we would like the full widget line up properly
     * when displayed side-by-side with other widgets.
     */
    RadioButtonsView.prototype.adjustPadding = function (e) {
        // Vertical margins on a widget
        var elStyles = window.getComputedStyle(e.el);
        var margins = parseInt(elStyles.marginTop, 10) + parseInt(elStyles.marginBottom, 10);
        // Total spaces taken by a single-line widget
        var lineHeight = e.label.offsetHeight + margins;
        // Current adjustment value on this widget
        var cStyles = window.getComputedStyle(e.container);
        var containerMargin = parseInt(cStyles.marginBottom);
        // How far we are off from a multiple of single windget lines
        var diff = (e.el.offsetHeight + margins - containerMargin) % lineHeight;
        // Apply the new adjustment
        var extraMargin = diff == 0 ? 0 : (lineHeight - diff);
        e.container.style.marginBottom = extraMargin + 'px';
    };
    RadioButtonsView.prototype.events = function () {
        return {
            'click input[type="radio"]': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    RadioButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value), { updated_view: this });
        this.touch();
    };
    return RadioButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var ToggleButtonsStyleModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsStyleModel, _super);
    function ToggleButtonsStyleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsStyleModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ToggleButtonsStyleModel',
        });
    };
    ToggleButtonsStyleModel.styleProperties = __assign({}, _widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"].styleProperties, { button_width: {
            selector: '.widget-toggle-button',
            attribute: 'width',
            default: null
        }, font_weight: {
            selector: '.widget-toggle-button',
            attribute: 'font-weight',
            default: ''
        } });
    return ToggleButtonsStyleModel;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionStyleModel"]));

var ToggleButtonsModel = /** @class */ (function (_super) {
    __extends(ToggleButtonsModel, _super);
    function ToggleButtonsModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'ToggleButtonsModel', _view_name: 'ToggleButtonsView' });
    };
    return ToggleButtonsModel;
}(SelectionModel));

var ToggleButtonsView = /** @class */ (function (_super) {
    __extends(ToggleButtonsView, _super);
    function ToggleButtonsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleButtonsView.prototype.initialize = function (options) {
        this._css_state = {};
        _super.prototype.initialize.call(this, options);
        this.listenTo(this.model, 'change:button_style', this.update_button_style);
    };
    /**
     * Called when view is rendered.
     */
    ToggleButtonsView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-toggle-buttons');
        this.buttongroup = document.createElement('div');
        this.el.appendChild(this.buttongroup);
        this.update();
        this.set_button_style();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ToggleButtonsView.prototype.update = function (options) {
        var view = this;
        var items = this.model.get('_options_labels');
        var icons = this.model.get('icons') || [];
        var previous_icons = this.model.previous('icons') || [];
        var previous_bstyle = ToggleButtonsView.classMap[this.model.previous('button_style')] || '';
        var tooltips = view.model.get('tooltips') || [];
        var disabled = this.model.get('disabled');
        var buttons = this.buttongroup.querySelectorAll('button');
        var values = underscore__WEBPACK_IMPORTED_MODULE_3__["pluck"](buttons, 'value');
        var stale = false;
        for (var i = 0, len = items.length; i < len; ++i) {
            if (values[i] !== items[i] || icons[i] !== previous_icons[i]) {
                stale = true;
                break;
            }
        }
        if (stale && (options === undefined || options.updated_view !== this)) {
            // Add items to the DOM.
            this.buttongroup.textContent = '';
            items.forEach(function (item, index) {
                var item_html;
                var empty = item.trim().length === 0 &&
                    (!icons[index] || icons[index].trim().length === 0);
                if (empty) {
                    item_html = '&nbsp;';
                }
                else {
                    item_html = _utils__WEBPACK_IMPORTED_MODULE_2__["escape_html"](item);
                }
                var icon = document.createElement('i');
                var button = document.createElement('button');
                if (icons[index]) {
                    icon.className = 'fa fa-' + icons[index];
                }
                button.setAttribute('type', 'button');
                button.className = 'widget-toggle-button jupyter-button';
                if (previous_bstyle) {
                    button.classList.add(previous_bstyle);
                }
                button.innerHTML = item_html;
                button.setAttribute('data-value', encodeURIComponent(item));
                button.setAttribute('value', index.toString());
                button.appendChild(icon);
                button.disabled = disabled;
                if (tooltips[index]) {
                    button.setAttribute('title', tooltips[index]);
                }
                view.update_style_traits(button);
                view.buttongroup.appendChild(button);
            });
        }
        // Select active button.
        items.forEach(function (item, index) {
            var item_query = '[data-value="' + encodeURIComponent(item) + '"]';
            var button = view.buttongroup.querySelector(item_query);
            if (view.model.get('index') === index) {
                button.classList.add('mod-active');
            }
            else {
                button.classList.remove('mod-active');
            }
        });
        this.stylePromise.then(function (style) {
            if (style) {
                style.style();
            }
        });
        return _super.prototype.update.call(this, options);
    };
    ToggleButtonsView.prototype.update_style_traits = function (button) {
        for (var name_1 in this._css_state) {
            if (this._css_state.hasOwnProperty(name_1)) {
                if (name_1 === 'margin') {
                    this.buttongroup.style[name_1] = this._css_state[name_1];
                }
                else if (name_1 !== 'width') {
                    if (button) {
                        button.style[name_1] = this._css_state[name_1];
                    }
                    else {
                        var buttons = this.buttongroup
                            .querySelectorAll('button');
                        if (buttons.length) {
                            (buttons[0]).style[name_1] = this._css_state[name_1];
                        }
                    }
                }
            }
        }
    };
    ToggleButtonsView.prototype.update_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.update_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.set_button_style = function () {
        var buttons = this.buttongroup.querySelectorAll('button');
        for (var i = 0; i < buttons.length; i++) {
            this.set_mapped_classes(ToggleButtonsView.classMap, 'button_style', buttons[i]);
        }
    };
    ToggleButtonsView.prototype.events = function () {
        return {
            'click button': '_handle_click'
        };
    };
    /**
     * Handle when a value is clicked.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    ToggleButtonsView.prototype._handle_click = function (event) {
        var target = event.target;
        this.model.set('index', parseInt(target.value, 10), { updated_view: this });
        this.touch();
        // We also send a clicked event, since the value is only set if it changed.
        // See https://github.com/jupyter-widgets/ipywidgets/issues/763
        this.send({ event: 'click' });
    };
    return ToggleButtonsView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

(function (ToggleButtonsView) {
    ToggleButtonsView.classMap = {
        primary: ['mod-primary'],
        success: ['mod-success'],
        info: ['mod-info'],
        warning: ['mod-warning'],
        danger: ['mod-danger']
    };
})(ToggleButtonsView || (ToggleButtonsView = {}));
var SelectionSliderModel = /** @class */ (function (_super) {
    __extends(SelectionSliderModel, _super);
    function SelectionSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionSliderModel;
}(SelectionModel));

var SelectionSliderView = /** @class */ (function (_super) {
    __extends(SelectionSliderView, _super);
    function SelectionSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionSliderView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-hslider');
        this.el.classList.add('widget-slider');
        (this.$slider = jquery__WEBPACK_IMPORTED_MODULE_4___default()('<div />'))
            .slider({
            slide: this.handleSliderChange.bind(this),
            stop: this.handleSliderChanged.bind(this)
        })
            .addClass('slider');
        // Put the slider in a container
        this.slider_container = document.createElement('div');
        this.slider_container.classList.add('slider-container');
        this.slider_container.appendChild(this.$slider[0]);
        this.el.appendChild(this.slider_container);
        this.readout = document.createElement('div');
        this.el.appendChild(this.readout);
        this.readout.classList.add('widget-readout');
        this.readout.style.display = 'none';
        this.listenTo(this.model, 'change:slider_color', function (sender, value) {
            _this.$slider.find('a').css('background', value);
        });
        this.$slider.find('a').css('background', this.model.get('slider_color'));
        // Set defaults.
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    SelectionSliderView.prototype.update = function (options) {
        if (options === undefined || options.updated_view !== this) {
            var labels = this.model.get('_options_labels');
            var max = labels.length - 1;
            var min = 0;
            this.$slider.slider('option', 'step', 1);
            this.$slider.slider('option', 'max', max);
            this.$slider.slider('option', 'min', min);
            // WORKAROUND FOR JQUERY SLIDER BUG.
            // The horizontal position of the slider handle
            // depends on the value of the slider at the time
            // of orientation change.  Before applying the new
            // workaround, we set the value to the minimum to
            // make sure that the horizontal placement of the
            // handle in the vertical slider is always
            // consistent.
            var orientation_1 = this.model.get('orientation');
            this.$slider.slider('option', 'value', min);
            this.$slider.slider('option', 'orientation', orientation_1);
            var disabled = this.model.get('disabled');
            this.$slider.slider('option', 'disabled', disabled);
            if (disabled) {
                this.readout.contentEditable = 'false';
            }
            else {
                this.readout.contentEditable = 'true';
            }
            // Use the right CSS classes for vertical & horizontal sliders
            if (orientation_1 === 'vertical') {
                this.el.classList.remove('widget-hslider');
                this.el.classList.remove('widget-inline-hbox');
                this.el.classList.add('widget-vslider');
                this.el.classList.add('widget-inline-vbox');
            }
            else {
                this.el.classList.remove('widget-vslider');
                this.el.classList.remove('widget-inline-vbox');
                this.el.classList.add('widget-hslider');
                this.el.classList.add('widget-inline-hbox');
            }
            var readout = this.model.get('readout');
            if (readout) {
                // this.$readout.show();
                this.readout.style.display = '';
            }
            else {
                // this.$readout.hide();
                this.readout.style.display = 'none';
            }
            this.updateSelection();
        }
        return _super.prototype.update.call(this, options);
    };
    SelectionSliderView.prototype.events = function () {
        return {
            'slide': 'handleSliderChange',
            'slidestop': 'handleSliderChanged'
        };
    };
    SelectionSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'value', index);
        this.updateReadout(index);
    };
    SelectionSliderView.prototype.updateReadout = function (index) {
        var value = this.model.get('_options_labels')[index];
        this.readout.textContent = value;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionSliderView.prototype.handleSliderChanged = function (e, ui) {
        this.updateReadout(ui.value);
        this.model.set('index', ui.value, { updated_view: this });
        this.touch();
    };
    return SelectionSliderView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var MultipleSelectionModel = /** @class */ (function (_super) {
    __extends(MultipleSelectionModel, _super);
    function MultipleSelectionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleSelectionModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'MultipleSelectionModel' });
    };
    return MultipleSelectionModel;
}(SelectionModel));

var SelectMultipleModel = /** @class */ (function (_super) {
    __extends(SelectMultipleModel, _super);
    function SelectMultipleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectMultipleModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectMultipleModel', _view_name: 'SelectMultipleView', rows: null });
    };
    return SelectMultipleModel;
}(MultipleSelectionModel));

var SelectMultipleView = /** @class */ (function (_super) {
    __extends(SelectMultipleView, _super);
    function SelectMultipleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor.
     */
    SelectMultipleView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.listbox.multiple = true;
    };
    /**
     * Called when view is rendered.
     */
    SelectMultipleView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('widget-select-multiple');
    };
    SelectMultipleView.prototype.updateSelection = function (options) {
        if (options === void 0) { options = {}; }
        if (options.updated_view === this) {
            return;
        }
        var selected = this.model.get('index') || [];
        var listboxOptions = this.listbox.options;
        // Clear the selection
        this.listbox.selectedIndex = -1;
        // Select the appropriate options
        selected.forEach(function (i) {
            listboxOptions[i].selected = true;
        });
    };
    /**
     * Handle when a new value is selected.
     */
    SelectMultipleView.prototype._handle_change = function () {
        var index = Array.prototype.map
            .call(this.listbox.selectedOptions || [], function (option) {
            return option.index;
        });
        this.model.set('index', index, { updated_view: this });
        this.touch();
    };
    return SelectMultipleView;
}(SelectView));

var SelectionRangeSliderModel = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderModel, _super);
    function SelectionRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionRangeSliderModel.prototype.defaults = function () {
        return __assign({}, _super.prototype.defaults.call(this), { _model_name: 'SelectionSliderModel', _view_name: 'SelectionSliderView', orientation: 'horizontal', readout: true, continuous_update: true });
    };
    return SelectionRangeSliderModel;
}(MultipleSelectionModel));

var SelectionRangeSliderView = /** @class */ (function (_super) {
    __extends(SelectionRangeSliderView, _super);
    function SelectionRangeSliderView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Called when view is rendered.
     */
    SelectionRangeSliderView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.$slider.slider('option', 'range', true);
    };
    SelectionRangeSliderView.prototype.updateSelection = function () {
        var index = this.model.get('index');
        this.$slider.slider('option', 'values', index.slice());
        this.updateReadout(index);
    };
    SelectionRangeSliderView.prototype.updateReadout = function (index) {
        var labels = this.model.get('_options_labels');
        var minValue = labels[index[0]];
        var maxValue = labels[index[1]];
        this.readout.textContent = minValue + "-" + maxValue;
    };
    /**
     * Called when the slider value is changing.
     */
    SelectionRangeSliderView.prototype.handleSliderChange = function (e, ui) {
        this.updateReadout(ui.values);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    SelectionRangeSliderView.prototype.handleSliderChanged = function (e, ui) {
        // The jqueryui documentation indicates ui.values doesn't exist on the slidestop event,
        // but it appears that it actually does: https://github.com/jquery/jquery-ui/blob/ae31f2b3b478975f70526bdf3299464b9afa8bb1/ui/widgets/slider.js#L313
        this.updateReadout(ui.values);
        this.model.set('index', ui.values.slice(), { updated_view: this });
        this.touch();
    };
    return SelectionRangeSliderView;
}(SelectionSliderView));



/***/ }),

/***/ "dpys":
/*!*************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/phosphor/tabpanel.js ***!
  \*************************************************************************/
/*! exports provided: EventedPanel, TabPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventedPanel", function() { return EventedPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPanel", function() { return TabPanel; });
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @phosphor/signaling */ "qUp9");
/* harmony import */ var _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @phosphor/domutils */ "XWTc");
/* harmony import */ var _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__);
/* This file has code derived from PhosphorJS. The license for this PhosphorJS code is:

Copyright (c) 2014-2017, PhosphorJS Contributors
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * A panel where visible widgets are stacked atop one another.
 *
 * #### Notes
 * This class provides a convenience wrapper around a [[PanelLayout]].
 */
var EventedPanel = /** @class */ (function (_super) {
    __extends(EventedPanel, _super);
    function EventedPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._widgetRemoved = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        return _this;
    }
    Object.defineProperty(EventedPanel.prototype, "widgetRemoved", {
        /**
         * A signal emitted when a widget is removed from the panel.
         */
        get: function () {
            return this._widgetRemoved;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A message handler invoked on a `'child-removed'` message.
     */
    EventedPanel.prototype.onChildRemoved = function (msg) {
        this._widgetRemoved.emit(msg.child);
    };
    return EventedPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Panel"]));

/**
 * A widget which combines a `TabBar` and a `EventedPanel`.
 *
 * #### Notes
 * This is a simple panel which handles the common case of a tab bar
 * placed next to a content area. The selected tab controls the widget
 * which is shown in the content area.
 *
 * For use cases which require more control than is provided by this
 * panel, the `TabBar` widget may be used independently.
 *
 * TODO: Support setting the direction??
 */
var TabPanel = /** @class */ (function (_super) {
    __extends(TabPanel, _super);
    /**
     * Construct a new tab panel.
     *
     * @param options - The options for initializing the tab panel.
     */
    function TabPanel(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._currentChanged = new _phosphor_signaling__WEBPACK_IMPORTED_MODULE_1__["Signal"](_this);
        _this.addClass('p-TabPanel');
        // Create the tab bar and contents panel.
        _this.tabBar = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["TabBar"](options);
        _this.tabBar.addClass('p-TabPanel-tabBar');
        _this.tabContents = new EventedPanel();
        _this.tabContents.addClass('p-TabPanel-tabContents');
        // Connect the tab bar signal handlers.
        _this.tabBar.tabMoved.connect(_this._onTabMoved, _this);
        _this.tabBar.currentChanged.connect(_this._onCurrentChanged, _this);
        _this.tabBar.tabCloseRequested.connect(_this._onTabCloseRequested, _this);
        _this.tabBar.tabActivateRequested.connect(_this._onTabActivateRequested, _this);
        // Connect the evented panel signal handlers.
        _this.tabContents.widgetRemoved.connect(_this._onWidgetRemoved, _this);
        // Create the layout.
        var layout = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["PanelLayout"]();
        // Add the child widgets to the layout.
        layout.addWidget(_this.tabBar);
        layout.addWidget(_this.tabContents);
        // Install the layout on the tab panel.
        _this.layout = layout;
        return _this;
    }
    Object.defineProperty(TabPanel.prototype, "currentChanged", {
        /**
         * A signal emitted when the current tab is changed.
         *
         * #### Notes
         * This signal is emitted when the currently selected tab is changed
         * either through user or programmatic interaction.
         *
         * Notably, this signal is not emitted when the index of the current
         * tab changes due to tabs being inserted, removed, or moved. It is
         * only emitted when the actual current tab node is changed.
         */
        get: function () {
            return this._currentChanged;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentIndex", {
        /**
         * Get the index of the currently selected tab.
         *
         * #### Notes
         * This will be `null` if no tab is selected.
         */
        get: function () {
            var currentIndex = this.tabBar.currentIndex;
            // Phosphor tab bars have an index of -1 if no tab is selected
            return (currentIndex === -1 ? null : currentIndex);
        },
        /**
         * Set the index of the currently selected tab.
         *
         * #### Notes
         * If the index is out of range, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentIndex = (value === null ? -1 : value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "currentWidget", {
        /**
         * Get the currently selected widget.
         *
         * #### Notes
         * This will be `null` if there is no selected tab.
         */
        get: function () {
            var title = this.tabBar.currentTitle;
            return title ? title.owner : null;
        },
        /**
         * Set the currently selected widget.
         *
         * #### Notes
         * If the widget is not in the panel, it will be set to `null`.
         */
        set: function (value) {
            this.tabBar.currentTitle = value ? value.title : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "tabsMovable", {
        /**
         * Get the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        get: function () {
            return this.tabBar.tabsMovable;
        },
        /**
         * Set the whether the tabs are movable by the user.
         *
         * #### Notes
         * Tabs can always be moved programmatically.
         */
        set: function (value) {
            this.tabBar.tabsMovable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabPanel.prototype, "widgets", {
        /**
         * A read-only array of the widgets in the panel.
         */
        get: function () {
            return this.tabContents.widgets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Add a widget to the end of the tab panel.
     *
     * @param widget - The widget to add to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.addWidget = function (widget) {
        this.insertWidget(this.widgets.length, widget);
    };
    /**
     * Insert a widget into the tab panel at a specified index.
     *
     * @param index - The index at which to insert the widget.
     *
     * @param widget - The widget to insert into to the tab panel.
     *
     * #### Notes
     * If the widget is already contained in the panel, it will be moved.
     *
     * The widget's `title` is used to populate the tab.
     */
    TabPanel.prototype.insertWidget = function (index, widget) {
        if (widget !== this.currentWidget) {
            widget.hide();
        }
        this.tabContents.insertWidget(index, widget);
        this.tabBar.insertTab(index, widget.title);
    };
    /**
     * Handle the `currentChanged` signal from the tab bar.
     */
    TabPanel.prototype._onCurrentChanged = function (sender, args) {
        // Extract the previous and current title from the args.
        var previousIndex = args.previousIndex, previousTitle = args.previousTitle, currentIndex = args.currentIndex, currentTitle = args.currentTitle;
        // Extract the widgets from the titles.
        var previousWidget = previousTitle ? previousTitle.owner : null;
        var currentWidget = currentTitle ? currentTitle.owner : null;
        // Hide the previous widget.
        if (previousWidget) {
            previousWidget.hide();
        }
        // Show the current widget.
        if (currentWidget) {
            currentWidget.show();
        }
        // Emit the `currentChanged` signal for the tab panel.
        this._currentChanged.emit({
            previousIndex: previousIndex, previousWidget: previousWidget, currentIndex: currentIndex, currentWidget: currentWidget
        });
        // Flush the message loop on IE and Edge to prevent flicker.
        if (_phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_EDGE || _phosphor_domutils__WEBPACK_IMPORTED_MODULE_2__["Platform"].IS_IE) {
            _phosphor_messaging__WEBPACK_IMPORTED_MODULE_0__["MessageLoop"].flush();
        }
    };
    /**
     * Handle the `tabActivateRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabActivateRequested = function (sender, args) {
        args.title.owner.activate();
    };
    /**
     * Handle the `tabCloseRequested` signal from the tab bar.
     */
    TabPanel.prototype._onTabCloseRequested = function (sender, args) {
        args.title.owner.close();
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabPanel.prototype._onTabMoved = function (sender, args) {
        this.tabContents.insertWidget(args.toIndex, args.title.owner);
    };
    /**
     * Handle the `widgetRemoved` signal from the stacked panel.
     */
    TabPanel.prototype._onWidgetRemoved = function (sender, widget) {
        this.tabBar.removeTab(widget.title);
    };
    return TabPanel;
}(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_3__["Widget"]));



/***/ }),

/***/ "iBkU":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_audio.js ***!
  \********************************************************************/
/*! exports provided: AudioModel, AudioView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioModel", function() { return AudioModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioView", function() { return AudioView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var AudioModel = /** @class */ (function (_super) {
    __extends(AudioModel, _super);
    function AudioModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AudioModel',
            _view_name: 'AudioView',
            format: 'mp3',
            autoplay: true,
            loop: true,
            controls: true,
            value: new DataView(new ArrayBuffer(0))
        });
    };
    AudioModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return AudioModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var AudioView = /** @class */ (function (_super) {
    __extends(AudioView, _super);
    function AudioView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.update(); // Set defaults.
    };
    AudioView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "audio/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        // Audio attributes
        this.el.loop = this.model.get('loop');
        this.el.autoplay = this.model.get('autoplay');
        this.el.controls = this.model.get('controls');
        return _super.prototype.update.call(this);
    };
    AudioView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(AudioView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'audio';
        },
        enumerable: true,
        configurable: true
    });
    return AudioView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "iGnl":
/*!****************************************************!*\
  !*** ./node_modules/jquery-ui/ui/widgets/mouse.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Mouse 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Mouse
//>>group: Widgets
//>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
//>>docs: http://api.jqueryui.com/mouse/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
			__webpack_require__(/*! jquery */ "EVdn"),
			__webpack_require__(/*! ../ie */ "NHgk"),
			__webpack_require__(/*! ../version */ "Qwlt"),
			__webpack_require__(/*! ../widget */ "MIQu")
		], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}( function( $ ) {

var mouseHandled = false;
$( document ).on( "mouseup", function() {
	mouseHandled = false;
} );

return $.widget( "ui.mouse", {
	version: "1.12.1",
	options: {
		cancel: "input, textarea, button, select, option",
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var that = this;

		this.element
			.on( "mousedown." + this.widgetName, function( event ) {
				return that._mouseDown( event );
			} )
			.on( "click." + this.widgetName, function( event ) {
				if ( true === $.data( event.target, that.widgetName + ".preventClickEvent" ) ) {
					$.removeData( event.target, that.widgetName + ".preventClickEvent" );
					event.stopImmediatePropagation();
					return false;
				}
			} );

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.off( "." + this.widgetName );
		if ( this._mouseMoveDelegate ) {
			this.document
				.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
				.off( "mouseup." + this.widgetName, this._mouseUpDelegate );
		}
	},

	_mouseDown: function( event ) {

		// don't let more than one widget handle mouseStart
		if ( mouseHandled ) {
			return;
		}

		this._mouseMoved = false;

		// We may have missed mouseup (out of window)
		( this._mouseStarted && this._mouseUp( event ) );

		this._mouseDownEvent = event;

		var that = this,
			btnIsLeft = ( event.which === 1 ),

			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = ( typeof this.options.cancel === "string" && event.target.nodeName ?
				$( event.target ).closest( this.options.cancel ).length : false );
		if ( !btnIsLeft || elIsCancel || !this._mouseCapture( event ) ) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if ( !this.mouseDelayMet ) {
			this._mouseDelayTimer = setTimeout( function() {
				that.mouseDelayMet = true;
			}, this.options.delay );
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted = ( this._mouseStart( event ) !== false );
			if ( !this._mouseStarted ) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if ( true === $.data( event.target, this.widgetName + ".preventClickEvent" ) ) {
			$.removeData( event.target, this.widgetName + ".preventClickEvent" );
		}

		// These delegates are required to keep context
		this._mouseMoveDelegate = function( event ) {
			return that._mouseMove( event );
		};
		this._mouseUpDelegate = function( event ) {
			return that._mouseUp( event );
		};

		this.document
			.on( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.on( "mouseup." + this.widgetName, this._mouseUpDelegate );

		event.preventDefault();

		mouseHandled = true;
		return true;
	},

	_mouseMove: function( event ) {

		// Only check for mouseups outside the document if you've moved inside the document
		// at least once. This prevents the firing of mouseup in the case of IE<9, which will
		// fire a mousemove event if content is placed under the cursor. See #7778
		// Support: IE <9
		if ( this._mouseMoved ) {

			// IE mouseup check - mouseup happened when mouse was out of window
			if ( $.ui.ie && ( !document.documentMode || document.documentMode < 9 ) &&
					!event.button ) {
				return this._mouseUp( event );

			// Iframe mouseup check - mouseup occurred in another document
			} else if ( !event.which ) {

				// Support: Safari <=8 - 9
				// Safari sets which to 0 if you press any of the following keys
				// during a drag (#14461)
				if ( event.originalEvent.altKey || event.originalEvent.ctrlKey ||
						event.originalEvent.metaKey || event.originalEvent.shiftKey ) {
					this.ignoreMissingWhich = true;
				} else if ( !this.ignoreMissingWhich ) {
					return this._mouseUp( event );
				}
			}
		}

		if ( event.which || event.button ) {
			this._mouseMoved = true;
		}

		if ( this._mouseStarted ) {
			this._mouseDrag( event );
			return event.preventDefault();
		}

		if ( this._mouseDistanceMet( event ) && this._mouseDelayMet( event ) ) {
			this._mouseStarted =
				( this._mouseStart( this._mouseDownEvent, event ) !== false );
			( this._mouseStarted ? this._mouseDrag( event ) : this._mouseUp( event ) );
		}

		return !this._mouseStarted;
	},

	_mouseUp: function( event ) {
		this.document
			.off( "mousemove." + this.widgetName, this._mouseMoveDelegate )
			.off( "mouseup." + this.widgetName, this._mouseUpDelegate );

		if ( this._mouseStarted ) {
			this._mouseStarted = false;

			if ( event.target === this._mouseDownEvent.target ) {
				$.data( event.target, this.widgetName + ".preventClickEvent", true );
			}

			this._mouseStop( event );
		}

		if ( this._mouseDelayTimer ) {
			clearTimeout( this._mouseDelayTimer );
			delete this._mouseDelayTimer;
		}

		this.ignoreMissingWhich = false;
		mouseHandled = false;
		event.preventDefault();
	},

	_mouseDistanceMet: function( event ) {
		return ( Math.max(
				Math.abs( this._mouseDownEvent.pageX - event.pageX ),
				Math.abs( this._mouseDownEvent.pageY - event.pageY )
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function( /* event */ ) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function( /* event */ ) {},
	_mouseDrag: function( /* event */ ) {},
	_mouseStop: function( /* event */ ) {},
	_mouseCapture: function( /* event */ ) { return true; }
} );

} ) );


/***/ }),

/***/ "iPdL":
/*!*************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/package.json ***!
  \*************************************************************/
/*! exports provided: name, version, description, repository, license, author, files, main, typings, scripts, dependencies, devDependencies, gitHead, default */
/***/ (function(module) {

module.exports = {"name":"@jupyter-widgets/controls","version":"1.5.2","description":"Jupyter interactive widgets","repository":{"type":"git","url":"https://github.com/jupyter-widgets/ipywidgets.git"},"license":"BSD-3-Clause","author":"Project Jupyter","files":["lib/**/*.d.ts","lib/**/*.js","css/*.css","dist/"],"main":"lib/index.js","typings":"lib/index.d.ts","scripts":{"build":"npm run build:src && npm run build:css","build:css":"postcss --use postcss-import --use postcss-cssnext -o css/widgets.built.css css/widgets.css","build:src":"tsc","build:test":"tsc --project test && webpack --config test/webpack.conf.js","clean":"npm run clean:src","clean:src":"rimraf lib && rimraf tsconfig.tsbuildinfo","lint":"tslint --project tslint.json --format stylish","prepublish":"npm run clean && npm run build","test":"npm run test:unit","test:coverage":"npm run build:test && webpack --config test/webpack-cov.conf.js && karma start test/karma-cov.conf.js","test:unit":"npm run test:unit:firefox && npm run test:unit:chrome","test:unit:chrome":"npm run test:unit:default -- --browsers=Chrome","test:unit:default":"npm run build:test && karma start test/karma.conf.js --log-level debug","test:unit:firefox":"npm run test:unit:default -- --browsers=Firefox","test:unit:ie":"npm run test:unit:default -- --browsers=IE"},"dependencies":{"@jupyter-widgets/base":"^1.0.0 || ^2.0.0","@phosphor/algorithm":"^1.1.0","@phosphor/domutils":"^1.1.0","@phosphor/messaging":"^1.2.1","@phosphor/signaling":"^1.2.0","@phosphor/widgets":"^1.3.0","d3-format":"^1.3.0","jquery":"^3.1.1","jquery-ui":"^1.12.1","underscore":"^1.8.3"},"devDependencies":{"@jupyterlab/services":"^2.0.0 || ^3.0.0 || ^4.0.0","@types/d3-format":"^1.3.1","@types/expect.js":"^0.3.29","@types/mathjax":"^0.0.35","@types/mocha":"^5.2.7","@types/node":"^12.0.10","chai":"^4.0.0","css-loader":"^3.0.0","expect.js":"^0.3.1","file-loader":"^4.0.0","istanbul-instrumenter-loader":"^3.0.1","json-loader":"^0.5.7","karma":"^4.1.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.2","karma-firefox-launcher":"^1.1.0","karma-ie-launcher":"^1.0.0","karma-mocha":"^1.3.0","karma-mocha-reporter":"^2.2.5","karma-webpack":"^4.0.2","mocha":"^6.1.4","npm-run-all":"^4.1.5","postcss-cli":"^6.1.2","postcss-cssnext":"^3.1.0","postcss-import":"^12.0.1","postcss-loader":"^3.0.0","rimraf":"^2.6.1","sinon":"^7.3.2","sinon-chai":"^3.3.0","style-loader":"^0.23.1","tslint":"^5.18.0","typescript":"~3.5.2","url-loader":"^2.0.0","webpack":"^4.35.0"},"gitHead":"4bbe07f28042b218f8566dd0df60e92e2b38b29b"};

/***/ }),

/***/ "jSVB":
/*!******************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_box.js ***!
  \******************************************************************/
/*! exports provided: BoxModel, HBoxModel, VBoxModel, BoxView, HBoxView, VBoxView, GridBoxView, GridBoxModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxModel", function() { return BoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxModel", function() { return HBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxModel", function() { return VBoxModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxView", function() { return BoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HBoxView", function() { return HBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VBoxView", function() { return VBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxView", function() { return GridBoxView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridBoxModel", function() { return GridBoxModel; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};








var BoxModel = /** @class */ (function (_super) {
    __extends(BoxModel, _super);
    function BoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'BoxView',
            _model_name: 'BoxModel',
            children: [],
            box_style: ''
        });
    };
    BoxModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { children: { deserialize: _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["unpack_models"] } });
    return BoxModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var HBoxModel = /** @class */ (function (_super) {
    __extends(HBoxModel, _super);
    function HBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'HBoxView',
            _model_name: 'HBoxModel',
        });
    };
    return HBoxModel;
}(BoxModel));

var VBoxModel = /** @class */ (function (_super) {
    __extends(VBoxModel, _super);
    function VBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'VBoxView',
            _model_name: 'VBoxModel',
        });
    };
    return VBoxModel;
}(BoxModel));

var BoxView = /** @class */ (function (_super) {
    __extends(BoxView, _super);
    function BoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoxView.prototype._createElement = function (tagName) {
        this.pWidget = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["JupyterPhosphorPanelWidget"]({ view: this });
        return this.pWidget.node;
    };
    BoxView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Boxes don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this.pWidget.node);
    };
    BoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_model, null, this);
        this.listenTo(this.model, 'change:children', this.update_children);
        this.listenTo(this.model, 'change:box_style', this.update_box_style);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-container');
        this.pWidget.addClass('widget-box');
    };
    BoxView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.update_children();
        this.set_box_style();
    };
    BoxView.prototype.update_children = function () {
        this.children_views.update(this.model.get('children')).then(function (views) {
            // Notify all children that their sizes may have changed.
            views.forEach(function (view) {
                _phosphor_messaging__WEBPACK_IMPORTED_MODULE_4__["MessageLoop"].postMessage(view.pWidget, _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"].ResizeMessage.UnknownSize);
            });
        });
    };
    BoxView.prototype.update_box_style = function () {
        this.update_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.set_box_style = function () {
        this.set_mapped_classes(BoxView.class_map, 'box_style');
    };
    BoxView.prototype.add_child_model = function (model) {
        var _this = this;
        // we insert a dummy element so the order is preserved when we add
        // the rendered content later.
        var dummy = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_5__["Widget"]();
        this.pWidget.addWidget(dummy);
        return this.create_child_view(model).then(function (view) {
            // replace the dummy widget with the new one.
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_3__["ArrayExt"].firstIndexOf(_this.pWidget.widgets, dummy);
            _this.pWidget.insertWidget(i, view.pWidget);
            dummy.dispose();
            return view;
        }).catch(Object(_utils__WEBPACK_IMPORTED_MODULE_2__["reject"])('Could not add child view to box', true));
    };
    BoxView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    BoxView.class_map = {
        success: ['alert', 'alert-success'],
        info: ['alert', 'alert-info'],
        warning: ['alert', 'alert-warning'],
        danger: ['alert', 'alert-danger']
    };
    return BoxView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var HBoxView = /** @class */ (function (_super) {
    __extends(HBoxView, _super);
    function HBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    HBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-hbox');
    };
    return HBoxView;
}(BoxView));

var VBoxView = /** @class */ (function (_super) {
    __extends(VBoxView, _super);
    function VBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    VBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-vbox');
    };
    return VBoxView;
}(BoxView));

var GridBoxView = /** @class */ (function (_super) {
    __extends(GridBoxView, _super);
    function GridBoxView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Public constructor
     */
    GridBoxView.prototype.initialize = function (parameters) {
        _super.prototype.initialize.call(this, parameters);
        this.pWidget.addClass('widget-gridbox');
        // display needn't be set to flex and grid 
        this.pWidget.removeClass('widget-box');
    };
    return GridBoxView;
}(BoxView));

var GridBoxModel = /** @class */ (function (_super) {
    __extends(GridBoxModel, _super);
    function GridBoxModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridBoxModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_6__["extend"](_super.prototype.defaults.call(this), {
            _view_name: 'GridBoxView',
            _model_name: 'GridBoxModel',
        });
    };
    return GridBoxModel;
}(BoxModel));



/***/ }),

/***/ "kds9":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "lGQ9":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_color.js ***!
  \********************************************************************/
/*! exports provided: ColorPickerModel, ColorPickerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModel", function() { return ColorPickerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerView", function() { return ColorPickerView; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var _widget_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_description */ "1OD8");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_3__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var ColorPickerModel = /** @class */ (function (_super) {
    __extends(ColorPickerModel, _super);
    function ColorPickerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_3__["extend"](_super.prototype.defaults.call(this), {
            value: 'black',
            concise: false,
            _model_name: 'ColorPickerModel',
            _view_name: 'ColorPickerView'
        });
    };
    return ColorPickerModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var ColorPickerView = /** @class */ (function (_super) {
    __extends(ColorPickerView, _super);
    function ColorPickerView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorPickerView.prototype.render = function () {
        _super.prototype.render.call(this);
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('widget-inline-hbox');
        this.el.classList.add('widget-colorpicker');
        this._color_container = document.createElement('div');
        this._color_container.className = 'widget-inline-hbox widget-colorpicker-input';
        this.el.appendChild(this._color_container);
        this._textbox = document.createElement('input');
        this._textbox.setAttribute('type', 'text');
        this._textbox.id = this.label.htmlFor = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["uuid"])();
        this._color_container.appendChild(this._textbox);
        this._textbox.value = this.model.get('value');
        this._colorpicker = document.createElement('input');
        this._colorpicker.setAttribute('type', 'color');
        this._color_container.appendChild(this._colorpicker);
        this.listenTo(this.model, 'change:value', this._update_value);
        this.listenTo(this.model, 'change:concise', this._update_concise);
        this._update_concise();
        this._update_value();
        this.update();
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed. The model may have been
     * changed by another view or by a state update from the back-end.
     */
    ColorPickerView.prototype.update = function (options) {
        if (options === undefined || options.updated_view != this) {
            var disabled = this.model.get('disabled');
            this._textbox.disabled = disabled;
            this._colorpicker.disabled = disabled;
        }
        return _super.prototype.update.call(this);
    };
    ColorPickerView.prototype.events = function () {
        // Typescript doesn't understand that these functions are called, so we
        // specifically use them here so it knows they are being used.
        void this._picker_change;
        void this._text_change;
        return {
            'change [type="color"]': '_picker_change',
            'change [type="text"]': '_text_change'
        };
    };
    ColorPickerView.prototype._update_value = function () {
        var value = this.model.get('value');
        this._colorpicker.value = color2hex(value);
        this._textbox.value = value;
    };
    ColorPickerView.prototype._update_concise = function () {
        var concise = this.model.get('concise');
        if (concise) {
            this.el.classList.add('concise');
            this._textbox.style.display = 'none';
        }
        else {
            this.el.classList.remove('concise');
            this._textbox.style.display = '';
        }
    };
    ColorPickerView.prototype._picker_change = function () {
        this.model.set('value', this._colorpicker.value);
        this.touch();
    };
    ColorPickerView.prototype._text_change = function () {
        var value = this._validate_color(this._textbox.value, this.model.get('value'));
        this.model.set('value', value);
        this.touch();
    };
    ColorPickerView.prototype._validate_color = function (color, fallback) {
        return color.match(/#[a-fA-F0-9]{3}(?:[a-fA-F0-9]{3})?$/) ||
            named_colors[color.toLowerCase()] ? color : fallback;
    };
    return ColorPickerView;
}(_widget_description__WEBPACK_IMPORTED_MODULE_1__["DescriptionView"]));

var named_colors = { aliceblue: '#f0f8ff', antiquewhite: '#faebd7', aqua: '#00ffff', aquamarine: '#7fffd4', azure: '#f0ffff', beige: '#f5f5dc', bisque: '#ffe4c4', black: '#000000', blanchedalmond: '#ffebcd', blue: '#0000ff', blueviolet: '#8a2be2', brown: '#a52a2a', burlywood: '#deb887', cadetblue: '#5f9ea0', chartreuse: '#7fff00', chocolate: '#d2691e', coral: '#ff7f50', cornflowerblue: '#6495ed', cornsilk: '#fff8dc', crimson: '#dc143c', cyan: '#00ffff', darkblue: '#00008b', darkcyan: '#008b8b', darkgoldenrod: '#b8860b', darkgray: '#a9a9a9', darkgrey: '#a9a9a9', darkgreen: '#006400', darkkhaki: '#bdb76b', darkmagenta: '#8b008b', darkolivegreen: '#556b2f', darkorange: '#ff8c00', darkorchid: '#9932cc', darkred: '#8b0000', darksalmon: '#e9967a', darkseagreen: '#8fbc8f', darkslateblue: '#483d8b', darkslategray: '#2f4f4f', darkslategrey: '#2f4f4f', darkturquoise: '#00ced1', darkviolet: '#9400d3', deeppink: '#ff1493', deepskyblue: '#00bfff', dimgray: '#696969', dimgrey: '#696969', dodgerblue: '#1e90ff', firebrick: '#b22222', floralwhite: '#fffaf0', forestgreen: '#228b22', fuchsia: '#ff00ff', gainsboro: '#dcdcdc', ghostwhite: '#f8f8ff', gold: '#ffd700', goldenrod: '#daa520', gray: '#808080', grey: '#808080', green: '#008000', greenyellow: '#adff2f', honeydew: '#f0fff0', hotpink: '#ff69b4', indianred: '#cd5c5c', indigo: '#4b0082', ivory: '#fffff0', khaki: '#f0e68c', lavender: '#e6e6fa', lavenderblush: '#fff0f5', lawngreen: '#7cfc00', lemonchiffon: '#fffacd', lightblue: '#add8e6', lightcoral: '#f08080', lightcyan: '#e0ffff', lightgoldenrodyellow: '#fafad2', lightgreen: '#90ee90', lightgray: '#d3d3d3', lightgrey: '#d3d3d3', lightpink: '#ffb6c1', lightsalmon: '#ffa07a', lightseagreen: '#20b2aa', lightskyblue: '#87cefa', lightslategray: '#778899', lightslategrey: '#778899', lightsteelblue: '#b0c4de', lightyellow: '#ffffe0', lime: '#00ff00', limegreen: '#32cd32', linen: '#faf0e6', magenta: '#ff00ff', maroon: '#800000', mediumaquamarine: '#66cdaa', mediumblue: '#0000cd', mediumorchid: '#ba55d3', mediumpurple: '#9370db', mediumseagreen: '#3cb371', mediumslateblue: '#7b68ee', mediumspringgreen: '#00fa9a', mediumturquoise: '#48d1cc', mediumvioletred: '#c71585', midnightblue: '#191970', mintcream: '#f5fffa', mistyrose: '#ffe4e1', moccasin: '#ffe4b5', navajowhite: '#ffdead', navy: '#000080', oldlace: '#fdf5e6', olive: '#808000', olivedrab: '#6b8e23', orange: '#ffa500', orangered: '#ff4500', orchid: '#da70d6', palegoldenrod: '#eee8aa', palegreen: '#98fb98', paleturquoise: '#afeeee', palevioletred: '#db7093', papayawhip: '#ffefd5', peachpuff: '#ffdab9', peru: '#cd853f', pink: '#ffc0cb', plum: '#dda0dd', powderblue: '#b0e0e6', purple: '#800080', red: '#ff0000', rosybrown: '#bc8f8f', royalblue: '#4169e1', saddlebrown: '#8b4513', salmon: '#fa8072', sandybrown: '#f4a460', seagreen: '#2e8b57', seashell: '#fff5ee', sienna: '#a0522d', silver: '#c0c0c0', skyblue: '#87ceeb', slateblue: '#6a5acd', slategray: '#708090', slategrey: '#708090', snow: '#fffafa', springgreen: '#00ff7f', steelblue: '#4682b4', tan: '#d2b48c', teal: '#008080', thistle: '#d8bfd8', tomato: '#ff6347', turquoise: '#40e0d0', violet: '#ee82ee', wheat: '#f5deb3', white: '#ffffff', whitesmoke: '#f5f5f5', yellow: '#ffff00', yellowgreen: '#9acd32', };
/*
 * From a valid html color (named color, 6-digits or 3-digits hex format)
 * return a 6-digits hexadecimal color #rrggbb.
 */
function color2hex(color) {
    return named_colors[color.toLowerCase()] || rgb3_to_rgb6(color);
}
function rgb3_to_rgb6(rgb) {
    if (rgb.length === 7) {
        return rgb;
    }
    else {
        return '#' + rgb.charAt(1) + rgb.charAt(1) +
            rgb.charAt(2) + rgb.charAt(2) +
            rgb.charAt(3) + rgb.charAt(3);
    }
}


/***/ }),

/***/ "mHFb":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "p/1U":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "qnQu");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "qnQu":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "rCYf":
/*!*********************************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_selectioncontainer.js ***!
  \*********************************************************************************/
/*! exports provided: SelectionContainerModel, AccordionModel, JupyterPhosphorAccordionWidget, AccordionView, TabModel, JupyterPhosphorTabPanelWidget, TabView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionContainerModel", function() { return SelectionContainerModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModel", function() { return AccordionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorAccordionWidget", function() { return JupyterPhosphorAccordionWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionView", function() { return AccordionView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabModel", function() { return TabModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JupyterPhosphorTabPanelWidget", function() { return JupyterPhosphorTabPanelWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabView", function() { return TabView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_box */ "jSVB");
/* harmony import */ var _phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phosphor/tabpanel */ "dpys");
/* harmony import */ var _phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./phosphor/accordion */ "4IhH");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @phosphor/widgets */ "pif5");
/* harmony import */ var _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @phosphor/algorithm */ "rqNV");
/* harmony import */ var _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @phosphor/messaging */ "hpl1");
/* harmony import */ var _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils */ "SisM");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();










var SelectionContainerModel = /** @class */ (function (_super) {
    __extends(SelectionContainerModel, _super);
    function SelectionContainerModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionContainerModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'SelectionContainerModel',
            selected_index: 0,
            _titles: {}
        });
    };
    return SelectionContainerModel;
}(_widget_box__WEBPACK_IMPORTED_MODULE_1__["BoxModel"]));

var AccordionModel = /** @class */ (function (_super) {
    __extends(AccordionModel, _super);
    function AccordionModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'AccordionModel',
            _view_name: 'AccordionView'
        });
    };
    return AccordionModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorAccordionWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorAccordionWidget, _super);
    function JupyterPhosphorAccordionWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        return _this;
    }
    /**
     * Process the phosphor message.
     *
     * Any custom phosphor widget used inside a Jupyter widget should override
     * the processMessage function like this.
     */
    JupyterPhosphorAccordionWidget.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        this._view.processPhosphorMessage(msg);
    };
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorAccordionWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorAccordionWidget;
}(_phosphor_accordion__WEBPACK_IMPORTED_MODULE_3__["Accordion"]));

var AccordionView = /** @class */ (function (_super) {
    __extends(AccordionView, _super);
    function AccordionView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorAccordionWidget({ view: this });
        return this.pWidget.node;
    };
    AccordionView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // Accordions don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    AccordionView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.children_views = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.add_child_view, this.remove_child_view, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateChildren(); });
        this.listenTo(this.model, 'change:selected_index', function () { return _this.update_selected_index(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.update_titles(); });
    };
    /**
     * Called when view is rendered.
     */
    AccordionView.prototype.render = function () {
        var _this = this;
        _super.prototype.render.call(this);
        var accordion = this.pWidget;
        accordion.addClass('jupyter-widgets');
        accordion.addClass('widget-accordion');
        accordion.addClass('widget-container');
        accordion.selection.selectionChanged.connect(function (sender) {
            if (!_this.updatingChildren) {
                _this.model.set('selected_index', accordion.selection.index);
                _this.touch();
            }
        });
        this.children_views.update(this.model.get('children'));
        this.update_titles();
        this.update_selected_index();
    };
    /**
     * Update children
     */
    AccordionView.prototype.updateChildren = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingChildren = true;
        this.pWidget.selection.index = null;
        this.children_views.update(this.model.get('children'));
        this.update_selected_index();
        this.updatingChildren = false;
    };
    /**
     * Set header titles
     */
    AccordionView.prototype.update_titles = function () {
        var collapsed = this.pWidget.collapseWidgets;
        var titles = this.model.get('_titles');
        for (var i = 0; i < collapsed.length; i++) {
            if (titles[i] !== void 0) {
                collapsed[i].widget.title.label = titles[i];
            }
        }
    };
    /**
     * Make the rendering and selected index consistent.
     */
    AccordionView.prototype.update_selected_index = function () {
        this.pWidget.selection.index = this.model.get('selected_index');
    };
    /**
     * Called when a child is removed from children list.
     */
    AccordionView.prototype.remove_child_view = function (view) {
        this.pWidget.removeWidget(view.pWidget);
        view.remove();
    };
    /**
     * Called when a child is added to children list.
     */
    AccordionView.prototype.add_child_view = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var accordion = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = this.model.get('_titles')[index] || '';
        accordion.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            var collapse = accordion.collapseWidgets[accordion.indexOf(placeholder)];
            collapse.widget = widget;
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    AccordionView.prototype.remove = function () {
        this.children_views = null;
        _super.prototype.remove.call(this);
    };
    return AccordionView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));

var TabModel = /** @class */ (function (_super) {
    __extends(TabModel, _super);
    function TabModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_7__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'TabModel',
            _view_name: 'TabView'
        });
    };
    return TabModel;
}(SelectionContainerModel));

// We implement our own tab widget since Phoshpor's TabPanel uses an absolute
// positioning BoxLayout, but we want a more an html/css-based Panel layout.
var JupyterPhosphorTabPanelWidget = /** @class */ (function (_super) {
    __extends(JupyterPhosphorTabPanelWidget, _super);
    function JupyterPhosphorTabPanelWidget(options) {
        var _this = this;
        var view = options.view;
        delete options.view;
        _this = _super.call(this, options) || this;
        _this._view = view;
        // We want the view's messages to be the messages the tabContents panel
        // gets.
        _phosphor_messaging__WEBPACK_IMPORTED_MODULE_6__["MessageLoop"].installMessageHook(_this.tabContents, function (handler, msg) {
            // There may be times when we want the view's handler to be called
            // *after* the message has been processed by the widget, in which
            // case we'll need to revisit using a message hook.
            _this._view.processPhosphorMessage(msg);
            return true;
        });
        return _this;
    }
    /**
     * Dispose the widget.
     *
     * This causes the view to be destroyed as well with 'remove'
     */
    JupyterPhosphorTabPanelWidget.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        _super.prototype.dispose.call(this);
        if (this._view) {
            this._view.remove();
        }
        this._view = null;
    };
    return JupyterPhosphorTabPanelWidget;
}(_phosphor_tabpanel__WEBPACK_IMPORTED_MODULE_2__["TabPanel"]));

var TabView = /** @class */ (function (_super) {
    __extends(TabView, _super);
    function TabView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updatingTabs = false;
        return _this;
    }
    TabView.prototype._createElement = function (tagName) {
        this.pWidget = new JupyterPhosphorTabPanelWidget({
            view: this,
        });
        return this.pWidget.node;
    };
    TabView.prototype._setElement = function (el) {
        if (this.el || el !== this.pWidget.node) {
            // TabViews don't allow setting the element beyond the initial creation.
            throw new Error('Cannot reset the DOM element.');
        }
        this.el = this.pWidget.node;
        this.$el = jquery__WEBPACK_IMPORTED_MODULE_9___default()(this.pWidget.node);
    };
    /**
     * Public constructor.
     */
    TabView.prototype.initialize = function (parameters) {
        var _this = this;
        _super.prototype.initialize.call(this, parameters);
        this.childrenViews = new _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["ViewList"](this.addChildView, function (view) { view.remove(); }, this);
        this.listenTo(this.model, 'change:children', function () { return _this.updateTabs(); });
        this.listenTo(this.model, 'change:_titles', function () { return _this.updateTitles(); });
    };
    /**
     * Called when view is rendered.
     */
    TabView.prototype.render = function () {
        _super.prototype.render.call(this);
        var tabs = this.pWidget;
        tabs.addClass('jupyter-widgets');
        tabs.addClass('widget-container');
        tabs.addClass('widget-tab');
        tabs.tabsMovable = true;
        tabs.tabBar.insertBehavior = 'none'; // needed for insert behavior, see below.
        tabs.tabBar.currentChanged.connect(this._onTabChanged, this);
        tabs.tabBar.tabMoved.connect(this._onTabMoved, this);
        tabs.tabBar.addClass('widget-tab-bar');
        tabs.tabContents.addClass('widget-tab-contents');
        // TODO: expose this option in python
        tabs.tabBar.tabsMovable = false;
        this.updateTabs();
        this.update();
    };
    /**
     * Render tab views based on the current model's children.
     */
    TabView.prototype.updateTabs = function () {
        // While we are updating, the index may not be valid, so deselect the
        // tabs before updating so we don't get spurious changes in the index,
        // which would then set off another sync cycle.
        this.updatingTabs = true;
        this.pWidget.currentIndex = null;
        this.childrenViews.update(this.model.get('children'));
        this.pWidget.currentIndex = this.model.get('selected_index');
        this.updatingTabs = false;
    };
    /**
     * Called when a child is added to children list.
     */
    TabView.prototype.addChildView = function (model, index) {
        // Placeholder widget to keep our position in the tab panel while we create the view.
        var label = this.model.get('_titles')[index] || '';
        var tabs = this.pWidget;
        var placeholder = new _phosphor_widgets__WEBPACK_IMPORTED_MODULE_4__["Widget"]();
        placeholder.title.label = label;
        tabs.addWidget(placeholder);
        return this.create_child_view(model).then(function (view) {
            var widget = view.pWidget;
            widget.title.label = placeholder.title.label;
            widget.title.closable = false;
            var i = _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].firstIndexOf(tabs.widgets, placeholder);
            // insert after placeholder so that if placholder is selected, the
            // real widget will be selected now (this depends on the tab bar
            // insert behavior)
            tabs.insertWidget(i + 1, widget);
            placeholder.dispose();
            return view;
        }).catch(_utils__WEBPACK_IMPORTED_MODULE_8__["reject"]('Could not add child view to box', true));
    };
    /**
     * Update the contents of this view
     *
     * Called when the model is changed.  The model may have been
     * changed by another view or by a state update from the back-end.
     */
    TabView.prototype.update = function () {
        // Update the selected index in the overall update method because it
        // should be run after the tabs have been updated. Otherwise the
        // selected index may not be a valid tab in the tab bar.
        this.updateSelectedIndex();
        return _super.prototype.update.call(this);
    };
    /**
     * Updates the tab page titles.
     */
    TabView.prototype.updateTitles = function () {
        var titles = this.model.get('_titles') || {};
        Object(_phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["each"])(this.pWidget.widgets, function (widget, i) {
            widget.title.label = titles[i] || '';
        });
    };
    /**
     * Updates the selected index.
     */
    TabView.prototype.updateSelectedIndex = function () {
        this.pWidget.currentIndex = this.model.get('selected_index');
    };
    TabView.prototype.remove = function () {
        this.childrenViews = null;
        _super.prototype.remove.call(this);
    };
    TabView.prototype._onTabChanged = function (sender, args) {
        if (!this.updatingTabs) {
            var i = args.currentIndex;
            this.model.set('selected_index', i === -1 ? null : i);
            this.touch();
        }
    };
    /**
     * Handle the `tabMoved` signal from the tab bar.
     */
    TabView.prototype._onTabMoved = function (sender, args) {
        var children = this.model.get('children').slice();
        _phosphor_algorithm__WEBPACK_IMPORTED_MODULE_5__["ArrayExt"].move(children, args.fromIndex, args.toIndex);
        this.model.set('children', children);
        this.touch();
    };
    return TabView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "rWgG":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale */ "EjHT");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "sXBl");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier */ "CbjS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _precisionFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed */ "2tFh");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix */ "2TPD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound */ "2Ynt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "sXBl":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent */ "p/1U");
/* harmony import */ var _formatGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup */ "mHFb");
/* harmony import */ var _formatNumerals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals */ "AUoe");
/* harmony import */ var _formatSpecifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier */ "CbjS");
/* harmony import */ var _formatTrim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim */ "kds9");
/* harmony import */ var _formatTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes */ "tO8Z");
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto */ "ze3m");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity */ "EUnC");









var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(_formatGroup__WEBPACK_IMPORTED_MODULE_1__["default"])(locale.grouping, locale.thousands) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(_formatNumerals__WEBPACK_IMPORTED_MODULE_2__["default"])(locale.numerals) : _identity__WEBPACK_IMPORTED_MODULE_7__["default"],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision == null && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "tO8Z":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto */ "ze3m");
/* harmony import */ var _formatRounded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded */ "P3jZ");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "uhLQ":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_image.js ***!
  \********************************************************************/
/*! exports provided: ImageModel, ImageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageModel", function() { return ImageModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return ImageView; });
/* harmony import */ var _jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyter-widgets/base */ "Rtm6");
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var ImageModel = /** @class */ (function (_super) {
    __extends(ImageModel, _super);
    function ImageModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_2__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'ImageModel',
            _view_name: 'ImageView',
            format: 'png',
            width: '',
            height: '',
            value: new DataView(new ArrayBuffer(0))
        });
    };
    ImageModel.serializers = __assign({}, _widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"].serializers, { value: { serialize: function (value) {
                return new DataView(value.buffer.slice(0));
            } } });
    return ImageModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_1__["CoreDOMWidgetModel"]));

var ImageView = /** @class */ (function (_super) {
    __extends(ImageView, _super);
    function ImageView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageView.prototype.render = function () {
        /**
         * Called when view is rendered.
         */
        _super.prototype.render.call(this);
        this.pWidget.addClass('jupyter-widgets');
        this.pWidget.addClass('widget-image');
        this.update(); // Set defaults.
    };
    ImageView.prototype.update = function () {
        /**
         * Update the contents of this view
         *
         * Called when the model is changed.  The model may have been
         * changed by another view or by a state update from the back-end.
         */
        var url;
        var format = this.model.get('format');
        var value = this.model.get('value');
        if (format !== 'url') {
            var blob = new Blob([value], { type: "image/" + this.model.get('format') });
            url = URL.createObjectURL(blob);
        }
        else {
            url = (new TextDecoder('utf-8')).decode(value.buffer);
        }
        // Clean up the old objectURL
        var oldurl = this.el.src;
        this.el.src = url;
        if (oldurl && typeof oldurl !== 'string') {
            URL.revokeObjectURL(oldurl);
        }
        var width = this.model.get('width');
        if (width !== undefined && width.length > 0) {
            this.el.setAttribute('width', width);
        }
        else {
            this.el.removeAttribute('width');
        }
        var height = this.model.get('height');
        if (height !== undefined && height.length > 0) {
            this.el.setAttribute('height', height);
        }
        else {
            this.el.removeAttribute('height');
        }
        return _super.prototype.update.call(this);
    };
    ImageView.prototype.remove = function () {
        if (this.el.src) {
            URL.revokeObjectURL(this.el.src);
        }
        _super.prototype.remove.call(this);
    };
    Object.defineProperty(ImageView.prototype, "tagName", {
        /**
         * The default tag name.
         *
         * #### Notes
         * This is a read-only attribute.
         */
        get: function () {
            // We can't make this an attribute with a default value
            // since it would be set after it is needed in the
            // constructor.
            return 'img';
        },
        enumerable: true,
        configurable: true
    });
    return ImageView;
}(_jupyter_widgets_base__WEBPACK_IMPORTED_MODULE_0__["DOMWidgetView"]));



/***/ }),

/***/ "vBzC":
/*!**********************************************!*\
  !*** ./node_modules/jquery-ui/ui/keycode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/

( function( factory ) {
	if ( true ) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "EVdn"), __webpack_require__(/*! ./version */ "Qwlt") ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
} ( function( $ ) {
return $.ui.keyCode = {
	BACKSPACE: 8,
	COMMA: 188,
	DELETE: 46,
	DOWN: 40,
	END: 35,
	ENTER: 13,
	ESCAPE: 27,
	HOME: 36,
	LEFT: 37,
	PAGE_DOWN: 34,
	PAGE_UP: 33,
	PERIOD: 190,
	RIGHT: 39,
	SPACE: 32,
	TAB: 9,
	UP: 38
};

} ) );


/***/ }),

/***/ "xOfY":
/*!********************************************************************!*\
  !*** ./node_modules/@jupyter-widgets/controls/lib/widget_float.js ***!
  \********************************************************************/
/*! exports provided: FloatModel, BoundedFloatModel, FloatSliderModel, FloatLogSliderModel, FloatRangeSliderModel, FloatSliderView, FloatLogSliderView, FloatRangeSliderView, FloatTextModel, BoundedFloatTextModel, FloatTextView, FloatProgressModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatModel", function() { return FloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatModel", function() { return BoundedFloatModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderModel", function() { return FloatSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderModel", function() { return FloatLogSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderModel", function() { return FloatRangeSliderModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatSliderView", function() { return FloatSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatLogSliderView", function() { return FloatLogSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatRangeSliderView", function() { return FloatRangeSliderView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextModel", function() { return FloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundedFloatTextModel", function() { return BoundedFloatTextModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatTextView", function() { return FloatTextView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatProgressModel", function() { return FloatProgressModel; });
/* harmony import */ var _widget_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget_core */ "0c3I");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "F/us");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _widget_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widget_int */ "TtYL");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-format */ "rWgG");
// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var FloatModel = /** @class */ (function (_super) {
    __extends(FloatModel, _super);
    function FloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatModel',
            value: 0,
        });
    };
    return FloatModel;
}(_widget_core__WEBPACK_IMPORTED_MODULE_0__["CoreDescriptionModel"]));

var BoundedFloatModel = /** @class */ (function (_super) {
    __extends(BoundedFloatModel, _super);
    function BoundedFloatModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatModel',
            max: 100.0,
            min: 0.0
        });
    };
    return BoundedFloatModel;
}(FloatModel));

var FloatSliderModel = /** @class */ (function (_super) {
    __extends(FloatSliderModel, _super);
    function FloatSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatSliderModel',
            _view_name: 'FloatSliderView',
            step: 1.0,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.2f',
            slider_color: null,
            continuous_update: true,
            disabled: false,
        });
    };
    FloatSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatSliderModel;
}(BoundedFloatModel));

var FloatLogSliderModel = /** @class */ (function (_super) {
    __extends(FloatLogSliderModel, _super);
    function FloatLogSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatLogSliderModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatLogSliderModel',
            _view_name: 'FloatLogSliderView',
            step: 0.1,
            orientation: 'horizontal',
            _range: false,
            readout: true,
            readout_format: '.3g',
            slider_color: null,
            continuous_update: true,
            disabled: false,
            base: 10.,
            value: 1.0,
            min: 0,
            max: 4
        });
    };
    FloatLogSliderModel.prototype.initialize = function (attributes, options) {
        _super.prototype.initialize.call(this, attributes, options);
        this.on('change:readout_format', this.update_readout_format, this);
        this.update_readout_format();
    };
    FloatLogSliderModel.prototype.update_readout_format = function () {
        this.readout_formatter = Object(d3_format__WEBPACK_IMPORTED_MODULE_3__["format"])(this.get('readout_format'));
    };
    return FloatLogSliderModel;
}(BoundedFloatModel));

var FloatRangeSliderModel = /** @class */ (function (_super) {
    __extends(FloatRangeSliderModel, _super);
    function FloatRangeSliderModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FloatRangeSliderModel;
}(FloatSliderModel));

var FloatSliderView = /** @class */ (function (_super) {
    __extends(FloatSliderView, _super);
    function FloatSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntSliderView"]));

var FloatLogSliderView = /** @class */ (function (_super) {
    __extends(FloatLogSliderView, _super);
    function FloatLogSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        return _this;
    }
    FloatLogSliderView.prototype.update = function (options) {
        _super.prototype.update.call(this, options);
        var min = this.model.get('min');
        var max = this.model.get('max');
        var value = this.model.get('value');
        var base = this.model.get('base');
        var log_value = Math.log(value) / Math.log(base);
        if (log_value > max) {
            log_value = max;
        }
        else if (log_value < min) {
            log_value = min;
        }
        this.$slider.slider('option', 'value', log_value);
        this.readout.textContent = this.valueToString(value);
        if (this.model.get('value') !== value) {
            this.model.set('value', value, { updated_view: this });
            this.touch();
        }
    };
    /**
     * Write value to a string
     */
    FloatLogSliderView.prototype.valueToString = function (value) {
        var format = this.model.readout_formatter;
        return format(value);
    };
    /**
     * Parse value from a string
     */
    FloatLogSliderView.prototype.stringToValue = function (text) {
        return this._parse_value(text);
    };
    /**
     * this handles the entry of text into the contentEditable label first, the
     * value is checked if it contains a parseable value then it is clamped
     * within the min-max range of the slider finally, the model is updated if
     * the value is to be changed
     *
     * if any of these conditions are not met, the text is reset
     */
    FloatLogSliderView.prototype.handleTextChange = function () {
        var value = this.stringToValue(this.readout.textContent);
        var vmin = this.model.get('min');
        var vmax = this.model.get('max');
        var base = this.model.get('base');
        if (isNaN(value)) {
            this.readout.textContent = this.valueToString(this.model.get('value'));
        }
        else {
            value = Math.max(Math.min(value, Math.pow(base, vmax)), Math.pow(base, vmin));
            if (value !== this.model.get('value')) {
                this.readout.textContent = this.valueToString(value);
                this.model.set('value', value, { updated_view: this });
                this.touch();
            }
            else {
                this.readout.textContent = this.valueToString(this.model.get('value'));
            }
        }
    };
    /**
     * Called when the slider value is changing.
     */
    FloatLogSliderView.prototype.handleSliderChange = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.readout.textContent = this.valueToString(actual_value);
        // Only persist the value while sliding if the continuous_update
        // trait is set to true.
        if (this.model.get('continuous_update')) {
            this.handleSliderChanged(e, ui);
        }
    };
    /**
     * Called when the slider value has changed.
     *
     * Calling model.set will trigger all of the other views of the
     * model to update.
     */
    FloatLogSliderView.prototype.handleSliderChanged = function (e, ui) {
        var base = this.model.get('base');
        var actual_value = Math.pow(base, this._validate_slide_value(ui.value));
        this.model.set('value', actual_value, { updated_view: this });
        this.touch();
    };
    FloatLogSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatLogSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["BaseIntSliderView"]));

var FloatRangeSliderView = /** @class */ (function (_super) {
    __extends(FloatRangeSliderView, _super);
    function FloatRangeSliderView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        // matches: whitespace?, float, whitespace?, (hyphen, colon, or en-dash), whitespace?, float
        _this._range_regex = /^\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][-:]?\d+)?)\s*[-:–]\s*([+-]?(?:\d*\.?\d+|\d+\.)(?:[eE][+-]?\d+)?)/;
        return _this;
    }
    /**
     * Validate the value of the slider before sending it to the back-end
     * and applying it to the other views on the page.
     */
    FloatRangeSliderView.prototype._validate_slide_value = function (x) {
        return x;
    };
    return FloatRangeSliderView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntRangeSliderView"]));

var FloatTextModel = /** @class */ (function (_super) {
    __extends(FloatTextModel, _super);
    function FloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
        });
    };
    return FloatTextModel;
}(FloatModel));

var BoundedFloatTextModel = /** @class */ (function (_super) {
    __extends(BoundedFloatTextModel, _super);
    function BoundedFloatTextModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BoundedFloatTextModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'BoundedFloatTextModel',
            _view_name: 'FloatTextView',
            disabled: false,
            continuous_update: false,
            step: 0.1
        });
    };
    return BoundedFloatTextModel;
}(BoundedFloatModel));

var FloatTextView = /** @class */ (function (_super) {
    __extends(FloatTextView, _super);
    function FloatTextView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._parse_value = parseFloat;
        _this._default_step = 'any';
        return _this;
    }
    /**
     * Handle key press
     */
    FloatTextView.prototype.handleKeypress = function (e) {
        // Overwrite IntTextView's handleKeypress
        // which prevents decimal points.
        e.stopPropagation();
    };
    /**
     * Handle key up
     */
    FloatTextView.prototype.handleKeyUp = function (e) {
        // Overwrite IntTextView's handleKeyUp
        // which prevents decimal points.
    };
    return FloatTextView;
}(_widget_int__WEBPACK_IMPORTED_MODULE_2__["IntTextView"]));

var FloatProgressModel = /** @class */ (function (_super) {
    __extends(FloatProgressModel, _super);
    function FloatProgressModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FloatProgressModel.prototype.defaults = function () {
        return underscore__WEBPACK_IMPORTED_MODULE_1__["extend"](_super.prototype.defaults.call(this), {
            _model_name: 'FloatProgressModel',
            _view_name: 'ProgressView',
            orientation: 'horizontal',
            bar_style: '',
            style: null
        });
    };
    return FloatProgressModel;
}(BoundedFloatModel));



/***/ }),

/***/ "ze3m":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal */ "qnQu");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Jvb2wuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL3ByZWNpc2lvblByZWZpeC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25GaXhlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvcGhvc3Bob3IvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdE51bWVyYWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9kZWZhdWx0TG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvaWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0Um91bmRlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktdWkvdWkvdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9waG9zcGhvci9jdXJyZW50c2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X3NlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvcGhvc3Bob3IvdGFicGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LXVpL3VpL3dpZGdldHMvbW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9ib3guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scy9saWIvd2lkZ2V0X2NvbG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdEdyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdERlY2ltYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMvbGliL3dpZGdldF9zZWxlY3Rpb25jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFR5cGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS11aS91aS9rZXljb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AanVweXRlci13aWRnZXRzL2NvbnRyb2xzL2xpYi93aWRnZXRfZmxvYXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0UHJlZml4QXV0by5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDb0Q7QUFDRTtBQUNEO0FBQ3RCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDLENBQUMsaUVBQW9CO0FBQ0Q7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUMsQ0FBQyxpRUFBb0I7QUFDRztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGVBQWUsMERBQXlCO0FBQ3hDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkNBQTZD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QUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHdEQUFNO0FBQ1k7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyREFBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLDREQUFRLG9EQUFvRCw0QkFBNEIsRUFBRTtBQUN6RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RDtBQUNB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QTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsa0NBQWtDO0FBQzNDO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7O0FDNXRCRDtBQUNBLE1BQU0sSUFBMEM7O0FBRWhEO0FBQ0EsRUFBRSxpQ0FBUSxFQUFFLHlDQUFRLEVBQUUsNENBQVcsRUFBRSxvQ0FBRSxPQUFPO0FBQUE7QUFBQTtBQUFBLG9HQUFFO0FBQzlDLEVBQUUsTUFBTSxFQUlOO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ2REO0FBQUE7QUFBNEM7O0FBRTdCO0FBQ2YsVUFBVSw4REFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNWRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQTBDOztBQUVoRDtBQUNBLEVBQUUsaUNBQVE7QUFDVixHQUFHLHlDQUFRO0FBQ1gsR0FBRywwQ0FBUztBQUNaLEdBQUcsNkNBQVk7QUFDZixHQUFHLDZDQUFZO0FBQ2YsR0FBRyw0Q0FBVztBQUNkLEdBQUcsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBRTtBQUNkLEVBQUUsTUFBTSxFQUlOO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxrQkFBa0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQSxrQkFBa0IsaUNBQWlDO0FBQ25EOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyxtRUFBZTtBQUNPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ29CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qyw4Q0FBOEM7QUFDOUMsNkNBQTZDO0FBQzdDLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNvQjs7Ozs7Ozs7Ozs7OztBQ3ZWckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ3dCO0FBQ0U7QUFDSTtBQUNBO0FBQ0U7QUFDSDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFDRDtBQUNFO0FBQ0s7QUFDRDtBQUNTO0FBQ1o7QUFDSztBQUNMO0FBQ3pCLGNBQWMsbUJBQU8sQ0FBQyw2QkFBaUI7Ozs7Ozs7Ozs7Ozs7QUNyQjlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QjtBQUNB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QTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsdURBQUs7QUFDaUI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGNBQWM7QUFDL0M7QUFDQSxvQ0FBb0MsMERBQU07QUFDMUM7QUFDQTtBQUNBLDJCQUEyQix3REFBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZEQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHdEQUFNO0FBQ3ZDO0FBQ0E7QUFDQSxDQUFDO0FBQzhCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDZ0M7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLHlEQUFhO0FBQ1k7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHFCQUFxQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFCQUFxQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsNkRBQWlCO0FBQ1c7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQ0FBQyw4REFBa0I7QUFDWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNnQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLENBQUMsdURBQVc7QUFDWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDNkI7Ozs7Ozs7Ozs7Ozs7QUMxVTlCO0FBQUE7QUFBQTtBQUE0Qzs7QUFFckM7O0FBRVE7QUFDZixVQUFVLDhEQUFhO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsOERBQWEsK0JBQStCO0FBQ3hGLENBQUMiLCJmaWxlIjoidmVuZG9yc35AanVweXRlci13aWRnZXRzL2NvbnRyb2xzLmMyYTM2NGU0NDI4NWUyM2ZlNmZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3IH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xudmFyIEJvb2xNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm9vbE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJvb2xNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb29sTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0Jvb2xNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQm9vbE1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgQm9vbE1vZGVsIH07XG52YXIgQ2hlY2tib3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hlY2tib3hNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGVja2JveE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENoZWNrYm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBpbmRlbnQ6IHRydWUsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQ2hlY2tib3hWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ2hlY2tib3hNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2hlY2tib3hNb2RlbDtcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IENoZWNrYm94TW9kZWwgfTtcbnZhciBDaGVja2JveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENoZWNrYm94VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDaGVja2JveFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBDaGVja2JveFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtY2hlY2tib3gnKTtcbiAgICAgICAgLy8gYWRkaW5nIGEgemVyby13aWR0aCBzcGFjZSB0byB0aGUgbGFiZWwgdG8gaGVscFxuICAgICAgICAvLyB0aGUgYnJvd3NlciBzZXQgdGhlIGJhc2VsaW5lIGNvcnJlY3RseVxuICAgICAgICB0aGlzLmxhYmVsLmlubmVySFRNTCA9ICcmIzgyMDM7JztcbiAgICAgICAgLy8gbGFiZWwgY29udGFpbmluZyB0aGUgY2hlY2tib3ggYW5kIGRlc2NyaXB0aW9uIHNwYW5cbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1sYWJlbC1iYXNpYycpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY2hlY2tib3hMYWJlbCk7XG4gICAgICAgIC8vIGNoZWNrYm94XG4gICAgICAgIHRoaXMuY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLmNoZWNrYm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgICAgICB0aGlzLmNoZWNrYm94TGFiZWwuYXBwZW5kQ2hpbGQodGhpcy5jaGVja2JveCk7XG4gICAgICAgIC8vIHNwYW4gdG8gdGhlIHJpZ2h0IG9mIHRoZSBjaGVja2JveCB0aGF0IHdpbGwgcmVuZGVyIHRoZSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGhpcy5jaGVja2JveExhYmVsLmFwcGVuZENoaWxkKHRoaXMuZGVzY3JpcHRpb25TcGFuKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmluZGVudCcsIHRoaXMudXBkYXRlSW5kZW50KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSW5kZW50KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPdmVycmlkZW4gZnJvbSBzdXBlciBjbGFzc1xuICAgICAqXG4gICAgICogVXBkYXRlIHRoZSBkZXNjcmlwdGlvbiBzcGFuIChyYXRoZXIgdGhhbiB0aGUgbGFiZWwpIHNpbmNlXG4gICAgICogd2Ugd2FudCB0aGUgZGVzY3JpcHRpb24gdG8gdGhlIHJpZ2h0IG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBDaGVja2JveFZpZXcucHJvdG90eXBlLnVwZGF0ZURlc2NyaXB0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBjYW4gYmUgY2FsbGVkIGJlZm9yZSB0aGUgdmlldyBpcyBmdWxseSBpbml0aWFsaXplZFxuICAgICAgICBpZiAodGhpcy5jaGVja2JveExhYmVsID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblNwYW4uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMudHlwZXNldCh0aGlzLmRlc2NyaXB0aW9uU3Bhbik7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25TcGFuLnRpdGxlID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2hlY2tib3gudGl0bGUgPSBkZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgbGFiZWwgaW4gdGhlIHN1cGVyIGNsYXNzXG4gICAgICogdG8gcHJvdmlkZSB0aGUgb3B0aW9uYWwgaW5kZW50LlxuICAgICAqL1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUudXBkYXRlSW5kZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZW50ID0gdGhpcy5tb2RlbC5nZXQoJ2luZGVudCcpO1xuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSBpbmRlbnQgPyAnJyA6ICdub25lJztcbiAgICB9O1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NsaWNrIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSc6ICdfaGFuZGxlX2NsaWNrJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB3aGVuIHRoZSBjaGVja2JveCBpcyBjbGlja2VkLlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIENoZWNrYm94Vmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsICF2YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBDaGVja2JveFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkIHx8IG9wdGlvbnMudXBkYXRlZF92aWV3ICE9IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBDaGVja2JveFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgQ2hlY2tib3hWaWV3IH07XG52YXIgVG9nZ2xlQnV0dG9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRvZ2dsZUJ1dHRvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1RvZ2dsZUJ1dHRvblZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdUb2dnbGVCdXR0b25Nb2RlbCcsXG4gICAgICAgICAgICB0b29sdGlwOiAnJyxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgYnV0dG9uX3N0eWxlOiAnJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUb2dnbGVCdXR0b25Nb2RlbDtcbn0oQm9vbE1vZGVsKSk7XG5leHBvcnQgeyBUb2dnbGVCdXR0b25Nb2RlbCB9O1xudmFyIFRvZ2dsZUJ1dHRvblZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvblZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVG9nZ2xlQnV0dG9uVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFRvZ2dsZUJ1dHRvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC10b2dnbGUtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpidXR0b25fc3R5bGUnLCB0aGlzLnVwZGF0ZV9idXR0b25fc3R5bGUpO1xuICAgICAgICB0aGlzLnNldF9idXR0b25fc3R5bGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlX2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoVG9nZ2xlQnV0dG9uVmlldy5jbGFzc19tYXAsICdidXR0b25fc3R5bGUnKTtcbiAgICB9O1xuICAgIFRvZ2dsZUJ1dHRvblZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKFRvZ2dsZUJ1dHRvblZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWFjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubW9kZWwuZ2V0KCd0b29sdGlwJykpO1xuICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICB2YXIgaWNvbiA9IHRoaXMubW9kZWwuZ2V0KCdpY29uJyk7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24udHJpbSgpLmxlbmd0aCA9PT0gMCAmJiBpY29uLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmlubmVySFRNTCA9ICcmbmJzcDsnOyAvLyBQcmVzZXJ2ZSBidXR0b24gaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGljb24udHJpbSgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYScpO1xuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLScgKyBpY29uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gRGljdGlvbmFyeSBvZiBldmVudHMgYW5kIHRoZWlyIGhhbmRsZXJzLlxuICAgICAgICAgICAgJ2NsaWNrJzogJ19oYW5kbGVfY2xpY2snXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGFuZCB2YWxpZGF0ZXMgdXNlciBpbnB1dC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBUb2dnbGVCdXR0b25WaWV3LnByb3RvdHlwZS5faGFuZGxlX2NsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCAhdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVG9nZ2xlQnV0dG9uVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgcmV0dXJuICdidXR0b24nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBUb2dnbGVCdXR0b25WaWV3LmNsYXNzX21hcCA9IHtcbiAgICAgICAgcHJpbWFyeTogWydtb2QtcHJpbWFyeSddLFxuICAgICAgICBzdWNjZXNzOiBbJ21vZC1zdWNjZXNzJ10sXG4gICAgICAgIGluZm86IFsnbW9kLWluZm8nXSxcbiAgICAgICAgd2FybmluZzogWydtb2Qtd2FybmluZyddLFxuICAgICAgICBkYW5nZXI6IFsnbW9kLWRhbmdlciddXG4gICAgfTtcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgVG9nZ2xlQnV0dG9uVmlldyB9O1xudmFyIFZhbGlkTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZhbGlkTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmFsaWRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBWYWxpZE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgcmVhZG91dDogJ0ludmFsaWQnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1ZhbGlkVmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1ZhbGlkTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZhbGlkTW9kZWw7XG59KEJvb2xNb2RlbCkpO1xuZXhwb3J0IHsgVmFsaWRNb2RlbCB9O1xudmFyIFZhbGlkVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVmFsaWRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZhbGlkVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFZhbGlkVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12YWxpZCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aGlzLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXZhbGlkLXJlYWRvdXQnKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yZWFkb3V0Jyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5yZWFkb3V0KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgVmFsaWRWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLXZhbGlkJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kLWludmFsaWQnKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy5tb2RlbC5nZXQoJ3JlYWRvdXQnKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKSB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ21vZC12YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdtb2QtaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gVmFsaWRWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IFZhbGlkVmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgQ29yZURPTVdpZGdldE1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgRmlsZVVwbG9hZE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGaWxlVXBsb2FkTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsZVVwbG9hZE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZpbGVVcGxvYWRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRmlsZVVwbG9hZE1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdGaWxlVXBsb2FkVmlldycsXG4gICAgICAgICAgICBfY291bnRlcjogMCxcbiAgICAgICAgICAgIGFjY2VwdDogJycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1VwbG9hZCcsXG4gICAgICAgICAgICB0b29sdGlwOiAnJyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxuICAgICAgICAgICAgYnV0dG9uX3N0eWxlOiAnJyxcbiAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgIG1ldGFkYXRhOiBbXSxcbiAgICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICAgICAgZXJyb3I6ICcnLFxuICAgICAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBGaWxlVXBsb2FkTW9kZWwuc2VyaWFsaXplcnMgPSBfX2Fzc2lnbih7fSwgQ29yZURPTVdpZGdldE1vZGVsLnNlcmlhbGl6ZXJzLCB7IGRhdGE6IHsgc2VyaWFsaXplOiBmdW5jdGlvbiAoYnVmZmVycykgeyByZXR1cm4gYnVmZmVycy5zbGljZSgpOyB9IH0gfSk7XG4gICAgcmV0dXJuIEZpbGVVcGxvYWRNb2RlbDtcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBGaWxlVXBsb2FkTW9kZWwgfTtcbnZhciBGaWxlVXBsb2FkVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmlsZVVwbG9hZFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmlsZVVwbG9hZFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEZpbGVVcGxvYWRWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXVwbG9hZCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5maWxlSW5wdXQudHlwZSA9ICdmaWxlJztcbiAgICAgICAgdGhpcy5maWxlSW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmZpbGVJbnB1dCk7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5maWxlSW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuZmlsZUlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZXNGaWxlID0gW107XG4gICAgICAgICAgICBBcnJheS5mcm9tKF90aGlzLmZpbGVJbnB1dC5maWxlcykuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzRmlsZS5wdXNoKG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmZpbGVSZWFkZXIub25hYm9ydCA9IF90aGlzLmZpbGVSZWFkZXIub25lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzRmlsZSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoY29udGVudHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YWRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgbGlfYnVmZmVyID0gW107XG4gICAgICAgICAgICAgICAgY29udGVudHMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5wdXNoKGMubWV0YWRhdGEpO1xuICAgICAgICAgICAgICAgICAgICBsaV9idWZmZXIucHVzaChjLmJ1ZmZlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSBfdGhpcy5tb2RlbC5nZXQoJ19jb3VudGVyJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwuc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgX2NvdW50ZXI6IGNvdW50ZXIgKyBjb250ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiBtZXRhZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogbGlfYnVmZmVyLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogJycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudG91Y2goKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBmaWxlIHVwbG9hZDogJW8nLCBlcnIpO1xuICAgICAgICAgICAgICAgIF90aGlzLm1vZGVsLnNldCh7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMudG91Y2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XG4gICAgICAgIHRoaXMuc2V0X2J1dHRvbl9zdHlsZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICBGaWxlVXBsb2FkVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubW9kZWwuZ2V0KCd0b29sdGlwJykpO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKSArIFwiIChcIiArIHRoaXMubW9kZWwuZ2V0KCdfY291bnRlcicpICsgXCIpXCI7XG4gICAgICAgIHZhciBpY29uID0gdGhpcy5tb2RlbC5nZXQoJ2ljb24nKTtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCB8fCBpY29uLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5lbC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgaWYgKGljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYScpO1xuICAgICAgICAgICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtJyArIGljb24pO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdjZW50ZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGVzY3JpcHRpb24pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGVJbnB1dC5hY2NlcHQgPSB0aGlzLm1vZGVsLmdldCgnYWNjZXB0Jyk7XG4gICAgICAgIHRoaXMuZmlsZUlucHV0Lm11bHRpcGxlID0gdGhpcy5tb2RlbC5nZXQoJ211bHRpcGxlJyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgRmlsZVVwbG9hZFZpZXcucHJvdG90eXBlLnVwZGF0ZV9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlX21hcHBlZF9jbGFzc2VzKEZpbGVVcGxvYWRWaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScsIHRoaXMuZWwpO1xuICAgIH07XG4gICAgRmlsZVVwbG9hZFZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKEZpbGVVcGxvYWRWaWV3LmNsYXNzX21hcCwgJ2J1dHRvbl9zdHlsZScsIHRoaXMuZWwpO1xuICAgIH07XG4gICAgRmlsZVVwbG9hZFZpZXcuY2xhc3NfbWFwID0ge1xuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXG4gICAgICAgIHN1Y2Nlc3M6IFsnbW9kLXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydtb2QtaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXG4gICAgICAgIGRhbmdlcjogWydtb2QtZGFuZ2VyJ11cbiAgICB9O1xuICAgIHJldHVybiBGaWxlVXBsb2FkVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgRmlsZVVwbG9hZFZpZXcgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuLy8gd2lkZ2V0X2NvcmUgaW1wbGVtZW50cyBzb21lIGNvbW1vbiBwYXR0ZXJucyBmb3IgdGhlIGNvcmUgd2lkZ2V0IGNvbGxlY3Rpb25cbi8vIHRoYXQgYXJlIG5vdCB0byBiZSB1c2VkIGRpcmVjdGx5IGJ5IHRoaXJkLXBhcnR5IHdpZGdldCBhdXRob3JzLlxuaW1wb3J0IHsgRE9NV2lkZ2V0TW9kZWwsIFdpZGdldE1vZGVsIH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IERlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbnZhciBDb3JlV2lkZ2V0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvcmVXaWRnZXRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb3JlV2lkZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29yZVdpZGdldE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb3JlV2lkZ2V0TW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXG4gICAgICAgICAgICBfdmlld19tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLFxuICAgICAgICAgICAgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvcmVXaWRnZXRNb2RlbDtcbn0oV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IENvcmVXaWRnZXRNb2RlbCB9O1xudmFyIENvcmVET01XaWRnZXRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29yZURPTVdpZGdldE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvcmVET01XaWRnZXRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb3JlRE9NV2lkZ2V0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0NvcmVET01XaWRnZXRNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29yZURPTVdpZGdldE1vZGVsO1xufShET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQ29yZURPTVdpZGdldE1vZGVsIH07XG52YXIgQ29yZURlc2NyaXB0aW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvcmVEZXNjcmlwdGlvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvcmVEZXNjcmlwdGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvcmVEZXNjcmlwdGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb3JlRGVzY3JpcHRpb25Nb2RlbCcsXG4gICAgICAgICAgICBfdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXG4gICAgICAgICAgICBfbW9kZWxfbW9kdWxlX3ZlcnNpb246IEpVUFlURVJfQ09OVFJPTFNfVkVSU0lPTixcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29yZURlc2NyaXB0aW9uTW9kZWw7XG59KERlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IERPTVdpZGdldFZpZXcsIHVucGFja19tb2RlbHMsIFZpZXdMaXN0LCBKdXB5dGVyUGhvc3Bob3JQYW5lbFdpZGdldCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBXaWRnZXQsIFBhbmVsIH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xuaW1wb3J0IHsgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG52YXIgQ29udHJvbGxlckJ1dHRvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyQnV0dG9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlckJ1dHRvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRyb2xsZXJCdXR0b25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29udHJvbGxlckJ1dHRvbk1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb250cm9sbGVyQnV0dG9uVmlldycsXG4gICAgICAgICAgICB2YWx1ZTogMC4wLFxuICAgICAgICAgICAgcHJlc3NlZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbGxlckJ1dHRvbk1vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IENvbnRyb2xsZXJCdXR0b25Nb2RlbCB9O1xuLyoqXG4gKiBWZXJ5IHNpbXBsZSB2aWV3IGZvciBhIGdhbWVwYWQgYnV0dG9uLlxuICovXG52YXIgQ29udHJvbGxlckJ1dHRvblZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJCdXR0b25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJCdXR0b25WaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRyb2xsZXJCdXR0b25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWNvbnRyb2xsZXItYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuZWwuc3R5bGUud2lkdGggPSAnZml0LWNvbnRlbnQnO1xuICAgICAgICB0aGlzLnN1cHBvcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLm1hcmdpbiA9ICcxcHgnO1xuICAgICAgICB0aGlzLnN1cHBvcnQuc3R5bGUud2lkdGggPSAnMTZweCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5oZWlnaHQgPSAnMTZweCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHRncmF5JztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnN1cHBvcnQpO1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJhci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICB0aGlzLmJhci5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUuYmFja2dyb3VuZCA9ICdncmF5JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRDb250ZW50ID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRoaXMubGFiZWwuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XG4gICAgfTtcbiAgICBDb250cm9sbGVyQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJhci5zdHlsZS5oZWlnaHQgPSAoMTAwICogdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpICsgJyUnO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRyb2xsZXJCdXR0b25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBDb250cm9sbGVyQnV0dG9uVmlldyB9O1xudmFyIENvbnRyb2xsZXJBeGlzTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJBeGlzTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlckF4aXNNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBDb250cm9sbGVyQXhpc01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb250cm9sbGVyQXhpc01vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb250cm9sbGVyQXhpc1ZpZXcnLFxuICAgICAgICAgICAgdmFsdWU6IDAuMFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDb250cm9sbGVyQXhpc01vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IENvbnRyb2xsZXJBeGlzTW9kZWwgfTtcbi8qKlxuICogVmVyeSBzaW1wbGUgdmlldyBmb3IgYSBnYW1lcGFkIGF4aXMuXG4gKi9cbnZhciBDb250cm9sbGVyQXhpc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJBeGlzVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb250cm9sbGVyQXhpc1ZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29udHJvbGxlckF4aXNWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWNvbnRyb2xsZXItYXhpcycpO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLndpZHRoID0gJzE2cHgnO1xuICAgICAgICB0aGlzLmVsLnN0eWxlLnBhZGRpbmcgPSAnNHB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5tYXJnaW4gPSAnMXB4JztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLndpZHRoID0gJzRweCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5oZWlnaHQgPSAnNjRweCc7XG4gICAgICAgIHRoaXMuc3VwcG9ydC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJztcbiAgICAgICAgdGhpcy5zdXBwb3J0LnN0eWxlLmJhY2tncm91bmQgPSAnbGlnaHRncmF5JztcbiAgICAgICAgdGhpcy5idWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS5tYXJnaW4gPSAnLTNweCc7XG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLmJveFNpemluZyA9ICd1bnNldCc7XG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLndpZHRoID0gJzEwcHgnO1xuICAgICAgICB0aGlzLmJ1bGxldC5zdHlsZS5oZWlnaHQgPSAnMTBweCc7XG4gICAgICAgIHRoaXMuYnVsbGV0LnN0eWxlLmJhY2tncm91bmQgPSAnZ3JheSc7XG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5sYWJlbC50ZXh0Q29udGVudCA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgICAgICB0aGlzLnN1cHBvcnQuYXBwZW5kQ2hpbGQodGhpcy5idWxsZXQpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuc3VwcG9ydCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICBDb250cm9sbGVyQXhpc1ZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idWxsZXQuc3R5bGUudG9wID0gKDUwICogKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpICsgMSkpICsgJyUnO1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRyb2xsZXJBeGlzVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgQ29udHJvbGxlckF4aXNWaWV3IH07XG52YXIgQ29udHJvbGxlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb250cm9sbGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29udHJvbGxlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQ29udHJvbGxlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb250cm9sbGVyVmlldycsXG4gICAgICAgICAgICBpbmRleDogMCxcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgbWFwcGluZzogJycsXG4gICAgICAgICAgICBjb25uZWN0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBheGVzOiBbXVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdldEdhbWVwYWRzID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIC8vIENoZWNrcyBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgZ2FtZXBhZCBBUElcbiAgICAgICAgICAgIHRoaXMucmVhZG91dCA9ICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBnYW1lcGFkcy4nO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLnJlYWRvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIHdhaXQgbG9vcCwgYW5kIGxpc3RlbiB0byB1cGRhdGVzIG9mIHRoZSBvbmx5XG4gICAgICAgICAgICAvLyB1c2VyLXByb3ZpZGVkIGF0dHJpYnV0ZSwgdGhlIGdhbWVwYWQgaW5kZXguXG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQgPSAnQ29ubmVjdCBnYW1lcGFkIGFuZCBwcmVzcyBhbnkgYnV0dG9uLic7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ2Nvbm5lY3RlZCcpKSB7XG4gICAgICAgICAgICAgICAgLy8gTm8gbmVlZCB0byByZS1jcmVhdGUgQnV0dG9uIGFuZCBBeGlzIHdpZGdldHMsIHJlLXVzZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBtb2RlbHMgcHJvdmlkZWQgYnkgdGhlIGJhY2tlbmQgd2hpY2ggbWF5IGFscmVhZHlcbiAgICAgICAgICAgICAgICAvLyBiZSB3aXJlZCB0byBvdGhlciB0aGluZ3MuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVfbG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2FpdCBmb3IgYSBnYW1lcGFkIHRvIGJlIGNvbm5lY3RlZC5cbiAgICAgICAgICAgICAgICB0aGlzLndhaXRfbG9vcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXYWl0cyBmb3IgYSBnYW1lcGFkIHRvIGJlIGNvbm5lY3RlZCBhdCB0aGUgcHJvdmlkZWQgaW5kZXguXG4gICAgICogT25jZSBvbmUgaXMgY29ubmVjdGVkLCBpdCB3aWxsIHN0YXJ0IHRoZSB1cGRhdGUgbG9vcCwgd2hpY2hcbiAgICAgKiBwb3B1bGF0ZXMgdGhlIHVwZGF0ZSBvZiBheGVzIGFuZCBidXR0b24gdmFsdWVzLlxuICAgICAqL1xuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUud2FpdF9sb29wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldCgnaW5kZXgnKTtcbiAgICAgICAgdmFyIHBhZCA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpW2luZGV4XTtcbiAgICAgICAgaWYgKHBhZCkge1xuICAgICAgICAgICAgdmFyIHRoYXRfMSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNldHVwKHBhZCkudGhlbihmdW5jdGlvbiAoY29udHJvbHMpIHtcbiAgICAgICAgICAgICAgICB0aGF0XzEuc2V0KGNvbnRyb2xzKTtcbiAgICAgICAgICAgICAgICB0aGF0XzEuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGF0XzEudXBkYXRlX2xvb3AuYmluZCh0aGF0XzEpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLndhaXRfbG9vcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogR2l2ZW4gYSBuYXRpdmUgZ2FtZXBhZCBvYmplY3QsIHJldHVybnMgYSBwcm9taXNlIGZvciBhIGRpY3Rpb25hcnkgb2ZcbiAgICAgKiBjb250cm9scywgb2YgdGhlIGZvcm1cbiAgICAgKiB7XG4gICAgICogICAgIGJ1dHRvbnM6IGxpc3Qgb2YgQnV0dG9uIG1vZGVscyxcbiAgICAgKiAgICAgYXhlczogbGlzdCBvZiBBeGlzIG1vZGVscyxcbiAgICAgKiB9XG4gICAgICovXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uIChwYWQpIHtcbiAgICAgICAgLy8gU2V0IHVwIHRoZSBtYWluIGdhbWVwYWQgYXR0cmlidXRlc1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICBuYW1lOiBwYWQuaWQsXG4gICAgICAgICAgICBtYXBwaW5nOiBwYWQubWFwcGluZyxcbiAgICAgICAgICAgIGNvbm5lY3RlZDogcGFkLmNvbm5lY3RlZCxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcGFkLnRpbWVzdGFtcFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ3JlYXRlIGJ1dHRvbnMgYW5kIGF4ZXMuIFdoZW4gZG9uZSwgc3RhcnQgdGhlIHVwZGF0ZSBsb29wXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHV0aWxzLnJlc29sdmVQcm9taXNlc0RpY3Qoe1xuICAgICAgICAgICAgYnV0dG9uczogUHJvbWlzZS5hbGwocGFkLmJ1dHRvbnMubWFwKGZ1bmN0aW9uIChidG4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuX2NyZWF0ZV9idXR0b25fbW9kZWwoaW5kZXgpO1xuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgYXhlczogUHJvbWlzZS5hbGwocGFkLmF4ZXMubWFwKGZ1bmN0aW9uIChheGlzLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGF0Ll9jcmVhdGVfYXhpc19tb2RlbChpbmRleCk7XG4gICAgICAgICAgICB9KSksXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGF4ZXMgYW5kIGJ1dHRvbnMgdmFsdWVzLCB1bnRpbCB0aGUgZ2FtZXBhZCBpcyBkaXNjb25uZWN0ZWQuXG4gICAgICogV2hlbiB0aGUgZ2FtZXBhZCBpcyBkaXNjb25uZWN0ZWQsIHRoaXMucmVzZXRfZ2FtZXBhZCBpcyBjYWxsZWQuXG4gICAgICovXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS51cGRhdGVfbG9vcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXQoJ2luZGV4Jyk7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuZ2V0KCduYW1lJyk7XG4gICAgICAgIHZhciBwYWQgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKVtpbmRleF07XG4gICAgICAgIGlmIChwYWQgJiYgaW5kZXggPT09IHBhZC5pbmRleCAmJiBpZCA9PT0gcGFkLmlkKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBwYWQudGltZXN0YW1wLFxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZDogcGFkLmNvbm5lY3RlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICAgICAgdGhpcy5nZXQoJ2J1dHRvbnMnKS5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5zZXQoe1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFkLmJ1dHRvbnNbaW5kZXhdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBwcmVzc2VkOiBwYWQuYnV0dG9uc1tpbmRleF0ucHJlc3NlZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1vZGVsLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldCgnYXhlcycpLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIG1vZGVsLnNldCgndmFsdWUnLCBwYWQuYXhlc1tpbmRleF0pO1xuICAgICAgICAgICAgICAgIG1vZGVsLnNhdmVfY2hhbmdlcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlX2xvb3AuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0X2dhbWVwYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBnYW1lcGFkIGF0dHJpYnV0ZXMsIGFuZCBzdGFydCB0aGUgd2FpdF9sb29wLlxuICAgICAqL1xuICAgIENvbnRyb2xsZXJNb2RlbC5wcm90b3R5cGUucmVzZXRfZ2FtZXBhZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5nZXQoJ2J1dHRvbnMnKS5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5nZXQoJ2F4ZXMnKS5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgICAgICBheGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIG1hcHBpbmc6ICcnLFxuICAgICAgICAgICAgY29ubmVjdGVkOiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogMC4wLFxuICAgICAgICAgICAgYnV0dG9uczogW10sXG4gICAgICAgICAgICBheGVzOiBbXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLndhaXRfbG9vcC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnYW1lcGFkIGJ1dHRvbiB3aWRnZXQuXG4gICAgICovXG4gICAgQ29udHJvbGxlck1vZGVsLnByb3RvdHlwZS5fY3JlYXRlX2J1dHRvbl9tb2RlbCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWRnZXRfbWFuYWdlci5uZXdfd2lkZ2V0KHtcbiAgICAgICAgICAgIG1vZGVsX25hbWU6ICdDb250cm9sbGVyQnV0dG9uTW9kZWwnLFxuICAgICAgICAgICAgbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsXG4gICAgICAgICAgICBtb2RlbF9tb2R1bGVfdmVyc2lvbjogdGhpcy5nZXQoJ19tb2RlbF9tb2R1bGVfdmVyc2lvbicpLFxuICAgICAgICAgICAgdmlld19uYW1lOiAnQ29udHJvbGxlckJ1dHRvblZpZXcnLFxuICAgICAgICAgICAgdmlld19tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJyxcbiAgICAgICAgICAgIHZpZXdfbW9kdWxlX3ZlcnNpb246IHRoaXMuZ2V0KCdfdmlld19tb2R1bGVfdmVyc2lvbicpLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwuc2V0KCdkZXNjcmlwdGlvbicsIGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBtb2RlbDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2FtZXBhZCBheGlzIHdpZGdldC5cbiAgICAgKi9cbiAgICBDb250cm9sbGVyTW9kZWwucHJvdG90eXBlLl9jcmVhdGVfYXhpc19tb2RlbCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWRnZXRfbWFuYWdlci5uZXdfd2lkZ2V0KHtcbiAgICAgICAgICAgIG1vZGVsX25hbWU6ICdDb250cm9sbGVyQXhpc01vZGVsJyxcbiAgICAgICAgICAgIG1vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgbW9kZWxfbW9kdWxlX3ZlcnNpb246IHRoaXMuZ2V0KCdfbW9kZWxfbW9kdWxlX3ZlcnNpb24nKSxcbiAgICAgICAgICAgIHZpZXdfbmFtZTogJ0NvbnRyb2xsZXJBeGlzVmlldycsXG4gICAgICAgICAgICB2aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgdmlld19tb2R1bGVfdmVyc2lvbjogdGhpcy5nZXQoJ192aWV3X21vZHVsZV92ZXJzaW9uJyksXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbC5zZXQoJ2Rlc2NyaXB0aW9uJywgaW5kZXgpO1xuICAgICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJNb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgYnV0dG9uczogeyBkZXNlcmlhbGl6ZTogdW5wYWNrX21vZGVscyB9LCBheGVzOiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0gfSk7XG4gICAgcmV0dXJuIENvbnRyb2xsZXJNb2RlbDtcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBDb250cm9sbGVyTW9kZWwgfTtcbi8qKlxuICogQSBzaW1wbGUgdmlldyBmb3IgYSBnYW1lcGFkLlxuICovXG52YXIgQ29udHJvbGxlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENvbnRyb2xsZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbnRyb2xsZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHRoaXMucFdpZGdldCA9IG5ldyBKdXB5dGVyUGhvc3Bob3JQYW5lbFdpZGdldCh7IHZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnBXaWRnZXQubm9kZTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5fc2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICBpZiAodGhpcy5lbCB8fCBlbCAhPT0gdGhpcy5wV2lkZ2V0Lm5vZGUpIHtcbiAgICAgICAgICAgIC8vIEJveGVzIGRvbid0IGFsbG93IHNldHRpbmcgdGhlIGVsZW1lbnQgYmV5b25kIHRoZSBpbml0aWFsIGNyZWF0aW9uLlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVzZXQgdGhlIERPTSBlbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnBXaWRnZXQubm9kZTtcbiAgICAgICAgdGhpcy4kZWwgPSAkKHRoaXMucFdpZGdldC5ub2RlKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuYnV0dG9uX3ZpZXdzID0gbmV3IFZpZXdMaXN0KHRoaXMuYWRkX2J1dHRvbiwgbnVsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpidXR0b25zJywgZnVuY3Rpb24gKG1vZGVsLCB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25fdmlld3MudXBkYXRlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYXhpc192aWV3cyA9IG5ldyBWaWV3TGlzdCh0aGlzLmFkZF9heGlzLCBudWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmF4ZXMnLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmF4aXNfdmlld3MudXBkYXRlKHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpuYW1lJywgdGhpcy51cGRhdGVfbGFiZWwpO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtY29udHJvbGxlcicpO1xuICAgICAgICB0aGlzLmxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbCk7XG4gICAgICAgIHRoaXMuYXhpc19ib3ggPSBuZXcgUGFuZWwoKTtcbiAgICAgICAgdGhpcy5heGlzX2JveC5ub2RlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRXaWRnZXQodGhpcy5heGlzX2JveCk7XG4gICAgICAgIHRoaXMuYnV0dG9uX2JveCA9IG5ldyBQYW5lbCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbl9ib3gubm9kZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkV2lkZ2V0KHRoaXMuYnV0dG9uX2JveCk7XG4gICAgICAgIHRoaXMuYnV0dG9uX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnYnV0dG9ucycpKTtcbiAgICAgICAgdGhpcy5heGlzX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnYXhlcycpKTtcbiAgICAgICAgdGhpcy51cGRhdGVfbGFiZWwoKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS51cGRhdGVfbGFiZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwudGV4dENvbnRlbnQgPSB0aGlzLm1vZGVsLmdldCgnbmFtZScpIHx8IHRoaXMubW9kZWwucmVhZG91dDtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5hZGRfYnV0dG9uID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHdlIGluc2VydCBhIGR1bW15IGVsZW1lbnQgc28gdGhlIG9yZGVyIGlzIHByZXNlcnZlZCB3aGVuIHdlIGFkZFxuICAgICAgICAvLyB0aGUgcmVuZGVyZWQgY29udGVudCBsYXRlci5cbiAgICAgICAgdmFyIGR1bW15ID0gbmV3IFdpZGdldCgpO1xuICAgICAgICB0aGlzLmJ1dHRvbl9ib3guYWRkV2lkZ2V0KGR1bW15KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlX2NoaWxkX3ZpZXcobW9kZWwpLnRoZW4oZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGR1bW15IHdpZGdldCB3aXRoIHRoZSBuZXcgb25lLlxuICAgICAgICAgICAgdmFyIGkgPSBBcnJheUV4dC5maXJzdEluZGV4T2YoX3RoaXMuYnV0dG9uX2JveC53aWRnZXRzLCBkdW1teSk7XG4gICAgICAgICAgICBfdGhpcy5idXR0b25fYm94Lmluc2VydFdpZGdldChpLCB2aWV3LnBXaWRnZXQpO1xuICAgICAgICAgICAgZHVtbXkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0pLmNhdGNoKHV0aWxzLnJlamVjdCgnQ291bGQgbm90IGFkZCBjaGlsZCBidXR0b24gdmlldyB0byBjb250cm9sbGVyJywgdHJ1ZSkpO1xuICAgIH07XG4gICAgQ29udHJvbGxlclZpZXcucHJvdG90eXBlLmFkZF9heGlzID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIHdlIGluc2VydCBhIGR1bW15IGVsZW1lbnQgc28gdGhlIG9yZGVyIGlzIHByZXNlcnZlZCB3aGVuIHdlIGFkZFxuICAgICAgICAvLyB0aGUgcmVuZGVyZWQgY29udGVudCBsYXRlci5cbiAgICAgICAgdmFyIGR1bW15ID0gbmV3IFdpZGdldCgpO1xuICAgICAgICB0aGlzLmF4aXNfYm94LmFkZFdpZGdldChkdW1teSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZV9jaGlsZF92aWV3KG1vZGVsKS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBkdW1teSB3aWRnZXQgd2l0aCB0aGUgbmV3IG9uZS5cbiAgICAgICAgICAgIHZhciBpID0gQXJyYXlFeHQuZmlyc3RJbmRleE9mKF90aGlzLmF4aXNfYm94LndpZGdldHMsIGR1bW15KTtcbiAgICAgICAgICAgIF90aGlzLmF4aXNfYm94Lmluc2VydFdpZGdldChpLCB2aWV3LnBXaWRnZXQpO1xuICAgICAgICAgICAgZHVtbXkuZGlzcG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgICAgIH0pLmNhdGNoKHV0aWxzLnJlamVjdCgnQ291bGQgbm90IGFkZCBjaGlsZCBheGlzIHZpZXcgdG8gY29udHJvbGxlcicsIHRydWUpKTtcbiAgICB9O1xuICAgIENvbnRyb2xsZXJWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uX3ZpZXdzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmF4aXNfdmlld3MucmVtb3ZlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29udHJvbGxlclZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IENvbnRyb2xsZXJWaWV3IH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBET01XaWRnZXRNb2RlbCwgRE9NV2lkZ2V0VmlldywgU3R5bGVNb2RlbCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyB0eXBlc2V0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04gfSBmcm9tICcuL3ZlcnNpb24nO1xudmFyIERlc2NyaXB0aW9uU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVzY3JpcHRpb25TdHlsZU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlc2NyaXB0aW9uU3R5bGVNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEZXNjcmlwdGlvblN0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ0Rlc2NyaXB0aW9uU3R5bGVNb2RlbCcsIF9tb2RlbF9tb2R1bGU6ICdAanVweXRlci13aWRnZXRzL2NvbnRyb2xzJywgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04gfSk7XG4gICAgfTtcbiAgICBEZXNjcmlwdGlvblN0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkZXNjcmlwdGlvbl93aWR0aDoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lkZ2V0LWxhYmVsJyxcbiAgICAgICAgICAgIGF0dHJpYnV0ZTogJ3dpZHRoJyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBEZXNjcmlwdGlvblN0eWxlTW9kZWw7XG59KFN0eWxlTW9kZWwpKTtcbmV4cG9ydCB7IERlc2NyaXB0aW9uU3R5bGVNb2RlbCB9O1xudmFyIERlc2NyaXB0aW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlc2NyaXB0aW9uTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVzY3JpcHRpb25Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBEZXNjcmlwdGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdEZXNjcmlwdGlvbk1vZGVsJywgX3ZpZXdfbmFtZTogJ0Rlc2NyaXB0aW9uVmlldycsIF92aWV3X21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLCBfbW9kZWxfbW9kdWxlOiAnQGp1cHl0ZXItd2lkZ2V0cy9jb250cm9scycsIF92aWV3X21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sIF9tb2RlbF9tb2R1bGVfdmVyc2lvbjogSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OLCBkZXNjcmlwdGlvbjogJycsIGRlc2NyaXB0aW9uX3Rvb2x0aXA6IG51bGwgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVzY3JpcHRpb25Nb2RlbDtcbn0oRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IERlc2NyaXB0aW9uTW9kZWwgfTtcbnZhciBEZXNjcmlwdGlvblZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlc2NyaXB0aW9uVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZXNjcmlwdGlvblZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRGVzY3JpcHRpb25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLmxhYmVsLmNsYXNzTmFtZSA9ICd3aWRnZXQtbGFiZWwnO1xuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpkZXNjcmlwdGlvbicsIHRoaXMudXBkYXRlRGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6ZGVzY3JpcHRpb25fdG9vbHRpcCcsIHRoaXMudXBkYXRlRGVzY3JpcHRpb24pO1xuICAgICAgICB0aGlzLnVwZGF0ZURlc2NyaXB0aW9uKCk7XG4gICAgfTtcbiAgICBEZXNjcmlwdGlvblZpZXcucHJvdG90eXBlLnR5cGVzZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdGV4dCkge1xuICAgICAgICB0aGlzLmRpc3BsYXllZC50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVzZXQoZWxlbWVudCwgdGV4dCk7IH0pO1xuICAgIH07XG4gICAgRGVzY3JpcHRpb25WaWV3LnByb3RvdHlwZS51cGRhdGVEZXNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0aW9uID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIHZhciBkZXNjcmlwdGlvbl90b29sdGlwID0gdGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uX3Rvb2x0aXAnKTtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uX3Rvb2x0aXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uX3Rvb2x0aXAgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMubGFiZWwpO1xuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYWJlbC50aXRsZSA9IGRlc2NyaXB0aW9uX3Rvb2x0aXA7XG4gICAgfTtcbiAgICByZXR1cm4gRGVzY3JpcHRpb25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfTtcbi8qKlxuICogRm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHdpdGgganVweXRlci1qcy13aWRnZXRzIDIueC5cbiAqXG4gKiBVc2UgRGVzY3JpcHRpb25Nb2RlbCBpbnN0ZWFkLlxuICovXG52YXIgTGFiZWxlZERPTVdpZGdldE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYWJlbGVkRE9NV2lkZ2V0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGFiZWxlZERPTVdpZGdldE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBMYWJlbGVkRE9NV2lkZ2V0TW9kZWw7XG59KERlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IExhYmVsZWRET01XaWRnZXRNb2RlbCB9O1xuLyoqXG4gKiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2l0aCBqdXB5dGVyLWpzLXdpZGdldHMgMi54LlxuICpcbiAqIFVzZSBEZXNjcmlwdGlvblZpZXcgaW5zdGVhZC5cbiAqL1xudmFyIExhYmVsZWRET01XaWRnZXRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYWJlbGVkRE9NV2lkZ2V0VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBMYWJlbGVkRE9NV2lkZ2V0VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gTGFiZWxlZERPTVdpZGdldFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgTGFiZWxlZERPTVdpZGdldFZpZXcgfTtcbiIsImltcG9ydCBleHBvbmVudCBmcm9tIFwiLi9leHBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGVwLCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMgLSBleHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIG1heCkge1xuICBzdGVwID0gTWF0aC5hYnMoc3RlcCksIG1heCA9IE1hdGguYWJzKG1heCkgLSBzdGVwO1xuICByZXR1cm4gTWF0aC5tYXgoMCwgZXhwb25lbnQobWF4KSAtIGV4cG9uZW50KHN0ZXApKSArIDE7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgLWV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IEFycmF5RXh0IH0gZnJvbSAnQHBob3NwaG9yL2FsZ29yaXRobSc7XG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tICdAcGhvc3Bob3Ivc2lnbmFsaW5nJztcbmltcG9ydCB7IFBhbmVsLCBQYW5lbExheW91dCwgV2lkZ2V0IH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xuaW1wb3J0IHsgU2VsZWN0aW9uIH0gZnJvbSAnLi9jdXJyZW50c2VsZWN0aW9uJztcbi8qKlxuICogVGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gQ29sbGFwc2UgaW5zdGFuY2VzLlxuICovXG52YXIgQ09MTEFQU0VfQ0xBU1MgPSAncC1Db2xsYXBzZSc7XG4vKipcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGEgQ29sbGFwc2UncyBoZWFkZXIuXG4gKi9cbnZhciBDT0xMQVBTRV9IRUFERVJfQ0xBU1MgPSAncC1Db2xsYXBzZS1oZWFkZXInO1xuLyoqXG4gKiBUaGUgY2xhc3MgbmFtZSBhZGRlZCB0byBhIENvbGxhcHNlJ3MgY29udGVudHMuXG4gKi9cbnZhciBDT0xMQVBTRV9DT05URU5UU19DTEFTUyA9ICdwLUNvbGxhcHNlLWNvbnRlbnRzJztcbi8qKlxuICogVGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gYSBDb2xsYXBzZSB3aGVuIGl0IGlzIG9wZW5lZFxuICovXG52YXIgQ09MTEFQU0VfQ0xBU1NfT1BFTiA9ICdwLUNvbGxhcHNlLW9wZW4nO1xuLyoqXG4gKiBBIHBhbmVsIHRoYXQgc3VwcG9ydHMgYSBjb2xsYXBzaWJsZSBoZWFkZXIsIG1hZGUgZnJvbSB0aGUgd2lkZ2V0J3MgdGl0bGUuXG4gKiBDbGlja2luZyBvbiB0aGUgdGl0bGUgZXhwYW5kcyBvciBjb250cmFjdHMgdGhlIHdpZGdldC5cbiAqL1xudmFyIENvbGxhcHNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2xsYXBzZSwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2xsYXBzZShvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9jb2xsYXBzZUNoYW5nZWQgPSBuZXcgU2lnbmFsKF90aGlzKTtcbiAgICAgICAgX3RoaXMuYWRkQ2xhc3MoQ09MTEFQU0VfQ0xBU1MpO1xuICAgICAgICBfdGhpcy5faGVhZGVyID0gbmV3IFdpZGdldCgpO1xuICAgICAgICBfdGhpcy5faGVhZGVyLmFkZENsYXNzKENPTExBUFNFX0hFQURFUl9DTEFTUyk7XG4gICAgICAgIF90aGlzLl9oZWFkZXIubm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90aGlzKTtcbiAgICAgICAgX3RoaXMuX2NvbnRlbnQgPSBuZXcgUGFuZWwoKTtcbiAgICAgICAgX3RoaXMuX2NvbnRlbnQuYWRkQ2xhc3MoQ09MTEFQU0VfQ09OVEVOVFNfQ0xBU1MpO1xuICAgICAgICB2YXIgbGF5b3V0ID0gbmV3IFBhbmVsTGF5b3V0KCk7XG4gICAgICAgIF90aGlzLmxheW91dCA9IGxheW91dDtcbiAgICAgICAgbGF5b3V0LmFkZFdpZGdldChfdGhpcy5faGVhZGVyKTtcbiAgICAgICAgbGF5b3V0LmFkZFdpZGdldChfdGhpcy5fY29udGVudCk7XG4gICAgICAgIGlmIChvcHRpb25zLndpZGdldCkge1xuICAgICAgICAgICAgX3RoaXMud2lkZ2V0ID0gb3B0aW9ucy53aWRnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29sbGFwc2UucHJvdG90eXBlLmRpc3Bvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzcG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRpc3Bvc2UuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGVhZGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29udGVudCA9IG51bGw7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sbGFwc2UucHJvdG90eXBlLCBcIndpZGdldFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgICAgICB2YXIgb2xkV2lkZ2V0ID0gdGhpcy5fd2lkZ2V0O1xuICAgICAgICAgICAgaWYgKG9sZFdpZGdldCkge1xuICAgICAgICAgICAgICAgIG9sZFdpZGdldC5kaXNwb3NlZC5kaXNjb25uZWN0KHRoaXMuX29uQ2hpbGREaXNwb3NlZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgb2xkV2lkZ2V0LnRpdGxlLmNoYW5nZWQuZGlzY29ubmVjdCh0aGlzLl9vblRpdGxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgICAgICAgICAgb2xkV2lkZ2V0LnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl93aWRnZXQgPSB3aWRnZXQ7XG4gICAgICAgICAgICB3aWRnZXQuZGlzcG9zZWQuY29ubmVjdCh0aGlzLl9vbkNoaWxkRGlzcG9zZWQsIHRoaXMpO1xuICAgICAgICAgICAgd2lkZ2V0LnRpdGxlLmNoYW5nZWQuY29ubmVjdCh0aGlzLl9vblRpdGxlQ2hhbmdlZCwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9vblRpdGxlQ2hhbmdlZCh3aWRnZXQudGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudC5hZGRXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxhcHNlLnByb3RvdHlwZSwgXCJjb2xsYXBzZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgaGF2ZSB0aGlzIGNoZWNrIGhlcmU/XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuX2NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxhcHNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl91bmNvbGxhcHNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENvbGxhcHNlLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbGxhcHNlLnByb3RvdHlwZSwgXCJjb2xsYXBzZUNoYW5nZWRcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb2xsYXBzZUNoYW5nZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIENvbGxhcHNlLnByb3RvdHlwZS5fY29sbGFwc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9jb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jb250ZW50LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKENPTExBUFNFX0NMQVNTX09QRU4pO1xuICAgICAgICB0aGlzLl9jb2xsYXBzZUNoYW5nZWQuZW1pdCh2b2lkIDApO1xuICAgIH07XG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl91bmNvbGxhcHNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2NvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvbnRlbnQuc2hvdygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MoQ09MTEFQU0VfQ0xBU1NfT1BFTik7XG4gICAgICAgIHRoaXMuX2NvbGxhcHNlQ2hhbmdlZC5lbWl0KHZvaWQgMCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIERPTSBldmVudHMgZm9yIHRoZSBDb2xsYXBzZSB3aWRnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnQgLSBUaGUgRE9NIGV2ZW50IHNlbnQgdG8gdGhlIHBhbmVsLlxuICAgICAqXG4gICAgICogIyMjIyBOb3Rlc1xuICAgICAqIFRoaXMgbWV0aG9kIGltcGxlbWVudHMgdGhlIERPTSBgRXZlbnRMaXN0ZW5lcmAgaW50ZXJmYWNlIGFuZCBpc1xuICAgICAqIGNhbGxlZCBpbiByZXNwb25zZSB0byBldmVudHMgb24gdGhlIHBhbmVsJ3MgRE9NIG5vZGUuIEl0IHNob3VsZFxuICAgICAqIG5vdCBiZSBjYWxsZWQgZGlyZWN0bHkgYnkgdXNlciBjb2RlLlxuICAgICAqL1xuICAgIENvbGxhcHNlLnByb3RvdHlwZS5oYW5kbGVFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9ldnRDbGljayhldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX2V2dENsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGBjaGFuZ2VkYCBzaWduYWwgb2YgYSB0aXRsZSBvYmplY3QuXG4gICAgICovXG4gICAgQ29sbGFwc2UucHJvdG90eXBlLl9vblRpdGxlQ2hhbmdlZCA9IGZ1bmN0aW9uIChzZW5kZXIpIHtcbiAgICAgICAgdGhpcy5faGVhZGVyLm5vZGUudGV4dENvbnRlbnQgPSB0aGlzLl93aWRnZXQudGl0bGUubGFiZWw7XG4gICAgfTtcbiAgICBDb2xsYXBzZS5wcm90b3R5cGUuX29uQ2hpbGREaXNwb3NlZCA9IGZ1bmN0aW9uIChzZW5kZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwb3NlKCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29sbGFwc2U7XG59KFdpZGdldCkpO1xuZXhwb3J0IHsgQ29sbGFwc2UgfTtcbi8qKlxuICogVGhlIGNsYXNzIG5hbWUgYWRkZWQgdG8gQWNjb3JkaW9uIGluc3RhbmNlcy5cbiAqL1xudmFyIEFDQ09SRElPTl9DTEFTUyA9ICdwLUFjY29yZGlvbic7XG4vKipcbiAqIFRoZSBjbGFzcyBuYW1lIGFkZGVkIHRvIGFuIEFjY29yZGlvbiBjaGlsZC5cbiAqL1xudmFyIEFDQ09SRElPTl9DSElMRF9DTEFTUyA9ICdwLUFjY29yZGlvbi1jaGlsZCc7XG52YXIgQUNDT1JESU9OX0NISUxEX0FDVElWRV9DTEFTUyA9ICdwLUFjY29yZGlvbi1jaGlsZC1hY3RpdmUnO1xuLyoqXG4gKiBBIHBhbmVsIHRoYXQgc3VwcG9ydHMgYSBjb2xsYXBzaWJsZSBoZWFkZXIsIG1hZGUgZnJvbSB0aGUgd2lkZ2V0J3MgdGl0bGUuXG4gKiBDbGlja2luZyBvbiB0aGUgdGl0bGUgZXhwYW5kcyBvciBjb250cmFjdHMgdGhlIHdpZGdldC5cbiAqL1xudmFyIEFjY29yZGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQWNjb3JkaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjY29yZGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG9wdGlvbnMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uKF90aGlzLndpZGdldHMpO1xuICAgICAgICBfdGhpcy5fc2VsZWN0aW9uLnNlbGVjdGlvbkNoYW5nZWQuY29ubmVjdChfdGhpcy5fb25TZWxlY3Rpb25DaGFuZ2VkLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLmFkZENsYXNzKEFDQ09SRElPTl9DTEFTUyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFjY29yZGlvbi5wcm90b3R5cGUsIFwiY29sbGFwc2VXaWRnZXRzXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVhZC1vbmx5IHNlcXVlbmNlIG9mIHRoZSB3aWRnZXRzIGluIHRoZSBwYW5lbC5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IHByb3BlcnR5LlxuICAgICAgICAgKi9cbiAgICAgICAgLyogIGdldCB3aWRnZXRzKCk6IElTZXF1ZW5jZTxXaWRnZXQ+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgQXJyYXlTZXF1ZW5jZSh0b0FycmF5KG1hcCgodGhpcy5sYXlvdXQgYXMgUGFuZWxMYXlvdXQpLndpZGdldHMsICh3OiBDb2xsYXBzZSkgPT4gdy53aWRnZXQpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dC53aWRnZXRzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWNjb3JkaW9uLnByb3RvdHlwZSwgXCJzZWxlY3Rpb25cIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb247XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFjY29yZGlvbi5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uICh3aWRnZXQpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5RXh0LmZpbmRGaXJzdEluZGV4KHRoaXMuY29sbGFwc2VXaWRnZXRzLCBmdW5jdGlvbiAodykgeyByZXR1cm4gdy53aWRnZXQgPT09IHdpZGdldDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGQgYSB3aWRnZXQgdG8gdGhlIGVuZCBvZiB0aGUgYWNjb3JkaW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdpZGdldCAtIFRoZSB3aWRnZXQgdG8gYWRkIHRvIHRoZSBhY2NvcmRpb24uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBUaGUgQ29sbGFwc2Ugd2lkZ2V0IHdyYXBwaW5nIHRoZSBhZGRlZCB3aWRnZXQuXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogVGhlIHdpZGdldCB3aWxsIGJlIHdyYXBwZWQgaW4gYSBDb2xsYXBzZWRXaWRnZXQuXG4gICAgICovXG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5hZGRXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgIHZhciBjb2xsYXBzZSA9IHRoaXMuX3dyYXBXaWRnZXQod2lkZ2V0KTtcbiAgICAgICAgY29sbGFwc2UuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5hZGRXaWRnZXQuY2FsbCh0aGlzLCBjb2xsYXBzZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbi5hZGp1c3RTZWxlY3Rpb25Gb3JJbnNlcnQodGhpcy53aWRnZXRzLmxlbmd0aCAtIDEsIGNvbGxhcHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbGxhcHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgd2lkZ2V0IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSB3aWRnZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBpbnNlcnQgaW50byB0byB0aGUgYWNjb3JkaW9uLlxuICAgICAqXG4gICAgICogIyMjIyBOb3Rlc1xuICAgICAqIElmIHRoZSB3aWRnZXQgaXMgYWxyZWFkeSBjb250YWluZWQgaW4gdGhlIHBhbmVsLCBpdCB3aWxsIGJlIG1vdmVkLlxuICAgICAqL1xuICAgIEFjY29yZGlvbi5wcm90b3R5cGUuaW5zZXJ0V2lkZ2V0ID0gZnVuY3Rpb24gKGluZGV4LCB3aWRnZXQpIHtcbiAgICAgICAgdmFyIGNvbGxhcHNlID0gdGhpcy5fd3JhcFdpZGdldCh3aWRnZXQpO1xuICAgICAgICBjb2xsYXBzZS5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluc2VydFdpZGdldC5jYWxsKHRoaXMsIGluZGV4LCBjb2xsYXBzZSk7XG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbi5hZGp1c3RTZWxlY3Rpb25Gb3JJbnNlcnQoaW5kZXgsIGNvbGxhcHNlKTtcbiAgICB9O1xuICAgIEFjY29yZGlvbi5wcm90b3R5cGUucmVtb3ZlV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmluZGV4T2Yod2lkZ2V0KTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHZhciBjb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VXaWRnZXRzW2luZGV4XTtcbiAgICAgICAgICAgIHdpZGdldC5wYXJlbnQgPSBudWxsO1xuICAgICAgICAgICAgY29sbGFwc2UuZGlzcG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uLmFkanVzdFNlbGVjdGlvbkZvclJlbW92ZShpbmRleCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEFjY29yZGlvbi5wcm90b3R5cGUuX3dyYXBXaWRnZXQgPSBmdW5jdGlvbiAod2lkZ2V0KSB7XG4gICAgICAgIHZhciBjb2xsYXBzZSA9IG5ldyBDb2xsYXBzZSh7IHdpZGdldDogd2lkZ2V0IH0pO1xuICAgICAgICBjb2xsYXBzZS5hZGRDbGFzcyhBQ0NPUkRJT05fQ0hJTERfQ0xBU1MpO1xuICAgICAgICBjb2xsYXBzZS5jb2xsYXBzZUNoYW5nZWQuY29ubmVjdCh0aGlzLl9vbkNvbGxhcHNlQ2hhbmdlLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIGNvbGxhcHNlO1xuICAgIH07XG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5fb25Db2xsYXBzZUNoYW5nZSA9IGZ1bmN0aW9uIChzZW5kZXIpIHtcbiAgICAgICAgaWYgKCFzZW5kZXIuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb24udmFsdWUgPSBzZW5kZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fc2VsZWN0aW9uLnZhbHVlID09PSBzZW5kZXIgJiYgc2VuZGVyLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uLnZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQWNjb3JkaW9uLnByb3RvdHlwZS5fb25TZWxlY3Rpb25DaGFuZ2VkID0gZnVuY3Rpb24gKHNlbmRlciwgY2hhbmdlKSB7XG4gICAgICAgIC8vIENvbGxhcHNlIHByZXZpb3VzIHdpZGdldCwgb3BlbiBjdXJyZW50IHdpZGdldFxuICAgICAgICB2YXIgcHYgPSBjaGFuZ2UucHJldmlvdXNWYWx1ZTtcbiAgICAgICAgdmFyIGN2ID0gY2hhbmdlLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgaWYgKHB2KSB7XG4gICAgICAgICAgICBwdi5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcHYucmVtb3ZlQ2xhc3MoQUNDT1JESU9OX0NISUxEX0FDVElWRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN2KSB7XG4gICAgICAgICAgICBjdi5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGN2LmFkZENsYXNzKEFDQ09SRElPTl9DSElMRF9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQWNjb3JkaW9uO1xufShQYW5lbCkpO1xuZXhwb3J0IHsgQWNjb3JkaW9uIH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsIi8vIFtbZmlsbF1hbGlnbl1bc2lnbl1bc3ltYm9sXVswXVt3aWR0aF1bLF1bLnByZWNpc2lvbl1bfl1bdHlwZV1cbnZhciByZSA9IC9eKD86KC4pPyhbPD49Xl0pKT8oWytcXC0oIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICByZXR1cm4gbmV3IEZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xufVxuXG5mb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlID0gRm9ybWF0U3BlY2lmaWVyLnByb3RvdHlwZTsgLy8gaW5zdGFuY2VvZlxuXG5mdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIGlmICghKG1hdGNoID0gcmUuZXhlYyhzcGVjaWZpZXIpKSkgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBmb3JtYXQ6IFwiICsgc3BlY2lmaWVyKTtcbiAgdmFyIG1hdGNoO1xuICB0aGlzLmZpbGwgPSBtYXRjaFsxXSB8fCBcIiBcIjtcbiAgdGhpcy5hbGlnbiA9IG1hdGNoWzJdIHx8IFwiPlwiO1xuICB0aGlzLnNpZ24gPSBtYXRjaFszXSB8fCBcIi1cIjtcbiAgdGhpcy5zeW1ib2wgPSBtYXRjaFs0XSB8fCBcIlwiO1xuICB0aGlzLnplcm8gPSAhIW1hdGNoWzVdO1xuICB0aGlzLndpZHRoID0gbWF0Y2hbNl0gJiYgK21hdGNoWzZdO1xuICB0aGlzLmNvbW1hID0gISFtYXRjaFs3XTtcbiAgdGhpcy5wcmVjaXNpb24gPSBtYXRjaFs4XSAmJiArbWF0Y2hbOF0uc2xpY2UoMSk7XG4gIHRoaXMudHJpbSA9ICEhbWF0Y2hbOV07XG4gIHRoaXMudHlwZSA9IG1hdGNoWzEwXSB8fCBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT0gbnVsbCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT0gbnVsbCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiaW1wb3J0IGZvcm1hdExvY2FsZSBmcm9tIFwiLi9sb2NhbGVcIjtcblxudmFyIGxvY2FsZTtcbmV4cG9ydCB2YXIgZm9ybWF0O1xuZXhwb3J0IHZhciBmb3JtYXRQcmVmaXg7XG5cbmRlZmF1bHRMb2NhbGUoe1xuICBkZWNpbWFsOiBcIi5cIixcbiAgdGhvdXNhbmRzOiBcIixcIixcbiAgZ3JvdXBpbmc6IFszXSxcbiAgY3VycmVuY3k6IFtcIiRcIiwgXCJcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICBmb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICBmb3JtYXRQcmVmaXggPSBsb2NhbGUuZm9ybWF0UHJlZml4O1xuICByZXR1cm4gbG9jYWxlO1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3LCBTdHlsZU1vZGVsIH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgSlVQWVRFUl9DT05UUk9MU19WRVJTSU9OIH0gZnJvbSAnLi92ZXJzaW9uJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgQnV0dG9uU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQnV0dG9uU3R5bGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b25TdHlsZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJ1dHRvblN0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0J1dHRvblN0eWxlTW9kZWwnLFxuICAgICAgICAgICAgX21vZGVsX21vZHVsZTogJ0BqdXB5dGVyLXdpZGdldHMvY29udHJvbHMnLFxuICAgICAgICAgICAgX21vZGVsX21vZHVsZV92ZXJzaW9uOiBKVVBZVEVSX0NPTlRST0xTX1ZFUlNJT04sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQnV0dG9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSB7XG4gICAgICAgIGJ1dHRvbl9jb2xvcjoge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICcnLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sXG4gICAgICAgIGZvbnRfd2VpZ2h0OiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJycsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdmb250LXdlaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQnV0dG9uU3R5bGVNb2RlbDtcbn0oU3R5bGVNb2RlbCkpO1xuZXhwb3J0IHsgQnV0dG9uU3R5bGVNb2RlbCB9O1xudmFyIEJ1dHRvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCdXR0b25Nb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCdXR0b25Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCdXR0b25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIHRvb2x0aXA6ICcnLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaWNvbjogJycsXG4gICAgICAgICAgICBidXR0b25fc3R5bGU6ICcnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0J1dHRvblZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdCdXR0b25Nb2RlbCcsXG4gICAgICAgICAgICBzdHlsZTogbnVsbFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCdXR0b25Nb2RlbDtcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBCdXR0b25Nb2RlbCB9O1xudmFyIEJ1dHRvblZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJ1dHRvblZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQnV0dG9uVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1idXR0b24nKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmJ1dHRvbl9zdHlsZScsIHRoaXMudXBkYXRlX2J1dHRvbl9zdHlsZSk7XG4gICAgICAgIHRoaXMuc2V0X2J1dHRvbl9zdHlsZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsLmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMubW9kZWwuZ2V0KCd0b29sdGlwJykpO1xuICAgICAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLm1vZGVsLmdldCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgdmFyIGljb24gPSB0aGlzLm1vZGVsLmdldCgnaWNvbicpO1xuICAgICAgICBpZiAoZGVzY3JpcHRpb24ubGVuZ3RoIHx8IGljb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmVsLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpZiAoaWNvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhJyk7XG4gICAgICAgICAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdmYS0nICsgaWNvbik7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpLmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcmlwdGlvbikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUudXBkYXRlX2J1dHRvbl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoQnV0dG9uVmlldy5jbGFzc19tYXAsICdidXR0b25fc3R5bGUnKTtcbiAgICB9O1xuICAgIEJ1dHRvblZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKEJ1dHRvblZpZXcuY2xhc3NfbWFwLCAnYnV0dG9uX3N0eWxlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaWN0aW9uYXJ5IG9mIGV2ZW50cyBhbmQgaGFuZGxlcnNcbiAgICAgKi9cbiAgICBCdXR0b25WaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE86IHJldHVybiB0eXBpbmcgbm90IG5lZWRlZCBpbiBUeXBlc2NyaXB0IGxhdGVyIHRoYW4gMS44LnhcbiAgICAgICAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjIwNzcwMjMvd2h5LWNhbnQtaS1pbmRpcmVjdGx5LXJldHVybi1hbi1vYmplY3QtbGl0ZXJhbC10by1zYXRpc2Z5LWFuLWluZGV4LXNpZ25hdHVyZS1yZSBhbmQgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L3B1bGwvNzAyOVxuICAgICAgICByZXR1cm4geyAnY2xpY2snOiAnX2hhbmRsZV9jbGljaycgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgQnV0dG9uVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNlbmQoeyBldmVudDogJ2NsaWNrJyB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCdXR0b25WaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3b3VsZCBiZSBzZXQgYWZ0ZXIgaXQgaXMgbmVlZGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXG4gICAgICAgICAgICByZXR1cm4gJ2J1dHRvbic7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEJ1dHRvblZpZXcuY2xhc3NfbWFwID0ge1xuICAgICAgICBwcmltYXJ5OiBbJ21vZC1wcmltYXJ5J10sXG4gICAgICAgIHN1Y2Nlc3M6IFsnbW9kLXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydtb2QtaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ21vZC13YXJuaW5nJ10sXG4gICAgICAgIGRhbmdlcjogWydtb2QtZGFuZ2VyJ11cbiAgICB9O1xuICAgIHJldHVybiBCdXR0b25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBCdXR0b25WaWV3IH07XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBXaWRnZXQgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IFdpZGdldFxuLy8+Pmdyb3VwOiBDb3JlXG4vLz4+ZGVzY3JpcHRpb246IFByb3ZpZGVzIGEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgc3RhdGVmdWwgd2lkZ2V0cyB3aXRoIGEgY29tbW9uIEFQSS5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9qUXVlcnkud2lkZ2V0L1xuLy8+PmRlbW9zOiBodHRwOi8vanF1ZXJ5dWkuY29tL3dpZGdldC9cblxuKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiwgXCIuL3ZlcnNpb25cIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSggZnVuY3Rpb24oICQgKSB7XG5cbnZhciB3aWRnZXRVdWlkID0gMDtcbnZhciB3aWRnZXRTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuJC5jbGVhbkRhdGEgPSAoIGZ1bmN0aW9uKCBvcmlnICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW1zICkge1xuXHRcdHZhciBldmVudHMsIGVsZW0sIGk7XG5cdFx0Zm9yICggaSA9IDA7ICggZWxlbSA9IGVsZW1zWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHR0cnkge1xuXG5cdFx0XHRcdC8vIE9ubHkgdHJpZ2dlciByZW1vdmUgd2hlbiBuZWNlc3NhcnkgdG8gc2F2ZSB0aW1lXG5cdFx0XHRcdGV2ZW50cyA9ICQuX2RhdGEoIGVsZW0sIFwiZXZlbnRzXCIgKTtcblx0XHRcdFx0aWYgKCBldmVudHMgJiYgZXZlbnRzLnJlbW92ZSApIHtcblx0XHRcdFx0XHQkKCBlbGVtICkudHJpZ2dlckhhbmRsZXIoIFwicmVtb3ZlXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIdHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC84MjM1XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cdFx0fVxuXHRcdG9yaWcoIGVsZW1zICk7XG5cdH07XG59ICkoICQuY2xlYW5EYXRhICk7XG5cbiQud2lkZ2V0ID0gZnVuY3Rpb24oIG5hbWUsIGJhc2UsIHByb3RvdHlwZSApIHtcblx0dmFyIGV4aXN0aW5nQ29uc3RydWN0b3IsIGNvbnN0cnVjdG9yLCBiYXNlUHJvdG90eXBlO1xuXG5cdC8vIFByb3hpZWRQcm90b3R5cGUgYWxsb3dzIHRoZSBwcm92aWRlZCBwcm90b3R5cGUgdG8gcmVtYWluIHVubW9kaWZpZWRcblx0Ly8gc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBhcyBhIG1peGluIGZvciBtdWx0aXBsZSB3aWRnZXRzICgjODg3Nilcblx0dmFyIHByb3hpZWRQcm90b3R5cGUgPSB7fTtcblxuXHR2YXIgbmFtZXNwYWNlID0gbmFtZS5zcGxpdCggXCIuXCIgKVsgMCBdO1xuXHRuYW1lID0gbmFtZS5zcGxpdCggXCIuXCIgKVsgMSBdO1xuXHR2YXIgZnVsbE5hbWUgPSBuYW1lc3BhY2UgKyBcIi1cIiArIG5hbWU7XG5cblx0aWYgKCAhcHJvdG90eXBlICkge1xuXHRcdHByb3RvdHlwZSA9IGJhc2U7XG5cdFx0YmFzZSA9ICQuV2lkZ2V0O1xuXHR9XG5cblx0aWYgKCAkLmlzQXJyYXkoIHByb3RvdHlwZSApICkge1xuXHRcdHByb3RvdHlwZSA9ICQuZXh0ZW5kLmFwcGx5KCBudWxsLCBbIHt9IF0uY29uY2F0KCBwcm90b3R5cGUgKSApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIHNlbGVjdG9yIGZvciBwbHVnaW5cblx0JC5leHByWyBcIjpcIiBdWyBmdWxsTmFtZS50b0xvd2VyQ2FzZSgpIF0gPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gISEkLmRhdGEoIGVsZW0sIGZ1bGxOYW1lICk7XG5cdH07XG5cblx0JFsgbmFtZXNwYWNlIF0gPSAkWyBuYW1lc3BhY2UgXSB8fCB7fTtcblx0ZXhpc3RpbmdDb25zdHJ1Y3RvciA9ICRbIG5hbWVzcGFjZSBdWyBuYW1lIF07XG5cdGNvbnN0cnVjdG9yID0gJFsgbmFtZXNwYWNlIF1bIG5hbWUgXSA9IGZ1bmN0aW9uKCBvcHRpb25zLCBlbGVtZW50ICkge1xuXG5cdFx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IFwibmV3XCIga2V5d29yZFxuXHRcdGlmICggIXRoaXMuX2NyZWF0ZVdpZGdldCApIHtcblx0XHRcdHJldHVybiBuZXcgY29uc3RydWN0b3IoIG9wdGlvbnMsIGVsZW1lbnQgKTtcblx0XHR9XG5cblx0XHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgaW5pdGlhbGl6aW5nIGZvciBzaW1wbGUgaW5oZXJpdGFuY2Vcblx0XHQvLyBtdXN0IHVzZSBcIm5ld1wiIGtleXdvcmQgKHRoZSBjb2RlIGFib3ZlIGFsd2F5cyBwYXNzZXMgYXJncylcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLl9jcmVhdGVXaWRnZXQoIG9wdGlvbnMsIGVsZW1lbnQgKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gRXh0ZW5kIHdpdGggdGhlIGV4aXN0aW5nIGNvbnN0cnVjdG9yIHRvIGNhcnJ5IG92ZXIgYW55IHN0YXRpYyBwcm9wZXJ0aWVzXG5cdCQuZXh0ZW5kKCBjb25zdHJ1Y3RvciwgZXhpc3RpbmdDb25zdHJ1Y3Rvciwge1xuXHRcdHZlcnNpb246IHByb3RvdHlwZS52ZXJzaW9uLFxuXG5cdFx0Ly8gQ29weSB0aGUgb2JqZWN0IHVzZWQgdG8gY3JlYXRlIHRoZSBwcm90b3R5cGUgaW4gY2FzZSB3ZSBuZWVkIHRvXG5cdFx0Ly8gcmVkZWZpbmUgdGhlIHdpZGdldCBsYXRlclxuXHRcdF9wcm90bzogJC5leHRlbmQoIHt9LCBwcm90b3R5cGUgKSxcblxuXHRcdC8vIFRyYWNrIHdpZGdldHMgdGhhdCBpbmhlcml0IGZyb20gdGhpcyB3aWRnZXQgaW4gY2FzZSB0aGlzIHdpZGdldCBpc1xuXHRcdC8vIHJlZGVmaW5lZCBhZnRlciBhIHdpZGdldCBpbmhlcml0cyBmcm9tIGl0XG5cdFx0X2NoaWxkQ29uc3RydWN0b3JzOiBbXVxuXHR9ICk7XG5cblx0YmFzZVByb3RvdHlwZSA9IG5ldyBiYXNlKCk7XG5cblx0Ly8gV2UgbmVlZCB0byBtYWtlIHRoZSBvcHRpb25zIGhhc2ggYSBwcm9wZXJ0eSBkaXJlY3RseSBvbiB0aGUgbmV3IGluc3RhbmNlXG5cdC8vIG90aGVyd2lzZSB3ZSdsbCBtb2RpZnkgdGhlIG9wdGlvbnMgaGFzaCBvbiB0aGUgcHJvdG90eXBlIHRoYXQgd2UncmVcblx0Ly8gaW5oZXJpdGluZyBmcm9tXG5cdGJhc2VQcm90b3R5cGUub3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZCgge30sIGJhc2VQcm90b3R5cGUub3B0aW9ucyApO1xuXHQkLmVhY2goIHByb3RvdHlwZSwgZnVuY3Rpb24oIHByb3AsIHZhbHVlICkge1xuXHRcdGlmICggISQuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHByb3hpZWRQcm90b3R5cGVbIHByb3AgXSA9IHZhbHVlO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRwcm94aWVkUHJvdG90eXBlWyBwcm9wIF0gPSAoIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZnVuY3Rpb24gX3N1cGVyKCkge1xuXHRcdFx0XHRyZXR1cm4gYmFzZS5wcm90b3R5cGVbIHByb3AgXS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHR9XG5cblx0XHRcdGZ1bmN0aW9uIF9zdXBlckFwcGx5KCBhcmdzICkge1xuXHRcdFx0XHRyZXR1cm4gYmFzZS5wcm90b3R5cGVbIHByb3AgXS5hcHBseSggdGhpcywgYXJncyApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBfX3N1cGVyID0gdGhpcy5fc3VwZXI7XG5cdFx0XHRcdHZhciBfX3N1cGVyQXBwbHkgPSB0aGlzLl9zdXBlckFwcGx5O1xuXHRcdFx0XHR2YXIgcmV0dXJuVmFsdWU7XG5cblx0XHRcdFx0dGhpcy5fc3VwZXIgPSBfc3VwZXI7XG5cdFx0XHRcdHRoaXMuX3N1cGVyQXBwbHkgPSBfc3VwZXJBcHBseTtcblxuXHRcdFx0XHRyZXR1cm5WYWx1ZSA9IHZhbHVlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblxuXHRcdFx0XHR0aGlzLl9zdXBlciA9IF9fc3VwZXI7XG5cdFx0XHRcdHRoaXMuX3N1cGVyQXBwbHkgPSBfX3N1cGVyQXBwbHk7XG5cblx0XHRcdFx0cmV0dXJuIHJldHVyblZhbHVlO1xuXHRcdFx0fTtcblx0XHR9ICkoKTtcblx0fSApO1xuXHRjb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLndpZGdldC5leHRlbmQoIGJhc2VQcm90b3R5cGUsIHtcblxuXHRcdC8vIFRPRE86IHJlbW92ZSBzdXBwb3J0IGZvciB3aWRnZXRFdmVudFByZWZpeFxuXHRcdC8vIGFsd2F5cyB1c2UgdGhlIG5hbWUgKyBhIGNvbG9uIGFzIHRoZSBwcmVmaXgsIGUuZy4sIGRyYWdnYWJsZTpzdGFydFxuXHRcdC8vIGRvbid0IHByZWZpeCBmb3Igd2lkZ2V0cyB0aGF0IGFyZW4ndCBET00tYmFzZWRcblx0XHR3aWRnZXRFdmVudFByZWZpeDogZXhpc3RpbmdDb25zdHJ1Y3RvciA/ICggYmFzZVByb3RvdHlwZS53aWRnZXRFdmVudFByZWZpeCB8fCBuYW1lICkgOiBuYW1lXG5cdH0sIHByb3hpZWRQcm90b3R5cGUsIHtcblx0XHRjb25zdHJ1Y3RvcjogY29uc3RydWN0b3IsXG5cdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2UsXG5cdFx0d2lkZ2V0TmFtZTogbmFtZSxcblx0XHR3aWRnZXRGdWxsTmFtZTogZnVsbE5hbWVcblx0fSApO1xuXG5cdC8vIElmIHRoaXMgd2lkZ2V0IGlzIGJlaW5nIHJlZGVmaW5lZCB0aGVuIHdlIG5lZWQgdG8gZmluZCBhbGwgd2lkZ2V0cyB0aGF0XG5cdC8vIGFyZSBpbmhlcml0aW5nIGZyb20gaXQgYW5kIHJlZGVmaW5lIGFsbCBvZiB0aGVtIHNvIHRoYXQgdGhleSBpbmhlcml0IGZyb21cblx0Ly8gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoaXMgd2lkZ2V0LiBXZSdyZSBlc3NlbnRpYWxseSB0cnlpbmcgdG8gcmVwbGFjZSBvbmVcblx0Ly8gbGV2ZWwgaW4gdGhlIHByb3RvdHlwZSBjaGFpbi5cblx0aWYgKCBleGlzdGluZ0NvbnN0cnVjdG9yICkge1xuXHRcdCQuZWFjaCggZXhpc3RpbmdDb25zdHJ1Y3Rvci5fY2hpbGRDb25zdHJ1Y3RvcnMsIGZ1bmN0aW9uKCBpLCBjaGlsZCApIHtcblx0XHRcdHZhciBjaGlsZFByb3RvdHlwZSA9IGNoaWxkLnByb3RvdHlwZTtcblxuXHRcdFx0Ly8gUmVkZWZpbmUgdGhlIGNoaWxkIHdpZGdldCB1c2luZyB0aGUgc2FtZSBwcm90b3R5cGUgdGhhdCB3YXNcblx0XHRcdC8vIG9yaWdpbmFsbHkgdXNlZCwgYnV0IGluaGVyaXQgZnJvbSB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIGJhc2Vcblx0XHRcdCQud2lkZ2V0KCBjaGlsZFByb3RvdHlwZS5uYW1lc3BhY2UgKyBcIi5cIiArIGNoaWxkUHJvdG90eXBlLndpZGdldE5hbWUsIGNvbnN0cnVjdG9yLFxuXHRcdFx0XHRjaGlsZC5fcHJvdG8gKTtcblx0XHR9ICk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIGxpc3Qgb2YgZXhpc3RpbmcgY2hpbGQgY29uc3RydWN0b3JzIGZyb20gdGhlIG9sZCBjb25zdHJ1Y3RvclxuXHRcdC8vIHNvIHRoZSBvbGQgY2hpbGQgY29uc3RydWN0b3JzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZFxuXHRcdGRlbGV0ZSBleGlzdGluZ0NvbnN0cnVjdG9yLl9jaGlsZENvbnN0cnVjdG9ycztcblx0fSBlbHNlIHtcblx0XHRiYXNlLl9jaGlsZENvbnN0cnVjdG9ycy5wdXNoKCBjb25zdHJ1Y3RvciApO1xuXHR9XG5cblx0JC53aWRnZXQuYnJpZGdlKCBuYW1lLCBjb25zdHJ1Y3RvciApO1xuXG5cdHJldHVybiBjb25zdHJ1Y3Rvcjtcbn07XG5cbiQud2lkZ2V0LmV4dGVuZCA9IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdHZhciBpbnB1dCA9IHdpZGdldFNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApO1xuXHR2YXIgaW5wdXRJbmRleCA9IDA7XG5cdHZhciBpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0dmFyIGtleTtcblx0dmFyIHZhbHVlO1xuXG5cdGZvciAoIDsgaW5wdXRJbmRleCA8IGlucHV0TGVuZ3RoOyBpbnB1dEluZGV4KysgKSB7XG5cdFx0Zm9yICgga2V5IGluIGlucHV0WyBpbnB1dEluZGV4IF0gKSB7XG5cdFx0XHR2YWx1ZSA9IGlucHV0WyBpbnB1dEluZGV4IF1bIGtleSBdO1xuXHRcdFx0aWYgKCBpbnB1dFsgaW5wdXRJbmRleCBdLmhhc093blByb3BlcnR5KCBrZXkgKSAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIENsb25lIG9iamVjdHNcblx0XHRcdFx0aWYgKCAkLmlzUGxhaW5PYmplY3QoIHZhbHVlICkgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBrZXkgXSA9ICQuaXNQbGFpbk9iamVjdCggdGFyZ2V0WyBrZXkgXSApID9cblx0XHRcdFx0XHRcdCQud2lkZ2V0LmV4dGVuZCgge30sIHRhcmdldFsga2V5IF0sIHZhbHVlICkgOlxuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBleHRlbmQgc3RyaW5ncywgYXJyYXlzLCBldGMuIHdpdGggb2JqZWN0c1xuXHRcdFx0XHRcdFx0JC53aWRnZXQuZXh0ZW5kKCB7fSwgdmFsdWUgKTtcblxuXHRcdFx0XHQvLyBDb3B5IGV2ZXJ5dGhpbmcgZWxzZSBieSByZWZlcmVuY2Vcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0YXJnZXRbIGtleSBdID0gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbiQud2lkZ2V0LmJyaWRnZSA9IGZ1bmN0aW9uKCBuYW1lLCBvYmplY3QgKSB7XG5cdHZhciBmdWxsTmFtZSA9IG9iamVjdC5wcm90b3R5cGUud2lkZ2V0RnVsbE5hbWUgfHwgbmFtZTtcblx0JC5mblsgbmFtZSBdID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0dmFyIGlzTWV0aG9kQ2FsbCA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiO1xuXHRcdHZhciBhcmdzID0gd2lkZ2V0U2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XG5cdFx0dmFyIHJldHVyblZhbHVlID0gdGhpcztcblxuXHRcdGlmICggaXNNZXRob2RDYWxsICkge1xuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGFuIGVtcHR5IGNvbGxlY3Rpb24sIHdlIG5lZWQgdG8gaGF2ZSB0aGUgaW5zdGFuY2UgbWV0aG9kXG5cdFx0XHQvLyByZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgdGhlIGpRdWVyeSBpbnN0YW5jZVxuXHRcdFx0aWYgKCAhdGhpcy5sZW5ndGggJiYgb3B0aW9ucyA9PT0gXCJpbnN0YW5jZVwiICkge1xuXHRcdFx0XHRyZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0dmFyIG1ldGhvZFZhbHVlO1xuXHRcdFx0XHRcdHZhciBpbnN0YW5jZSA9ICQuZGF0YSggdGhpcywgZnVsbE5hbWUgKTtcblxuXHRcdFx0XHRcdGlmICggb3B0aW9ucyA9PT0gXCJpbnN0YW5jZVwiICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuVmFsdWUgPSBpbnN0YW5jZTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoICFpbnN0YW5jZSApIHtcblx0XHRcdFx0XHRcdHJldHVybiAkLmVycm9yKCBcImNhbm5vdCBjYWxsIG1ldGhvZHMgb24gXCIgKyBuYW1lICtcblx0XHRcdFx0XHRcdFx0XCIgcHJpb3IgdG8gaW5pdGlhbGl6YXRpb247IFwiICtcblx0XHRcdFx0XHRcdFx0XCJhdHRlbXB0ZWQgdG8gY2FsbCBtZXRob2QgJ1wiICsgb3B0aW9ucyArIFwiJ1wiICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCAhJC5pc0Z1bmN0aW9uKCBpbnN0YW5jZVsgb3B0aW9ucyBdICkgfHwgb3B0aW9ucy5jaGFyQXQoIDAgKSA9PT0gXCJfXCIgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJC5lcnJvciggXCJubyBzdWNoIG1ldGhvZCAnXCIgKyBvcHRpb25zICsgXCInIGZvciBcIiArIG5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcIiB3aWRnZXQgaW5zdGFuY2VcIiApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdG1ldGhvZFZhbHVlID0gaW5zdGFuY2VbIG9wdGlvbnMgXS5hcHBseSggaW5zdGFuY2UsIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggbWV0aG9kVmFsdWUgIT09IGluc3RhbmNlICYmIG1ldGhvZFZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5WYWx1ZSA9IG1ldGhvZFZhbHVlICYmIG1ldGhvZFZhbHVlLmpxdWVyeSA/XG5cdFx0XHRcdFx0XHRcdHJldHVyblZhbHVlLnB1c2hTdGFjayggbWV0aG9kVmFsdWUuZ2V0KCkgKSA6XG5cdFx0XHRcdFx0XHRcdG1ldGhvZFZhbHVlO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIEFsbG93IG11bHRpcGxlIGhhc2hlcyB0byBiZSBwYXNzZWQgb24gaW5pdFxuXHRcdFx0aWYgKCBhcmdzLmxlbmd0aCApIHtcblx0XHRcdFx0b3B0aW9ucyA9ICQud2lkZ2V0LmV4dGVuZC5hcHBseSggbnVsbCwgWyBvcHRpb25zIF0uY29uY2F0KCBhcmdzICkgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluc3RhbmNlID0gJC5kYXRhKCB0aGlzLCBmdWxsTmFtZSApO1xuXHRcdFx0XHRpZiAoIGluc3RhbmNlICkge1xuXHRcdFx0XHRcdGluc3RhbmNlLm9wdGlvbiggb3B0aW9ucyB8fCB7fSApO1xuXHRcdFx0XHRcdGlmICggaW5zdGFuY2UuX2luaXQgKSB7XG5cdFx0XHRcdFx0XHRpbnN0YW5jZS5faW5pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkLmRhdGEoIHRoaXMsIGZ1bGxOYW1lLCBuZXcgb2JqZWN0KCBvcHRpb25zLCB0aGlzICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXR1cm5WYWx1ZTtcblx0fTtcbn07XG5cbiQuV2lkZ2V0ID0gZnVuY3Rpb24oIC8qIG9wdGlvbnMsIGVsZW1lbnQgKi8gKSB7fTtcbiQuV2lkZ2V0Ll9jaGlsZENvbnN0cnVjdG9ycyA9IFtdO1xuXG4kLldpZGdldC5wcm90b3R5cGUgPSB7XG5cdHdpZGdldE5hbWU6IFwid2lkZ2V0XCIsXG5cdHdpZGdldEV2ZW50UHJlZml4OiBcIlwiLFxuXHRkZWZhdWx0RWxlbWVudDogXCI8ZGl2PlwiLFxuXG5cdG9wdGlvbnM6IHtcblx0XHRjbGFzc2VzOiB7fSxcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cblx0XHQvLyBDYWxsYmFja3Ncblx0XHRjcmVhdGU6IG51bGxcblx0fSxcblxuXHRfY3JlYXRlV2lkZ2V0OiBmdW5jdGlvbiggb3B0aW9ucywgZWxlbWVudCApIHtcblx0XHRlbGVtZW50ID0gJCggZWxlbWVudCB8fCB0aGlzLmRlZmF1bHRFbGVtZW50IHx8IHRoaXMgKVsgMCBdO1xuXHRcdHRoaXMuZWxlbWVudCA9ICQoIGVsZW1lbnQgKTtcblx0XHR0aGlzLnV1aWQgPSB3aWRnZXRVdWlkKys7XG5cdFx0dGhpcy5ldmVudE5hbWVzcGFjZSA9IFwiLlwiICsgdGhpcy53aWRnZXROYW1lICsgdGhpcy51dWlkO1xuXG5cdFx0dGhpcy5iaW5kaW5ncyA9ICQoKTtcblx0XHR0aGlzLmhvdmVyYWJsZSA9ICQoKTtcblx0XHR0aGlzLmZvY3VzYWJsZSA9ICQoKTtcblx0XHR0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwID0ge307XG5cblx0XHRpZiAoIGVsZW1lbnQgIT09IHRoaXMgKSB7XG5cdFx0XHQkLmRhdGEoIGVsZW1lbnQsIHRoaXMud2lkZ2V0RnVsbE5hbWUsIHRoaXMgKTtcblx0XHRcdHRoaXMuX29uKCB0cnVlLCB0aGlzLmVsZW1lbnQsIHtcblx0XHRcdFx0cmVtb3ZlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdFx0aWYgKCBldmVudC50YXJnZXQgPT09IGVsZW1lbnQgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3koKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHRcdHRoaXMuZG9jdW1lbnQgPSAkKCBlbGVtZW50LnN0eWxlID9cblxuXHRcdFx0XHQvLyBFbGVtZW50IHdpdGhpbiB0aGUgZG9jdW1lbnRcblx0XHRcdFx0ZWxlbWVudC5vd25lckRvY3VtZW50IDpcblxuXHRcdFx0XHQvLyBFbGVtZW50IGlzIHdpbmRvdyBvciBkb2N1bWVudFxuXHRcdFx0XHRlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQgKTtcblx0XHRcdHRoaXMud2luZG93ID0gJCggdGhpcy5kb2N1bWVudFsgMCBdLmRlZmF1bHRWaWV3IHx8IHRoaXMuZG9jdW1lbnRbIDAgXS5wYXJlbnRXaW5kb3cgKTtcblx0XHR9XG5cblx0XHR0aGlzLm9wdGlvbnMgPSAkLndpZGdldC5leHRlbmQoIHt9LFxuXHRcdFx0dGhpcy5vcHRpb25zLFxuXHRcdFx0dGhpcy5fZ2V0Q3JlYXRlT3B0aW9ucygpLFxuXHRcdFx0b3B0aW9ucyApO1xuXG5cdFx0dGhpcy5fY3JlYXRlKCk7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kaXNhYmxlZCApIHtcblx0XHRcdHRoaXMuX3NldE9wdGlvbkRpc2FibGVkKCB0aGlzLm9wdGlvbnMuZGlzYWJsZWQgKTtcblx0XHR9XG5cblx0XHR0aGlzLl90cmlnZ2VyKCBcImNyZWF0ZVwiLCBudWxsLCB0aGlzLl9nZXRDcmVhdGVFdmVudERhdGEoKSApO1xuXHRcdHRoaXMuX2luaXQoKTtcblx0fSxcblxuXHRfZ2V0Q3JlYXRlT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHt9O1xuXHR9LFxuXG5cdF9nZXRDcmVhdGVFdmVudERhdGE6ICQubm9vcCxcblxuXHRfY3JlYXRlOiAkLm5vb3AsXG5cblx0X2luaXQ6ICQubm9vcCxcblxuXHRkZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cblx0XHR0aGlzLl9kZXN0cm95KCk7XG5cdFx0JC5lYWNoKCB0aGlzLmNsYXNzZXNFbGVtZW50TG9va3VwLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRcdHRoYXQuX3JlbW92ZUNsYXNzKCB2YWx1ZSwga2V5ICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gV2UgY2FuIHByb2JhYmx5IHJlbW92ZSB0aGUgdW5iaW5kIGNhbGxzIGluIDIuMFxuXHRcdC8vIGFsbCBldmVudCBiaW5kaW5ncyBzaG91bGQgZ28gdGhyb3VnaCB0aGlzLl9vbigpXG5cdFx0dGhpcy5lbGVtZW50XG5cdFx0XHQub2ZmKCB0aGlzLmV2ZW50TmFtZXNwYWNlIClcblx0XHRcdC5yZW1vdmVEYXRhKCB0aGlzLndpZGdldEZ1bGxOYW1lICk7XG5cdFx0dGhpcy53aWRnZXQoKVxuXHRcdFx0Lm9mZiggdGhpcy5ldmVudE5hbWVzcGFjZSApXG5cdFx0XHQucmVtb3ZlQXR0ciggXCJhcmlhLWRpc2FibGVkXCIgKTtcblxuXHRcdC8vIENsZWFuIHVwIGV2ZW50cyBhbmQgc3RhdGVzXG5cdFx0dGhpcy5iaW5kaW5ncy5vZmYoIHRoaXMuZXZlbnROYW1lc3BhY2UgKTtcblx0fSxcblxuXHRfZGVzdHJveTogJC5ub29wLFxuXG5cdHdpZGdldDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudDtcblx0fSxcblxuXHRvcHRpb246IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBvcHRpb25zID0ga2V5O1xuXHRcdHZhciBwYXJ0cztcblx0XHR2YXIgY3VyT3B0aW9uO1xuXHRcdHZhciBpO1xuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAwICkge1xuXG5cdFx0XHQvLyBEb24ndCByZXR1cm4gYSByZWZlcmVuY2UgdG8gdGhlIGludGVybmFsIGhhc2hcblx0XHRcdHJldHVybiAkLndpZGdldC5leHRlbmQoIHt9LCB0aGlzLm9wdGlvbnMgKTtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdC8vIEhhbmRsZSBuZXN0ZWQga2V5cywgZS5nLiwgXCJmb28uYmFyXCIgPT4geyBmb286IHsgYmFyOiBfX18gfSB9XG5cdFx0XHRvcHRpb25zID0ge307XG5cdFx0XHRwYXJ0cyA9IGtleS5zcGxpdCggXCIuXCIgKTtcblx0XHRcdGtleSA9IHBhcnRzLnNoaWZ0KCk7XG5cdFx0XHRpZiAoIHBhcnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y3VyT3B0aW9uID0gb3B0aW9uc1sga2V5IF0gPSAkLndpZGdldC5leHRlbmQoIHt9LCB0aGlzLm9wdGlvbnNbIGtleSBdICk7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrICkge1xuXHRcdFx0XHRcdGN1ck9wdGlvblsgcGFydHNbIGkgXSBdID0gY3VyT3B0aW9uWyBwYXJ0c1sgaSBdIF0gfHwge307XG5cdFx0XHRcdFx0Y3VyT3B0aW9uID0gY3VyT3B0aW9uWyBwYXJ0c1sgaSBdIF07XG5cdFx0XHRcdH1cblx0XHRcdFx0a2V5ID0gcGFydHMucG9wKCk7XG5cdFx0XHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0XHRyZXR1cm4gY3VyT3B0aW9uWyBrZXkgXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGN1ck9wdGlvblsga2V5IF07XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3VyT3B0aW9uWyBrZXkgXSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoID09PSAxICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLm9wdGlvbnNbIGtleSBdID09PSB1bmRlZmluZWQgPyBudWxsIDogdGhpcy5vcHRpb25zWyBrZXkgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRvcHRpb25zWyBrZXkgXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuX3NldE9wdGlvbnMoIG9wdGlvbnMgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdF9zZXRPcHRpb25zOiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0XHR2YXIga2V5O1xuXG5cdFx0Zm9yICgga2V5IGluIG9wdGlvbnMgKSB7XG5cdFx0XHR0aGlzLl9zZXRPcHRpb24oIGtleSwgb3B0aW9uc1sga2V5IF0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfc2V0T3B0aW9uOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRpZiAoIGtleSA9PT0gXCJjbGFzc2VzXCIgKSB7XG5cdFx0XHR0aGlzLl9zZXRPcHRpb25DbGFzc2VzKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHRoaXMub3B0aW9uc1sga2V5IF0gPSB2YWx1ZTtcblxuXHRcdGlmICgga2V5ID09PSBcImRpc2FibGVkXCIgKSB7XG5cdFx0XHR0aGlzLl9zZXRPcHRpb25EaXNhYmxlZCggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRfc2V0T3B0aW9uQ2xhc3NlczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc0tleSwgZWxlbWVudHMsIGN1cnJlbnRFbGVtZW50cztcblxuXHRcdGZvciAoIGNsYXNzS2V5IGluIHZhbHVlICkge1xuXHRcdFx0Y3VycmVudEVsZW1lbnRzID0gdGhpcy5jbGFzc2VzRWxlbWVudExvb2t1cFsgY2xhc3NLZXkgXTtcblx0XHRcdGlmICggdmFsdWVbIGNsYXNzS2V5IF0gPT09IHRoaXMub3B0aW9ucy5jbGFzc2VzWyBjbGFzc0tleSBdIHx8XG5cdFx0XHRcdFx0IWN1cnJlbnRFbGVtZW50cyB8fFxuXHRcdFx0XHRcdCFjdXJyZW50RWxlbWVudHMubGVuZ3RoICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2UgYXJlIGRvaW5nIHRoaXMgdG8gY3JlYXRlIGEgbmV3IGpRdWVyeSBvYmplY3QgYmVjYXVzZSB0aGUgX3JlbW92ZUNsYXNzKCkgY2FsbFxuXHRcdFx0Ly8gb24gdGhlIG5leHQgbGluZSBpcyBnb2luZyB0byBkZXN0cm95IHRoZSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgZWxlbWVudHMgYmVpbmdcblx0XHRcdC8vIHRyYWNrZWQuIFdlIG5lZWQgdG8gc2F2ZSBhIGNvcHkgb2YgdGhpcyBjb2xsZWN0aW9uIHNvIHRoYXQgd2UgY2FuIGFkZCB0aGUgbmV3IGNsYXNzZXNcblx0XHRcdC8vIGJlbG93LlxuXHRcdFx0ZWxlbWVudHMgPSAkKCBjdXJyZW50RWxlbWVudHMuZ2V0KCkgKTtcblx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCBjdXJyZW50RWxlbWVudHMsIGNsYXNzS2V5ICk7XG5cblx0XHRcdC8vIFdlIGRvbid0IHVzZSBfYWRkQ2xhc3MoKSBoZXJlLCBiZWNhdXNlIHRoYXQgdXNlcyB0aGlzLm9wdGlvbnMuY2xhc3Nlc1xuXHRcdFx0Ly8gZm9yIGdlbmVyYXRpbmcgdGhlIHN0cmluZyBvZiBjbGFzc2VzLiBXZSB3YW50IHRvIHVzZSB0aGUgdmFsdWUgcGFzc2VkIGluIGZyb21cblx0XHRcdC8vIF9zZXRPcHRpb24oKSwgdGhpcyBpcyB0aGUgbmV3IHZhbHVlIG9mIHRoZSBjbGFzc2VzIG9wdGlvbiB3aGljaCB3YXMgcGFzc2VkIHRvXG5cdFx0XHQvLyBfc2V0T3B0aW9uKCkuIFdlIHBhc3MgdGhpcyB2YWx1ZSBkaXJlY3RseSB0byBfY2xhc3NlcygpLlxuXHRcdFx0ZWxlbWVudHMuYWRkQ2xhc3MoIHRoaXMuX2NsYXNzZXMoIHtcblx0XHRcdFx0ZWxlbWVudDogZWxlbWVudHMsXG5cdFx0XHRcdGtleXM6IGNsYXNzS2V5LFxuXHRcdFx0XHRjbGFzc2VzOiB2YWx1ZSxcblx0XHRcdFx0YWRkOiB0cnVlXG5cdFx0XHR9ICkgKTtcblx0XHR9XG5cdH0sXG5cblx0X3NldE9wdGlvbkRpc2FibGVkOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dGhpcy5fdG9nZ2xlQ2xhc3MoIHRoaXMud2lkZ2V0KCksIHRoaXMud2lkZ2V0RnVsbE5hbWUgKyBcIi1kaXNhYmxlZFwiLCBudWxsLCAhIXZhbHVlICk7XG5cblx0XHQvLyBJZiB0aGUgd2lkZ2V0IGlzIGJlY29taW5nIGRpc2FibGVkLCB0aGVuIG5vdGhpbmcgaXMgaW50ZXJhY3RpdmVcblx0XHRpZiAoIHZhbHVlICkge1xuXHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoIHRoaXMuaG92ZXJhYmxlLCBudWxsLCBcInVpLXN0YXRlLWhvdmVyXCIgKTtcblx0XHRcdHRoaXMuX3JlbW92ZUNsYXNzKCB0aGlzLmZvY3VzYWJsZSwgbnVsbCwgXCJ1aS1zdGF0ZS1mb2N1c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGVuYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3NldE9wdGlvbnMoIHsgZGlzYWJsZWQ6IGZhbHNlIH0gKTtcblx0fSxcblxuXHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5fc2V0T3B0aW9ucyggeyBkaXNhYmxlZDogdHJ1ZSB9ICk7XG5cdH0sXG5cblx0X2NsYXNzZXM6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdHZhciBmdWxsID0gW107XG5cdFx0dmFyIHRoYXQgPSB0aGlzO1xuXG5cdFx0b3B0aW9ucyA9ICQuZXh0ZW5kKCB7XG5cdFx0XHRlbGVtZW50OiB0aGlzLmVsZW1lbnQsXG5cdFx0XHRjbGFzc2VzOiB0aGlzLm9wdGlvbnMuY2xhc3NlcyB8fCB7fVxuXHRcdH0sIG9wdGlvbnMgKTtcblxuXHRcdGZ1bmN0aW9uIHByb2Nlc3NDbGFzc1N0cmluZyggY2xhc3NlcywgY2hlY2tPcHRpb24gKSB7XG5cdFx0XHR2YXIgY3VycmVudCwgaTtcblx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0Y3VycmVudCA9IHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGNsYXNzZXNbIGkgXSBdIHx8ICQoKTtcblx0XHRcdFx0aWYgKCBvcHRpb25zLmFkZCApIHtcblx0XHRcdFx0XHRjdXJyZW50ID0gJCggJC51bmlxdWUoIGN1cnJlbnQuZ2V0KCkuY29uY2F0KCBvcHRpb25zLmVsZW1lbnQuZ2V0KCkgKSApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3VycmVudCA9ICQoIGN1cnJlbnQubm90KCBvcHRpb25zLmVsZW1lbnQgKS5nZXQoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoYXQuY2xhc3Nlc0VsZW1lbnRMb29rdXBbIGNsYXNzZXNbIGkgXSBdID0gY3VycmVudDtcblx0XHRcdFx0ZnVsbC5wdXNoKCBjbGFzc2VzWyBpIF0gKTtcblx0XHRcdFx0aWYgKCBjaGVja09wdGlvbiAmJiBvcHRpb25zLmNsYXNzZXNbIGNsYXNzZXNbIGkgXSBdICkge1xuXHRcdFx0XHRcdGZ1bGwucHVzaCggb3B0aW9ucy5jbGFzc2VzWyBjbGFzc2VzWyBpIF0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fb24oIG9wdGlvbnMuZWxlbWVudCwge1xuXHRcdFx0XCJyZW1vdmVcIjogXCJfdW50cmFja0NsYXNzZXNFbGVtZW50XCJcblx0XHR9ICk7XG5cblx0XHRpZiAoIG9wdGlvbnMua2V5cyApIHtcblx0XHRcdHByb2Nlc3NDbGFzc1N0cmluZyggb3B0aW9ucy5rZXlzLm1hdGNoKCAvXFxTKy9nICkgfHwgW10sIHRydWUgKTtcblx0XHR9XG5cdFx0aWYgKCBvcHRpb25zLmV4dHJhICkge1xuXHRcdFx0cHJvY2Vzc0NsYXNzU3RyaW5nKCBvcHRpb25zLmV4dHJhLm1hdGNoKCAvXFxTKy9nICkgfHwgW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZnVsbC5qb2luKCBcIiBcIiApO1xuXHR9LFxuXG5cdF91bnRyYWNrQ2xhc3Nlc0VsZW1lbnQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0JC5lYWNoKCB0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwLCBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRcdGlmICggJC5pbkFycmF5KCBldmVudC50YXJnZXQsIHZhbHVlICkgIT09IC0xICkge1xuXHRcdFx0XHR0aGF0LmNsYXNzZXNFbGVtZW50TG9va3VwWyBrZXkgXSA9ICQoIHZhbHVlLm5vdCggZXZlbnQudGFyZ2V0ICkuZ2V0KCkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X3JlbW92ZUNsYXNzOiBmdW5jdGlvbiggZWxlbWVudCwga2V5cywgZXh0cmEgKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RvZ2dsZUNsYXNzKCBlbGVtZW50LCBrZXlzLCBleHRyYSwgZmFsc2UgKTtcblx0fSxcblxuXHRfYWRkQ2xhc3M6IGZ1bmN0aW9uKCBlbGVtZW50LCBrZXlzLCBleHRyYSApIHtcblx0XHRyZXR1cm4gdGhpcy5fdG9nZ2xlQ2xhc3MoIGVsZW1lbnQsIGtleXMsIGV4dHJhLCB0cnVlICk7XG5cdH0sXG5cblx0X3RvZ2dsZUNsYXNzOiBmdW5jdGlvbiggZWxlbWVudCwga2V5cywgZXh0cmEsIGFkZCApIHtcblx0XHRhZGQgPSAoIHR5cGVvZiBhZGQgPT09IFwiYm9vbGVhblwiICkgPyBhZGQgOiBleHRyYTtcblx0XHR2YXIgc2hpZnQgPSAoIHR5cGVvZiBlbGVtZW50ID09PSBcInN0cmluZ1wiIHx8IGVsZW1lbnQgPT09IG51bGwgKSxcblx0XHRcdG9wdGlvbnMgPSB7XG5cdFx0XHRcdGV4dHJhOiBzaGlmdCA/IGtleXMgOiBleHRyYSxcblx0XHRcdFx0a2V5czogc2hpZnQgPyBlbGVtZW50IDoga2V5cyxcblx0XHRcdFx0ZWxlbWVudDogc2hpZnQgPyB0aGlzLmVsZW1lbnQgOiBlbGVtZW50LFxuXHRcdFx0XHRhZGQ6IGFkZFxuXHRcdFx0fTtcblx0XHRvcHRpb25zLmVsZW1lbnQudG9nZ2xlQ2xhc3MoIHRoaXMuX2NsYXNzZXMoIG9wdGlvbnMgKSwgYWRkICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0X29uOiBmdW5jdGlvbiggc3VwcHJlc3NEaXNhYmxlZENoZWNrLCBlbGVtZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgZGVsZWdhdGVFbGVtZW50O1xuXHRcdHZhciBpbnN0YW5jZSA9IHRoaXM7XG5cblx0XHQvLyBObyBzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgZmxhZywgc2h1ZmZsZSBhcmd1bWVudHNcblx0XHRpZiAoIHR5cGVvZiBzdXBwcmVzc0Rpc2FibGVkQ2hlY2sgIT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0aGFuZGxlcnMgPSBlbGVtZW50O1xuXHRcdFx0ZWxlbWVudCA9IHN1cHByZXNzRGlzYWJsZWRDaGVjaztcblx0XHRcdHN1cHByZXNzRGlzYWJsZWRDaGVjayA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIE5vIGVsZW1lbnQgYXJndW1lbnQsIHNodWZmbGUgYW5kIHVzZSB0aGlzLmVsZW1lbnRcblx0XHRpZiAoICFoYW5kbGVycyApIHtcblx0XHRcdGhhbmRsZXJzID0gZWxlbWVudDtcblx0XHRcdGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG5cdFx0XHRkZWxlZ2F0ZUVsZW1lbnQgPSB0aGlzLndpZGdldCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50ID0gZGVsZWdhdGVFbGVtZW50ID0gJCggZWxlbWVudCApO1xuXHRcdFx0dGhpcy5iaW5kaW5ncyA9IHRoaXMuYmluZGluZ3MuYWRkKCBlbGVtZW50ICk7XG5cdFx0fVxuXG5cdFx0JC5lYWNoKCBoYW5kbGVycywgZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVyICkge1xuXHRcdFx0ZnVuY3Rpb24gaGFuZGxlclByb3h5KCkge1xuXG5cdFx0XHRcdC8vIEFsbG93IHdpZGdldHMgdG8gY3VzdG9taXplIHRoZSBkaXNhYmxlZCBoYW5kbGluZ1xuXHRcdFx0XHQvLyAtIGRpc2FibGVkIGFzIGFuIGFycmF5IGluc3RlYWQgb2YgYm9vbGVhblxuXHRcdFx0XHQvLyAtIGRpc2FibGVkIGNsYXNzIGFzIG1ldGhvZCBmb3IgZGlzYWJsaW5nIGluZGl2aWR1YWwgcGFydHNcblx0XHRcdFx0aWYgKCAhc3VwcHJlc3NEaXNhYmxlZENoZWNrICYmXG5cdFx0XHRcdFx0XHQoIGluc3RhbmNlLm9wdGlvbnMuZGlzYWJsZWQgPT09IHRydWUgfHxcblx0XHRcdFx0XHRcdCQoIHRoaXMgKS5oYXNDbGFzcyggXCJ1aS1zdGF0ZS1kaXNhYmxlZFwiICkgKSApIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICggdHlwZW9mIGhhbmRsZXIgPT09IFwic3RyaW5nXCIgPyBpbnN0YW5jZVsgaGFuZGxlciBdIDogaGFuZGxlciApXG5cdFx0XHRcdFx0LmFwcGx5KCBpbnN0YW5jZSwgYXJndW1lbnRzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvcHkgdGhlIGd1aWQgc28gZGlyZWN0IHVuYmluZGluZyB3b3Jrc1xuXHRcdFx0aWYgKCB0eXBlb2YgaGFuZGxlciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0aGFuZGxlclByb3h5Lmd1aWQgPSBoYW5kbGVyLmd1aWQgPVxuXHRcdFx0XHRcdGhhbmRsZXIuZ3VpZCB8fCBoYW5kbGVyUHJveHkuZ3VpZCB8fCAkLmd1aWQrKztcblx0XHRcdH1cblxuXHRcdFx0dmFyIG1hdGNoID0gZXZlbnQubWF0Y2goIC9eKFtcXHc6LV0qKVxccyooLiopJC8gKTtcblx0XHRcdHZhciBldmVudE5hbWUgPSBtYXRjaFsgMSBdICsgaW5zdGFuY2UuZXZlbnROYW1lc3BhY2U7XG5cdFx0XHR2YXIgc2VsZWN0b3IgPSBtYXRjaFsgMiBdO1xuXG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRkZWxlZ2F0ZUVsZW1lbnQub24oIGV2ZW50TmFtZSwgc2VsZWN0b3IsIGhhbmRsZXJQcm94eSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5vbiggZXZlbnROYW1lLCBoYW5kbGVyUHJveHkgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0X29mZjogZnVuY3Rpb24oIGVsZW1lbnQsIGV2ZW50TmFtZSApIHtcblx0XHRldmVudE5hbWUgPSAoIGV2ZW50TmFtZSB8fCBcIlwiICkuc3BsaXQoIFwiIFwiICkuam9pbiggdGhpcy5ldmVudE5hbWVzcGFjZSArIFwiIFwiICkgK1xuXHRcdFx0dGhpcy5ldmVudE5hbWVzcGFjZTtcblx0XHRlbGVtZW50Lm9mZiggZXZlbnROYW1lICkub2ZmKCBldmVudE5hbWUgKTtcblxuXHRcdC8vIENsZWFyIHRoZSBzdGFjayB0byBhdm9pZCBtZW1vcnkgbGVha3MgKCMxMDA1Nilcblx0XHR0aGlzLmJpbmRpbmdzID0gJCggdGhpcy5iaW5kaW5ncy5ub3QoIGVsZW1lbnQgKS5nZXQoKSApO1xuXHRcdHRoaXMuZm9jdXNhYmxlID0gJCggdGhpcy5mb2N1c2FibGUubm90KCBlbGVtZW50ICkuZ2V0KCkgKTtcblx0XHR0aGlzLmhvdmVyYWJsZSA9ICQoIHRoaXMuaG92ZXJhYmxlLm5vdCggZWxlbWVudCApLmdldCgpICk7XG5cdH0sXG5cblx0X2RlbGF5OiBmdW5jdGlvbiggaGFuZGxlciwgZGVsYXkgKSB7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlclByb3h5KCkge1xuXHRcdFx0cmV0dXJuICggdHlwZW9mIGhhbmRsZXIgPT09IFwic3RyaW5nXCIgPyBpbnN0YW5jZVsgaGFuZGxlciBdIDogaGFuZGxlciApXG5cdFx0XHRcdC5hcHBseSggaW5zdGFuY2UsIGFyZ3VtZW50cyApO1xuXHRcdH1cblx0XHR2YXIgaW5zdGFuY2UgPSB0aGlzO1xuXHRcdHJldHVybiBzZXRUaW1lb3V0KCBoYW5kbGVyUHJveHksIGRlbGF5IHx8IDAgKTtcblx0fSxcblxuXHRfaG92ZXJhYmxlOiBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHR0aGlzLmhvdmVyYWJsZSA9IHRoaXMuaG92ZXJhYmxlLmFkZCggZWxlbWVudCApO1xuXHRcdHRoaXMuX29uKCBlbGVtZW50LCB7XG5cdFx0XHRtb3VzZWVudGVyOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCAkKCBldmVudC5jdXJyZW50VGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtaG92ZXJcIiApO1xuXHRcdFx0fSxcblx0XHRcdG1vdXNlbGVhdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1ob3ZlclwiICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF9mb2N1c2FibGU6IGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdHRoaXMuZm9jdXNhYmxlID0gdGhpcy5mb2N1c2FibGUuYWRkKCBlbGVtZW50ICk7XG5cdFx0dGhpcy5fb24oIGVsZW1lbnQsIHtcblx0XHRcdGZvY3VzaW46IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dGhpcy5fYWRkQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1mb2N1c1wiICk7XG5cdFx0XHR9LFxuXHRcdFx0Zm9jdXNvdXQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoICQoIGV2ZW50LmN1cnJlbnRUYXJnZXQgKSwgbnVsbCwgXCJ1aS1zdGF0ZS1mb2N1c1wiICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdF90cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZXZlbnQsIGRhdGEgKSB7XG5cdFx0dmFyIHByb3AsIG9yaWc7XG5cdFx0dmFyIGNhbGxiYWNrID0gdGhpcy5vcHRpb25zWyB0eXBlIF07XG5cblx0XHRkYXRhID0gZGF0YSB8fCB7fTtcblx0XHRldmVudCA9ICQuRXZlbnQoIGV2ZW50ICk7XG5cdFx0ZXZlbnQudHlwZSA9ICggdHlwZSA9PT0gdGhpcy53aWRnZXRFdmVudFByZWZpeCA/XG5cdFx0XHR0eXBlIDpcblx0XHRcdHRoaXMud2lkZ2V0RXZlbnRQcmVmaXggKyB0eXBlICkudG9Mb3dlckNhc2UoKTtcblxuXHRcdC8vIFRoZSBvcmlnaW5hbCBldmVudCBtYXkgY29tZSBmcm9tIGFueSBlbGVtZW50XG5cdFx0Ly8gc28gd2UgbmVlZCB0byByZXNldCB0aGUgdGFyZ2V0IG9uIHRoZSBuZXcgZXZlbnRcblx0XHRldmVudC50YXJnZXQgPSB0aGlzLmVsZW1lbnRbIDAgXTtcblxuXHRcdC8vIENvcHkgb3JpZ2luYWwgZXZlbnQgcHJvcGVydGllcyBvdmVyIHRvIHRoZSBuZXcgZXZlbnRcblx0XHRvcmlnID0gZXZlbnQub3JpZ2luYWxFdmVudDtcblx0XHRpZiAoIG9yaWcgKSB7XG5cdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdGlmICggISggcHJvcCBpbiBldmVudCApICkge1xuXHRcdFx0XHRcdGV2ZW50WyBwcm9wIF0gPSBvcmlnWyBwcm9wIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQudHJpZ2dlciggZXZlbnQsIGRhdGEgKTtcblx0XHRyZXR1cm4gISggJC5pc0Z1bmN0aW9uKCBjYWxsYmFjayApICYmXG5cdFx0XHRjYWxsYmFjay5hcHBseSggdGhpcy5lbGVtZW50WyAwIF0sIFsgZXZlbnQgXS5jb25jYXQoIGRhdGEgKSApID09PSBmYWxzZSB8fFxuXHRcdFx0ZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKTtcblx0fVxufTtcblxuJC5lYWNoKCB7IHNob3c6IFwiZmFkZUluXCIsIGhpZGU6IFwiZmFkZU91dFwiIH0sIGZ1bmN0aW9uKCBtZXRob2QsIGRlZmF1bHRFZmZlY3QgKSB7XG5cdCQuV2lkZ2V0LnByb3RvdHlwZVsgXCJfXCIgKyBtZXRob2QgXSA9IGZ1bmN0aW9uKCBlbGVtZW50LCBvcHRpb25zLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b3B0aW9ucyA9IHsgZWZmZWN0OiBvcHRpb25zIH07XG5cdFx0fVxuXG5cdFx0dmFyIGhhc09wdGlvbnM7XG5cdFx0dmFyIGVmZmVjdE5hbWUgPSAhb3B0aW9ucyA/XG5cdFx0XHRtZXRob2QgOlxuXHRcdFx0b3B0aW9ucyA9PT0gdHJ1ZSB8fCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIiA/XG5cdFx0XHRcdGRlZmF1bHRFZmZlY3QgOlxuXHRcdFx0XHRvcHRpb25zLmVmZmVjdCB8fCBkZWZhdWx0RWZmZWN0O1xuXG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdFx0aWYgKCB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB7IGR1cmF0aW9uOiBvcHRpb25zIH07XG5cdFx0fVxuXG5cdFx0aGFzT3B0aW9ucyA9ICEkLmlzRW1wdHlPYmplY3QoIG9wdGlvbnMgKTtcblx0XHRvcHRpb25zLmNvbXBsZXRlID0gY2FsbGJhY2s7XG5cblx0XHRpZiAoIG9wdGlvbnMuZGVsYXkgKSB7XG5cdFx0XHRlbGVtZW50LmRlbGF5KCBvcHRpb25zLmRlbGF5ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBoYXNPcHRpb25zICYmICQuZWZmZWN0cyAmJiAkLmVmZmVjdHMuZWZmZWN0WyBlZmZlY3ROYW1lIF0gKSB7XG5cdFx0XHRlbGVtZW50WyBtZXRob2QgXSggb3B0aW9ucyApO1xuXHRcdH0gZWxzZSBpZiAoIGVmZmVjdE5hbWUgIT09IG1ldGhvZCAmJiBlbGVtZW50WyBlZmZlY3ROYW1lIF0gKSB7XG5cdFx0XHRlbGVtZW50WyBlZmZlY3ROYW1lIF0oIG9wdGlvbnMuZHVyYXRpb24sIG9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnF1ZXVlKCBmdW5jdGlvbiggbmV4dCApIHtcblx0XHRcdFx0JCggdGhpcyApWyBtZXRob2QgXSgpO1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGVsZW1lbnRbIDAgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5leHQoKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cdH07XG59ICk7XG5cbnJldHVybiAkLndpZGdldDtcblxufSApICk7XG4iLCIoIGZ1bmN0aW9uKCBmYWN0b3J5ICkge1xuXHRpZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggWyBcImpxdWVyeVwiLCBcIi4vdmVyc2lvblwiIF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59ICggZnVuY3Rpb24oICQgKSB7XG5cbi8vIFRoaXMgZmlsZSBpcyBkZXByZWNhdGVkXG5yZXR1cm4gJC51aS5pZSA9ICEhL21zaWUgW1xcdy5dKy8uZXhlYyggbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpICk7XG59ICkgKTtcbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWwoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdO1xuICByZXR1cm4gZXhwb25lbnQgPCAwID8gXCIwLlwiICsgbmV3IEFycmF5KC1leHBvbmVudCkuam9pbihcIjBcIikgKyBjb2VmZmljaWVudFxuICAgICAgOiBjb2VmZmljaWVudC5sZW5ndGggPiBleHBvbmVudCArIDEgPyBjb2VmZmljaWVudC5zbGljZSgwLCBleHBvbmVudCArIDEpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShleHBvbmVudCArIDEpXG4gICAgICA6IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGV4cG9uZW50IC0gY29lZmZpY2llbnQubGVuZ3RoICsgMikuam9pbihcIjBcIik7XG59XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBTbGlkZXIgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IFNsaWRlclxuLy8+Pmdyb3VwOiBXaWRnZXRzXG4vLz4+ZGVzY3JpcHRpb246IERpc3BsYXlzIGEgZmxleGlibGUgc2xpZGVyIHdpdGggcmFuZ2VzIGFuZCBhY2Nlc3NpYmlsaXR5IHZpYSBrZXlib2FyZC5cbi8vPj5kb2NzOiBodHRwOi8vYXBpLmpxdWVyeXVpLmNvbS9zbGlkZXIvXG4vLz4+ZGVtb3M6IGh0dHA6Ly9qcXVlcnl1aS5jb20vc2xpZGVyL1xuLy8+PmNzcy5zdHJ1Y3R1cmU6IC4uLy4uL3RoZW1lcy9iYXNlL2NvcmUuY3NzXG4vLz4+Y3NzLnN0cnVjdHVyZTogLi4vLi4vdGhlbWVzL2Jhc2Uvc2xpZGVyLmNzc1xuLy8+PmNzcy50aGVtZTogLi4vLi4vdGhlbWVzL2Jhc2UvdGhlbWUuY3NzXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbXG5cdFx0XHRcImpxdWVyeVwiLFxuXHRcdFx0XCIuL21vdXNlXCIsXG5cdFx0XHRcIi4uL2tleWNvZGVcIixcblx0XHRcdFwiLi4vdmVyc2lvblwiLFxuXHRcdFx0XCIuLi93aWRnZXRcIlxuXHRcdF0sIGZhY3RvcnkgKTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIEJyb3dzZXIgZ2xvYmFsc1xuXHRcdGZhY3RvcnkoIGpRdWVyeSApO1xuXHR9XG59KCBmdW5jdGlvbiggJCApIHtcblxucmV0dXJuICQud2lkZ2V0KCBcInVpLnNsaWRlclwiLCAkLnVpLm1vdXNlLCB7XG5cdHZlcnNpb246IFwiMS4xMi4xXCIsXG5cdHdpZGdldEV2ZW50UHJlZml4OiBcInNsaWRlXCIsXG5cblx0b3B0aW9uczoge1xuXHRcdGFuaW1hdGU6IGZhbHNlLFxuXHRcdGNsYXNzZXM6IHtcblx0XHRcdFwidWktc2xpZGVyXCI6IFwidWktY29ybmVyLWFsbFwiLFxuXHRcdFx0XCJ1aS1zbGlkZXItaGFuZGxlXCI6IFwidWktY29ybmVyLWFsbFwiLFxuXG5cdFx0XHQvLyBOb3RlOiB1aS13aWRnZXQtaGVhZGVyIGlzbid0IHRoZSBtb3N0IGZpdHRpbmdseSBzZW1hbnRpYyBmcmFtZXdvcmsgY2xhc3MgZm9yIHRoaXNcblx0XHRcdC8vIGVsZW1lbnQsIGJ1dCB3b3JrZWQgYmVzdCB2aXN1YWxseSB3aXRoIGEgdmFyaWV0eSBvZiB0aGVtZXNcblx0XHRcdFwidWktc2xpZGVyLXJhbmdlXCI6IFwidWktY29ybmVyLWFsbCB1aS13aWRnZXQtaGVhZGVyXCJcblx0XHR9LFxuXHRcdGRpc3RhbmNlOiAwLFxuXHRcdG1heDogMTAwLFxuXHRcdG1pbjogMCxcblx0XHRvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCIsXG5cdFx0cmFuZ2U6IGZhbHNlLFxuXHRcdHN0ZXA6IDEsXG5cdFx0dmFsdWU6IDAsXG5cdFx0dmFsdWVzOiBudWxsLFxuXG5cdFx0Ly8gQ2FsbGJhY2tzXG5cdFx0Y2hhbmdlOiBudWxsLFxuXHRcdHNsaWRlOiBudWxsLFxuXHRcdHN0YXJ0OiBudWxsLFxuXHRcdHN0b3A6IG51bGxcblx0fSxcblxuXHQvLyBOdW1iZXIgb2YgcGFnZXMgaW4gYSBzbGlkZXJcblx0Ly8gKGhvdyBtYW55IHRpbWVzIGNhbiB5b3UgcGFnZSB1cC9kb3duIHRvIGdvIHRocm91Z2ggdGhlIHdob2xlIHJhbmdlKVxuXHRudW1QYWdlczogNSxcblxuXHRfY3JlYXRlOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLl9rZXlTbGlkaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5fbW91c2VTbGlkaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBudWxsO1xuXHRcdHRoaXMuX2RldGVjdE9yaWVudGF0aW9uKCk7XG5cdFx0dGhpcy5fbW91c2VJbml0KCk7XG5cdFx0dGhpcy5fY2FsY3VsYXRlTmV3TWF4KCk7XG5cblx0XHR0aGlzLl9hZGRDbGFzcyggXCJ1aS1zbGlkZXIgdWktc2xpZGVyLVwiICsgdGhpcy5vcmllbnRhdGlvbixcblx0XHRcdFwidWktd2lkZ2V0IHVpLXdpZGdldC1jb250ZW50XCIgKTtcblxuXHRcdHRoaXMuX3JlZnJlc2goKTtcblxuXHRcdHRoaXMuX2FuaW1hdGVPZmYgPSBmYWxzZTtcblx0fSxcblxuXHRfcmVmcmVzaDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fY3JlYXRlUmFuZ2UoKTtcblx0XHR0aGlzLl9jcmVhdGVIYW5kbGVzKCk7XG5cdFx0dGhpcy5fc2V0dXBFdmVudHMoKTtcblx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0fSxcblxuXHRfY3JlYXRlSGFuZGxlczogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGksIGhhbmRsZUNvdW50LFxuXHRcdFx0b3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcblx0XHRcdGV4aXN0aW5nSGFuZGxlcyA9IHRoaXMuZWxlbWVudC5maW5kKCBcIi51aS1zbGlkZXItaGFuZGxlXCIgKSxcblx0XHRcdGhhbmRsZSA9IFwiPHNwYW4gdGFiaW5kZXg9JzAnPjwvc3Bhbj5cIixcblx0XHRcdGhhbmRsZXMgPSBbXTtcblxuXHRcdGhhbmRsZUNvdW50ID0gKCBvcHRpb25zLnZhbHVlcyAmJiBvcHRpb25zLnZhbHVlcy5sZW5ndGggKSB8fCAxO1xuXG5cdFx0aWYgKCBleGlzdGluZ0hhbmRsZXMubGVuZ3RoID4gaGFuZGxlQ291bnQgKSB7XG5cdFx0XHRleGlzdGluZ0hhbmRsZXMuc2xpY2UoIGhhbmRsZUNvdW50ICkucmVtb3ZlKCk7XG5cdFx0XHRleGlzdGluZ0hhbmRsZXMgPSBleGlzdGluZ0hhbmRsZXMuc2xpY2UoIDAsIGhhbmRsZUNvdW50ICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggaSA9IGV4aXN0aW5nSGFuZGxlcy5sZW5ndGg7IGkgPCBoYW5kbGVDb3VudDsgaSsrICkge1xuXHRcdFx0aGFuZGxlcy5wdXNoKCBoYW5kbGUgKTtcblx0XHR9XG5cblx0XHR0aGlzLmhhbmRsZXMgPSBleGlzdGluZ0hhbmRsZXMuYWRkKCAkKCBoYW5kbGVzLmpvaW4oIFwiXCIgKSApLmFwcGVuZFRvKCB0aGlzLmVsZW1lbnQgKSApO1xuXG5cdFx0dGhpcy5fYWRkQ2xhc3MoIHRoaXMuaGFuZGxlcywgXCJ1aS1zbGlkZXItaGFuZGxlXCIsIFwidWktc3RhdGUtZGVmYXVsdFwiICk7XG5cblx0XHR0aGlzLmhhbmRsZSA9IHRoaXMuaGFuZGxlcy5lcSggMCApO1xuXG5cdFx0dGhpcy5oYW5kbGVzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0JCggdGhpcyApXG5cdFx0XHRcdC5kYXRhKCBcInVpLXNsaWRlci1oYW5kbGUtaW5kZXhcIiwgaSApXG5cdFx0XHRcdC5hdHRyKCBcInRhYkluZGV4XCIsIDAgKTtcblx0XHR9ICk7XG5cdH0sXG5cblx0X2NyZWF0ZVJhbmdlOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuXHRcdGlmICggb3B0aW9ucy5yYW5nZSApIHtcblx0XHRcdGlmICggb3B0aW9ucy5yYW5nZSA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0aWYgKCAhb3B0aW9ucy52YWx1ZXMgKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy52YWx1ZXMgPSBbIHRoaXMuX3ZhbHVlTWluKCksIHRoaXMuX3ZhbHVlTWluKCkgXTtcblx0XHRcdFx0fSBlbHNlIGlmICggb3B0aW9ucy52YWx1ZXMubGVuZ3RoICYmIG9wdGlvbnMudmFsdWVzLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdFx0XHRvcHRpb25zLnZhbHVlcyA9IFsgb3B0aW9ucy52YWx1ZXNbIDAgXSwgb3B0aW9ucy52YWx1ZXNbIDAgXSBdO1xuXHRcdFx0XHR9IGVsc2UgaWYgKCAkLmlzQXJyYXkoIG9wdGlvbnMudmFsdWVzICkgKSB7XG5cdFx0XHRcdFx0b3B0aW9ucy52YWx1ZXMgPSBvcHRpb25zLnZhbHVlcy5zbGljZSggMCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggIXRoaXMucmFuZ2UgfHwgIXRoaXMucmFuZ2UubGVuZ3RoICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlID0gJCggXCI8ZGl2PlwiIClcblx0XHRcdFx0XHQuYXBwZW5kVG8oIHRoaXMuZWxlbWVudCApO1xuXG5cdFx0XHRcdHRoaXMuX2FkZENsYXNzKCB0aGlzLnJhbmdlLCBcInVpLXNsaWRlci1yYW5nZVwiICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5yYW5nZSwgXCJ1aS1zbGlkZXItcmFuZ2UtbWluIHVpLXNsaWRlci1yYW5nZS1tYXhcIiApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSByYW5nZSBzd2l0Y2hpbmcgZnJvbSB0cnVlIHRvIG1pbi9tYXhcblx0XHRcdFx0dGhpcy5yYW5nZS5jc3MoIHtcblx0XHRcdFx0XHRcImxlZnRcIjogXCJcIixcblx0XHRcdFx0XHRcImJvdHRvbVwiOiBcIlwiXG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggb3B0aW9ucy5yYW5nZSA9PT0gXCJtaW5cIiB8fCBvcHRpb25zLnJhbmdlID09PSBcIm1heFwiICkge1xuXHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggdGhpcy5yYW5nZSwgXCJ1aS1zbGlkZXItcmFuZ2UtXCIgKyBvcHRpb25zLnJhbmdlICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggdGhpcy5yYW5nZSApIHtcblx0XHRcdFx0dGhpcy5yYW5nZS5yZW1vdmUoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMucmFuZ2UgPSBudWxsO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0dXBFdmVudHM6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX29mZiggdGhpcy5oYW5kbGVzICk7XG5cdFx0dGhpcy5fb24oIHRoaXMuaGFuZGxlcywgdGhpcy5faGFuZGxlRXZlbnRzICk7XG5cdFx0dGhpcy5faG92ZXJhYmxlKCB0aGlzLmhhbmRsZXMgKTtcblx0XHR0aGlzLl9mb2N1c2FibGUoIHRoaXMuaGFuZGxlcyApO1xuXHR9LFxuXG5cdF9kZXN0cm95OiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmhhbmRsZXMucmVtb3ZlKCk7XG5cdFx0aWYgKCB0aGlzLnJhbmdlICkge1xuXHRcdFx0dGhpcy5yYW5nZS5yZW1vdmUoKTtcblx0XHR9XG5cblx0XHR0aGlzLl9tb3VzZURlc3Ryb3koKTtcblx0fSxcblxuXHRfbW91c2VDYXB0dXJlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHBvc2l0aW9uLCBub3JtVmFsdWUsIGRpc3RhbmNlLCBjbG9zZXN0SGFuZGxlLCBpbmRleCwgYWxsb3dlZCwgb2Zmc2V0LCBtb3VzZU92ZXJIYW5kbGUsXG5cdFx0XHR0aGF0ID0gdGhpcyxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnM7XG5cblx0XHRpZiAoIG8uZGlzYWJsZWQgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbGVtZW50U2l6ZSA9IHtcblx0XHRcdHdpZHRoOiB0aGlzLmVsZW1lbnQub3V0ZXJXaWR0aCgpLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLmVsZW1lbnQub3V0ZXJIZWlnaHQoKVxuXHRcdH07XG5cdFx0dGhpcy5lbGVtZW50T2Zmc2V0ID0gdGhpcy5lbGVtZW50Lm9mZnNldCgpO1xuXG5cdFx0cG9zaXRpb24gPSB7IHg6IGV2ZW50LnBhZ2VYLCB5OiBldmVudC5wYWdlWSB9O1xuXHRcdG5vcm1WYWx1ZSA9IHRoaXMuX25vcm1WYWx1ZUZyb21Nb3VzZSggcG9zaXRpb24gKTtcblx0XHRkaXN0YW5jZSA9IHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpICsgMTtcblx0XHR0aGlzLmhhbmRsZXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHR2YXIgdGhpc0Rpc3RhbmNlID0gTWF0aC5hYnMoIG5vcm1WYWx1ZSAtIHRoYXQudmFsdWVzKCBpICkgKTtcblx0XHRcdGlmICggKCBkaXN0YW5jZSA+IHRoaXNEaXN0YW5jZSApIHx8XG5cdFx0XHRcdCggZGlzdGFuY2UgPT09IHRoaXNEaXN0YW5jZSAmJlxuXHRcdFx0XHRcdCggaSA9PT0gdGhhdC5fbGFzdENoYW5nZWRWYWx1ZSB8fCB0aGF0LnZhbHVlcyggaSApID09PSBvLm1pbiApICkgKSB7XG5cdFx0XHRcdGRpc3RhbmNlID0gdGhpc0Rpc3RhbmNlO1xuXHRcdFx0XHRjbG9zZXN0SGFuZGxlID0gJCggdGhpcyApO1xuXHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0YWxsb3dlZCA9IHRoaXMuX3N0YXJ0KCBldmVudCwgaW5kZXggKTtcblx0XHRpZiAoIGFsbG93ZWQgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLl9tb3VzZVNsaWRpbmcgPSB0cnVlO1xuXG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBpbmRleDtcblxuXHRcdHRoaXMuX2FkZENsYXNzKCBjbG9zZXN0SGFuZGxlLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0Y2xvc2VzdEhhbmRsZS50cmlnZ2VyKCBcImZvY3VzXCIgKTtcblxuXHRcdG9mZnNldCA9IGNsb3Nlc3RIYW5kbGUub2Zmc2V0KCk7XG5cdFx0bW91c2VPdmVySGFuZGxlID0gISQoIGV2ZW50LnRhcmdldCApLnBhcmVudHMoKS5hZGRCYWNrKCkuaXMoIFwiLnVpLXNsaWRlci1oYW5kbGVcIiApO1xuXHRcdHRoaXMuX2NsaWNrT2Zmc2V0ID0gbW91c2VPdmVySGFuZGxlID8geyBsZWZ0OiAwLCB0b3A6IDAgfSA6IHtcblx0XHRcdGxlZnQ6IGV2ZW50LnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSAoIGNsb3Nlc3RIYW5kbGUud2lkdGgoKSAvIDIgKSxcblx0XHRcdHRvcDogZXZlbnQucGFnZVkgLSBvZmZzZXQudG9wIC1cblx0XHRcdFx0KCBjbG9zZXN0SGFuZGxlLmhlaWdodCgpIC8gMiApIC1cblx0XHRcdFx0KCBwYXJzZUludCggY2xvc2VzdEhhbmRsZS5jc3MoIFwiYm9yZGVyVG9wV2lkdGhcIiApLCAxMCApIHx8IDAgKSAtXG5cdFx0XHRcdCggcGFyc2VJbnQoIGNsb3Nlc3RIYW5kbGUuY3NzKCBcImJvcmRlckJvdHRvbVdpZHRoXCIgKSwgMTAgKSB8fCAwICkgK1xuXHRcdFx0XHQoIHBhcnNlSW50KCBjbG9zZXN0SGFuZGxlLmNzcyggXCJtYXJnaW5Ub3BcIiApLCAxMCApIHx8IDAgKVxuXHRcdH07XG5cblx0XHRpZiAoICF0aGlzLmhhbmRsZXMuaGFzQ2xhc3MoIFwidWktc3RhdGUtaG92ZXJcIiApICkge1xuXHRcdFx0dGhpcy5fc2xpZGUoIGV2ZW50LCBpbmRleCwgbm9ybVZhbHVlICk7XG5cdFx0fVxuXHRcdHRoaXMuX2FuaW1hdGVPZmYgPSB0cnVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9tb3VzZVN0YXJ0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRfbW91c2VEcmFnOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0dmFyIHBvc2l0aW9uID0geyB4OiBldmVudC5wYWdlWCwgeTogZXZlbnQucGFnZVkgfSxcblx0XHRcdG5vcm1WYWx1ZSA9IHRoaXMuX25vcm1WYWx1ZUZyb21Nb3VzZSggcG9zaXRpb24gKTtcblxuXHRcdHRoaXMuX3NsaWRlKCBldmVudCwgdGhpcy5faGFuZGxlSW5kZXgsIG5vcm1WYWx1ZSApO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9LFxuXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR0aGlzLl9yZW1vdmVDbGFzcyggdGhpcy5oYW5kbGVzLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0dGhpcy5fbW91c2VTbGlkaW5nID0gZmFsc2U7XG5cblx0XHR0aGlzLl9zdG9wKCBldmVudCwgdGhpcy5faGFuZGxlSW5kZXggKTtcblx0XHR0aGlzLl9jaGFuZ2UoIGV2ZW50LCB0aGlzLl9oYW5kbGVJbmRleCApO1xuXG5cdFx0dGhpcy5faGFuZGxlSW5kZXggPSBudWxsO1xuXHRcdHRoaXMuX2NsaWNrT2Zmc2V0ID0gbnVsbDtcblx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0sXG5cblx0X2RldGVjdE9yaWVudGF0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR0aGlzLm9yaWVudGF0aW9uID0gKCB0aGlzLm9wdGlvbnMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG5cdH0sXG5cblx0X25vcm1WYWx1ZUZyb21Nb3VzZTogZnVuY3Rpb24oIHBvc2l0aW9uICkge1xuXHRcdHZhciBwaXhlbFRvdGFsLFxuXHRcdFx0cGl4ZWxNb3VzZSxcblx0XHRcdHBlcmNlbnRNb3VzZSxcblx0XHRcdHZhbHVlVG90YWwsXG5cdFx0XHR2YWx1ZU1vdXNlO1xuXG5cdFx0aWYgKCB0aGlzLm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiApIHtcblx0XHRcdHBpeGVsVG90YWwgPSB0aGlzLmVsZW1lbnRTaXplLndpZHRoO1xuXHRcdFx0cGl4ZWxNb3VzZSA9IHBvc2l0aW9uLnggLSB0aGlzLmVsZW1lbnRPZmZzZXQubGVmdCAtXG5cdFx0XHRcdCggdGhpcy5fY2xpY2tPZmZzZXQgPyB0aGlzLl9jbGlja09mZnNldC5sZWZ0IDogMCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwaXhlbFRvdGFsID0gdGhpcy5lbGVtZW50U2l6ZS5oZWlnaHQ7XG5cdFx0XHRwaXhlbE1vdXNlID0gcG9zaXRpb24ueSAtIHRoaXMuZWxlbWVudE9mZnNldC50b3AgLVxuXHRcdFx0XHQoIHRoaXMuX2NsaWNrT2Zmc2V0ID8gdGhpcy5fY2xpY2tPZmZzZXQudG9wIDogMCApO1xuXHRcdH1cblxuXHRcdHBlcmNlbnRNb3VzZSA9ICggcGl4ZWxNb3VzZSAvIHBpeGVsVG90YWwgKTtcblx0XHRpZiAoIHBlcmNlbnRNb3VzZSA+IDEgKSB7XG5cdFx0XHRwZXJjZW50TW91c2UgPSAxO1xuXHRcdH1cblx0XHRpZiAoIHBlcmNlbnRNb3VzZSA8IDAgKSB7XG5cdFx0XHRwZXJjZW50TW91c2UgPSAwO1xuXHRcdH1cblx0XHRpZiAoIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdHBlcmNlbnRNb3VzZSA9IDEgLSBwZXJjZW50TW91c2U7XG5cdFx0fVxuXG5cdFx0dmFsdWVUb3RhbCA9IHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpO1xuXHRcdHZhbHVlTW91c2UgPSB0aGlzLl92YWx1ZU1pbigpICsgcGVyY2VudE1vdXNlICogdmFsdWVUb3RhbDtcblxuXHRcdHJldHVybiB0aGlzLl90cmltQWxpZ25WYWx1ZSggdmFsdWVNb3VzZSApO1xuXHR9LFxuXG5cdF91aUhhc2g6IGZ1bmN0aW9uKCBpbmRleCwgdmFsdWUsIHZhbHVlcyApIHtcblx0XHR2YXIgdWlIYXNoID0ge1xuXHRcdFx0aGFuZGxlOiB0aGlzLmhhbmRsZXNbIGluZGV4IF0sXG5cdFx0XHRoYW5kbGVJbmRleDogaW5kZXgsXG5cdFx0XHR2YWx1ZTogdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy52YWx1ZSgpXG5cdFx0fTtcblxuXHRcdGlmICggdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSApIHtcblx0XHRcdHVpSGFzaC52YWx1ZSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMudmFsdWVzKCBpbmRleCApO1xuXHRcdFx0dWlIYXNoLnZhbHVlcyA9IHZhbHVlcyB8fCB0aGlzLnZhbHVlcygpO1xuXHRcdH1cblxuXHRcdHJldHVybiB1aUhhc2g7XG5cdH0sXG5cblx0X2hhc011bHRpcGxlVmFsdWVzOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLnZhbHVlcyAmJiB0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aDtcblx0fSxcblxuXHRfc3RhcnQ6IGZ1bmN0aW9uKCBldmVudCwgaW5kZXggKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3RyaWdnZXIoIFwic3RhcnRcIiwgZXZlbnQsIHRoaXMuX3VpSGFzaCggaW5kZXggKSApO1xuXHR9LFxuXG5cdF9zbGlkZTogZnVuY3Rpb24oIGV2ZW50LCBpbmRleCwgbmV3VmFsICkge1xuXHRcdHZhciBhbGxvd2VkLCBvdGhlclZhbCxcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWUoKSxcblx0XHRcdG5ld1ZhbHVlcyA9IHRoaXMudmFsdWVzKCk7XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRvdGhlclZhbCA9IHRoaXMudmFsdWVzKCBpbmRleCA/IDAgOiAxICk7XG5cdFx0XHRjdXJyZW50VmFsdWUgPSB0aGlzLnZhbHVlcyggaW5kZXggKTtcblxuXHRcdFx0aWYgKCB0aGlzLm9wdGlvbnMudmFsdWVzLmxlbmd0aCA9PT0gMiAmJiB0aGlzLm9wdGlvbnMucmFuZ2UgPT09IHRydWUgKSB7XG5cdFx0XHRcdG5ld1ZhbCA9ICBpbmRleCA9PT0gMCA/IE1hdGgubWluKCBvdGhlclZhbCwgbmV3VmFsICkgOiBNYXRoLm1heCggb3RoZXJWYWwsIG5ld1ZhbCApO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXdWYWx1ZXNbIGluZGV4IF0gPSBuZXdWYWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBuZXdWYWwgPT09IGN1cnJlbnRWYWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRhbGxvd2VkID0gdGhpcy5fdHJpZ2dlciggXCJzbGlkZVwiLCBldmVudCwgdGhpcy5fdWlIYXNoKCBpbmRleCwgbmV3VmFsLCBuZXdWYWx1ZXMgKSApO1xuXG5cdFx0Ly8gQSBzbGlkZSBjYW4gYmUgY2FuY2VsZWQgYnkgcmV0dXJuaW5nIGZhbHNlIGZyb20gdGhlIHNsaWRlIGNhbGxiYWNrXG5cdFx0aWYgKCBhbGxvd2VkID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHR0aGlzLnZhbHVlcyggaW5kZXgsIG5ld1ZhbCApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlKCBuZXdWYWwgKTtcblx0XHR9XG5cdH0sXG5cblx0X3N0b3A6IGZ1bmN0aW9uKCBldmVudCwgaW5kZXggKSB7XG5cdFx0dGhpcy5fdHJpZ2dlciggXCJzdG9wXCIsIGV2ZW50LCB0aGlzLl91aUhhc2goIGluZGV4ICkgKTtcblx0fSxcblxuXHRfY2hhbmdlOiBmdW5jdGlvbiggZXZlbnQsIGluZGV4ICkge1xuXHRcdGlmICggIXRoaXMuX2tleVNsaWRpbmcgJiYgIXRoaXMuX21vdXNlU2xpZGluZyApIHtcblxuXHRcdFx0Ly9zdG9yZSB0aGUgbGFzdCBjaGFuZ2VkIHZhbHVlIGluZGV4IGZvciByZWZlcmVuY2Ugd2hlbiBoYW5kbGVzIG92ZXJsYXBcblx0XHRcdHRoaXMuX2xhc3RDaGFuZ2VkVmFsdWUgPSBpbmRleDtcblx0XHRcdHRoaXMuX3RyaWdnZXIoIFwiY2hhbmdlXCIsIGV2ZW50LCB0aGlzLl91aUhhc2goIGluZGV4ICkgKTtcblx0XHR9XG5cdH0sXG5cblx0dmFsdWU6IGZ1bmN0aW9uKCBuZXdWYWx1ZSApIHtcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMudmFsdWUgPSB0aGlzLl90cmltQWxpZ25WYWx1ZSggbmV3VmFsdWUgKTtcblx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0dGhpcy5fY2hhbmdlKCBudWxsLCAwICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlKCk7XG5cdH0sXG5cblx0dmFsdWVzOiBmdW5jdGlvbiggaW5kZXgsIG5ld1ZhbHVlICkge1xuXHRcdHZhciB2YWxzLFxuXHRcdFx0bmV3VmFsdWVzLFxuXHRcdFx0aTtcblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMudmFsdWVzWyBpbmRleCBdID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIG5ld1ZhbHVlICk7XG5cdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgaW5kZXggKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoICQuaXNBcnJheSggYXJndW1lbnRzWyAwIF0gKSApIHtcblx0XHRcdFx0dmFscyA9IHRoaXMub3B0aW9ucy52YWx1ZXM7XG5cdFx0XHRcdG5ld1ZhbHVlcyA9IGFyZ3VtZW50c1sgMCBdO1xuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdFx0dmFsc1sgaSBdID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIG5ld1ZhbHVlc1sgaSBdICk7XG5cdFx0XHRcdFx0dGhpcy5fY2hhbmdlKCBudWxsLCBpICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuX3ZhbHVlcyggaW5kZXggKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLl92YWx1ZXMoKTtcblx0XHR9XG5cdH0sXG5cblx0X3NldE9wdGlvbjogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHR2YWxzTGVuZ3RoID0gMDtcblxuXHRcdGlmICgga2V5ID09PSBcInJhbmdlXCIgJiYgdGhpcy5vcHRpb25zLnJhbmdlID09PSB0cnVlICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJtaW5cIiApIHtcblx0XHRcdFx0dGhpcy5vcHRpb25zLnZhbHVlID0gdGhpcy5fdmFsdWVzKCAwICk7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZXMgPSBudWxsO1xuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IFwibWF4XCIgKSB7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZSA9IHRoaXMuX3ZhbHVlcyggdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGggLSAxICk7XG5cdFx0XHRcdHRoaXMub3B0aW9ucy52YWx1ZXMgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggJC5pc0FycmF5KCB0aGlzLm9wdGlvbnMudmFsdWVzICkgKSB7XG5cdFx0XHR2YWxzTGVuZ3RoID0gdGhpcy5vcHRpb25zLnZhbHVlcy5sZW5ndGg7XG5cdFx0fVxuXG5cdFx0dGhpcy5fc3VwZXIoIGtleSwgdmFsdWUgKTtcblxuXHRcdHN3aXRjaCAoIGtleSApIHtcblx0XHRcdGNhc2UgXCJvcmllbnRhdGlvblwiOlxuXHRcdFx0XHR0aGlzLl9kZXRlY3RPcmllbnRhdGlvbigpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVDbGFzcyggXCJ1aS1zbGlkZXItaG9yaXpvbnRhbCB1aS1zbGlkZXItdmVydGljYWxcIiApXG5cdFx0XHRcdFx0Ll9hZGRDbGFzcyggXCJ1aS1zbGlkZXItXCIgKyB0aGlzLm9yaWVudGF0aW9uICk7XG5cdFx0XHRcdHRoaXMuX3JlZnJlc2hWYWx1ZSgpO1xuXHRcdFx0XHRpZiAoIHRoaXMub3B0aW9ucy5yYW5nZSApIHtcblx0XHRcdFx0XHR0aGlzLl9yZWZyZXNoUmFuZ2UoIHZhbHVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNldCBwb3NpdGlvbmluZyBmcm9tIHByZXZpb3VzIG9yaWVudGF0aW9uXG5cdFx0XHRcdHRoaXMuaGFuZGxlcy5jc3MoIHZhbHVlID09PSBcImhvcml6b250YWxcIiA/IFwiYm90dG9tXCIgOiBcImxlZnRcIiwgXCJcIiApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJ2YWx1ZVwiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cdFx0XHRcdHRoaXMuX2NoYW5nZSggbnVsbCwgMCApO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInZhbHVlc1wiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaFZhbHVlKCk7XG5cblx0XHRcdFx0Ly8gU3RhcnQgZnJvbSB0aGUgbGFzdCBoYW5kbGUgdG8gcHJldmVudCB1bnJlYWNoYWJsZSBoYW5kbGVzICgjOTA0Nilcblx0XHRcdFx0Zm9yICggaSA9IHZhbHNMZW5ndGggLSAxOyBpID49IDA7IGktLSApIHtcblx0XHRcdFx0XHR0aGlzLl9jaGFuZ2UoIG51bGwsIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInN0ZXBcIjpcblx0XHRcdGNhc2UgXCJtaW5cIjpcblx0XHRcdGNhc2UgXCJtYXhcIjpcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX2NhbGN1bGF0ZU5ld01heCgpO1xuXHRcdFx0XHR0aGlzLl9yZWZyZXNoVmFsdWUoKTtcblx0XHRcdFx0dGhpcy5fYW5pbWF0ZU9mZiA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyYW5nZVwiOlxuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fcmVmcmVzaCgpO1xuXHRcdFx0XHR0aGlzLl9hbmltYXRlT2ZmID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblxuXHRfc2V0T3B0aW9uRGlzYWJsZWQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR0aGlzLl9zdXBlciggdmFsdWUgKTtcblxuXHRcdHRoaXMuX3RvZ2dsZUNsYXNzKCBudWxsLCBcInVpLXN0YXRlLWRpc2FibGVkXCIsICEhdmFsdWUgKTtcblx0fSxcblxuXHQvL2ludGVybmFsIHZhbHVlIGdldHRlclxuXHQvLyBfdmFsdWUoKSByZXR1cm5zIHZhbHVlIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHRfdmFsdWU6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2YWwgPSB0aGlzLm9wdGlvbnMudmFsdWU7XG5cdFx0dmFsID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoIHZhbCApO1xuXG5cdFx0cmV0dXJuIHZhbDtcblx0fSxcblxuXHQvL2ludGVybmFsIHZhbHVlcyBnZXR0ZXJcblx0Ly8gX3ZhbHVlcygpIHJldHVybnMgYXJyYXkgb2YgdmFsdWVzIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHQvLyBfdmFsdWVzKCBpbmRleCApIHJldHVybnMgc2luZ2xlIHZhbHVlIHRyaW1tZWQgYnkgbWluIGFuZCBtYXgsIGFsaWduZWQgYnkgc3RlcFxuXHRfdmFsdWVzOiBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0dmFyIHZhbCxcblx0XHRcdHZhbHMsXG5cdFx0XHRpO1xuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0dmFsID0gdGhpcy5vcHRpb25zLnZhbHVlc1sgaW5kZXggXTtcblx0XHRcdHZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCB2YWwgKTtcblxuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9IGVsc2UgaWYgKCB0aGlzLl9oYXNNdWx0aXBsZVZhbHVlcygpICkge1xuXG5cdFx0XHQvLyAuc2xpY2UoKSBjcmVhdGVzIGEgY29weSBvZiB0aGUgYXJyYXlcblx0XHRcdC8vIHRoaXMgY29weSBnZXRzIHRyaW1tZWQgYnkgbWluIGFuZCBtYXggYW5kIHRoZW4gcmV0dXJuZWRcblx0XHRcdHZhbHMgPSB0aGlzLm9wdGlvbnMudmFsdWVzLnNsaWNlKCk7XG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpICs9IDEgKSB7XG5cdFx0XHRcdHZhbHNbIGkgXSA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCB2YWxzWyBpIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHM7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gUmV0dXJucyB0aGUgc3RlcC1hbGlnbmVkIHZhbHVlIHRoYXQgdmFsIGlzIGNsb3Nlc3QgdG8sIGJldHdlZW4gKGluY2x1c2l2ZSkgbWluIGFuZCBtYXhcblx0X3RyaW1BbGlnblZhbHVlOiBmdW5jdGlvbiggdmFsICkge1xuXHRcdGlmICggdmFsIDw9IHRoaXMuX3ZhbHVlTWluKCkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdmFsdWVNaW4oKTtcblx0XHR9XG5cdFx0aWYgKCB2YWwgPj0gdGhpcy5fdmFsdWVNYXgoKSApIHtcblx0XHRcdHJldHVybiB0aGlzLl92YWx1ZU1heCgpO1xuXHRcdH1cblx0XHR2YXIgc3RlcCA9ICggdGhpcy5vcHRpb25zLnN0ZXAgPiAwICkgPyB0aGlzLm9wdGlvbnMuc3RlcCA6IDEsXG5cdFx0XHR2YWxNb2RTdGVwID0gKCB2YWwgLSB0aGlzLl92YWx1ZU1pbigpICkgJSBzdGVwLFxuXHRcdFx0YWxpZ25WYWx1ZSA9IHZhbCAtIHZhbE1vZFN0ZXA7XG5cblx0XHRpZiAoIE1hdGguYWJzKCB2YWxNb2RTdGVwICkgKiAyID49IHN0ZXAgKSB7XG5cdFx0XHRhbGlnblZhbHVlICs9ICggdmFsTW9kU3RlcCA+IDAgKSA/IHN0ZXAgOiAoIC1zdGVwICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2luY2UgSmF2YVNjcmlwdCBoYXMgcHJvYmxlbXMgd2l0aCBsYXJnZSBmbG9hdHMsIHJvdW5kXG5cdFx0Ly8gdGhlIGZpbmFsIHZhbHVlIHRvIDUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsIHBvaW50IChzZWUgIzQxMjQpXG5cdFx0cmV0dXJuIHBhcnNlRmxvYXQoIGFsaWduVmFsdWUudG9GaXhlZCggNSApICk7XG5cdH0sXG5cblx0X2NhbGN1bGF0ZU5ld01heDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG1heCA9IHRoaXMub3B0aW9ucy5tYXgsXG5cdFx0XHRtaW4gPSB0aGlzLl92YWx1ZU1pbigpLFxuXHRcdFx0c3RlcCA9IHRoaXMub3B0aW9ucy5zdGVwLFxuXHRcdFx0YWJvdmVNaW4gPSBNYXRoLnJvdW5kKCAoIG1heCAtIG1pbiApIC8gc3RlcCApICogc3RlcDtcblx0XHRtYXggPSBhYm92ZU1pbiArIG1pbjtcblx0XHRpZiAoIG1heCA+IHRoaXMub3B0aW9ucy5tYXggKSB7XG5cblx0XHRcdC8vSWYgbWF4IGlzIG5vdCBkaXZpc2libGUgYnkgc3RlcCwgcm91bmRpbmcgb2ZmIG1heSBpbmNyZWFzZSBpdHMgdmFsdWVcblx0XHRcdG1heCAtPSBzdGVwO1xuXHRcdH1cblx0XHR0aGlzLm1heCA9IHBhcnNlRmxvYXQoIG1heC50b0ZpeGVkKCB0aGlzLl9wcmVjaXNpb24oKSApICk7XG5cdH0sXG5cblx0X3ByZWNpc2lvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHByZWNpc2lvbiA9IHRoaXMuX3ByZWNpc2lvbk9mKCB0aGlzLm9wdGlvbnMuc3RlcCApO1xuXHRcdGlmICggdGhpcy5vcHRpb25zLm1pbiAhPT0gbnVsbCApIHtcblx0XHRcdHByZWNpc2lvbiA9IE1hdGgubWF4KCBwcmVjaXNpb24sIHRoaXMuX3ByZWNpc2lvbk9mKCB0aGlzLm9wdGlvbnMubWluICkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHByZWNpc2lvbjtcblx0fSxcblxuXHRfcHJlY2lzaW9uT2Y6IGZ1bmN0aW9uKCBudW0gKSB7XG5cdFx0dmFyIHN0ciA9IG51bS50b1N0cmluZygpLFxuXHRcdFx0ZGVjaW1hbCA9IHN0ci5pbmRleE9mKCBcIi5cIiApO1xuXHRcdHJldHVybiBkZWNpbWFsID09PSAtMSA/IDAgOiBzdHIubGVuZ3RoIC0gZGVjaW1hbCAtIDE7XG5cdH0sXG5cblx0X3ZhbHVlTWluOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1pbjtcblx0fSxcblxuXHRfdmFsdWVNYXg6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1heDtcblx0fSxcblxuXHRfcmVmcmVzaFJhbmdlOiBmdW5jdGlvbiggb3JpZW50YXRpb24gKSB7XG5cdFx0aWYgKCBvcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICkge1xuXHRcdFx0dGhpcy5yYW5nZS5jc3MoIHsgXCJ3aWR0aFwiOiBcIlwiLCBcImxlZnRcIjogXCJcIiB9ICk7XG5cdFx0fVxuXHRcdGlmICggb3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0dGhpcy5yYW5nZS5jc3MoIHsgXCJoZWlnaHRcIjogXCJcIiwgXCJib3R0b21cIjogXCJcIiB9ICk7XG5cdFx0fVxuXHR9LFxuXG5cdF9yZWZyZXNoVmFsdWU6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBsYXN0VmFsUGVyY2VudCwgdmFsUGVyY2VudCwgdmFsdWUsIHZhbHVlTWluLCB2YWx1ZU1heCxcblx0XHRcdG9SYW5nZSA9IHRoaXMub3B0aW9ucy5yYW5nZSxcblx0XHRcdG8gPSB0aGlzLm9wdGlvbnMsXG5cdFx0XHR0aGF0ID0gdGhpcyxcblx0XHRcdGFuaW1hdGUgPSAoICF0aGlzLl9hbmltYXRlT2ZmICkgPyBvLmFuaW1hdGUgOiBmYWxzZSxcblx0XHRcdF9zZXQgPSB7fTtcblxuXHRcdGlmICggdGhpcy5faGFzTXVsdGlwbGVWYWx1ZXMoKSApIHtcblx0XHRcdHRoaXMuaGFuZGxlcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0dmFsUGVyY2VudCA9ICggdGhhdC52YWx1ZXMoIGkgKSAtIHRoYXQuX3ZhbHVlTWluKCkgKSAvICggdGhhdC5fdmFsdWVNYXgoKSAtXG5cdFx0XHRcdFx0dGhhdC5fdmFsdWVNaW4oKSApICogMTAwO1xuXHRcdFx0XHRfc2V0WyB0aGF0Lm9yaWVudGF0aW9uID09PSBcImhvcml6b250YWxcIiA/IFwibGVmdFwiIDogXCJib3R0b21cIiBdID0gdmFsUGVyY2VudCArIFwiJVwiO1xuXHRcdFx0XHQkKCB0aGlzICkuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIF9zZXQsIG8uYW5pbWF0ZSApO1xuXHRcdFx0XHRpZiAoIHRoYXQub3B0aW9ucy5yYW5nZSA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRpZiAoIHRoYXQub3JpZW50YXRpb24gPT09IFwiaG9yaXpvbnRhbFwiICkge1xuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHR0aGF0LnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0XHRcdFx0bGVmdDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBpID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHR0aGF0LnJhbmdlWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogKCB2YWxQZXJjZW50IC0gbGFzdFZhbFBlcmNlbnQgKSArIFwiJVwiXG5cdFx0XHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdFx0XHRxdWV1ZTogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IG8uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdFx0XHRcdGJvdHRvbTogKCB2YWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggaSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0dGhhdC5yYW5nZVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAoIHZhbFBlcmNlbnQgLSBsYXN0VmFsUGVyY2VudCApICsgXCIlXCJcblx0XHRcdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0XHRcdHF1ZXVlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogby5hbmltYXRlXG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGFzdFZhbFBlcmNlbnQgPSB2YWxQZXJjZW50O1xuXHRcdFx0fSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMudmFsdWUoKTtcblx0XHRcdHZhbHVlTWluID0gdGhpcy5fdmFsdWVNaW4oKTtcblx0XHRcdHZhbHVlTWF4ID0gdGhpcy5fdmFsdWVNYXgoKTtcblx0XHRcdHZhbFBlcmNlbnQgPSAoIHZhbHVlTWF4ICE9PSB2YWx1ZU1pbiApID9cblx0XHRcdFx0XHQoIHZhbHVlIC0gdmFsdWVNaW4gKSAvICggdmFsdWVNYXggLSB2YWx1ZU1pbiApICogMTAwIDpcblx0XHRcdFx0XHQwO1xuXHRcdFx0X3NldFsgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgPyBcImxlZnRcIiA6IFwiYm90dG9tXCIgXSA9IHZhbFBlcmNlbnQgKyBcIiVcIjtcblx0XHRcdHRoaXMuaGFuZGxlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCBfc2V0LCBvLmFuaW1hdGUgKTtcblxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWluXCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHR3aWR0aDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWF4XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJob3Jpem9udGFsXCIgKSB7XG5cdFx0XHRcdHRoaXMucmFuZ2Uuc3RvcCggMSwgMSApWyBhbmltYXRlID8gXCJhbmltYXRlXCIgOiBcImNzc1wiIF0oIHtcblx0XHRcdFx0XHR3aWR0aDogKCAxMDAgLSB2YWxQZXJjZW50ICkgKyBcIiVcIlxuXHRcdFx0XHR9LCBvLmFuaW1hdGUgKTtcblx0XHRcdH1cblx0XHRcdGlmICggb1JhbmdlID09PSBcIm1pblwiICYmIHRoaXMub3JpZW50YXRpb24gPT09IFwidmVydGljYWxcIiApIHtcblx0XHRcdFx0dGhpcy5yYW5nZS5zdG9wKCAxLCAxIClbIGFuaW1hdGUgPyBcImFuaW1hdGVcIiA6IFwiY3NzXCIgXSgge1xuXHRcdFx0XHRcdGhlaWdodDogdmFsUGVyY2VudCArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBvUmFuZ2UgPT09IFwibWF4XCIgJiYgdGhpcy5vcmllbnRhdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiICkge1xuXHRcdFx0XHR0aGlzLnJhbmdlLnN0b3AoIDEsIDEgKVsgYW5pbWF0ZSA/IFwiYW5pbWF0ZVwiIDogXCJjc3NcIiBdKCB7XG5cdFx0XHRcdFx0aGVpZ2h0OiAoIDEwMCAtIHZhbFBlcmNlbnQgKSArIFwiJVwiXG5cdFx0XHRcdH0sIG8uYW5pbWF0ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRfaGFuZGxlRXZlbnRzOiB7XG5cdFx0a2V5ZG93bjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIGFsbG93ZWQsIGN1clZhbCwgbmV3VmFsLCBzdGVwLFxuXHRcdFx0XHRpbmRleCA9ICQoIGV2ZW50LnRhcmdldCApLmRhdGEoIFwidWktc2xpZGVyLWhhbmRsZS1pbmRleFwiICk7XG5cblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkhPTUU6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkVORDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUEFHRV9ET1dOOlxuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUklHSFQ6XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkRPV046XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkxFRlQ6XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRpZiAoICF0aGlzLl9rZXlTbGlkaW5nICkge1xuXHRcdFx0XHRcdFx0dGhpcy5fa2V5U2xpZGluZyA9IHRydWU7XG5cdFx0XHRcdFx0XHR0aGlzLl9hZGRDbGFzcyggJCggZXZlbnQudGFyZ2V0ICksIG51bGwsIFwidWktc3RhdGUtYWN0aXZlXCIgKTtcblx0XHRcdFx0XHRcdGFsbG93ZWQgPSB0aGlzLl9zdGFydCggZXZlbnQsIGluZGV4ICk7XG5cdFx0XHRcdFx0XHRpZiAoIGFsbG93ZWQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGVwID0gdGhpcy5vcHRpb25zLnN0ZXA7XG5cdFx0XHRpZiAoIHRoaXMuX2hhc011bHRpcGxlVmFsdWVzKCkgKSB7XG5cdFx0XHRcdGN1clZhbCA9IG5ld1ZhbCA9IHRoaXMudmFsdWVzKCBpbmRleCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VyVmFsID0gbmV3VmFsID0gdGhpcy52YWx1ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5IT01FOlxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3ZhbHVlTWluKCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkVORDpcblx0XHRcdFx0XHRuZXdWYWwgPSB0aGlzLl92YWx1ZU1heCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5QQUdFX1VQOlxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKFxuXHRcdFx0XHRcdFx0Y3VyVmFsICsgKCAoIHRoaXMuX3ZhbHVlTWF4KCkgLSB0aGlzLl92YWx1ZU1pbigpICkgLyB0aGlzLm51bVBhZ2VzIClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5QQUdFX0RPV046XG5cdFx0XHRcdFx0bmV3VmFsID0gdGhpcy5fdHJpbUFsaWduVmFsdWUoXG5cdFx0XHRcdFx0XHRjdXJWYWwgLSAoICggdGhpcy5fdmFsdWVNYXgoKSAtIHRoaXMuX3ZhbHVlTWluKCkgKSAvIHRoaXMubnVtUGFnZXMgKSApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICQudWkua2V5Q29kZS5VUDpcblx0XHRcdFx0Y2FzZSAkLnVpLmtleUNvZGUuUklHSFQ6XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWwgPT09IHRoaXMuX3ZhbHVlTWF4KCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBjdXJWYWwgKyBzdGVwICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkRPV046XG5cdFx0XHRcdGNhc2UgJC51aS5rZXlDb2RlLkxFRlQ6XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWwgPT09IHRoaXMuX3ZhbHVlTWluKCkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG5ld1ZhbCA9IHRoaXMuX3RyaW1BbGlnblZhbHVlKCBjdXJWYWwgLSBzdGVwICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3NsaWRlKCBldmVudCwgaW5kZXgsIG5ld1ZhbCApO1xuXHRcdH0sXG5cdFx0a2V5dXA6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciBpbmRleCA9ICQoIGV2ZW50LnRhcmdldCApLmRhdGEoIFwidWktc2xpZGVyLWhhbmRsZS1pbmRleFwiICk7XG5cblx0XHRcdGlmICggdGhpcy5fa2V5U2xpZGluZyApIHtcblx0XHRcdFx0dGhpcy5fa2V5U2xpZGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLl9zdG9wKCBldmVudCwgaW5kZXggKTtcblx0XHRcdFx0dGhpcy5fY2hhbmdlKCBldmVudCwgaW5kZXggKTtcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQ2xhc3MoICQoIGV2ZW50LnRhcmdldCApLCBudWxsLCBcInVpLXN0YXRlLWFjdGl2ZVwiICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbn0gKSApO1xuIiwiKCBmdW5jdGlvbiggZmFjdG9yeSApIHtcblx0aWYgKCB0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCApIHtcblxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cblx0XHRkZWZpbmUoIFsgXCJqcXVlcnlcIiBdLCBmYWN0b3J5ICk7XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBCcm93c2VyIGdsb2JhbHNcblx0XHRmYWN0b3J5KCBqUXVlcnkgKTtcblx0fVxufSAoIGZ1bmN0aW9uKCAkICkge1xuXG4kLnVpID0gJC51aSB8fCB7fTtcblxucmV0dXJuICQudWkudmVyc2lvbiA9IFwiMS4xMi4xXCI7XG5cbn0gKSApO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxuZXhwb3J0IHsgdXVpZCwgV3JhcHBlZEVycm9yLCByZXNvbHZlUHJvbWlzZXNEaWN0IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IFdyYXBwZWRFcnJvciB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG4vKipcbiAqIENyZWF0ZXMgYSB3cmFwcGFibGUgUHJvbWlzZSByZWplY3Rpb24gZnVuY3Rpb24uXG4gKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UucmVqZWN0IHdpdGggYSBuZXcgV3JhcHBlZEVycm9yXG4gKiB0aGF0IGhhcyB0aGUgcHJvdmlkZWQgbWVzc2FnZSBhbmQgd3JhcHMgdGhlIG9yaWdpbmFsIGVycm9yIHRoYXRcbiAqIGNhdXNlZCB0aGUgcHJvbWlzZSB0byByZWplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWplY3QobWVzc2FnZSwgbG9nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VSZWplY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgdmFyIHdyYXBwZWRfZXJyb3IgPSBuZXcgV3JhcHBlZEVycm9yKG1lc3NhZ2UsIGVycm9yKTtcbiAgICAgICAgaWYgKGxvZykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcih3cmFwcGVkX2Vycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qod3JhcHBlZF9lcnJvcik7XG4gICAgfTtcbn1cbi8qKlxuICogQXBwbHkgTWF0aEpheCByZW5kZXJpbmcgdG8gYW4gZWxlbWVudCwgYW5kIG9wdGlvbmFsbHkgc2V0IGl0cyB0ZXh0LlxuICpcbiAqIElmIE1hdGhKYXggaXMgbm90IGF2YWlsYWJsZSwgbWFrZSBubyBjaGFuZ2VzLlxuICpcbiAqIFBhcmFtZXRlcnNcbiAqIC0tLS0tLS0tLS1cbiAqIGVsZW1lbnQ6IE5vZGVcbiAqIHRleHQ6IG9wdGlvbmFsIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZXNldChlbGVtZW50LCB0ZXh0KSB7XG4gICAgaWYgKHRleHQgIT09IHZvaWQgMCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKHdpbmRvdy5NYXRoSmF4ICE9PSB2b2lkIDApIHtcbiAgICAgICAgTWF0aEpheC5IdWIuUXVldWUoWydUeXBlc2V0JywgTWF0aEpheC5IdWIsIGVsZW1lbnRdKTtcbiAgICB9XG59XG4vKipcbiAqIGVzY2FwZSB0ZXh0IHRvIEhUTUxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZV9odG1sKHRleHQpIHtcbiAgICB2YXIgZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZXNjLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gZXNjLmlubmVySFRNTDtcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcsIERlc2NyaXB0aW9uU3R5bGVNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IERPTVdpZGdldFZpZXcgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZDMtZm9ybWF0JztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdqcXVlcnktdWkvdWkvd2lkZ2V0cy9zbGlkZXInO1xudmFyIEludE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBJbnRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50TW9kZWwnLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEludE1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgSW50TW9kZWwgfTtcbnZhciBCb3VuZGVkSW50TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJvdW5kZWRJbnRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3VuZGVkSW50TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQm91bmRlZEludE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdCb3VuZGVkSW50TW9kZWwnLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgICAgICBtaW46IDBcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQm91bmRlZEludE1vZGVsO1xufShJbnRNb2RlbCkpO1xuZXhwb3J0IHsgQm91bmRlZEludE1vZGVsIH07XG52YXIgU2xpZGVyU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2xpZGVyU3R5bGVNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTbGlkZXJTdHlsZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFNsaWRlclN0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1NsaWRlclN0eWxlTW9kZWwnIH0pO1xuICAgIH07XG4gICAgU2xpZGVyU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMgPSBfX2Fzc2lnbih7fSwgRGVzY3JpcHRpb25TdHlsZU1vZGVsLnN0eWxlUHJvcGVydGllcywgeyBoYW5kbGVfY29sb3I6IHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLnVpLXNsaWRlci1oYW5kbGUnLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0gfSk7XG4gICAgcmV0dXJuIFNsaWRlclN0eWxlTW9kZWw7XG59KERlc2NyaXB0aW9uU3R5bGVNb2RlbCkpO1xuZXhwb3J0IHsgU2xpZGVyU3R5bGVNb2RlbCB9O1xudmFyIEludFNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRTbGlkZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRTbGlkZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBJbnRTbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50U2xpZGVyTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ludFNsaWRlclZpZXcnLFxuICAgICAgICAgICAgc3RlcDogMSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICByZWFkb3V0OiB0cnVlLFxuICAgICAgICAgICAgcmVhZG91dF9mb3JtYXQ6ICdkJyxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgc3R5bGU6IG51bGwsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50U2xpZGVyTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vbignY2hhbmdlOnJlYWRvdXRfZm9ybWF0JywgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCgpO1xuICAgIH07XG4gICAgSW50U2xpZGVyTW9kZWwucHJvdG90eXBlLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yZWFkb3V0X2Zvcm1hdHRlciA9IGZvcm1hdCh0aGlzLmdldCgncmVhZG91dF9mb3JtYXQnKSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50U2xpZGVyTW9kZWw7XG59KEJvdW5kZWRJbnRNb2RlbCkpO1xuZXhwb3J0IHsgSW50U2xpZGVyTW9kZWwgfTtcbnZhciBJbnRSYW5nZVNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRSYW5nZVNsaWRlck1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludFJhbmdlU2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIEludFJhbmdlU2xpZGVyTW9kZWw7XG59KEludFNsaWRlck1vZGVsKSk7XG5leHBvcnQgeyBJbnRSYW5nZVNsaWRlck1vZGVsIH07XG52YXIgQmFzZUludFNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEJhc2VJbnRTbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhc2VJbnRTbGlkZXJWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VJbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtc2xpZGVyJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgKHRoaXMuJHNsaWRlciA9ICQoJzxkaXYgLz4nKSlcbiAgICAgICAgICAgIC5zbGlkZXIoe1xuICAgICAgICAgICAgc2xpZGU6IHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICAgICAgICBzdG9wOiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZWQuYmluZCh0aGlzKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGlkZXInKTtcbiAgICAgICAgLy8gUHV0IHRoZSBzbGlkZXIgaW4gYSBjb250YWluZXJcbiAgICAgICAgdGhpcy5zbGlkZXJfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXItY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLiRzbGlkZXJbMF0pO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuc2xpZGVyX2NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMucmVhZG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucmVhZG91dCk7XG4gICAgICAgIHRoaXMucmVhZG91dC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtcmVhZG91dCcpO1xuICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAgICAgKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykge1xuICAgICAgICAgICAgLy8gSlF1ZXJ5IHNsaWRlciBvcHRpb24ga2V5cy4gIFRoZXNlIGtleXMgaGFwcGVuIHRvIGhhdmUgYVxuICAgICAgICAgICAgLy8gb25lLXRvLW9uZSBtYXBwaW5nIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcga2V5cyBvZiB0aGUgbW9kZWwuXG4gICAgICAgICAgICB2YXIganF1ZXJ5X3NsaWRlcl9rZXlzID0gWydzdGVwJywgJ2Rpc2FibGVkJ107XG4gICAgICAgICAgICB2YXIgdGhhdF8xID0gdGhpcztcbiAgICAgICAgICAgIHRoYXRfMS4kc2xpZGVyLnNsaWRlcih7fSk7XG4gICAgICAgICAgICBqcXVlcnlfc2xpZGVyX2tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZGVsX3ZhbHVlID0gdGhhdF8xLm1vZGVsLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlbF92YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXRfMS4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywga2V5LCBtb2RlbF92YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuY29udGVudEVkaXRhYmxlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICAgICAgdmFyIG1pbiA9IHRoaXMubW9kZWwuZ2V0KCdtaW4nKTtcbiAgICAgICAgICAgIGlmIChtaW4gPD0gbWF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1heCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdtYXgnLCBtYXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ21pbicsIG1pbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV09SS0FST1VORCBGT1IgSlFVRVJZIFNMSURFUiBCVUcuXG4gICAgICAgICAgICAvLyBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIGhhbmRsZVxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBhdCB0aGUgdGltZVxuICAgICAgICAgICAgLy8gb2Ygb3JpZW50YXRpb24gY2hhbmdlLiAgQmVmb3JlIGFwcGx5aW5nIHRoZSBuZXdcbiAgICAgICAgICAgIC8vIHdvcmthcm91bmQsIHdlIHNldCB0aGUgdmFsdWUgdG8gdGhlIG1pbmltdW0gdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBob3Jpem9udGFsIHBsYWNlbWVudCBvZiB0aGVcbiAgICAgICAgICAgIC8vIGhhbmRsZSBpbiB0aGUgdmVydGljYWwgc2xpZGVyIGlzIGFsd2F5c1xuICAgICAgICAgICAgLy8gY29uc2lzdGVudC5cbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbl8xID0gdGhpcy5tb2RlbC5nZXQoJ29yaWVudGF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnb3JpZW50YXRpb24nLCBvcmllbnRhdGlvbl8xKTtcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmlnaHQgQ1NTIGNsYXNzZXMgZm9yIHZlcnRpY2FsICYgaG9yaXpvbnRhbCBzbGlkZXJzXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25fMSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12c2xpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtdnNsaWRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVhZG91dCA9IHRoaXMubW9kZWwuZ2V0KCdyZWFkb3V0Jyk7XG4gICAgICAgICAgICBpZiAocmVhZG91dCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGF0XzEucmVhZG91dF9vdmVyZmxvdygpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0XzEucmVhZG91dC5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdF8xLnJlYWRvdXQuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHJlYWRvdXQgYm94IGNvbnRlbnQgb3ZlcmZsb3dzLlxuICAgICAqL1xuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5yZWFkb3V0X292ZXJmbG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkb3V0LnNjcm9sbFdpZHRoID4gdGhpcy5yZWFkb3V0LmNsaWVudFdpZHRoO1xuICAgIH07XG4gICAgQmFzZUludFNsaWRlclZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC8vIERpY3Rpb25hcnkgb2YgZXZlbnRzIGFuZCB0aGVpciBoYW5kbGVycy5cbiAgICAgICAgICAgICdzbGlkZSc6ICdoYW5kbGVTbGlkZXJDaGFuZ2UnLFxuICAgICAgICAgICAgJ3NsaWRlc3RvcCc6ICdoYW5kbGVTbGlkZXJDaGFuZ2VkJyxcbiAgICAgICAgICAgICdibHVyIFtjb250ZW50RWRpdGFibGU9dHJ1ZV0nOiAnaGFuZGxlVGV4dENoYW5nZScsXG4gICAgICAgICAgICAna2V5ZG93biBbY29udGVudEVkaXRhYmxlPXRydWVdJzogJ2hhbmRsZUtleURvd24nXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBCYXNlSW50U2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8qIGtleWJvYXJkIGtleWNvZGVzIGBlbnRlcmAgKi9cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGV4dENoYW5nZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBiZWZvcmUgc2VuZGluZyBpdCB0byB0aGUgYmFjay1lbmRcbiAgICAgKiBhbmQgYXBwbHlpbmcgaXQgdG8gdGhlIG90aGVyIHZpZXdzIG9uIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIEJhc2VJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5fdmFsaWRhdGVfc2xpZGVfdmFsdWUgPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih4KTtcbiAgICB9O1xuICAgIHJldHVybiBCYXNlSW50U2xpZGVyVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBCYXNlSW50U2xpZGVyVmlldyB9O1xudmFyIEludFJhbmdlU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50UmFuZ2VTbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludFJhbmdlU2xpZGVyVmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIC8vIHJhbmdlIG51bWJlcnMgY2FuIGJlIHNlcGFyYXRlZCBieSBhIGh5cGhlbiwgY29sb24sIG9yIGFuIGVuLWRhc2hcbiAgICAgICAgX3RoaXMuX3JhbmdlX3JlZ2V4ID0gL15cXHMqKFsrLV0/XFxkKylcXHMqWy064oCTXVxccyooWystXT9cXGQrKS87XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgSW50UmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAncmFuZ2UnLCB0cnVlKTtcbiAgICAgICAgLy8gdmFsdWVzIGZvciB0aGUgcmFuZ2UgY2FzZSBhcmUgdmFsaWRhdGVkIHB5dGhvbi1zaWRlIGluXG4gICAgICAgIC8vIF9Cb3VuZGVke0ludCxGbG9hdH1SYW5nZVdpZGdldC5fdmFsaWRhdGVcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZXMnLCB2YWx1ZS5zbGljZSgpKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXcml0ZSB2YWx1ZSB0byBhIHN0cmluZ1xuICAgICAqL1xuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudmFsdWVUb1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5yZWFkb3V0X2Zvcm1hdHRlcjtcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdCh2KTtcbiAgICAgICAgfSkuam9pbignIOKAkyAnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcnNlIHZhbHVlIGZyb20gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLnN0cmluZ1RvVmFsdWUgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAvLyByYW5nZXMgY2FuIGJlIGV4cHJlc3NlZCBlaXRoZXIgJ3ZhbC12YWwnIG9yICd2YWw6dmFsJyAoK3NwYWNlcylcbiAgICAgICAgdmFyIG1hdGNoID0gdGhpcy5fcmFuZ2VfcmVnZXguZXhlYyh0ZXh0KTtcbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuX3BhcnNlX3ZhbHVlKG1hdGNoWzFdKSwgdGhpcy5fcGFyc2VfdmFsdWUobWF0Y2hbMl0pXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiB0aGlzIGhhbmRsZXMgdGhlIGVudHJ5IG9mIHRleHQgaW50byB0aGUgY29udGVudEVkaXRhYmxlIGxhYmVsIGZpcnN0LCB0aGVcbiAgICAgKiB2YWx1ZSBpcyBjaGVja2VkIGlmIGl0IGNvbnRhaW5zIGEgcGFyc2VhYmxlIHZhbHVlIHRoZW4gaXQgaXMgY2xhbXBlZFxuICAgICAqIHdpdGhpbiB0aGUgbWluLW1heCByYW5nZSBvZiB0aGUgc2xpZGVyIGZpbmFsbHksIHRoZSBtb2RlbCBpcyB1cGRhdGVkIGlmXG4gICAgICogdGhlIHZhbHVlIGlzIHRvIGJlIGNoYW5nZWRcbiAgICAgKlxuICAgICAqIGlmIGFueSBvZiB0aGVzZSBjb25kaXRpb25zIGFyZSBub3QgbWV0LCB0aGUgdGV4dCBpcyByZXNldFxuICAgICAqL1xuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlVGV4dENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5zdHJpbmdUb1ZhbHVlKHRoaXMucmVhZG91dC50ZXh0Q29udGVudCk7XG4gICAgICAgIHZhciB2bWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xuICAgICAgICB2YXIgdm1heCA9IHRoaXMubW9kZWwuZ2V0KCdtYXgnKTtcbiAgICAgICAgLy8gcmVqZWN0IGlucHV0IHdoZXJlIE5hTiBvciBsb3dlciA+IHVwcGVyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgaXNOYU4odmFsdWVbMF0pIHx8XG4gICAgICAgICAgICBpc05hTih2YWx1ZVsxXSkgfHxcbiAgICAgICAgICAgICh2YWx1ZVswXSA+IHZhbHVlWzFdKSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNsYW1wIHRvIHJhbmdlXG4gICAgICAgICAgICB2YWx1ZSA9IFtNYXRoLm1heChNYXRoLm1pbih2YWx1ZVswXSwgdm1heCksIHZtaW4pLFxuICAgICAgICAgICAgICAgIE1hdGgubWF4KE1hdGgubWluKHZhbHVlWzFdLCB2bWF4KSwgdm1pbildO1xuICAgICAgICAgICAgaWYgKCh2YWx1ZVswXSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJylbMF0pIHx8XG4gICAgICAgICAgICAgICAgKHZhbHVlWzFdICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKVsxXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqL1xuICAgIEludFJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHZhciBhY3R1YWxfdmFsdWUgPSB1aS52YWx1ZXMubWFwKHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdGhpcy52YWx1ZVRvU3RyaW5nKGFjdHVhbF92YWx1ZSk7XG4gICAgICAgIC8vIE9ubHkgcGVyc2lzdCB0aGUgdmFsdWUgd2hpbGUgc2xpZGluZyBpZiB0aGUgY29udGludW91c191cGRhdGVcbiAgICAgICAgLy8gdHJhaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkKGUsIHVpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBJbnRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IHVpLnZhbHVlcy5tYXAodGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCBhY3R1YWxfdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50UmFuZ2VTbGlkZXJWaWV3O1xufShCYXNlSW50U2xpZGVyVmlldykpO1xuZXhwb3J0IHsgSW50UmFuZ2VTbGlkZXJWaWV3IH07XG52YXIgSW50U2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50U2xpZGVyVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRTbGlkZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEludFNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgIHZhciBtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICBpZiAodmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWF4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgbWluKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1pbjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV3JpdGUgdmFsdWUgdG8gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS52YWx1ZVRvU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLm1vZGVsLnJlYWRvdXRfZm9ybWF0dGVyO1xuICAgICAgICByZXR1cm4gZm9ybWF0KHZhbHVlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFBhcnNlIHZhbHVlIGZyb20gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5zdHJpbmdUb1ZhbHVlID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcnNlX3ZhbHVlKHRleHQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogdGhpcyBoYW5kbGVzIHRoZSBlbnRyeSBvZiB0ZXh0IGludG8gdGhlIGNvbnRlbnRFZGl0YWJsZSBsYWJlbCBmaXJzdCwgdGhlXG4gICAgICogdmFsdWUgaXMgY2hlY2tlZCBpZiBpdCBjb250YWlucyBhIHBhcnNlYWJsZSB2YWx1ZSB0aGVuIGl0IGlzIGNsYW1wZWRcbiAgICAgKiB3aXRoaW4gdGhlIG1pbi1tYXggcmFuZ2Ugb2YgdGhlIHNsaWRlciBmaW5hbGx5LCB0aGUgbW9kZWwgaXMgdXBkYXRlZCBpZlxuICAgICAqIHRoZSB2YWx1ZSBpcyB0byBiZSBjaGFuZ2VkXG4gICAgICpcbiAgICAgKiBpZiBhbnkgb2YgdGhlc2UgY29uZGl0aW9ucyBhcmUgbm90IG1ldCwgdGhlIHRleHQgaXMgcmVzZXRcbiAgICAgKi9cbiAgICBJbnRTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVUZXh0Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0cmluZ1RvVmFsdWUodGhpcy5yZWFkb3V0LnRleHRDb250ZW50KTtcbiAgICAgICAgdmFyIHZtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgIHZhciB2bWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgdm1heCksIHZtaW4pO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXG4gICAgICovXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHZhciBhY3R1YWxfdmFsdWUgPSB0aGlzLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSh1aS52YWx1ZSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyhhY3R1YWxfdmFsdWUpO1xuICAgICAgICAvLyBPbmx5IHBlcnNpc3QgdGhlIHZhbHVlIHdoaWxlIHNsaWRpbmcgaWYgdGhlIGNvbnRpbnVvdXNfdXBkYXRlXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZChlLCB1aSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgSW50U2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlZCA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICB2YXIgYWN0dWFsX3ZhbHVlID0gdGhpcy5fdmFsaWRhdGVfc2xpZGVfdmFsdWUodWkudmFsdWUpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCBhY3R1YWxfdmFsdWUsIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50U2xpZGVyVmlldztcbn0oQmFzZUludFNsaWRlclZpZXcpKTtcbmV4cG9ydCB7IEludFNsaWRlclZpZXcgfTtcbnZhciBJbnRUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludFRleHRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRUZXh0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW50VGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdJbnRUZXh0TW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ludFRleHRWaWV3JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50VGV4dE1vZGVsO1xufShJbnRNb2RlbCkpO1xuZXhwb3J0IHsgSW50VGV4dE1vZGVsIH07XG52YXIgQm91bmRlZEludFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm91bmRlZEludFRleHRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3VuZGVkSW50VGV4dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJvdW5kZWRJbnRUZXh0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JvdW5kZWRJbnRUZXh0TW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ludFRleHRWaWV3JyxcbiAgICAgICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEJvdW5kZWRJbnRUZXh0TW9kZWw7XG59KEJvdW5kZWRJbnRNb2RlbCkpO1xuZXhwb3J0IHsgQm91bmRlZEludFRleHRNb2RlbCB9O1xudmFyIEludFRleHRWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRUZXh0VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRUZXh0VmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wYXJzZV92YWx1ZSA9IHBhcnNlSW50O1xuICAgICAgICBfdGhpcy5fZGVmYXVsdF9zdGVwID0gJzEnO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRleHQnKTtcbiAgICAgICAgdGhpcy50ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy50ZXh0Ym94LnR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgdGhpcy50ZXh0Ym94LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMudGV4dGJveCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX3BhcnNlX3ZhbHVlKHRoaXMudGV4dGJveC52YWx1ZSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbWluJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dGJveC5taW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ21heCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3gubWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0KCdzdGVwJykgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICYmIHRoaXMubW9kZWwuZ2V0KCdzdGVwJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3guc3RlcCA9IHRoaXMubW9kZWwuZ2V0KCdzdGVwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3guc3RlcCA9IHRoaXMuX2RlZmF1bHRfc3RlcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdrZXlkb3duIGlucHV0JzogJ2hhbmRsZUtleURvd24nLFxuICAgICAgICAgICAgJ2tleXByZXNzIGlucHV0JzogJ2hhbmRsZUtleXByZXNzJyxcbiAgICAgICAgICAgICdrZXl1cCBpbnB1dCc6ICdoYW5kbGVLZXlVcCcsXG4gICAgICAgICAgICAnaW5wdXQgaW5wdXQnOiAnaGFuZGxlQ2hhbmdpbmcnLFxuICAgICAgICAgICAgJ2NoYW5nZSBpbnB1dCc6ICdoYW5kbGVDaGFuZ2VkJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSBkb3duXG4gICAgICpcbiAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIHNvIHRoZSBldmVudCBpc24ndCBzZW50IHRvIHRoZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBJbnRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleSBwcmVzc1xuICAgICAqL1xuICAgIEludFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICgvW2UsLlxcc10vLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShlLmtleUNvZGUpKSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IHVwXG4gICAgICovXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUuYWx0S2V5IHx8IGUuY3RybEtleSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgLyogcmVtb3ZlIGludmFsaWQgY2hhcmFjdGVycyAqL1xuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvW2UsLlxcc10vZywgXCJcIik7XG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgdmFyIHN1YnZhbHVlID0gdmFsdWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZVswXSArIHN1YnZhbHVlLnJlcGxhY2UoL1srLV0vZywgXCJcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldC52YWx1ZSAhPSB2YWx1ZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGwgdGhlIHN1Ym1pdCBoYW5kbGVyIGlmIGNvbnRpbnVvdXMgdXBkYXRlIGlzIHRydWUgYW5kIHdlIGFyZSBub3RcbiAgICAgKiBvYnZpb3VzbHkgaW5jb21wbGV0ZS5cbiAgICAgKi9cbiAgICBJbnRUZXh0Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciB0cmltbWVkID0gdGFyZ2V0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgaWYgKHRyaW1tZWQgPT09ICcnIHx8IChbJy0nLCAnLS4nLCAnLicsICcrLicsICcrJ10uaW5kZXhPZih0cmltbWVkKSA+PSAwKSkge1xuICAgICAgICAgICAgLy8gaW5jb21wbGV0ZSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlZChlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQXBwbGllcyB2YWxpZGF0ZWQgaW5wdXQuXG4gICAgICovXG4gICAgSW50VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBudW1lcmljYWxWYWx1ZSA9IHRoaXMuX3BhcnNlX3ZhbHVlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgIC8vIElmIHBhcnNlIGZhaWxlZCwgcmVzZXQgdmFsdWUgdG8gdmFsdWUgc3RvcmVkIGluIG1vZGVsLlxuICAgICAgICBpZiAoaXNOYU4obnVtZXJpY2FsVmFsdWUpKSB7XG4gICAgICAgICAgICB0YXJnZXQudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhhbmRsZSBib3RoIHRoZSB1bmJvdW5kZWQgYW5kIGJvdW5kZWQgY2FzZSBieVxuICAgICAgICAgICAgLy8gY2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBtYXgvbWluIHByb3BlcnRpZXMgYXJlIGRlZmluZWRcbiAgICAgICAgICAgIHZhciBib3VuZGVkVmFsdWUgPSBudW1lcmljYWxWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbWF4JykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGJvdW5kZWRWYWx1ZSA9IE1hdGgubWluKHRoaXMubW9kZWwuZ2V0KCdtYXgnKSwgYm91bmRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnbWluJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGJvdW5kZWRWYWx1ZSA9IE1hdGgubWF4KHRoaXMubW9kZWwuZ2V0KCdtaW4nKSwgYm91bmRlZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChib3VuZGVkVmFsdWUgIT09IG51bWVyaWNhbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnZhbHVlID0gYm91bmRlZFZhbHVlO1xuICAgICAgICAgICAgICAgIG51bWVyaWNhbFZhbHVlID0gYm91bmRlZFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIHZhbHVlIGlmIGl0IGhhcyBjaGFuZ2VkLlxuICAgICAgICAgICAgaWYgKG51bWVyaWNhbFZhbHVlICE9PSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIG51bWVyaWNhbFZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBJbnRUZXh0Vmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBJbnRUZXh0VmlldyB9O1xudmFyIFByb2dyZXNzU3R5bGVNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUHJvZ3Jlc3NTdHlsZU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFByb2dyZXNzU3R5bGVNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQcm9ncmVzc1N0eWxlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1Byb2dyZXNzU3R5bGVNb2RlbCcgfSk7XG4gICAgfTtcbiAgICBQcm9ncmVzc1N0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0gX19hc3NpZ24oe30sIERlc2NyaXB0aW9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMsIHsgYmFyX2NvbG9yOiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy5wcm9ncmVzcy1iYXInLFxuICAgICAgICAgICAgYXR0cmlidXRlOiAnYmFja2dyb3VuZC1jb2xvcicsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0gfSk7XG4gICAgcmV0dXJuIFByb2dyZXNzU3R5bGVNb2RlbDtcbn0oRGVzY3JpcHRpb25TdHlsZU1vZGVsKSk7XG5leHBvcnQgeyBQcm9ncmVzc1N0eWxlTW9kZWwgfTtcbnZhciBJbnRQcm9ncmVzc01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhJbnRQcm9ncmVzc01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludFByb2dyZXNzTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW50UHJvZ3Jlc3NNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSW50UHJvZ3Jlc3NNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnUHJvZ3Jlc3NWaWV3JyxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBiYXJfc3R5bGU6ICcnLFxuICAgICAgICAgICAgc3R5bGU6IG51bGxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSW50UHJvZ3Jlc3NNb2RlbDtcbn0oQm91bmRlZEludE1vZGVsKSk7XG5leHBvcnQgeyBJbnRQcm9ncmVzc01vZGVsIH07XG52YXIgUHJvZ3Jlc3NWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQcm9ncmVzc1ZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUHJvZ3Jlc3NWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6YmFyX3N0eWxlJywgdGhpcy51cGRhdGVfYmFyX3N0eWxlKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICB9O1xuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm1vZGVsLmdldCgnb3JpZW50YXRpb24nKTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgP1xuICAgICAgICAgICAgJ3dpZGdldC1ocHJvZ3Jlc3MnIDogJ3dpZGdldC12cHJvZ3Jlc3MnO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzJyk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3Muc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgICB0aGlzLmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmJhci5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0aGlzLmJhci5zdHlsZS5ib3R0b20gPSAnMHB4JztcbiAgICAgICAgdGhpcy5iYXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgICAgICB0aGlzLnByb2dyZXNzLmFwcGVuZENoaWxkKHRoaXMuYmFyKTtcbiAgICAgICAgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNldF9iYXJfc3R5bGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgUHJvZ3Jlc3NWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICB2YXIgbWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICB2YXIgbWluID0gdGhpcy5tb2RlbC5nZXQoJ21pbicpO1xuICAgICAgICB2YXIgb3JpZW50YXRpb24gPSB0aGlzLm1vZGVsLmdldCgnb3JpZW50YXRpb24nKTtcbiAgICAgICAgdmFyIHBlcmNlbnQgPSAxMDAuMCAqICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS12Ym94Jyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC12cHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1ocHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gcGVyY2VudCArICclJztcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1ocHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS12Ym94Jyk7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC12cHJvZ3Jlc3MnKTtcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgdGhpcy5iYXIuc3R5bGUuaGVpZ2h0ID0gcGVyY2VudCArICclJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUudXBkYXRlX2Jhcl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoUHJvZ3Jlc3NWaWV3LmNsYXNzX21hcCwgJ2Jhcl9zdHlsZScsIHRoaXMuYmFyKTtcbiAgICB9O1xuICAgIFByb2dyZXNzVmlldy5wcm90b3R5cGUuc2V0X2Jhcl9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRfbWFwcGVkX2NsYXNzZXMoUHJvZ3Jlc3NWaWV3LmNsYXNzX21hcCwgJ2Jhcl9zdHlsZScsIHRoaXMuYmFyKTtcbiAgICB9O1xuICAgIFByb2dyZXNzVmlldy5jbGFzc19tYXAgPSB7XG4gICAgICAgIHN1Y2Nlc3M6IFsncHJvZ3Jlc3MtYmFyLXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydwcm9ncmVzcy1iYXItaW5mbyddLFxuICAgICAgICB3YXJuaW5nOiBbJ3Byb2dyZXNzLWJhci13YXJuaW5nJ10sXG4gICAgICAgIGRhbmdlcjogWydwcm9ncmVzcy1iYXItZGFuZ2VyJ11cbiAgICB9O1xuICAgIHJldHVybiBQcm9ncmVzc1ZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgUHJvZ3Jlc3NWaWV3IH07XG52YXIgUGxheU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhQbGF5TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGxheU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnUGxheU1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdQbGF5VmlldycsXG4gICAgICAgICAgICBfcGxheWluZzogZmFsc2UsXG4gICAgICAgICAgICBfcmVwZWF0OiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dfcmVwZWF0OiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJ2YWw6IDEwMCxcbiAgICAgICAgICAgIHN0ZXA6IDEsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBQbGF5TW9kZWwucHJvdG90eXBlLmxvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmdldCgnX3BsYXlpbmcnKSkge1xuICAgICAgICAgICAgdmFyIG5leHRfdmFsdWUgPSB0aGlzLmdldCgndmFsdWUnKSArIHRoaXMuZ2V0KCdzdGVwJyk7XG4gICAgICAgICAgICBpZiAobmV4dF92YWx1ZSA8PSB0aGlzLmdldCgnbWF4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldCgndmFsdWUnLCBuZXh0X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlX25leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX3JlcGVhdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0KCd2YWx1ZScsIHRoaXMuZ2V0KCdtaW4nKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfbmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuc2NoZWR1bGVfbmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQodGhpcy5sb29wLmJpbmQodGhpcyksIHRoaXMuZ2V0KCdpbnRlcnZhbCcpKTtcbiAgICB9O1xuICAgIFBsYXlNb2RlbC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNldCgndmFsdWUnLCB0aGlzLmdldCgnbWluJykpO1xuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgIH07XG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXQoJ19wbGF5aW5nJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgIH07XG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldCgnX3BsYXlpbmcnLCB0cnVlKTtcbiAgICAgICAgaWYgKHRoaXMuZ2V0KCd2YWx1ZScpID09IHRoaXMuZ2V0KCdtYXgnKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHZhbHVlIGlzIGF0IHRoZSBlbmQsIHJlc2V0IGlmIGZpcnN0LCBhbmQgdGhlbiBzY2hlZHVsZSB0aGUgbmV4dFxuICAgICAgICAgICAgdGhpcy5zZXQoJ3ZhbHVlJywgdGhpcy5nZXQoJ21pbicpKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVfbmV4dCgpO1xuICAgICAgICAgICAgdGhpcy5zYXZlX2NoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBkaXJlY3RseSBzdGFydCB3aXRoIHRoZSBuZXh0IHZhbHVlXG4gICAgICAgICAgICAvLyBsb29wIHdpbGwgY2FsbCBzYXZlX2NoYW5nZXMgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICB0aGlzLmxvb3AoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUGxheU1vZGVsLnByb3RvdHlwZS5yZXBlYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0KCdfcmVwZWF0JywgIXRoaXMuZ2V0KCdfcmVwZWF0JykpO1xuICAgICAgICB0aGlzLnNhdmVfY2hhbmdlcygpO1xuICAgIH07XG4gICAgcmV0dXJuIFBsYXlNb2RlbDtcbn0oQm91bmRlZEludE1vZGVsKSk7XG5leHBvcnQgeyBQbGF5TW9kZWwgfTtcbnZhciBQbGF5VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGxheVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGxheVZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUGxheVZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtcGxheScpO1xuICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmNsYXNzTmFtZSA9ICdqdXB5dGVyLWJ1dHRvbic7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uY2xhc3NOYW1lID0gJ2p1cHl0ZXItYnV0dG9uJztcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLmNsYXNzTmFtZSA9ICdqdXB5dGVyLWJ1dHRvbic7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLmNsYXNzTmFtZSA9ICdqdXB5dGVyLWJ1dHRvbic7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5wbGF5QnV0dG9uKTsgLy8gVG9nZ2xlIGJ1dHRvbiB3aXRoIHBsYXlpbmdcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnBhdXNlQnV0dG9uKTsgLy8gRGlzYWJsZSBpZiBub3QgcGxheWluZ1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuc3RvcEJ1dHRvbik7IC8vIERpc2FibGUgaWYgbm90IHBsYXlpbmdcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlcGVhdEJ1dHRvbik7IC8vIEFsd2F5cyBlbmFibGVkLCBidXQgbWF5IGJlIGhpZGRlblxuICAgICAgICB2YXIgcGxheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgIHBsYXlJY29uLmNsYXNzTmFtZSA9ICdmYSBmYS1wbGF5JztcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmFwcGVuZENoaWxkKHBsYXlJY29uKTtcbiAgICAgICAgdmFyIHBhdXNlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgcGF1c2VJY29uLmNsYXNzTmFtZSA9ICdmYSBmYS1wYXVzZSc7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uYXBwZW5kQ2hpbGQocGF1c2VJY29uKTtcbiAgICAgICAgdmFyIHN0b3BJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBzdG9wSWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtc3RvcCc7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5hcHBlbmRDaGlsZChzdG9wSWNvbik7XG4gICAgICAgIHZhciByZXBlYXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICByZXBlYXRJY29uLmNsYXNzTmFtZSA9ICdmYSBmYS1yZXR3ZWV0JztcbiAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24uYXBwZW5kQ2hpbGQocmVwZWF0SWNvbik7XG4gICAgICAgIHRoaXMucGxheUJ1dHRvbi5vbmNsaWNrID0gdGhpcy5tb2RlbC5wbGF5LmJpbmQodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24ub25jbGljayA9IHRoaXMubW9kZWwucGF1c2UuYmluZCh0aGlzLm1vZGVsKTtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLm9uY2xpY2sgPSB0aGlzLm1vZGVsLnN0b3AuYmluZCh0aGlzLm1vZGVsKTtcbiAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24ub25jbGljayA9IHRoaXMubW9kZWwucmVwZWF0LmJpbmQodGhpcy5tb2RlbCk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfcGxheWluZycsIHRoaXMudXBkYXRlX3BsYXlpbmcpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3JlcGVhdCcsIHRoaXMudXBkYXRlX3JlcGVhdCk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpzaG93X3JlcGVhdCcsIHRoaXMudXBkYXRlX3JlcGVhdCk7XG4gICAgICAgIHRoaXMudXBkYXRlX3BsYXlpbmcoKTtcbiAgICAgICAgdGhpcy51cGRhdGVfcmVwZWF0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICBQbGF5Vmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMucGF1c2VCdXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIHRoaXMudXBkYXRlX3BsYXlpbmcoKTtcbiAgICB9O1xuICAgIFBsYXlWaWV3LnByb3RvdHlwZS51cGRhdGVfcGxheWluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBsYXlpbmcgPSB0aGlzLm1vZGVsLmdldCgnX3BsYXlpbmcnKTtcbiAgICAgICAgdmFyIGRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbGF5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFBsYXlWaWV3LnByb3RvdHlwZS51cGRhdGVfcmVwZWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVwZWF0ID0gdGhpcy5tb2RlbC5nZXQoJ19yZXBlYXQnKTtcbiAgICAgICAgdGhpcy5yZXBlYXRCdXR0b24uc3R5bGUuZGlzcGxheSA9IHRoaXMubW9kZWwuZ2V0KCdzaG93X3JlcGVhdCcpID8gdGhpcy5wbGF5QnV0dG9uLnN0eWxlLmRpc3BsYXkgOiAnbm9uZSc7XG4gICAgICAgIGlmIChyZXBlYXQpIHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVwZWF0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZC1hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFBsYXlWaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBQbGF5VmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgdW5wYWNrX21vZGVscyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBDb3JlV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgRGlyZWN0aW9uYWxMaW5rTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERpcmVjdGlvbmFsTGlua01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERpcmVjdGlvbmFsTGlua01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERpcmVjdGlvbmFsTGlua01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgdGFyZ2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzb3VyY2U6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRGlyZWN0aW9uYWxMaW5rTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGlyZWN0aW9uYWxMaW5rTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vbignY2hhbmdlJywgdGhpcy51cGRhdGVCaW5kaW5ncywgdGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlQmluZGluZ3MoKTtcbiAgICB9O1xuICAgIERpcmVjdGlvbmFsTGlua01vZGVsLnByb3RvdHlwZS51cGRhdGVWYWx1ZSA9IGZ1bmN0aW9uIChzb3VyY2VNb2RlbCwgc291cmNlQXR0ciwgdGFyZ2V0TW9kZWwsIHRhcmdldEF0dHIpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRhcmdldE1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TW9kZWwuc2V0KHRhcmdldEF0dHIsIHNvdXJjZU1vZGVsLmdldChzb3VyY2VBdHRyKSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TW9kZWwuc2F2ZV9jaGFuZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEaXJlY3Rpb25hbExpbmtNb2RlbC5wcm90b3R5cGUudXBkYXRlQmluZGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYW51cCgpO1xuICAgICAgICBfYSA9IHRoaXMuZ2V0KCdzb3VyY2UnKSB8fCBbbnVsbCwgbnVsbF0sIHRoaXMuc291cmNlTW9kZWwgPSBfYVswXSwgdGhpcy5zb3VyY2VBdHRyID0gX2FbMV07XG4gICAgICAgIF9iID0gdGhpcy5nZXQoJ3RhcmdldCcpIHx8IFtudWxsLCBudWxsXSwgdGhpcy50YXJnZXRNb2RlbCA9IF9iWzBdLCB0aGlzLnRhcmdldEF0dHIgPSBfYlsxXTtcbiAgICAgICAgaWYgKHRoaXMuc291cmNlTW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5zb3VyY2VNb2RlbCwgJ2NoYW5nZTonICsgdGhpcy5zb3VyY2VBdHRyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoX3RoaXMuc291cmNlTW9kZWwsIF90aGlzLnNvdXJjZUF0dHIsIF90aGlzLnRhcmdldE1vZGVsLCBfdGhpcy50YXJnZXRBdHRyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0aGlzLnNvdXJjZU1vZGVsLCB0aGlzLnNvdXJjZUF0dHIsIHRoaXMudGFyZ2V0TW9kZWwsIHRoaXMudGFyZ2V0QXR0cik7XG4gICAgICAgICAgICB0aGlzLmxpc3RlblRvT25jZSh0aGlzLnNvdXJjZU1vZGVsLCAnZGVzdHJveScsIHRoaXMuY2xlYW51cCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG9PbmNlKHRoaXMudGFyZ2V0TW9kZWwsICdkZXN0cm95JywgdGhpcy5jbGVhbnVwKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGlyZWN0aW9uYWxMaW5rTW9kZWwucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN0b3AgbGlzdGVuaW5nIHRvICdjaGFuZ2UnIGFuZCAnZGVzdHJveScgZXZlbnRzIG9mIHRoZSBzb3VyY2UgYW5kIHRhcmdldFxuICAgICAgICBpZiAodGhpcy5zb3VyY2VNb2RlbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMuc291cmNlTW9kZWwsICdjaGFuZ2U6JyArIHRoaXMuc291cmNlQXR0ciwgbnVsbCk7XG4gICAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW5pbmcodGhpcy5zb3VyY2VNb2RlbCwgJ2Rlc3Ryb3knLCBudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50YXJnZXRNb2RlbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMudGFyZ2V0TW9kZWwsICdkZXN0cm95JywgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERpcmVjdGlvbmFsTGlua01vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVXaWRnZXRNb2RlbC5zZXJpYWxpemVycywgeyB0YXJnZXQ6IHsgZGVzZXJpYWxpemU6IHVucGFja19tb2RlbHMgfSwgc291cmNlOiB7IGRlc2VyaWFsaXplOiB1bnBhY2tfbW9kZWxzIH0gfSk7XG4gICAgcmV0dXJuIERpcmVjdGlvbmFsTGlua01vZGVsO1xufShDb3JlV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IERpcmVjdGlvbmFsTGlua01vZGVsIH07XG52YXIgTGlua01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMaW5rTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTGlua01vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIExpbmtNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnTGlua01vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIExpbmtNb2RlbC5wcm90b3R5cGUudXBkYXRlQmluZGluZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlQmluZGluZ3MuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0TW9kZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy50YXJnZXRNb2RlbCwgJ2NoYW5nZTonICsgdGhpcy50YXJnZXRBdHRyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoX3RoaXMudGFyZ2V0TW9kZWwsIF90aGlzLnRhcmdldEF0dHIsIF90aGlzLnNvdXJjZU1vZGVsLCBfdGhpcy5zb3VyY2VBdHRyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBMaW5rTW9kZWwucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuY2xlYW51cC5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy50YXJnZXRNb2RlbCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wTGlzdGVuaW5nKHRoaXMudGFyZ2V0TW9kZWwsICdjaGFuZ2U6JyArIHRoaXMudGFyZ2V0QXR0ciwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBMaW5rTW9kZWw7XG59KERpcmVjdGlvbmFsTGlua01vZGVsKSk7XG5leHBvcnQgeyBMaW5rTW9kZWwgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbi8qKlxuICogQSB2YXJpZXR5IG9mIGNvbnZlbmllbmNlIG1ldGhvZHMgZm9yIG1haW50YWluaW5nIGEgY3VycmVudCBzZWxlY3Rpb25cbiAqL1xuaW1wb3J0IHsgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gJ0BwaG9zcGhvci9zaWduYWxpbmcnO1xudmFyIFNlbGVjdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb24oc2VxdWVuY2UsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5fYXJyYXkgPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkID0gbmV3IFNpZ25hbCh0aGlzKTtcbiAgICAgICAgdGhpcy5fYXJyYXkgPSBzZXF1ZW5jZTtcbiAgICAgICAgdGhpcy5faW5zZXJ0QmVoYXZpb3IgPSBvcHRpb25zLmluc2VydEJlaGF2aW9yIHx8ICdzZWxlY3QtaXRlbS1pZi1uZWVkZWQnO1xuICAgICAgICB0aGlzLl9yZW1vdmVCZWhhdmlvciA9IG9wdGlvbnMucmVtb3ZlQmVoYXZpb3IgfHwgJ3NlbGVjdC1pdGVtLWFmdGVyJztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwic2VsZWN0aW9uQ2hhbmdlZFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHNpZ25hbCBlbWl0dGVkIHdoZW4gdGhlIGN1cnJlbnQgaXRlbSBpcyBjaGFuZ2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgc2lnbmFsIGlzIGVtaXR0ZWQgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0gaXMgY2hhbmdlZCBlaXRoZXJcbiAgICAgICAgICogdGhyb3VnaCB1c2VyIG9yIHByb2dyYW1tYXRpYyBpbnRlcmFjdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogTm90YWJseSwgdGhpcyBzaWduYWwgaXMgbm90IGVtaXR0ZWQgd2hlbiB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgaXRlbVxuICAgICAgICAgKiBjaGFuZ2VzIGR1ZSB0byBvdGhlciBpdGVtcyBiZWluZyBpbnNlcnRlZCwgcmVtb3ZlZCwgb3IgbW92ZWQsIGJ1dCB0aGVcbiAgICAgICAgICogY3VycmVudCBpdGVtIHJlbWFpbnMgdGhlIHNhbWUuIEl0IGlzIG9ubHkgZW1pdHRlZCB3aGVuIHRoZSBhY3R1YWwgY3VycmVudFxuICAgICAgICAgKiBpdGVtIGlzIGNoYW5nZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBBZGp1c3QgZm9yIHNldHRpbmcgYW4gaXRlbS5cbiAgICAgKlxuICAgICAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCAqYWZ0ZXIqIHRoZSBzZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggLSBUaGUgaW5kZXggc2V0LlxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZSAtIFRoZSBvbGQgdmFsdWUgYXQgdGhlIGluZGV4LlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuYWRqdXN0U2VsZWN0aW9uRm9yU2V0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIC8vIFdlIGp1c3QgbmVlZCB0byBzZW5kIGEgc2lnbmFsIGlmIHRoZSBjdXJyZW50VmFsdWUgY2hhbmdlZC5cbiAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGluZGV4IGFuZCB2YWx1ZS5cbiAgICAgICAgdmFyIHBpID0gdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIHB2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgLy8gRXhpdCBlYXJseSBpZiB0aGlzIGRvZXNuJ3QgYWZmZWN0IHRoZSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKGluZGV4ICE9PSBwaSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICAgICAgdmFyIGN2ID0gdGhpcy52YWx1ZTtcbiAgICAgICAgLy8gVGhlIHByZXZpb3VzIGl0ZW0gaXMgbm93IG51bGwsIHNpbmNlIGl0IGlzIG5vIGxvbmdlciBpbiB0aGUgYXJyYXkuXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAvLyBTZW5kIHNpZ25hbCBpZiB0aGVyZSB3YXMgYSBjaGFuZ2VcbiAgICAgICAgaWYgKHB2ICE9PSBjdikge1xuICAgICAgICAgICAgLy8gRW1pdCB0aGUgY3VycmVudCBjaGFuZ2VkIHNpZ25hbC5cbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogcGksIHByZXZpb3VzVmFsdWU6IHB2LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogcGksIGN1cnJlbnRWYWx1ZTogY3ZcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJ2YWx1ZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgd2lsbCBiZSBgbnVsbGAgaWYgbm8gaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBJZiB0aGUgaXRlbSBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdmVjdG9yLCB0aGUgY3VycmVudFZhbHVlIHdpbGwgYmUgc2V0IHRvXG4gICAgICAgICAqIGBudWxsYC4gVGhpcyBzZWxlY3RzIHRoZSBmaXJzdCBlbnRyeSBlcXVhbCB0byB0aGUgZGVzaXJlZCBpdGVtLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZih0aGlzLl9hcnJheSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJpbmRleFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIHdpbGwgYmUgYG51bGxgIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleDtcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCB0byBzZWxlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogSWYgdGhlIHZhbHVlIGlzIG91dCBvZiByYW5nZSwgdGhlIGluZGV4IHdpbGwgYmUgc2V0IHRvIGBudWxsYCwgd2hpY2hcbiAgICAgICAgICogaW5kaWNhdGVzIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgLy8gQ29lcmNlIHRoZSB2YWx1ZSB0byBhbiBpbmRleC5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaSA9IE1hdGguZmxvb3IoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChpIDwgMCB8fCBpID49IHRoaXMuX2FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBpID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEJhaWwgZWFybHkgaWYgdGhlIGluZGV4IHdpbGwgbm90IGNoYW5nZS5cbiAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gaSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgdXAgdGhlIHByZXZpb3VzIGluZGV4IGFuZCBpdGVtLlxuICAgICAgICAgICAgdmFyIHBpID0gdGhpcy5faW5kZXg7XG4gICAgICAgICAgICB2YXIgcHYgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGVcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkVmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBwdjtcbiAgICAgICAgICAgIC8vIEVtaXQgdGhlIGN1cnJlbnQgY2hhbmdlZCBzaWduYWwuXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IHBpLCBwcmV2aW91c1ZhbHVlOiBwdixcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXg6IGksIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VsZWN0aW9uLnByb3RvdHlwZSwgXCJpbnNlcnRCZWhhdmlvclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIHNlbGVjdGlvbiBiZWhhdmlvciB3aGVuIGluc2VydGluZyBhIHRhYi5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydEJlaGF2aW9yO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiBpbnNlcnRpbmcgYSB0YWIuXG4gICAgICAgICAqL1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zZXJ0QmVoYXZpb3IgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlbGVjdGlvbi5wcm90b3R5cGUsIFwicmVtb3ZlQmVoYXZpb3JcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiByZW1vdmluZyBhIHRhYi5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlbW92ZUJlaGF2aW9yO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBzZWxlY3Rpb24gYmVoYXZpb3Igd2hlbiByZW1vdmluZyBhIHRhYi5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVCZWhhdmlvciA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBBZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggZm9yIGEgdGFiIGluc2VydCBvcGVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaSAtIFRoZSBuZXcgaW5kZXggb2YgdGhlIGluc2VydGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIGogLSBUaGUgaW5zZXJ0ZWQgaXRlbS5cbiAgICAgKlxuICAgICAqICMjIyMgTm90ZXNcbiAgICAgKiBUaGlzIG1ldGhvZCBhY2NvdW50cyBmb3IgdGhlIHRhYiBiYXIncyBpbnNlcnRpb24gYmVoYXZpb3Igd2hlbiBhZGp1c3RpbmdcbiAgICAgKiB0aGUgY3VycmVudCBpbmRleCBhbmQgZW1pdHRpbmcgdGhlIGNoYW5nZWQgc2lnbmFsLiBUaGlzIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiBhZnRlciB0aGUgaW5zZXJ0aW9uLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuYWRqdXN0U2VsZWN0aW9uRm9ySW5zZXJ0ID0gZnVuY3Rpb24gKGksIGl0ZW0pIHtcbiAgICAgICAgLy8gTG9va3VwIGNvbW1vbmx5IHVzZWQgdmFyaWFibGVzLlxuICAgICAgICB2YXIgY3YgPSB0aGlzLl92YWx1ZTtcbiAgICAgICAgdmFyIGNpID0gdGhpcy5faW5kZXg7XG4gICAgICAgIHZhciBiaCA9IHRoaXMuX2luc2VydEJlaGF2aW9yO1xuICAgICAgICAvLyBIYW5kbGUgdGhlIGJlaGF2aW9yIHdoZXJlIHRoZSBuZXcgaXRlbSBpcyBhbHdheXMgc2VsZWN0ZWQsXG4gICAgICAgIC8vIG9yIHRoZSBiZWhhdmlvciB3aGVyZSB0aGUgbmV3IGl0ZW0gaXMgc2VsZWN0ZWQgaWYgbmVlZGVkLlxuICAgICAgICBpZiAoYmggPT09ICdzZWxlY3QtaXRlbScgfHwgKGJoID09PSAnc2VsZWN0LWl0ZW0taWYtbmVlZGVkJyAmJiBjaSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBjdjtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNJbmRleDogY2ksIHByZXZpb3VzVmFsdWU6IGN2LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogaSwgY3VycmVudFZhbHVlOiBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHNpbGVudGx5IGFkanVzdCB0aGUgY3VycmVudCBpbmRleCBpZiBuZWVkZWQuXG4gICAgICAgIGlmIChjaSA+PSBpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGp1c3QgdGhlIGN1cnJlbnQgaW5kZXggZm9yIG1vdmUgb3BlcmF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGkgLSBUaGUgcHJldmlvdXMgaW5kZXggb2YgdGhlIGl0ZW0uXG4gICAgICogQHBhcmFtIGogLSBUaGUgbmV3IGluZGV4IG9mIHRoZSBpdGVtLlxuICAgICAqXG4gICAgICogIyMjIyBOb3Rlc1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm90IGNhdXNlIHRoZSBhY3R1YWwgY3VycmVudCBpdGVtIHRvIGNoYW5nZS4gSXQgc2lsZW50bHlcbiAgICAgKiBhZGp1c3RzIHRoZSBjdXJyZW50IGluZGV4IHRvIGFjY291bnQgZm9yIHRoZSBnaXZlbiBtb3ZlLlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuYWRqdXN0U2VsZWN0aW9uRm9yTW92ZSA9IGZ1bmN0aW9uIChpLCBqKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbmRleCA9PT0gaSkge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBqO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2luZGV4IDwgaSAmJiB0aGlzLl9pbmRleCA+PSBqKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2luZGV4ID4gaSAmJiB0aGlzLl9pbmRleCA8PSBqKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleC0tO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDbGVhciB0aGUgc2VsZWN0aW9uIGFuZCBoaXN0b3J5LlxuICAgICAqL1xuICAgIFNlbGVjdGlvbi5wcm90b3R5cGUuY2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBpbmRleCBhbmQgaXRlbS5cbiAgICAgICAgdmFyIHBpID0gdGhpcy5faW5kZXg7XG4gICAgICAgIHZhciBwdiA9IHRoaXMuX3ZhbHVlO1xuICAgICAgICAvLyBSZXNldCB0aGUgY3VycmVudCBpbmRleCBhbmQgcHJldmlvdXMgaXRlbS5cbiAgICAgICAgdGhpcy5faW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICAvLyBJZiBubyBpdGVtIHdhcyBzZWxlY3RlZCwgdGhlcmUncyBub3RoaW5nIGVsc2UgdG8gZG8uXG4gICAgICAgIGlmIChwaSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVtaXQgdGhlIGN1cnJlbnQgY2hhbmdlZCBzaWduYWwuXG4gICAgICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZWQuZW1pdCh7XG4gICAgICAgICAgICBwcmV2aW91c0luZGV4OiBwaSwgcHJldmlvdXNWYWx1ZTogcHYsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IHRoaXMuX2luZGV4LCBjdXJyZW50VmFsdWU6IHRoaXMuX3ZhbHVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBjdXJyZW50IGluZGV4IGZvciBhbiBpdGVtIHJlbW92ZSBvcGVyYXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaSAtIFRoZSBmb3JtZXIgaW5kZXggb2YgdGhlIHJlbW92ZWQgaXRlbS5cbiAgICAgKiBAcGFyYW0gaXRlbSAtIFRoZSByZW1vdmVkIGl0ZW0uXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogVGhpcyBtZXRob2QgYWNjb3VudHMgZm9yIHRoZSByZW1vdmUgYmVoYXZpb3Igd2hlbiBhZGp1c3RpbmcgdGhlIGN1cnJlbnRcbiAgICAgKiBpbmRleCBhbmQgZW1pdHRpbmcgdGhlIGNoYW5nZWQgc2lnbmFsLiBJdCBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHRoZSBpdGVtXG4gICAgICogaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb24ucHJvdG90eXBlLmFkanVzdFNlbGVjdGlvbkZvclJlbW92ZSA9IGZ1bmN0aW9uIChpLCBpdGVtKSB7XG4gICAgICAgIC8vIExvb2t1cCBjb21tb25seSB1c2VkIHZhcmlhYmxlcy5cbiAgICAgICAgdmFyIGNpID0gdGhpcy5faW5kZXg7XG4gICAgICAgIHZhciBiaCA9IHRoaXMuX3JlbW92ZUJlaGF2aW9yO1xuICAgICAgICAvLyBTaWxlbnRseSBhZGp1c3QgdGhlIGluZGV4IGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgbm90IHJlbW92ZWQuXG4gICAgICAgIGlmIChjaSAhPT0gaSkge1xuICAgICAgICAgICAgaWYgKGNpID4gaSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm8gaXRlbSBnZXRzIHNlbGVjdGVkIGlmIHRoZSB2ZWN0b3IgaXMgZW1wdHkuXG4gICAgICAgIGlmICh0aGlzLl9hcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBjdXJyZW50IGluZGV4IGFuZCBwcmV2aW91cyBpdGVtLlxuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJlaGF2aW9yIHdoZXJlIHRoZSBuZXh0IHNpYmxpbmcgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICAgICAgaWYgKGJoID09PSAnc2VsZWN0LWl0ZW0tYWZ0ZXInKSB7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IE1hdGgubWluKGksIHRoaXMuX2FycmF5Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJlaGF2aW9yIHdoZXJlIHRoZSBwcmV2aW91cyBzaWJsaW5nIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChiaCA9PT0gJ3NlbGVjdC1pdGVtLWJlZm9yZScpIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gTWF0aC5tYXgoMCwgaSAtIDEpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGJlaGF2aW9yIHdoZXJlIHRoZSBwcmV2aW91cyBoaXN0b3J5IGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChiaCA9PT0gJ3NlbGVjdC1wcmV2aW91cy1pdGVtJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5fcHJldmlvdXNWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gTWF0aC5taW4oaSwgdGhpcy5fYXJyYXkubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgICAgIHByZXZpb3VzSW5kZXg6IGksIHByZXZpb3VzVmFsdWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4OiB0aGlzLl9pbmRleCwgY3VycmVudFZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIG5vIGl0ZW0gZ2V0cyBzZWxlY3RlZC5cbiAgICAgICAgdGhpcy5faW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9zZWxlY3Rpb25DaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgcHJldmlvdXNJbmRleDogaSwgcHJldmlvdXNWYWx1ZTogaXRlbSxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogdGhpcy5faW5kZXgsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGN1cnJlbnQgdmFsdWUgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXguXG4gICAgICovXG4gICAgU2VsZWN0aW9uLnByb3RvdHlwZS5fdXBkYXRlU2VsZWN0ZWRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleDtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBpICE9PSBudWxsID8gdGhpcy5fYXJyYXlbaV0gOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBTZWxlY3Rpb24gfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi92ZXJzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2xpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfYm9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9idXR0b24nO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfYm94JztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3ZpZGVvJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2F1ZGlvJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2NvbG9yJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfaW50JztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2Zsb2F0JztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X2NvbnRyb2xsZXInO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfc2VsZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vd2lkZ2V0X3NlbGVjdGlvbmNvbnRhaW5lcic7XG5leHBvcnQgKiBmcm9tICcuL3dpZGdldF9zdHJpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi93aWRnZXRfdXBsb2FkJztcbmV4cG9ydCB2YXIgdmVyc2lvbiA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLnZlcnNpb247XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcgfSBmcm9tICcuL3dpZGdldF9kZXNjcmlwdGlvbic7XG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVfZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB5ZWFyOiB2YWx1ZS5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgbW9udGg6IHZhbHVlLmdldFVUQ01vbnRoKCksXG4gICAgICAgICAgICBkYXRlOiB2YWx1ZS5nZXRVVENEYXRlKClcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZGVzZXJpYWxpemVfZGF0ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZS55ZWFyLCB2YWx1ZS5tb250aCwgdmFsdWUuZGF0ZSk7XG4gICAgICAgIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkYXRlO1xuICAgIH1cbn1cbnZhciBEYXRlUGlja2VyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGVQaWNrZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEYXRlUGlja2VyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRGF0ZVBpY2tlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0RhdGVQaWNrZXJNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRGF0ZVBpY2tlclZpZXcnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRGF0ZVBpY2tlck1vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVEZXNjcmlwdGlvbk1vZGVsLnNlcmlhbGl6ZXJzLCB7IHZhbHVlOiB7XG4gICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZV9kYXRlLFxuICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplX2RhdGVcbiAgICAgICAgfSB9KTtcbiAgICByZXR1cm4gRGF0ZVBpY2tlck1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgRGF0ZVBpY2tlck1vZGVsIH07XG52YXIgRGF0ZVBpY2tlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERhdGVQaWNrZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERhdGVQaWNrZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWRhdGVwaWNrZXInKTtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlci5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLl9kYXRlcGlja2VyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnZhbHVlJywgdGhpcy5fdXBkYXRlX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlX3ZhbHVlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFR5cGVzY3JpcHQgZG9lc24ndCB1bmRlcnN0YW5kIHRoYXQgdGhlc2UgZnVuY3Rpb25zIGFyZSBjYWxsZWQsIHNvIHdlXG4gICAgICAgIC8vIHNwZWNpZmljYWxseSB1c2UgdGhlbSBoZXJlIHNvIGl0IGtub3dzIHRoZXkgYXJlIGJlaW5nIHVzZWQuXG4gICAgICAgIHZvaWQgdGhpcy5fcGlja2VyX2NoYW5nZTtcbiAgICAgICAgdm9pZCB0aGlzLl9waWNrZXJfZm9jdXNvdXQ7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2hhbmdlIFt0eXBlPVwiZGF0ZVwiXSc6ICdfcGlja2VyX2NoYW5nZScsXG4gICAgICAgICAgICAnZm9jdXNvdXQgW3R5cGU9XCJkYXRlXCJdJzogJ19waWNrZXJfZm9jdXNvdXQnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBEYXRlUGlja2VyVmlldy5wcm90b3R5cGUuX3VwZGF0ZV92YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXIudmFsdWVBc0RhdGUgPSB2YWx1ZTtcbiAgICB9O1xuICAgIERhdGVQaWNrZXJWaWV3LnByb3RvdHlwZS5fcGlja2VyX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyLnZhbGlkaXR5LmJhZElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB0aGlzLl9kYXRlcGlja2VyLnZhbHVlQXNEYXRlKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgRGF0ZVBpY2tlclZpZXcucHJvdG90eXBlLl9waWNrZXJfZm9jdXNvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLnZhbGlkaXR5LmJhZElucHV0KSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCBudWxsKTtcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIERhdGVQaWNrZXJWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IERhdGVQaWNrZXJWaWV3IH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBDb3JlRGVzY3JpcHRpb25Nb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgRGVzY3JpcHRpb25WaWV3IH0gZnJvbSAnLi93aWRnZXRfZGVzY3JpcHRpb24nO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbi8qKlxuICogQ2xhc3MgbmFtZSBmb3IgYSBjb21ib2JveCB3aXRoIGFuIGludmxpZCB2YWx1ZS5cbiAqL1xudmFyIElOVkFMSURfVkFMVUVfQ0xBU1MgPSAnanB3aWRnZXRzLWludmFsaWRDb21ib1ZhbHVlJztcbnZhciBTdHJpbmdNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RyaW5nTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3RyaW5nTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU3RyaW5nTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1xcdTIwMGInLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdTdHJpbmdNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU3RyaW5nTW9kZWw7XG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBTdHJpbmdNb2RlbCB9O1xudmFyIEhUTUxNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSFRNTE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhUTUxNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIVE1MTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSFRNTFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdIVE1MTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEhUTUxNb2RlbDtcbn0oU3RyaW5nTW9kZWwpKTtcbmV4cG9ydCB7IEhUTUxNb2RlbCB9O1xudmFyIEhUTUxWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhIVE1MVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVE1MVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIEhUTUxWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWh0bWwnKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbC1jb250ZW50Jyk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBIVE1MVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEhUTUxWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IEhUTUxWaWV3IH07XG52YXIgSFRNTE1hdGhNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSFRNTE1hdGhNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVE1MTWF0aE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEhUTUxNYXRoTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSFRNTE1hdGhWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnSFRNTE1hdGhNb2RlbCdcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gSFRNTE1hdGhNb2RlbDtcbn0oU3RyaW5nTW9kZWwpKTtcbmV4cG9ydCB7IEhUTUxNYXRoTW9kZWwgfTtcbnZhciBIVE1MTWF0aFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhUTUxNYXRoVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBIVE1MTWF0aFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBIVE1MTWF0aFZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbG1hdGgnKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHRtbG1hdGgtY29udGVudCcpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICovXG4gICAgSFRNTE1hdGhWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgdGhpcy50eXBlc2V0KHRoaXMuY29udGVudCk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgcmV0dXJuIEhUTUxNYXRoVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBIVE1MTWF0aFZpZXcgfTtcbnZhciBMYWJlbE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhMYWJlbE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhYmVsTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTGFiZWxNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdMYWJlbFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdMYWJlbE1vZGVsJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBMYWJlbE1vZGVsO1xufShTdHJpbmdNb2RlbCkpO1xuZXhwb3J0IHsgTGFiZWxNb2RlbCB9O1xudmFyIExhYmVsVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTGFiZWxWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIExhYmVsVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIExhYmVsVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1sYWJlbCcpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIExhYmVsVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnR5cGVzZXQodGhpcy5lbCwgdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBMYWJlbFZpZXc7XG59KERlc2NyaXB0aW9uVmlldykpO1xuZXhwb3J0IHsgTGFiZWxWaWV3IH07XG52YXIgVGV4dGFyZWFNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dGFyZWFNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0YXJlYU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRleHRhcmVhTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVGV4dGFyZWFWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVGV4dGFyZWFNb2RlbCcsXG4gICAgICAgICAgICByb3dzOiBudWxsLFxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRleHRhcmVhTW9kZWw7XG59KFN0cmluZ01vZGVsKSk7XG5leHBvcnQgeyBUZXh0YXJlYU1vZGVsIH07XG52YXIgVGV4dGFyZWFWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUZXh0YXJlYVZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dGFyZWFWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVGV4dGFyZWFWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXRleHRhcmVhJyk7XG4gICAgICAgIHRoaXMudGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNScpO1xuICAgICAgICB0aGlzLnRleHRib3guaWQgPSB0aGlzLmxhYmVsLmh0bWxGb3IgPSB1dWlkKCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy50ZXh0Ym94KTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6cGxhY2Vob2xkZXInLCBmdW5jdGlvbiAobW9kZWwsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVfcGxhY2Vob2xkZXIodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy51cGRhdGVfcGxhY2Vob2xkZXIoKTtcbiAgICB9O1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUudXBkYXRlX3BsYWNlaG9sZGVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgfHwgdGhpcy5tb2RlbC5nZXQoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPSB0aGlzKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIHZhciByb3dzID0gdGhpcy5tb2RlbC5nZXQoJ3Jvd3MnKTtcbiAgICAgICAgICAgIGlmIChyb3dzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcm93cyA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LnNldEF0dHJpYnV0ZSgncm93cycsIHJvd3MpO1xuICAgICAgICAgICAgdGhpcy50ZXh0Ym94LmRpc2FibGVkID0gdGhpcy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBUZXh0YXJlYVZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdrZXlkb3duIGlucHV0JzogJ2hhbmRsZUtleURvd24nLFxuICAgICAgICAgICAgJ2tleXByZXNzIGlucHV0JzogJ2hhbmRsZUtleXByZXNzJyxcbiAgICAgICAgICAgICdpbnB1dCB0ZXh0YXJlYSc6ICdoYW5kbGVDaGFuZ2luZycsXG4gICAgICAgICAgICAnY2hhbmdlIHRleHRhcmVhJzogJ2hhbmRsZUNoYW5nZWQnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IGRvd25cbiAgICAgKlxuICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gdGhlIGV2ZW50IGlzbid0IHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGtleSBwcmVzc1xuICAgICAqXG4gICAgICogU3RvcCBwcm9wYWdhdGlvbiBzbyB0aGUga2V5cHJlc3MgaXNuJ3Qgc2VudCB0byB0aGUgYXBwbGljYXRpb24uXG4gICAgICovXG4gICAgVGV4dGFyZWFWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgb24gaW5wdXQgY2hhbmdlXG4gICAgICovXG4gICAgVGV4dGFyZWFWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2luZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VkKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTeW5jIHRoZSB2YWx1ZSB3aXRoIHRoZSBrZXJuZWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSBFdmVudFxuICAgICAqL1xuICAgIFRleHRhcmVhVmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdlZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdGFyZ2V0LnZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRleHRhcmVhVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBUZXh0YXJlYVZpZXcgfTtcbnZhciBUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRleHRNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBUZXh0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1RleHRWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVGV4dE1vZGVsJyxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBUZXh0TW9kZWw7XG59KFN0cmluZ01vZGVsKSk7XG5leHBvcnQgeyBUZXh0TW9kZWwgfTtcbnZhciBUZXh0VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVGV4dFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVGV4dFZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pbnB1dFR5cGUgPSAndGV4dCc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBUZXh0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC10ZXh0Jyk7XG4gICAgICAgIHRoaXMudGV4dGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRoaXMudGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCB0aGlzLmlucHV0VHlwZSk7XG4gICAgICAgIHRoaXMudGV4dGJveC5pZCA9IHRoaXMubGFiZWwuaHRtbEZvciA9IHV1aWQoKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnRleHRib3gpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpwbGFjZWhvbGRlcicsIGZ1bmN0aW9uIChtb2RlbCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZV9wbGFjZWhvbGRlcih2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6ZGVzY3JpcHRpb25fdG9vbHRpcCcsIHRoaXMudXBkYXRlX3RpdGxlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmRlc2NyaXB0aW9uJywgdGhpcy51cGRhdGVfdGl0bGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9wbGFjZWhvbGRlcigpO1xuICAgICAgICB0aGlzLnVwZGF0ZV90aXRsZSgpO1xuICAgIH07XG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZV9wbGFjZWhvbGRlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHZhbHVlIHx8IHRoaXMubW9kZWwuZ2V0KCdwbGFjZWhvbGRlcicpKTtcbiAgICB9O1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS51cGRhdGVfdGl0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMubW9kZWwuZ2V0KCdkZXNjcmlwdGlvbl90b29sdGlwJyk7XG4gICAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5tb2RlbC5nZXQoJ2Rlc2NyaXB0aW9uJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCd0aXRsZScsIHRpdGxlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVGV4dFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAgICAgKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dGJveC52YWx1ZSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGV4dGJveC5kaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgVGV4dFZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdrZXlkb3duIGlucHV0JzogJ2hhbmRsZUtleURvd24nLFxuICAgICAgICAgICAgJ2tleXByZXNzIGlucHV0JzogJ2hhbmRsZUtleXByZXNzJyxcbiAgICAgICAgICAgICdpbnB1dCBpbnB1dCc6ICdoYW5kbGVDaGFuZ2luZycsXG4gICAgICAgICAgICAnY2hhbmdlIGlucHV0JzogJ2hhbmRsZUNoYW5nZWQnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUga2V5IGRvd25cbiAgICAgKlxuICAgICAqIFN0b3AgcHJvcGFnYXRpb24gc28gdGhlIGtleXByZXNzIGlzbid0IHNlbnQgdG8gdGhlIGFwcGxpY2F0aW9uLlxuICAgICAqL1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGV4dCBzdWJtaXNzaW9uXG4gICAgICovXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleXByZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgLy8gVGhlIHN1Ym1pdCBtZXNzYWdlIGlzIGRlcHJlY2F0ZWQgaW4gd2lkZ2V0cyA3XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIFJldHVybiBrZXlcbiAgICAgICAgICAgIHRoaXMuc2VuZCh7IGV2ZW50OiAnc3VibWl0JyB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB1c2VyIGlucHV0LlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2luZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VkKGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHVzZXIgaW5wdXQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgVGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHRhcmdldC52YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBUZXh0Vmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBUZXh0VmlldyB9O1xudmFyIFBhc3N3b3JkTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFBhc3N3b3JkTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUGFzc3dvcmRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBQYXNzd29yZE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1Bhc3N3b3JkVmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ1Bhc3N3b3JkTW9kZWwnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFBhc3N3b3JkTW9kZWw7XG59KFRleHRNb2RlbCkpO1xuZXhwb3J0IHsgUGFzc3dvcmRNb2RlbCB9O1xudmFyIFBhc3N3b3JkVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUGFzc3dvcmRWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFBhc3N3b3JkVmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlucHV0VHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIFBhc3N3b3JkVmlldztcbn0oVGV4dFZpZXcpKTtcbmV4cG9ydCB7IFBhc3N3b3JkVmlldyB9O1xuLyoqXG4gKiBDb21ib2JveCB3aWRnZXQgbW9kZWwgY2xhc3MuXG4gKi9cbnZhciBDb21ib2JveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb21ib2JveE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbWJvYm94TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQ29tYm9ib3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnQ29tYm9ib3hNb2RlbCcsIF92aWV3X25hbWU6ICdDb21ib2JveFZpZXcnLCBvcHRpb25zOiBbXSwgZW5zdXJlX29wdGlvbnM6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbWJvYm94TW9kZWw7XG59KFRleHRNb2RlbCkpO1xuZXhwb3J0IHsgQ29tYm9ib3hNb2RlbCB9O1xuLyoqXG4gKiBDb21ib2JveCB3aWRnZXQgdmlldyBjbGFzcy5cbiAqL1xudmFyIENvbWJvYm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29tYm9ib3hWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENvbWJvYm94VmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzSW5pdGlhbFJlbmRlciA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGF0YWxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkYXRhbGlzdCcpO1xuICAgICAgICB0aGlzLmRhdGFsaXN0LmlkID0gdXVpZCgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnRleHRib3guc2V0QXR0cmlidXRlKCdsaXN0JywgdGhpcy5kYXRhbGlzdC5pZCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5kYXRhbGlzdCk7XG4gICAgfTtcbiAgICBDb21ib2JveFZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIGlmICghdGhpcy5kYXRhbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuaXNWYWxpZCh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0VmFsaWRTdGF0ZSh2YWxpZCk7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIG5lZWQgdG8gdXBkYXRlIG9wdGlvbnNcbiAgICAgICAgaWYgKChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy51cGRhdGVkX3ZpZXcpIHx8ICghdGhpcy5tb2RlbC5oYXNDaGFuZ2VkKCdvcHRpb25zJykgJiZcbiAgICAgICAgICAgICF0aGlzLmlzSW5pdGlhbFJlbmRlcikpIHtcbiAgICAgICAgICAgIC8vIFZhbHVlIHVwZGF0ZSBvbmx5LCBrZWVwIGN1cnJlbnQgb3B0aW9uc1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNJbml0aWFsUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHZhciBvcHRzID0gdGhpcy5tb2RlbC5nZXQoJ29wdGlvbnMnKTtcbiAgICAgICAgdmFyIG9wdExpbmVzID0gb3B0cy5tYXAoZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxvcHRpb24gdmFsdWU9XFxcIlwiICsgbyArIFwiXFxcIj48L29wdGlvbj5cIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZGF0YWxpc3QuaW5uZXJIVE1MID0gb3B0TGluZXMuam9pbignXFxuJyk7XG4gICAgfTtcbiAgICBDb21ib2JveFZpZXcucHJvdG90eXBlLmlzVmFsaWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHRydWUgPT09IHRoaXMubW9kZWwuZ2V0KCdlbnN1cmVfb3B0aW9uJykpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGhpcy5tb2RlbC5nZXQoJ29wdGlvbnMnKTtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIENvbWJvYm94Vmlldy5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBPdmVycmlkZSB0byB2YWxpZGF0ZSB2YWx1ZVxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciB2YWxpZCA9IHRoaXMuaXNWYWxpZCh0YXJnZXQudmFsdWUpO1xuICAgICAgICB0aGlzLmhpZ2hsaWdodFZhbGlkU3RhdGUodmFsaWQpO1xuICAgICAgICBpZiAodmFsaWQpIHtcbiAgICAgICAgICAgIF9zdXBlci5wcm90b3R5cGUuaGFuZGxlQ2hhbmdpbmcuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5oYW5kbGVDaGFuZ2VkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgdG8gdmFsaWRhdGUgdmFsdWVcbiAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICB2YXIgdmFsaWQgPSB0aGlzLmlzVmFsaWQodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRWYWxpZFN0YXRlKHZhbGlkKTtcbiAgICAgICAgaWYgKHZhbGlkKSB7XG4gICAgICAgICAgICBfc3VwZXIucHJvdG90eXBlLmhhbmRsZUNoYW5nZWQuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29tYm9ib3hWaWV3LnByb3RvdHlwZS5oaWdobGlnaHRWYWxpZFN0YXRlID0gZnVuY3Rpb24gKHZhbGlkKSB7XG4gICAgICAgIHRoaXMudGV4dGJveC5jbGFzc0xpc3QudG9nZ2xlKElOVkFMSURfVkFMVUVfQ0xBU1MsICF2YWxpZCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ29tYm9ib3hWaWV3O1xufShUZXh0VmlldykpO1xuZXhwb3J0IHsgQ29tYm9ib3hWaWV3IH07XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICd1bmRlcnNjb3JlJztcbnZhciBWaWRlb01vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWRlb01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZpZGVvTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVmlkZW9Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVmlkZW9Nb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVmlkZW9WaWV3JyxcbiAgICAgICAgICAgIGZvcm1hdDogJ21wNCcsXG4gICAgICAgICAgICB3aWR0aDogJycsXG4gICAgICAgICAgICBoZWlnaHQ6ICcnLFxuICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogbmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigwKSlcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBWaWRlb01vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVET01XaWRnZXRNb2RlbC5zZXJpYWxpemVycywgeyB2YWx1ZTogeyBzZXJpYWxpemU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcodmFsdWUuYnVmZmVyLnNsaWNlKDApKTtcbiAgICAgICAgICAgIH0gfSB9KTtcbiAgICByZXR1cm4gVmlkZW9Nb2RlbDtcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBWaWRlb01vZGVsIH07XG52YXIgVmlkZW9WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWaWRlb1ZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmlkZW9WaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFZpZGVvVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgICAgICovXG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWltYWdlJyk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7IC8vIFNldCBkZWZhdWx0cy5cbiAgICB9O1xuICAgIFZpZGVvVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgICAgICpcbiAgICAgICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciB1cmw7XG4gICAgICAgIHZhciBmb3JtYXQgPSB0aGlzLm1vZGVsLmdldCgnZm9ybWF0Jyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICBpZiAoZm9ybWF0ICE9PSAndXJsJykge1xuICAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbdmFsdWVdLCB7IHR5cGU6IFwidmlkZW8vXCIgKyB0aGlzLm1vZGVsLmdldCgnZm9ybWF0JykgfSk7XG4gICAgICAgICAgICB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gKG5ldyBUZXh0RGVjb2RlcigndXRmLTgnKSkuZGVjb2RlKHZhbHVlLmJ1ZmZlcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2xlYW4gdXAgdGhlIG9sZCBvYmplY3RVUkxcbiAgICAgICAgdmFyIG9sZHVybCA9IHRoaXMuZWwuc3JjO1xuICAgICAgICB0aGlzLmVsLnNyYyA9IHVybDtcbiAgICAgICAgaWYgKG9sZHVybCAmJiB0eXBlb2Ygb2xkdXJsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChvbGR1cmwpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhlaWdodCBhbmQgd2lkdGhcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5tb2RlbC5nZXQoJ3dpZHRoJyk7XG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkICYmIHdpZHRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLm1vZGVsLmdldCgnaGVpZ2h0Jyk7XG4gICAgICAgIGlmIChoZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBoZWlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVmlkZW8gYXR0cmlidXRlc1xuICAgICAgICB0aGlzLmVsLmxvb3AgPSB0aGlzLm1vZGVsLmdldCgnbG9vcCcpO1xuICAgICAgICB0aGlzLmVsLmF1dG9wbGF5ID0gdGhpcy5tb2RlbC5nZXQoJ2F1dG9wbGF5Jyk7XG4gICAgICAgIHRoaXMuZWwuY29udHJvbHMgPSB0aGlzLm1vZGVsLmdldCgnY29udHJvbHMnKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBWaWRlb1ZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwuc3JjKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZWwuc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZpZGVvVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgcmV0dXJuICd2aWRlbyc7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBWaWRlb1ZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IFZpZGVvVmlldyB9O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgeyBEZXNjcmlwdGlvblZpZXcsIERlc2NyaXB0aW9uU3R5bGVNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG52YXIgU2VsZWN0aW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFNlbGVjdGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdTZWxlY3Rpb25Nb2RlbCcsIGluZGV4OiAnJywgX29wdGlvbnNfbGFiZWxzOiBbXSwgZGlzYWJsZWQ6IGZhbHNlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdGlvbk1vZGVsO1xufShDb3JlRGVzY3JpcHRpb25Nb2RlbCkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uTW9kZWwgfTtcbnZhciBEcm9wZG93bk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEcm9wZG93bk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERyb3Bkb3duTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRHJvcGRvd25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnRHJvcGRvd25Nb2RlbCcsIF92aWV3X25hbWU6ICdEcm9wZG93blZpZXcnLCBidXR0b25fc3R5bGU6ICcnIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIERyb3Bkb3duTW9kZWw7XG59KFNlbGVjdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBEcm9wZG93bk1vZGVsIH07XG4vLyBUT0RPOiBNYWtlIGEgcGhvc3Bob3IgZHJvcGRvd24gY29udHJvbCwgd3JhcHBlZCBpbiBEcm9wZG93blZpZXcuIEFsc28sIGZpeFxuLy8gYnVncyBpbiBrZXlib2FyZCBoYW5kbGluZy4gU2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanVweXRlci13aWRnZXRzL2lweXdpZGdldHMvaXNzdWVzLzEwNTUgYW5kXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanVweXRlci13aWRnZXRzL2lweXdpZGdldHMvaXNzdWVzLzEwNDlcbi8vIEZvciBub3csIHdlIHN1YmNsYXNzIFNlbGVjdFZpZXcgdG8gcHJvdmlkZSBEcm9wZG93blZpZXdcbi8vIEZvciB0aGUgb2xkIGNvZGUsIHNlZSBjb21taXQgZjY4YmZiYzU2NmYzYTc4YThmMzM1MGI0MzhkYjhlZDUyM2NlMzY0MlxudmFyIERyb3Bkb3duVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRHJvcGRvd25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERyb3Bkb3duVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpfb3B0aW9uc19sYWJlbHMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5fdXBkYXRlT3B0aW9ucygpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgRHJvcGRvd25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWRyb3Bkb3duJyk7XG4gICAgICAgIHRoaXMubGlzdGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICB0aGlzLmxpc3Rib3guaWQgPSB0aGlzLmxhYmVsLmh0bWxGb3IgPSB1dWlkKCk7XG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5saXN0Ym94KTtcbiAgICAgICAgdGhpcy5fdXBkYXRlT3B0aW9ucygpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKi9cbiAgICBEcm9wZG93blZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGlzYWJsZSBsaXN0Ym94IGlmIG5lZWRlZFxuICAgICAgICB0aGlzLmxpc3Rib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgLy8gU2VsZWN0IHRoZSBjb3JyZWN0IGVsZW1lbnRcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ2luZGV4Jyk7XG4gICAgICAgIHRoaXMubGlzdGJveC5zZWxlY3RlZEluZGV4ID0gaW5kZXggPT09IG51bGwgPyAtMSA6IGluZGV4O1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUuX3VwZGF0ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdGJveC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gaXRlbXNbaV07XG4gICAgICAgICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLnJlcGxhY2UoLyAvZywgJ1xceGEwJyk7IC8vIHNwYWNlIC0+ICZuYnNwO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGVuY29kZVVSSUNvbXBvbmVudChpdGVtKSk7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgdGhpcy5saXN0Ym94LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIERyb3Bkb3duVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NoYW5nZSBzZWxlY3QnOiAnX2hhbmRsZV9jaGFuZ2UnXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgd2hlbiBhIG5ldyB2YWx1ZSBpcyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBEcm9wZG93blZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCA9PT0gLTEgPyBudWxsIDogdGhpcy5saXN0Ym94LnNlbGVjdGVkSW5kZXgpO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gRHJvcGRvd25WaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IERyb3Bkb3duVmlldyB9O1xudmFyIFNlbGVjdE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3RNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3RNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3RNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0TW9kZWwnLCBfdmlld19uYW1lOiAnU2VsZWN0VmlldycsIHJvd3M6IDUgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0TW9kZWw7XG59KFNlbGVjdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBTZWxlY3RNb2RlbCB9O1xudmFyIFNlbGVjdFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X29wdGlvbnNfbGFiZWxzJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuX3VwZGF0ZU9wdGlvbnMoKTsgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTppbmRleCcsIGZ1bmN0aW9uIChtb2RlbCwgdmFsdWUsIG9wdGlvbnMpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZVNlbGVjdGlvbihvcHRpb25zKTsgfSk7XG4gICAgICAgIC8vIENyZWF0ZSBsaXN0Ym94IGhlcmUgc28gdGhhdCBzdWJjbGFzc2VzIGNhbiBtb2RpZnkgaXQgYmVmb3JlIGl0IGlzIHBvcHVsYXRlZCBpbiByZW5kZXIoKVxuICAgICAgICB0aGlzLmxpc3Rib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1zZWxlY3QnKTtcbiAgICAgICAgdGhpcy5saXN0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMubGlzdGJveCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9wdGlvbnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3Rpb24oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICovXG4gICAgU2VsZWN0Vmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3Rib3guZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgdmFyIHJvd3MgPSB0aGlzLm1vZGVsLmdldCgncm93cycpO1xuICAgICAgICBpZiAocm93cyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcm93cyA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGJveC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCByb3dzKTtcbiAgICB9O1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIGlmIChvcHRpb25zLnVwZGF0ZWRfdmlldyA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpO1xuICAgICAgICB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCA9IGluZGV4ID09PSBudWxsID8gLTEgOiBpbmRleDtcbiAgICB9O1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLl91cGRhdGVPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3Rib3gudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbS5yZXBsYWNlKC8gL2csICdcXHhhMCcpOyAvLyBzcGFjZSAtPiAmbmJzcDtcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbmNvZGVVUklDb21wb25lbnQoaXRlbSkpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gaXRlbTtcbiAgICAgICAgICAgIHRoaXMubGlzdGJveC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTZWxlY3RWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnY2hhbmdlIHNlbGVjdCc6ICdfaGFuZGxlX2NoYW5nZSdcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIFNlbGVjdFZpZXcucHJvdG90eXBlLl9oYW5kbGVfY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3RWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IFNlbGVjdFZpZXcgfTtcbnZhciBSYWRpb0J1dHRvbnNNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmFkaW9CdXR0b25zTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUmFkaW9CdXR0b25zTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgUmFkaW9CdXR0b25zTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1JhZGlvQnV0dG9uc01vZGVsJywgX3ZpZXdfbmFtZTogJ1JhZGlvQnV0dG9uc1ZpZXcnLCB0b29sdGlwczogW10sIGljb25zOiBbXSwgYnV0dG9uX3N0eWxlOiAnJyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSYWRpb0J1dHRvbnNNb2RlbDtcbn0oU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFJhZGlvQnV0dG9uc01vZGVsIH07XG52YXIgUmFkaW9CdXR0b25zVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUmFkaW9CdXR0b25zVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBSYWRpb0J1dHRvbnNWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgUmFkaW9CdXR0b25zVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1yYWRpbycpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJhZGlvLWJveCcpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICB2YXIgdmlldyA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMubW9kZWwuZ2V0KCdfb3B0aW9uc19sYWJlbHMnKTtcbiAgICAgICAgdmFyIHJhZGlvcyA9IF8ucGx1Y2sodGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyksICd2YWx1ZScpO1xuICAgICAgICB2YXIgc3RhbGUgPSBpdGVtcy5sZW5ndGggIT0gcmFkaW9zLmxlbmd0aDtcbiAgICAgICAgaWYgKCFzdGFsZSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhZGlvc1tpXSAhPT0gaXRlbXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhbGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YWxlICYmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpKSB7XG4gICAgICAgICAgICAvLyBBZGQgaXRlbXMgdG8gdGhlIERPTS5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgICAgIHZpZXcuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgICAgICAgICB2YXIgcmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHJhZGlvLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgICAgICAgICAgICAgIHJhZGlvLnZhbHVlID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbmNvZGVVUklDb21wb25lbnQoaXRlbSkpO1xuICAgICAgICAgICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKHJhZGlvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaXRlbV9xdWVyeSA9ICdpbnB1dFtkYXRhLXZhbHVlPVwiJyArXG4gICAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pICsgJ1wiXSc7XG4gICAgICAgICAgICB2YXIgcmFkaW8gPSB2aWV3LmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGl0ZW1fcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJhZGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcmFkaW9fZWwgPSByYWRpb1swXTtcbiAgICAgICAgICAgICAgICByYWRpb19lbC5jaGVja2VkID0gdmlldy5tb2RlbC5nZXQoJ2luZGV4JykgPT09IGluZGV4O1xuICAgICAgICAgICAgICAgIHJhZGlvX2VsLmRpc2FibGVkID0gdmlldy5tb2RlbC5nZXQoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBTY2hlZHVsZSBhZGp1c3RQYWRkaW5nIGFzeW5jaHJvbm91c2x5IHRvXG4gICAgICAgIC8vIGFsbG93IGRvbSBlbGVtZW50cyB0byBiZSBjcmVhdGVkIHByb3Blcmx5XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5hZGp1c3RQYWRkaW5nLCAwLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBBZGp1c3QgUGFkZGluZyB0byBNdWx0aXBsZSBvZiBMaW5lIEhlaWdodFxuICAgICAqXG4gICAgICogQWRqdXN0IG1hcmdpbnMgc28gdGhhdCB0aGUgb3ZlcmFsbCBoZWlnaHRcbiAgICAgKiBpcyBhIG11bHRpcGxlIG9mIGEgc2luZ2xlIGxpbmUgaGVpZ2h0LlxuICAgICAqXG4gICAgICogVGhpcyB3aWRnZXQgbmVlZHMgaXQgYmVjYXVzZSByYWRpbyBvcHRpb25zXG4gICAgICogYXJlIHNwYWNlZCB0aWdodGVyIHRoYW4gaW5kaXZpZHVhbCB3aWRnZXRzXG4gICAgICogeWV0IHdlIHdvdWxkIGxpa2UgdGhlIGZ1bGwgd2lkZ2V0IGxpbmUgdXAgcHJvcGVybHlcbiAgICAgKiB3aGVuIGRpc3BsYXllZCBzaWRlLWJ5LXNpZGUgd2l0aCBvdGhlciB3aWRnZXRzLlxuICAgICAqL1xuICAgIFJhZGlvQnV0dG9uc1ZpZXcucHJvdG90eXBlLmFkanVzdFBhZGRpbmcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBWZXJ0aWNhbCBtYXJnaW5zIG9uIGEgd2lkZ2V0XG4gICAgICAgIHZhciBlbFN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGUuZWwpO1xuICAgICAgICB2YXIgbWFyZ2lucyA9IHBhcnNlSW50KGVsU3R5bGVzLm1hcmdpblRvcCwgMTApICsgcGFyc2VJbnQoZWxTdHlsZXMubWFyZ2luQm90dG9tLCAxMCk7XG4gICAgICAgIC8vIFRvdGFsIHNwYWNlcyB0YWtlbiBieSBhIHNpbmdsZS1saW5lIHdpZGdldFxuICAgICAgICB2YXIgbGluZUhlaWdodCA9IGUubGFiZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2lucztcbiAgICAgICAgLy8gQ3VycmVudCBhZGp1c3RtZW50IHZhbHVlIG9uIHRoaXMgd2lkZ2V0XG4gICAgICAgIHZhciBjU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZS5jb250YWluZXIpO1xuICAgICAgICB2YXIgY29udGFpbmVyTWFyZ2luID0gcGFyc2VJbnQoY1N0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICAgICAgICAvLyBIb3cgZmFyIHdlIGFyZSBvZmYgZnJvbSBhIG11bHRpcGxlIG9mIHNpbmdsZSB3aW5kZ2V0IGxpbmVzXG4gICAgICAgIHZhciBkaWZmID0gKGUuZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2lucyAtIGNvbnRhaW5lck1hcmdpbikgJSBsaW5lSGVpZ2h0O1xuICAgICAgICAvLyBBcHBseSB0aGUgbmV3IGFkanVzdG1lbnRcbiAgICAgICAgdmFyIGV4dHJhTWFyZ2luID0gZGlmZiA9PSAwID8gMCA6IChsaW5lSGVpZ2h0IC0gZGlmZik7XG4gICAgICAgIGUuY29udGFpbmVyLnN0eWxlLm1hcmdpbkJvdHRvbSA9IGV4dHJhTWFyZ2luICsgJ3B4JztcbiAgICB9O1xuICAgIFJhZGlvQnV0dG9uc1ZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdjbGljayBpbnB1dFt0eXBlPVwicmFkaW9cIl0nOiAnX2hhbmRsZV9jbGljaydcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aGVuIGEgdmFsdWUgaXMgY2xpY2tlZC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBSYWRpb0J1dHRvbnNWaWV3LnByb3RvdHlwZS5faGFuZGxlX2NsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHBhcnNlSW50KHRhcmdldC52YWx1ZSksIHsgdXBkYXRlZF92aWV3OiB0aGlzIH0pO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICByZXR1cm4gUmFkaW9CdXR0b25zVmlldztcbn0oRGVzY3JpcHRpb25WaWV3KSk7XG5leHBvcnQgeyBSYWRpb0J1dHRvbnNWaWV3IH07XG52YXIgVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRvZ2dsZUJ1dHRvbnNTdHlsZU1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCcsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uc1N0eWxlTW9kZWwuc3R5bGVQcm9wZXJ0aWVzID0gX19hc3NpZ24oe30sIERlc2NyaXB0aW9uU3R5bGVNb2RlbC5zdHlsZVByb3BlcnRpZXMsIHsgYnV0dG9uX3dpZHRoOiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53aWRnZXQtdG9nZ2xlLWJ1dHRvbicsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICd3aWR0aCcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgIH0sIGZvbnRfd2VpZ2h0OiB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJy53aWRnZXQtdG9nZ2xlLWJ1dHRvbicsXG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdmb250LXdlaWdodCcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9IH0pO1xuICAgIHJldHVybiBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbDtcbn0oRGVzY3JpcHRpb25TdHlsZU1vZGVsKSk7XG5leHBvcnQgeyBUb2dnbGVCdXR0b25zU3R5bGVNb2RlbCB9O1xudmFyIFRvZ2dsZUJ1dHRvbnNNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVG9nZ2xlQnV0dG9uc01vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbnNNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBUb2dnbGVCdXR0b25zTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hc3NpZ24oe30sIF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwgeyBfbW9kZWxfbmFtZTogJ1RvZ2dsZUJ1dHRvbnNNb2RlbCcsIF92aWV3X25hbWU6ICdUb2dnbGVCdXR0b25zVmlldycgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVG9nZ2xlQnV0dG9uc01vZGVsO1xufShTZWxlY3Rpb25Nb2RlbCkpO1xuZXhwb3J0IHsgVG9nZ2xlQnV0dG9uc01vZGVsIH07XG52YXIgVG9nZ2xlQnV0dG9uc1ZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRvZ2dsZUJ1dHRvbnNWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRvZ2dsZUJ1dHRvbnNWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fY3NzX3N0YXRlID0ge307XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6YnV0dG9uX3N0eWxlJywgdGhpcy51cGRhdGVfYnV0dG9uX3N0eWxlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaW5saW5lLWhib3gnKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtdG9nZ2xlLWJ1dHRvbnMnKTtcbiAgICAgICAgdGhpcy5idXR0b25ncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYnV0dG9uZ3JvdXApO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgICB0aGlzLnNldF9idXR0b25fc3R5bGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICpcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICovXG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciB2aWV3ID0gdGhpcztcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpO1xuICAgICAgICB2YXIgaWNvbnMgPSB0aGlzLm1vZGVsLmdldCgnaWNvbnMnKSB8fCBbXTtcbiAgICAgICAgdmFyIHByZXZpb3VzX2ljb25zID0gdGhpcy5tb2RlbC5wcmV2aW91cygnaWNvbnMnKSB8fCBbXTtcbiAgICAgICAgdmFyIHByZXZpb3VzX2JzdHlsZSA9IFRvZ2dsZUJ1dHRvbnNWaWV3LmNsYXNzTWFwW3RoaXMubW9kZWwucHJldmlvdXMoJ2J1dHRvbl9zdHlsZScpXSB8fCAnJztcbiAgICAgICAgdmFyIHRvb2x0aXBzID0gdmlldy5tb2RlbC5nZXQoJ3Rvb2x0aXBzJykgfHwgW107XG4gICAgICAgIHZhciBkaXNhYmxlZCA9IHRoaXMubW9kZWwuZ2V0KCdkaXNhYmxlZCcpO1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBfLnBsdWNrKGJ1dHRvbnMsICd2YWx1ZScpO1xuICAgICAgICB2YXIgc3RhbGUgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzW2ldICE9PSBpdGVtc1tpXSB8fCBpY29uc1tpXSAhPT0gcHJldmlvdXNfaWNvbnNbaV0pIHtcbiAgICAgICAgICAgICAgICBzdGFsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YWxlICYmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpKSB7XG4gICAgICAgICAgICAvLyBBZGQgaXRlbXMgdG8gdGhlIERPTS5cbiAgICAgICAgICAgIHRoaXMuYnV0dG9uZ3JvdXAudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1faHRtbDtcbiAgICAgICAgICAgICAgICB2YXIgZW1wdHkgPSBpdGVtLnRyaW0oKS5sZW5ndGggPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFpY29uc1tpbmRleF0gfHwgaWNvbnNbaW5kZXhdLnRyaW0oKS5sZW5ndGggPT09IDApO1xuICAgICAgICAgICAgICAgIGlmIChlbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtX2h0bWwgPSAnJm5ic3A7JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1faHRtbCA9IHV0aWxzLmVzY2FwZV9odG1sKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGljb25zW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uLmNsYXNzTmFtZSA9ICdmYSBmYS0nICsgaWNvbnNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAnd2lkZ2V0LXRvZ2dsZS1idXR0b24ganVweXRlci1idXR0b24nO1xuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91c19ic3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQocHJldmlvdXNfYnN0eWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW1faHRtbDtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgZW5jb2RlVVJJQ29tcG9uZW50KGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgICAgICBpZiAodG9vbHRpcHNbaW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdG9vbHRpcHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmlldy51cGRhdGVfc3R5bGVfdHJhaXRzKGJ1dHRvbik7XG4gICAgICAgICAgICAgICAgdmlldy5idXR0b25ncm91cC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2VsZWN0IGFjdGl2ZSBidXR0b24uXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgaXRlbV9xdWVyeSA9ICdbZGF0YS12YWx1ZT1cIicgKyBlbmNvZGVVUklDb21wb25lbnQoaXRlbSkgKyAnXCJdJztcbiAgICAgICAgICAgIHZhciBidXR0b24gPSB2aWV3LmJ1dHRvbmdyb3VwLnF1ZXJ5U2VsZWN0b3IoaXRlbV9xdWVyeSk7XG4gICAgICAgICAgICBpZiAodmlldy5tb2RlbC5nZXQoJ2luZGV4JykgPT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZC1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2QtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0eWxlUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChzdHlsZSkge1xuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuc3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnVwZGF0ZV9zdHlsZV90cmFpdHMgPSBmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICAgIGZvciAodmFyIG5hbWVfMSBpbiB0aGlzLl9jc3Nfc3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jc3Nfc3RhdGUuaGFzT3duUHJvcGVydHkobmFtZV8xKSkge1xuICAgICAgICAgICAgICAgIGlmIChuYW1lXzEgPT09ICdtYXJnaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uZ3JvdXAuc3R5bGVbbmFtZV8xXSA9IHRoaXMuX2Nzc19zdGF0ZVtuYW1lXzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lXzEgIT09ICd3aWR0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlW25hbWVfMV0gPSB0aGlzLl9jc3Nfc3RhdGVbbmFtZV8xXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25ncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChidXR0b25zWzBdKS5zdHlsZVtuYW1lXzFdID0gdGhpcy5fY3NzX3N0YXRlW25hbWVfMV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS51cGRhdGVfYnV0dG9uX3N0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnV0dG9ucyA9IHRoaXMuYnV0dG9uZ3JvdXAucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoVG9nZ2xlQnV0dG9uc1ZpZXcuY2xhc3NNYXAsICdidXR0b25fc3R5bGUnLCBidXR0b25zW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcucHJvdG90eXBlLnNldF9idXR0b25fc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidXR0b25zID0gdGhpcy5idXR0b25ncm91cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnNldF9tYXBwZWRfY2xhc3NlcyhUb2dnbGVCdXR0b25zVmlldy5jbGFzc01hcCwgJ2J1dHRvbl9zdHlsZScsIGJ1dHRvbnNbaV0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBUb2dnbGVCdXR0b25zVmlldy5wcm90b3R5cGUuZXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NsaWNrIGJ1dHRvbic6ICdfaGFuZGxlX2NsaWNrJ1xuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHdoZW4gYSB2YWx1ZSBpcyBjbGlja2VkLlxuICAgICAqXG4gICAgICogQ2FsbGluZyBtb2RlbC5zZXQgd2lsbCB0cmlnZ2VyIGFsbCBvZiB0aGUgb3RoZXIgdmlld3Mgb2YgdGhlXG4gICAgICogbW9kZWwgdG8gdXBkYXRlLlxuICAgICAqL1xuICAgIFRvZ2dsZUJ1dHRvbnNWaWV3LnByb3RvdHlwZS5faGFuZGxlX2NsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHBhcnNlSW50KHRhcmdldC52YWx1ZSwgMTApLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgICAgICAvLyBXZSBhbHNvIHNlbmQgYSBjbGlja2VkIGV2ZW50LCBzaW5jZSB0aGUgdmFsdWUgaXMgb25seSBzZXQgaWYgaXQgY2hhbmdlZC5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qdXB5dGVyLXdpZGdldHMvaXB5d2lkZ2V0cy9pc3N1ZXMvNzYzXG4gICAgICAgIHRoaXMuc2VuZCh7IGV2ZW50OiAnY2xpY2snIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFRvZ2dsZUJ1dHRvbnNWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IFRvZ2dsZUJ1dHRvbnNWaWV3IH07XG4oZnVuY3Rpb24gKFRvZ2dsZUJ1dHRvbnNWaWV3KSB7XG4gICAgVG9nZ2xlQnV0dG9uc1ZpZXcuY2xhc3NNYXAgPSB7XG4gICAgICAgIHByaW1hcnk6IFsnbW9kLXByaW1hcnknXSxcbiAgICAgICAgc3VjY2VzczogWydtb2Qtc3VjY2VzcyddLFxuICAgICAgICBpbmZvOiBbJ21vZC1pbmZvJ10sXG4gICAgICAgIHdhcm5pbmc6IFsnbW9kLXdhcm5pbmcnXSxcbiAgICAgICAgZGFuZ2VyOiBbJ21vZC1kYW5nZXInXVxuICAgIH07XG59KShUb2dnbGVCdXR0b25zVmlldyB8fCAoVG9nZ2xlQnV0dG9uc1ZpZXcgPSB7fSkpO1xudmFyIFNlbGVjdGlvblNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25TbGlkZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25TbGlkZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3Rpb25TbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0aW9uU2xpZGVyTW9kZWwnLCBfdmlld19uYW1lOiAnU2VsZWN0aW9uU2xpZGVyVmlldycsIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsIHJlYWRvdXQ6IHRydWUsIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdGlvblNsaWRlck1vZGVsO1xufShTZWxlY3Rpb25Nb2RlbCkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uU2xpZGVyTW9kZWwgfTtcbnZhciBTZWxlY3Rpb25TbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25TbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdGlvblNsaWRlclZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtc2xpZGVyJyk7XG4gICAgICAgICh0aGlzLiRzbGlkZXIgPSAkKCc8ZGl2IC8+JykpXG4gICAgICAgICAgICAuc2xpZGVyKHtcbiAgICAgICAgICAgIHNsaWRlOiB0aGlzLmhhbmRsZVNsaWRlckNoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgc3RvcDogdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkLmJpbmQodGhpcylcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpZGVyJyk7XG4gICAgICAgIC8vIFB1dCB0aGUgc2xpZGVyIGluIGEgY29udGFpbmVyXG4gICAgICAgIHRoaXMuc2xpZGVyX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLnNsaWRlcl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy4kc2xpZGVyWzBdKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnNsaWRlcl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLnJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLnJlYWRvdXQpO1xuICAgICAgICB0aGlzLnJlYWRvdXQuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXJlYWRvdXQnKTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpzbGlkZXJfY29sb3InLCBmdW5jdGlvbiAoc2VuZGVyLCB2YWx1ZSkge1xuICAgICAgICAgICAgX3RoaXMuJHNsaWRlci5maW5kKCdhJykuY3NzKCdiYWNrZ3JvdW5kJywgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kc2xpZGVyLmZpbmQoJ2EnKS5jc3MoJ2JhY2tncm91bmQnLCB0aGlzLm1vZGVsLmdldCgnc2xpZGVyX2NvbG9yJykpO1xuICAgICAgICAvLyBTZXQgZGVmYXVsdHMuXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIG1vZGVsIGlzIGNoYW5nZWQuICBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB1bmRlZmluZWQgfHwgb3B0aW9ucy51cGRhdGVkX3ZpZXcgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHZhciBsYWJlbHMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gbGFiZWxzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB2YXIgbWluID0gMDtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdzdGVwJywgMSk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAnbWF4JywgbWF4KTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdtaW4nLCBtaW4pO1xuICAgICAgICAgICAgLy8gV09SS0FST1VORCBGT1IgSlFVRVJZIFNMSURFUiBCVUcuXG4gICAgICAgICAgICAvLyBUaGUgaG9yaXpvbnRhbCBwb3NpdGlvbiBvZiB0aGUgc2xpZGVyIGhhbmRsZVxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiB0aGUgdmFsdWUgb2YgdGhlIHNsaWRlciBhdCB0aGUgdGltZVxuICAgICAgICAgICAgLy8gb2Ygb3JpZW50YXRpb24gY2hhbmdlLiAgQmVmb3JlIGFwcGx5aW5nIHRoZSBuZXdcbiAgICAgICAgICAgIC8vIHdvcmthcm91bmQsIHdlIHNldCB0aGUgdmFsdWUgdG8gdGhlIG1pbmltdW0gdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IHRoZSBob3Jpem9udGFsIHBsYWNlbWVudCBvZiB0aGVcbiAgICAgICAgICAgIC8vIGhhbmRsZSBpbiB0aGUgdmVydGljYWwgc2xpZGVyIGlzIGFsd2F5c1xuICAgICAgICAgICAgLy8gY29uc2lzdGVudC5cbiAgICAgICAgICAgIHZhciBvcmllbnRhdGlvbl8xID0gdGhpcy5tb2RlbC5nZXQoJ29yaWVudGF0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBtaW4pO1xuICAgICAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ29yaWVudGF0aW9uJywgb3JpZW50YXRpb25fMSk7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICdkaXNhYmxlZCcsIGRpc2FibGVkKTtcbiAgICAgICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5jb250ZW50RWRpdGFibGUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkb3V0LmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmlnaHQgQ1NTIGNsYXNzZXMgZm9yIHZlcnRpY2FsICYgaG9yaXpvbnRhbCBzbGlkZXJzXG4gICAgICAgICAgICBpZiAob3JpZW50YXRpb25fMSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWhzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LXZzbGlkZXInKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtdmJveCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3aWRnZXQtdnNsaWRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd2lkZ2V0LWlubGluZS12Ym94Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtaHNsaWRlcicpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnd2lkZ2V0LWlubGluZS1oYm94Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVhZG91dCA9IHRoaXMubW9kZWwuZ2V0KCdyZWFkb3V0Jyk7XG4gICAgICAgICAgICBpZiAocmVhZG91dCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuJHJlYWRvdXQuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZG91dC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLiRyZWFkb3V0LmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgICBTZWxlY3Rpb25TbGlkZXJWaWV3LnByb3RvdHlwZS5ldmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnc2xpZGUnOiAnaGFuZGxlU2xpZGVyQ2hhbmdlJyxcbiAgICAgICAgICAgICdzbGlkZXN0b3AnOiAnaGFuZGxlU2xpZGVyQ2hhbmdlZCdcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ2luZGV4Jyk7XG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZScsIGluZGV4KTtcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KGluZGV4KTtcbiAgICB9O1xuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZVJlYWRvdXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ19vcHRpb25zX2xhYmVscycpW2luZGV4XTtcbiAgICAgICAgdGhpcy5yZWFkb3V0LnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqL1xuICAgIFNlbGVjdGlvblNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZSA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQodWkudmFsdWUpO1xuICAgICAgICAvLyBPbmx5IHBlcnNpc3QgdGhlIHZhbHVlIHdoaWxlIHNsaWRpbmcgaWYgdGhlIGNvbnRpbnVvdXNfdXBkYXRlXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZChlLCB1aSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgU2VsZWN0aW9uU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlZCA9IGZ1bmN0aW9uIChlLCB1aSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQodWkudmFsdWUpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCB1aS52YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25TbGlkZXJWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IFNlbGVjdGlvblNsaWRlclZpZXcgfTtcbnZhciBNdWx0aXBsZVNlbGVjdGlvbk1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNdWx0aXBsZVNlbGVjdGlvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE11bHRpcGxlU2VsZWN0aW9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbCcgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbDtcbn0oU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IE11bHRpcGxlU2VsZWN0aW9uTW9kZWwgfTtcbnZhciBTZWxlY3RNdWx0aXBsZU1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3RNdWx0aXBsZU1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdE11bHRpcGxlTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgU2VsZWN0TXVsdGlwbGVNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7IF9tb2RlbF9uYW1lOiAnU2VsZWN0TXVsdGlwbGVNb2RlbCcsIF92aWV3X25hbWU6ICdTZWxlY3RNdWx0aXBsZVZpZXcnLCByb3dzOiBudWxsIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdE11bHRpcGxlTW9kZWw7XG59KE11bHRpcGxlU2VsZWN0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdE11bHRpcGxlTW9kZWwgfTtcbnZhciBTZWxlY3RNdWx0aXBsZVZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdE11bHRpcGxlVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3RNdWx0aXBsZVZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmxpc3Rib3gubXVsdGlwbGUgPSB0cnVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCd3aWRnZXQtc2VsZWN0LW11bHRpcGxlJyk7XG4gICAgfTtcbiAgICBTZWxlY3RNdWx0aXBsZVZpZXcucHJvdG90eXBlLnVwZGF0ZVNlbGVjdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIGlmIChvcHRpb25zLnVwZGF0ZWRfdmlldyA9PT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxlY3RlZCA9IHRoaXMubW9kZWwuZ2V0KCdpbmRleCcpIHx8IFtdO1xuICAgICAgICB2YXIgbGlzdGJveE9wdGlvbnMgPSB0aGlzLmxpc3Rib3gub3B0aW9ucztcbiAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGlvblxuICAgICAgICB0aGlzLmxpc3Rib3guc2VsZWN0ZWRJbmRleCA9IC0xO1xuICAgICAgICAvLyBTZWxlY3QgdGhlIGFwcHJvcHJpYXRlIG9wdGlvbnNcbiAgICAgICAgc2VsZWN0ZWQuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgbGlzdGJveE9wdGlvbnNbaV0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB3aGVuIGEgbmV3IHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIFNlbGVjdE11bHRpcGxlVmlldy5wcm90b3R5cGUuX2hhbmRsZV9jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IEFycmF5LnByb3RvdHlwZS5tYXBcbiAgICAgICAgICAgIC5jYWxsKHRoaXMubGlzdGJveC5zZWxlY3RlZE9wdGlvbnMgfHwgW10sIGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24uaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgnaW5kZXgnLCBpbmRleCwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3RNdWx0aXBsZVZpZXc7XG59KFNlbGVjdFZpZXcpKTtcbmV4cG9ydCB7IFNlbGVjdE11bHRpcGxlVmlldyB9O1xudmFyIFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNlbGVjdGlvblJhbmdlU2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHsgX21vZGVsX25hbWU6ICdTZWxlY3Rpb25TbGlkZXJNb2RlbCcsIF92aWV3X25hbWU6ICdTZWxlY3Rpb25TbGlkZXJWaWV3Jywgb3JpZW50YXRpb246ICdob3Jpem9udGFsJywgcmVhZG91dDogdHJ1ZSwgY29udGludW91c191cGRhdGU6IHRydWUgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbDtcbn0oTXVsdGlwbGVTZWxlY3Rpb25Nb2RlbCkpO1xuZXhwb3J0IHsgU2VsZWN0aW9uUmFuZ2VTbGlkZXJNb2RlbCB9O1xudmFyIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2VsZWN0aW9uUmFuZ2VTbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAncmFuZ2UnLCB0cnVlKTtcbiAgICB9O1xuICAgIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldy5wcm90b3R5cGUudXBkYXRlU2VsZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm1vZGVsLmdldCgnaW5kZXgnKTtcbiAgICAgICAgdGhpcy4kc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlcycsIGluZGV4LnNsaWNlKCkpO1xuICAgICAgICB0aGlzLnVwZGF0ZVJlYWRvdXQoaW5kZXgpO1xuICAgIH07XG4gICAgU2VsZWN0aW9uUmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS51cGRhdGVSZWFkb3V0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHZhciBsYWJlbHMgPSB0aGlzLm1vZGVsLmdldCgnX29wdGlvbnNfbGFiZWxzJyk7XG4gICAgICAgIHZhciBtaW5WYWx1ZSA9IGxhYmVsc1tpbmRleFswXV07XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IGxhYmVsc1tpbmRleFsxXV07XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IG1pblZhbHVlICsgXCItXCIgKyBtYXhWYWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaXMgY2hhbmdpbmcuXG4gICAgICovXG4gICAgU2VsZWN0aW9uUmFuZ2VTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2UgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KHVpLnZhbHVlcyk7XG4gICAgICAgIC8vIE9ubHkgcGVyc2lzdCB0aGUgdmFsdWUgd2hpbGUgc2xpZGluZyBpZiB0aGUgY29udGludW91c191cGRhdGVcbiAgICAgICAgLy8gdHJhaXQgaXMgc2V0IHRvIHRydWUuXG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgnY29udGludW91c191cGRhdGUnKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVTbGlkZXJDaGFuZ2VkKGUsIHVpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdGhlIHNsaWRlciB2YWx1ZSBoYXMgY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIENhbGxpbmcgbW9kZWwuc2V0IHdpbGwgdHJpZ2dlciBhbGwgb2YgdGhlIG90aGVyIHZpZXdzIG9mIHRoZVxuICAgICAqIG1vZGVsIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBTZWxlY3Rpb25SYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLmhhbmRsZVNsaWRlckNoYW5nZWQgPSBmdW5jdGlvbiAoZSwgdWkpIHtcbiAgICAgICAgLy8gVGhlIGpxdWVyeXVpIGRvY3VtZW50YXRpb24gaW5kaWNhdGVzIHVpLnZhbHVlcyBkb2Vzbid0IGV4aXN0IG9uIHRoZSBzbGlkZXN0b3AgZXZlbnQsXG4gICAgICAgIC8vIGJ1dCBpdCBhcHBlYXJzIHRoYXQgaXQgYWN0dWFsbHkgZG9lczogaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnktdWkvYmxvYi9hZTMxZjJiM2I0Nzg5NzVmNzA1MjZiZGYzMjk5NDY0YjlhZmE4YmIxL3VpL3dpZGdldHMvc2xpZGVyLmpzI0wzMTNcbiAgICAgICAgdGhpcy51cGRhdGVSZWFkb3V0KHVpLnZhbHVlcyk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdpbmRleCcsIHVpLnZhbHVlcy5zbGljZSgpLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFNlbGVjdGlvblJhbmdlU2xpZGVyVmlldztcbn0oU2VsZWN0aW9uU2xpZGVyVmlldykpO1xuZXhwb3J0IHsgU2VsZWN0aW9uUmFuZ2VTbGlkZXJWaWV3IH07XG4iLCIvKiBUaGlzIGZpbGUgaGFzIGNvZGUgZGVyaXZlZCBmcm9tIFBob3NwaG9ySlMuIFRoZSBsaWNlbnNlIGZvciB0aGlzIFBob3NwaG9ySlMgY29kZSBpczpcblxuQ29weXJpZ2h0IChjKSAyMDE0LTIwMTcsIFBob3NwaG9ySlMgQ29udHJpYnV0b3JzXG5BbGwgcmlnaHRzIHJlc2VydmVkLlxuXG5SZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbm1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAgYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbVxuICB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG5ESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFXG5GT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTFxuREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1JcblNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSXG5DQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLFxuT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0Vcbk9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG5cbiovXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IE1lc3NhZ2VMb29wIH0gZnJvbSAnQHBob3NwaG9yL21lc3NhZ2luZyc7XG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tICdAcGhvc3Bob3Ivc2lnbmFsaW5nJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQHBob3NwaG9yL2RvbXV0aWxzJztcbmltcG9ydCB7IFBhbmVsLCBQYW5lbExheW91dCwgVGFiQmFyLCBXaWRnZXQgfSBmcm9tICdAcGhvc3Bob3Ivd2lkZ2V0cyc7XG4vKipcbiAqIEEgcGFuZWwgd2hlcmUgdmlzaWJsZSB3aWRnZXRzIGFyZSBzdGFja2VkIGF0b3Agb25lIGFub3RoZXIuXG4gKlxuICogIyMjIyBOb3Rlc1xuICogVGhpcyBjbGFzcyBwcm92aWRlcyBhIGNvbnZlbmllbmNlIHdyYXBwZXIgYXJvdW5kIGEgW1tQYW5lbExheW91dF1dLlxuICovXG52YXIgRXZlbnRlZFBhbmVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFdmVudGVkUGFuZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXZlbnRlZFBhbmVsKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3dpZGdldFJlbW92ZWQgPSBuZXcgU2lnbmFsKF90aGlzKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXZlbnRlZFBhbmVsLnByb3RvdHlwZSwgXCJ3aWRnZXRSZW1vdmVkXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgc2lnbmFsIGVtaXR0ZWQgd2hlbiBhIHdpZGdldCBpcyByZW1vdmVkIGZyb20gdGhlIHBhbmVsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0UmVtb3ZlZDtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQSBtZXNzYWdlIGhhbmRsZXIgaW52b2tlZCBvbiBhIGAnY2hpbGQtcmVtb3ZlZCdgIG1lc3NhZ2UuXG4gICAgICovXG4gICAgRXZlbnRlZFBhbmVsLnByb3RvdHlwZS5vbkNoaWxkUmVtb3ZlZCA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgdGhpcy5fd2lkZ2V0UmVtb3ZlZC5lbWl0KG1zZy5jaGlsZCk7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRlZFBhbmVsO1xufShQYW5lbCkpO1xuZXhwb3J0IHsgRXZlbnRlZFBhbmVsIH07XG4vKipcbiAqIEEgd2lkZ2V0IHdoaWNoIGNvbWJpbmVzIGEgYFRhYkJhcmAgYW5kIGEgYEV2ZW50ZWRQYW5lbGAuXG4gKlxuICogIyMjIyBOb3Rlc1xuICogVGhpcyBpcyBhIHNpbXBsZSBwYW5lbCB3aGljaCBoYW5kbGVzIHRoZSBjb21tb24gY2FzZSBvZiBhIHRhYiBiYXJcbiAqIHBsYWNlZCBuZXh0IHRvIGEgY29udGVudCBhcmVhLiBUaGUgc2VsZWN0ZWQgdGFiIGNvbnRyb2xzIHRoZSB3aWRnZXRcbiAqIHdoaWNoIGlzIHNob3duIGluIHRoZSBjb250ZW50IGFyZWEuXG4gKlxuICogRm9yIHVzZSBjYXNlcyB3aGljaCByZXF1aXJlIG1vcmUgY29udHJvbCB0aGFuIGlzIHByb3ZpZGVkIGJ5IHRoaXNcbiAqIHBhbmVsLCB0aGUgYFRhYkJhcmAgd2lkZ2V0IG1heSBiZSB1c2VkIGluZGVwZW5kZW50bHkuXG4gKlxuICogVE9ETzogU3VwcG9ydCBzZXR0aW5nIHRoZSBkaXJlY3Rpb24/P1xuICovXG52YXIgVGFiUGFuZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYlBhbmVsLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCBhIG5ldyB0YWIgcGFuZWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvcHRpb25zIGZvciBpbml0aWFsaXppbmcgdGhlIHRhYiBwYW5lbC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUYWJQYW5lbChvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9jdXJyZW50Q2hhbmdlZCA9IG5ldyBTaWduYWwoX3RoaXMpO1xuICAgICAgICBfdGhpcy5hZGRDbGFzcygncC1UYWJQYW5lbCcpO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIHRhYiBiYXIgYW5kIGNvbnRlbnRzIHBhbmVsLlxuICAgICAgICBfdGhpcy50YWJCYXIgPSBuZXcgVGFiQmFyKG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy50YWJCYXIuYWRkQ2xhc3MoJ3AtVGFiUGFuZWwtdGFiQmFyJyk7XG4gICAgICAgIF90aGlzLnRhYkNvbnRlbnRzID0gbmV3IEV2ZW50ZWRQYW5lbCgpO1xuICAgICAgICBfdGhpcy50YWJDb250ZW50cy5hZGRDbGFzcygncC1UYWJQYW5lbC10YWJDb250ZW50cycpO1xuICAgICAgICAvLyBDb25uZWN0IHRoZSB0YWIgYmFyIHNpZ25hbCBoYW5kbGVycy5cbiAgICAgICAgX3RoaXMudGFiQmFyLnRhYk1vdmVkLmNvbm5lY3QoX3RoaXMuX29uVGFiTW92ZWQsIF90aGlzKTtcbiAgICAgICAgX3RoaXMudGFiQmFyLmN1cnJlbnRDaGFuZ2VkLmNvbm5lY3QoX3RoaXMuX29uQ3VycmVudENoYW5nZWQsIF90aGlzKTtcbiAgICAgICAgX3RoaXMudGFiQmFyLnRhYkNsb3NlUmVxdWVzdGVkLmNvbm5lY3QoX3RoaXMuX29uVGFiQ2xvc2VSZXF1ZXN0ZWQsIF90aGlzKTtcbiAgICAgICAgX3RoaXMudGFiQmFyLnRhYkFjdGl2YXRlUmVxdWVzdGVkLmNvbm5lY3QoX3RoaXMuX29uVGFiQWN0aXZhdGVSZXF1ZXN0ZWQsIF90aGlzKTtcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgZXZlbnRlZCBwYW5lbCBzaWduYWwgaGFuZGxlcnMuXG4gICAgICAgIF90aGlzLnRhYkNvbnRlbnRzLndpZGdldFJlbW92ZWQuY29ubmVjdChfdGhpcy5fb25XaWRnZXRSZW1vdmVkLCBfdGhpcyk7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGF5b3V0LlxuICAgICAgICB2YXIgbGF5b3V0ID0gbmV3IFBhbmVsTGF5b3V0KCk7XG4gICAgICAgIC8vIEFkZCB0aGUgY2hpbGQgd2lkZ2V0cyB0byB0aGUgbGF5b3V0LlxuICAgICAgICBsYXlvdXQuYWRkV2lkZ2V0KF90aGlzLnRhYkJhcik7XG4gICAgICAgIGxheW91dC5hZGRXaWRnZXQoX3RoaXMudGFiQ29udGVudHMpO1xuICAgICAgICAvLyBJbnN0YWxsIHRoZSBsYXlvdXQgb24gdGhlIHRhYiBwYW5lbC5cbiAgICAgICAgX3RoaXMubGF5b3V0ID0gbGF5b3V0O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwiY3VycmVudENoYW5nZWRcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBzaWduYWwgZW1pdHRlZCB3aGVuIHRoZSBjdXJyZW50IHRhYiBpcyBjaGFuZ2VkLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgc2lnbmFsIGlzIGVtaXR0ZWQgd2hlbiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhYiBpcyBjaGFuZ2VkXG4gICAgICAgICAqIGVpdGhlciB0aHJvdWdoIHVzZXIgb3IgcHJvZ3JhbW1hdGljIGludGVyYWN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBOb3RhYmx5LCB0aGlzIHNpZ25hbCBpcyBub3QgZW1pdHRlZCB3aGVuIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudFxuICAgICAgICAgKiB0YWIgY2hhbmdlcyBkdWUgdG8gdGFicyBiZWluZyBpbnNlcnRlZCwgcmVtb3ZlZCwgb3IgbW92ZWQuIEl0IGlzXG4gICAgICAgICAqIG9ubHkgZW1pdHRlZCB3aGVuIHRoZSBhY3R1YWwgY3VycmVudCB0YWIgbm9kZSBpcyBjaGFuZ2VkLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudENoYW5nZWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwiY3VycmVudEluZGV4XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWIuXG4gICAgICAgICAqXG4gICAgICAgICAqICMjIyMgTm90ZXNcbiAgICAgICAgICogVGhpcyB3aWxsIGJlIGBudWxsYCBpZiBubyB0YWIgaXMgc2VsZWN0ZWQuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLnRhYkJhci5jdXJyZW50SW5kZXg7XG4gICAgICAgICAgICAvLyBQaG9zcGhvciB0YWIgYmFycyBoYXZlIGFuIGluZGV4IG9mIC0xIGlmIG5vIHRhYiBpcyBzZWxlY3RlZFxuICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50SW5kZXggPT09IC0xID8gbnVsbCA6IGN1cnJlbnRJbmRleCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFiLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIElmIHRoZSBpbmRleCBpcyBvdXQgb2YgcmFuZ2UsIGl0IHdpbGwgYmUgc2V0IHRvIGBudWxsYC5cbiAgICAgICAgICovXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhci5jdXJyZW50SW5kZXggPSAodmFsdWUgPT09IG51bGwgPyAtMSA6IHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRhYlBhbmVsLnByb3RvdHlwZSwgXCJjdXJyZW50V2lkZ2V0XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHdpZGdldC5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIHdpbGwgYmUgYG51bGxgIGlmIHRoZXJlIGlzIG5vIHNlbGVjdGVkIHRhYi5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gdGhpcy50YWJCYXIuY3VycmVudFRpdGxlO1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlID8gdGl0bGUub3duZXIgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgd2lkZ2V0LlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIElmIHRoZSB3aWRnZXQgaXMgbm90IGluIHRoZSBwYW5lbCwgaXQgd2lsbCBiZSBzZXQgdG8gYG51bGxgLlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyLmN1cnJlbnRUaXRsZSA9IHZhbHVlID8gdmFsdWUudGl0bGUgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVGFiUGFuZWwucHJvdG90eXBlLCBcInRhYnNNb3ZhYmxlXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgd2hldGhlciB0aGUgdGFicyBhcmUgbW92YWJsZSBieSB0aGUgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUYWJzIGNhbiBhbHdheXMgYmUgbW92ZWQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFiQmFyLnRhYnNNb3ZhYmxlO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoZSB3aGV0aGVyIHRoZSB0YWJzIGFyZSBtb3ZhYmxlIGJ5IHRoZSB1c2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRhYnMgY2FuIGFsd2F5cyBiZSBtb3ZlZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgICAgKi9cbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyLnRhYnNNb3ZhYmxlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUYWJQYW5lbC5wcm90b3R5cGUsIFwid2lkZ2V0c1wiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIHJlYWQtb25seSBhcnJheSBvZiB0aGUgd2lkZ2V0cyBpbiB0aGUgcGFuZWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhYkNvbnRlbnRzLndpZGdldHM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIEFkZCBhIHdpZGdldCB0byB0aGUgZW5kIG9mIHRoZSB0YWIgcGFuZWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2lkZ2V0IC0gVGhlIHdpZGdldCB0byBhZGQgdG8gdGhlIHRhYiBwYW5lbC5cbiAgICAgKlxuICAgICAqICMjIyMgTm90ZXNcbiAgICAgKiBJZiB0aGUgd2lkZ2V0IGlzIGFscmVhZHkgY29udGFpbmVkIGluIHRoZSBwYW5lbCwgaXQgd2lsbCBiZSBtb3ZlZC5cbiAgICAgKlxuICAgICAqIFRoZSB3aWRnZXQncyBgdGl0bGVgIGlzIHVzZWQgdG8gcG9wdWxhdGUgdGhlIHRhYi5cbiAgICAgKi9cbiAgICBUYWJQYW5lbC5wcm90b3R5cGUuYWRkV2lkZ2V0ID0gZnVuY3Rpb24gKHdpZGdldCkge1xuICAgICAgICB0aGlzLmluc2VydFdpZGdldCh0aGlzLndpZGdldHMubGVuZ3RoLCB3aWRnZXQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSW5zZXJ0IGEgd2lkZ2V0IGludG8gdGhlIHRhYiBwYW5lbCBhdCBhIHNwZWNpZmllZCBpbmRleC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleCAtIFRoZSBpbmRleCBhdCB3aGljaCB0byBpbnNlcnQgdGhlIHdpZGdldC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3aWRnZXQgLSBUaGUgd2lkZ2V0IHRvIGluc2VydCBpbnRvIHRvIHRoZSB0YWIgcGFuZWwuXG4gICAgICpcbiAgICAgKiAjIyMjIE5vdGVzXG4gICAgICogSWYgdGhlIHdpZGdldCBpcyBhbHJlYWR5IGNvbnRhaW5lZCBpbiB0aGUgcGFuZWwsIGl0IHdpbGwgYmUgbW92ZWQuXG4gICAgICpcbiAgICAgKiBUaGUgd2lkZ2V0J3MgYHRpdGxlYCBpcyB1c2VkIHRvIHBvcHVsYXRlIHRoZSB0YWIuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLmluc2VydFdpZGdldCA9IGZ1bmN0aW9uIChpbmRleCwgd2lkZ2V0KSB7XG4gICAgICAgIGlmICh3aWRnZXQgIT09IHRoaXMuY3VycmVudFdpZGdldCkge1xuICAgICAgICAgICAgd2lkZ2V0LmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRhYkNvbnRlbnRzLmluc2VydFdpZGdldChpbmRleCwgd2lkZ2V0KTtcbiAgICAgICAgdGhpcy50YWJCYXIuaW5zZXJ0VGFiKGluZGV4LCB3aWRnZXQudGl0bGUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBgY3VycmVudENoYW5nZWRgIHNpZ25hbCBmcm9tIHRoZSB0YWIgYmFyLlxuICAgICAqL1xuICAgIFRhYlBhbmVsLnByb3RvdHlwZS5fb25DdXJyZW50Q2hhbmdlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgdGl0bGUgZnJvbSB0aGUgYXJncy5cbiAgICAgICAgdmFyIHByZXZpb3VzSW5kZXggPSBhcmdzLnByZXZpb3VzSW5kZXgsIHByZXZpb3VzVGl0bGUgPSBhcmdzLnByZXZpb3VzVGl0bGUsIGN1cnJlbnRJbmRleCA9IGFyZ3MuY3VycmVudEluZGV4LCBjdXJyZW50VGl0bGUgPSBhcmdzLmN1cnJlbnRUaXRsZTtcbiAgICAgICAgLy8gRXh0cmFjdCB0aGUgd2lkZ2V0cyBmcm9tIHRoZSB0aXRsZXMuXG4gICAgICAgIHZhciBwcmV2aW91c1dpZGdldCA9IHByZXZpb3VzVGl0bGUgPyBwcmV2aW91c1RpdGxlLm93bmVyIDogbnVsbDtcbiAgICAgICAgdmFyIGN1cnJlbnRXaWRnZXQgPSBjdXJyZW50VGl0bGUgPyBjdXJyZW50VGl0bGUub3duZXIgOiBudWxsO1xuICAgICAgICAvLyBIaWRlIHRoZSBwcmV2aW91cyB3aWRnZXQuXG4gICAgICAgIGlmIChwcmV2aW91c1dpZGdldCkge1xuICAgICAgICAgICAgcHJldmlvdXNXaWRnZXQuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNob3cgdGhlIGN1cnJlbnQgd2lkZ2V0LlxuICAgICAgICBpZiAoY3VycmVudFdpZGdldCkge1xuICAgICAgICAgICAgY3VycmVudFdpZGdldC5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRW1pdCB0aGUgYGN1cnJlbnRDaGFuZ2VkYCBzaWduYWwgZm9yIHRoZSB0YWIgcGFuZWwuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRDaGFuZ2VkLmVtaXQoe1xuICAgICAgICAgICAgcHJldmlvdXNJbmRleDogcHJldmlvdXNJbmRleCwgcHJldmlvdXNXaWRnZXQ6IHByZXZpb3VzV2lkZ2V0LCBjdXJyZW50SW5kZXg6IGN1cnJlbnRJbmRleCwgY3VycmVudFdpZGdldDogY3VycmVudFdpZGdldFxuICAgICAgICB9KTtcbiAgICAgICAgLy8gRmx1c2ggdGhlIG1lc3NhZ2UgbG9vcCBvbiBJRSBhbmQgRWRnZSB0byBwcmV2ZW50IGZsaWNrZXIuXG4gICAgICAgIGlmIChQbGF0Zm9ybS5JU19FREdFIHx8IFBsYXRmb3JtLklTX0lFKSB7XG4gICAgICAgICAgICBNZXNzYWdlTG9vcC5mbHVzaCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGB0YWJBY3RpdmF0ZVJlcXVlc3RlZGAgc2lnbmFsIGZyb20gdGhlIHRhYiBiYXIuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLl9vblRhYkFjdGl2YXRlUmVxdWVzdGVkID0gZnVuY3Rpb24gKHNlbmRlciwgYXJncykge1xuICAgICAgICBhcmdzLnRpdGxlLm93bmVyLmFjdGl2YXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGB0YWJDbG9zZVJlcXVlc3RlZGAgc2lnbmFsIGZyb20gdGhlIHRhYiBiYXIuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLl9vblRhYkNsb3NlUmVxdWVzdGVkID0gZnVuY3Rpb24gKHNlbmRlciwgYXJncykge1xuICAgICAgICBhcmdzLnRpdGxlLm93bmVyLmNsb3NlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGB0YWJNb3ZlZGAgc2lnbmFsIGZyb20gdGhlIHRhYiBiYXIuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLl9vblRhYk1vdmVkID0gZnVuY3Rpb24gKHNlbmRlciwgYXJncykge1xuICAgICAgICB0aGlzLnRhYkNvbnRlbnRzLmluc2VydFdpZGdldChhcmdzLnRvSW5kZXgsIGFyZ3MudGl0bGUub3duZXIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBgd2lkZ2V0UmVtb3ZlZGAgc2lnbmFsIGZyb20gdGhlIHN0YWNrZWQgcGFuZWwuXG4gICAgICovXG4gICAgVGFiUGFuZWwucHJvdG90eXBlLl9vbldpZGdldFJlbW92ZWQgPSBmdW5jdGlvbiAoc2VuZGVyLCB3aWRnZXQpIHtcbiAgICAgICAgdGhpcy50YWJCYXIucmVtb3ZlVGFiKHdpZGdldC50aXRsZSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFiUGFuZWw7XG59KFdpZGdldCkpO1xuZXhwb3J0IHsgVGFiUGFuZWwgfTtcbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IERPTVdpZGdldFZpZXcgfSBmcm9tICdAanVweXRlci13aWRnZXRzL2Jhc2UnO1xuaW1wb3J0IHsgQ29yZURPTVdpZGdldE1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xudmFyIEF1ZGlvTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEF1ZGlvTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXVkaW9Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBdWRpb01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdBdWRpb01vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdBdWRpb1ZpZXcnLFxuICAgICAgICAgICAgZm9ybWF0OiAnbXAzJyxcbiAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMCkpXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXVkaW9Nb2RlbC5zZXJpYWxpemVycyA9IF9fYXNzaWduKHt9LCBDb3JlRE9NV2lkZ2V0TW9kZWwuc2VyaWFsaXplcnMsIHsgdmFsdWU6IHsgc2VyaWFsaXplOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGFWaWV3KHZhbHVlLmJ1ZmZlci5zbGljZSgwKSk7XG4gICAgICAgICAgICB9IH0gfSk7XG4gICAgcmV0dXJuIEF1ZGlvTW9kZWw7XG59KENvcmVET01XaWRnZXRNb2RlbCkpO1xuZXhwb3J0IHsgQXVkaW9Nb2RlbCB9O1xudmFyIEF1ZGlvVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQXVkaW9WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEF1ZGlvVmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBBdWRpb1ZpZXcucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICAgICAqL1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpOyAvLyBTZXQgZGVmYXVsdHMuXG4gICAgfTtcbiAgICBBdWRpb1ZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVwZGF0ZSB0aGUgY29udGVudHMgb2YgdGhpcyB2aWV3XG4gICAgICAgICAqXG4gICAgICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgICAgICogY2hhbmdlZCBieSBhbm90aGVyIHZpZXcgb3IgYnkgYSBzdGF0ZSB1cGRhdGUgZnJvbSB0aGUgYmFjay1lbmQuXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgdXJsO1xuICAgICAgICB2YXIgZm9ybWF0ID0gdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgaWYgKGZvcm1hdCAhPT0gJ3VybCcpIHtcbiAgICAgICAgICAgIHZhciBibG9iID0gbmV3IEJsb2IoW3ZhbHVlXSwgeyB0eXBlOiBcImF1ZGlvL1wiICsgdGhpcy5tb2RlbC5nZXQoJ2Zvcm1hdCcpIH0pO1xuICAgICAgICAgICAgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IChuZXcgVGV4dERlY29kZXIoJ3V0Zi04JykpLmRlY29kZSh2YWx1ZS5idWZmZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgb2JqZWN0VVJMXG4gICAgICAgIHZhciBvbGR1cmwgPSB0aGlzLmVsLnNyYztcbiAgICAgICAgdGhpcy5lbC5zcmMgPSB1cmw7XG4gICAgICAgIGlmIChvbGR1cmwgJiYgdHlwZW9mIG9sZHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwob2xkdXJsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBdWRpbyBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuZWwubG9vcCA9IHRoaXMubW9kZWwuZ2V0KCdsb29wJyk7XG4gICAgICAgIHRoaXMuZWwuYXV0b3BsYXkgPSB0aGlzLm1vZGVsLmdldCgnYXV0b3BsYXknKTtcbiAgICAgICAgdGhpcy5lbC5jb250cm9scyA9IHRoaXMubW9kZWwuZ2V0KCdjb250cm9scycpO1xuICAgICAgICByZXR1cm4gX3N1cGVyLnByb3RvdHlwZS51cGRhdGUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEF1ZGlvVmlldy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5lbC5zcmMpIHtcbiAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5lbC5zcmMpO1xuICAgICAgICB9XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXVkaW9WaWV3LnByb3RvdHlwZSwgXCJ0YWdOYW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHRhZyBuYW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiAjIyMjIE5vdGVzXG4gICAgICAgICAqIFRoaXMgaXMgYSByZWFkLW9ubHkgYXR0cmlidXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBXZSBjYW4ndCBtYWtlIHRoaXMgYW4gYXR0cmlidXRlIHdpdGggYSBkZWZhdWx0IHZhbHVlXG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3b3VsZCBiZSBzZXQgYWZ0ZXIgaXQgaXMgbmVlZGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gY29uc3RydWN0b3IuXG4gICAgICAgICAgICByZXR1cm4gJ2F1ZGlvJztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIEF1ZGlvVmlldztcbn0oRE9NV2lkZ2V0VmlldykpO1xuZXhwb3J0IHsgQXVkaW9WaWV3IH07XG4iLCIvKiFcbiAqIGpRdWVyeSBVSSBNb3VzZSAxLjEyLjFcbiAqIGh0dHA6Ly9qcXVlcnl1aS5jb21cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICovXG5cbi8vPj5sYWJlbDogTW91c2Vcbi8vPj5ncm91cDogV2lkZ2V0c1xuLy8+PmRlc2NyaXB0aW9uOiBBYnN0cmFjdHMgbW91c2UtYmFzZWQgaW50ZXJhY3Rpb25zIHRvIGFzc2lzdCBpbiBjcmVhdGluZyBjZXJ0YWluIHdpZGdldHMuXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20vbW91c2UvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbXG5cdFx0XHRcImpxdWVyeVwiLFxuXHRcdFx0XCIuLi9pZVwiLFxuXHRcdFx0XCIuLi92ZXJzaW9uXCIsXG5cdFx0XHRcIi4uL3dpZGdldFwiXG5cdFx0XSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0oIGZ1bmN0aW9uKCAkICkge1xuXG52YXIgbW91c2VIYW5kbGVkID0gZmFsc2U7XG4kKCBkb2N1bWVudCApLm9uKCBcIm1vdXNldXBcIiwgZnVuY3Rpb24oKSB7XG5cdG1vdXNlSGFuZGxlZCA9IGZhbHNlO1xufSApO1xuXG5yZXR1cm4gJC53aWRnZXQoIFwidWkubW91c2VcIiwge1xuXHR2ZXJzaW9uOiBcIjEuMTIuMVwiLFxuXHRvcHRpb25zOiB7XG5cdFx0Y2FuY2VsOiBcImlucHV0LCB0ZXh0YXJlYSwgYnV0dG9uLCBzZWxlY3QsIG9wdGlvblwiLFxuXHRcdGRpc3RhbmNlOiAxLFxuXHRcdGRlbGF5OiAwXG5cdH0sXG5cdF9tb3VzZUluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblxuXHRcdHRoaXMuZWxlbWVudFxuXHRcdFx0Lm9uKCBcIm1vdXNlZG93bi5cIiArIHRoaXMud2lkZ2V0TmFtZSwgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gdGhhdC5fbW91c2VEb3duKCBldmVudCApO1xuXHRcdFx0fSApXG5cdFx0XHQub24oIFwiY2xpY2suXCIgKyB0aGlzLndpZGdldE5hbWUsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0aWYgKCB0cnVlID09PSAkLmRhdGEoIGV2ZW50LnRhcmdldCwgdGhhdC53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApICkge1xuXHRcdFx0XHRcdCQucmVtb3ZlRGF0YSggZXZlbnQudGFyZ2V0LCB0aGF0LndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiICk7XG5cdFx0XHRcdFx0ZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblx0fSxcblxuXHQvLyBUT0RPOiBtYWtlIHN1cmUgZGVzdHJveWluZyBvbmUgaW5zdGFuY2Ugb2YgbW91c2UgZG9lc24ndCBtZXNzIHdpdGhcblx0Ly8gb3RoZXIgaW5zdGFuY2VzIG9mIG1vdXNlXG5cdF9tb3VzZURlc3Ryb3k6IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZWxlbWVudC5vZmYoIFwiLlwiICsgdGhpcy53aWRnZXROYW1lICk7XG5cdFx0aWYgKCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApIHtcblx0XHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdFx0Lm9mZiggXCJtb3VzZW1vdmUuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlTW92ZURlbGVnYXRlIClcblx0XHRcdFx0Lm9mZiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblx0XHR9XG5cdH0sXG5cblx0X21vdXNlRG93bjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0Ly8gZG9uJ3QgbGV0IG1vcmUgdGhhbiBvbmUgd2lkZ2V0IGhhbmRsZSBtb3VzZVN0YXJ0XG5cdFx0aWYgKCBtb3VzZUhhbmRsZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fbW91c2VNb3ZlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gV2UgbWF5IGhhdmUgbWlzc2VkIG1vdXNldXAgKG91dCBvZiB3aW5kb3cpXG5cdFx0KCB0aGlzLl9tb3VzZVN0YXJ0ZWQgJiYgdGhpcy5fbW91c2VVcCggZXZlbnQgKSApO1xuXG5cdFx0dGhpcy5fbW91c2VEb3duRXZlbnQgPSBldmVudDtcblxuXHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdGJ0bklzTGVmdCA9ICggZXZlbnQud2hpY2ggPT09IDEgKSxcblxuXHRcdFx0Ly8gZXZlbnQudGFyZ2V0Lm5vZGVOYW1lIHdvcmtzIGFyb3VuZCBhIGJ1ZyBpbiBJRSA4IHdpdGhcblx0XHRcdC8vIGRpc2FibGVkIGlucHV0cyAoIzc2MjApXG5cdFx0XHRlbElzQ2FuY2VsID0gKCB0eXBlb2YgdGhpcy5vcHRpb25zLmNhbmNlbCA9PT0gXCJzdHJpbmdcIiAmJiBldmVudC50YXJnZXQubm9kZU5hbWUgP1xuXHRcdFx0XHQkKCBldmVudC50YXJnZXQgKS5jbG9zZXN0KCB0aGlzLm9wdGlvbnMuY2FuY2VsICkubGVuZ3RoIDogZmFsc2UgKTtcblx0XHRpZiAoICFidG5Jc0xlZnQgfHwgZWxJc0NhbmNlbCB8fCAhdGhpcy5fbW91c2VDYXB0dXJlKCBldmVudCApICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb3VzZURlbGF5TWV0ID0gIXRoaXMub3B0aW9ucy5kZWxheTtcblx0XHRpZiAoICF0aGlzLm1vdXNlRGVsYXlNZXQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZURlbGF5VGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhhdC5tb3VzZURlbGF5TWV0ID0gdHJ1ZTtcblx0XHRcdH0sIHRoaXMub3B0aW9ucy5kZWxheSApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VEaXN0YW5jZU1ldCggZXZlbnQgKSAmJiB0aGlzLl9tb3VzZURlbGF5TWV0KCBldmVudCApICkge1xuXHRcdFx0dGhpcy5fbW91c2VTdGFydGVkID0gKCB0aGlzLl9tb3VzZVN0YXJ0KCBldmVudCApICE9PSBmYWxzZSApO1xuXHRcdFx0aWYgKCAhdGhpcy5fbW91c2VTdGFydGVkICkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDbGljayBldmVudCBtYXkgbmV2ZXIgaGF2ZSBmaXJlZCAoR2Vja28gJiBPcGVyYSlcblx0XHRpZiAoIHRydWUgPT09ICQuZGF0YSggZXZlbnQudGFyZ2V0LCB0aGlzLndpZGdldE5hbWUgKyBcIi5wcmV2ZW50Q2xpY2tFdmVudFwiICkgKSB7XG5cdFx0XHQkLnJlbW92ZURhdGEoIGV2ZW50LnRhcmdldCwgdGhpcy53aWRnZXROYW1lICsgXCIucHJldmVudENsaWNrRXZlbnRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFRoZXNlIGRlbGVnYXRlcyBhcmUgcmVxdWlyZWQgdG8ga2VlcCBjb250ZXh0XG5cdFx0dGhpcy5fbW91c2VNb3ZlRGVsZWdhdGUgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRyZXR1cm4gdGhhdC5fbW91c2VNb3ZlKCBldmVudCApO1xuXHRcdH07XG5cdFx0dGhpcy5fbW91c2VVcERlbGVnYXRlID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0cmV0dXJuIHRoYXQuX21vdXNlVXAoIGV2ZW50ICk7XG5cdFx0fTtcblxuXHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdC5vbiggXCJtb3VzZW1vdmUuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlTW92ZURlbGVnYXRlIClcblx0XHRcdC5vbiggXCJtb3VzZXVwLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZVVwRGVsZWdhdGUgKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRtb3VzZUhhbmRsZWQgPSB0cnVlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdF9tb3VzZU1vdmU6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vIE9ubHkgY2hlY2sgZm9yIG1vdXNldXBzIG91dHNpZGUgdGhlIGRvY3VtZW50IGlmIHlvdSd2ZSBtb3ZlZCBpbnNpZGUgdGhlIGRvY3VtZW50XG5cdFx0Ly8gYXQgbGVhc3Qgb25jZS4gVGhpcyBwcmV2ZW50cyB0aGUgZmlyaW5nIG9mIG1vdXNldXAgaW4gdGhlIGNhc2Ugb2YgSUU8OSwgd2hpY2ggd2lsbFxuXHRcdC8vIGZpcmUgYSBtb3VzZW1vdmUgZXZlbnQgaWYgY29udGVudCBpcyBwbGFjZWQgdW5kZXIgdGhlIGN1cnNvci4gU2VlICM3Nzc4XG5cdFx0Ly8gU3VwcG9ydDogSUUgPDlcblx0XHRpZiAoIHRoaXMuX21vdXNlTW92ZWQgKSB7XG5cblx0XHRcdC8vIElFIG1vdXNldXAgY2hlY2sgLSBtb3VzZXVwIGhhcHBlbmVkIHdoZW4gbW91c2Ugd2FzIG91dCBvZiB3aW5kb3dcblx0XHRcdGlmICggJC51aS5pZSAmJiAoICFkb2N1bWVudC5kb2N1bWVudE1vZGUgfHwgZG9jdW1lbnQuZG9jdW1lbnRNb2RlIDwgOSApICYmXG5cdFx0XHRcdFx0IWV2ZW50LmJ1dHRvbiApIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX21vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRcdC8vIElmcmFtZSBtb3VzZXVwIGNoZWNrIC0gbW91c2V1cCBvY2N1cnJlZCBpbiBhbm90aGVyIGRvY3VtZW50XG5cdFx0XHR9IGVsc2UgaWYgKCAhZXZlbnQud2hpY2ggKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDw9OCAtIDlcblx0XHRcdFx0Ly8gU2FmYXJpIHNldHMgd2hpY2ggdG8gMCBpZiB5b3UgcHJlc3MgYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5c1xuXHRcdFx0XHQvLyBkdXJpbmcgYSBkcmFnICgjMTQ0NjEpXG5cdFx0XHRcdGlmICggZXZlbnQub3JpZ2luYWxFdmVudC5hbHRLZXkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5jdHJsS2V5IHx8XG5cdFx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQub3JpZ2luYWxFdmVudC5zaGlmdEtleSApIHtcblx0XHRcdFx0XHR0aGlzLmlnbm9yZU1pc3NpbmdXaGljaCA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSBpZiAoICF0aGlzLmlnbm9yZU1pc3NpbmdXaGljaCApIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fbW91c2VVcCggZXZlbnQgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZXZlbnQud2hpY2ggfHwgZXZlbnQuYnV0dG9uICkge1xuXHRcdFx0dGhpcy5fbW91c2VNb3ZlZCA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZVN0YXJ0ZWQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZURyYWcoIGV2ZW50ICk7XG5cdFx0XHRyZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMuX21vdXNlRGlzdGFuY2VNZXQoIGV2ZW50ICkgJiYgdGhpcy5fbW91c2VEZWxheU1ldCggZXZlbnQgKSApIHtcblx0XHRcdHRoaXMuX21vdXNlU3RhcnRlZCA9XG5cdFx0XHRcdCggdGhpcy5fbW91c2VTdGFydCggdGhpcy5fbW91c2VEb3duRXZlbnQsIGV2ZW50ICkgIT09IGZhbHNlICk7XG5cdFx0XHQoIHRoaXMuX21vdXNlU3RhcnRlZCA/IHRoaXMuX21vdXNlRHJhZyggZXZlbnQgKSA6IHRoaXMuX21vdXNlVXAoIGV2ZW50ICkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gIXRoaXMuX21vdXNlU3RhcnRlZDtcblx0fSxcblxuXHRfbW91c2VVcDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdHRoaXMuZG9jdW1lbnRcblx0XHRcdC5vZmYoIFwibW91c2Vtb3ZlLlwiICsgdGhpcy53aWRnZXROYW1lLCB0aGlzLl9tb3VzZU1vdmVEZWxlZ2F0ZSApXG5cdFx0XHQub2ZmKCBcIm1vdXNldXAuXCIgKyB0aGlzLndpZGdldE5hbWUsIHRoaXMuX21vdXNlVXBEZWxlZ2F0ZSApO1xuXG5cdFx0aWYgKCB0aGlzLl9tb3VzZVN0YXJ0ZWQgKSB7XG5cdFx0XHR0aGlzLl9tb3VzZVN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQgPT09IHRoaXMuX21vdXNlRG93bkV2ZW50LnRhcmdldCApIHtcblx0XHRcdFx0JC5kYXRhKCBldmVudC50YXJnZXQsIHRoaXMud2lkZ2V0TmFtZSArIFwiLnByZXZlbnRDbGlja0V2ZW50XCIsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbW91c2VTdG9wKCBldmVudCApO1xuXHRcdH1cblxuXHRcdGlmICggdGhpcy5fbW91c2VEZWxheVRpbWVyICkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB0aGlzLl9tb3VzZURlbGF5VGltZXIgKTtcblx0XHRcdGRlbGV0ZSB0aGlzLl9tb3VzZURlbGF5VGltZXI7XG5cdFx0fVxuXG5cdFx0dGhpcy5pZ25vcmVNaXNzaW5nV2hpY2ggPSBmYWxzZTtcblx0XHRtb3VzZUhhbmRsZWQgPSBmYWxzZTtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9LFxuXG5cdF9tb3VzZURpc3RhbmNlTWV0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0cmV0dXJuICggTWF0aC5tYXgoXG5cdFx0XHRcdE1hdGguYWJzKCB0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWCAtIGV2ZW50LnBhZ2VYICksXG5cdFx0XHRcdE1hdGguYWJzKCB0aGlzLl9tb3VzZURvd25FdmVudC5wYWdlWSAtIGV2ZW50LnBhZ2VZIClcblx0XHRcdCkgPj0gdGhpcy5vcHRpb25zLmRpc3RhbmNlXG5cdFx0KTtcblx0fSxcblxuXHRfbW91c2VEZWxheU1ldDogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge1xuXHRcdHJldHVybiB0aGlzLm1vdXNlRGVsYXlNZXQ7XG5cdH0sXG5cblx0Ly8gVGhlc2UgYXJlIHBsYWNlaG9sZGVyIG1ldGhvZHMsIHRvIGJlIG92ZXJyaWRlbiBieSBleHRlbmRpbmcgcGx1Z2luXG5cdF9tb3VzZVN0YXJ0OiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7fSxcblx0X21vdXNlRHJhZzogZnVuY3Rpb24oIC8qIGV2ZW50ICovICkge30sXG5cdF9tb3VzZVN0b3A6IGZ1bmN0aW9uKCAvKiBldmVudCAqLyApIHt9LFxuXHRfbW91c2VDYXB0dXJlOiBmdW5jdGlvbiggLyogZXZlbnQgKi8gKSB7IHJldHVybiB0cnVlOyB9XG59ICk7XG5cbn0gKSApO1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldywgdW5wYWNrX21vZGVscywgVmlld0xpc3QsIEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0IH0gZnJvbSAnQGp1cHl0ZXItd2lkZ2V0cy9iYXNlJztcbmltcG9ydCB7IENvcmVET01XaWRnZXRNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2NvcmUnO1xuaW1wb3J0IHsgcmVqZWN0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBBcnJheUV4dCB9IGZyb20gJ0BwaG9zcGhvci9hbGdvcml0aG0nO1xuaW1wb3J0IHsgTWVzc2FnZUxvb3AgfSBmcm9tICdAcGhvc3Bob3IvbWVzc2FnaW5nJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJ0BwaG9zcGhvci93aWRnZXRzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIEJveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCb3hNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3hNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdCb3hWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnQm94TW9kZWwnLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICAgICAgYm94X3N0eWxlOiAnJ1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEJveE1vZGVsLnNlcmlhbGl6ZXJzID0gX19hc3NpZ24oe30sIENvcmVET01XaWRnZXRNb2RlbC5zZXJpYWxpemVycywgeyBjaGlsZHJlbjogeyBkZXNlcmlhbGl6ZTogdW5wYWNrX21vZGVscyB9IH0pO1xuICAgIHJldHVybiBCb3hNb2RlbDtcbn0oQ29yZURPTVdpZGdldE1vZGVsKSk7XG5leHBvcnQgeyBCb3hNb2RlbCB9O1xudmFyIEhCb3hNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSEJveE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhCb3hNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBIQm94TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfdmlld19uYW1lOiAnSEJveFZpZXcnLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdIQm94TW9kZWwnLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBIQm94TW9kZWw7XG59KEJveE1vZGVsKSk7XG5leHBvcnQgeyBIQm94TW9kZWwgfTtcbnZhciBWQm94TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZCb3hNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBWQm94TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgVkJveE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1ZCb3hWaWV3JyxcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnVkJveE1vZGVsJyxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVkJveE1vZGVsO1xufShCb3hNb2RlbCkpO1xuZXhwb3J0IHsgVkJveE1vZGVsIH07XG52YXIgQm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm94VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBCb3hWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEJveFZpZXcucHJvdG90eXBlLl9jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZ05hbWUpIHtcbiAgICAgICAgdGhpcy5wV2lkZ2V0ID0gbmV3IEp1cHl0ZXJQaG9zcGhvclBhbmVsV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XG4gICAgICAgICAgICAvLyBCb3hlcyBkb24ndCBhbGxvdyBzZXR0aW5nIHRoZSBlbGVtZW50IGJleW9uZCB0aGUgaW5pdGlhbCBjcmVhdGlvbi5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc2V0IHRoZSBET00gZWxlbWVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gdGhpcy5wV2lkZ2V0Lm5vZGU7XG4gICAgICAgIHRoaXMuJGVsID0gJCh0aGlzLnBXaWRnZXQubm9kZSk7XG4gICAgfTtcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5fdmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRfY2hpbGRfbW9kZWwsIG51bGwsIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Y2hpbGRyZW4nLCB0aGlzLnVwZGF0ZV9jaGlsZHJlbik7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpib3hfc3R5bGUnLCB0aGlzLnVwZGF0ZV9ib3hfc3R5bGUpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtYm94Jyk7XG4gICAgfTtcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlX2NoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuc2V0X2JveF9zdHlsZSgpO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUudXBkYXRlX2NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSkudGhlbihmdW5jdGlvbiAodmlld3MpIHtcbiAgICAgICAgICAgIC8vIE5vdGlmeSBhbGwgY2hpbGRyZW4gdGhhdCB0aGVpciBzaXplcyBtYXkgaGF2ZSBjaGFuZ2VkLlxuICAgICAgICAgICAgdmlld3MuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VMb29wLnBvc3RNZXNzYWdlKHZpZXcucFdpZGdldCwgV2lkZ2V0LlJlc2l6ZU1lc3NhZ2UuVW5rbm93blNpemUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUudXBkYXRlX2JveF9zdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVfbWFwcGVkX2NsYXNzZXMoQm94Vmlldy5jbGFzc19tYXAsICdib3hfc3R5bGUnKTtcbiAgICB9O1xuICAgIEJveFZpZXcucHJvdG90eXBlLnNldF9ib3hfc3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0X21hcHBlZF9jbGFzc2VzKEJveFZpZXcuY2xhc3NfbWFwLCAnYm94X3N0eWxlJyk7XG4gICAgfTtcbiAgICBCb3hWaWV3LnByb3RvdHlwZS5hZGRfY2hpbGRfbW9kZWwgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gd2UgaW5zZXJ0IGEgZHVtbXkgZWxlbWVudCBzbyB0aGUgb3JkZXIgaXMgcHJlc2VydmVkIHdoZW4gd2UgYWRkXG4gICAgICAgIC8vIHRoZSByZW5kZXJlZCBjb250ZW50IGxhdGVyLlxuICAgICAgICB2YXIgZHVtbXkgPSBuZXcgV2lkZ2V0KCk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRXaWRnZXQoZHVtbXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVfY2hpbGRfdmlldyhtb2RlbCkudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZHVtbXkgd2lkZ2V0IHdpdGggdGhlIG5ldyBvbmUuXG4gICAgICAgICAgICB2YXIgaSA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZihfdGhpcy5wV2lkZ2V0LndpZGdldHMsIGR1bW15KTtcbiAgICAgICAgICAgIF90aGlzLnBXaWRnZXQuaW5zZXJ0V2lkZ2V0KGksIHZpZXcucFdpZGdldCk7XG4gICAgICAgICAgICBkdW1teS5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xuICAgIH07XG4gICAgQm94Vmlldy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzID0gbnVsbDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIEJveFZpZXcuY2xhc3NfbWFwID0ge1xuICAgICAgICBzdWNjZXNzOiBbJ2FsZXJ0JywgJ2FsZXJ0LXN1Y2Nlc3MnXSxcbiAgICAgICAgaW5mbzogWydhbGVydCcsICdhbGVydC1pbmZvJ10sXG4gICAgICAgIHdhcm5pbmc6IFsnYWxlcnQnLCAnYWxlcnQtd2FybmluZyddLFxuICAgICAgICBkYW5nZXI6IFsnYWxlcnQnLCAnYWxlcnQtZGFuZ2VyJ11cbiAgICB9O1xuICAgIHJldHVybiBCb3hWaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBCb3hWaWV3IH07XG52YXIgSEJveFZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEhCb3hWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEhCb3hWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFB1YmxpYyBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIEhCb3hWaWV3LnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcywgcGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMucFdpZGdldC5hZGRDbGFzcygnd2lkZ2V0LWhib3gnKTtcbiAgICB9O1xuICAgIHJldHVybiBIQm94Vmlldztcbn0oQm94VmlldykpO1xuZXhwb3J0IHsgSEJveFZpZXcgfTtcbnZhciBWQm94VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVkJveFZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVkJveFZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHVibGljIGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgVkJveFZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtdmJveCcpO1xuICAgIH07XG4gICAgcmV0dXJuIFZCb3hWaWV3O1xufShCb3hWaWV3KSk7XG5leHBvcnQgeyBWQm94VmlldyB9O1xudmFyIEdyaWRCb3hWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHcmlkQm94VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBHcmlkQm94VmlldygpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBHcmlkQm94Vmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLnBXaWRnZXQuYWRkQ2xhc3MoJ3dpZGdldC1ncmlkYm94Jyk7XG4gICAgICAgIC8vIGRpc3BsYXkgbmVlZG4ndCBiZSBzZXQgdG8gZmxleCBhbmQgZ3JpZCBcbiAgICAgICAgdGhpcy5wV2lkZ2V0LnJlbW92ZUNsYXNzKCd3aWRnZXQtYm94Jyk7XG4gICAgfTtcbiAgICByZXR1cm4gR3JpZEJveFZpZXc7XG59KEJveFZpZXcpKTtcbmV4cG9ydCB7IEdyaWRCb3hWaWV3IH07XG52YXIgR3JpZEJveE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhHcmlkQm94TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gR3JpZEJveE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEdyaWRCb3hNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdHcmlkQm94VmlldycsXG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0dyaWRCb3hNb2RlbCcsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEdyaWRCb3hNb2RlbDtcbn0oQm94TW9kZWwpKTtcbmV4cG9ydCB7IEdyaWRCb3hNb2RlbCB9O1xuIiwiLy8gVHJpbXMgaW5zaWduaWZpY2FudCB6ZXJvcywgZS5nLiwgcmVwbGFjZXMgMS4yMDAwayB3aXRoIDEuMmsuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzKSB7XG4gIG91dDogZm9yICh2YXIgbiA9IHMubGVuZ3RoLCBpID0gMSwgaTAgPSAtMSwgaTE7IGkgPCBuOyArK2kpIHtcbiAgICBzd2l0Y2ggKHNbaV0pIHtcbiAgICAgIGNhc2UgXCIuXCI6IGkwID0gaTEgPSBpOyBicmVhaztcbiAgICAgIGNhc2UgXCIwXCI6IGlmIChpMCA9PT0gMCkgaTAgPSBpOyBpMSA9IGk7IGJyZWFrO1xuICAgICAgZGVmYXVsdDogaWYgKGkwID4gMCkgeyBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGkwID0gMDsgfSBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGkwID4gMCA/IHMuc2xpY2UoMCwgaTApICsgcy5zbGljZShpMSArIDEpIDogcztcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xuaW1wb3J0IHsgQ29yZURlc2NyaXB0aW9uTW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCB7IERlc2NyaXB0aW9uVmlldyB9IGZyb20gJy4vd2lkZ2V0X2Rlc2NyaXB0aW9uJztcbmltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgQ29sb3JQaWNrZXJNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ29sb3JQaWNrZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDb2xvclBpY2tlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbG9yUGlja2VyTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICB2YWx1ZTogJ2JsYWNrJyxcbiAgICAgICAgICAgIGNvbmNpc2U6IGZhbHNlLFxuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdDb2xvclBpY2tlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdDb2xvclBpY2tlclZpZXcnXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENvbG9yUGlja2VyTW9kZWw7XG59KENvcmVEZXNjcmlwdGlvbk1vZGVsKSk7XG5leHBvcnQgeyBDb2xvclBpY2tlck1vZGVsIH07XG52YXIgQ29sb3JQaWNrZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDb2xvclBpY2tlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ29sb3JQaWNrZXJWaWV3KCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2p1cHl0ZXItd2lkZ2V0cycpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1pbmxpbmUtaGJveCcpO1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ3dpZGdldC1jb2xvcnBpY2tlcicpO1xuICAgICAgICB0aGlzLl9jb2xvcl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGhpcy5fY29sb3JfY29udGFpbmVyLmNsYXNzTmFtZSA9ICd3aWRnZXQtaW5saW5lLWhib3ggd2lkZ2V0LWNvbG9ycGlja2VyLWlucHV0JztcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLl9jb2xvcl9jb250YWluZXIpO1xuICAgICAgICB0aGlzLl90ZXh0Ym94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGhpcy5fdGV4dGJveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICB0aGlzLl90ZXh0Ym94LmlkID0gdGhpcy5sYWJlbC5odG1sRm9yID0gdXVpZCgpO1xuICAgICAgICB0aGlzLl9jb2xvcl9jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5fdGV4dGJveCk7XG4gICAgICAgIHRoaXMuX3RleHRib3gudmFsdWUgPSB0aGlzLm1vZGVsLmdldCgndmFsdWUnKTtcbiAgICAgICAgdGhpcy5fY29sb3JwaWNrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0aGlzLl9jb2xvcnBpY2tlci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICAgICAgdGhpcy5fY29sb3JfY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuX2NvbG9ycGlja2VyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOnZhbHVlJywgdGhpcy5fdXBkYXRlX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNvbmNpc2UnLCB0aGlzLl91cGRhdGVfY29uY2lzZSk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV9jb25jaXNlKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZV92YWx1ZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiBUaGUgbW9kZWwgbWF5IGhhdmUgYmVlblxuICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAqL1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBvcHRpb25zLnVwZGF0ZWRfdmlldyAhPSB0aGlzKSB7XG4gICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLm1vZGVsLmdldCgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuX3RleHRib3guZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ycGlja2VyLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLmV2ZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHlwZXNjcmlwdCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhhdCB0aGVzZSBmdW5jdGlvbnMgYXJlIGNhbGxlZCwgc28gd2VcbiAgICAgICAgLy8gc3BlY2lmaWNhbGx5IHVzZSB0aGVtIGhlcmUgc28gaXQga25vd3MgdGhleSBhcmUgYmVpbmcgdXNlZC5cbiAgICAgICAgdm9pZCB0aGlzLl9waWNrZXJfY2hhbmdlO1xuICAgICAgICB2b2lkIHRoaXMuX3RleHRfY2hhbmdlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2NoYW5nZSBbdHlwZT1cImNvbG9yXCJdJzogJ19waWNrZXJfY2hhbmdlJyxcbiAgICAgICAgICAgICdjaGFuZ2UgW3R5cGU9XCJ0ZXh0XCJdJzogJ190ZXh0X2NoYW5nZSdcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3VwZGF0ZV92YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIHRoaXMuX2NvbG9ycGlja2VyLnZhbHVlID0gY29sb3IyaGV4KHZhbHVlKTtcbiAgICAgICAgdGhpcy5fdGV4dGJveC52YWx1ZSA9IHZhbHVlO1xuICAgIH07XG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fdXBkYXRlX2NvbmNpc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb25jaXNlID0gdGhpcy5tb2RlbC5nZXQoJ2NvbmNpc2UnKTtcbiAgICAgICAgaWYgKGNvbmNpc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnY29uY2lzZScpO1xuICAgICAgICAgICAgdGhpcy5fdGV4dGJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdjb25jaXNlJyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0Ym94LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29sb3JQaWNrZXJWaWV3LnByb3RvdHlwZS5fcGlja2VyX2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3ZhbHVlJywgdGhpcy5fY29sb3JwaWNrZXIudmFsdWUpO1xuICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgfTtcbiAgICBDb2xvclBpY2tlclZpZXcucHJvdG90eXBlLl90ZXh0X2NoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsaWRhdGVfY29sb3IodGhpcy5fdGV4dGJveC52YWx1ZSwgdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICB0aGlzLm1vZGVsLnNldCgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIENvbG9yUGlja2VyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX2NvbG9yID0gZnVuY3Rpb24gKGNvbG9yLCBmYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gY29sb3IubWF0Y2goLyNbYS1mQS1GMC05XXszfSg/OlthLWZBLUYwLTldezN9KT8kLykgfHxcbiAgICAgICAgICAgIG5hbWVkX2NvbG9yc1tjb2xvci50b0xvd2VyQ2FzZSgpXSA/IGNvbG9yIDogZmFsbGJhY2s7XG4gICAgfTtcbiAgICByZXR1cm4gQ29sb3JQaWNrZXJWaWV3O1xufShEZXNjcmlwdGlvblZpZXcpKTtcbmV4cG9ydCB7IENvbG9yUGlja2VyVmlldyB9O1xudmFyIG5hbWVkX2NvbG9ycyA9IHsgYWxpY2VibHVlOiAnI2YwZjhmZicsIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLCBhcXVhOiAnIzAwZmZmZicsIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JywgYXp1cmU6ICcjZjBmZmZmJywgYmVpZ2U6ICcjZjVmNWRjJywgYmlzcXVlOiAnI2ZmZTRjNCcsIGJsYWNrOiAnIzAwMDAwMCcsIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsIGJsdWU6ICcjMDAwMGZmJywgYmx1ZXZpb2xldDogJyM4YTJiZTInLCBicm93bjogJyNhNTJhMmEnLCBidXJseXdvb2Q6ICcjZGViODg3JywgY2FkZXRibHVlOiAnIzVmOWVhMCcsIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJywgY2hvY29sYXRlOiAnI2QyNjkxZScsIGNvcmFsOiAnI2ZmN2Y1MCcsIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVlZCcsIGNvcm5zaWxrOiAnI2ZmZjhkYycsIGNyaW1zb246ICcjZGMxNDNjJywgY3lhbjogJyMwMGZmZmYnLCBkYXJrYmx1ZTogJyMwMDAwOGInLCBkYXJrY3lhbjogJyMwMDhiOGInLCBkYXJrZ29sZGVucm9kOiAnI2I4ODYwYicsIGRhcmtncmF5OiAnI2E5YTlhOScsIGRhcmtncmV5OiAnI2E5YTlhOScsIGRhcmtncmVlbjogJyMwMDY0MDAnLCBkYXJra2hha2k6ICcjYmRiNzZiJywgZGFya21hZ2VudGE6ICcjOGIwMDhiJywgZGFya29saXZlZ3JlZW46ICcjNTU2YjJmJywgZGFya29yYW5nZTogJyNmZjhjMDAnLCBkYXJrb3JjaGlkOiAnIzk5MzJjYycsIGRhcmtyZWQ6ICcjOGIwMDAwJywgZGFya3NhbG1vbjogJyNlOTk2N2EnLCBkYXJrc2VhZ3JlZW46ICcjOGZiYzhmJywgZGFya3NsYXRlYmx1ZTogJyM0ODNkOGInLCBkYXJrc2xhdGVncmF5OiAnIzJmNGY0ZicsIGRhcmtzbGF0ZWdyZXk6ICcjMmY0ZjRmJywgZGFya3R1cnF1b2lzZTogJyMwMGNlZDEnLCBkYXJrdmlvbGV0OiAnIzk0MDBkMycsIGRlZXBwaW5rOiAnI2ZmMTQ5MycsIGRlZXBza3libHVlOiAnIzAwYmZmZicsIGRpbWdyYXk6ICcjNjk2OTY5JywgZGltZ3JleTogJyM2OTY5NjknLCBkb2RnZXJibHVlOiAnIzFlOTBmZicsIGZpcmVicmljazogJyNiMjIyMjInLCBmbG9yYWx3aGl0ZTogJyNmZmZhZjAnLCBmb3Jlc3RncmVlbjogJyMyMjhiMjInLCBmdWNoc2lhOiAnI2ZmMDBmZicsIGdhaW5zYm9ybzogJyNkY2RjZGMnLCBnaG9zdHdoaXRlOiAnI2Y4ZjhmZicsIGdvbGQ6ICcjZmZkNzAwJywgZ29sZGVucm9kOiAnI2RhYTUyMCcsIGdyYXk6ICcjODA4MDgwJywgZ3JleTogJyM4MDgwODAnLCBncmVlbjogJyMwMDgwMDAnLCBncmVlbnllbGxvdzogJyNhZGZmMmYnLCBob25leWRldzogJyNmMGZmZjAnLCBob3RwaW5rOiAnI2ZmNjliNCcsIGluZGlhbnJlZDogJyNjZDVjNWMnLCBpbmRpZ286ICcjNGIwMDgyJywgaXZvcnk6ICcjZmZmZmYwJywga2hha2k6ICcjZjBlNjhjJywgbGF2ZW5kZXI6ICcjZTZlNmZhJywgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLCBsYXduZ3JlZW46ICcjN2NmYzAwJywgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsIGxpZ2h0Ymx1ZTogJyNhZGQ4ZTYnLCBsaWdodGNvcmFsOiAnI2YwODA4MCcsIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLCBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLCBsaWdodGdyZWVuOiAnIzkwZWU5MCcsIGxpZ2h0Z3JheTogJyNkM2QzZDMnLCBsaWdodGdyZXk6ICcjZDNkM2QzJywgbGlnaHRwaW5rOiAnI2ZmYjZjMScsIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJywgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsIGxpbWU6ICcjMDBmZjAwJywgbGltZWdyZWVuOiAnIzMyY2QzMicsIGxpbmVuOiAnI2ZhZjBlNicsIG1hZ2VudGE6ICcjZmYwMGZmJywgbWFyb29uOiAnIzgwMDAwMCcsIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZjZGFhJywgbWVkaXVtYmx1ZTogJyMwMDAwY2QnLCBtZWRpdW1vcmNoaWQ6ICcjYmE1NWQzJywgbWVkaXVtcHVycGxlOiAnIzkzNzBkYicsIG1lZGl1bXNlYWdyZWVuOiAnIzNjYjM3MScsIG1lZGl1bXNsYXRlYmx1ZTogJyM3YjY4ZWUnLCBtZWRpdW1zcHJpbmdncmVlbjogJyMwMGZhOWEnLCBtZWRpdW10dXJxdW9pc2U6ICcjNDhkMWNjJywgbWVkaXVtdmlvbGV0cmVkOiAnI2M3MTU4NScsIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLCBtaW50Y3JlYW06ICcjZjVmZmZhJywgbWlzdHlyb3NlOiAnI2ZmZTRlMScsIG1vY2Nhc2luOiAnI2ZmZTRiNScsIG5hdmFqb3doaXRlOiAnI2ZmZGVhZCcsIG5hdnk6ICcjMDAwMDgwJywgb2xkbGFjZTogJyNmZGY1ZTYnLCBvbGl2ZTogJyM4MDgwMDAnLCBvbGl2ZWRyYWI6ICcjNmI4ZTIzJywgb3JhbmdlOiAnI2ZmYTUwMCcsIG9yYW5nZXJlZDogJyNmZjQ1MDAnLCBvcmNoaWQ6ICcjZGE3MGQ2JywgcGFsZWdvbGRlbnJvZDogJyNlZWU4YWEnLCBwYWxlZ3JlZW46ICcjOThmYjk4JywgcGFsZXR1cnF1b2lzZTogJyNhZmVlZWUnLCBwYWxldmlvbGV0cmVkOiAnI2RiNzA5MycsIHBhcGF5YXdoaXA6ICcjZmZlZmQ1JywgcGVhY2hwdWZmOiAnI2ZmZGFiOScsIHBlcnU6ICcjY2Q4NTNmJywgcGluazogJyNmZmMwY2InLCBwbHVtOiAnI2RkYTBkZCcsIHBvd2RlcmJsdWU6ICcjYjBlMGU2JywgcHVycGxlOiAnIzgwMDA4MCcsIHJlZDogJyNmZjAwMDAnLCByb3N5YnJvd246ICcjYmM4ZjhmJywgcm95YWxibHVlOiAnIzQxNjllMScsIHNhZGRsZWJyb3duOiAnIzhiNDUxMycsIHNhbG1vbjogJyNmYTgwNzInLCBzYW5keWJyb3duOiAnI2Y0YTQ2MCcsIHNlYWdyZWVuOiAnIzJlOGI1NycsIHNlYXNoZWxsOiAnI2ZmZjVlZScsIHNpZW5uYTogJyNhMDUyMmQnLCBzaWx2ZXI6ICcjYzBjMGMwJywgc2t5Ymx1ZTogJyM4N2NlZWInLCBzbGF0ZWJsdWU6ICcjNmE1YWNkJywgc2xhdGVncmF5OiAnIzcwODA5MCcsIHNsYXRlZ3JleTogJyM3MDgwOTAnLCBzbm93OiAnI2ZmZmFmYScsIHNwcmluZ2dyZWVuOiAnIzAwZmY3ZicsIHN0ZWVsYmx1ZTogJyM0NjgyYjQnLCB0YW46ICcjZDJiNDhjJywgdGVhbDogJyMwMDgwODAnLCB0aGlzdGxlOiAnI2Q4YmZkOCcsIHRvbWF0bzogJyNmZjYzNDcnLCB0dXJxdW9pc2U6ICcjNDBlMGQwJywgdmlvbGV0OiAnI2VlODJlZScsIHdoZWF0OiAnI2Y1ZGViMycsIHdoaXRlOiAnI2ZmZmZmZicsIHdoaXRlc21va2U6ICcjZjVmNWY1JywgeWVsbG93OiAnI2ZmZmYwMCcsIHllbGxvd2dyZWVuOiAnIzlhY2QzMicsIH07XG4vKlxuICogRnJvbSBhIHZhbGlkIGh0bWwgY29sb3IgKG5hbWVkIGNvbG9yLCA2LWRpZ2l0cyBvciAzLWRpZ2l0cyBoZXggZm9ybWF0KVxuICogcmV0dXJuIGEgNi1kaWdpdHMgaGV4YWRlY2ltYWwgY29sb3IgI3JyZ2diYi5cbiAqL1xuZnVuY3Rpb24gY29sb3IyaGV4KGNvbG9yKSB7XG4gICAgcmV0dXJuIG5hbWVkX2NvbG9yc1tjb2xvci50b0xvd2VyQ2FzZSgpXSB8fCByZ2IzX3RvX3JnYjYoY29sb3IpO1xufVxuZnVuY3Rpb24gcmdiM190b19yZ2I2KHJnYikge1xuICAgIGlmIChyZ2IubGVuZ3RoID09PSA3KSB7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gJyMnICsgcmdiLmNoYXJBdCgxKSArIHJnYi5jaGFyQXQoMSkgK1xuICAgICAgICAgICAgcmdiLmNoYXJBdCgyKSArIHJnYi5jaGFyQXQoMikgK1xuICAgICAgICAgICAgcmdiLmNoYXJBdCgzKSArIHJnYi5jaGFyQXQoMyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZ3JvdXBpbmcsIHRob3VzYW5kcykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUsIHdpZHRoKSB7XG4gICAgdmFyIGkgPSB2YWx1ZS5sZW5ndGgsXG4gICAgICAgIHQgPSBbXSxcbiAgICAgICAgaiA9IDAsXG4gICAgICAgIGcgPSBncm91cGluZ1swXSxcbiAgICAgICAgbGVuZ3RoID0gMDtcblxuICAgIHdoaWxlIChpID4gMCAmJiBnID4gMCkge1xuICAgICAgaWYgKGxlbmd0aCArIGcgKyAxID4gd2lkdGgpIGcgPSBNYXRoLm1heCgxLCB3aWR0aCAtIGxlbmd0aCk7XG4gICAgICB0LnB1c2godmFsdWUuc3Vic3RyaW5nKGkgLT0gZywgaSArIGcpKTtcbiAgICAgIGlmICgobGVuZ3RoICs9IGcgKyAxKSA+IHdpZHRoKSBicmVhaztcbiAgICAgIGcgPSBncm91cGluZ1tqID0gKGogKyAxKSAlIGdyb3VwaW5nLmxlbmd0aF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHQucmV2ZXJzZSgpLmpvaW4odGhvdXNhbmRzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXREZWNpbWFsIGZyb20gXCIuL2Zvcm1hdERlY2ltYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWwoTWF0aC5hYnMoeCkpLCB4ID8geFsxXSA6IE5hTjtcbn1cbiIsIi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWwoMS4yMykgcmV0dXJucyBbXCIxMjNcIiwgMF0uXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIGlmICgoaSA9ICh4ID0gcCA/IHgudG9FeHBvbmVudGlhbChwIC0gMSkgOiB4LnRvRXhwb25lbnRpYWwoKSkuaW5kZXhPZihcImVcIikpIDwgMCkgcmV0dXJuIG51bGw7IC8vIE5hTiwgwrFJbmZpbml0eVxuICB2YXIgaSwgY29lZmZpY2llbnQgPSB4LnNsaWNlKDAsIGkpO1xuXG4gIC8vIFRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgdG9FeHBvbmVudGlhbCBlaXRoZXIgaGFzIHRoZSBmb3JtIFxcZFxcLlxcZCtlWy0rXVxcZCtcbiAgLy8gKGUuZy4sIDEuMmUrMykgb3IgdGhlIGZvcm0gXFxkZVstK11cXGQrIChlLmcuLCAxZSszKS5cbiAgcmV0dXJuIFtcbiAgICBjb2VmZmljaWVudC5sZW5ndGggPiAxID8gY29lZmZpY2llbnRbMF0gKyBjb2VmZmljaWVudC5zbGljZSgyKSA6IGNvZWZmaWNpZW50LFxuICAgICt4LnNsaWNlKGkgKyAxKVxuICBdO1xufVxuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBET01XaWRnZXRWaWV3LCBWaWV3TGlzdCB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBCb3hNb2RlbCB9IGZyb20gJy4vd2lkZ2V0X2JveCc7XG5pbXBvcnQgeyBUYWJQYW5lbCB9IGZyb20gJy4vcGhvc3Bob3IvdGFicGFuZWwnO1xuaW1wb3J0IHsgQWNjb3JkaW9uIH0gZnJvbSAnLi9waG9zcGhvci9hY2NvcmRpb24nO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnQHBob3NwaG9yL3dpZGdldHMnO1xuaW1wb3J0IHsgZWFjaCwgQXJyYXlFeHQgfSBmcm9tICdAcGhvc3Bob3IvYWxnb3JpdGhtJztcbmltcG9ydCB7IE1lc3NhZ2VMb29wIH0gZnJvbSAnQHBob3NwaG9yL21lc3NhZ2luZyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xudmFyIFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhTZWxlY3Rpb25Db250YWluZXJNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25Db250YWluZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBTZWxlY3Rpb25Db250YWluZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnU2VsZWN0aW9uQ29udGFpbmVyTW9kZWwnLFxuICAgICAgICAgICAgc2VsZWN0ZWRfaW5kZXg6IDAsXG4gICAgICAgICAgICBfdGl0bGVzOiB7fVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBTZWxlY3Rpb25Db250YWluZXJNb2RlbDtcbn0oQm94TW9kZWwpKTtcbmV4cG9ydCB7IFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsIH07XG52YXIgQWNjb3JkaW9uTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFjY29yZGlvbk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjY29yZGlvbk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEFjY29yZGlvbk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdBY2NvcmRpb25Nb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnQWNjb3JkaW9uVmlldydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQWNjb3JkaW9uTW9kZWw7XG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XG5leHBvcnQgeyBBY2NvcmRpb25Nb2RlbCB9O1xuLy8gV2UgaW1wbGVtZW50IG91ciBvd24gdGFiIHdpZGdldCBzaW5jZSBQaG9zaHBvcidzIFRhYlBhbmVsIHVzZXMgYW4gYWJzb2x1dGVcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cbnZhciBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdmlldyA9IG9wdGlvbnMudmlldztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJvY2VzcyB0aGUgcGhvc3Bob3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEFueSBjdXN0b20gcGhvc3Bob3Igd2lkZ2V0IHVzZWQgaW5zaWRlIGEgSnVweXRlciB3aWRnZXQgc2hvdWxkIG92ZXJyaWRlXG4gICAgICogdGhlIHByb2Nlc3NNZXNzYWdlIGZ1bmN0aW9uIGxpa2UgdGhpcy5cbiAgICAgKi9cbiAgICBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQucHJvdG90eXBlLnByb2Nlc3NNZXNzYWdlID0gZnVuY3Rpb24gKG1zZykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnByb2Nlc3NNZXNzYWdlLmNhbGwodGhpcywgbXNnKTtcbiAgICAgICAgdGhpcy5fdmlldy5wcm9jZXNzUGhvc3Bob3JNZXNzYWdlKG1zZyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEaXNwb3NlIHRoZSB3aWRnZXQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhdXNlcyB0aGUgdmlldyB0byBiZSBkZXN0cm95ZWQgYXMgd2VsbCB3aXRoICdyZW1vdmUnXG4gICAgICovXG4gICAgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl92aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEp1cHl0ZXJQaG9zcGhvckFjY29yZGlvbldpZGdldDtcbn0oQWNjb3JkaW9uKSk7XG5leHBvcnQgeyBKdXB5dGVyUGhvc3Bob3JBY2NvcmRpb25XaWRnZXQgfTtcbnZhciBBY2NvcmRpb25WaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhBY2NvcmRpb25WaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEFjY29yZGlvblZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUuX2NyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnTmFtZSkge1xuICAgICAgICB0aGlzLnBXaWRnZXQgPSBuZXcgSnVweXRlclBob3NwaG9yQWNjb3JkaW9uV2lkZ2V0KHsgdmlldzogdGhpcyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XG4gICAgICAgICAgICAvLyBBY2NvcmRpb25zIGRvbid0IGFsbG93IHNldHRpbmcgdGhlIGVsZW1lbnQgYmV5b25kIHRoZSBpbml0aWFsIGNyZWF0aW9uLlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVzZXQgdGhlIERPTSBlbGVtZW50LicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWwgPSB0aGlzLnBXaWRnZXQubm9kZTtcbiAgICAgICAgdGhpcy4kZWwgPSAkKHRoaXMucFdpZGdldC5ub2RlKTtcbiAgICB9O1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbl92aWV3cyA9IG5ldyBWaWV3TGlzdCh0aGlzLmFkZF9jaGlsZF92aWV3LCB0aGlzLnJlbW92ZV9jaGlsZF92aWV3LCB0aGlzKTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOmNoaWxkcmVuJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGRyZW4oKTsgfSk7XG4gICAgICAgIHRoaXMubGlzdGVuVG8odGhpcy5tb2RlbCwgJ2NoYW5nZTpzZWxlY3RlZF9pbmRleCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZV9zZWxlY3RlZF9pbmRleCgpOyB9KTtcbiAgICAgICAgdGhpcy5saXN0ZW5Ubyh0aGlzLm1vZGVsLCAnY2hhbmdlOl90aXRsZXMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVfdGl0bGVzKCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gdmlldyBpcyByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHZhciBhY2NvcmRpb24gPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIGFjY29yZGlvbi5hZGRDbGFzcygnd2lkZ2V0LWFjY29yZGlvbicpO1xuICAgICAgICBhY2NvcmRpb24uYWRkQ2xhc3MoJ3dpZGdldC1jb250YWluZXInKTtcbiAgICAgICAgYWNjb3JkaW9uLnNlbGVjdGlvbi5zZWxlY3Rpb25DaGFuZ2VkLmNvbm5lY3QoZnVuY3Rpb24gKHNlbmRlcikge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy51cGRhdGluZ0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMubW9kZWwuc2V0KCdzZWxlY3RlZF9pbmRleCcsIGFjY29yZGlvbi5zZWxlY3Rpb24uaW5kZXgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XG4gICAgICAgIHRoaXMudXBkYXRlX3RpdGxlcygpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9zZWxlY3RlZF9pbmRleCgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNoaWxkcmVuXG4gICAgICovXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUudXBkYXRlQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdoaWxlIHdlIGFyZSB1cGRhdGluZywgdGhlIGluZGV4IG1heSBub3QgYmUgdmFsaWQsIHNvIGRlc2VsZWN0IHRoZVxuICAgICAgICAvLyB0YWJzIGJlZm9yZSB1cGRhdGluZyBzbyB3ZSBkb24ndCBnZXQgc3B1cmlvdXMgY2hhbmdlcyBpbiB0aGUgaW5kZXgsXG4gICAgICAgIC8vIHdoaWNoIHdvdWxkIHRoZW4gc2V0IG9mZiBhbm90aGVyIHN5bmMgY3ljbGUuXG4gICAgICAgIHRoaXMudXBkYXRpbmdDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucFdpZGdldC5zZWxlY3Rpb24uaW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzLnVwZGF0ZSh0aGlzLm1vZGVsLmdldCgnY2hpbGRyZW4nKSk7XG4gICAgICAgIHRoaXMudXBkYXRlX3NlbGVjdGVkX2luZGV4KCk7XG4gICAgICAgIHRoaXMudXBkYXRpbmdDaGlsZHJlbiA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0IGhlYWRlciB0aXRsZXNcbiAgICAgKi9cbiAgICBBY2NvcmRpb25WaWV3LnByb3RvdHlwZS51cGRhdGVfdGl0bGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29sbGFwc2VkID0gdGhpcy5wV2lkZ2V0LmNvbGxhcHNlV2lkZ2V0cztcbiAgICAgICAgdmFyIHRpdGxlcyA9IHRoaXMubW9kZWwuZ2V0KCdfdGl0bGVzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sbGFwc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGl0bGVzW2ldICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWRbaV0ud2lkZ2V0LnRpdGxlLmxhYmVsID0gdGl0bGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYWtlIHRoZSByZW5kZXJpbmcgYW5kIHNlbGVjdGVkIGluZGV4IGNvbnNpc3RlbnQuXG4gICAgICovXG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUudXBkYXRlX3NlbGVjdGVkX2luZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBXaWRnZXQuc2VsZWN0aW9uLmluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkX2luZGV4Jyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiBhIGNoaWxkIGlzIHJlbW92ZWQgZnJvbSBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLnJlbW92ZV9jaGlsZF92aWV3ID0gZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LnJlbW92ZVdpZGdldCh2aWV3LnBXaWRnZXQpO1xuICAgICAgICB2aWV3LnJlbW92ZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyBhZGRlZCB0byBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIEFjY29yZGlvblZpZXcucHJvdG90eXBlLmFkZF9jaGlsZF92aWV3ID0gZnVuY3Rpb24gKG1vZGVsLCBpbmRleCkge1xuICAgICAgICAvLyBQbGFjZWhvbGRlciB3aWRnZXQgdG8ga2VlcCBvdXIgcG9zaXRpb24gaW4gdGhlIHRhYiBwYW5lbCB3aGlsZSB3ZSBjcmVhdGUgdGhlIHZpZXcuXG4gICAgICAgIHZhciBhY2NvcmRpb24gPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgcGxhY2Vob2xkZXIudGl0bGUubGFiZWwgPSB0aGlzLm1vZGVsLmdldCgnX3RpdGxlcycpW2luZGV4XSB8fCAnJztcbiAgICAgICAgYWNjb3JkaW9uLmFkZFdpZGdldChwbGFjZWhvbGRlcik7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZV9jaGlsZF92aWV3KG1vZGVsKS50aGVuKGZ1bmN0aW9uICh2aWV3KSB7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gdmlldy5wV2lkZ2V0O1xuICAgICAgICAgICAgd2lkZ2V0LnRpdGxlLmxhYmVsID0gcGxhY2Vob2xkZXIudGl0bGUubGFiZWw7XG4gICAgICAgICAgICB2YXIgY29sbGFwc2UgPSBhY2NvcmRpb24uY29sbGFwc2VXaWRnZXRzW2FjY29yZGlvbi5pbmRleE9mKHBsYWNlaG9sZGVyKV07XG4gICAgICAgICAgICBjb2xsYXBzZS53aWRnZXQgPSB3aWRnZXQ7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xuICAgIH07XG4gICAgQWNjb3JkaW9uVmlldy5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuX3ZpZXdzID0gbnVsbDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW1vdmUuY2FsbCh0aGlzKTtcbiAgICB9O1xuICAgIHJldHVybiBBY2NvcmRpb25WaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBBY2NvcmRpb25WaWV3IH07XG52YXIgVGFiTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFRhYk1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYk1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIFRhYk1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdUYWJNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnVGFiVmlldydcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gVGFiTW9kZWw7XG59KFNlbGVjdGlvbkNvbnRhaW5lck1vZGVsKSk7XG5leHBvcnQgeyBUYWJNb2RlbCB9O1xuLy8gV2UgaW1wbGVtZW50IG91ciBvd24gdGFiIHdpZGdldCBzaW5jZSBQaG9zaHBvcidzIFRhYlBhbmVsIHVzZXMgYW4gYWJzb2x1dGVcbi8vIHBvc2l0aW9uaW5nIEJveExheW91dCwgYnV0IHdlIHdhbnQgYSBtb3JlIGFuIGh0bWwvY3NzLWJhc2VkIFBhbmVsIGxheW91dC5cbnZhciBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQob3B0aW9ucykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgdmlldyA9IG9wdGlvbnMudmlldztcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMudmlldztcbiAgICAgICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBvcHRpb25zKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdmlldyA9IHZpZXc7XG4gICAgICAgIC8vIFdlIHdhbnQgdGhlIHZpZXcncyBtZXNzYWdlcyB0byBiZSB0aGUgbWVzc2FnZXMgdGhlIHRhYkNvbnRlbnRzIHBhbmVsXG4gICAgICAgIC8vIGdldHMuXG4gICAgICAgIE1lc3NhZ2VMb29wLmluc3RhbGxNZXNzYWdlSG9vayhfdGhpcy50YWJDb250ZW50cywgZnVuY3Rpb24gKGhhbmRsZXIsIG1zZykge1xuICAgICAgICAgICAgLy8gVGhlcmUgbWF5IGJlIHRpbWVzIHdoZW4gd2Ugd2FudCB0aGUgdmlldydzIGhhbmRsZXIgdG8gYmUgY2FsbGVkXG4gICAgICAgICAgICAvLyAqYWZ0ZXIqIHRoZSBtZXNzYWdlIGhhcyBiZWVuIHByb2Nlc3NlZCBieSB0aGUgd2lkZ2V0LCBpbiB3aGljaFxuICAgICAgICAgICAgLy8gY2FzZSB3ZSdsbCBuZWVkIHRvIHJldmlzaXQgdXNpbmcgYSBtZXNzYWdlIGhvb2suXG4gICAgICAgICAgICBfdGhpcy5fdmlldy5wcm9jZXNzUGhvc3Bob3JNZXNzYWdlKG1zZyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogRGlzcG9zZSB0aGUgd2lkZ2V0LlxuICAgICAqXG4gICAgICogVGhpcyBjYXVzZXMgdGhlIHZpZXcgdG8gYmUgZGVzdHJveWVkIGFzIHdlbGwgd2l0aCAncmVtb3ZlJ1xuICAgICAqL1xuICAgIEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0LnByb3RvdHlwZS5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc0Rpc3Bvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5kaXNwb3NlLmNhbGwodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLl92aWV3KSB7XG4gICAgICAgICAgICB0aGlzLl92aWV3LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEp1cHl0ZXJQaG9zcGhvclRhYlBhbmVsV2lkZ2V0O1xufShUYWJQYW5lbCkpO1xuZXhwb3J0IHsgSnVweXRlclBob3NwaG9yVGFiUGFuZWxXaWRnZXQgfTtcbnZhciBUYWJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhUYWJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFRhYlZpZXcoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy51cGRhdGluZ1RhYnMgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gICAgICAgIHRoaXMucFdpZGdldCA9IG5ldyBKdXB5dGVyUGhvc3Bob3JUYWJQYW5lbFdpZGdldCh7XG4gICAgICAgICAgICB2aWV3OiB0aGlzLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucFdpZGdldC5ub2RlO1xuICAgIH07XG4gICAgVGFiVmlldy5wcm90b3R5cGUuX3NldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwgfHwgZWwgIT09IHRoaXMucFdpZGdldC5ub2RlKSB7XG4gICAgICAgICAgICAvLyBUYWJWaWV3cyBkb24ndCBhbGxvdyBzZXR0aW5nIHRoZSBlbGVtZW50IGJleW9uZCB0aGUgaW5pdGlhbCBjcmVhdGlvbi5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlc2V0IHRoZSBET00gZWxlbWVudC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gdGhpcy5wV2lkZ2V0Lm5vZGU7XG4gICAgICAgIHRoaXMuJGVsID0gJCh0aGlzLnBXaWRnZXQubm9kZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBQdWJsaWMgY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgVGFiVmlldy5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIHBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmNoaWxkcmVuVmlld3MgPSBuZXcgVmlld0xpc3QodGhpcy5hZGRDaGlsZFZpZXcsIGZ1bmN0aW9uICh2aWV3KSB7IHZpZXcucmVtb3ZlKCk7IH0sIHRoaXMpO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6Y2hpbGRyZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVUYWJzKCk7IH0pO1xuICAgICAgICB0aGlzLmxpc3RlblRvKHRoaXMubW9kZWwsICdjaGFuZ2U6X3RpdGxlcycsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnVwZGF0ZVRpdGxlcygpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHZpZXcgaXMgcmVuZGVyZWQuXG4gICAgICovXG4gICAgVGFiVmlldy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMucFdpZGdldDtcbiAgICAgICAgdGFicy5hZGRDbGFzcygnanVweXRlci13aWRnZXRzJyk7XG4gICAgICAgIHRhYnMuYWRkQ2xhc3MoJ3dpZGdldC1jb250YWluZXInKTtcbiAgICAgICAgdGFicy5hZGRDbGFzcygnd2lkZ2V0LXRhYicpO1xuICAgICAgICB0YWJzLnRhYnNNb3ZhYmxlID0gdHJ1ZTtcbiAgICAgICAgdGFicy50YWJCYXIuaW5zZXJ0QmVoYXZpb3IgPSAnbm9uZSc7IC8vIG5lZWRlZCBmb3IgaW5zZXJ0IGJlaGF2aW9yLCBzZWUgYmVsb3cuXG4gICAgICAgIHRhYnMudGFiQmFyLmN1cnJlbnRDaGFuZ2VkLmNvbm5lY3QodGhpcy5fb25UYWJDaGFuZ2VkLCB0aGlzKTtcbiAgICAgICAgdGFicy50YWJCYXIudGFiTW92ZWQuY29ubmVjdCh0aGlzLl9vblRhYk1vdmVkLCB0aGlzKTtcbiAgICAgICAgdGFicy50YWJCYXIuYWRkQ2xhc3MoJ3dpZGdldC10YWItYmFyJyk7XG4gICAgICAgIHRhYnMudGFiQ29udGVudHMuYWRkQ2xhc3MoJ3dpZGdldC10YWItY29udGVudHMnKTtcbiAgICAgICAgLy8gVE9ETzogZXhwb3NlIHRoaXMgb3B0aW9uIGluIHB5dGhvblxuICAgICAgICB0YWJzLnRhYkJhci50YWJzTW92YWJsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhYnMoKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbmRlciB0YWIgdmlld3MgYmFzZWQgb24gdGhlIGN1cnJlbnQgbW9kZWwncyBjaGlsZHJlbi5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGVUYWJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBXaGlsZSB3ZSBhcmUgdXBkYXRpbmcsIHRoZSBpbmRleCBtYXkgbm90IGJlIHZhbGlkLCBzbyBkZXNlbGVjdCB0aGVcbiAgICAgICAgLy8gdGFicyBiZWZvcmUgdXBkYXRpbmcgc28gd2UgZG9uJ3QgZ2V0IHNwdXJpb3VzIGNoYW5nZXMgaW4gdGhlIGluZGV4LFxuICAgICAgICAvLyB3aGljaCB3b3VsZCB0aGVuIHNldCBvZmYgYW5vdGhlciBzeW5jIGN5Y2xlLlxuICAgICAgICB0aGlzLnVwZGF0aW5nVGFicyA9IHRydWU7XG4gICAgICAgIHRoaXMucFdpZGdldC5jdXJyZW50SW5kZXggPSBudWxsO1xuICAgICAgICB0aGlzLmNoaWxkcmVuVmlld3MudXBkYXRlKHRoaXMubW9kZWwuZ2V0KCdjaGlsZHJlbicpKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmN1cnJlbnRJbmRleCA9IHRoaXMubW9kZWwuZ2V0KCdzZWxlY3RlZF9pbmRleCcpO1xuICAgICAgICB0aGlzLnVwZGF0aW5nVGFicyA9IGZhbHNlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBjaGlsZCBpcyBhZGRlZCB0byBjaGlsZHJlbiBsaXN0LlxuICAgICAqL1xuICAgIFRhYlZpZXcucHJvdG90eXBlLmFkZENoaWxkVmlldyA9IGZ1bmN0aW9uIChtb2RlbCwgaW5kZXgpIHtcbiAgICAgICAgLy8gUGxhY2Vob2xkZXIgd2lkZ2V0IHRvIGtlZXAgb3VyIHBvc2l0aW9uIGluIHRoZSB0YWIgcGFuZWwgd2hpbGUgd2UgY3JlYXRlIHRoZSB2aWV3LlxuICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm1vZGVsLmdldCgnX3RpdGxlcycpW2luZGV4XSB8fCAnJztcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnBXaWRnZXQ7XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG5ldyBXaWRnZXQoKTtcbiAgICAgICAgcGxhY2Vob2xkZXIudGl0bGUubGFiZWwgPSBsYWJlbDtcbiAgICAgICAgdGFicy5hZGRXaWRnZXQocGxhY2Vob2xkZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVfY2hpbGRfdmlldyhtb2RlbCkudGhlbihmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHZpZXcucFdpZGdldDtcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHBsYWNlaG9sZGVyLnRpdGxlLmxhYmVsO1xuICAgICAgICAgICAgd2lkZ2V0LnRpdGxlLmNsb3NhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgaSA9IEFycmF5RXh0LmZpcnN0SW5kZXhPZih0YWJzLndpZGdldHMsIHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIC8vIGluc2VydCBhZnRlciBwbGFjZWhvbGRlciBzbyB0aGF0IGlmIHBsYWNob2xkZXIgaXMgc2VsZWN0ZWQsIHRoZVxuICAgICAgICAgICAgLy8gcmVhbCB3aWRnZXQgd2lsbCBiZSBzZWxlY3RlZCBub3cgKHRoaXMgZGVwZW5kcyBvbiB0aGUgdGFiIGJhclxuICAgICAgICAgICAgLy8gaW5zZXJ0IGJlaGF2aW9yKVxuICAgICAgICAgICAgdGFicy5pbnNlcnRXaWRnZXQoaSArIDEsIHdpZGdldCk7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICByZXR1cm4gdmlldztcbiAgICAgICAgfSkuY2F0Y2godXRpbHMucmVqZWN0KCdDb3VsZCBub3QgYWRkIGNoaWxkIHZpZXcgdG8gYm94JywgdHJ1ZSkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBjb250ZW50cyBvZiB0aGlzIHZpZXdcbiAgICAgKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBtb2RlbCBpcyBjaGFuZ2VkLiAgVGhlIG1vZGVsIG1heSBoYXZlIGJlZW5cbiAgICAgKiBjaGFuZ2VkIGJ5IGFub3RoZXIgdmlldyBvciBieSBhIHN0YXRlIHVwZGF0ZSBmcm9tIHRoZSBiYWNrLWVuZC5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgc2VsZWN0ZWQgaW5kZXggaW4gdGhlIG92ZXJhbGwgdXBkYXRlIG1ldGhvZCBiZWNhdXNlIGl0XG4gICAgICAgIC8vIHNob3VsZCBiZSBydW4gYWZ0ZXIgdGhlIHRhYnMgaGF2ZSBiZWVuIHVwZGF0ZWQuIE90aGVyd2lzZSB0aGVcbiAgICAgICAgLy8gc2VsZWN0ZWQgaW5kZXggbWF5IG5vdCBiZSBhIHZhbGlkIHRhYiBpbiB0aGUgdGFiIGJhci5cbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XG4gICAgICAgIHJldHVybiBfc3VwZXIucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgdGFiIHBhZ2UgdGl0bGVzLlxuICAgICAqL1xuICAgIFRhYlZpZXcucHJvdG90eXBlLnVwZGF0ZVRpdGxlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRpdGxlcyA9IHRoaXMubW9kZWwuZ2V0KCdfdGl0bGVzJykgfHwge307XG4gICAgICAgIGVhY2godGhpcy5wV2lkZ2V0LndpZGdldHMsIGZ1bmN0aW9uICh3aWRnZXQsIGkpIHtcbiAgICAgICAgICAgIHdpZGdldC50aXRsZS5sYWJlbCA9IHRpdGxlc1tpXSB8fCAnJztcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzZWxlY3RlZCBpbmRleC5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS51cGRhdGVTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBXaWRnZXQuY3VycmVudEluZGV4ID0gdGhpcy5tb2RlbC5nZXQoJ3NlbGVjdGVkX2luZGV4Jyk7XG4gICAgfTtcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5WaWV3cyA9IG51bGw7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fb25UYWJDaGFuZ2VkID0gZnVuY3Rpb24gKHNlbmRlciwgYXJncykge1xuICAgICAgICBpZiAoIXRoaXMudXBkYXRpbmdUYWJzKSB7XG4gICAgICAgICAgICB2YXIgaSA9IGFyZ3MuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgdGhpcy5tb2RlbC5zZXQoJ3NlbGVjdGVkX2luZGV4JywgaSA9PT0gLTEgPyBudWxsIDogaSk7XG4gICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgYHRhYk1vdmVkYCBzaWduYWwgZnJvbSB0aGUgdGFiIGJhci5cbiAgICAgKi9cbiAgICBUYWJWaWV3LnByb3RvdHlwZS5fb25UYWJNb3ZlZCA9IGZ1bmN0aW9uIChzZW5kZXIsIGFyZ3MpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5tb2RlbC5nZXQoJ2NoaWxkcmVuJykuc2xpY2UoKTtcbiAgICAgICAgQXJyYXlFeHQubW92ZShjaGlsZHJlbiwgYXJncy5mcm9tSW5kZXgsIGFyZ3MudG9JbmRleCk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCdjaGlsZHJlbicsIGNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy50b3VjaCgpO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYlZpZXc7XG59KERPTVdpZGdldFZpZXcpKTtcbmV4cG9ydCB7IFRhYlZpZXcgfTtcbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXREZWZhdWx0TG9jYWxlLCBmb3JtYXQsIGZvcm1hdFByZWZpeH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZVwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdExvY2FsZX0gZnJvbSBcIi4vbG9jYWxlXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZm9ybWF0U3BlY2lmaWVyfSBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXJcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25GaXhlZH0gZnJvbSBcIi4vcHJlY2lzaW9uRml4ZWRcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25QcmVmaXh9IGZyb20gXCIuL3ByZWNpc2lvblByZWZpeFwiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiLi9wcmVjaXNpb25Sb3VuZFwiO1xuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50XCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXBcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFsc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXJcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW1cIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0b1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5XCI7XG5cbnZhciBwcmVmaXhlcyA9IFtcInlcIixcInpcIixcImFcIixcImZcIixcInBcIixcIm5cIixcIsK1XCIsXCJtXCIsXCJcIixcImtcIixcIk1cIixcIkdcIixcIlRcIixcIlBcIixcIkVcIixcIlpcIixcIllcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGxvY2FsZSkge1xuICB2YXIgZ3JvdXAgPSBsb2NhbGUuZ3JvdXBpbmcgJiYgbG9jYWxlLnRob3VzYW5kcyA/IGZvcm1hdEdyb3VwKGxvY2FsZS5ncm91cGluZywgbG9jYWxlLnRob3VzYW5kcykgOiBpZGVudGl0eSxcbiAgICAgIGN1cnJlbmN5ID0gbG9jYWxlLmN1cnJlbmN5LFxuICAgICAgZGVjaW1hbCA9IGxvY2FsZS5kZWNpbWFsLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPyBmb3JtYXROdW1lcmFscyhsb2NhbGUubnVtZXJhbHMpIDogaWRlbnRpdHksXG4gICAgICBwZXJjZW50ID0gbG9jYWxlLnBlcmNlbnQgfHwgXCIlXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT0gbnVsbCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5WzBdIDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lbMV0gOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PSBudWxsID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhciB2YWx1ZU5lZ2F0aXZlID0gdmFsdWUgPCAwO1xuICAgICAgICB2YWx1ZSA9IGZvcm1hdFR5cGUoTWF0aC5hYnModmFsdWUpLCBwcmVjaXNpb24pO1xuXG4gICAgICAgIC8vIFRyaW0gaW5zaWduaWZpY2FudCB6ZXJvcy5cbiAgICAgICAgaWYgKHRyaW0pIHZhbHVlID0gZm9ybWF0VHJpbSh2YWx1ZSk7XG5cbiAgICAgICAgLy8gSWYgYSBuZWdhdGl2ZSB2YWx1ZSByb3VuZHMgdG8gemVybyBkdXJpbmcgZm9ybWF0dGluZywgdHJlYXQgYXMgcG9zaXRpdmUuXG4gICAgICAgIGlmICh2YWx1ZU5lZ2F0aXZlICYmICt2YWx1ZSA9PT0gMCkgdmFsdWVOZWdhdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHByZWZpeCBhbmQgc3VmZml4LlxuICAgICAgICB2YWx1ZVByZWZpeCA9ICh2YWx1ZU5lZ2F0aXZlID8gKHNpZ24gPT09IFwiKFwiID8gc2lnbiA6IFwiLVwiKSA6IHNpZ24gPT09IFwiLVwiIHx8IHNpZ24gPT09IFwiKFwiID8gXCJcIiA6IHNpZ24pICsgdmFsdWVQcmVmaXg7XG4gICAgICAgIHZhbHVlU3VmZml4ID0gKHR5cGUgPT09IFwic1wiID8gcHJlZml4ZXNbOCArIHByZWZpeEV4cG9uZW50IC8gM10gOiBcIlwiKSArIHZhbHVlU3VmZml4ICsgKHZhbHVlTmVnYXRpdmUgJiYgc2lnbiA9PT0gXCIoXCIgPyBcIilcIiA6IFwiXCIpO1xuXG4gICAgICAgIC8vIEJyZWFrIHRoZSBmb3JtYXR0ZWQgdmFsdWUgaW50byB0aGUgaW50ZWdlciDigJx2YWx1ZeKAnSBwYXJ0IHRoYXQgY2FuIGJlXG4gICAgICAgIC8vIGdyb3VwZWQsIGFuZCBmcmFjdGlvbmFsIG9yIGV4cG9uZW50aWFsIOKAnHN1ZmZpeOKAnSBwYXJ0IHRoYXQgaXMgbm90LlxuICAgICAgICBpZiAobWF5YmVTdWZmaXgpIHtcbiAgICAgICAgICBpID0gLTEsIG4gPSB2YWx1ZS5sZW5ndGg7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgICAgICAgIGlmIChjID0gdmFsdWUuY2hhckNvZGVBdChpKSwgNDggPiBjIHx8IGMgPiA1Nykge1xuICAgICAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IChjID09PSA0NiA/IGRlY2ltYWwgKyB2YWx1ZS5zbGljZShpICsgMSkgOiB2YWx1ZS5zbGljZShpKSkgKyB2YWx1ZVN1ZmZpeDtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBub3QgXCIwXCIsIGdyb3VwaW5nIGlzIGFwcGxpZWQgYmVmb3JlIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgIXplcm8pIHZhbHVlID0gZ3JvdXAodmFsdWUsIEluZmluaXR5KTtcblxuICAgICAgLy8gQ29tcHV0ZSB0aGUgcGFkZGluZy5cbiAgICAgIHZhciBsZW5ndGggPSB2YWx1ZVByZWZpeC5sZW5ndGggKyB2YWx1ZS5sZW5ndGggKyB2YWx1ZVN1ZmZpeC5sZW5ndGgsXG4gICAgICAgICAgcGFkZGluZyA9IGxlbmd0aCA8IHdpZHRoID8gbmV3IEFycmF5KHdpZHRoIC0gbGVuZ3RoICsgMSkuam9pbihmaWxsKSA6IFwiXCI7XG5cbiAgICAgIC8vIElmIHRoZSBmaWxsIGNoYXJhY3RlciBpcyBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBhZnRlciBwYWRkaW5nLlxuICAgICAgaWYgKGNvbW1hICYmIHplcm8pIHZhbHVlID0gZ3JvdXAocGFkZGluZyArIHZhbHVlLCBwYWRkaW5nLmxlbmd0aCA/IHdpZHRoIC0gdmFsdWVTdWZmaXgubGVuZ3RoIDogSW5maW5pdHkpLCBwYWRkaW5nID0gXCJcIjtcblxuICAgICAgLy8gUmVjb25zdHJ1Y3QgdGhlIGZpbmFsIG91dHB1dCBiYXNlZCBvbiB0aGUgZGVzaXJlZCBhbGlnbm1lbnQuXG4gICAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICAgIGNhc2UgXCI8XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZzsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCI9XCI6IHZhbHVlID0gdmFsdWVQcmVmaXggKyBwYWRkaW5nICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJeXCI6IHZhbHVlID0gcGFkZGluZy5zbGljZSgwLCBsZW5ndGggPSBwYWRkaW5nLmxlbmd0aCA+PiAxKSArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeCArIHBhZGRpbmcuc2xpY2UobGVuZ3RoKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6IHZhbHVlID0gcGFkZGluZyArIHZhbHVlUHJlZml4ICsgdmFsdWUgKyB2YWx1ZVN1ZmZpeDsgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudW1lcmFscyh2YWx1ZSk7XG4gICAgfVxuXG4gICAgZm9ybWF0LnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc3BlY2lmaWVyICsgXCJcIjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFByZWZpeChzcGVjaWZpZXIsIHZhbHVlKSB7XG4gICAgdmFyIGYgPSBuZXdGb3JtYXQoKHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpLCBzcGVjaWZpZXIudHlwZSA9IFwiZlwiLCBzcGVjaWZpZXIpKSxcbiAgICAgICAgZSA9IE1hdGgubWF4KC04LCBNYXRoLm1pbig4LCBNYXRoLmZsb29yKGV4cG9uZW50KHZhbHVlKSAvIDMpKSkgKiAzLFxuICAgICAgICBrID0gTWF0aC5wb3coMTAsIC1lKSxcbiAgICAgICAgcHJlZml4ID0gcHJlZml4ZXNbOCArIGUgLyAzXTtcbiAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmKGsgKiB2YWx1ZSkgKyBwcmVmaXg7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBuZXdGb3JtYXQsXG4gICAgZm9ybWF0UHJlZml4OiBmb3JtYXRQcmVmaXhcbiAgfTtcbn1cbiIsImltcG9ydCBmb3JtYXRQcmVmaXhBdXRvIGZyb20gXCIuL2Zvcm1hdFByZWZpeEF1dG9cIjtcbmltcG9ydCBmb3JtYXRSb3VuZGVkIGZyb20gXCIuL2Zvcm1hdFJvdW5kZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBcIiVcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gKHggKiAxMDApLnRvRml4ZWQocCk7IH0sXG4gIFwiYlwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpOyB9LFxuICBcImNcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4geCArIFwiXCI7IH0sXG4gIFwiZFwiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDEwKTsgfSxcbiAgXCJlXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9FeHBvbmVudGlhbChwKTsgfSxcbiAgXCJmXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9GaXhlZChwKTsgfSxcbiAgXCJnXCI6IGZ1bmN0aW9uKHgsIHApIHsgcmV0dXJuIHgudG9QcmVjaXNpb24ocCk7IH0sXG4gIFwib1wiOiBmdW5jdGlvbih4KSB7IHJldHVybiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDgpOyB9LFxuICBcInBcIjogZnVuY3Rpb24oeCwgcCkgeyByZXR1cm4gZm9ybWF0Um91bmRlZCh4ICogMTAwLCBwKTsgfSxcbiAgXCJyXCI6IGZvcm1hdFJvdW5kZWQsXG4gIFwic1wiOiBmb3JtYXRQcmVmaXhBdXRvLFxuICBcIlhcIjogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTsgfSxcbiAgXCJ4XCI6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgucm91bmQoeCkudG9TdHJpbmcoMTYpOyB9XG59O1xuIiwiLy8gQ29weXJpZ2h0IChjKSBKdXB5dGVyIERldmVsb3BtZW50IFRlYW0uXG4vLyBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuaW1wb3J0IHsgRE9NV2lkZ2V0VmlldyB9IGZyb20gJ0BqdXB5dGVyLXdpZGdldHMvYmFzZSc7XG5pbXBvcnQgeyBDb3JlRE9NV2lkZ2V0TW9kZWwgfSBmcm9tICcuL3dpZGdldF9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAndW5kZXJzY29yZSc7XG52YXIgSW1hZ2VNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW1hZ2VNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbWFnZU1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEltYWdlTW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0ltYWdlTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ0ltYWdlVmlldycsXG4gICAgICAgICAgICBmb3JtYXQ6ICdwbmcnLFxuICAgICAgICAgICAgd2lkdGg6ICcnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiBuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDApKVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEltYWdlTW9kZWwuc2VyaWFsaXplcnMgPSBfX2Fzc2lnbih7fSwgQ29yZURPTVdpZGdldE1vZGVsLnNlcmlhbGl6ZXJzLCB7IHZhbHVlOiB7IHNlcmlhbGl6ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyh2YWx1ZS5idWZmZXIuc2xpY2UoMCkpO1xuICAgICAgICAgICAgfSB9IH0pO1xuICAgIHJldHVybiBJbWFnZU1vZGVsO1xufShDb3JlRE9NV2lkZ2V0TW9kZWwpKTtcbmV4cG9ydCB7IEltYWdlTW9kZWwgfTtcbnZhciBJbWFnZVZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEltYWdlVmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbWFnZVZpZXcoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgSW1hZ2VWaWV3LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB2aWV3IGlzIHJlbmRlcmVkLlxuICAgICAgICAgKi9cbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS5yZW5kZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCdqdXB5dGVyLXdpZGdldHMnKTtcbiAgICAgICAgdGhpcy5wV2lkZ2V0LmFkZENsYXNzKCd3aWRnZXQtaW1hZ2UnKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTsgLy8gU2V0IGRlZmF1bHRzLlxuICAgIH07XG4gICAgSW1hZ2VWaWV3LnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcGRhdGUgdGhlIGNvbnRlbnRzIG9mIHRoaXMgdmlld1xuICAgICAgICAgKlxuICAgICAgICAgKiBDYWxsZWQgd2hlbiB0aGUgbW9kZWwgaXMgY2hhbmdlZC4gIFRoZSBtb2RlbCBtYXkgaGF2ZSBiZWVuXG4gICAgICAgICAqIGNoYW5nZWQgYnkgYW5vdGhlciB2aWV3IG9yIGJ5IGEgc3RhdGUgdXBkYXRlIGZyb20gdGhlIGJhY2stZW5kLlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHVybDtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwuZ2V0KCdmb3JtYXQnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJyk7XG4gICAgICAgIGlmIChmb3JtYXQgIT09ICd1cmwnKSB7XG4gICAgICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFt2YWx1ZV0sIHsgdHlwZTogXCJpbWFnZS9cIiArIHRoaXMubW9kZWwuZ2V0KCdmb3JtYXQnKSB9KTtcbiAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSAobmV3IFRleHREZWNvZGVyKCd1dGYtOCcpKS5kZWNvZGUodmFsdWUuYnVmZmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDbGVhbiB1cCB0aGUgb2xkIG9iamVjdFVSTFxuICAgICAgICB2YXIgb2xkdXJsID0gdGhpcy5lbC5zcmM7XG4gICAgICAgIHRoaXMuZWwuc3JjID0gdXJsO1xuICAgICAgICBpZiAob2xkdXJsICYmIHR5cGVvZiBvbGR1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZHVybCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5tb2RlbC5nZXQoJ3dpZHRoJyk7XG4gICAgICAgIGlmICh3aWR0aCAhPT0gdW5kZWZpbmVkICYmIHdpZHRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQXR0cmlidXRlKCd3aWR0aCcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLm1vZGVsLmdldCgnaGVpZ2h0Jyk7XG4gICAgICAgIGlmIChoZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBoZWlnaHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcyk7XG4gICAgfTtcbiAgICBJbWFnZVZpZXcucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWwuc3JjKSB7XG4gICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuZWwuc3JjKTtcbiAgICAgICAgfVxuICAgICAgICBfc3VwZXIucHJvdG90eXBlLnJlbW92ZS5jYWxsKHRoaXMpO1xuICAgIH07XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEltYWdlVmlldy5wcm90b3R5cGUsIFwidGFnTmFtZVwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB0YWcgbmFtZS5cbiAgICAgICAgICpcbiAgICAgICAgICogIyMjIyBOb3Rlc1xuICAgICAgICAgKiBUaGlzIGlzIGEgcmVhZC1vbmx5IGF0dHJpYnV0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gV2UgY2FuJ3QgbWFrZSB0aGlzIGFuIGF0dHJpYnV0ZSB3aXRoIGEgZGVmYXVsdCB2YWx1ZVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd291bGQgYmUgc2V0IGFmdGVyIGl0IGlzIG5lZWRlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdG9yLlxuICAgICAgICAgICAgcmV0dXJuICdpbWcnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gSW1hZ2VWaWV3O1xufShET01XaWRnZXRWaWV3KSk7XG5leHBvcnQgeyBJbWFnZVZpZXcgfTtcbiIsIi8qIVxuICogalF1ZXJ5IFVJIEtleWNvZGUgMS4xMi4xXG4gKiBodHRwOi8vanF1ZXJ5dWkuY29tXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqL1xuXG4vLz4+bGFiZWw6IEtleWNvZGVcbi8vPj5ncm91cDogQ29yZVxuLy8+PmRlc2NyaXB0aW9uOiBQcm92aWRlIGtleWNvZGVzIGFzIGtleW5hbWVzXG4vLz4+ZG9jczogaHR0cDovL2FwaS5qcXVlcnl1aS5jb20valF1ZXJ5LnVpLmtleUNvZGUvXG5cbiggZnVuY3Rpb24oIGZhY3RvcnkgKSB7XG5cdGlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBbIFwianF1ZXJ5XCIsIFwiLi92ZXJzaW9uXCIgXSwgZmFjdG9yeSApO1xuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeSggalF1ZXJ5ICk7XG5cdH1cbn0gKCBmdW5jdGlvbiggJCApIHtcbnJldHVybiAkLnVpLmtleUNvZGUgPSB7XG5cdEJBQ0tTUEFDRTogOCxcblx0Q09NTUE6IDE4OCxcblx0REVMRVRFOiA0Nixcblx0RE9XTjogNDAsXG5cdEVORDogMzUsXG5cdEVOVEVSOiAxMyxcblx0RVNDQVBFOiAyNyxcblx0SE9NRTogMzYsXG5cdExFRlQ6IDM3LFxuXHRQQUdFX0RPV046IDM0LFxuXHRQQUdFX1VQOiAzMyxcblx0UEVSSU9EOiAxOTAsXG5cdFJJR0hUOiAzOSxcblx0U1BBQ0U6IDMyLFxuXHRUQUI6IDksXG5cdFVQOiAzOFxufTtcblxufSApICk7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbi8vIERpc3RyaWJ1dGVkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTW9kaWZpZWQgQlNEIExpY2Vuc2UuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IENvcmVEZXNjcmlwdGlvbk1vZGVsIH0gZnJvbSAnLi93aWRnZXRfY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ3VuZGVyc2NvcmUnO1xuaW1wb3J0IHsgSW50U2xpZGVyVmlldywgSW50UmFuZ2VTbGlkZXJWaWV3LCBJbnRUZXh0VmlldywgQmFzZUludFNsaWRlclZpZXcgfSBmcm9tICcuL3dpZGdldF9pbnQnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZDMtZm9ybWF0JztcbnZhciBGbG9hdE1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRmxvYXRNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRmxvYXRNb2RlbCcsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRNb2RlbDtcbn0oQ29yZURlc2NyaXB0aW9uTW9kZWwpKTtcbmV4cG9ydCB7IEZsb2F0TW9kZWwgfTtcbnZhciBCb3VuZGVkRmxvYXRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm91bmRlZEZsb2F0TW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQm91bmRlZEZsb2F0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgQm91bmRlZEZsb2F0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JvdW5kZWRGbG9hdE1vZGVsJyxcbiAgICAgICAgICAgIG1heDogMTAwLjAsXG4gICAgICAgICAgICBtaW46IDAuMFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBCb3VuZGVkRmxvYXRNb2RlbDtcbn0oRmxvYXRNb2RlbCkpO1xuZXhwb3J0IHsgQm91bmRlZEZsb2F0TW9kZWwgfTtcbnZhciBGbG9hdFNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdFNsaWRlck1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0U2xpZGVyTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRmxvYXRTbGlkZXJNb2RlbC5wcm90b3R5cGUuZGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfLmV4dGVuZChfc3VwZXIucHJvdG90eXBlLmRlZmF1bHRzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIF9tb2RlbF9uYW1lOiAnRmxvYXRTbGlkZXJNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRmxvYXRTbGlkZXJWaWV3JyxcbiAgICAgICAgICAgIHN0ZXA6IDEuMCxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBfcmFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgcmVhZG91dDogdHJ1ZSxcbiAgICAgICAgICAgIHJlYWRvdXRfZm9ybWF0OiAnLjJmJyxcbiAgICAgICAgICAgIHNsaWRlcl9jb2xvcjogbnVsbCxcbiAgICAgICAgICAgIGNvbnRpbnVvdXNfdXBkYXRlOiB0cnVlLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZsb2F0U2xpZGVyTW9kZWwucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vbignY2hhbmdlOnJlYWRvdXRfZm9ybWF0JywgdGhpcy51cGRhdGVfcmVhZG91dF9mb3JtYXQsIHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCgpO1xuICAgIH07XG4gICAgRmxvYXRTbGlkZXJNb2RlbC5wcm90b3R5cGUudXBkYXRlX3JlYWRvdXRfZm9ybWF0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlYWRvdXRfZm9ybWF0dGVyID0gZm9ybWF0KHRoaXMuZ2V0KCdyZWFkb3V0X2Zvcm1hdCcpKTtcbiAgICB9O1xuICAgIHJldHVybiBGbG9hdFNsaWRlck1vZGVsO1xufShCb3VuZGVkRmxvYXRNb2RlbCkpO1xuZXhwb3J0IHsgRmxvYXRTbGlkZXJNb2RlbCB9O1xudmFyIEZsb2F0TG9nU2xpZGVyTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0TG9nU2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRMb2dTbGlkZXJNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBGbG9hdExvZ1NsaWRlck1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdExvZ1NsaWRlck1vZGVsJyxcbiAgICAgICAgICAgIF92aWV3X25hbWU6ICdGbG9hdExvZ1NsaWRlclZpZXcnLFxuICAgICAgICAgICAgc3RlcDogMC4xLFxuICAgICAgICAgICAgb3JpZW50YXRpb246ICdob3Jpem9udGFsJyxcbiAgICAgICAgICAgIF9yYW5nZTogZmFsc2UsXG4gICAgICAgICAgICByZWFkb3V0OiB0cnVlLFxuICAgICAgICAgICAgcmVhZG91dF9mb3JtYXQ6ICcuM2cnLFxuICAgICAgICAgICAgc2xpZGVyX2NvbG9yOiBudWxsLFxuICAgICAgICAgICAgY29udGludW91c191cGRhdGU6IHRydWUsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBiYXNlOiAxMC4sXG4gICAgICAgICAgICB2YWx1ZTogMS4wLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiA0XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgRmxvYXRMb2dTbGlkZXJNb2RlbC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzLCBvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9uKCdjaGFuZ2U6cmVhZG91dF9mb3JtYXQnLCB0aGlzLnVwZGF0ZV9yZWFkb3V0X2Zvcm1hdCwgdGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlX3JlYWRvdXRfZm9ybWF0KCk7XG4gICAgfTtcbiAgICBGbG9hdExvZ1NsaWRlck1vZGVsLnByb3RvdHlwZS51cGRhdGVfcmVhZG91dF9mb3JtYXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVhZG91dF9mb3JtYXR0ZXIgPSBmb3JtYXQodGhpcy5nZXQoJ3JlYWRvdXRfZm9ybWF0JykpO1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0TG9nU2xpZGVyTW9kZWw7XG59KEJvdW5kZWRGbG9hdE1vZGVsKSk7XG5leHBvcnQgeyBGbG9hdExvZ1NsaWRlck1vZGVsIH07XG52YXIgRmxvYXRSYW5nZVNsaWRlck1vZGVsID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdFJhbmdlU2xpZGVyTW9kZWwsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRSYW5nZVNsaWRlck1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBGbG9hdFJhbmdlU2xpZGVyTW9kZWw7XG59KEZsb2F0U2xpZGVyTW9kZWwpKTtcbmV4cG9ydCB7IEZsb2F0UmFuZ2VTbGlkZXJNb2RlbCB9O1xudmFyIEZsb2F0U2xpZGVyVmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRTbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0U2xpZGVyVmlldygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9wYXJzZV92YWx1ZSA9IHBhcnNlRmxvYXQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHZhbHVlIG9mIHRoZSBzbGlkZXIgYmVmb3JlIHNlbmRpbmcgaXQgdG8gdGhlIGJhY2stZW5kXG4gICAgICogYW5kIGFwcGx5aW5nIGl0IHRvIHRoZSBvdGhlciB2aWV3cyBvbiB0aGUgcGFnZS5cbiAgICAgKi9cbiAgICBGbG9hdFNsaWRlclZpZXcucHJvdG90eXBlLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0U2xpZGVyVmlldztcbn0oSW50U2xpZGVyVmlldykpO1xuZXhwb3J0IHsgRmxvYXRTbGlkZXJWaWV3IH07XG52YXIgRmxvYXRMb2dTbGlkZXJWaWV3ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhGbG9hdExvZ1NsaWRlclZpZXcsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRmxvYXRMb2dTbGlkZXJWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUudXBkYXRlLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHZhciBtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgIHZhciBtYXggPSB0aGlzLm1vZGVsLmdldCgnbWF4Jyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubW9kZWwuZ2V0KCd2YWx1ZScpO1xuICAgICAgICB2YXIgYmFzZSA9IHRoaXMubW9kZWwuZ2V0KCdiYXNlJyk7XG4gICAgICAgIHZhciBsb2dfdmFsdWUgPSBNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLmxvZyhiYXNlKTtcbiAgICAgICAgaWYgKGxvZ192YWx1ZSA+IG1heCkge1xuICAgICAgICAgICAgbG9nX3ZhbHVlID0gbWF4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGxvZ192YWx1ZSA8IG1pbikge1xuICAgICAgICAgICAgbG9nX3ZhbHVlID0gbWluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ29wdGlvbicsICd2YWx1ZScsIGxvZ192YWx1ZSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgIHRoaXMudG91Y2goKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogV3JpdGUgdmFsdWUgdG8gYSBzdHJpbmdcbiAgICAgKi9cbiAgICBGbG9hdExvZ1NsaWRlclZpZXcucHJvdG90eXBlLnZhbHVlVG9TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGZvcm1hdCA9IHRoaXMubW9kZWwucmVhZG91dF9mb3JtYXR0ZXI7XG4gICAgICAgIHJldHVybiBmb3JtYXQodmFsdWUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUGFyc2UgdmFsdWUgZnJvbSBhIHN0cmluZ1xuICAgICAqL1xuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuc3RyaW5nVG9WYWx1ZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJzZV92YWx1ZSh0ZXh0KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHRoaXMgaGFuZGxlcyB0aGUgZW50cnkgb2YgdGV4dCBpbnRvIHRoZSBjb250ZW50RWRpdGFibGUgbGFiZWwgZmlyc3QsIHRoZVxuICAgICAqIHZhbHVlIGlzIGNoZWNrZWQgaWYgaXQgY29udGFpbnMgYSBwYXJzZWFibGUgdmFsdWUgdGhlbiBpdCBpcyBjbGFtcGVkXG4gICAgICogd2l0aGluIHRoZSBtaW4tbWF4IHJhbmdlIG9mIHRoZSBzbGlkZXIgZmluYWxseSwgdGhlIG1vZGVsIGlzIHVwZGF0ZWQgaWZcbiAgICAgKiB0aGUgdmFsdWUgaXMgdG8gYmUgY2hhbmdlZFxuICAgICAqXG4gICAgICogaWYgYW55IG9mIHRoZXNlIGNvbmRpdGlvbnMgYXJlIG5vdCBtZXQsIHRoZSB0ZXh0IGlzIHJlc2V0XG4gICAgICovXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVUZXh0Q2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnN0cmluZ1RvVmFsdWUodGhpcy5yZWFkb3V0LnRleHRDb250ZW50KTtcbiAgICAgICAgdmFyIHZtaW4gPSB0aGlzLm1vZGVsLmdldCgnbWluJyk7XG4gICAgICAgIHZhciB2bWF4ID0gdGhpcy5tb2RlbC5nZXQoJ21heCcpO1xuICAgICAgICB2YXIgYmFzZSA9IHRoaXMubW9kZWwuZ2V0KCdiYXNlJyk7XG4gICAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyh0aGlzLm1vZGVsLmdldCgndmFsdWUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBNYXRoLnBvdyhiYXNlLCB2bWF4KSksIE1hdGgucG93KGJhc2UsIHZtaW4pKTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIHZhbHVlLCB7IHVwZGF0ZWRfdmlldzogdGhpcyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRvdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlVG9TdHJpbmcodGhpcy5tb2RlbC5nZXQoJ3ZhbHVlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgc2xpZGVyIHZhbHVlIGlzIGNoYW5naW5nLlxuICAgICAqL1xuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuaGFuZGxlU2xpZGVyQ2hhbmdlID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5tb2RlbC5nZXQoJ2Jhc2UnKTtcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IE1hdGgucG93KGJhc2UsIHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKHVpLnZhbHVlKSk7XG4gICAgICAgIHRoaXMucmVhZG91dC50ZXh0Q29udGVudCA9IHRoaXMudmFsdWVUb1N0cmluZyhhY3R1YWxfdmFsdWUpO1xuICAgICAgICAvLyBPbmx5IHBlcnNpc3QgdGhlIHZhbHVlIHdoaWxlIHNsaWRpbmcgaWYgdGhlIGNvbnRpbnVvdXNfdXBkYXRlXG4gICAgICAgIC8vIHRyYWl0IGlzIHNldCB0byB0cnVlLlxuICAgICAgICBpZiAodGhpcy5tb2RlbC5nZXQoJ2NvbnRpbnVvdXNfdXBkYXRlJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2xpZGVyQ2hhbmdlZChlLCB1aSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBzbGlkZXIgdmFsdWUgaGFzIGNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBDYWxsaW5nIG1vZGVsLnNldCB3aWxsIHRyaWdnZXIgYWxsIG9mIHRoZSBvdGhlciB2aWV3cyBvZiB0aGVcbiAgICAgKiBtb2RlbCB0byB1cGRhdGUuXG4gICAgICovXG4gICAgRmxvYXRMb2dTbGlkZXJWaWV3LnByb3RvdHlwZS5oYW5kbGVTbGlkZXJDaGFuZ2VkID0gZnVuY3Rpb24gKGUsIHVpKSB7XG4gICAgICAgIHZhciBiYXNlID0gdGhpcy5tb2RlbC5nZXQoJ2Jhc2UnKTtcbiAgICAgICAgdmFyIGFjdHVhbF92YWx1ZSA9IE1hdGgucG93KGJhc2UsIHRoaXMuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlKHVpLnZhbHVlKSk7XG4gICAgICAgIHRoaXMubW9kZWwuc2V0KCd2YWx1ZScsIGFjdHVhbF92YWx1ZSwgeyB1cGRhdGVkX3ZpZXc6IHRoaXMgfSk7XG4gICAgICAgIHRoaXMudG91Y2goKTtcbiAgICB9O1xuICAgIEZsb2F0TG9nU2xpZGVyVmlldy5wcm90b3R5cGUuX3ZhbGlkYXRlX3NsaWRlX3ZhbHVlID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRMb2dTbGlkZXJWaWV3O1xufShCYXNlSW50U2xpZGVyVmlldykpO1xuZXhwb3J0IHsgRmxvYXRMb2dTbGlkZXJWaWV3IH07XG52YXIgRmxvYXRSYW5nZVNsaWRlclZpZXcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0UmFuZ2VTbGlkZXJWaWV3LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0UmFuZ2VTbGlkZXJWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcbiAgICAgICAgLy8gbWF0Y2hlczogd2hpdGVzcGFjZT8sIGZsb2F0LCB3aGl0ZXNwYWNlPywgKGh5cGhlbiwgY29sb24sIG9yIGVuLWRhc2gpLCB3aGl0ZXNwYWNlPywgZmxvYXRcbiAgICAgICAgX3RoaXMuX3JhbmdlX3JlZ2V4ID0gL15cXHMqKFsrLV0/KD86XFxkKlxcLj9cXGQrfFxcZCtcXC4pKD86W2VFXVstOl0/XFxkKyk/KVxccypbLTrigJNdXFxzKihbKy1dPyg/OlxcZCpcXC4/XFxkK3xcXGQrXFwuKSg/OltlRV1bKy1dP1xcZCspPykvO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHRoZSB2YWx1ZSBvZiB0aGUgc2xpZGVyIGJlZm9yZSBzZW5kaW5nIGl0IHRvIHRoZSBiYWNrLWVuZFxuICAgICAqIGFuZCBhcHBseWluZyBpdCB0byB0aGUgb3RoZXIgdmlld3Mgb24gdGhlIHBhZ2UuXG4gICAgICovXG4gICAgRmxvYXRSYW5nZVNsaWRlclZpZXcucHJvdG90eXBlLl92YWxpZGF0ZV9zbGlkZV92YWx1ZSA9IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0UmFuZ2VTbGlkZXJWaWV3O1xufShJbnRSYW5nZVNsaWRlclZpZXcpKTtcbmV4cG9ydCB7IEZsb2F0UmFuZ2VTbGlkZXJWaWV3IH07XG52YXIgRmxvYXRUZXh0TW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0VGV4dE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEZsb2F0VGV4dE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIEZsb2F0VGV4dE1vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdFRleHRNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRmxvYXRUZXh0VmlldycsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0VGV4dE1vZGVsO1xufShGbG9hdE1vZGVsKSk7XG5leHBvcnQgeyBGbG9hdFRleHRNb2RlbCB9O1xudmFyIEJvdW5kZWRGbG9hdFRleHRNb2RlbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQm91bmRlZEZsb2F0VGV4dE1vZGVsLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJvdW5kZWRGbG9hdFRleHRNb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBCb3VuZGVkRmxvYXRUZXh0TW9kZWwucHJvdG90eXBlLmRlZmF1bHRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gXy5leHRlbmQoX3N1cGVyLnByb3RvdHlwZS5kZWZhdWx0cy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBfbW9kZWxfbmFtZTogJ0JvdW5kZWRGbG9hdFRleHRNb2RlbCcsXG4gICAgICAgICAgICBfdmlld19uYW1lOiAnRmxvYXRUZXh0VmlldycsXG4gICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBjb250aW51b3VzX3VwZGF0ZTogZmFsc2UsXG4gICAgICAgICAgICBzdGVwOiAwLjFcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQm91bmRlZEZsb2F0VGV4dE1vZGVsO1xufShCb3VuZGVkRmxvYXRNb2RlbCkpO1xuZXhwb3J0IHsgQm91bmRlZEZsb2F0VGV4dE1vZGVsIH07XG52YXIgRmxvYXRUZXh0VmlldyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRmxvYXRUZXh0VmlldywgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdFRleHRWaWV3KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuX3BhcnNlX3ZhbHVlID0gcGFyc2VGbG9hdDtcbiAgICAgICAgX3RoaXMuX2RlZmF1bHRfc3RlcCA9ICdhbnknO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBrZXkgcHJlc3NcbiAgICAgKi9cbiAgICBGbG9hdFRleHRWaWV3LnByb3RvdHlwZS5oYW5kbGVLZXlwcmVzcyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIE92ZXJ3cml0ZSBJbnRUZXh0VmlldydzIGhhbmRsZUtleXByZXNzXG4gICAgICAgIC8vIHdoaWNoIHByZXZlbnRzIGRlY2ltYWwgcG9pbnRzLlxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlIGtleSB1cFxuICAgICAqL1xuICAgIEZsb2F0VGV4dFZpZXcucHJvdG90eXBlLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gT3ZlcndyaXRlIEludFRleHRWaWV3J3MgaGFuZGxlS2V5VXBcbiAgICAgICAgLy8gd2hpY2ggcHJldmVudHMgZGVjaW1hbCBwb2ludHMuXG4gICAgfTtcbiAgICByZXR1cm4gRmxvYXRUZXh0Vmlldztcbn0oSW50VGV4dFZpZXcpKTtcbmV4cG9ydCB7IEZsb2F0VGV4dFZpZXcgfTtcbnZhciBGbG9hdFByb2dyZXNzTW9kZWwgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEZsb2F0UHJvZ3Jlc3NNb2RlbCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBGbG9hdFByb2dyZXNzTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgRmxvYXRQcm9ncmVzc01vZGVsLnByb3RvdHlwZS5kZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF8uZXh0ZW5kKF9zdXBlci5wcm90b3R5cGUuZGVmYXVsdHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgX21vZGVsX25hbWU6ICdGbG9hdFByb2dyZXNzTW9kZWwnLFxuICAgICAgICAgICAgX3ZpZXdfbmFtZTogJ1Byb2dyZXNzVmlldycsXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgYmFyX3N0eWxlOiAnJyxcbiAgICAgICAgICAgIHN0eWxlOiBudWxsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEZsb2F0UHJvZ3Jlc3NNb2RlbDtcbn0oQm91bmRlZEZsb2F0TW9kZWwpKTtcbmV4cG9ydCB7IEZsb2F0UHJvZ3Jlc3NNb2RlbCB9O1xuIiwiaW1wb3J0IGZvcm1hdERlY2ltYWwgZnJvbSBcIi4vZm9ybWF0RGVjaW1hbFwiO1xuXG5leHBvcnQgdmFyIHByZWZpeEV4cG9uZW50O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCBwKSB7XG4gIHZhciBkID0gZm9ybWF0RGVjaW1hbCh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV0sXG4gICAgICBpID0gZXhwb25lbnQgLSAocHJlZml4RXhwb25lbnQgPSBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCAvIDMpKSkgKiAzKSArIDEsXG4gICAgICBuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuICByZXR1cm4gaSA9PT0gbiA/IGNvZWZmaWNpZW50XG4gICAgICA6IGkgPiBuID8gY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoaSAtIG4gKyAxKS5qb2luKFwiMFwiKVxuICAgICAgOiBpID4gMCA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGkpICsgXCIuXCIgKyBjb2VmZmljaWVudC5zbGljZShpKVxuICAgICAgOiBcIjAuXCIgKyBuZXcgQXJyYXkoMSAtIGkpLmpvaW4oXCIwXCIpICsgZm9ybWF0RGVjaW1hbCh4LCBNYXRoLm1heCgwLCBwICsgaSAtIDEpKVswXTsgLy8gbGVzcyB0aGFuIDF5IVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==