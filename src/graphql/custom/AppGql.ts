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
      }
      nextToken
    }
  }
`;
