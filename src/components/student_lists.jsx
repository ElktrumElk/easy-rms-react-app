import { studentListData } from "../accounts/student_listData";
import { ListTable } from "./table";




export default function StudentLists() {
    const studentData = studentListData();

    return (
        <ListTable
            list={studentData}
            buttonText="Add new Student"
            tableTitle="Student Lists"
            tableUserName="Student"
            isStudent = {true}
        />
    )
}