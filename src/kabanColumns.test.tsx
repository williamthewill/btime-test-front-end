import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import KanbanColumns from "./components/kabanColumns";
import { TASKS_PAGINATED } from "./lib/tasks";

const mocks = [
  {
    request: {
      query: TASKS_PAGINATED,
      variables: {
        first: 10,
        isSearch: false,
        isFilter: false
      }
    },
    result: {
      data: {
        getPaginated: {
          pageInfo: {
            endCursor: "x",
            hasNextPage: false
          },
          edges: {
            node: {
              id: "x",
              task_id: 1,
              name: "test",
              priority: "alta",
              description: "test",
              execution_date: "21-09-1992",
              execution_place: "São Paulo",
              files: "test",
              status: "scheduled",
            }
          }
        }
      }
    }
  }
];

it("renders without error", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <KanbanColumns
        columnsMap={[['column 1', 'scheduled'], ['column 2 ', 'executed']]}
        search={''}
        filter={{ target: 'string', value: 'string' }}
      />
    </MockedProvider >
  );

  expect(await screen.findByText("Loading Data...")).toBeInTheDocument();

});