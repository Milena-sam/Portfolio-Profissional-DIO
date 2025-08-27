
async function fetchProfileData() {
  try {

    const url = './data/profile.json'
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Erro ao carregar JSON: ${response.status}`)
    }

    const profileData = await response.json()
    return profileData
  } catch (error) {
    console.error("Erro ao buscar os dados do perfil:", error)
    return {}
  }
}
