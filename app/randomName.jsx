async function RandomName() {
  let name = "";

  try {
    const response = await fetch("https://random-data-api.com/api/v2/users");
    const data = await response.json();
    name = data.first_name;
  } catch (error) {
    console.error("Error:", error);
  }

  return <p className="bg-red-300 text-xl py-2 text-center ">{name}</p>;
}

export default RandomName;
