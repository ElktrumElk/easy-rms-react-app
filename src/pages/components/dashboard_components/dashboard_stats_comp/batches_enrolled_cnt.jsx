
import { useContext, useState } from "react";
import educationalServiceData from "../../../../accounts/db";
import fetchData from "../../../../scripts/fetchData";
import { AuthContext } from "../../../../context/auth_context_export";
import CreateBatchCard from "../../../../components/create_batch_card";

export default function BatchesEnrolledContainer() {

    const [batchData] = useState(fetchData({ navigate: false, type: false }).data);
    const {userRole} = useContext(AuthContext);

    return (
        <CreateBatchCard data={batchData} datakey={userRole === 'Admin' ? 'batchesEnrolled' : 'batches'}/>
    )
}