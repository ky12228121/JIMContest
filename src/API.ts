/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateContestsInput = {
  id?: string | null,
  contest_id: string,
  cube3_entry_count: number,
  oh_entry_count: number,
  sq1_entry_count: number,
  current_flag: boolean,
  start_date: string,
  end_date: string,
};

export type ModelContestsConditionInput = {
  contest_id?: ModelIDInput | null,
  cube3_entry_count?: ModelIntInput | null,
  oh_entry_count?: ModelIntInput | null,
  sq1_entry_count?: ModelIntInput | null,
  current_flag?: ModelBooleanInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelContestsConditionInput | null > | null,
  or?: Array< ModelContestsConditionInput | null > | null,
  not?: ModelContestsConditionInput | null,
};

export type ModelIDInput = {
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Contests = {
  __typename: "Contests",
  id: string,
  contest_id: string,
  cube3_entry_count: number,
  oh_entry_count: number,
  sq1_entry_count: number,
  current_flag: boolean,
  start_date: string,
  end_date: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateContestsInput = {
  contest_id?: string | null,
  cube3_entry_count?: number | null,
  oh_entry_count?: number | null,
  sq1_entry_count?: number | null,
  current_flag?: boolean | null,
  start_date?: string | null,
  end_date?: string | null,
};

export type DeleteContestsInput = {
  id: string,
};

export type CreatePreResultsInput = {
  user_id: string,
  contest_type: string,
  test_columns: string,
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
  user_id: string,
  contest_type: string,
  test_columns: string,
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
  user_id: string,
  contest_type: string,
  test_columns: string,
  no1?: ResultSchemaInput | null,
  no2?: ResultSchemaInput | null,
  no3?: ResultSchemaInput | null,
  no4?: ResultSchemaInput | null,
  no5?: ResultSchemaInput | null,
};

export type DeletePreResultsInput = {
  user_id: string,
  contest_type: string,
  test_columns: string,
};

export type ModelContestsFilterInput = {
  contest_id?: ModelIDInput | null,
  cube3_entry_count?: ModelIntInput | null,
  oh_entry_count?: ModelIntInput | null,
  sq1_entry_count?: ModelIntInput | null,
  current_flag?: ModelBooleanInput | null,
  start_date?: ModelStringInput | null,
  end_date?: ModelStringInput | null,
  and?: Array< ModelContestsFilterInput | null > | null,
  or?: Array< ModelContestsFilterInput | null > | null,
  not?: ModelContestsFilterInput | null,
};

export type ModelContestsConnection = {
  __typename: "ModelContestsConnection",
  items?:  Array<Contests | null > | null,
  nextToken?: string | null,
};

export type ModelPreResultsPrimaryCompositeKeyConditionInput = {
  eq?: ModelPreResultsPrimaryCompositeKeyInput | null,
  le?: ModelPreResultsPrimaryCompositeKeyInput | null,
  lt?: ModelPreResultsPrimaryCompositeKeyInput | null,
  ge?: ModelPreResultsPrimaryCompositeKeyInput | null,
  gt?: ModelPreResultsPrimaryCompositeKeyInput | null,
  between?: Array< ModelPreResultsPrimaryCompositeKeyInput | null > | null,
  beginsWith?: ModelPreResultsPrimaryCompositeKeyInput | null,
};

export type ModelPreResultsPrimaryCompositeKeyInput = {
  contest_type?: string | null,
  test_columns?: string | null,
};

export type ModelPreResultsFilterInput = {
  user_id?: ModelIDInput | null,
  contest_type?: ModelStringInput | null,
  test_columns?: ModelStringInput | null,
  and?: Array< ModelPreResultsFilterInput | null > | null,
  or?: Array< ModelPreResultsFilterInput | null > | null,
  not?: ModelPreResultsFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPreResultsConnection = {
  __typename: "ModelPreResultsConnection",
  items?:  Array<PreResults | null > | null,
  nextToken?: string | null,
};

export type CreateContestsMutationVariables = {
  input: CreateContestsInput,
  condition?: ModelContestsConditionInput | null,
};

export type CreateContestsMutation = {
  createContests?:  {
    __typename: "Contests",
    id: string,
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
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
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
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
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
    start_date: string,
    end_date: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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

export type GetContestsQueryVariables = {
  id: string,
};

export type GetContestsQuery = {
  getContests?:  {
    __typename: "Contests",
    id: string,
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
    start_date: string,
    end_date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContestsQueryVariables = {
  filter?: ModelContestsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContestsQuery = {
  listContests?:  {
    __typename: "ModelContestsConnection",
    items?:  Array< {
      __typename: "Contests",
      id: string,
      contest_id: string,
      cube3_entry_count: number,
      oh_entry_count: number,
      sq1_entry_count: number,
      current_flag: boolean,
      start_date: string,
      end_date: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPreResultsQueryVariables = {
  user_id: string,
  contest_type: string,
  test_columns: string,
};

export type GetPreResultsQuery = {
  getPreResults?:  {
    __typename: "PreResults",
    user_id: string,
    contest_type: string,
    test_columns: string,
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
  user_id?: string | null,
  contest_typeTest_columns?: ModelPreResultsPrimaryCompositeKeyConditionInput | null,
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
      user_id: string,
      contest_type: string,
      test_columns: string,
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
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateContestsSubscription = {
  onCreateContests?:  {
    __typename: "Contests",
    id: string,
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
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
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
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
    contest_id: string,
    cube3_entry_count: number,
    oh_entry_count: number,
    sq1_entry_count: number,
    current_flag: boolean,
    start_date: string,
    end_date: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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
    user_id: string,
    contest_type: string,
    test_columns: string,
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
