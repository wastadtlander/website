let nodes = [
	"Alivia Stadtlander",
	"William Stadtlander",
	"Hannah Stadtlander"
];

createNodes(nodes);

function createNodes(nodes) {
	for (const node of nodes) {
		const child = document.createElement("div");
		child.className = "node";
		const childText = document.createTextNode(node);
		child.appendChild(childText);
		const parent = document.getElementById("root");
		document.body.insertBefore(child, parent);
	}
}

