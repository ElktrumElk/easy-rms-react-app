import adminLists from "../accounts/admin_listsData"
import { ListTable } from "./table";


export default function AdminLists() {
    const aList = adminLists();

    return (

        <ListTable
            list={aList}
            buttonText="Add 
            new Admin" tableTitle="Admin Lists"
            tableUserName="Admin" />
    )
}