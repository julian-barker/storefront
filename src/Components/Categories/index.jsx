import { Breadcrumbs, ListItemButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import "./style.css"; 

const Categories = () => {
  const { categories, activeCategory } = useSelector(state => state);
  console.log('🚀 ~ file: index.jsx:8 ~ Categories ~ activeCategory', activeCategory);
  console.log('🚀 ~ file: index.jsx:8 ~ Categories ~ categories', categories);
  const dispatch = useDispatch();
  
  function handleClick(category) {
    dispatch({ type: 'CHANGE', payload: category });
  }

  function reset() {
    dispatch({ type: 'RESET' });
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
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
          {category.displayName}
        </ListItemButton>
      ))}
    </Breadcrumbs>
  );
}

export default Categories;