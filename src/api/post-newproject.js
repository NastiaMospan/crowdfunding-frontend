async function postNewProject(project) {

    console.log(project)
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("Authentication token not found. Please log in.");
    }

    const url = `${import.meta.env.VITE_API_URL}/projects/`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
            ...project,
        }),
    });

    if (!response.ok) {
        const fallbackError = "Error trying to sign up";
        
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    return await response.json();
}

export default postNewProject;
