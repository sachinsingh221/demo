import * as actionTypes from './actionType';

export const handleToggle =()=> 
async dispatch => {
  try{
  dispatch(toggleCollapsed())
  }catch(error){
    console.log(error)
  }
}


const toggleCollapsed = () => {
    return{
        type: actionTypes.COLLPSE_CHANGE,
    }};

const toggleAll = (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actionTypes.TOGGLE_ALL,
      collapsed,
      view,
      height,
    }
  };

const toggleOpenDrawer = () => {
    return{
    type: actionTypes.COLLPSE_OPEN_DRAWER,
  }
};

const changeOpenKeys = (openKeys) => {
    return{
    type: actionTypes.CHANGE_OPEN_KEYS,
    openKeys,
  }
};

const changeCurrent = (current) => {
    return{
    type: actionTypes.CHANGE_CURRENT,
    current,
  }
};
  
const clearMenu = () => {
    return{
        type: actionTypes.CLEAR_MENU 
    }
};


export function getView(width) {
  let newView = 'MobileView';
  if (width > 1220) {
    newView = 'DesktopView';
    } else if (width > 767) {
      newView = 'TabView';
    }
    return newView;
  }