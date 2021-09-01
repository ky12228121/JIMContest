/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContests = /* GraphQL */ `
  query GetContests($id: ID!) {
    getContests(id: $id) {
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
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPreResults = /* GraphQL */ `
  query GetPreResults(
    $user_id: ID!
    $contest_type: String!
    $test_columns: String!
  ) {
    getPreResults(
      user_id: $user_id
      contest_type: $contest_type
      test_columns: $test_columns
    ) {
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
export const listPreResults = /* GraphQL */ `
  query ListPreResults(
    $user_id: ID
    $contest_typeTest_columns: ModelPreResultsPrimaryCompositeKeyConditionInput
    $filter: ModelPreResultsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPreResults(
      user_id: $user_id
      contest_typeTest_columns: $contest_typeTest_columns
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
