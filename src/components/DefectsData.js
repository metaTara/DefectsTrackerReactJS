import ViewDefects from "./ViewDefects";

const DefectsData = () => {

const defectsAll = [
{ category: "UI", descripton: "Desciption1", priority: 2, status: "Open", changeStatus: "Close Defect"},
{ category: "Functional", descripton: "Desciption2", priority: 1, status: "Closed", changeStatus: "Close Defect"},
{ category: "Change requests", descripton: "Desciption3", priority: 3, status: "Open", changeStatus: "No action pending"},
{ category: "UI", descripton: "Desciption4", priority: 4, status: "Closed", changeStatus: "Close Defect"}


];

return (
    <ViewDefects defectsData = {defectsAll} />
)}
export default DefectsData