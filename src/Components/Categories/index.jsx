import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../store/categories";

import { Breadcrumbs, ListItemButton } from "@mui/material";
import "./style.css"; 


const Categories = () => {
  const { categories, activeCategory } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  function handleClick(category) {
    dispatch({ type: 'CHANGE', payload: category });
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  return (
    <Breadcrumbs id='categories' aria-label="breadcrumb">
      <ListItemButton 
        sx={
          activeCategory === 'all' ? { color: 'darkblue', backgroundColor: 'lightgray' } : { color: 'inherit' }
        }
        underline="hover" 
        key='0'
        onClick={reset} >
        All
      </ListItemButton>
      {categories.map((category) => (
        <ListItemButton 
          underline="hover" 
          sx={
            activeCategory === category.name ? 
            { color: 'darkblue', backgroundColor: 'lightgray' } : 
            { color: 'inherit' }
          }
          key={category}
          onClick={() => handleClick(category.name)} >
          {category.name[0].toUpperCase() + category.name.slice(1)}
        </ListItemButton>
      ))}
    </Breadcrumbs>
  );
}

export default Categories;