import React from 'react';
import {Link} from "react-router-dom";

const EmptyItems = () => {
  return (
    <div className="empty-items">
      <span>No goods go to</span>
      <Link to="/cart">cart</Link>
    </div>

  );
};
export default EmptyItems;