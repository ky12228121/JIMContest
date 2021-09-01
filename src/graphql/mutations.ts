/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContests = /* GraphQL */ `
  mutation CreateContests(
    $input: CreateContestsInput!
    $condition: ModelContestsConditionInput
  ) {
    createContests(input: $input, condition: $condition) {
      id
      contest_id
      cube3_entry_count
      oh_entry_count
      sq1_entry_count
      current_flag
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const updateContests = /* GraphQL */ `
  mutation UpdateContests(
    $input: UpdateContestsInput!
    $condition: ModelContestsConditionInput
  ) {
    updateContests(input: $input, condition: $condition) {
      id
      contest_id
      cube3_entry_count
      oh_entry_count
      sq1_entry_count
      current_flag
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const deleteContests = /* GraphQL */ `
  mutation DeleteContests(
    $input: DeleteContestsInput!
    $condition: ModelContestsConditionInput
  ) {
    deleteContests(input: $input, condition: $condition) {
      id
      contest_id
      cube3_entry_count
      oh_entry_count
      sq1_entry_count
      current_flag
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const createPreResults = /* GraphQL */ `
  mutation CreatePreResults(
    $input: CreatePreResultsInput!
    $condition: ModelPreResultsConditionInput
  ) {
    createPreResults(input: $input, condition: $condition) {
      user_id
      contest_type
      test_columns
      no1 {
        result
        penalty
      }
      no2 {
        result
        penalty
      }
      no3 {
        result
        penalty
      }
      no4 {
        result
        penalty
      }
      no5 {
        result
        penalty
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePreResults = /* GraphQL */ `
  mutation UpdatePreResults(
    $input: UpdatePreResultsInput!
    $condition: ModelPreResultsConditionInput
  ) {
    updatePreResults(input: $input, condition: $condition) {
      user_id
      contest_type
      test_columns
      no1 {
        result
        penalty
      }
      no2 {
        result
        penalty
      }
      no3 {
        result
        penalty
      }
      no4 {
        result
        penalty
      }
      no5 {
        result
        penalty
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePreResults = /* GraphQL */ `
  mutation DeletePreResults(
    $input: DeletePreResultsInput!
    $condition: ModelPreResultsConditionInput
  ) {
    deletePreResults(input: $input, condition: $condition) {
      user_id
      contest_type
      test_columns
      no1 {
        result
        penalty
      }
      no2 {
        result
        penalty
      }
      no3 {
        result
        penalty
      }
      no4 {
        result
        penalty
      }
      no5 {
        result
        penalty
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
