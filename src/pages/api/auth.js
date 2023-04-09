// import { useAuthStore } from "../../../utils/authStore";

const API_BASE_URL = "https://frontendtestapi.staging.fastjobs.io";

export default async function handler(req, res) {
    
  const { username, password } = req.body;
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
        for (const [name, value] of response.headers) {
          console.log(`${name}: ${value}`);
        }
      const cookies = response.headers.get("set-cookie");
      const authToken = cookies.split(";")[0].split("=")[1];
      console.log(authToken);
    //   useAuthStore.getState().setAuthToken(authToken);
      res.status(200).json({ success: true, authToken: authToken });
    } else {
      res.status(401).json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}
