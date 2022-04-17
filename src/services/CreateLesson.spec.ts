import { CreateLesson } from "./CreateLesson";

test("create lesson", async () => {
  const createLesson = new CreateLesson({
    create: async (data) => {},
  });

  await expect(createLesson.execute({ title: 'Nova aula'})).resolves.not.toThrow();
});
