

import { useState } from "react";
import "../styles/style10.css";


/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setUserClick - set the click of the users to render out its frame
 * @returns 
 */
export const UserLists = ({ setUserClick }) => {


  return (
    <>
      <div className="sidebar_user_list-10">
        <ul className="sidebar_user_list_ul-10">
          <li className="sidebar_user_list_item-10">
            <span className="sidebar_user_list_item_label-10" onClick={() => { setUserClick("admin") }}>Admin</span>
          </li>
          <li className="sidebar_user_list_item-10">
            <span className="sidebar_user_list_item_label-10" onClick={() => { setUserClick("instructors") }}>Instructors</span>
          </li>
          <li className="sidebar_user_list_item-10">
            <span className="sidebar_user_list_item_label-10" onClick={() => {setUserClick("student")}}>Student</span>
          </li>
        </ul>
      </div>


    </>
  );
}