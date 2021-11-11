import React, { useState } from "react";
import './style.css';

const FormSelect = ({ defaultValue,openValue,title,options, ...attrs }) => {
	const [isOpen, setOpen] = useState(false);
	const [items, setItem] = useState(options);
	const [selectedItem, setSelectedItem] = useState(1);
	
	const toggleDropdown = () => setOpen(!isOpen);
	
	const handleItemClick = (value) => {
		//console.log(value);
		//console.log(selectedItem);
		selectedItem == value ? setSelectedItem(value) : setSelectedItem(value);
		toggleDropdown();
	}
	
	// let OpenClass = () => {
	// 	if(  )
	// }

	return (
		<div className="form-field" onClick={toggleDropdown}>
			<label>
 				{title}
 			</label>
			<div className='dropdown'>
				<div className='dropdown-header' onClick={toggleDropdown}>
				<img src={selectedItem ? items.find(item => item.value == selectedItem).img : defaultValue}/>
				{selectedItem ? items.find(item => item.value == selectedItem).label : defaultValue}
				<i className={`icon ${isOpen && "open"}`}></i>
				</div>
				<div className={`dropdown-body ${isOpen && 'open'}`}>
				{items.map(item => (
					console.log(item.value),
					<div className={`dropdown-item ${item.value == selectedItem && 'selected'}`} onClick={e => handleItemClick(e.target.id)} id={item.value}>
						<img src={item.img}/>
						{item.label}
					</div>
				))}
				</div>
			</div>
		</div>
	  
	);
  };
  
  FormSelect.propTypes = {
	
  };
  
  export default FormSelect;

