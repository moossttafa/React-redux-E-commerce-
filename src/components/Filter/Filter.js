import React from 'react'
import "./style.css"

const Filter = () => {
  return (
    <div className="card">
      <h6 className="card-header">Filters </h6>
      <div className="card-body text-left">
        <p className="card-title">
          Number of Products :
          Products
        </p>
        <h5 className="card-text mt-3">Filter Category</h5>
        <select>
          <option value="ALL">ALL</option>
          <option>
            categoryy
          </option>
        </select>
        <h5 className="card-text mt-3">Filter Price</h5>
        <select >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
        <h5 className="card-text mt-3">Sorting</h5>
        <select>
          <option value="all">All</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
    </div>
  )
}

export default Filter