export const ApiOne = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "John", marks: 90 },
        { id: 2, name: "Alice", marks: 85 },
      ]);
    }, 500);
  });
};

export const ApiTwo = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 2, name: "Alice", marks: 85 },
        { id: 3, name: "Bob", marks: 78 },
      ]);
    }, 500);
  });
};
