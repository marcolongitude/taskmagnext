export const getTasks = async () => {
	try {
		const { tasks } = await fetch("http://localhost:3000/api/tasks", {
			method: "GET",
			cache: "no-store",
		}).then((response) => response.json());
		return tasks;
	} catch (error) {
		console.log(error);
	}
};
