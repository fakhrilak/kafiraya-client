import { combineReducers } from "redux";


import auth from "./auth";
import item from "./item";
import sales from "./sales";
import category from "./category";
import satuan from "./satuan";
import tmasuk from "./Tmasuk";
import buyitem from "./buyitem";
import buyer from "./buyer";
import tkeluar from "./Tkeluar";
import saleitem from "./saleitem"

export default combineReducers({auth,item,sales,category,satuan,tmasuk,buyitem,buyer,tkeluar,saleitem});