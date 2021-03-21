/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreatePatientInput = {
  id?: string | null;
  name?: string | null;
  age?: number | null;
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdatePatientInput = {
  id: string;
  name?: string | null;
  age?: number | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type CreateObservationInput = {
  id?: string | null;
  pulse?: PulseInput | null;
  bloodPressure?: BloodPressureInput | null;
  respiration?: RespirationInput | null;
  observationPatientId?: string | null;
};

export type PulseInput = {
  bmp?: number | null;
};

export type BloodPressureInput = {
  systolic?: number | null;
  distolic?: number | null;
};

export type RespirationInput = {
  bmp?: number | null;
};

export type ModelObservationConditionInput = {
  and?: Array<ModelObservationConditionInput | null> | null;
  or?: Array<ModelObservationConditionInput | null> | null;
  not?: ModelObservationConditionInput | null;
};

export type UpdateObservationInput = {
  id: string;
  pulse?: PulseInput | null;
  bloodPressure?: BloodPressureInput | null;
  respiration?: RespirationInput | null;
  observationPatientId?: string | null;
};

export type DeleteObservationInput = {
  id?: string | null;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelObservationFilterInput = {
  id?: ModelIDInput | null;
  and?: Array<ModelObservationFilterInput | null> | null;
  or?: Array<ModelObservationFilterInput | null> | null;
  not?: ModelObservationFilterInput | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateObservationMutation = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateObservationMutation = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteObservationMutation = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetObservationQuery = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListObservationsQuery = {
  __typename: "ModelObservationConnection";
  items: Array<{
    __typename: "Observation";
    id: string;
    pulse: {
      __typename: "Pulse";
      bmp: number | null;
    } | null;
    bloodPressure: {
      __typename: "BloodPressure";
      systolic: number | null;
      distolic: number | null;
    } | null;
    respiration: {
      __typename: "Respiration";
      bmp: number | null;
    } | null;
    patient: {
      __typename: "Patient";
      id: string;
      name: string | null;
      age: number | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  age: number | null;
  observations: {
    __typename: "ModelObservationConnection";
    items: Array<{
      __typename: "Observation";
      id: string;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateObservationSubscription = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateObservationSubscription = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteObservationSubscription = {
  __typename: "Observation";
  id: string;
  pulse: {
    __typename: "Pulse";
    bmp: number | null;
  } | null;
  bloodPressure: {
    __typename: "BloodPressure";
    systolic: number | null;
    distolic: number | null;
  } | null;
  respiration: {
    __typename: "Respiration";
    bmp: number | null;
  } | null;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    age: number | null;
    observations: {
      __typename: "ModelObservationConnection";
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateObservation(
    input: CreateObservationInput,
    condition?: ModelObservationConditionInput
  ): Promise<CreateObservationMutation> {
    const statement = `mutation CreateObservation($input: CreateObservationInput!, $condition: ModelObservationConditionInput) {
        createObservation(input: $input, condition: $condition) {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateObservationMutation>response.data.createObservation;
  }
  async UpdateObservation(
    input: UpdateObservationInput,
    condition?: ModelObservationConditionInput
  ): Promise<UpdateObservationMutation> {
    const statement = `mutation UpdateObservation($input: UpdateObservationInput!, $condition: ModelObservationConditionInput) {
        updateObservation(input: $input, condition: $condition) {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateObservationMutation>response.data.updateObservation;
  }
  async DeleteObservation(
    input: DeleteObservationInput,
    condition?: ModelObservationConditionInput
  ): Promise<DeleteObservationMutation> {
    const statement = `mutation DeleteObservation($input: DeleteObservationInput!, $condition: ModelObservationConditionInput) {
        deleteObservation(input: $input, condition: $condition) {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteObservationMutation>response.data.deleteObservation;
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async GetObservation(id: string): Promise<GetObservationQuery> {
    const statement = `query GetObservation($id: ID!) {
        getObservation(id: $id) {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetObservationQuery>response.data.getObservation;
  }
  async ListObservations(
    filter?: ModelObservationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListObservationsQuery> {
    const statement = `query ListObservations($filter: ModelObservationFilterInput, $limit: Int, $nextToken: String) {
        listObservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            pulse {
              __typename
              bmp
            }
            bloodPressure {
              __typename
              systolic
              distolic
            }
            respiration {
              __typename
              bmp
            }
            patient {
              __typename
              id
              name
              age
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListObservationsQuery>response.data.listObservations;
  }
  OnCreatePatientListener: Observable<
    OnCreatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient {
        onCreatePatient {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePatientSubscription>;

  OnUpdatePatientListener: Observable<
    OnUpdatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient {
        onUpdatePatient {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePatientSubscription>;

  OnDeletePatientListener: Observable<
    OnDeletePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient {
        onDeletePatient {
          __typename
          id
          name
          age
          observations {
            __typename
            items {
              __typename
              id
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePatientSubscription>;

  OnCreateObservationListener: Observable<
    OnCreateObservationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateObservation {
        onCreateObservation {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateObservationSubscription>;

  OnUpdateObservationListener: Observable<
    OnUpdateObservationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateObservation {
        onUpdateObservation {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateObservationSubscription>;

  OnDeleteObservationListener: Observable<
    OnDeleteObservationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteObservation {
        onDeleteObservation {
          __typename
          id
          pulse {
            __typename
            bmp
          }
          bloodPressure {
            __typename
            systolic
            distolic
          }
          respiration {
            __typename
            bmp
          }
          patient {
            __typename
            id
            name
            age
            observations {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteObservationSubscription>;
}
