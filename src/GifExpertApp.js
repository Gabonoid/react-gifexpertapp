import React, { useState } from "react";
import AddCategory from "./components/AddCategory.js";
import GifGrid from "./components/GifGrid.js";

const GifExpertApp = () => {
	const [categorias, setCategorias] = useState(["The legend of zelda"]);

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategorias={setCategorias} />

			<hr />

			<ol>
				{categorias.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GifExpertApp;
