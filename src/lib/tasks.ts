import { gql } from "@apollo/client";

export type task = {
  id: number,
  taskId: number,
  name: string;
  priority: string;
  executionDate: string;
  executionPlace: string;
  description: string;
  files: { [key: string]: any };
  status: string;
}
export type tasks = Array<task>

export const TASKS_PAGINATED = gql`
query TasksPaginated($first: Int, $after: String, $substring: String, $filter: String, $toCombine: String, $isSearch: Boolean, $isFilter: Boolean){
  getPaginated(first: $first, after: $after, substring: $substring, filter: $filter, toCombine: $toCombine, isSearch: $isSearch, isFilter: $isFilter) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        id
        task_id
        name
        priority
        description
        execution_date
        execution_place
        files{
          img
        }
        status
      }
    }
  }
}
`;
