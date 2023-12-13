import PocketBase from "pocketbase";

async function RandomName() {
  const pb = new PocketBase("https://rear-goes.pockethost.io");
  let name = "";

  try {
    const record = await pb.collection("test").getOne("7qrentmc10e01l1");
    name = record.field;
  } catch (error) {
    console.error("Error:", error);
  }

  return <p className="bg-red-300 text-xl py-2 text-center ">{name}</p>;
}

export default RandomName;
