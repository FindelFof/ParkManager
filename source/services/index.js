const API_URL = "http://localhost:3000";
export const registerUser = async (username, password, role) => {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                role: role,
            }),
        });

        if (response.ok) {

            return true;
        } else {

            throw new Error("Erreur lors de l'inscription");
        }
    } catch (error) {

        throw new Error("Erreur lors de l'envoi de la requête");
    }
};
 export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Erreur lors de la connexion");
        }
    } catch (error) {
        throw new Error("Erreur lors de l'envoi de la requête");
    }
};
export const findPark = async (floor) => {
    try {
        const response = await fetch(`${API_URL}/parking-spots/free/${floor}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Erreur lors de la recherche de places disponibles");
        }
    } catch (error) {
        throw new Error("Erreur lors de l'envoi de la requête");
    }
};
export const savePark = async (parkingSpotData, token) => {
    try {
        const response = await fetch(`${API_URL}/parking-spots`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(parkingSpotData),
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("Erreur lors de l'enregistrement de la place de parking");
        }
    } catch (error) {
        throw new Error("Erreur lors de l'envoi de la requête");
    }
};

export const assignParkingSpot = async (spotId, occupancyTime, userId) => {
    try {
        const updatedAt = new Date().toISOString();
        const endpoint = `${API_URL}/parking-spots/${spotId}/assign`;
        const data = JSON.stringify({
            occupancyTime,
            userId,
        });
        const headers = {
            'Content-Type': 'application/json',
        };

        const response = await fetch(endpoint, {
            method: 'POST',
            headers,
            body: data,
        });

        if (response.ok) {
            return { message: 'Parking spot assigned successfully' };
        } else {
            throw new Error('Erreur lors de l\'attribution de la place de parking');
        }
    } catch (error) {
        console.error('Error assigning parking spot:', error);
        throw new Error('Failed to assign parking spot');
    }
};




