const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    axios.mockRestore();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };

    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserid: 1 }
    );
  });

  test("Teste GET ById Funktion", async () => {
    const myInput = {
      data: { todo: returnedTodo1 },
    };

    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchTodoById(6);

    expect(result).toEqual(myInput.data.todo);
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/byid",
      { params: { todoId: 6 } }
    );
  });

  test("Teste GET ByUserId Funktion", async () => {
    const userId = 1;
    const mockData = { data: { todos: [returnedTodo1] } };

    axios.get.mockResolvedValue(mockData);

    const result = await TodosQueries.fetchTodoByUserId(userId);

    expect(result).toEqual(mockData.data.todos);
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/byuserid",
      { params: { userId: 1 } }
    );
  });
});
