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

function StudentRecordRow() {
    return (
        <tr>
            <td>1</td>
            <td> Mamu </td>
            <td> 25</td>
            <td> EEE - A </td>
        </tr>
    )
}

function StudentTable() {

    return (
        <>
            <table>
                <StudentTableHeader />
                <tbody>
                    <StudentRecordRow />
                    <StudentRecordRow />
                    <StudentRecordRow />
                    <StudentRecordRow />

                </tbody>
            </table>
        </>
    )
}

export { StudentHeader, StudentTable }