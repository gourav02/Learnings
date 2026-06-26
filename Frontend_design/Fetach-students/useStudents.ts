import { useEffect, useState } from "react";
import { Student } from "./components/StudentItems";
import { ApiOne, ApiTwo } from "./mockApi";


export function useStudents() {
  const [left, setLeft] = useState<Student[]>([]);
  const [right, setRight] = useState<Student[]>([]);

  const [selectedLeft, setSelectedLeft] =
    useState(new Set<number>());

  const [selectedRight, setSelectedRight] =
    useState(new Set<number>());

  useEffect(() => {
    async function load() {
      const [a, b] = await Promise.all([
        ApiOne(),
        ApiTwo(),
      ]);

      setLeft(mergeStudents(a, b));
    }

    load();
  }, []);

  const toggleLeft = (id: number) => {
    setSelectedLeft((prev) => {
      const next = new Set(prev);

      next.has(id)
        ? next.delete(id)
        : next.add(id);

      return next;
    });
  };

  const toggleRight = (id: number) => {
    setSelectedRight((prev) => {
      const next = new Set(prev);

      next.has(id)
        ? next.delete(id)
        : next.add(id);

      return next;
    });
  };

  const moveRight = () => {
    const moving = left.filter((student) =>
      selectedLeft.has(student.registrationId)
    );

    setRight((prev) => [...prev, ...moving]);

    setLeft((prev) =>
      prev.filter(
        (student) =>
          !selectedLeft.has(student.registrationId)
      )
    );

    setSelectedLeft(new Set());
  };

  const moveLeft = () => {
    const moving = right.filter((student) =>
      selectedRight.has(student.registrationId)
    );

    setLeft((prev) => [...prev, ...moving]);

    setRight((prev) =>
      prev.filter(
        (student) =>
          !selectedRight.has(student.registrationId)
      )
    );

    setSelectedRight(new Set());
  };

  return {
    left,
    right,
    selectedLeft,
    selectedRight,
    toggleLeft,
    toggleRight,
    moveLeft,
    moveRight,
  };
}