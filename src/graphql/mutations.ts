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
      events {
        items {
          id
          contest_id
          event_type
          scramble_id
          entry_count
          createdAt
          updatedAt
        }
        nextToken
      }
      contest_number
      contest_type
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
      events {
        items {
          id
          contest_id
          event_type
          scramble_id
          entry_count
          createdAt
          updatedAt
        }
        nextToken
      }
      contest_number
      contest_type
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
      events {
        items {
          id
          contest_id
          event_type
          scramble_id
          entry_count
          createdAt
          updatedAt
        }
        nextToken
      }
      contest_number
      contest_type
      current_flag
      start_date
      end_date
      createdAt
      updatedAt
    }
  }
`;
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      event_type
      scramble_id
      scramble {
        id
        evnet_id
        scramble
        createdAt
        updatedAt
      }
      entry_count
      createdAt
      updatedAt
    }
  }
`;
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      event_type
      scramble_id
      scramble {
        id
        evnet_id
        scramble
        createdAt
        updatedAt
      }
      entry_count
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      event_type
      scramble_id
      scramble {
        id
        evnet_id
        scramble
        createdAt
        updatedAt
      }
      entry_count
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
      id
      user_id
      event_type
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
      id
      user_id
      event_type
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
      id
      user_id
      event_type
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      username
      pre_results {
        items {
          id
          user_id
          event_type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      results {
        items {
          id
          contest_id
          contest_type
          best
          average
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      username
      pre_results {
        items {
          id
          user_id
          event_type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      results {
        items {
          id
          contest_id
          contest_type
          best
          average
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      username
      pre_results {
        items {
          id
          user_id
          event_type
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      results {
        items {
          id
          contest_id
          contest_type
          best
          average
          user_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createScrambles = /* GraphQL */ `
  mutation CreateScrambles(
    $input: CreateScramblesInput!
    $condition: ModelScramblesConditionInput
  ) {
    createScrambles(input: $input, condition: $condition) {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const updateScrambles = /* GraphQL */ `
  mutation UpdateScrambles(
    $input: UpdateScramblesInput!
    $condition: ModelScramblesConditionInput
  ) {
    updateScrambles(input: $input, condition: $condition) {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const deleteScrambles = /* GraphQL */ `
  mutation DeleteScrambles(
    $input: DeleteScramblesInput!
    $condition: ModelScramblesConditionInput
  ) {
    deleteScrambles(input: $input, condition: $condition) {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const createResults = /* GraphQL */ `
  mutation CreateResults(
    $input: CreateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    createResults(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      contest_type
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
      best
      average
      user_id
      user {
        id
        username
        pre_results {
          nextToken
        }
        results {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateResults = /* GraphQL */ `
  mutation UpdateResults(
    $input: UpdateResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    updateResults(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      contest_type
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
      best
      average
      user_id
      user {
        id
        username
        pre_results {
          nextToken
        }
        results {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteResults = /* GraphQL */ `
  mutation DeleteResults(
    $input: DeleteResultsInput!
    $condition: ModelResultsConditionInput
  ) {
    deleteResults(input: $input, condition: $condition) {
      id
      contest_id
      contest {
        id
        events {
          nextToken
        }
        contest_number
        contest_type
        current_flag
        start_date
        end_date
        createdAt
        updatedAt
      }
      contest_type
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
      best
      average
      user_id
      user {
        id
        username
        pre_results {
          nextToken
        }
        results {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
