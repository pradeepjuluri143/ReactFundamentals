function StudentHeader() {
    return <h1>Student Details</h1>
}

function StudentDetails() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th> Roll No </th>
                        <th> Name </th>
                        <th> Age </th>
                        <th> Class </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td> Mamu </td>
                        <td> 25</td>
                        <td> EEE - A </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}

export { StudentHeader, StudentDetails }