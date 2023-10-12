import React from 'react'
import { FilterButton } from './FilterStyles'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory } from '../../../redux/categories/categoriesSlice'



const Filter = ({img, title, category}) => {

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.categories.selectedCategory)
  

  const FilterSubmit = (e) => {
     e.preventDefault();
     window.scrollTo(0,0)
    // console.log(listOfCategories);
    dispatch(selectCategory(category))
  }


  return (
    <FilterButton
     selected={category === selectedCategory}
    onClick={FilterSubmit}
    >
      <img src={img} alt={category}/>
      <p>{title}</p>
    </FilterButton>
  )
}

export default Filter