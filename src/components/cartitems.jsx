import React, {Component, useContext} from "react";
import ItemImg from '../assets/1.png';
import PlusIcon from '../assets/plus.png';
import MinusIcon from '../assets/minus.png';
import DeleteIcon from '../assets/delete.png';
import { ProductContext } from "../context/ProductContxt";
import './cartitems.css'

  const Cartitems = ({id,name,image,price,quantity}) => {
    const {IncreaseItemCount,DecreaseItemCount,DeleteItemFromCart} = useContext(ProductContext);
    return (
      <div className="cartitems-wrapper">
        <table>
          <tbody>
          <tr>
            <td className="image-item">
                <img src={image} className="img" alt="image item"/>
            </td>
            <td className="item-title">{name}</td>
            <td className="item-quantity">{price}</td>
            <td className="action-btns">
                <img src={PlusIcon} alt="plus icon" className="img plus-icons"   onClick={() => IncreaseItemCount(id)} />
                <h3 className="quantity">{quantity}</h3>
                <img src={MinusIcon} alt="minus icon" className="img minus-icons"   onClick={() => DecreaseItemCount(id)} />
            </td>
            <td className="delete-btn">
            <img src={DeleteIcon} alt="minus icon" className="img delete-icons" onClick={()=> DeleteItemFromCart(id)}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
}
export default Cartitems;