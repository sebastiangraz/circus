"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
const { $ } = require("edgedb");
const _ = __importStar(require("../imports"));
const $TransactionIsolationλEnum = {
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
}
const TransactionIsolation = $.makeType(_.spec, "8d28891b-bdad-11ec-aebf-77eaf5caff7e", _.syntax.literal);

const $VersionStageλEnum = {
  dev: "dev",
  alpha: "alpha",
  beta: "beta",
  rc: "rc",
  final: "final",
}
const VersionStage = $.makeType(_.spec, "8d2928d1-bdad-11ec-bf9d-211eb3a429b7", _.syntax.literal);

const $SystemObject = $.makeType(_.spec, "8d29c48c-bdad-11ec-b2f6-b55b854eb85f", _.syntax.literal);

const SystemObject= _.syntax.$PathNode($.$toSet($SystemObject, $.Cardinality.Many), null, true);

const $Database = $.makeType(_.spec, "8d4970be-bdad-11ec-942d-3be045535129", _.syntax.literal);

const Database= _.syntax.$PathNode($.$toSet($Database, $.Cardinality.Many), null, true);

const $ExtensionPackage = $.makeType(_.spec, "8d6cef55-bdad-11ec-a346-ed6d889a54b1", _.syntax.literal);

const ExtensionPackage= _.syntax.$PathNode($.$toSet($ExtensionPackage, $.Cardinality.Many), null, true);

const $Role = $.makeType(_.spec, "8d978506-bdad-11ec-9001-bd2ddaec14d9", _.syntax.literal);

const Role= _.syntax.$PathNode($.$toSet($Role, $.Cardinality.Many), null, true);

function get_version(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_version', args, _.spec, [
    {args: [], returnTypeId: "77a4c3fc-0648-b955-b8f0-c9ca1bd751a3"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_version_as_str(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_version_as_str', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_version_as_str",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_transaction_isolation(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_transaction_isolation', args, _.spec, [
    {args: [], returnTypeId: "8d28891b-bdad-11ec-aebf-77eaf5caff7e"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_transaction_isolation",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};

function get_current_database(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('sys::get_current_database', args, _.spec, [
    {args: [], returnTypeId: "00000000-0000-0000-0000-000000000101"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "sys::get_current_database",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



Object.assign(exports, { $TransactionIsolationλEnum: $TransactionIsolationλEnum, TransactionIsolation: TransactionIsolation, $VersionStageλEnum: $VersionStageλEnum, VersionStage: VersionStage, $SystemObject: $SystemObject, SystemObject: SystemObject, $Database: $Database, Database: Database, $ExtensionPackage: $ExtensionPackage, ExtensionPackage: ExtensionPackage, $Role: $Role, Role: Role });

const __defaultExports = {
  "TransactionIsolation": TransactionIsolation,
  "VersionStage": VersionStage,
  "SystemObject": SystemObject,
  "Database": Database,
  "ExtensionPackage": ExtensionPackage,
  "Role": Role,
  "get_version": get_version,
  "get_version_as_str": get_version_as_str,
  "get_transaction_isolation": get_transaction_isolation,
  "get_current_database": get_current_database
};
exports.default = __defaultExports;
