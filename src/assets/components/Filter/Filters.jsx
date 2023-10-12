import React from 'react'
import {  FilterContainer, FilterWrapper } from './FilterStyles'
// import { Categories } from '../../data/categories'
import Filter from './Filter'
import { useSelector } from 'react-redux'


const Filters = () => {

  const {categories} = useSelector((state) => state.categories)

  return (
    <FilterWrapper>
      <FilterContainer>
        {
          categories.map((category) =>{
            return <Filter  {...category} key={category.id}/>
          })
        }
      </FilterContainer>
    </FilterWrapper>
  )
}

export default Filters