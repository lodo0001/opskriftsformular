"use client";

const SubmitBtn = ({ isPending }) => {
  return (
    <button
      type="submit"
      className="bg-[#142AA6] hover:bg-[#4146A6] text-white font-medium px-6 py-2 rounded-lg transition"
    >
      {isPending ? "Submitting..." : "Save the recipe"}
    </button>
  );
};

export default SubmitBtn;
