import { Link } from 'react-router'

function GoBack({path,children}) {
    let currPathArr = path.split("/");
    currPathArr.pop();
    let previousPath = currPathArr.join("/");
    return (
    <>
    <Link to={previousPath}>{children ? children : "Go Back"}</Link>
    </>
  )
}

export default GoBack