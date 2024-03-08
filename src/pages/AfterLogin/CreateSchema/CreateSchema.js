import FolderTree, { testData } from "react-folder-tree";

const CreateSchema = () => {
  //const testData = {name:'All types', children:[{name:'Bitcoin'},{name:'Bitcoin'},{name:'Bitcoin'},{name:'Bitcoin'}],_id: 0, checked: 0, isOpen: true}
  const onTreeStateChange = (state) => console.log("tree state: ", state);
  return <FolderTree data={testData} onChange={onTreeStateChange} />;
};

export default CreateSchema;
