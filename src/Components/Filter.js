import React from 'react';

const Filter = () => {
  return (
    <section className="filter">
     <form className="form-control">
    <input type="search" name="search"  id="search"placeholder="What you searching today..?!"/>
     </form>

     <div>
         <select name="select" className="select" id="select">
         <option value="Filter by Population">Filter by Population</option>
         <option value=" America">America</option>
         <option value=" Europe">Europe</option>
         <option value=" Australia">Australia</option>
         </select>
        
        
     </div>

    </section>
  );
}

export default Filter;
