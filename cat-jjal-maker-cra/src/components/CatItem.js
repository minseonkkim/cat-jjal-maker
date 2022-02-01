function CatItem(props) {
    return (
      <li style={{float: "left", margin: "20px"}}>
        <img src={props.img} style={{ width: "150px" }} />
      </li>
    );
  }

  export default CatItem;