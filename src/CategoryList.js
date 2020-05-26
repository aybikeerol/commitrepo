import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

class CategoryList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryList: categoryData,
      // ornek olsun diye ekliyorum
      // ayakkabiDisabled: true,
      disabledCategoryList: {}
    };
  }

  //  bu alttaki gibi d,sabled categoriList icini oto doldurabilmemiz gerek ! msg den devam

  disabledCategory = categoryName => {
    // bad practice
    // if (categoryName === 'Ayakkabı') {
    //   this.setState({
    //     ayakkabiDisabled: false
    //   });
    // }

    const localDisabledCategoryList = {};
    localDisabledCategoryList[categoryName] = true;
    //yeni olusan degeri state e atıyoruz
    this.setState({ disabledCategoryList: localDisabledCategoryList });
  };
  enabledCategory = categoryName => {
    debugger;
    const localDisabledCategoryList = {};
    localDisabledCategoryList[categoryName] = false;
    this.setState({ disabledCategoryList: localDisabledCategoryList });
  };
  toggleDisabled = categoryName => {
    const tempDisabledCategoryList = this.state.disabledCategoryList;
    // disabledCategoryList = {
    //   "pantolon" : true
    // };
    tempDisabledCategoryList[categoryName] = !tempDisabledCategoryList[
      categoryName
    ];
    this.setState({ disabledCategoryList: tempDisabledCategoryList });
  };
  isLocked = categoryName => {
    if (this.state.disabledCategoryList[categoryName]) {
      // return "fas fa-lock";
      return faLock;
    }
    // return "fas fa-lock-open";
    return faLockOpen;
  };
  render() {
    const { categoryList } = this.state;
    return (
      <ul className="list-group">
        {categoryList.map(item => {
          return (
            <li className="list-group-item">
              <a disabled={this.state.disabledCategoryList[item.categoryName]}>
                {item.categoryName}
              </a>
              <div>
                <button
                  onClick={event => {
                    this.toggleDisabled(item.categoryName);
                  }}
                >
                  Disabled Toggle
                </button>
                <FontAwesomeIcon icon={this.isLocked(item.categoryName)} />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CategoryList;

const categoryData = [
  { categoryName: "Ayakkabı", id: 1 },
  { categoryName: "Tişört", id: 2 },
  { categoryName: "Pantalon", id: 3 }
];
