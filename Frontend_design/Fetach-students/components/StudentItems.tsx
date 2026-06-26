export interface Student {
  registrationId: number;
  name: string;
  marks: number;
}

interface Props {
  student: Student;
  checked: boolean;
  onToggle: (id: number) => void;
}

export default function StudentItems({student, checked, onToggle}: Props) {
    return(
        <div className='student-item'>
            <input type='checkbox' checked={checked} onChange={() => onToggle(student.registrationId)} />
            <span>
               name: {student.name}
            </span>
            <span>
               Marks: {student.marks}
            </span>
        </div>
    )
}
