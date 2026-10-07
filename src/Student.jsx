import "./Student.css"

function StudentHeader() {
    return <h1>Student Details</h1>
}

/* 
 * SIGNIFICANCE OF STYLE IN REACT:
 * In React, the 'style' attribute does NOT accept a raw CSS string like standard HTML (e.g., style="color: red;").
 * Instead, it accepts a JavaScript Object (JSON format) where CSS property names are written in camelCase 
 * (e.g., backgroundColor instead of background-color, fontSize instead of font-size).
 */

// INTERNAL STYLE OBJECT:
// Defined as a JavaScript object in the component file and reused.
const theadStyle = {
    color: "red"
};

function StudentTableHeader() {
    return (
        /* 
         * INTERNAL STYLE LINKING:
         * Linked by passing the JavaScript style object variable 'theadStyle' inside single curly braces: style={theadStyle}
         */
        <thead style={theadStyle}>
            <tr>
                {/* 
                  * INLINE STYLE ADDITION:
                  * Added directly to HTML element using double curly braces style={{ backgroundColor: "yellow" }}.
                  * Outer braces {} evaluate a JS expression; inner braces {} create a JS object literal (JSON).
                */}
                <th style={{ backgroundColor: "yellow" }}> Roll No </th>
                <th style={{ backgroundColor: "yellow" }}> Name </th>
                <th style={{ backgroundColor: "yellow" }}> Age </th>
                <th style={{ backgroundColor: "yellow" }}> Class </th>
                <th style={{ backgroundColor: "yellow" }}> Active </th>
            </tr>
        </thead>
    )
}

function StudentRecordRow(props) {
    return (
        <tr>
            <td>{props.student.rollno}</td>
            <td>{props.student.name} </td>
            <td>{props.student.age}</td>
            <td>{props.student.class}</td>

            {/* 
              * CONDITIONAL RENDERING:
              * Using JavaScript ternary operator (condition ? trueVal : falseVal) to dynamically 
              * render "Yes" or "No" based on the boolean prop value 'props.student.active'.
            */}
            <td>{props.student.active ? "Yes" : "No"}</td>
        </tr>
    )
}

function StudentTable({ students }) {

    return (
        <>
            <table>
                <StudentTableHeader />
                {/* 
                  * EXTERNAL STYLE LINKING:
                  * External CSS styles (defined in Student.css as .student-tbody) are applied using the 'className' attribute 
                  * instead of 'class' because 'class' is a reserved keyword in JavaScript.
                */}
                <tbody className="student-tbody">
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