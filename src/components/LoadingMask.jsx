import React from "react";

const LoadingMask = () => (
	<div className='loading-mask'>
		<p>loading...</p>
		<div className='lds-hourglass'></div>
		{/* <div className='spinner'>
			<p className='spinnerDot'>⦿</p>
		</div> */}
	</div>
);

export default LoadingMask;
