import StudentItems, { Student } from "./StudentItems";

interface Props {
  title: string;
  students: Student[];
  selected: Set<number>;
  onToggle: (id: number) => void;
}

export default function StudentList({
  title,
  students,
  selected,
  onToggle,
}: Props) {
  return (
    <div className="box">
      <h2>{title}</h2>
      {students.map((student) => (
        <StudentItems
          key={student.registrationId}
          student={student}
          checked={selected.has(student.registrationId)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
