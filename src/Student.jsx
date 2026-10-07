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
                    {/* 
                      * KEY PROP & HTML ID RELATIONSHIP:
                      * 1. Importance of 'key': 'key' is a special React attribute used by React's Virtual DOM 
                      *    reconciliation engine to track list items across re-renders, enabling efficient DOM updates.
                      * 2. Key vs HTML ID: While 'key' uses a unique data identifier (like 'student.rollno', conceptualized like a unique ID),
                      *    React consumes 'key' internally and does NOT render it into the HTML DOM. If a physical HTML 'id' attribute 
                      *    is needed for styling or DOM targeting, pass it explicitly to the underlying HTML element.
                    */}
                    {students.map(student => (
                        <StudentRecordRow key={student.rollno} student={student} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export { StudentHeader, StudentTable }