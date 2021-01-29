import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const PlanInput = (props) => {
	const [enteredPlan, setEnteredPlan] = useState("");

	const planInputHandler = (enteredText) => {
		setEnteredPlan(enteredText);
	};

	const addPlanHandler = () => {
		props.onAddPlan(enteredPlan);
		setEnteredPlan("");
	};

	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.wrapper}>
				<TextInput
					placeholder="weekly plan"
					style={styles.inputText}
					onChangeText={planInputHandler}
					value={enteredPlan}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="ADD" onPress={addPlanHandler} />
					</View>
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={props.onCancel} />
					</View>
				</View>
			</View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	inputText: {
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
		width: "80%",
		marginBottom: 10,
	},
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "60%",
	},
	button: {
		width: "40%",
	},
});
export default PlanInput;
