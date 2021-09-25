module.exports = {
  mutation: `mutation CreateContests($input: CreateContestsInput!, $condition: ModelContestsConditionInput) {
    createContests(input: $input, condition: $condition) {
      id
    }
  }`
}