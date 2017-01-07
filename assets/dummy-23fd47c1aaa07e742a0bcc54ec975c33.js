"use strict";define("dummy/app",["exports","ember","ember-load-initializers","dummy/config/environment","dummy/resolver"],function(e,n,t,r,o){var a=n.default.Application,p=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,p=a.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:o.default}),(0,t.default)(p,r.default.modulePrefix),e.default=p}),define("dummy/components/code-block",["exports","ember-prism/components/code-block"],function(e,n){e.default=n.default}),define("dummy/components/code-inline",["exports","ember-prism/components/code-inline"],function(e,n){e.default=n.default}),define("dummy/controllers/array",["exports","ember"],function(e,n){e.default=n.default.Controller}),define("dummy/controllers/object",["exports","ember"],function(e,n){e.default=n.default.Controller}),define("dummy/fixtures/contributors",["exports"],function(e){e.default=[{id:"422902",name:"Matthew Dahl",username:"sandersky"},{id:"18398999",name:"sdesros",username:"sdesros"},{id:"8236686",name:"Michael Carroll",username:"juwara0"},{id:"2244653",name:"Phil Nachum",username:"pnachum"},{id:"9026198",name:"Steven Glanzer",username:"sglanzer"},{id:"9057680",name:"Eric White",username:"EWhite613"},{id:"1192053",name:"Ian Storz",username:"ianstarz"},{id:"35697",name:"Justin Bowes",username:"justinbowes"}]}),define("dummy/fixtures/validators",["exports"],function(e){e.default=[{description:"Property can be of any type.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.any\n  }\n})\n    ",name:"any"},{description:"Property must be an array.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.array\n  }\n})\n    ",name:"array"},{description:"Property must be an array of given type.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.arrayOf(PropTypes.string)\n  }\n})\n    ",name:"arrayOf"},{description:"Property must be a boolean.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.boolean\n  }\n})\n    ",name:"bool"},{description:"Property must be an instance of Element.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.element\n  }\n})\n    ",name:"element"},{description:"Property must be an Ember.Object.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.EmberObject\n  }\n})\n    ",name:"EmberObject"},{description:"Property must be a function.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.func\n  }\n})\n    ",name:"func"},{description:"Property must be an instance of given class.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.instanceOf(HTMLElement)\n  }\n})\n    ",name:"instanceOf"},{description:"Property must be null. This is typically useful in conjunction with oneOfType.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.oneOfType([\n      PropTypes.null,\n      PropTypes.string\n    ])\n  }\n})\n    ",name:"null"},{description:"Property must be a number.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.number\n  }\n})\n    ",name:"number"},{description:"Property must be an object.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.object\n  }\n})\n    ",name:"object"},{description:"Property value must be in set of possible values.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.oneOf(['bar', 'baz'])\n  }\n})\n    ",name:"oneOf"},{description:"Property type must be in set of possible types.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.oneOfType([\n      PropTypes.null,\n      PropTypes.string\n    ])\n  }\n})\n    ",name:"oneOfType"},{description:"Property must be an Object of the given shape.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.shape({\n      bar: PropTypes.number.isRequired,\n      baz: PropTypes.string\n    })\n  }\n})\n    ",name:"shape"},{description:"Property must be a string.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.string\n  }\n})\n    ",name:"string"},{description:"Property must be a symbol.",example:"\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    foo: PropTypes.symbol\n  }\n})\n    ",name:"symbol"}]}),define("dummy/helpers/app-version",["exports","ember","dummy/config/environment"],function(e,n,t){function r(){return o}e.appVersion=r;var o=t.default.APP.version;e.default=n.default.Helper.helper(r)}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){e.default=n.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){e.default=n.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,n,t){var r=t.default.APP,o=r.name,a=r.version;e.default={name:"App Version",initialize:(0,n.default)(o,a)}}),define("dummy/initializers/component-prop-types",["exports","ember-prop-types/initializers/component-prop-types"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return n.initialize}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,n){e.default={name:"data-adapter",before:"store",initialize:n.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,n,t){e.default={name:"ember-data",initialize:n.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,n,t){function r(){var e=arguments[1]||arguments[0];if(t.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var o,a=t.default.exportApplicationGlobal;o="string"==typeof a?a:n.default.String.classify(t.default.modulePrefix),r[o]||(r[o]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[o]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,n){e.default={name:"injectStore",before:"store",initialize:n.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,n){e.default={name:"store",after:"ember-data",initialize:n.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,n){e.default={name:"transforms",before:"store",initialize:n.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,n){e.default={name:"ember-data",initialize:n.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,n,t){var r=n.default.Router,o=r.extend({location:t.default.locationType});o.map(function(){}),e.default=o}),define("dummy/routes/application",["exports","ember","dummy/fixtures/contributors","dummy/fixtures/validators"],function(e,n,t,r){var o=n.default.Route,a="\nimport Ember from 'ember'\nconst {Component} = Ember\nimport PropTypeMixin, {PropTypes} from 'ember-prop-types'\n\nexport default Component.extend(PropTypeMixin, {\n  propTypes: {\n    baz: PropTypes.number,\n    foo: PropTypes.string\n  },\n\n  getDefaultProps () {\n    return {\n      baz: 1,\n      foo: 'bar'\n    }\n  }\n})\n\n",p="\n'ember-prop-types': {\n  throwErrors: true\n}\n",i="\n'ember-prop-types': {\n  spreadProperty: 'options'\n}\n",l="\n'ember-prop-types': {\n  validateOnUpdate: true\n}\n";e.default=o.extend({model:function(){return{contributors:t.default,defaultsExample:a,errorConfig:p,spreadConfig:i,updateConfig:l,validators:r.default}}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:23,column:2},end:{line:23,column:60}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","model.errorConfig",["loc",[null,[23,39],[23,60]]],0,0,0,0]],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:30,column:2},end:{line:30,column:61}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","model.updateConfig",["loc",[null,[30,39],[30,61]]],0,0,0,0]],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:38,column:2},end:{line:38,column:61}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","model.spreadConfig",["loc",[null,[38,39],[38,61]]],0,0,0,0]],locals:[],templates:[]}}(),r=function(){var e=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:48,column:6},end:{line:48,column:64}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","validator.example",["loc",[null,[48,43],[48,64]]],0,0,0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:44,column:2},end:{line:50,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("    ");e.appendChild(n,t);var t=e.createElement("section"),r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("dt"),o=e.createComment("");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("dl"),o=e.createComment("");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n    ");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=e.childAt(n,[1]),o=new Array(3);return o[0]=e.createMorphAt(e.childAt(r,[1]),0,0),o[1]=e.createMorphAt(e.childAt(r,[3]),0,0),o[2]=e.createMorphAt(r,5,5),o},statements:[["content","validator.name",["loc",[null,[46,10],[46,28]]],0,0,0,0],["content","validator.description",["loc",[null,[47,10],[47,35]]],0,0,0,0],["block","code-block",[],["language","javascript"],0,null,["loc",[null,[48,6],[48,79]]]]],locals:["validator"],templates:[e]}}(),o=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:59,column:4},end:{line:59,column:66}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createComment("");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(1);return r[0]=e.createMorphAt(n,0,0,t),e.insertBoundary(n,0),e.insertBoundary(n,null),r},statements:[["content","model.defaultsExample",["loc",[null,[59,41],[59,66]]],0,0,0,0]],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:66,column:2},end:{line:77,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createTextNode("    ");e.appendChild(n,t);var t=e.createElement("a"),r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("img");e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createElement("br");e.appendChild(t,r);var r=e.createTextNode("\n      ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n    ");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=e.childAt(n,[1]),o=e.childAt(r,[1]),a=new Array(4);return a[0]=e.createAttrMorph(r,"href"),a[1]=e.createAttrMorph(o,"alt"),a[2]=e.createAttrMorph(o,"src"),a[3]=e.createMorphAt(r,5,5),a},statements:[["attribute","href",["subexpr","concat",["https://github.com/",["get","contributor.username",["loc",[null,[68,42],[68,62]]],0,0,0,0]],[],["loc",[null,[null,null],[68,64]]],0,0],0,0,0,0],["attribute","alt",["get","contributor.username",["loc",[null,[71,14],[71,34]]],0,0,0,0],0,0,0,0],["attribute","src",["subexpr","concat",["https://avatars3.githubusercontent.com/u/",["get","contributor.id",["loc",[null,[72,65],[72,79]]],0,0,0,0]],[],["loc",[null,[null,null],[72,81]]],0,0],0,0,0,0],["content","contributor.name",["loc",[null,[75,6],[75,26]]],0,0,0,0]],locals:["contributor"],templates:[]}}();return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:79,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("div");e.setAttribute(t,"class","flex header");var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("h1"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/ciena-blueplanet/ember-prop-types/blob/master/LICENSE.md");var o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createElement("img");e.setAttribute(o,"alt","MIT License"),e.setAttribute(o,"src","mit-d9d55730279d560591b31d4b0aab52b2.png"),e.appendChild(r,o);var o=e.createTextNode("\n  ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","https://github.com/ciena-blueplanet/ember-prop-types");var o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createElement("img");e.setAttribute(o,"alt","Github"),e.setAttribute(o,"src","octocat-e020986dbdafe5c1e97be521f17a28d8.png"),e.appendChild(r,o);var o=e.createTextNode("\n  ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),r=e.createTextNode("\n  This project aims to improve the developer experience of property management within Ember\n  apps and addons by implementing the entire React proptype API with a few additional\n  validators. By using ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" a developer is informed when a property\n  being fed to a component is not of the expected type, as well as allows a developer to group\n  all default property values under a single method.\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),r=e.createTextNode("\n  Out-of-box ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" informs users of validation errors by logging warnings to the console.\n  Alternativeley you can configure ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" to throw errors instead with the following in\n  ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("config/environment.js");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(":\n  ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),r=e.createTextNode("\n  Out-of-box ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" will only run validation checks when objects are intialized, not on property\n  updates. If you'd like to also run validation on property updates you can enable it with the following in\n  ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("config/environment.js");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(":\n  ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("p"),r=e.createTextNode("\n  Some projects desire to use ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" in conjunction with ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-spread");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" which don't\n  play well as ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" doesn't apply validation on the ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("options");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" property used by\n  ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-spread");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(". You can however inform ");e.appendChild(t,r);var r=e.createElement("em"),o=e.createTextNode("ember-prop-types");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode(" to look for properties under this\n  option with the following configuration:\n  ");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("h2"),r=e.createTextNode("Validators");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","flex");var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("h2"),r=e.createTextNode("Default Values");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","flex");var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("section"),o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createElement("dt"),a=e.createTextNode("getDefaultProps()");e.appendChild(o,a),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createElement("dl"),a=e.createTextNode("Method to get default property values.");e.appendChild(o,a),e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("\n  ");e.appendChild(r,o),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("h2"),r=e.createTextNode("Contributors");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n\n");e.appendChild(n,t);var t=e.createElement("div");e.setAttribute(t,"class","contributors flex");var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=new Array(6);return r[0]=e.createMorphAt(e.childAt(n,[4]),7,7),r[1]=e.createMorphAt(e.childAt(n,[6]),5,5),r[2]=e.createMorphAt(e.childAt(n,[8]),13,13),r[3]=e.createMorphAt(e.childAt(n,[12]),1,1),r[4]=e.createMorphAt(e.childAt(n,[16,1]),5,5),r[5]=e.createMorphAt(e.childAt(n,[20]),1,1),r},statements:[["block","code-block",[],["language","javascript"],0,null,["loc",[null,[23,2],[23,75]]]],["block","code-block",[],["language","javascript"],1,null,["loc",[null,[30,2],[30,76]]]],["block","code-block",[],["language","javascript"],2,null,["loc",[null,[38,2],[38,76]]]],["block","each",[["get","model.validators",["loc",[null,[44,10],[44,26]]],0,0,0,0]],[],3,null,["loc",[null,[44,2],[50,11]]]],["block","code-block",[],["language","javascript"],4,null,["loc",[null,[59,4],[59,81]]]],["block","each",[["get","model.contributors",["loc",[null,[66,10],[66,28]]],0,0,0,0]],[],5,null,["loc",[null,[66,2],[77,11]]]]],locals:[],templates:[e,n,t,r,o,a]}}())}),define("dummy/templates/components/code-block",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.0",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/templates/components/code-block.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var n=e.createDocumentFragment(),t=e.createElement("code"),r=e.createComment("");e.appendChild(t,r),e.appendChild(n,t);var t=e.createTextNode("\n");return e.appendChild(n,t),n},buildRenderNodes:function(e,n,t){var r=e.childAt(n,[0]),o=new Array(2);return o[0]=e.createAttrMorph(r,"class"),o[1]=e.createMorphAt(r,0,0),o},statements:[["attribute","class",["get","languageClass",["loc",[null,[1,14],[1,27]]],0,0,0,0],0,0,0,0],["content","yield",["loc",[null,[1,30],[1,39]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var n="dummy";try{var t=n+"/config/environment",r=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),o=JSON.parse(unescape(r)),a={default:o};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-prop-types",version:"3.5.0"});