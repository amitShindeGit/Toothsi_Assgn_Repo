import React, {useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";

export default function SelectSmall({ data, type }) {
  const [val, setVal] = React.useState(10);
  const dispatch = useDispatch();
  const reset = useSelector((state) => (state.productReducer.reset));
  
  useEffect(() => {
    if(reset === true){
      setVal(10);
    }
    
  }, [reset])
  

  const handleChange = (event) => {
    setVal(event.target.value);    
    const data = event.target;


      {data.name === "Types" && dispatch({type: "UPDATE_CATEGORY_FILTERED_DATA", payload: {data}});}
      {data.name === "Sizes" && dispatch({type: "UPDATE_SIZE_FILTERED_DATA", payload: {data}});}
      dispatch({ type: "SORT_BY_TYPE", payload: {data}});
    
  };
  

  return (
    <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
      <InputLabel id="demo-select-small">{type}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={val}
        name={type}
        label="Val"
        onChange={handleChange}
    
      >
        {data.map((item) => {
            return <MenuItem key={item.val} value={item.val} >{item.name}</MenuItem>
        })}
      </Select>
    </FormControl>
  );
}
