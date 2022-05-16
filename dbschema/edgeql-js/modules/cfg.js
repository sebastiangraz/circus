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
const $AllowBareDDLλEnum = {
  AlwaysAllow: "AlwaysAllow",
  NeverAllow: "NeverAllow",
}
const AllowBareDDL = $.makeType(_.spec, "8e6efbeb-bdad-11ec-a4a2-99330e4ee0d3", _.syntax.literal);

const memory = $.makeType(_.spec, "00000000-0000-0000-0000-000000000130", _.syntax.literal);

const $ConfigObject = $.makeType(_.spec, "8e322bff-bdad-11ec-95a3-657aa8be05fb", _.syntax.literal);

const ConfigObject= _.syntax.$PathNode($.$toSet($ConfigObject, $.Cardinality.Many), null, true);

const $AbstractConfig = $.makeType(_.spec, "8e8b3c8e-bdad-11ec-b1af-9bb4f59d0289", _.syntax.literal);

const AbstractConfig= _.syntax.$PathNode($.$toSet($AbstractConfig, $.Cardinality.Many), null, true);

const $Auth = $.makeType(_.spec, "8e70073a-bdad-11ec-a966-0950e526a54e", _.syntax.literal);

const Auth= _.syntax.$PathNode($.$toSet($Auth, $.Cardinality.Many), null, true);

const $AuthMethod = $.makeType(_.spec, "8e40eb2e-bdad-11ec-985c-d703084a5578", _.syntax.literal);

const AuthMethod= _.syntax.$PathNode($.$toSet($AuthMethod, $.Cardinality.Many), null, true);

const $Config = $.makeType(_.spec, "8eb75b12-bdad-11ec-8875-bf64e76e9bba", _.syntax.literal);

const Config= _.syntax.$PathNode($.$toSet($Config, $.Cardinality.Many), null, true);

const $DatabaseConfig = $.makeType(_.spec, "8f1585bf-bdad-11ec-a688-8d859d8c61a2", _.syntax.literal);

const DatabaseConfig= _.syntax.$PathNode($.$toSet($DatabaseConfig, $.Cardinality.Many), null, true);

const $InstanceConfig = $.makeType(_.spec, "8ee5fa6e-bdad-11ec-a9ff-b95afe1f04e9", _.syntax.literal);

const InstanceConfig= _.syntax.$PathNode($.$toSet($InstanceConfig, $.Cardinality.Many), null, true);

const $SCRAM = $.makeType(_.spec, "8e5ecdcc-bdad-11ec-9572-19ac45fecb8a", _.syntax.literal);

const SCRAM= _.syntax.$PathNode($.$toSet($SCRAM, $.Cardinality.Many), null, true);

const $Trust = $.makeType(_.spec, "8e4ff896-bdad-11ec-951f-ade75ed90ecd", _.syntax.literal);

const Trust= _.syntax.$PathNode($.$toSet($Trust, $.Cardinality.Many), null, true);

function get_config_json(...args) {
  const {returnType, cardinality, args: positionalArgs, namedArgs} = _.syntax.$resolveOverload('cfg::get_config_json', args, _.spec, [
    {args: [], namedArgs: {"sources": {typeId: "05f91774-15ea-9001-038e-092c1cad80af", optional: true, setoftype: false, variadic: false}, "max_source": {typeId: "00000000-0000-0000-0000-000000000101", optional: true, setoftype: false, variadic: false}}, returnTypeId: "00000000-0000-0000-0000-00000000010f"},
  ]);
  return _.syntax.$expressionify({
    __kind__: $.ExpressionKind.Function,
    __element__: returnType,
    __cardinality__: cardinality,
    __name__: "cfg::get_config_json",
    __args__: positionalArgs,
    __namedargs__: namedArgs,
  });
};



Object.assign(exports, { $AllowBareDDLλEnum: $AllowBareDDLλEnum, AllowBareDDL: AllowBareDDL, memory: memory, $ConfigObject: $ConfigObject, ConfigObject: ConfigObject, $AbstractConfig: $AbstractConfig, AbstractConfig: AbstractConfig, $Auth: $Auth, Auth: Auth, $AuthMethod: $AuthMethod, AuthMethod: AuthMethod, $Config: $Config, Config: Config, $DatabaseConfig: $DatabaseConfig, DatabaseConfig: DatabaseConfig, $InstanceConfig: $InstanceConfig, InstanceConfig: InstanceConfig, $SCRAM: $SCRAM, SCRAM: SCRAM, $Trust: $Trust, Trust: Trust });

const __defaultExports = {
  "AllowBareDDL": AllowBareDDL,
  "memory": memory,
  "ConfigObject": ConfigObject,
  "AbstractConfig": AbstractConfig,
  "Auth": Auth,
  "AuthMethod": AuthMethod,
  "Config": Config,
  "DatabaseConfig": DatabaseConfig,
  "InstanceConfig": InstanceConfig,
  "SCRAM": SCRAM,
  "Trust": Trust,
  "get_config_json": get_config_json
};
exports.default = __defaultExports;
