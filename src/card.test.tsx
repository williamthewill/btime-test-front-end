import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./components/card";

it("renders without error", async () => {

  const task = {
    id: 1,
    taskId: 1,
    name: 'task test',
    priority: 'alta',
    executionDate: '21/09/1992',
    executionPlace: 'São Paulo',
    description: 'description test',
    files: `{img:["https://raw.githubusercontent.com/williamthewill/btime-test-back-end/refs/heads/master/image-1.png"]}`,
    status: 'scheduled',
  }

  render(
    <Card task={task} />
  );

  expect(await screen.findByText("alta")).toBeInTheDocument();

});