function StudentHeader() {
    return <h1>Student Details</h1>
}

function StudentTableHeader() {
    return (<thead>
        <tr>
            <th> Roll No </th>
            <th> Name </th>
            <th> Age </th>
            <th> Class </th>
        </tr>
    </thead>)
}

function StudentRecordRow(props) {
    return (
        <tr>
            <td>{props.student.rollno}</td>
            <td>{props.student.name} </td>
            <td>{props.student.age}</td>
            <td>{props.student.class}</td>
        </tr>
    )
}

function StudentTable({ students }) {

    return (
        <>
            <table>
                <StudentTableHeader />
                <tbody>
                    {students.map(student => (
                        <StudentRecordRow key={student.rollno} student={student} />
                    ))}

                </tbody>
            </table>
        </>
    )
}

export { StudentHeader, StudentTable }