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
const $CardinalityλEnum = {
  One: "One",
  Many: "Many",
}
const Cardinality = $.makeType(_.spec, "883c64ec-bdad-11ec-821e-b713550b4700", _.syntax.literal);

const $OperatorKindλEnum = {
  Infix: "Infix",
  Postfix: "Postfix",
  Prefix: "Prefix",
  Ternary: "Ternary",
}
const OperatorKind = $.makeType(_.spec, "883d9a75-bdad-11ec-94f6-2f66331a96f6", _.syntax.literal);

const $ParameterKindλEnum = {
  VariadicParam: "VariadicParam",
  NamedOnlyParam: "NamedOnlyParam",
  PositionalParam: "PositionalParam",
}
const ParameterKind = $.makeType(_.spec, "883ec925-bdad-11ec-9b3e-3781ca309b28", _.syntax.literal);

const $TargetDeleteActionλEnum = {
  Restrict: "Restrict",
  DeleteSource: "DeleteSource",
  Allow: "Allow",
  DeferredRestrict: "DeferredRestrict",
}
const TargetDeleteAction = $.makeType(_.spec, "883d0281-bdad-11ec-9a61-db7301f6c307", _.syntax.literal);

const $TypeModifierλEnum = {
  SetOfType: "SetOfType",
  OptionalType: "OptionalType",
  SingletonType: "SingletonType",
}
const TypeModifier = $.makeType(_.spec, "883f6883-bdad-11ec-84e8-dfec56a3b93d", _.syntax.literal);

const $VolatilityλEnum = {
  Immutable: "Immutable",
  Stable: "Stable",
  Volatile: "Volatile",
}
const Volatility = $.makeType(_.spec, "883e339a-bdad-11ec-a672-bf7363480c02", _.syntax.literal);

const $Object_88402434bdad11ec813a73af2b2d33ba = $.makeType(_.spec, "88402434-bdad-11ec-813a-73af2b2d33ba", _.syntax.literal);

const Object_88402434bdad11ec813a73af2b2d33ba= _.syntax.$PathNode($.$toSet($Object_88402434bdad11ec813a73af2b2d33ba, $.Cardinality.Many), null, true);

const $AnnotationSubject = $.makeType(_.spec, "8944a228-bdad-11ec-9499-5b4d8bbb5ed3", _.syntax.literal);

const AnnotationSubject= _.syntax.$PathNode($.$toSet($AnnotationSubject, $.Cardinality.Many), null, true);

const $Alias = $.makeType(_.spec, "8ab94cb3-bdad-11ec-a713-f37fe0f8a00c", _.syntax.literal);

const Alias= _.syntax.$PathNode($.$toSet($Alias, $.Cardinality.Many), null, true);

const $SubclassableObject = $.makeType(_.spec, "8849ae2e-bdad-11ec-b73d-7b1e31b8c3ea", _.syntax.literal);

const SubclassableObject= _.syntax.$PathNode($.$toSet($SubclassableObject, $.Cardinality.Many), null, true);

const $InheritingObject = $.makeType(_.spec, "895a1a3a-bdad-11ec-8fbb-b970bb4e2194", _.syntax.literal);

const InheritingObject= _.syntax.$PathNode($.$toSet($InheritingObject, $.Cardinality.Many), null, true);

const $Annotation = $.makeType(_.spec, "89346d96-bdad-11ec-836d-672cde86daa8", _.syntax.literal);

const Annotation= _.syntax.$PathNode($.$toSet($Annotation, $.Cardinality.Many), null, true);

const $Type = $.makeType(_.spec, "8858b6b0-bdad-11ec-9f9a-895a902bd588", _.syntax.literal);

const Type= _.syntax.$PathNode($.$toSet($Type, $.Cardinality.Many), null, true);

const $PrimitiveType = $.makeType(_.spec, "88a95b94-bdad-11ec-a06d-9bfb694d08ce", _.syntax.literal);

const PrimitiveType= _.syntax.$PathNode($.$toSet($PrimitiveType, $.Cardinality.Many), null, true);

const $CollectionType = $.makeType(_.spec, "88c0be88-bdad-11ec-819f-97745654630a", _.syntax.literal);

const CollectionType= _.syntax.$PathNode($.$toSet($CollectionType, $.Cardinality.Many), null, true);

const $Array = $.makeType(_.spec, "88d890ad-bdad-11ec-9bc7-dbe13dbc5c57", _.syntax.literal);

const Array= _.syntax.$PathNode($.$toSet($Array, $.Cardinality.Many), null, true);

const $CallableObject = $.makeType(_.spec, "89cad012-bdad-11ec-97d5-ab82c6490aa3", _.syntax.literal);

