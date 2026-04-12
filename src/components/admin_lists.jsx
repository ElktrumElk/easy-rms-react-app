import adminLists from "../accounts/admin_lists"
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