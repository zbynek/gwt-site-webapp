var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.gwtproject;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.11.0";
var $strongName = '8C90C955E14BBE1CC2022861DF08A689';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var cggl = {};
var jl = {};
var cggcc = {};
var ji = {};
var jlr = {};
var ju = {};
var ji2 = {};
var cggcci = {};
var cggccp = {};
var cggcs = {};
var cggcsi = {};
var cggdc = {};
var cgwbes = {};
var cgges = {};
var cggels = {};
var cgggc = {};
var cggic = {};
var cggici = {};
var cggrs = {};
var cggrc = {};
var jla = {};
var cggswc = {};
var ed = {};
var ec = {};
var cggswch = {};
var cggts = {};
var cggtc = {};
var cgguc = {};
var cgguci = {};
var cgguc2 = {};
var jb = {};
var ep = {};
var juf = {};
var jnc = {};
var _;
var prototypesByTypeId_0;
var initFnList_0;
var PERMUTATION_NOT_SET = -1;
var permutationId = -1;
function getPermutationId(){
  return permutationId;
}

function setGwtProperty(propertyName, propertyValue){
  if (typeof window === 'object' && typeof window['$gwt'] === 'object') {
    window['$gwt'][propertyName] = propertyValue;
  }
}

function registerEntry_0(){
  return registerEntry();
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  cggl.ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

cggl.ensureModuleInit = function ensureModuleInit(){
  if (initFnList_0 == null) {
    initFnList_0 = [];
  }
}
;
function addInitFunctions(){
  cggl.ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function uniqueId(id_0){
  return jsinterop.closure.getUniqueId(id_0);
}

function typeMarkerFn(){
}

function toString_11(object){
  if (Array.isArray(object) && hasTypeMarker(object)) {
    return jl.toString_2(object);
  }
  return object.toString();
}

function provide(namespace, optCtor){
  var cur = $wnd;
  if (namespace === '') {
    return cur;
  }
  var parts = namespace.split('.');
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }
  if (optCtor) {
    var clazz = optCtor.prototype.___clazz;
    clazz.jsConstructor = optCtor;
  }
  for (var part; parts.length && (part = parts.shift());) {
    cur = cur[part] = cur[part] || (!parts.length && optCtor || {});
  }
  return cur;
}

cggl.portableObjCreate = function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}
;
cggl.maybeGetClassLiteralFromPlaceHolder = function maybeGetClassLiteralFromPlaceHolder(entry){
  return entry instanceof Array?entry[0]:null;
}
;
function makeLambdaFunction(samMethod, ctor, ctorArguments){
  var lambda = function(){
    return samMethod.apply(lambda, arguments);
  }
  ;
  ctor.apply(lambda, ctorArguments);
  return lambda;
}

function getClassPrototype(typeId){
  return prototypesByTypeId_0[typeId];
}

function emptyMethod(){
}

function defineProperties(proto, propertyDefinition){
  for (var key in propertyDefinition) {
    propertyDefinition[key]['configurable'] = true;
  }
  Object.defineProperties(proto, propertyDefinition);
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = cggl.maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = cggl.createSubclassPrototype(superTypeIdOrPrototype);
    _.castableTypeMap = castableTypeMap;
    if (!superTypeIdOrPrototype) {
      _.typeMarker = typeMarkerFn;
    }
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  if (clazz) {
    _.___clazz = clazz;
  }
}

cggl.createSubclassPrototype = function createSubclassPrototype(superTypeIdOrPrototype){
  var superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype;
  if (!superPrototype) {
    superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype];
  }
  return cggl.portableObjCreate(superPrototype);
}
;
function copyObjectProperties(from, to){
  for (var property in from) {
    if (to[property] === undefined) {
      to[property] = from[property];
    }
  }
}

function bootstrap(){
  prototypesByTypeId_0 = {};
}

$wnd.goog = $wnd.goog || {};
$wnd.goog.global = $wnd.goog.global || $wnd;
bootstrap();
jl.$clinit_Object = function $clinit_Object(){
  jl.$clinit_Object = emptyMethod;
}
;
jl.$$init = function $$init(this$static){
}
;
jl.$equals = function $equals(this$static, other){
  return maskUndefined(this$static) === maskUndefined(other);
}
;
jl.$finalize = function $finalize(this$static){
}
;
jl.$getClass = function $getClass(this$static){
  return this$static.___clazz;
}
;
jl.$hashCode = function $hashCode(this$static){
  return ji2.getObjectIdentityHashCode(this$static);
}
;
jl.$init__V__devirtual$ = function $init__V__devirtual$(this$static){
  return instanceOfString(this$static)?jl.$$init_2(this$static):instanceOfDouble(this$static)?jl.$$init_1(this$static):instanceOfBoolean(this$static)?jl.$$init_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.$init():jl.$$init(this$static);
}
;
function Object_0(){
  jl.$clinit_Object();
  jl.$init__V__devirtual$(this);
}

jl.equals_Ljava_lang_Object__Z__devirtual$ = function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$equals_3(this$static, other):instanceOfDouble(this$static)?jl.$equals_2(this$static, other):instanceOfBoolean(this$static)?jl.$equals_1(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?jl.$equals(this$static, other):cggcc.$equals_0(this$static, other);
}
;
jl.finalize__V__devirtual$ = function finalize__V__devirtual$(this$static){
  return instanceOfString(this$static)?jl.$finalize(this$static):instanceOfDouble(this$static)?jl.$finalize(this$static):instanceOfBoolean(this$static)?jl.$finalize(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.finalize():jl.$finalize(this$static);
}
;
jl.getClass__Ljava_lang_Class___devirtual$ = function getClass__Ljava_lang_Class___devirtual$(this$static){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$getClass_31(this$static):instanceOfDouble(this$static)?jl.$getClass_30(this$static):instanceOfBoolean(this$static)?jl.$getClass_29(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?jl.$getClass(this$static):cggcc.$getClass_0(this$static);
}
;
jl.hashCode__I__devirtual$ = function hashCode__I__devirtual$(this$static){
  jl.$clinit_Object();
  return instanceOfString(this$static)?jl.$hashCode_3(this$static):instanceOfDouble(this$static)?jl.$hashCode_2(this$static):instanceOfBoolean(this$static)?jl.$hashCode_1(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?jl.$hashCode(this$static):cggcc.$hashCode_0(this$static);
}
;
jl.toString_2 = function toString_2(object){
  jl.$clinit_Object();
  return jl.getClass__Ljava_lang_Class___devirtual$(object).getName() + '@' + toHexString(jl.hashCode__I__devirtual$(object));
}
;
defineClass(1, null, {1:1}, Object_0);
_.$init = function $init(){
  jl.$$init(this);
}
;
_.equals_0 = function equals(other){
  return jl.$equals(this, other);
}
;
_.finalize = function finalize(){
  jl.$finalize(this);
}
;
_.getClass_0 = function getClass_0(){
  return jl.$getClass(this);
}
;
_.hashCode_0 = function hashCode_0(){
  return jl.$hashCode(this);
}
;
_.toString_0 = function toString_1(){
  return jl.toString_2(this);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
cggcc.$clinit_JavaScriptObject = function $clinit_JavaScriptObject(){
  cggcc.$clinit_JavaScriptObject = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.$cast = function $cast(this$static){
  cggcc.$clinit_JavaScriptObject();
  return this$static;
}
;
cggcc.$equals_0 = function $equals_0(this$static, other){
  cggcc.$clinit_JavaScriptObject();
  if (!isClient()) {
    return getClassPrototype(1).equals_0.call(this$static, other);
  }
  return cggcc.hasEquals(this$static)?cggcc.callEquals(this$static, other):getClassPrototype(1).equals_0.call(this$static, other);
}
;
cggcc.$getClass_0 = function $getClass_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  return getClass_1(this$static);
}
;
cggcc.$hashCode_0 = function $hashCode_0(this$static){
  cggcc.$clinit_JavaScriptObject();
  if (!isClient()) {
    return getClassPrototype(1).hashCode_0.call(this$static);
  }
  return cggcc.hasHashCode(this$static)?cggcc.callHashCode(this$static):getClassPrototype(1).hashCode_0.call(this$static);
}
;
cggcc.$toSource = function $toSource(this$static){
  this$static.toSource?this$static.toSource():'NO SOURCE';
}
;
cggcc.callEquals = function callEquals(thisObject, thatObject){
  return thisObject.equals(thatObject);
}
;
cggcc.callHashCode = function callHashCode(object){
  return object.hashCode();
}
;
cggcc.createArray = function createArray(){
  cggcc.$clinit_JavaScriptObject();
  return [];
}
;
function createObject(){
  cggcc.$clinit_JavaScriptObject();
  return {};
}

cggcc.hasEquals = function hasEquals(object){
  return !!object && !!object.equals;
}
;
cggcc.hasHashCode = function hasHashCode(object){
  return !!object && !!object.hashCode;
}
;
cggcc.toStringSimple = function toStringSimple(obj){
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggcc.toStringVerbose = function toStringVerbose(obj){
  var defined = function(m){
    return typeof m != 'undefined';
  }
  ;
  var strip = function(s){
    return s.replace(/\r\n/g, '');
  }
  ;
  if (defined(obj.outerHTML))
    return strip(obj.outerHTML);
  if (defined(obj.innerHTML) && obj.cloneNode) {
    $doc.createElement('div').appendChild(obj.cloneNode(true)).innerHTML;
  }
  if (defined(obj.nodeType) && obj.nodeType == 3) {
    return "'" + obj.data.replace(/ /g, '\u25AB').replace(/\u00A0/, '\u25AA') + "'";
  }
  if (typeof defined(obj.htmlText) && obj.collapse) {
    var html = obj.htmlText;
    if (html) {
      return 'IETextRange [' + strip(html) + ']';
    }
     else {
      var dup = obj.duplicate();
      dup.pasteHTML('|');
      var out = 'IETextRange ' + strip(obj.parentElement().outerHTML);
      dup.moveStart('character', -1);
      dup.pasteHTML('');
      return out;
    }
  }
  return obj.toString?obj.toString():'[JavaScriptObject]';
}
;
cggl.$clinit_Cast = function $clinit_Cast(){
  cggl.$clinit_Cast = emptyMethod;
  jl.$clinit_Object();
}
;
function Cast(){
  Object_0.call(this);
  this.$init_55();
}

function canCast(src_0, dstId){
  cggl.$clinit_Cast();
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function canCastClass(srcClazz, dstClass){
  cggl.$clinit_Cast();
  var srcTypeId = srcClazz.typeId;
  var dstTypeId = dstClass.typeId;
  var prototype_0 = prototypesByTypeId_0[srcTypeId];
  return canCast(prototype_0, dstTypeId);
}

function castTo(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || canCast(src_0, dstId));
  return src_0;
}

function castToAllowJso(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0) || canCast(src_0, dstId));
  return src_0;
}

function castToArray(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfArray(src_0));
  return src_0;
}

function castToBoolean(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfBoolean(src_0));
  return src_0;
}

function castToDouble(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfDouble(src_0));
  return src_0;
}

function castToFunction(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.isFunction(src_0));
  return src_0;
}

function castToJsArray(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfJsArray(src_0));
  return src_0;
}

function castToJsObject(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.isJsObject(src_0));
  return src_0;
}

function castToJso(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || isJavaScriptObject(src_0));
  return src_0;
}

function castToJsoArray(src_0, dstId){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfJsoArray(src_0, dstId));
  return src_0;
}

function castToNative(src_0, jsType){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || cggl.jsinstanceOf(src_0, jsType));
  return src_0;
}

function castToString(src_0){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(src_0, null) || instanceOfString(src_0));
  return src_0;
}

function castToUnknownNative(src_0){
  cggl.$clinit_Cast();
  return src_0;
}

function charToString(x_0){
  cggl.$clinit_Cast();
  return String.fromCharCode(x_0);
}

function getClass_1(array){
  cggl.$clinit_Cast();
  return array.___clazz || (Array.isArray(array) && getClassLiteralForArray(cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit);
}

function hasJavaObjectVirtualDispatch(src_0){
  cggl.$clinit_Cast();
  return !isArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && canCast(src_0, dstId);
}

function instanceOfAllowJso(src_0, dstId){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && (isJavaScriptObject(src_0) || canCast(src_0, dstId));
}

function instanceOfArray(src_0){
  cggl.$clinit_Cast();
  return isArray(src_0) && !isPrimitiveArray(src_0);
}

function instanceOfBoolean(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'number';
}

function instanceOfFunction(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && cggl.isFunction(src_0);
}

function instanceOfJsArray(src_0){
  cggl.$clinit_Cast();
  return isArray(src_0);
}

function instanceOfJsObject(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && cggl.isJsObject(src_0);
}

function instanceOfJso(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null) && isJavaScriptObject(src_0);
}

function instanceOfJsoArray(src_0, dstId){
  cggl.$clinit_Cast();
  return canCast(src_0, dstId) || !hasTypeMarker(src_0) && isArray(src_0);
}

function instanceOfNative(src_0, jsType){
  cggl.$clinit_Cast();
  return cggl.jsinstanceOf(src_0, jsType);
}

function instanceOfString(src_0){
  cggl.$clinit_Cast();
  return typeof src_0 === 'string';
}

function instanceOfUnknownNative(src_0){
  cggl.$clinit_Cast();
  return jsNotEquals(src_0, null);
}

function isArray(src_0){
  cggl.$clinit_Cast();
  return Array.isArray(src_0);
}

cggl.isFunction = function isFunction(src_0){
  return typeof src_0 === 'function';
}
;
function isJavaScriptObject(src_0){
  cggl.$clinit_Cast();
  return cggl.isJsObjectOrFunction(src_0) && !hasTypeMarker(src_0);
}

cggl.isJsObject = function isJsObject(src_0){
  return typeof src_0 === 'object' || typeof src_0 == 'function';
}
;
cggl.isJsObjectOrFunction = function isJsObjectOrFunction(src_0){
  return typeof src_0 === 'object' || typeof src_0 === 'function';
}
;
function isNotNull(src_0){
  cggl.$clinit_Cast();
  return !!src_0;
}

function isNull(src_0){
  cggl.$clinit_Cast();
  return !src_0;
}

function jsEquals(a, b){
  cggl.$clinit_Cast();
  return a == b;
}

function jsNotEquals(a, b){
  cggl.$clinit_Cast();
  return a != b;
}

cggl.jsinstanceOf = function jsinstanceOf(obj, jsType){
  return obj && (jsType && obj instanceof jsType);
}
;
function maskUndefined(src_0){
  cggl.$clinit_Cast();
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  cggl.$clinit_Cast();
  return x_0 << 24 >> 24;
}

function narrow_char(x_0){
  cggl.$clinit_Cast();
  return x_0 & 65535;
}

function narrow_int(x_0){
  cggl.$clinit_Cast();
  return x_0 | 0;
}

function narrow_short(x_0){
  cggl.$clinit_Cast();
  return x_0 << 16 >> 16;
}

function round_byte(x_0){
  cggl.$clinit_Cast();
  return narrow_byte(round_int(x_0));
}

function round_char(x_0){
  cggl.$clinit_Cast();
  return narrow_char(round_int(x_0));
}

function round_int(x_0){
  cggl.$clinit_Cast();
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

function round_short(x_0){
  cggl.$clinit_Cast();
  return narrow_short(round_int(x_0));
}

function throwClassCastExceptionUnlessNull(o){
  cggl.$clinit_Cast();
  ji2.checkType(jsEquals(o, null));
  return o;
}

defineClass(219, 1, {1:1});
_.$init_55 = function $init_55(){
}
;
var booleanCastMap;
var doubleCastMap;
var stringCastMap;
cggl.$clinit_Util = function $clinit_Util(){
  cggl.$clinit_Util = emptyMethod;
  jl.$clinit_Object();
}
;
function Util(){
  Object_0.call(this);
  this.$init_61();
}

function getCastableTypeMap(o){
  cggl.$clinit_Util();
  return o.castableTypeMap;
}

function hasTypeMarker(o){
  cggl.$clinit_Util();
  return o.typeMarker === typeMarkerFn;
}

function makeEnumName(enumName){
  cggl.$clinit_Util();
  return enumName;
}

function setCastableTypeMap(o, castableTypeMap){
  cggl.$clinit_Util();
  o.castableTypeMap = castableTypeMap;
}

function setTypeMarker(o){
  cggl.$clinit_Util();
  o.typeMarker = typeMarkerFn;
}

defineClass(226, 1, {1:1});
_.$init_61 = function $init_61(){
}
;
ji.$clinit_Serializable = function $clinit_Serializable(){
  ji.$clinit_Serializable = emptyMethod;
}
;
jl.$clinit_Comparable = function $clinit_Comparable(){
  jl.$clinit_Comparable = emptyMethod;
}
;
jl.$clinit_Boolean = function $clinit_Boolean(){
  jl.$clinit_Boolean = emptyMethod;
  jl.$clinit_Object();
  FALSE = jl.valueOf_3(false);
  TRUE = jl.valueOf_3(true);
  TYPE_2 = cggl.Z_classLit;
}
;
jl.$$init_0 = function $$init_0(this$static){
}
;
jl.$booleanValue = function $booleanValue(this$static){
  return ji2.unsafeCastToBoolean(ji2.checkNotNull_0(this$static));
}
;
jl.$compareTo = function $compareTo(this$static, b){
  return compare_1(jl.booleanValue__Z__devirtual$(this$static), jl.booleanValue__Z__devirtual$(b));
}
;
jl.$compareTo_0 = function $compareTo_0(this$static, b){
  return jl.compareTo_Ljava_lang_Boolean__I__devirtual$(this$static, castToBoolean(b));
}
;
function $create(x_0){
  jl.$clinit_Boolean();
  return ji2.uncheckedCast(parseBoolean(x_0));
}

jl.$create_0 = function $create_0(x_0){
  return ji2.uncheckedCast(x_0);
}
;
jl.$equals_1 = function $equals_1(this$static, o){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(o);
}
;
jl.$getClass_29 = function $getClass_29(this$static){
  return cggl.Ljava_lang_Boolean_2_classLit;
}
;
jl.$hashCode_1 = function $hashCode_1(this$static){
  return jl.hashCode_3(jl.booleanValue__Z__devirtual$(this$static));
}
;
jl.$init__V__devirtual$_0 = function $init__V__devirtual$_0(this$static){
  return jl.$$init_0(this$static);
}
;
function $isInstance(instance){
  jl.$clinit_Boolean();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('boolean', typeof(instance));
}

function Boolean_0(s){
  Object_0.call(this);
  jl.$init__V__devirtual$_0(this);
  $create(s);
}

jl.Boolean_1 = function Boolean_1(value_0){
  Object_0.call(this);
  jl.$init__V__devirtual$_0(this);
  jl.$create_0(value_0);
}
;
jl.booleanValue__Z__devirtual$ = function booleanValue__Z__devirtual$(this$static){
  return jl.$booleanValue(this$static);
}
;
function compare_1(x_0, y_0){
  jl.$clinit_Boolean();
  return x_0 == y_0?0:x_0?1:-1;
}

jl.compareTo_Ljava_lang_Boolean__I__devirtual$ = function compareTo_Ljava_lang_Boolean__I__devirtual$(this$static, b){
  return jl.$compareTo(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$ = function compareTo_Ljava_lang_Object__I__devirtual$(this$static, b){
  return jl.$compareTo_0(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_0 = function compareTo_Ljava_lang_Object__I__devirtual$_0(this$static, other){
  return instanceOfString(this$static)?jl.$compareTo_3(this$static, other):instanceOfDouble(this$static)?jl.$compareTo_2(this$static, other):instanceOfBoolean(this$static)?jl.$compareTo_0(this$static, other):this$static.compareTo_0(other);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_0 = function equals_Ljava_lang_Object__Z__devirtual$_0(this$static, o){
  return jl.$equals_1(this$static, o);
}
;
jl.getClass__Ljava_lang_Class___devirtual$_0 = function getClass__Ljava_lang_Class___devirtual$_0(this$static){
  return jl.$getClass_29(this$static);
}
;
jl.hashCode_3 = function hashCode_3(value_0){
  return value_0?1231:1237;
}
;
jl.hashCode__I__devirtual$_0 = function hashCode__I__devirtual$_0(this$static){
  return jl.$hashCode_1(this$static);
}
;
function logicalAnd(a, b){
  jl.$clinit_Boolean();
  return a && b;
}

function logicalOr(a, b){
  jl.$clinit_Boolean();
  return a || b;
}

function logicalXor(a, b){
  jl.$clinit_Boolean();
  return a ^ b;
}

function parseBoolean(s){
  jl.$clinit_Boolean();
  return jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$('true', s);
}

jl.toString_13 = function toString_13(x_0){
  return jl.valueOf_18(x_0);
}
;
function valueOf_2(s){
  jl.$clinit_Boolean();
  return jl.valueOf_3(parseBoolean(s));
}

jl.valueOf_3 = function valueOf_3(b){
  return b?jl.$create_0(true):jl.$create_0(false);
}
;
booleanCastMap = {3:1, 126:1, 11:1, 1:1};
var FALSE;
var TRUE;
var TYPE_2;
jl.$clinit_CharSequence = function $clinit_CharSequence(){
  jl.$clinit_CharSequence = emptyMethod;
}
;
jlr.$clinit_Type = function $clinit_Type(){
  jlr.$clinit_Type = emptyMethod;
}
;
jl.$clinit_Class = function $clinit_Class(){
  jl.$clinit_Class = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Class = function Class(){
  Object_0.call(this);
  this.$init_93();
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}
;
jl.createClassObject = function createClassObject(packageName, compoundClassName, typeId){
  var clazz;
  clazz = new jl.Class;
  if (isClassMetadataEnabled()) {
    clazz.packageName = packageName;
    clazz.compoundName = compoundClassName;
  }
   else {
    synthesizeClassNamesFromTypeId(clazz, typeId);
  }
  return clazz;
}
;
function createForClass(packageName, compoundClassName, typeId, superclass){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.superclass = superclass;
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, superclass, enumConstantsFunc, enumValueOfFunc){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, typeId);
  jl.maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = isNotNull(enumConstantsFunc)?8:0;
  clazz.superclass = clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  clazz.enumValueOfFunc = enumValueOfFunc;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject(packageName, compoundClassName, null);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  jl.$clinit_Class();
  var clazz;
  clazz = jl.createClassObject('', className, primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

jl.getClassLiteralForArray_0 = function getClassLiteralForArray_0(leafClass, dimensions){
  jl.$clinit_Class();
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}
;
function getPrototypeForClass(clazz){
  jl.$clinit_Class();
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

jl.initializeNames = function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    if (componentType.isPrimitive()) {
      clazz.typeName = '[' + componentType.typeId;
    }
     else if (!componentType.isArray_0()) {
      clazz.typeName = '[L' + componentType.getName() + ';';
    }
     else {
      clazz.typeName = '[' + componentType.getName();
    }
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = jl.join_0('.', [packageName, jl.join_0('$', compoundName)]);
  clazz.canonicalName = jl.join_0('.', [packageName, jl.join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}
;
function isClassMetadataEnabled(){
  jl.$clinit_Class();
  return true;
}

jl.join_0 = function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}
;
jl.maybeSetClassLiteral = function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}
;
function synthesizeClassNamesFromTypeId(clazz, typeId){
  jl.$clinit_Class();
  clazz.typeName = 'Class$' + (!!typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
}

defineClass(70, 1, {1:1}, jl.Class);
_.$init_93 = function $init_93(){
  this.sequentialId = nextSequentialId++;
}
;
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new jl.Class;
  clazz.modifiers = 4;
  clazz.superclass = cggl.Ljava_lang_Object_2_classLit;
  if (dimensions > 1) {
    clazz.componentType = jl.getClassLiteralForArray_0(this, dimensions - 1);
  }
   else {
    clazz.componentType = this;
  }
  return clazz;
}
;
_.desiredAssertionStatus = function desiredAssertionStatus(){
  return false;
}
;
_.ensureNamesAreInitialized = function ensureNamesAreInitialized(){
  if (jsNotEquals(this.typeName, null)) {
    return;
  }
  jl.initializeNames(this);
}
;
_.getCanonicalName = function getCanonicalName(){
  this.ensureNamesAreInitialized();
  return this.canonicalName;
}
;
_.getName = function getName_1(){
  this.ensureNamesAreInitialized();
  return this.typeName;
}
;
_.getSimpleName = function getSimpleName(){
  this.ensureNamesAreInitialized();
  return this.simpleName;
}
;
_.isArray_0 = function isArray_0(){
  return (this.modifiers & 4) != 0;
}
;
_.isInterface = function isInterface(){
  return (this.modifiers & 2) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_17(){
  return (this.isInterface()?'interface ':this.isPrimitive()?'':'class ') + ('' + this.getName());
}
;
_.modifiers = 0;
_.sequentialId = 0;
var ARRAY = 4;
var ENUM = 8;
var INTERFACE = 2;
var PRIMITIVE = 1;
var nextSequentialId = 1;
jl.$clinit_Number = function $clinit_Number(){
  jl.$clinit_Number = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$init__V__devirtual$_1 = function $init__V__devirtual$_1(this$static){
  return instanceOfDouble(this$static)?jl.$$init_1(this$static):this$static.$init_90();
}
;
jl.Number_0 = function Number_0(){
  jl.$clinit_Number();
  Object_0.call(this);
  jl.$init__V__devirtual$_1(this);
}
;
jl.__isValidDouble = function __isValidDouble(str){
  if (jsEquals(jl.floatRegex, null)) {
    jl.floatRegex = new RegExp('^\\s*[+-]?(NaN|Infinity|((\\d+\\.?\\d*)|(\\.\\d+))([eE][+-]?\\d+)?[dDfF]?)\\s*$');
  }
  return jl.floatRegex.test(str);
}
;
jl.__parseAndValidateDouble = function __parseAndValidateDouble(s){
  jl.$clinit_Number();
  if (!jl.__isValidDouble(s)) {
    throw toJs(jl.forInputString(s));
  }
  return parseFloat(s);
}
;
jl.byteValue__B__devirtual$ = function byteValue__B__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$byteValue(this$static):this$static.byteValue();
}
;
jl.doubleValue__D__devirtual$ = function doubleValue__D__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$doubleValue(this$static):this$static.doubleValue();
}
;
jl.floatValue__F__devirtual$ = function floatValue__F__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$floatValue(this$static):this$static.floatValue();
}
;
jl.getClass__Ljava_lang_Class___devirtual$_1 = function getClass__Ljava_lang_Class___devirtual$_1(this$static){
  return instanceOfDouble(this$static)?jl.$getClass_30(this$static):this$static.___clazz;
}
;
jl.intValue__I__devirtual$ = function intValue__I__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$intValue(this$static):this$static.intValue();
}
;
jl.longValue__J__devirtual$ = function longValue__J__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$longValue(this$static):this$static.longValue();
}
;
jl.shortValue__S__devirtual$ = function shortValue__S__devirtual$(this$static){
  return instanceOfDouble(this$static)?jl.$shortValue(this$static):this$static.shortValue();
}
;
defineClass(25, 1, {3:1, 1:1});
_.$init_90 = function $init_90(){
}
;
_.byteValue = function byteValue(){
  return narrow_byte(jl.intValue__I__devirtual$(this));
}
;
_.shortValue = function shortValue(){
  return narrow_short(jl.intValue__I__devirtual$(this));
}
;
jl.$clinit_Double = function $clinit_Double(){
  jl.$clinit_Double = emptyMethod;
  jl.$clinit_Number();
  MIN_EXPONENT = -1022;
  NaN_0 = 0 / 0;
  NEGATIVE_INFINITY = -1 / 0;
  POSITIVE_INFINITY = 1 / 0;
  BYTES_1 = narrow_int(64 / 8);
  TYPE_5 = cggl.D_classLit;
}
;
jl.$$init_1 = function $$init_1(this$static){
}
;
jl.$byteValue = function $byteValue(this$static){
  return round_byte(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$compareTo_1 = function $compareTo_1(this$static, b){
  return compare_4(jl.doubleValue__D__devirtual$_0(this$static), jl.doubleValue__D__devirtual$_0(b));
}
;
jl.$compareTo_2 = function $compareTo_2(this$static, b){
  return jl.compareTo_Ljava_lang_Double__I__devirtual$(this$static, castToDouble(b));
}
;
jl.$create_1 = function $create_1(x_0){
  return ji2.uncheckedCast(x_0);
}
;
function $create_2(s){
  jl.$clinit_Double();
  return ji2.uncheckedCast(parseDouble(s));
}

jl.$doubleValue = function $doubleValue(this$static){
  return ji2.unsafeCastToDouble(ji2.checkNotNull_0(this$static));
}
;
jl.$equals_2 = function $equals_2(this$static, o){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(o);
}
;
jl.$floatValue = function $floatValue(this$static){
  return jl.doubleValue__D__devirtual$_0(this$static);
}
;
jl.$getClass_30 = function $getClass_30(this$static){
  return cggl.Ljava_lang_Double_2_classLit;
}
;
jl.$hashCode_2 = function $hashCode_2(this$static){
  return jl.hashCode_8(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$init__V__devirtual$_2 = function $init__V__devirtual$_2(this$static){
  return jl.$$init_1(this$static);
}
;
jl.$intValue = function $intValue(this$static){
  return round_int(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$isInfinite = function $isInfinite(this$static){
  return jl.isInfinite(jl.doubleValue__D__devirtual$_0(this$static));
}
;
function $isInstance_0(instance){
  jl.$clinit_Double();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('number', typeof(instance));
}

jl.$isNaN = function $isNaN(this$static){
  return isNaN(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$longValue = function $longValue(this$static){
  return fromDouble_0(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.$shortValue = function $shortValue(this$static){
  return round_short(jl.doubleValue__D__devirtual$_0(this$static));
}
;
jl.Double = function Double(value_0){
  jl.Number_0.call(this);
  jl.$init__V__devirtual$_2(this);
  jl.$create_1(value_0);
}
;
function Double_0(s){
  jl.Number_0.call(this);
  jl.$init__V__devirtual$_2(this);
  $create_2(s);
}

jl.byteValue__B__devirtual$_0 = function byteValue__B__devirtual$_0(this$static){
  return jl.$byteValue(this$static);
}
;
function compare_4(x_0, y_0){
  jl.$clinit_Double();
  if (x_0 < y_0) {
    return -1;
  }
  if (x_0 > y_0) {
    return 1;
  }
  if (x_0 == y_0) {
    return x_0 == 0?compare_4(1 / x_0, 1 / y_0):0;
  }
  if (isNaN(x_0)) {
    if (isNaN(y_0)) {
      return 0;
    }
     else {
      return 1;
    }
  }
   else {
    return -1;
  }
}

jl.compareTo_Ljava_lang_Double__I__devirtual$ = function compareTo_Ljava_lang_Double__I__devirtual$(this$static, b){
  return jl.$compareTo_1(this$static, b);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_1 = function compareTo_Ljava_lang_Object__I__devirtual$_1(this$static, b){
  return jl.$compareTo_2(this$static, b);
}
;
function doubleToLongBits(value_0){
  jl.$clinit_Double();
  if (isNaN(value_0)) {
    return {l:0, m:0, h:524160};
  }
  return jl.doubleToRawLongBits(value_0);
}

jl.doubleToRawLongBits = function doubleToRawLongBits(value_0){
  return ji2.doubleToRawLongBits_0(value_0);
}
;
jl.doubleValue__D__devirtual$_0 = function doubleValue__D__devirtual$_0(this$static){
  jl.$clinit_Double();
  return jl.$doubleValue(this$static);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_1 = function equals_Ljava_lang_Object__Z__devirtual$_1(this$static, o){
  jl.$clinit_Double();
  return jl.$equals_2(this$static, o);
}
;
jl.floatValue__F__devirtual$_0 = function floatValue__F__devirtual$_0(this$static){
  return jl.$floatValue(this$static);
}
;
jl.getClass__Ljava_lang_Class___devirtual$_2 = function getClass__Ljava_lang_Class___devirtual$_2(this$static){
  return jl.$getClass_30(this$static);
}
;
jl.hashCode_8 = function hashCode_8(d){
  return round_int(d);
}
;
jl.hashCode__I__devirtual$_1 = function hashCode__I__devirtual$_1(this$static){
  return jl.$hashCode_2(this$static);
}
;
jl.intValue__I__devirtual$_0 = function intValue__I__devirtual$_0(this$static){
  return jl.$intValue(this$static);
}
;
jl.isInfinite = function isInfinite(x_0){
  jl.$clinit_Double();
  return !isNaN(x_0) && !isFinite(x_0);
}
;
jl.isInfinite__Z__devirtual$ = function isInfinite__Z__devirtual$(this$static){
  return jl.$isInfinite(this$static);
}
;
jl.isNaN__Z__devirtual$ = function isNaN__Z__devirtual$(this$static){
  return jl.$isNaN(this$static);
}
;
function longBitsToDouble(bits){
  jl.$clinit_Double();
  return ji2.longBitsToDouble_0(bits);
}

jl.longValue__J__devirtual$_0 = function longValue__J__devirtual$_0(this$static){
  return jl.$longValue(this$static);
}
;
function max_0(a, b){
  jl.$clinit_Double();
  return $wnd.Math.max(a, b);
}

function min_0(a, b){
  jl.$clinit_Double();
  return $wnd.Math.min(a, b);
}

function parseDouble(s){
  jl.$clinit_Double();
  return jl.__parseAndValidateDouble(s);
}

jl.shortValue__S__devirtual$_0 = function shortValue__S__devirtual$_0(this$static){
  return jl.$shortValue(this$static);
}
;
function sum(a, b){
  jl.$clinit_Double();
  return a + b;
}

jl.toString_18 = function toString_18(b){
  return jl.valueOf_13(b);
}
;
jl.valueOf_6 = function valueOf_6(d){
  jl.$clinit_Double();
  return jl.$create_1(d);
}
;
function valueOf_7(s){
  jl.$clinit_Double();
  return $create_2(s);
}

doubleCastMap = {3:1, 11:1, 113:1, 1:1};
var BYTES_1 = 0;
var MAX_EXPONENT = 1023;
var MAX_VALUE_2 = 1.7976931348623157E308;
var MIN_EXPONENT = 0;
var MIN_NORMAL = 2.2250738585072014E-308;
var MIN_VALUE_2 = 4.9E-324;
var NEGATIVE_INFINITY = 0;
var NaN_0 = 0;
var POSITIVE_INFINITY = 0;
var SIZE_1 = 64;
var TYPE_5;
jl.$clinit_String = function $clinit_String(){
  jl.$clinit_String = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_CharSequence();
  CASE_INSENSITIVE_ORDER = new jl.String$1;
}
;
jl.$$init_2 = function $$init_2(this$static){
}
;
jl.$asNativeString = function $asNativeString(this$static){
  return ji2.uncheckedCast(this$static);
}
;
jl.$charAt = function $charAt(this$static, index_0){
  ji2.checkStringElementIndex(index_0, jl.length__I__devirtual$_0(this$static));
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).charCodeAt(index_0);
}
;
jl.$codePointAt = function $codePointAt(this$static, index_0){
  return codePointAt(this$static, index_0, jl.length__I__devirtual$_0(this$static));
}
;
jl.$codePointBefore = function $codePointBefore(this$static, index_0){
  return codePointBefore(this$static, index_0, 0);
}
;
jl.$codePointCount = function $codePointCount(this$static, beginIndex, endIndex){
  return codePointCount(this$static, beginIndex, endIndex);
}
;
jl.$compareTo_3 = function $compareTo_3(this$static, other){
  return jl.compareTo_Ljava_lang_String__I__devirtual$(this$static, castToString(other));
}
;
jl.$compareTo_4 = function $compareTo_4(this$static, other){
  var a, b;
  a = jl.doubleValue__D__devirtual$_0(ji2.uncheckedCast(this$static));
  b = jl.doubleValue__D__devirtual$_0(ji2.uncheckedCast(other));
  return a == b?0:a < b?-1:1;
}
;
jl.$compareToIgnoreCase = function $compareToIgnoreCase(this$static, other){
  return jl.compareTo_Ljava_lang_String__I__devirtual$(jl.toLowerCase__Ljava_lang_String___devirtual$(this$static), jl.toLowerCase__Ljava_lang_String___devirtual$(other));
}
;
jl.$concat = function $concat(this$static, str){
  return castToString(ji2.checkNotNull_0(this$static)) + ('' + castToString(ji2.checkNotNull_0(str)));
}
;
jl.$contains = function $contains(this$static, s){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, toString_11(s)) != -1;
}
;
jl.$contentEquals = function $contentEquals(this$static, cs){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, toString_11(cs));
}
;
jl.$contentEquals_0 = function $contentEquals_0(this$static, sb){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, sb.toString_0());
}
;
jl.$create_3 = function $create_3(){
  return '';
}
;
jl.$create_4 = function $create_4(other){
  return castToString(ji2.checkNotNull_0(other));
}
;
jl.$create_5 = function $create_5(sb){
  return sb.toString_0();
}
;
function $create_6(sb){
  jl.$clinit_String();
  return sb.toString_0();
}

jl.$create_7 = function $create_7(bytes){
  return jl.$create_8(bytes, 0, bytes.length);
}
;
jl.$create_8 = function $create_8(bytes, ofs, len){
  return jl.$create_10(bytes, ofs, len, (ji2.$clinit_EmulatedCharset() , ji2.UTF_8));
}
;
jl.$create_9 = function $create_9(bytes, ofs, len, charsetName){
  return jl.$create_10(bytes, ofs, len, jl.getCharset(charsetName));
}
;
jl.$create_10 = function $create_10(bytes, ofs, len, charset){
  return jl.valueOf_19(castTo(charset, 21).decodeString(bytes, ofs, len));
}
;
jl.$create_11 = function $create_11(bytes, charsetName){
  return jl.$create_9(bytes, 0, bytes.length, charsetName);
}
;
jl.$create_12 = function $create_12(bytes, charset){
  return jl.$create_10(bytes, 0, bytes.length, charset);
}
;
jl.$create_13 = function $create_13(value_0){
  return jl.valueOf_19(value_0);
}
;
jl.$create_14 = function $create_14(value_0, offset, count){
  return jl.valueOf_20(value_0, offset, count);
}
;
jl.$create_15 = function $create_15(codePoints, offset, count){
  var charIdx, chars;
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 15, count * 2, 15, 1);
  charIdx = 0;
  while (count-- > 0) {
    charIdx += toChars(codePoints[offset++], chars, charIdx);
  }
  return jl.valueOf_20(chars, 0, charIdx);
}
;
jl.$endsWith = function $endsWith(this$static, suffix){
  var suffixlength;
  suffixlength = jl.length__I__devirtual$_0(suffix);
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(jl.length__I__devirtual$_0(this$static) - suffixlength, suffixlength), suffix);
}
;
jl.$equals_3 = function $equals_3(this$static, other){
  return maskUndefined(ji2.checkNotNull_0(this$static)) === maskUndefined(other);
}
;
jl.$equalsIgnoreCase = function $equalsIgnoreCase(this$static, other){
  ji2.checkNotNull_0(this$static);
  if (jsEquals(other, null)) {
    return false;
  }
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(this$static, other)) {
    return true;
  }
  return jl.length__I__devirtual$_0(this$static) == jl.length__I__devirtual$_0(other) && jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.toLowerCase__Ljava_lang_String___devirtual$(this$static), jl.toLowerCase__Ljava_lang_String___devirtual$(other));
}
;
jl.$getBytes = function $getBytes(this$static){
  return jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, (ji2.$clinit_EmulatedCharset() , ji2.UTF_8));
}
;
jl.$getBytes_0 = function $getBytes_0(this$static, charsetName){
  return jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, jl.getCharset(charsetName));
}
;
jl.$getBytes_1 = function $getBytes_1(this$static, charset){
  return castTo(charset, 21).getBytes(this$static);
}
;
jl.$getChars = function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin){
  ji2.checkCriticalStringBounds(srcBegin, srcEnd, jl.length__I__devirtual$_0(this$static));
  ji2.checkCriticalStringBounds(dstBegin, dstBegin + (srcEnd - srcBegin), dst.length);
  jl.getChars0_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.$getChars0 = function $getChars0(this$static, srcBegin, srcEnd, dst, dstBegin){
  while (srcBegin < srcEnd) {
    dst[dstBegin++] = jl.charAt_I_C__devirtual$_0(this$static, srcBegin++);
  }
}
;
jl.$getClass_31 = function $getClass_31(this$static){
  return cggl.Ljava_lang_String_2_classLit;
}
;
jl.$hashCode_3 = function $hashCode_3(this$static){
  var h, i;
  h = 0;
  for (i = 0; i < jl.length__I__devirtual$_0(this$static); i++) {
    h = ji2.ensureInt((h << 5) - h + jl.charAt_I_C__devirtual$_0(this$static, i));
  }
  return h;
}
;
jl.$indexOf = function $indexOf(this$static, codePoint){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}
;
jl.$indexOf_0 = function $indexOf_0(this$static, codePoint, startIndex){
  return jl.indexOf_Ljava_lang_String_I_I__devirtual$(this$static, fromCodePoint(codePoint), startIndex);
}
;
jl.$indexOf_1 = function $indexOf_1(this$static, str){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str);
}
;
jl.$indexOf_2 = function $indexOf_2(this$static, str, startIndex){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).indexOf(str, startIndex);
}
;
jl.$init__V__devirtual$_3 = function $init__V__devirtual$_3(this$static){
  return jl.$$init_2(this$static);
}
;
jl.$intern = function $intern(this$static){
  return castToString(ji2.checkNotNull_0(this$static));
}
;
jl.$isEmpty = function $isEmpty(this$static){
  return jl.length__I__devirtual$_0(this$static) == 0;
}
;
function $isInstance_1(instance){
  jl.$clinit_String();
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('string', typeof(instance));
}

jl.$lastIndexOf = function $lastIndexOf(this$static, codePoint){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, fromCodePoint(codePoint));
}
;
jl.$lastIndexOf_0 = function $lastIndexOf_0(this$static, codePoint, startIndex){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, fromCodePoint(codePoint), startIndex);
}
;
jl.$lastIndexOf_1 = function $lastIndexOf_1(this$static, str){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str);
}
;
jl.$lastIndexOf_2 = function $lastIndexOf_2(this$static, str, start_0){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).lastIndexOf(str, start_0);
}
;
jl.$length_10 = function $length_10(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).length;
}
;
jl.$matches = function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}
;
jl.$nativeReplaceAll = function $nativeReplaceAll(this$static, regex, replace){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(new RegExp(regex, 'g'), replace);
}
;
jl.$offsetByCodePoints = function $offsetByCodePoints(this$static, index_0, codePointOffset){
  return offsetByCodePoints(this$static, index_0, codePointOffset);
}
;
jl.$regionMatches = function $regionMatches(this$static, toffset, other, ooffset, len){
  return jl.regionMatches_ZILjava_lang_String_II_Z__devirtual$(this$static, false, toffset, other, ooffset, len);
}
;
jl.$regionMatches_0 = function $regionMatches_0(this$static, ignoreCase, toffset, other, ooffset, len){
  var left, right;
  ji2.checkNotNull_0(other);
  if (toffset < 0 || ooffset < 0) {
    return false;
  }
  if (toffset + len > jl.length__I__devirtual$_0(this$static) || ooffset + len > jl.length__I__devirtual$_0(other)) {
    return false;
  }
  if (len <= 0) {
    return true;
  }
  left = jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(toffset, len);
  right = jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(other).substr(ooffset, len);
  return ignoreCase?jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(left, right):jl.equals_Ljava_lang_Object__Z__devirtual$_2(left, right);
}
;
jl.$replace = function $replace(this$static, from, to){
  var hex, regex, replace;
  hex = toHexString(from);
  regex = '\\u' + jl.substring_I_Ljava_lang_String___devirtual$('0000', jl.length__I__devirtual$_0(hex)) + hex;
  replace = String.fromCharCode(to);
  return jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace);
}
;
jl.$replace_0 = function $replace_0(this$static, from, to){
  var regex, replacement;
  regex = jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(toString_11(from), '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(toString_11(to), '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replacement);
}
;
jl.$replaceAll = function $replaceAll(this$static, regex, replace){
  replace = jl.translateReplaceString(replace);
  return jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace);
}
;
jl.$replaceFirst = function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = jl.translateReplaceString(replace);
  jsRegEx = new RegExp(regex);
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).replace(jsRegEx, replace);
}
;
jl.$split = function $split(this$static, regex){
  return jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, 0);
}
;
jl.$split_0 = function $split_0(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchIndex, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(cggl.Ljava_lang_String_2_classLit, {3:1, 1:1, 7:1, 192:1}, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (jsEquals(matchObj, null) || jsEquals(trail, '') || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      matchIndex = matchObj.index;
      out[count] = jl.substring_II_Ljava_lang_String___devirtual$(trail, 0, matchIndex);
      trail = jl.substring_II_Ljava_lang_String___devirtual$(trail, matchIndex + jl.length__I__devirtual$_0(ji2.$asArray_0(matchObj)[0]), jl.length__I__devirtual$_0(trail));
      compiled.lastIndex = 0;
      if (jsEquals(lastTrail, trail)) {
        out[count] = jl.substring_II_Ljava_lang_String___devirtual$(trail, 0, 1);
        trail = jl.substring_I_Ljava_lang_String___devirtual$(trail, 1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && jl.length__I__devirtual$_0(this$static) > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && jsEquals(out[lastNonEmpty - 1], '')) {
      --lastNonEmpty;
    }
    if (lastNonEmpty < out.length) {
      ji2.setLength_0(out, lastNonEmpty);
    }
  }
  return out;
}
;
jl.$startsWith = function $startsWith(this$static, prefix){
  return jl.startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, 0);
}
;
jl.$startsWith_0 = function $startsWith_0(this$static, prefix, toffset){
  return toffset >= 0 && jl.equals_Ljava_lang_Object__Z__devirtual$_2(jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(toffset, jl.length__I__devirtual$_0(prefix)), prefix);
}
;
jl.$subSequence = function $subSequence(this$static, beginIndex, endIndex){
  return jl.substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex);
}
;
jl.$substring = function $substring(this$static, beginIndex){
  ji2.checkStringElementIndex(beginIndex, jl.length__I__devirtual$_0(this$static) + 1);
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex);
}
;
jl.$substring_0 = function $substring_0(this$static, beginIndex, endIndex){
  ji2.checkStringBounds(beginIndex, endIndex, jl.length__I__devirtual$_0(this$static));
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).substr(beginIndex, endIndex - beginIndex);
}
;
jl.$toCharArray = function $toCharArray(this$static){
  var charArr, n;
  n = jl.length__I__devirtual$_0(this$static);
  charArr = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 15, n, 15, 1);
  jl.getChars0_II_CI_V__devirtual$(this$static, 0, n, charArr, 0);
  return charArr;
}
;
jl.$toLowerCase = function $toLowerCase(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}
;
jl.$toLowerCase_0 = function $toLowerCase_0(this$static, locale){
  return jsEquals(locale, ju.getDefault())?jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLocaleLowerCase():jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLowerCase();
}
;
jl.$toUpperCase = function $toUpperCase(this$static){
  return jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toUpperCase();
}
;
jl.$toUpperCase_0 = function $toUpperCase_0(this$static, locale){
  return jsEquals(locale, ju.getDefault())?jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toLocaleUpperCase():jl.asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static).toUpperCase();
}
;
jl.$trim = function $trim(this$static){
  var end, length_0, start_0;
  length_0 = jl.length__I__devirtual$_0(this$static);
  start_0 = 0;
  while (start_0 < length_0 && jl.charAt_I_C__devirtual$_0(this$static, start_0) <= 32) {
    start_0++;
  }
  end = length_0;
  while (end > start_0 && jl.charAt_I_C__devirtual$_0(this$static, end - 1) <= 32) {
    end--;
  }
  return start_0 > 0 || end < length_0?jl.substring_II_Ljava_lang_String___devirtual$(this$static, start_0, end):this$static;
}
;
jl.String_0 = function String_0(){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_3();
}
;
jl.String_1 = function String_1(other){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_4(other);
}
;
jl.String_2 = function String_2(sb){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_5(sb);
}
;
function String_3(sb){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  $create_6(sb);
}

jl.String_4 = function String_4(bytes){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_7(bytes);
}
;
jl.String_5 = function String_5(bytes, ofs, len){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_8(bytes, ofs, len);
}
;
jl.String_6 = function String_6(bytes, ofs, len, charsetName){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_9(bytes, ofs, len, charsetName);
}
;
jl.String_7 = function String_7(bytes, ofs, len, charset){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_10(bytes, ofs, len, charset);
}
;
jl.String_8 = function String_8(bytes, charsetName){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_11(bytes, charsetName);
}
;
jl.String_9 = function String_9(bytes, charset){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_12(bytes, charset);
}
;
jl.String_10 = function String_10(value_0){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_13(value_0);
}
;
jl.String_11 = function String_11(value_0, offset, count){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_14(value_0, offset, count);
}
;
jl.String_12 = function String_12(codePoints, offset, count){
  Object_0.call(this);
  jl.$init__V__devirtual$_3(this);
  jl.$create_15(codePoints, offset, count);
}
;
jl.asNativeString__Ljava_lang_String$NativeString___devirtual$ = function asNativeString__Ljava_lang_String$NativeString___devirtual$(this$static){
  return jl.$asNativeString(this$static);
}
;
jl.charAt_I_C__devirtual$ = function charAt_I_C__devirtual$(this$static, index_0){
  jl.$clinit_String();
  return instanceOfString(this$static)?jl.$charAt(this$static, index_0):this$static.charAt(index_0);
}
;
jl.charAt_I_C__devirtual$_0 = function charAt_I_C__devirtual$_0(this$static, index_0){
  jl.$clinit_String();
  return jl.$charAt(this$static, index_0);
}
;
jl.codePointAt_I_I__devirtual$ = function codePointAt_I_I__devirtual$(this$static, index_0){
  jl.$clinit_String();
  return jl.$codePointAt(this$static, index_0);
}
;
jl.codePointBefore_I_I__devirtual$ = function codePointBefore_I_I__devirtual$(this$static, index_0){
  return jl.$codePointBefore(this$static, index_0);
}
;
jl.codePointCount_II_I__devirtual$ = function codePointCount_II_I__devirtual$(this$static, beginIndex, endIndex){
  return jl.$codePointCount(this$static, beginIndex, endIndex);
}
;
jl.compareToIgnoreCase_Ljava_lang_String__I__devirtual$ = function compareToIgnoreCase_Ljava_lang_String__I__devirtual$(this$static, other){
  jl.$clinit_String();
  return jl.$compareToIgnoreCase(this$static, other);
}
;
jl.compareTo_Ljava_lang_Object__I__devirtual$_2 = function compareTo_Ljava_lang_Object__I__devirtual$_2(this$static, other){
  return jl.$compareTo_3(this$static, other);
}
;
jl.compareTo_Ljava_lang_String__I__devirtual$ = function compareTo_Ljava_lang_String__I__devirtual$(this$static, other){
  return jl.$compareTo_4(this$static, other);
}
;
jl.concat_Ljava_lang_String__Ljava_lang_String___devirtual$ = function concat_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, str){
  return jl.$concat(this$static, str);
}
;
jl.contains_Ljava_lang_CharSequence__Z__devirtual$ = function contains_Ljava_lang_CharSequence__Z__devirtual$(this$static, s){
  jl.$clinit_String();
  return jl.$contains(this$static, s);
}
;
jl.contentEquals_Ljava_lang_CharSequence__Z__devirtual$ = function contentEquals_Ljava_lang_CharSequence__Z__devirtual$(this$static, cs){
  return jl.$contentEquals(this$static, cs);
}
;
jl.contentEquals_Ljava_lang_StringBuffer__Z__devirtual$ = function contentEquals_Ljava_lang_StringBuffer__Z__devirtual$(this$static, sb){
  return jl.$contentEquals_0(this$static, sb);
}
;
jl.copyValueOf = function copyValueOf(v){
  return jl.valueOf_19(v);
}
;
function copyValueOf_0(v, offset, count){
  jl.$clinit_String();
  return jl.valueOf_20(v, offset, count);
}

jl.endsWith_Ljava_lang_String__Z__devirtual$ = function endsWith_Ljava_lang_String__Z__devirtual$(this$static, suffix){
  return jl.$endsWith(this$static, suffix);
}
;
jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$ = function equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(this$static, other){
  jl.$clinit_String();
  return jl.$equalsIgnoreCase(this$static, other);
}
;
jl.equals_Ljava_lang_Object__Z__devirtual$_2 = function equals_Ljava_lang_Object__Z__devirtual$_2(this$static, other){
  jl.$clinit_String();
  return jl.$equals_3(this$static, other);
}
;
jl.fromCharCode = function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}
;
function fromCodePoint(codePoint){
  jl.$clinit_String();
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = getHighSurrogate(codePoint);
    loSurrogate = getLowSurrogate(codePoint);
    return jl.valueOf_12(hiSurrogate) + ('' + jl.valueOf_12(loSurrogate));
  }
   else {
    return jl.valueOf_12(narrow_char(codePoint));
  }
}

jl.getBytes_Ljava_lang_String___B__devirtual$ = function getBytes_Ljava_lang_String___B__devirtual$(this$static, charsetName){
  return jl.$getBytes_0(this$static, charsetName);
}
;
jl.getBytes_Ljava_nio_charset_Charset___B__devirtual$ = function getBytes_Ljava_nio_charset_Charset___B__devirtual$(this$static, charset){
  return jl.$getBytes_1(this$static, charset);
}
;
jl.getBytes___B__devirtual$ = function getBytes___B__devirtual$(this$static){
  jl.$clinit_String();
  return jl.$getBytes(this$static);
}
;
jl.getChars0_II_CI_V__devirtual$ = function getChars0_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin){
  return jl.$getChars0(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.getChars_II_CI_V__devirtual$ = function getChars_II_CI_V__devirtual$(this$static, srcBegin, srcEnd, dst, dstBegin){
  jl.$clinit_String();
  return jl.$getChars(this$static, srcBegin, srcEnd, dst, dstBegin);
}
;
jl.getCharset = function getCharset(charsetName){
  var e;
  try {
    return jnc.forName(charsetName);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 52)) {
      e = $e0;
      throw toJs(new ji.UnsupportedEncodingException(charsetName));
    }
     else 
      throw toJs($e0);
  }
}
;
jl.getClass__Ljava_lang_Class___devirtual$_3 = function getClass__Ljava_lang_Class___devirtual$_3(this$static){
  return jl.$getClass_31(this$static);
}
;
jl.hashCode__I__devirtual$_2 = function hashCode__I__devirtual$_2(this$static){
  jl.$clinit_String();
  return jl.$hashCode_3(this$static);
}
;
jl.indexOf_II_I__devirtual$ = function indexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  return jl.$indexOf_0(this$static, codePoint, startIndex);
}
;
jl.indexOf_I_I__devirtual$ = function indexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$indexOf(this$static, codePoint);
}
;
jl.indexOf_Ljava_lang_String_I_I__devirtual$ = function indexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, startIndex){
  jl.$clinit_String();
  return jl.$indexOf_2(this$static, str, startIndex);
}
;
jl.indexOf_Ljava_lang_String__I__devirtual$ = function indexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$indexOf_1(this$static, str);
}
;
jl.intern__Ljava_lang_String___devirtual$ = function intern__Ljava_lang_String___devirtual$(this$static){
  return jl.$intern(this$static);
}
;
jl.isEmpty__Z__devirtual$ = function isEmpty__Z__devirtual$(this$static){
  jl.$clinit_String();
  return jl.$isEmpty(this$static);
}
;
function join_1(delimiter, elements){
  jl.$clinit_String();
  var e, e$iterator, joiner;
  joiner = new ju.StringJoiner(delimiter);
  for (e$iterator = elements.iterator(); e$iterator.hasNext_0();) {
    e = castTo(e$iterator.next_0(), 44);
    joiner.add_3(e);
  }
  return joiner.toString_0();
}

jl.join_2 = function join_2(delimiter, elements){
  var e, e$array, e$index, e$max, joiner;
  joiner = new ju.StringJoiner(delimiter);
  for (e$array = elements , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    joiner.add_3(e);
  }
  return joiner.toString_0();
}
;
jl.lastIndexOf_II_I__devirtual$ = function lastIndexOf_II_I__devirtual$(this$static, codePoint, startIndex){
  jl.$clinit_String();
  return jl.$lastIndexOf_0(this$static, codePoint, startIndex);
}
;
jl.lastIndexOf_I_I__devirtual$ = function lastIndexOf_I_I__devirtual$(this$static, codePoint){
  jl.$clinit_String();
  return jl.$lastIndexOf(this$static, codePoint);
}
;
jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$ = function lastIndexOf_Ljava_lang_String_I_I__devirtual$(this$static, str, start_0){
  jl.$clinit_String();
  return jl.$lastIndexOf_2(this$static, str, start_0);
}
;
jl.lastIndexOf_Ljava_lang_String__I__devirtual$ = function lastIndexOf_Ljava_lang_String__I__devirtual$(this$static, str){
  jl.$clinit_String();
  return jl.$lastIndexOf_1(this$static, str);
}
;
jl.length__I__devirtual$ = function length__I__devirtual$(this$static){
  return instanceOfString(this$static)?jl.$length_10(this$static):this$static.length_0();
}
;
jl.length__I__devirtual$_0 = function length__I__devirtual$_0(this$static){
  jl.$clinit_String();
  return jl.$length_10(this$static);
}
;
jl.matches_Ljava_lang_String__Z__devirtual$ = function matches_Ljava_lang_String__Z__devirtual$(this$static, regex){
  return jl.$matches(this$static, regex);
}
;
jl.nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function nativeReplaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  return jl.$nativeReplaceAll(this$static, regex, replace);
}
;
jl.offsetByCodePoints_II_I__devirtual$ = function offsetByCodePoints_II_I__devirtual$(this$static, index_0, codePointOffset){
  return jl.$offsetByCodePoints(this$static, index_0, codePointOffset);
}
;
jl.regionMatches_ILjava_lang_String_II_Z__devirtual$ = function regionMatches_ILjava_lang_String_II_Z__devirtual$(this$static, toffset, other, ooffset, len){
  return jl.$regionMatches(this$static, toffset, other, ooffset, len);
}
;
jl.regionMatches_ZILjava_lang_String_II_Z__devirtual$ = function regionMatches_ZILjava_lang_String_II_Z__devirtual$(this$static, ignoreCase, toffset, other, ooffset, len){
  return jl.$regionMatches_0(this$static, ignoreCase, toffset, other, ooffset, len);
}
;
jl.replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function replaceAll_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  return jl.$replaceAll(this$static, regex, replace);
}
;
jl.replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$ = function replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(this$static, regex, replace){
  jl.$clinit_String();
  return jl.$replaceFirst(this$static, regex, replace);
}
;
jl.replace_CC_Ljava_lang_String___devirtual$ = function replace_CC_Ljava_lang_String___devirtual$(this$static, from, to){
  return jl.$replace(this$static, from, to);
}
;
jl.replace_Ljava_lang_CharSequence_Ljava_lang_CharSequence__Ljava_lang_String___devirtual$ = function replace_Ljava_lang_CharSequence_Ljava_lang_CharSequence__Ljava_lang_String___devirtual$(this$static, from, to){
  return jl.$replace_0(this$static, from, to);
}
;
jl.split_Ljava_lang_String_I__Ljava_lang_String___devirtual$ = function split_Ljava_lang_String_I__Ljava_lang_String___devirtual$(this$static, regex, maxMatch){
  return jl.$split_0(this$static, regex, maxMatch);
}
;
jl.split_Ljava_lang_String___Ljava_lang_String___devirtual$ = function split_Ljava_lang_String___Ljava_lang_String___devirtual$(this$static, regex){
  return jl.$split(this$static, regex);
}
;
jl.startsWith_Ljava_lang_String_I_Z__devirtual$ = function startsWith_Ljava_lang_String_I_Z__devirtual$(this$static, prefix, toffset){
  return jl.$startsWith_0(this$static, prefix, toffset);
}
;
jl.startsWith_Ljava_lang_String__Z__devirtual$ = function startsWith_Ljava_lang_String__Z__devirtual$(this$static, prefix){
  jl.$clinit_String();
  return jl.$startsWith(this$static, prefix);
}
;
jl.subSequence_II_Ljava_lang_CharSequence___devirtual$ = function subSequence_II_Ljava_lang_CharSequence___devirtual$(this$static, start_0, end){
  return instanceOfString(this$static)?jl.$subSequence(this$static, start_0, end):this$static.subSequence(start_0, end);
}
;
jl.subSequence_II_Ljava_lang_CharSequence___devirtual$_0 = function subSequence_II_Ljava_lang_CharSequence___devirtual$_0(this$static, beginIndex, endIndex){
  return jl.$subSequence(this$static, beginIndex, endIndex);
}
;
jl.substring_II_Ljava_lang_String___devirtual$ = function substring_II_Ljava_lang_String___devirtual$(this$static, beginIndex, endIndex){
  jl.$clinit_String();
  return jl.$substring_0(this$static, beginIndex, endIndex);
}
;
jl.substring_I_Ljava_lang_String___devirtual$ = function substring_I_Ljava_lang_String___devirtual$(this$static, beginIndex){
  jl.$clinit_String();
  return jl.$substring(this$static, beginIndex);
}
;
jl.toCharArray___C__devirtual$ = function toCharArray___C__devirtual$(this$static){
  return jl.$toCharArray(this$static);
}
;
jl.toLowerCase_Ljava_util_Locale__Ljava_lang_String___devirtual$ = function toLowerCase_Ljava_util_Locale__Ljava_lang_String___devirtual$(this$static, locale){
  return jl.$toLowerCase_0(this$static, locale);
}
;
jl.toLowerCase__Ljava_lang_String___devirtual$ = function toLowerCase__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$toLowerCase(this$static);
}
;
jl.toUpperCase_Ljava_util_Locale__Ljava_lang_String___devirtual$ = function toUpperCase_Ljava_util_Locale__Ljava_lang_String___devirtual$(this$static, locale){
  return jl.$toUpperCase_0(this$static, locale);
}
;
jl.toUpperCase__Ljava_lang_String___devirtual$ = function toUpperCase__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$toUpperCase(this$static);
}
;
jl.translateReplaceString = function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = jl.indexOf_Ljava_lang_String_I_I__devirtual$(replaceStr, '\\', pos))) {
    if (jl.charAt_I_C__devirtual$_0(replaceStr, pos + 1) == 36) {
      replaceStr = jl.substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + '$' + jl.substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos);
    }
     else {
      replaceStr = jl.substring_II_Ljava_lang_String___devirtual$(replaceStr, 0, pos) + ('' + jl.substring_I_Ljava_lang_String___devirtual$(replaceStr, ++pos));
    }
  }
  return replaceStr;
}
;
jl.trim__Ljava_lang_String___devirtual$ = function trim__Ljava_lang_String___devirtual$(this$static){
  jl.$clinit_String();
  return jl.$trim(this$static);
}
;
jl.valueOf_12 = function valueOf_12(x_0){
  jl.$clinit_String();
  return String.fromCharCode(x_0);
}
;
jl.valueOf_13 = function valueOf_13(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_14 = function valueOf_14(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_15 = function valueOf_15(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_16 = function valueOf_16(x_0){
  jl.$clinit_String();
  return '' + toString_10(x_0);
}
;
function valueOf_17(x_0){
  jl.$clinit_String();
  return jsEquals(x_0, null)?'null':toString_11(x_0);
}

jl.valueOf_18 = function valueOf_18(x_0){
  jl.$clinit_String();
  return '' + x_0;
}
;
jl.valueOf_19 = function valueOf_19(x_0){
  jl.$clinit_String();
  return jl.valueOf_20(x_0, 0, x_0.length);
}
;
jl.valueOf_20 = function valueOf_20(x_0, offset, count){
  var batchEnd, batchSize, batchStart, end, s;
  end = offset + count;
  ji2.checkCriticalStringBounds(offset, end, x_0.length);
  batchSize = 10000;
  s = '';
  for (batchStart = offset; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + batchSize, end);
    s += '' + jl.fromCharCode(ji2.unsafeClone(x_0, batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}
;
stringCastMap = {3:1, 44:1, 11:1, 1:1, 2:1};
var CASE_INSENSITIVE_ORDER;
ju.$clinit_Comparator = function $clinit_Comparator(){
  ju.$clinit_Comparator = emptyMethod;
}
;
jl.$clinit_String$1 = function $clinit_String$1(){
  jl.$clinit_String$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Comparator();
}
;
jl.String$1 = function String$1(){
  jl.$clinit_String$1();
  Object_0.call(this);
  this.$init_105();
}
;
defineClass(95, 1, {1:1}, jl.String$1);
_.$init_105 = function $init_105(){
}
;
_.equals_0 = function equals_8(other){
  return getClassPrototype(1).equals_0.call(this, other);
}
;
ji2.$clinit_JsUtils = function $clinit_JsUtils(){
  ji2.$clinit_JsUtils = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.doubleToRawLongBits_0 = function doubleToRawLongBits_0(value_0){
  ji2.$clinit_JsUtils();
  var buf, intBits;
  buf = new ArrayBuffer(8);
  ji2.uncheckedCast(new Float64Array(buf))[0] = value_0;
  intBits = ji2.uncheckedCast(new Uint32Array(buf));
  return ji2.fromBits(intBits[0] | 0, intBits[1] | 0);
}
;
ji2.getProperty = function getProperty(map_0, key){
  ji2.$clinit_JsUtils();
  return map_0[key];
}
;
ji2.isUndefined = function isUndefined(value_0){
  ji2.$clinit_JsUtils();
  return value_0 === undefined;
}
;
ji2.longBitsToDouble_0 = function longBitsToDouble_0(value_0){
  ji2.$clinit_JsUtils();
  var buf, intBits;
  buf = new ArrayBuffer(8);
  intBits = ji2.uncheckedCast(new Uint32Array(buf));
  intBits[0] = toInt_0(value_0);
  intBits[1] = ji2.getHighBits(value_0);
  return ji2.uncheckedCast(new Float64Array(buf))[0];
}
;
ji2.numberToString = function numberToString(value_0, radix){
  var number;
  number = ji2.uncheckedCast(value_0);
  return number.toString(radix);
}
;
ji2.toDoubleFromUnsignedInt = function toDoubleFromUnsignedInt(value_0){
  return value_0 >>> 0;
}
;
ji2.uintToString = function uintToString(value_0, radix){
  ji2.$clinit_JsUtils();
  return ji2.numberToString(ji2.toDoubleFromUnsignedInt(value_0), radix);
}
;
ji2.uncheckedCast = function uncheckedCast(o){
  ji2.$clinit_JsUtils();
  return o;
}
;
ji2.unsafeCastToBoolean = function unsafeCastToBoolean(bool){
  ji2.$clinit_JsUtils();
  return bool;
}
;
ji2.unsafeCastToDouble = function unsafeCastToDouble(number){
  ji2.$clinit_JsUtils();
  return number;
}
;
defineClass(240, 1, {1:1});
cggl.Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1, null);
cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Cast_2_classLit = createForClass('com.google.gwt.lang', 'Cast', 219, cggl.Ljava_lang_Object_2_classLit);
cggl.Lcom_google_gwt_lang_Util_2_classLit = createForClass('com.google.gwt.lang', 'Util', 226, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_io_Serializable_2_classLit = createForInterface('java.io', 'Serializable');
cggl.Ljava_lang_Comparable_2_classLit = createForInterface('java.lang', 'Comparable');
cggl.Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 126, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_CharSequence_2_classLit = createForInterface('java.lang', 'CharSequence');
cggl.Ljava_lang_reflect_Type_2_classLit = createForInterface('java.lang.reflect', 'Type');
cggl.Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 70, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 25, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 113, cggl.Ljava_lang_Number_2_classLit);
cggl.Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljava_util_Comparator_2_classLit = createForInterface('java.util', 'Comparator');
cggl.Ljava_lang_String$1_2_classLit = createForClass('java.lang', 'String/1', 95, cggl.Ljava_lang_Object_2_classLit);
cggl.Ljavaemul_internal_JsUtils_2_classLit = createForClass('javaemul.internal', 'JsUtils', 240, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Callback = function $clinit_Callback(){
  cggcc.$clinit_Callback = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_Callback_2_classLit = createForInterface('com.google.gwt.core.client', 'Callback');
jl.$clinit_Throwable = function $clinit_Throwable(){
  jl.$clinit_Throwable = emptyMethod;
  jl.$clinit_Object();
}
;
jl.Throwable = function Throwable(){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
function Throwable_0(backingJsObject){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.fillInStackTrace();
  this.setBackingJsObject(backingJsObject);
  this.detailMessage = valueOf_17(backingJsObject);
}

jl.Throwable_1 = function Throwable_1(message){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.Throwable_2 = function Throwable_2(message, cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.cause_0 = cause;
  this.detailMessage = message;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.Throwable_3 = function Throwable_3(cause){
  jl.$clinit_Throwable();
  Object_0.call(this);
  this.$init_0();
  this.detailMessage = isNull(cause)?null:cause.toString_0();
  this.cause_0 = cause;
  this.fillInStackTrace();
  this.initializeBackingError();
}
;
jl.fixIE = function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}
;
defineClass(4, 1, {3:1, 1:1, 4:1});
_.$init_0 = function $init_0(){
  this.stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 14, 0, 0, 1);
  this.writableStackTrace = true;
  this.backingJsObject_0 = UNINITIALIZED;
}
;
_.addSuppressed = function addSuppressed(exception){
  ji2.checkNotNull_1(exception, 'Cannot suppress a null exception.');
  ji2.checkCriticalArgument_0(jsNotEquals(exception, this), 'Exception can not suppress itself.');
  if (this.disableSuppression) {
    return;
  }
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Throwable_2_classLit, 1), {3:1, 1:1, 7:1}, 4, 0, [exception]);
  }
   else {
    setCheck(this.suppressedExceptions, this.suppressedExceptions.length, exception);
  }
}
;
_.captureStackTrace_0 = function captureStackTrace(){
  cggcci.captureStackTrace_0(this);
}
;
_.constructJavaStackTrace = function constructJavaStackTrace(){
  return cggcci.constructJavaStackTrace_0(this);
}
;
_.createError = function createError(msg){
  return new Error(msg);
}
;
_.fillInStackTrace = function fillInStackTrace(){
  if (this.writableStackTrace) {
    if (maskUndefined(this.backingJsObject_0) !== maskUndefined(UNINITIALIZED)) {
      this.initializeBackingError();
    }
    this.stackTrace = null;
  }
  return this;
}
;
_.getBackingJsObject = function getBackingJsObject(){
  return this.backingJsObject_0;
}
;
_.getBackingSuppressed = function getBackingSuppressed(){
  var i, result, suppressed;
  suppressed = this.getSuppressed();
  result = initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, suppressed.length, 5, 1);
  for (i = 0; i < suppressed.length; i++) {
    setCheck(result, i, suppressed[i].backingJsObject_0);
  }
  return result;
}
;
_.getCause = function getCause(){
  return this.cause_0;
}
;
_.getLocalizedMessage = function getLocalizedMessage(){
  return this.getMessage();
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.getStackTrace = function getStackTrace(){
  if (jsEquals(this.stackTrace, null)) {
    this.stackTrace = this.constructJavaStackTrace();
  }
  return this.stackTrace;
}
;
_.getSuppressed = function getSuppressed(){
  if (jsEquals(this.suppressedExceptions, null)) {
    this.suppressedExceptions = initUnidimensionalArray(cggl.Ljava_lang_Throwable_2_classLit, {3:1, 1:1, 7:1}, 4, 0, 0, 1);
  }
  return this.suppressedExceptions;
}
;
_.initializeBackingError = function initializeBackingError(){
  this.setBackingJsObject(jl.fixIE(this.createError(this.toString_1(this.detailMessage))));
  this.captureStackTrace_0();
}
;
_.linkBack = function linkBack(error){
  if (error instanceof Object) {
    try {
      error.__java$exception = this;
      if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && $doc.documentMode < 9) {
        return;
      }
      var throwable = this;
      Object.defineProperties(error, {cause:{get:function(){
        var cause = throwable.getCause();
        return cause && cause.getBackingJsObject();
      }
      }, suppressed:{get:function(){
        return throwable.getBackingSuppressed();
      }
      }});
    }
     catch (ignored) {
    }
  }
}
;
_.printStackTrace = function printStackTrace(out){
  this.printStackTraceImpl(out, '', '');
}
;
_.printStackTraceImpl = function printStackTraceImpl(out, prefix, ident){
  var t, t$array, t$index, t$max, theCause;
  out.println(ident + ('' + prefix) + this);
  this.printStackTraceItems(out, ident);
  for (t$array = this.getSuppressed() , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    t.printStackTraceImpl(out, 'Suppressed: ', '\t' + ident);
  }
  theCause = this.getCause();
  if (isNotNull(theCause)) {
    theCause.printStackTraceImpl(out, 'Caused by: ', ident);
  }
}
;
_.printStackTraceItems = function printStackTraceItems(out, ident){
  var element, element$array, element$index, element$max;
  for (element$array = this.getStackTrace() , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index) {
    element = element$array[element$index];
    out.println(ident + '\tat ' + element);
  }
}
;
_.setBackingJsObject = function setBackingJsObject(backingJsObject){
  this.backingJsObject_0 = backingJsObject;
  this.linkBack(backingJsObject);
}
;
_.toString_0 = function toString_3(){
  return this.toString_1(this.getLocalizedMessage());
}
;
_.toString_1 = function toString_4(message){
  var className;
  className = jl.getClass__Ljava_lang_Class___devirtual$(this).getName();
  return jsEquals(message, null)?className:className + ': ' + message;
}
;
_.disableSuppression = false;
_.writableStackTrace = false;
var UNINITIALIZED = '__noinit__';
cggl.Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 4, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Exception = function $clinit_Exception(){
  jl.$clinit_Exception = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Exception = function Exception(){
  jl.$clinit_Exception();
  jl.Throwable.call(this);
  this.$init_1();
}
;
jl.Exception_0 = function Exception_0(backingJsObject){
  jl.$clinit_Exception();
  Throwable_0.call(this, backingJsObject);
  this.$init_1();
}
;
jl.Exception_1 = function Exception_1(message){
  jl.$clinit_Exception();
  jl.Throwable_1.call(this, message);
  this.$init_1();
}
;
jl.Exception_2 = function Exception_2(message, cause){
  jl.$clinit_Exception();
  jl.Throwable_2.call(this, message, cause);
  this.$init_1();
}
;
jl.Exception_3 = function Exception_3(cause){
  jl.$clinit_Exception();
  jl.Throwable_3.call(this, cause);
  this.$init_1();
}
;
defineClass(6, 4, {3:1, 6:1, 1:1, 4:1});
_.$init_1 = function $init_1(){
}
;
cggl.Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 6, cggl.Ljava_lang_Throwable_2_classLit);
jl.$clinit_RuntimeException = function $clinit_RuntimeException(){
  jl.$clinit_RuntimeException = emptyMethod;
  jl.$clinit_Exception();
}
;
jl.RuntimeException = function RuntimeException(){
  jl.$clinit_RuntimeException();
  jl.Exception.call(this);
  this.$init_2();
}
;
jl.RuntimeException_0 = function RuntimeException_0(backingJsObject){
  jl.$clinit_RuntimeException();
  jl.Exception_0.call(this, backingJsObject);
  this.$init_2();
}
;
jl.RuntimeException_1 = function RuntimeException_1(message){
  jl.$clinit_RuntimeException();
  jl.Exception_1.call(this, message);
  this.$init_2();
}
;
jl.RuntimeException_2 = function RuntimeException_2(message, cause){
  jl.$clinit_RuntimeException();
  jl.Exception_2.call(this, message, cause);
  this.$init_2();
}
;
defineClass(5, 6, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.RuntimeException_1);
_.$init_2 = function $init_2(){
}
;
cggl.Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 5, cggl.Ljava_lang_Exception_2_classLit);
cggcc.$clinit_CodeDownloadException = function $clinit_CodeDownloadException(){
  cggcc.$clinit_CodeDownloadException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcc.CodeDownloadException = function CodeDownloadException(message){
  cggcc.$clinit_CodeDownloadException();
  jl.RuntimeException_1.call(this, message);
  this.$init_3();
  this.reason = (cggcc.$clinit_CodeDownloadException$Reason() , cggcc.TERMINATED);
}
;
defineClass(329, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, cggcc.CodeDownloadException);
_.$init_3 = function $init_3(){
}
;
cggl.Lcom_google_gwt_core_client_CodeDownloadException_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException', 329, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Enum = function $clinit_Enum(){
  jl.$clinit_Enum = emptyMethod;
  jl.$clinit_Object();
}
;
function Enum(name_0, ordinal){
  jl.$clinit_Enum();
  Object_0.call(this);
  this.$init_4();
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

function createValueOfMap(enumConstants){
  jl.$clinit_Enum();
  var result, value_0, value$array, value$index, value$max;
  result = createObject();
  for (value$array = enumConstants , value$index = 0 , value$max = value$array.length; value$index < value$max; ++value$index) {
    value_0 = value$array[value$index];
    jl.put0(result, ':' + value_0.name_1(), value_0);
  }
  return result;
}

jl.get0 = function get0(map_0, name_0){
  return map_0[name_0];
}
;
jl.put0 = function put0(map_0, name_0, value_0){
  map_0[name_0] = value_0;
}
;
function valueOf(map_0, name_0){
  jl.$clinit_Enum();
  var result;
  ji2.checkNotNull_0(name_0);
  result = jl.get0(map_0, ':' + name_0);
  ji2.checkCriticalArgument_0(isNotNull(result), 'Enum constant undefined: ' + name_0);
  return result;
}

defineClass(23, 1, {3:1, 11:1, 23:1, 1:1});
_.$init_4 = function $init_4(){
}
;
_.compareTo_0 = function compareTo_0(other){
  return this.compareTo(castTo(other, 23));
}
;
_.compareTo = function compareTo(other){
  return this.ordinal - castTo(other, 23).ordinal;
}
;
_.equals_0 = function equals_0(other){
  return maskUndefined(this) === maskUndefined(other);
}
;
_.hashCode_0 = function hashCode_1(){
  return getClassPrototype(1).hashCode_0.call(this);
}
;
_.name_1 = function name_1(){
  return jsNotEquals(this.name_0, null)?this.name_0:'' + this.ordinal;
}
;
_.toString_0 = function toString_5(){
  return this.name_1();
}
;
_.ordinal = 0;
cggl.Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 23, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_CodeDownloadException$Reason = function $clinit_CodeDownloadException$Reason(){
  cggcc.$clinit_CodeDownloadException$Reason = emptyMethod;
  jl.$clinit_Enum();
  cggcc.TERMINATED = new cggcc.CodeDownloadException$Reason('TERMINATED', 0);
}
;
cggcc.CodeDownloadException$Reason = function CodeDownloadException$Reason(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_5();
}
;
cggcc.valueOf_0 = function valueOf_0(name_0){
  cggcc.$clinit_CodeDownloadException$Reason();
  return valueOf((cggcc.$clinit_CodeDownloadException$Reason$Map() , cggcc.$MAP), name_0);
}
;
cggcc.values_0 = function values_0(){
  cggcc.$clinit_CodeDownloadException$Reason();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit, 1), {3:1, 1:1, 7:1}, 66, 0, [cggcc.TERMINATED]);
}
;
defineClass(66, 23, {66:1, 3:1, 11:1, 23:1, 1:1}, cggcc.CodeDownloadException$Reason);
_.$init_5 = function $init_5(){
}
;
cggl.Lcom_google_gwt_core_client_CodeDownloadException$Reason_2_classLit = createForEnum('com.google.gwt.core.client', 'CodeDownloadException/Reason', 66, cggl.Ljava_lang_Enum_2_classLit, cggcc.values_0, cggcc.valueOf_0);
cggcc.$clinit_CodeDownloadException$Reason$Map = function $clinit_CodeDownloadException$Reason$Map(){
  cggcc.$clinit_CodeDownloadException$Reason$Map = emptyMethod;
  cggcc.$MAP = createValueOfMap(cggcc.values_0());
}
;
defineClass(330, 1, {1:1});
cggl.Lcom_google_gwt_core_client_CodeDownloadException$Reason$Map_2_classLit = createForClass('com.google.gwt.core.client', 'CodeDownloadException/Reason/Map', 330, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Duration = function $clinit_Duration(){
  cggcc.$clinit_Duration = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Duration = function Duration(){
  cggcc.$clinit_Duration();
  Object_0.call(this);
  this.$init_6();
}
;
cggcc.currentTimeMillis = function currentTimeMillis(){
  cggcc.$clinit_Duration();
  return cggcc.now_1();
}
;
cggcc.uncheckedConversion = function uncheckedConversion(elapsed){
  return elapsed;
}
;
defineClass(163, 1, {1:1}, cggcc.Duration);
_.$init_6 = function $init_6(){
  this.start_0 = cggcc.currentTimeMillis();
}
;
_.elapsedMillis = function elapsedMillis(){
  return cggcc.uncheckedConversion(cggcc.currentTimeMillis() - this.start_0);
}
;
_.start_0 = 0;
cggl.Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 163, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_EntryPoint = function $clinit_EntryPoint(){
  cggcc.$clinit_EntryPoint = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_EntryPoint_2_classLit = createForInterface('com.google.gwt.core.client', 'EntryPoint');
cggcc.$clinit_GWT = function $clinit_GWT(){
  cggcc.$clinit_GWT = emptyMethod;
  jl.$clinit_Object();
}
;
function create(classLiteral){
  cggcc.$clinit_GWT();
  return cggcs.createImpl(classLiteral);
}

function getModuleBaseForStaticFiles(){
  cggcc.$clinit_GWT();
  return getModuleBaseURLForStaticFiles();
}

function getModuleName(){
  cggcc.$clinit_GWT();
  return getModuleName_0();
}

function getUncaughtExceptionHandler(){
  cggcc.$clinit_GWT();
  return uncaughtExceptionHandler;
}

function isClient(){
  cggcc.$clinit_GWT();
  return true;
}

function isScript(){
  cggcc.$clinit_GWT();
  return true;
}

cggcc.log_0 = function log_0(message){
  cggcc.$clinit_GWT();
  cggcs.log_1(message);
}
;
function reportUncaughtException(e){
  cggcc.$clinit_GWT();
  reportUncaughtException_0(e);
}

defineClass(187, 1, {1:1});
var HOSTED_MODE_PERMUTATION_STRONG_NAME = 'HostedMode';
var uncaughtExceptionHandler = null;
cggl.Lcom_google_gwt_core_client_GWT_2_classLit = createForClass('com.google.gwt.core.client', 'GWT', 187, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Scheduler$ScheduledCommand = function $clinit_Scheduler$ScheduledCommand(){
  cggcc.$clinit_Scheduler$ScheduledCommand = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/ScheduledCommand');
cggcc.$clinit_GWT$1 = function $clinit_GWT$1(){
  cggcc.$clinit_GWT$1 = emptyMethod;
}
;
defineClass(189, 1, {1:1});
cggl.Lcom_google_gwt_core_client_GWT$1_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/1', 189, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_GWT$UncaughtExceptionHandler = function $clinit_GWT$UncaughtExceptionHandler(){
  cggcc.$clinit_GWT$UncaughtExceptionHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_GWT$UncaughtExceptionHandler_2_classLit = createForInterface('com.google.gwt.core.client', 'GWT/UncaughtExceptionHandler');
cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = function $clinit_GWT$DefaultUncaughtExceptionHandler(){
  cggcc.$clinit_GWT$DefaultUncaughtExceptionHandler = emptyMethod;
}
;
defineClass(188, 1, {1:1});
cggl.Lcom_google_gwt_core_client_GWT$DefaultUncaughtExceptionHandler_2_classLit = createForClass('com.google.gwt.core.client', 'GWT/DefaultUncaughtExceptionHandler', 188, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_JsException = function $clinit_JsException(){
  jl.$clinit_JsException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.JsException = function JsException(){
  jl.$clinit_JsException();
  jl.RuntimeException.call(this);
  this.$init_7();
}
;
jl.JsException_0 = function JsException_0(backingJsObject){
  jl.$clinit_JsException();
  jl.RuntimeException_0.call(this, backingJsObject);
  this.$init_7();
  this.backingJsObject = backingJsObject;
}
;
jl.JsException_1 = function JsException_1(msg){
  jl.$clinit_JsException();
  jl.RuntimeException_1.call(this, msg);
  this.$init_7();
}
;
defineClass(58, 5, {3:1, 6:1, 1:1, 5:1, 4:1});
_.$init_7 = function $init_7(){
  this.backingJsObject = jl.UNINITIALIZED_0;
}
;
jl.UNINITIALIZED_0 = '__noinit__';
cggl.Ljava_lang_JsException_2_classLit = createForClass('java.lang', 'JsException', 58, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_JavaScriptExceptionBase = function $clinit_JavaScriptExceptionBase(){
  cggcci.$clinit_JavaScriptExceptionBase = emptyMethod;
  jl.$clinit_JsException();
}
;
cggcci.JavaScriptExceptionBase = function JavaScriptExceptionBase(e){
  cggcci.$clinit_JavaScriptExceptionBase();
  jl.JsException_0.call(this, e);
  this.$init_8();
}
;
defineClass(134, 58, {3:1, 6:1, 1:1, 5:1, 4:1});
_.$init_8 = function $init_8(){
}
;
cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 134, cggl.Ljava_lang_JsException_2_classLit);
cggcc.$clinit_JavaScriptException = function $clinit_JavaScriptException(){
  cggcc.$clinit_JavaScriptException = emptyMethod;
  cggcci.$clinit_JavaScriptExceptionBase();
  cggcc.NOT_SET = new Object_0;
}
;
cggcc.JavaScriptException = function JavaScriptException(e){
  cggcc.$clinit_JavaScriptException();
  cggcc.JavaScriptException_0.call(this, e, '');
}
;
cggcc.JavaScriptException_0 = function JavaScriptException_0(e, description){
  cggcci.JavaScriptExceptionBase.call(this, e);
  this.$init_9();
  this.e = e;
  this.description = description;
}
;
cggcc.getExceptionDescription = function getExceptionDescription(e){
  if (instanceOfJso(e)) {
    return cggcc.getExceptionDescription0(castToJso(e));
  }
   else {
    return e + '';
  }
}
;
cggcc.getExceptionDescription0 = function getExceptionDescription0(e){
  return e == null?null:e.message;
}
;
cggcc.getExceptionName = function getExceptionName(e){
  if (jsEquals(e, null)) {
    return 'null';
  }
   else if (instanceOfJso(e)) {
    return cggcc.getExceptionName0(castToJso(e));
  }
   else if (instanceOfString(e)) {
    return 'String';
  }
   else {
    return jl.getClass__Ljava_lang_Class___devirtual$(e).getName();
  }
}
;
cggcc.getExceptionName0 = function getExceptionName0(e){
  return e == null?null:e.name;
}
;
defineClass(36, 134, {36:1, 3:1, 6:1, 1:1, 5:1, 4:1}, cggcc.JavaScriptException);
_.$init_9 = function $init_9(){
  this.description = '';
}
;
_.ensureInit = function ensureInit(){
  var exception;
  if (jsEquals(this.message_0, null)) {
    exception = this.getThrown();
    this.name_0 = cggcc.getExceptionName(exception);
    this.description = this.description + ': ' + cggcc.getExceptionDescription(exception);
    this.message_0 = '(' + this.name_0 + ') ' + this.description;
  }
}
;
_.getMessage = function getMessage_0(){
  this.ensureInit();
  return this.message_0;
}
;
_.getName = function getName(){
  this.ensureInit();
  return this.name_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(cggcc.NOT_SET)?null:this.e;
}
;
cggl.Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 36, cggl.Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit);
cggcc.$clinit_JsArray = function $clinit_JsArray(){
  cggcc.$clinit_JsArray = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get = function $get(this$static, index_0){
  cggcc.$clinit_JsArray();
  return this$static[index_0];
}
;
cggcc.$join = function $join(this$static){
  return cggcc.$join_0(this$static, ',');
}
;
cggcc.$join_0 = function $join_0(this$static, separator){
  return this$static.join(separator);
}
;
cggcc.$length = function $length(this$static){
  cggcc.$clinit_JsArray();
  return this$static.length;
}
;
cggcc.$push = function $push(this$static, value_0){
  cggcc.$clinit_JsArray();
  this$static[this$static.length] = value_0;
}
;
cggcc.$set = function $set(this$static, index_0, value_0){
  cggcc.$clinit_JsArray();
  this$static[index_0] = value_0;
}
;
cggcc.$setLength = function $setLength(this$static, newLength){
  this$static.length = newLength;
}
;
cggcc.$clinit_JsArrayNumber = function $clinit_JsArrayNumber(){
  cggcc.$clinit_JsArrayNumber = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$join_1 = function $join_1(this$static){
  return cggcc.$join_2(this$static, ',');
}
;
cggcc.$join_2 = function $join_2(this$static, separator){
  return this$static.join(separator);
}
;
cggcc.$length_0 = function $length_0(this$static){
  return this$static.length;
}
;
cggcc.$push_0 = function $push_0(this$static, value_0){
  cggcc.$clinit_JsArrayNumber();
  this$static[this$static.length] = value_0;
}
;
cggcc.$setLength_0 = function $setLength_0(this$static, newLength){
  this$static.length = newLength;
}
;
cggcc.$clinit_JsArrayString = function $clinit_JsArrayString(){
  cggcc.$clinit_JsArrayString = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$get_0 = function $get_0(this$static, index_0){
  cggcc.$clinit_JsArrayString();
  return this$static[index_0];
}
;
cggcc.$join_3 = function $join_3(this$static){
  return cggcc.$join_4(this$static, ',');
}
;
cggcc.$join_4 = function $join_4(this$static, separator){
  return this$static.join(separator);
}
;
cggcc.$length_1 = function $length_1(this$static){
  cggcc.$clinit_JsArrayString();
  return this$static.length;
}
;
cggcc.$setLength_1 = function $setLength_1(this$static, newLength){
  this$static.length = newLength;
}
;
cggcc.$clinit_JsArrayUtils = function $clinit_JsArrayUtils(){
  cggcc.$clinit_JsArrayUtils = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.arrayAsJsArrayForProdMode = function arrayAsJsArrayForProdMode(array){
  return array;
}
;
cggcc.readOnlyJsArray = function readOnlyJsArray(array){
  cggcc.$clinit_JsArrayUtils();
  var dest, i;
  if (isScript()) {
    return cggcc.$cast(cggcc.arrayAsJsArrayForProdMode(array));
  }
  dest = cggcc.$cast(cggcc.createArray());
  for (i = 0; i < array.length; ++i) {
    cggcc.$push_0(dest, array[i]);
  }
  return dest;
}
;
defineClass(322, 1, {1:1});
cggl.Lcom_google_gwt_core_client_JsArrayUtils_2_classLit = createForClass('com.google.gwt.core.client', 'JsArrayUtils', 322, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_JsDate = function $clinit_JsDate(){
  cggcc.$clinit_JsDate = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcc.$getDate = function $getDate(this$static){
  return this$static.getDate();
}
;
cggcc.$getDay = function $getDay(this$static){
  return this$static.getDay();
}
;
cggcc.$getFullYear = function $getFullYear(this$static){
  return this$static.getFullYear();
}
;
cggcc.$getHours = function $getHours(this$static){
  return this$static.getHours();
}
;
cggcc.$getMilliseconds = function $getMilliseconds(this$static){
  return this$static.getMilliseconds();
}
;
cggcc.$getMinutes = function $getMinutes(this$static){
  return this$static.getMinutes();
}
;
cggcc.$getMonth = function $getMonth(this$static){
  return this$static.getMonth();
}
;
cggcc.$getSeconds = function $getSeconds(this$static){
  return this$static.getSeconds();
}
;
cggcc.$getTime = function $getTime(this$static){
  return this$static.getTime();
}
;
cggcc.$getTimezoneOffset = function $getTimezoneOffset(this$static){
  return this$static.getTimezoneOffset();
}
;
cggcc.$getUTCDate = function $getUTCDate(this$static){
  return this$static.getUTCDate();
}
;
cggcc.$getUTCDay = function $getUTCDay(this$static){
  return this$static.getUTCDay();
}
;
cggcc.$getUTCFullYear = function $getUTCFullYear(this$static){
  return this$static.getUTCFullYear();
}
;
cggcc.$getUTCHours = function $getUTCHours(this$static){
  return this$static.getUTCHours();
}
;
cggcc.$getUTCMilliseconds = function $getUTCMilliseconds(this$static){
  return this$static.getUTCMilliseconds();
}
;
cggcc.$getUTCMinutes = function $getUTCMinutes(this$static){
  return this$static.getUTCMinutes();
}
;
cggcc.$getUTCMonth = function $getUTCMonth(this$static){
  return this$static.getUTCMonth();
}
;
cggcc.$getUTCSeconds = function $getUTCSeconds(this$static){
  return this$static.getUTCSeconds();
}
;
cggcc.$getYear = function $getYear(this$static){
  return this$static.getYear();
}
;
cggcc.$setDate = function $setDate(this$static, dayOfMonth){
  this$static.setDate(dayOfMonth);
  return this$static.getTime();
}
;
cggcc.$setFullYear = function $setFullYear(this$static, year){
  this$static.setFullYear(year);
  return this$static.getTime();
}
;
cggcc.$setFullYear_0 = function $setFullYear_0(this$static, year, month){
  this$static.setFullYear(year, month);
  return this$static.getTime();
}
;
cggcc.$setFullYear_1 = function $setFullYear_1(this$static, year, month, day){
  this$static.setFullYear(year, month, day);
  return this$static.getTime();
}
;
cggcc.$setHours = function $setHours(this$static, hours){
  this$static.setHours(hours);
  return this$static.getTime();
}
;
cggcc.$setHours_0 = function $setHours_0(this$static, hours, mins){
  this$static.setHours(hours, mins);
  return this$static.getTime();
}
;
cggcc.$setHours_1 = function $setHours_1(this$static, hours, mins, secs){
  this$static.setHours(hours, mins, secs);
  return this$static.getTime();
}
;
cggcc.$setHours_2 = function $setHours_2(this$static, hours, mins, secs, ms){
  this$static.setHours(hours, mins, secs, ms);
  return this$static.getTime();
}
;
cggcc.$setMinutes = function $setMinutes(this$static, minutes){
  this$static.setMinutes(minutes);
  return this$static.getTime();
}
;
cggcc.$setMinutes_0 = function $setMinutes_0(this$static, minutes, seconds){
  this$static.setMinutes(minutes, seconds);
  return this$static.getTime();
}
;
cggcc.$setMinutes_1 = function $setMinutes_1(this$static, minutes, seconds, millis){
  this$static.setMinutes(minutes, seconds, millis);
  return this$static.getTime();
}
;
cggcc.$setMonth = function $setMonth(this$static, month){
  this$static.setMonth(month);
  return this$static.getTime();
}
;
cggcc.$setMonth_0 = function $setMonth_0(this$static, month, dayOfMonth){
  this$static.setMonth(month, dayOfMonth);
  return this$static.getTime();
}
;
cggcc.$setSeconds = function $setSeconds(this$static, seconds){
  this$static.setSeconds(seconds);
  return this$static.getTime();
}
;
cggcc.$setSeconds_0 = function $setSeconds_0(this$static, seconds, millis){
  this$static.setSeconds(seconds, millis);
  return this$static.getTime();
}
;
cggcc.$setTime = function $setTime(this$static, milliseconds){
  this$static.setTime(milliseconds);
  return this$static.getTime();
}
;
cggcc.$setUTCDate = function $setUTCDate(this$static, dayOfMonth){
  this$static.setUTCDate(dayOfMonth);
  return this$static.getTime();
}
;
cggcc.$setUTCFullYear = function $setUTCFullYear(this$static, year){
  this$static.setUTCFullYear(year);
  return this$static.getTime();
}
;
cggcc.$setUTCFullYear_0 = function $setUTCFullYear_0(this$static, year, month){
  this$static.setUTCFullYear(year, month);
  return this$static.getTime();
}
;
cggcc.$setUTCFullYear_1 = function $setUTCFullYear_1(this$static, year, month, day){
  this$static.setUTCFullYear(year, month, day);
  return this$static.getTime();
}
;
cggcc.$setUTCHours = function $setUTCHours(this$static, hours){
  this$static.setUTCHours(hours);
  return this$static.getTime();
}
;
cggcc.$setUTCHours_0 = function $setUTCHours_0(this$static, hours, mins){
  this$static.setUTCHours(hours, mins);
  return this$static.getTime();
}
;
cggcc.$setUTCHours_1 = function $setUTCHours_1(this$static, hours, mins, secs){
  this$static.setUTCHours(hours, mins, secs);
  return this$static.getTime();
}
;
cggcc.$setUTCHours_2 = function $setUTCHours_2(this$static, hours, mins, secs, ms){
  this$static.setUTCHours(hours, mins, secs, ms);
  return this$static.getTime();
}
;
cggcc.$setUTCMinutes = function $setUTCMinutes(this$static, minutes){
  this$static.setUTCMinutes(minutes);
  return this$static.getTime();
}
;
cggcc.$setUTCMinutes_0 = function $setUTCMinutes_0(this$static, minutes, seconds){
  this$static.setUTCMinutes(minutes, seconds);
  return this$static.getTime();
}
;
cggcc.$setUTCMinutes_1 = function $setUTCMinutes_1(this$static, minutes, seconds, millis){
  this$static.setUTCMinutes(minutes, seconds, millis);
  return this$static.getTime();
}
;
cggcc.$setUTCMonth = function $setUTCMonth(this$static, month){
  this$static.setUTCMonth(month);
  return this$static.getTime();
}
;
cggcc.$setUTCMonth_0 = function $setUTCMonth_0(this$static, month, dayOfMonth){
  this$static.setUTCMonth(month, dayOfMonth);
  return this$static.getTime();
}
;
cggcc.$setUTCSeconds = function $setUTCSeconds(this$static, seconds){
  this$static.setUTCSeconds(seconds);
  return this$static.getTime();
}
;
cggcc.$setUTCSeconds_0 = function $setUTCSeconds_0(this$static, seconds, millis){
  this$static.setUTCSeconds(seconds, millis);
  return this$static.getTime();
}
;
cggcc.$setYear = function $setYear(this$static, year){
  this$static.setYear(year);
  return this$static.getTime();
}
;
cggcc.$toDateString = function $toDateString(this$static){
  return this$static.toDateString();
}
;
cggcc.$toGMTString = function $toGMTString(this$static){
  return this$static.toGMTString();
}
;
cggcc.$toLocaleDateString = function $toLocaleDateString(this$static){
  return this$static.toLocaleDateString();
}
;
cggcc.$toLocaleString = function $toLocaleString(this$static){
  return this$static.toLocaleString();
}
;
cggcc.$toLocaleTimeString = function $toLocaleTimeString(this$static){
  return this$static.toLocaleTimeString();
}
;
cggcc.$toTimeString = function $toTimeString(this$static){
  return this$static.toTimeString();
}
;
cggcc.$toUTCString = function $toUTCString(this$static){
  return this$static.toUTCString();
}
;
cggcc.$valueOf = function $valueOf(this$static){
  return this$static.valueOf();
}
;
cggcc.now_1 = function now_1(){
  cggcc.$clinit_JsDate();
  return Date.now();
}
;
cggcc.$clinit_RunAsyncCallback = function $clinit_RunAsyncCallback(){
  cggcc.$clinit_RunAsyncCallback = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit = createForInterface('com.google.gwt.core.client', 'RunAsyncCallback');
cggcc.$clinit_Scheduler = function $clinit_Scheduler(){
  cggcc.$clinit_Scheduler = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.Scheduler_0 = function Scheduler_0(){
  cggcc.$clinit_Scheduler();
  Object_0.call(this);
  this.$init_10();
}
;
cggcc.get_0 = function get_0(){
  cggcc.$clinit_Scheduler();
  return cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE;
}
;
defineClass(92, 1, {1:1});
_.$init_10 = function $init_10(){
}
;
cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 92, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_Scheduler$RepeatingCommand = function $clinit_Scheduler$RepeatingCommand(){
  cggcc.$clinit_Scheduler$RepeatingCommand = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2_classLit = createForInterface('com.google.gwt.core.client', 'Scheduler/RepeatingCommand');
cggcc.$clinit_ScriptInjector = function $clinit_ScriptInjector(){
  cggcc.$clinit_ScriptInjector = emptyMethod;
  jl.$clinit_Object();
  cggcc.TOP_WINDOW = cggcc.nativeTopWindow();
}
;
cggcc.attachListeners = function attachListeners(scriptElement, callback, removeTag){
  cggcc.$clinit_ScriptInjector();
  function clearCallbacks(){
    scriptElement.onerror = scriptElement.onreadystatechange = scriptElement.onload = null;
    if (removeTag) {
      cggcc.nativeRemove(scriptElement);
    }
  }

  scriptElement.onload = $entry(function(){
    clearCallbacks();
    if (callback) {
      callback.onSuccess(null);
    }
  }
  );
  scriptElement.onerror = $entry(function(){
    clearCallbacks();
    if (callback) {
      var ex = new cggcc.CodeDownloadException('onerror() called.');
      callback.onFailure(ex);
    }
  }
  );
  scriptElement.onreadystatechange = $entry(function(){
    if (/loaded|complete/.test(scriptElement.readyState)) {
      scriptElement.onload();
    }
  }
  );
}
;
cggcc.fromString = function fromString(scriptBody){
  cggcc.$clinit_ScriptInjector();
  return new cggcc.ScriptInjector$FromString(scriptBody);
}
;
cggcc.fromUrl = function fromUrl(scriptUrl){
  cggcc.$clinit_ScriptInjector();
  return new cggcc.ScriptInjector$FromUrl(scriptUrl);
}
;
cggcc.nativeAttachToHead = function nativeAttachToHead(doc, scriptElement){
  cggcc.$clinit_ScriptInjector();
  doc.head.appendChild(scriptElement);
}
;
cggcc.nativeDefaultWindow = function nativeDefaultWindow(){
  cggcc.$clinit_ScriptInjector();
  return window;
}
;
cggcc.nativeGetDocument = function nativeGetDocument(wnd){
  cggcc.$clinit_ScriptInjector();
  return wnd.document;
}
;
cggcc.nativeMakeScriptElement = function nativeMakeScriptElement(doc){
  cggcc.$clinit_ScriptInjector();
  return doc.createElement('script');
}
;
cggcc.nativePropagateScriptNonceIfPossible = function nativePropagateScriptNonceIfPossible(doc, element){
  cggcc.$clinit_ScriptInjector();
  if (doc.querySelector && doc.querySelector('script[nonce]')) {
    var firstNoncedScript = doc.querySelector('script[nonce]');
    var nonce = firstNoncedScript['nonce'] || firstNoncedScript.getAttribute('nonce');
    element.setAttribute('nonce', nonce);
  }
}
;
cggcc.nativeRemove = function nativeRemove(scriptElement){
  cggcc.$clinit_ScriptInjector();
  scriptElement.parentNode.removeChild(scriptElement);
}
;
cggcc.nativeSetSrc = function nativeSetSrc(element, url_0){
  cggcc.$clinit_ScriptInjector();
  element.src = url_0;
}
;
cggcc.nativeSetText = function nativeSetText(element, scriptBody){
  cggcc.$clinit_ScriptInjector();
  element.text = scriptBody;
}
;
cggcc.nativeTopWindow = function nativeTopWindow(){
  return $wnd;
}
;
defineClass(324, 1, {1:1});
cggl.Lcom_google_gwt_core_client_ScriptInjector_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector', 324, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_ScriptInjector$FromString = function $clinit_ScriptInjector$FromString(){
  cggcc.$clinit_ScriptInjector$FromString = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.ScriptInjector$FromString = function ScriptInjector$FromString(scriptBody){
  cggcc.$clinit_ScriptInjector$FromString();
  Object_0.call(this);
  this.$init_11();
  this.scriptBody = scriptBody;
}
;
defineClass(164, 1, {1:1}, cggcc.ScriptInjector$FromString);
_.$init_11 = function $init_11(){
  this.removeTag = true;
}
;
_.inject = function inject(){
  var doc, scriptElement, wnd;
  wnd = isNull(this.window_0)?cggcc.nativeDefaultWindow():this.window_0;
  doc = cggcc.nativeGetDocument(wnd);
  scriptElement = cggcc.nativeMakeScriptElement(doc);
  cggcc.nativeSetText(scriptElement, this.scriptBody);
  cggcc.nativePropagateScriptNonceIfPossible(doc, scriptElement);
  cggcc.nativeAttachToHead(doc, scriptElement);
  if (this.removeTag) {
    cggcc.nativeRemove(scriptElement);
  }
  return scriptElement;
}
;
_.removeTag = false;
cggl.Lcom_google_gwt_core_client_ScriptInjector$FromString_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromString', 164, cggl.Ljava_lang_Object_2_classLit);
cggcc.$clinit_ScriptInjector$FromUrl = function $clinit_ScriptInjector$FromUrl(){
  cggcc.$clinit_ScriptInjector$FromUrl = emptyMethod;
  jl.$clinit_Object();
}
;
cggcc.ScriptInjector$FromUrl = function ScriptInjector$FromUrl(scriptUrl){
  cggcc.$clinit_ScriptInjector$FromUrl();
  Object_0.call(this);
  this.$init_12();
  this.scriptUrl = scriptUrl;
}
;
defineClass(165, 1, {1:1}, cggcc.ScriptInjector$FromUrl);
_.$init_12 = function $init_12(){
  this.removeTag = false;
}
;
_.inject = function inject_0(){
  var doc, scriptElement, wnd;
  wnd = isNull(this.window_0)?cggcc.nativeDefaultWindow():this.window_0;
  doc = cggcc.nativeGetDocument(wnd);
  scriptElement = cggcc.nativeMakeScriptElement(doc);
  if (isNotNull(this.callback) || this.removeTag) {
    cggcc.attachListeners(scriptElement, this.callback, this.removeTag);
  }
  cggcc.nativeSetSrc(scriptElement, this.scriptUrl);
  cggcc.nativePropagateScriptNonceIfPossible(doc, scriptElement);
  cggcc.nativeAttachToHead(doc, scriptElement);
  return scriptElement;
}
;
_.setCallback = function setCallback(callback){
  this.callback = callback;
  return this;
}
;
_.setRemoveTag = function setRemoveTag(removeTag){
  this.removeTag = removeTag;
  return this;
}
;
_.removeTag = false;
cggl.Lcom_google_gwt_core_client_ScriptInjector$FromUrl_2_classLit = createForClass('com.google.gwt.core.client', 'ScriptInjector/FromUrl', 165, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader = function $clinit_AsyncFragmentLoader(){
  cggcci.$clinit_AsyncFragmentLoader = emptyMethod;
  jl.$clinit_Object();
  BROWSER_LOADER = cggcci.makeBrowserLoader(1, stampJavaTypeInfo(getClassLiteralForArray(cggl.I_classLit, 1), {3:1, 1:1}, 15, 15, []));
}
;
function AsyncFragmentLoader(numEntries, initialLoadSequence, loadingStrategy, logger, executor){
  var numEntriesPlusOne;
  Object_0.call(this);
  this.$init_13();
  this.numEntries = numEntries;
  this.initialLoadSequence = initialLoadSequence;
  this.loadingStrategy = loadingStrategy;
  this.logger = logger;
  this.onSuccessExecutor = executor;
  numEntriesPlusOne = numEntries + 1;
  this.allCallbacks = initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 7, numEntriesPlusOne, 3, 2);
  this.requestedExclusives = new cggcci.AsyncFragmentLoader$BoundedIntQueue(numEntriesPlusOne);
  this.isLoaded = initUnidimensionalArray(cggl.Z_classLit, {3:1, 1:1}, 15, numEntriesPlusOne, 16, 1);
  this.pendingDownloadErrorHandlers = initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 7:1}, 74, numEntriesPlusOne, 0, 1);
}

cggcci.makeBrowserLoader = function makeBrowserLoader(numFragments, initialLoad){
  if (isClient()) {
    return new AsyncFragmentLoader(numFragments, initialLoad, castTo(castTo(new cggcci.ScriptTagLoadingStrategy, 72), 72), castTo(castTo(new cggcci.AsyncFragmentLoader$StandardLogger, 118), 118), castTo(castTo(new cggcci.OnSuccessExecutor, 45), 45));
  }
   else {
    return null;
  }
}
;
function onLoad(fragment){
  cggcci.$clinit_AsyncFragmentLoader();
  BROWSER_LOADER.onLoadImpl(fragment);
}

function runAsync(fragment, callback){
  cggcci.$clinit_AsyncFragmentLoader();
  BROWSER_LOADER.runAsyncImpl(fragment, callback);
}

defineClass(119, 1, {1:1}, AsyncFragmentLoader);
_.$init_13 = function $init_13(){
  this.fragmentLoading = -1;
  this.prefetching = false;
  this.prefetchQueue = null;
  this.remainingInitialFragments = null;
}
;
_.anyPrefetchesRequested = function anyPrefetchesRequested(){
  return this.prefetching && isNotNull(this.prefetchQueue) && this.prefetchQueue.size_1() > 0;
}
;
_.clearRequestsAlreadyLoaded = function clearRequestsAlreadyLoaded(){
  var offset;
  while (this.requestedExclusives.size_1() > 0 && this.isLoaded[this.requestedExclusives.peek()]) {
    offset = this.requestedExclusives.remove_0();
    if (offset < this.pendingDownloadErrorHandlers.length) {
      setCheck(this.pendingDownloadErrorHandlers, offset, null);
    }
  }
  if (isNotNull(this.prefetchQueue)) {
    while (this.prefetchQueue.size_1() > 0 && this.isLoaded[this.prefetchQueue.peek()]) {
      this.prefetchQueue.remove_0();
    }
  }
}
;
_.downloadGroup = function downloadGroup(fragment){
  return fragment == this.leftoversFragment()?'leftoversDownload':cggcci.downloadGroupForExclusive(fragment);
}
;
_.executeOnSuccess0 = function executeOnSuccess0(callback){
  callback.onSuccess_0();
}
;
_.fragmentHasLoaded = function fragmentHasLoaded(fragment){
  this.logFragmentLoaded(fragment);
  if (fragment < this.pendingDownloadErrorHandlers.length) {
    setCheck(this.pendingDownloadErrorHandlers, fragment, null);
  }
  if (this.isInitial(fragment) && isNotNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments.remove_0();
  }
  this.fragmentLoading = -1;
  this.isLoaded[fragment] = true;
  this.startLoadingNextFragment();
}
;
_.haveInitialFragmentsLoaded = function haveInitialFragmentsLoaded(){
  return isNotNull(this.remainingInitialFragments) && this.remainingInitialFragments.size_1() == 0;
}
;
_.initializeRemainingInitialFragments = function initializeRemainingInitialFragments(){
  var sp, sp$array, sp$index, sp$max;
  if (isNull(this.remainingInitialFragments)) {
    this.remainingInitialFragments = new cggcci.AsyncFragmentLoader$BoundedIntQueue(this.initialLoadSequence.length + 1);
    for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
      sp = sp$array[sp$index];
      this.remainingInitialFragments.add_0(sp);
    }
    this.remainingInitialFragments.add_0(this.leftoversFragment());
  }
}
;
_.inject_0 = function inject_1(splitPoint, loadErrorHandler){
  setCheck(this.pendingDownloadErrorHandlers, splitPoint, loadErrorHandler);
  if (!this.isInitial(splitPoint)) {
    this.requestedExclusives.add_0(splitPoint);
  }
  this.startLoadingNextFragment();
}
;
_.isEmpty = function isEmpty(array){
  var i;
  for (i = 0; i < array.length; i++) {
    if (jsNotEquals(array[i], null)) {
      return false;
    }
  }
  return true;
}
;
_.isInitial = function isInitial(splitPoint){
  var sp, sp$array, sp$index, sp$max;
  if (splitPoint == this.leftoversFragment()) {
    return true;
  }
  for (sp$array = this.initialLoadSequence , sp$index = 0 , sp$max = sp$array.length; sp$index < sp$max; ++sp$index) {
    sp = sp$array[sp$index];
    if (sp == splitPoint) {
      return true;
    }
  }
  return false;
}
;
_.isLoading = function isLoading(splitPoint){
  return isNotNull(this.pendingDownloadErrorHandlers[splitPoint]);
}
;
_.leftoversFragment = function leftoversFragment(){
  return this.numEntries;
}
;
_.logDownloadStart = function logDownloadStart(fragment){
  this.logEventProgress_0(this.downloadGroup(fragment), 'begin', fragment, -1);
}
;
_.logEventProgress = function logEventProgress(eventGroup, type_0){
  this.logEventProgress_0(eventGroup, type_0, -1, -1);
}
;
_.logEventProgress_0 = function logEventProgress_0(eventGroup, type_0, fragment, size_0){
  this.logger.logEventProgress_1(eventGroup, type_0, fragment, size_0);
}
;
_.logFragmentLoaded = function logFragmentLoaded(fragment){
  var logGroup;
  logGroup = this.downloadGroup(fragment);
  this.logEventProgress_0(logGroup, 'end', fragment, -1);
}
;
_.onLoadImpl = function onLoadImpl(fragment){
  var callback, callback$array, callback$index, callback$max, callbacks, t;
  this.fragmentHasLoaded(fragment);
  callbacks = this.allCallbacks[fragment];
  if (jsNotEquals(callbacks, null)) {
    this.logEventProgress('runCallbacks' + fragment, 'begin');
    setCheck(this.allCallbacks, fragment, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      try {
        castTo(callback, 115).onSuccess_0();
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          reportUncaughtException(t);
        }
         else 
          throw toJs($e0);
      }
    }
    this.logEventProgress('runCallbacks' + fragment, 'end');
  }
}
;
_.runAsyncImpl = function runAsyncImpl(fragment, callback){
  var callbacks;
  if (this.isLoaded[fragment]) {
    this.onSuccessExecutor.execute_2(this, callback);
    return;
  }
  callbacks = this.allCallbacks[fragment];
  if (jsEquals(callbacks, null)) {
    callbacks = setCheck(this.allCallbacks, fragment, initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_RunAsyncCallback_2_classLit, {3:1, 1:1, 7:1}, 115, 0, 0, 1));
  }
  setCheck(callbacks, callbacks.length, callback);
  if (!this.isLoading(fragment)) {
    this.inject_0(fragment, new cggcci.AsyncFragmentLoader$1(this, fragment));
  }
}
;
_.startLoadingFragment = function startLoadingFragment(fragment){
  this.fragmentLoading = fragment;
  this.logDownloadStart(fragment);
  this.loadingStrategy.startLoadingFragment_0(fragment, new cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure(this, fragment));
}
;
_.startLoadingNextFragment = function startLoadingNextFragment(){
  if (this.fragmentLoading >= 0) {
    return;
  }
  this.initializeRemainingInitialFragments();
  this.clearRequestsAlreadyLoaded();
  if (this.isEmpty(this.pendingDownloadErrorHandlers) && !this.anyPrefetchesRequested()) {
    return;
  }
  if (this.remainingInitialFragments.size_1() > 0) {
    this.startLoadingFragment(this.remainingInitialFragments.peek());
    return;
  }
  if (this.requestedExclusives.size_1() > 0) {
    this.startLoadingFragment(this.requestedExclusives.remove_0());
    return;
  }
  if (this.anyPrefetchesRequested()) {
    this.startLoadingFragment(this.prefetchQueue.remove_0());
    return;
  }
}
;
_.fragmentLoading = 0;
_.numEntries = 0;
_.prefetching = false;
var BROWSER_LOADER;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader', 119, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = function $clinit_AsyncFragmentLoader$LoadTerminatedHandler(){
  cggcci.$clinit_AsyncFragmentLoader$LoadTerminatedHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadTerminatedHandler');
cggcci.$clinit_AsyncFragmentLoader$1 = function $clinit_AsyncFragmentLoader$1(){
  cggcci.$clinit_AsyncFragmentLoader$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$1 = function AsyncFragmentLoader$1(this$0, val$fragment){
  cggcci.$clinit_AsyncFragmentLoader$1();
  this.this$01 = this$0;
  this.val$fragment2 = val$fragment;
  Object_0.call(this);
  this.$init_14();
}
;
defineClass(120, 1, {74:1, 1:1}, cggcci.AsyncFragmentLoader$1);
_.$init_14 = function $init_14(){
}
;
_.loadTerminated = function loadTerminated(reason){
  var callback, callback$array, callback$index, callback$max, callbacks;
  callbacks = this.this$01.allCallbacks[this.val$fragment2];
  if (jsNotEquals(callbacks, null)) {
    setCheck(this.this$01.allCallbacks, this.val$fragment2, null);
    for (callback$array = callbacks , callback$index = 0 , callback$max = callback$array.length; callback$index < callback$max; ++callback$index) {
      callback = callback$array[callback$index];
      castTo(callback, 115).onFailure_0(reason);
    }
  }
}
;
_.val$fragment2 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/1', 120, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = function $clinit_AsyncFragmentLoader$BoundedIntQueue(){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$BoundedIntQueue = function AsyncFragmentLoader$BoundedIntQueue(maxPuts){
  cggcci.$clinit_AsyncFragmentLoader$BoundedIntQueue();
  Object_0.call(this);
  this.$init_15();
  this.array = initUnidimensionalArray(cggl.I_classLit, {3:1, 1:1}, 15, maxPuts, 15, 1);
}
;
defineClass(73, 1, {1:1}, cggcci.AsyncFragmentLoader$BoundedIntQueue);
_.$init_15 = function $init_15(){
  this.read_0 = 0;
  this.write_0 = 0;
}
;
_.add_0 = function add_0(x_0){
  this.array[this.write_0++] = x_0;
}
;
_.clear_0 = function clear_0(){
  this.read_0 = 0;
  this.write_0 = 0;
}
;
_.peek = function peek(){
  return this.array[this.read_0];
}
;
_.remove_0 = function remove_0(){
  return this.array[this.read_0++];
}
;
_.size_1 = function size_1(){
  return this.write_0 - this.read_0;
}
;
_.read_0 = 0;
_.write_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$BoundedIntQueue_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/BoundedIntQueue', 73, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = function $clinit_AsyncFragmentLoader$HttpDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpDownloadFailure = function AsyncFragmentLoader$HttpDownloadFailure(url_0, statusCode, statusText){
  cggcci.$clinit_AsyncFragmentLoader$HttpDownloadFailure();
  jl.RuntimeException_1.call(this, 'Download of ' + url_0 + ' failed with status ' + statusCode + '(' + statusText + ')');
  this.$init_16();
  this.statusCode = statusCode;
}
;
defineClass(122, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, cggcci.AsyncFragmentLoader$HttpDownloadFailure);
_.$init_16 = function $init_16(){
}
;
_.statusCode = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpDownloadFailure', 122, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = function $clinit_AsyncFragmentLoader$HttpInstallFailure(){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cggcci.AsyncFragmentLoader$HttpInstallFailure = function AsyncFragmentLoader$HttpInstallFailure(url_0, text_0, rootCause){
  cggcci.$clinit_AsyncFragmentLoader$HttpInstallFailure();
  jl.RuntimeException_2.call(this, 'Install of ' + url_0 + ' failed with text ' + text_0, rootCause);
  this.$init_17();
}
;
defineClass(123, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, cggcci.AsyncFragmentLoader$HttpInstallFailure);
_.$init_17 = function $init_17(){
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$HttpInstallFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/HttpInstallFailure', 123, cggl.Ljava_lang_RuntimeException_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = function $clinit_AsyncFragmentLoader$LoadingStrategy(){
  cggcci.$clinit_AsyncFragmentLoader$LoadingStrategy = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadingStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LoadingStrategy');
cggcci.$clinit_AsyncFragmentLoader$Logger = function $clinit_AsyncFragmentLoader$Logger(){
  cggcci.$clinit_AsyncFragmentLoader$Logger = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$Logger_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/Logger');
cggcci.$clinit_AsyncFragmentLoader$LwmLabels = function $clinit_AsyncFragmentLoader$LwmLabels(){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.downloadGroupForExclusive = function downloadGroupForExclusive(splitPoint){
  cggcci.$clinit_AsyncFragmentLoader$LwmLabels();
  return 'download' + splitPoint;
}
;
defineClass(215, 1, {1:1});
cggcci.BEGIN = 'begin';
cggcci.END = 'end';
cggcci.LEFTOVERS_DOWNLOAD = 'leftoversDownload';
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LwmLabels_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/LwmLabels', 215, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = function $clinit_AsyncFragmentLoader$ResetAfterDownloadFailure(){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure = function AsyncFragmentLoader$ResetAfterDownloadFailure(this$0, myFragment){
  cggcci.$clinit_AsyncFragmentLoader$ResetAfterDownloadFailure();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_18();
  this.fragment_0 = myFragment;
}
;
defineClass(121, 1, {74:1, 1:1}, cggcci.AsyncFragmentLoader$ResetAfterDownloadFailure);
_.$init_18 = function $init_18(){
}
;
_.loadTerminated = function loadTerminated_0(reason){
  var e, handler, handler$array, handler$index, handler$max, handlersToRun, lastException;
  if (this.this$01.fragmentLoading != this.fragment_0) {
    return;
  }
  handlersToRun = this.this$01.pendingDownloadErrorHandlers;
  this.this$01.pendingDownloadErrorHandlers = initUnidimensionalArray(cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$LoadTerminatedHandler_2_classLit, {3:1, 1:1, 7:1}, 74, this.this$01.numEntries + 1, 0, 1);
  this.this$01.requestedExclusives.clear_0();
  this.this$01.fragmentLoading = -1;
  lastException = null;
  for (handler$array = handlersToRun , handler$index = 0 , handler$max = handler$array.length; handler$index < handler$max; ++handler$index) {
    handler = handler$array[handler$index];
    if (isNotNull(handler)) {
      try {
        handler.loadTerminated(reason);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 5)) {
          e = $e0;
          lastException = e;
        }
         else 
          throw toJs($e0);
      }
    }
  }
  if (isNotNull(lastException)) {
    throw toJs(lastException);
  }
}
;
_.fragment_0 = 0;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$ResetAfterDownloadFailure_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/ResetAfterDownloadFailure', 121, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_AsyncFragmentLoader$StandardLogger = function $clinit_AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.AsyncFragmentLoader$StandardLogger = function AsyncFragmentLoader$StandardLogger(){
  cggcci.$clinit_AsyncFragmentLoader$StandardLogger();
  Object_0.call(this);
  this.$init_19();
}
;
cggcci.stats = function stats(data_0){
  return $stats(data_0);
}
;
defineClass(117, 1, {118:1, 1:1}, cggcci.AsyncFragmentLoader$StandardLogger);
_.$init_19 = function $init_19(){
}
;
_.createStatsEvent = function createStatsEvent(eventGroup, type_0, fragment, size_0){
  var evt = {moduleName:getModuleName(), sessionId:$sessionId, subSystem:'runAsync', evtGroup:eventGroup, millis:(new Date).getTime(), type:type_0};
  if (fragment >= 0) {
    evt.fragment = fragment;
  }
  if (size_0 >= 0) {
    evt.size = size_0;
  }
  return evt;
}
;
_.isStatsAvailable = function isStatsAvailable(){
  return !!$stats;
}
;
_.logEventProgress_1 = function logEventProgress_1(eventGroup, type_0, fragment, size_0){
  var toss;
  toss = this.isStatsAvailable() && cggcci.stats(this.createStatsEvent(eventGroup, type_0, fragment, size_0));
}
;
cggl.Lcom_google_gwt_core_client_impl_AsyncFragmentLoader$StandardLogger_2_classLit = createForClass('com.google.gwt.core.client.impl', 'AsyncFragmentLoader/StandardLogger', 117, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_Impl = function $clinit_Impl(){
  cggcci.$clinit_Impl = emptyMethod;
  jl.$clinit_Object();
  {
    if (isScript() && isNotNull((cggcci.$clinit_StackTraceCreator() , cggcci.collector))) {
    }
  }
  watchdogEntryDepthTimerId = -1;
}
;
cggcci.apply_0 = function apply_0(jsFunction, thisObj, args){
  if (isScript()) {
    return jsFunction.apply(thisObj, args);
  }
   else {
    var __0 = jsFunction.apply(thisObj, args);
    if (__0 != null) {
      __0 = {val:__0};
    }
    return __0;
  }
}
;
cggcci.enter = function enter(){
  var now_0;
  if (isScript() && entryDepth != 0) {
    now_0 = cggcc.currentTimeMillis();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = cggcci.watchdogEntryDepthSchedule();
    }
  }
  if (entryDepth++ == 0) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushEntryCommands();
    return true;
  }
  return false;
}
;
function entry_0(jsFunction){
  cggcci.$clinit_Impl();
  return function(){
    if (isScript()) {
      return cggcci.entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = cggcci.entry0(jsFunction, this, arguments);
      if (__0 != null) {
        __0 = __0.val;
      }
      return __0;
    }
  }
  ;
}

cggcci.entry0 = function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = cggcci.enter();
  try {
    if (isNotNull(getUncaughtExceptionHandler())) {
      try {
        return cggcci.apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          t = $e0;
          reportUncaughtException_0(t);
          return cggcci.undefined_0();
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return cggcci.apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    cggcci.exit(initialEntry);
  }
}
;
cggcci.exit = function exit(initialEntry){
  if (initialEntry) {
    (cggcci.$clinit_SchedulerImpl() , cggcci.INSTANCE).flushFinallyCommands();
  }
  entryDepth--;
  if (initialEntry) {
    if (isScript() && watchdogEntryDepthTimerId != -1) {
      cggcci.watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}
;
function getModuleBaseURLForStaticFiles(){
  cggcci.$clinit_Impl();
  return $moduleBase;
}

function getModuleName_0(){
  cggcci.$clinit_Impl();
  return $moduleName;
}

function getNameOf(jsniIdent){
  cggcci.$clinit_Impl();
  throw toJs(new jl.UnsupportedOperationException_0('Impl.getNameOf() is unimplemented in Development Mode'));
}

function registerEntry(){
  cggcci.$clinit_Impl();
  if (isScript()) {
    return entry_0;
  }
   else {
    return $entry = entry_0;
  }
}

cggcci.reportToBrowser = function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}
;
cggcci.reportToBrowser_0 = function reportToBrowser_0(e){
  cggcci.reportToBrowser(instanceOf(e, 36)?castTo(e, 36).getThrown():e);
}
;
function reportUncaughtException_0(e){
  cggcci.$clinit_Impl();
  cggcci.reportUncaughtException_1(e, true);
}

cggcci.reportUncaughtException_1 = function reportUncaughtException_1(e, reportSwallowedExceptionToBrowser){
  var handler;
  if (isNotNull(uncaughtExceptionHandlerForTest)) {
    uncaughtExceptionHandlerForTest.onUncaughtException(e);
  }
  handler = getUncaughtExceptionHandler();
  if (isNotNull(handler)) {
    if (jsEquals(handler, uncaughtExceptionHandlerForTest)) {
      return;
    }
    handler.onUncaughtException(e);
    return;
  }
  if (isClient() && reportSwallowedExceptionToBrowser) {
    cggcci.reportToBrowser_0(e);
  }
   else {
    (jl.$clinit_System() , jl.err).print_1('Uncaught exception ');
    e.printStackTrace((jl.$clinit_System() , jl.err));
  }
}
;
cggcci.undefined_0 = function undefined_0(){
  return;
}
;
cggcci.watchdogEntryDepthCancel = function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}
;
cggcci.watchdogEntryDepthRun = function watchdogEntryDepthRun(){
  if (isScript() && entryDepth != 0) {
    entryDepth = 0;
  }
  watchdogEntryDepthTimerId = -1;
}
;
cggcci.watchdogEntryDepthSchedule = function watchdogEntryDepthSchedule(){
  return $wnd.setTimeout(cggcci.watchdogEntryDepthRun, 10);
}
;
defineClass(216, 1, {1:1});
var WATCHDOG_ENTRY_DEPTH_CHECK_INTERVAL_MS = 2000;
var entryDepth = 0;
var uncaughtExceptionHandlerForTest;
var watchdogEntryDepthLastScheduled = 0;
var watchdogEntryDepthTimerId = 0;
cggl.Lcom_google_gwt_core_client_impl_Impl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'Impl', 216, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_LoadingStrategyBase = function $clinit_LoadingStrategyBase(){
  cggcci.$clinit_LoadingStrategyBase = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase = function LoadingStrategyBase(downloadStrategy){
  cggcci.$clinit_LoadingStrategyBase();
  Object_0.call(this);
  this.$init_20();
  this.downloadStrategy = downloadStrategy;
}
;
cggcci.gwtInstallCode = function gwtInstallCode(text_0){
  cggcci.$clinit_LoadingStrategyBase();
  __gwtInstallCode(text_0);
}
;
cggcci.gwtStartLoadingFragment = function gwtStartLoadingFragment(fragment, loadErrorHandler){
  function loadFailed(e){
    loadErrorHandler.loadTerminated(e);
  }

  return __gwtStartLoadingFragment(fragment, $entry(loadFailed));
}
;
defineClass(137, 1, {72:1, 1:1});
_.$init_20 = function $init_20(){
  this.manualRetryNumbers = cggcci.create_0();
}
;
_.getManualRetryNum = function getManualRetryNum(fragment){
  var ser;
  ser = cggcci.$get_1(this.manualRetryNumbers, fragment);
  cggcci.$put(this.manualRetryNumbers, fragment, ser + 1);
  return ser;
}
;
_.getMaxAutoRetryCount = function getMaxAutoRetryCount(){
  return cggcci.MAX_AUTO_RETRY_COUNT;
}
;
_.startLoadingFragment_0 = function startLoadingFragment_0(fragment, loadErrorHandler){
  var connector, manualRetry, request, url_0;
  url_0 = cggcci.gwtStartLoadingFragment(fragment, loadErrorHandler);
  if (jsEquals(url_0, null)) {
    return;
  }
  manualRetry = this.getManualRetryNum(fragment);
  if (manualRetry > 0) {
    connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(url_0, '?')?38:63;
    url_0 += charToString(connector) + 'manualRetry=' + manualRetry;
  }
  request = new cggcci.LoadingStrategyBase$RequestData(url_0, loadErrorHandler, fragment, this.downloadStrategy, this.getMaxAutoRetryCount());
  request.tryDownload_0();
}
;
cggcci.MAX_AUTO_RETRY_COUNT = 3;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase', 137, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = function $clinit_LoadingStrategyBase$DownloadStrategy(){
  cggcci.$clinit_LoadingStrategyBase$DownloadStrategy = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase$DownloadStrategy_2_classLit = createForInterface('com.google.gwt.core.client.impl', 'LoadingStrategyBase/DownloadStrategy');
cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = function $clinit_LoadingStrategyBase$FragmentReloadTracker(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$get_1 = function $get_1(this$static, x_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return this$static[x_0]?this$static[x_0]:0;
}
;
cggcci.$put = function $put(this$static, x_0, y_0){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  this$static[x_0] = y_0;
}
;
cggcci.create_0 = function create_0(){
  cggcci.$clinit_LoadingStrategyBase$FragmentReloadTracker();
  return cggcc.createArray();
}
;
cggcci.$clinit_LoadingStrategyBase$RequestData = function $clinit_LoadingStrategyBase$RequestData(){
  cggcci.$clinit_LoadingStrategyBase$RequestData = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.LoadingStrategyBase$RequestData = function LoadingStrategyBase$RequestData(url_0, errorHandler, fragment, downloadStrategy, maxRetryCount){
  cggcci.$clinit_LoadingStrategyBase$RequestData();
  Object_0.call(this);
  this.$init_21();
  this.url_0 = url_0;
  this.originalUrl = url_0;
  this.errorHandler = errorHandler;
  this.maxRetryCount = maxRetryCount;
  this.retryCount = 0;
  this.fragment_0 = fragment;
  this.downloadStrategy = downloadStrategy;
}
;
defineClass(140, 1, {1:1}, cggcci.LoadingStrategyBase$RequestData);
_.$init_21 = function $init_21(){
  this.errorHandler = null;
}
;
_.getFragment = function getFragment(){
  return this.fragment_0;
}
;
_.getUrl = function getUrl(){
  return this.url_0;
}
;
_.onLoadError = function onLoadError(e, mayRetry){
  var connector;
  if (mayRetry) {
    this.retryCount++;
    if (this.retryCount <= this.maxRetryCount) {
      connector = jl.contains_Ljava_lang_CharSequence__Z__devirtual$(this.originalUrl, '?')?38:63;
      this.url_0 = this.originalUrl + charToString(connector) + 'autoRetry=' + this.retryCount;
      this.downloadStrategy.tryDownload(this);
      return;
    }
  }
  this.errorHandler.loadTerminated(e);
}
;
_.setUrl = function setUrl(url_0){
  this.url_0 = url_0;
}
;
_.tryDownload_0 = function tryDownload(){
  this.downloadStrategy.tryDownload(this);
}
;
_.tryInstall = function tryInstall(code_0){
  var e, textIntro;
  try {
    cggcci.gwtInstallCode(code_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 5)) {
      e = $e0;
      textIntro = code_0;
      if (jsNotEquals(textIntro, null) && jl.length__I__devirtual$_0(textIntro) > 200) {
        textIntro = jl.substring_II_Ljava_lang_String___devirtual$(textIntro, 0, 200) + '...';
      }
      this.onLoadError(new cggcci.AsyncFragmentLoader$HttpInstallFailure(this.url_0, textIntro, e), false);
    }
     else 
      throw toJs($e0);
  }
}
;
_.fragment_0 = 0;
_.maxRetryCount = 0;
_.retryCount = 0;
cggcci.MAX_LOG_LENGTH = 200;
cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase$RequestData_2_classLit = createForClass('com.google.gwt.core.client.impl', 'LoadingStrategyBase/RequestData', 140, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor = function $clinit_OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor = function OnSuccessExecutor(){
  cggcci.$clinit_OnSuccessExecutor();
  Object_0.call(this);
  this.$init_22();
}
;
defineClass(45, 1, {45:1, 1:1}, cggcci.OnSuccessExecutor);
_.$init_22 = function $init_22(){
}
;
_.execute_2 = function execute(fragmentLoader, callback){
  cggcc.get_0().scheduleDeferred(new cggcci.OnSuccessExecutor$1(this, fragmentLoader, callback));
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor', 45, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_OnSuccessExecutor$1 = function $clinit_OnSuccessExecutor$1(){
  cggcci.$clinit_OnSuccessExecutor$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.OnSuccessExecutor$1 = function OnSuccessExecutor$1(this$0, val$fragmentLoader, val$callback){
  cggcci.$clinit_OnSuccessExecutor$1();
  this.this$01 = this$0;
  this.val$fragmentLoader2 = val$fragmentLoader;
  this.val$callback3 = val$callback;
  Object_0.call(this);
  this.$init_23();
}
;
defineClass(141, 1, {1:1}, cggcci.OnSuccessExecutor$1);
_.$init_23 = function $init_23(){
}
;
_.execute_1 = function execute_0(){
  this.val$fragmentLoader2.executeOnSuccess0(this.val$callback3);
}
;
cggl.Lcom_google_gwt_core_client_impl_OnSuccessExecutor$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'OnSuccessExecutor/1', 141, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl = function $clinit_SchedulerImpl(){
  cggcci.$clinit_SchedulerImpl = emptyMethod;
  cggcc.$clinit_Scheduler();
  cggcci.INSTANCE = castTo(new cggcci.SchedulerImpl, 63);
}
;
cggcci.SchedulerImpl = function SchedulerImpl(){
  cggcc.Scheduler_0.call(this);
  this.$init_24();
}
;
cggcci.createQueue = function createQueue(){
  return cggcc.$cast(cggcc.createArray());
}
;
cggcci.execute_1 = function execute_1(cmd){
  return cmd.execute_0();
}
;
cggcci.push_0 = function push_0(queue, task){
  if (isNull(queue)) {
    queue = cggcci.createQueue();
  }
  cggcc.$push(queue, task);
  return queue;
}
;
cggcci.runScheduledTasks = function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = cggcc.$length(tasks); i < j; i++) {
    t = cggcc.$get(tasks, i);
    try {
      if (cggcci.$isRepeating(t)) {
        if (cggcci.$executeRepeating(t)) {
          rescheduled = cggcci.push_0(rescheduled, t);
        }
      }
       else {
        cggcci.$executeScheduled(t);
      }
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 4)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}
;
cggcci.scheduleFixedDelayImpl = function scheduleFixedDelayImpl(cmd, delayMs){
  function callback(){
    var ret = $entry(cggcci.execute_1)(cmd);
    if (!isScript()) {
      ret = ret == true;
    }
    if (ret) {
      $wnd.setTimeout(callback, delayMs);
    }
  }

  $wnd.setTimeout(callback, delayMs);
}
;
defineClass(63, 92, {63:1, 1:1}, cggcci.SchedulerImpl);
_.$init_24 = function $init_24(){
  this.flushRunning = false;
  this.shouldBeRunning = false;
}
;
_.createDuration = function createDuration(){
  return new cggcc.Duration;
}
;
_.flushEntryCommands = function flushEntryCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.entryCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.entryCommands;
      this.entryCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.entryCommands));
    this.entryCommands = rescheduled;
  }
}
;
_.flushFinallyCommands = function flushFinallyCommands(){
  var oldQueue, rescheduled;
  if (isNotNull(this.finallyCommands)) {
    rescheduled = null;
    do {
      oldQueue = this.finallyCommands;
      this.finallyCommands = null;
      rescheduled = cggcci.runScheduledTasks(oldQueue, rescheduled);
    }
     while (isNotNull(this.finallyCommands));
    this.finallyCommands = rescheduled;
  }
}
;
_.flushPostEventPumpCommands = function flushPostEventPumpCommands(){
  var oldDeferred;
  if (isNotNull(this.deferredCommands)) {
    oldDeferred = this.deferredCommands;
    this.deferredCommands = null;
    if (isNull(this.incrementalCommands)) {
      this.incrementalCommands = cggcci.createQueue();
    }
    cggcci.runScheduledTasks(oldDeferred, this.incrementalCommands);
  }
  if (isNotNull(this.incrementalCommands)) {
    this.incrementalCommands = this.runRepeatingTasks(this.incrementalCommands);
  }
}
;
_.isWorkQueued = function isWorkQueued(){
  return isNotNull(this.deferredCommands) || isNotNull(this.incrementalCommands);
}
;
_.maybeSchedulePostEventPumpCommands = function maybeSchedulePostEventPumpCommands(){
  if (!this.shouldBeRunning) {
    this.shouldBeRunning = true;
    if (isNull(this.flusher)) {
      this.flusher = new cggcci.SchedulerImpl$Flusher(this);
    }
    cggcci.scheduleFixedDelayImpl(this.flusher, 1);
    if (isNull(this.rescue)) {
      this.rescue = new cggcci.SchedulerImpl$Rescuer(this);
    }
    cggcci.scheduleFixedDelayImpl(this.rescue, 50);
  }
}
;
_.runRepeatingTasks = function runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = cggcc.$length(tasks);
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = this.createDuration();
  while (duration.elapsedMillis() < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = cggcc.$get(tasks, i);
      if (isNull(t)) {
        continue;
      }
      executedSomeTask = true;
      if (!cggcci.$executeRepeating(t)) {
        cggcc.$set(tasks, i, null);
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = cggcci.createQueue();
    for (i = 0; i < length_0; i++) {
      if (isNotNull(cggcc.$get(tasks, i))) {
        cggcc.$push(newTasks, cggcc.$get(tasks, i));
      }
    }
    return cggcc.$length(newTasks) == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}
;
_.scheduleDeferred = function scheduleDeferred(cmd){
  this.deferredCommands = cggcci.push_0(this.deferredCommands, cggcci.create_1(cmd));
  this.maybeSchedulePostEventPumpCommands();
}
;
_.scheduleFixedDelay = function scheduleFixedDelay(cmd, delayMs){
  cggcci.scheduleFixedDelayImpl(cmd, delayMs);
}
;
_.flushRunning = false;
_.shouldBeRunning = false;
cggcci.FLUSHER_DELAY = 1;
cggcci.RESCUE_DELAY = 50;
cggcci.TIME_SLICE = 16;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 63, cggl.Lcom_google_gwt_core_client_Scheduler_2_classLit);
cggcci.$clinit_SchedulerImpl$Flusher = function $clinit_SchedulerImpl$Flusher(){
  cggcci.$clinit_SchedulerImpl$Flusher = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Flusher = function SchedulerImpl$Flusher(this$0){
  cggcci.$clinit_SchedulerImpl$Flusher();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_25();
}
;
defineClass(161, 1, {1:1}, cggcci.SchedulerImpl$Flusher);
_.$init_25 = function $init_25(){
}
;
_.execute_0 = function execute_2(){
  this.this$01.flushRunning = true;
  this.this$01.flushPostEventPumpCommands();
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = this.this$01.isWorkQueued();
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 161, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Rescuer = function $clinit_SchedulerImpl$Rescuer(){
  cggcci.$clinit_SchedulerImpl$Rescuer = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.SchedulerImpl$Rescuer = function SchedulerImpl$Rescuer(this$0){
  cggcci.$clinit_SchedulerImpl$Rescuer();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_26();
}
;
defineClass(162, 1, {1:1}, cggcci.SchedulerImpl$Rescuer);
_.$init_26 = function $init_26(){
}
;
_.execute_0 = function execute_3(){
  if (this.this$01.flushRunning) {
    this.this$01.scheduleFixedDelay(this.this$01.flusher, 1);
  }
  return this.this$01.shouldBeRunning;
}
;
cggl.Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 162, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_SchedulerImpl$Task = function $clinit_SchedulerImpl$Task(){
  cggcci.$clinit_SchedulerImpl$Task = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggcci.$executeRepeating = function $executeRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return cggcci.$getRepeating(this$static).execute_0();
}
;
cggcci.$executeScheduled = function $executeScheduled(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  cggcci.$getScheduled(this$static).execute_1();
}
;
cggcci.$getRepeating = function $getRepeating(this$static){
  return this$static[0];
}
;
cggcci.$getScheduled = function $getScheduled(this$static){
  return this$static[0];
}
;
cggcci.$isRepeating = function $isRepeating(this$static){
  cggcci.$clinit_SchedulerImpl$Task();
  return this$static[1];
}
;
cggcci.create_1 = function create_1(cmd){
  cggcci.$clinit_SchedulerImpl$Task();
  return [cmd, false];
}
;
cggcci.$clinit_ScriptTagLoadingStrategy = function $clinit_ScriptTagLoadingStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy = emptyMethod;
  cggcci.$clinit_LoadingStrategyBase();
}
;
cggcci.ScriptTagLoadingStrategy = function ScriptTagLoadingStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  cggcci.LoadingStrategyBase.call(this, new cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
  this.$init_27();
}
;
cggcci.asyncCallback = function asyncCallback(request, code_0){
  var firstTimeCalled;
  firstTimeCalled = cggcci.clearAsyncCallback(request.getFragment());
  if (firstTimeCalled) {
    request.tryInstall(code_0);
  }
}
;
cggcci.cleanup = function cleanup(request){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  var neverCalled;
  neverCalled = cggcci.clearAsyncCallback(request.getFragment());
  if (neverCalled) {
    request.onLoadError(new cggcci.AsyncFragmentLoader$HttpDownloadFailure(request.getUrl(), 404, 'Script Tag Failure - no status available'), true);
  }
}
;
cggcci.clearAsyncCallback = function clearAsyncCallback(fragment){
  if (!__gwtModuleFunction['runAsyncCallback' + fragment]) {
    return false;
  }
  delete __gwtModuleFunction['runAsyncCallback' + fragment];
  return true;
}
;
cggcci.setAsyncCallback = function setAsyncCallback(fragment, request){
  cggcci.$clinit_ScriptTagLoadingStrategy();
  __gwtModuleFunction['runAsyncCallback' + fragment] = $entry(function(code_0, instance){
    cggcci.asyncCallback(request, code_0);
  }
  );
}
;
defineClass(116, 137, {72:1, 1:1}, cggcci.ScriptTagLoadingStrategy);
_.$init_27 = function $init_27(){
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy', 116, cggl.Lcom_google_gwt_core_client_impl_LoadingStrategyBase_2_classLit);
cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy = function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy();
  Object_0.call(this);
  this.$init_28();
}
;
defineClass(138, 1, {1:1}, cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy);
_.$init_28 = function $init_28(){
}
;
_.tryDownload = function tryDownload_0(request){
  cggcci.setAsyncCallback(request.getFragment(), request);
  cggcc.fromUrl(request.getUrl()).setRemoveTag(true).setCallback(new cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this, request)).inject();
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy', 138, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = function $clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1 = function ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1(this$1, val$request){
  cggcci.$clinit_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1();
  this.this$11 = this$1;
  this.val$request2 = val$request;
  Object_0.call(this);
  this.$init_29();
}
;
defineClass(139, 1, {1:1}, cggcci.ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1);
_.$init_29 = function $init_29(){
}
;
_.onFailure = function onFailure_0(reason){
  this.onFailure_1(castTo(reason, 6));
}
;
_.onSuccess = function onSuccess(result){
  this.onSuccess_1(castTo(result, 87));
}
;
_.onFailure_1 = function onFailure(reason){
  cggcci.cleanup(this.val$request2);
}
;
_.onSuccess_1 = function onSuccess_0(result){
  cggcci.cleanup(this.val$request2);
}
;
cggl.Lcom_google_gwt_core_client_impl_ScriptTagLoadingStrategy$ScriptTagDownloadStrategy$1_2_classLit = createForClass('com.google.gwt.core.client.impl', 'ScriptTagLoadingStrategy/ScriptTagDownloadStrategy/1', 139, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_StackTraceCreator = function $clinit_StackTraceCreator(){
  cggcci.$clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  jl.$clinit_Object();
  cggcci.LINE_NUMBER_UNKNOWN = -1;
  {
    enforceLegacy = !cggcci.supportsErrorStack();
    c = castTo(new cggcci.StackTraceCreator$CollectorModern, 38);
    cggcci.collector = instanceOf(c, 39) && enforceLegacy?new cggcci.StackTraceCreator$CollectorLegacy:c;
  }
}
;
cggcci.captureStackTrace_0 = function captureStackTrace_0(error){
  cggcci.$clinit_StackTraceCreator();
  cggcci.collector.collect(error);
}
;
cggcci.constructJavaStackTrace_0 = function constructJavaStackTrace_0(thrown){
  cggcci.$clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = cggcci.collector.getStackTrace_0(thrown);
  return cggcci.dropInternalFrames(stackTrace);
}
;
cggcci.dropInternalFrames = function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace_0';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = $wnd.Math.min(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i].getMethodName(), dropFrameUntilFnName) || jl.equals_Ljava_lang_Object__Z__devirtual$_2(stackTrace[i].getMethodName(), dropFrameUntilFnName2)) {
      cggcci.splice(stackTrace, i + 1);
      break;
    }
  }
  return stackTrace;
}
;
cggcci.extractFunctionName = function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}
;
cggcci.getFnStack = function getFnStack(e){
  cggcci.$clinit_StackTraceCreator();
  return e && e['fnStack']?e['fnStack']:[];
}
;
cggcci.getFunctionName = function getFunctionName(fn){
  cggcci.$clinit_StackTraceCreator();
  return fn.name || (fn.name = cggcci.extractFunctionName(fn.toString()));
}
;
cggcci.parseInt_0 = function parseInt_0(number){
  cggcci.$clinit_StackTraceCreator();
  return parseInt(number) || -1;
}
;
cggcci.splice = function splice(arr, length_0){
  if (arr.length >= length_0) {
    ji2.removeFrom(arr, 0, length_0);
  }
}
;
cggcci.split_0 = function split_0(t){
  cggcci.$clinit_StackTraceCreator();
  var e = t.backingJsObject_0;
  if (e && e.stack) {
    var stack_0 = e.stack;
    var toString_0 = e + '\n';
    if (stack_0.substring(0, toString_0.length) == toString_0) {
      stack_0 = stack_0.substring(toString_0.length);
    }
    return stack_0.split('\n');
  }
  return [];
}
;
cggcci.supportsErrorStack = function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}
;
defineClass(247, 1, {1:1});
cggcci.ANONYMOUS = 'anonymous';
cggcci.DROP_FRAME_LIMIT = 5;
cggcci.LINE_NUMBER_UNKNOWN = 0;
cggcci.UNKNOWN = 'Unknown';
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator', 247, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_StackTraceCreator$Collector = function $clinit_StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector = emptyMethod;
  jl.$clinit_Object();
}
;
cggcci.StackTraceCreator$Collector = function StackTraceCreator$Collector(){
  cggcci.$clinit_StackTraceCreator$Collector();
  Object_0.call(this);
  this.$init_30();
}
;
defineClass(38, 1, {1:1});
_.$init_30 = function $init_30(){
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 38, cggl.Ljava_lang_Object_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorEmulated = function $clinit_StackTraceCreator$CollectorEmulated(){
  cggcci.$clinit_StackTraceCreator$CollectorEmulated = emptyMethod;
}
;
defineClass(248, 38, {1:1});
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorEmulated_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorEmulated', 248, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorLegacy = function $clinit_StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
}
;
cggcci.StackTraceCreator$CollectorLegacy = function StackTraceCreator$CollectorLegacy(){
  cggcci.$clinit_StackTraceCreator$CollectorLegacy();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_31();
}
;
defineClass(135, 38, {1:1}, cggcci.StackTraceCreator$CollectorLegacy);
_.$init_31 = function $init_31(){
}
;
_.collect = function collect(error){
  var seen = {};
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = cggcci.getFunctionName(callee);
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace_0 = function getStackTrace_0(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = cggcci.getFnStack(t);
  length_0 = cggcc.$length_1(stack_0);
  stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 14, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new jl.StackTraceElement('Unknown', cggcc.$get_0(stack_0, i), null, -1);
  }
  return stackTrace;
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 135, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorModern = function $clinit_StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern = emptyMethod;
  cggcci.$clinit_StackTraceCreator$Collector();
}
;
cggcci.StackTraceCreator$CollectorModern = function StackTraceCreator$CollectorModern(){
  cggcci.$clinit_StackTraceCreator$CollectorModern();
  cggcci.StackTraceCreator$Collector.call(this);
  this.$init_32();
}
;
defineClass(39, 38, {38:1, 39:1, 1:1}, cggcci.StackTraceCreator$CollectorModern);
_.$init_32 = function $init_32(){
}
;
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace_0 = function getStackTrace_1(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste;
  stack_0 = cggcci.split_0(t);
  stackTrace = initUnidimensionalArray(cggl.Ljava_lang_StackTraceElement_2_classLit, {3:1, 1:1, 7:1}, 14, 0, 0, 1);
  addIndex = 0;
  length_0 = cggcc.$length_1(stack_0);
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = this.parse_0(cggcc.$get_0(stack_0, 0));
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_2(ste.getMethodName(), 'anonymous')) {
    stackTrace[addIndex++] = ste;
  }
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = this.parse_0(cggcc.$get_0(stack_0, i));
  }
  return stackTrace;
}
;
_.parse_0 = function parse_0(stString){
  var closeParen, col, endFileUrlIndex, fileName, ieAnonymousFunctionName, index_0, lastColonIndex, line, location_0, toReturn;
  location_0 = '';
  if (jl.isEmpty__Z__devirtual$(stString)) {
    return this.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = jl.trim__Ljava_lang_String___devirtual$(stString);
  if (jl.startsWith_Ljava_lang_String__Z__devirtual$(toReturn, 'at ')) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, 3);
  }
  toReturn = this.stripSquareBrackets(toReturn);
  index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '(');
  if (index_0 == -1) {
    index_0 = jl.indexOf_Ljava_lang_String__I__devirtual$(toReturn, '@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = jl.trim__Ljava_lang_String___devirtual$(jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1));
      toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
    }
  }
   else {
    closeParen = jl.indexOf_Ljava_lang_String_I_I__devirtual$(toReturn, ')', index_0);
    location_0 = jl.substring_II_Ljava_lang_String___devirtual$(toReturn, index_0 + 1, closeParen);
    toReturn = jl.trim__Ljava_lang_String___devirtual$(jl.substring_II_Ljava_lang_String___devirtual$(toReturn, 0, index_0));
  }
  index_0 = jl.indexOf_I_I__devirtual$(toReturn, 46);
  if (index_0 != -1) {
    toReturn = jl.substring_I_Ljava_lang_String___devirtual$(toReturn, index_0 + 1);
  }
  ieAnonymousFunctionName = 'Anonymous function';
  if (jl.isEmpty__Z__devirtual$(toReturn) || jl.equals_Ljava_lang_Object__Z__devirtual$_2(toReturn, 'Anonymous function')) {
    toReturn = 'anonymous';
  }
  lastColonIndex = jl.lastIndexOf_I_I__devirtual$(location_0, 58);
  endFileUrlIndex = jl.lastIndexOf_II_I__devirtual$(location_0, 58, lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = jl.substring_II_Ljava_lang_String___devirtual$(location_0, 0, endFileUrlIndex);
    line = cggcci.parseInt_0(jl.substring_II_Ljava_lang_String___devirtual$(location_0, endFileUrlIndex + 1, lastColonIndex));
    col = cggcci.parseInt_0(jl.substring_I_Ljava_lang_String___devirtual$(location_0, lastColonIndex + 1));
  }
  return this.createSte(fileName, toReturn, line, col);
}
;
_.stripSquareBrackets = function stripSquareBrackets(toReturn){
  return toReturn.replace(/\[.*?\]/g, '');
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 39, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = function $clinit_StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.$clinit_StackTraceCreator$CollectorModernNoSourceMap = emptyMethod;
  cggcci.$clinit_StackTraceCreator$CollectorModern();
}
;
cggcci.StackTraceCreator$CollectorModernNoSourceMap = function StackTraceCreator$CollectorModernNoSourceMap(){
  cggcci.StackTraceCreator$CollectorModern.call(this);
  this.$init_33();
}
;
defineClass(249, 39, {38:1, 39:1, 1:1});
_.$init_33 = function $init_33(){
}
;
_.createSte = function createSte_0(fileName, method, line, col){
  return new jl.StackTraceElement('Unknown', method, fileName, -1);
}
;
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 249, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit);
cggcci.$clinit_StackTraceCreator$CollectorNull = function $clinit_StackTraceCreator$CollectorNull(){
  cggcci.$clinit_StackTraceCreator$CollectorNull = emptyMethod;
}
;
defineClass(250, 38, {1:1});
cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorNull_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorNull', 250, cggl.Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit);
cggccp.$clinit_PrefetchableResource = function $clinit_PrefetchableResource(){
  cggccp.$clinit_PrefetchableResource = emptyMethod;
}
;
cggl.Lcom_google_gwt_core_client_prefetch_PrefetchableResource_2_classLit = createForInterface('com.google.gwt.core.client.prefetch', 'PrefetchableResource');
cggccp.$clinit_RunAsyncCode = function $clinit_RunAsyncCode(){
  cggccp.$clinit_RunAsyncCode = emptyMethod;
}
;
defineClass(217, 1, {1:1});
cggl.Lcom_google_gwt_core_client_prefetch_RunAsyncCode_2_classLit = createForClass('com.google.gwt.core.client.prefetch', 'RunAsyncCode', 217, cggl.Ljava_lang_Object_2_classLit);
cggcs.$clinit_GWT_0 = function $clinit_GWT_0(){
  cggcs.$clinit_GWT_0 = emptyMethod;
  jl.$clinit_Object();
  {
    if (cggcs.isScript_0()) {
      cggcs.logger_0 = castTo(new cggcsi.JsLogger, 60);
    }
     else {
      cggcs.logger_0 = null;
    }
  }
}
;
cggcs.create_2 = function create_2(classLiteral){
  return cggcs.createImpl(classLiteral);
}
;
cggcs.createImpl = function createImpl(classLiteral){
  cggcs.$clinit_GWT_0();
  if (isNull(cggcs.sGWTBridge)) {
    throw toJs(new jl.UnsupportedOperationException_0('ERROR: GWT.create() is only usable in client code!  It cannot be called, for example, from server code.  If you are running a unit test, check that your test case extends GWTTestCase and that GWT.create() is not called from within an initializer or constructor.'));
  }
   else {
    return cggcs.sGWTBridge.create_0(classLiteral);
  }
}
;
cggcs.isScript_0 = function isScript_0(){
  return true;
}
;
cggcs.log_1 = function log_1(message){
  cggcs.$clinit_GWT_0();
  cggcs.log_2(message, null);
}
;
cggcs.log_2 = function log_2(message, e){
  if (isNotNull(cggcs.sGWTBridge)) {
    cggcs.sGWTBridge.log_0(message, e);
  }
   else if (isNotNull(cggcs.logger_0)) {
    cggcs.logger_0.log_0(message, e);
  }
}
;
defineClass(256, 1, {1:1});
cggcs.sGWTBridge = null;
cggl.Lcom_google_gwt_core_shared_GWT_2_classLit = createForClass('com.google.gwt.core.shared', 'GWT', 256, cggl.Ljava_lang_Object_2_classLit);
cggcs.$clinit_GWTBridge = function $clinit_GWTBridge(){
  cggcs.$clinit_GWTBridge = emptyMethod;
}
;
defineClass(258, 1, {1:1});
cggl.Lcom_google_gwt_core_shared_GWTBridge_2_classLit = createForClass('com.google.gwt.core.shared', 'GWTBridge', 258, cggl.Ljava_lang_Object_2_classLit);
cggcsi.$clinit_JsLogger = function $clinit_JsLogger(){
  cggcsi.$clinit_JsLogger = emptyMethod;
  jl.$clinit_Object();
}
;
cggcsi.JsLogger = function JsLogger(){
  cggcsi.$clinit_JsLogger();
  Object_0.call(this);
  this.$init_34();
}
;
defineClass(60, 1, {60:1, 1:1}, cggcsi.JsLogger);
_.$init_34 = function $init_34(){
}
;
_.log_0 = function log_3(message, e){
}
;
cggl.Lcom_google_gwt_core_shared_impl_JsLogger_2_classLit = createForClass('com.google.gwt.core.shared.impl', 'JsLogger', 60, cggl.Ljava_lang_Object_2_classLit);
cggdc.$clinit_Node = function $clinit_Node(){
  cggdc.$clinit_Node = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggdc.$hasChildNodes = function $hasChildNodes(this$static){
  return this$static.hasChildNodes();
}
;
cggdc.DOCUMENT_NODE = 9;
cggdc.ELEMENT_NODE = 1;
cggdc.TEXT_NODE = 3;
cggdc.$clinit_Element = function $clinit_Element(){
  cggdc.$clinit_Element = emptyMethod;
  cggdc.$clinit_Node();
}
;
cggdc.$blur = function $blur(this$static){
  this$static.blur();
}
;
cggdc.$focus = function $focus(this$static){
  this$static.focus();
}
;
cggdc.$getAttribute = function $getAttribute(this$static, name_0){
  return (cggdc.$clinit_DOMImpl() , cggdc.impl_0).getAttribute_0(this$static, name_0);
}
;
cggdc.$getClientHeight = function $getClientHeight(this$static){
  cggdc.$clinit_Element();
  return cggdc.toInt32(cggdc.$getSubPixelClientHeight(this$static));
}
;
cggdc.$getClientWidth = function $getClientWidth(this$static){
  cggdc.$clinit_Element();
  return cggdc.toInt32(cggdc.$getSubPixelClientWidth(this$static));
}
;
cggdc.$getDir = function $getDir(this$static){
  return this$static.dir;
}
;
cggdc.$getId = function $getId(this$static){
  return this$static.id;
}
;
cggdc.$getLang = function $getLang(this$static){
  return this$static.lang;
}
;
cggdc.$getSubPixelClientHeight = function $getSubPixelClientHeight(this$static){
  return this$static.clientHeight;
}
;
cggdc.$getSubPixelClientWidth = function $getSubPixelClientWidth(this$static){
  return this$static.clientWidth;
}
;
cggdc.$getTitle = function $getTitle(this$static){
  return this$static.title;
}
;
cggdc.$hasAttribute = function $hasAttribute(this$static, name_0){
  return (cggdc.$clinit_DOMImpl() , cggdc.impl_0).hasAttribute_0(this$static, name_0);
}
;
cggdc.$removeAttribute = function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}
;
cggdc.$scrollIntoView = function $scrollIntoView(this$static){
  (cggdc.$clinit_DOMImpl() , cggdc.impl_0).scrollIntoView_0(this$static);
}
;
cggdc.$setAttribute = function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}
;
cggdc.$setDir = function $setDir(this$static, dir_0){
  this$static.dir = dir_0;
}
;
cggdc.$setLang = function $setLang(this$static, lang_0){
  this$static.lang = lang_0;
}
;
cggdc.$setTitle = function $setTitle(this$static, title_0){
  this$static.title = title_0 || '';
}
;
cggdc.toInt32 = function toInt32(val){
  return val | 0;
}
;
cggdc.DRAGGABLE_AUTO = 'auto';
cggdc.DRAGGABLE_FALSE = 'false';
cggdc.DRAGGABLE_TRUE = 'true';
cggdc.$clinit_BodyElement = function $clinit_BodyElement(){
  cggdc.$clinit_BodyElement = emptyMethod;
  cggdc.$clinit_Element();
}
;
cggdc.TAG = 'body';
cggdc.$clinit_DOMImpl = function $clinit_DOMImpl(){
  cggdc.$clinit_DOMImpl = emptyMethod;
  jl.$clinit_Object();
  cggdc.impl_0 = castTo(new cggdc.DOMImplWebkit, 67);
}
;
cggdc.DOMImpl = function DOMImpl(){
  cggdc.$clinit_DOMImpl();
  Object_0.call(this);
  this.$init_35();
}
;
defineClass(67, 1, {1:1});
_.$init_35 = function $init_35(){
}
;
_.getAttribute_0 = function getAttribute(elem, name_0){
  return elem.getAttribute(name_0) || '';
}
;
_.hasAttribute_0 = function hasAttribute(elem, name_0){
  return elem.hasAttribute(name_0);
}
;
_.scrollIntoView_0 = function scrollIntoView(elem){
  var left = elem.offsetLeft, top_0 = elem.offsetTop;
  var width_0 = elem.offsetWidth, height = elem.offsetHeight;
  if (elem.parentNode != elem.offsetParent) {
    left -= elem.parentNode.offsetLeft;
    top_0 -= elem.parentNode.offsetTop;
  }
  var cur = elem.parentNode;
  while (cur && cur.nodeType == 1) {
    if (left < cur.scrollLeft) {
      cur.scrollLeft = left;
    }
    if (left + width_0 > cur.scrollLeft + cur.clientWidth) {
      cur.scrollLeft = left + width_0 - cur.clientWidth;
    }
    if (top_0 < cur.scrollTop) {
      cur.scrollTop = top_0;
    }
    if (top_0 + height > cur.scrollTop + cur.clientHeight) {
      cur.scrollTop = top_0 + height - cur.clientHeight;
    }
    var offsetLeft = cur.offsetLeft, offsetTop = cur.offsetTop;
    if (cur.parentNode != cur.offsetParent) {
      offsetLeft -= cur.parentNode.offsetLeft;
      offsetTop -= cur.parentNode.offsetTop;
    }
    left += offsetLeft - cur.scrollLeft;
    top_0 += offsetTop - cur.scrollTop;
    cur = cur.parentNode;
  }
}
;
cggl.Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImpl', 67, cggl.Ljava_lang_Object_2_classLit);
cggdc.$clinit_DOMImplStandard = function $clinit_DOMImplStandard(){
  cggdc.$clinit_DOMImplStandard = emptyMethod;
  cggdc.$clinit_DOMImpl();
}
;
cggdc.DOMImplStandard = function DOMImplStandard(){
  cggdc.$clinit_DOMImplStandard();
  cggdc.DOMImpl.call(this);
  this.$init_36();
}
;
defineClass(88, 67, {1:1});
_.$init_36 = function $init_36(){
}
;
cggl.Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandard', 88, cggl.Lcom_google_gwt_dom_client_DOMImpl_2_classLit);
cggdc.$clinit_DOMImplMozilla = function $clinit_DOMImplMozilla(){
  cggdc.$clinit_DOMImplMozilla = emptyMethod;
  cggdc.$clinit_DOMImplStandard();
  cggdc.cachedGeckoVersion = -2;
}
;
cggdc.DOMImplMozilla = function DOMImplMozilla(){
  cggdc.DOMImplStandard.call(this);
  this.$init_37();
}
;
defineClass(331, 88, {1:1});
_.$init_37 = function $init_37(){
}
;
cggdc.cachedGeckoVersion = 0;
cggl.Lcom_google_gwt_dom_client_DOMImplMozilla_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplMozilla', 331, cggl.Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit);
cggdc.$clinit_DOMImplStandardBase = function $clinit_DOMImplStandardBase(){
  cggdc.$clinit_DOMImplStandardBase = emptyMethod;
  cggdc.$clinit_DOMImplStandard();
}
;
cggdc.DOMImplStandardBase = function DOMImplStandardBase(){
  cggdc.$clinit_DOMImplStandardBase();
  cggdc.DOMImplStandard.call(this);
  this.$init_38();
}
;
defineClass(176, 88, {1:1});
_.$init_38 = function $init_38(){
}
;
cggl.Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplStandardBase', 176, cggl.Lcom_google_gwt_dom_client_DOMImplStandard_2_classLit);
cggdc.$clinit_DOMImplStandardBase$ClientRect = function $clinit_DOMImplStandardBase$ClientRect(){
  cggdc.$clinit_DOMImplStandardBase$ClientRect = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggdc.$clinit_DOMImplWebkit = function $clinit_DOMImplWebkit(){
  cggdc.$clinit_DOMImplWebkit = emptyMethod;
  cggdc.$clinit_DOMImplStandardBase();
}
;
cggdc.DOMImplWebkit = function DOMImplWebkit(){
  cggdc.$clinit_DOMImplWebkit();
  cggdc.DOMImplStandardBase.call(this);
  this.$init_39();
}
;
defineClass(177, 176, {67:1, 1:1}, cggdc.DOMImplWebkit);
_.$init_39 = function $init_39(){
}
;
cggl.Lcom_google_gwt_dom_client_DOMImplWebkit_2_classLit = createForClass('com.google.gwt.dom.client', 'DOMImplWebkit', 177, cggl.Lcom_google_gwt_dom_client_DOMImplStandardBase_2_classLit);
cggdc.$clinit_Document = function $clinit_Document(){
  cggdc.$clinit_Document = emptyMethod;
  cggdc.$clinit_Node();
}
;
cggdc.$getBody = function $getBody(this$static){
  return this$static.body;
}
;
cggdc.$getClientHeight_0 = function $getClientHeight_0(this$static){
  cggdc.$clinit_Document();
  return cggdc.$getClientHeight(cggdc.$getViewportElement(this$static));
}
;
cggdc.$getClientWidth_0 = function $getClientWidth_0(this$static){
  cggdc.$clinit_Document();
  return cggdc.$getClientWidth(cggdc.$getViewportElement(this$static));
}
;
cggdc.$getCompatMode = function $getCompatMode(this$static){
  cggdc.$clinit_Document();
  return this$static.compatMode;
}
;
cggdc.$getDocumentElement = function $getDocumentElement(this$static){
  return this$static.documentElement;
}
;
cggdc.$getReferrer = function $getReferrer(this$static){
  return this$static.referrer;
}
;
cggdc.$getTitle_0 = function $getTitle_0(this$static){
  return this$static.title;
}
;
cggdc.$getViewportElement = function $getViewportElement(this$static){
  return cggdc.$isCSS1Compat(this$static)?cggdc.$getDocumentElement(this$static):cggdc.$getBody(this$static);
}
;
cggdc.$isCSS1Compat = function $isCSS1Compat(this$static){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(cggdc.$getCompatMode(this$static), 'CSS1Compat');
}
;
cggdc.$setTitle_0 = function $setTitle_0(this$static, title_0){
  this$static.title = title_0;
}
;
cggdc.get_1 = function get_1(){
  cggdc.$clinit_Document();
  if (isScript()) {
    return cggdc.nativeGet();
  }
  if (isNull(cggdc.doc_0)) {
    cggdc.doc_0 = cggdc.nativeGet();
  }
  return cggdc.doc_0;
}
;
cggdc.nativeGet = function nativeGet(){
  return $doc;
}
;
cgwbes.$clinit_Event = function $clinit_Event(){
  cgwbes.$clinit_Event = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.Event_0 = function Event_0(){
  cgwbes.$clinit_Event();
  Object_0.call(this);
  this.$init_40();
}
;
defineClass(61, 1, {1:1});
_.$init_40 = function $init_40(){
}
;
_.getSource = function getSource(){
  return this.source_0;
}
;
_.setSource = function setSource(source){
  this.source_0 = source;
}
;
_.toString_0 = function toString_6(){
  return 'An event type';
}
;
cggl.Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 61, cggl.Ljava_lang_Object_2_classLit);
cgges.$clinit_GwtEvent = function $clinit_GwtEvent(){
  cgges.$clinit_GwtEvent = emptyMethod;
  cgwbes.$clinit_Event();
}
;
cgges.GwtEvent = function GwtEvent(){
  cgges.$clinit_GwtEvent();
  cgwbes.Event_0.call(this);
  this.$init_41();
}
;
defineClass(62, 61, {1:1});
_.$init_41 = function $init_41(){
}
;
_.dispatch = function dispatch(handler){
  this.dispatch_0(castTo(handler, 213));
}
;
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
_.assertLive = function assertLive(){
}
;
_.getSource = function getSource_0(){
  this.assertLive();
  return getClassPrototype(61).getSource.call(this);
}
;
_.isLive = function isLive(){
  return !this.dead;
}
;
_.kill = function kill(){
  this.dead = true;
  this.setSource(null);
}
;
_.overrideSource = function overrideSource(source){
  getClassPrototype(61).setSource.call(this, source);
}
;
_.revive = function revive(){
  this.dead = false;
  this.setSource(null);
}
;
_.dead = false;
cggl.Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 62, cggl.Lcom_google_web_bindery_event_shared_Event_2_classLit);
cggels.$clinit_CloseEvent = function $clinit_CloseEvent(){
  cggels.$clinit_CloseEvent = emptyMethod;
  cgges.$clinit_GwtEvent();
}
;
cggels.CloseEvent_0 = function CloseEvent_0(target, autoClosed){
  cgges.GwtEvent.call(this);
  this.$init_42();
  this.autoClosed = autoClosed;
  this.target_0 = target;
}
;
cggels.fire = function fire(source, target){
  cggels.$clinit_CloseEvent();
  cggels.fire_0(source, target, false);
}
;
cggels.fire_0 = function fire_0(source, target, autoClosed){
  var event_0;
  if (isNotNull(cggels.TYPE)) {
    event_0 = new cggels.CloseEvent_0(target, autoClosed);
    source.fireEvent(event_0);
  }
}
;
defineClass(169, 62, {1:1}, cggels.CloseEvent_0);
_.$init_42 = function $init_42(){
}
;
_.dispatch_0 = function dispatch_1(handler){
  this.dispatch_1(castTo(handler, 382));
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return this.getAssociatedType_0();
}
;
_.dispatch_1 = function dispatch_0(handler){
  handler.onClose(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return castTo(cggels.TYPE, 49);
}
;
_.autoClosed = false;
cggl.Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 169, cggl.Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
cgges.$clinit_EventHandler = function $clinit_EventHandler(){
  cgges.$clinit_EventHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_shared_EventHandler_2_classLit = createForInterface('com.google.gwt.event.shared', 'EventHandler');
cggels.$clinit_CloseHandler = function $clinit_CloseHandler(){
  cggels.$clinit_CloseHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_logical_shared_CloseHandler_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'CloseHandler');
cgges.$clinit_HasHandlers = function $clinit_HasHandlers(){
  cgges.$clinit_HasHandlers = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_shared_HasHandlers_2_classLit = createForInterface('com.google.gwt.event.shared', 'HasHandlers');
cggels.$clinit_HasCloseHandlers = function $clinit_HasCloseHandlers(){
  cggels.$clinit_HasCloseHandlers = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'HasCloseHandlers');
cggels.$clinit_HasResizeHandlers = function $clinit_HasResizeHandlers(){
  cggels.$clinit_HasResizeHandlers = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_logical_shared_HasResizeHandlers_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'HasResizeHandlers');
cggels.$clinit_ResizeEvent = function $clinit_ResizeEvent(){
  cggels.$clinit_ResizeEvent = emptyMethod;
  cgges.$clinit_GwtEvent();
}
;
cggels.ResizeEvent = function ResizeEvent(width_0, height){
  cgges.GwtEvent.call(this);
  this.$init_43();
  this.width_0 = width_0;
  this.height_0 = height;
}
;
cggels.fire_1 = function fire_1(source, width_0, height){
  cggels.$clinit_ResizeEvent();
  var event_0;
  if (isNotNull(cggels.TYPE_0)) {
    event_0 = new cggels.ResizeEvent(width_0, height);
    source.fireEvent(event_0);
  }
}
;
cggels.getType = function getType(){
  cggels.$clinit_ResizeEvent();
  if (isNull(cggels.TYPE_0)) {
    cggels.TYPE_0 = new cgges.GwtEvent$Type;
  }
  return cggels.TYPE_0;
}
;
defineClass(166, 62, {1:1}, cggels.ResizeEvent);
_.$init_43 = function $init_43(){
}
;
_.dispatch_0 = function dispatch_3(handler){
  this.dispatch_2(castTo(handler, 212));
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return this.getAssociatedType_0();
}
;
_.dispatch_2 = function dispatch_2(handler){
  handler.onResize(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return cggels.TYPE_0;
}
;
_.getHeight = function getHeight(){
  return this.height_0;
}
;
_.getWidth = function getWidth(){
  return this.width_0;
}
;
_.height_0 = 0;
_.width_0 = 0;
cggl.Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 166, cggl.Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
cggels.$clinit_ResizeHandler = function $clinit_ResizeHandler(){
  cggels.$clinit_ResizeHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_logical_shared_ResizeHandler_2_classLit = createForInterface('com.google.gwt.event.logical.shared', 'ResizeHandler');
cgwbes.$clinit_Event$Type = function $clinit_Event$Type(){
  cgwbes.$clinit_Event$Type = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.Event$Type = function Event$Type(){
  cgwbes.$clinit_Event$Type();
  Object_0.call(this);
  this.$init_44();
  this.index_0 = ++cgwbes.nextHashCode;
}
;
defineClass(146, 1, {1:1});
_.$init_44 = function $init_44(){
}
;
_.hashCode_0 = function hashCode_2(){
  return this.index_0;
}
;
_.toString_0 = function toString_7(){
  return 'Event type';
}
;
_.index_0 = 0;
cgwbes.nextHashCode = 0;
cggl.Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 146, cggl.Ljava_lang_Object_2_classLit);
cgges.$clinit_GwtEvent$Type = function $clinit_GwtEvent$Type(){
  cgges.$clinit_GwtEvent$Type = emptyMethod;
  cgwbes.$clinit_Event$Type();
}
;
cgges.GwtEvent$Type = function GwtEvent$Type(){
  cgges.$clinit_GwtEvent$Type();
  cgwbes.Event$Type.call(this);
  this.$init_45();
}
;
defineClass(49, 146, {49:1, 1:1}, cgges.GwtEvent$Type);
_.$init_45 = function $init_45(){
}
;
cggl.Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 49, cggl.Lcom_google_web_bindery_event_shared_Event$Type_2_classLit);
cgges.$clinit_HandlerManager = function $clinit_HandlerManager(){
  cgges.$clinit_HandlerManager = emptyMethod;
  jl.$clinit_Object();
}
;
cgges.HandlerManager = function HandlerManager(source){
  cgges.$clinit_HandlerManager();
  cgges.HandlerManager_0.call(this, source, false);
}
;
cgges.HandlerManager_0 = function HandlerManager_0(source, fireInReverseOrder){
  Object_0.call(this);
  this.$init_46();
  this.eventBus = new cgges.HandlerManager$Bus(fireInReverseOrder);
  this.source_0 = source;
}
;
defineClass(82, 1, {1:1});
_.$init_46 = function $init_46(){
}
;
_.addHandler = function addHandler(type_0, handler){
  return new cgges.LegacyHandlerWrapper(this.eventBus.addHandler_0(type_0, handler));
}
;
_.fireEvent = function fireEvent(event_0){
  var e, oldSource;
  if (!event_0.isLive()) {
    event_0.revive();
  }
  oldSource = event_0.getSource();
  event_0.overrideSource(this.source_0);
  try {
    this.eventBus.fireEvent_0(event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 42)) {
      e = $e0;
      throw toJs(new cgges.UmbrellaException_0(e.getCauses()));
    }
     else 
      throw toJs($e0);
  }
   finally {
    if (jsEquals(oldSource, null)) {
      event_0.kill();
    }
     else {
      event_0.overrideSource(oldSource);
    }
  }
}
;
cggl.Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 82, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_EventBus = function $clinit_EventBus(){
  cgwbes.$clinit_EventBus = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.EventBus = function EventBus(){
  cgwbes.$clinit_EventBus();
  Object_0.call(this);
  this.$init_47();
}
;
cgwbes.dispatchEvent_0 = function dispatchEvent_0(event_0, handler){
  cgwbes.$clinit_EventBus();
  event_0.dispatch(handler);
}
;
cgwbes.setSourceOfEvent = function setSourceOfEvent(event_0, source){
  cgwbes.$clinit_EventBus();
  event_0.setSource(source);
}
;
defineClass(147, 1, {1:1});
_.$init_47 = function $init_47(){
}
;
cggl.Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 147, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_SimpleEventBus = function $clinit_SimpleEventBus(){
  cgwbes.$clinit_SimpleEventBus = emptyMethod;
  cgwbes.$clinit_EventBus();
}
;
cgwbes.SimpleEventBus = function SimpleEventBus(fireInReverseOrder){
  cgwbes.$clinit_SimpleEventBus();
  cgwbes.EventBus.call(this);
  this.$init_48();
  this.isReverseOrder = fireInReverseOrder;
}
;
defineClass(83, 147, {1:1});
_.$init_48 = function $init_48(){
  this.firingDepth = 0;
  this.map_0 = new ju.HashMap;
}
;
_.addHandler_0 = function addHandler_0(type_0, handler){
  return this.doAdd(type_0, null, handler);
}
;
_.defer_0 = function defer_0(command){
  if (isNull(this.deferredDeltas)) {
    this.deferredDeltas = new ju.ArrayList;
  }
  this.deferredDeltas.add_1(command);
}
;
_.doAdd = function doAdd(type_0, source, handler){
  if (isNull(type_0)) {
    throw toJs(new jl.NullPointerException_0('Cannot add a handler with a null type'));
  }
  if (jsEquals(handler, null)) {
    throw toJs(new jl.NullPointerException_0('Cannot add a null handler'));
  }
  if (this.firingDepth > 0) {
    this.enqueueAdd(type_0, source, handler);
  }
   else {
    this.doAddNow(type_0, source, handler);
  }
  return new cgwbes.SimpleEventBus$1(this, type_0, source, handler);
}
;
_.doAddNow = function doAddNow(type_0, source, handler){
  cgwbes.$clinit_SimpleEventBus();
  var l;
  l = this.ensureHandlerList(type_0, source);
  l.add_1(handler);
}
;
_.doFire = function doFire(event_0, source){
  var causes, e, handler, handlers, it;
  if (isNull(event_0)) {
    throw toJs(new jl.NullPointerException_0('Cannot fire null event'));
  }
  try {
    this.firingDepth++;
    if (jsNotEquals(source, null)) {
      cgwbes.setSourceOfEvent(event_0, source);
    }
    handlers = this.getDispatchList(event_0.getAssociatedType(), source);
    causes = null;
    it = this.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this.isReverseOrder?it.previous():it.next_0();
      try {
        cgwbes.dispatchEvent_0(event_0, handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 4)) {
          e = $e0;
          if (isNull(causes)) {
            causes = new ju.HashSet;
          }
          causes.add_1(e);
        }
         else 
          throw toJs($e0);
      }
    }
    if (isNotNull(causes)) {
      throw toJs(new cgwbes.UmbrellaException(causes));
    }
  }
   finally {
    this.firingDepth--;
    if (this.firingDepth == 0) {
      this.handleQueuedAddsAndRemoves();
    }
  }
}
;
_.doRemove = function doRemove(type_0, source, handler){
  if (this.firingDepth > 0) {
    this.enqueueRemove(type_0, source, handler);
  }
   else {
    this.doRemoveNow(type_0, source, handler);
  }
}
;
_.doRemoveNow = function doRemoveNow(type_0, source, handler){
  cgwbes.$clinit_SimpleEventBus();
  var l, removed;
  l = this.getHandlerList(type_0, source);
  removed = l.remove_1(handler);
  if (removed && l.isEmpty_0()) {
    this.prune(type_0, source);
  }
}
;
_.enqueueAdd = function enqueueAdd(type_0, source, handler){
  this.defer_0(new cgwbes.SimpleEventBus$2(this, type_0, source, handler));
}
;
_.enqueueRemove = function enqueueRemove(type_0, source, handler){
  this.defer_0(new cgwbes.SimpleEventBus$3(this, type_0, source, handler));
}
;
_.ensureHandlerList = function ensureHandlerList(type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo(this.map_0.get_1(type_0), 18);
  if (isNull(sourceMap)) {
    sourceMap = new ju.HashMap;
    this.map_0.put(type_0, sourceMap);
  }
  handlers = castTo(castTo(sourceMap.get_1(source), 12), 12);
  if (isNull(handlers)) {
    handlers = new ju.ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}
;
_.fireEvent_0 = function fireEvent_0(event_0){
  this.doFire(event_0, null);
}
;
_.getDispatchList = function getDispatchList(type_0, source){
  var directHandlers, globalHandlers, rtn;
  directHandlers = this.getHandlerList(type_0, source);
  if (jsEquals(source, null)) {
    return directHandlers;
  }
  globalHandlers = this.getHandlerList(type_0, null);
  rtn = new ju.ArrayList_0(directHandlers);
  rtn.addAll(globalHandlers);
  return rtn;
}
;
_.getHandlerList = function getHandlerList(type_0, source){
  var handlers, sourceMap;
  sourceMap = castTo(this.map_0.get_1(type_0), 18);
  if (isNull(sourceMap)) {
    return ju.emptyList();
  }
  handlers = castTo(castTo(sourceMap.get_1(source), 12), 12);
  if (isNull(handlers)) {
    return ju.emptyList();
  }
  return handlers;
}
;
_.handleQueuedAddsAndRemoves = function handleQueuedAddsAndRemoves(){
  var c, c$iterator;
  if (isNotNull(this.deferredDeltas)) {
    try {
      for (c$iterator = this.deferredDeltas.iterator(); c$iterator.hasNext_0();) {
        c = castTo(c$iterator.next_0(), 185);
        c.execute_1();
      }
    }
     finally {
      this.deferredDeltas = null;
    }
  }
}
;
_.prune = function prune(type_0, source){
  var pruned, sourceMap;
  sourceMap = castTo(this.map_0.get_1(type_0), 18);
  pruned = castTo(sourceMap.remove_2(source), 12);
  if (sourceMap.isEmpty_0()) {
    this.map_0.remove_2(type_0);
  }
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 83, cggl.Lcom_google_web_bindery_event_shared_EventBus_2_classLit);
cgges.$clinit_HandlerManager$Bus = function $clinit_HandlerManager$Bus(){
  cgges.$clinit_HandlerManager$Bus = emptyMethod;
  cgwbes.$clinit_SimpleEventBus();
}
;
cgges.HandlerManager$Bus = function HandlerManager$Bus(fireInReverseOrder){
  cgges.$clinit_HandlerManager$Bus();
  cgwbes.SimpleEventBus.call(this, fireInReverseOrder);
  this.$init_49();
}
;
defineClass(148, 83, {1:1}, cgges.HandlerManager$Bus);
_.$init_49 = function $init_49(){
}
;
_.doRemove = function doRemove_0(type_0, source, handler){
  getClassPrototype(83).doRemove.call(this, type_0, source, handler);
}
;
cggl.Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 148, cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit);
cgwbes.$clinit_HandlerRegistration_0 = function $clinit_HandlerRegistration_0(){
  cgwbes.$clinit_HandlerRegistration_0 = emptyMethod;
}
;
cggl.Lcom_google_web_bindery_event_shared_HandlerRegistration_2_classLit = createForInterface('com.google.web.bindery.event.shared', 'HandlerRegistration');
cgges.$clinit_HandlerRegistration = function $clinit_HandlerRegistration(){
  cgges.$clinit_HandlerRegistration = emptyMethod;
}
;
cggl.Lcom_google_gwt_event_shared_HandlerRegistration_2_classLit = createForInterface('com.google.gwt.event.shared', 'HandlerRegistration');
cgges.$clinit_LegacyHandlerWrapper = function $clinit_LegacyHandlerWrapper(){
  cgges.$clinit_LegacyHandlerWrapper = emptyMethod;
  jl.$clinit_Object();
}
;
cgges.LegacyHandlerWrapper = function LegacyHandlerWrapper(real){
  cgges.$clinit_LegacyHandlerWrapper();
  Object_0.call(this);
  this.$init_50();
  this.real = real;
}
;
defineClass(168, 1, {1:1}, cgges.LegacyHandlerWrapper);
_.$init_50 = function $init_50(){
}
;
_.removeHandler = function removeHandler(){
  this.real.removeHandler();
}
;
cggl.Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 168, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_UmbrellaException = function $clinit_UmbrellaException(){
  cgwbes.$clinit_UmbrellaException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
cgwbes.UmbrellaException = function UmbrellaException(causes){
  cgwbes.$clinit_UmbrellaException();
  var cause, cause$iterator, i;
  jl.RuntimeException_2.call(this, cgwbes.makeMessage(causes), cgwbes.makeCause(causes));
  this.$init_51();
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = castTo(cause$iterator.next_0(), 4);
    if (i++ == 0) {
      continue;
    }
    this.addSuppressed(cause);
  }
}
;
cgwbes.makeCause = function makeCause(causes){
  return causes.isEmpty_0()?null:castTo(causes.iterator().next_0(), 4);
}
;
cgwbes.makeMessage = function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new jl.StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = castTo(t$iterator.next_0(), 4);
    if (first) {
      first = false;
    }
     else {
      b.append_1('; ');
    }
    b.append_1(t.getMessage());
  }
  return b.toString_0();
}
;
defineClass(42, 5, {42:1, 3:1, 6:1, 1:1, 5:1, 4:1}, cgwbes.UmbrellaException);
_.$init_51 = function $init_51(){
}
;
_.getCauses = function getCauses(){
  return this.causes;
}
;
cgwbes.MULTIPLE = ' exceptions caught: ';
cgwbes.ONE = 'Exception caught: ';
cggl.Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 42, cggl.Ljava_lang_RuntimeException_2_classLit);
cgges.$clinit_UmbrellaException_0 = function $clinit_UmbrellaException_0(){
  cgges.$clinit_UmbrellaException_0 = emptyMethod;
  cgwbes.$clinit_UmbrellaException();
}
;
cgges.UmbrellaException_0 = function UmbrellaException_0(causes){
  cgges.$clinit_UmbrellaException_0();
  cgwbes.UmbrellaException.call(this, causes);
  this.$init_52();
}
;
defineClass(170, 42, {42:1, 3:1, 6:1, 1:1, 5:1, 4:1}, cgges.UmbrellaException_0);
_.$init_52 = function $init_52(){
}
;
cggl.Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 170, cggl.Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit);
cgggc.$clinit_Position = function $clinit_Position(){
  cgggc.$clinit_Position = emptyMethod;
}
;
cggl.Lcom_google_gwt_geolocation_client_Position_2_classLit = createForInterface('com.google.gwt.geolocation.client', 'Position');
cgggc.$clinit_Position$Coordinates = function $clinit_Position$Coordinates(){
  cgggc.$clinit_Position$Coordinates = emptyMethod;
}
;
cggl.Lcom_google_gwt_geolocation_client_Position$Coordinates_2_classLit = createForInterface('com.google.gwt.geolocation.client', 'Position/Coordinates');
cgggc.$clinit_PositionImpl = function $clinit_PositionImpl(){
  cgggc.$clinit_PositionImpl = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cgggc.$getTimestamp = function $getTimestamp(this$static){
  return this$static.timestamp;
}
;
cgggc.$clinit_PositionImpl$CoordinatesImpl = function $clinit_PositionImpl$CoordinatesImpl(){
  cgggc.$clinit_PositionImpl$CoordinatesImpl = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cgggc.$getAccuracy = function $getAccuracy(this$static){
  return this$static.accuracy;
}
;
cgggc.$getLatitude = function $getLatitude(this$static){
  return this$static.latitude;
}
;
cgggc.$getLongitude = function $getLongitude(this$static){
  return this$static.longitude;
}
;
cggic.$clinit_CurrencyData = function $clinit_CurrencyData(){
  cggic.$clinit_CurrencyData = emptyMethod;
}
;
cggl.Lcom_google_gwt_i18n_client_CurrencyData_2_classLit = createForInterface('com.google.gwt.i18n.client', 'CurrencyData');
cggici.$clinit_CurrencyDataJso = function $clinit_CurrencyDataJso(){
  cggici.$clinit_CurrencyDataJso = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggl.$clinit_Array = function $clinit_Array(){
  cggl.$clinit_Array = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.Array_0 = function Array_0(){
  Object_0.call(this);
  this.$init_53();
}
;
cggl.asArray_0 = function asArray_0(array){
  return array;
}
;
cggl.canSet = function canSet(array, value_0){
  switch (cggl.getElementTypeCategory(array)) {
    case 6:
      return instanceOfString(value_0);
    case 7:
      return instanceOfDouble(value_0);
    case 8:
      return instanceOfBoolean(value_0);
    case 3:
      return instanceOfArray(value_0);
    case 11:
      return instanceOfFunction(value_0);
    case 12:
      return instanceOfJsObject(value_0);
    case 0:
      return canCast(value_0, cggl.getElementTypeId(array));
    case 2:
      return isJavaScriptObject(value_0);
    case 1:
      return isJavaScriptObject(value_0) || canCast(value_0, cggl.getElementTypeId(array));
    default:return true;
  }
}
;
function ensureNotNull(array){
  cggl.$clinit_Array();
  return ji2.checkNotNull_0(array);
}

function getClassLiteralForArray(clazz, dimensions){
  cggl.$clinit_Array();
  return cggl.getClassLiteralForArrayImpl(clazz, dimensions);
}

cggl.getClassLiteralForArrayImpl = function getClassLiteralForArrayImpl(clazz, dimensions){
  return jl.getClassLiteralForArray_0(clazz, dimensions);
}
;
cggl.getElementTypeCategory = function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}
;
cggl.getElementTypeId = function getElementTypeId(array){
  return array.__elementTypeId$;
}
;
function initMultidimensionalArray(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, count){
  cggl.$clinit_Array();
  return cggl.initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, 0, count);
}

cggl.initMultidimensionalArray_0 = function initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count){
  var elementTypeCategory, i, isLastDimension, length_0, result;
  length_0 = dimExprs[index_0];
  isLastDimension = index_0 == count - 1;
  elementTypeCategory = isLastDimension?leafElementTypeCategory:0;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (leafElementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, count - index_0), castableTypeMapExprs[index_0], elementTypeIds[index_0], elementTypeCategory, result);
  }
  if (!isLastDimension) {
    ++index_0;
    for (i = 0; i < length_0; ++i) {
      cggl.set_0(result, i, cggl.initMultidimensionalArray_0(leafClassLiteral, castableTypeMapExprs, elementTypeIds, leafElementTypeCategory, dimExprs, index_0, count));
    }
  }
  return result;
}
;
function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  cggl.$clinit_Array();
  var result;
  result = cggl.initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  if (elementTypeCategory != 10) {
    stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  }
  return result;
}

cggl.initializeArrayElementsWithDefaults = function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}
;
function isJavaArray(src_0){
  cggl.$clinit_Array();
  return isArray(src_0) && hasTypeMarker(src_0);
}

function isPrimitiveArray(array){
  cggl.$clinit_Array();
  var elementTypeCategory;
  elementTypeCategory = cggl.getElementTypeCategory(array);
  return elementTypeCategory >= 14 && elementTypeCategory <= 16;
}

function newArray(size_0){
  cggl.$clinit_Array();
  return new Array(size_0);
}

cggl.set_0 = function set_0(array, index_0, value_0){
  return array[index_0] = value_0;
}
;
function setCheck(array, index_0, value_0){
  cggl.$clinit_Array();
  ji2.checkArrayType(jsEquals(value_0, null) || cggl.canSet(array, value_0));
  return cggl.set_0(array, index_0, value_0);
}

cggl.setClass = function setClass(o, clazz){
  o.___clazz = clazz;
}
;
cggl.setElementTypeCategory = function setElementTypeCategory(array, elementTypeCategory){
  array.__elementTypeCategory$ = elementTypeCategory;
}
;
cggl.setElementTypeId = function setElementTypeId(array, elementTypeId){
  array.__elementTypeId$ = elementTypeId;
}
;
function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  cggl.$clinit_Array();
  cggl.setClass(array, arrayClass);
  setCastableTypeMap(array, castableTypeMap);
  setTypeMarker(array);
  cggl.setElementTypeId(array, elementTypeId);
  cggl.setElementTypeCategory(array, elementTypeCategory);
  return array;
}

cggl.stampJavaTypeInfo_0 = function stampJavaTypeInfo_0(array, referenceType){
  cggl.$clinit_Array();
  if (cggl.getElementTypeCategory(referenceType) != 10) {
    stampJavaTypeInfo(jl.getClass__Ljava_lang_Class___devirtual$(referenceType), getCastableTypeMap(referenceType), cggl.getElementTypeId(referenceType), cggl.getElementTypeCategory(referenceType), array);
  }
  return cggl.asArray_0(array);
}
;
defineClass(218, 1, {1:1});
_.$init_53 = function $init_53(){
}
;
var TYPE_ARRAY = 3;
var TYPE_JAVA_LANG_BOOLEAN = 8;
var TYPE_JAVA_LANG_DOUBLE = 7;
var TYPE_JAVA_LANG_OBJECT = 5;
var TYPE_JAVA_LANG_STRING = 6;
var TYPE_JAVA_OBJECT = 0;
var TYPE_JAVA_OBJECT_OR_JSO = 1;
var TYPE_JSO = 2;
var TYPE_JSO_ARRAY = 4;
var TYPE_JS_ARRAY = 13;
var TYPE_JS_FUNCTION = 11;
var TYPE_JS_NATIVE = 9;
var TYPE_JS_OBJECT = 12;
var TYPE_JS_UNKNOWN_NATIVE = 10;
var TYPE_PRIMITIVE_BOOLEAN = 16;
var TYPE_PRIMITIVE_LONG = 14;
var TYPE_PRIMITIVE_NUMBER = 15;
cggl.Lcom_google_gwt_lang_Array_2_classLit = createForClass('com.google.gwt.lang', 'Array', 218, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLibBase = function $clinit_BigLongLibBase(){
  cggl.$clinit_BigLongLibBase = emptyMethod;
  jl.$clinit_Object();
  cggl.BITS01 = 2 * 22;
  cggl.BITS2 = 64 - 44;
  cggl.MASK = (1 << 22) - 1;
  cggl.MASK_2 = (1 << 20) - 1;
  cggl.SIGN_BIT = 20 - 1;
  cggl.SIGN_BIT_VALUE = 1 << 19;
  cggl.TWO_PWR_31_DBL = 65536 * 32768;
  cggl.TWO_PWR_32_DBL = 65536 * 65536;
  cggl.TWO_PWR_44_DBL = 4194304 * 4194304;
  cggl.TWO_PWR_63_DBL = 4294967296 * 2147483648;
}
;
cggl.create_3 = function create_3(){
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return new cggl.BigLongLibBase$BigLong;
  }
  return cggl.create0(0, 0, 0);
}
;
cggl.create_4 = function create_4(value_0){
  cggl.$clinit_BigLongLibBase();
  var a, a0, a1, a2;
  a0 = value_0 & 4194303;
  a1 = value_0 >> 22 & 4194303;
  a2 = value_0 < 0?1048575:0;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a = new cggl.BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_5 = function create_5(a0, a1, a2){
  cggl.$clinit_BigLongLibBase();
  var a;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a = new cggl.BigLongLibBase$BigLong;
    a.l_0 = a0;
    a.m_0 = a1;
    a.h_0 = a2;
    return a;
  }
  return cggl.create0(a0, a1, a2);
}
;
cggl.create_6 = function create_6(a){
  cggl.$clinit_BigLongLibBase();
  var b;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    b = new cggl.BigLongLibBase$BigLong;
    b.l_0 = cggl.getL(a);
    b.m_0 = cggl.getM(a);
    b.h_0 = cggl.getH(a);
    return b;
  }
  return cggl.create0(cggl.getL(a), cggl.getM(a), cggl.getH(a));
}
;
cggl.create0 = function create0(l, m, h){
  return {l:l, m:m, h:h};
}
;
cggl.divMod = function divMod(a, b, computeRemainder){
  cggl.$clinit_BigLongLibBase();
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (cggl.isZero(b)) {
    throw toJs(new jl.ArithmeticException('divide by zero'));
  }
  if (cggl.isZero(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_3();
    }
    return cggl.create_3();
  }
  if (cggl.isMinValue(b)) {
    return cggl.divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (cggl.isNegative(b)) {
    b = cggl.neg(b);
    negative = !negative;
  }
  bpower = cggl.powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (cggl.isMinValue(a)) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = cggl.create_6((cggl.$clinit_BigLongLib$Const() , cggl.MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = cggl.shr(a, bpower);
      if (negative) {
        cggl.negate(c);
      }
      if (computeRemainder) {
        cggl.remainder = cggl.create_3();
      }
      return c;
    }
  }
   else if (cggl.isNegative(a)) {
    aIsNegative = true;
    a = cggl.neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return cggl.divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (cggl.compare(a, b) < 0) {
    if (computeRemainder) {
      if (aIsNegative) {
        cggl.remainder = cggl.neg(a);
      }
       else {
        cggl.remainder = cggl.create_6(a);
      }
    }
    return cggl.create_3();
  }
  return cggl.divModHelper(aIsCopy?a:cggl.create_6(a), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}
;
cggl.divModByMinValue = function divModByMinValue(a, computeRemainder){
  if (cggl.isMinValue(a)) {
    if (computeRemainder) {
      cggl.remainder = cggl.create_3();
    }
    return cggl.create_6((cggl.$clinit_BigLongLib$Const() , cggl.ONE_0));
  }
  if (computeRemainder) {
    cggl.remainder = cggl.create_6(a);
  }
  return cggl.create_3();
}
;
cggl.divModByShift = function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = cggl.shr(a, bpower);
  if (negative) {
    cggl.negate(c);
  }
  if (computeRemainder) {
    a = cggl.maskRight(a, bpower);
    if (aIsNegative) {
      cggl.remainder = cggl.neg(a);
    }
     else {
      cggl.remainder = cggl.create_6(a);
    }
  }
  return c;
}
;
cggl.divModHelper = function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0;
  shift_0 = cggl.numberOfLeadingZeros(b) - cggl.numberOfLeadingZeros(a);
  bshift = cggl.shl(b, shift_0);
  quotient = cggl.create_3();
  while (shift_0 >= 0) {
    gte = cggl.trialSubtract(a, bshift);
    if (gte) {
      cggl.setBit(quotient, shift_0);
      if (cggl.isZero(a)) {
        break;
      }
    }
    cggl.toShru1(bshift);
    shift_0--;
  }
  if (negative) {
    cggl.negate(quotient);
  }
  if (computeRemainder) {
    if (aIsNegative) {
      cggl.remainder = cggl.neg(a);
      if (aIsMinValue) {
        cggl.remainder = cggl.sub_0(cggl.remainder, (cggl.$clinit_BigLongLib$Const() , cggl.ONE_0));
      }
    }
     else {
      cggl.remainder = cggl.create_6(a);
    }
  }
  return quotient;
}
;
cggl.getH = function getH(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.h_0;
  }
  return cggl.getHNative(a);
}
;
cggl.getHNative = function getHNative(a){
  return a.h;
}
;
cggl.getL = function getL(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.l_0;
  }
  return cggl.getLNative(a);
}
;
cggl.getLNative = function getLNative(a){
  return a.l;
}
;
cggl.getM = function getM(a){
  cggl.$clinit_BigLongLibBase();
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    return a.m_0;
  }
  return cggl.getMNative(a);
}
;
cggl.getMNative = function getMNative(a){
  return a.m;
}
;
cggl.isMinValue = function isMinValue(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getH(a) == 524288 && cggl.getM(a) == 0 && cggl.getL(a) == 0;
}
;
cggl.isNegative = function isNegative(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.sign(a) != 0;
}
;
cggl.isZero = function isZero(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getL(a) == 0 && cggl.getM(a) == 0 && cggl.getH(a) == 0;
}
;
cggl.maskRight = function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = cggl.getL(a) & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a) & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = cggl.getL(a);
    b1 = cggl.getM(a);
    b2 = cggl.getH(a) & (1 << bits - 44) - 1;
  }
  return cggl.create_5(b0, b1, b2);
}
;
cggl.negate = function negate(a){
  cggl.$clinit_BigLongLibBase();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & 4194303;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = neg0;
    a.m_0 = neg1;
    a.h_0 = neg2;
  }
   else {
    cggl.setL(a, neg0);
    cggl.setM(a, neg1);
    cggl.setH(a, neg2);
  }
}
;
cggl.numberOfLeadingZeros = function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(cggl.getH(a));
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(cggl.getM(a));
    if (b1 == 32) {
      return numberOfLeadingZeros_0(cggl.getL(a)) + 32;
    }
     else {
      return b1 + 20 - (32 - 22);
    }
  }
   else {
    return b2 - (32 - 20);
  }
}
;
cggl.powerOfTwo = function powerOfTwo(a){
  var h, l, m;
  l = cggl.getL(a);
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = cggl.getM(a);
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = cggl.getH(a);
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}
;
cggl.setBit = function setBit(a, bit){
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    if (bit < 22) {
      a.l_0 |= 1 << bit;
    }
     else if (bit < 44) {
      a.m_0 |= 1 << bit - 22;
    }
     else {
      a.h_0 |= 1 << bit - 44;
    }
  }
   else {
    if (bit < 22) {
      cggl.setBitL(a, bit);
    }
     else if (bit < 44) {
      cggl.setBitM(a, bit - 22);
    }
     else {
      cggl.setBitH(a, bit - 44);
    }
  }
}
;
cggl.setBitH = function setBitH(a, bit){
  a.h |= 1 << bit;
}
;
cggl.setBitL = function setBitL(a, bit){
  a.l |= 1 << bit;
}
;
cggl.setBitM = function setBitM(a, bit){
  a.m |= 1 << bit;
}
;
cggl.setH = function setH(a, x_0){
  a.h = x_0;
}
;
cggl.setL = function setL(a, x_0){
  a.l = x_0;
}
;
cggl.setM = function setM(a, x_0){
  a.m = x_0;
}
;
cggl.sign = function sign(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getH(a) >> 20 - 1;
}
;
cggl.toDoubleHelper = function toDoubleHelper(a){
  cggl.$clinit_BigLongLibBase();
  return cggl.getL(a) + cggl.getM(a) * 4194304 + cggl.getH(a) * 17592186044416;
}
;
cggl.toShru1 = function toShru1(a){
  var a0, a1, a2;
  a1 = cggl.getM(a);
  a2 = cggl.getH(a);
  a0 = cggl.getL(a);
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.h_0 = a2 >>> 1;
    a.m_0 = a1 >>> 1 | (a2 & 1) << 22 - 1;
    a.l_0 = a0 >>> 1 | (a1 & 1) << 22 - 1;
  }
   else {
    cggl.setH(a, a2 >>> 1);
    cggl.setM(a, a1 >>> 1 | (a2 & 1) << 22 - 1);
    cggl.setL(a, a0 >>> 1 | (a1 & 1) << 22 - 1);
  }
}
;
cggl.trialSubtract = function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = cggl.getH(a) - cggl.getH(b);
  if (sum2 < 0) {
    return false;
  }
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  if (cggl.$clinit_LongLib() , RUN_IN_JVM) {
    a.l_0 = sum0 & 4194303;
    a.m_0 = sum1 & 4194303;
    a.h_0 = sum2 & 1048575;
  }
   else {
    cggl.setL(a, sum0 & 4194303);
    cggl.setM(a, sum1 & 4194303);
    cggl.setH(a, sum2 & 1048575);
  }
  return true;
}
;
defineClass(234, 1, {1:1});
cggl.BITS = 22;
cggl.BITS01 = 0;
cggl.BITS2 = 0;
cggl.MASK = 0;
cggl.MASK_2 = 0;
cggl.SIGN_BIT = 0;
cggl.SIGN_BIT_VALUE = 0;
cggl.TWO_PWR_15_DBL = 32768;
cggl.TWO_PWR_16_DBL = 65536;
cggl.TWO_PWR_22_DBL = 4194304;
cggl.TWO_PWR_31_DBL = 0;
cggl.TWO_PWR_32_DBL = 0;
cggl.TWO_PWR_44_DBL = 0;
cggl.TWO_PWR_63_DBL = 0;
cggl.Lcom_google_gwt_lang_BigLongLibBase_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase', 234, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLib = function $clinit_BigLongLib(){
  cggl.$clinit_BigLongLib = emptyMethod;
  cggl.$clinit_BigLongLibBase();
}
;
cggl.add_1 = function add_1(a, b){
  cggl.$clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) + cggl.getL(b);
  sum1 = cggl.getM(a) + cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) + cggl.getH(b) + (sum1 >> 22);
  return cggl.create_5(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}
;
cggl.and = function and(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) & cggl.getL(b), cggl.getM(a) & cggl.getM(b), cggl.getH(a) & cggl.getH(b));
}
;
cggl.compare = function compare(a, b){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = cggl.sign(a);
  signB = cggl.sign(b);
  if (signA != signB) {
    return signB - signA;
  }
  a2 = cggl.getH(a);
  b2 = cggl.getH(b);
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = cggl.getM(a);
  b1 = cggl.getM(b);
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = cggl.getL(a);
  b0 = cggl.getL(b);
  return a0 - b0;
}
;
cggl.div = function div(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.divMod(a, b, false);
}
;
cggl.fromDouble = function fromDouble(value_0){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return cggl.$clinit_BigLongLib$Const() , cggl.ZERO;
  }
  if (value_0 < -9223372036854775807) {
    return cggl.$clinit_BigLongLib$Const() , cggl.MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return cggl.$clinit_BigLongLib$Const() , cggl.MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= 17592186044416) {
    a2 = round_int(value_0 / 17592186044416);
    value_0 -= a2 * 17592186044416;
  }
  a1 = 0;
  if (value_0 >= 4194304) {
    a1 = round_int(value_0 / 4194304);
    value_0 -= a1 * 4194304;
  }
  a0 = round_int(value_0);
  result = cggl.create_5(a0, a1, a2);
  if (negative) {
    cggl.negate(result);
  }
  return result;
}
;
cggl.fromInt = function fromInt(value_0){
  cggl.$clinit_BigLongLib();
  return cggl.create_4(value_0);
}
;
cggl.getAsLongArray = function getAsLongArray(l){
  cggl.$clinit_BigLongLib();
  var a;
  a = initUnidimensionalArray(cggl.J_classLit, {3:1, 1:1}, 15, 3, 14, 1);
  a[0] = fromInt_0(toInt_0(and_0(l, 4194303)));
  a[1] = fromInt_0(toInt_0(and_0(shr_0(l, 22), 4194303)));
  a[2] = fromInt_0(toInt_0(and_0(shr_0(l, 44), 1048575)));
  return a;
}
;
cggl.mod = function mod(a, b){
  cggl.$clinit_BigLongLib();
  cggl.divMod(a, b, true);
  return cggl.$clinit_BigLongLibBase() , cggl.remainder;
}
;
cggl.mul = function mul(a, b){
  cggl.$clinit_BigLongLib();
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = cggl.getL(a) & 8191;
  a1 = cggl.getL(a) >> 13 | (cggl.getM(a) & 15) << 9;
  a2 = cggl.getM(a) >> 4 & 8191;
  a3 = cggl.getM(a) >> 17 | (cggl.getH(a) & 255) << 5;
  a4 = (cggl.getH(a) & 1048320) >> 8;
  b0 = cggl.getL(b) & 8191;
  b1 = cggl.getL(b) >> 13 | (cggl.getM(b) & 15) << 9;
  b2 = cggl.getM(b) >> 4 & 8191;
  b3 = cggl.getM(b) >> 17 | (cggl.getH(b) & 255) << 5;
  b4 = (cggl.getH(b) & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  if (b4 != 0) {
    p4 += a0 * b4;
  }
  c00 = p0 & 4194303;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= 4194303;
  c2 += c1 >> 22;
  c1 &= 4194303;
  c2 &= 1048575;
  return cggl.create_5(c0, c1, c2);
}
;
cggl.neg = function neg(a){
  cggl.$clinit_BigLongLib();
  var neg0, neg1, neg2;
  neg0 = ~cggl.getL(a) + 1 & 4194303;
  neg1 = ~cggl.getM(a) + (neg0 == 0?1:0) & 4194303;
  neg2 = ~cggl.getH(a) + (neg0 == 0 && neg1 == 0?1:0) & 1048575;
  return cggl.create_5(neg0, neg1, neg2);
}
;
cggl.not = function not(a){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(~cggl.getL(a) & 4194303, ~cggl.getM(a) & 4194303, ~cggl.getH(a) & 1048575);
}
;
cggl.or = function or(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) | cggl.getL(b), cggl.getM(a) | cggl.getM(b), cggl.getH(a) | cggl.getH(b));
}
;
cggl.shl = function shl(a, n){
  cggl.$clinit_BigLongLib();
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = cggl.getL(a) << n;
    res1 = cggl.getM(a) << n | cggl.getL(a) >> 22 - n;
    res2 = cggl.getH(a) << n | cggl.getM(a) >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = cggl.getL(a) << n - 22;
    res2 = cggl.getM(a) << n - 22 | cggl.getL(a) >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = cggl.getL(a) << n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.shr = function shr(a, n){
  cggl.$clinit_BigLongLib();
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a);
  negative = (a2 & 524288) != 0;
  if (negative) {
    a2 |= ~1048575;
  }
  if (n < 22) {
    res2 = a2 >> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?1048575:0;
    res1 = a2 >> n - 22;
    res0 = cggl.getM(a) >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?1048575:0;
    res1 = negative?4194303:0;
    res0 = a2 >> n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.shru = function shru(a, n){
  cggl.$clinit_BigLongLib();
  var a2, res0, res1, res2;
  n &= 63;
  a2 = cggl.getH(a) & 1048575;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = cggl.getM(a) >> n | a2 << 22 - n;
    res0 = cggl.getL(a) >> n | cggl.getM(a) << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = cggl.getM(a) >> n - 22 | cggl.getH(a) << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return cggl.create_5(res0 & 4194303, res1 & 4194303, res2 & 1048575);
}
;
cggl.sub_0 = function sub_0(a, b){
  cggl.$clinit_BigLongLib();
  var sum0, sum1, sum2;
  sum0 = cggl.getL(a) - cggl.getL(b);
  sum1 = cggl.getM(a) - cggl.getM(b) + (sum0 >> 22);
  sum2 = cggl.getH(a) - cggl.getH(b) + (sum1 >> 22);
  return cggl.create_5(sum0 & 4194303, sum1 & 4194303, sum2 & 1048575);
}
;
cggl.toDouble = function toDouble(a){
  cggl.$clinit_BigLongLib();
  if (cggl.compare(a, (cggl.$clinit_BigLongLib$Const() , cggl.ZERO)) < 0) {
    return -cggl.toDoubleHelper(cggl.neg(a));
  }
  return cggl.toDoubleHelper(a);
}
;
cggl.toInt = function toInt(a){
  cggl.$clinit_BigLongLib();
  return cggl.getL(a) | cggl.getM(a) << 22;
}
;
cggl.toString_8 = function toString_8(a){
  cggl.$clinit_BigLongLib();
  var digits, rem, res, tenPower, tenPowerLong, tenPowerZeroes, zeroesNeeded;
  if (cggl.isZero(a)) {
    return '0';
  }
  if (cggl.isMinValue(a)) {
    return '-9223372036854775808';
  }
  if (cggl.isNegative(a)) {
    return '-' + cggl.toString_8(cggl.neg(a));
  }
  rem = a;
  res = '';
  while (!cggl.isZero(rem)) {
    tenPowerZeroes = 9;
    tenPower = 1000000000;
    tenPowerLong = cggl.fromInt(1000000000);
    rem = cggl.divMod(rem, tenPowerLong, true);
    digits = '' + cggl.toInt((cggl.$clinit_BigLongLibBase() , cggl.remainder));
    if (!cggl.isZero(rem)) {
      zeroesNeeded = 9 - jl.length__I__devirtual$_0(digits);
      for (; zeroesNeeded > 0; zeroesNeeded--) {
        digits = '0' + digits;
      }
    }
    res = digits + ('' + res);
  }
  return res;
}
;
cggl.xor = function xor(a, b){
  cggl.$clinit_BigLongLib();
  return cggl.create_5(cggl.getL(a) ^ cggl.getL(b), cggl.getM(a) ^ cggl.getM(b), cggl.getH(a) ^ cggl.getH(b));
}
;
defineClass(251, 234, {1:1});
cggl.Lcom_google_gwt_lang_BigLongLib_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib', 251, cggl.Lcom_google_gwt_lang_BigLongLibBase_2_classLit);
cggl.$clinit_BigLongLib$Const = function $clinit_BigLongLib$Const(){
  cggl.$clinit_BigLongLib$Const = emptyMethod;
  jl.$clinit_Object();
  cggl.MAX_VALUE = cggl.create_5(4194303, 4194303, 1048575 >> 1);
  cggl.MIN_VALUE = cggl.create_5(0, 0, 524288);
  cggl.ONE_0 = cggl.fromInt(1);
  cggl.TWO = cggl.fromInt(2);
  cggl.ZERO = cggl.fromInt(0);
}
;
defineClass(252, 1, {1:1});
cggl.Lcom_google_gwt_lang_BigLongLib$Const_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLib/Const', 252, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_BigLongLibBase$BigLong = function $clinit_BigLongLibBase$BigLong(){
  cggl.$clinit_BigLongLibBase$BigLong = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.BigLongLibBase$BigLong = function BigLongLibBase$BigLong(){
  cggl.$clinit_BigLongLibBase$BigLong();
  Object_0.call(this);
  this.$init_54();
}
;
defineClass(46, 1, {1:1}, cggl.BigLongLibBase$BigLong);
_.$init_54 = function $init_54(){
}
;
_.h_0 = 0;
_.l_0 = 0;
_.m_0 = 0;
cggl.Lcom_google_gwt_lang_BigLongLibBase$BigLong_2_classLit = createForClass('com.google.gwt.lang', 'BigLongLibBase/BigLong', 46, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_Exceptions = function $clinit_Exceptions(){
  cggl.$clinit_Exceptions = emptyMethod;
  jl.$clinit_Object();
}
;
function Exceptions(){
  Object_0.call(this);
  this.$init_56();
}

function checkNotNull(arg){
  cggl.$clinit_Exceptions();
  if (arg == null) {
    throw new TypeError('null pointer');
  }
  return arg;
}

cggl.getJavaException = function getJavaException(e){
  return e && e.__java$exception;
}
;
function makeAssertionError(){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError;
}

function makeAssertionError_Object(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_5(message);
}

function makeAssertionError_boolean(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_7(message);
}

function makeAssertionError_char(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_0(message);
}

function makeAssertionError_double(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_1(message);
}

function makeAssertionError_float(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_2(message);
}

function makeAssertionError_int(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_3(message);
}

function makeAssertionError_long(message){
  cggl.$clinit_Exceptions();
  return new jl.AssertionError_4(message);
}

function safeClose(resource, mainException){
  cggl.$clinit_Exceptions();
  var e;
  if (isNull(resource)) {
    return mainException;
  }
  try {
    resource.close_0();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      if (isNull(mainException)) {
        return e;
      }
      mainException.addSuppressed(e);
    }
     else 
      throw toJs($e0);
  }
  return mainException;
}

function toJava(e){
  cggl.$clinit_Exceptions();
  var javaException;
  if (instanceOf(e, 4)) {
    return e;
  }
  javaException = cggl.getJavaException(e);
  if (isNull(javaException)) {
    javaException = new cggcc.JavaScriptException(e);
    cggcci.captureStackTrace_0(javaException);
  }
  return javaException;
}

function toJs(t){
  cggl.$clinit_Exceptions();
  return t.backingJsObject_0;
}

defineClass(221, 1, {1:1});
_.$init_56 = function $init_56(){
}
;
cggl.Lcom_google_gwt_lang_Exceptions_2_classLit = createForClass('com.google.gwt.lang', 'Exceptions', 221, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib = function $clinit_LongLib(){
  cggl.$clinit_LongLib = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib = function LongLib(){
  Object_0.call(this);
  this.$init_57();
}
;
function add_2(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) + cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.add_1(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function and_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.and(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function asBigLong(value_0){
  cggl.$clinit_LongLib();
  if (RUN_IN_JVM) {
    return value_0.big_0;
  }
  return cggl.asBigLong0(value_0);
}

cggl.asBigLong0 = function asBigLong0(value_0){
  return value_0;
}
;
cggl.asDouble = function asDouble(value_0){
  return cggl.asDouble_0(cggl.asSmallLong(value_0));
}
;
cggl.asDouble_0 = function asDouble_0(value_0){
  if (RUN_IN_JVM) {
    return isNull(value_0)?NaN:value_0.d;
  }
  return cggl.asDouble0(value_0);
}
;
cggl.asDouble0 = function asDouble0(value_0){
  return value_0;
}
;
cggl.asSmallLong = function asSmallLong(value_0){
  if (RUN_IN_JVM) {
    return value_0.small_0;
  }
  return cggl.asSmallLong0(value_0);
}
;
cggl.asSmallLong0 = function asSmallLong0(value_0){
  return value_0;
}
;
cggl.coerceToInt = function coerceToInt(value_0){
  if (RUN_IN_JVM) {
    return toInt_0(fromDouble_0(value_0));
  }
  return cggl.coerceToInt0(value_0);
}
;
cggl.coerceToInt0 = function coerceToInt0(value_0){
  return value_0 | 0;
}
;
function compare_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) - cggl.asDouble(b);
    if (!isNaN(result)) {
      return result;
    }
  }
  return cggl.compare(cggl.toBigLong(a), cggl.toBigLong(b));
}

function copy(value_0){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(value_0)) {
    return cggl.createSmallLongEmul(cggl.asDouble(value_0));
  }
   else {
    return cggl.createBigLongEmul(cggl.create_6(asBigLong(value_0)));
  }
}

cggl.createBigLongEmul = function createBigLongEmul(big_0){
  var emul;
  if (RUN_IN_JVM) {
    emul = new cggl.LongLib$LongEmul;
    emul.big_0 = big_0;
    return emul;
  }
  return cggl.createBigLongEmul0(big_0);
}
;
cggl.createBigLongEmul0 = function createBigLongEmul0(value_0){
  return value_0;
}
;
cggl.createLongEmul = function createLongEmul(big_0){
  var a2;
  a2 = cggl.getH(big_0);
  if (a2 == 0) {
    return cggl.createSmallLongEmul(cggl.getL(big_0) + cggl.getM(big_0) * 4194304);
  }
  if (a2 == 1048575) {
    return cggl.createSmallLongEmul(cggl.getL(big_0) + cggl.getM(big_0) * 4194304 - 17592186044416);
  }
  return cggl.createBigLongEmul(big_0);
}
;
cggl.createSmallLongEmul = function createSmallLongEmul(value_0){
  var emul, small_0;
  if (RUN_IN_JVM) {
    small_0 = new cggl.LongLib$SmallLong;
    small_0.d = value_0;
    emul = new cggl.LongLib$LongEmul;
    emul.small_0 = small_0;
    return emul;
  }
  return cggl.createSmallLongEmul0(value_0);
}
;
cggl.createSmallLongEmul0 = function createSmallLongEmul0(value_0){
  return value_0;
}
;
function div_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) / cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(cggl.truncate(result));
    }
  }
  return cggl.createLongEmul(cggl.div(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function eq(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) == 0;
}

function fromDouble_0(value_0){
  cggl.$clinit_LongLib();
  if (cggl.isSafeIntegerRange(value_0)) {
    return cggl.createSmallLongEmul(cggl.truncate(value_0));
  }
  return cggl.createLongEmul(cggl.fromDouble(value_0));
}

function fromInt_0(value_0){
  cggl.$clinit_LongLib();
  return cggl.createSmallLongEmul(value_0);
}

function getAsLongArray_0(l){
  cggl.$clinit_LongLib();
  if (cggl.isSafeIntegerRange(toDouble_0(l))) {
    return stampJavaTypeInfo(getClassLiteralForArray(cggl.J_classLit, 1), {3:1, 1:1}, 15, 14, [l]);
  }
  return cggl.getAsLongArray(l);
}

function gt(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) > 0;
}

function gte_0(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) >= 0;
}

cggl.isSafeIntegerRange = function isSafeIntegerRange(value_0){
  cggl.$clinit_LongLib();
  return -17592186044416 < value_0 && value_0 < 17592186044416;
}
;
cggl.isSmallLong = function isSmallLong(value_0){
  if (RUN_IN_JVM) {
    return isNotNull(value_0.small_0);
  }
  return cggl.isSmallLong0(value_0);
}
;
cggl.isSmallLong0 = function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}
;
function lt(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) < 0;
}

function lte(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) <= 0;
}

function mod_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) % cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.mod(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function mul_0(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) * cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.mul(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function neg_0(a){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a)) {
    result = 0 - cggl.asDouble(a);
    if (!isNaN(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.neg(asBigLong(a)));
}

function neq(a, b){
  cggl.$clinit_LongLib();
  return compare_0(a, b) != 0;
}

function not_0(a){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.not(cggl.toBigLong(a)));
}

function or_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.or(cggl.toBigLong(a), cggl.toBigLong(b)));
}

function shl_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shl(cggl.toBigLong(a), n));
}

function shr_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shr(cggl.toBigLong(a), n));
}

function shru_0(a, n){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.shru(cggl.toBigLong(a), n));
}

function sub_1(a, b){
  cggl.$clinit_LongLib();
  var result;
  if (cggl.isSmallLong(a) && cggl.isSmallLong(b)) {
    result = cggl.asDouble(a) - cggl.asDouble(b);
    if (cggl.isSafeIntegerRange(result)) {
      return cggl.createSmallLongEmul(result);
    }
  }
  return cggl.createLongEmul(cggl.sub_0(cggl.toBigLong(a), cggl.toBigLong(b)));
}

cggl.toBigLong = function toBigLong(value_0){
  return cggl.isSmallLong(value_0)?cggl.toBigLong_0(cggl.asSmallLong(value_0)):asBigLong(value_0);
}
;
cggl.toBigLong_0 = function toBigLong_0(longValue){
  var a0, a1, a3, value_0;
  value_0 = cggl.asDouble_0(longValue);
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / 4194304);
  a0 = round_int(value_0 - a1 * 4194304);
  return cggl.create_5(a0, a1, a3);
}
;
function toDouble_0(a){
  cggl.$clinit_LongLib();
  var d;
  if (cggl.isSmallLong(a)) {
    d = cggl.asDouble(a);
    return d == -0?0:d;
  }
  return cggl.toDouble(asBigLong(a));
}

function toInt_0(a){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(a)) {
    return cggl.coerceToInt(cggl.asDouble(a));
  }
  return cggl.toInt(asBigLong(a));
}

cggl.toString_9 = function toString_9(value_0){
  if (RUN_IN_JVM) {
    return jl.valueOf_16(fromDouble_0(value_0));
  }
  return jl.valueOf_13(value_0);
}
;
function toString_10(a){
  cggl.$clinit_LongLib();
  if (cggl.isSmallLong(a)) {
    return cggl.toString_9(cggl.asDouble(a));
  }
  return cggl.toString_8(asBigLong(a));
}

cggl.truncate = function truncate(value_0){
  return value_0 < 0?$wnd.Math.ceil(value_0):$wnd.Math.floor(value_0);
}
;
function xor_0(a, b){
  cggl.$clinit_LongLib();
  return cggl.createLongEmul(cggl.xor(cggl.toBigLong(a), cggl.toBigLong(b)));
}

defineClass(222, 1, {1:1});
_.$init_57 = function $init_57(){
}
;
var RUN_IN_JVM = false;
cggl.Lcom_google_gwt_lang_LongLib_2_classLit = createForClass('com.google.gwt.lang', 'LongLib', 222, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib$LongEmul = function $clinit_LongLib$LongEmul(){
  cggl.$clinit_LongLib$LongEmul = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib$LongEmul = function LongLib$LongEmul(){
  cggl.$clinit_LongLib$LongEmul();
  Object_0.call(this);
  this.$init_58();
}
;
defineClass(75, 1, {1:1}, cggl.LongLib$LongEmul);
_.$init_58 = function $init_58(){
}
;
cggl.Lcom_google_gwt_lang_LongLib$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/LongEmul', 75, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_LongLib$SmallLong = function $clinit_LongLib$SmallLong(){
  cggl.$clinit_LongLib$SmallLong = emptyMethod;
  jl.$clinit_Object();
}
;
cggl.LongLib$SmallLong = function LongLib$SmallLong(){
  cggl.$clinit_LongLib$SmallLong();
  Object_0.call(this);
  this.$init_59();
}
;
defineClass(125, 1, {1:1}, cggl.LongLib$SmallLong);
_.$init_59 = function $init_59(){
}
;
_.d = 0;
cggl.Lcom_google_gwt_lang_LongLib$SmallLong_2_classLit = createForClass('com.google.gwt.lang', 'LongLib/SmallLong', 125, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_Stats = function $clinit_Stats(){
  cggl.$clinit_Stats = emptyMethod;
  jl.$clinit_Object();
}
;
function Stats(){
  Object_0.call(this);
  this.$init_60();
}

function isStatsAvailable_0(){
  cggl.$clinit_Stats();
  return !!$stats;
}

function onModuleStart(mainClassName){
  cggl.$clinit_Stats();
  return $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:mainClassName});
}

defineClass(225, 1, {1:1});
_.$init_60 = function $init_60(){
}
;
cggl.Lcom_google_gwt_lang_Stats_2_classLit = createForClass('com.google.gwt.lang', 'Stats', 225, cggl.Ljava_lang_Object_2_classLit);
cggl.$clinit_com_00046google_00046gwt_00046site_00046webapp_00046GWTProject__EntryMethodHolder = function $clinit_com_00046google_00046gwt_00046site_00046webapp_00046GWTProject__EntryMethodHolder(){
  cggl.$clinit_com_00046google_00046gwt_00046site_00046webapp_00046GWTProject__EntryMethodHolder = emptyMethod;
  jl.$clinit_Object();
}
;
function init_0(){
  cggl.$clinit_com_00046google_00046gwt_00046site_00046webapp_00046GWTProject__EntryMethodHolder();
  castTo(new cgguc2.UserAgentAsserter, 43).onModuleLoad();
  castTo(new cgguc.DocumentModeAsserter, 43).onModuleLoad();
  castTo(new cggswc.GWTProjectEntryPoint, 43).onModuleLoad();
}

defineClass(186, 1, {1:1});
cggl.Lcom_google_gwt_lang_com_100046google_100046gwt_100046site_100046webapp_100046GWTProject_1_1EntryMethodHolder_2_classLit = createForClass('com.google.gwt.lang', 'com_00046google_00046gwt_00046site_00046webapp_00046GWTProject__EntryMethodHolder', 186, cggl.Ljava_lang_Object_2_classLit);
cggrs.$clinit_RegExp = function $clinit_RegExp(){
  cggrs.$clinit_RegExp = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggrs.$test = function $test(this$static, input_0){
  cggrs.$clinit_RegExp();
  return this$static.test(input_0);
}
;
cggrs.compile = function compile(pattern, flags){
  cggrs.$clinit_RegExp();
  return new RegExp(pattern, flags);
}
;
cggrc.$clinit_ClientBundle = function $clinit_ClientBundle(){
  cggrc.$clinit_ClientBundle = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_ClientBundle_2_classLit = createForInterface('com.google.gwt.resources.client', 'ClientBundle');
jla.$clinit_Annotation = function $clinit_Annotation(){
  jla.$clinit_Annotation = emptyMethod;
}
;
cggl.Ljava_lang_annotation_Annotation_2_classLit = createForInterface('java.lang.annotation', 'Annotation');
cggrc.$clinit_ClientBundle$Source = function $clinit_ClientBundle$Source(){
  cggrc.$clinit_ClientBundle$Source = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_ClientBundle$Source_2_classLit = createForInterface('com.google.gwt.resources.client', 'ClientBundle/Source');
cggrc.$clinit_ResourcePrototype = function $clinit_ResourcePrototype(){
  cggrc.$clinit_ResourcePrototype = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_ResourcePrototype_2_classLit = createForInterface('com.google.gwt.resources.client', 'ResourcePrototype');
cggrc.$clinit_CssResourceBase = function $clinit_CssResourceBase(){
  cggrc.$clinit_CssResourceBase = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResourceBase_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResourceBase');
cggrc.$clinit_CssResource = function $clinit_CssResource(){
  cggrc.$clinit_CssResource = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource');
cggrc.$clinit_CssResource$ClassName = function $clinit_CssResource$ClassName(){
  cggrc.$clinit_CssResource$ClassName = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$ClassName_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/ClassName');
cggrc.$clinit_CssResource$Import = function $clinit_CssResource$Import(){
  cggrc.$clinit_CssResource$Import = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$Import_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Import');
cggrc.$clinit_CssResource$ImportedWithPrefix = function $clinit_CssResource$ImportedWithPrefix(){
  cggrc.$clinit_CssResource$ImportedWithPrefix = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$ImportedWithPrefix_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/ImportedWithPrefix');
cggrc.$clinit_CssResource$NotStrict = function $clinit_CssResource$NotStrict(){
  cggrc.$clinit_CssResource$NotStrict = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$NotStrict_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/NotStrict');
cggrc.$clinit_CssResource$Shared = function $clinit_CssResource$Shared(){
  cggrc.$clinit_CssResource$Shared = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$Shared_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Shared');
cggrc.$clinit_CssResource$Strict = function $clinit_CssResource$Strict(){
  cggrc.$clinit_CssResource$Strict = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_CssResource$Strict_2_classLit = createForInterface('com.google.gwt.resources.client', 'CssResource/Strict');
cggrc.$clinit_TextResource = function $clinit_TextResource(){
  cggrc.$clinit_TextResource = emptyMethod;
}
;
cggl.Lcom_google_gwt_resources_client_TextResource_2_classLit = createForInterface('com.google.gwt.resources.client', 'TextResource');
cggswc.$clinit_GWTProjectEntryPoint = function $clinit_GWTProjectEntryPoint(){
  cggswc.$clinit_GWTProjectEntryPoint = emptyMethod;
  jl.$clinit_Object();
  cggswc.origin_0 = jl.toLowerCase__Ljava_lang_String___devirtual$(jl.replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(getModuleBaseForStaticFiles(), '^(\\w+://.+?)/.*', '$1'));
  cggswc.isSameOriginRexp = cggrs.compile('^' + cggswc.origin_0 + '|^(?!(#|[a-z#]+:))(?!.*(|/)javadoc/)(?!.*\\.(jpe?g|png|mpe?g|mp[34]|avi)$)', 'i');
  cggswc.ajaxEnabled = jl.startsWith_Ljava_lang_String__Z__devirtual$(cggswc.origin_0, 'http');
  cggswc.currentPage = cgguc.getPath();
}
;
cggswc.GWTProjectEntryPoint = function GWTProjectEntryPoint(){
  cggswc.$clinit_GWTProjectEntryPoint();
  Object_0.call(this);
  this.$init_62();
}
;
cggswc.lambda$0 = function lambda$0(el_0, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  var maxHeight;
  {
    maxHeight = el_0.style.removeProperty('max-height');
    el_0.style.removeProperty('overflow');
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2('0px', maxHeight)) {
      el_0.style.setProperty('display', 'none');
    }
  }
}
;
cggswc.lambda$1 = function lambda$1(el_0, to_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  el_0.style.setProperty('max-height', to_1 + 'px');
}
;
cggswc.lambda$10 = function lambda$10(selectedItem_0, el_1, index_2, array_3){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (maskUndefined(el_1) !== maskUndefined(selectedItem_0.parentElement)) {
      el_1.classList.add('active');
    }
    return null;
  }
}
;
cggswc.lambda$11 = function lambda$11(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  el_0.classList.remove('active');
}
;
cggswc.lambda$12 = function lambda$12(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  el_0.classList.add('active');
}
;
cggswc.lambda$13 = function lambda$13(nav_0, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  nav_0.classList.remove('closed');
}
;
cggswc.lambda$14 = function lambda$14(nav_0, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (!nav_0.classList.contains('alwaysOpen')) {
      nav_0.classList.add('closed');
    }
  }
}
;
cggswc.lambda$16 = function lambda$16(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  el_0.classList.remove('show');
}
;
cggswc.lambda$19 = function lambda$19(parentItems_0, el_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (jsNotEquals(el_1.querySelector('ul'), null)) {
      parentItems_0.push(el_1);
      el_1.parentElement.insertBefore((ed.$clinit_DomGlobal() , ed.document_0).createElement('span'), el_1);
    }
  }
}
;
cggswc.lambda$28 = function lambda$28(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  return el_0.style.display = '';
}
;
cggswc.lambda$31 = function lambda$31(spinner_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  return spinner_0.style.display = 'none';
}
;
cggswc.lambda$37 = function lambda$37(e_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  e_0.classList.remove('active');
}
;
cggswc.lambda$39 = function lambda$39(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  el_0.classList.remove('active');
}
;
cggswc.lambda$4 = function lambda$4(nav_0, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (!nav_0.classList.contains('alwaysOpen')) {
      nav_0.classList.remove('closed');
    }
  }
}
;
cggswc.lambda$40 = function lambda$40(windowHeight_0, element_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  var container;
  {
    element_1.style.setProperty('height', windowHeight_0 + 'px');
    element_1.style.setProperty('padding', '0');
    container = castToNative(element_1.querySelector('.container'), $wnd.HTMLElement);
    container.style.setProperty('padding-top', narrow_int((windowHeight_0 - container.offsetHeight) / 2) + 'px');
  }
}
;
cggswc.lambda$41 = function lambda$41(consumer_0, element_1, index_2, parent_3){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    consumer_0(castToNative(element_1, $wnd.HTMLElement));
    return null;
  }
}
;
cggswc.lambda$42 = function lambda$42(selector_0, consumer_1, element_2, index_3, p_4){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (instanceOfNative(element_2, $wnd.HTMLElement)) {
      if (castToNative(element_2, $wnd.HTMLElement).matches(selector_0)) {
        consumer_1(castToNative(element_2, $wnd.HTMLElement));
      }
    }
    return null;
  }
}
;
cggswc.lambda$5 = function lambda$5(nav_0, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (!nav_0.classList.contains('alwaysOpen')) {
      nav_0.classList.add('closed');
    }
  }
}
;
cggswc.lambda$7 = function lambda$7(child_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  return child_0.style.display = 'none';
}
;
cggswc.lambda$8 = function lambda$8(el_0, index_1, parent_2){
  cggswc.$clinit_GWTProjectEntryPoint();
  return !jl.equals_Ljava_lang_Object__Z__devirtual$_2('none', castToNative(el_0, $wnd.HTMLElement).style.display);
}
;
cggswc.lambda$9 = function lambda$9(liParents_0, el_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    if (liParents_0.indexOf(el_1) < 0) {
      el_1.classList.remove('active');
    }
  }
}
;
defineClass(91, 1, {43:1, 1:1}, cggswc.GWTProjectEntryPoint);
_.$init_62 = function $init_62(){
  this.clickHandlers = new $wnd.WeakMap;
}
;
_.lambda$15 = function lambda$15(evt_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  var target;
  {
    target = castToNative(evt_0.target, $wnd.Element);
    if (jsEquals(target.closest('a'), null)) {
      return;
    }
    if (this.shouldEnhanceLink(target) && this.handleAsClick(castToNative(evt_0, $wnd.MouseEvent))) {
      this.forEach_0('#submenu.show', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$16$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$16$Type, []));
      this.loadPage(target);
      evt_0.preventDefault();
    }
  }
}
;
_.lambda$17 = function lambda$17(evt_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.loadPage(null);
}
;
_.lambda$18 = function lambda$18(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  var link_0;
  {
    if (this.shouldEnhanceLink(el_0)) {
      link_0 = castToNative(el_0, $wnd.HTMLAnchorElement);
      link_0.href = link_0.pathname;
    }
  }
}
;
_.lambda$20 = function lambda$20(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    el_0.removeEventListener('click', castToUnknownNative(this.clickHandlers.get(el_0)));
  }
}
;
_.lambda$21 = function lambda$21(spanOrLocalLink_1, item_1, index_2, array_3){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    this.forEachChild(item_1, spanOrLocalLink_1, makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$22$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$22$Type, [this]));
    item_1.classList.add('folder');
    if (!item_1.classList.contains('open')) {
      this.forEachChild(item_1, 'ul', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$24$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$24$Type, [this]));
    }
    return null;
  }
}
;
_.lambda$22 = function lambda$22(element_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  var eventListener;
  {
    eventListener = new cggswc.GWTProjectEntryPoint$lambda$23$Type(this);
    element_0.addEventListener('click', eventListener);
    this.clickHandlers.set(element_0, eventListener);
  }
}
;
_.lambda$23 = function lambda$23(evt_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.toggleMenu(castToNative(castToNative(evt_0.target, $wnd.Element).parentElement, $wnd.HTMLElement));
}
;
_.lambda$24 = function lambda$24(child_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.slideUp(child_0, 0);
}
;
_.lambda$25 = function lambda$25(open_1, child_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.slideToggle(child_1, 200, open_1);
}
;
_.lambda$26 = function lambda$26(item_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  var parent_0;
  {
    parent_0 = item_1.closest('li');
    while (jsNotEquals(parent_0, null)) {
      parent_0.classList.add('open');
      this.forEachChild(parent_0, 'ul', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$27$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$27$Type, [this]));
      parent_0 = parent_0.parentElement.closest('li');
    }
  }
}
;
_.lambda$27 = function lambda$27(htmlElement_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.slideDown(htmlElement_0, cggswc.ajaxEnabled?200:0);
}
;
_.lambda$3 = function lambda$3(form_1, evt_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  var input_0;
  {
    input_0 = castToNative(form_1.querySelector('input'), $wnd.HTMLInputElement);
    this.doSearch(input_0.value);
    evt_1.preventDefault();
  }
}
;
_.lambda$30 = function lambda$30(shouldReplaceMenu_1, responseText_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  var content_0;
  {
    content_0 = castToNative((ed.$clinit_DomGlobal() , ed.document_0).createElement('div'), $wnd.HTMLElement);
    content_0.innerHTML = responseText_1;
    if (shouldReplaceMenu_1) {
      ed.$replaceWith_3((ed.$clinit_DomGlobal() , ed.document_0).querySelector('#submenu'), [content_0.querySelector('#submenu')]);
    }
    ed.$replaceWith_3((ed.$clinit_DomGlobal() , ed.document_0).querySelector('#content'), [content_0.querySelector('#content')]);
    this.onPageLoaded(shouldReplaceMenu_1);
    return null;
  }
}
;
_.lambda$32 = function lambda$32(event_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  this.styleHomepage();
}
;
_.lambda$33 = function lambda$33(element_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  element_0.addEventListener('click', new cggswc.GWTProjectEntryPoint$lambda$34$Type(this, element_0));
}
;
_.lambda$34 = function lambda$34(element_1, event_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    event_1.preventDefault();
    (ed.$clinit_DomGlobal() , ed.document_0).documentElement.scrollTop = this.getElementOffset((ed.$clinit_DomGlobal() , ed.document_0).querySelector(element_1.getAttribute('href')));
  }
}
;
_.lambda$35 = function lambda$35(element_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  element_0.addEventListener('click', new cggswc.GWTProjectEntryPoint$lambda$36$Type(this, element_0));
}
;
_.lambda$36 = function lambda$36(element_1, event_1){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    this.forEach_0('.pager a', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$37$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$37$Type, []));
    element_1.classList.add('active');
  }
}
;
_.lambda$38 = function lambda$38(evt_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    this.forEach_0('.pager a', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$39$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$39$Type, []));
    if ((ed.$clinit_DomGlobal() , $wnd.goog.global.window).scrollY + 100 > this.getElementOffset((ed.$clinit_DomGlobal() , ed.document_0).querySelector('#letsbegin'))) {
      this.querySelector_0('.pager a:nth-child(3)').classList.add('active');
    }
     else if ((ed.$clinit_DomGlobal() , $wnd.goog.global.window).scrollY + 100 > this.getElementOffset((ed.$clinit_DomGlobal() , ed.document_0).querySelector('#gwt'))) {
      this.querySelector_0('.pager a:nth-child(2)').classList.add('active');
    }
     else {
      this.querySelector_0('.pager a:nth-child(1)').classList.add('active');
    }
  }
}
;
_.lambda$6 = function lambda$6(el_0){
  cggswc.$clinit_GWTProjectEntryPoint();
  {
    el_0.style.display = 'none';
    this.forEachChild(el_0, 'a', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$7$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$7$Type, []));
  }
}
;
_.ajaxLoad = function ajaxLoad(pageUrl, shouldReplaceMenu){
  ed.fetch_2(pageUrl).then(makeLambdaFunction(cggswc.GWTProjectEntryPoint$1methodref$text$Type.prototype.onInvoke, cggswc.GWTProjectEntryPoint$1methodref$text$Type, [])).then(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$30$Type.prototype.onInvoke, cggswc.GWTProjectEntryPoint$lambda$30$Type, [this, shouldReplaceMenu]));
}
;
_.animateMaxHeight = function animateMaxHeight(el, from, to, animationTime){
  if (animationTime == 0) {
    el.style.setProperty('display', to == 0?'none':'');
    return;
  }
  el.style.setProperty('max-height', from + 'px');
  el.style.setProperty('overflow', 'hidden');
  el.style.setProperty('transition', 'max-height ' + animationTime + 'ms ease-in-out');
  if (!jb.$has_4(el.dataset, 'transitionListener')) {
    el.addEventListener('transitionend', new cggswc.GWTProjectEntryPoint$lambda$0$Type(el));
    jb.$set_21(el.dataset, 'transitionListener', 'true');
  }
  cggcc.get_0().scheduleDeferred(new cggswc.GWTProjectEntryPoint$lambda$1$Type(el, to));
}
;
_.bindSearch = function bindSearch(){
  var form_0;
  form_0 = this.querySelector_0('#search form');
  form_0.addEventListener('submit', new cggswc.GWTProjectEntryPoint$lambda$3$Type(this, form_0));
}
;
_.doSearch = function doSearch(value_0){
  var element = $wnd.google.search.cse.element.getElement('searchresults');
  element.execute(value_0);
}
;
_.enhanceLinks = function enhanceLinks(){
  var parentItems, spanOrLocalLink;
  this.forEach_0('a:not(#content a)', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$18$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$18$Type, [this]));
  parentItems = new $wnd.Array;
  this.forEach_0('#submenu ul > li li', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$19$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$19$Type, [parentItems]));
  spanOrLocalLink = "span,a[href='#']";
  this.forEachChild(this.querySelector_0('#submenu'), spanOrLocalLink, makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$20$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$20$Type, [this]));
  parentItems.forEach(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$21$Type.prototype.onInvoke_0, cggswc.GWTProjectEntryPoint$lambda$21$Type, [this, spanOrLocalLink]));
}
;
_.enhanceMenu = function enhanceMenu(){
  var nav;
  nav = this.querySelector_0('#nav');
  nav.addEventListener('mouseenter', new cggswc.GWTProjectEntryPoint$lambda$4$Type(nav));
  nav.addEventListener('mouseleave', new cggswc.GWTProjectEntryPoint$lambda$5$Type(nav));
}
;
_.enhancePage = function enhancePage(){
  var nav;
  nav = this.querySelector_0('#nav');
  nav.addEventListener('mouseenter', new cggswc.GWTProjectEntryPoint$lambda$13$Type(nav));
  nav.addEventListener('mouseleave', new cggswc.GWTProjectEntryPoint$lambda$14$Type(nav));
  this.enhanceLinks();
  if (!cggswc.ajaxEnabled) {
    this.loadPage(null);
    return;
  }
  (ed.$clinit_DomGlobal() , ed.document_0).body.addEventListener('click', new cggswc.GWTProjectEntryPoint$lambda$15$Type(this));
  (ed.$clinit_DomGlobal() , $wnd.goog.global.window).addEventListener('popstate', new cggswc.GWTProjectEntryPoint$lambda$17$Type(this));
}
;
_.estimateHeight = function estimateHeight(el){
  return el.childElementCount * 33;
}
;
_.forEach_0 = function forEach(selector, consumer){
  (ed.$clinit_DomGlobal() , ed.document_0).querySelectorAll(selector).forEach(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$41$Type.prototype.onInvoke_2, cggswc.GWTProjectEntryPoint$lambda$41$Type, [consumer]));
}
;
_.forEachChild = function forEachChild(parent_0, selector, consumer){
  parent_0.childNodes.forEach(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$42$Type.prototype.onInvoke_2, cggswc.GWTProjectEntryPoint$lambda$42$Type, [selector, consumer]));
}
;
_.getElementOffset = function getElementOffset(element){
  return castToNative(element, $wnd.HTMLElement).offsetTop;
}
;
_.handleAsClick = function handleAsClick(event_0){
  var middle, modifiers, mouseButtons, right;
  mouseButtons = event_0.button;
  modifiers = event_0.altKey || event_0.ctrlKey || event_0.metaKey || event_0.shiftKey;
  middle = mouseButtons == 4;
  right = mouseButtons == 2;
  return !modifiers && !middle && !right;
}
;
_.highLight = function highLight(){
  (cggswch.$clinit_JsHighlight() , cggswch.INSTANCE_0).initialize();
  this.forEach_0('pre > code', makeLambdaFunction(cggswc.GWTProjectEntryPoint$0methodref$highlightBlock$Type.prototype.accept, cggswc.GWTProjectEntryPoint$0methodref$highlightBlock$Type, [(cggswch.$clinit_JsHighlight() , cggswch.INSTANCE_0)]));
}
;
_.isHomePage = function isHomePage(path){
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2('/', path);
}
;
_.isOverviewPage = function isOverviewPage(path){
  return jl.compareToIgnoreCase_Ljava_lang_String__I__devirtual$('/overview.html', path) == 0;
}
;
_.loadPage = function loadPage(link_0){
  var pageUrl, shouldReplaceMenu;
  pageUrl = jsEquals(link_0, null)?null:castToNative(link_0, $wnd.HTMLAnchorElement).pathname;
  shouldReplaceMenu = this.shouldReplaceMenu(pageUrl);
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_2(cggswc.currentPage, pageUrl)) {
    if (jsNotEquals(pageUrl, null)) {
      pageUrl = jl.replaceFirst_Ljava_lang_String_Ljava_lang_String__Ljava_lang_String___devirtual$(pageUrl, '(#.*|)$', cgguc.getQueryString() + '$1');
      (ed.$clinit_DomGlobal() , $wnd.goog.global.history).pushState(null, null, pageUrl);
    }
    pageUrl = cgguc.getPath();
    if (!jl.equals_Ljava_lang_Object__Z__devirtual$_2(cggswc.currentPage, pageUrl)) {
      this.forEach_0('#spinner', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$28$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$28$Type, []));
      this.ajaxLoad(pageUrl, shouldReplaceMenu);
    }
     else {
      this.scrollToHash();
    }
    cggswc.currentPage = pageUrl;
  }
}
;
_.maybeStyleHomepage = function maybeStyleHomepage(){
  if (this.querySelector_0('#content').classList.contains('home')) {
    (ed.$clinit_DomGlobal() , ed.document_0).documentElement.style.setProperty('scroll-behavior', 'smooth');
    this.styleHomepage();
    this.resizeHandler = cgguc.addResizeHandler(new cggswc.GWTProjectEntryPoint$lambda$32$Type(this));
    this.forEach_0('.next, .pager a', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$33$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$33$Type, [this]));
    this.forEach_0('.pager a', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$35$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$35$Type, [this]));
    if (jsEquals(this.homeScrollHandler, null)) {
      this.homeScrollHandler = new cggswc.GWTProjectEntryPoint$lambda$38$Type(this);
    }
    (ed.$clinit_DomGlobal() , $wnd.goog.global.window).addEventListener('scroll', this.homeScrollHandler);
  }
   else {
    (ed.$clinit_DomGlobal() , $wnd.goog.global.window).removeEventListener('scroll', this.homeScrollHandler);
    if (isNotNull(this.resizeHandler)) {
      this.resizeHandler.removeHandler();
      this.resizeHandler = null;
    }
  }
}
;
_.onModuleLoad = function onModuleLoad(){
  this.bindSearch();
  this.enhancePage();
  this.enhanceMenu();
  this.onPageLoaded(false);
  this.querySelector_0('.holder').style.display = '';
}
;
_.onPageLoaded = function onPageLoaded(menuReplaced){
  var editLink, heading;
  if (menuReplaced) {
    this.enhanceLinks();
  }
  (ed.$clinit_DomGlobal() , ed.document_0).documentElement.style.removeProperty('scroll-behavior');
  this.openMenu();
  this.scrollToHash();
  this.forEach_0('#spinner', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$31$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$31$Type, []));
  editLink = this.querySelector_0('#editLink');
  heading = this.querySelector_0('#content h1');
  if (jsNotEquals(editLink, null) && jsNotEquals(heading, null)) {
    heading.appendChild(editLink);
  }
  this.highLight();
}
;
_.openMenu = function openMenu(){
  var homePage, liParents, mainNavigationHref, mainTitle, matchingLinks, overviewPage, path, selectedItem, subMenuItem;
  this.forEach_0('#submenu > nav > ul > li', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$6$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$6$Type, [this]));
  path = cgguc.getPath();
  matchingLinks = (ed.$clinit_DomGlobal() , ed.document_0).querySelectorAll("#submenu a[href='" + path + "']");
  selectedItem = castToNative(castToNative(ec.from_6(matchingLinks).find(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$8$Type.prototype.onInvoke_3, cggswc.GWTProjectEntryPoint$lambda$8$Type, [])), $wnd.HTMLElement), $wnd.HTMLElement);
  if (jsNotEquals(selectedItem, null)) {
    this.showBranch(selectedItem);
    liParents = this.parentMenuItems(selectedItem);
    subMenuItem = castToNative(jb.$getAt_19(liParents, liParents.length - 1), $wnd.HTMLElement);
    subMenuItem.style.display = '';
    this.forEach_0('#submenu .active', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$9$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$9$Type, [liParents]));
    liParents.push(selectedItem);
    liParents.forEach(makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$10$Type.prototype.onInvoke_0, cggswc.GWTProjectEntryPoint$lambda$10$Type, [selectedItem]));
    mainNavigationHref = subMenuItem.querySelector('a').getAttribute('href');
    mainTitle = subMenuItem.querySelector('a').textContent + ' - ' + selectedItem.textContent;
  }
   else {
    mainNavigationHref = cgguc.getPath();
    mainTitle = this.isOverviewPage(mainNavigationHref)?'Overview':'Project';
  }
  this.forEach_0('#nav a.active', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$11$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$11$Type, []));
  this.forEach_0("#nav a[href='" + mainNavigationHref + "']", makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$12$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$12$Type, []));
  this.querySelector_0('title').textContent = '[GWT] ' + mainTitle;
  homePage = this.isHomePage(path);
  overviewPage = this.isOverviewPage(path);
  this.querySelector_0('#nav').classList.toggle('alwaysOpen', homePage);
  this.querySelector_0('#content').classList.toggle('home', homePage);
  if (jsNotEquals(this.querySelector_0('#submenu'), null)) {
    if (homePage || overviewPage) {
      this.querySelector_0('#submenu').style.display = 'none';
    }
     else {
      this.querySelector_0('#submenu').style.display = '';
    }
  }
  this.maybeStyleHomepage();
}
;
_.parentMenuItems = function parentMenuItems(selectedItem){
  var current, ret;
  ret = new $wnd.Array;
  current = selectedItem;
  while (jsNotEquals(current, null)) {
    if (jl.equalsIgnoreCase_Ljava_lang_String__Z__devirtual$(current.tagName, 'li')) {
      ret.push(castToNative(current, $wnd.HTMLElement));
    }
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2('submenu', current.id)) {
      break;
    }
    current = current.parentElement;
  }
  return ret;
}
;
_.querySelector_0 = function querySelector(selector){
  return castToNative((ed.$clinit_DomGlobal() , ed.document_0).querySelector(selector), $wnd.HTMLElement);
}
;
_.scrollToHash = function scrollToHash(){
  var anchor, hash;
  hash = cgguc.getHash();
  anchor = jl.length__I__devirtual$_0(hash) > 1?(ed.$clinit_DomGlobal() , ed.document_0).querySelector(hash + ", [name='" + jl.substring_I_Ljava_lang_String___devirtual$(hash, 1) + "']"):null;
  if (jsEquals(anchor, null)) {
    cgguc.scrollTo_0(0, 0);
  }
   else {
    anchor.scrollIntoView();
  }
}
;
_.shouldEnhanceLink = function shouldEnhanceLink(link_0){
  return cggrs.$test(cggswc.isSameOriginRexp, link_0.getAttribute('href')) && !parseBoolean(link_0.getAttribute('data-full-load'));
}
;
_.shouldReplaceMenu = function shouldReplaceMenu_0(pageUrl){
  var isHomeOrOverview, path;
  path = cgguc.getPath();
  isHomeOrOverview = this.isHomePage(path) || this.isOverviewPage(path);
  return isHomeOrOverview && (!this.isHomePage(pageUrl) || !this.isOverviewPage(pageUrl));
}
;
_.showBranch = function showBranch(item_0){
  cggcc.get_0().scheduleDeferred(new cggswc.GWTProjectEntryPoint$lambda$26$Type(this, item_0));
}
;
_.slideDown = function slideDown(el, animationTime){
  el.style.display = '';
  this.animateMaxHeight(el, 0, this.estimateHeight(el), animationTime);
}
;
_.slideToggle = function slideToggle(el, animationTime, open_0){
  if (open_0) {
    this.slideDown(el, animationTime);
  }
   else {
    this.slideUp(el, animationTime);
  }
}
;
_.slideUp = function slideUp(el, animationTime){
  this.animateMaxHeight(el, this.estimateHeight(el), 0, animationTime);
}
;
_.styleHomepage = function styleHomepage(){
  var sectionHeight, windowHeight;
  windowHeight = (ed.$clinit_DomGlobal() , $wnd.goog.global.window).innerHeight;
  sectionHeight = castToNative((ed.$clinit_DomGlobal() , ed.document_0).querySelector('#letsbegin'), $wnd.HTMLElement).offsetHeight;
  if (windowHeight > sectionHeight) {
    this.forEach_0('.home section', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$40$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$40$Type, [windowHeight]));
  }
}
;
_.toggleMenu = function toggleMenu(menu){
  var open_0;
  open_0 = menu.classList.toggle('open');
  this.forEachChild(menu, 'ul', makeLambdaFunction(cggswc.GWTProjectEntryPoint$lambda$25$Type.prototype.accept, cggswc.GWTProjectEntryPoint$lambda$25$Type, [this, open_0]));
}
;
cggswc.ANIMATION_TIME = 200;
cggswc.ajaxEnabled = false;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint', 91, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$0methodref$highlightBlock$Type = function $clinit_GWTProjectEntryPoint$0methodref$highlightBlock$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$0methodref$highlightBlock$Type = emptyMethod;
}
;
cggswc.$getClass_1 = function $getClass_1(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$0methodref$highlightBlock$Type = function GWTProjectEntryPoint$0methodref$highlightBlock$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$0methodref$highlightBlock$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(340, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$0methodref$highlightBlock$Type);
_.accept = function accept(element){
  this.$$outer_0.highlightBlock_0(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$1methodref$text$Type = function $clinit_GWTProjectEntryPoint$1methodref$text$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$1methodref$text$Type = emptyMethod;
}
;
cggswc.$getClass_2 = function $getClass_2(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$1methodref$text$Type = function GWTProjectEntryPoint$1methodref$text$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$1methodref$text$Type();
}
;
defineClass(353, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$1methodref$text$Type);
_.onInvoke = function onInvoke(arg0){
  return castToNative(arg0, $wnd.Response).text();
}
;
ed.$clinit_EventListener = function $clinit_EventListener(){
  ed.$clinit_EventListener = emptyMethod;
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$0$Type = function $clinit_GWTProjectEntryPoint$lambda$0$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$0$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$0$Type = function GWTProjectEntryPoint$lambda$0$Type(el_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$0$Type();
  this.el_0 = el_0;
}
;
defineClass(98, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$0$Type);
_.handleEvent = function handleEvent(arg0){
  cggswc.lambda$0(this.el_0, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$0$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$0$Type', 98, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$1$Type = function $clinit_GWTProjectEntryPoint$lambda$1$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$1$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$1$Type = function GWTProjectEntryPoint$lambda$1$Type(el_0, to_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$1$Type();
  this.el_0 = el_0;
  this.to_1 = to_1;
}
;
defineClass(99, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$1$Type);
_.execute_1 = function execute_4(){
  cggswc.lambda$1(this.el_0, this.to_1);
}
;
_.to_1 = 0;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$1$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$1$Type', 99, cggl.Ljava_lang_Object_2_classLit);
ec.$onInvoke_7 = function $onInvoke_7(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$10$Type = function $clinit_GWTProjectEntryPoint$lambda$10$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$10$Type = emptyMethod;
}
;
cggswc.$getClass_3 = function $getClass_3(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.$onInvoke = function $onInvoke(this$static, p0, p1, p2){
  return ec.$onInvoke_7(this$static, p0, p1, p2);
}
;
cggswc.GWTProjectEntryPoint$lambda$10$Type = function GWTProjectEntryPoint$lambda$10$Type(selectedItem_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$10$Type();
  this.selectedItem_0 = selectedItem_0;
}
;
defineClass(344, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$10$Type);
_.onInvoke_0 = function onInvoke_0(arg0, arg1, arg2){
  return cggswc.lambda$10(this.selectedItem_0, castToNative(arg0, $wnd.HTMLElement), arg1, arg2);
}
;
_.onInvoke_1 = function onInvoke_1(p0, p1, p2){
  return cggswc.$onInvoke(this, p0, p1, p2);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$11$Type = function $clinit_GWTProjectEntryPoint$lambda$11$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$11$Type = emptyMethod;
}
;
cggswc.$getClass_4 = function $getClass_4(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$11$Type = function GWTProjectEntryPoint$lambda$11$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$11$Type();
}
;
defineClass(345, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$11$Type);
_.accept = function accept_0(element){
  cggswc.lambda$11(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$12$Type = function $clinit_GWTProjectEntryPoint$lambda$12$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$12$Type = emptyMethod;
}
;
cggswc.$getClass_5 = function $getClass_5(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$12$Type = function GWTProjectEntryPoint$lambda$12$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$12$Type();
}
;
defineClass(346, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$12$Type);
_.accept = function accept_1(element){
  cggswc.lambda$12(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$13$Type = function $clinit_GWTProjectEntryPoint$lambda$13$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$13$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$13$Type = function GWTProjectEntryPoint$lambda$13$Type(nav_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$13$Type();
  this.nav_0 = nav_0;
}
;
defineClass(103, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$13$Type);
_.handleEvent = function handleEvent_0(arg0){
  cggswc.lambda$13(this.nav_0, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$13$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$13$Type', 103, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$14$Type = function $clinit_GWTProjectEntryPoint$lambda$14$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$14$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$14$Type = function GWTProjectEntryPoint$lambda$14$Type(nav_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$14$Type();
  this.nav_0 = nav_0;
}
;
defineClass(104, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$14$Type);
_.handleEvent = function handleEvent_1(arg0){
  cggswc.lambda$14(this.nav_0, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$14$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$14$Type', 104, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$15$Type = function $clinit_GWTProjectEntryPoint$lambda$15$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$15$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$15$Type = function GWTProjectEntryPoint$lambda$15$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$15$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(105, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$15$Type);
_.handleEvent = function handleEvent_2(arg0){
  this.$$outer_0.lambda$15(arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$15$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$15$Type', 105, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$16$Type = function $clinit_GWTProjectEntryPoint$lambda$16$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$16$Type = emptyMethod;
}
;
cggswc.$getClass_6 = function $getClass_6(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$16$Type = function GWTProjectEntryPoint$lambda$16$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$16$Type();
}
;
defineClass(362, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$16$Type);
_.accept = function accept_2(element){
  cggswc.lambda$16(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$17$Type = function $clinit_GWTProjectEntryPoint$lambda$17$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$17$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$17$Type = function GWTProjectEntryPoint$lambda$17$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$17$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(106, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$17$Type);
_.handleEvent = function handleEvent_3(arg0){
  this.$$outer_0.lambda$17(arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$17$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$17$Type', 106, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$18$Type = function $clinit_GWTProjectEntryPoint$lambda$18$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$18$Type = emptyMethod;
}
;
cggswc.$getClass_7 = function $getClass_7(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$18$Type = function GWTProjectEntryPoint$lambda$18$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$18$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(347, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$18$Type);
_.accept = function accept_3(element){
  this.$$outer_0.lambda$18(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$19$Type = function $clinit_GWTProjectEntryPoint$lambda$19$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$19$Type = emptyMethod;
}
;
cggswc.$getClass_8 = function $getClass_8(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$19$Type = function GWTProjectEntryPoint$lambda$19$Type(parentItems_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$19$Type();
  this.parentItems_0 = parentItems_0;
}
;
defineClass(348, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$19$Type);
_.accept = function accept_4(element){
  cggswc.lambda$19(this.parentItems_0, element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$20$Type = function $clinit_GWTProjectEntryPoint$lambda$20$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$20$Type = emptyMethod;
}
;
cggswc.$getClass_9 = function $getClass_9(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$20$Type = function GWTProjectEntryPoint$lambda$20$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$20$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(349, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$20$Type);
_.accept = function accept_5(element){
  this.$$outer_0.lambda$20(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$21$Type = function $clinit_GWTProjectEntryPoint$lambda$21$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$21$Type = emptyMethod;
}
;
cggswc.$getClass_10 = function $getClass_10(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.$onInvoke_0 = function $onInvoke_0(this$static, p0, p1, p2){
  return ec.$onInvoke_7(this$static, p0, p1, p2);
}
;
cggswc.GWTProjectEntryPoint$lambda$21$Type = function GWTProjectEntryPoint$lambda$21$Type($$outer_0, spanOrLocalLink_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$21$Type();
  this.$$outer_0 = $$outer_0;
  this.spanOrLocalLink_1 = spanOrLocalLink_1;
}
;
defineClass(350, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$21$Type);
_.onInvoke_0 = function onInvoke_2(arg0, arg1, arg2){
  return this.$$outer_0.lambda$21(this.spanOrLocalLink_1, castToNative(arg0, $wnd.HTMLElement), arg1, arg2);
}
;
_.onInvoke_1 = function onInvoke_3(p0, p1, p2){
  return cggswc.$onInvoke_0(this, p0, p1, p2);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$22$Type = function $clinit_GWTProjectEntryPoint$lambda$22$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$22$Type = emptyMethod;
}
;
cggswc.$getClass_11 = function $getClass_11(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$22$Type = function GWTProjectEntryPoint$lambda$22$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$22$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(363, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$22$Type);
_.accept = function accept_6(element){
  this.$$outer_0.lambda$22(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$23$Type = function $clinit_GWTProjectEntryPoint$lambda$23$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$23$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$23$Type = function GWTProjectEntryPoint$lambda$23$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$23$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(110, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$23$Type);
_.handleEvent = function handleEvent_4(arg0){
  this.$$outer_0.lambda$23(arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$23$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$23$Type', 110, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$24$Type = function $clinit_GWTProjectEntryPoint$lambda$24$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$24$Type = emptyMethod;
}
;
cggswc.$getClass_12 = function $getClass_12(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$24$Type = function GWTProjectEntryPoint$lambda$24$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$24$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(364, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$24$Type);
_.accept = function accept_7(element){
  this.$$outer_0.lambda$24(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$25$Type = function $clinit_GWTProjectEntryPoint$lambda$25$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$25$Type = emptyMethod;
}
;
cggswc.$getClass_13 = function $getClass_13(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$25$Type = function GWTProjectEntryPoint$lambda$25$Type($$outer_0, open_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$25$Type();
  this.$$outer_0 = $$outer_0;
  this.open_1 = open_1;
}
;
defineClass(351, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$25$Type);
_.accept = function accept_8(element){
  this.$$outer_0.lambda$25(this.open_1, element);
}
;
_.open_1 = false;
cggswc.$clinit_GWTProjectEntryPoint$lambda$26$Type = function $clinit_GWTProjectEntryPoint$lambda$26$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$26$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$26$Type = function GWTProjectEntryPoint$lambda$26$Type($$outer_0, item_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$26$Type();
  this.$$outer_0 = $$outer_0;
  this.item_1 = item_1;
}
;
defineClass(107, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$26$Type);
_.execute_1 = function execute_5(){
  this.$$outer_0.lambda$26(this.item_1);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$26$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$26$Type', 107, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$27$Type = function $clinit_GWTProjectEntryPoint$lambda$27$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$27$Type = emptyMethod;
}
;
cggswc.$getClass_14 = function $getClass_14(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$27$Type = function GWTProjectEntryPoint$lambda$27$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$27$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(365, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$27$Type);
_.accept = function accept_9(element){
  this.$$outer_0.lambda$27(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$28$Type = function $clinit_GWTProjectEntryPoint$lambda$28$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$28$Type = emptyMethod;
}
;
cggswc.$getClass_15 = function $getClass_15(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$28$Type = function GWTProjectEntryPoint$lambda$28$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$28$Type();
}
;
defineClass(352, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$28$Type);
_.accept = function accept_10(element){
  cggswc.lambda$28(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$3$Type = function $clinit_GWTProjectEntryPoint$lambda$3$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$3$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$3$Type = function GWTProjectEntryPoint$lambda$3$Type($$outer_0, form_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$3$Type();
  this.$$outer_0 = $$outer_0;
  this.form_1 = form_1;
}
;
defineClass(100, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$3$Type);
_.handleEvent = function handleEvent_5(arg0){
  this.$$outer_0.lambda$3(this.form_1, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$3$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$3$Type', 100, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$30$Type = function $clinit_GWTProjectEntryPoint$lambda$30$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$30$Type = emptyMethod;
}
;
cggswc.$getClass_16 = function $getClass_16(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$30$Type = function GWTProjectEntryPoint$lambda$30$Type($$outer_0, shouldReplaceMenu_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$30$Type();
  this.$$outer_0 = $$outer_0;
  this.shouldReplaceMenu_1 = shouldReplaceMenu_1;
}
;
defineClass(354, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$30$Type);
_.onInvoke = function onInvoke_4(arg0){
  return this.$$outer_0.lambda$30(this.shouldReplaceMenu_1, castToString(arg0));
}
;
_.shouldReplaceMenu_1 = false;
cggswc.$clinit_GWTProjectEntryPoint$lambda$31$Type = function $clinit_GWTProjectEntryPoint$lambda$31$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$31$Type = emptyMethod;
}
;
cggswc.$getClass_17 = function $getClass_17(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$31$Type = function GWTProjectEntryPoint$lambda$31$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$31$Type();
}
;
defineClass(355, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$31$Type);
_.accept = function accept_11(element){
  cggswc.lambda$31(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$32$Type = function $clinit_GWTProjectEntryPoint$lambda$32$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$32$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$32$Type = function GWTProjectEntryPoint$lambda$32$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$32$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(108, 1, {212:1, 213:1, 1:1}, cggswc.GWTProjectEntryPoint$lambda$32$Type);
_.onResize = function onResize(arg0){
  this.$$outer_0.lambda$32(arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$32$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$32$Type', 108, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$33$Type = function $clinit_GWTProjectEntryPoint$lambda$33$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$33$Type = emptyMethod;
}
;
cggswc.$getClass_18 = function $getClass_18(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$33$Type = function GWTProjectEntryPoint$lambda$33$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$33$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(356, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$33$Type);
_.accept = function accept_12(element){
  this.$$outer_0.lambda$33(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$34$Type = function $clinit_GWTProjectEntryPoint$lambda$34$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$34$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$34$Type = function GWTProjectEntryPoint$lambda$34$Type($$outer_0, element_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$34$Type();
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}
;
defineClass(111, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$34$Type);
_.handleEvent = function handleEvent_6(arg0){
  this.$$outer_0.lambda$34(this.element_1, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$34$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$34$Type', 111, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$35$Type = function $clinit_GWTProjectEntryPoint$lambda$35$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$35$Type = emptyMethod;
}
;
cggswc.$getClass_19 = function $getClass_19(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$35$Type = function GWTProjectEntryPoint$lambda$35$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$35$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(357, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$35$Type);
_.accept = function accept_13(element){
  this.$$outer_0.lambda$35(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$36$Type = function $clinit_GWTProjectEntryPoint$lambda$36$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$36$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$36$Type = function GWTProjectEntryPoint$lambda$36$Type($$outer_0, element_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$36$Type();
  this.$$outer_0 = $$outer_0;
  this.element_1 = element_1;
}
;
defineClass(112, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$36$Type);
_.handleEvent = function handleEvent_7(arg0){
  this.$$outer_0.lambda$36(this.element_1, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$36$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$36$Type', 112, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$37$Type = function $clinit_GWTProjectEntryPoint$lambda$37$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$37$Type = emptyMethod;
}
;
cggswc.$getClass_20 = function $getClass_20(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$37$Type = function GWTProjectEntryPoint$lambda$37$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$37$Type();
}
;
defineClass(366, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$37$Type);
_.accept = function accept_14(element){
  cggswc.lambda$37(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$38$Type = function $clinit_GWTProjectEntryPoint$lambda$38$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$38$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$38$Type = function GWTProjectEntryPoint$lambda$38$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$38$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(109, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$38$Type);
_.handleEvent = function handleEvent_8(arg0){
  this.$$outer_0.lambda$38(arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$38$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$38$Type', 109, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$39$Type = function $clinit_GWTProjectEntryPoint$lambda$39$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$39$Type = emptyMethod;
}
;
cggswc.$getClass_21 = function $getClass_21(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$39$Type = function GWTProjectEntryPoint$lambda$39$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$39$Type();
}
;
defineClass(367, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$39$Type);
_.accept = function accept_15(element){
  cggswc.lambda$39(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$4$Type = function $clinit_GWTProjectEntryPoint$lambda$4$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$4$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$4$Type = function GWTProjectEntryPoint$lambda$4$Type(nav_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$4$Type();
  this.nav_0 = nav_0;
}
;
defineClass(101, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$4$Type);
_.handleEvent = function handleEvent_9(arg0){
  cggswc.lambda$4(this.nav_0, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$4$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$4$Type', 101, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$40$Type = function $clinit_GWTProjectEntryPoint$lambda$40$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$40$Type = emptyMethod;
}
;
cggswc.$getClass_22 = function $getClass_22(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$40$Type = function GWTProjectEntryPoint$lambda$40$Type(windowHeight_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$40$Type();
  this.windowHeight_0 = windowHeight_0;
}
;
defineClass(358, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$40$Type);
_.accept = function accept_16(element){
  cggswc.lambda$40(this.windowHeight_0, element);
}
;
_.windowHeight_0 = 0;
cggswc.$clinit_GWTProjectEntryPoint$lambda$41$Type = function $clinit_GWTProjectEntryPoint$lambda$41$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$41$Type = emptyMethod;
}
;
cggswc.$getClass_23 = function $getClass_23(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$41$Type = function GWTProjectEntryPoint$lambda$41$Type(consumer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$41$Type();
  this.consumer_0 = consumer_0;
}
;
defineClass(359, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$41$Type);
_.onInvoke_2 = function onInvoke_5(arg0, arg1, arg2){
  return cggswc.lambda$41(this.consumer_0, castToNative(arg0, $wnd.Element), arg1, arg2);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$42$Type = function $clinit_GWTProjectEntryPoint$lambda$42$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$42$Type = emptyMethod;
}
;
cggswc.$getClass_24 = function $getClass_24(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$42$Type = function GWTProjectEntryPoint$lambda$42$Type(selector_0, consumer_1){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$42$Type();
  this.selector_0 = selector_0;
  this.consumer_1 = consumer_1;
}
;
defineClass(360, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$42$Type);
_.onInvoke_2 = function onInvoke_6(arg0, arg1, arg2){
  return cggswc.lambda$42(this.selector_0, this.consumer_1, castToNative(arg0, $wnd.Node), arg1, arg2);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$5$Type = function $clinit_GWTProjectEntryPoint$lambda$5$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$5$Type = emptyMethod;
}
;
cggswc.GWTProjectEntryPoint$lambda$5$Type = function GWTProjectEntryPoint$lambda$5$Type(nav_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$5$Type();
  this.nav_0 = nav_0;
}
;
defineClass(102, 1, {1:1}, cggswc.GWTProjectEntryPoint$lambda$5$Type);
_.handleEvent = function handleEvent_10(arg0){
  cggswc.lambda$5(this.nav_0, arg0);
}
;
cggl.Lcom_google_gwt_site_webapp_client_GWTProjectEntryPoint$lambda$5$Type_2_classLit = createForClass('com.google.gwt.site.webapp.client', 'GWTProjectEntryPoint/lambda$5$Type', 102, cggl.Ljava_lang_Object_2_classLit);
cggswc.$clinit_GWTProjectEntryPoint$lambda$6$Type = function $clinit_GWTProjectEntryPoint$lambda$6$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$6$Type = emptyMethod;
}
;
cggswc.$getClass_25 = function $getClass_25(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$6$Type = function GWTProjectEntryPoint$lambda$6$Type($$outer_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$6$Type();
  this.$$outer_0 = $$outer_0;
}
;
defineClass(341, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$6$Type);
_.accept = function accept_17(element){
  this.$$outer_0.lambda$6(element);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$7$Type = function $clinit_GWTProjectEntryPoint$lambda$7$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$7$Type = emptyMethod;
}
;
cggswc.$getClass_26 = function $getClass_26(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$7$Type = function GWTProjectEntryPoint$lambda$7$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$7$Type();
}
;
defineClass(361, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$7$Type);
_.accept = function accept_18(element){
  cggswc.lambda$7(element);
}
;
ec.$onInvoke_5 = function $onInvoke_5(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$8$Type = function $clinit_GWTProjectEntryPoint$lambda$8$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$8$Type = emptyMethod;
}
;
cggswc.$getClass_27 = function $getClass_27(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.$onInvoke_1 = function $onInvoke_1(this$static, p0, p1, p2){
  return ec.$onInvoke_5(this$static, p0, p1, p2);
}
;
cggswc.GWTProjectEntryPoint$lambda$8$Type = function GWTProjectEntryPoint$lambda$8$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$8$Type();
}
;
defineClass(342, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$8$Type);
_.onInvoke_3 = function onInvoke_7(arg0, arg1, arg2){
  return cggswc.lambda$8(arg0, arg1, arg2);
}
;
_.onInvoke_4 = function onInvoke_8(p0, p1, p2){
  return cggswc.$onInvoke_1(this, p0, p1, p2);
}
;
cggswc.$clinit_GWTProjectEntryPoint$lambda$9$Type = function $clinit_GWTProjectEntryPoint$lambda$9$Type(){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$9$Type = emptyMethod;
}
;
cggswc.$getClass_28 = function $getClass_28(this$static){
  return cggl.Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}
;
cggswc.GWTProjectEntryPoint$lambda$9$Type = function GWTProjectEntryPoint$lambda$9$Type(liParents_0){
  cggswc.$clinit_GWTProjectEntryPoint$lambda$9$Type();
  this.liParents_0 = liParents_0;
}
;
defineClass(343, $wnd.Function, {1:1}, cggswc.GWTProjectEntryPoint$lambda$9$Type);
_.accept = function accept_19(element){
  cggswc.lambda$9(this.liParents_0, element);
}
;
cggswch.$clinit_JsHighlight = function $clinit_JsHighlight(){
  cggswch.$clinit_JsHighlight = emptyMethod;
  jl.$clinit_Object();
  cggswch.INSTANCE_0 = castTo(new cggswch.JsHighlight, 64);
}
;
cggswch.JsHighlight = function JsHighlight(){
  Object_0.call(this);
  this.$init_63();
}
;
defineClass(64, 1, {64:1, 1:1}, cggswch.JsHighlight);
_.$init_63 = function $init_63(){
}
;
_.highlightBlock_0 = function highlightBlock(e){
  e && ($wnd.hljs && $wnd.hljs.highlightBlock(e));
}
;
_.initialize = function initialize(){
  if (!cggswch.initialized) {
    cggswch.initialized = true;
    cggcc.fromString((cggswch.$clinit_JsHighlight$CssHighlight() , cggswch.INSTANCE_1).highlight().getText()).inject();
  }
}
;
cggswch.initialized = false;
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight', 64, cggl.Ljava_lang_Object_2_classLit);
cggswch.$clinit_JsHighlight$CssHighlight = function $clinit_JsHighlight$CssHighlight(){
  cggswch.$clinit_JsHighlight$CssHighlight = emptyMethod;
  cggswch.INSTANCE_1 = castTo(new cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator, 337);
}
;
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight$CssHighlight_2_classLit = createForInterface('com.google.gwt.site.webapp.client.highlight', 'JsHighlight/CssHighlight');
cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator = function $clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator = emptyMethod;
  jl.$clinit_Object();
  cggswch._instance0 = new cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator;
}
;
cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator = function JsHighlight_CssHighlight_default_InlineClientBundleGenerator(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator();
  Object_0.call(this);
  this.$init_64();
}
;
defineClass(86, 1, {337:1, 1:1}, cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator);
_.$init_64 = function $init_64(){
}
;
_.highlight = function highlight_0(){
  return cggswch.get_2();
}
;
_.highlightInitializer = function highlightInitializer(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator();
  cggswch.highlight = new cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1(this);
}
;
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_1CssHighlight_1default_1InlineClientBundleGenerator_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight_CssHighlight_default_InlineClientBundleGenerator', 86, cggl.Ljava_lang_Object_2_classLit);
cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1 = function $clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1 = function JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1(this$0){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_65();
}
;
defineClass(167, 1, {1:1}, cggswch.JsHighlight_CssHighlight_default_InlineClientBundleGenerator$1);
_.$init_65 = function $init_65(){
}
;
_.getName = function getName_0(){
  return 'highlight';
}
;
_.getText = function getText(){
  var builder;
  builder = new jl.StringBuilder;
  builder.append_1("/**\r\n * This is a reduced version of highlight for gwt site supporting:\r\n *   java, javascript, html, xml, css, json, bash.\r\n *\r\n * Produced from https://github.com/isagalaev/highlight.js.git\r\n *   node tools/build.js -n java javascript html xml bash css json\r\n */\r\n\r\n(function(factory) {\r\n\r\n  // Setup highlight.js for different environments. First is Node.js or\r\n  // CommonJS.\r\n  if(typeof exports !== 'undefined') {\r\n    factory(exports);\r\n  } else {\r\n    // Export hljs globally even when using AMD for cases when this script\r\n    // is loaded with others that may still expect a global hljs.\r\n    window.hljs = factory({});\r\n\r\n    // Finally register the global hljs with AMD.\r\n    if(typeof define === 'function' && define.amd) {\r\n      define('hljs', [], function() {\r\n        return window.hljs;\r\n      });\r\n    }\r\n  }\r\n\r\n}(function(hljs) {\r\n\r\n  /* Utility functions */\r\n\r\n  function escape(value) {\r\n    return value.replace(/&/gm, '&amp;').replace(/<\/gm, '&lt;').replace(/>/gm, '&gt;');\r\n  }\r\n\r\n  function tag(node) {\r\n    return node.nodeName.toLowerCase();\r\n  }\r\n\r\n  function testRe(re, lexeme) {\r\n    var match = re && re.exec(lexeme);\r\n    return match && match.index == 0;\r\n  }\r\n\r\n  function isNotHighlighted(language) {\r\n    return /no-?highlight|plain|text/.test(language);\r\n  }\r\n\r\n  function blockLanguage(block) {\r\n    var i, match, length,\r\n        classes = block.className + ' ';\r\n\r\n    classes += block.parentNode ? block.parentNode.className : '';\r\n\r\n    // language-* takes precedence over non-prefixed class names and\r\n    match = /\\blang(?:uage)?-([\\w-]+)\\b/.exec(classes);\r\n    if (match) {\r\n      return getLanguage(match[1]) ? match[1] : 'no-highlight';\r\n    }\r\n\r\n    classes = classes.split(/\\s+/);\r\n    for(i = 0, length = classes.length; i < length; i++) {\r\n      if(getLanguage(classes[i]) || isNotHighlighted(classes[i])) {\r\n        return classes[i];\r\n      }\r\n    }\r\n\r\n  }\r\n\r\n  function inherit(parent, obj) {\r\n    var result = {}, key;\r\n    for (key in parent)\r\n      result[key] = parent[key];\r\n    if (obj)\r\n      for (key in obj)\r\n        result[key] = obj[key];\r\n    return result;\r\n  }\r\n\r\n  /* Stream merging */\r\n\r\n  function nodeStream(node) {\r\n    var result = [];\r\n    (function _nodeStream(node, offset) {\r\n      for (var child = node.firstChild; child; child = child.nextSibling) {\r\n        if (child.nodeType == 3)\r\n          offset += child.nodeValue.length;\r\n        else if (child.nodeType == 1) {\r\n          result.push({\r\n            event: 'start',\r\n            offset: offset,\r\n            node: child\r\n          });\r\n          offset = _nodeStream(child, offset);\r\n          // Prevent void elements from having an end tag that would actually\r\n          // double them in the output. There are more void elements in HTML\r\n          // but we list only those realistically expected in code display.\r\n          if (!tag(child).match(/br|hr|img|input/)) {\r\n            result.push({\r\n              event: 'stop',\r\n              offset: offset,\r\n              node: child\r\n            });\r\n          }\r\n        }\r\n      }\r\n      return offset;\r\n    })(node, 0);\r\n    return result;\r\n  }\r\n\r\n  function mergeStreams(original, highlighted, value) {\r\n    var processed = 0;\r\n    var result = '';\r\n    var nodeStack = [];\r\n\r\n    function selectStream() {\r\n      if (!original.length || !highlighted.length) {\r\n        return original.length ? original : highlighted;\r\n      }\r\n      if (original[0].offset != highlighted[0].offset) {\r\n        return (original[0].offset < highlighted[0].offset) ? original : highlighted;\r\n      }\r\n\r\n      /*\r\n      To avoid starting the stream just before it should stop the order is\r\n      ensured that original always starts first and closes last:\r\n\r\n      if (event1 == 'start' && event2 == 'start')\r\n        return original;\r\n      if (event1 == 'start' && event2 == 'stop')\r\n        return highlighted;\r\n      if (event1 == 'stop' && event2 == 'start')\r\n        return original;\r\n      if (event1 == 'stop' && event2 == 'stop')\r\n        return highlighted;\r\n\r\n      ... which is collapsed to:\r\n      */\r\n      return highlighted[0].event == 'start' ? original : highlighted;\r\n    }\r\n\r\n    function open(node) {\r\n      function attr_str(a) {return ' ' + a.nodeName + '=\"' + escape(a.value) + '\"';}\r\n      result += '<' + tag(node) + Array.prototype.map.call(node.attributes, attr_str).join('') + '>';\r\n    }\r\n\r\n    function close(node) {\r\n      result += '<\/' + tag(node) + '>';\r\n    }\r\n\r\n    function render(event) {\r\n      (event.event == 'start' ? open : close)(event.node);\r\n    }\r\n\r\n    while (original.length || highlighted.length) {\r\n      var stream = selectStream();\r\n      result += escape(value.substr(processed, stream[0].offset - processed));\r\n      processed = stream[0].offset;\r\n      if (stream == original) {\r\n        /*\r\n        On any opening or closing tag of the original markup we first close\r\n        the entire highlighted node stack, then render the original tag along\r\n        with all the following original tags at the same offset and then\r\n        reopen all the tags on the highlighted stack.\r\n        */\r\n        nodeStack.reverse().forEach(close);\r\n        do {\r\n          render(stream.splice(0, 1)[0]);\r\n          stream = selectStream();\r\n        } while (stream == original && stream.length && stream[0].offset == processed);\r\n        nodeStack.reverse().forEach(open);\r\n      } else {\r\n        if (stream[0].event == 'start') {\r\n          nodeStack.push(stream[0].node);\r\n        } else {\r\n          nodeStack.pop();\r\n        }\r\n        render(stream.splice(0, 1)[0]);\r\n      }\r\n    }\r\n    return result + escape(value.substr(processed));\r\n  }\r\n\r\n  /* Initialization */\r\n\r\n  function compileLanguage(language) {\r\n\r\n    function reStr(re) {\r\n        return (re && re.source) || re;\r\n    }\r\n\r\n    function langRe(value, global) {\r\n      return new RegExp(\r\n        reStr(value),\r\n        'm' + (language.case_insensitive ? 'i' : '') + (global ? 'g' : '')\r\n      );\r\n    }\r\n\r\n    function compileMode(mode, parent) {\r\n      if (mode.compiled)\r\n        return;\r\n      mode.compiled = true;\r\n\r\n      mode.keywords = mode.keywords || mode.beginKeywords;\r\n      if (mode.keywords) {\r\n        var compiled_keywords = {};\r\n\r\n        var flatten = function(className, str) {\r\n          if (language.case_insensitive) {\r\n            str = str.toLowerCase();\r\n          }\r\n          str.split(' ').forEach(function(kw) {\r\n            var pair = kw.split('|');\r\n            compiled_keywords[pair[0]] = [className, pair[1] ? Number(pair[1]) : 1];\r\n          });\r\n        };\r\n\r\n        if (typeof mode.keywords == 'string') { // string\r\n          flatten('keyword', mode.keywords);\r\n        } else {\r\n          Object.keys(mode.keywords).forEach(function (className) {\r\n            flatten(className, mode.keywords[className]);\r\n          });\r\n        }\r\n        mode.keywords = compiled_keywords;\r\n      }\r\n      mode.lexemesRe = langRe(mode.lexemes || /\\b\\w+\\b/, true);\r\n\r\n      if (parent) {\r\n        if (mode.beginKeywords) {\r\n          mode.begin = '\\\\b(' + mode.beginKeywords.split(' ').join('|') + ')\\\\b';\r\n        }\r\n        if (!mode.begin)\r\n          mode.begin = /\\B|\\b/;\r\n        mode.beginRe = langRe(mode.begin);\r\n        if (!mode.end && !mode.endsWithParent)\r\n          mode.end = /\\B|\\b/;\r\n        if (mode.end)\r\n          mode.endRe = langRe(mode.end);\r\n        mode.terminator_end = reStr(mode.end) || '';\r\n        if (mode.endsWithParent && parent.terminator_end)\r\n          mode.terminator_end += (mode.end ? '|' : '') + parent.terminator_end;\r\n      }\r\n      if (mode.illegal)\r\n        mode.illegalRe = langRe(mode.illegal);\r\n      if (mode.relevance === undefined)\r\n        mode.relevance = 1;\r\n      if (!mode.contains) {\r\n        mode.contains = [];\r\n      }\r\n      var expanded_contains = [];\r\n      mode.contains.forEach(function(c) {\r\n        if (c.variants) {\r\n          c.variants.forEach(function(v) {expanded_contains.push(inherit(c, v));});\r\n        } else {\r\n          expanded_contains.push(c == 'self' ? mode : c);\r\n        }\r\n      });\r\n      mode.contains = expanded_contains;\r\n      mode.contains.forEach(function(c) {compileMode(c, mode);});\r\n\r\n      if (mode.starts) {\r\n        compileMode(mode.starts, parent);\r\n      }\r\n\r\n      var terminators =\r\n        mode.contains.map(function(c) {\r\n          return c.beginKeywords ? '\\\\.?(' + c.begin + ')\\\\.?' : c.begin;\r\n        })\r\n        .concat([mode.terminator_end, mode.illegal])\r\n        .map(reStr)\r\n        .filter(Boolean);\r\n      mode.terminators = terminators.length ? langRe(terminators.join('|'), true) : {exec: function(/*s*/) {return null;}};\r\n    }\r\n\r\n    compileMode(language);\r\n  }\r\n\r\n  /*\r\n  Core highlighting function. Accepts a language name, or an alias, and a\r\n  string with the code to highlight. Returns an object with the following\r\n  properties:\r\n\r\n  - relevance (int)\r\n  - value (an HTML string with highlighting markup)\r\n\r\n  */\r\n  function highlight(name, value, ignore_illegals, continuation) {\r\n\r\n    function subMode(lexeme, mode) {\r\n      for (var i = 0; i < mode.contains.length; i++) {\r\n        if (testRe(mode.contains[i].beginRe, lexeme)) {\r\n          return mode.contains[i];\r\n        }\r\n      }\r\n    }\r\n\r\n    function endOfMode(mode, lexeme) {\r\n      if (testRe(mode.endRe, lexeme)) {\r\n        while (mode.endsParent && mode.parent) {\r\n          mode = mode.parent;\r\n        }\r\n        return mode;\r\n      }\r\n      if (mode.endsWithParent) {\r\n        return endOfMode(mode.parent, lexeme);\r\n      }\r\n    }\r\n\r\n    function isIllegal(lexeme, mode) {\r\n      return !ignore_illegals && testRe(mode.illegalRe, lexeme);\r\n    }\r\n\r\n    function keywordMatch(mode, match) {\r\n      var match_str = language.case_insensitive ? match[0].toLowerCase() : match[0];\r\n      return mode.keywords.hasOwnProperty(match_str) && mode.keywords[match_str];\r\n    }\r\n\r\n    function buildSpan(classname, insideSpan, leaveOpen, noPrefix) {\r\n      var classPrefix = noPrefix ? '' : options.classPrefix,\r\n          openSpan    = '<span class=\"' + classPrefix,\r\n          closeSpan   = leaveOpen ? '' : '<\/span>';\r\n\r\n      openSpan += classname + '\">';\r\n\r\n      return openSpan + insideSpan + closeSpan;\r\n    }\r\n\r\n    function processKeywords() {\r\n      if (!top.keywords)\r\n        return escape(mode_buffer);\r\n      var result = '';\r\n      var last_index = 0;\r\n      top.lexemesRe.lastIndex = 0;\r\n      var match = top.lexemesRe.exec(mode_buffer);\r\n      while (match) {\r\n        result += escape(mode_buffer.substr(last_index, match.index - last_index));\r\n        var keyword_match = keywordMatch(top, match);\r\n        if (keyword_match) {\r\n          relevance += keyword_match[1];\r\n          result += buildSpan(keyword_match[0], escape(match[0]));\r\n        } else {\r\n          result += escape(match[0]);\r\n        }\r\n        last_index = top.lexemesRe.lastIndex;\r\n        match = top.lexemesRe.exec(mode_buffer);\r\n      }\r\n      return result + escape(mode_buffer.substr(last_index));\r\n    }\r\n\r\n    function processSubLanguage() {\r\n      var explicit = typeof top.subLanguage == 'string';\r\n      if (explicit && !languages[top.subLanguage]) {\r\n        return escape(mode_buffer);\r\n      }\r\n\r\n      var result = explicit ?\r\n                   highlight(top.subLanguage, mode_buffer, true, continuations[top.subLanguage]) :\r\n                   highlightAuto(mode_buffer, top.subLanguage.length ? top.subLanguage : undefined);\r\n\r\n      // Counting embedded language score towards the host language may be disabled\r\n      // with zeroing the containing mode relevance. Usecase in point is Markdown that\r\n      // allows XML everywhere and makes every XML snippet to have a much larger Markdown\r\n      // score.\r\n      if (top.relevance > 0) {\r\n        relevance += result.relevance;\r\n      }\r\n      if (explicit) {\r\n        continuations[top.subLanguage] = result.top;\r\n      }\r\n      return buildSpan(result.language, result.value, false, true);\r\n    }\r\n\r\n    function processBuffer() {\r\n      return top.subLanguage !== undefined ? processSubLanguage() : processKeywords();\r\n    }\r\n\r\n    function startNewMode(mode, lexeme) {\r\n      var markup = mode.className? buildSpan(mode.className, '', true): '';\r\n      if (mode.returnBegin) {\r\n        result += markup;\r\n        mode_buffer = '';\r\n      } else if (mode.excludeBegin) {\r\n        result += escape(lexeme) + markup;\r\n        mode_buffer = '';\r\n      } else {\r\n        result += markup;\r\n        mode_buffer = lexeme;\r\n      }\r\n      top = Object.create(mode, {parent: {value: top}});\r\n    }\r\n\r\n    function processLexeme(buffer, lexeme) {\r\n\r\n      mode_buffer += buffer;\r\n      if (lexeme === undefined) {\r\n        result += processBuffer();\r\n        return 0;\r\n      }\r\n\r\n      var new_mode = subMode(lexeme, top);\r\n      if (new_mode) {\r\n        result += processBuffer();\r\n        startNewMode(new_mode, lexeme);\r\n        return new_mode.returnBegin ? 0 : lexeme.length;\r\n      }\r\n\r\n      var end_mode = endOfMode(top, lexeme);\r\n      if (end_mode) {\r\n        var origin = top;\r\n        if (!(origin.returnEnd || origin.excludeEnd)) {\r\n          mode_buffer += lexeme;\r\n        }\r\n        result += processBuffer();\r\n        do {\r\n          if (top.className) {\r\n            result += '<\/span>';\r\n          }\r\n          relevance += top.relevance;\r\n          top = top.parent;\r\n        } while (top != end_mode.parent);\r\n        if (origin.excludeEnd) {\r\n          result += escape(lexeme);\r\n        }\r\n        mode_buffer = '';\r\n        if (end_mode.starts) {\r\n          startNewMode(end_mode.starts, '');\r\n        }\r\n        return origin.returnEnd ? 0 : lexeme.length;\r\n      }\r\n\r\n      if (isIllegal(lexeme, top))\r\n        throw new Error('Illegal lexeme \"' + lexeme + '\" for mode \"' + (top.className || '<unnamed>') + '\"');\r\n\r\n      /*\r\n      Parser should not reach this point as all types of lexemes should be caught\r\n      earlier, but if it does due to some bug make sure it advances at least one\r\n      character forward to prevent infinite looping.\r\n      */\r\n      mode_buffer += lexeme;\r\n      return lexeme.length || 1;\r\n    }\r\n\r\n    var language = getLanguage(name);\r\n    if (!language) {\r\n      throw new Error('Unknown language: \"' + name + '\"');\r\n    }\r\n\r\n    compileLanguage(language);\r\n    var top = continuation || language;\r\n    var continuations = {}; // keep continuations for sub-languages\r\n    var result = '', current;\r\n    for(current = top; current != language; current = current.parent) {\r\n      if (current.className) {\r\n        result = buildSpan(current.className, '', true) + result;\r\n      }\r\n    }\r\n    var mode_buffer = '';\r\n    var relevance = 0;\r\n    try {\r\n      var match, count, index = 0;\r\n      while (true) {\r\n        top.terminators.lastIndex = index;\r\n        match = top.terminators.exec(value);\r\n        if (!match)\r\n          break;\r\n        count = processLexeme(value.substr(index, match.index - index), match[0]);\r\n        index = match.index + count;\r\n      }\r\n      processLexeme(value.substr(index));\r\n      for(current = top; current.parent; current = current.parent) { // close dangling modes\r\n        if (current.className) {\r\n          result += '<\/span>';\r\n        }\r\n      }\r\n      return {\r\n        relevance: relevance,\r\n        value: result,\r\n        language: name,\r\n        top: top\r\n      };\r\n    } catch (e) {\r\n      if (e.message.indexOf('Illegal') != -1) {\r\n        return {\r\n          relevance: 0,\r\n          value: escape(value)\r\n        };\r\n      } else {\r\n        throw e;\r\n      }\r\n    }\r\n  }\r\n\r\n  /*\r\n  Highlighting with language detection. Accepts a string with the code to\r\n  highlight. Returns an object with the following properties:\r\n\r\n  - language (detected language)\r\n  - relevance (int)\r\n  - value (an HTML string with highlighting markup)\r\n  - second_best (object with the same structure for second-best heuristically\r\n    detected language, may be absent)\r\n\r\n  */\r\n  function highlightAuto(text, languageSubset) {\r\n    languageSubset = languageSubset || options.languages || Object.keys(languages);\r\n    var result = {\r\n      relevance: 0,\r\n      value: escape(text)\r\n    };\r\n    var second_best = result;\r\n    languageSubset.forEach(function(name) {\r\n      if (!getLanguage(name)) {\r\n        return;\r\n      }\r\n      var current = highlight(name, text, false);\r\n      current.language = name;\r\n      if (current.relevance > secon");
  builder.append_1("d_best.relevance) {\r\n        second_best = current;\r\n      }\r\n      if (current.relevance > result.relevance) {\r\n        second_best = result;\r\n        result = current;\r\n      }\r\n    });\r\n    if (second_best.language) {\r\n      result.second_best = second_best;\r\n    }\r\n    return result;\r\n  }\r\n\r\n  /*\r\n  Post-processing of the highlighted markup:\r\n\r\n  - replace TABs with something more useful\r\n  - replace real line-breaks with '<br>' for non-pre containers\r\n\r\n  */\r\n  function fixMarkup(value) {\r\n    if (options.tabReplace) {\r\n      value = value.replace(/^((<[^>]+>|\\t)+)/gm, function(match, p1 /*..., offset, s*/) {\r\n        return p1.replace(/\\t/g, options.tabReplace);\r\n      });\r\n    }\r\n    if (options.useBR) {\r\n      value = value.replace(/\\n/g, '<br>');\r\n    }\r\n    return value;\r\n  }\r\n\r\n  function buildClassName(prevClassName, currentLang, resultLang) {\r\n    var language = currentLang ? aliases[currentLang] : resultLang,\r\n        result   = [prevClassName.trim()];\r\n\r\n    if (!prevClassName.match(/\\bhljs\\b/)) {\r\n      result.push('hljs');\r\n    }\r\n\r\n    if (prevClassName.indexOf(language) === -1) {\r\n      result.push(language);\r\n    }\r\n\r\n    return result.join(' ').trim();\r\n  }\r\n\r\n  /*\r\n  Applies highlighting to a DOM node containing code. Accepts a DOM node and\r\n  two optional parameters for fixMarkup.\r\n  */\r\n  function highlightBlock(block) {\r\n    var language = blockLanguage(block);\r\n    if (isNotHighlighted(language))\r\n        return;\r\n\r\n    var node;\r\n    if (options.useBR) {\r\n      node = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');\r\n      node.innerHTML = block.innerHTML.replace(/\\n/g, '').replace(/<br[ \\/]*>/g, '\\n');\r\n    } else {\r\n      node = block;\r\n    }\r\n    var text = node.textContent;\r\n    var result = language ? highlight(language, text, true) : highlightAuto(text);\r\n\r\n    var originalStream = nodeStream(node);\r\n    if (originalStream.length) {\r\n      var resultNode = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');\r\n      resultNode.innerHTML = result.value;\r\n      result.value = mergeStreams(originalStream, nodeStream(resultNode), text);\r\n    }\r\n    result.value = fixMarkup(result.value);\r\n\r\n    block.innerHTML = result.value;\r\n    block.className = buildClassName(block.className, language, result.language);\r\n    block.result = {\r\n      language: result.language,\r\n      re: result.relevance\r\n    };\r\n    if (result.second_best) {\r\n      block.second_best = {\r\n        language: result.second_best.language,\r\n        re: result.second_best.relevance\r\n      };\r\n    }\r\n  }\r\n\r\n  var options = {\r\n    classPrefix: 'hljs-',\r\n    tabReplace: null,\r\n    useBR: false,\r\n    languages: undefined\r\n  };\r\n\r\n  /*\r\n  Updates highlight.js global options with values passed in the form of an object\r\n  */\r\n  function configure(user_options) {\r\n    options = inherit(options, user_options);\r\n  }\r\n\r\n  /*\r\n  Applies highlighting to all <pre><code>..<\/code><\/pre> blocks on a page.\r\n  */\r\n  function initHighlighting() {\r\n    if (initHighlighting.called)\r\n      return;\r\n    initHighlighting.called = true;\r\n\r\n    var blocks = document.querySelectorAll('pre code');\r\n    Array.prototype.forEach.call(blocks, highlightBlock);\r\n  }\r\n\r\n  /*\r\n  Attaches highlighting to the page load event.\r\n  */\r\n  function initHighlightingOnLoad() {\r\n    addEventListener('DOMContentLoaded', initHighlighting, false);\r\n    addEventListener('load', initHighlighting, false);\r\n  }\r\n\r\n  var languages = {};\r\n  var aliases = {};\r\n\r\n  function registerLanguage(name, language) {\r\n    var lang = languages[name] = language(hljs);\r\n    if (lang.aliases) {\r\n      lang.aliases.forEach(function(alias) {aliases[alias] = name;});\r\n    }\r\n  }\r\n\r\n  function listLanguages() {\r\n    return Object.keys(languages);\r\n  }\r\n\r\n  function getLanguage(name) {\r\n    return languages[name] || languages[aliases[name]];\r\n  }\r\n\r\n  /* Interface definition */\r\n\r\n  hljs.highlight = highlight;\r\n  hljs.highlightAuto = highlightAuto;\r\n  hljs.fixMarkup = fixMarkup;\r\n  hljs.highlightBlock = highlightBlock;\r\n  hljs.configure = configure;\r\n  hljs.initHighlighting = initHighlighting;\r\n  hljs.initHighlightingOnLoad = initHighlightingOnLoad;\r\n  hljs.registerLanguage = registerLanguage;\r\n  hljs.listLanguages = listLanguages;\r\n  hljs.getLanguage = getLanguage;\r\n  hljs.inherit = inherit;\r\n\r\n  // Common regexps\r\n  hljs.IDENT_RE = '[a-zA-Z]\\\\w*';\r\n  hljs.UNDERSCORE_IDENT_RE = '[a-zA-Z_]\\\\w*';\r\n  hljs.NUMBER_RE = '\\\\b\\\\d+(\\\\.\\\\d+)?';\r\n  hljs.C_NUMBER_RE = '(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)'; // 0x..., 0..., decimal, float\r\n  hljs.BINARY_NUMBER_RE = '\\\\b(0b[01]+)'; // 0b...\r\n  hljs.RE_STARTERS_RE = '!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~';\r\n\r\n  // Common modes\r\n  hljs.BACKSLASH_ESCAPE = {\r\n    begin: '\\\\\\\\[\\\\s\\\\S]', relevance: 0\r\n  };\r\n  hljs.APOS_STRING_MODE = {\r\n    className: 'string',\r\n    begin: '\\'', end: '\\'',\r\n    illegal: '\\\\n',\r\n    contains: [hljs.BACKSLASH_ESCAPE]\r\n  };\r\n  hljs.QUOTE_STRING_MODE = {\r\n    className: 'string',\r\n    begin: '\"', end: '\"',\r\n    illegal: '\\\\n',\r\n    contains: [hljs.BACKSLASH_ESCAPE]\r\n  };\r\n  hljs.PHRASAL_WORDS_MODE = {\r\n    begin: /\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\\b/\r\n  };\r\n  hljs.COMMENT = function (begin, end, inherits) {\r\n    var mode = hljs.inherit(\r\n      {\r\n        className: 'comment',\r\n        begin: begin, end: end,\r\n        contains: []\r\n      },\r\n      inherits || {}\r\n    );\r\n    mode.contains.push(hljs.PHRASAL_WORDS_MODE);\r\n    mode.contains.push({\r\n      className: 'doctag',\r\n      begin: \"(?:TODO|FIXME|NOTE|BUG|XXX):\",\r\n      relevance: 0\r\n    });\r\n    return mode;\r\n  };\r\n  hljs.C_LINE_COMMENT_MODE = hljs.COMMENT('//', '$');\r\n  hljs.C_BLOCK_COMMENT_MODE = hljs.COMMENT('/\\\\*', '\\\\*/');\r\n  hljs.HASH_COMMENT_MODE = hljs.COMMENT('#', '$');\r\n  hljs.NUMBER_MODE = {\r\n    className: 'number',\r\n    begin: hljs.NUMBER_RE,\r\n    relevance: 0\r\n  };\r\n  hljs.C_NUMBER_MODE = {\r\n    className: 'number',\r\n    begin: hljs.C_NUMBER_RE,\r\n    relevance: 0\r\n  };\r\n  hljs.BINARY_NUMBER_MODE = {\r\n    className: 'number',\r\n    begin: hljs.BINARY_NUMBER_RE,\r\n    relevance: 0\r\n  };\r\n  hljs.CSS_NUMBER_MODE = {\r\n    className: 'number',\r\n    begin: hljs.NUMBER_RE + '(' +\r\n      '%|em|ex|ch|rem'  +\r\n      '|vw|vh|vmin|vmax' +\r\n      '|cm|mm|in|pt|pc|px' +\r\n      '|deg|grad|rad|turn' +\r\n      '|s|ms' +\r\n      '|Hz|kHz' +\r\n      '|dpi|dpcm|dppx' +\r\n      ')?',\r\n    relevance: 0\r\n  };\r\n  hljs.REGEXP_MODE = {\r\n    className: 'regexp',\r\n    begin: /\\//, end: /\\/[gimuy]*/,\r\n    illegal: /\\n/,\r\n    contains: [\r\n      hljs.BACKSLASH_ESCAPE,\r\n      {\r\n        begin: /\\[/, end: /\\]/,\r\n        relevance: 0,\r\n        contains: [hljs.BACKSLASH_ESCAPE]\r\n      }\r\n    ]\r\n  };\r\n  hljs.TITLE_MODE = {\r\n    className: 'title',\r\n    begin: hljs.IDENT_RE,\r\n    relevance: 0\r\n  };\r\n  hljs.UNDERSCORE_TITLE_MODE = {\r\n    className: 'title',\r\n    begin: hljs.UNDERSCORE_IDENT_RE,\r\n    relevance: 0\r\n  };\r\n\r\nhljs.registerLanguage('bash', function(hljs) {\r\n  var VAR = {\r\n    className: 'variable',\r\n    variants: [\r\n      {begin: /\\$[\\w\\d#@][\\w\\d_]*/},\r\n      {begin: /\\$\\{(.*?)}/}\r\n    ]\r\n  };\r\n  var QUOTE_STRING = {\r\n    className: 'string',\r\n    begin: /\"/, end: /\"/,\r\n    contains: [\r\n      hljs.BACKSLASH_ESCAPE,\r\n      VAR,\r\n      {\r\n        className: 'variable',\r\n        begin: /\\$\\(/, end: /\\)/,\r\n        contains: [hljs.BACKSLASH_ESCAPE]\r\n      }\r\n    ]\r\n  };\r\n  var APOS_STRING = {\r\n    className: 'string',\r\n    begin: /'/, end: /'/\r\n  };\r\n\r\n  return {\r\n    aliases: ['sh', 'zsh'],\r\n    lexemes: /-?[a-z\\.]+/,\r\n    keywords: {\r\n      keyword:\r\n        'if then else elif fi for while in do done case esac function',\r\n      literal:\r\n        'true false',\r\n      built_in:\r\n        // Shell built-ins\r\n        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html\r\n        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +\r\n        'trap umask unset mvn ant webAppCreator i18nCreator ' +\r\n        // Bash built-ins\r\n        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +\r\n        'read readarray source type typeset ulimit unalias ' +\r\n        // Shell modifiers\r\n        'set shopt ' +\r\n        // Zsh built-ins\r\n        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +\r\n        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +\r\n        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +\r\n        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +\r\n        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +\r\n        'zpty zregexparse zsocket zstyle ztcp',\r\n      operator:\r\n        '-ne -eq -lt -gt -f -d -e -s -l -a' // relevance booster\r\n    },\r\n    contains: [\r\n      {\r\n        className: 'shebang',\r\n        begin: /^#![^\\n]+sh\\s*$/,\r\n        relevance: 10\r\n      },\r\n      {\r\n        className: 'function',\r\n        begin: /\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,\r\n        returnBegin: true,\r\n        contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\\w[\\w\\d_]*/})],\r\n        relevance: 0\r\n      },\r\n      hljs.HASH_COMMENT_MODE,\r\n      hljs.NUMBER_MODE,\r\n      QUOTE_STRING,\r\n      APOS_STRING,\r\n      VAR\r\n    ]\r\n  };\r\n});\r\n\r\nhljs.registerLanguage('css', function(hljs) {\r\n  var IDENT_RE = '[a-zA-Z-][a-zA-Z0-9_-]*';\r\n  var FUNCTION = {\r\n    className: 'function',\r\n    begin: IDENT_RE + '\\\\(',\r\n    returnBegin: true,\r\n    excludeEnd: true,\r\n    end: '\\\\('\r\n  };\r\n  var RULE = {\r\n    className: 'rule',\r\n    begin: /[A-Z\\_\\.\\-]+\\s*:/, returnBegin: true, end: ';', endsWithParent: true,\r\n    contains: [\r\n      {\r\n        className: 'attribute',\r\n        begin: /\\S/, end: ':', excludeEnd: true,\r\n        starts: {\r\n          className: 'value',\r\n          endsWithParent: true, excludeEnd: true,\r\n          contains: [\r\n            FUNCTION,\r\n            hljs.CSS_NUMBER_MODE,\r\n            hljs.QUOTE_STRING_MODE,\r\n            hljs.APOS_STRING_MODE,\r\n            hljs.C_BLOCK_COMMENT_MODE,\r\n            {\r\n              className: 'hexcolor', begin: '#[0-9A-Fa-f]+'\r\n            },\r\n            {\r\n              className: 'important', begin: '!important'\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ]\r\n  };\r\n\r\n  return {\r\n    case_insensitive: true,\r\n    illegal: /[=\\/|'\\$]/,\r\n    contains: [\r\n      hljs.C_BLOCK_COMMENT_MODE,\r\n      RULE,\r\n      {\r\n        className: 'id', begin: /\\#[A-Za-z0-9_-]+/\r\n      },\r\n      {\r\n        className: 'class', begin: /\\.[A-Za-z0-9_-]+/\r\n      },\r\n      {\r\n        className: 'attr_selector',\r\n        begin: /\\[/, end: /\\]/,\r\n        illegal: '$'\r\n      },\r\n      {\r\n        className: 'pseudo',\r\n        begin: /:(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\"']+/\r\n      },\r\n      {\r\n        className: 'at_rule',\r\n        begin: '@(font-face|page)',\r\n        lexemes: '[a-z-]+',\r\n        keywords: 'font-face page'\r\n      },\r\n      {\r\n        className: 'at_rule',\r\n        begin: '@', end: '[{;]', // at_rule eating first \"{\" is a good thing\r\n                                 // because it doesn\u2019t let it to be parsed as\r\n                                 // a rule set but instead drops parser into\r\n                                 // the default mode which is how it should be.\r\n        contains: [\r\n          {\r\n            className: 'keyword',\r\n            begin: /\\S+/\r\n          },\r\n          {\r\n            begin: /\\s/, endsWithParent: true, excludeEnd: true,\r\n            relevance: 0,\r\n            contains: [\r\n              FUNCTION,\r\n              hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE,\r\n              hljs.CSS_NUMBER_MODE\r\n            ]\r\n          }\r\n        ]\r\n      },\r\n      {\r\n        className: 'tag', begin: IDENT_RE,\r\n        relevance: 0\r\n      },\r\n      {\r\n        className: 'rules',\r\n        begin: '{', end: '}',\r\n        illegal: /\\S/,\r\n        contains: [\r\n          hljs.C_BLOCK_COMMENT_MODE,\r\n          RULE,\r\n        ]\r\n      }\r\n    ]\r\n  };\r\n});\r\n\r\nhljs.registerLanguage('java', function(hljs) {\r\n  var GENERIC_IDENT_RE = hljs.UNDERSCORE_IDENT_RE + '(<' + hljs.UNDERSCORE_IDENT_RE + '>)?';\r\n  var KEYWORDS =\r\n    'false synchronized int abstract float private char boolean static null if const ' +\r\n    'for true while long strictfp finally protected import native final void ' +\r\n    'enum else break transient catch instanceof byte super volatile case assert short ' +\r\n    'package default double public try this switch continue throws protected public private';\r\n\r\n  // https://docs.oracle.com/javase/7/docs/technotes/guides/language/underscores-literals.html\r\n  var JAVA_NUMBER_RE = '\\\\b' +\r\n    '(' +\r\n      '0[bB]([01]+[01_]+[01]+|[01]+)' + // 0b...\r\n      '|' +\r\n      '0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)' + // 0x...\r\n      '|' +\r\n      '(' +\r\n        '([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+)(\\\\.([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+))?' +\r\n        '|' +\r\n        '\\\\.([\\\\d]+[\\\\d_]+[\\\\d]+|[\\\\d]+)' +\r\n      ')' +\r\n      '([eE][-+]?\\\\d+)?' + // octal, decimal, float\r\n    ')' +\r\n    '[lLfF]?';\r\n  var JAVA_NUMBER_MODE = {\r\n    className: 'number',\r\n    begin: JAVA_NUMBER_RE,\r\n    relevance: 0\r\n  };\r\n\r\n  return {\r\n    aliases: ['jsp'],\r\n    keywords: KEYWORDS,\r\n    illegal: /<\\//,\r\n    contains: [\r\n      hljs.COMMENT(\r\n        '/\\\\*\\\\*',\r\n        '\\\\*/',\r\n        {\r\n          relevance : 0,\r\n          contains : [{\r\n            className : 'doctag',\r\n            begin : '@[A-Za-z]+'\r\n          }]\r\n        }\r\n      ),\r\n      hljs.C_LINE_COMMENT_MODE,\r\n      hljs.C_BLOCK_COMMENT_MODE,\r\n      hljs.APOS_STRING_MODE,\r\n      hljs.QUOTE_STRING_MODE,\r\n      {\r\n        className: 'class',\r\n        beginKeywords: 'class interface', end: /[{;=]/, excludeEnd: true,\r\n        keywords: 'class interface',\r\n        illegal: /[:\"\\[\\]]/,\r\n        contains: [\r\n          {beginKeywords: 'extends implements'},\r\n          hljs.UNDERSCORE_TITLE_MODE\r\n        ]\r\n      },\r\n      {\r\n        // Expression keywords prevent 'keyword Name(...)' from being\r\n        // recognized as a function definition\r\n        beginKeywords: 'new throw return else',\r\n        relevance: 0\r\n      },\r\n      {\r\n        className: 'function',\r\n        begin: '(' + GENERIC_IDENT_RE + '\\\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\\\s*\\\\(', returnBegin: true, end: /[{;=]/,\r\n        excludeEnd: true,\r\n        keywords: KEYWORDS,\r\n        contains: [\r\n          {\r\n            begin: hljs.UNDERSCORE_IDENT_RE + '\\\\s*\\\\(', returnBegin: true,\r\n            relevance: 0,\r\n            contains: [hljs.UNDERSCORE_TITLE_MODE]\r\n          },\r\n          {\r\n            className: 'params',\r\n            begin: /\\(/, end: /\\)/,\r\n            keywords: KEYWORDS,\r\n            relevance: 0,\r\n            contains: [\r\n              hljs.APOS_STRING_MODE,\r\n              hljs.QUOTE_STRING_MODE,\r\n              hljs.C_NUMBER_MODE,\r\n              hljs.C_BLOCK_COMMENT_MODE\r\n            ]\r\n          },\r\n          hljs.C_LINE_COMMENT_MODE,\r\n          hljs.C_BLOCK_COMMENT_MODE\r\n        ]\r\n      },\r\n      JAVA_NUMBER_MODE,\r\n      {\r\n        className: 'annotation', begin: '@[A-Za-z]+'\r\n      }\r\n    ]\r\n  };\r\n});\r\n\r\nhljs.registerLanguage('javascript', function(hljs) {\r\n  return {\r\n    aliases: ['js'],\r\n    keywords: {\r\n      keyword:\r\n        'in of if for while finally var new function do return void else break catch ' +\r\n        'instanceof with throw case default try this switch continue typeof delete ' +\r\n        'let yield const export super debugger as async await',\r\n      literal:\r\n        'true false null undefined NaN Infinity',\r\n      built_in:\r\n        'eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent ' +\r\n        'encodeURI encodeURIComponent escape unescape Object Function Boolean Error ' +\r\n        'EvalError InternalError RangeError ReferenceError StopIteration SyntaxError ' +\r\n        'TypeError URIError Number Math Date String RegExp Array Float32Array ' +\r\n        'Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array ' +\r\n        'Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require ' +\r\n        'module console window document");
  builder.append_1(" Symbol Set Map WeakSet WeakMap Proxy Reflect ' +\r\n        'Promise'\r\n    },\r\n    contains: [\r\n      {\r\n        className: 'pi',\r\n        relevance: 10,\r\n        begin: /^\\s*['\"]use (strict|asm)['\"]/\r\n      },\r\n      hljs.APOS_STRING_MODE,\r\n      hljs.QUOTE_STRING_MODE,\r\n      { // template string\r\n        className: 'string',\r\n        begin: '`', end: '`',\r\n        contains: [\r\n          hljs.BACKSLASH_ESCAPE,\r\n          {\r\n            className: 'subst',\r\n            begin: '\\\\$\\\\{', end: '\\\\}'\r\n          }\r\n        ]\r\n      },\r\n      hljs.C_LINE_COMMENT_MODE,\r\n      hljs.C_BLOCK_COMMENT_MODE,\r\n      {\r\n        className: 'number',\r\n        variants: [\r\n          { begin: '\\\\b(0[bB][01]+)' },\r\n          { begin: '\\\\b(0[oO][0-7]+)' },\r\n          { begin: hljs.C_NUMBER_RE }\r\n        ],\r\n        relevance: 0\r\n      },\r\n      { // \"value\" container\r\n        begin: '(' + hljs.RE_STARTERS_RE + '|\\\\b(case|return|throw)\\\\b)\\\\s*',\r\n        keywords: 'return throw case',\r\n        contains: [\r\n          hljs.C_LINE_COMMENT_MODE,\r\n          hljs.C_BLOCK_COMMENT_MODE,\r\n          hljs.REGEXP_MODE,\r\n          { // E4X / JSX\r\n            begin: /<\/, end: />\\s*[);\\]]/,\r\n            relevance: 0,\r\n            subLanguage: 'xml'\r\n          }\r\n        ],\r\n        relevance: 0\r\n      },\r\n      {\r\n        className: 'function',\r\n        beginKeywords: 'function', end: /\\{/, excludeEnd: true,\r\n        contains: [\r\n          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][0-9A-Za-z$_]*/}),\r\n          {\r\n            className: 'params',\r\n            begin: /\\(/, end: /\\)/,\r\n            excludeBegin: true,\r\n            excludeEnd: true,\r\n            contains: [\r\n              hljs.C_LINE_COMMENT_MODE,\r\n              hljs.C_BLOCK_COMMENT_MODE\r\n            ],\r\n            illegal: /[\"'\\(]/\r\n          }\r\n        ],\r\n        illegal: /\\[|%/\r\n      },\r\n      {\r\n        begin: /\\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`\r\n      },\r\n      {\r\n        begin: '\\\\.' + hljs.IDENT_RE, relevance: 0 // hack: prevents detection of keywords after dots\r\n      },\r\n      // ECMAScript 6 modules import\r\n      {\r\n        beginKeywords: 'import', end: '[;$]',\r\n        keywords: 'import from as',\r\n        contains: [\r\n          hljs.APOS_STRING_MODE,\r\n          hljs.QUOTE_STRING_MODE\r\n        ]\r\n      },\r\n      { // ES6 class\r\n        className: 'class',\r\n        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,\r\n        illegal: /[:\"\\[\\]]/,\r\n        contains: [\r\n          {beginKeywords: 'extends'},\r\n          hljs.UNDERSCORE_TITLE_MODE\r\n        ]\r\n      }\r\n    ]\r\n  };\r\n});\r\n\r\nhljs.registerLanguage('json', function(hljs) {\r\n  var LITERALS = {literal: 'true false null'};\r\n  var TYPES = [\r\n    hljs.QUOTE_STRING_MODE,\r\n    hljs.C_NUMBER_MODE\r\n  ];\r\n  var VALUE_CONTAINER = {\r\n    className: 'value',\r\n    end: ',', endsWithParent: true, excludeEnd: true,\r\n    contains: TYPES,\r\n    keywords: LITERALS\r\n  };\r\n  var OBJECT = {\r\n    begin: '{', end: '}',\r\n    contains: [\r\n      {\r\n        className: 'attribute',\r\n        begin: '\\\\s*\"', end: '\"\\\\s*:\\\\s*', excludeBegin: true, excludeEnd: true,\r\n        contains: [hljs.BACKSLASH_ESCAPE],\r\n        illegal: '\\\\n',\r\n        starts: VALUE_CONTAINER\r\n      }\r\n    ],\r\n    illegal: '\\\\S'\r\n  };\r\n  var ARRAY = {\r\n    begin: '\\\\[', end: '\\\\]',\r\n    contains: [hljs.inherit(VALUE_CONTAINER, {className: null})], // inherit is also a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents\r\n    illegal: '\\\\S'\r\n  };\r\n  TYPES.splice(TYPES.length, 0, OBJECT, ARRAY);\r\n  return {\r\n    contains: TYPES,\r\n    keywords: LITERALS,\r\n    illegal: '\\\\S'\r\n  };\r\n});\r\n\r\nhljs.registerLanguage('xml', function(hljs) {\r\n  var XML_IDENT_RE = '[A-Za-z0-9\\\\._:-]+';\r\n  var PHP = {\r\n    begin: /<\\?(php)?(?!\\w)/, end: /\\?>/,\r\n    subLanguage: 'php'\r\n  };\r\n  var TAG_INTERNALS = {\r\n    endsWithParent: true,\r\n    illegal: /<\/,\r\n    relevance: 0,\r\n    contains: [\r\n      PHP,\r\n      {\r\n        className: 'attribute',\r\n        begin: XML_IDENT_RE,\r\n        relevance: 0\r\n      },\r\n      {\r\n        begin: '=',\r\n        relevance: 0,\r\n        contains: [\r\n          {\r\n            className: 'value',\r\n            contains: [PHP],\r\n            variants: [\r\n              {begin: /\"/, end: /\"/},\r\n              {begin: /'/, end: /'/},\r\n              {begin: /[^\\s\\/>]+/}\r\n            ]\r\n          }\r\n        ]\r\n      }\r\n    ]\r\n  };\r\n  return {\r\n    aliases: ['html', 'xhtml', 'rss', 'atom', 'xsl', 'plist'],\r\n    case_insensitive: true,\r\n    contains: [\r\n      {\r\n        className: 'doctype',\r\n        begin: '<!DOCTYPE', end: '>',\r\n        relevance: 10,\r\n        contains: [{begin: '\\\\[', end: '\\\\]'}]\r\n      },\r\n      hljs.COMMENT(\r\n        '<!--',\r\n        '-->',\r\n        {\r\n          relevance: 10\r\n        }\r\n      ),\r\n      {\r\n        className: 'cdata',\r\n        begin: '<\\\\!\\\\[CDATA\\\\[', end: '\\\\]\\\\]>',\r\n        relevance: 10\r\n      },\r\n      {\r\n        className: 'tag',\r\n        /*\r\n        The lookahead pattern (?=...) ensures that 'begin' only matches\r\n        '<style' as a single word, followed by a whitespace or an\r\n        ending braket. The '$' is needed for the lexeme to be recognized\r\n        by hljs.subMode() that tests lexemes outside the stream.\r\n        */\r\n        begin: '<style(?=\\\\s|>|$)', end: '>',\r\n        keywords: {title: 'style'},\r\n        contains: [TAG_INTERNALS],\r\n        starts: {\r\n          end: '<\/style>', returnEnd: true,\r\n          subLanguage: 'css'\r\n        }\r\n      },\r\n      {\r\n        className: 'tag',\r\n        // See the comment in the <style tag about the lookahead pattern\r\n        begin: '<script(?=\\\\s|>|$)', end: '>',\r\n        keywords: {title: 'script'},\r\n        contains: [TAG_INTERNALS],\r\n        starts: {\r\n          end: '\\<\\/script\\>', returnEnd: true,\r\n          subLanguage: ['actionscript', 'javascript', 'handlebars']\r\n        }\r\n      },\r\n      PHP,\r\n      {\r\n        className: 'pi',\r\n        begin: /<\\?\\w+/, end: /\\?>/,\r\n        relevance: 10\r\n      },\r\n      {\r\n        className: 'tag',\r\n        begin: '<\/?', end: '/?>',\r\n        contains: [\r\n          {\r\n            className: 'title', begin: /[^ \\/><\\n\\t]+/, relevance: 0\r\n          },\r\n          TAG_INTERNALS\r\n        ]\r\n      }\r\n    ]\r\n  };\r\n});\r\n\r\n  return hljs;\r\n}));\r\n");
  return builder.toString_0();
}
;
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_1CssHighlight_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight_CssHighlight_default_InlineClientBundleGenerator/1', 167, cggl.Ljava_lang_Object_2_classLit);
cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$2 = function $clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$2(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$2 = emptyMethod;
}
;
defineClass(327, 1, {1:1});
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_1CssHighlight_1default_1InlineClientBundleGenerator$2_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight_CssHighlight_default_InlineClientBundleGenerator/2', 327, cggl.Ljava_lang_Object_2_classLit);
cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$highlightInitializer = function $clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$highlightInitializer(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$highlightInitializer = emptyMethod;
  jl.$clinit_Object();
  {
    (cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator() , cggswch._instance0).highlightInitializer();
  }
}
;
cggswch.get_2 = function get_2(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$highlightInitializer();
  return cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator() , cggswch.highlight;
}
;
defineClass(325, 1, {1:1});
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_1CssHighlight_1default_1InlineClientBundleGenerator$highlightInitializer_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight_CssHighlight_default_InlineClientBundleGenerator/highlightInitializer', 325, cggl.Ljava_lang_Object_2_classLit);
cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$ideaInitializer = function $clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$ideaInitializer(){
  cggswch.$clinit_JsHighlight_CssHighlight_default_InlineClientBundleGenerator$ideaInitializer = emptyMethod;
}
;
defineClass(326, 1, {1:1});
cggl.Lcom_google_gwt_site_webapp_client_highlight_JsHighlight_1CssHighlight_1default_1InlineClientBundleGenerator$ideaInitializer_2_classLit = createForClass('com.google.gwt.site.webapp.client.highlight', 'JsHighlight_CssHighlight_default_InlineClientBundleGenerator/ideaInitializer', 326, cggl.Ljava_lang_Object_2_classLit);
cggts.$clinit_ArrayBuffer = function $clinit_ArrayBuffer(){
  cggts.$clinit_ArrayBuffer = emptyMethod;
}
;
cggl.Lcom_google_gwt_typedarrays_shared_ArrayBuffer_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'ArrayBuffer');
cggtc.$clinit_ArrayBufferNative = function $clinit_ArrayBufferNative(){
  cggtc.$clinit_ArrayBufferNative = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggts.$clinit_ArrayBufferView = function $clinit_ArrayBufferView(){
  cggts.$clinit_ArrayBufferView = emptyMethod;
}
;
cggl.Lcom_google_gwt_typedarrays_shared_ArrayBufferView_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'ArrayBufferView');
cggtc.$clinit_ArrayBufferViewNative = function $clinit_ArrayBufferViewNative(){
  cggtc.$clinit_ArrayBufferViewNative = emptyMethod;
  cggcc.$clinit_JavaScriptObject();
}
;
cggts.$clinit_DataView = function $clinit_DataView(){
  cggts.$clinit_DataView = emptyMethod;
}
;
cggl.Lcom_google_gwt_typedarrays_shared_DataView_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'DataView');
cggtc.$clinit_DataViewNative = function $clinit_DataViewNative(){
  cggtc.$clinit_DataViewNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggts.$clinit_Float32Array = function $clinit_Float32Array(){
  cggts.$clinit_Float32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT = 4;
cggl.Lcom_google_gwt_typedarrays_shared_Float32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Float32Array');
cggtc.$clinit_Float32ArrayNative = function $clinit_Float32ArrayNative(){
  cggtc.$clinit_Float32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_2 = function $length_2(this$static){
  return this$static.length;
}
;
cggts.$clinit_Float64Array = function $clinit_Float64Array(){
  cggts.$clinit_Float64Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_0 = 8;
cggl.Lcom_google_gwt_typedarrays_shared_Float64Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Float64Array');
cggtc.$clinit_Float64ArrayNative = function $clinit_Float64ArrayNative(){
  cggtc.$clinit_Float64ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_3 = function $length_3(this$static){
  return this$static.length;
}
;
cggtc.$set_0 = function $set_0(this$static, array, offset){
  this$static.set(array, offset);
}
;
cggtc.$set_1 = function $set_1(this$static, array){
  cggtc.$set_2(this$static, array, 0);
}
;
cggtc.$set_2 = function $set_2(this$static, array, offset){
  cggtc.$set_0(this$static, cggcc.readOnlyJsArray(array), offset);
}
;
cggts.$clinit_Int16Array = function $clinit_Int16Array(){
  cggts.$clinit_Int16Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_1 = 2;
cggl.Lcom_google_gwt_typedarrays_shared_Int16Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int16Array');
cggtc.$clinit_Int16ArrayNative = function $clinit_Int16ArrayNative(){
  cggtc.$clinit_Int16ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_4 = function $length_4(this$static){
  return this$static.length;
}
;
cggts.$clinit_Int32Array = function $clinit_Int32Array(){
  cggts.$clinit_Int32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_2 = 4;
cggl.Lcom_google_gwt_typedarrays_shared_Int32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int32Array');
cggtc.$clinit_Int32ArrayNative = function $clinit_Int32ArrayNative(){
  cggtc.$clinit_Int32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$get_2 = function $get_2(this$static, index_0){
  return this$static[index_0];
}
;
cggtc.$length_5 = function $length_5(this$static){
  return this$static.length;
}
;
cggts.$clinit_Int8Array = function $clinit_Int8Array(){
  cggts.$clinit_Int8Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_3 = 1;
cggl.Lcom_google_gwt_typedarrays_shared_Int8Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Int8Array');
cggtc.$clinit_Int8ArrayNative = function $clinit_Int8ArrayNative(){
  cggtc.$clinit_Int8ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_6 = function $length_6(this$static){
  return this$static.length;
}
;
cggts.$clinit_Uint16Array = function $clinit_Uint16Array(){
  cggts.$clinit_Uint16Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_4 = 2;
cggl.Lcom_google_gwt_typedarrays_shared_Uint16Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint16Array');
cggtc.$clinit_Uint16ArrayNative = function $clinit_Uint16ArrayNative(){
  cggtc.$clinit_Uint16ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$get_3 = function $get_3(this$static, index_0){
  return this$static[index_0];
}
;
cggtc.$length_7 = function $length_7(this$static){
  return this$static.length;
}
;
cggts.$clinit_Uint32Array = function $clinit_Uint32Array(){
  cggts.$clinit_Uint32Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_5 = 4;
cggl.Lcom_google_gwt_typedarrays_shared_Uint32Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint32Array');
cggtc.$clinit_Uint32ArrayNative = function $clinit_Uint32ArrayNative(){
  cggtc.$clinit_Uint32ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_8 = function $length_8(this$static){
  return this$static.length;
}
;
cggtc.$set_3 = function $set_3(this$static, array, offset){
  this$static.set(array, offset);
}
;
cggtc.$set_4 = function $set_4(this$static, array){
  cggtc.$set_5(this$static, array, 0);
}
;
cggtc.$set_5 = function $set_5(this$static, array, offset){
  cggtc.$set_3(this$static, cggcc.readOnlyJsArray(array), offset);
}
;
cggts.$clinit_Uint8Array = function $clinit_Uint8Array(){
  cggts.$clinit_Uint8Array = emptyMethod;
}
;
cggts.BYTES_PER_ELEMENT_6 = 1;
cggl.Lcom_google_gwt_typedarrays_shared_Uint8Array_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint8Array');
cggts.$clinit_Uint8ClampedArray = function $clinit_Uint8ClampedArray(){
  cggts.$clinit_Uint8ClampedArray = emptyMethod;
}
;
cggl.Lcom_google_gwt_typedarrays_shared_Uint8ClampedArray_2_classLit = createForInterface('com.google.gwt.typedarrays.shared', 'Uint8ClampedArray');
cggtc.$clinit_Uint8ArrayNative = function $clinit_Uint8ArrayNative(){
  cggtc.$clinit_Uint8ArrayNative = emptyMethod;
  cggtc.$clinit_ArrayBufferViewNative();
}
;
cggtc.$length_9 = function $length_9(this$static){
  return this$static.length;
}
;
cgguc.$clinit_DocumentModeAsserter = function $clinit_DocumentModeAsserter(){
  cgguc.$clinit_DocumentModeAsserter = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.DocumentModeAsserter = function DocumentModeAsserter(){
  cgguc.$clinit_DocumentModeAsserter();
  Object_0.call(this);
  this.$init_66();
}
;
defineClass(90, 1, {43:1, 1:1}, cgguc.DocumentModeAsserter);
_.$init_66 = function $init_66(){
}
;
_.onModuleLoad = function onModuleLoad_0(){
  var allowedModes, currentMode, i, impl, message, severity;
  impl = castTo(new cgguc.DocumentModeAsserter_DocumentModeProperty, 207);
  severity = impl.getDocumentModeSeverity();
  if (jsEquals(severity, (cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.IGNORE))) {
    return;
  }
  currentMode = cggdc.$getCompatMode(cggdc.get_1());
  allowedModes = impl.getAllowedDocumentModes();
  for (i = 0; i < allowedModes.length; i++) {
    if (jl.equals_Ljava_lang_Object__Z__devirtual$_2(allowedModes[i], currentMode)) {
      return;
    }
  }
  if (allowedModes.length == 1 && jl.equals_Ljava_lang_Object__Z__devirtual$_2('CSS1Compat', allowedModes[0]) && jl.equals_Ljava_lang_Object__Z__devirtual$_2('BackCompat', currentMode)) {
    message = "GWT no longer supports Quirks Mode (document.compatMode=' " + 'BackCompat' + "').<br>Make sure your application's host HTML page has a Standards Mode " + "(document.compatMode=' " + 'CSS1Compat' + "') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML " + 'page.<br><br>To continue using this unsupported rendering mode and risk layout problems, ' + 'suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>' + '&nbsp;&nbsp;&lt;extend-configuration-property name="document.compatMode" value="' + currentMode + '"/&gt;';
  }
   else {
    message = "Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
  }
  if (jsEquals(severity, (cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.ERROR))) {
    throw toJs(new jl.RuntimeException_1(message));
  }
  cggcc.log_0(message);
}
;
cgguc.PROPERTY_DOCUMENT_COMPATMODE = 'document.compatMode';
cgguc.PROPERTY_DOCUMENT_COMPATMODE_SEVERITY = 'document.compatMode.severity';
cgguc.QUIRKS_MODE_BACK_COMPAT = 'BackCompat';
cgguc.STANDARDS_MODE_CSS1_COMPAT = 'CSS1Compat';
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter', 90, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_DocumentModeAsserter$DocumentModeProperty = function $clinit_DocumentModeAsserter$DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter$DocumentModeProperty = emptyMethod;
}
;
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$DocumentModeProperty_2_classLit = createForInterface('com.google.gwt.user.client', 'DocumentModeAsserter/DocumentModeProperty');
cgguc.$clinit_DocumentModeAsserter$Severity = function $clinit_DocumentModeAsserter$Severity(){
  cgguc.$clinit_DocumentModeAsserter$Severity = emptyMethod;
  jl.$clinit_Enum();
  cgguc.ERROR = new cgguc.DocumentModeAsserter$Severity('ERROR', 0);
  cgguc.IGNORE = new cgguc.DocumentModeAsserter$Severity('IGNORE', 1);
  cgguc.WARN = new cgguc.DocumentModeAsserter$Severity('WARN', 2);
}
;
cgguc.DocumentModeAsserter$Severity = function DocumentModeAsserter$Severity(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.$init_67();
}
;
cgguc.valueOf_1 = function valueOf_1(name_0){
  cgguc.$clinit_DocumentModeAsserter$Severity();
  return valueOf((cgguc.$clinit_DocumentModeAsserter$Severity$Map() , cgguc.$MAP_0), name_0);
}
;
cgguc.values_1 = function values_1(){
  cgguc.$clinit_DocumentModeAsserter$Severity();
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit, 1), {3:1, 1:1, 7:1}, 33, 0, [cgguc.ERROR, cgguc.IGNORE, cgguc.WARN]);
}
;
defineClass(33, 23, {33:1, 3:1, 11:1, 23:1, 1:1}, cgguc.DocumentModeAsserter$Severity);
_.$init_67 = function $init_67(){
}
;
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$Severity_2_classLit = createForEnum('com.google.gwt.user.client', 'DocumentModeAsserter/Severity', 33, cggl.Ljava_lang_Enum_2_classLit, cgguc.values_1, cgguc.valueOf_1);
cgguc.$clinit_DocumentModeAsserter$Severity$Map = function $clinit_DocumentModeAsserter$Severity$Map(){
  cgguc.$clinit_DocumentModeAsserter$Severity$Map = emptyMethod;
  cgguc.$MAP_0 = createValueOfMap(cgguc.values_1());
}
;
defineClass(208, 1, {1:1});
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter$Severity$Map_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter/Severity/Map', 208, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty = function $clinit_DocumentModeAsserter_DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.DocumentModeAsserter_DocumentModeProperty = function DocumentModeAsserter_DocumentModeProperty(){
  cgguc.$clinit_DocumentModeAsserter_DocumentModeProperty();
  Object_0.call(this);
  this.$init_68();
}
;
defineClass(97, 1, {207:1, 1:1}, cgguc.DocumentModeAsserter_DocumentModeProperty);
_.$init_68 = function $init_68(){
}
;
_.getAllowedDocumentModes = function getAllowedDocumentModes(){
  return stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_String_2_classLit, 1), {3:1, 1:1, 7:1, 192:1}, 2, 6, ['CSS1Compat']);
}
;
_.getDocumentModeSeverity = function getDocumentModeSeverity(){
  return cgguc.$clinit_DocumentModeAsserter$Severity() , cgguc.WARN;
}
;
cggl.Lcom_google_gwt_user_client_DocumentModeAsserter_1DocumentModeProperty_2_classLit = createForClass('com.google.gwt.user.client', 'DocumentModeAsserter_DocumentModeProperty', 97, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Window = function $clinit_Window(){
  cgguc.$clinit_Window = emptyMethod;
  jl.$clinit_Object();
  cgguc.impl_1 = castTo(new cgguci.WindowImpl, 41);
}
;
cgguc.addHandler_1 = function addHandler_1(type_0, handler){
  return cgguc.getHandlers().addHandler(type_0, handler);
}
;
cgguc.addResizeHandler = function addResizeHandler(handler){
  cgguc.$clinit_Window();
  cgguc.maybeInitializeCloseHandlers();
  cgguc.maybeInitializeResizeHandlers();
  return cgguc.addHandler_1(cggels.getType(), handler);
}
;
cgguc.fireEvent_1 = function fireEvent_1(event_0){
  if (isNotNull(cgguc.handlers_0)) {
    cgguc.handlers_0.fireEvent(event_0);
  }
}
;
cgguc.getClientHeight = function getClientHeight(){
  return cggdc.$getClientHeight_0(cggdc.get_1());
}
;
cgguc.getClientWidth = function getClientWidth(){
  return cggdc.$getClientWidth_0(cggdc.get_1());
}
;
cgguc.getHandlers = function getHandlers(){
  if (isNull(cgguc.handlers_0)) {
    cgguc.handlers_0 = new cgguc.Window$WindowHandlers;
  }
  return cgguc.handlers_0;
}
;
cgguc.maybeInitializeCloseHandlers = function maybeInitializeCloseHandlers(){
  if (isClient() && !cgguc.closeHandlersInitialized) {
    cgguc.impl_1.initWindowCloseHandler();
    cgguc.closeHandlersInitialized = true;
  }
}
;
cgguc.maybeInitializeResizeHandlers = function maybeInitializeResizeHandlers(){
  if (isClient() && !cgguc.resizeHandlersInitialized) {
    cgguc.impl_1.initWindowResizeHandler();
    cgguc.resizeHandlersInitialized = true;
  }
}
;
cgguc.onClosed = function onClosed(){
  cgguc.$clinit_Window();
  if (cgguc.closeHandlersInitialized) {
    cggels.fire(cgguc.getHandlers(), null);
  }
}
;
cgguc.onClosing = function onClosing(){
  cgguc.$clinit_Window();
  var event_0;
  if (cgguc.closeHandlersInitialized) {
    event_0 = new cgguc.Window$ClosingEvent;
    cgguc.fireEvent_1(event_0);
    return event_0.getMessage();
  }
  return null;
}
;
cgguc.onResize_0 = function onResize_0(){
  cgguc.$clinit_Window();
  var height, width_0;
  if (cgguc.resizeHandlersInitialized) {
    width_0 = cgguc.getClientWidth();
    height = cgguc.getClientHeight();
    if (cgguc.lastResizeWidth != width_0 || cgguc.lastResizeHeight != height) {
      cgguc.lastResizeWidth = width_0;
      cgguc.lastResizeHeight = height;
      cggels.fire_1(cgguc.getHandlers(), width_0, height);
    }
  }
}
;
cgguc.scrollTo_0 = function scrollTo_0(left, top_0){
  cgguc.$clinit_Window();
  $wnd.scrollTo(left, top_0);
}
;
defineClass(259, 1, {1:1});
cgguc.closeHandlersInitialized = false;
cgguc.lastResizeHeight = 0;
cgguc.lastResizeWidth = 0;
cgguc.resizeHandlersInitialized = false;
cggl.Lcom_google_gwt_user_client_Window_2_classLit = createForClass('com.google.gwt.user.client', 'Window', 259, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Window$ClosingEvent = function $clinit_Window$ClosingEvent(){
  cgguc.$clinit_Window$ClosingEvent = emptyMethod;
  cgges.$clinit_GwtEvent();
  cgguc.TYPE_1 = new cgges.GwtEvent$Type;
}
;
cgguc.Window$ClosingEvent = function Window$ClosingEvent(){
  cgguc.$clinit_Window$ClosingEvent();
  cgges.GwtEvent.call(this);
  this.$init_69();
}
;
defineClass(144, 62, {1:1}, cgguc.Window$ClosingEvent);
_.$init_69 = function $init_69(){
  this.message_0 = null;
}
;
_.dispatch_0 = function dispatch_4(handler){
  this.dispatch_3(castTo(handler, 379));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return this.getAssociatedType_0();
}
;
_.dispatch_3 = function dispatch_5(handler){
  handler.onWindowClosing(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return cgguc.TYPE_1;
}
;
_.getMessage = function getMessage_1(){
  return this.message_0;
}
;
_.setMessage = function setMessage(message){
  this.message_0 = message;
}
;
cggl.Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 144, cggl.Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
cgguc.$clinit_Window$ClosingHandler = function $clinit_Window$ClosingHandler(){
  cgguc.$clinit_Window$ClosingHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_user_client_Window$ClosingHandler_2_classLit = createForInterface('com.google.gwt.user.client', 'Window/ClosingHandler');
cgguc.$clinit_Window$Location = function $clinit_Window$Location(){
  cgguc.$clinit_Window$Location = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc.getHash = function getHash(){
  cgguc.$clinit_Window$Location();
  return (cgguc.$clinit_Window() , cgguc.impl_1).getHash();
}
;
cgguc.getPath = function getPath(){
  cgguc.$clinit_Window$Location();
  return $wnd.location.pathname;
}
;
cgguc.getQueryString = function getQueryString(){
  cgguc.$clinit_Window$Location();
  return (cgguc.$clinit_Window() , cgguc.impl_1).getQueryString();
}
;
defineClass(260, 1, {1:1});
cgguc.cachedQueryString = '';
cggl.Lcom_google_gwt_user_client_Window$Location_2_classLit = createForClass('com.google.gwt.user.client', 'Window/Location', 260, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Window$Navigator = function $clinit_Window$Navigator(){
  cgguc.$clinit_Window$Navigator = emptyMethod;
}
;
defineClass(261, 1, {1:1});
cggl.Lcom_google_gwt_user_client_Window$Navigator_2_classLit = createForClass('com.google.gwt.user.client', 'Window/Navigator', 261, cggl.Ljava_lang_Object_2_classLit);
cgguc.$clinit_Window$ScrollEvent = function $clinit_Window$ScrollEvent(){
  cgguc.$clinit_Window$ScrollEvent = emptyMethod;
}
;
defineClass(262, 62, {1:1});
cggl.Lcom_google_gwt_user_client_Window$ScrollEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ScrollEvent', 262, cggl.Lcom_google_gwt_event_shared_GwtEvent_2_classLit);
cgguc.$clinit_Window$ScrollHandler = function $clinit_Window$ScrollHandler(){
  cgguc.$clinit_Window$ScrollHandler = emptyMethod;
}
;
cggl.Lcom_google_gwt_user_client_Window$ScrollHandler_2_classLit = createForInterface('com.google.gwt.user.client', 'Window/ScrollHandler');
cgguc.$clinit_Window$WindowHandlers = function $clinit_Window$WindowHandlers(){
  cgguc.$clinit_Window$WindowHandlers = emptyMethod;
  cgges.$clinit_HandlerManager();
}
;
cgguc.Window$WindowHandlers = function Window$WindowHandlers(){
  cgguc.$clinit_Window$WindowHandlers();
  cgges.HandlerManager.call(this, null);
  this.$init_70();
}
;
defineClass(145, 82, {1:1}, cgguc.Window$WindowHandlers);
_.$init_70 = function $init_70(){
}
;
cggl.Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 145, cggl.Lcom_google_gwt_event_shared_HandlerManager_2_classLit);
cgguci.$clinit_WindowImpl = function $clinit_WindowImpl(){
  cgguci.$clinit_WindowImpl = emptyMethod;
  jl.$clinit_Object();
}
;
cgguci.WindowImpl = function WindowImpl(){
  cgguci.$clinit_WindowImpl();
  Object_0.call(this);
  this.$init_71();
}
;
defineClass(41, 1, {41:1, 1:1}, cgguci.WindowImpl);
_.$init_71 = function $init_71(){
}
;
_.getHash = function getHash_0(){
  return $wnd.location.hash;
}
;
_.getQueryString = function getQueryString_0(){
  return $wnd.location.search;
}
;
_.initWindowCloseHandler = function initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(cgguc.onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      cgguc.onClosed();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}
;
_.initWindowResizeHandler = function initWindowResizeHandler(){
  var oldOnResize = $wnd.onresize;
  $wnd.onresize = $entry(function(evt){
    try {
      cgguc.onResize_0();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  );
}
;
cggl.Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImpl', 41, cggl.Ljava_lang_Object_2_classLit);
cgguci.$clinit_WindowImplMozilla = function $clinit_WindowImplMozilla(){
  cgguci.$clinit_WindowImplMozilla = emptyMethod;
  cgguci.$clinit_WindowImpl();
}
;
cgguci.WindowImplMozilla = function WindowImplMozilla(){
  cgguci.WindowImpl.call(this);
  this.$init_72();
}
;
defineClass(323, 41, {41:1, 1:1});
_.$init_72 = function $init_72(){
}
;
_.getHash = function getHash_1(){
  var href_0 = $wnd.location.href;
  var hashLoc = href_0.indexOf('#');
  return hashLoc > 0?href_0.substring(hashLoc):'';
}
;
cggl.Lcom_google_gwt_user_client_impl_WindowImplMozilla_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplMozilla', 323, cggl.Lcom_google_gwt_user_client_impl_WindowImpl_2_classLit);
cgguc2.$clinit_UserAgent = function $clinit_UserAgent(){
  cgguc2.$clinit_UserAgent = emptyMethod;
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgent_2_classLit = createForInterface('com.google.gwt.useragent.client', 'UserAgent');
cgguc2.$clinit_UserAgentAsserter = function $clinit_UserAgentAsserter(){
  cgguc2.$clinit_UserAgentAsserter = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentAsserter = function UserAgentAsserter(){
  cgguc2.$clinit_UserAgentAsserter();
  Object_0.call(this);
  this.$init_73();
}
;
cgguc2.assertCompileTimeUserAgent = function assertCompileTimeUserAgent(){
  var compileTimeValue, impl, runtimeValue;
  impl = castTo(new cgguc2.UserAgentImplSafari, 190);
  compileTimeValue = impl.getCompileTimeValue();
  runtimeValue = impl.getRuntimeValue();
  if (!jl.equals_Ljava_lang_Object__Z__devirtual$_2(compileTimeValue, runtimeValue)) {
    throw toJs(new cgguc2.UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue));
  }
}
;
cgguc2.scheduleUserAgentCheck = function scheduleUserAgentCheck(){
  $wnd.setTimeout($entry(cgguc2.assertCompileTimeUserAgent));
}
;
defineClass(89, 1, {43:1, 1:1}, cgguc2.UserAgentAsserter);
_.$init_73 = function $init_73(){
}
;
_.onModuleLoad = function onModuleLoad_1(){
  cgguc2.scheduleUserAgentCheck();
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentAsserter_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter', 89, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentAsserter$UserAgentAsserterDisabled = function $clinit_UserAgentAsserter$UserAgentAsserterDisabled(){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAsserterDisabled = emptyMethod;
}
;
defineClass(191, 1, {1:1});
cggl.Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAsserterDisabled_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAsserterDisabled', 191, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Error = function $clinit_Error(){
  jl.$clinit_Error = emptyMethod;
  jl.$clinit_Throwable();
}
;
jl.Error_0 = function Error_0(){
  jl.$clinit_Error();
  jl.Throwable.call(this);
  this.$init_74();
}
;
jl.Error_1 = function Error_1(message){
  jl.$clinit_Error();
  jl.Throwable_1.call(this, message);
  this.$init_74();
}
;
jl.Error_2 = function Error_2(message, cause){
  jl.$clinit_Error();
  jl.Throwable_2.call(this, message, cause);
  this.$init_74();
}
;
defineClass(51, 4, {3:1, 1:1, 4:1});
_.$init_74 = function $init_74(){
}
;
cggl.Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 51, cggl.Ljava_lang_Throwable_2_classLit);
jl.$clinit_AssertionError = function $clinit_AssertionError(){
  jl.$clinit_AssertionError = emptyMethod;
  jl.$clinit_Error();
}
;
jl.AssertionError = function AssertionError(){
  jl.$clinit_AssertionError();
  jl.Error_0.call(this);
  this.$init_75();
}
;
jl.AssertionError_0 = function AssertionError_0(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_12(message));
}
;
jl.AssertionError_1 = function AssertionError_1(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_13(message));
}
;
jl.AssertionError_2 = function AssertionError_2(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_14(message));
}
;
jl.AssertionError_3 = function AssertionError_3(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_15(message));
}
;
jl.AssertionError_4 = function AssertionError_4(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_16(message));
}
;
jl.AssertionError_5 = function AssertionError_5(message){
  jl.$clinit_AssertionError();
  jl.Error_2.call(this, valueOf_17(message), instanceOf(message, 4)?castTo(message, 4):null);
  this.$init_75();
}
;
jl.AssertionError_6 = function AssertionError_6(message){
  jl.Error_1.call(this, message);
  this.$init_75();
}
;
jl.AssertionError_7 = function AssertionError_7(message){
  jl.$clinit_AssertionError();
  jl.AssertionError_6.call(this, jl.valueOf_18(message));
}
;
defineClass(8, 51, {3:1, 1:1, 4:1}, jl.AssertionError, jl.AssertionError_0, jl.AssertionError_1, jl.AssertionError_2, jl.AssertionError_3, jl.AssertionError_4, jl.AssertionError_5, jl.AssertionError_7);
_.$init_75 = function $init_75(){
}
;
cggl.Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 8, cggl.Ljava_lang_Error_2_classLit);
cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError = function $clinit_UserAgentAsserter$UserAgentAssertionError(){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError = emptyMethod;
  jl.$clinit_AssertionError();
}
;
cgguc2.UserAgentAsserter$UserAgentAssertionError = function UserAgentAsserter$UserAgentAssertionError(compileTimeValue, runtimeValue){
  cgguc2.$clinit_UserAgentAsserter$UserAgentAssertionError();
  jl.AssertionError_5.call(this, 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (' + compileTimeValue + ') ' + 'does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.');
  this.$init_76();
}
;
defineClass(94, 8, {3:1, 1:1, 4:1}, cgguc2.UserAgentAsserter$UserAgentAssertionError);
_.$init_76 = function $init_76(){
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 94, cggl.Ljava_lang_AssertionError_2_classLit);
cgguc2.$clinit_UserAgentImplGecko1_8 = function $clinit_UserAgentImplGecko1_8(){
  cgguc2.$clinit_UserAgentImplGecko1_8 = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplGecko1_8 = function UserAgentImplGecko1_8(){
  Object_0.call(this);
  this.$init_77();
}
;
defineClass(321, 1, {1:1});
_.$init_77 = function $init_77(){
}
;
_.getCompileTimeValue = function getCompileTimeValue(){
  return 'gecko1_8';
}
;
_.getRuntimeValue = function getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplGecko1_8', 321, cggl.Ljava_lang_Object_2_classLit);
cgguc2.$clinit_UserAgentImplSafari = function $clinit_UserAgentImplSafari(){
  cgguc2.$clinit_UserAgentImplSafari = emptyMethod;
  jl.$clinit_Object();
}
;
cgguc2.UserAgentImplSafari = function UserAgentImplSafari(){
  cgguc2.$clinit_UserAgentImplSafari();
  Object_0.call(this);
  this.$init_78();
}
;
defineClass(93, 1, {190:1, 1:1}, cgguc2.UserAgentImplSafari);
_.$init_78 = function $init_78(){
}
;
_.getCompileTimeValue = function getCompileTimeValue_0(){
  return 'safari';
}
;
_.getRuntimeValue = function getRuntimeValue_0(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}
;
cggl.Lcom_google_gwt_useragent_client_UserAgentImplSafari_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentImplSafari', 93, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_SimpleEventBus$1 = function $clinit_SimpleEventBus$1(){
  cgwbes.$clinit_SimpleEventBus$1 = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.SimpleEventBus$1 = function SimpleEventBus$1(this$0, val$type, val$source, val$handler){
  cgwbes.$clinit_SimpleEventBus$1();
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
  Object_0.call(this);
  this.$init_79();
}
;
defineClass(149, 1, {1:1}, cgwbes.SimpleEventBus$1);
_.$init_79 = function $init_79(){
}
;
_.removeHandler = function removeHandler_0(){
  this.this$01.doRemove(this.val$type2, this.val$source3, this.val$handler4);
}
;
cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 149, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_SimpleEventBus$Command = function $clinit_SimpleEventBus$Command(){
  cgwbes.$clinit_SimpleEventBus$Command = emptyMethod;
}
;
cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2_classLit = createForInterface('com.google.web.bindery.event.shared', 'SimpleEventBus/Command');
cgwbes.$clinit_SimpleEventBus$2 = function $clinit_SimpleEventBus$2(){
  cgwbes.$clinit_SimpleEventBus$2 = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.SimpleEventBus$2 = function SimpleEventBus$2(this$0, val$type, val$source, val$handler){
  cgwbes.$clinit_SimpleEventBus$2();
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
  Object_0.call(this);
  this.$init_80();
}
;
defineClass(150, 1, {185:1, 1:1}, cgwbes.SimpleEventBus$2);
_.$init_80 = function $init_80(){
}
;
_.execute_1 = function execute_6(){
  this.this$01.doAddNow(this.val$type2, this.val$source3, this.val$handler4);
}
;
cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 150, cggl.Ljava_lang_Object_2_classLit);
cgwbes.$clinit_SimpleEventBus$3 = function $clinit_SimpleEventBus$3(){
  cgwbes.$clinit_SimpleEventBus$3 = emptyMethod;
  jl.$clinit_Object();
}
;
cgwbes.SimpleEventBus$3 = function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  cgwbes.$clinit_SimpleEventBus$3();
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
  Object_0.call(this);
  this.$init_81();
}
;
defineClass(151, 1, {185:1, 1:1}, cgwbes.SimpleEventBus$3);
_.$init_81 = function $init_81(){
}
;
_.execute_1 = function execute_7(){
  this.this$01.doRemoveNow(this.val$type2, this.val$source3, this.val$handler4);
}
;
cggl.Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 151, cggl.Ljava_lang_Object_2_classLit);
ec.$clinit_Transferable = function $clinit_Transferable(){
  ec.$clinit_Transferable = emptyMethod;
}
;
ec.$clinit_ArrayBuffer_0 = function $clinit_ArrayBuffer_0(){
  ec.$clinit_ArrayBuffer_0 = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$clinit_ArrayBufferView_0 = function $clinit_ArrayBufferView_0(){
  ec.$clinit_ArrayBufferView_0 = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$clinit_AsyncIterator = function $clinit_AsyncIterator(){
  ec.$clinit_AsyncIterator = emptyMethod;
}
;
ec.$clinit_Function = function $clinit_Function(){
  ec.$clinit_Function = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$bind = function $bind(this$static, selfObj, var_args){
  return this$static.bind.apply(this$static, [jb.uncheckedCast_0(selfObj)].concat(ensureNotNull(var_args)));
}
;
ec.$clinit_JsIterable = function $clinit_JsIterable(){
  ec.$clinit_JsIterable = emptyMethod;
}
;
jb.$clinit_JsArrayLike = function $clinit_JsArrayLike(){
  jb.$clinit_JsArrayLike = emptyMethod;
}
;
jb.$asList_19 = function $asList_19(this$static){
  jb.$clinit_JsArrayLike();
  var asArray;
  asArray = jb.uncheckedCast_0(this$static);
  return ju.asList(asArray);
}
;
jb.$delete_26 = function $delete_26(this$static, index_0){
  jb.$clinit_JsArrayLike();
  jb.deleteAt(this$static, index_0);
}
;
jb.$getAt_19 = function $getAt_19(this$static, index_0){
  jb.$clinit_JsArrayLike();
  return jb.getAt(this$static, index_0);
}
;
jb.$getAtAsAny_19 = function $getAtAsAny_19(this$static, index_0){
  jb.$clinit_JsArrayLike();
  return castToUnknownNative(jb.getAt(this$static, index_0));
}
;
jb.$getLength_19 = function $getLength_19(this$static){
  jb.$clinit_JsArrayLike();
  return jb.getLength(this$static);
}
;
jb.$setAt_19 = function $setAt_19(this$static, index_0, value_0){
  jb.$clinit_JsArrayLike();
  jb.setAt(this$static, index_0, value_0);
}
;
jb.$setLength_22 = function $setLength_22(this$static, length_0){
  jb.$clinit_JsArrayLike();
  jb.setLength_1(this$static, length_0);
}
;
ec.$clinit_JsArray_0 = function $clinit_JsArray_0(){
  ec.$clinit_JsArray_0 = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ec.$asArray = function $asArray(this$static, reference){
  return ji2.stampJavaTypeInfo_1(this$static, reference);
}
;
ec.$asList = function $asList(this$static){
  return jb.$asList_19(this$static);
}
;
ec.$delete = function $delete(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ec.$getAt = function $getAt(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ec.$getAtAsAny = function $getAtAsAny(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ec.$getLength = function $getLength(this$static){
  return jb.$getLength_19(this$static);
}
;
ec.$setAt = function $setAt(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ec.$setLength_2 = function $setLength_2(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ec.asJsArray = function asJsArray(array){
  return jb.uncheckedCast_0(array);
}
;
ec.from_0 = function from_0(arrayLike){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike));
}
;
ec.from_1 = function from_1(arrayLike, mapFn){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn);
}
;
ec.from_2 = function from_2(arrayLike, mapFn, this_){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn, this_);
}
;
ec.from_3 = function from_3(arrayLike){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike));
}
;
ec.from_4 = function from_4(arrayLike, mapFn){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn);
}
;
ec.from_5 = function from_5(arrayLike, mapFn, this_){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn, this_);
}
;
ec.from_6 = function from_6(arrayLike){
  ec.$clinit_JsArray_0();
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike));
}
;
ec.from_7 = function from_7(arrayLike, mapFn){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn);
}
;
ec.from_8 = function from_8(arrayLike, mapFn, this_){
  return $wnd.Array.from(jb.uncheckedCast_0(arrayLike), mapFn, this_);
}
;
ec.from_9 = function from_9(arrayLike){
  return ec.from_6(jb.uncheckedCast_0(arrayLike));
}
;
ec.from_10 = function from_10(arrayLike, mapFn){
  return ec.from_7(jb.uncheckedCast_0(arrayLike), mapFn);
}
;
ec.from_11 = function from_11(arrayLike, mapFn, this_){
  return ec.from_8(jb.uncheckedCast_0(arrayLike), mapFn, this_);
}
;
ec.$clinit_JsArray$EntriesJsIteratorIterableTypeParameterArrayUnionType = function $clinit_JsArray$EntriesJsIteratorIterableTypeParameterArrayUnionType(){
  ec.$clinit_JsArray$EntriesJsIteratorIterableTypeParameterArrayUnionType = emptyMethod;
}
;
ec.$asDouble = function $asDouble(this$static){
  return castToDouble(jb.cast(this$static));
}
;
ec.$asT = function $asT(this$static){
  return jb.cast(this$static);
}
;
ec.$isDouble = function $isDouble(this$static){
  return instanceOfDouble(this$static);
}
;
ec.of = function of(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$onInvoke_2 = function $onInvoke_2(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$onInvoke_3 = function $onInvoke_3(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$onInvoke_4 = function $onInvoke_4(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$onInvoke_6 = function $onInvoke_6(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$clinit_JsArray$FromArrayLikeUnionType = function $clinit_JsArray$FromArrayLikeUnionType(){
  ec.$clinit_JsArray$FromArrayLikeUnionType = emptyMethod;
}
;
ec.$asJsArrayLike = function $asJsArrayLike(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ec.$asJsIterable = function $asJsIterable(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ec.$asString = function $asString(this$static){
  return jb.asString(this$static);
}
;
ec.$isString = function $isString(this$static){
  return instanceOfString(this$static);
}
;
ec.of_0 = function of_0(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$onInvoke_8 = function $onInvoke_8(this$static, p0, p1){
  return this$static(jb.uncheckedCast_0(p0), p1);
}
;
ec.$onInvoke_9 = function $onInvoke_9(this$static, p0, p1){
  return this$static(jb.uncheckedCast_0(p0), p1);
}
;
ec.$clinit_JsArray$FromMapFn$P0UnionType = function $clinit_JsArray$FromMapFn$P0UnionType(){
  ec.$clinit_JsArray$FromMapFn$P0UnionType = emptyMethod;
}
;
ec.$asString_0 = function $asString_0(this$static){
  return jb.asString(this$static);
}
;
ec.$asT_0 = function $asT_0(this$static){
  return jb.cast(this$static);
}
;
ec.$isString_0 = function $isString_0(this$static){
  return instanceOfString(this$static);
}
;
ec.of_1 = function of_1(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$onInvoke_10 = function $onInvoke_10(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$onInvoke_11 = function $onInvoke_11(this$static, p0, p1, p2, p3){
  return this$static(p0, p1, p2, jb.uncheckedCast_0(p3));
}
;
ec.$onInvoke_12 = function $onInvoke_12(this$static, p0, p1, p2, p3){
  return this$static(p0, p1, p2, jb.uncheckedCast_0(p3));
}
;
ec.$onInvoke_13 = function $onInvoke_13(this$static, p0, p1, p2){
  return this$static(p0, p1, jb.uncheckedCast_0(p2));
}
;
ec.$clinit_JsDate_0 = function $clinit_JsDate_0(){
  ec.$clinit_JsDate_0 = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$toLocaleDateString_0 = function $toLocaleDateString_0(this$static, locales){
  return this$static.toLocaleDateString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleDateString_1 = function $toLocaleDateString_1(this$static, locales, options){
  return this$static.toLocaleDateString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleDateString_2 = function $toLocaleDateString_2(this$static, locales, options){
  return ec.$toLocaleDateString_1(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleDateString_3 = function $toLocaleDateString_3(this$static, locales, options){
  return this$static.toLocaleDateString(locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleDateString_4 = function $toLocaleDateString_4(this$static, locales){
  return this$static.toLocaleDateString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleDateString_5 = function $toLocaleDateString_5(this$static, locales, options){
  return this$static.toLocaleDateString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleDateString_6 = function $toLocaleDateString_6(this$static, locales, options){
  return ec.$toLocaleDateString_5(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleDateString_7 = function $toLocaleDateString_7(this$static, locales){
  return ec.$toLocaleDateString_0(this$static, jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleDateString_8 = function $toLocaleDateString_8(this$static, locales, options){
  return ec.$toLocaleDateString_1(this$static, jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleDateString_9 = function $toLocaleDateString_9(this$static, locales, options){
  return ec.$toLocaleDateString_8(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleString_0 = function $toLocaleString_0(this$static, locales){
  return this$static.toLocaleString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleString_1 = function $toLocaleString_1(this$static, locales, options){
  return this$static.toLocaleString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleString_2 = function $toLocaleString_2(this$static, locales, options){
  return ec.$toLocaleString_1(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleString_3 = function $toLocaleString_3(this$static, locales, options){
  return this$static.toLocaleString(locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleString_4 = function $toLocaleString_4(this$static, locales){
  return this$static.toLocaleString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleString_5 = function $toLocaleString_5(this$static, locales, options){
  return this$static.toLocaleString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleString_6 = function $toLocaleString_6(this$static, locales, options){
  return ec.$toLocaleString_5(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleString_7 = function $toLocaleString_7(this$static, locales){
  return ec.$toLocaleString_0(this$static, jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleString_8 = function $toLocaleString_8(this$static, locales, options){
  return ec.$toLocaleString_1(this$static, jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleString_9 = function $toLocaleString_9(this$static, locales, options){
  return ec.$toLocaleString_8(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleTimeString_0 = function $toLocaleTimeString_0(this$static, locales){
  return this$static.toLocaleTimeString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleTimeString_1 = function $toLocaleTimeString_1(this$static, locales, options){
  return this$static.toLocaleTimeString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleTimeString_2 = function $toLocaleTimeString_2(this$static, locales, options){
  return ec.$toLocaleTimeString_1(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleTimeString_3 = function $toLocaleTimeString_3(this$static, locales, options){
  return this$static.toLocaleTimeString(locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleTimeString_4 = function $toLocaleTimeString_4(this$static, locales){
  return this$static.toLocaleTimeString(jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleTimeString_5 = function $toLocaleTimeString_5(this$static, locales, options){
  return this$static.toLocaleTimeString(jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleTimeString_6 = function $toLocaleTimeString_6(this$static, locales, options){
  return ec.$toLocaleTimeString_5(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$toLocaleTimeString_7 = function $toLocaleTimeString_7(this$static, locales){
  return ec.$toLocaleTimeString_0(this$static, jb.uncheckedCast_0(locales));
}
;
ec.$toLocaleTimeString_8 = function $toLocaleTimeString_8(this$static, locales, options){
  return ec.$toLocaleTimeString_1(this$static, jb.uncheckedCast_0(locales), options);
}
;
ec.$toLocaleTimeString_9 = function $toLocaleTimeString_9(this$static, locales, options){
  return ec.$toLocaleTimeString_8(this$static, locales, jb.uncheckedCast_0(options));
}
;
ec.$clinit_JsDate$ToLocaleDateStringLocalesUnionType = function $clinit_JsDate$ToLocaleDateStringLocalesUnionType(){
  ec.$clinit_JsDate$ToLocaleDateStringLocalesUnionType = emptyMethod;
}
;
ec.$asJsArray = function $asJsArray(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$asString_1 = function $asString_1(this$static){
  return jb.asString(this$static);
}
;
ec.$isJsArray = function $isJsArray(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.$isString_1 = function $isString_1(this$static){
  return instanceOfString(this$static);
}
;
ec.of_2 = function of_2(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsDate$ToLocaleStringLocalesUnionType = function $clinit_JsDate$ToLocaleStringLocalesUnionType(){
  ec.$clinit_JsDate$ToLocaleStringLocalesUnionType = emptyMethod;
}
;
ec.$asJsArray_0 = function $asJsArray_0(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$asString_2 = function $asString_2(this$static){
  return jb.asString(this$static);
}
;
ec.$isJsArray_0 = function $isJsArray_0(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.$isString_2 = function $isString_2(this$static){
  return instanceOfString(this$static);
}
;
ec.of_3 = function of_3(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsDate$ToLocaleTimeStringLocalesUnionType = function $clinit_JsDate$ToLocaleTimeStringLocalesUnionType(){
  ec.$clinit_JsDate$ToLocaleTimeStringLocalesUnionType = emptyMethod;
}
;
ec.$asJsArray_1 = function $asJsArray_1(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$asString_3 = function $asString_3(this$static){
  return jb.asString(this$static);
}
;
ec.$isJsArray_1 = function $isJsArray_1(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.$isString_3 = function $isString_3(this$static){
  return instanceOfString(this$static);
}
;
ec.of_4 = function of_4(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsError = function $clinit_JsError(){
  ec.$clinit_JsError = emptyMethod;
  jl.$clinit_Object();
}
;
ec.captureStackTrace_1 = function captureStackTrace_1(error){
  $wnd.Error.captureStackTrace(jb.uncheckedCast_0(error));
}
;
ec.captureStackTrace_2 = function captureStackTrace_2(error, constructor_0){
  $wnd.Error.captureStackTrace(jb.uncheckedCast_0(error), constructor_0);
}
;
ec.$clinit_JsIIterableResult = function $clinit_JsIIterableResult(){
  ec.$clinit_JsIIterableResult = emptyMethod;
}
;
ec.create_7 = function create_7(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ec.$clinit_JsIterator = function $clinit_JsIterator(){
  ec.$clinit_JsIterator = emptyMethod;
}
;
ec.$clinit_JsIteratorIterable = function $clinit_JsIteratorIterable(){
  ec.$clinit_JsIteratorIterable = emptyMethod;
}
;
ec.$clinit_JsObject = function $clinit_JsObject(){
  ec.$clinit_JsObject = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$isPrototypeOf = function $isPrototypeOf(this$static, other){
  return this$static.isPrototypeOf(jb.uncheckedCast_0(other));
}
;
ec.$propertyIsEnumerable = function $propertyIsEnumerable(this$static, propertyName){
  return this$static.propertyIsEnumerable(jb.uncheckedCast_0(propertyName));
}
;
ec.$propertyIsEnumerable_0 = function $propertyIsEnumerable_0(this$static, propertyName){
  return this$static.propertyIsEnumerable(jb.uncheckedCast_0(propertyName));
}
;
ec.assign = function assign(target, var_args){
  return $wnd.Object.assign.apply(null, [jb.uncheckedCast_0(target)].concat(ensureNotNull(jb.uncheckedCast_0(var_args))));
}
;
ec.create_8 = function create_8(proto){
  return $wnd.Object.create(jb.uncheckedCast_0(proto));
}
;
ec.create_9 = function create_9(proto, properties){
  return $wnd.Object.create(jb.uncheckedCast_0(proto), properties);
}
;
ec.defineProperty = function defineProperty(obj, prop, descriptor){
  return $wnd.Object.defineProperty(obj, jb.uncheckedCast_0(prop), descriptor);
}
;
ec.defineProperty_0 = function defineProperty_0(obj, prop, descriptor){
  return $wnd.Object.defineProperty(obj, jb.uncheckedCast_0(prop), descriptor);
}
;
ec.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(obj, prop){
  return $wnd.Object.getOwnPropertyDescriptor(obj, jb.uncheckedCast_0(prop));
}
;
ec.getOwnPropertyDescriptor_0 = function getOwnPropertyDescriptor_0(obj, prop){
  return $wnd.Object.getOwnPropertyDescriptor(obj, jb.uncheckedCast_0(prop));
}
;
ec.getOwnPropertyDescriptors = function getOwnPropertyDescriptors(obj){
  return $wnd.Object.getOwnPropertyDescriptors(jb.uncheckedCast_0(obj));
}
;
ec.getOwnPropertyNames = function getOwnPropertyNames(obj){
  return $wnd.Object.getOwnPropertyNames(jb.uncheckedCast_0(obj));
}
;
ec.getOwnPropertySymbols = function getOwnPropertySymbols(obj){
  return $wnd.Object.getOwnPropertySymbols(jb.uncheckedCast_0(obj));
}
;
ec.getPrototypeOf_0 = function getPrototypeOf_0(obj){
  return $wnd.Object.getPrototypeOf(jb.uncheckedCast_0(obj));
}
;
ec.isExtensible = function isExtensible(obj){
  return $wnd.Object.isExtensible(jb.uncheckedCast_0(obj));
}
;
ec.isFrozen = function isFrozen(obj){
  return $wnd.Object.isFrozen(jb.uncheckedCast_0(obj));
}
;
ec.isSealed = function isSealed(obj){
  return $wnd.Object.isSealed(jb.uncheckedCast_0(obj));
}
;
ec.keys_1 = function keys_1(obj){
  return $wnd.Object.keys(jb.uncheckedCast_0(obj));
}
;
ec.setPrototypeOf = function setPrototypeOf(obj, proto){
  return $wnd.Object.setPrototypeOf(jb.uncheckedCast_0(obj), proto);
}
;
ec.$clinit_JsObject$DefinePropertyPropUnionType = function $clinit_JsObject$DefinePropertyPropUnionType(){
  ec.$clinit_JsObject$DefinePropertyPropUnionType = emptyMethod;
}
;
ec.$asObject = function $asObject(this$static){
  return jb.cast(this$static);
}
;
ec.$asString_4 = function $asString_4(this$static){
  return jb.asString(this$static);
}
;
ec.$isObject = function $isObject(this$static){
  return jsNotEquals(this$static, null);
}
;
ec.$isString_4 = function $isString_4(this$static){
  return instanceOfString(this$static);
}
;
ec.of_5 = function of_5(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsObject$EntriesArrayArrayUnionType = function $clinit_JsObject$EntriesArrayArrayUnionType(){
  ec.$clinit_JsObject$EntriesArrayArrayUnionType = emptyMethod;
}
;
ec.$asString_5 = function $asString_5(this$static){
  return jb.asString(this$static);
}
;
ec.$asT_1 = function $asT_1(this$static){
  return jb.cast(this$static);
}
;
ec.$isString_5 = function $isString_5(this$static){
  return instanceOfString(this$static);
}
;
ec.of_6 = function of_6(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsObject$GetOwnPropertyDescriptorPropUnionType = function $clinit_JsObject$GetOwnPropertyDescriptorPropUnionType(){
  ec.$clinit_JsObject$GetOwnPropertyDescriptorPropUnionType = emptyMethod;
}
;
ec.$asObject_0 = function $asObject_0(this$static){
  return jb.cast(this$static);
}
;
ec.$asString_6 = function $asString_6(this$static){
  return jb.asString(this$static);
}
;
ec.$isObject_0 = function $isObject_0(this$static){
  return jsNotEquals(this$static, null);
}
;
ec.$isString_6 = function $isString_6(this$static){
  return instanceOfString(this$static);
}
;
ec.of_7 = function of_7(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsObject$PropertyIsEnumerablePropertyNameUnionType = function $clinit_JsObject$PropertyIsEnumerablePropertyNameUnionType(){
  ec.$clinit_JsObject$PropertyIsEnumerablePropertyNameUnionType = emptyMethod;
}
;
ec.$asObject_1 = function $asObject_1(this$static){
  return jb.cast(this$static);
}
;
ec.$asString_7 = function $asString_7(this$static){
  return jb.asString(this$static);
}
;
ec.$isObject_1 = function $isObject_1(this$static){
  return jsNotEquals(this$static, null);
}
;
ec.$isString_7 = function $isString_7(this$static){
  return instanceOfString(this$static);
}
;
ec.of_8 = function of_8(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsWeakMap = function $clinit_JsWeakMap(){
  ec.$clinit_JsWeakMap = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$clinit_JsWeakMap$ConstructorIterableJsIterableTypeParameterArrayUnionType = function $clinit_JsWeakMap$ConstructorIterableJsIterableTypeParameterArrayUnionType(){
  ec.$clinit_JsWeakMap$ConstructorIterableJsIterableTypeParameterArrayUnionType = emptyMethod;
}
;
ec.$asKEY = function $asKEY(this$static){
  return jb.cast(this$static);
}
;
ec.$asVALUE = function $asVALUE(this$static){
  return jb.cast(this$static);
}
;
ec.of_9 = function of_9(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_JsWeakMap$ConstructorIterableUnionType = function $clinit_JsWeakMap$ConstructorIterableUnionType(){
  ec.$clinit_JsWeakMap$ConstructorIterableUnionType = emptyMethod;
}
;
ec.$asJsArray_2 = function $asJsArray_2(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$asJsIterable_0 = function $asJsIterable_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ec.$isJsArray_2 = function $isJsArray_2(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.of_10 = function of_10(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_ObjectPropertyDescriptor = function $clinit_ObjectPropertyDescriptor(){
  ec.$clinit_ObjectPropertyDescriptor = emptyMethod;
}
;
ec.create_10 = function create_10(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ec.$clinit_SharedArrayBuffer = function $clinit_SharedArrayBuffer(){
  ec.$clinit_SharedArrayBuffer = emptyMethod;
  jl.$clinit_Object();
}
;
ec.$clinit_TypedArray = function $clinit_TypedArray(){
  ec.$clinit_TypedArray = emptyMethod;
  ec.$clinit_ArrayBufferView_0();
  jb.$clinit_JsArrayLike();
}
;
ec.$asList_0 = function $asList_0(this$static){
  return jb.$asList_19(this$static);
}
;
ec.$delete_0 = function $delete_0(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ec.$getAt_0 = function $getAt_0(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ec.$getAtAsAny_0 = function $getAtAsAny_0(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ec.$getLength_0 = function $getLength_0(this$static){
  return jb.$getLength_19(this$static);
}
;
ec.$set_6 = function $set_6(this$static, array){
  this$static.set(jb.uncheckedCast_0(array));
}
;
ec.$set_7 = function $set_7(this$static, array, offset){
  this$static.set(jb.uncheckedCast_0(array), offset);
}
;
ec.$set_8 = function $set_8(this$static, array){
  this$static.set(jb.uncheckedCast_0(array));
}
;
ec.$set_9 = function $set_9(this$static, array, offset){
  this$static.set(jb.uncheckedCast_0(array), offset);
}
;
ec.$set_10 = function $set_10(this$static, array){
  ec.$set_8(this$static, jb.uncheckedCast_0(array));
}
;
ec.$set_11 = function $set_11(this$static, array, offset){
  ec.$set_9(this$static, jb.uncheckedCast_0(array), offset);
}
;
ec.$setAt_0 = function $setAt_0(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ec.$setLength_3 = function $setLength_3(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ec.$clinit_TypedArray$ReduceCallbackFn$P0UnionType = function $clinit_TypedArray$ReduceCallbackFn$P0UnionType(){
  ec.$clinit_TypedArray$ReduceCallbackFn$P0UnionType = emptyMethod;
}
;
ec.$asDouble_0 = function $asDouble_0(this$static){
  return jb.asDouble_2(this$static);
}
;
ec.$asINIT = function $asINIT(this$static){
  return jb.cast(this$static);
}
;
ec.$asRET = function $asRET(this$static){
  return jb.cast(this$static);
}
;
ec.$isDouble_0 = function $isDouble_0(this$static){
  return instanceOfDouble(this$static);
}
;
ec.of_11 = function of_11(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_TypedArray$ReduceRightCallbackFn$P0UnionType = function $clinit_TypedArray$ReduceRightCallbackFn$P0UnionType(){
  ec.$clinit_TypedArray$ReduceRightCallbackFn$P0UnionType = emptyMethod;
}
;
ec.$asDouble_1 = function $asDouble_1(this$static){
  return jb.asDouble_2(this$static);
}
;
ec.$asINIT_0 = function $asINIT_0(this$static){
  return jb.cast(this$static);
}
;
ec.$asRET_0 = function $asRET_0(this$static){
  return jb.cast(this$static);
}
;
ec.$isDouble_1 = function $isDouble_1(this$static){
  return instanceOfDouble(this$static);
}
;
ec.of_12 = function of_12(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_TypedArray$SetArrayUnionType = function $clinit_TypedArray$SetArrayUnionType(){
  ec.$clinit_TypedArray$SetArrayUnionType = emptyMethod;
}
;
ec.$asArrayBufferView = function $asArrayBufferView(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ec.$asJsArray_3 = function $asJsArray_3(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$isArrayBufferView = function $isArrayBufferView(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ec.$isJsArray_3 = function $isJsArray_3(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.of_13 = function of_13(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_Uint8ClampedArray_0 = function $clinit_Uint8ClampedArray_0(){
  ec.$clinit_Uint8ClampedArray_0 = emptyMethod;
  ec.$clinit_TypedArray();
  ec.BYTES_PER_ELEMENT_7 = (ec.$clinit_Uint8ClampedArray__Constants() , $wnd.Uint8ClampedArray.BYTES_PER_ELEMENT);
}
;
ec.from_12 = function from_12(source){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source));
}
;
ec.from_13 = function from_13(source, mapFn){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn);
}
;
ec.from_14 = function from_14(source, mapFn, this_){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn, this_);
}
;
ec.from_15 = function from_15(source){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source));
}
;
ec.from_16 = function from_16(source, mapFn){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn);
}
;
ec.from_17 = function from_17(source, mapFn, this_){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn, this_);
}
;
ec.from_18 = function from_18(source){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source));
}
;
ec.from_19 = function from_19(source, mapFn){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn);
}
;
ec.from_20 = function from_20(source, mapFn, this_){
  return $wnd.Uint8ClampedArray.from(jb.uncheckedCast_0(source), mapFn, this_);
}
;
ec.from_21 = function from_21(source){
  return ec.from_18(jb.uncheckedCast_0(source));
}
;
ec.from_22 = function from_22(source, mapFn){
  return ec.from_19(jb.uncheckedCast_0(source), mapFn);
}
;
ec.from_23 = function from_23(source, mapFn, this_){
  return ec.from_20(jb.uncheckedCast_0(source), mapFn, this_);
}
;
ec.BYTES_PER_ELEMENT_7 = 0;
ec.$clinit_Uint8ClampedArray$ConstructorLengthUnionType = function $clinit_Uint8ClampedArray$ConstructorLengthUnionType(){
  ec.$clinit_Uint8ClampedArray$ConstructorLengthUnionType = emptyMethod;
}
;
ec.$asArrayBuffer = function $asArrayBuffer(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ec.$asArrayBufferView_0 = function $asArrayBufferView_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ec.$asInt = function $asInt(this$static){
  return jb.asInt_0(this$static);
}
;
ec.$asJsArray_4 = function $asJsArray_4(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ec.$asSharedArrayBuffer = function $asSharedArrayBuffer(this$static){
  return castToNative(jb.cast(this$static), $wnd.SharedArrayBuffer);
}
;
ec.$isArrayBuffer = function $isArrayBuffer(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ec.$isArrayBufferView_0 = function $isArrayBufferView_0(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ec.$isInt = function $isInt(this$static){
  return instanceOfDouble(this$static);
}
;
ec.$isJsArray_4 = function $isJsArray_4(this$static){
  return instanceOfJsArray(this$static);
}
;
ec.$isSharedArrayBuffer = function $isSharedArrayBuffer(this$static){
  return instanceOfNative(this$static, $wnd.SharedArrayBuffer);
}
;
ec.of_14 = function of_14(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_Uint8ClampedArray$FromSourceUnionType = function $clinit_Uint8ClampedArray$FromSourceUnionType(){
  ec.$clinit_Uint8ClampedArray$FromSourceUnionType = emptyMethod;
}
;
ec.$asJsArrayLike_0 = function $asJsArrayLike_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ec.$asJsIterable_1 = function $asJsIterable_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ec.$asString_8 = function $asString_8(this$static){
  return jb.asString(this$static);
}
;
ec.$isString_8 = function $isString_8(this$static){
  return instanceOfString(this$static);
}
;
ec.of_15 = function of_15(o){
  return castToUnknownNative(jb.cast(o));
}
;
ec.$clinit_Uint8ClampedArray__Constants = function $clinit_Uint8ClampedArray__Constants(){
  ec.$clinit_Uint8ClampedArray__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_EventTarget = function $clinit_EventTarget(){
  ed.$clinit_EventTarget = emptyMethod;
}
;
ed.$addEventListener_3 = function $addEventListener_3(this$static, type_0, listener, options){
  ed.$clinit_EventTarget();
  this$static.addEventListener(type_0, listener, jb.uncheckedCast_0(options));
}
;
ed.$addEventListener_4 = function $addEventListener_4(this$static, type_0, listener, options){
  ed.$clinit_EventTarget();
  this$static.addEventListener(type_0, listener, jb.uncheckedCast_0(options));
}
;
ed.$removeEventListener_3 = function $removeEventListener_3(this$static, type_0, listener, options){
  ed.$clinit_EventTarget();
  this$static.removeEventListener(type_0, listener, jb.uncheckedCast_0(options));
}
;
ed.$removeEventListener_4 = function $removeEventListener_4(this$static, type_0, listener, options){
  ed.$clinit_EventTarget();
  this$static.removeEventListener(type_0, listener, jb.uncheckedCast_0(options));
}
;
ed.$clinit_AbortSignal = function $clinit_AbortSignal(){
  ed.$clinit_AbortSignal = emptyMethod;
}
;
ed.create_11 = function create_11(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_EventListenerOptions = function $clinit_EventListenerOptions(){
  ed.$clinit_EventListenerOptions = emptyMethod;
}
;
ed.create_31 = function create_31(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_AddEventListenerOptions = function $clinit_AddEventListenerOptions(){
  ed.$clinit_AddEventListenerOptions = emptyMethod;
}
;
ed.create_12 = function create_12(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ApplicationCache = function $clinit_ApplicationCache(){
  ed.$clinit_ApplicationCache = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
  ed.CHECKING = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.CHECKING);
  ed.DOWNLOADING = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.DOWNLOADING);
  ed.IDLE = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.IDLE);
  ed.OBSOLETE = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.OBSOLETE);
  ed.UNCACHED = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.UNCACHED);
  ed.UPDATEREADY = (ed.$clinit_ApplicationCache__Constants() , $wnd.ApplicationCache.UPDATEREADY);
}
;
ed.$addEventListener = function $addEventListener(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_0 = function $addEventListener_0(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener = function $removeEventListener(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_0 = function $removeEventListener_0(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.CHECKING = 0;
ed.DOWNLOADING = 0;
ed.IDLE = 0;
ed.OBSOLETE = 0;
ed.UNCACHED = 0;
ed.UPDATEREADY = 0;
ed.$clinit_ApplicationCache__Constants = function $clinit_ApplicationCache__Constants(){
  ed.$clinit_ApplicationCache__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_AssignedNodesOptions = function $clinit_AssignedNodesOptions(){
  ed.$clinit_AssignedNodesOptions = emptyMethod;
}
;
ed.create_13 = function create_13(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Node_0 = function $clinit_Node_0(){
  ed.$clinit_Node_0 = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
  ed.ATTRIBUTE_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.ATTRIBUTE_NODE);
  ed.CDATA_SECTION_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.CDATA_SECTION_NODE);
  ed.COMMENT_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.COMMENT_NODE);
  ed.DOCUMENT_FRAGMENT_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_FRAGMENT_NODE);
  ed.DOCUMENT_NODE_0 = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_NODE);
  ed.DOCUMENT_POSITION_CONTAINED_BY = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_CONTAINED_BY);
  ed.DOCUMENT_POSITION_CONTAINS = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_CONTAINS);
  ed.DOCUMENT_POSITION_DISCONNECTED = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_DISCONNECTED);
  ed.DOCUMENT_POSITION_FOLLOWING = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_FOLLOWING);
  ed.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC);
  ed.DOCUMENT_POSITION_PRECEDING = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_POSITION_PRECEDING);
  ed.DOCUMENT_TYPE_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.DOCUMENT_TYPE_NODE);
  ed.ELEMENT_NODE_0 = (ed.$clinit_Node__Constants() , $wnd.Node.ELEMENT_NODE);
  ed.ENTITY_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.ENTITY_NODE);
  ed.ENTITY_REFERENCE_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.ENTITY_REFERENCE_NODE);
  ed.NOTATION_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.NOTATION_NODE);
  ed.PROCESSING_INSTRUCTION_NODE = (ed.$clinit_Node__Constants() , $wnd.Node.PROCESSING_INSTRUCTION_NODE);
  ed.TEXT_NODE_0 = (ed.$clinit_Node__Constants() , $wnd.Node.TEXT_NODE);
}
;
ed.$addEventListener_1 = function $addEventListener_1(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_2 = function $addEventListener_2(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_1 = function $removeEventListener_1(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_2 = function $removeEventListener_2(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.ATTRIBUTE_NODE = 0;
ed.CDATA_SECTION_NODE = 0;
ed.COMMENT_NODE = 0;
ed.DOCUMENT_FRAGMENT_NODE = 0;
ed.DOCUMENT_NODE_0 = 0;
ed.DOCUMENT_POSITION_CONTAINED_BY = 0;
ed.DOCUMENT_POSITION_CONTAINS = 0;
ed.DOCUMENT_POSITION_DISCONNECTED = 0;
ed.DOCUMENT_POSITION_FOLLOWING = 0;
ed.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 0;
ed.DOCUMENT_POSITION_PRECEDING = 0;
ed.DOCUMENT_TYPE_NODE = 0;
ed.ELEMENT_NODE_0 = 0;
ed.ENTITY_NODE = 0;
ed.ENTITY_REFERENCE_NODE = 0;
ed.NOTATION_NODE = 0;
ed.PROCESSING_INSTRUCTION_NODE = 0;
ed.TEXT_NODE_0 = 0;
ed.$clinit_Attr = function $clinit_Attr(){
  ed.$clinit_Attr = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$clinit_BarProp = function $clinit_BarProp(){
  ed.$clinit_BarProp = emptyMethod;
}
;
ed.$clinit_CanvasDrawingStyles = function $clinit_CanvasDrawingStyles(){
  ed.$clinit_CanvasDrawingStyles = emptyMethod;
}
;
ed.$setLineDash_0 = function $setLineDash_0(this$static, segments){
  ed.$clinit_CanvasDrawingStyles();
  this$static.setLineDash(jb.uncheckedCast_0(segments));
}
;
ed.$clinit_CanvasPathMethods = function $clinit_CanvasPathMethods(){
  ed.$clinit_CanvasPathMethods = emptyMethod;
}
;
ed.$clinit_BaseRenderingContext2D = function $clinit_BaseRenderingContext2D(){
  ed.$clinit_BaseRenderingContext2D = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_CanvasDrawingStyles();
}
;
ed.$clip = function $clip(this$static, optFillRuleOrPath){
  this$static.clip(jb.uncheckedCast_0(optFillRuleOrPath));
}
;
ed.$clip_0 = function $clip_0(this$static, optFillRuleOrPath, optFillRule){
  this$static.clip(jb.uncheckedCast_0(optFillRuleOrPath), optFillRule);
}
;
ed.$clip_1 = function $clip_1(this$static, optFillRuleOrPath){
  this$static.clip(jb.uncheckedCast_0(optFillRuleOrPath));
}
;
ed.$clip_2 = function $clip_2(this$static, optFillRuleOrPath, optFillRule){
  this$static.clip(jb.uncheckedCast_0(optFillRuleOrPath), optFillRule);
}
;
ed.$createPattern = function $createPattern(this$static, image, repetition){
  return this$static.createPattern(jb.uncheckedCast_0(image), repetition);
}
;
ed.$createPattern_0 = function $createPattern_0(this$static, image, repetition){
  return this$static.createPattern(jb.uncheckedCast_0(image), repetition);
}
;
ed.$createPattern_1 = function $createPattern_1(this$static, image, repetition){
  return this$static.createPattern(jb.uncheckedCast_0(image), repetition);
}
;
ed.$createPattern_2 = function $createPattern_2(this$static, image, repetition){
  return this$static.createPattern(jb.uncheckedCast_0(image), repetition);
}
;
ed.$createPattern_3 = function $createPattern_3(this$static, image, repetition){
  return this$static.createPattern(jb.uncheckedCast_0(image), repetition);
}
;
ed.$drawImage = function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy);
}
;
ed.$drawImage_0 = function $drawImage_0(this$static, image, dx, dy, dw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw);
}
;
ed.$drawImage_1 = function $drawImage_1(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh);
}
;
ed.$drawImage_2 = function $drawImage_2(this$static, image, dx, dy, dw, dh, sx){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx);
}
;
ed.$drawImage_3 = function $drawImage_3(this$static, image, dx, dy, dw, dh, sx, sy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy);
}
;
ed.$drawImage_4 = function $drawImage_4(this$static, image, dx, dy, dw, dh, sx, sy, sw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw);
}
;
ed.$drawImage_5 = function $drawImage_5(this$static, image, dx, dy, dw, dh, sx, sy, sw, sh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw, sh);
}
;
ed.$drawImage_6 = function $drawImage_6(this$static, image, dx, dy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy);
}
;
ed.$drawImage_7 = function $drawImage_7(this$static, image, dx, dy, dw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw);
}
;
ed.$drawImage_8 = function $drawImage_8(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh);
}
;
ed.$drawImage_9 = function $drawImage_9(this$static, image, dx, dy, dw, dh, sx){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx);
}
;
ed.$drawImage_10 = function $drawImage_10(this$static, image, dx, dy, dw, dh, sx, sy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy);
}
;
ed.$drawImage_11 = function $drawImage_11(this$static, image, dx, dy, dw, dh, sx, sy, sw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw);
}
;
ed.$drawImage_12 = function $drawImage_12(this$static, image, dx, dy, dw, dh, sx, sy, sw, sh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw, sh);
}
;
ed.$drawImage_13 = function $drawImage_13(this$static, image, dx, dy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy);
}
;
ed.$drawImage_14 = function $drawImage_14(this$static, image, dx, dy, dw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw);
}
;
ed.$drawImage_15 = function $drawImage_15(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh);
}
;
ed.$drawImage_16 = function $drawImage_16(this$static, image, dx, dy, dw, dh, sx){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx);
}
;
ed.$drawImage_17 = function $drawImage_17(this$static, image, dx, dy, dw, dh, sx, sy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy);
}
;
ed.$drawImage_18 = function $drawImage_18(this$static, image, dx, dy, dw, dh, sx, sy, sw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw);
}
;
ed.$drawImage_19 = function $drawImage_19(this$static, image, dx, dy, dw, dh, sx, sy, sw, sh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw, sh);
}
;
ed.$drawImage_20 = function $drawImage_20(this$static, image, dx, dy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy);
}
;
ed.$drawImage_21 = function $drawImage_21(this$static, image, dx, dy, dw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw);
}
;
ed.$drawImage_22 = function $drawImage_22(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh);
}
;
ed.$drawImage_23 = function $drawImage_23(this$static, image, dx, dy, dw, dh, sx){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx);
}
;
ed.$drawImage_24 = function $drawImage_24(this$static, image, dx, dy, dw, dh, sx, sy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy);
}
;
ed.$drawImage_25 = function $drawImage_25(this$static, image, dx, dy, dw, dh, sx, sy, sw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw);
}
;
ed.$drawImage_26 = function $drawImage_26(this$static, image, dx, dy, dw, dh, sx, sy, sw, sh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw, sh);
}
;
ed.$drawImage_27 = function $drawImage_27(this$static, image, dx, dy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy);
}
;
ed.$drawImage_28 = function $drawImage_28(this$static, image, dx, dy, dw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw);
}
;
ed.$drawImage_29 = function $drawImage_29(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh);
}
;
ed.$drawImage_30 = function $drawImage_30(this$static, image, dx, dy, dw, dh, sx){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx);
}
;
ed.$drawImage_31 = function $drawImage_31(this$static, image, dx, dy, dw, dh, sx, sy){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy);
}
;
ed.$drawImage_32 = function $drawImage_32(this$static, image, dx, dy, dw, dh, sx, sy, sw){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw);
}
;
ed.$drawImage_33 = function $drawImage_33(this$static, image, dx, dy, dw, dh, sx, sy, sw, sh){
  this$static.drawImage(jb.uncheckedCast_0(image), dx, dy, dw, dh, sx, sy, sw, sh);
}
;
ed.$fill = function $fill(this$static, optFillRuleOrPath){
  this$static.fill(jb.uncheckedCast_0(optFillRuleOrPath));
}
;
ed.$fill_0 = function $fill_0(this$static, optFillRuleOrPath, optFillRule){
  this$static.fill(jb.uncheckedCast_0(optFillRuleOrPath), optFillRule);
}
;
ed.$fill_1 = function $fill_1(this$static, optFillRuleOrPath){
  this$static.fill(jb.uncheckedCast_0(optFillRuleOrPath));
}
;
ed.$fill_2 = function $fill_2(this$static, optFillRuleOrPath, optFillRule){
  this$static.fill(jb.uncheckedCast_0(optFillRuleOrPath), optFillRule);
}
;
ed.$setFillColor = function $setFillColor(this$static, a){
  this$static.setFillColor(jb.uncheckedCast_0(a));
}
;
ed.$setFillColor_0 = function $setFillColor_0(this$static, a, b){
  this$static.setFillColor(jb.uncheckedCast_0(a), b);
}
;
ed.$setFillColor_1 = function $setFillColor_1(this$static, a, b, c){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c);
}
;
ed.$setFillColor_2 = function $setFillColor_2(this$static, a, b, c, d){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c, d);
}
;
ed.$setFillColor_3 = function $setFillColor_3(this$static, a, b, c, d, e){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c, d, e);
}
;
ed.$setFillColor_4 = function $setFillColor_4(this$static, a){
  this$static.setFillColor(jb.uncheckedCast_0(a));
}
;
ed.$setFillColor_5 = function $setFillColor_5(this$static, a, b){
  this$static.setFillColor(jb.uncheckedCast_0(a), b);
}
;
ed.$setFillColor_6 = function $setFillColor_6(this$static, a, b, c){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c);
}
;
ed.$setFillColor_7 = function $setFillColor_7(this$static, a, b, c, d){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c, d);
}
;
ed.$setFillColor_8 = function $setFillColor_8(this$static, a, b, c, d, e){
  this$static.setFillColor(jb.uncheckedCast_0(a), b, c, d, e);
}
;
ed.$setLineDash = function $setLineDash(this$static, segments){
  ed.$setLineDash_0(this$static, segments);
}
;
ed.$setStrokeColor = function $setStrokeColor(this$static, a){
  this$static.setStrokeColor(jb.uncheckedCast_0(a));
}
;
ed.$setStrokeColor_0 = function $setStrokeColor_0(this$static, a, b){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b);
}
;
ed.$setStrokeColor_1 = function $setStrokeColor_1(this$static, a, b, c){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c);
}
;
ed.$setStrokeColor_2 = function $setStrokeColor_2(this$static, a, b, c, d){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c, d);
}
;
ed.$setStrokeColor_3 = function $setStrokeColor_3(this$static, a, b, c, d, e){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c, d, e);
}
;
ed.$setStrokeColor_4 = function $setStrokeColor_4(this$static, a){
  this$static.setStrokeColor(jb.uncheckedCast_0(a));
}
;
ed.$setStrokeColor_5 = function $setStrokeColor_5(this$static, a, b){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b);
}
;
ed.$setStrokeColor_6 = function $setStrokeColor_6(this$static, a, b, c){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c);
}
;
ed.$setStrokeColor_7 = function $setStrokeColor_7(this$static, a, b, c, d){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c, d);
}
;
ed.$setStrokeColor_8 = function $setStrokeColor_8(this$static, a, b, c, d, e){
  this$static.setStrokeColor(jb.uncheckedCast_0(a), b, c, d, e);
}
;
ed.$clinit_BaseRenderingContext2D$CanvasUnionType = function $clinit_BaseRenderingContext2D$CanvasUnionType(){
  ed.$clinit_BaseRenderingContext2D$CanvasUnionType = emptyMethod;
}
;
ed.$asHTMLCanvasElement = function $asHTMLCanvasElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLCanvasElement);
}
;
ed.$asOffscreenCanvas = function $asOffscreenCanvas(this$static){
  return castToNative(jb.cast(this$static), $wnd.OffscreenCanvas);
}
;
ed.$isHTMLCanvasElement = function $isHTMLCanvasElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLCanvasElement);
}
;
ed.$isOffscreenCanvas = function $isOffscreenCanvas(this$static){
  return instanceOfNative(this$static, $wnd.OffscreenCanvas);
}
;
ed.of_16 = function of_16(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$ClipOptFillRuleOrPathUnionType = function $clinit_BaseRenderingContext2D$ClipOptFillRuleOrPathUnionType(){
  ed.$clinit_BaseRenderingContext2D$ClipOptFillRuleOrPathUnionType = emptyMethod;
}
;
ed.$asPath2D = function $asPath2D(this$static){
  return castToNative(jb.cast(this$static), $wnd.Path2D);
}
;
ed.$asString_9 = function $asString_9(this$static){
  return jb.asString(this$static);
}
;
ed.$isPath2D = function $isPath2D(this$static){
  return instanceOfNative(this$static, $wnd.Path2D);
}
;
ed.$isString_9 = function $isString_9(this$static){
  return instanceOfString(this$static);
}
;
ed.of_17 = function of_17(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$CreatePatternImageUnionType = function $clinit_BaseRenderingContext2D$CreatePatternImageUnionType(){
  ed.$clinit_BaseRenderingContext2D$CreatePatternImageUnionType = emptyMethod;
}
;
ed.$asHTMLCanvasElement_0 = function $asHTMLCanvasElement_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLCanvasElement);
}
;
ed.$asHTMLImageElement = function $asHTMLImageElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLImageElement);
}
;
ed.$asHTMLVideoElement = function $asHTMLVideoElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLVideoElement);
}
;
ed.$asImageBitmap = function $asImageBitmap(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asOffscreenCanvas_0 = function $asOffscreenCanvas_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.OffscreenCanvas);
}
;
ed.$isHTMLCanvasElement_0 = function $isHTMLCanvasElement_0(this$static){
  return instanceOfNative(this$static, $wnd.HTMLCanvasElement);
}
;
ed.$isHTMLImageElement = function $isHTMLImageElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLImageElement);
}
;
ed.$isHTMLVideoElement = function $isHTMLVideoElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLVideoElement);
}
;
ed.$isOffscreenCanvas_0 = function $isOffscreenCanvas_0(this$static){
  return instanceOfNative(this$static, $wnd.OffscreenCanvas);
}
;
ed.of_18 = function of_18(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$DrawImageImageUnionType = function $clinit_BaseRenderingContext2D$DrawImageImageUnionType(){
  ed.$clinit_BaseRenderingContext2D$DrawImageImageUnionType = emptyMethod;
}
;
ed.$asHTMLCanvasElement_1 = function $asHTMLCanvasElement_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLCanvasElement);
}
;
ed.$asHTMLImageElement_0 = function $asHTMLImageElement_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLImageElement);
}
;
ed.$asHTMLVideoElement_0 = function $asHTMLVideoElement_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLVideoElement);
}
;
ed.$asImageBitmap_0 = function $asImageBitmap_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asOffscreenCanvas_1 = function $asOffscreenCanvas_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.OffscreenCanvas);
}
;
ed.$isHTMLCanvasElement_1 = function $isHTMLCanvasElement_1(this$static){
  return instanceOfNative(this$static, $wnd.HTMLCanvasElement);
}
;
ed.$isHTMLImageElement_0 = function $isHTMLImageElement_0(this$static){
  return instanceOfNative(this$static, $wnd.HTMLImageElement);
}
;
ed.$isHTMLVideoElement_0 = function $isHTMLVideoElement_0(this$static){
  return instanceOfNative(this$static, $wnd.HTMLVideoElement);
}
;
ed.$isOffscreenCanvas_1 = function $isOffscreenCanvas_1(this$static){
  return instanceOfNative(this$static, $wnd.OffscreenCanvas);
}
;
ed.of_19 = function of_19(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$FillOptFillRuleOrPathUnionType = function $clinit_BaseRenderingContext2D$FillOptFillRuleOrPathUnionType(){
  ed.$clinit_BaseRenderingContext2D$FillOptFillRuleOrPathUnionType = emptyMethod;
}
;
ed.$asPath2D_0 = function $asPath2D_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Path2D);
}
;
ed.$asString_10 = function $asString_10(this$static){
  return jb.asString(this$static);
}
;
ed.$isPath2D_0 = function $isPath2D_0(this$static){
  return instanceOfNative(this$static, $wnd.Path2D);
}
;
ed.$isString_10 = function $isString_10(this$static){
  return instanceOfString(this$static);
}
;
ed.of_20 = function of_20(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$FillStyleUnionType = function $clinit_BaseRenderingContext2D$FillStyleUnionType(){
  ed.$clinit_BaseRenderingContext2D$FillStyleUnionType = emptyMethod;
}
;
ed.$asCanvasGradient = function $asCanvasGradient(this$static){
  return castToNative(jb.cast(this$static), $wnd.CanvasGradient);
}
;
ed.$asCanvasPattern = function $asCanvasPattern(this$static){
  return castToNative(jb.cast(this$static), $wnd.CanvasPattern);
}
;
ed.$asString_11 = function $asString_11(this$static){
  return jb.asString(this$static);
}
;
ed.$isCanvasGradient = function $isCanvasGradient(this$static){
  return instanceOfNative(this$static, $wnd.CanvasGradient);
}
;
ed.$isCanvasPattern = function $isCanvasPattern(this$static){
  return instanceOfNative(this$static, $wnd.CanvasPattern);
}
;
ed.$isString_11 = function $isString_11(this$static){
  return instanceOfString(this$static);
}
;
ed.of_21 = function of_21(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$SetFillColorAUnionType = function $clinit_BaseRenderingContext2D$SetFillColorAUnionType(){
  ed.$clinit_BaseRenderingContext2D$SetFillColorAUnionType = emptyMethod;
}
;
ed.$asDouble_2 = function $asDouble_2(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_12 = function $asString_12(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_2 = function $isDouble_2(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_12 = function $isString_12(this$static){
  return instanceOfString(this$static);
}
;
ed.of_22 = function of_22(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$SetStrokeColorAUnionType = function $clinit_BaseRenderingContext2D$SetStrokeColorAUnionType(){
  ed.$clinit_BaseRenderingContext2D$SetStrokeColorAUnionType = emptyMethod;
}
;
ed.$asDouble_3 = function $asDouble_3(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_13 = function $asString_13(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_3 = function $isDouble_3(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_13 = function $isString_13(this$static){
  return instanceOfString(this$static);
}
;
ed.of_23 = function of_23(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BaseRenderingContext2D$StrokeStyleUnionType = function $clinit_BaseRenderingContext2D$StrokeStyleUnionType(){
  ed.$clinit_BaseRenderingContext2D$StrokeStyleUnionType = emptyMethod;
}
;
ed.$asCanvasGradient_0 = function $asCanvasGradient_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.CanvasGradient);
}
;
ed.$asCanvasPattern_0 = function $asCanvasPattern_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.CanvasPattern);
}
;
ed.$asString_14 = function $asString_14(this$static){
  return jb.asString(this$static);
}
;
ed.$isCanvasGradient_0 = function $isCanvasGradient_0(this$static){
  return instanceOfNative(this$static, $wnd.CanvasGradient);
}
;
ed.$isCanvasPattern_0 = function $isCanvasPattern_0(this$static){
  return instanceOfNative(this$static, $wnd.CanvasPattern);
}
;
ed.$isString_14 = function $isString_14(this$static){
  return instanceOfString(this$static);
}
;
ed.of_24 = function of_24(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Blob = function $clinit_Blob(){
  ed.$clinit_Blob = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Blob$ConstructorBlobPartsArrayUnionType = function $clinit_Blob$ConstructorBlobPartsArrayUnionType(){
  ed.$clinit_Blob$ConstructorBlobPartsArrayUnionType = emptyMethod;
}
;
ed.$asArrayBuffer_0 = function $asArrayBuffer_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ed.$asArrayBufferView_1 = function $asArrayBufferView_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ed.$asBlob = function $asBlob(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asString_15 = function $asString_15(this$static){
  return jb.asString(this$static);
}
;
ed.$isArrayBuffer_0 = function $isArrayBuffer_0(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ed.$isArrayBufferView_1 = function $isArrayBufferView_1(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ed.$isBlob = function $isBlob(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isString_15 = function $isString_15(this$static){
  return instanceOfString(this$static);
}
;
ed.of_25 = function of_25(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_BlobPropertyBag = function $clinit_BlobPropertyBag(){
  ed.$clinit_BlobPropertyBag = emptyMethod;
}
;
ed.create_14 = function create_14(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Body = function $clinit_Body(){
  ed.$clinit_Body = emptyMethod;
}
;
ed.$clinit_ByteLengthQueuingStrategy = function $clinit_ByteLengthQueuingStrategy(){
  ed.$clinit_ByteLengthQueuingStrategy = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ByteLengthQueuingStrategy$ByteLengthQueuingStrategyConfigType = function $clinit_ByteLengthQueuingStrategy$ByteLengthQueuingStrategyConfigType(){
  ed.$clinit_ByteLengthQueuingStrategy$ByteLengthQueuingStrategyConfigType = emptyMethod;
}
;
ed.create_15 = function create_15(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ByteLengthQueuingStrategy$SizeChunkType = function $clinit_ByteLengthQueuingStrategy$SizeChunkType(){
  ed.$clinit_ByteLengthQueuingStrategy$SizeChunkType = emptyMethod;
}
;
ed.create_16 = function create_16(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_CharacterData = function $clinit_CharacterData(){
  ed.$clinit_CharacterData = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$after = function $after(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$after_0 = function $after_0(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before = function $before(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before_0 = function $before_0(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith = function $replaceWith(this$static, nodes){
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith_0 = function $replaceWith_0(this$static, nodes){
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$clinit_Text = function $clinit_Text(){
  ed.$clinit_Text = emptyMethod;
  ed.$clinit_CharacterData();
}
;
ed.$clinit_CDATASection = function $clinit_CDATASection(){
  ed.$clinit_CDATASection = emptyMethod;
  ed.$clinit_Text();
}
;
ed.$clinit_CSSInterface = function $clinit_CSSInterface(){
  ed.$clinit_CSSInterface = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CSSProperties = function $clinit_CSSProperties(){
  ed.$clinit_CSSProperties = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CSSProperties$AnimationIterationCountUnionType = function $clinit_CSSProperties$AnimationIterationCountUnionType(){
  ed.$clinit_CSSProperties$AnimationIterationCountUnionType = emptyMethod;
}
;
ed.$asDouble_4 = function $asDouble_4(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_16 = function $asString_16(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_4 = function $isDouble_4(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_16 = function $isString_16(this$static){
  return instanceOfString(this$static);
}
;
ed.of_26 = function of_26(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$AnimationUnionType = function $clinit_CSSProperties$AnimationUnionType(){
  ed.$clinit_CSSProperties$AnimationUnionType = emptyMethod;
}
;
ed.$asDouble_5 = function $asDouble_5(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_17 = function $asString_17(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_5 = function $isDouble_5(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_17 = function $isString_17(this$static){
  return instanceOfString(this$static);
}
;
ed.of_27 = function of_27(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderBottomLeftRadiusUnionType = function $clinit_CSSProperties$BorderBottomLeftRadiusUnionType(){
  ed.$clinit_CSSProperties$BorderBottomLeftRadiusUnionType = emptyMethod;
}
;
ed.$asDouble_6 = function $asDouble_6(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_18 = function $asString_18(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_6 = function $isDouble_6(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_18 = function $isString_18(this$static){
  return instanceOfString(this$static);
}
;
ed.of_28 = function of_28(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderBottomRightRadiusUnionType = function $clinit_CSSProperties$BorderBottomRightRadiusUnionType(){
  ed.$clinit_CSSProperties$BorderBottomRightRadiusUnionType = emptyMethod;
}
;
ed.$asDouble_7 = function $asDouble_7(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_19 = function $asString_19(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_7 = function $isDouble_7(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_19 = function $isString_19(this$static){
  return instanceOfString(this$static);
}
;
ed.of_29 = function of_29(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderBottomWidthUnionType = function $clinit_CSSProperties$BorderBottomWidthUnionType(){
  ed.$clinit_CSSProperties$BorderBottomWidthUnionType = emptyMethod;
}
;
ed.$asDouble_8 = function $asDouble_8(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_20 = function $asString_20(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_8 = function $isDouble_8(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_20 = function $isString_20(this$static){
  return instanceOfString(this$static);
}
;
ed.of_30 = function of_30(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderImageOutsetUnionType = function $clinit_CSSProperties$BorderImageOutsetUnionType(){
  ed.$clinit_CSSProperties$BorderImageOutsetUnionType = emptyMethod;
}
;
ed.$asDouble_9 = function $asDouble_9(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_21 = function $asString_21(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_9 = function $isDouble_9(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_21 = function $isString_21(this$static){
  return instanceOfString(this$static);
}
;
ed.of_31 = function of_31(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderImageSliceUnionType = function $clinit_CSSProperties$BorderImageSliceUnionType(){
  ed.$clinit_CSSProperties$BorderImageSliceUnionType = emptyMethod;
}
;
ed.$asDouble_10 = function $asDouble_10(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_22 = function $asString_22(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_10 = function $isDouble_10(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_22 = function $isString_22(this$static){
  return instanceOfString(this$static);
}
;
ed.of_32 = function of_32(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderImageWidthUnionType = function $clinit_CSSProperties$BorderImageWidthUnionType(){
  ed.$clinit_CSSProperties$BorderImageWidthUnionType = emptyMethod;
}
;
ed.$asDouble_11 = function $asDouble_11(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_23 = function $asString_23(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_11 = function $isDouble_11(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_23 = function $isString_23(this$static){
  return instanceOfString(this$static);
}
;
ed.of_33 = function of_33(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderLeftWidthUnionType = function $clinit_CSSProperties$BorderLeftWidthUnionType(){
  ed.$clinit_CSSProperties$BorderLeftWidthUnionType = emptyMethod;
}
;
ed.$asDouble_12 = function $asDouble_12(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_24 = function $asString_24(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_12 = function $isDouble_12(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_24 = function $isString_24(this$static){
  return instanceOfString(this$static);
}
;
ed.of_34 = function of_34(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderRadiusUnionType = function $clinit_CSSProperties$BorderRadiusUnionType(){
  ed.$clinit_CSSProperties$BorderRadiusUnionType = emptyMethod;
}
;
ed.$asDouble_13 = function $asDouble_13(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_25 = function $asString_25(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_13 = function $isDouble_13(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_25 = function $isString_25(this$static){
  return instanceOfString(this$static);
}
;
ed.of_35 = function of_35(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderRightWidthUnionType = function $clinit_CSSProperties$BorderRightWidthUnionType(){
  ed.$clinit_CSSProperties$BorderRightWidthUnionType = emptyMethod;
}
;
ed.$asDouble_14 = function $asDouble_14(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_26 = function $asString_26(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_14 = function $isDouble_14(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_26 = function $isString_26(this$static){
  return instanceOfString(this$static);
}
;
ed.of_36 = function of_36(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderTopLeftRadiusUnionType = function $clinit_CSSProperties$BorderTopLeftRadiusUnionType(){
  ed.$clinit_CSSProperties$BorderTopLeftRadiusUnionType = emptyMethod;
}
;
ed.$asDouble_15 = function $asDouble_15(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_27 = function $asString_27(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_15 = function $isDouble_15(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_27 = function $isString_27(this$static){
  return instanceOfString(this$static);
}
;
ed.of_37 = function of_37(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderTopRightRadiusUnionType = function $clinit_CSSProperties$BorderTopRightRadiusUnionType(){
  ed.$clinit_CSSProperties$BorderTopRightRadiusUnionType = emptyMethod;
}
;
ed.$asDouble_16 = function $asDouble_16(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_28 = function $asString_28(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_16 = function $isDouble_16(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_28 = function $isString_28(this$static){
  return instanceOfString(this$static);
}
;
ed.of_38 = function of_38(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderTopWidthUnionType = function $clinit_CSSProperties$BorderTopWidthUnionType(){
  ed.$clinit_CSSProperties$BorderTopWidthUnionType = emptyMethod;
}
;
ed.$asDouble_17 = function $asDouble_17(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_29 = function $asString_29(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_17 = function $isDouble_17(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_29 = function $isString_29(this$static){
  return instanceOfString(this$static);
}
;
ed.of_39 = function of_39(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$BorderWidthUnionType = function $clinit_CSSProperties$BorderWidthUnionType(){
  ed.$clinit_CSSProperties$BorderWidthUnionType = emptyMethod;
}
;
ed.$asDouble_18 = function $asDouble_18(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_30 = function $asString_30(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_18 = function $isDouble_18(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_30 = function $isString_30(this$static){
  return instanceOfString(this$static);
}
;
ed.of_40 = function of_40(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$FontSizeUnionType = function $clinit_CSSProperties$FontSizeUnionType(){
  ed.$clinit_CSSProperties$FontSizeUnionType = emptyMethod;
}
;
ed.$asDouble_19 = function $asDouble_19(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_31 = function $asString_31(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_19 = function $isDouble_19(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_31 = function $isString_31(this$static){
  return instanceOfString(this$static);
}
;
ed.of_41 = function of_41(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$HeightUnionType = function $clinit_CSSProperties$HeightUnionType(){
  ed.$clinit_CSSProperties$HeightUnionType = emptyMethod;
}
;
ed.$asDouble_20 = function $asDouble_20(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_32 = function $asString_32(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_20 = function $isDouble_20(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_32 = function $isString_32(this$static){
  return instanceOfString(this$static);
}
;
ed.of_42 = function of_42(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$LineHeightUnionType = function $clinit_CSSProperties$LineHeightUnionType(){
  ed.$clinit_CSSProperties$LineHeightUnionType = emptyMethod;
}
;
ed.$asDouble_21 = function $asDouble_21(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_33 = function $asString_33(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_21 = function $isDouble_21(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_33 = function $isString_33(this$static){
  return instanceOfString(this$static);
}
;
ed.of_43 = function of_43(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MarginBottomUnionType = function $clinit_CSSProperties$MarginBottomUnionType(){
  ed.$clinit_CSSProperties$MarginBottomUnionType = emptyMethod;
}
;
ed.$asDouble_22 = function $asDouble_22(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_34 = function $asString_34(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_22 = function $isDouble_22(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_34 = function $isString_34(this$static){
  return instanceOfString(this$static);
}
;
ed.of_44 = function of_44(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MarginLeftUnionType = function $clinit_CSSProperties$MarginLeftUnionType(){
  ed.$clinit_CSSProperties$MarginLeftUnionType = emptyMethod;
}
;
ed.$asDouble_23 = function $asDouble_23(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_35 = function $asString_35(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_23 = function $isDouble_23(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_35 = function $isString_35(this$static){
  return instanceOfString(this$static);
}
;
ed.of_45 = function of_45(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MarginRightUnionType = function $clinit_CSSProperties$MarginRightUnionType(){
  ed.$clinit_CSSProperties$MarginRightUnionType = emptyMethod;
}
;
ed.$asDouble_24 = function $asDouble_24(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_36 = function $asString_36(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_24 = function $isDouble_24(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_36 = function $isString_36(this$static){
  return instanceOfString(this$static);
}
;
ed.of_46 = function of_46(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MarginTopUnionType = function $clinit_CSSProperties$MarginTopUnionType(){
  ed.$clinit_CSSProperties$MarginTopUnionType = emptyMethod;
}
;
ed.$asDouble_25 = function $asDouble_25(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_37 = function $asString_37(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_25 = function $isDouble_25(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_37 = function $isString_37(this$static){
  return instanceOfString(this$static);
}
;
ed.of_47 = function of_47(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MarginUnionType = function $clinit_CSSProperties$MarginUnionType(){
  ed.$clinit_CSSProperties$MarginUnionType = emptyMethod;
}
;
ed.$asDouble_26 = function $asDouble_26(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_38 = function $asString_38(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_26 = function $isDouble_26(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_38 = function $isString_38(this$static){
  return instanceOfString(this$static);
}
;
ed.of_48 = function of_48(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MaxHeightUnionType = function $clinit_CSSProperties$MaxHeightUnionType(){
  ed.$clinit_CSSProperties$MaxHeightUnionType = emptyMethod;
}
;
ed.$asDouble_27 = function $asDouble_27(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_39 = function $asString_39(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_27 = function $isDouble_27(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_39 = function $isString_39(this$static){
  return instanceOfString(this$static);
}
;
ed.of_49 = function of_49(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MaxWidthUnionType = function $clinit_CSSProperties$MaxWidthUnionType(){
  ed.$clinit_CSSProperties$MaxWidthUnionType = emptyMethod;
}
;
ed.$asDouble_28 = function $asDouble_28(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_40 = function $asString_40(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_28 = function $isDouble_28(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_40 = function $isString_40(this$static){
  return instanceOfString(this$static);
}
;
ed.of_50 = function of_50(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MinHeightUnionType = function $clinit_CSSProperties$MinHeightUnionType(){
  ed.$clinit_CSSProperties$MinHeightUnionType = emptyMethod;
}
;
ed.$asDouble_29 = function $asDouble_29(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_41 = function $asString_41(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_29 = function $isDouble_29(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_41 = function $isString_41(this$static){
  return instanceOfString(this$static);
}
;
ed.of_51 = function of_51(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$MinWidthUnionType = function $clinit_CSSProperties$MinWidthUnionType(){
  ed.$clinit_CSSProperties$MinWidthUnionType = emptyMethod;
}
;
ed.$asDouble_30 = function $asDouble_30(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_42 = function $asString_42(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_30 = function $isDouble_30(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_42 = function $isString_42(this$static){
  return instanceOfString(this$static);
}
;
ed.of_52 = function of_52(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$OpacityUnionType = function $clinit_CSSProperties$OpacityUnionType(){
  ed.$clinit_CSSProperties$OpacityUnionType = emptyMethod;
}
;
ed.$asDouble_31 = function $asDouble_31(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_43 = function $asString_43(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_31 = function $isDouble_31(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_43 = function $isString_43(this$static){
  return instanceOfString(this$static);
}
;
ed.of_53 = function of_53(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$OutlineWidthUnionType = function $clinit_CSSProperties$OutlineWidthUnionType(){
  ed.$clinit_CSSProperties$OutlineWidthUnionType = emptyMethod;
}
;
ed.$asDouble_32 = function $asDouble_32(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_44 = function $asString_44(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_32 = function $isDouble_32(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_44 = function $isString_44(this$static){
  return instanceOfString(this$static);
}
;
ed.of_54 = function of_54(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PaddingBottomUnionType = function $clinit_CSSProperties$PaddingBottomUnionType(){
  ed.$clinit_CSSProperties$PaddingBottomUnionType = emptyMethod;
}
;
ed.$asDouble_33 = function $asDouble_33(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_45 = function $asString_45(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_33 = function $isDouble_33(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_45 = function $isString_45(this$static){
  return instanceOfString(this$static);
}
;
ed.of_55 = function of_55(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PaddingLeftUnionType = function $clinit_CSSProperties$PaddingLeftUnionType(){
  ed.$clinit_CSSProperties$PaddingLeftUnionType = emptyMethod;
}
;
ed.$asDouble_34 = function $asDouble_34(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_46 = function $asString_46(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_34 = function $isDouble_34(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_46 = function $isString_46(this$static){
  return instanceOfString(this$static);
}
;
ed.of_56 = function of_56(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PaddingRightUnionType = function $clinit_CSSProperties$PaddingRightUnionType(){
  ed.$clinit_CSSProperties$PaddingRightUnionType = emptyMethod;
}
;
ed.$asDouble_35 = function $asDouble_35(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_47 = function $asString_47(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_35 = function $isDouble_35(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_47 = function $isString_47(this$static){
  return instanceOfString(this$static);
}
;
ed.of_57 = function of_57(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PaddingTopUnionType = function $clinit_CSSProperties$PaddingTopUnionType(){
  ed.$clinit_CSSProperties$PaddingTopUnionType = emptyMethod;
}
;
ed.$asDouble_36 = function $asDouble_36(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_48 = function $asString_48(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_36 = function $isDouble_36(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_48 = function $isString_48(this$static){
  return instanceOfString(this$static);
}
;
ed.of_58 = function of_58(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PaddingUnionType = function $clinit_CSSProperties$PaddingUnionType(){
  ed.$clinit_CSSProperties$PaddingUnionType = emptyMethod;
}
;
ed.$asDouble_37 = function $asDouble_37(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_49 = function $asString_49(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_37 = function $isDouble_37(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_49 = function $isString_49(this$static){
  return instanceOfString(this$static);
}
;
ed.of_59 = function of_59(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$PerspectiveOriginUnionType = function $clinit_CSSProperties$PerspectiveOriginUnionType(){
  ed.$clinit_CSSProperties$PerspectiveOriginUnionType = emptyMethod;
}
;
ed.$asDouble_38 = function $asDouble_38(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_50 = function $asString_50(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_38 = function $isDouble_38(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_50 = function $isString_50(this$static){
  return instanceOfString(this$static);
}
;
ed.of_60 = function of_60(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$TransformOriginUnionType = function $clinit_CSSProperties$TransformOriginUnionType(){
  ed.$clinit_CSSProperties$TransformOriginUnionType = emptyMethod;
}
;
ed.$asDouble_39 = function $asDouble_39(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_51 = function $asString_51(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_39 = function $isDouble_39(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_51 = function $isString_51(this$static){
  return instanceOfString(this$static);
}
;
ed.of_61 = function of_61(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$WidthUnionType = function $clinit_CSSProperties$WidthUnionType(){
  ed.$clinit_CSSProperties$WidthUnionType = emptyMethod;
}
;
ed.$asDouble_40 = function $asDouble_40(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_52 = function $asString_52(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_40 = function $isDouble_40(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_52 = function $isString_52(this$static){
  return instanceOfString(this$static);
}
;
ed.of_62 = function of_62(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSProperties$ZIndexUnionType = function $clinit_CSSProperties$ZIndexUnionType(){
  ed.$clinit_CSSProperties$ZIndexUnionType = emptyMethod;
}
;
ed.$asDouble_41 = function $asDouble_41(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_53 = function $asString_53(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_41 = function $isDouble_41(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_53 = function $isString_53(this$static){
  return instanceOfString(this$static);
}
;
ed.of_63 = function of_63(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSRule = function $clinit_CSSRule(){
  ed.$clinit_CSSRule = emptyMethod;
  jl.$clinit_Object();
  ed.CHARSET_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.CHARSET_RULE);
  ed.FONT_FACE_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.FONT_FACE_RULE);
  ed.IMPORT_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.IMPORT_RULE);
  ed.MEDIA_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.MEDIA_RULE);
  ed.PAGE_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.PAGE_RULE);
  ed.STYLE_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.STYLE_RULE);
  ed.UNKNOWN_RULE = (ed.$clinit_CSSRule__Constants() , $wnd.CSSRule.UNKNOWN_RULE);
}
;
ed.CHARSET_RULE = 0;
ed.FONT_FACE_RULE = 0;
ed.IMPORT_RULE = 0;
ed.MEDIA_RULE = 0;
ed.PAGE_RULE = 0;
ed.STYLE_RULE = 0;
ed.UNKNOWN_RULE = 0;
ed.$clinit_CSSRuleList = function $clinit_CSSRuleList(){
  ed.$clinit_CSSRuleList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_1 = function $asList_1(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_1 = function $delete_1(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_1 = function $getAt_1(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_1 = function $getAtAsAny_1(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_1 = function $getLength_1(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_1 = function $setAt_1(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_4 = function $setLength_4(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_CSSRule__Constants = function $clinit_CSSRule__Constants(){
  ed.$clinit_CSSRule__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
jb.$clinit_JsPropertyMap = function $clinit_JsPropertyMap(){
  jb.$clinit_JsPropertyMap = emptyMethod;
}
;
jb.$delete_27 = function $delete_27(this$static, propertyName){
  jb.$clinit_JsPropertyMap();
  jb.delete_0(this$static, propertyName);
}
;
jb.$forEach_5 = function $forEach_5(this$static, cb){
  jb.$clinit_JsPropertyMap();
  jb.forEach_0(this$static, cb);
}
;
jb.$get_9 = function $get_9(this$static, propertyName){
  jb.$clinit_JsPropertyMap();
  return jb.get_15(this$static, propertyName);
}
;
jb.$getAsAny_4 = function $getAsAny_4(this$static, propertyName){
  jb.$clinit_JsPropertyMap();
  return castToUnknownNative(jb.get_15(this$static, propertyName));
}
;
jb.$has_4 = function $has_4(this$static, propertyName){
  jb.$clinit_JsPropertyMap();
  return jb.has(this$static, propertyName);
}
;
jb.$nestedGet_4 = function $nestedGet_4(this$static, qualifiedName){
  jb.$clinit_JsPropertyMap();
  return jb.getObjectByName(qualifiedName, this$static);
}
;
jb.$nestedGetAsAny_4 = function $nestedGetAsAny_4(this$static, qualifiedName){
  jb.$clinit_JsPropertyMap();
  return castToUnknownNative(jb.getObjectByName(qualifiedName, this$static));
}
;
jb.$set_21 = function $set_21(this$static, propertyName, value_0){
  jb.$clinit_JsPropertyMap();
  jb.set_1(this$static, propertyName, value_0);
}
;
jb.of_163 = function of_163(){
  jb.$clinit_JsPropertyMap();
  return jb.emptyObjectLiteral();
}
;
jb.of_164 = function of_164(k, v){
  var map_0;
  map_0 = jb.of_163();
  jb.$set_21(map_0, k, v);
  return map_0;
}
;
jb.of_165 = function of_165(k1, v1, k2, v2){
  var map_0;
  map_0 = jb.of_163();
  jb.$set_21(map_0, k1, v1);
  jb.$set_21(map_0, k2, v2);
  return map_0;
}
;
jb.of_166 = function of_166(k1, v1, k2, v2, k3, v3){
  var map_0;
  map_0 = jb.of_163();
  jb.$set_21(map_0, k1, v1);
  jb.$set_21(map_0, k2, v2);
  jb.$set_21(map_0, k3, v3);
  return map_0;
}
;
ed.$clinit_CSSStyleDeclaration = function $clinit_CSSStyleDeclaration(){
  ed.$clinit_CSSStyleDeclaration = emptyMethod;
  ed.$clinit_CSSProperties();
  jb.$clinit_JsArrayLike();
  jb.$clinit_JsPropertyMap();
}
;
ed.$asList_2 = function $asList_2(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_2 = function $delete_2(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$delete_3 = function $delete_3(this$static, propertyName){
  jb.$delete_27(this$static, propertyName);
}
;
ed.$forEach = function $forEach(this$static, cb){
  jb.$forEach_5(this$static, cb);
}
;
ed.$get_4 = function $get_4(this$static, propertyName){
  return jb.$get_9(this$static, propertyName);
}
;
ed.$getAsAny = function $getAsAny(this$static, propertyName){
  return jb.$getAsAny_4(this$static, propertyName);
}
;
ed.$getAt_2 = function $getAt_2(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_2 = function $getAtAsAny_2(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_2 = function $getLength_2(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$has = function $has(this$static, propertyName){
  return jb.$has_4(this$static, propertyName);
}
;
ed.$nestedGet = function $nestedGet(this$static, qualifiedName){
  return jb.$nestedGet_4(this$static, qualifiedName);
}
;
ed.$nestedGetAsAny = function $nestedGetAsAny(this$static, qualifiedName){
  return jb.$nestedGetAsAny_4(this$static, qualifiedName);
}
;
ed.$set_12 = function $set_12(this$static, propertyName, value_0){
  jb.$set_21(this$static, propertyName, value_0);
}
;
ed.$setAt_2 = function $setAt_2(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_5 = function $setLength_5(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_CSSStyleDeclaration$GetAttributeUnionType = function $clinit_CSSStyleDeclaration$GetAttributeUnionType(){
  ed.$clinit_CSSStyleDeclaration$GetAttributeUnionType = emptyMethod;
}
;
ed.$asBoolean = function $asBoolean(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asDouble_42 = function $asDouble_42(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_54 = function $asString_54(this$static){
  return jb.asString(this$static);
}
;
ed.$isBoolean = function $isBoolean(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.$isDouble_42 = function $isDouble_42(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_54 = function $isString_54(this$static){
  return instanceOfString(this$static);
}
;
ed.of_64 = function of_64(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CSSStyleDeclaration$GetExpressionUnionType = function $clinit_CSSStyleDeclaration$GetExpressionUnionType(){
  ed.$clinit_CSSStyleDeclaration$GetExpressionUnionType = emptyMethod;
}
;
ed.$asBoolean_0 = function $asBoolean_0(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asDouble_43 = function $asDouble_43(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_55 = function $asString_55(this$static){
  return jb.asString(this$static);
}
;
ed.$isBoolean_0 = function $isBoolean_0(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.$isDouble_43 = function $isDouble_43(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_55 = function $isString_55(this$static){
  return instanceOfString(this$static);
}
;
ed.of_65 = function of_65(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_StyleSheet = function $clinit_StyleSheet(){
  ed.$clinit_StyleSheet = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CSSStyleSheet = function $clinit_CSSStyleSheet(){
  ed.$clinit_CSSStyleSheet = emptyMethod;
  ed.$clinit_StyleSheet();
}
;
ed.$clinit_CSSValue = function $clinit_CSSValue(){
  ed.$clinit_CSSValue = emptyMethod;
  jl.$clinit_Object();
  ed.CSS_CUSTOM = (ed.$clinit_CSSValue__Constants() , $wnd.CSSValue.CSS_CUSTOM);
  ed.CSS_INHERIT = (ed.$clinit_CSSValue__Constants() , $wnd.CSSValue.CSS_INHERIT);
  ed.CSS_PRIMITIVE_VALUE = (ed.$clinit_CSSValue__Constants() , $wnd.CSSValue.CSS_PRIMITIVE_VALUE);
  ed.CSS_VALUE_LIST = (ed.$clinit_CSSValue__Constants() , $wnd.CSSValue.CSS_VALUE_LIST);
}
;
ed.CSS_CUSTOM = 0;
ed.CSS_INHERIT = 0;
ed.CSS_PRIMITIVE_VALUE = 0;
ed.CSS_VALUE_LIST = 0;
ed.$clinit_CSSValue__Constants = function $clinit_CSSValue__Constants(){
  ed.$clinit_CSSValue__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CacheQueryOptions = function $clinit_CacheQueryOptions(){
  ed.$clinit_CacheQueryOptions = emptyMethod;
}
;
ed.create_17 = function create_17(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_CacheStorage = function $clinit_CacheStorage(){
  ed.$clinit_CacheStorage = emptyMethod;
}
;
ed.$match = function $match(this$static, request){
  return this$static.match(jb.uncheckedCast_0(request));
}
;
ed.$match_0 = function $match_0(this$static, request, options){
  return this$static.match(jb.uncheckedCast_0(request), options);
}
;
ed.$match_1 = function $match_1(this$static, request){
  return this$static.match(jb.uncheckedCast_0(request));
}
;
ed.$match_2 = function $match_2(this$static, request, options){
  return this$static.match(jb.uncheckedCast_0(request), options);
}
;
ed.$clinit_CacheStorage$MatchRequestUnionType = function $clinit_CacheStorage$MatchRequestUnionType(){
  ed.$clinit_CacheStorage$MatchRequestUnionType = emptyMethod;
}
;
ed.$asRequest = function $asRequest(this$static){
  return castToNative(jb.cast(this$static), $wnd.Request);
}
;
ed.$asString_56 = function $asString_56(this$static){
  return jb.asString(this$static);
}
;
ed.$isRequest = function $isRequest(this$static){
  return instanceOfNative(this$static, $wnd.Request);
}
;
ed.$isString_56 = function $isString_56(this$static){
  return instanceOfString(this$static);
}
;
ed.of_66 = function of_66(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CanvasGradient = function $clinit_CanvasGradient(){
  ed.$clinit_CanvasGradient = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CanvasPattern = function $clinit_CanvasPattern(){
  ed.$clinit_CanvasPattern = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CanvasRenderingContext2D = function $clinit_CanvasRenderingContext2D(){
  ed.$clinit_CanvasRenderingContext2D = emptyMethod;
  ed.$clinit_BaseRenderingContext2D();
}
;
ed.$clinit_CaretPosition = function $clinit_CaretPosition(){
  ed.$clinit_CaretPosition = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CharacterData$AfterNodesUnionType = function $clinit_CharacterData$AfterNodesUnionType(){
  ed.$clinit_CharacterData$AfterNodesUnionType = emptyMethod;
}
;
ed.$asNode = function $asNode(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_57 = function $asString_57(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode = function $isNode(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_57 = function $isString_57(this$static){
  return instanceOfString(this$static);
}
;
ed.of_67 = function of_67(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CharacterData$BeforeNodesUnionType = function $clinit_CharacterData$BeforeNodesUnionType(){
  ed.$clinit_CharacterData$BeforeNodesUnionType = emptyMethod;
}
;
ed.$asNode_0 = function $asNode_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_58 = function $asString_58(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_0 = function $isNode_0(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_58 = function $isString_58(this$static){
  return instanceOfString(this$static);
}
;
ed.of_68 = function of_68(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_CharacterData$ReplaceWithNodesUnionType = function $clinit_CharacterData$ReplaceWithNodesUnionType(){
  ed.$clinit_CharacterData$ReplaceWithNodesUnionType = emptyMethod;
}
;
ed.$asNode_1 = function $asNode_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_59 = function $asString_59(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_1 = function $isNode_1(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_59 = function $isString_59(this$static){
  return instanceOfString(this$static);
}
;
ed.of_69 = function of_69(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ClientRect = function $clinit_ClientRect(){
  ed.$clinit_ClientRect = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ClientRectList = function $clinit_ClientRectList(){
  ed.$clinit_ClientRectList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_3 = function $asList_3(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_4 = function $delete_4(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_3 = function $getAt_3(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_3 = function $getAtAsAny_3(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_3 = function $getLength_3(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_3 = function $setAt_3(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_6 = function $setLength_6(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_Comment = function $clinit_Comment(){
  ed.$clinit_Comment = emptyMethod;
  ed.$clinit_CharacterData();
}
;
ed.$clinit_Console = function $clinit_Console(){
  ed.$clinit_Console = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$table = function $table(this$static, tabularData){
  this$static.table(jb.uncheckedCast_0(tabularData));
}
;
ed.$table_0 = function $table_0(this$static, tabularData, properties){
  this$static.table(jb.uncheckedCast_0(tabularData), properties);
}
;
ed.$clinit_ConstrainBooleanParameters = function $clinit_ConstrainBooleanParameters(){
  ed.$clinit_ConstrainBooleanParameters = emptyMethod;
}
;
ed.create_18 = function create_18(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ConstrainDOMStringParameters = function $clinit_ConstrainDOMStringParameters(){
  ed.$clinit_ConstrainDOMStringParameters = emptyMethod;
}
;
ed.$setExact = function $setExact(this$static, exact){
  this$static.exact = jb.uncheckedCast_0(exact);
}
;
ed.$setExact_0 = function $setExact_0(this$static, exact){
  this$static.exact = jb.uncheckedCast_0(exact);
}
;
ed.$setExact_1 = function $setExact_1(this$static, exact){
  ed.$setExact(this$static, jb.uncheckedCast_0(exact));
}
;
ed.$setIdeal = function $setIdeal(this$static, ideal){
  this$static.ideal = jb.uncheckedCast_0(ideal);
}
;
ed.$setIdeal_0 = function $setIdeal_0(this$static, ideal){
  this$static.ideal = jb.uncheckedCast_0(ideal);
}
;
ed.$setIdeal_1 = function $setIdeal_1(this$static, ideal){
  ed.$setIdeal(this$static, jb.uncheckedCast_0(ideal));
}
;
ed.create_19 = function create_19(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ConstrainDOMStringParameters$GetExactUnionType = function $clinit_ConstrainDOMStringParameters$GetExactUnionType(){
  ed.$clinit_ConstrainDOMStringParameters$GetExactUnionType = emptyMethod;
}
;
ed.$asJsArray_5 = function $asJsArray_5(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_60 = function $asString_60(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_5 = function $isJsArray_5(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_60 = function $isString_60(this$static){
  return instanceOfString(this$static);
}
;
ed.of_70 = function of_70(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ConstrainDOMStringParameters$GetIdealUnionType = function $clinit_ConstrainDOMStringParameters$GetIdealUnionType(){
  ed.$clinit_ConstrainDOMStringParameters$GetIdealUnionType = emptyMethod;
}
;
ed.$asJsArray_6 = function $asJsArray_6(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_61 = function $asString_61(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_6 = function $isJsArray_6(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_61 = function $isString_61(this$static){
  return instanceOfString(this$static);
}
;
ed.of_71 = function of_71(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DoubleRange = function $clinit_DoubleRange(){
  ed.$clinit_DoubleRange = emptyMethod;
}
;
ed.create_27 = function create_27(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ConstrainDoubleRange = function $clinit_ConstrainDoubleRange(){
  ed.$clinit_ConstrainDoubleRange = emptyMethod;
}
;
ed.create_20 = function create_20(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_LongRange = function $clinit_LongRange(){
  ed.$clinit_LongRange = emptyMethod;
}
;
ed.create_48 = function create_48(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ConstrainLongRange = function $clinit_ConstrainLongRange(){
  ed.$clinit_ConstrainLongRange = emptyMethod;
}
;
ed.create_21 = function create_21(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_CountQueuingStrategy = function $clinit_CountQueuingStrategy(){
  ed.$clinit_CountQueuingStrategy = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_CountQueuingStrategy$CountQueuingStrategyConfigType = function $clinit_CountQueuingStrategy$CountQueuingStrategyConfigType(){
  ed.$clinit_CountQueuingStrategy$CountQueuingStrategyConfigType = emptyMethod;
}
;
ed.create_22 = function create_22(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_CustomElementRegistry = function $clinit_CustomElementRegistry(){
  ed.$clinit_CustomElementRegistry = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$define = function $define(this$static, tagName, klass){
  this$static.define(tagName, jb.asConstructorFn(klass));
}
;
ed.$define_0 = function $define_0(this$static, tagName, klass, options){
  this$static.define(tagName, jb.asConstructorFn(klass), options);
}
;
ed.$clinit_CustomElementRegistry$DefineOptionsType = function $clinit_CustomElementRegistry$DefineOptionsType(){
  ed.$clinit_CustomElementRegistry$DefineOptionsType = emptyMethod;
}
;
ed.create_23 = function create_23(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_DOMImplementation = function $clinit_DOMImplementation(){
  ed.$clinit_DOMImplementation = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_DOMRectReadOnly = function $clinit_DOMRectReadOnly(){
  ed.$clinit_DOMRectReadOnly = emptyMethod;
  ed.$clinit_ClientRect();
}
;
ed.$clinit_DOMRect = function $clinit_DOMRect(){
  ed.$clinit_DOMRect = emptyMethod;
  ed.$clinit_DOMRectReadOnly();
}
;
ed.$clinit_DOMRectInit = function $clinit_DOMRectInit(){
  ed.$clinit_DOMRectInit = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_DOMStringList = function $clinit_DOMStringList(){
  ed.$clinit_DOMStringList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_4 = function $asList_4(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_5 = function $delete_5(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_4 = function $getAt_4(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_4 = function $getAtAsAny_4(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_4 = function $getLength_4(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_4 = function $setAt_4(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_7 = function $setLength_7(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_DOMTokenList = function $clinit_DOMTokenList(){
  ed.$clinit_DOMTokenList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_5 = function $asList_5(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_6 = function $delete_6(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_5 = function $getAt_5(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_5 = function $getAtAsAny_5(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_5 = function $getLength_5(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_5 = function $setAt_5(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_8 = function $setLength_8(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_DataTransfer = function $clinit_DataTransfer(){
  ed.$clinit_DataTransfer = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_DataTransferItem = function $clinit_DataTransferItem(){
  ed.$clinit_DataTransferItem = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_DataTransferItemList = function $clinit_DataTransferItemList(){
  ed.$clinit_DataTransferItemList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$add = function $add(this$static, data_0){
  return this$static.add(jb.uncheckedCast_0(data_0));
}
;
ed.$add_0 = function $add_0(this$static, data_0, type_0){
  return this$static.add(jb.uncheckedCast_0(data_0), type_0);
}
;
ed.$add_1 = function $add_1(this$static, data_0){
  return this$static.add(jb.uncheckedCast_0(data_0));
}
;
ed.$add_2 = function $add_2(this$static, data_0, type_0){
  return this$static.add(jb.uncheckedCast_0(data_0), type_0);
}
;
ed.$asList_6 = function $asList_6(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_7 = function $delete_7(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_6 = function $getAt_6(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_6 = function $getAtAsAny_6(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_6 = function $getLength_6(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_6 = function $setAt_6(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_9 = function $setLength_9(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_DataTransferItemList$AddDataUnionType = function $clinit_DataTransferItemList$AddDataUnionType(){
  ed.$clinit_DataTransferItemList$AddDataUnionType = emptyMethod;
}
;
ed.$asFile = function $asFile(this$static){
  return castToNative(jb.cast(this$static), $wnd.File);
}
;
ed.$asString_62 = function $asString_62(this$static){
  return jb.asString(this$static);
}
;
ed.$isFile = function $isFile(this$static){
  return instanceOfNative(this$static, $wnd.File);
}
;
ed.$isString_62 = function $isString_62(this$static){
  return instanceOfString(this$static);
}
;
ed.of_72 = function of_72(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Database = function $clinit_Database(){
  ed.$clinit_Database = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_DatabaseCallback = function $clinit_DatabaseCallback(){
  ed.$clinit_DatabaseCallback = emptyMethod;
}
;
ed.$clinit_Document_0 = function $clinit_Document_0(){
  ed.$clinit_Document_0 = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$append = function $append(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$append_0 = function $append_0(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$createElement = function $createElement(this$static, tagName, typeExtension){
  return this$static.createElement(tagName, jb.uncheckedCast_0(typeExtension));
}
;
ed.$createElement_0 = function $createElement_0(this$static, tagName, typeExtension){
  return this$static.createElement(tagName, jb.uncheckedCast_0(typeExtension));
}
;
ed.$createTextNode = function $createTextNode(this$static, data_0){
  return this$static.createTextNode(jb.uncheckedCast_0(data_0));
}
;
ed.$createTextNode_0 = function $createTextNode_0(this$static, data_0){
  return this$static.createTextNode(jb.uncheckedCast_0(data_0));
}
;
ed.$createTouchList = function $createTouchList(this$static, touches){
  return this$static.createTouchList(jb.uncheckedCast_0(touches));
}
;
ed.$prepend = function $prepend(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$prepend_0 = function $prepend_0(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$write = function $write(this$static, text_0){
  this$static.write(jb.uncheckedCast_0(text_0));
}
;
ed.$write_0 = function $write_0(this$static, text_0){
  this$static.write(jb.uncheckedCast_0(text_0));
}
;
ed.$writeln = function $writeln(this$static, text_0){
  this$static.writeln(jb.uncheckedCast_0(text_0));
}
;
ed.$writeln_0 = function $writeln_0(this$static, text_0){
  this$static.writeln(jb.uncheckedCast_0(text_0));
}
;
ed.$clinit_Document$AppendNodesUnionType = function $clinit_Document$AppendNodesUnionType(){
  ed.$clinit_Document$AppendNodesUnionType = emptyMethod;
}
;
ed.$asNode_2 = function $asNode_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_63 = function $asString_63(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_2 = function $isNode_2(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_63 = function $isString_63(this$static){
  return instanceOfString(this$static);
}
;
ed.of_73 = function of_73(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Document$CreateElementTypeExtensionType = function $clinit_Document$CreateElementTypeExtensionType(){
  ed.$clinit_Document$CreateElementTypeExtensionType = emptyMethod;
}
;
ed.create_24 = function create_24(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Document$CreateElementTypeExtensionUnionType = function $clinit_Document$CreateElementTypeExtensionUnionType(){
  ed.$clinit_Document$CreateElementTypeExtensionUnionType = emptyMethod;
}
;
ed.$asCreateElementTypeExtensionType = function $asCreateElementTypeExtensionType(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asString_64 = function $asString_64(this$static){
  return jb.asString(this$static);
}
;
ed.$isString_64 = function $isString_64(this$static){
  return instanceOfString(this$static);
}
;
ed.of_74 = function of_74(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Document$CreateTextNodeDataUnionType = function $clinit_Document$CreateTextNodeDataUnionType(){
  ed.$clinit_Document$CreateTextNodeDataUnionType = emptyMethod;
}
;
ed.$asDouble_44 = function $asDouble_44(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_65 = function $asString_65(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_44 = function $isDouble_44(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_65 = function $isString_65(this$static){
  return instanceOfString(this$static);
}
;
ed.of_75 = function of_75(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Document$PrependNodesUnionType = function $clinit_Document$PrependNodesUnionType(){
  ed.$clinit_Document$PrependNodesUnionType = emptyMethod;
}
;
ed.$asNode_3 = function $asNode_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_66 = function $asString_66(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_3 = function $isNode_3(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_66 = function $isString_66(this$static){
  return instanceOfString(this$static);
}
;
ed.of_76 = function of_76(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Document$RegisterElementOptionsType = function $clinit_Document$RegisterElementOptionsType(){
  ed.$clinit_Document$RegisterElementOptionsType = emptyMethod;
}
;
ed.create_25 = function create_25(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Document$RegisterOptionsType = function $clinit_Document$RegisterOptionsType(){
  ed.$clinit_Document$RegisterOptionsType = emptyMethod;
}
;
ed.create_26 = function create_26(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Document$WriteTextUnionType = function $clinit_Document$WriteTextUnionType(){
  ed.$clinit_Document$WriteTextUnionType = emptyMethod;
}
;
ed.$asString_67 = function $asString_67(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedHTML = function $asTrustedHTML(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedHTML);
}
;
ed.$isString_67 = function $isString_67(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedHTML = function $isTrustedHTML(this$static){
  return instanceOfNative(this$static, $wnd.TrustedHTML);
}
;
ed.of_77 = function of_77(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Document$WritelnTextUnionType = function $clinit_Document$WritelnTextUnionType(){
  ed.$clinit_Document$WritelnTextUnionType = emptyMethod;
}
;
ed.$asString_68 = function $asString_68(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedHTML_0 = function $asTrustedHTML_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedHTML);
}
;
ed.$isString_68 = function $isString_68(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedHTML_0 = function $isTrustedHTML_0(this$static){
  return instanceOfNative(this$static, $wnd.TrustedHTML);
}
;
ed.of_78 = function of_78(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DocumentFragment = function $clinit_DocumentFragment(){
  ed.$clinit_DocumentFragment = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$append_1 = function $append_1(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$append_2 = function $append_2(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$prepend_1 = function $prepend_1(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$prepend_2 = function $prepend_2(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$clinit_DocumentFragment$AppendNodesUnionType = function $clinit_DocumentFragment$AppendNodesUnionType(){
  ed.$clinit_DocumentFragment$AppendNodesUnionType = emptyMethod;
}
;
ed.$asNode_4 = function $asNode_4(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_69 = function $asString_69(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_4 = function $isNode_4(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_69 = function $isString_69(this$static){
  return instanceOfString(this$static);
}
;
ed.of_79 = function of_79(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DocumentFragment$PrependNodesUnionType = function $clinit_DocumentFragment$PrependNodesUnionType(){
  ed.$clinit_DocumentFragment$PrependNodesUnionType = emptyMethod;
}
;
ed.$asNode_5 = function $asNode_5(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_70 = function $asString_70(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_5 = function $isNode_5(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_70 = function $isString_70(this$static){
  return instanceOfString(this$static);
}
;
ed.of_80 = function of_80(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DocumentType = function $clinit_DocumentType(){
  ed.$clinit_DocumentType = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$after_1 = function $after_1(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$after_2 = function $after_2(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before_1 = function $before_1(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before_2 = function $before_2(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith_1 = function $replaceWith_1(this$static, nodes){
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith_2 = function $replaceWith_2(this$static, nodes){
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$clinit_DocumentType$AfterNodesUnionType = function $clinit_DocumentType$AfterNodesUnionType(){
  ed.$clinit_DocumentType$AfterNodesUnionType = emptyMethod;
}
;
ed.$asNode_6 = function $asNode_6(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_71 = function $asString_71(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_6 = function $isNode_6(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_71 = function $isString_71(this$static){
  return instanceOfString(this$static);
}
;
ed.of_81 = function of_81(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DocumentType$BeforeNodesUnionType = function $clinit_DocumentType$BeforeNodesUnionType(){
  ed.$clinit_DocumentType$BeforeNodesUnionType = emptyMethod;
}
;
ed.$asNode_7 = function $asNode_7(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_72 = function $asString_72(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_7 = function $isNode_7(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_72 = function $isString_72(this$static){
  return instanceOfString(this$static);
}
;
ed.of_82 = function of_82(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DocumentType$ReplaceWithNodesUnionType = function $clinit_DocumentType$ReplaceWithNodesUnionType(){
  ed.$clinit_DocumentType$ReplaceWithNodesUnionType = emptyMethod;
}
;
ed.$asNode_8 = function $asNode_8(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_73 = function $asString_73(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_8 = function $isNode_8(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_73 = function $isString_73(this$static){
  return instanceOfString(this$static);
}
;
ed.of_83 = function of_83(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal = function $clinit_DomGlobal(){
  ed.$clinit_DomGlobal = emptyMethod;
  jl.$clinit_Object();
  ed.document_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.document);
  ed.isSecureContext_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.isSecureContext);
  ed.location_1 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.location);
  ed.navigator_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.navigator);
  ed.screen_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.screen);
  ed.self_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.self);
  ed.top_1 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.top);
  ed.visualViewport_0 = (ed.$clinit_DomGlobal__Constants() , $wnd.goog.global.visualViewport);
}
;
ed.createImageBitmap_0 = function createImageBitmap_0(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_1 = function createImageBitmap_1(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_2 = function createImageBitmap_2(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_3 = function createImageBitmap_3(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_4 = function createImageBitmap_4(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_5 = function createImageBitmap_5(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_6 = function createImageBitmap_6(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_7 = function createImageBitmap_7(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_8 = function createImageBitmap_8(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_9 = function createImageBitmap_9(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_10 = function createImageBitmap_10(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_11 = function createImageBitmap_11(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_12 = function createImageBitmap_12(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_13 = function createImageBitmap_13(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_14 = function createImageBitmap_14(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_15 = function createImageBitmap_15(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_16 = function createImageBitmap_16(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_17 = function createImageBitmap_17(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_18 = function createImageBitmap_18(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_19 = function createImageBitmap_19(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_20 = function createImageBitmap_20(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_21 = function createImageBitmap_21(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_22 = function createImageBitmap_22(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_23 = function createImageBitmap_23(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_24 = function createImageBitmap_24(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_25 = function createImageBitmap_25(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_26 = function createImageBitmap_26(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_27 = function createImageBitmap_27(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_28 = function createImageBitmap_28(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_29 = function createImageBitmap_29(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_30 = function createImageBitmap_30(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_31 = function createImageBitmap_31(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_32 = function createImageBitmap_32(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_33 = function createImageBitmap_33(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_34 = function createImageBitmap_34(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_35 = function createImageBitmap_35(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_36 = function createImageBitmap_36(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_37 = function createImageBitmap_37(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_38 = function createImageBitmap_38(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_39 = function createImageBitmap_39(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_40 = function createImageBitmap_40(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_41 = function createImageBitmap_41(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(image, jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_42 = function createImageBitmap_42(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_43 = function createImageBitmap_43(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_44 = function createImageBitmap_44(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_45 = function createImageBitmap_45(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_46 = function createImageBitmap_46(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_47 = function createImageBitmap_47(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_48 = function createImageBitmap_48(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_49 = function createImageBitmap_49(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_50 = function createImageBitmap_50(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_51 = function createImageBitmap_51(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_52 = function createImageBitmap_52(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_53 = function createImageBitmap_53(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_54 = function createImageBitmap_54(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_55 = function createImageBitmap_55(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_56 = function createImageBitmap_56(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_57 = function createImageBitmap_57(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_58 = function createImageBitmap_58(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_59 = function createImageBitmap_59(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_60 = function createImageBitmap_60(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_61 = function createImageBitmap_61(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_62 = function createImageBitmap_62(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_63 = function createImageBitmap_63(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_64 = function createImageBitmap_64(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_65 = function createImageBitmap_65(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_66 = function createImageBitmap_66(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_67 = function createImageBitmap_67(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_68 = function createImageBitmap_68(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_69 = function createImageBitmap_69(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_70 = function createImageBitmap_70(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_71 = function createImageBitmap_71(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_72 = function createImageBitmap_72(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_73 = function createImageBitmap_73(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_74 = function createImageBitmap_74(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_75 = function createImageBitmap_75(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_76 = function createImageBitmap_76(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_77 = function createImageBitmap_77(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_78 = function createImageBitmap_78(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_79 = function createImageBitmap_79(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_80 = function createImageBitmap_80(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_81 = function createImageBitmap_81(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_82 = function createImageBitmap_82(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_83 = function createImageBitmap_83(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_84 = function createImageBitmap_84(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_85 = function createImageBitmap_85(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_86 = function createImageBitmap_86(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_87 = function createImageBitmap_87(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_88 = function createImageBitmap_88(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_89 = function createImageBitmap_89(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_90 = function createImageBitmap_90(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_91 = function createImageBitmap_91(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_92 = function createImageBitmap_92(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_93 = function createImageBitmap_93(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_94 = function createImageBitmap_94(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_95 = function createImageBitmap_95(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_96 = function createImageBitmap_96(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_97 = function createImageBitmap_97(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_98 = function createImageBitmap_98(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_99 = function createImageBitmap_99(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_100 = function createImageBitmap_100(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_101 = function createImageBitmap_101(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_102 = function createImageBitmap_102(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_103 = function createImageBitmap_103(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_104 = function createImageBitmap_104(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_105 = function createImageBitmap_105(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_106 = function createImageBitmap_106(image){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image));
}
;
ed.createImageBitmap_107 = function createImageBitmap_107(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_108 = function createImageBitmap_108(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_109 = function createImageBitmap_109(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_110 = function createImageBitmap_110(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_111 = function createImageBitmap_111(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.createImageBitmap_112 = function createImageBitmap_112(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions);
}
;
ed.createImageBitmap_113 = function createImageBitmap_113(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy);
}
;
ed.createImageBitmap_114 = function createImageBitmap_114(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw);
}
;
ed.createImageBitmap_115 = function createImageBitmap_115(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh);
}
;
ed.createImageBitmap_116 = function createImageBitmap_116(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), sxOrOptions, sy, sw, sh, options);
}
;
ed.createImageBitmap_117 = function createImageBitmap_117(image, sxOrOptions){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions));
}
;
ed.createImageBitmap_118 = function createImageBitmap_118(image, sxOrOptions, sy){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy);
}
;
ed.createImageBitmap_119 = function createImageBitmap_119(image, sxOrOptions, sy, sw){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw);
}
;
ed.createImageBitmap_120 = function createImageBitmap_120(image, sxOrOptions, sy, sw, sh){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh);
}
;
ed.createImageBitmap_121 = function createImageBitmap_121(image, sxOrOptions, sy, sw, sh, options){
  return $wnd.goog.global.createImageBitmap(jb.uncheckedCast_0(image), jb.uncheckedCast_0(sxOrOptions), sy, sw, sh, options);
}
;
ed.fetch_0 = function fetch_0(input_0){
  return $wnd.goog.global.fetch(jb.uncheckedCast_0(input_0));
}
;
ed.fetch_1 = function fetch_1(input_0, init){
  return $wnd.goog.global.fetch(jb.uncheckedCast_0(input_0), init);
}
;
ed.fetch_2 = function fetch_2(input_0){
  ed.$clinit_DomGlobal();
  return $wnd.goog.global.fetch(jb.uncheckedCast_0(input_0));
}
;
ed.fetch_3 = function fetch_3(input_0, init){
  return $wnd.goog.global.fetch(jb.uncheckedCast_0(input_0), init);
}
;
ed.importScripts = function importScripts(var_args){
  $wnd.goog.global.importScripts.apply(null, ensureNotNull(jb.uncheckedCast_0(var_args)));
}
;
ed.importScripts_0 = function importScripts_0(var_args){
  $wnd.goog.global.importScripts.apply(null, ensureNotNull(jb.uncheckedCast_0(var_args)));
}
;
ed.openDatabase_0 = function openDatabase_0(name_0, version, description, size_0, callback){
  return $wnd.goog.global.openDatabase(name_0, version, description, size_0, jb.uncheckedCast_0(callback));
}
;
ed.openDatabase_1 = function openDatabase_1(name_0, version, description, size_0, callback){
  return $wnd.goog.global.openDatabase(name_0, version, description, size_0, jb.uncheckedCast_0(callback));
}
;
ed.postMessage_0 = function postMessage_0(message, targetOriginOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer));
}
;
ed.postMessage_1 = function postMessage_1(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_2 = function postMessage_2(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), targetOriginOrPortsOrTransfer);
}
;
ed.postMessage_3 = function postMessage_3(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_4 = function postMessage_4(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, targetOriginOrTransfer, jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_5 = function postMessage_5(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, targetOriginOrTransfer, jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_6 = function postMessage_6(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  ed.postMessage_4(message, targetOriginOrTransfer, jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_7 = function postMessage_7(message, targetOriginOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer));
}
;
ed.postMessage_8 = function postMessage_8(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_9 = function postMessage_9(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), targetOriginOrPortsOrTransfer);
}
;
ed.postMessage_10 = function postMessage_10(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  $wnd.goog.global.postMessage(message, jb.uncheckedCast_0(targetOriginOrTransfer), jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_11 = function postMessage_11(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  ed.postMessage_8(message, targetOriginOrTransfer, jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.postMessage_12 = function postMessage_12(message, targetOriginOrTransfer){
  ed.postMessage_0(message, jb.uncheckedCast_0(targetOriginOrTransfer));
}
;
ed.postMessage_13 = function postMessage_13(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  ed.postMessage_2(message, jb.uncheckedCast_0(targetOriginOrTransfer), targetOriginOrPortsOrTransfer);
}
;
ed.postMessage_14 = function postMessage_14(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  ed.postMessage_3(message, jb.uncheckedCast_0(targetOriginOrTransfer), targetOriginOrPortsOrTransfer);
}
;
ed.postMessage_15 = function postMessage_15(message, targetOriginOrTransfer, targetOriginOrPortsOrTransfer){
  ed.postMessage_1(message, jb.uncheckedCast_0(targetOriginOrTransfer), jb.uncheckedCast_0(targetOriginOrPortsOrTransfer));
}
;
ed.requestIdleCallback_0 = function requestIdleCallback_0(callback, options){
  return $wnd.goog.global.requestIdleCallback(callback, jb.uncheckedCast_0(options));
}
;
ed.requestIdleCallback_1 = function requestIdleCallback_1(callback, options){
  return $wnd.goog.global.requestIdleCallback(callback, jb.uncheckedCast_0(options));
}
;
ed.setInterval_0 = function setInterval_0(callback){
  return $wnd.goog.global.setInterval(jb.uncheckedCast_0(callback));
}
;
ed.setInterval_1 = function setInterval_1(callback, delay, callbackParams){
  return $wnd.goog.global.setInterval.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.setInterval_2 = function setInterval_2(callback){
  return $wnd.goog.global.setInterval(jb.uncheckedCast_0(callback));
}
;
ed.setInterval_3 = function setInterval_3(callback, delay, callbackParams){
  return $wnd.goog.global.setInterval.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.setInterval_4 = function setInterval_4(callback){
  return $wnd.goog.global.setInterval(jb.uncheckedCast_0(callback));
}
;
ed.setInterval_5 = function setInterval_5(callback, delay, callbackParams){
  return $wnd.goog.global.setInterval.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.setTimeout_0 = function setTimeout_0(callback){
  return $wnd.goog.global.setTimeout(jb.uncheckedCast_0(callback));
}
;
ed.setTimeout_1 = function setTimeout_1(callback, delay, callbackParams){
  return $wnd.goog.global.setTimeout.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.setTimeout_2 = function setTimeout_2(callback){
  return $wnd.goog.global.setTimeout(jb.uncheckedCast_0(callback));
}
;
ed.setTimeout_3 = function setTimeout_3(callback, delay, callbackParams){
  return $wnd.goog.global.setTimeout.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.setTimeout_4 = function setTimeout_4(callback){
  return $wnd.goog.global.setTimeout(jb.uncheckedCast_0(callback));
}
;
ed.setTimeout_5 = function setTimeout_5(callback, delay, callbackParams){
  return $wnd.goog.global.setTimeout.apply(null, [jb.uncheckedCast_0(callback), delay].concat(ensureNotNull(callbackParams)));
}
;
ed.isSecureContext_0 = false;
ed.$clinit_DomGlobal$CreateImageBitmapImageUnionType = function $clinit_DomGlobal$CreateImageBitmapImageUnionType(){
  ed.$clinit_DomGlobal$CreateImageBitmapImageUnionType = emptyMethod;
}
;
ed.$asBlob_0 = function $asBlob_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asCanvasRenderingContext2D = function $asCanvasRenderingContext2D(this$static){
  return castToNative(jb.cast(this$static), $wnd.CanvasRenderingContext2D);
}
;
ed.$asHTMLCanvasElement_2 = function $asHTMLCanvasElement_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLCanvasElement);
}
;
ed.$asHTMLImageElement_1 = function $asHTMLImageElement_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLImageElement);
}
;
ed.$asHTMLVideoElement_1 = function $asHTMLVideoElement_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLVideoElement);
}
;
ed.$asImageBitmap_1 = function $asImageBitmap_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asImageData = function $asImageData(this$static){
  return castToNative(jb.cast(this$static), $wnd.ImageData);
}
;
ed.$isBlob_0 = function $isBlob_0(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isCanvasRenderingContext2D = function $isCanvasRenderingContext2D(this$static){
  return instanceOfNative(this$static, $wnd.CanvasRenderingContext2D);
}
;
ed.$isHTMLCanvasElement_2 = function $isHTMLCanvasElement_2(this$static){
  return instanceOfNative(this$static, $wnd.HTMLCanvasElement);
}
;
ed.$isHTMLImageElement_1 = function $isHTMLImageElement_1(this$static){
  return instanceOfNative(this$static, $wnd.HTMLImageElement);
}
;
ed.$isHTMLVideoElement_1 = function $isHTMLVideoElement_1(this$static){
  return instanceOfNative(this$static, $wnd.HTMLVideoElement);
}
;
ed.$isImageData = function $isImageData(this$static){
  return instanceOfNative(this$static, $wnd.ImageData);
}
;
ed.of_84 = function of_84(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$CreateImageBitmapSxOrOptionsUnionType = function $clinit_DomGlobal$CreateImageBitmapSxOrOptionsUnionType(){
  ed.$clinit_DomGlobal$CreateImageBitmapSxOrOptionsUnionType = emptyMethod;
}
;
ed.$asDouble_45 = function $asDouble_45(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asImageBitmapOptions = function $asImageBitmapOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isDouble_45 = function $isDouble_45(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_85 = function of_85(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$FetchInputUnionType = function $clinit_DomGlobal$FetchInputUnionType(){
  ed.$clinit_DomGlobal$FetchInputUnionType = emptyMethod;
}
;
ed.$asRequest_0 = function $asRequest_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Request);
}
;
ed.$asString_74 = function $asString_74(this$static){
  return jb.asString(this$static);
}
;
ed.$isRequest_0 = function $isRequest_0(this$static){
  return instanceOfNative(this$static, $wnd.Request);
}
;
ed.$isString_74 = function $isString_74(this$static){
  return instanceOfString(this$static);
}
;
ed.of_86 = function of_86(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$ImportScriptsVar_argsUnionType = function $clinit_DomGlobal$ImportScriptsVar_argsUnionType(){
  ed.$clinit_DomGlobal$ImportScriptsVar_argsUnionType = emptyMethod;
}
;
ed.$asString_75 = function $asString_75(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedScriptURL = function $asTrustedScriptURL(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedScriptURL);
}
;
ed.$isString_75 = function $isString_75(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedScriptURL = function $isTrustedScriptURL(this$static){
  return instanceOfNative(this$static, $wnd.TrustedScriptURL);
}
;
ed.of_87 = function of_87(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$OpenDatabaseCallbackUnionType = function $clinit_DomGlobal$OpenDatabaseCallbackUnionType(){
  ed.$clinit_DomGlobal$OpenDatabaseCallbackUnionType = emptyMethod;
}
;
ed.$asDatabaseCallback = function $asDatabaseCallback(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asOpenDatabaseCallbackFn = function $asOpenDatabaseCallbackFn(this$static){
  return castToFunction(jb.cast(this$static));
}
;
ed.$isOpenDatabaseCallbackFn = function $isOpenDatabaseCallbackFn(this$static){
  return instanceOfFunction(this$static);
}
;
ed.of_88 = function of_88(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$PostMessageTargetOriginOrPortsOrTransferUnionType = function $clinit_DomGlobal$PostMessageTargetOriginOrPortsOrTransferUnionType(){
  ed.$clinit_DomGlobal$PostMessageTargetOriginOrPortsOrTransferUnionType = emptyMethod;
}
;
ed.$asJsArray_7 = function $asJsArray_7(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_76 = function $asString_76(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_7 = function $isJsArray_7(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_76 = function $isString_76(this$static){
  return instanceOfString(this$static);
}
;
ed.of_89 = function of_89(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$PostMessageTargetOriginOrTransferUnionType = function $clinit_DomGlobal$PostMessageTargetOriginOrTransferUnionType(){
  ed.$clinit_DomGlobal$PostMessageTargetOriginOrTransferUnionType = emptyMethod;
}
;
ed.$asJsArray_8 = function $asJsArray_8(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_77 = function $asString_77(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_8 = function $isJsArray_8(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_77 = function $isString_77(this$static){
  return instanceOfString(this$static);
}
;
ed.of_90 = function of_90(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$RequestIdleCallbackOptionsUnionType = function $clinit_DomGlobal$RequestIdleCallbackOptionsUnionType(){
  ed.$clinit_DomGlobal$RequestIdleCallbackOptionsUnionType = emptyMethod;
}
;
ed.$asIdleCallbackOptions = function $asIdleCallbackOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_0 = function $asInt_0(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_0 = function $isInt_0(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_91 = function of_91(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$SetIntervalCallbackUnionType = function $clinit_DomGlobal$SetIntervalCallbackUnionType(){
  ed.$clinit_DomGlobal$SetIntervalCallbackUnionType = emptyMethod;
}
;
ed.$asSetIntervalCallbackFn = function $asSetIntervalCallbackFn(this$static){
  return castToFunction(jb.cast(this$static));
}
;
ed.$asString_78 = function $asString_78(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedScript = function $asTrustedScript(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedScript);
}
;
ed.$isSetIntervalCallbackFn = function $isSetIntervalCallbackFn(this$static){
  return instanceOfFunction(this$static);
}
;
ed.$isString_78 = function $isString_78(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedScript = function $isTrustedScript(this$static){
  return instanceOfNative(this$static, $wnd.TrustedScript);
}
;
ed.of_92 = function of_92(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal$SetTimeoutCallbackUnionType = function $clinit_DomGlobal$SetTimeoutCallbackUnionType(){
  ed.$clinit_DomGlobal$SetTimeoutCallbackUnionType = emptyMethod;
}
;
ed.$asSetTimeoutCallbackFn = function $asSetTimeoutCallbackFn(this$static){
  return castToFunction(jb.cast(this$static));
}
;
ed.$asString_79 = function $asString_79(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedScript_0 = function $asTrustedScript_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedScript);
}
;
ed.$isSetTimeoutCallbackFn = function $isSetTimeoutCallbackFn(this$static){
  return instanceOfFunction(this$static);
}
;
ed.$isString_79 = function $isString_79(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedScript_0 = function $isTrustedScript_0(this$static){
  return instanceOfNative(this$static, $wnd.TrustedScript);
}
;
ed.of_93 = function of_93(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_DomGlobal__Constants = function $clinit_DomGlobal__Constants(){
  ed.$clinit_DomGlobal__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Element_0 = function $clinit_Element_0(){
  ed.$clinit_Element_0 = emptyMethod;
  ed.$clinit_Node_0();
  ed.ALLOW_KEYBOARD_INPUT = (ed.$clinit_Element__Constants() , $wnd.Element.ALLOW_KEYBOARD_INPUT);
}
;
ed.$after_3 = function $after_3(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$after_4 = function $after_4(this$static, nodes){
  this$static.after.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$append_3 = function $append_3(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$append_4 = function $append_4(this$static, nodes){
  this$static.append.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before_3 = function $before_3(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$before_4 = function $before_4(this$static, nodes){
  this$static.before.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$matchesSelector = function $matchesSelector(this$static, selectors, refNodes){
  return this$static.matchesSelector(selectors, jb.uncheckedCast_0(refNodes));
}
;
ed.$matchesSelector_0 = function $matchesSelector_0(this$static, selectors, refNodes){
  return this$static.matchesSelector(selectors, jb.uncheckedCast_0(refNodes));
}
;
ed.$prepend_3 = function $prepend_3(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$prepend_4 = function $prepend_4(this$static, nodes){
  this$static.prepend.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith_3 = function $replaceWith_3(this$static, nodes){
  ed.$clinit_Element_0();
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$replaceWith_4 = function $replaceWith_4(this$static, nodes){
  this$static.replaceWith.apply(this$static, ensureNotNull(jb.uncheckedCast_0(nodes)));
}
;
ed.$scrollIntoView_0 = function $scrollIntoView_0(this$static, top_0){
  this$static.scrollIntoView(jb.uncheckedCast_0(top_0));
}
;
ed.$scrollIntoView_1 = function $scrollIntoView_1(this$static, top_0){
  this$static.scrollIntoView(jb.uncheckedCast_0(top_0));
}
;
ed.$scrollTo = function $scrollTo(this$static, scrollToOptionsOrX){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollTo_0 = function $scrollTo_0(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scrollTo_1 = function $scrollTo_1(this$static, scrollToOptionsOrX){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollTo_2 = function $scrollTo_2(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$setAttribute_0 = function $setAttribute_0(this$static, name_0, value_0){
  this$static.setAttribute(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttribute_1 = function $setAttribute_1(this$static, name_0, value_0){
  this$static.setAttribute(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttribute_2 = function $setAttribute_2(this$static, name_0, value_0){
  this$static.setAttribute(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttribute_3 = function $setAttribute_3(this$static, name_0, value_0){
  this$static.setAttribute(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttribute_4 = function $setAttribute_4(this$static, name_0, value_0){
  this$static.setAttribute(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttributeNS = function $setAttributeNS(this$static, namespaceURI, qualifiedName, value_0){
  this$static.setAttributeNS(namespaceURI, qualifiedName, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttributeNS_0 = function $setAttributeNS_0(this$static, namespaceURI, qualifiedName, value_0){
  this$static.setAttributeNS(namespaceURI, qualifiedName, jb.uncheckedCast_0(value_0));
}
;
ed.$setAttributeNS_1 = function $setAttributeNS_1(this$static, namespaceURI, qualifiedName, value_0){
  this$static.setAttributeNS(namespaceURI, qualifiedName, jb.uncheckedCast_0(value_0));
}
;
ed.ALLOW_KEYBOARD_INPUT = 0;
ed.$clinit_Element$AfterNodesUnionType = function $clinit_Element$AfterNodesUnionType(){
  ed.$clinit_Element$AfterNodesUnionType = emptyMethod;
}
;
ed.$asNode_9 = function $asNode_9(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_80 = function $asString_80(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_9 = function $isNode_9(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_80 = function $isString_80(this$static){
  return instanceOfString(this$static);
}
;
ed.of_94 = function of_94(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$AppendNodesUnionType = function $clinit_Element$AppendNodesUnionType(){
  ed.$clinit_Element$AppendNodesUnionType = emptyMethod;
}
;
ed.$asNode_10 = function $asNode_10(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_81 = function $asString_81(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_10 = function $isNode_10(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_81 = function $isString_81(this$static){
  return instanceOfString(this$static);
}
;
ed.of_95 = function of_95(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$BeforeNodesUnionType = function $clinit_Element$BeforeNodesUnionType(){
  ed.$clinit_Element$BeforeNodesUnionType = emptyMethod;
}
;
ed.$asNode_11 = function $asNode_11(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_82 = function $asString_82(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_11 = function $isNode_11(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_82 = function $isString_82(this$static){
  return instanceOfString(this$static);
}
;
ed.of_96 = function of_96(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$FocusOptionsType = function $clinit_Element$FocusOptionsType(){
  ed.$clinit_Element$FocusOptionsType = emptyMethod;
}
;
ed.create_28 = function create_28(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Element$MatchesSelectorRefNodesUnionType = function $clinit_Element$MatchesSelectorRefNodesUnionType(){
  ed.$clinit_Element$MatchesSelectorRefNodesUnionType = emptyMethod;
}
;
ed.$asNode_12 = function $asNode_12(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asNodeList = function $asNodeList(this$static){
  return castToNative(jb.cast(this$static), $wnd.NodeList);
}
;
ed.$isNode_12 = function $isNode_12(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isNodeList = function $isNodeList(this$static){
  return instanceOfNative(this$static, $wnd.NodeList);
}
;
ed.of_97 = function of_97(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$PrependNodesUnionType = function $clinit_Element$PrependNodesUnionType(){
  ed.$clinit_Element$PrependNodesUnionType = emptyMethod;
}
;
ed.$asNode_13 = function $asNode_13(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_83 = function $asString_83(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_13 = function $isNode_13(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_83 = function $isString_83(this$static){
  return instanceOfString(this$static);
}
;
ed.of_98 = function of_98(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$ReplaceWithNodesUnionType = function $clinit_Element$ReplaceWithNodesUnionType(){
  ed.$clinit_Element$ReplaceWithNodesUnionType = emptyMethod;
}
;
ed.$asNode_14 = function $asNode_14(this$static){
  return castToNative(jb.cast(this$static), $wnd.Node);
}
;
ed.$asString_84 = function $asString_84(this$static){
  return jb.asString(this$static);
}
;
ed.$isNode_14 = function $isNode_14(this$static){
  return instanceOfNative(this$static, $wnd.Node);
}
;
ed.$isString_84 = function $isString_84(this$static){
  return instanceOfString(this$static);
}
;
ed.of_99 = function of_99(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$ScrollIntoViewTopUnionType = function $clinit_Element$ScrollIntoViewTopUnionType(){
  ed.$clinit_Element$ScrollIntoViewTopUnionType = emptyMethod;
}
;
ed.$asBoolean_1 = function $asBoolean_1(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asScrollIntoViewOptions = function $asScrollIntoViewOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_1 = function $isBoolean_1(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_100 = function of_100(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$ScrollToScrollToOptionsOrXUnionType = function $clinit_Element$ScrollToScrollToOptionsOrXUnionType(){
  ed.$clinit_Element$ScrollToScrollToOptionsOrXUnionType = emptyMethod;
}
;
ed.$asDouble_46 = function $asDouble_46(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asScrollToOptions = function $asScrollToOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isDouble_46 = function $isDouble_46(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_101 = function of_101(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$SetAttributeNSValueUnionType = function $clinit_Element$SetAttributeNSValueUnionType(){
  ed.$clinit_Element$SetAttributeNSValueUnionType = emptyMethod;
}
;
ed.$asBoolean_2 = function $asBoolean_2(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asDouble_47 = function $asDouble_47(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_85 = function $asString_85(this$static){
  return jb.asString(this$static);
}
;
ed.$isBoolean_2 = function $isBoolean_2(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.$isDouble_47 = function $isDouble_47(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_85 = function $isString_85(this$static){
  return instanceOfString(this$static);
}
;
ed.of_102 = function of_102(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element$SetAttributeValueUnionType = function $clinit_Element$SetAttributeValueUnionType(){
  ed.$clinit_Element$SetAttributeValueUnionType = emptyMethod;
}
;
ed.$asBoolean_3 = function $asBoolean_3(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asDouble_48 = function $asDouble_48(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_86 = function $asString_86(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedHTML_1 = function $asTrustedHTML_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedHTML);
}
;
ed.$asTrustedScriptURL_0 = function $asTrustedScriptURL_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedScriptURL);
}
;
ed.$isBoolean_3 = function $isBoolean_3(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.$isDouble_48 = function $isDouble_48(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_86 = function $isString_86(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedHTML_1 = function $isTrustedHTML_1(this$static){
  return instanceOfNative(this$static, $wnd.TrustedHTML);
}
;
ed.$isTrustedScriptURL_0 = function $isTrustedScriptURL_0(this$static){
  return instanceOfNative(this$static, $wnd.TrustedScriptURL);
}
;
ed.of_103 = function of_103(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Element__Constants = function $clinit_Element__Constants(){
  ed.$clinit_Element__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Event_0 = function $clinit_Event_0(){
  ed.$clinit_Event_0 = emptyMethod;
  jl.$clinit_Object();
  ed.AT_TARGET = (ed.$clinit_Event__Constants() , $wnd.Event.AT_TARGET);
  ed.BUBBLING_PHASE = (ed.$clinit_Event__Constants() , $wnd.Event.BUBBLING_PHASE);
  ed.CAPTURING_PHASE = (ed.$clinit_Event__Constants() , $wnd.Event.CAPTURING_PHASE);
}
;
ed.AT_TARGET = 0;
ed.BUBBLING_PHASE = 0;
ed.CAPTURING_PHASE = 0;
ed.$clinit_ErrorEvent = function $clinit_ErrorEvent(){
  ed.$clinit_ErrorEvent = emptyMethod;
  ed.$clinit_Event_0();
}
;
ed.$clinit_EventInit = function $clinit_EventInit(){
  ed.$clinit_EventInit = emptyMethod;
}
;
ed.create_30 = function create_30(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ErrorEventInit = function $clinit_ErrorEventInit(){
  ed.$clinit_ErrorEventInit = emptyMethod;
}
;
ed.create_29 = function create_29(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_UIEventInit = function $clinit_UIEventInit(){
  ed.$clinit_UIEventInit = emptyMethod;
}
;
ed.create_74 = function create_74(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_EventModifierInit = function $clinit_EventModifierInit(){
  ed.$clinit_EventModifierInit = emptyMethod;
}
;
ed.create_32 = function create_32(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_EventTarget$AddEventListenerOptionsUnionType = function $clinit_EventTarget$AddEventListenerOptionsUnionType(){
  ed.$clinit_EventTarget$AddEventListenerOptionsUnionType = emptyMethod;
}
;
ed.$asAddEventListenerOptions = function $asAddEventListenerOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asBoolean_4 = function $asBoolean_4(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$isBoolean_4 = function $isBoolean_4(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_104 = function of_104(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_EventTarget$RemoveEventListenerOptionsUnionType = function $clinit_EventTarget$RemoveEventListenerOptionsUnionType(){
  ed.$clinit_EventTarget$RemoveEventListenerOptionsUnionType = emptyMethod;
}
;
ed.$asBoolean_5 = function $asBoolean_5(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asEventListenerOptions = function $asEventListenerOptions(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_5 = function $isBoolean_5(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_105 = function of_105(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Event__Constants = function $clinit_Event__Constants(){
  ed.$clinit_Event__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ExtendableEvent = function $clinit_ExtendableEvent(){
  ed.$clinit_ExtendableEvent = emptyMethod;
  ed.$clinit_Event_0();
}
;
ed.$clinit_ExtendableEventInit = function $clinit_ExtendableEventInit(){
  ed.$clinit_ExtendableEventInit = emptyMethod;
}
;
ed.create_33 = function create_33(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ExtendableMessageEvent = function $clinit_ExtendableMessageEvent(){
  ed.$clinit_ExtendableMessageEvent = emptyMethod;
  ed.$clinit_ExtendableEvent();
}
;
ed.$clinit_ExtendableMessageEvent$SourceUnionType = function $clinit_ExtendableMessageEvent$SourceUnionType(){
  ed.$clinit_ExtendableMessageEvent$SourceUnionType = emptyMethod;
}
;
ed.$asMessagePort = function $asMessagePort(this$static){
  return castToNative(jb.cast(this$static), $wnd.MessagePort);
}
;
ed.$asServiceWorker = function $asServiceWorker(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorker);
}
;
ed.$asServiceWorkerClient = function $asServiceWorkerClient(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorkerClient);
}
;
ed.$isMessagePort = function $isMessagePort(this$static){
  return instanceOfNative(this$static, $wnd.MessagePort);
}
;
ed.$isServiceWorker = function $isServiceWorker(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorker);
}
;
ed.$isServiceWorkerClient = function $isServiceWorkerClient(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorkerClient);
}
;
ed.of_106 = function of_106(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ExtendableMessageEventInit = function $clinit_ExtendableMessageEventInit(){
  ed.$clinit_ExtendableMessageEventInit = emptyMethod;
}
;
ed.$setPorts = function $setPorts(this$static, ports){
  this$static.ports = jb.uncheckedCast_0(ports);
}
;
ed.$setSource = function $setSource(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.$setSource_0 = function $setSource_0(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.$setSource_1 = function $setSource_1(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.create_34 = function create_34(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ExtendableMessageEventInit$GetSourceUnionType = function $clinit_ExtendableMessageEventInit$GetSourceUnionType(){
  ed.$clinit_ExtendableMessageEventInit$GetSourceUnionType = emptyMethod;
}
;
ed.$asMessagePort_0 = function $asMessagePort_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.MessagePort);
}
;
ed.$asServiceWorker_0 = function $asServiceWorker_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorker);
}
;
ed.$asServiceWorkerClient_0 = function $asServiceWorkerClient_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorkerClient);
}
;
ed.$isMessagePort_0 = function $isMessagePort_0(this$static){
  return instanceOfNative(this$static, $wnd.MessagePort);
}
;
ed.$isServiceWorker_0 = function $isServiceWorker_0(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorker);
}
;
ed.$isServiceWorkerClient_0 = function $isServiceWorkerClient_0(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorkerClient);
}
;
ed.of_107 = function of_107(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_File = function $clinit_File(){
  ed.$clinit_File = emptyMethod;
  ed.$clinit_Blob();
}
;
ed.$clinit_File$ConstructorContentsArrayUnionType = function $clinit_File$ConstructorContentsArrayUnionType(){
  ed.$clinit_File$ConstructorContentsArrayUnionType = emptyMethod;
}
;
ed.$asArrayBuffer_1 = function $asArrayBuffer_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ed.$asBlob_1 = function $asBlob_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asString_87 = function $asString_87(this$static){
  return jb.asString(this$static);
}
;
ed.$isArrayBuffer_1 = function $isArrayBuffer_1(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ed.$isBlob_1 = function $isBlob_1(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isString_87 = function $isString_87(this$static){
  return instanceOfString(this$static);
}
;
ed.of_108 = function of_108(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FileList = function $clinit_FileList(){
  ed.$clinit_FileList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_7 = function $asList_7(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_8 = function $delete_8(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_7 = function $getAt_7(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_7 = function $getAtAsAny_7(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_7 = function $getLength_7(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_7 = function $setAt_7(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_10 = function $setLength_10(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_FilePropertyBag = function $clinit_FilePropertyBag(){
  ed.$clinit_FilePropertyBag = emptyMethod;
}
;
ed.create_35 = function create_35(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_FontFace = function $clinit_FontFace(){
  ed.$clinit_FontFace = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_FontFace$ConstructorSourceUnionType = function $clinit_FontFace$ConstructorSourceUnionType(){
  ed.$clinit_FontFace$ConstructorSourceUnionType = emptyMethod;
}
;
ed.$asArrayBuffer_2 = function $asArrayBuffer_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ed.$asArrayBufferView_2 = function $asArrayBufferView_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ed.$asString_88 = function $asString_88(this$static){
  return jb.asString(this$static);
}
;
ed.$isArrayBuffer_2 = function $isArrayBuffer_2(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ed.$isArrayBufferView_2 = function $isArrayBufferView_2(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ed.$isString_88 = function $isString_88(this$static){
  return instanceOfString(this$static);
}
;
ed.of_109 = function of_109(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FontFaceDescriptors = function $clinit_FontFaceDescriptors(){
  ed.$clinit_FontFaceDescriptors = emptyMethod;
}
;
ed.create_36 = function create_36(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_FontFaceSet = function $clinit_FontFaceSet(){
  ed.$clinit_FontFaceSet = emptyMethod;
}
;
ed.$forEach_0 = function $forEach_0(this$static, callback, selfObj){
  this$static.forEach(callback, jb.uncheckedCast_0(selfObj));
}
;
ed.$clinit_FormData = function $clinit_FormData(){
  ed.$clinit_FormData = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$append_5 = function $append_5(this$static, name_0, value_0){
  this$static.append(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$append_6 = function $append_6(this$static, name_0, value_0, filename){
  this$static.append(name_0, jb.uncheckedCast_0(value_0), filename);
}
;
ed.$append_7 = function $append_7(this$static, name_0, value_0){
  this$static.append(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$append_8 = function $append_8(this$static, name_0, value_0, filename){
  this$static.append(name_0, jb.uncheckedCast_0(value_0), filename);
}
;
ed.$set_13 = function $set_13(this$static, name_0, value_0){
  this$static.set(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$set_14 = function $set_14(this$static, name_0, value_0, filename){
  this$static.set(name_0, jb.uncheckedCast_0(value_0), filename);
}
;
ed.$set_15 = function $set_15(this$static, name_0, value_0){
  this$static.set(name_0, jb.uncheckedCast_0(value_0));
}
;
ed.$set_16 = function $set_16(this$static, name_0, value_0, filename){
  this$static.set(name_0, jb.uncheckedCast_0(value_0), filename);
}
;
ed.$clinit_FormData$AppendValueUnionType = function $clinit_FormData$AppendValueUnionType(){
  ed.$clinit_FormData$AppendValueUnionType = emptyMethod;
}
;
ed.$asBlob_2 = function $asBlob_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asString_89 = function $asString_89(this$static){
  return jb.asString(this$static);
}
;
ed.$isBlob_2 = function $isBlob_2(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isString_89 = function $isString_89(this$static){
  return instanceOfString(this$static);
}
;
ed.of_110 = function of_110(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FormData$GetAllArrayUnionType = function $clinit_FormData$GetAllArrayUnionType(){
  ed.$clinit_FormData$GetAllArrayUnionType = emptyMethod;
}
;
ed.$asFile_0 = function $asFile_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.File);
}
;
ed.$asString_90 = function $asString_90(this$static){
  return jb.asString(this$static);
}
;
ed.$isFile_0 = function $isFile_0(this$static){
  return instanceOfNative(this$static, $wnd.File);
}
;
ed.$isString_90 = function $isString_90(this$static){
  return instanceOfString(this$static);
}
;
ed.of_111 = function of_111(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FormData$GetUnionType = function $clinit_FormData$GetUnionType(){
  ed.$clinit_FormData$GetUnionType = emptyMethod;
}
;
ed.$asFile_1 = function $asFile_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.File);
}
;
ed.$asString_91 = function $asString_91(this$static){
  return jb.asString(this$static);
}
;
ed.$isFile_1 = function $isFile_1(this$static){
  return instanceOfNative(this$static, $wnd.File);
}
;
ed.$isString_91 = function $isString_91(this$static){
  return instanceOfString(this$static);
}
;
ed.of_112 = function of_112(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FormData$JsIterableTypeParameterArrayUnionType = function $clinit_FormData$JsIterableTypeParameterArrayUnionType(){
  ed.$clinit_FormData$JsIterableTypeParameterArrayUnionType = emptyMethod;
}
;
ed.$asFile_2 = function $asFile_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.File);
}
;
ed.$asString_92 = function $asString_92(this$static){
  return jb.asString(this$static);
}
;
ed.$isFile_2 = function $isFile_2(this$static){
  return instanceOfNative(this$static, $wnd.File);
}
;
ed.$isString_92 = function $isString_92(this$static){
  return instanceOfString(this$static);
}
;
ed.of_113 = function of_113(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FormData$SetValueUnionType = function $clinit_FormData$SetValueUnionType(){
  ed.$clinit_FormData$SetValueUnionType = emptyMethod;
}
;
ed.$asBlob_3 = function $asBlob_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asString_93 = function $asString_93(this$static){
  return jb.asString(this$static);
}
;
ed.$isBlob_3 = function $isBlob_3(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isString_93 = function $isString_93(this$static){
  return instanceOfString(this$static);
}
;
ed.of_114 = function of_114(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_FullscreenOptions = function $clinit_FullscreenOptions(){
  ed.$clinit_FullscreenOptions = emptyMethod;
}
;
ed.create_37 = function create_37(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Geolocation = function $clinit_Geolocation(){
  ed.$clinit_Geolocation = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_GeolocationCoordinates = function $clinit_GeolocationCoordinates(){
  ed.$clinit_GeolocationCoordinates = emptyMethod;
}
;
ed.create_38 = function create_38(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_GeolocationPosition = function $clinit_GeolocationPosition(){
  ed.$clinit_GeolocationPosition = emptyMethod;
}
;
ed.create_39 = function create_39(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_GeolocationPositionError = function $clinit_GeolocationPositionError(){
  ed.$clinit_GeolocationPositionError = emptyMethod;
}
;
ed.create_40 = function create_40(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_GeolocationPositionOptions = function $clinit_GeolocationPositionOptions(){
  ed.$clinit_GeolocationPositionOptions = emptyMethod;
}
;
ed.create_41 = function create_41(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_GetRootNodeOptions = function $clinit_GetRootNodeOptions(){
  ed.$clinit_GetRootNodeOptions = emptyMethod;
}
;
ed.create_42 = function create_42(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_HTMLElement = function $clinit_HTMLElement(){
  ed.$clinit_HTMLElement = emptyMethod;
  ed.$clinit_Element_0();
}
;
ed.$clinit_HTMLAnchorElement = function $clinit_HTMLAnchorElement(){
  ed.$clinit_HTMLAnchorElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLAreaElement = function $clinit_HTMLAreaElement(){
  ed.$clinit_HTMLAreaElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLBodyElement = function $clinit_HTMLBodyElement(){
  ed.$clinit_HTMLBodyElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLCanvasElement = function $clinit_HTMLCanvasElement(){
  ed.$clinit_HTMLCanvasElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$getContext = function $getContext(this$static, contextId, args){
  return this$static.getContext(contextId, jb.uncheckedCast_0(args));
}
;
ed.$clinit_HTMLCollection = function $clinit_HTMLCollection(){
  ed.$clinit_HTMLCollection = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
  jb.$clinit_JsPropertyMap();
}
;
ed.$asList_8 = function $asList_8(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_9 = function $delete_9(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$delete_10 = function $delete_10(this$static, propertyName){
  jb.$delete_27(this$static, propertyName);
}
;
ed.$forEach_1 = function $forEach_1(this$static, cb){
  jb.$forEach_5(this$static, cb);
}
;
ed.$get_5 = function $get_5(this$static, propertyName){
  return jb.$get_9(this$static, propertyName);
}
;
ed.$getAsAny_0 = function $getAsAny_0(this$static, propertyName){
  return jb.$getAsAny_4(this$static, propertyName);
}
;
ed.$getAt_8 = function $getAt_8(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_8 = function $getAtAsAny_8(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_8 = function $getLength_8(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$has_0 = function $has_0(this$static, propertyName){
  return jb.$has_4(this$static, propertyName);
}
;
ed.$nestedGet_0 = function $nestedGet_0(this$static, qualifiedName){
  return jb.$nestedGet_4(this$static, qualifiedName);
}
;
ed.$nestedGetAsAny_0 = function $nestedGetAsAny_0(this$static, qualifiedName){
  return jb.$nestedGetAsAny_4(this$static, qualifiedName);
}
;
ed.$set_17 = function $set_17(this$static, propertyName, value_0){
  jb.$set_21(this$static, propertyName, value_0);
}
;
ed.$setAt_8 = function $setAt_8(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_11 = function $setLength_11(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_HTMLDocument = function $clinit_HTMLDocument(){
  ed.$clinit_HTMLDocument = emptyMethod;
  ed.$clinit_Document_0();
}
;
ed.$clinit_HTMLDocument$LinksHTMLCollectionTypeParameterUnionType = function $clinit_HTMLDocument$LinksHTMLCollectionTypeParameterUnionType(){
  ed.$clinit_HTMLDocument$LinksHTMLCollectionTypeParameterUnionType = emptyMethod;
}
;
ed.$asHTMLAnchorElement = function $asHTMLAnchorElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLAnchorElement);
}
;
ed.$asHTMLAreaElement = function $asHTMLAreaElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLAreaElement);
}
;
ed.$isHTMLAnchorElement = function $isHTMLAnchorElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLAnchorElement);
}
;
ed.$isHTMLAreaElement = function $isHTMLAreaElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLAreaElement);
}
;
ed.of_115 = function of_115(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_HTMLElement$AttachShadowOptionsType = function $clinit_HTMLElement$AttachShadowOptionsType(){
  ed.$clinit_HTMLElement$AttachShadowOptionsType = emptyMethod;
}
;
ed.create_43 = function create_43(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_HTMLFormControlsCollection = function $clinit_HTMLFormControlsCollection(){
  ed.$clinit_HTMLFormControlsCollection = emptyMethod;
  ed.$clinit_HTMLCollection();
  jb.$clinit_JsArrayLike();
}
;
ed.$clinit_HTMLFormElement = function $clinit_HTMLFormElement(){
  ed.$clinit_HTMLFormElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLHeadElement = function $clinit_HTMLHeadElement(){
  ed.$clinit_HTMLHeadElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLHtmlElement = function $clinit_HTMLHtmlElement(){
  ed.$clinit_HTMLHtmlElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLIFrameElement = function $clinit_HTMLIFrameElement(){
  ed.$clinit_HTMLIFrameElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLImageElement = function $clinit_HTMLImageElement(){
  ed.$clinit_HTMLImageElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLInputElement = function $clinit_HTMLInputElement(){
  ed.$clinit_HTMLInputElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLMediaElement = function $clinit_HTMLMediaElement(){
  ed.$clinit_HTMLMediaElement = emptyMethod;
  ed.$clinit_HTMLElement();
  ed.HAVE_CURRENT_DATA = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.HAVE_CURRENT_DATA);
  ed.HAVE_ENOUGH_DATA = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.HAVE_ENOUGH_DATA);
  ed.HAVE_FUTURE_DATA = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.HAVE_FUTURE_DATA);
  ed.HAVE_METADATA = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.HAVE_METADATA);
  ed.HAVE_NOTHING = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.HAVE_NOTHING);
  ed.NETWORK_EMPTY = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.NETWORK_EMPTY);
  ed.NETWORK_IDLE = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.NETWORK_IDLE);
  ed.NETWORK_LOADING = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.NETWORK_LOADING);
  ed.NETWORK_NO_SOURCE = (ed.$clinit_HTMLMediaElement__Constants() , $wnd.HTMLMediaElement.NETWORK_NO_SOURCE);
}
;
ed.HAVE_CURRENT_DATA = 0;
ed.HAVE_ENOUGH_DATA = 0;
ed.HAVE_FUTURE_DATA = 0;
ed.HAVE_METADATA = 0;
ed.HAVE_NOTHING = 0;
ed.NETWORK_EMPTY = 0;
ed.NETWORK_IDLE = 0;
ed.NETWORK_LOADING = 0;
ed.NETWORK_NO_SOURCE = 0;
ed.$clinit_HTMLMediaElement__Constants = function $clinit_HTMLMediaElement__Constants(){
  ed.$clinit_HTMLMediaElement__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_HTMLObjectElement = function $clinit_HTMLObjectElement(){
  ed.$clinit_HTMLObjectElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$TSetProperty = function $TSetProperty(this$static, target, property, value_0){
  this$static.TSetProperty(target, property, jb.uncheckedCast_0(value_0));
}
;
ed.$TSetProperty_0 = function $TSetProperty_0(this$static, target, property, value_0){
  this$static.TSetProperty(target, property, jb.uncheckedCast_0(value_0));
}
;
ed.$clinit_HTMLObjectElement$TSetPropertyValueUnionType = function $clinit_HTMLObjectElement$TSetPropertyValueUnionType(){
  ed.$clinit_HTMLObjectElement$TSetPropertyValueUnionType = emptyMethod;
}
;
ed.$asDouble_49 = function $asDouble_49(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asString_94 = function $asString_94(this$static){
  return jb.asString(this$static);
}
;
ed.$isDouble_49 = function $isDouble_49(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isString_94 = function $isString_94(this$static){
  return instanceOfString(this$static);
}
;
ed.of_116 = function of_116(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_HTMLScriptElement = function $clinit_HTMLScriptElement(){
  ed.$clinit_HTMLScriptElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLSlotElement = function $clinit_HTMLSlotElement(){
  ed.$clinit_HTMLSlotElement = emptyMethod;
  ed.$clinit_HTMLElement();
}
;
ed.$clinit_HTMLVideoElement = function $clinit_HTMLVideoElement(){
  ed.$clinit_HTMLVideoElement = emptyMethod;
  ed.$clinit_HTMLMediaElement();
}
;
ed.$clinit_Headers = function $clinit_Headers(){
  ed.$clinit_Headers = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Headers$ConstructorHeadersInitUnionType = function $clinit_Headers$ConstructorHeadersInitUnionType(){
  ed.$clinit_Headers$ConstructorHeadersInitUnionType = emptyMethod;
}
;
ed.$asHeaders = function $asHeaders(this$static){
  return castToNative(jb.cast(this$static), $wnd.Headers);
}
;
ed.$asJsArray_9 = function $asJsArray_9(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asJsPropertyMap = function $asJsPropertyMap(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isHeaders = function $isHeaders(this$static){
  return instanceOfNative(this$static, $wnd.Headers);
}
;
ed.$isJsArray_9 = function $isJsArray_9(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.of_117 = function of_117(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_History = function $clinit_History(){
  ed.$clinit_History = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ITransformStream = function $clinit_ITransformStream(){
  ed.$clinit_ITransformStream = emptyMethod;
}
;
ed.create_44 = function create_44(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_IdleCallbackOptions = function $clinit_IdleCallbackOptions(){
  ed.$clinit_IdleCallbackOptions = emptyMethod;
}
;
ed.create_45 = function create_45(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_IdleDeadline = function $clinit_IdleDeadline(){
  ed.$clinit_IdleDeadline = emptyMethod;
}
;
ed.$clinit_ImageBitmap = function $clinit_ImageBitmap(){
  ed.$clinit_ImageBitmap = emptyMethod;
}
;
ed.$clinit_ImageBitmapOptions = function $clinit_ImageBitmapOptions(){
  ed.$clinit_ImageBitmapOptions = emptyMethod;
}
;
ed.create_46 = function create_46(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ImageData = function $clinit_ImageData(){
  ed.$clinit_ImageData = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ImageData$ConstructorDataOrWidthUnionType = function $clinit_ImageData$ConstructorDataOrWidthUnionType(){
  ed.$clinit_ImageData$ConstructorDataOrWidthUnionType = emptyMethod;
}
;
ed.$asDouble_50 = function $asDouble_50(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asUint8ClampedArray = function $asUint8ClampedArray(this$static){
  return castToNative(jb.cast(this$static), $wnd.Uint8ClampedArray);
}
;
ed.$isDouble_50 = function $isDouble_50(this$static){
  return instanceOfDouble(this$static);
}
;
ed.$isUint8ClampedArray = function $isUint8ClampedArray(this$static){
  return instanceOfNative(this$static, $wnd.Uint8ClampedArray);
}
;
ed.of_118 = function of_118(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_InputDeviceCapabilities = function $clinit_InputDeviceCapabilities(){
  ed.$clinit_InputDeviceCapabilities = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_InputDeviceCapabilities$InputDeviceCapabilitiesOptionsType = function $clinit_InputDeviceCapabilities$InputDeviceCapabilitiesOptionsType(){
  ed.$clinit_InputDeviceCapabilities$InputDeviceCapabilitiesOptionsType = emptyMethod;
}
;
ed.create_47 = function create_47(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Location = function $clinit_Location(){
  ed.$clinit_Location = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_MediaDevices = function $clinit_MediaDevices(){
  ed.$clinit_MediaDevices = emptyMethod;
}
;
ed.$clinit_MediaError = function $clinit_MediaError(){
  ed.$clinit_MediaError = emptyMethod;
  jl.$clinit_Object();
  ed.MEDIA_ERR_ABORTED = (ed.$clinit_MediaError__Constants() , $wnd.MediaError.MEDIA_ERR_ABORTED);
  ed.MEDIA_ERR_DECODE = (ed.$clinit_MediaError__Constants() , $wnd.MediaError.MEDIA_ERR_DECODE);
  ed.MEDIA_ERR_NETWORK = (ed.$clinit_MediaError__Constants() , $wnd.MediaError.MEDIA_ERR_NETWORK);
  ed.MEDIA_ERR_SRC_NOT_SUPPORTED = (ed.$clinit_MediaError__Constants() , $wnd.MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED);
}
;
ed.MEDIA_ERR_ABORTED = 0;
ed.MEDIA_ERR_DECODE = 0;
ed.MEDIA_ERR_NETWORK = 0;
ed.MEDIA_ERR_SRC_NOT_SUPPORTED = 0;
ed.$clinit_MediaError__Constants = function $clinit_MediaError__Constants(){
  ed.$clinit_MediaError__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_MediaList = function $clinit_MediaList(){
  ed.$clinit_MediaList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_9 = function $asList_9(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_11 = function $delete_11(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_9 = function $getAt_9(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_9 = function $getAtAsAny_9(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_9 = function $getLength_9(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_9 = function $setAt_9(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_12 = function $setLength_12(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_MediaQueryList = function $clinit_MediaQueryList(){
  ed.$clinit_MediaQueryList = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_5 = function $addEventListener_5(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_6 = function $addEventListener_6(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_5 = function $removeEventListener_5(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_6 = function $removeEventListener_6(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_MediaSettingsRange = function $clinit_MediaSettingsRange(){
  ed.$clinit_MediaSettingsRange = emptyMethod;
}
;
ed.$clinit_MediaStream = function $clinit_MediaStream(){
  ed.$clinit_MediaStream = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_7 = function $addEventListener_7(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_8 = function $addEventListener_8(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_7 = function $removeEventListener_7(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_8 = function $removeEventListener_8(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_MediaStream$ConstructorStreamOrTracksUnionType = function $clinit_MediaStream$ConstructorStreamOrTracksUnionType(){
  ed.$clinit_MediaStream$ConstructorStreamOrTracksUnionType = emptyMethod;
}
;
ed.$asJsArray_10 = function $asJsArray_10(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asMediaStream = function $asMediaStream(this$static){
  return castToNative(jb.cast(this$static), $wnd.MediaStream);
}
;
ed.$isJsArray_10 = function $isJsArray_10(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isMediaStream = function $isMediaStream(this$static){
  return instanceOfNative(this$static, $wnd.MediaStream);
}
;
ed.of_119 = function of_119(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaStreamConstraints = function $clinit_MediaStreamConstraints(){
  ed.$clinit_MediaStreamConstraints = emptyMethod;
}
;
ed.$setAudio = function $setAudio(this$static, audio){
  this$static.audio = jb.uncheckedCast_0(audio);
}
;
ed.$setAudio_0 = function $setAudio_0(this$static, audio){
  this$static.audio = jb.uncheckedCast_0(audio);
}
;
ed.$setVideo = function $setVideo(this$static, video){
  this$static.video = jb.uncheckedCast_0(video);
}
;
ed.$setVideo_0 = function $setVideo_0(this$static, video){
  this$static.video = jb.uncheckedCast_0(video);
}
;
ed.create_49 = function create_49(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MediaStreamConstraints$GetAudioUnionType = function $clinit_MediaStreamConstraints$GetAudioUnionType(){
  ed.$clinit_MediaStreamConstraints$GetAudioUnionType = emptyMethod;
}
;
ed.$asBoolean_6 = function $asBoolean_6(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asMediaTrackConstraints = function $asMediaTrackConstraints(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_6 = function $isBoolean_6(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_120 = function of_120(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaStreamConstraints$GetVideoUnionType = function $clinit_MediaStreamConstraints$GetVideoUnionType(){
  ed.$clinit_MediaStreamConstraints$GetVideoUnionType = emptyMethod;
}
;
ed.$asBoolean_7 = function $asBoolean_7(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asMediaTrackConstraints_0 = function $asMediaTrackConstraints_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_7 = function $isBoolean_7(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_121 = function of_121(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaStreamTrack = function $clinit_MediaStreamTrack(){
  ed.$clinit_MediaStreamTrack = emptyMethod;
}
;
ed.$clinit_MediaStreamTrackEvent = function $clinit_MediaStreamTrackEvent(){
  ed.$clinit_MediaStreamTrackEvent = emptyMethod;
  ed.$clinit_Event_0();
}
;
ed.$clinit_MediaStreamTrackEventInit = function $clinit_MediaStreamTrackEventInit(){
  ed.$clinit_MediaStreamTrackEventInit = emptyMethod;
}
;
ed.create_50 = function create_50(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MediaTrackCapabilities = function $clinit_MediaTrackCapabilities(){
  ed.$clinit_MediaTrackCapabilities = emptyMethod;
}
;
ed.$setEchoCancellation = function $setEchoCancellation(this$static, echoCancellation){
  this$static.echoCancellation = jb.uncheckedCast_0(echoCancellation);
}
;
ed.$setExposureMode = function $setExposureMode(this$static, exposureMode){
  this$static.exposureMode = jb.uncheckedCast_0(exposureMode);
}
;
ed.$setFacingMode = function $setFacingMode(this$static, facingMode){
  this$static.facingMode = jb.uncheckedCast_0(facingMode);
}
;
ed.$setFocusMode = function $setFocusMode(this$static, focusMode){
  this$static.focusMode = jb.uncheckedCast_0(focusMode);
}
;
ed.$setWhiteBalanceMode = function $setWhiteBalanceMode(this$static, whiteBalanceMode){
  this$static.whiteBalanceMode = jb.uncheckedCast_0(whiteBalanceMode);
}
;
ed.$clinit_MediaTrackConstraintSet = function $clinit_MediaTrackConstraintSet(){
  ed.$clinit_MediaTrackConstraintSet = emptyMethod;
}
;
ed.$setAspectRatio = function $setAspectRatio(this$static, aspectRatio){
  this$static.aspectRatio = jb.uncheckedCast_0(aspectRatio);
}
;
ed.$setAspectRatio_0 = function $setAspectRatio_0(this$static, aspectRatio){
  this$static.aspectRatio = jb.uncheckedCast_0(aspectRatio);
}
;
ed.$setAutoGainControl = function $setAutoGainControl(this$static, autoGainControl){
  this$static.autoGainControl = jb.uncheckedCast_0(autoGainControl);
}
;
ed.$setAutoGainControl_0 = function $setAutoGainControl_0(this$static, autoGainControl){
  this$static.autoGainControl = jb.uncheckedCast_0(autoGainControl);
}
;
ed.$setChannelCount = function $setChannelCount(this$static, channelCount){
  this$static.channelCount = jb.uncheckedCast_0(channelCount);
}
;
ed.$setChannelCount_0 = function $setChannelCount_0(this$static, channelCount){
  this$static.channelCount = jb.uncheckedCast_0(channelCount);
}
;
ed.$setDeviceId = function $setDeviceId(this$static, deviceId){
  this$static.deviceId = jb.uncheckedCast_0(deviceId);
}
;
ed.$setDeviceId_0 = function $setDeviceId_0(this$static, deviceId){
  this$static.deviceId = jb.uncheckedCast_0(deviceId);
}
;
ed.$setDeviceId_1 = function $setDeviceId_1(this$static, deviceId){
  this$static.deviceId = jb.uncheckedCast_0(deviceId);
}
;
ed.$setDeviceId_2 = function $setDeviceId_2(this$static, deviceId){
  ed.$setDeviceId(this$static, jb.uncheckedCast_0(deviceId));
}
;
ed.$setEchoCancellation_0 = function $setEchoCancellation_0(this$static, echoCancellation){
  this$static.echoCancellation = jb.uncheckedCast_0(echoCancellation);
}
;
ed.$setEchoCancellation_1 = function $setEchoCancellation_1(this$static, echoCancellation){
  this$static.echoCancellation = jb.uncheckedCast_0(echoCancellation);
}
;
ed.$setFacingMode_0 = function $setFacingMode_0(this$static, facingMode){
  this$static.facingMode = jb.uncheckedCast_0(facingMode);
}
;
ed.$setFacingMode_1 = function $setFacingMode_1(this$static, facingMode){
  this$static.facingMode = jb.uncheckedCast_0(facingMode);
}
;
ed.$setFacingMode_2 = function $setFacingMode_2(this$static, facingMode){
  this$static.facingMode = jb.uncheckedCast_0(facingMode);
}
;
ed.$setFacingMode_3 = function $setFacingMode_3(this$static, facingMode){
  ed.$setFacingMode_0(this$static, jb.uncheckedCast_0(facingMode));
}
;
ed.$setFrameRate = function $setFrameRate(this$static, frameRate){
  this$static.frameRate = jb.uncheckedCast_0(frameRate);
}
;
ed.$setFrameRate_0 = function $setFrameRate_0(this$static, frameRate){
  this$static.frameRate = jb.uncheckedCast_0(frameRate);
}
;
ed.$setGroupId = function $setGroupId(this$static, groupId){
  this$static.groupId = jb.uncheckedCast_0(groupId);
}
;
ed.$setGroupId_0 = function $setGroupId_0(this$static, groupId){
  this$static.groupId = jb.uncheckedCast_0(groupId);
}
;
ed.$setGroupId_1 = function $setGroupId_1(this$static, groupId){
  this$static.groupId = jb.uncheckedCast_0(groupId);
}
;
ed.$setGroupId_2 = function $setGroupId_2(this$static, groupId){
  ed.$setGroupId(this$static, jb.uncheckedCast_0(groupId));
}
;
ed.$setHeight = function $setHeight(this$static, height){
  this$static.height = jb.uncheckedCast_0(height);
}
;
ed.$setHeight_0 = function $setHeight_0(this$static, height){
  this$static.height = jb.uncheckedCast_0(height);
}
;
ed.$setLatency = function $setLatency(this$static, latency){
  this$static.latency = jb.uncheckedCast_0(latency);
}
;
ed.$setLatency_0 = function $setLatency_0(this$static, latency){
  this$static.latency = jb.uncheckedCast_0(latency);
}
;
ed.$setNoiseSuppression = function $setNoiseSuppression(this$static, noiseSuppression){
  this$static.noiseSuppression = jb.uncheckedCast_0(noiseSuppression);
}
;
ed.$setNoiseSuppression_0 = function $setNoiseSuppression_0(this$static, noiseSuppression){
  this$static.noiseSuppression = jb.uncheckedCast_0(noiseSuppression);
}
;
ed.$setSampleRate = function $setSampleRate(this$static, sampleRate){
  this$static.sampleRate = jb.uncheckedCast_0(sampleRate);
}
;
ed.$setSampleRate_0 = function $setSampleRate_0(this$static, sampleRate){
  this$static.sampleRate = jb.uncheckedCast_0(sampleRate);
}
;
ed.$setSampleSize = function $setSampleSize(this$static, sampleSize){
  this$static.sampleSize = jb.uncheckedCast_0(sampleSize);
}
;
ed.$setSampleSize_0 = function $setSampleSize_0(this$static, sampleSize){
  this$static.sampleSize = jb.uncheckedCast_0(sampleSize);
}
;
ed.$setVolume = function $setVolume(this$static, volume){
  this$static.volume = jb.uncheckedCast_0(volume);
}
;
ed.$setVolume_0 = function $setVolume_0(this$static, volume){
  this$static.volume = jb.uncheckedCast_0(volume);
}
;
ed.$setWidth = function $setWidth(this$static, width_0){
  this$static.width = jb.uncheckedCast_0(width_0);
}
;
ed.$setWidth_0 = function $setWidth_0(this$static, width_0){
  this$static.width = jb.uncheckedCast_0(width_0);
}
;
ed.create_51 = function create_51(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MediaTrackConstraintSet$GetAspectRatioUnionType = function $clinit_MediaTrackConstraintSet$GetAspectRatioUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetAspectRatioUnionType = emptyMethod;
}
;
ed.$asConstrainDoubleRange = function $asConstrainDoubleRange(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asDouble_51 = function $asDouble_51(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$isDouble_51 = function $isDouble_51(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_122 = function of_122(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetAutoGainControlUnionType = function $clinit_MediaTrackConstraintSet$GetAutoGainControlUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetAutoGainControlUnionType = emptyMethod;
}
;
ed.$asBoolean_8 = function $asBoolean_8(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asConstrainBooleanParameters = function $asConstrainBooleanParameters(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_8 = function $isBoolean_8(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_123 = function of_123(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetChannelCountUnionType = function $clinit_MediaTrackConstraintSet$GetChannelCountUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetChannelCountUnionType = emptyMethod;
}
;
ed.$asConstrainLongRange = function $asConstrainLongRange(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_1 = function $asInt_1(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_1 = function $isInt_1(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_124 = function of_124(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetDeviceIdUnionType = function $clinit_MediaTrackConstraintSet$GetDeviceIdUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetDeviceIdUnionType = emptyMethod;
}
;
ed.$asConstrainDOMStringParameters = function $asConstrainDOMStringParameters(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asJsArray_11 = function $asJsArray_11(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_95 = function $asString_95(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_11 = function $isJsArray_11(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_95 = function $isString_95(this$static){
  return instanceOfString(this$static);
}
;
ed.of_125 = function of_125(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetEchoCancellationUnionType = function $clinit_MediaTrackConstraintSet$GetEchoCancellationUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetEchoCancellationUnionType = emptyMethod;
}
;
ed.$asBoolean_9 = function $asBoolean_9(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asConstrainBooleanParameters_0 = function $asConstrainBooleanParameters_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_9 = function $isBoolean_9(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_126 = function of_126(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetFacingModeUnionType = function $clinit_MediaTrackConstraintSet$GetFacingModeUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetFacingModeUnionType = emptyMethod;
}
;
ed.$asConstrainDOMStringParameters_0 = function $asConstrainDOMStringParameters_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asJsArray_12 = function $asJsArray_12(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_96 = function $asString_96(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_12 = function $isJsArray_12(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_96 = function $isString_96(this$static){
  return instanceOfString(this$static);
}
;
ed.of_127 = function of_127(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetFrameRateUnionType = function $clinit_MediaTrackConstraintSet$GetFrameRateUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetFrameRateUnionType = emptyMethod;
}
;
ed.$asConstrainDoubleRange_0 = function $asConstrainDoubleRange_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asDouble_52 = function $asDouble_52(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$isDouble_52 = function $isDouble_52(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_128 = function of_128(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetGroupIdUnionType = function $clinit_MediaTrackConstraintSet$GetGroupIdUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetGroupIdUnionType = emptyMethod;
}
;
ed.$asConstrainDOMStringParameters_1 = function $asConstrainDOMStringParameters_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asJsArray_13 = function $asJsArray_13(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asString_97 = function $asString_97(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_13 = function $isJsArray_13(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_97 = function $isString_97(this$static){
  return instanceOfString(this$static);
}
;
ed.of_129 = function of_129(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetHeightUnionType = function $clinit_MediaTrackConstraintSet$GetHeightUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetHeightUnionType = emptyMethod;
}
;
ed.$asConstrainLongRange_0 = function $asConstrainLongRange_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_2 = function $asInt_2(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_2 = function $isInt_2(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_130 = function of_130(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetLatencyUnionType = function $clinit_MediaTrackConstraintSet$GetLatencyUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetLatencyUnionType = emptyMethod;
}
;
ed.$asConstrainDoubleRange_1 = function $asConstrainDoubleRange_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asDouble_53 = function $asDouble_53(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$isDouble_53 = function $isDouble_53(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_131 = function of_131(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetNoiseSuppressionUnionType = function $clinit_MediaTrackConstraintSet$GetNoiseSuppressionUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetNoiseSuppressionUnionType = emptyMethod;
}
;
ed.$asBoolean_10 = function $asBoolean_10(this$static){
  return jb.asBoolean_0(this$static);
}
;
ed.$asConstrainBooleanParameters_1 = function $asConstrainBooleanParameters_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isBoolean_10 = function $isBoolean_10(this$static){
  return instanceOfBoolean(this$static);
}
;
ed.of_132 = function of_132(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetSampleRateUnionType = function $clinit_MediaTrackConstraintSet$GetSampleRateUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetSampleRateUnionType = emptyMethod;
}
;
ed.$asConstrainLongRange_1 = function $asConstrainLongRange_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_3 = function $asInt_3(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_3 = function $isInt_3(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_133 = function of_133(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetSampleSizeUnionType = function $clinit_MediaTrackConstraintSet$GetSampleSizeUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetSampleSizeUnionType = emptyMethod;
}
;
ed.$asConstrainLongRange_2 = function $asConstrainLongRange_2(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_4 = function $asInt_4(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_4 = function $isInt_4(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_134 = function of_134(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetVolumeUnionType = function $clinit_MediaTrackConstraintSet$GetVolumeUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetVolumeUnionType = emptyMethod;
}
;
ed.$asConstrainDoubleRange_2 = function $asConstrainDoubleRange_2(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asDouble_54 = function $asDouble_54(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$isDouble_54 = function $isDouble_54(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_135 = function of_135(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraintSet$GetWidthUnionType = function $clinit_MediaTrackConstraintSet$GetWidthUnionType(){
  ed.$clinit_MediaTrackConstraintSet$GetWidthUnionType = emptyMethod;
}
;
ed.$asConstrainLongRange_3 = function $asConstrainLongRange_3(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asInt_5 = function $asInt_5(this$static){
  return jb.asInt_0(this$static);
}
;
ed.$isInt_5 = function $isInt_5(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_136 = function of_136(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MediaTrackConstraints = function $clinit_MediaTrackConstraints(){
  ed.$clinit_MediaTrackConstraints = emptyMethod;
}
;
ed.$setAdvanced = function $setAdvanced(this$static, advanced){
  this$static.advanced = jb.uncheckedCast_0(advanced);
}
;
ed.create_52 = function create_52(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MediaTrackSettings = function $clinit_MediaTrackSettings(){
  ed.$clinit_MediaTrackSettings = emptyMethod;
}
;
ed.$setPointsOfInterest = function $setPointsOfInterest(this$static, pointsOfInterest){
  this$static.pointsOfInterest = jb.uncheckedCast_0(pointsOfInterest);
}
;
ed.$clinit_MediaTrackSettings$PointsOfInterestFieldType = function $clinit_MediaTrackSettings$PointsOfInterestFieldType(){
  ed.$clinit_MediaTrackSettings$PointsOfInterestFieldType = emptyMethod;
}
;
ed.create_53 = function create_53(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MediaTrackSupportedConstraints = function $clinit_MediaTrackSupportedConstraints(){
  ed.$clinit_MediaTrackSupportedConstraints = emptyMethod;
}
;
ed.$clinit_MessageEvent = function $clinit_MessageEvent(){
  ed.$clinit_MessageEvent = emptyMethod;
  ed.$clinit_Event_0();
}
;
ed.$initMessageEvent = function $initMessageEvent(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEvent_0 = function $initMessageEvent_0(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEvent_1 = function $initMessageEvent_1(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEvent_2 = function $initMessageEvent_2(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEvent_1(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEvent_3 = function $initMessageEvent_3(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEvent_4 = function $initMessageEvent_4(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEvent_5 = function $initMessageEvent_5(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEvent_4(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEvent_6 = function $initMessageEvent_6(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEvent_7 = function $initMessageEvent_7(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEvent(typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEvent_8 = function $initMessageEvent_8(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEvent_7(this$static, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEventNS = function $initMessageEventNS(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEventNS_0 = function $initMessageEventNS_0(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEventNS_1 = function $initMessageEventNS_1(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEventNS_2 = function $initMessageEventNS_2(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEventNS_1(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEventNS_3 = function $initMessageEventNS_3(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEventNS_4 = function $initMessageEventNS_4(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEventNS_5 = function $initMessageEventNS_5(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEventNS_4(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$initMessageEventNS_6 = function $initMessageEventNS_6(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg));
}
;
ed.$initMessageEventNS_7 = function $initMessageEventNS_7(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  this$static.initMessageEventNS(namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, jb.uncheckedCast_0(sourceArg), portsArg);
}
;
ed.$initMessageEventNS_8 = function $initMessageEventNS_8(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, portsArg){
  ed.$initMessageEventNS_7(this$static, namespaceURI, typeArg, canBubbleArg, cancelableArg, dataArg, originArg, lastEventIdArg, sourceArg, jb.uncheckedCast_0(portsArg));
}
;
ed.$clinit_MessageEvent$InitMessageEventNSSourceArgUnionType = function $clinit_MessageEvent$InitMessageEventNSSourceArgUnionType(){
  ed.$clinit_MessageEvent$InitMessageEventNSSourceArgUnionType = emptyMethod;
}
;
ed.$asMessagePort_1 = function $asMessagePort_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.MessagePort);
}
;
ed.$asServiceWorker_1 = function $asServiceWorker_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorker);
}
;
ed.$asWindow = function $asWindow(this$static){
  return castToNative(jb.cast(this$static), $wnd.Window);
}
;
ed.$isMessagePort_1 = function $isMessagePort_1(this$static){
  return instanceOfNative(this$static, $wnd.MessagePort);
}
;
ed.$isServiceWorker_1 = function $isServiceWorker_1(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorker);
}
;
ed.$isWindow = function $isWindow(this$static){
  return instanceOfNative(this$static, $wnd.Window);
}
;
ed.of_137 = function of_137(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MessageEvent$InitMessageEventSourceArgUnionType = function $clinit_MessageEvent$InitMessageEventSourceArgUnionType(){
  ed.$clinit_MessageEvent$InitMessageEventSourceArgUnionType = emptyMethod;
}
;
ed.$asMessagePort_2 = function $asMessagePort_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.MessagePort);
}
;
ed.$asServiceWorker_2 = function $asServiceWorker_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorker);
}
;
ed.$asWindow_0 = function $asWindow_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Window);
}
;
ed.$isMessagePort_2 = function $isMessagePort_2(this$static){
  return instanceOfNative(this$static, $wnd.MessagePort);
}
;
ed.$isServiceWorker_2 = function $isServiceWorker_2(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorker);
}
;
ed.$isWindow_0 = function $isWindow_0(this$static){
  return instanceOfNative(this$static, $wnd.Window);
}
;
ed.of_138 = function of_138(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MessageEventInit = function $clinit_MessageEventInit(){
  ed.$clinit_MessageEventInit = emptyMethod;
}
;
ed.$setPorts_0 = function $setPorts_0(this$static, ports){
  this$static.ports = jb.uncheckedCast_0(ports);
}
;
ed.$setSource_2 = function $setSource_2(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.$setSource_3 = function $setSource_3(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.$setSource_4 = function $setSource_4(this$static, source){
  this$static.source = jb.uncheckedCast_0(source);
}
;
ed.create_54 = function create_54(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_MessageEventInit$GetSourceUnionType = function $clinit_MessageEventInit$GetSourceUnionType(){
  ed.$clinit_MessageEventInit$GetSourceUnionType = emptyMethod;
}
;
ed.$asMessagePort_3 = function $asMessagePort_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.MessagePort);
}
;
ed.$asServiceWorker_3 = function $asServiceWorker_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.ServiceWorker);
}
;
ed.$asWindow_1 = function $asWindow_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Window);
}
;
ed.$isMessagePort_3 = function $isMessagePort_3(this$static){
  return instanceOfNative(this$static, $wnd.MessagePort);
}
;
ed.$isServiceWorker_3 = function $isServiceWorker_3(this$static){
  return instanceOfNative(this$static, $wnd.ServiceWorker);
}
;
ed.$isWindow_1 = function $isWindow_1(this$static){
  return instanceOfNative(this$static, $wnd.Window);
}
;
ed.of_139 = function of_139(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_MessagePort = function $clinit_MessagePort(){
  ed.$clinit_MessagePort = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_9 = function $addEventListener_9(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_10 = function $addEventListener_10(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$postMessage = function $postMessage(this$static, message, transfer){
  this$static.postMessage(message, jb.uncheckedCast_0(transfer));
}
;
ed.$removeEventListener_9 = function $removeEventListener_9(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_10 = function $removeEventListener_10(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_MimeType = function $clinit_MimeType(){
  ed.$clinit_MimeType = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_MimeTypeArray = function $clinit_MimeTypeArray(){
  ed.$clinit_MimeTypeArray = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
  jb.$clinit_JsPropertyMap();
}
;
ed.$asList_10 = function $asList_10(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_12 = function $delete_12(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$delete_13 = function $delete_13(this$static, propertyName){
  jb.$delete_27(this$static, propertyName);
}
;
ed.$forEach_2 = function $forEach_2(this$static, cb){
  jb.$forEach_5(this$static, cb);
}
;
ed.$get_6 = function $get_6(this$static, propertyName){
  return jb.$get_9(this$static, propertyName);
}
;
ed.$getAsAny_1 = function $getAsAny_1(this$static, propertyName){
  return jb.$getAsAny_4(this$static, propertyName);
}
;
ed.$getAt_10 = function $getAt_10(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_10 = function $getAtAsAny_10(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_10 = function $getLength_10(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$has_1 = function $has_1(this$static, propertyName){
  return jb.$has_4(this$static, propertyName);
}
;
ed.$nestedGet_1 = function $nestedGet_1(this$static, qualifiedName){
  return jb.$nestedGet_4(this$static, qualifiedName);
}
;
ed.$nestedGetAsAny_1 = function $nestedGetAsAny_1(this$static, qualifiedName){
  return jb.$nestedGetAsAny_4(this$static, qualifiedName);
}
;
ed.$set_18 = function $set_18(this$static, propertyName, value_0){
  jb.$set_21(this$static, propertyName, value_0);
}
;
ed.$setAt_10 = function $setAt_10(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_13 = function $setLength_13(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_UIEvent = function $clinit_UIEvent(){
  ed.$clinit_UIEvent = emptyMethod;
  ed.$clinit_Event_0();
}
;
ed.$clinit_MouseEvent = function $clinit_MouseEvent(){
  ed.$clinit_MouseEvent = emptyMethod;
  ed.$clinit_UIEvent();
}
;
ed.$clinit_MouseEventInit = function $clinit_MouseEventInit(){
  ed.$clinit_MouseEventInit = emptyMethod;
}
;
ed.create_55 = function create_55(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_NamedNodeMap = function $clinit_NamedNodeMap(){
  ed.$clinit_NamedNodeMap = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
  jb.$clinit_JsPropertyMap();
}
;
ed.$asList_11 = function $asList_11(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_14 = function $delete_14(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$delete_15 = function $delete_15(this$static, propertyName){
  jb.$delete_27(this$static, propertyName);
}
;
ed.$forEach_3 = function $forEach_3(this$static, cb){
  jb.$forEach_5(this$static, cb);
}
;
ed.$get_7 = function $get_7(this$static, propertyName){
  return jb.$get_9(this$static, propertyName);
}
;
ed.$getAsAny_2 = function $getAsAny_2(this$static, propertyName){
  return jb.$getAsAny_4(this$static, propertyName);
}
;
ed.$getAt_11 = function $getAt_11(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_11 = function $getAtAsAny_11(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_11 = function $getLength_11(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$has_2 = function $has_2(this$static, propertyName){
  return jb.$has_4(this$static, propertyName);
}
;
ed.$nestedGet_2 = function $nestedGet_2(this$static, qualifiedName){
  return jb.$nestedGet_4(this$static, qualifiedName);
}
;
ed.$nestedGetAsAny_2 = function $nestedGetAsAny_2(this$static, qualifiedName){
  return jb.$nestedGetAsAny_4(this$static, qualifiedName);
}
;
ed.$set_19 = function $set_19(this$static, propertyName, value_0){
  jb.$set_21(this$static, propertyName, value_0);
}
;
ed.$setAt_11 = function $setAt_11(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_14 = function $setLength_14(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_NavigatorStorage = function $clinit_NavigatorStorage(){
  ed.$clinit_NavigatorStorage = emptyMethod;
}
;
ed.$clinit_Navigator = function $clinit_Navigator(){
  ed.$clinit_Navigator = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_NodeFilter = function $clinit_NodeFilter(){
  ed.$clinit_NodeFilter = emptyMethod;
  ed.FILTER_ACCEPT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.FILTER_ACCEPT);
  ed.FILTER_REJECT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.FILTER_REJECT);
  ed.FILTER_SKIP = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.FILTER_SKIP);
  ed.SHOW_ALL = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_ALL);
  ed.SHOW_ATTRIBUTE = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_ATTRIBUTE);
  ed.SHOW_CDATA_SECTION = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_CDATA_SECTION);
  ed.SHOW_COMMENT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_COMMENT);
  ed.SHOW_DOCUMENT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_DOCUMENT);
  ed.SHOW_DOCUMENT_FRAGMENT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_DOCUMENT_FRAGMENT);
  ed.SHOW_DOCUMENT_TYPE = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_DOCUMENT_TYPE);
  ed.SHOW_ELEMENT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_ELEMENT);
  ed.SHOW_ENTITY = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_ENTITY);
  ed.SHOW_ENTITY_REFERENCE = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_ENTITY_REFERENCE);
  ed.SHOW_NOTATION = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_NOTATION);
  ed.SHOW_PROCESSING_INSTRUCTION = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_PROCESSING_INSTRUCTION);
  ed.SHOW_TEXT = (ed.$clinit_NodeFilter__Constants() , $wnd.NodeFilter.SHOW_TEXT);
}
;
ed.FILTER_ACCEPT = 0;
ed.FILTER_REJECT = 0;
ed.FILTER_SKIP = 0;
ed.SHOW_ALL = 0;
ed.SHOW_ATTRIBUTE = 0;
ed.SHOW_CDATA_SECTION = 0;
ed.SHOW_COMMENT = 0;
ed.SHOW_DOCUMENT = 0;
ed.SHOW_DOCUMENT_FRAGMENT = 0;
ed.SHOW_DOCUMENT_TYPE = 0;
ed.SHOW_ELEMENT = 0;
ed.SHOW_ENTITY = 0;
ed.SHOW_ENTITY_REFERENCE = 0;
ed.SHOW_NOTATION = 0;
ed.SHOW_PROCESSING_INSTRUCTION = 0;
ed.SHOW_TEXT = 0;
ed.$clinit_NodeFilter__Constants = function $clinit_NodeFilter__Constants(){
  ed.$clinit_NodeFilter__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_NodeIterator = function $clinit_NodeIterator(){
  ed.$clinit_NodeIterator = emptyMethod;
}
;
ed.$clinit_NodeList = function $clinit_NodeList(){
  ed.$clinit_NodeList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_12 = function $asList_12(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_16 = function $delete_16(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_12 = function $getAt_12(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_12 = function $getAtAsAny_12(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_12 = function $getLength_12(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_12 = function $setAt_12(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_15 = function $setLength_15(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_Node__Constants = function $clinit_Node__Constants(){
  ed.$clinit_Node__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Notification = function $clinit_Notification(){
  ed.$clinit_Notification = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_11 = function $addEventListener_11(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_12 = function $addEventListener_12(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_11 = function $removeEventListener_11(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_12 = function $removeEventListener_12(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_NotificationAction = function $clinit_NotificationAction(){
  ed.$clinit_NotificationAction = emptyMethod;
}
;
ed.create_56 = function create_56(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_NotificationCenter = function $clinit_NotificationCenter(){
  ed.$clinit_NotificationCenter = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_NotificationOptions = function $clinit_NotificationOptions(){
  ed.$clinit_NotificationOptions = emptyMethod;
}
;
ed.$setActions = function $setActions(this$static, actions){
  this$static.actions = jb.uncheckedCast_0(actions);
}
;
ed.$setVibrate = function $setVibrate(this$static, vibrate){
  this$static.vibrate = jb.uncheckedCast_0(vibrate);
}
;
ed.create_57 = function create_57(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_OffscreenCanvas = function $clinit_OffscreenCanvas(){
  ed.$clinit_OffscreenCanvas = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_13 = function $addEventListener_13(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_14 = function $addEventListener_14(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$getContext_0 = function $getContext_0(this$static, contextId, options){
  return this$static.getContext(contextId, jb.uncheckedCast_0(options));
}
;
ed.$removeEventListener_13 = function $removeEventListener_13(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_14 = function $removeEventListener_14(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_OffscreenCanvas$ConvertToBlobOptionsType = function $clinit_OffscreenCanvas$ConvertToBlobOptionsType(){
  ed.$clinit_OffscreenCanvas$ConvertToBlobOptionsType = emptyMethod;
}
;
ed.create_58 = function create_58(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Path2D = function $clinit_Path2D(){
  ed.$clinit_Path2D = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Path2D$ConstructorArgUnionType = function $clinit_Path2D$ConstructorArgUnionType(){
  ed.$clinit_Path2D$ConstructorArgUnionType = emptyMethod;
}
;
ed.$asPath2D_1 = function $asPath2D_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Path2D);
}
;
ed.$asString_98 = function $asString_98(this$static){
  return jb.asString(this$static);
}
;
ed.$isPath2D_1 = function $isPath2D_1(this$static){
  return instanceOfNative(this$static, $wnd.Path2D);
}
;
ed.$isString_98 = function $isString_98(this$static){
  return instanceOfString(this$static);
}
;
ed.of_140 = function of_140(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Performance = function $clinit_Performance(){
  ed.$clinit_Performance = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_PerformanceNavigation = function $clinit_PerformanceNavigation(){
  ed.$clinit_PerformanceNavigation = emptyMethod;
  jl.$clinit_Object();
  ed.TYPE_BACK_FORWARD = (ed.$clinit_PerformanceNavigation__Constants() , $wnd.PerformanceNavigation.TYPE_BACK_FORWARD);
  ed.TYPE_NAVIGATE = (ed.$clinit_PerformanceNavigation__Constants() , $wnd.PerformanceNavigation.TYPE_NAVIGATE);
  ed.TYPE_RELOAD = (ed.$clinit_PerformanceNavigation__Constants() , $wnd.PerformanceNavigation.TYPE_RELOAD);
  ed.TYPE_RESERVED = (ed.$clinit_PerformanceNavigation__Constants() , $wnd.PerformanceNavigation.TYPE_RESERVED);
}
;
ed.TYPE_BACK_FORWARD = 0;
ed.TYPE_NAVIGATE = 0;
ed.TYPE_RELOAD = 0;
ed.TYPE_RESERVED = 0;
ed.$clinit_PerformanceNavigation__Constants = function $clinit_PerformanceNavigation__Constants(){
  ed.$clinit_PerformanceNavigation__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_PerformanceTiming = function $clinit_PerformanceTiming(){
  ed.$clinit_PerformanceTiming = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_PipeOptions = function $clinit_PipeOptions(){
  ed.$clinit_PipeOptions = emptyMethod;
}
;
ed.create_59 = function create_59(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Plugin = function $clinit_Plugin(){
  ed.$clinit_Plugin = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_PluginArray = function $clinit_PluginArray(){
  ed.$clinit_PluginArray = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
  jb.$clinit_JsPropertyMap();
}
;
ed.$asList_13 = function $asList_13(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_17 = function $delete_17(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$delete_18 = function $delete_18(this$static, propertyName){
  jb.$delete_27(this$static, propertyName);
}
;
ed.$forEach_4 = function $forEach_4(this$static, cb){
  jb.$forEach_5(this$static, cb);
}
;
ed.$get_8 = function $get_8(this$static, propertyName){
  return jb.$get_9(this$static, propertyName);
}
;
ed.$getAsAny_3 = function $getAsAny_3(this$static, propertyName){
  return jb.$getAsAny_4(this$static, propertyName);
}
;
ed.$getAt_13 = function $getAt_13(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_13 = function $getAtAsAny_13(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_13 = function $getLength_13(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$has_3 = function $has_3(this$static, propertyName){
  return jb.$has_4(this$static, propertyName);
}
;
ed.$nestedGet_3 = function $nestedGet_3(this$static, qualifiedName){
  return jb.$nestedGet_4(this$static, qualifiedName);
}
;
ed.$nestedGetAsAny_3 = function $nestedGetAsAny_3(this$static, qualifiedName){
  return jb.$nestedGetAsAny_4(this$static, qualifiedName);
}
;
ed.$set_20 = function $set_20(this$static, propertyName, value_0){
  jb.$set_21(this$static, propertyName, value_0);
}
;
ed.$setAt_13 = function $setAt_13(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_16 = function $setLength_16(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_ProcessingInstruction = function $clinit_ProcessingInstruction(){
  ed.$clinit_ProcessingInstruction = emptyMethod;
  ed.$clinit_Node_0();
}
;
ed.$clinit_Range = function $clinit_Range(){
  ed.$clinit_Range = emptyMethod;
  jl.$clinit_Object();
  ed.END_TO_END = (ed.$clinit_Range__Constants() , $wnd.Range.END_TO_END);
  ed.END_TO_START = (ed.$clinit_Range__Constants() , $wnd.Range.END_TO_START);
  ed.START_TO_END = (ed.$clinit_Range__Constants() , $wnd.Range.START_TO_END);
  ed.START_TO_START = (ed.$clinit_Range__Constants() , $wnd.Range.START_TO_START);
}
;
ed.END_TO_END = 0;
ed.END_TO_START = 0;
ed.START_TO_END = 0;
ed.START_TO_START = 0;
ed.$clinit_Range__Constants = function $clinit_Range__Constants(){
  ed.$clinit_Range__Constants = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ReadableByteStreamController = function $clinit_ReadableByteStreamController(){
  ed.$clinit_ReadableByteStreamController = emptyMethod;
}
;
ed.$clinit_ReadableStream = function $clinit_ReadableStream(){
  ed.$clinit_ReadableStream = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ReadableStream$ConstructorQueuingStrategyUnionType = function $clinit_ReadableStream$ConstructorQueuingStrategyUnionType(){
  ed.$clinit_ReadableStream$ConstructorQueuingStrategyUnionType = emptyMethod;
}
;
ed.$asByteLengthQueuingStrategy = function $asByteLengthQueuingStrategy(this$static){
  return castToNative(jb.cast(this$static), $wnd.ByteLengthQueuingStrategy);
}
;
ed.$asCountQueuingStrategy = function $asCountQueuingStrategy(this$static){
  return castToNative(jb.cast(this$static), $wnd.CountQueuingStrategy);
}
;
ed.$asTransformStreamWritableStrategyType = function $asTransformStreamWritableStrategyType(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isByteLengthQueuingStrategy = function $isByteLengthQueuingStrategy(this$static){
  return instanceOfNative(this$static, $wnd.ByteLengthQueuingStrategy);
}
;
ed.$isCountQueuingStrategy = function $isCountQueuingStrategy(this$static){
  return instanceOfNative(this$static, $wnd.CountQueuingStrategy);
}
;
ed.of_141 = function of_141(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ReadableStream$GetReaderOptionsType = function $clinit_ReadableStream$GetReaderOptionsType(){
  ed.$clinit_ReadableStream$GetReaderOptionsType = emptyMethod;
}
;
ed.create_60 = function create_60(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ReadableStream$GetReaderUnionType = function $clinit_ReadableStream$GetReaderUnionType(){
  ed.$clinit_ReadableStream$GetReaderUnionType = emptyMethod;
}
;
ed.$asReadableStreamBYOBReader = function $asReadableStreamBYOBReader(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asReadableStreamDefaultReader = function $asReadableStreamDefaultReader(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.of_142 = function of_142(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ReadableStreamBYOBReader = function $clinit_ReadableStreamBYOBReader(){
  ed.$clinit_ReadableStreamBYOBReader = emptyMethod;
}
;
ed.$clinit_ReadableStreamBYOBRequest = function $clinit_ReadableStreamBYOBRequest(){
  ed.$clinit_ReadableStreamBYOBRequest = emptyMethod;
}
;
ed.$clinit_ReadableStreamDefaultController = function $clinit_ReadableStreamDefaultController(){
  ed.$clinit_ReadableStreamDefaultController = emptyMethod;
}
;
ed.$clinit_ReadableStreamDefaultReader = function $clinit_ReadableStreamDefaultReader(){
  ed.$clinit_ReadableStreamDefaultReader = emptyMethod;
}
;
ed.$clinit_ReadableStreamIteratorOptions = function $clinit_ReadableStreamIteratorOptions(){
  ed.$clinit_ReadableStreamIteratorOptions = emptyMethod;
}
;
ed.create_61 = function create_61(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ReadableStreamSource = function $clinit_ReadableStreamSource(){
  ed.$clinit_ReadableStreamSource = emptyMethod;
}
;
ed.create_62 = function create_62(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$onInvoke_14 = function $onInvoke_14(this$static, p0){
  return this$static(jb.uncheckedCast_0(p0));
}
;
ed.$onInvoke_15 = function $onInvoke_15(this$static, p0){
  return this$static(jb.uncheckedCast_0(p0));
}
;
ed.$clinit_ReadableStreamSource$PullFn$P0UnionType = function $clinit_ReadableStreamSource$PullFn$P0UnionType(){
  ed.$clinit_ReadableStreamSource$PullFn$P0UnionType = emptyMethod;
}
;
ed.$asReadableByteStreamController = function $asReadableByteStreamController(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asReadableStreamDefaultController = function $asReadableStreamDefaultController(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.of_143 = function of_143(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$onInvoke_16 = function $onInvoke_16(this$static, p0){
  return this$static(jb.uncheckedCast_0(p0));
}
;
ed.$onInvoke_17 = function $onInvoke_17(this$static, p0){
  return this$static(jb.uncheckedCast_0(p0));
}
;
ed.$clinit_ReadableStreamSource$StartFn$P0UnionType = function $clinit_ReadableStreamSource$StartFn$P0UnionType(){
  ed.$clinit_ReadableStreamSource$StartFn$P0UnionType = emptyMethod;
}
;
ed.$asReadableByteStreamController_0 = function $asReadableByteStreamController_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asReadableStreamDefaultController_0 = function $asReadableStreamDefaultController_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.of_144 = function of_144(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_RegistrationOptions = function $clinit_RegistrationOptions(){
  ed.$clinit_RegistrationOptions = emptyMethod;
}
;
ed.create_63 = function create_63(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Request = function $clinit_Request(){
  ed.$clinit_Request = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Request$ConstructorInputUnionType = function $clinit_Request$ConstructorInputUnionType(){
  ed.$clinit_Request$ConstructorInputUnionType = emptyMethod;
}
;
ed.$asRequest_1 = function $asRequest_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Request);
}
;
ed.$asString_99 = function $asString_99(this$static){
  return jb.asString(this$static);
}
;
ed.$isRequest_1 = function $isRequest_1(this$static){
  return instanceOfNative(this$static, $wnd.Request);
}
;
ed.$isString_99 = function $isString_99(this$static){
  return instanceOfString(this$static);
}
;
ed.of_145 = function of_145(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_RequestInit = function $clinit_RequestInit(){
  ed.$clinit_RequestInit = emptyMethod;
}
;
ed.$setBody = function $setBody(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_0 = function $setBody_0(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_1 = function $setBody_1(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_2 = function $setBody_2(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_3 = function $setBody_3(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_4 = function $setBody_4(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setBody_5 = function $setBody_5(this$static, body_0){
  this$static.body = jb.uncheckedCast_0(body_0);
}
;
ed.$setHeaders = function $setHeaders(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_0 = function $setHeaders_0(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_1 = function $setHeaders_1(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_2 = function $setHeaders_2(this$static, headers){
  ed.$setHeaders(this$static, jb.uncheckedCast_0(headers));
}
;
ed.create_64 = function create_64(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_RequestInit$GetBodyUnionType = function $clinit_RequestInit$GetBodyUnionType(){
  ed.$clinit_RequestInit$GetBodyUnionType = emptyMethod;
}
;
ed.$asArrayBuffer_3 = function $asArrayBuffer_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ed.$asArrayBufferView_3 = function $asArrayBufferView_3(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ed.$asBlob_4 = function $asBlob_4(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asFormData = function $asFormData(this$static){
  return castToNative(jb.cast(this$static), $wnd.FormData);
}
;
ed.$asReadableStream = function $asReadableStream(this$static){
  return castToNative(jb.cast(this$static), $wnd.ReadableStream);
}
;
ed.$asString_100 = function $asString_100(this$static){
  return jb.asString(this$static);
}
;
ed.$asURLSearchParams = function $asURLSearchParams(this$static){
  return castToNative(jb.cast(this$static), $wnd.URLSearchParams);
}
;
ed.$isArrayBuffer_3 = function $isArrayBuffer_3(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ed.$isArrayBufferView_3 = function $isArrayBufferView_3(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ed.$isBlob_4 = function $isBlob_4(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isFormData = function $isFormData(this$static){
  return instanceOfNative(this$static, $wnd.FormData);
}
;
ed.$isReadableStream = function $isReadableStream(this$static){
  return instanceOfNative(this$static, $wnd.ReadableStream);
}
;
ed.$isString_100 = function $isString_100(this$static){
  return instanceOfString(this$static);
}
;
ed.$isURLSearchParams = function $isURLSearchParams(this$static){
  return instanceOfNative(this$static, $wnd.URLSearchParams);
}
;
ed.of_146 = function of_146(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_RequestInit$GetHeadersUnionType = function $clinit_RequestInit$GetHeadersUnionType(){
  ed.$clinit_RequestInit$GetHeadersUnionType = emptyMethod;
}
;
ed.$asHeaders_0 = function $asHeaders_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.Headers);
}
;
ed.$asJsArray_14 = function $asJsArray_14(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asJsPropertyMap_0 = function $asJsPropertyMap_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isHeaders_0 = function $isHeaders_0(this$static){
  return instanceOfNative(this$static, $wnd.Headers);
}
;
ed.$isJsArray_14 = function $isJsArray_14(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.of_147 = function of_147(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Response = function $clinit_Response(){
  ed.$clinit_Response = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Response$ConstructorBodyUnionType = function $clinit_Response$ConstructorBodyUnionType(){
  ed.$clinit_Response$ConstructorBodyUnionType = emptyMethod;
}
;
ed.$asArrayBuffer_4 = function $asArrayBuffer_4(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBuffer);
}
;
ed.$asArrayBufferView_4 = function $asArrayBufferView_4(this$static){
  return castToNative(jb.cast(this$static), $wnd.ArrayBufferView);
}
;
ed.$asBlob_5 = function $asBlob_5(this$static){
  return castToNative(jb.cast(this$static), $wnd.Blob);
}
;
ed.$asFormData_0 = function $asFormData_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.FormData);
}
;
ed.$asReadableStream_0 = function $asReadableStream_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ReadableStream);
}
;
ed.$asString_101 = function $asString_101(this$static){
  return jb.asString(this$static);
}
;
ed.$asURLSearchParams_0 = function $asURLSearchParams_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.URLSearchParams);
}
;
ed.$isArrayBuffer_4 = function $isArrayBuffer_4(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBuffer);
}
;
ed.$isArrayBufferView_4 = function $isArrayBufferView_4(this$static){
  return instanceOfNative(this$static, $wnd.ArrayBufferView);
}
;
ed.$isBlob_5 = function $isBlob_5(this$static){
  return instanceOfNative(this$static, $wnd.Blob);
}
;
ed.$isFormData_0 = function $isFormData_0(this$static){
  return instanceOfNative(this$static, $wnd.FormData);
}
;
ed.$isReadableStream_0 = function $isReadableStream_0(this$static){
  return instanceOfNative(this$static, $wnd.ReadableStream);
}
;
ed.$isString_101 = function $isString_101(this$static){
  return instanceOfString(this$static);
}
;
ed.$isURLSearchParams_0 = function $isURLSearchParams_0(this$static){
  return instanceOfNative(this$static, $wnd.URLSearchParams);
}
;
ed.of_148 = function of_148(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ResponseInit = function $clinit_ResponseInit(){
  ed.$clinit_ResponseInit = emptyMethod;
}
;
ed.$setHeaders_3 = function $setHeaders_3(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_4 = function $setHeaders_4(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_5 = function $setHeaders_5(this$static, headers){
  this$static.headers = jb.uncheckedCast_0(headers);
}
;
ed.$setHeaders_6 = function $setHeaders_6(this$static, headers){
  ed.$setHeaders_3(this$static, jb.uncheckedCast_0(headers));
}
;
ed.create_65 = function create_65(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ResponseInit$GetHeadersUnionType = function $clinit_ResponseInit$GetHeadersUnionType(){
  ed.$clinit_ResponseInit$GetHeadersUnionType = emptyMethod;
}
;
ed.$asHeaders_1 = function $asHeaders_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.Headers);
}
;
ed.$asJsArray_15 = function $asJsArray_15(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asJsPropertyMap_1 = function $asJsPropertyMap_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isHeaders_1 = function $isHeaders_1(this$static){
  return instanceOfNative(this$static, $wnd.Headers);
}
;
ed.$isJsArray_15 = function $isJsArray_15(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.of_149 = function of_149(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_SQLError = function $clinit_SQLError(){
  ed.$clinit_SQLError = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_SQLResultSet = function $clinit_SQLResultSet(){
  ed.$clinit_SQLResultSet = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_SQLResultSetRowList = function $clinit_SQLResultSetRowList(){
  ed.$clinit_SQLResultSetRowList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_14 = function $asList_14(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_19 = function $delete_19(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_14 = function $getAt_14(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_14 = function $getAtAsAny_14(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_14 = function $getLength_14(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_14 = function $setAt_14(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_17 = function $setLength_17(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_SQLTransaction = function $clinit_SQLTransaction(){
  ed.$clinit_SQLTransaction = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$executeSql = function $executeSql(this$static, sqlStatement, queryArgs){
  this$static.executeSql(sqlStatement, jb.uncheckedCast_0(queryArgs));
}
;
ed.$executeSql_0 = function $executeSql_0(this$static, sqlStatement, queryArgs, callback){
  this$static.executeSql(sqlStatement, jb.uncheckedCast_0(queryArgs), callback);
}
;
ed.$executeSql_1 = function $executeSql_1(this$static, sqlStatement, queryArgs, callback, errorCallback){
  this$static.executeSql(sqlStatement, jb.uncheckedCast_0(queryArgs), callback, errorCallback);
}
;
ed.$clinit_Screen = function $clinit_Screen(){
  ed.$clinit_Screen = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_ScrollIntoViewOptions = function $clinit_ScrollIntoViewOptions(){
  ed.$clinit_ScrollIntoViewOptions = emptyMethod;
}
;
ed.create_66 = function create_66(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_ScrollToOptions = function $clinit_ScrollToOptions(){
  ed.$clinit_ScrollToOptions = emptyMethod;
}
;
ed.create_67 = function create_67(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_Selection = function $clinit_Selection(){
  ed.$clinit_Selection = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Worker = function $clinit_Worker(){
  ed.$clinit_Worker = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_15 = function $addEventListener_15(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_16 = function $addEventListener_16(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$postMessage_0 = function $postMessage_0(this$static, message, transfer){
  this$static.postMessage(message, jb.uncheckedCast_0(transfer));
}
;
ed.$removeEventListener_15 = function $removeEventListener_15(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_16 = function $removeEventListener_16(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$webkitPostMessage = function $webkitPostMessage(this$static, message, transfer){
  this$static.webkitPostMessage(message, jb.uncheckedCast_0(transfer));
}
;
ed.$clinit_ServiceWorker = function $clinit_ServiceWorker(){
  ed.$clinit_ServiceWorker = emptyMethod;
  ed.$clinit_Worker();
}
;
ed.$clinit_ServiceWorkerClient = function $clinit_ServiceWorkerClient(){
  ed.$clinit_ServiceWorkerClient = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$postMessage_1 = function $postMessage_1(this$static, message, transfer){
  this$static.postMessage(message, jb.uncheckedCast_0(transfer));
}
;
ed.$clinit_ServiceWorkerContainer = function $clinit_ServiceWorkerContainer(){
  ed.$clinit_ServiceWorkerContainer = emptyMethod;
}
;
ed.$clinit_ShadowRoot = function $clinit_ShadowRoot(){
  ed.$clinit_ShadowRoot = emptyMethod;
  ed.$clinit_DocumentFragment();
}
;
ed.$clinit_ShareData = function $clinit_ShareData(){
  ed.$clinit_ShareData = emptyMethod;
}
;
ed.create_68 = function create_68(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_StorageManager = function $clinit_StorageManager(){
  ed.$clinit_StorageManager = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_StyleSheetList = function $clinit_StyleSheetList(){
  ed.$clinit_StyleSheetList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_15 = function $asList_15(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_20 = function $delete_20(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_15 = function $getAt_15(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_15 = function $getAtAsAny_15(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_15 = function $getLength_15(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_15 = function $setAt_15(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_18 = function $setLength_18(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_TextMetrics = function $clinit_TextMetrics(){
  ed.$clinit_TextMetrics = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TextTrack = function $clinit_TextTrack(){
  ed.$clinit_TextTrack = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_17 = function $addEventListener_17(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_18 = function $addEventListener_18(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_17 = function $removeEventListener_17(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_18 = function $removeEventListener_18(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_TextTrackCue = function $clinit_TextTrackCue(){
  ed.$clinit_TextTrackCue = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TextTrackCueList = function $clinit_TextTrackCueList(){
  ed.$clinit_TextTrackCueList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_16 = function $asList_16(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_21 = function $delete_21(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_16 = function $getAt_16(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_16 = function $getAtAsAny_16(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_16 = function $getLength_16(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_16 = function $setAt_16(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_19 = function $setLength_19(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_TextTrackList = function $clinit_TextTrackList(){
  ed.$clinit_TextTrackList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_17 = function $asList_17(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_22 = function $delete_22(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_17 = function $getAt_17(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_17 = function $getAtAsAny_17(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_17 = function $getLength_17(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_17 = function $setAt_17(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_20 = function $setLength_20(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_TimeRanges = function $clinit_TimeRanges(){
  ed.$clinit_TimeRanges = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_Touch = function $clinit_Touch(){
  ed.$clinit_Touch = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TouchEvent = function $clinit_TouchEvent(){
  ed.$clinit_TouchEvent = emptyMethod;
  ed.$clinit_UIEvent();
}
;
ed.$clinit_TouchEventInit = function $clinit_TouchEventInit(){
  ed.$clinit_TouchEventInit = emptyMethod;
}
;
ed.$setChangedTouches = function $setChangedTouches(this$static, changedTouches){
  this$static.changedTouches = jb.uncheckedCast_0(changedTouches);
}
;
ed.$setTargetTouches = function $setTargetTouches(this$static, targetTouches){
  this$static.targetTouches = jb.uncheckedCast_0(targetTouches);
}
;
ed.$setTouches = function $setTouches(this$static, touches){
  this$static.touches = jb.uncheckedCast_0(touches);
}
;
ed.create_69 = function create_69(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_TouchInitDict = function $clinit_TouchInitDict(){
  ed.$clinit_TouchInitDict = emptyMethod;
}
;
ed.create_70 = function create_70(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_TouchList = function $clinit_TouchList(){
  ed.$clinit_TouchList = emptyMethod;
  jl.$clinit_Object();
  jb.$clinit_JsArrayLike();
}
;
ed.$asList_18 = function $asList_18(this$static){
  return jb.$asList_19(this$static);
}
;
ed.$delete_23 = function $delete_23(this$static, index_0){
  jb.$delete_26(this$static, index_0);
}
;
ed.$getAt_18 = function $getAt_18(this$static, index_0){
  return jb.$getAt_19(this$static, index_0);
}
;
ed.$getAtAsAny_18 = function $getAtAsAny_18(this$static, index_0){
  return jb.$getAtAsAny_19(this$static, index_0);
}
;
ed.$getLength_18 = function $getLength_18(this$static){
  return jb.$getLength_19(this$static);
}
;
ed.$setAt_18 = function $setAt_18(this$static, index_0, value_0){
  jb.$setAt_19(this$static, index_0, value_0);
}
;
ed.$setLength_21 = function $setLength_21(this$static, length_0){
  jb.$setLength_22(this$static, length_0);
}
;
ed.$clinit_TransformStream = function $clinit_TransformStream(){
  ed.$clinit_TransformStream = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TransformStream$ConstructorReadableStrategyUnionType = function $clinit_TransformStream$ConstructorReadableStrategyUnionType(){
  ed.$clinit_TransformStream$ConstructorReadableStrategyUnionType = emptyMethod;
}
;
ed.$asByteLengthQueuingStrategy_0 = function $asByteLengthQueuingStrategy_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.ByteLengthQueuingStrategy);
}
;
ed.$asCountQueuingStrategy_0 = function $asCountQueuingStrategy_0(this$static){
  return castToNative(jb.cast(this$static), $wnd.CountQueuingStrategy);
}
;
ed.$asTransformStreamWritableStrategyType_0 = function $asTransformStreamWritableStrategyType_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isByteLengthQueuingStrategy_0 = function $isByteLengthQueuingStrategy_0(this$static){
  return instanceOfNative(this$static, $wnd.ByteLengthQueuingStrategy);
}
;
ed.$isCountQueuingStrategy_0 = function $isCountQueuingStrategy_0(this$static){
  return instanceOfNative(this$static, $wnd.CountQueuingStrategy);
}
;
ed.of_150 = function of_150(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_TransformStream$ConstructorWritableStrategyUnionType = function $clinit_TransformStream$ConstructorWritableStrategyUnionType(){
  ed.$clinit_TransformStream$ConstructorWritableStrategyUnionType = emptyMethod;
}
;
ed.$asByteLengthQueuingStrategy_1 = function $asByteLengthQueuingStrategy_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.ByteLengthQueuingStrategy);
}
;
ed.$asCountQueuingStrategy_1 = function $asCountQueuingStrategy_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.CountQueuingStrategy);
}
;
ed.$asTransformStreamWritableStrategyType_1 = function $asTransformStreamWritableStrategyType_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isByteLengthQueuingStrategy_1 = function $isByteLengthQueuingStrategy_1(this$static){
  return instanceOfNative(this$static, $wnd.ByteLengthQueuingStrategy);
}
;
ed.$isCountQueuingStrategy_1 = function $isCountQueuingStrategy_1(this$static){
  return instanceOfNative(this$static, $wnd.CountQueuingStrategy);
}
;
ed.of_151 = function of_151(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_TransformStream$TransformStreamWritableStrategyType = function $clinit_TransformStream$TransformStreamWritableStrategyType(){
  ed.$clinit_TransformStream$TransformStreamWritableStrategyType = emptyMethod;
}
;
ed.create_71 = function create_71(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_TransformStreamDefaultController = function $clinit_TransformStreamDefaultController(){
  ed.$clinit_TransformStreamDefaultController = emptyMethod;
}
;
ed.$clinit_TransformStreamTransformer = function $clinit_TransformStreamTransformer(){
  ed.$clinit_TransformStreamTransformer = emptyMethod;
}
;
ed.create_72 = function create_72(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_TreeWalker = function $clinit_TreeWalker(){
  ed.$clinit_TreeWalker = emptyMethod;
}
;
ed.$clinit_TrustedHTML = function $clinit_TrustedHTML(){
  ed.$clinit_TrustedHTML = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TrustedScript = function $clinit_TrustedScript(){
  ed.$clinit_TrustedScript = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TrustedScriptURL = function $clinit_TrustedScriptURL(){
  ed.$clinit_TrustedScriptURL = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TrustedTypePolicy = function $clinit_TrustedTypePolicy(){
  ed.$clinit_TrustedTypePolicy = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TrustedTypePolicyFactory = function $clinit_TrustedTypePolicyFactory(){
  ed.$clinit_TrustedTypePolicyFactory = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_TrustedTypePolicyOptions = function $clinit_TrustedTypePolicyOptions(){
  ed.$clinit_TrustedTypePolicyOptions = emptyMethod;
}
;
ed.create_73 = function create_73(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_URLSearchParams = function $clinit_URLSearchParams(){
  ed.$clinit_URLSearchParams = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_URLSearchParams$ConstructorInitUnionType = function $clinit_URLSearchParams$ConstructorInitUnionType(){
  ed.$clinit_URLSearchParams$ConstructorInitUnionType = emptyMethod;
}
;
ed.$asJsArray_16 = function $asJsArray_16(this$static){
  return castToJsArray(jb.cast(this$static));
}
;
ed.$asJsPropertyMap_2 = function $asJsPropertyMap_2(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asString_102 = function $asString_102(this$static){
  return jb.asString(this$static);
}
;
ed.$isJsArray_16 = function $isJsArray_16(this$static){
  return instanceOfJsArray(this$static);
}
;
ed.$isString_102 = function $isString_102(this$static){
  return instanceOfString(this$static);
}
;
ed.of_152 = function of_152(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_ValidityState = function $clinit_ValidityState(){
  ed.$clinit_ValidityState = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_VideoPlaybackQuality = function $clinit_VideoPlaybackQuality(){
  ed.$clinit_VideoPlaybackQuality = emptyMethod;
}
;
ed.create_75 = function create_75(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_VisualViewport = function $clinit_VisualViewport(){
  ed.$clinit_VisualViewport = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_19 = function $addEventListener_19(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_20 = function $addEventListener_20(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_19 = function $removeEventListener_19(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_20 = function $removeEventListener_20(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$clinit_Window_0 = function $clinit_Window_0(){
  ed.$clinit_Window_0 = emptyMethod;
  jl.$clinit_Object();
  ed.$clinit_EventTarget();
}
;
ed.$addEventListener_21 = function $addEventListener_21(this$static, type_0, listener, options){
  ed.$addEventListener_3(this$static, type_0, listener, options);
}
;
ed.$addEventListener_22 = function $addEventListener_22(this$static, type_0, listener, options){
  ed.$addEventListener_4(this$static, type_0, listener, options);
}
;
ed.$fetch = function $fetch(this$static, input_0){
  return this$static.fetch(jb.uncheckedCast_0(input_0));
}
;
ed.$fetch_0 = function $fetch_0(this$static, input_0, init){
  return this$static.fetch(jb.uncheckedCast_0(input_0), init);
}
;
ed.$fetch_1 = function $fetch_1(this$static, input_0){
  return this$static.fetch(jb.uncheckedCast_0(input_0));
}
;
ed.$fetch_2 = function $fetch_2(this$static, input_0, init){
  return this$static.fetch(jb.uncheckedCast_0(input_0), init);
}
;
ed.$importScripts = function $importScripts(this$static, var_args){
  this$static.importScripts.apply(this$static, ensureNotNull(jb.uncheckedCast_0(var_args)));
}
;
ed.$importScripts_0 = function $importScripts_0(this$static, var_args){
  this$static.importScripts.apply(this$static, ensureNotNull(jb.uncheckedCast_0(var_args)));
}
;
ed.$openDatabase = function $openDatabase(this$static, name_0, version, description, size_0, callback){
  return this$static.openDatabase(name_0, version, description, size_0, jb.uncheckedCast_0(callback));
}
;
ed.$openDatabase_0 = function $openDatabase_0(this$static, name_0, version, description, size_0, callback){
  return this$static.openDatabase(name_0, version, description, size_0, jb.uncheckedCast_0(callback));
}
;
ed.$postMessage_2 = function $postMessage_2(this$static, message, targetOrigin, transfer){
  this$static.postMessage(message, targetOrigin, jb.uncheckedCast_0(transfer));
}
;
ed.$removeEventListener_21 = function $removeEventListener_21(this$static, type_0, listener, options){
  ed.$removeEventListener_3(this$static, type_0, listener, options);
}
;
ed.$removeEventListener_22 = function $removeEventListener_22(this$static, type_0, listener, options){
  ed.$removeEventListener_4(this$static, type_0, listener, options);
}
;
ed.$scroll = function $scroll(this$static, scrollToOptionsOrX){
  this$static.scroll(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scroll_0 = function $scroll_0(this$static, scrollToOptionsOrX, y_0){
  this$static.scroll(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scroll_1 = function $scroll_1(this$static, scrollToOptionsOrX){
  this$static.scroll(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scroll_2 = function $scroll_2(this$static, scrollToOptionsOrX, y_0){
  this$static.scroll(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scrollBy = function $scrollBy(this$static, scrollToOptionsOrX){
  this$static.scrollBy(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollBy_0 = function $scrollBy_0(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollBy(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scrollBy_1 = function $scrollBy_1(this$static, scrollToOptionsOrX){
  this$static.scrollBy(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollBy_2 = function $scrollBy_2(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollBy(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scrollTo_3 = function $scrollTo_3(this$static, scrollToOptionsOrX){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollTo_4 = function $scrollTo_4(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$scrollTo_5 = function $scrollTo_5(this$static, scrollToOptionsOrX){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX));
}
;
ed.$scrollTo_6 = function $scrollTo_6(this$static, scrollToOptionsOrX, y_0){
  this$static.scrollTo(jb.uncheckedCast_0(scrollToOptionsOrX), y_0);
}
;
ed.$clinit_Window$FetchInputUnionType = function $clinit_Window$FetchInputUnionType(){
  ed.$clinit_Window$FetchInputUnionType = emptyMethod;
}
;
ed.$asRequest_2 = function $asRequest_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.Request);
}
;
ed.$asString_103 = function $asString_103(this$static){
  return jb.asString(this$static);
}
;
ed.$isRequest_2 = function $isRequest_2(this$static){
  return instanceOfNative(this$static, $wnd.Request);
}
;
ed.$isString_103 = function $isString_103(this$static){
  return instanceOfString(this$static);
}
;
ed.of_153 = function of_153(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$FrameElementUnionType = function $clinit_Window$FrameElementUnionType(){
  ed.$clinit_Window$FrameElementUnionType = emptyMethod;
}
;
ed.$asHTMLIFrameElement = function $asHTMLIFrameElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLIFrameElement);
}
;
ed.$asHTMLObjectElement = function $asHTMLObjectElement(this$static){
  return castToNative(jb.cast(this$static), $wnd.HTMLObjectElement);
}
;
ed.$isHTMLIFrameElement = function $isHTMLIFrameElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLIFrameElement);
}
;
ed.$isHTMLObjectElement = function $isHTMLObjectElement(this$static){
  return instanceOfNative(this$static, $wnd.HTMLObjectElement);
}
;
ed.of_154 = function of_154(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$ImportScriptsVar_argsUnionType = function $clinit_Window$ImportScriptsVar_argsUnionType(){
  ed.$clinit_Window$ImportScriptsVar_argsUnionType = emptyMethod;
}
;
ed.$asString_104 = function $asString_104(this$static){
  return jb.asString(this$static);
}
;
ed.$asTrustedScriptURL_1 = function $asTrustedScriptURL_1(this$static){
  return castToNative(jb.cast(this$static), $wnd.TrustedScriptURL);
}
;
ed.$isString_104 = function $isString_104(this$static){
  return instanceOfString(this$static);
}
;
ed.$isTrustedScriptURL_1 = function $isTrustedScriptURL_1(this$static){
  return instanceOfNative(this$static, $wnd.TrustedScriptURL);
}
;
ed.of_155 = function of_155(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$OpenDatabaseCallbackUnionType = function $clinit_Window$OpenDatabaseCallbackUnionType(){
  ed.$clinit_Window$OpenDatabaseCallbackUnionType = emptyMethod;
}
;
ed.$asDatabaseCallback_0 = function $asDatabaseCallback_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$asOpenDatabaseCallbackFn_0 = function $asOpenDatabaseCallbackFn_0(this$static){
  return castToFunction(jb.cast(this$static));
}
;
ed.$isOpenDatabaseCallbackFn_0 = function $isOpenDatabaseCallbackFn_0(this$static){
  return instanceOfFunction(this$static);
}
;
ed.of_156 = function of_156(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$ScrollByScrollToOptionsOrXUnionType = function $clinit_Window$ScrollByScrollToOptionsOrXUnionType(){
  ed.$clinit_Window$ScrollByScrollToOptionsOrXUnionType = emptyMethod;
}
;
ed.$asDouble_55 = function $asDouble_55(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asScrollToOptions_0 = function $asScrollToOptions_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isDouble_55 = function $isDouble_55(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_157 = function of_157(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$ScrollScrollToOptionsOrXUnionType = function $clinit_Window$ScrollScrollToOptionsOrXUnionType(){
  ed.$clinit_Window$ScrollScrollToOptionsOrXUnionType = emptyMethod;
}
;
ed.$asDouble_56 = function $asDouble_56(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asScrollToOptions_1 = function $asScrollToOptions_1(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isDouble_56 = function $isDouble_56(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_158 = function of_158(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_Window$ScrollToScrollToOptionsOrXUnionType = function $clinit_Window$ScrollToScrollToOptionsOrXUnionType(){
  ed.$clinit_Window$ScrollToScrollToOptionsOrXUnionType = emptyMethod;
}
;
ed.$asDouble_57 = function $asDouble_57(this$static){
  return jb.asDouble_2(this$static);
}
;
ed.$asScrollToOptions_2 = function $asScrollToOptions_2(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isDouble_57 = function $isDouble_57(this$static){
  return instanceOfDouble(this$static);
}
;
ed.of_159 = function of_159(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_WorkerOptions = function $clinit_WorkerOptions(){
  ed.$clinit_WorkerOptions = emptyMethod;
}
;
ed.create_76 = function create_76(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ed.$clinit_WritableStream = function $clinit_WritableStream(){
  ed.$clinit_WritableStream = emptyMethod;
  jl.$clinit_Object();
}
;
ed.$clinit_WritableStream$ConstructorQueuingStrategyUnionType = function $clinit_WritableStream$ConstructorQueuingStrategyUnionType(){
  ed.$clinit_WritableStream$ConstructorQueuingStrategyUnionType = emptyMethod;
}
;
ed.$asByteLengthQueuingStrategy_2 = function $asByteLengthQueuingStrategy_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.ByteLengthQueuingStrategy);
}
;
ed.$asCountQueuingStrategy_2 = function $asCountQueuingStrategy_2(this$static){
  return castToNative(jb.cast(this$static), $wnd.CountQueuingStrategy);
}
;
ed.$asTransformStreamWritableStrategyType_2 = function $asTransformStreamWritableStrategyType_2(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ed.$isByteLengthQueuingStrategy_2 = function $isByteLengthQueuingStrategy_2(this$static){
  return instanceOfNative(this$static, $wnd.ByteLengthQueuingStrategy);
}
;
ed.$isCountQueuingStrategy_2 = function $isCountQueuingStrategy_2(this$static){
  return instanceOfNative(this$static, $wnd.CountQueuingStrategy);
}
;
ed.of_160 = function of_160(o){
  return castToUnknownNative(jb.cast(o));
}
;
ed.$clinit_WritableStreamDefaultController = function $clinit_WritableStreamDefaultController(){
  ed.$clinit_WritableStreamDefaultController = emptyMethod;
}
;
ed.$clinit_WritableStreamDefaultWriter = function $clinit_WritableStreamDefaultWriter(){
  ed.$clinit_WritableStreamDefaultWriter = emptyMethod;
}
;
ed.$clinit_WritableStreamSink = function $clinit_WritableStreamSink(){
  ed.$clinit_WritableStreamSink = emptyMethod;
}
;
ed.create_77 = function create_77(){
  return jb.uncheckedCast_0(jb.of_163());
}
;
ep.$clinit_IThenable = function $clinit_IThenable(){
  ep.$clinit_IThenable = emptyMethod;
}
;
ep.$clinit_Promise = function $clinit_Promise(){
  ep.$clinit_Promise = emptyMethod;
  jl.$clinit_Object();
}
;
ep.all = function all(promises){
  return $wnd.Promise.all(promises);
}
;
ep.race = function race(promises){
  return $wnd.Promise.race(promises);
}
;
ep.resolve = function resolve(value_0){
  return $wnd.Promise.resolve(jb.uncheckedCast_0(value_0));
}
;
ep.resolve_0 = function resolve_0(value_0){
  return $wnd.Promise.resolve(jb.uncheckedCast_0(value_0));
}
;
ep.$onInvoke_18 = function $onInvoke_18(this$static, value_0){
  this$static(jb.uncheckedCast_0(value_0));
}
;
ep.$onInvoke_19 = function $onInvoke_19(this$static, value_0){
  this$static(jb.uncheckedCast_0(value_0));
}
;
ep.$clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType = function $clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType(){
  ep.$clinit_Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType = emptyMethod;
}
;
ep.$asIThenable = function $asIThenable(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ep.$asT_2 = function $asT_2(this$static){
  return jb.cast(this$static);
}
;
ep.of_161 = function of_161(o){
  return castToUnknownNative(jb.cast(o));
}
;
ep.$clinit_Promise$ResolveValueUnionType = function $clinit_Promise$ResolveValueUnionType(){
  ep.$clinit_Promise$ResolveValueUnionType = emptyMethod;
}
;
ep.$asIThenable_0 = function $asIThenable_0(this$static){
  return castToUnknownNative(jb.cast(this$static));
}
;
ep.$asV = function $asV(this$static){
  return jb.cast(this$static);
}
;
ep.of_162 = function of_162(o){
  return castToUnknownNative(jb.cast(o));
}
;
jl.$clinit_AutoCloseable = function $clinit_AutoCloseable(){
  jl.$clinit_AutoCloseable = emptyMethod;
}
;
cggl.Ljava_lang_AutoCloseable_2_classLit = createForInterface('java.lang', 'AutoCloseable');
ji.$clinit_Closeable = function $clinit_Closeable(){
  ji.$clinit_Closeable = emptyMethod;
}
;
cggl.Ljava_io_Closeable_2_classLit = createForInterface('java.io', 'Closeable');
ji.$clinit_Flushable = function $clinit_Flushable(){
  ji.$clinit_Flushable = emptyMethod;
}
;
cggl.Ljava_io_Flushable_2_classLit = createForInterface('java.io', 'Flushable');
ji.$clinit_OutputStream = function $clinit_OutputStream(){
  ji.$clinit_OutputStream = emptyMethod;
  jl.$clinit_Object();
}
;
ji.OutputStream = function OutputStream(){
  ji.$clinit_OutputStream();
  Object_0.call(this);
  this.$init_82();
}
;
defineClass(142, 1, {1:1});
_.$init_82 = function $init_82(){
}
;
_.close_0 = function close_0(){
}
;
_.flush_0 = function flush(){
}
;
_.write_2 = function write_0(buffer){
  ji2.checkNotNull_0(buffer);
  this.write_3(buffer, 0, buffer.length);
}
;
_.write_3 = function write_1(buffer, offset, count){
  var i;
  ji.checkOffsetAndCount_0(buffer, offset, count);
  for (i = offset; i < offset + count; i++) {
    this.write_1(buffer[i]);
  }
}
;
cggl.Ljava_io_OutputStream_2_classLit = createForClass('java.io', 'OutputStream', 142, cggl.Ljava_lang_Object_2_classLit);
ji.$clinit_FilterOutputStream = function $clinit_FilterOutputStream(){
  ji.$clinit_FilterOutputStream = emptyMethod;
  ji.$clinit_OutputStream();
}
;
ji.FilterOutputStream = function FilterOutputStream(out){
  ji.$clinit_FilterOutputStream();
  ji.OutputStream.call(this);
  this.$init_83();
  this.out = out;
}
;
defineClass(143, 142, {1:1});
_.$init_83 = function $init_83(){
}
;
_.close_0 = function close_1(){
  var e, thrown;
  thrown = null;
  try {
    this.flush_0();
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 4)) {
      e = $e0;
      thrown = e;
    }
     else 
      throw toJs($e0);
  }
  try {
    this.out.close_0();
  }
   catch ($e1) {
    $e1 = toJava($e1);
    if (instanceOf($e1, 4)) {
      e = $e1;
      if (isNull(thrown)) {
        thrown = e;
      }
    }
     else 
      throw toJs($e1);
  }
  if (isNotNull(thrown)) {
    throw toJs(new ji.IOException_0(thrown));
  }
}
;
_.flush_0 = function flush_0(){
  this.out.flush_0();
}
;
_.write_1 = function write_2(oneByte){
  this.out.write_1(oneByte);
}
;
_.write_3 = function write_3(buffer, offset, length_0){
  var i;
  ji.checkOffsetAndCount_0(buffer, offset, length_0);
  for (i = 0; i < length_0; i++) {
    this.write_1(buffer[offset + i]);
  }
}
;
cggl.Ljava_io_FilterOutputStream_2_classLit = createForClass('java.io', 'FilterOutputStream', 143, cggl.Ljava_io_OutputStream_2_classLit);
ji.$clinit_IOException = function $clinit_IOException(){
  ji.$clinit_IOException = emptyMethod;
  jl.$clinit_Exception();
}
;
ji.IOException = function IOException(message){
  ji.$clinit_IOException();
  jl.Exception_1.call(this, message);
  this.$init_84();
}
;
ji.IOException_0 = function IOException_0(throwable){
  ji.$clinit_IOException();
  jl.Exception_3.call(this, throwable);
  this.$init_84();
}
;
defineClass(17, 6, {17:1, 3:1, 6:1, 1:1, 4:1}, ji.IOException_0);
_.$init_84 = function $init_84(){
}
;
cggl.Ljava_io_IOException_2_classLit = createForClass('java.io', 'IOException', 17, cggl.Ljava_lang_Exception_2_classLit);
ji.$clinit_IOUtils = function $clinit_IOUtils(){
  ji.$clinit_IOUtils = emptyMethod;
  jl.$clinit_Object();
}
;
ji.checkOffsetAndCount = function checkOffsetAndCount(length_0, offset, count){
  if (offset < 0 || count < 0 || offset + count > length_0) {
    throw toJs(new jl.IndexOutOfBoundsException);
  }
}
;
ji.checkOffsetAndCount_0 = function checkOffsetAndCount_0(buffer, byteOffset, byteCount){
  ji.$clinit_IOUtils();
  ji2.checkNotNull_0(buffer);
  ji.checkOffsetAndCount(buffer.length, byteOffset, byteCount);
}
;
defineClass(328, 1, {1:1});
cggl.Ljava_io_IOUtils_2_classLit = createForClass('java.io', 'IOUtils', 328, cggl.Ljava_lang_Object_2_classLit);
ji.$clinit_PrintStream = function $clinit_PrintStream(){
  ji.$clinit_PrintStream = emptyMethod;
  ji.$clinit_FilterOutputStream();
}
;
ji.PrintStream = function PrintStream(out){
  ji.$clinit_PrintStream();
  ji.FilterOutputStream.call(this, out);
  this.$init_85();
}
;
defineClass(81, 143, {1:1}, ji.PrintStream);
_.$init_85 = function $init_85(){
  this.ioError = false;
}
;
_.close_0 = function close_2(){
  var e;
  this.flush_0();
  if (isNotNull(this.out)) {
    try {
      this.out.close_0();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 17)) {
        e = $e0;
        this.setError();
      }
       else 
        throw toJs($e0);
    }
     finally {
      this.out = null;
    }
  }
}
;
_.flush_0 = function flush_1(){
  var e;
  if (isNotNull(this.out)) {
    try {
      this.out.flush_0();
      return;
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 17)) {
        e = $e0;
      }
       else 
        throw toJs($e0);
    }
  }
  this.setError();
}
;
_.newline = function newline(){
  this.print_0(10);
}
;
_.print_0 = function print_0(x_0){
  this.print_1(jl.valueOf_12(x_0));
}
;
_.print_1 = function print_1(s){
  var e;
  if (isNull(this.out)) {
    this.setError();
    return;
  }
  if (jsEquals(s, null)) {
    this.print_1('null');
    return;
  }
  try {
    this.write_2(jl.getBytes___B__devirtual$(s));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      this.setError();
    }
     else 
      throw toJs($e0);
  }
}
;
_.println = function println(s){
  this.print_1(s);
  this.newline();
}
;
_.setError = function setError(){
  this.ioError = true;
}
;
_.write_1 = function write_4(oneByte){
  var b, e, isNewline;
  if (isNull(this.out)) {
    this.setError();
    return;
  }
  try {
    this.out.write_1(oneByte);
    b = oneByte & 255;
    isNewline = b == 10 || b == 21;
    if (isNewline) {
      this.flush_0();
    }
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      this.setError();
    }
     else 
      throw toJs($e0);
  }
}
;
_.write_3 = function write_5(buffer, offset, length_0){
  var e;
  ji.checkOffsetAndCount_0(buffer, offset, length_0);
  if (isNull(this.out)) {
    this.setError();
    return;
  }
  try {
    this.out.write_3(buffer, offset, length_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 17)) {
      e = $e0;
      this.setError();
    }
     else 
      throw toJs($e0);
  }
}
;
_.ioError = false;
cggl.Ljava_io_PrintStream_2_classLit = createForClass('java.io', 'PrintStream', 81, cggl.Ljava_io_FilterOutputStream_2_classLit);
ji.$clinit_UnsupportedEncodingException = function $clinit_UnsupportedEncodingException(){
  ji.$clinit_UnsupportedEncodingException = emptyMethod;
  ji.$clinit_IOException();
}
;
ji.UnsupportedEncodingException = function UnsupportedEncodingException(msg){
  ji.$clinit_UnsupportedEncodingException();
  ji.IOException.call(this, msg);
  this.$init_86();
}
;
defineClass(96, 17, {17:1, 3:1, 6:1, 1:1, 4:1}, ji.UnsupportedEncodingException);
_.$init_86 = function $init_86(){
}
;
cggl.Ljava_io_UnsupportedEncodingException_2_classLit = createForClass('java.io', 'UnsupportedEncodingException', 96, cggl.Ljava_io_IOException_2_classLit);
jl.$clinit_Appendable = function $clinit_Appendable(){
  jl.$clinit_Appendable = emptyMethod;
}
;
cggl.Ljava_lang_Appendable_2_classLit = createForInterface('java.lang', 'Appendable');
jl.$clinit_AbstractStringBuilder = function $clinit_AbstractStringBuilder(){
  jl.$clinit_AbstractStringBuilder = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_CharSequence();
}
;
jl.AbstractStringBuilder = function AbstractStringBuilder(string){
  jl.$clinit_AbstractStringBuilder();
  Object_0.call(this);
  this.$init_87();
  this.string = string;
}
;
defineClass(77, 1, {44:1, 1:1});
_.$init_87 = function $init_87(){
}
;
_.charAt = function charAt(index_0){
  return jl.charAt_I_C__devirtual$_0(this.string, index_0);
}
;
_.getChars = function getChars(srcStart, srcEnd, dst, dstStart){
  jl.getChars_II_CI_V__devirtual$(this.string, srcStart, srcEnd, dst, dstStart);
}
;
_.indexOf_0 = function indexOf(x_0){
  return jl.indexOf_Ljava_lang_String__I__devirtual$(this.string, x_0);
}
;
_.indexOf_1 = function indexOf_0(x_0, start_0){
  return jl.indexOf_Ljava_lang_String_I_I__devirtual$(this.string, x_0, start_0);
}
;
_.lastIndexOf_0 = function lastIndexOf(s){
  return jl.lastIndexOf_Ljava_lang_String__I__devirtual$(this.string, s);
}
;
_.lastIndexOf_1 = function lastIndexOf_0(s, start_0){
  return jl.lastIndexOf_Ljava_lang_String_I_I__devirtual$(this.string, s, start_0);
}
;
_.length_0 = function length_1(){
  return jl.length__I__devirtual$_0(this.string);
}
;
_.setLength = function setLength(newLength){
  var oldLength;
  oldLength = this.length_0();
  if (newLength < oldLength) {
    this.string = jl.substring_II_Ljava_lang_String___devirtual$(this.string, 0, newLength);
  }
   else if (newLength > oldLength) {
    this.string += '' + jl.valueOf_19(initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 15, newLength - oldLength, 15, 1));
  }
}
;
_.subSequence = function subSequence(start_0, end){
  return jl.substring_II_Ljava_lang_String___devirtual$(this.string, start_0, end);
}
;
_.substring_0 = function substring(begin){
  return jl.substring_I_Ljava_lang_String___devirtual$(this.string, begin);
}
;
_.substring_1 = function substring_0(begin, end){
  return jl.substring_II_Ljava_lang_String___devirtual$(this.string, begin, end);
}
;
_.toString_0 = function toString_12(){
  return this.string;
}
;
cggl.Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 77, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_ArithmeticException = function $clinit_ArithmeticException(){
  jl.$clinit_ArithmeticException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArithmeticException = function ArithmeticException(explanation){
  jl.$clinit_ArithmeticException();
  jl.RuntimeException_1.call(this, explanation);
  this.$init_88();
}
;
defineClass(153, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.ArithmeticException);
_.$init_88 = function $init_88(){
}
;
cggl.Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 153, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_ArrayStoreException = function $clinit_ArrayStoreException(){
  jl.$clinit_ArrayStoreException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ArrayStoreException = function ArrayStoreException(){
  jl.$clinit_ArrayStoreException();
  jl.RuntimeException.call(this);
  this.$init_89();
}
;
defineClass(152, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.ArrayStoreException);
_.$init_89 = function $init_89(){
}
;
cggl.Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 152, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Byte = function $clinit_Byte(){
  jl.$clinit_Byte = emptyMethod;
  jl.$clinit_Number();
  MIN_VALUE_0 = narrow_byte(128);
  MAX_VALUE_0 = narrow_byte(127);
  BYTES = narrow_int(8 / 8);
  TYPE_3 = cggl.B_classLit;
}
;
jl.Byte = function Byte(value_0){
  jl.$clinit_Byte();
  jl.Number_0.call(this);
  this.$init_91();
  this.value_0 = value_0;
}
;
function compare_2(x_0, y_0){
  jl.$clinit_Byte();
  return x_0 - y_0;
}

jl.hashCode_5 = function hashCode_5(b){
  return b;
}
;
jl.toString_15 = function toString_15(b){
  return jl.valueOf_15(b);
}
;
jl.valueOf_4 = function valueOf_4(b){
  return jl.get_3(b);
}
;
defineClass(30, 25, {3:1, 30:1, 11:1, 1:1}, jl.Byte);
_.$init_91 = function $init_91(){
}
;
_.compareTo_0 = function compareTo_2(b){
  return this.compareTo_1(castTo(b, 30));
}
;
_.byteValue = function byteValue_0(){
  return this.value_0;
}
;
_.compareTo_1 = function compareTo_1(b){
  return compare_2(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue(){
  return this.value_0;
}
;
_.equals_0 = function equals_1(o){
  return instanceOf(o, 30) && castTo(o, 30).value_0 == this.value_0;
}
;
_.floatValue = function floatValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_4(){
  return jl.hashCode_5(this.value_0);
}
;
_.intValue = function intValue(){
  return this.value_0;
}
;
_.longValue = function longValue_0(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_0(){
  return this.value_0;
}
;
_.toString_0 = function toString_14(){
  return jl.toString_15(this.value_0);
}
;
_.value_0 = 0;
var BYTES = 0;
var MAX_VALUE_0 = 0;
var MIN_VALUE_0 = 0;
var SIZE = 8;
var TYPE_3;
cggl.Ljava_lang_Byte_2_classLit = createForClass('java.lang', 'Byte', 30, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Byte$BoxedValues = function $clinit_Byte$BoxedValues(){
  jl.$clinit_Byte$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues = initUnidimensionalArray(cggl.Ljava_lang_Byte_2_classLit, {3:1, 1:1, 7:1}, 30, 256, 0, 1);
}
;
jl.get_3 = function get_3(b){
  jl.$clinit_Byte$BoxedValues();
  var rebase, result;
  rebase = b + 128;
  result = jl.boxedValues[rebase];
  if (isNull(result)) {
    result = jl.boxedValues[rebase] = new jl.Byte(b);
  }
  return result;
}
;
defineClass(227, 1, {1:1});
cggl.Ljava_lang_Byte$BoxedValues_2_classLit = createForClass('java.lang', 'Byte/BoxedValues', 227, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Iterator = function $clinit_Iterator(){
  ju.$clinit_Iterator = emptyMethod;
}
;
ju.$remove = function $remove(this$static){
  throw toJs(new jl.UnsupportedOperationException);
}
;
cggl.Ljava_util_Iterator_2_classLit = createForInterface('java.util', 'Iterator');
ju.$clinit_PrimitiveIterator = function $clinit_PrimitiveIterator(){
  ju.$clinit_PrimitiveIterator = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator_2_classLit = createForInterface('java.util', 'PrimitiveIterator');
ju.$clinit_PrimitiveIterator$OfInt = function $clinit_PrimitiveIterator$OfInt(){
  ju.$clinit_PrimitiveIterator$OfInt = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator$OfInt_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfInt');
jl.$clinit_CharSequence$1 = function $clinit_CharSequence$1(){
  jl.$clinit_CharSequence$1 = emptyMethod;
}
;
defineClass(193, 1, {1:1});
cggl.Ljava_lang_CharSequence$1_2_classLit = createForClass('java.lang', 'CharSequence/1', 193, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Supplier = function $clinit_Supplier(){
  juf.$clinit_Supplier = emptyMethod;
}
;
cggl.Ljava_util_function_Supplier_2_classLit = createForInterface('java.util.function', 'Supplier');
jl.$clinit_CharSequence$lambda$0$Type = function $clinit_CharSequence$lambda$0$Type(){
  jl.$clinit_CharSequence$lambda$0$Type = emptyMethod;
}
;
defineClass(194, 1, {1:1});
cggl.Ljava_lang_CharSequence$lambda$0$Type_2_classLit = createForClass('java.lang', 'CharSequence/lambda$0$Type', 194, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character = function $clinit_Character(){
  jl.$clinit_Character = emptyMethod;
  jl.$clinit_Object();
  TYPE_4 = cggl.Ljava_lang_Character_2_classLit;
  BYTES_0 = narrow_int(16 / 8);
}
;
function Character(value_0){
  jl.$clinit_Character();
  Object_0.call(this);
  this.$init_92();
  this.value_0 = value_0;
}

function charCount_0(codePoint){
  jl.$clinit_Character();
  return codePoint >= 65536?2:1;
}

function codePointAt(cs, index_0, limit){
  jl.$clinit_Character();
  var hiSurrogate, loSurrogate;
  hiSurrogate = jl.charAt_I_C__devirtual$(cs, index_0++);
  if (isHighSurrogate(hiSurrogate) && index_0 < limit && isLowSurrogate(loSurrogate = jl.charAt_I_C__devirtual$(cs, index_0))) {
    return toCodePoint(hiSurrogate, loSurrogate);
  }
  return hiSurrogate;
}

function codePointBefore(cs, index_0, start_0){
  jl.$clinit_Character();
  var highSurrogate, loSurrogate;
  loSurrogate = jl.charAt_I_C__devirtual$(cs, --index_0);
  if (isLowSurrogate(loSurrogate) && index_0 > start_0 && isHighSurrogate(highSurrogate = jl.charAt_I_C__devirtual$(cs, index_0 - 1))) {
    return toCodePoint(highSurrogate, loSurrogate);
  }
  return loSurrogate;
}

function codePointCount(seq, beginIndex, endIndex){
  jl.$clinit_Character();
  var ch_0, count, idx;
  count = 0;
  for (idx = beginIndex; idx < endIndex;) {
    ch_0 = jl.charAt_I_C__devirtual$(seq, idx++);
    if (isHighSurrogate(ch_0) && idx < endIndex && isLowSurrogate(jl.charAt_I_C__devirtual$(seq, idx))) {
      ++idx;
    }
    ++count;
  }
  return count;
}

function compare_3(x_0, y_0){
  jl.$clinit_Character();
  return x_0 - y_0;
}

function getHighSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(55296 + (codePoint - 65536 >> 10 & 1023));
}

function getLowSurrogate(codePoint){
  jl.$clinit_Character();
  return narrow_char(56320 + (codePoint - 65536 & 1023));
}

jl.hashCode_7 = function hashCode_7(c){
  return c;
}
;
function isHighSurrogate(ch_0){
  jl.$clinit_Character();
  return ch_0 >= 55296 && ch_0 <= 56319;
}

function isLowSurrogate(ch_0){
  jl.$clinit_Character();
  return ch_0 >= 56320 && ch_0 <= 57343;
}

function offsetByCodePoints(seq, index_0, codePointOffset){
  jl.$clinit_Character();
  if (codePointOffset < 0) {
    while (codePointOffset < 0) {
      --index_0;
      if (isLowSurrogate(jl.charAt_I_C__devirtual$(seq, index_0)) && isHighSurrogate(jl.charAt_I_C__devirtual$(seq, index_0 - 1))) {
        --index_0;
      }
      ++codePointOffset;
    }
  }
   else {
    while (codePointOffset > 0) {
      if (isHighSurrogate(jl.charAt_I_C__devirtual$(seq, index_0)) && isLowSurrogate(jl.charAt_I_C__devirtual$(seq, index_0 + 1))) {
        ++index_0;
      }
      ++index_0;
      --codePointOffset;
    }
  }
  return index_0;
}

function toChars(codePoint, dst, dstIndex){
  jl.$clinit_Character();
  ji2.checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= 65536) {
    dst[dstIndex++] = getHighSurrogate(codePoint);
    dst[dstIndex] = getLowSurrogate(codePoint);
    return 2;
  }
   else {
    dst[dstIndex] = narrow_char(codePoint);
    return 1;
  }
}

function toCodePoint(highSurrogate, lowSurrogate){
  jl.$clinit_Character();
  return 65536 + ((highSurrogate & 1023) << 10) + (lowSurrogate & 1023);
}

function valueOf_5(c){
  jl.$clinit_Character();
  if (c < 128) {
    return jl.get_4(c);
  }
  return new Character(c);
}

defineClass(26, 1, {3:1, 26:1, 11:1, 1:1}, Character);
_.$init_92 = function $init_92(){
}
;
_.compareTo_0 = function compareTo_4(c){
  return this.compareTo_2(castTo(c, 26));
}
;
_.charValue = function charValue(){
  return this.value_0;
}
;
_.compareTo_2 = function compareTo_3(c){
  return compare_3(this.value_0, c.value_0);
}
;
_.equals_0 = function equals_2(o){
  return instanceOf(o, 26) && castTo(o, 26).value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_6(){
  return jl.hashCode_7(this.value_0);
}
;
_.toString_0 = function toString_16(){
  return jl.valueOf_12(this.value_0);
}
;
_.value_0 = 0;
var BYTES_0 = 0;
var MAX_CODE_POINT = 1114111;
var MAX_HIGH_SURROGATE = 56319;
var MAX_LOW_SURROGATE = 57343;
var MAX_RADIX = 36;
var MAX_SURROGATE = 57343;
var MAX_VALUE_1 = 65535;
var MIN_CODE_POINT = 0;
var MIN_HIGH_SURROGATE = 55296;
var MIN_LOW_SURROGATE = 56320;
var MIN_RADIX = 2;
var MIN_SUPPLEMENTARY_CODE_POINT = 65536;
var MIN_SURROGATE = 55296;
var MIN_VALUE_1 = 0;
var SIZE_0 = 16;
var TYPE_4;
cggl.Ljava_lang_Character_2_classLit = createForClass('java.lang', 'Character', 26, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character$BoxedValues = function $clinit_Character$BoxedValues(){
  jl.$clinit_Character$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_0 = initUnidimensionalArray(cggl.Ljava_lang_Character_2_classLit, {3:1, 1:1, 7:1}, 26, 128, 0, 1);
}
;
jl.get_4 = function get_4(c){
  jl.$clinit_Character$BoxedValues();
  var result;
  result = jl.boxedValues_0[c];
  if (isNull(result)) {
    result = jl.boxedValues_0[c] = new Character(c);
  }
  return result;
}
;
defineClass(229, 1, {1:1});
cggl.Ljava_lang_Character$BoxedValues_2_classLit = createForClass('java.lang', 'Character/BoxedValues', 229, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Character$CharSequenceAdapter = function $clinit_Character$CharSequenceAdapter(){
  jl.$clinit_Character$CharSequenceAdapter = emptyMethod;
}
;
defineClass(228, 1, {44:1, 1:1});
cggl.Ljava_lang_Character$CharSequenceAdapter_2_classLit = createForClass('java.lang', 'Character/CharSequenceAdapter', 228, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_ClassCastException = function $clinit_ClassCastException(){
  jl.$clinit_ClassCastException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.ClassCastException = function ClassCastException(){
  jl.$clinit_ClassCastException();
  jl.RuntimeException.call(this);
  this.$init_94();
}
;
jl.ClassCastException_0 = function ClassCastException_0(message){
  jl.$clinit_ClassCastException();
  jl.RuntimeException_1.call(this, message);
  this.$init_94();
}
;
defineClass(76, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.ClassCastException, jl.ClassCastException_0);
_.$init_94 = function $init_94(){
}
;
cggl.Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 76, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Cloneable = function $clinit_Cloneable(){
  jl.$clinit_Cloneable = emptyMethod;
}
;
cggl.Ljava_lang_Cloneable_2_classLit = createForInterface('java.lang', 'Cloneable');
jl.$clinit_Float = function $clinit_Float(){
  jl.$clinit_Float = emptyMethod;
  jl.$clinit_Number();
  MIN_EXPONENT_0 = -126;
  NaN_1 = 0 / 0;
  NEGATIVE_INFINITY_0 = -1 / 0;
  POSITIVE_INFINITY_0 = 1 / 0;
  BYTES_2 = narrow_int(32 / 8);
  TYPE_6 = cggl.F_classLit;
}
;
jl.Float = function Float(value_0){
  jl.Number_0.call(this);
  this.$init_95();
  this.value_0 = value_0;
}
;
function compare_5(x_0, y_0){
  jl.$clinit_Float();
  return compare_4(x_0, y_0);
}

jl.hashCode_10 = function hashCode_10(f){
  return round_int(f);
}
;
jl.isInfinite_1 = function isInfinite_1(x_0){
  return jl.isInfinite(x_0);
}
;
jl.isNaN_1 = function isNaN_1(x_0){
  return isNaN(x_0);
}
;
jl.toString_20 = function toString_20(b){
  return jl.valueOf_14(b);
}
;
jl.valueOf_8 = function valueOf_8(f){
  return new jl.Float(f);
}
;
defineClass(37, 25, {3:1, 11:1, 37:1, 1:1}, jl.Float);
_.$init_95 = function $init_95(){
}
;
_.compareTo_0 = function compareTo_6(b){
  return this.compareTo_3(castTo(b, 37));
}
;
_.byteValue = function byteValue_1(){
  return round_byte(this.value_0);
}
;
_.compareTo_3 = function compareTo_5(b){
  return compare_5(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_0(){
  return this.value_0;
}
;
_.equals_0 = function equals_3(o){
  return instanceOf(o, 37) && jl.equals_Ljava_lang_Object__Z__devirtual$_1(jl.valueOf_6(this.value_0), jl.valueOf_6(castTo(o, 37).value_0));
}
;
_.floatValue = function floatValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_9(){
  return jl.hashCode_10(this.value_0);
}
;
_.intValue = function intValue_0(){
  return round_int(this.value_0);
}
;
_.isInfinite = function isInfinite_0(){
  return jl.isInfinite_1(this.value_0);
}
;
_.isNaN_0 = function isNaN_0(){
  return jl.isNaN_1(this.value_0);
}
;
_.longValue = function longValue_1(){
  return fromDouble_0(this.value_0);
}
;
_.shortValue = function shortValue_1(){
  return round_short(this.value_0);
}
;
_.toString_0 = function toString_19(){
  return jl.toString_20(this.value_0);
}
;
_.value_0 = 0;
var BYTES_2 = 0;
var MAX_EXPONENT_0 = 127;
var MAX_VALUE_3 = 3.4028234663852886E38;
var MIN_EXPONENT_0 = 0;
var MIN_NORMAL_0 = 1.1754943508222875E-38;
var MIN_VALUE_3 = 1.401298464324817E-45;
var NEGATIVE_INFINITY_0 = 0;
var NaN_1 = 0;
var POSITIVE_INFINITY_0 = 0;
var POWER_31_INT = 2147483648;
var SIZE_2 = 32;
var TYPE_6;
cggl.Ljava_lang_Float_2_classLit = createForClass('java.lang', 'Float', 37, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_IllegalArgumentException = function $clinit_IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalArgumentException = function IllegalArgumentException(){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException.call(this);
  this.$init_96();
}
;
jl.IllegalArgumentException_0 = function IllegalArgumentException_0(message){
  jl.$clinit_IllegalArgumentException();
  jl.RuntimeException_1.call(this, message);
  this.$init_96();
}
;
defineClass(16, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.IllegalArgumentException, jl.IllegalArgumentException_0);
_.$init_96 = function $init_96(){
}
;
cggl.Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 16, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_IllegalStateException = function $clinit_IllegalStateException(){
  jl.$clinit_IllegalStateException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IllegalStateException = function IllegalStateException(){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException.call(this);
  this.$init_97();
}
;
jl.IllegalStateException_0 = function IllegalStateException_0(s){
  jl.$clinit_IllegalStateException();
  jl.RuntimeException_1.call(this, s);
  this.$init_97();
}
;
defineClass(59, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.IllegalStateException, jl.IllegalStateException_0);
_.$init_97 = function $init_97(){
}
;
cggl.Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 59, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_IndexOutOfBoundsException = function $clinit_IndexOutOfBoundsException(){
  jl.$clinit_IndexOutOfBoundsException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.IndexOutOfBoundsException = function IndexOutOfBoundsException(){
  jl.$clinit_IndexOutOfBoundsException();
  jl.RuntimeException.call(this);
  this.$init_98();
}
;
jl.IndexOutOfBoundsException_0 = function IndexOutOfBoundsException_0(message){
  jl.$clinit_IndexOutOfBoundsException();
  jl.RuntimeException_1.call(this, message);
  this.$init_98();
}
;
defineClass(31, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.IndexOutOfBoundsException, jl.IndexOutOfBoundsException_0);
_.$init_98 = function $init_98(){
}
;
cggl.Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 31, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Integer = function $clinit_Integer(){
  jl.$clinit_Integer = emptyMethod;
  jl.$clinit_Number();
  BYTES_3 = narrow_int(32 / 8);
  TYPE_7 = cggl.I_classLit;
}
;
jl.Integer = function Integer(value_0){
  jl.$clinit_Integer();
  jl.Number_0.call(this);
  this.$init_99();
  this.value_0 = value_0;
}
;
function compare_6(x_0, y_0){
  jl.$clinit_Integer();
  if (x_0 < y_0) {
    return -1;
  }
   else if (x_0 > y_0) {
    return 1;
  }
   else {
    return 0;
  }
}

jl.hashCode_12 = function hashCode_12(i){
  return i;
}
;
function numberOfLeadingZeros_0(i){
  jl.$clinit_Integer();
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  jl.$clinit_Integer();
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      rtn++;
    }
    return rtn;
  }
}

function toHexString(value_0){
  jl.$clinit_Integer();
  return toUnsignedString(value_0, 16);
}

jl.toString_22 = function toString_22(value_0){
  return jl.valueOf_15(value_0);
}
;
function toUnsignedString(value_0, radix){
  jl.$clinit_Integer();
  return ji2.uintToString(value_0, radix);
}

jl.valueOf_9 = function valueOf_9(i){
  jl.$clinit_Integer();
  if (i > -129 && i < 128) {
    return jl.get_5(i);
  }
  return new jl.Integer(i);
}
;
defineClass(27, 25, {3:1, 11:1, 27:1, 1:1}, jl.Integer);
_.$init_99 = function $init_99(){
}
;
_.compareTo_0 = function compareTo_8(b){
  return this.compareTo_4(castTo(b, 27));
}
;
_.byteValue = function byteValue_2(){
  return narrow_byte(this.value_0);
}
;
_.compareTo_4 = function compareTo_7(b){
  return compare_6(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_1(){
  return this.value_0;
}
;
_.equals_0 = function equals_4(o){
  return instanceOf(o, 27) && castTo(o, 27).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_1(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_11(){
  return jl.hashCode_12(this.value_0);
}
;
_.intValue = function intValue_1(){
  return this.value_0;
}
;
_.longValue = function longValue_2(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_2(){
  return narrow_short(this.value_0);
}
;
_.toString_0 = function toString_21(){
  return jl.toString_22(this.value_0);
}
;
_.value_0 = 0;
var BYTES_3 = 0;
var MAX_VALUE_4 = 2147483647;
var MIN_VALUE_4 = -2147483648;
var SIZE_3 = 32;
var TYPE_7;
cggl.Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 27, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Integer$BoxedValues = function $clinit_Integer$BoxedValues(){
  jl.$clinit_Integer$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_1 = initUnidimensionalArray(cggl.Ljava_lang_Integer_2_classLit, {3:1, 1:1, 7:1}, 27, 256, 0, 1);
}
;
jl.get_5 = function get_5(i){
  jl.$clinit_Integer$BoxedValues();
  var rebase, result;
  rebase = i + 128;
  result = jl.boxedValues_1[rebase];
  if (isNull(result)) {
    result = jl.boxedValues_1[rebase] = new jl.Integer(i);
  }
  return result;
}
;
defineClass(230, 1, {1:1});
cggl.Ljava_lang_Integer$BoxedValues_2_classLit = createForClass('java.lang', 'Integer/BoxedValues', 230, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Integer$ReverseNibbles = function $clinit_Integer$ReverseNibbles(){
  jl.$clinit_Integer$ReverseNibbles = emptyMethod;
}
;
defineClass(231, 1, {1:1});
cggl.Ljava_lang_Integer$ReverseNibbles_2_classLit = createForClass('java.lang', 'Integer/ReverseNibbles', 231, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Iterable = function $clinit_Iterable(){
  jl.$clinit_Iterable = emptyMethod;
}
;
cggl.Ljava_lang_Iterable_2_classLit = createForInterface('java.lang', 'Iterable');
jl.$clinit_Long = function $clinit_Long(){
  jl.$clinit_Long = emptyMethod;
  jl.$clinit_Number();
  BYTES_4 = narrow_int(64 / 8);
  TYPE_8 = cggl.J_classLit;
}
;
jl.Long = function Long(value_0){
  jl.$clinit_Long();
  jl.Number_0.call(this);
  this.$init_100();
  this.value_0 = value_0;
}
;
function compare_7(x_0, y_0){
  jl.$clinit_Long();
  if (lt(x_0, y_0)) {
    return -1;
  }
   else if (gt(x_0, y_0)) {
    return 1;
  }
   else {
    return 0;
  }
}

jl.hashCode_14 = function hashCode_14(l){
  return ji2.getHighBits(l) ^ toInt_0(l);
}
;
jl.toString_24 = function toString_24(value_0){
  return jl.valueOf_16(value_0);
}
;
jl.valueOf_10 = function valueOf_10(l){
  if (gt(l, fromInt_0(-129)) && lt(l, 128)) {
    return jl.get_6(l);
  }
  return new jl.Long(l);
}
;
defineClass(28, 25, {3:1, 11:1, 28:1, 1:1}, jl.Long);
_.$init_100 = function $init_100(){
}
;
_.compareTo_0 = function compareTo_10(b){
  return this.compareTo_5(castTo(b, 28));
}
;
_.byteValue = function byteValue_3(){
  return narrow_byte(toInt_0(this.value_0));
}
;
_.compareTo_5 = function compareTo_9(b){
  return compare_7(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_2(){
  return toDouble_0(this.value_0);
}
;
_.equals_0 = function equals_5(o){
  return instanceOf(o, 28) && eq(castTo(o, 28).value_0, this.value_0);
}
;
_.floatValue = function floatValue_2(){
  return toDouble_0(this.value_0);
}
;
_.hashCode_0 = function hashCode_13(){
  return jl.hashCode_14(this.value_0);
}
;
_.intValue = function intValue_2(){
  return toInt_0(this.value_0);
}
;
_.longValue = function longValue_3(){
  return this.value_0;
}
;
_.shortValue = function shortValue_3(){
  return narrow_short(toInt_0(this.value_0));
}
;
_.toString_0 = function toString_23(){
  return jl.toString_24(this.value_0);
}
;
_.value_0 = 0;
var BYTES_4 = 0;
var MAX_VALUE_5 = {l:4194303, m:4194303, h:524287};
var MIN_VALUE_5 = {l:0, m:0, h:524288};
var SIZE_4 = 64;
var TYPE_8;
cggl.Ljava_lang_Long_2_classLit = createForClass('java.lang', 'Long', 28, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Long$BoxedValues = function $clinit_Long$BoxedValues(){
  jl.$clinit_Long$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_2 = initUnidimensionalArray(cggl.Ljava_lang_Long_2_classLit, {3:1, 1:1, 7:1}, 28, 256, 0, 1);
}
;
jl.get_6 = function get_6(l){
  jl.$clinit_Long$BoxedValues();
  var rebase, result;
  rebase = toInt_0(l) + 128;
  result = jl.boxedValues_2[rebase];
  if (isNull(result)) {
    result = jl.boxedValues_2[rebase] = new jl.Long(l);
  }
  return result;
}
;
defineClass(232, 1, {1:1});
cggl.Ljava_lang_Long$BoxedValues_2_classLit = createForClass('java.lang', 'Long/BoxedValues', 232, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Math = function $clinit_Math(){
  jl.$clinit_Math = emptyMethod;
  jl.$clinit_Object();
  jl.PI_OVER_180 = 3.141592653589793 / 180;
  jl.PI_UNDER_180 = 180 / 3.141592653589793;
}
;
defineClass(253, 1, {1:1});
jl.E_0 = 2.718281828459045;
jl.PI_0 = 3.141592653589793;
jl.PI_OVER_180 = 0;
jl.PI_UNDER_180 = 0;
cggl.Ljava_lang_Math_2_classLit = createForClass('java.lang', 'Math', 253, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Math$NativeMath = function $clinit_Math$NativeMath(){
  jl.$clinit_Math$NativeMath = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_NullPointerException = function $clinit_NullPointerException(){
  jl.$clinit_NullPointerException = emptyMethod;
  jl.$clinit_JsException();
}
;
jl.NullPointerException = function NullPointerException(){
  jl.$clinit_NullPointerException();
  jl.JsException.call(this);
  this.$init_101();
}
;
jl.NullPointerException_0 = function NullPointerException_0(message){
  jl.$clinit_NullPointerException();
  jl.JsException_1.call(this, message);
  this.$init_101();
}
;
defineClass(40, 58, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.NullPointerException, jl.NullPointerException_0);
_.$init_101 = function $init_101(){
}
;
_.createError = function createError_0(msg){
  return new TypeError(msg);
}
;
cggl.Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 40, cggl.Ljava_lang_JsException_2_classLit);
jl.$clinit_NullPointerException$NativeTypeError = function $clinit_NullPointerException$NativeTypeError(){
  jl.$clinit_NullPointerException$NativeTypeError = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Number$JavaLangNumber = function $clinit_Number$JavaLangNumber(){
  jl.$clinit_Number$JavaLangNumber = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Number$__Decode = function $clinit_Number$__Decode(){
  jl.$clinit_Number$__Decode = emptyMethod;
}
;
defineClass(210, 1, {1:1});
cggl.Ljava_lang_Number$_1_1Decode_2_classLit = createForClass('java.lang', 'Number/__Decode', 210, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Number$__ParseLong = function $clinit_Number$__ParseLong(){
  jl.$clinit_Number$__ParseLong = emptyMethod;
}
;
defineClass(211, 1, {1:1});
cggl.Ljava_lang_Number$_1_1ParseLong_2_classLit = createForClass('java.lang', 'Number/__ParseLong', 211, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_NumberFormatException = function $clinit_NumberFormatException(){
  jl.$clinit_NumberFormatException = emptyMethod;
  jl.$clinit_IllegalArgumentException();
}
;
jl.NumberFormatException = function NumberFormatException(message){
  jl.IllegalArgumentException_0.call(this, message);
  this.$init_102();
}
;
jl.forInputString = function forInputString(s){
  jl.$clinit_NumberFormatException();
  return new jl.NumberFormatException('For input string: "' + s + '"');
}
;
defineClass(127, 16, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.NumberFormatException);
_.$init_102 = function $init_102(){
}
;
cggl.Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 127, cggl.Ljava_lang_IllegalArgumentException_2_classLit);
jl.$clinit_Short = function $clinit_Short(){
  jl.$clinit_Short = emptyMethod;
  jl.$clinit_Number();
  MIN_VALUE_6 = narrow_short(32768);
  MAX_VALUE_6 = narrow_short(32767);
  BYTES_5 = narrow_int(16 / 8);
  TYPE_9 = cggl.S_classLit;
}
;
jl.Short = function Short(value_0){
  jl.$clinit_Short();
  jl.Number_0.call(this);
  this.$init_103();
  this.value_0 = value_0;
}
;
function compare_8(x_0, y_0){
  jl.$clinit_Short();
  return x_0 - y_0;
}

jl.hashCode_16 = function hashCode_16(s){
  return s;
}
;
jl.toString_26 = function toString_26(b){
  return jl.valueOf_15(b);
}
;
jl.valueOf_11 = function valueOf_11(s){
  if (s > -129 && s < 128) {
    return jl.get_7(s);
  }
  return new jl.Short(s);
}
;
defineClass(29, 25, {3:1, 11:1, 1:1, 29:1}, jl.Short);
_.$init_103 = function $init_103(){
}
;
_.compareTo_0 = function compareTo_11(b){
  return this.compareTo_6(castTo(b, 29));
}
;
_.byteValue = function byteValue_4(){
  return narrow_byte(this.value_0);
}
;
_.compareTo_6 = function compareTo_12(b){
  return compare_8(this.value_0, b.value_0);
}
;
_.doubleValue = function doubleValue_3(){
  return this.value_0;
}
;
_.equals_0 = function equals_6(o){
  return instanceOf(o, 29) && castTo(o, 29).value_0 == this.value_0;
}
;
_.floatValue = function floatValue_3(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_15(){
  return jl.hashCode_16(this.value_0);
}
;
_.intValue = function intValue_3(){
  return this.value_0;
}
;
_.longValue = function longValue_4(){
  return fromInt_0(this.value_0);
}
;
_.shortValue = function shortValue_4(){
  return this.value_0;
}
;
_.toString_0 = function toString_25(){
  return jl.toString_26(this.value_0);
}
;
_.value_0 = 0;
var BYTES_5 = 0;
var MAX_VALUE_6 = 0;
var MIN_VALUE_6 = 0;
var SIZE_5 = 16;
var TYPE_9;
cggl.Ljava_lang_Short_2_classLit = createForClass('java.lang', 'Short', 29, cggl.Ljava_lang_Number_2_classLit);
jl.$clinit_Short$BoxedValues = function $clinit_Short$BoxedValues(){
  jl.$clinit_Short$BoxedValues = emptyMethod;
  jl.$clinit_Object();
  jl.boxedValues_3 = initUnidimensionalArray(cggl.Ljava_lang_Short_2_classLit, {3:1, 1:1, 7:1}, 29, 256, 0, 1);
}
;
jl.get_7 = function get_7(s){
  jl.$clinit_Short$BoxedValues();
  var rebase, result;
  rebase = s + 128;
  result = jl.boxedValues_3[rebase];
  if (isNull(result)) {
    result = jl.boxedValues_3[rebase] = new jl.Short(s);
  }
  return result;
}
;
defineClass(233, 1, {1:1});
cggl.Ljava_lang_Short$BoxedValues_2_classLit = createForClass('java.lang', 'Short/BoxedValues', 233, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_StackTraceElement = function $clinit_StackTraceElement(){
  jl.$clinit_StackTraceElement = emptyMethod;
  jl.$clinit_Object();
}
;
jl.StackTraceElement = function StackTraceElement(className, methodName, fileName, lineNumber){
  jl.$clinit_StackTraceElement();
  Object_0.call(this);
  this.$init_104();
  this.className_0 = className;
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}
;
defineClass(14, 1, {3:1, 1:1, 14:1}, jl.StackTraceElement);
_.$init_104 = function $init_104(){
}
;
_.equals_0 = function equals_7(other){
  var st;
  if (instanceOf(other, 14)) {
    st = castTo(other, 14);
    return this.lineNumber == st.lineNumber && ju.equals_17(this.methodName, st.methodName) && ju.equals_17(this.className_0, st.className_0) && ju.equals_17(this.fileName, st.fileName);
  }
  return false;
}
;
_.getMethodName = function getMethodName(){
  return this.methodName;
}
;
_.hashCode_0 = function hashCode_17(){
  return ju.hash_1(stampJavaTypeInfo(getClassLiteralForArray(cggl.Ljava_lang_Object_2_classLit, 1), {3:1, 1:1, 7:1}, 1, 5, [jl.valueOf_9(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_27(){
  return this.className_0 + '.' + this.methodName + '(' + (jsNotEquals(this.fileName, null)?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
cggl.Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 14, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_String$NativeFunction = function $clinit_String$NativeFunction(){
  jl.$clinit_String$NativeFunction = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_String$NativeString = function $clinit_String$NativeString(){
  jl.$clinit_String$NativeString = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_StringBuffer = function $clinit_StringBuffer(){
  jl.$clinit_StringBuffer = emptyMethod;
}
;
defineClass(236, 77, {44:1, 1:1});
cggl.Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 236, cggl.Ljava_lang_AbstractStringBuilder_2_classLit);
jl.$clinit_StringBuilder = function $clinit_StringBuilder(){
  jl.$clinit_StringBuilder = emptyMethod;
  jl.$clinit_AbstractStringBuilder();
}
;
jl.StringBuilder = function StringBuilder(){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, '');
  this.$init_106();
}
;
jl.StringBuilder_0 = function StringBuilder_0(s){
  jl.$clinit_StringBuilder();
  jl.AbstractStringBuilder.call(this, castToString(ji2.checkNotNull_0(s)));
  this.$init_106();
}
;
defineClass(56, 77, {44:1, 1:1}, jl.StringBuilder, jl.StringBuilder_0);
_.$init_106 = function $init_106(){
}
;
_.append_0 = function append(x_0){
  this.string += '' + x_0;
  return this;
}
;
_.append_1 = function append_0(x_0){
  this.string += '' + x_0;
  return this;
}
;
cggl.Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 56, cggl.Ljava_lang_AbstractStringBuilder_2_classLit);
jl.$clinit_StringIndexOutOfBoundsException = function $clinit_StringIndexOutOfBoundsException(){
  jl.$clinit_StringIndexOutOfBoundsException = emptyMethod;
  jl.$clinit_IndexOutOfBoundsException();
}
;
jl.StringIndexOutOfBoundsException = function StringIndexOutOfBoundsException(message){
  jl.$clinit_StringIndexOutOfBoundsException();
  jl.IndexOutOfBoundsException_0.call(this, message);
  this.$init_107();
}
;
defineClass(80, 31, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.StringIndexOutOfBoundsException);
_.$init_107 = function $init_107(){
}
;
cggl.Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'StringIndexOutOfBoundsException', 80, cggl.Ljava_lang_IndexOutOfBoundsException_2_classLit);
jl.$clinit_System = function $clinit_System(){
  jl.$clinit_System = emptyMethod;
  jl.$clinit_Object();
  jl.err = new ji.PrintStream(null);
  jl.out_0 = new ji.PrintStream(null);
}
;
defineClass(255, 1, {1:1});
jl.MILLIS_TO_NANOS = 1000000;
cggl.Ljava_lang_System_2_classLit = createForClass('java.lang', 'System', 255, cggl.Ljava_lang_Object_2_classLit);
jl.$clinit_Throwable$HasJavaThrowable = function $clinit_Throwable$HasJavaThrowable(){
  jl.$clinit_Throwable$HasJavaThrowable = emptyMethod;
}
;
jl.$clinit_Throwable$NativeError = function $clinit_Throwable$NativeError(){
  jl.$clinit_Throwable$NativeError = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_Throwable$NativeTypeError = function $clinit_Throwable$NativeTypeError(){
  jl.$clinit_Throwable$NativeTypeError = emptyMethod;
  jl.$clinit_Object();
}
;
jl.$clinit_UnsupportedOperationException = function $clinit_UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
jl.UnsupportedOperationException = function UnsupportedOperationException(){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException.call(this);
  this.$init_108();
}
;
jl.UnsupportedOperationException_0 = function UnsupportedOperationException_0(message){
  jl.$clinit_UnsupportedOperationException();
  jl.RuntimeException_1.call(this, message);
  this.$init_108();
}
;
defineClass(22, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, jl.UnsupportedOperationException, jl.UnsupportedOperationException_0);
_.$init_108 = function $init_108(){
}
;
cggl.Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 22, cggl.Ljava_lang_RuntimeException_2_classLit);
jl.$clinit_Void = function $clinit_Void(){
  jl.$clinit_Void = emptyMethod;
}
;
defineClass(87, 1, {1:1, 87:1});
cggl.Ljava_lang_Void_2_classLit = createForClass('java.lang', 'Void', 87, cggl.Ljava_lang_Object_2_classLit);
jnc.$clinit_Charset = function $clinit_Charset(){
  jnc.$clinit_Charset = emptyMethod;
  jl.$clinit_Object();
}
;
jnc.Charset = function Charset(name_0, aliasesIgnored){
  jnc.$clinit_Charset();
  Object_0.call(this);
  this.$init_109();
  this.name_0 = name_0;
}
;
jnc.forName = function forName(charsetName){
  jnc.$clinit_Charset();
  ji2.checkArgument(jsNotEquals(charsetName, null), 'Null charset name');
  charsetName = jl.toUpperCase__Ljava_lang_String___devirtual$(charsetName);
  if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.ISO_8859_1).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.ISO_8859_1;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.ISO_LATIN_1).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.ISO_LATIN_1;
  }
   else if (jl.equals_Ljava_lang_Object__Z__devirtual$_2((ji2.$clinit_EmulatedCharset() , ji2.UTF_8).name_1(), charsetName)) {
    return ji2.$clinit_EmulatedCharset() , ji2.UTF_8;
  }
  throw toJs(new jnc.UnsupportedCharsetException(charsetName));
}
;
defineClass(20, 1, {11:1, 1:1, 20:1});
_.$init_109 = function $init_109(){
}
;
_.compareTo_0 = function compareTo_13(that){
  return this.compareTo_7(castTo(that, 20));
}
;
_.compareTo_7 = function compareTo_14(that){
  return jl.compareToIgnoreCase_Ljava_lang_String__I__devirtual$(this.name_0, that.name_0);
}
;
_.equals_0 = function equals_9(o){
  var that;
  if (maskUndefined(o) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(o, 20)) {
    return false;
  }
  that = castTo(o, 20);
  return jl.equals_Ljava_lang_Object__Z__devirtual$_2(this.name_0, that.name_0);
}
;
_.hashCode_0 = function hashCode_18(){
  return jl.hashCode__I__devirtual$_2(this.name_0);
}
;
_.name_1 = function name_2(){
  return this.name_0;
}
;
_.toString_0 = function toString_28(){
  return this.name_0;
}
;
cggl.Ljava_nio_charset_Charset_2_classLit = createForClass('java.nio.charset', 'Charset', 20, cggl.Ljava_lang_Object_2_classLit);
jnc.$clinit_Charset$AvailableCharsets = function $clinit_Charset$AvailableCharsets(){
  jnc.$clinit_Charset$AvailableCharsets = emptyMethod;
}
;
defineClass(235, 1, {1:1});
cggl.Ljava_nio_charset_Charset$AvailableCharsets_2_classLit = createForClass('java.nio.charset', 'Charset/AvailableCharsets', 235, cggl.Ljava_lang_Object_2_classLit);
jnc.$clinit_UnsupportedCharsetException = function $clinit_UnsupportedCharsetException(){
  jnc.$clinit_UnsupportedCharsetException = emptyMethod;
  jl.$clinit_IllegalArgumentException();
}
;
jnc.UnsupportedCharsetException = function UnsupportedCharsetException(charsetName){
  jnc.$clinit_UnsupportedCharsetException();
  jl.IllegalArgumentException_0.call(this, valueOf_17(charsetName));
  this.$init_110();
  this.charsetName = charsetName;
}
;
defineClass(52, 16, {3:1, 6:1, 1:1, 5:1, 4:1, 52:1}, jnc.UnsupportedCharsetException);
_.$init_110 = function $init_110(){
}
;
cggl.Ljava_nio_charset_UnsupportedCharsetException_2_classLit = createForClass('java.nio.charset', 'UnsupportedCharsetException', 52, cggl.Ljava_lang_IllegalArgumentException_2_classLit);
ju.$clinit_Collection = function $clinit_Collection(){
  ju.$clinit_Collection = emptyMethod;
}
;
cggl.Ljava_util_Collection_2_classLit = createForInterface('java.util', 'Collection');
ju.$clinit_AbstractCollection = function $clinit_AbstractCollection(){
  ju.$clinit_AbstractCollection = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
}
;
ju.AbstractCollection = function AbstractCollection(){
  ju.$clinit_AbstractCollection();
  Object_0.call(this);
  this.$init_111();
}
;
defineClass(78, 1, {1:1});
_.$init_111 = function $init_111(){
}
;
_.add_1 = function add_3(o){
  throw toJs(new jl.UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.addAll = function addAll(c){
  var changed, e, e$iterator;
  ji2.checkNotNull_0(c);
  changed = false;
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    changed = changed | this.add_1(e);
  }
  return changed;
}
;
_.advanceToFind = function advanceToFind(o, remove){
  var e, iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    e = iter.next_0();
    if (ju.equals_16(o, e)) {
      if (remove) {
        iter.remove_3();
      }
      return true;
    }
  }
  return false;
}
;
_.clear_0 = function clear_1(){
  var iter;
  for (iter = this.iterator(); iter.hasNext_0();) {
    iter.next_0();
    iter.remove_3();
  }
}
;
_.contains_0 = function contains(o){
  return this.advanceToFind(o, false);
}
;
_.containsAll = function containsAll(c){
  var e, e$iterator;
  ji2.checkNotNull_0(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    if (!this.contains_0(e)) {
      return false;
    }
  }
  return true;
}
;
_.isEmpty_0 = function isEmpty_0(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_1(o){
  return this.advanceToFind(o, true);
}
;
_.toArray = function toArray(){
  return this.toArray_0(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, this.size_1(), 5, 1));
}
;
_.toArray_0 = function toArray_0(a){
  var i, it, result, size_0;
  size_0 = this.size_1();
  if (a.length < size_0) {
    a = ji2.createFrom(a, size_0);
  }
  result = a;
  it = this.iterator();
  for (i = 0; i < size_0; ++i) {
    setCheck(result, i, it.next_0());
  }
  if (a.length > size_0) {
    setCheck(a, size_0, null);
  }
  return a;
}
;
_.toString_0 = function toString_29(){
  var e, e$iterator, joiner;
  joiner = new ju.StringJoiner_0(', ', '[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    joiner.add_3(maskUndefined(e) === maskUndefined(this)?'(this Collection)':valueOf_17(e));
  }
  return joiner.toString_0();
}
;
cggl.Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 78, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map = function $clinit_Map(){
  ju.$clinit_Map = emptyMethod;
}
;
cggl.Ljava_util_Map_2_classLit = createForInterface('java.util', 'Map');
ju.$clinit_AbstractMap = function $clinit_AbstractMap(){
  ju.$clinit_AbstractMap = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Map();
}
;
ju.AbstractMap = function AbstractMap(){
  ju.$clinit_AbstractMap();
  Object_0.call(this);
  this.$init_112();
}
;
ju.getEntryValueOrNull = function getEntryValueOrNull(entry){
  ju.$clinit_AbstractMap();
  return isNull(entry)?null:entry.getValue();
}
;
defineClass(84, 1, {1:1, 18:1});
_.$init_112 = function $init_112(){
}
;
_.clear_0 = function clear_2(){
  this.entrySet().clear_0();
}
;
_.containsEntry = function containsEntry(entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this.get_1(key);
  if (!ju.equals_16(value_0, ourValue)) {
    return false;
  }
  if (jsEquals(ourValue, null) && !this.containsKey(key)) {
    return false;
  }
  return true;
}
;
_.containsKey = function containsKey(key){
  return isNotNull(this.implFindEntry(key, false));
}
;
_.equals_0 = function equals_10(obj){
  var entry, entry$iterator, otherMap;
  if (maskUndefined(obj) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(obj, 18)) {
    return false;
  }
  otherMap = castTo(obj, 18);
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 10);
    if (!this.containsEntry(entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_8(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, false));
}
;
_.hashCode_0 = function hashCode_19(){
  return ju.hashCode_25(this.entrySet());
}
;
_.implFindEntry = function implFindEntry(key, remove){
  var entry, iter, k;
  for (iter = this.entrySet().iterator(); iter.hasNext_0();) {
    entry = castTo(iter.next_0(), 10);
    k = entry.getKey();
    if (ju.equals_16(key, k)) {
      if (remove) {
        entry = new ju.AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_3();
      }
      return entry;
    }
  }
  return null;
}
;
_.isEmpty_0 = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.keySet = function keySet(){
  return new ju.AbstractMap$1(this);
}
;
_.put = function put(key, value_0){
  throw toJs(new jl.UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_2 = function remove_2(key){
  return ju.getEntryValueOrNull(this.implFindEntry(key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet().size_1();
}
;
_.toString_0 = function toString_30(){
  var entry, entry$iterator, joiner;
  joiner = new ju.StringJoiner_0(', ', '{', '}');
  for (entry$iterator = this.entrySet().iterator(); entry$iterator.hasNext_0();) {
    entry = castTo(entry$iterator.next_0(), 10);
    joiner.add_3(this.toString_3(entry));
  }
  return joiner.toString_0();
}
;
_.toString_2 = function toString_31(o){
  return maskUndefined(o) === maskUndefined(this)?'(this Map)':valueOf_17(o);
}
;
_.toString_3 = function toString_32(entry){
  return this.toString_2(entry.getKey()) + '=' + this.toString_2(entry.getValue());
}
;
cggl.Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 84, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractHashMap = function $clinit_AbstractHashMap(){
  ju.$clinit_AbstractHashMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.AbstractHashMap = function AbstractHashMap(){
  ju.$clinit_AbstractHashMap();
  ju.AbstractMap.call(this);
  this.$init_113();
  this.reset_0();
}
;
defineClass(172, 84, {1:1, 18:1});
_.$init_113 = function $init_113(){
}
;
_.clear_0 = function clear_3(){
  this.reset_0();
}
;
_.containsKey = function containsKey_0(key){
  return instanceOfString(key)?this.hasStringValue(ji2.uncheckedCast(key)):this.hasHashValue(key);
}
;
_.entrySet = function entrySet(){
  return new ju.AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_9(key){
  return instanceOfString(key)?this.getStringValue(ji2.uncheckedCast(key)):this.getHashValue(key);
}
;
_.getHashValue = function getHashValue(key){
  return ju.getEntryValueOrNull(this.hashCodeMap.getEntry(key));
}
;
_.getStringValue = function getStringValue(key){
  return jsEquals(key, null)?this.getHashValue(null):this.stringMap.get_0(key);
}
;
_.hasHashValue = function hasHashValue(key){
  return isNotNull(this.hashCodeMap.getEntry(key));
}
;
_.hasStringValue = function hasStringValue(key){
  return jsEquals(key, null)?this.hasHashValue(null):this.stringMap.contains_1(key);
}
;
_.put = function put_0(key, value_0){
  return instanceOfString(key)?this.putStringValue(ji2.uncheckedCast(key), value_0):this.putHashValue(key, value_0);
}
;
_.putHashValue = function putHashValue(key, value_0){
  return this.hashCodeMap.put(key, value_0);
}
;
_.putStringValue = function putStringValue(key, value_0){
  return jsEquals(key, null)?this.putHashValue(null, value_0):this.stringMap.put_0(key, value_0);
}
;
_.remove_2 = function remove_3(key){
  return instanceOfString(key)?this.removeStringValue(ji2.uncheckedCast(key)):this.removeHashValue(key);
}
;
_.removeHashValue = function removeHashValue(key){
  return this.hashCodeMap.remove_2(key);
}
;
_.removeStringValue = function removeStringValue(key){
  return jsEquals(key, null)?this.removeHashValue(null):this.stringMap.remove_5(key);
}
;
_.reset_0 = function reset_0(){
  this.hashCodeMap = new ju.InternalHashCodeMap(this);
  this.stringMap = new ju.InternalStringMap(this);
  this.structureChanged();
}
;
_.size_1 = function size_3(){
  return this.hashCodeMap.size_1() + this.stringMap.size_1();
}
;
_.structureChanged = function structureChanged(){
  if (!ji2.isApiChecked()) {
    return;
  }
  this.modCount++;
}
;
_.modCount = 0;
cggl.Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 172, cggl.Ljava_util_AbstractMap_2_classLit);
ju.$clinit_Set = function $clinit_Set(){
  ju.$clinit_Set = emptyMethod;
}
;
cggl.Ljava_util_Set_2_classLit = createForInterface('java.util', 'Set');
ju.$clinit_AbstractSet = function $clinit_AbstractSet(){
  ju.$clinit_AbstractSet = emptyMethod;
  ju.$clinit_AbstractCollection();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_Set();
}
;
ju.AbstractSet = function AbstractSet(){
  ju.$clinit_AbstractSet();
  ju.AbstractCollection.call(this);
  this.$init_114();
}
;
defineClass(50, 78, {1:1, 19:1});
_.$init_114 = function $init_114(){
}
;
_.equals_0 = function equals_11(o){
  var other;
  if (maskUndefined(o) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(o, 19)) {
    return false;
  }
  other = castTo(o, 19);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return this.containsAll(other);
}
;
_.hashCode_0 = function hashCode_20(){
  return ju.hashCode_25(this);
}
;
cggl.Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 50, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractHashMap$EntrySet = function $clinit_AbstractHashMap$EntrySet(){
  ju.$clinit_AbstractHashMap$EntrySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractHashMap$EntrySet = function AbstractHashMap$EntrySet(this$0){
  ju.$clinit_AbstractHashMap$EntrySet();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_115();
}
;
defineClass(173, 50, {1:1, 19:1}, ju.AbstractHashMap$EntrySet);
_.$init_115 = function $init_115(){
}
;
_.clear_0 = function clear_4(){
  this.this$01.clear_0();
}
;
_.contains_0 = function contains_0(o){
  if (instanceOf(o, 10)) {
    return this.this$01.containsEntry(castTo(o, 10));
  }
  return false;
}
;
_.iterator = function iterator(){
  return new ju.AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_4(entry){
  var key;
  if (this.contains_0(entry)) {
    key = castTo(entry, 10).getKey();
    this.this$01.remove_2(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_4(){
  return this.this$01.size_1();
}
;
cggl.Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 173, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractHashMap$EntrySetIterator = function $clinit_AbstractHashMap$EntrySetIterator(){
  ju.$clinit_AbstractHashMap$EntrySetIterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractHashMap$EntrySetIterator = function AbstractHashMap$EntrySetIterator(this$0){
  ju.$clinit_AbstractHashMap$EntrySetIterator();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_116();
}
;
defineClass(174, 1, {1:1}, ju.AbstractHashMap$EntrySetIterator);
_.$init_116 = function $init_116(){
  this.stringMapEntries = this.this$01.stringMap.iterator();
  this.current = this.stringMapEntries;
  this.hasNext = this.computeHasNext();
  this.lastModCount = this.this$01.modCount;
}
;
_.next_0 = function next(){
  return this.next_1();
}
;
_.computeHasNext = function computeHasNext(){
  if (this.current.hasNext_0()) {
    return true;
  }
  if (jsNotEquals(this.current, this.stringMapEntries)) {
    return false;
  }
  this.current = this.this$01.hashCodeMap.iterator();
  return this.current.hasNext_0();
}
;
_.hasNext_0 = function hasNext(){
  return this.hasNext;
}
;
_.next_1 = function next_0(){
  var rv;
  ji2.checkConcurrentModification(this.this$01.modCount, this.lastModCount);
  ji2.checkElement(this.hasNext_0());
  this.last = this.current;
  rv = castTo(this.current.next_0(), 10);
  this.hasNext = this.computeHasNext();
  return rv;
}
;
_.remove_3 = function remove_5(){
  ji2.checkState(isNotNull(this.last));
  ji2.checkConcurrentModification(this.this$01.modCount, this.lastModCount);
  this.last.remove_3();
  this.last = null;
  this.hasNext = this.computeHasNext();
  this.lastModCount = this.this$01.modCount;
}
;
_.hasNext = false;
_.lastModCount = 0;
cggl.Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 174, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_List = function $clinit_List(){
  ju.$clinit_List = emptyMethod;
}
;
cggl.Ljava_util_List_2_classLit = createForInterface('java.util', 'List');
ju.$clinit_AbstractList = function $clinit_AbstractList(){
  ju.$clinit_AbstractList = emptyMethod;
  ju.$clinit_AbstractCollection();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_List();
}
;
ju.AbstractList = function AbstractList(){
  ju.$clinit_AbstractList();
  ju.AbstractCollection.call(this);
  this.$init_117();
}
;
defineClass(48, 78, {1:1, 12:1});
_.$init_117 = function $init_117(){
}
;
_.add_2 = function add_4(index_0, element){
  throw toJs(new jl.UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_1 = function add_5(obj){
  this.add_2(this.size_1(), obj);
  return true;
}
;
_.clear_0 = function clear_5(){
  this.removeRange_0(0, this.size_1());
}
;
_.equals_0 = function equals_12(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (maskUndefined(o) === maskUndefined(this)) {
    return true;
  }
  if (!instanceOf(o, 12)) {
    return false;
  }
  other = castTo(o, 12);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!ju.equals_16(elem, elemOther)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_21(){
  return ju.hashCode_26(this);
}
;
_.indexOf_2 = function indexOf_1(toFind){
  var i, n;
  for (i = 0 , n = this.size_1(); i < n; ++i) {
    if (ju.equals_16(toFind, this.get_2(i))) {
      return i;
    }
  }
  return -1;
}
;
_.iterator = function iterator_0(){
  return new ju.AbstractList$IteratorImpl(this);
}
;
_.lastIndexOf_2 = function lastIndexOf_1(toFind){
  var i;
  for (i = this.size_1() - 1; i > -1; --i) {
    if (ju.equals_16(toFind, this.get_2(i))) {
      return i;
    }
  }
  return -1;
}
;
_.listIterator = function listIterator(){
  return this.listIterator_0(0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new ju.AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_4 = function remove_6(index_0){
  throw toJs(new jl.UnsupportedOperationException_0('Remove not supported on this list'));
}
;
_.removeRange_0 = function removeRange(fromIndex, endIndex){
  var i, iter;
  iter = this.listIterator_0(fromIndex);
  for (i = fromIndex; i < endIndex; ++i) {
    iter.next_0();
    iter.remove_3();
  }
}
;
cggl.Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 48, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractList$IteratorImpl = function $clinit_AbstractList$IteratorImpl(){
  ju.$clinit_AbstractList$IteratorImpl = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractList$IteratorImpl = function AbstractList$IteratorImpl(this$0){
  ju.$clinit_AbstractList$IteratorImpl();
  this.this$01_0 = this$0;
  Object_0.call(this);
  this.$init_118();
}
;
defineClass(57, 1, {1:1}, ju.AbstractList$IteratorImpl);
_.$init_118 = function $init_118(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext_0 = function hasNext_0(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_1(){
  ji2.checkElement(this.hasNext_0());
  return this.this$01_0.get_2(this.last = this.i++);
}
;
_.remove_3 = function remove_7(){
  ji2.checkState(this.last != -1);
  this.this$01_0.remove_4(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 57, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_ListIterator = function $clinit_ListIterator(){
  ju.$clinit_ListIterator = emptyMethod;
}
;
cggl.Ljava_util_ListIterator_2_classLit = createForInterface('java.util', 'ListIterator');
ju.$clinit_AbstractList$ListIteratorImpl = function $clinit_AbstractList$ListIteratorImpl(){
  ju.$clinit_AbstractList$ListIteratorImpl = emptyMethod;
  ju.$clinit_AbstractList$IteratorImpl();
  ju.$clinit_Iterator();
}
;
ju.AbstractList$ListIteratorImpl = function AbstractList$ListIteratorImpl(this$0, start_0){
  ju.$clinit_AbstractList$ListIteratorImpl();
  this.this$01 = this$0;
  ju.AbstractList$IteratorImpl.call(this, this$0);
  this.$init_119();
  ji2.checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}
;
defineClass(133, 57, {1:1}, ju.AbstractList$ListIteratorImpl);
_.$init_119 = function $init_119(){
}
;
_.remove_3 = function remove_8(){
  getClassPrototype(57).remove_3.call(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  ji2.checkElement(this.hasPrevious());
  return this.this$01.get_2(this.last = --this.i);
}
;
cggl.Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 133, cggl.Ljava_util_AbstractList$IteratorImpl_2_classLit);
ju.$clinit_AbstractList$SubList = function $clinit_AbstractList$SubList(){
  ju.$clinit_AbstractList$SubList = emptyMethod;
}
;
defineClass(244, 48, {1:1, 12:1});
cggl.Ljava_util_AbstractList$SubList_2_classLit = createForClass('java.util', 'AbstractList/SubList', 244, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_AbstractMap$1 = function $clinit_AbstractMap$1(){
  ju.$clinit_AbstractMap$1 = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.AbstractMap$1 = function AbstractMap$1(this$0){
  ju.$clinit_AbstractMap$1();
  this.this$01 = this$0;
  ju.AbstractSet.call(this);
  this.$init_120();
}
;
defineClass(159, 50, {1:1, 19:1}, ju.AbstractMap$1);
_.$init_120 = function $init_120(){
}
;
_.clear_0 = function clear_6(){
  this.this$01.clear_0();
}
;
_.contains_0 = function contains_1(key){
  return this.this$01.containsKey(key);
}
;
_.iterator = function iterator_1(){
  var outerIter;
  outerIter = this.this$01.entrySet().iterator();
  return new ju.AbstractMap$1$1(this, outerIter);
}
;
_.remove_1 = function remove_9(key){
  if (this.this$01.containsKey(key)) {
    this.this$01.remove_2(key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_5(){
  return this.this$01.size_1();
}
;
cggl.Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 159, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_AbstractMap$1$1 = function $clinit_AbstractMap$1$1(){
  ju.$clinit_AbstractMap$1$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.AbstractMap$1$1 = function AbstractMap$1$1(this$1, val$outerIter){
  ju.$clinit_AbstractMap$1$1();
  this.this$11 = this$1;
  this.val$outerIter2 = val$outerIter;
  Object_0.call(this);
  this.$init_121();
}
;
defineClass(160, 1, {1:1}, ju.AbstractMap$1$1);
_.$init_121 = function $init_121(){
}
;
_.hasNext_0 = function hasNext_1(){
  return this.val$outerIter2.hasNext_0();
}
;
_.next_0 = function next_2(){
  var entry;
  entry = castTo(this.val$outerIter2.next_0(), 10);
  return entry.getKey();
}
;
_.remove_3 = function remove_10(){
  this.val$outerIter2.remove_3();
}
;
cggl.Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 160, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$2 = function $clinit_AbstractMap$2(){
  ju.$clinit_AbstractMap$2 = emptyMethod;
}
;
defineClass(284, 78, {1:1});
cggl.Ljava_util_AbstractMap$2_2_classLit = createForClass('java.util', 'AbstractMap/2', 284, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_AbstractMap$2$1 = function $clinit_AbstractMap$2$1(){
  ju.$clinit_AbstractMap$2$1 = emptyMethod;
}
;
defineClass(285, 1, {1:1});
cggl.Ljava_util_AbstractMap$2$1_2_classLit = createForClass('java.util', 'AbstractMap/2/1', 285, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map$Entry = function $clinit_Map$Entry(){
  ju.$clinit_Map$Entry = emptyMethod;
}
;
cggl.Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
ju.$clinit_AbstractMap$AbstractEntry = function $clinit_AbstractMap$AbstractEntry(){
  ju.$clinit_AbstractMap$AbstractEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMap$AbstractEntry = function AbstractMap$AbstractEntry(key, value_0){
  ju.$clinit_AbstractMap$AbstractEntry();
  Object_0.call(this);
  this.$init_122();
  this.key = key;
  this.value_0 = value_0;
}
;
defineClass(158, 1, {1:1, 10:1});
_.$init_122 = function $init_122(){
}
;
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = castTo(other, 10);
  return ju.equals_16(this.key, entry.getKey()) && ju.equals_16(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_22(){
  return ju.hashCode_27(this.key) ^ ju.hashCode_27(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_33(){
  return this.key + '=' + this.value_0;
}
;
cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 158, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_AbstractMap$SimpleEntry = function $clinit_AbstractMap$SimpleEntry(){
  ju.$clinit_AbstractMap$SimpleEntry = emptyMethod;
  ju.$clinit_AbstractMap$AbstractEntry();
}
;
ju.AbstractMap$SimpleEntry = function AbstractMap$SimpleEntry(key, value_0){
  ju.$clinit_AbstractMap$SimpleEntry();
  ju.AbstractMap$AbstractEntry.call(this, key, value_0);
  this.$init_123();
}
;
defineClass(85, 158, {1:1, 10:1}, ju.AbstractMap$SimpleEntry);
_.$init_123 = function $init_123(){
}
;
cggl.Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 85, cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit);
ju.$clinit_AbstractMap$SimpleImmutableEntry = function $clinit_AbstractMap$SimpleImmutableEntry(){
  ju.$clinit_AbstractMap$SimpleImmutableEntry = emptyMethod;
}
;
defineClass(283, 158, {1:1, 10:1});
cggl.Ljava_util_AbstractMap$SimpleImmutableEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleImmutableEntry', 283, cggl.Ljava_util_AbstractMap$AbstractEntry_2_classLit);
ju.$clinit_AbstractMapEntry = function $clinit_AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry = emptyMethod;
  jl.$clinit_Object();
}
;
ju.AbstractMapEntry = function AbstractMapEntry(){
  ju.$clinit_AbstractMapEntry();
  Object_0.call(this);
  this.$init_124();
}
;
defineClass(180, 1, {1:1, 10:1});
_.$init_124 = function $init_124(){
}
;
_.equals_0 = function equals_14(other){
  var entry;
  if (!instanceOf(other, 10)) {
    return false;
  }
  entry = castTo(other, 10);
  return ju.equals_16(this.getKey(), entry.getKey()) && ju.equals_16(this.getValue(), entry.getValue());
}
;
_.hashCode_0 = function hashCode_23(){
  return ju.hashCode_27(this.getKey()) ^ ju.hashCode_27(this.getValue());
}
;
_.toString_0 = function toString_34(){
  return this.getKey() + '=' + this.getValue();
}
;
cggl.Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 180, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Queue = function $clinit_Queue(){
  ju.$clinit_Queue = emptyMethod;
}
;
cggl.Ljava_util_Queue_2_classLit = createForInterface('java.util', 'Queue');
ju.$clinit_AbstractQueue = function $clinit_AbstractQueue(){
  ju.$clinit_AbstractQueue = emptyMethod;
}
;
defineClass(265, 78, {1:1});
cggl.Ljava_util_AbstractQueue_2_classLit = createForClass('java.util', 'AbstractQueue', 265, cggl.Ljava_util_AbstractCollection_2_classLit);
ju.$clinit_RandomAccess = function $clinit_RandomAccess(){
  ju.$clinit_RandomAccess = emptyMethod;
}
;
cggl.Ljava_util_RandomAccess_2_classLit = createForInterface('java.util', 'RandomAccess');
ju.$clinit_ArrayList = function $clinit_ArrayList(){
  ju.$clinit_ArrayList = emptyMethod;
  ju.$clinit_AbstractList();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_List();
}
;
ju.ArrayList = function ArrayList(){
  ju.$clinit_ArrayList();
  ju.AbstractList.call(this);
  this.$init_125();
}
;
ju.ArrayList_0 = function ArrayList_0(c){
  ju.$clinit_ArrayList();
  ju.AbstractList.call(this);
  this.$init_125();
  ji2.insertTo_0(this.array, 0, c.toArray());
}
;
defineClass(68, 48, {3:1, 1:1, 12:1}, ju.ArrayList, ju.ArrayList_0);
_.$init_125 = function $init_125(){
  this.array = castToArray(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, 0, 5, 1));
}
;
_.add_2 = function add_6(index_0, o){
  ji2.checkPositionIndex(index_0, this.array.length);
  ji2.insertTo(this.array, index_0, o);
}
;
_.add_1 = function add_7(o){
  ji2.push_2(this.array, o);
  return true;
}
;
_.addAll = function addAll_0(c){
  var cArray, len;
  cArray = c.toArray();
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  ji2.insertTo_0(this.array, this.array.length, cArray);
  return true;
}
;
_.clear_0 = function clear_7(){
  this.setSize(0);
}
;
_.contains_0 = function contains_2(o){
  return this.indexOf_2(o) != -1;
}
;
_.get_2 = function get_10(index_0){
  ji2.checkElementIndex(index_0, this.array.length);
  return this.array[index_0];
}
;
_.indexOf_2 = function indexOf_2(o){
  return this.indexOf_3(o, 0);
}
;
_.indexOf_3 = function indexOf_3(o, index_0){
  for (; index_0 < this.array.length; ++index_0) {
    if (ju.equals_16(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.isEmpty_0 = function isEmpty_2(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_2(){
  return new ju.ArrayList$1(this);
}
;
_.lastIndexOf_2 = function lastIndexOf_2(o){
  return this.lastIndexOf_3(o, this.size_1() - 1);
}
;
_.lastIndexOf_3 = function lastIndexOf_3(o, index_0){
  for (; index_0 >= 0; --index_0) {
    if (ju.equals_16(o, this.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}
;
_.remove_4 = function remove_11(index_0){
  var previous;
  previous = this.get_2(index_0);
  ji2.removeFrom(this.array, index_0, 1);
  return previous;
}
;
_.remove_1 = function remove_12(o){
  var i;
  i = this.indexOf_2(o);
  if (i == -1) {
    return false;
  }
  this.remove_4(i);
  return true;
}
;
_.removeRange_0 = function removeRange_0(fromIndex, endIndex){
  var count;
  ji2.checkPositionIndexes(fromIndex, endIndex, this.array.length);
  count = endIndex - fromIndex;
  ji2.removeFrom(this.array, fromIndex, count);
}
;
_.setSize = function setSize(newSize){
  ji2.setLength_0(this.array, newSize);
}
;
_.size_1 = function size_6(){
  return this.array.length;
}
;
_.toArray = function toArray_1(){
  return ji2.clone(this.array);
}
;
_.toArray_0 = function toArray_2(out){
  var i, size_0;
  size_0 = this.array.length;
  if (out.length < size_0) {
    out = ji2.createFrom(out, size_0);
  }
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  if (out.length > size_0) {
    setCheck(out, size_0, null);
  }
  return out;
}
;
cggl.Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 68, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_ArrayList$1 = function $clinit_ArrayList$1(){
  ju.$clinit_ArrayList$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.ArrayList$1 = function ArrayList$1(this$0){
  ju.$clinit_ArrayList$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_126();
}
;
defineClass(171, 1, {1:1}, ju.ArrayList$1);
_.$init_126 = function $init_126(){
  this.i = 0;
  this.last = -1;
}
;
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01.array.length;
}
;
_.next_0 = function next_3(){
  ji2.checkElement(this.hasNext_0());
  this.last = this.i++;
  return this.this$01.array[this.last];
}
;
_.remove_3 = function remove_13(){
  ji2.checkState(this.last != -1);
  this.this$01.remove_4(this.i = this.last);
  this.last = -1;
}
;
_.i = 0;
_.last = 0;
cggl.Ljava_util_ArrayList$1_2_classLit = createForClass('java.util', 'ArrayList/1', 171, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Arrays = function $clinit_Arrays(){
  ju.$clinit_Arrays = emptyMethod;
  jl.$clinit_Object();
}
;
ju.asList = function asList(array){
  ju.$clinit_Arrays();
  return new ju.Arrays$ArrayList(array);
}
;
ju.hashCode_24 = function hashCode_24(a){
  ju.$clinit_Arrays();
  var e, e$array, e$index, e$max, hashCode;
  if (jsEquals(a, null)) {
    return 0;
  }
  hashCode = 1;
  for (e$array = a , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    hashCode = 31 * hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
defineClass(243, 1, {1:1});
cggl.Ljava_util_Arrays_2_classLit = createForClass('java.util', 'Arrays', 243, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Arrays$0methodref$compare$Type = function $clinit_Arrays$0methodref$compare$Type(){
  ju.$clinit_Arrays$0methodref$compare$Type = emptyMethod;
}
;
defineClass(910, $wnd.Function, {1:1});
ju.$clinit_Arrays$1methodref$compare$Type = function $clinit_Arrays$1methodref$compare$Type(){
  ju.$clinit_Arrays$1methodref$compare$Type = emptyMethod;
}
;
defineClass(911, $wnd.Function, {1:1});
ju.$clinit_Arrays$ArrayList = function $clinit_Arrays$ArrayList(){
  ju.$clinit_Arrays$ArrayList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.Arrays$ArrayList = function Arrays$ArrayList(array){
  ju.$clinit_Arrays$ArrayList();
  ju.AbstractList.call(this);
  this.$init_127();
  ji2.checkNotNull_0(array);
  this.array = array;
}
;
defineClass(132, 48, {3:1, 1:1, 12:1}, ju.Arrays$ArrayList);
_.$init_127 = function $init_127(){
}
;
_.contains_0 = function contains_3(o){
  return this.indexOf_2(o) != -1;
}
;
_.get_2 = function get_11(index_0){
  ji2.checkElementIndex(index_0, this.size_1());
  return this.array[index_0];
}
;
_.size_1 = function size_7(){
  return this.array.length;
}
;
_.toArray = function toArray_3(){
  return this.toArray_0(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, this.array.length, 5, 1));
}
;
_.toArray_0 = function toArray_4(out){
  var i, size_0;
  size_0 = this.array.length;
  if (out.length < size_0) {
    out = ji2.createFrom(out, size_0);
  }
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this.array[i]);
  }
  if (out.length > size_0) {
    setCheck(out, size_0, null);
  }
  return out;
}
;
cggl.Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 132, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Arrays$lambda$0$Type = function $clinit_Arrays$lambda$0$Type(){
  ju.$clinit_Arrays$lambda$0$Type = emptyMethod;
}
;
defineClass(909, $wnd.Function, {1:1});
ju.$clinit_Collections = function $clinit_Collections(){
  ju.$clinit_Collections = emptyMethod;
  jl.$clinit_Object();
  ju.EMPTY_LIST = new ju.Collections$EmptyList;
  ju.EMPTY_MAP = new ju.Collections$EmptyMap;
  ju.EMPTY_SET = new ju.Collections$EmptySet;
}
;
ju.emptyIterator = function emptyIterator(){
  ju.$clinit_Collections();
  return castTo((ju.$clinit_Collections$EmptyListIterator() , ju.INSTANCE_2), 198);
}
;
ju.emptyList = function emptyList(){
  ju.$clinit_Collections();
  return castTo(ju.EMPTY_LIST, 12);
}
;
ju.emptyListIterator = function emptyListIterator(){
  ju.$clinit_Collections();
  return castTo((ju.$clinit_Collections$EmptyListIterator() , ju.INSTANCE_2), 336);
}
;
ju.hashCode_25 = function hashCode_25(collection){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
ju.hashCode_26 = function hashCode_26(list){
  ju.$clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + ju.hashCode_27(e);
    hashCode = ji2.ensureInt(hashCode);
  }
  return hashCode;
}
;
defineClass(264, 1, {1:1});
cggl.Ljava_util_Collections_2_classLit = createForClass('java.util', 'Collections', 264, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Enumeration = function $clinit_Enumeration(){
  ju.$clinit_Enumeration = emptyMethod;
}
;
cggl.Ljava_util_Enumeration_2_classLit = createForInterface('java.util', 'Enumeration');
ju.$clinit_Collections$1 = function $clinit_Collections$1(){
  ju.$clinit_Collections$1 = emptyMethod;
}
;
defineClass(282, 1, {1:1});
cggl.Ljava_util_Collections$1_2_classLit = createForClass('java.util', 'Collections/1', 282, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$EmptyList = function $clinit_Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList = emptyMethod;
  ju.$clinit_AbstractList();
}
;
ju.Collections$EmptyList = function Collections$EmptyList(){
  ju.$clinit_Collections$EmptyList();
  ju.AbstractList.call(this);
  this.$init_128();
}
;
defineClass(154, 48, {3:1, 1:1, 12:1}, ju.Collections$EmptyList);
_.$init_128 = function $init_128(){
}
;
_.contains_0 = function contains_4(object){
  return false;
}
;
_.get_2 = function get_12(location_0){
  ji2.checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_3(){
  return ju.emptyIterator();
}
;
_.listIterator = function listIterator_1(){
  return ju.emptyListIterator();
}
;
_.size_1 = function size_8(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 154, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collections$EmptyListIterator = function $clinit_Collections$EmptyListIterator(){
  ju.$clinit_Collections$EmptyListIterator = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
  ju.INSTANCE_2 = new ju.Collections$EmptyListIterator;
}
;
ju.Collections$EmptyListIterator = function Collections$EmptyListIterator(){
  Object_0.call(this);
  this.$init_129();
}
;
defineClass(155, 1, {1:1, 198:1, 336:1}, ju.Collections$EmptyListIterator);
_.$init_129 = function $init_129(){
}
;
_.hasNext_0 = function hasNext_3(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_4(){
  throw toJs(new ju.NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new ju.NoSuchElementException);
}
;
_.remove_3 = function remove_14(){
  throw toJs(new jl.IllegalStateException);
}
;
cggl.Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 155, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$EmptyMap = function $clinit_Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap = emptyMethod;
  ju.$clinit_AbstractMap();
}
;
ju.Collections$EmptyMap = function Collections$EmptyMap(){
  ju.$clinit_Collections$EmptyMap();
  ju.AbstractMap.call(this);
  this.$init_130();
}
;
defineClass(157, 84, {3:1, 1:1, 18:1}, ju.Collections$EmptyMap);
_.$init_130 = function $init_130(){
}
;
_.containsKey = function containsKey_1(key){
  return false;
}
;
_.entrySet = function entrySet_0(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.get_1 = function get_13(key){
  return null;
}
;
_.keySet = function keySet_0(){
  return ju.$clinit_Collections() , ju.EMPTY_SET;
}
;
_.size_1 = function size_9(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptyMap_2_classLit = createForClass('java.util', 'Collections/EmptyMap', 157, cggl.Ljava_util_AbstractMap_2_classLit);
ju.$clinit_Collections$EmptySet = function $clinit_Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet = emptyMethod;
  ju.$clinit_AbstractSet();
}
;
ju.Collections$EmptySet = function Collections$EmptySet(){
  ju.$clinit_Collections$EmptySet();
  ju.AbstractSet.call(this);
  this.$init_131();
}
;
defineClass(156, 50, {3:1, 1:1, 19:1}, ju.Collections$EmptySet);
_.$init_131 = function $init_131(){
}
;
_.contains_0 = function contains_5(object){
  return false;
}
;
_.iterator = function iterator_4(){
  return ju.emptyIterator();
}
;
_.size_1 = function size_10(){
  return 0;
}
;
cggl.Ljava_util_Collections$EmptySet_2_classLit = createForClass('java.util', 'Collections/EmptySet', 156, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_Collections$LifoQueue = function $clinit_Collections$LifoQueue(){
  ju.$clinit_Collections$LifoQueue = emptyMethod;
}
;
defineClass(266, 265, {3:1, 1:1});
cggl.Ljava_util_Collections$LifoQueue_2_classLit = createForClass('java.util', 'Collections/LifoQueue', 266, cggl.Ljava_util_AbstractQueue_2_classLit);
ju.$clinit_Collections$RandomHolder = function $clinit_Collections$RandomHolder(){
  ju.$clinit_Collections$RandomHolder = emptyMethod;
}
;
defineClass(280, 1, {1:1});
cggl.Ljava_util_Collections$RandomHolder_2_classLit = createForClass('java.util', 'Collections/RandomHolder', 280, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$SetFromMap = function $clinit_Collections$SetFromMap(){
  ju.$clinit_Collections$SetFromMap = emptyMethod;
}
;
defineClass(267, 50, {3:1, 1:1, 19:1});
cggl.Ljava_util_Collections$SetFromMap_2_classLit = createForClass('java.util', 'Collections/SetFromMap', 267, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_Collections$SingletonList = function $clinit_Collections$SingletonList(){
  ju.$clinit_Collections$SingletonList = emptyMethod;
}
;
defineClass(268, 48, {3:1, 1:1, 12:1});
cggl.Ljava_util_Collections$SingletonList_2_classLit = createForClass('java.util', 'Collections/SingletonList', 268, cggl.Ljava_util_AbstractList_2_classLit);
ju.$clinit_Collections$UnmodifiableCollection = function $clinit_Collections$UnmodifiableCollection(){
  ju.$clinit_Collections$UnmodifiableCollection = emptyMethod;
}
;
defineClass(269, 1, {1:1});
cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollection', 269, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableCollectionIterator = function $clinit_Collections$UnmodifiableCollectionIterator(){
  ju.$clinit_Collections$UnmodifiableCollectionIterator = emptyMethod;
}
;
defineClass(278, 1, {1:1});
cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableCollectionIterator', 278, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableList = function $clinit_Collections$UnmodifiableList(){
  ju.$clinit_Collections$UnmodifiableList = emptyMethod;
}
;
defineClass(270, 269, {1:1, 12:1});
cggl.Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableList', 270, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableListIterator = function $clinit_Collections$UnmodifiableListIterator(){
  ju.$clinit_Collections$UnmodifiableListIterator = emptyMethod;
}
;
defineClass(279, 278, {1:1});
cggl.Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass('java.util', 'Collections/UnmodifiableListIterator', 279, cggl.Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit);
ju.$clinit_Collections$UnmodifiableMap = function $clinit_Collections$UnmodifiableMap(){
  ju.$clinit_Collections$UnmodifiableMap = emptyMethod;
}
;
defineClass(271, 1, {1:1, 18:1});
cggl.Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap', 271, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableSet = function $clinit_Collections$UnmodifiableSet(){
  ju.$clinit_Collections$UnmodifiableSet = emptyMethod;
}
;
defineClass(272, 269, {1:1, 19:1});
cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSet', 272, cggl.Ljava_util_Collections$UnmodifiableCollection_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet = emptyMethod;
}
;
defineClass(273, 272, {1:1, 19:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet', 273, cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$1 = emptyMethod;
}
;
defineClass(281, 1, {1:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/1', 281, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = function $clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(){
  ju.$clinit_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry = emptyMethod;
}
;
defineClass(274, 1, {1:1, 10:1});
cggl.Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util', 'Collections/UnmodifiableMap/UnmodifiableEntrySet/UnmodifiableEntry', 274, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Collections$UnmodifiableRandomAccessList = function $clinit_Collections$UnmodifiableRandomAccessList(){
  ju.$clinit_Collections$UnmodifiableRandomAccessList = emptyMethod;
}
;
defineClass(275, 270, {1:1, 12:1});
cggl.Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util', 'Collections/UnmodifiableRandomAccessList', 275, cggl.Ljava_util_Collections$UnmodifiableList_2_classLit);
ju.$clinit_SortedMap = function $clinit_SortedMap(){
  ju.$clinit_SortedMap = emptyMethod;
}
;
cggl.Ljava_util_SortedMap_2_classLit = createForInterface('java.util', 'SortedMap');
ju.$clinit_Collections$UnmodifiableSortedMap = function $clinit_Collections$UnmodifiableSortedMap(){
  ju.$clinit_Collections$UnmodifiableSortedMap = emptyMethod;
}
;
defineClass(276, 271, {1:1, 18:1});
cggl.Ljava_util_Collections$UnmodifiableSortedMap_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedMap', 276, cggl.Ljava_util_Collections$UnmodifiableMap_2_classLit);
ju.$clinit_SortedSet = function $clinit_SortedSet(){
  ju.$clinit_SortedSet = emptyMethod;
}
;
cggl.Ljava_util_SortedSet_2_classLit = createForInterface('java.util', 'SortedSet');
ju.$clinit_Collections$UnmodifiableSortedSet = function $clinit_Collections$UnmodifiableSortedSet(){
  ju.$clinit_Collections$UnmodifiableSortedSet = emptyMethod;
}
;
defineClass(277, 272, {1:1, 19:1});
cggl.Ljava_util_Collections$UnmodifiableSortedSet_2_classLit = createForClass('java.util', 'Collections/UnmodifiableSortedSet', 277, cggl.Ljava_util_Collections$UnmodifiableSet_2_classLit);
ju.$clinit_Comparator$lambda$0$Type = function $clinit_Comparator$lambda$0$Type(){
  ju.$clinit_Comparator$lambda$0$Type = emptyMethod;
}
;
defineClass(202, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$0$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$0$Type', 202, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$1$Type = function $clinit_Comparator$lambda$1$Type(){
  ju.$clinit_Comparator$lambda$1$Type = emptyMethod;
}
;
defineClass(203, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$1$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$1$Type', 203, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$2$Type = function $clinit_Comparator$lambda$2$Type(){
  ju.$clinit_Comparator$lambda$2$Type = emptyMethod;
}
;
defineClass(204, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$2$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$2$Type', 204, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$3$Type = function $clinit_Comparator$lambda$3$Type(){
  ju.$clinit_Comparator$lambda$3$Type = emptyMethod;
}
;
defineClass(205, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$3$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$3$Type', 205, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Comparator$lambda$4$Type = function $clinit_Comparator$lambda$4$Type(){
  ju.$clinit_Comparator$lambda$4$Type = emptyMethod;
}
;
defineClass(206, 1, {3:1, 1:1});
cggl.Ljava_util_Comparator$lambda$4$Type_2_classLit = createForClass('java.util', 'Comparator/lambda$4$Type', 206, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_ConcurrentModificationException = function $clinit_ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.ConcurrentModificationException = function ConcurrentModificationException(){
  ju.$clinit_ConcurrentModificationException();
  jl.RuntimeException.call(this);
  this.$init_132();
}
;
defineClass(184, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, ju.ConcurrentModificationException);
_.$init_132 = function $init_132(){
}
;
cggl.Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 184, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_Enumeration$1 = function $clinit_Enumeration$1(){
  ju.$clinit_Enumeration$1 = emptyMethod;
}
;
defineClass(320, 1, {1:1});
cggl.Ljava_util_Enumeration$1_2_classLit = createForClass('java.util', 'Enumeration/1', 320, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_HashMap = function $clinit_HashMap(){
  ju.$clinit_HashMap = emptyMethod;
  ju.$clinit_AbstractHashMap();
}
;
ju.HashMap = function HashMap(){
  ju.$clinit_HashMap();
  ju.AbstractHashMap.call(this);
  this.$init_133();
}
;
defineClass(69, 172, {3:1, 1:1, 18:1}, ju.HashMap);
_.$init_133 = function $init_133(){
}
;
_.equals_1 = function equals_15(value1, value2){
  return ju.equals_16(value1, value2);
}
;
_.getHashCode = function getHashCode(key){
  var hashCode;
  if (jsEquals(key, null)) {
    return 0;
  }
  hashCode = jl.hashCode__I__devirtual$(key);
  return ji2.ensureInt(hashCode);
}
;
cggl.Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 69, cggl.Ljava_util_AbstractHashMap_2_classLit);
ju.$clinit_HashSet = function $clinit_HashSet(){
  ju.$clinit_HashSet = emptyMethod;
  ju.$clinit_AbstractSet();
  jl.$clinit_Iterable();
  ju.$clinit_Collection();
  ju.$clinit_Set();
}
;
ju.HashSet = function HashSet(){
  ju.$clinit_HashSet();
  ju.AbstractSet.call(this);
  this.$init_134();
  this.map_0 = new ju.HashMap;
}
;
defineClass(175, 50, {3:1, 1:1, 19:1}, ju.HashSet);
_.$init_134 = function $init_134(){
}
;
_.add_1 = function add_8(o){
  var old;
  old = this.map_0.put(o, this);
  return jsEquals(old, null);
}
;
_.clear_0 = function clear_8(){
  this.map_0.clear_0();
}
;
_.contains_0 = function contains_6(o){
  return this.map_0.containsKey(o);
}
;
_.isEmpty_0 = function isEmpty_3(){
  return this.map_0.isEmpty_0();
}
;
_.iterator = function iterator_5(){
  return this.map_0.keySet().iterator();
}
;
_.remove_1 = function remove_15(o){
  return jsNotEquals(this.map_0.remove_2(o), null);
}
;
_.size_1 = function size_11(){
  return this.map_0.size_1();
}
;
cggl.Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 175, cggl.Ljava_util_AbstractSet_2_classLit);
ju.$clinit_InternalHashCodeMap = function $clinit_InternalHashCodeMap(){
  ju.$clinit_InternalHashCodeMap = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
}
;
ju.InternalHashCodeMap = function InternalHashCodeMap(host){
  ju.$clinit_InternalHashCodeMap();
  Object_0.call(this);
  this.$init_135();
  this.host = host;
}
;
defineClass(182, 1, {1:1}, ju.InternalHashCodeMap);
_.$init_135 = function $init_135(){
  this.backingMap = ju.newJsMap();
}
;
_.findEntryInChain = function findEntryInChain(key, chain){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = chain , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if (this.host.equals_1(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}
;
_.getChainOrEmpty = function getChainOrEmpty(hashCode){
  var chain;
  chain = ji2.uncheckedCast(this.backingMap.get(hashCode));
  return jsEquals(chain, null)?this.newEntryChain():chain;
}
;
_.getEntry = function getEntry(key){
  return this.findEntryInChain(key, this.getChainOrEmpty(this.hash_0(key)));
}
;
_.hash_0 = function hash_0(key){
  return this.host.getHashCode(key);
}
;
_.iterator = function iterator_6(){
  return new ju.InternalHashCodeMap$1(this);
}
;
_.newEntryChain = function newEntryChain(){
  ju.$clinit_InternalHashCodeMap();
  return ji2.uncheckedCast(initUnidimensionalArray(cggl.Ljava_lang_Object_2_classLit, {3:1, 1:1, 7:1}, 1, 0, 5, 1));
}
;
_.put = function put_1(key, value_0){
  var chain, entry, hashCode;
  hashCode = this.hash_0(key);
  chain = this.getChainOrEmpty(hashCode);
  if (chain.length == 0) {
    this.backingMap.set(hashCode, chain);
  }
   else {
    entry = this.findEntryInChain(key, chain);
    if (isNotNull(entry)) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new ju.AbstractMap$SimpleEntry(key, value_0));
  this.size_0++;
  this.host.structureChanged();
  return null;
}
;
_.remove_2 = function remove_16(key){
  var chain, entry, hashCode, i;
  hashCode = this.hash_0(key);
  chain = this.getChainOrEmpty(hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if (this.host.equals_1(key, entry.getKey())) {
      if (chain.length == 1) {
        ji2.setLength_0(chain, 0);
        ju.$delete_24(this.backingMap, hashCode);
      }
       else {
        ji2.removeFrom(chain, i, 1);
      }
      this.size_0--;
      this.host.structureChanged();
      return entry.getValue();
    }
  }
  return null;
}
;
_.size_1 = function size_12(){
  return this.size_0;
}
;
_.size_0 = 0;
cggl.Ljava_util_InternalHashCodeMap_2_classLit = createForClass('java.util', 'InternalHashCodeMap', 182, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalHashCodeMap$1 = function $clinit_InternalHashCodeMap$1(){
  ju.$clinit_InternalHashCodeMap$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.InternalHashCodeMap$1 = function InternalHashCodeMap$1(this$0){
  ju.$clinit_InternalHashCodeMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_136();
}
;
defineClass(183, 1, {1:1}, ju.InternalHashCodeMap$1);
_.$init_136 = function $init_136(){
  this.chains = this.this$01.backingMap.entries();
  this.itemIndex = 0;
  this.chain = this.this$01.newEntryChain();
  this.lastEntry = null;
}
;
_.next_0 = function next_5(){
  return this.next_1();
}
;
_.hasNext_0 = function hasNext_4(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = ji2.uncheckedCast(ju.$getValue(current));
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.next_1 = function next_6(){
  this.lastEntry = this.chain[this.itemIndex++];
  return this.lastEntry;
}
;
_.remove_3 = function remove_17(){
  this.this$01.remove_2(this.lastEntry.getKey());
  if (this.itemIndex != 0) {
    this.itemIndex--;
  }
}
;
_.itemIndex = 0;
cggl.Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalHashCodeMap/1', 183, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalJsMap = function $clinit_InternalJsMap(){
  ju.$clinit_InternalJsMap = emptyMethod;
}
;
ju.$delete_24 = function $delete_24(this$static, key){
  ju.$clinit_InternalJsMap();
  var fn;
  fn = ji2.getProperty(this$static, 'delete');
  fn.call(this$static, key);
}
;
ju.$delete_25 = function $delete_25(this$static, key){
  ju.$clinit_InternalJsMap();
  var fn;
  fn = ji2.getProperty(this$static, 'delete');
  fn.call(this$static, key);
}
;
ju.$clinit_InternalJsMap$DeleteFunction = function $clinit_InternalJsMap$DeleteFunction(){
  ju.$clinit_InternalJsMap$DeleteFunction = emptyMethod;
}
;
ju.$clinit_InternalJsMap$Iterator = function $clinit_InternalJsMap$Iterator(){
  ju.$clinit_InternalJsMap$Iterator = emptyMethod;
}
;
ju.$clinit_InternalJsMap$IteratorEntry = function $clinit_InternalJsMap$IteratorEntry(){
  ju.$clinit_InternalJsMap$IteratorEntry = emptyMethod;
}
;
ju.$getKey = function $getKey(this$static){
  ju.$clinit_InternalJsMap$IteratorEntry();
  return ji2.uncheckedCast(this$static.value[0]);
}
;
ju.$getValue = function $getValue(this$static){
  ju.$clinit_InternalJsMap$IteratorEntry();
  return ji2.uncheckedCast(this$static.value[1]);
}
;
ju.$clinit_InternalJsMapFactory = function $clinit_InternalJsMapFactory(){
  ju.$clinit_InternalJsMapFactory = emptyMethod;
  jl.$clinit_Object();
  ju.jsMapCtor = ju.getJsMapConstructor();
}
;
ju.canHandleObjectCreateAndProto = function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}
;
ju.getJsMapConstructor = function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && (Map.prototype.entries && isCorrectIterationProtocol())) {
    return Map;
  }
   else {
    return ju.getJsMapPolyFill();
  }
}
;
ju.getJsMapPolyFill = function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!ju.canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        if (key.charCodeAt(0) == 58) {
          result.push(key.substring(1));
        }
      }
      return result;
    }
    ;
  }
  return Stringmap;
}
;
ju.newJsMap = function newJsMap(){
  ju.$clinit_InternalJsMapFactory();
  return new ju.jsMapCtor;
}
;
defineClass(332, 1, {1:1});
cggl.Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 332, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap = function $clinit_InternalStringMap(){
  ju.$clinit_InternalStringMap = emptyMethod;
  jl.$clinit_Object();
  jl.$clinit_Iterable();
}
;
ju.InternalStringMap = function InternalStringMap(host){
  ju.$clinit_InternalStringMap();
  Object_0.call(this);
  this.$init_137();
  this.host = host;
}
;
ju.toNullIfUndefined = function toNullIfUndefined(value_0){
  return ji2.isUndefined(value_0)?null:value_0;
}
;
defineClass(178, 1, {1:1}, ju.InternalStringMap);
_.$init_137 = function $init_137(){
  this.backingMap = ju.newJsMap();
}
;
_.contains_1 = function contains_7(key){
  return !ji2.isUndefined(this.backingMap.get(key));
}
;
_.get_0 = function get_14(key){
  return this.backingMap.get(key);
}
;
_.iterator = function iterator_7(){
  return new ju.InternalStringMap$1(this);
}
;
_.newMapEntry = function newMapEntry(entry, lastValueMod){
  ju.$clinit_InternalStringMap();
  return new ju.InternalStringMap$2(this, entry, lastValueMod);
}
;
_.put_0 = function put_2(key, value_0){
  var oldValue;
  oldValue = this.backingMap.get(key);
  this.backingMap.set(key, ju.toNullIfUndefined(value_0));
  if (ji2.isUndefined(oldValue)) {
    this.size_0++;
    this.host.structureChanged();
  }
   else {
    this.valueMod++;
  }
  return oldValue;
}
;
_.remove_5 = function remove_18(key){
  var value_0;
  value_0 = this.backingMap.get(key);
  if (!ji2.isUndefined(value_0)) {
    ju.$delete_25(this.backingMap, key);
    this.size_0--;
    this.host.structureChanged();
  }
   else {
    this.valueMod++;
  }
  return value_0;
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
_.valueMod = 0;
cggl.Ljava_util_InternalStringMap_2_classLit = createForClass('java.util', 'InternalStringMap', 178, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap$1 = function $clinit_InternalStringMap$1(){
  ju.$clinit_InternalStringMap$1 = emptyMethod;
  jl.$clinit_Object();
  ju.$clinit_Iterator();
}
;
ju.InternalStringMap$1 = function InternalStringMap$1(this$0){
  ju.$clinit_InternalStringMap$1();
  this.this$01 = this$0;
  Object_0.call(this);
  this.$init_138();
}
;
defineClass(179, 1, {1:1}, ju.InternalStringMap$1);
_.$init_138 = function $init_138(){
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}
;
_.next_0 = function next_7(){
  return this.next_1();
}
;
_.hasNext_0 = function hasNext_5(){
  return !this.current.done;
}
;
_.next_1 = function next_8(){
  this.last = this.current;
  this.current = this.entries_0.next();
  return this.this$01.newMapEntry(this.last, this.this$01.valueMod);
}
;
_.remove_3 = function remove_19(){
  this.this$01.remove_5(ju.$getKey(this.last));
}
;
cggl.Ljava_util_InternalStringMap$1_2_classLit = createForClass('java.util', 'InternalStringMap/1', 179, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_InternalStringMap$2 = function $clinit_InternalStringMap$2(){
  ju.$clinit_InternalStringMap$2 = emptyMethod;
  ju.$clinit_AbstractMapEntry();
}
;
ju.InternalStringMap$2 = function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  ju.$clinit_InternalStringMap$2();
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
  ju.AbstractMapEntry.call(this);
  this.$init_139();
}
;
defineClass(181, 180, {1:1, 10:1}, ju.InternalStringMap$2);
_.$init_139 = function $init_139(){
}
;
_.getKey = function getKey_0(){
  return ju.$getKey(this.val$entry2);
}
;
_.getValue = function getValue_0(){
  if (this.this$01.valueMod != this.val$lastValueMod3) {
    return this.this$01.get_0(ju.$getKey(this.val$entry2));
  }
  return ju.$getValue(this.val$entry2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put_0(ju.$getKey(this.val$entry2), object);
}
;
_.val$lastValueMod3 = 0;
cggl.Ljava_util_InternalStringMap$2_2_classLit = createForClass('java.util', 'InternalStringMap/2', 181, cggl.Ljava_util_AbstractMapEntry_2_classLit);
ju.$clinit_Locale = function $clinit_Locale(){
  ju.$clinit_Locale = emptyMethod;
  jl.$clinit_Object();
  ju.ROOT = new ju.Locale$1;
  ju.ENGLISH = new ju.Locale$2;
  ju.US = new ju.Locale$3;
  ju.defaultLocale = new ju.Locale$4;
}
;
ju.Locale = function Locale(){
  ju.$clinit_Locale();
  Object_0.call(this);
  this.$init_140();
}
;
ju.getDefault = function getDefault(){
  ju.$clinit_Locale();
  return ju.defaultLocale;
}
;
defineClass(47, 1, {1:1});
_.$init_140 = function $init_140(){
}
;
cggl.Ljava_util_Locale_2_classLit = createForClass('java.util', 'Locale', 47, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Locale$1 = function $clinit_Locale$1(){
  ju.$clinit_Locale$1 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$1 = function Locale$1(){
  ju.$clinit_Locale$1();
  ju.Locale.call(this);
  this.$init_141();
}
;
defineClass(128, 47, {1:1}, ju.Locale$1);
_.$init_141 = function $init_141(){
}
;
_.toString_0 = function toString_35(){
  return '';
}
;
cggl.Ljava_util_Locale$1_2_classLit = createForClass('java.util', 'Locale/1', 128, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$2 = function $clinit_Locale$2(){
  ju.$clinit_Locale$2 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$2 = function Locale$2(){
  ju.$clinit_Locale$2();
  ju.Locale.call(this);
  this.$init_142();
}
;
defineClass(129, 47, {1:1}, ju.Locale$2);
_.$init_142 = function $init_142(){
}
;
_.toString_0 = function toString_36(){
  return 'en';
}
;
cggl.Ljava_util_Locale$2_2_classLit = createForClass('java.util', 'Locale/2', 129, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$3 = function $clinit_Locale$3(){
  ju.$clinit_Locale$3 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$3 = function Locale$3(){
  ju.$clinit_Locale$3();
  ju.Locale.call(this);
  this.$init_143();
}
;
defineClass(130, 47, {1:1}, ju.Locale$3);
_.$init_143 = function $init_143(){
}
;
_.toString_0 = function toString_37(){
  return 'en_US';
}
;
cggl.Ljava_util_Locale$3_2_classLit = createForClass('java.util', 'Locale/3', 130, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Locale$4 = function $clinit_Locale$4(){
  ju.$clinit_Locale$4 = emptyMethod;
  ju.$clinit_Locale();
}
;
ju.Locale$4 = function Locale$4(){
  ju.$clinit_Locale$4();
  ju.Locale.call(this);
  this.$init_144();
}
;
defineClass(131, 47, {1:1}, ju.Locale$4);
_.$init_144 = function $init_144(){
}
;
_.toString_0 = function toString_38(){
  return 'unknown';
}
;
cggl.Ljava_util_Locale$4_2_classLit = createForClass('java.util', 'Locale/4', 131, cggl.Ljava_util_Locale_2_classLit);
ju.$clinit_Map$Entry$lambda$0$Type = function $clinit_Map$Entry$lambda$0$Type(){
  ju.$clinit_Map$Entry$lambda$0$Type = emptyMethod;
}
;
defineClass(286, 1, {3:1, 1:1});
cggl.Ljava_util_Map$Entry$lambda$0$Type_2_classLit = createForClass('java.util', 'Map/Entry/lambda$0$Type', 286, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Map$Entry$lambda$1$Type = function $clinit_Map$Entry$lambda$1$Type(){
  ju.$clinit_Map$Entry$lambda$1$Type = emptyMethod;
}
;
defineClass(287, 1, {3:1, 1:1});
cggl.Ljava_util_Map$Entry$lambda$1$Type_2_classLit = createForClass('java.util', 'Map/Entry/lambda$1$Type', 287, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_NoSuchElementException = function $clinit_NoSuchElementException(){
  ju.$clinit_NoSuchElementException = emptyMethod;
  jl.$clinit_RuntimeException();
}
;
ju.NoSuchElementException = function NoSuchElementException(){
  ju.$clinit_NoSuchElementException();
  jl.RuntimeException.call(this);
  this.$init_145();
}
;
defineClass(65, 5, {3:1, 6:1, 1:1, 5:1, 4:1}, ju.NoSuchElementException);
_.$init_145 = function $init_145(){
}
;
cggl.Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 65, cggl.Ljava_lang_RuntimeException_2_classLit);
ju.$clinit_Objects = function $clinit_Objects(){
  ju.$clinit_Objects = emptyMethod;
  jl.$clinit_Object();
}
;
ju.equals_16 = function equals_16(a, b){
  ju.$clinit_Objects();
  return maskUndefined(a) === maskUndefined(b) || jsNotEquals(a, null) && jl.equals_Ljava_lang_Object__Z__devirtual$(a, b);
}
;
ju.equals_17 = function equals_17(a, b){
  ju.$clinit_Objects();
  return jsEquals(a, b);
}
;
ju.hash_1 = function hash_1(values){
  ju.$clinit_Objects();
  return ju.hashCode_24(values);
}
;
ju.hashCode_27 = function hashCode_27(o){
  ju.$clinit_Objects();
  return jsNotEquals(o, null)?jl.hashCode__I__devirtual$(o):0;
}
;
defineClass(263, 1, {1:1});
cggl.Ljava_util_Objects_2_classLit = createForClass('java.util', 'Objects', 263, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_PrimitiveIterator$OfDouble = function $clinit_PrimitiveIterator$OfDouble(){
  ju.$clinit_PrimitiveIterator$OfDouble = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator$OfDouble_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfDouble');
juf.$clinit_DoubleConsumer = function $clinit_DoubleConsumer(){
  juf.$clinit_DoubleConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_DoubleConsumer_2_classLit = createForInterface('java.util.function', 'DoubleConsumer');
ju.$clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type = function $clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfDouble$0methodref$accept$Type = emptyMethod;
}
;
defineClass(195, 1, {1:1});
cggl.Ljava_util_PrimitiveIterator$OfDouble$0methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfDouble/0methodref$accept$Type', 195, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntConsumer = function $clinit_IntConsumer(){
  juf.$clinit_IntConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_IntConsumer_2_classLit = createForInterface('java.util.function', 'IntConsumer');
ju.$clinit_PrimitiveIterator$OfInt$1methodref$accept$Type = function $clinit_PrimitiveIterator$OfInt$1methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfInt$1methodref$accept$Type = emptyMethod;
}
;
defineClass(196, 1, {1:1});
cggl.Ljava_util_PrimitiveIterator$OfInt$1methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfInt/1methodref$accept$Type', 196, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_PrimitiveIterator$OfLong = function $clinit_PrimitiveIterator$OfLong(){
  ju.$clinit_PrimitiveIterator$OfLong = emptyMethod;
}
;
cggl.Ljava_util_PrimitiveIterator$OfLong_2_classLit = createForInterface('java.util', 'PrimitiveIterator/OfLong');
juf.$clinit_LongConsumer = function $clinit_LongConsumer(){
  juf.$clinit_LongConsumer = emptyMethod;
}
;
cggl.Ljava_util_function_LongConsumer_2_classLit = createForInterface('java.util.function', 'LongConsumer');
ju.$clinit_PrimitiveIterator$OfLong$2methodref$accept$Type = function $clinit_PrimitiveIterator$OfLong$2methodref$accept$Type(){
  ju.$clinit_PrimitiveIterator$OfLong$2methodref$accept$Type = emptyMethod;
}
;
defineClass(197, 1, {1:1});
cggl.Ljava_util_PrimitiveIterator$OfLong$2methodref$accept$Type_2_classLit = createForClass('java.util', 'PrimitiveIterator/OfLong/2methodref$accept$Type', 197, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator = function $clinit_Spliterator(){
  ju.$clinit_Spliterator = emptyMethod;
}
;
cggl.Ljava_util_Spliterator_2_classLit = createForInterface('java.util', 'Spliterator');
ju.$clinit_Spliterators$IteratorSpliterator = function $clinit_Spliterators$IteratorSpliterator(){
  ju.$clinit_Spliterators$IteratorSpliterator = emptyMethod;
}
;
defineClass(288, 1, {1:1});
cggl.Ljava_util_Spliterators$IteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IteratorSpliterator', 288, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_SortedSet$1 = function $clinit_SortedSet$1(){
  ju.$clinit_SortedSet$1 = emptyMethod;
}
;
defineClass(289, 288, {1:1});
cggl.Ljava_util_SortedSet$1_2_classLit = createForClass('java.util', 'SortedSet/1', 289, cggl.Ljava_util_Spliterators$IteratorSpliterator_2_classLit);
ju.$clinit_Spliterator$OfPrimitive = function $clinit_Spliterator$OfPrimitive(){
  ju.$clinit_Spliterator$OfPrimitive = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfPrimitive_2_classLit = createForInterface('java.util', 'Spliterator/OfPrimitive');
ju.$clinit_Spliterator$OfDouble = function $clinit_Spliterator$OfDouble(){
  ju.$clinit_Spliterator$OfDouble = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfDouble_2_classLit = createForInterface('java.util', 'Spliterator/OfDouble');
ju.$clinit_Spliterator$OfDouble$0methodref$accept$Type = function $clinit_Spliterator$OfDouble$0methodref$accept$Type(){
  ju.$clinit_Spliterator$OfDouble$0methodref$accept$Type = emptyMethod;
}
;
defineClass(313, 1, {1:1});
cggl.Ljava_util_Spliterator$OfDouble$0methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfDouble/0methodref$accept$Type', 313, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfDouble$1methodref$accept$Type = function $clinit_Spliterator$OfDouble$1methodref$accept$Type(){
  ju.$clinit_Spliterator$OfDouble$1methodref$accept$Type = emptyMethod;
}
;
defineClass(314, 1, {1:1});
cggl.Ljava_util_Spliterator$OfDouble$1methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfDouble/1methodref$accept$Type', 314, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfInt = function $clinit_Spliterator$OfInt(){
  ju.$clinit_Spliterator$OfInt = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfInt_2_classLit = createForInterface('java.util', 'Spliterator/OfInt');
ju.$clinit_Spliterator$OfInt$2methodref$accept$Type = function $clinit_Spliterator$OfInt$2methodref$accept$Type(){
  ju.$clinit_Spliterator$OfInt$2methodref$accept$Type = emptyMethod;
}
;
defineClass(315, 1, {1:1});
cggl.Ljava_util_Spliterator$OfInt$2methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/2methodref$accept$Type', 315, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfInt$3methodref$accept$Type = function $clinit_Spliterator$OfInt$3methodref$accept$Type(){
  ju.$clinit_Spliterator$OfInt$3methodref$accept$Type = emptyMethod;
}
;
defineClass(316, 1, {1:1});
cggl.Ljava_util_Spliterator$OfInt$3methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfInt/3methodref$accept$Type', 316, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfLong = function $clinit_Spliterator$OfLong(){
  ju.$clinit_Spliterator$OfLong = emptyMethod;
}
;
cggl.Ljava_util_Spliterator$OfLong_2_classLit = createForInterface('java.util', 'Spliterator/OfLong');
ju.$clinit_Spliterator$OfLong$4methodref$accept$Type = function $clinit_Spliterator$OfLong$4methodref$accept$Type(){
  ju.$clinit_Spliterator$OfLong$4methodref$accept$Type = emptyMethod;
}
;
defineClass(317, 1, {1:1});
cggl.Ljava_util_Spliterator$OfLong$4methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfLong/4methodref$accept$Type', 317, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterator$OfLong$5methodref$accept$Type = function $clinit_Spliterator$OfLong$5methodref$accept$Type(){
  ju.$clinit_Spliterator$OfLong$5methodref$accept$Type = emptyMethod;
}
;
defineClass(318, 1, {1:1});
cggl.Ljava_util_Spliterator$OfLong$5methodref$accept$Type_2_classLit = createForClass('java.util', 'Spliterator/OfLong/5methodref$accept$Type', 318, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators = function $clinit_Spliterators(){
  ju.$clinit_Spliterators = emptyMethod;
}
;
defineClass(290, 1, {1:1});
cggl.Ljava_util_Spliterators_2_classLit = createForClass('java.util', 'Spliterators', 290, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$BaseSpliterator = function $clinit_Spliterators$BaseSpliterator(){
  ju.$clinit_Spliterators$BaseSpliterator = emptyMethod;
}
;
defineClass(291, 1, {1:1});
cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseSpliterator', 291, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$AbstractDoubleSpliterator = function $clinit_Spliterators$AbstractDoubleSpliterator(){
  ju.$clinit_Spliterators$AbstractDoubleSpliterator = emptyMethod;
}
;
defineClass(293, 291, {1:1});
cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractDoubleSpliterator', 293, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractIntSpliterator = function $clinit_Spliterators$AbstractIntSpliterator(){
  ju.$clinit_Spliterators$AbstractIntSpliterator = emptyMethod;
}
;
defineClass(294, 291, {1:1});
cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractIntSpliterator', 294, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractLongSpliterator = function $clinit_Spliterators$AbstractLongSpliterator(){
  ju.$clinit_Spliterators$AbstractLongSpliterator = emptyMethod;
}
;
defineClass(295, 291, {1:1});
cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractLongSpliterator', 295, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$AbstractSpliterator = function $clinit_Spliterators$AbstractSpliterator(){
  ju.$clinit_Spliterators$AbstractSpliterator = emptyMethod;
}
;
defineClass(292, 291, {1:1});
cggl.Ljava_util_Spliterators$AbstractSpliterator_2_classLit = createForClass('java.util', 'Spliterators/AbstractSpliterator', 292, cggl.Ljava_util_Spliterators$BaseSpliterator_2_classLit);
ju.$clinit_Spliterators$BaseArraySpliterator = function $clinit_Spliterators$BaseArraySpliterator(){
  ju.$clinit_Spliterators$BaseArraySpliterator = emptyMethod;
}
;
defineClass(308, 1, {1:1});
cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/BaseArraySpliterator', 308, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$ArraySpliterator = function $clinit_Spliterators$ArraySpliterator(){
  ju.$clinit_Spliterators$ArraySpliterator = emptyMethod;
}
;
defineClass(309, 308, {1:1});
cggl.Ljava_util_Spliterators$ArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/ArraySpliterator', 309, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
juf.$clinit_Consumer = function $clinit_Consumer(){
  juf.$clinit_Consumer = emptyMethod;
}
;
cggl.Ljava_util_function_Consumer_2_classLit = createForInterface('java.util.function', 'Consumer');
ju.$clinit_Spliterators$ConsumerIterator = function $clinit_Spliterators$ConsumerIterator(){
  ju.$clinit_Spliterators$ConsumerIterator = emptyMethod;
}
;
defineClass(301, 1, {1:1});
cggl.Ljava_util_Spliterators$ConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/ConsumerIterator', 301, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$DoubleArraySpliterator = function $clinit_Spliterators$DoubleArraySpliterator(){
  ju.$clinit_Spliterators$DoubleArraySpliterator = emptyMethod;
}
;
defineClass(310, 308, {1:1});
cggl.Ljava_util_Spliterators$DoubleArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleArraySpliterator', 310, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$DoubleConsumerIterator = function $clinit_Spliterators$DoubleConsumerIterator(){
  ju.$clinit_Spliterators$DoubleConsumerIterator = emptyMethod;
}
;
defineClass(302, 1, {1:1});
cggl.Ljava_util_Spliterators$DoubleConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleConsumerIterator', 302, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$DoubleIteratorSpliterator = function $clinit_Spliterators$DoubleIteratorSpliterator(){
  ju.$clinit_Spliterators$DoubleIteratorSpliterator = emptyMethod;
}
;
defineClass(305, 293, {1:1});
cggl.Ljava_util_Spliterators$DoubleIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/DoubleIteratorSpliterator', 305, cggl.Ljava_util_Spliterators$AbstractDoubleSpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator = function $clinit_Spliterators$EmptySpliterator(){
  ju.$clinit_Spliterators$EmptySpliterator = emptyMethod;
}
;
defineClass(296, 1, {1:1});
cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator', 296, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfDouble = function $clinit_Spliterators$EmptySpliterator$OfDouble(){
  ju.$clinit_Spliterators$EmptySpliterator$OfDouble = emptyMethod;
}
;
defineClass(298, 296, {1:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfDouble_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfDouble', 298, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfInt = function $clinit_Spliterators$EmptySpliterator$OfInt(){
  ju.$clinit_Spliterators$EmptySpliterator$OfInt = emptyMethod;
}
;
defineClass(299, 296, {1:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfInt_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfInt', 299, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfLong = function $clinit_Spliterators$EmptySpliterator$OfLong(){
  ju.$clinit_Spliterators$EmptySpliterator$OfLong = emptyMethod;
}
;
defineClass(300, 296, {1:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfLong_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfLong', 300, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$EmptySpliterator$OfRef = function $clinit_Spliterators$EmptySpliterator$OfRef(){
  ju.$clinit_Spliterators$EmptySpliterator$OfRef = emptyMethod;
}
;
defineClass(297, 296, {1:1});
cggl.Ljava_util_Spliterators$EmptySpliterator$OfRef_2_classLit = createForClass('java.util', 'Spliterators/EmptySpliterator/OfRef', 297, cggl.Ljava_util_Spliterators$EmptySpliterator_2_classLit);
ju.$clinit_Spliterators$IntArraySpliterator = function $clinit_Spliterators$IntArraySpliterator(){
  ju.$clinit_Spliterators$IntArraySpliterator = emptyMethod;
}
;
defineClass(311, 308, {1:1});
cggl.Ljava_util_Spliterators$IntArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntArraySpliterator', 311, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$IntConsumerIterator = function $clinit_Spliterators$IntConsumerIterator(){
  ju.$clinit_Spliterators$IntConsumerIterator = emptyMethod;
}
;
defineClass(303, 1, {1:1});
cggl.Ljava_util_Spliterators$IntConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/IntConsumerIterator', 303, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$IntIteratorSpliterator = function $clinit_Spliterators$IntIteratorSpliterator(){
  ju.$clinit_Spliterators$IntIteratorSpliterator = emptyMethod;
}
;
defineClass(306, 294, {1:1});
cggl.Ljava_util_Spliterators$IntIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/IntIteratorSpliterator', 306, cggl.Ljava_util_Spliterators$AbstractIntSpliterator_2_classLit);
ju.$clinit_Spliterators$LongArraySpliterator = function $clinit_Spliterators$LongArraySpliterator(){
  ju.$clinit_Spliterators$LongArraySpliterator = emptyMethod;
}
;
defineClass(312, 308, {1:1});
cggl.Ljava_util_Spliterators$LongArraySpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongArraySpliterator', 312, cggl.Ljava_util_Spliterators$BaseArraySpliterator_2_classLit);
ju.$clinit_Spliterators$LongConsumerIterator = function $clinit_Spliterators$LongConsumerIterator(){
  ju.$clinit_Spliterators$LongConsumerIterator = emptyMethod;
}
;
defineClass(304, 1, {1:1});
cggl.Ljava_util_Spliterators$LongConsumerIterator_2_classLit = createForClass('java.util', 'Spliterators/LongConsumerIterator', 304, cggl.Ljava_lang_Object_2_classLit);
ju.$clinit_Spliterators$LongIteratorSpliterator = function $clinit_Spliterators$LongIteratorSpliterator(){
  ju.$clinit_Spliterators$LongIteratorSpliterator = emptyMethod;
}
;
defineClass(307, 295, {1:1});
cggl.Ljava_util_Spliterators$LongIteratorSpliterator_2_classLit = createForClass('java.util', 'Spliterators/LongIteratorSpliterator', 307, cggl.Ljava_util_Spliterators$AbstractLongSpliterator_2_classLit);
ju.$clinit_StringJoiner = function $clinit_StringJoiner(){
  ju.$clinit_StringJoiner = emptyMethod;
  jl.$clinit_Object();
}
;
ju.StringJoiner = function StringJoiner(delimiter){
  ju.$clinit_StringJoiner();
  ju.StringJoiner_0.call(this, delimiter, '', '');
}
;
ju.StringJoiner_0 = function StringJoiner_0(delimiter, prefix, suffix){
  ju.$clinit_StringJoiner();
  Object_0.call(this);
  this.$init_146();
  this.delimiter = toString_11(delimiter);
  this.prefix = toString_11(prefix);
  this.suffix = toString_11(suffix);
  this.emptyValue = this.prefix + ('' + this.suffix);
}
;
defineClass(32, 1, {1:1}, ju.StringJoiner, ju.StringJoiner_0);
_.$init_146 = function $init_146(){
}
;
_.add_3 = function add_9(newElement){
  this.initBuilderOrAddDelimiter();
  this.builder.append_0(newElement);
  return this;
}
;
_.initBuilderOrAddDelimiter = function initBuilderOrAddDelimiter(){
  if (isNull(this.builder)) {
    this.builder = new jl.StringBuilder_0(this.prefix);
  }
   else {
    this.builder.append_1(this.delimiter);
  }
}
;
_.length_0 = function length_2(){
  if (isNull(this.builder)) {
    return jl.length__I__devirtual$_0(this.emptyValue);
  }
  return this.builder.length_0() + jl.length__I__devirtual$_0(this.suffix);
}
;
_.toString_0 = function toString_39(){
  if (isNull(this.builder)) {
    return this.emptyValue;
  }
   else if (jl.isEmpty__Z__devirtual$(this.suffix)) {
    return this.builder.toString_0();
  }
   else {
    return this.builder.toString_0() + ('' + this.suffix);
  }
}
;
cggl.Ljava_util_StringJoiner_2_classLit = createForClass('java.util', 'StringJoiner', 32, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_Consumer$lambda$0$Type = function $clinit_Consumer$lambda$0$Type(){
  juf.$clinit_Consumer$lambda$0$Type = emptyMethod;
}
;
defineClass(319, 1, {1:1});
cggl.Ljava_util_function_Consumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'Consumer/lambda$0$Type', 319, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_DoubleConsumer$lambda$0$Type = function $clinit_DoubleConsumer$lambda$0$Type(){
  juf.$clinit_DoubleConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(199, 1, {1:1});
cggl.Ljava_util_function_DoubleConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'DoubleConsumer/lambda$0$Type', 199, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_IntConsumer$lambda$0$Type = function $clinit_IntConsumer$lambda$0$Type(){
  juf.$clinit_IntConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(200, 1, {1:1});
cggl.Ljava_util_function_IntConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'IntConsumer/lambda$0$Type', 200, cggl.Ljava_lang_Object_2_classLit);
juf.$clinit_LongConsumer$lambda$0$Type = function $clinit_LongConsumer$lambda$0$Type(){
  juf.$clinit_LongConsumer$lambda$0$Type = emptyMethod;
}
;
defineClass(201, 1, {1:1});
cggl.Ljava_util_function_LongConsumer$lambda$0$Type_2_classLit = createForClass('java.util.function', 'LongConsumer/lambda$0$Type', 201, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_ArrayHelper = function $clinit_ArrayHelper(){
  ji2.$clinit_ArrayHelper = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.asNativeArray = function asNativeArray(array){
  return ji2.uncheckedCast(array);
}
;
ji2.clone = function clone(array){
  ji2.$clinit_ArrayHelper();
  var result;
  result = ji2.asNativeArray(array).slice();
  return ji2.stampJavaTypeInfo_1(result, array);
}
;
ji2.copy_0 = function copy_0(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, destArray, end, spliceArgs;
  if (len == 0) {
    return;
  }
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = ji2.unsafeClone(src_0, srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  destArray = ji2.asNativeArray(dest);
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = $wnd.Math.min(batchStart + 10000, end);
    len = batchEnd - batchStart;
    spliceArgs = ji2.unsafeClone(src_0, batchStart, batchEnd);
    ji2.asNativeArray(spliceArgs).splice(0, 0, jl.valueOf_6(destOfs), jl.valueOf_6(overwrite?len:0));
    Array.prototype.splice.apply(destArray, spliceArgs);
    batchStart = batchEnd;
    destOfs += len;
  }
}
;
ji2.createFrom = function createFrom(array, length_0){
  ji2.$clinit_ArrayHelper();
  return ji2.stampJavaTypeInfo_1(new Array(length_0), array);
}
;
ji2.insertTo = function insertTo(array, index_0, value_0){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).splice(index_0, 0, value_0);
}
;
ji2.insertTo_0 = function insertTo_0(array, index_0, values){
  ji2.$clinit_ArrayHelper();
  ji2.copy_0(values, 0, array, index_0, values.length, false);
}
;
ji2.push_1 = function push_1(array, o){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).push(o);
}
;
ji2.push_2 = function push_2(array, o){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).push(o);
}
;
ji2.removeFrom = function removeFrom(array, index_0, deleteCount){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).splice(index_0, deleteCount);
}
;
ji2.setLength_0 = function setLength_0(array, length_0){
  ji2.$clinit_ArrayHelper();
  ji2.asNativeArray(array).length = length_0;
}
;
ji2.unsafeClone = function unsafeClone(array, fromIndex, toIndex){
  ji2.$clinit_ArrayHelper();
  return ji2.asNativeArray(array).slice(fromIndex, toIndex);
}
;
defineClass(254, 1, {1:1});
ji2.ARRAY_PROCESS_BATCH_SIZE = 10000;
cggl.Ljavaemul_internal_ArrayHelper_2_classLit = createForClass('javaemul.internal', 'ArrayHelper', 254, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_ArrayHelper$NativeArray = function $clinit_ArrayHelper$NativeArray(){
  ji2.$clinit_ArrayHelper$NativeArray = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_ArrayHelper$NativeFunction = function $clinit_ArrayHelper$NativeFunction(){
  ji2.$clinit_ArrayHelper$NativeFunction = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_ArrayStamper = function $clinit_ArrayStamper(){
  ji2.$clinit_ArrayStamper = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.stampJavaTypeInfo_1 = function stampJavaTypeInfo_1(array, referenceType){
  ji2.$clinit_ArrayStamper();
  return cggl.stampJavaTypeInfo_0(array, referenceType);
}
;
defineClass(245, 1, {1:1});
cggl.Ljavaemul_internal_ArrayStamper_2_classLit = createForClass('javaemul.internal', 'ArrayStamper', 245, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_Coercions = function $clinit_Coercions(){
  ji2.$clinit_Coercions = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.ensureInt = function ensureInt(value_0){
  ji2.$clinit_Coercions();
  return value_0 | 0;
}
;
defineClass(239, 1, {1:1});
cggl.Ljavaemul_internal_Coercions_2_classLit = createForClass('javaemul.internal', 'Coercions', 239, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_EmulatedCharset = function $clinit_EmulatedCharset(){
  ji2.$clinit_EmulatedCharset = emptyMethod;
  jnc.$clinit_Charset();
  ji2.UTF_8 = new ji2.EmulatedCharset$UtfCharset('UTF-8');
  ji2.ISO_LATIN_1 = new ji2.EmulatedCharset$LatinCharset('ISO-LATIN-1');
  ji2.ISO_8859_1 = new ji2.EmulatedCharset$LatinCharset('ISO-8859-1');
}
;
ji2.EmulatedCharset = function EmulatedCharset(name_0){
  ji2.$clinit_EmulatedCharset();
  jnc.Charset.call(this, name_0, null);
  this.$init_147();
}
;
defineClass(21, 20, {11:1, 1:1, 20:1, 21:1});
_.$init_147 = function $init_147(){
}
;
cggl.Ljavaemul_internal_EmulatedCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset', 21, cggl.Ljava_nio_charset_Charset_2_classLit);
ji2.$clinit_EmulatedCharset$LatinCharset = function $clinit_EmulatedCharset$LatinCharset(){
  ji2.$clinit_EmulatedCharset$LatinCharset = emptyMethod;
  ji2.$clinit_EmulatedCharset();
}
;
ji2.EmulatedCharset$LatinCharset = function EmulatedCharset$LatinCharset(name_0){
  ji2.$clinit_EmulatedCharset$LatinCharset();
  ji2.EmulatedCharset.call(this, name_0);
  this.$init_148();
}
;
defineClass(79, 21, {11:1, 1:1, 20:1, 21:1}, ji2.EmulatedCharset$LatinCharset);
_.$init_148 = function $init_148(){
}
;
_.decodeString = function decodeString(bytes, ofs, len){
  var chars, i;
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 15, len, 15, 1);
  for (i = 0; i < len; ++i) {
    chars[i] = narrow_char(bytes[ofs + i] & 255);
  }
  return chars;
}
;
_.getBytes = function getBytes(str){
  var bytes, i, n;
  n = jl.length__I__devirtual$_0(str);
  bytes = initUnidimensionalArray(cggl.B_classLit, {3:1, 1:1}, 15, n, 15, 1);
  for (i = 0; i < n; ++i) {
    bytes[i] = narrow_byte(jl.charAt_I_C__devirtual$_0(str, i) & 255);
  }
  return bytes;
}
;
cggl.Ljavaemul_internal_EmulatedCharset$LatinCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/LatinCharset', 79, cggl.Ljavaemul_internal_EmulatedCharset_2_classLit);
ji2.$clinit_EmulatedCharset$UtfCharset = function $clinit_EmulatedCharset$UtfCharset(){
  ji2.$clinit_EmulatedCharset$UtfCharset = emptyMethod;
  ji2.$clinit_EmulatedCharset();
}
;
ji2.EmulatedCharset$UtfCharset = function EmulatedCharset$UtfCharset(name_0){
  ji2.$clinit_EmulatedCharset$UtfCharset();
  ji2.EmulatedCharset.call(this, name_0);
  this.$init_149();
}
;
defineClass(136, 21, {11:1, 1:1, 20:1, 21:1}, ji2.EmulatedCharset$UtfCharset);
_.$init_149 = function $init_149(){
}
;
_.decodeString = function decodeString_0(bytes, ofs, len){
  var b, ch_0, charCount, chars, count, i, i0, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[ofs + i0];
    if ((ch_0 & 192) == 128) {
      throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
    if (i0 > len) {
      throw toJs(new jl.IndexOutOfBoundsException_0('Invalid UTF8 sequence'));
    }
  }
  chars = initUnidimensionalArray(cggl.C_classLit, {3:1, 1:1}, 15, charCount, 15, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[ofs + i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[ofs + i++];
      if ((b & 192) != 128) {
        throw toJs(new jl.IllegalArgumentException_0('Invalid UTF8 sequence at ' + (ofs + i - 1) + ', byte=' + toHexString(b)));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return chars;
}
;
_.encodeUtf8 = function encodeUtf8(bytes, codePoint){
  if (codePoint < 1 << 7) {
    ji2.push_1(bytes, narrow_byte(codePoint & 127));
  }
   else if (codePoint < 1 << 11) {
    ji2.push_1(bytes, narrow_byte(codePoint >> 6 & 31 | 192));
    ji2.push_1(bytes, narrow_byte(codePoint & 63 | 128));
  }
   else if (codePoint < 1 << 16) {
    ji2.push_1(bytes, narrow_byte(codePoint >> 12 & 15 | 224));
    ji2.push_1(bytes, narrow_byte(codePoint >> 6 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint & 63 | 128));
  }
   else if (codePoint < 1 << 21) {
    ji2.push_1(bytes, narrow_byte(codePoint >> 18 & 7 | 240));
    ji2.push_1(bytes, narrow_byte(codePoint >> 12 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint >> 6 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint & 63 | 128));
  }
   else if (codePoint < 1 << 26) {
    ji2.push_1(bytes, narrow_byte(codePoint >> 24 & 3 | 248));
    ji2.push_1(bytes, narrow_byte(codePoint >> 18 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint >> 12 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint >> 6 & 63 | 128));
    ji2.push_1(bytes, narrow_byte(codePoint & 63 | 128));
  }
   else {
    throw toJs(new jl.IllegalArgumentException_0('Character out of range: ' + codePoint));
  }
}
;
_.getBytes = function getBytes_0(str){
  var bytes, ch_0, i, n;
  n = jl.length__I__devirtual$_0(str);
  bytes = initUnidimensionalArray(cggl.B_classLit, {3:1, 1:1}, 15, 0, 15, 1);
  for (i = 0; i < n;) {
    ch_0 = jl.codePointAt_I_I__devirtual$(str, i);
    i += charCount_0(ch_0);
    this.encodeUtf8(bytes, ch_0);
  }
  return bytes;
}
;
cggl.Ljavaemul_internal_EmulatedCharset$UtfCharset_2_classLit = createForClass('javaemul.internal', 'EmulatedCharset/UtfCharset', 136, cggl.Ljavaemul_internal_EmulatedCharset_2_classLit);
ji2.$clinit_HashCodes = function $clinit_HashCodes(){
  ji2.$clinit_HashCodes = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.getNextHash = function getNextHash(){
  return ++ji2.nextHash;
}
;
ji2.getObjectIdentityHashCode = function getObjectIdentityHashCode(o){
  ji2.$clinit_HashCodes();
  return o.$H || (o.$H = ji2.getNextHash());
}
;
defineClass(237, 1, {1:1});
ji2.nextHash = 0;
cggl.Ljavaemul_internal_HashCodes_2_classLit = createForClass('javaemul.internal', 'HashCodes', 237, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_InternalPreconditions = function $clinit_InternalPreconditions(){
  ji2.$clinit_InternalPreconditions = emptyMethod;
  jl.$clinit_Object();
  ji2.LEVEL_NORMAL_OR_HIGHER = jsEquals('NORMAL', 'NORMAL');
  ji2.LEVEL_OPT_OR_HIGHER = jsEquals('NORMAL', 'OPTIMIZED') || jsEquals('NORMAL', 'NORMAL');
  ji2.LEVEL_MINIMAL_OR_HIGHER = jsEquals('NORMAL', 'MINIMAL') || jsEquals('NORMAL', 'OPTIMIZED') || jsEquals('NORMAL', 'NORMAL');
  {
    if (!ji2.LEVEL_MINIMAL_OR_HIGHER) {
      throw toJs(new jl.IllegalStateException_0('Incorrect level: ' + 'NORMAL'));
    }
  }
  ji2.IS_TYPE_CHECKED = jsEquals(ji2.CHECK_TYPE, 'AUTO') && ji2.LEVEL_OPT_OR_HIGHER || jsEquals(ji2.CHECK_TYPE, 'ENABLED');
  ji2.IS_BOUNDS_CHECKED = jsEquals(ji2.CHECK_BOUNDS, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_BOUNDS, 'ENABLED');
  ji2.IS_API_CHECKED = jsEquals(ji2.CHECK_API, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_API, 'ENABLED');
  ji2.IS_NUMERIC_CHECKED = jsEquals(ji2.CHECK_NUMERIC, 'AUTO') && ji2.LEVEL_NORMAL_OR_HIGHER || jsEquals(ji2.CHECK_NUMERIC, 'ENABLED');
  ji2.IS_ASSERTED = jsEquals('DISABLED', 'ENABLED');
}
;
ji2.checkArgument = function checkArgument(expression, errorMessage){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalArgument_0(expression, errorMessage);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalArgument_0(expression, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkArrayType = function checkArrayType(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_TYPE_CHECKED) {
    ji2.checkCriticalArrayType(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalArrayType(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkConcurrentModification = function checkConcurrentModification(currentModCount, recordedModCount){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalConcurrentModification(currentModCount, recordedModCount);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalConcurrentModification(currentModCount, recordedModCount);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkCriticalArgument = function checkCriticalArgument(expression){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new jl.IllegalArgumentException);
  }
}
;
ji2.checkCriticalArgument_0 = function checkCriticalArgument_0(expression, errorMessage){
  ji2.$clinit_InternalPreconditions();
  if (!expression) {
    throw toJs(new jl.IllegalArgumentException_0(valueOf_17(errorMessage)));
  }
}
;
ji2.checkCriticalArrayType = function checkCriticalArrayType(expression){
  if (!expression) {
    throw toJs(new jl.ArrayStoreException);
  }
}
;
ji2.checkCriticalConcurrentModification = function checkCriticalConcurrentModification(currentModCount, recordedModCount){
  if (currentModCount != recordedModCount) {
    throw toJs(new ju.ConcurrentModificationException);
  }
}
;
ji2.checkCriticalElement = function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new ju.NoSuchElementException);
  }
}
;
ji2.checkCriticalElementIndex = function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new jl.IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalNotNull = function checkCriticalNotNull(reference){
  if (jsEquals(reference, null)) {
    throw toJs(new jl.NullPointerException);
  }
  return reference;
}
;
ji2.checkCriticalNotNull_0 = function checkCriticalNotNull_0(reference, errorMessage){
  if (jsEquals(reference, null)) {
    throw toJs(new jl.NullPointerException_0(valueOf_17(errorMessage)));
  }
}
;
ji2.checkCriticalPositionIndex = function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new jl.IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalPositionIndexes = function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new jl.IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new jl.IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}
;
ji2.checkCriticalState = function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new jl.IllegalStateException);
  }
}
;
ji2.checkCriticalStringBounds = function checkCriticalStringBounds(start_0, end, length_0){
  ji2.$clinit_InternalPreconditions();
  if (start_0 < 0 || end > length_0 || end < start_0) {
    throw toJs(new jl.StringIndexOutOfBoundsException('fromIndex: ' + start_0 + ', toIndex: ' + end + ', length: ' + length_0));
  }
}
;
ji2.checkCriticalStringElementIndex = function checkCriticalStringElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new jl.StringIndexOutOfBoundsException('Index: ' + index_0 + ', Size: ' + size_0));
  }
}
;
ji2.checkCriticalType = function checkCriticalType(expression, message){
  if (!expression) {
    throw toJs(new jl.ClassCastException_0(message));
  }
}
;
ji2.checkElement = function checkElement(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalElement(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalElement(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkElementIndex = function checkElementIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalElementIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalElementIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkNotNull_0 = function checkNotNull_0(reference){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalNotNull(reference);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalNotNull(reference);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
  return reference;
}
;
ji2.checkNotNull_1 = function checkNotNull_1(reference, errorMessage){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalNotNull_0(reference, errorMessage);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalNotNull_0(reference, errorMessage);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkPositionIndex = function checkPositionIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalPositionIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalPositionIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkPositionIndexes = function checkPositionIndexes(start_0, end, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalPositionIndexes(start_0, end, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalPositionIndexes(start_0, end, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkState = function checkState(expression){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_API_CHECKED) {
    ji2.checkCriticalState(expression);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalState(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkStringBounds = function checkStringBounds(start_0, end, length_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalStringBounds(start_0, end, length_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalStringBounds(start_0, end, length_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkStringElementIndex = function checkStringElementIndex(index_0, size_0){
  ji2.$clinit_InternalPreconditions();
  var e;
  if (ji2.IS_BOUNDS_CHECKED) {
    ji2.checkCriticalStringElementIndex(index_0, size_0);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalStringElementIndex(index_0, size_0);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.checkType = function checkType(expression){
  ji2.$clinit_InternalPreconditions();
  ji2.checkType_0(expression, null);
}
;
ji2.checkType_0 = function checkType_0(expression, message){
  var e;
  if (ji2.IS_TYPE_CHECKED) {
    ji2.checkCriticalType(expression, message);
  }
   else if (ji2.IS_ASSERTED) {
    try {
      ji2.checkCriticalType(expression, message);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 5)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
ji2.isApiChecked = function isApiChecked(){
  ji2.$clinit_InternalPreconditions();
  return ji2.IS_API_CHECKED || ji2.IS_ASSERTED;
}
;
defineClass(238, 1, {1:1});
ji2.CHECK_API = 'AUTO';
ji2.CHECK_BOUNDS = 'AUTO';
ji2.CHECK_NUMERIC = 'AUTO';
ji2.CHECK_TYPE = 'AUTO';
ji2.IS_API_CHECKED = false;
ji2.IS_ASSERTED = false;
ji2.IS_BOUNDS_CHECKED = false;
ji2.IS_NUMERIC_CHECKED = false;
ji2.IS_TYPE_CHECKED = false;
ji2.LEVEL_MINIMAL_OR_HIGHER = false;
ji2.LEVEL_NORMAL_OR_HIGHER = false;
ji2.LEVEL_OPT_OR_HIGHER = false;
cggl.Ljavaemul_internal_InternalPreconditions_2_classLit = createForClass('javaemul.internal', 'InternalPreconditions', 238, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_JsUtils$ArrayBuffer = function $clinit_JsUtils$ArrayBuffer(){
  ji2.$clinit_JsUtils$ArrayBuffer = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_JsUtils$Float32Array = function $clinit_JsUtils$Float32Array(){
  ji2.$clinit_JsUtils$Float32Array = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_JsUtils$Float64Array = function $clinit_JsUtils$Float64Array(){
  ji2.$clinit_JsUtils$Float64Array = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_JsUtils$NativeNumber = function $clinit_JsUtils$NativeNumber(){
  ji2.$clinit_JsUtils$NativeNumber = emptyMethod;
}
;
ji2.$clinit_JsUtils$Uint32Array = function $clinit_JsUtils$Uint32Array(){
  ji2.$clinit_JsUtils$Uint32Array = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_LongUtils = function $clinit_LongUtils(){
  ji2.$clinit_LongUtils = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.fromBits = function fromBits(lowBits, highBits){
  ji2.$clinit_LongUtils();
  var highBitsLong, lowBitsLong;
  lowBitsLong = and_0(fromInt_0(lowBits), 4294967295);
  highBitsLong = shl_0(fromInt_0(highBits), 32);
  return or_0(highBitsLong, lowBitsLong);
}
;
ji2.getHighBits = function getHighBits(value_0){
  ji2.$clinit_LongUtils();
  return toInt_0(shru_0(value_0, 32));
}
;
defineClass(257, 1, {1:1});
cggl.Ljavaemul_internal_LongUtils_2_classLit = createForClass('javaemul.internal', 'LongUtils', 257, cggl.Ljava_lang_Object_2_classLit);
ji2.$clinit_NativeRegExp = function $clinit_NativeRegExp(){
  ji2.$clinit_NativeRegExp = emptyMethod;
  jl.$clinit_Object();
}
;
ji2.$clinit_NativeRegExp$Match = function $clinit_NativeRegExp$Match(){
  ji2.$clinit_NativeRegExp$Match = emptyMethod;
}
;
ji2.$asArray_0 = function $asArray_0(this$static){
  ji2.$clinit_NativeRegExp$Match();
  return ji2.uncheckedCast(this$static);
}
;
jb.$clinit_Any = function $clinit_Any(){
  jb.$clinit_Any = emptyMethod;
}
;
jb.$asArray_1 = function $asArray_1(this$static){
  return jb.asArray_1(this$static);
}
;
jb.$asArrayLike = function $asArrayLike(this$static){
  return jb.asArrayLike(this$static);
}
;
jb.$asBoolean_11 = function $asBoolean_11(this$static){
  return jb.asBoolean_0(this$static);
}
;
jb.$asByte = function $asByte(this$static){
  return jb.asByte_0(this$static);
}
;
jb.$asChar = function $asChar(this$static){
  return jb.asChar_0(this$static);
}
;
jb.$asDouble_58 = function $asDouble_58(this$static){
  return jb.asDouble_2(this$static);
}
;
jb.$asFloat = function $asFloat(this$static){
  return jb.asFloat(this$static);
}
;
jb.$asInt_6 = function $asInt_6(this$static){
  return jb.asInt_0(this$static);
}
;
jb.$asLong = function $asLong(this$static){
  return jb.asLong_0(this$static);
}
;
jb.$asPropertyMap = function $asPropertyMap(this$static){
  return jb.asPropertyMap(this$static);
}
;
jb.$asShort = function $asShort(this$static){
  return jb.asShort_0(this$static);
}
;
jb.$asString_105 = function $asString_105(this$static){
  return jb.asString(this$static);
}
;
jb.$cast_0 = function $cast_0(this$static){
  return this$static;
}
;
jb.$uncheckedCast = function $uncheckedCast(this$static){
  return this$static;
}
;
jb.$clinit_InternalJsUtil = function $clinit_InternalJsUtil(){
  jb.$clinit_InternalJsUtil = emptyMethod;
  jl.$clinit_Object();
}
;
jb.asBoolean = function asBoolean(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asByte = function asByte(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asChar = function asChar(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asDouble_1 = function asDouble_1(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asInt = function asInt(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asLong = function asLong(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.asShort = function asShort(obj){
  jb.$clinit_InternalJsUtil();
  return obj;
}
;
jb.construct = function construct(ctor, args){
  jb.$clinit_InternalJsUtil();
  return new (ctor.bind.apply(ctor, [null].concat(args)));
}
;
jb.delete_0 = function delete_0(obj, key){
  jb.$clinit_InternalJsUtil();
  delete obj[key];
}
;
jb.deleteAt = function deleteAt(obj, key){
  jb.$clinit_InternalJsUtil();
  delete obj[key];
}
;
jb.emptyObjectLiteral = function emptyObjectLiteral(){
  jb.$clinit_InternalJsUtil();
  return {};
}
;
jb.forEach_0 = function forEach_0(obj, cb){
  jb.$clinit_InternalJsUtil();
  for (var element in obj) {
    cb(element);
  }
}
;
jb.get_15 = function get_15(obj, key){
  jb.$clinit_InternalJsUtil();
  return obj[key];
}
;
jb.getAt = function getAt(obj, key){
  jb.$clinit_InternalJsUtil();
  return obj[key];
}
;
jb.getLength = function getLength(obj){
  jb.$clinit_InternalJsUtil();
  return obj.length;
}
;
jb.getObjectByName = function getObjectByName(qualifiedName, obj){
  jb.$clinit_InternalJsUtil();
  var parts = qualifiedName.split('.');
  var cur = obj;
  for (var i = 0; i < parts.length; i++) {
    cur = cur[parts[i]];
    if (cur == null) {
      return null;
    }
  }
  return cur;
}
;
jb.has = function has(obj, key){
  jb.$clinit_InternalJsUtil();
  return key in obj;
}
;
jb.hasLength = function hasLength(obj){
  jb.$clinit_InternalJsUtil();
  return typeof obj == 'object' && typeof obj.length == 'number';
}
;
jb.isInt = function isInt(obj){
  jb.$clinit_InternalJsUtil();
  return (obj | 0) === obj;
}
;
jb.isLong = function isLong(obj){
  jb.$clinit_InternalJsUtil();
  if (typeof obj == 'number') {
    return cggl.isSafeIntegerRange(obj) && Math.floor(obj) === obj;
  }
  if (typeof obj == 'object' && obj) {
    return 'h' in obj && ('l' in obj && 'm' in obj);
  }
  return false;
}
;
jb.set_1 = function set_1(obj, key, value_0){
  jb.$clinit_InternalJsUtil();
  obj[key] = value_0;
}
;
jb.setAt = function setAt(obj, key, value_0){
  jb.$clinit_InternalJsUtil();
  obj[key] = value_0;
}
;
jb.setLength_1 = function setLength_1(obj, length_0){
  jb.$clinit_InternalJsUtil();
  return obj.length = length_0;
}
;
jb.toClass = function toClass(ctor){
  jb.$clinit_InternalJsUtil();
  return ctor.prototype.___clazz;
}
;
jb.toCtor = function toCtor(clazz){
  jb.$clinit_InternalJsUtil();
  return clazz.jsConstructor;
}
;
defineClass(241, 1, {1:1});
cggl.Ljsinterop_base_InternalJsUtil_2_classLit = createForClass('jsinterop.base', 'InternalJsUtil', 241, cggl.Ljava_lang_Object_2_classLit);
jb.$clinit_InternalPreconditions_0 = function $clinit_InternalPreconditions_0(){
  jb.$clinit_InternalPreconditions_0 = emptyMethod;
  jl.$clinit_Object();
  jb.IS_TYPE_CHECKED_0 = jl.equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED');
  jb.IS_ASSERTED_0 = jl.equals_Ljava_lang_Object__Z__devirtual$_2('DISABLED', 'ENABLED');
}
;
jb.checkCriticalType_0 = function checkCriticalType_0(expression){
  if (!expression) {
    throw toJs(new jl.ClassCastException);
  }
}
;
jb.checkType_1 = function checkType_1(expression){
  jb.$clinit_InternalPreconditions_0();
  var e;
  if (jb.IS_TYPE_CHECKED_0) {
    jb.checkCriticalType_0(expression);
  }
   else if (jb.IS_ASSERTED_0) {
    try {
      jb.checkCriticalType_0(expression);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 6)) {
        e = $e0;
        throw toJs(new jl.AssertionError_5(e));
      }
       else 
        throw toJs($e0);
    }
  }
}
;
defineClass(246, 1, {1:1});
jb.IS_ASSERTED_0 = false;
jb.IS_TYPE_CHECKED_0 = false;
cggl.Ljsinterop_base_InternalPreconditions_2_classLit = createForClass('jsinterop.base', 'InternalPreconditions', 246, cggl.Ljava_lang_Object_2_classLit);
jb.$clinit_Js = function $clinit_Js(){
  jb.$clinit_Js = emptyMethod;
  jl.$clinit_Object();
}
;
jb.asArray_1 = function asArray_1(obj){
  jb.$clinit_Js();
  jb.checkType_1(instanceOfJsArray(obj));
  return jb.uncheckedCast_0(obj);
}
;
jb.asArrayLike = function asArrayLike(obj){
  jb.$clinit_Js();
  jb.checkType_1(jsEquals(obj, null) || jb.hasLength(obj));
  return jb.uncheckedCast_0(obj);
}
;
jb.asBoolean_0 = function asBoolean_0(obj){
  jb.$clinit_Js();
  jb.checkType_1(jsEquals(typeof(obj), 'boolean'));
  return jb.asBoolean(obj);
}
;
jb.asByte_0 = function asByte_0(obj){
  jb.$clinit_Js();
  var num;
  num = jb.asInt_0(obj);
  jb.checkType_1(num == narrow_byte(num));
  return jb.asByte(obj);
}
;
jb.asChar_0 = function asChar_0(obj){
  jb.$clinit_Js();
  var num;
  num = jb.asInt_0(obj);
  jb.checkType_1(num == narrow_char(num));
  return jb.asChar(obj);
}
;
jb.asConstructorFn = function asConstructorFn(clazz){
  jb.$clinit_Js();
  var fn;
  fn = jb.toCtor(clazz);
  jb.checkType_1(jsNotEquals(fn, null));
  return fn;
}
;
jb.asDouble_2 = function asDouble_2(obj){
  jb.$clinit_Js();
  jb.checkType_1(jsEquals(typeof(obj), 'number'));
  return jb.asDouble_1(obj);
}
;
jb.asFloat = function asFloat(obj){
  jb.$clinit_Js();
  return jb.asDouble_2(obj);
}
;
jb.asInt_0 = function asInt_0(obj){
  jb.$clinit_Js();
  jb.checkType_1(jb.isInt(obj));
  return jb.asInt(obj);
}
;
jb.asLong_0 = function asLong_0(obj){
  jb.$clinit_Js();
  jb.checkType_1(jb.isLong(obj));
  return jb.asLong(obj);
}
;
jb.asPropertyMap = function asPropertyMap(obj){
  jb.$clinit_Js();
  return jb.uncheckedCast_0(obj);
}
;
jb.asShort_0 = function asShort_0(obj){
  jb.$clinit_Js();
  var num;
  num = jb.asInt_0(obj);
  jb.checkType_1(num == narrow_short(num));
  return jb.asShort(obj);
}
;
jb.asString = function asString(obj){
  jb.$clinit_Js();
  jb.checkType_1(jsEquals(typeof(obj), 'string'));
  return jb.uncheckedCast_0(obj);
}
;
jb.cast = function cast(obj){
  jb.$clinit_Js();
  return obj;
}
;
jb.uncheckedCast_0 = function uncheckedCast_0(obj){
  jb.$clinit_Js();
  return obj;
}
;
defineClass(242, 1, {1:1});
cggl.Ljsinterop_base_Js_2_classLit = createForClass('jsinterop.base', 'Js', 242, cggl.Ljava_lang_Object_2_classLit);
jb.$asClass = function $asClass(this$static){
  var clazz;
  clazz = jb.toClass(this$static);
  jb.checkType_1(isNotNull(clazz));
  return clazz;
}
;
jb.$construct = function $construct(this$static, args){
  return jb.construct(this$static, args);
}
;
cggl.Z_classLit = createForPrimitive('boolean', 'Z');
cggl.B_classLit = createForPrimitive('byte', 'B');
cggl.C_classLit = createForPrimitive('char', 'C');
cggl.D_classLit = createForPrimitive('double', 'D');
cggl.F_classLit = createForPrimitive('float', 'F');
cggl.I_classLit = createForPrimitive('int', 'I');
cggl.J_classLit = createForPrimitive('long', 'J');
cggl.S_classLit = createForPrimitive('short', 'S');
cggl.V_classLit = createForPrimitive('void', 'V');
var $entry = registerEntry_0();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init_0);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceMappingURL=https://www.gwtproject.org/src/8C90C955E14BBE1CC2022861DF08A689_sourceMap0.json 
//# sourceURL=gwtproject-0.js

