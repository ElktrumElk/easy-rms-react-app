import { instructorListsData } from "../accounts/instructor_listsData";
import { ListTable } from "./table";




export default function InstructorLists() {
    const iLists = instructorListsData();

    return (
        <ListTable
            list={iLists}
            buttonText="Add new Instructor" 
            tableTitle="Instructor List"
            tableUserName="Instructors" />
    )
}