const CallableObject= _.syntax.$PathNode($.$toSet($CallableObject, $.Cardinality.Many), null, true);

const $VolatilitySubject = $.makeType(_.spec, "89e90ca3-bdad-11ec-a2c7-4dd54f0b045e", _.syntax.literal);

const VolatilitySubject= _.syntax.$PathNode($.$toSet($VolatilitySubject, $.Cardinality.Many), null, true);

const $Cast = $.makeType(_.spec, "8c80caf3-bdad-11ec-b15f-91aa7fb65c96", _.syntax.literal);

const Cast= _.syntax.$PathNode($.$toSet($Cast, $.Cardinality.Many), null, true);

const $ConsistencySubject = $.makeType(_.spec, "8a2f6647-bdad-11ec-a566-4994782d0046", _.syntax.literal);

const ConsistencySubject= _.syntax.$PathNode($.$toSet($ConsistencySubject, $.Cardinality.Many), null, true);

const $Constraint = $.makeType(_.spec, "89fb89c8-bdad-11ec-af85-69035b89db68", _.syntax.literal);

const Constraint= _.syntax.$PathNode($.$toSet($Constraint, $.Cardinality.Many), null, true);

const $Delta = $.makeType(_.spec, "89227825-bdad-11ec-aa30-5bce3fe4397b", _.syntax.literal);

const Delta= _.syntax.$PathNode($.$toSet($Delta, $.Cardinality.Many), null, true);

const $Extension = $.makeType(_.spec, "8cc94b1a-bdad-11ec-a606-7bb60cdd2248", _.syntax.literal);

const Extension= _.syntax.$PathNode($.$toSet($Extension, $.Cardinality.Many), null, true);

const $Function = $.makeType(_.spec, "8c2a1673-bdad-11ec-a882-37f3105fce21", _.syntax.literal);

const Function= _.syntax.$PathNode($.$toSet($Function, $.Cardinality.Many), null, true);

const $Index = $.makeType(_.spec, "8a4c786a-bdad-11ec-a4f0-6f4f2067576f", _.syntax.literal);

const Index= _.syntax.$PathNode($.$toSet($Index, $.Cardinality.Many), null, true);

const $Pointer = $.makeType(_.spec, "8a7b4e12-bdad-11ec-bce3-5d562eccd71e", _.syntax.literal);

const Pointer= _.syntax.$PathNode($.$toSet($Pointer, $.Cardinality.Many), null, true);

const $Source = $.makeType(_.spec, "8a64d8b1-bdad-11ec-a746-cf197188982c", _.syntax.literal);

const Source= _.syntax.$PathNode($.$toSet($Source, $.Cardinality.Many), null, true);

const $Link = $.makeType(_.spec, "8b6a3882-bdad-11ec-9cbf-d5115ff47011", _.syntax.literal);

const Link= _.syntax.$PathNode($.$toSet($Link, $.Cardinality.Many), null, true);

const $Migration = $.makeType(_.spec, "8ca717dd-bdad-11ec-aa5d-890c7392d12d", _.syntax.literal);

const Migration= _.syntax.$PathNode($.$toSet($Migration, $.Cardinality.Many), null, true);

const $Module = $.makeType(_.spec, "889be45d-bdad-11ec-b5d6-fd2c8ce27e57", _.syntax.literal);

const Module= _.syntax.$PathNode($.$toSet($Module, $.Cardinality.Many), null, true);

const $ObjectType = $.makeType(_.spec, "8b153d01-bdad-11ec-b071-719424c5e1e0", _.syntax.literal);

const ObjectType= _.syntax.$PathNode($.$toSet($ObjectType, $.Cardinality.Many), null, true);

const $Operator = $.makeType(_.spec, "8c542a3e-bdad-11ec-87bd-65d55fb0fd5d", _.syntax.literal);

const Operator= _.syntax.$PathNode($.$toSet($Operator, $.Cardinality.Many), null, true);

const $Parameter = $.makeType(_.spec, "89780233-bdad-11ec-a618-addc86cc5196", _.syntax.literal);

const Parameter= _.syntax.$PathNode($.$toSet($Parameter, $.Cardinality.Many), null, true);

const $Property = $.makeType(_.spec, "8bb4ae99-bdad-11ec-b302-e9b346a9bd3b", _.syntax.literal);

const Property= _.syntax.$PathNode($.$toSet($Property, $.Cardinality.Many), null, true);

const $PseudoType = $.makeType(_.spec, "88682c36-bdad-11ec-a151-e3e6c3e3573c", _.syntax.literal);

const PseudoType= _.syntax.$PathNode($.$toSet($PseudoType, $.Cardinality.Many), null, true);

const $ScalarType = $.makeType(_.spec, "8ad5e3c4-bdad-11ec-b3b1-75fc894b2873", _.syntax.literal);

