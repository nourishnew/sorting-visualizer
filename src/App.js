import "./App.css";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";

function App() {
	const [array, setArray] = useState([]);

	useEffect(() => {
		generateArray();
	}, []);

	function generateArray() {
		for (let i = 0; i < 100; i++) {
			let num = Math.floor(Math.random() * (90 + 1));
			setArray((prevArray) => [...prevArray, num]);
		}
	}

	async function insertionSort() {
		let finalArray = array;
		for (let sortedIndex = 1; sortedIndex < array.length; sortedIndex++) {
			let current = finalArray[sortedIndex];
			let insertIndex;
			for (
				insertIndex = sortedIndex;
				insertIndex > 0 && finalArray[insertIndex - 1] > current;
				insertIndex--
			) {
				finalArray[insertIndex] = finalArray[insertIndex - 1];
				await sleep(1);
				setArray([...finalArray]);
			}
			finalArray[insertIndex] = current;
			await sleep(1);
			setArray([...finalArray]);
		}
	}
	async function selectionSort() {
		let finalArray = array;
		for (
			let lastUnsortedIndex = array.length - 1;
			lastUnsortedIndex > 0;
			lastUnsortedIndex--
		) {
			let largestIndex = 0;
			for (let i = 1; i <= lastUnsortedIndex; i++) {
				if (finalArray[i] > finalArray[largestIndex]) {
					largestIndex = i;
				}
			}
			let num = finalArray[largestIndex];
			finalArray[largestIndex] = finalArray[lastUnsortedIndex];
			finalArray[lastUnsortedIndex] = num;
			await sleep(1);
			setArray([...finalArray]);
		}
	}

	async function bubbleSort() {
		let finalArray = array;
		for (
			let lastUnsortedIndex = array.length - 1;
			lastUnsortedIndex > 0;
			lastUnsortedIndex--
		) {
			for (let i = 0; i < lastUnsortedIndex; i++) {
				if (finalArray[i] > finalArray[i + 1]) {
					let num = finalArray[i];
					finalArray[i] = finalArray[i + 1];
					finalArray[i + 1] = num;
				}
				await sleep(1);
				setArray([...finalArray]);
			}
		}
	}
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	return (
		<div className="App">
			<div className="title">
				<p>Sorting Visualizer</p>
			</div>
			<div className="buttonContainer">
				<Button
					variant="contained"
					color="primary"
					onClick={() => bubbleSort()}
				>
					Bubble Sort
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => selectionSort()}
				>
					Selection Sort
				</Button>
				<Button
					variant="contained"
					style={{ backgroundColor: "#b5b209" }}
					onClick={() => insertionSort()}
				>
					Insertion Sort
				</Button>
				s
			</div>
			<div className="content">
				{array.map((item) => {
					return <div className="bar" style={{ height: `${item}vh` }}></div>;
				})}
			</div>
		</div>
	);
}
export default App;
