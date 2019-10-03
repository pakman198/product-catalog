import React from 'react';

const Header = () => {
  return (
    <div class="ui borderless top fixed menu">
      <div class="item">
        <i className="large icon fly"></i>
        My Furniture Shop
      </div>
      <div className="right menu">
        <div className="item">
          <i className="icon shopping cart"></i>
        </div>
      </div>
    </div>
  );
}

export default Header;