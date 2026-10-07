import "./Student.css"
import { useState } from "react";

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
    {/*
      * This is handler function as we are making use of props passed to component the function
      * has to be within the component. If no props are passed it can be outside 
      */  }
    function studentClicked(event) {
        alert("Student Clicked " + props.student.rollno);
    }

    return (
        <tr onClick={studentClicked}>
            <td>{props.student.rollno}</td>
            <td>{props.student.name} </td>
            <td>{props.student.age}</td>
            <td>{props.student.class}</td>

            {/* 
              * CONDITIONAL RENDERING:
              * Using JavaScript ternary operator (condition ? trueVal : falseVal) to dynamically 
              * render "Yes" or "No" based on the boolean prop value 'props.student.active'.
            */}
            <td style={{ color: props.student.active ? "green" : "red" }}>{props.student.active ? "Yes" : "No"}</td>
        </tr >
    )
}


/**
 * !!!!!!!!!!!!!!!!!!! VERY VERY IMPORTANT !!!!!!!!!!!!!!!!!!!
 *
 * A normal/local variable has two limitations in React:
 *
 * 1. Changing a local variable does NOT tell React to re-render
 *    the component.
 *
 * 2. Local variables do NOT persist between renders.
 *    Whenever React re-renders a component, the component function
 *    runs again from the beginning and the local variables are
 *    created again with their initial values.
 *
 * Therefore, if we need a value to:
 *
 *    - persist between re-renders, AND
 *    - cause the UI to re-render when it changes,
 *
 * we should use React State.
 *
 * useState() provides both:
 *
 *    1. A value that React remembers between renders.
 *    2. A setter function that tells React to re-render
 *       when the value changes.
 */
function StudentTable({ students }) {
    console.log("Re-Rendering Student Table")
    const [displayHeader, setDisplayHeader] = useState(true)
    let headerElement = <StudentTableHeader></StudentTableHeader>
    function toggleHeader() {
        setDisplayHeader(!displayHeader)
        alert(`display header value is from the snapshot, only post re-rendering the state updates, state is a SnapShot value at time of rendering. So we get ${displayHeader}`)
    }

    return (
        <>
            <button onClick={toggleHeader}>Click Me To Toggle Header</button>
            <table>
                {displayHeader ? headerElement : null}
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