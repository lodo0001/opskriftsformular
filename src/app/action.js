"use server";

const action = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const resname = formData.get("resname");
  try {
    const resname = formData.get("resname");

    if (!resname) {
      return { message: "Please fill all the forms" };
    }

    return { message: "Your recipe is saved!" };
  } catch (error) {
    return { message: "Oh no, something went wrong:(" };
  }
};

export default action;
