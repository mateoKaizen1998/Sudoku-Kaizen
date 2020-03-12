import React from 'react';
import { useSelector } from 'react-redux';

import './Keyboard.css';

function Keyboard() {

		const onClick = e => {
			// nombreAction(e.target.value);
		}

		const selected = useSelector(state => state.selected);


		return(
			<table className="tableKeyboard">
				<tbody>	
					<tr>
						<td><button onClick={onClick}>1</button></td>
						<td><button onClick={onClick}>2</button></td>
						<td><button onClick={onClick}>3</button></td>
					</tr>
					<tr>
						<td><button onClick={onClick}>4</button></td>
						<td><button onClick={onClick}>5</button></td>
						<td><button onClick={onClick}>6</button></td>
					</tr>
					<tr>
						<td><button onClick={onClick}>7</button></td>
						<td><button onClick={onClick}>8</button></td>
						<td><button onClick={onClick}>9</button></td>
					</tr>
					<tr id="buttonRow">
					<td><button className="buttonClear">Delete</button></td>
					</tr>
				</tbody>
	</table>
		);
}
	

export default Keyboard;