import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {

	const {data: imagenes, loading} = useFetchGifs(category);
	console.log(loading);
	
	return (
		<>
			<h3>{category}</h3>
			{loading && <p>Loading...</p>}
			<div className="card-grid">
				{imagenes.map((img) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
