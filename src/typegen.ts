/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as api from "./types"
import { core, connectionPluginCore } from "@nexus/schema"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    connectionField<FieldName extends string>(
            fieldName: FieldName, 
            config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> 
          ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  FishLocation: "clifftop" | "mouth" | "ocean" | "pier" | "pond" | "river"
  FishShadow: 4 | 3 | "narrow" | 2 | 5 | 1 | 6
  Hemisphere: "northern" | "southern"
}

export interface NexusGenRootTypes {
  Fish: { // root type
    hasFin: boolean; // Boolean!
    hasSound: boolean; // Boolean!
    hours: NexusGenRootTypes['Hour'][]; // [Hour!]!
    id: string; // ID!
    locations: NexusGenEnums['FishLocation'][]; // [FishLocation!]!
    name: string; // String!
    northernMonths: number[]; // [Int!]!
    onlyRaining: boolean; // Boolean!
    price: number; // Int!
    shadow: NexusGenEnums['FishShadow']; // FishShadow!
    southernMonths: number[]; // [Int!]!
  }
  FishConnection: { // root type
    edges?: Array<NexusGenRootTypes['FishEdge'] | null> | null; // [FishEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  FishEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['Fish']; // Fish!
  }
  Hour: { // root type
    end: number; // Int!
    start: number; // Int!
  }
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  FishLocation: NexusGenEnums['FishLocation'];
  FishShadow: NexusGenEnums['FishShadow'];
  Hemisphere: NexusGenEnums['Hemisphere'];
}

export interface NexusGenFieldTypes {
  Fish: { // field return type
    hasFin: boolean; // Boolean!
    hasSound: boolean; // Boolean!
    hours: NexusGenRootTypes['Hour'][]; // [Hour!]!
    id: string; // ID!
    locations: NexusGenEnums['FishLocation'][]; // [FishLocation!]!
    name: string; // String!
    northernMonths: number[]; // [Int!]!
    onlyRaining: boolean; // Boolean!
    price: number; // Int!
    shadow: NexusGenEnums['FishShadow']; // FishShadow!
    southernMonths: number[]; // [Int!]!
  }
  FishConnection: { // field return type
    edges: Array<NexusGenRootTypes['FishEdge'] | null> | null; // [FishEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  FishEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Fish']; // Fish!
  }
  Hour: { // field return type
    end: number; // Int!
    start: number; // Int!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    fish: NexusGenRootTypes['Fish']; // Fish!
    fishes: NexusGenRootTypes['FishConnection']; // FishConnection!
    foo: string; // String!
  }
}

export interface NexusGenArgTypes {
  Query: {
    fish: { // args
      id: number; // Int!
    }
    fishes: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      hemisphere?: NexusGenEnums['Hemisphere'] | null; // Hemisphere
      last?: number | null; // Int
      month?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Fish" | "FishConnection" | "FishEdge" | "Hour" | "PageInfo" | "Query";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "FishLocation" | "FishShadow" | "Hemisphere";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: api.ContextType;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginSchemaConfig {
  }
}