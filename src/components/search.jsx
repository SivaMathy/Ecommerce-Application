import React, {Component} from "react";
import SearchImg from '../assets/Vector.png';
import './serach.css'
export default class Search extends Component {
  render() {
    return (
      <div className="serach-bar">
        <input className="search-input" placeholder="What are you looking for ?" />
        <img src={SearchImg} className="search-icon" />
      </div>
    );
  }
}
