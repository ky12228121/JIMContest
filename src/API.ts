/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContestsInput = {
  id: string,
  contest_number: string,
  contest_type: string,
  current_flag: number,
  start_date: string,
  end_date: string,
};

export type ModelContestsConditionInput = {
  contest_number?: ModelStringInput | null,
  current_flag?: ModelIntInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelContestsConditionInput | null > | null,
  or?: Array< ModelContestsConditionInput | null > | null,
  not?: ModelContestsConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
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
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Contests = {
  __typename: "Contests",
  id: string,
  events?: ModelEventsConnection | null,
  contest_number: string,
  contest_type: string,
  current_flag: number,
  start_date: string,
  end_date: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelEventsConnection = {
  __typename: "ModelEventsConnection",
  items?:  Array<Events | null > | null,
  nextToken?: string | null,
};

export type Events = {
  __typename: "Events",
  id: string,
  contest_id: string,
  contest?: Contests | null,
  event_type: string,
  scramble_id: string,
  scramble?: Scrambles | null,
  entry_count: number,
  createdAt: string,
  updatedAt: string,
};

export type Scrambles = {
  __typename: "Scrambles",
  id: string,
  evnet_id: string,
  scramble: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContestsInput = {
  id: string,
  contest_number?: string | null,
  contest_type: string,
  current_flag?: number | null,
  start_date?: string | null,
  end_date?: string | null,
};

export type DeleteContestsInput = {
  contest_type: string,
  id: string,
};

export type CreateEventsInput = {
  id: string,
  contest_id: string,
  event_type: string,
  scramble_id: string,
  entry_count: number,
};

export type ModelEventsConditionInput = {
  scramble_id?: ModelStringInput | null,
  entry_count?: ModelIntInput | null,
  and?: Array< ModelEventsConditionInput | null > | null,
  or?: Array< ModelEventsConditionInput | null > | null,
  not?: ModelEventsConditionInput | null,
};

export type UpdateEventsInput = {
  id?: string | null,
  contest_id: string,
  event_type: string,
  scramble_id?: string | null,
  entry_count?: number | null,
};

export type DeleteEventsInput = {
  event_type: string,
  contest_id: string,
};

export type CreatePreResultsInput = {
  id: string,
  user_id: string,
  event_type: string,
  no1: ResultSchemaInput,
  no2?: ResultSchemaInput | null,
  no3?: ResultSchemaInput | null,
  no4?: ResultSchemaInput | null,
  no5?: ResultSchemaInput | null,
};

export type ResultSchemaInput = {
  result: string,
  penalty: string,
};

export type ModelPreResultsConditionInput = {
  and?: Array< ModelPreResultsConditionInput | null > | null,
  or?: Array< ModelPreResultsConditionInput | null > | null,
  not?: ModelPreResultsConditionInput | null,
};

export type PreResults = {
  __typename: "PreResults",
  id: string,
  user_id: string,
  event_type: string,
  no1: ResultSchema,
  no2?: ResultSchema | null,
  no3?: ResultSchema | null,
  no4?: ResultSchema | null,
  no5?: ResultSchema | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ResultSchema = {
  __typename: "ResultSchema",
  result: string,
  penalty: string,
};

export type UpdatePreResultsInput = {
  id?: string | null,
  user_id: string,
  event_type: string,
  no1?: ResultSchemaInput | null,
  no2?: ResultSchemaInput | null,
  no3?: ResultSchemaInput | null,
  no4?: ResultSchemaInput | null,
  no5?: ResultSchemaInput | null,
};

export type DeletePreResultsInput = {
  event_type: string,
  user_id: string,
};

export type CreateUsersInput = {
  id: string,
  username: string,
};

export type ModelUsersConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  username: string,
  pre_results?: ModelPreResultsConnection | null,
  results?: ModelResultsConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPreResultsConnection = {
  __typename: "ModelPreResultsConnection",
  items?:  Array<PreResults | null > | null,
  nextToken?: string | null,
};

export type ModelResultsConnection = {
  __typename: "ModelResultsConnection",
  items?:  Array<Results | null > | null,
  nextToken?: string | null,
};

export type Results = {
  __typename: "Results",
  id: string,
  contest_id: string,
  contest?: Contests | null,
  contest_type: string,
  no1: ResultSchema,
  no2: ResultSchema,
  no3: ResultSchema,
  no4: ResultSchema,
  no5: ResultSchema,
  best: string,
  average: string,
  user_id: string,
  user?: Users | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersInput = {
  id: string,
  username?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateScramblesInput = {
  id: string,
  evnet_id: string,
  scramble: string,
};

export type ModelScramblesConditionInput = {
  evnet_id?: ModelStringInput | null,
  scramble?: ModelStringInput | null,
  and?: Array< ModelScramblesConditionInput | null > | null,
  or?: Array< ModelScramblesConditionInput | null > | null,
  not?: ModelScramblesConditionInput | null,
};

export type UpdateScramblesInput = {
  id: string,
  evnet_id?: string | null,
  scramble?: string | null,
};

export type DeleteScramblesInput = {
  id: string,
};

export type CreateResultsInput = {
  id: string,
  contest_id: string,
  contest_type: string,
  no1: ResultSchemaInput,
  no2: ResultSchemaInput,
  no3: ResultSchemaInput,
  no4: ResultSchemaInput,
  no5: ResultSchemaInput,
  best: string,
  average: string,
  user_id: string,
};

export type ModelResultsConditionInput = {
  and?: Array< ModelResultsConditionInput | null > | null,
  or?: Array< ModelResultsConditionInput | null > | null,
  not?: ModelResultsConditionInput | null,
};

export type UpdateResultsInput = {
  id?: string | null,
  contest_id: string,
  contest_type: string,
  no1?: ResultSchemaInput | null,
  no2?: ResultSchemaInput | null,
  no3?: ResultSchemaInput | null,
  no4?: ResultSchemaInput | null,
  no5?: ResultSchemaInput | null,
  best: string,
  average: string,
  user_id: string,
};

export type DeleteResultsInput = {
  contest_type: string,
  contest_id: string,
  best: string,
  average: string,
  user_id: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelContestsFilterInput = {
  id?: ModelStringInput | null,
  contest_number?: ModelStringInput | null,
  contest_type?: ModelStringInput | null,
  current_flag?: ModelIntInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelContestsFilterInput | null > | null,
  or?: Array< ModelContestsFilterInput | null > | null,
  not?: ModelContestsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelContestsConnection = {
  __typename: "ModelContestsConnection",
  items?:  Array<Contests | null > | null,
  nextToken?: string | null,
};

export type ModelEventsFilterInput = {
  id?: ModelStringInput | null,
  contest_id?: ModelStringInput | null,
  event_type?: ModelStringInput | null,
  scramble_id?: ModelStringInput | null,
  entry_count?: ModelIntInput | null,
  and?: Array< ModelEventsFilterInput | null > | null,
  or?: Array< ModelEventsFilterInput | null > | null,
  not?: ModelEventsFilterInput | null,
};

export type ModelPreResultsFilterInput = {
  id?: ModelStringInput | null,
  user_id?: ModelStringInput | null,
  event_type?: ModelStringInput | null,
  and?: Array< ModelPreResultsFilterInput | null > | null,
  or?: Array< ModelPreResultsFilterInput | null > | null,
  not?: ModelPreResultsFilterInput | null,
};

export type ModelUsersFilterInput = {
  id?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items?:  Array<Users | null > | null,
  nextToken?: string | null,
};

export type ModelScramblesFilterInput = {
  id?: ModelStringInput | null,
  evnet_id?: ModelStringInput | null,
  scramble?: ModelStringInput | null,
  and?: Array< ModelScramblesFilterInput | null > | null,
  or?: Array< ModelScramblesFilterInput | null > | null,
  not?: ModelScramblesFilterInput | null,
};

export type ModelScramblesConnection = {
  __typename: "ModelScramblesConnection",
  items?:  Array<Scrambles | null > | null,
  nextToken?: string | null,
};

export type ModelResultsPrimaryCompositeKeyConditionInput = {
  eq?: ModelResultsPrimaryCompositeKeyInput | null,
  le?: ModelResultsPrimaryCompositeKeyInput | null,
  lt?: ModelResultsPrimaryCompositeKeyInput | null,
  ge?: ModelResultsPrimaryCompositeKeyInput | null,
  gt?: ModelResultsPrimaryCompositeKeyInput | null,
  between?: Array< ModelResultsPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelResultsPrimaryCompositeKeyInput | null,
};

export type ModelResultsPrimaryCompositeKeyInput = {
  contest_id?: string | null,
  best?: string | null,
  average?: string | null,
  user_id?: string | null,
};

export type ModelResultsFilterInput = {
  id?: ModelStringInput | null,
  contest_id?: ModelStringInput | null,
  contest_type?: ModelStringInput | null,
  best?: ModelStringInput | null,
  average?: ModelStringInput | null,
  user_id?: ModelStringInput | null,
  and?: Array< ModelResultsFilterInput | null > | null,
  or?: Array< ModelResultsFilterInput | null > | null,
  not?: ModelResultsFilterInput | null,
};

export type CreateContestsMutationVariables = {
  input: CreateContestsInput,
  condition?: ModelContestsConditionInput | null,
};

export type CreateContestsMutation = {
  createContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContestsMutationVariables = {
  input: UpdateContestsInput,
  condition?: ModelContestsConditionInput | null,
};

export type UpdateContestsMutation = {
  updateContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContestsMutationVariables = {
  input: DeleteContestsInput,
  condition?: ModelContestsConditionInput | null,
};

export type DeleteContestsMutation = {
  deleteContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEventsMutationVariables = {
  input: CreateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type CreateEventsMutation = {
  createEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEventsMutationVariables = {
  input: UpdateEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type UpdateEventsMutation = {
  updateEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEventsMutationVariables = {
  input: DeleteEventsInput,
  condition?: ModelEventsConditionInput | null,
};

export type DeleteEventsMutation = {
  deleteEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePreResultsMutationVariables = {
  input: CreatePreResultsInput,
  condition?: ModelPreResultsConditionInput | null,
};

export type CreatePreResultsMutation = {
  createPreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePreResultsMutationVariables = {
  input: UpdatePreResultsInput,
  condition?: ModelPreResultsConditionInput | null,
};

export type UpdatePreResultsMutation = {
  updatePreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePreResultsMutationVariables = {
  input: DeletePreResultsInput,
  condition?: ModelPreResultsConditionInput | null,
};

export type DeletePreResultsMutation = {
  deletePreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateScramblesMutationVariables = {
  input: CreateScramblesInput,
  condition?: ModelScramblesConditionInput | null,
};

export type CreateScramblesMutation = {
  createScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateScramblesMutationVariables = {
  input: UpdateScramblesInput,
  condition?: ModelScramblesConditionInput | null,
};

export type UpdateScramblesMutation = {
  updateScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteScramblesMutationVariables = {
  input: DeleteScramblesInput,
  condition?: ModelScramblesConditionInput | null,
};

export type DeleteScramblesMutation = {
  deleteScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateResultsMutationVariables = {
  input: CreateResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type CreateResultsMutation = {
  createResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateResultsMutationVariables = {
  input: UpdateResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type UpdateResultsMutation = {
  updateResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteResultsMutationVariables = {
  input: DeleteResultsInput,
  condition?: ModelResultsConditionInput | null,
};

export type DeleteResultsMutation = {
  deleteResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetContestsQueryVariables = {
  contest_type: string,
  id: string,
};

export type GetContestsQuery = {
  getContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestsQueryVariables = {
  contest_type?: string | null,
  id?: ModelStringKeyConditionInput | null,
  filter?: ModelContestsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestsConnection",
    items?:  Array< {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetEventsQueryVariables = {
  event_type: string,
  contest_id: string,
};

export type GetEventsQuery = {
  getEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  event_type?: string | null,
  contest_id?: ModelStringKeyConditionInput | null,
  filter?: ModelEventsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventsConnection",
    items?:  Array< {
      __typename: "Events",
      id: string,
      contest_id: string,
      event_type: string,
      scramble_id: string,
      entry_count: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPreResultsQueryVariables = {
  event_type: string,
  user_id: string,
};

export type GetPreResultsQuery = {
  getPreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPreResultsQueryVariables = {
  event_type?: string | null,
  user_id?: ModelStringKeyConditionInput | null,
  filter?: ModelPreResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPreResultsQuery = {
  listPreResults?:  {
    __typename: "ModelPreResultsConnection",
    items?:  Array< {
      __typename: "PreResults",
      id: string,
      user_id: string,
      event_type: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items?:  Array< {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetScramblesQueryVariables = {
  id: string,
};

export type GetScramblesQuery = {
  getScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListScramblesQueryVariables = {
  filter?: ModelScramblesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListScramblesQuery = {
  listScrambles?:  {
    __typename: "ModelScramblesConnection",
    items?:  Array< {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetResultsQueryVariables = {
  contest_type: string,
  contest_id: string,
  best: string,
  average: string,
  user_id: string,
};

export type GetResultsQuery = {
  getResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListResultsQueryVariables = {
  contest_type?: string | null,
  contest_idBestAverageUser_id?: ModelResultsPrimaryCompositeKeyConditionInput | null,
  filter?: ModelResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListResultsQuery = {
  listResults?:  {
    __typename: "ModelResultsConnection",
    items?:  Array< {
      __typename: "Results",
      id: string,
      contest_id: string,
      contest_type: string,
      best: string,
      average: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetByCurrentFlagQueryVariables = {
  current_flag?: number | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContestsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetByCurrentFlagQuery = {
  getByCurrentFlag?:  {
    __typename: "ModelContestsConnection",
    items?:  Array< {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetByUsernameQuery = {
  getByUsername?:  {
    __typename: "ModelUsersConnection",
    items?:  Array< {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetByUserQueryVariables = {
  user_id?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelResultsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetByUserQuery = {
  getByUser?:  {
    __typename: "ModelResultsConnection",
    items?:  Array< {
      __typename: "Results",
      id: string,
      contest_id: string,
      contest_type: string,
      best: string,
      average: string,
      user_id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContestsSubscription = {
  onCreateContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContestsSubscription = {
  onUpdateContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContestsSubscription = {
  onDeleteContests?:  {
    __typename: "Contests",
    id: string,
    events?:  {
      __typename: "ModelEventsConnection",
      nextToken?: string | null,
    } | null,
    contest_number: string,
    contest_type: string,
    current_flag: number,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEventsSubscription = {
  onCreateEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventsSubscription = {
  onUpdateEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventsSubscription = {
  onDeleteEvents?:  {
    __typename: "Events",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    event_type: string,
    scramble_id: string,
    scramble?:  {
      __typename: "Scrambles",
      id: string,
      evnet_id: string,
      scramble: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    entry_count: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePreResultsSubscriptionVariables = {
  owner: string,
};

export type OnCreatePreResultsSubscription = {
  onCreatePreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePreResultsSubscriptionVariables = {
  owner: string,
};

export type OnUpdatePreResultsSubscription = {
  onUpdatePreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePreResultsSubscriptionVariables = {
  owner: string,
};

export type OnDeletePreResultsSubscription = {
  onDeletePreResults?:  {
    __typename: "PreResults",
    id: string,
    user_id: string,
    event_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no3?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no4?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    no5?:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    username: string,
    pre_results?:  {
      __typename: "ModelPreResultsConnection",
      nextToken?: string | null,
    } | null,
    results?:  {
      __typename: "ModelResultsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateScramblesSubscription = {
  onCreateScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateScramblesSubscription = {
  onUpdateScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteScramblesSubscription = {
  onDeleteScrambles?:  {
    __typename: "Scrambles",
    id: string,
    evnet_id: string,
    scramble: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateResultsSubscription = {
  onCreateResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateResultsSubscription = {
  onUpdateResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteResultsSubscription = {
  onDeleteResults?:  {
    __typename: "Results",
    id: string,
    contest_id: string,
    contest?:  {
      __typename: "Contests",
      id: string,
      contest_number: string,
      contest_type: string,
      current_flag: number,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    contest_type: string,
    no1:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no2:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no3:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no4:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    no5:  {
      __typename: "ResultSchema",
      result: string,
      penalty: string,
    },
    best: string,
    average: string,
    user_id: string,
    user?:  {
      __typename: "Users",
      id: string,
      username: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
