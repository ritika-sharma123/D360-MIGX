import FolderTree, { testData } from "react-folder-tree";
import {
  FaBitcoin,
  FaEthereum,
  FaFolder
} from 'react-icons/fa';
const CustomIcon = ({ onClick }) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" onClick={() => onClick()} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2846 26.5748C9.81317 26.5748 9.40974 26.4071 9.07431 26.0716C8.73831 25.7356 8.57031 25.3319 8.57031 24.8605V14.5748C8.57031 14.3319 8.6526 14.1282 8.81717 13.9636C8.98117 13.7996 9.1846 13.7176 9.42746 13.7176C9.67031 13.7176 9.87403 13.7996 10.0386 13.9636C10.2026 14.1282 10.2846 14.3319 10.2846 14.5748V24.8605H23.9989C24.2417 24.8605 24.4452 24.9428 24.6092 25.1073C24.7737 25.2713 24.856 25.4748 24.856 25.7176C24.856 25.9605 24.7737 26.1639 24.6092 26.3279C24.4452 26.4925 24.2417 26.5748 23.9989 26.5748H10.2846ZM13.7132 23.1462C13.2417 23.1462 12.8383 22.9785 12.5029 22.6431C12.1669 22.3071 11.9989 21.9033 11.9989 21.4319V12.0033C11.9989 11.5319 12.1669 11.1282 12.5029 10.7922C12.8383 10.4568 13.2417 10.2891 13.7132 10.2891H17.2917C17.5203 10.2891 17.7383 10.3319 17.9457 10.4176C18.1526 10.5033 18.3346 10.6248 18.4917 10.7819L19.7132 12.0033H25.7132C26.1846 12.0033 26.5883 12.1713 26.9243 12.5073C27.2597 12.8428 27.4275 13.2462 27.4275 13.7176V21.4319C27.4275 21.9033 27.2597 22.3071 26.9243 22.6431C26.5883 22.9785 26.1846 23.1462 25.7132 23.1462H13.7132Z" fill="#FF9C6E" />
    </svg>

  )
}
const FileIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, ...restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, ...restData });
    defaultOnClick();
  };

  return <CustomIcon onClick={handleClick} />;
};


const FolderIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, ...restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, ...restData });
    defaultOnClick();
  };

  return <CustomIcon onClick={handleClick} />;
};

const FolderOpenIcon = ({ onClick: defaultOnClick, nodeData }) => {
  const { path, name, checked, isOpen, url, ...restData } = nodeData;
  const handleClick = () => {
    console.log('icon clicked:', { path, name, url, ...restData });
    defaultOnClick();
  };

  return <CustomIcon onClick={handleClick} />;
};
const iconComponents = {
  FileIcon,
  FolderIcon,
  FolderOpenIcon,

};

const CreateSchema = () => {
  const testData = {
    "name": "Schema",
    "children": [{
      "name": "Schema 1 ",
      children: [{ name: "Table1" }, { name: "Table2" }, { name: "Table3" }, { name: "Table4" }]
    }, {
      "name": "Schema 2 ",
      children: [{ name: "Table1" }, { name: "Table2" }, { name: "Table3" }, { name: "Table4" }]
    }],

  };
  console.log(JSON.stringify(testData))
  const onTreeStateChange = (state) => console.log("tree state: ", state);
  return <FolderTree data={testData} onChange={onTreeStateChange} iconComponents={iconComponents} />;
};



export default CreateSchema;
