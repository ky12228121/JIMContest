/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateContests = /* GraphQL */ `
  subscription OnCreateContests($owner: String!) {
    onCreateContests(owner: $owner) {
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
      owner
    }
  }
`;
export const onUpdateContests = /* GraphQL */ `
  subscription OnUpdateContests($owner: String!) {
    onUpdateContests(owner: $owner) {
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
      owner
    }
  }
`;
export const onDeleteContests = /* GraphQL */ `
  subscription OnDeleteContests($owner: String!) {
    onDeleteContests(owner: $owner) {
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
      owner
    }
  }
`;
export const onCreateEvents = /* GraphQL */ `
  subscription OnCreateEvents {
    onCreateEvents {
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
        owner
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
export const onUpdateEvents = /* GraphQL */ `
  subscription OnUpdateEvents {
    onUpdateEvents {
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
        owner
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
export const onDeleteEvents = /* GraphQL */ `
  subscription OnDeleteEvents {
    onDeleteEvents {
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
        owner
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
export const onCreatePreResults = /* GraphQL */ `
  subscription OnCreatePreResults($owner: String!) {
    onCreatePreResults(owner: $owner) {
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
export const onUpdatePreResults = /* GraphQL */ `
  subscription OnUpdatePreResults($owner: String!) {
    onUpdatePreResults(owner: $owner) {
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
export const onDeletePreResults = /* GraphQL */ `
  subscription OnDeletePreResults($owner: String!) {
    onDeletePreResults(owner: $owner) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateScrambles = /* GraphQL */ `
  subscription OnCreateScrambles {
    onCreateScrambles {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateScrambles = /* GraphQL */ `
  subscription OnUpdateScrambles {
    onUpdateScrambles {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteScrambles = /* GraphQL */ `
  subscription OnDeleteScrambles {
    onDeleteScrambles {
      id
      evnet_id
      scramble
      createdAt
      updatedAt
    }
  }
`;
export const onCreateResults = /* GraphQL */ `
  subscription OnCreateResults {
    onCreateResults {
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
        owner
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
export const onUpdateResults = /* GraphQL */ `
  subscription OnUpdateResults {
    onUpdateResults {
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
        owner
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
export const onDeleteResults = /* GraphQL */ `
  subscription OnDeleteResults {
    onDeleteResults {
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
        owner
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
