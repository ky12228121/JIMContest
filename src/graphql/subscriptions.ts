/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContests = /* GraphQL */ `
  subscription OnCreateContests {
    onCreateContests {
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
export const onUpdateContests = /* GraphQL */ `
  subscription OnUpdateContests {
    onUpdateContests {
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
export const onDeleteContests = /* GraphQL */ `
  subscription OnDeleteContests {
    onDeleteContests {
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
export const onCreatePreResults = /* GraphQL */ `
  subscription OnCreatePreResults($owner: String!) {
    onCreatePreResults(owner: $owner) {
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
export const onUpdatePreResults = /* GraphQL */ `
  subscription OnUpdatePreResults($owner: String!) {
    onUpdatePreResults(owner: $owner) {
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
export const onDeletePreResults = /* GraphQL */ `
  subscription OnDeletePreResults($owner: String!) {
    onDeletePreResults(owner: $owner) {
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
