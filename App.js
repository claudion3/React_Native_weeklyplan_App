import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import PlanItem from "./components/PlanItem";
import PlanInput from "./components/PlanInput";

export default function App() {
	const [weeklyPlan, setWeeklyPlan] = useState([]);
	const [isAddMode, setIsAddModel] = useState(false);

	const addPlanHandler = (planTitle) => {
		if (planTitle.length === 0) {
			return;
		}
		setWeeklyPlan((currentPlans) => [
			...currentPlans,
			{ id: Math.random().toString(), value: planTitle },
		]);
		setIsAddModel(false);
	};

	const removePlanHandler = (planId) => {
		setWeeklyPlan((currentPlans) => {
			return currentPlans.filter((plan) => plan.id !== planId);
		});
	};
	const cancelPlanAdditionHandler = () => {
		setIsAddModel(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Plan" onPress={() => setIsAddModel(true)} />
			<PlanInput
				visible={isAddMode}
				onAddPlan={addPlanHandler}
				onCancel={cancelPlanAdditionHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={weeklyPlan}
				renderItem={(itemData) => (
					<PlanItem
						id={itemData.item.id}
						onDelete={removePlanHandler}
						title={itemData.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 60,
	},
});
