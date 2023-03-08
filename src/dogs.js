import React, { useState } from 'react'
//create a state variable using the useState hook. This will store the current count

function IncrementButton() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>ADDED</button>
			<p>I have {count} dogs</p>
		</div>
	)
}
export default IncrementButton
