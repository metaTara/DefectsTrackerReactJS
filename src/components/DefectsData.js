import ViewDefects from "./ViewDefects";
import axios from 'axios';
import { useState, useEffect } from "react";

const DefectsData = () => {

const [defectsAll, setDefectsAll] = useState([]);
useEffect(() => {
    axios.get('defectsData.json')
    .then(result =>
        setDefectsAll(result.data))


})



return (
    <ViewDefects defectsData = {defectsAll} />
)}
export default DefectsData