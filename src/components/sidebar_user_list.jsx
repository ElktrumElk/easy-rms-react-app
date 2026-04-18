

import { useState } from "react";


/**
 * 
 * @param {Object} param0 
 * @param {CallableFunction} param0.setUserClick - set the click of the users to render out its frame
 * @param {Object} param0.styles - edit the user
 * @returns 
 */
export const UserLists = ({ setUserClick, styles }) => {


  return (
    <>
      <div className="sidebar_user_list-10" style={styles}>
        <ul className="sidebar_user_list_ul-10">
          <li className="sidebar_user_list_item-10" onClick={() => { setUserClick("admin") }}>
            <span className="sidebar_user_list_item_label-10" >Admin</span>
          </li>
          <li className="sidebar_user_list_item-10" onClick={() => { setUserClick("instructors") }}>
            <span className="sidebar_user_list_item_label-10" >Instructors</span>
          </li>
          <li className="sidebar_user_list_item-10" onClick={() => {setUserClick("student")}}>
            <span className="sidebar_user_list_item_label-10">Student</span>
          </li>
        </ul>
      </div>


    </>
  );
}