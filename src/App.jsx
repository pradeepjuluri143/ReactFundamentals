import './App.css'
import { StudentTable, StudentHeader } from './Student'

function App() {
  let students = [{ rollno: 1, name: "Mamu", age: 25, class: "EEE-A", active: true },
  { rollno: 2, name: "Chachu", age: 25, class: "EEE-A", active: false },
  { rollno: 3, name: "Raju", age: 25, class: "EEE-B", active: true },
  { rollno: 4, name: "Bantu", age: 25, class: "EEE-B", active: false }]
  return (
    <>
      <StudentHeader />
      <StudentTable students={students} />
    </>
  )
}

export default App