const ScalarType= _.syntax.$PathNode($.$toSet($ScalarType, $.Cardinality.Many), null, true);

const $Tuple = $.makeType(_.spec, "8902480f-bdad-11ec-afb5-99beab093f36", _.syntax.literal);

const Tuple= _.syntax.$PathNode($.$toSet($Tuple, $.Cardinality.Many), null, true);

const $TupleElement = $.makeType(_.spec, "88f56c83-bdad-11ec-9ab8-7f1c61f29d80", _.syntax.literal);

const TupleElement= _.syntax.$PathNode($.$toSet($TupleElement, $.Cardinality.Many), null, true);



Object.assign(exports, { $CardinalityλEnum: $CardinalityλEnum, Cardinality: Cardinality, $OperatorKindλEnum: $OperatorKindλEnum, OperatorKind: OperatorKind, $ParameterKindλEnum: $ParameterKindλEnum, ParameterKind: ParameterKind, $TargetDeleteActionλEnum: $TargetDeleteActionλEnum, TargetDeleteAction: TargetDeleteAction, $TypeModifierλEnum: $TypeModifierλEnum, TypeModifier: TypeModifier, $VolatilityλEnum: $VolatilityλEnum, Volatility: Volatility, $Object_88402434bdad11ec813a73af2b2d33ba: $Object_88402434bdad11ec813a73af2b2d33ba, Object_88402434bdad11ec813a73af2b2d33ba: Object_88402434bdad11ec813a73af2b2d33ba, $AnnotationSubject: $AnnotationSubject, AnnotationSubject: AnnotationSubject, $Alias: $Alias, Alias: Alias, $SubclassableObject: $SubclassableObject, SubclassableObject: SubclassableObject, $InheritingObject: $InheritingObject, InheritingObject: InheritingObject, $Annotation: $Annotation, Annotation: Annotation, $Type: $Type, Type: Type, $PrimitiveType: $PrimitiveType, PrimitiveType: PrimitiveType, $CollectionType: $CollectionType, CollectionType: CollectionType, $Array: $Array, Array: Array, $CallableObject: $CallableObject, CallableObject: CallableObject, $VolatilitySubject: $VolatilitySubject, VolatilitySubject: VolatilitySubject, $Cast: $Cast, Cast: Cast, $ConsistencySubject: $ConsistencySubject, ConsistencySubject: ConsistencySubject, $Constraint: $Constraint, Constraint: Constraint, $Delta: $Delta, Delta: Delta, $Extension: $Extension, Extension: Extension, $Function: $Function, Function: Function, $Index: $Index, Index: Index, $Pointer: $Pointer, Pointer: Pointer, $Source: $Source, Source: Source, $Link: $Link, Link: Link, $Migration: $Migration, Migration: Migration, $Module: $Module, Module: Module, $ObjectType: $ObjectType, ObjectType: ObjectType, $Operator: $Operator, Operator: Operator, $Parameter: $Parameter, Parameter: Parameter, $Property: $Property, Property: Property, $PseudoType: $PseudoType, PseudoType: PseudoType, $ScalarType: $ScalarType, ScalarType: ScalarType, $Tuple: $Tuple, Tuple: Tuple, $TupleElement: $TupleElement, TupleElement: TupleElement });

const __defaultExports = {
  "Cardinality": Cardinality,
  "OperatorKind": OperatorKind,
  "ParameterKind": ParameterKind,
  "TargetDeleteAction": TargetDeleteAction,
  "TypeModifier": TypeModifier,
  "Volatility": Volatility,
  "Object": Object_88402434bdad11ec813a73af2b2d33ba,
  "AnnotationSubject": AnnotationSubject,
  "Alias": Alias,
  "SubclassableObject": SubclassableObject,
  "InheritingObject": InheritingObject,
  "Annotation": Annotation,
  "Type": Type,
  "PrimitiveType": PrimitiveType,
  "CollectionType": CollectionType,
  "Array": Array,
  "CallableObject": CallableObject,
  "VolatilitySubject": VolatilitySubject,
  "Cast": Cast,
  "ConsistencySubject": ConsistencySubject,
  "Constraint": Constraint,
  "Delta": Delta,
  "Extension": Extension,
  "Function": Function,
  "Index": Index,
  "Pointer": Pointer,
  "Source": Source,
  "Link": Link,
  "Migration": Migration,
  "Module": Module,
  "ObjectType": ObjectType,
  "Operator": Operator,
  "Parameter": Parameter,
  "Property": Property,
  "PseudoType": PseudoType,
  "ScalarType": ScalarType,
  "Tuple": Tuple,
  "TupleElement": TupleElement
};
exports.default = __defaultExports;
