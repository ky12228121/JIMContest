export type GetByCurrentFlagQuery = {
  getByCurrentFlag?: {
    __typename: 'ModelContestsConnection';
    items?: Array<{
      __typename?: 'Contests';
      id: string;
      contest_number: string;
      contest_type: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};
