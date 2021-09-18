/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContests = /* GraphQL */ `
  query GetContests($contest_type: String!, $id: String!) {
    getContests(contest_type: $contest_type, id: $id) {
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
  }
`;
export const listContests = /* GraphQL */ `
  query ListContests(
    $contest_type: String
    $id: ModelStringKeyConditionInput
    $filter: ModelContestsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContests(
      contest_type: $contest_type
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        contest_number
        contest_type
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
export const getEvents = /* GraphQL */ `
  query GetEvents($event_type: String!, $contest_id: String!) {
    getEvents(event_type: $event_type, contest_id: $contest_id) {
      id
      contest_id
      contest {
        id
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
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $event_type: String
    $contest_id: ModelStringKeyConditionInput
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listEvents(
      event_type: $event_type
      contest_id: $contest_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getPreResults = /* GraphQL */ `
  query GetPreResults($event_type: String!, $user_id: String!) {
    getPreResults(event_type: $event_type, user_id: $user_id) {
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
export const listPreResults = /* GraphQL */ `
  query ListPreResults(
    $event_type: String
    $user_id: ModelStringKeyConditionInput
    $filter: ModelPreResultsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPreResults(
      event_type: $event_type
      user_id: $user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getScrambles = /* GraphQL */ `
  query GetScrambles($id: ID!) {
    getScrambles(id: $id) {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const listScrambles = /* GraphQL */ `
  query ListScrambles(
    $filter: ModelScramblesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listScrambles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        evnet_id
        scramble
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getResults = /* GraphQL */ `
  query GetResults(
    $contest_type: String!
    $contest_id: String!
    $best: String!
    $average: String!
    $user_id: String!
  ) {
    getResults(
      contest_type: $contest_type
      contest_id: $contest_id
      best: $best
      average: $average
      user_id: $user_id
    ) {
      id
      contest_id
      contest {
        id
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listResults = /* GraphQL */ `
  query ListResults(
    $contest_type: String
    $contest_idBestAverageUser_id: ModelResultsPrimaryCompositeKeyConditionInput
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listResults(
      contest_type: $contest_type
      contest_idBestAverageUser_id: $contest_idBestAverageUser_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getByCurrentFlag = /* GraphQL */ `
  query GetByCurrentFlag(
    $current_flag: Int
    $sortDirection: ModelSortDirection
    $filter: ModelContestsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByCurrentFlag(
      current_flag: $current_flag
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contest_number
        contest_type
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
export const getByUsername = /* GraphQL */ `
  query GetByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getByUser = /* GraphQL */ `
  query GetByUser(
    $user_id: String
    $sortDirection: ModelSortDirection
    $filter: ModelResultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getByUser(
      user_id: $user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
