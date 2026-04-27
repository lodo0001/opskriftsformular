"use client";

const Info = () => {
  return (
    <div className="flex text-[#142AA6]">
      <div className="pr-9 border-r">
        <label className="m-2">Prep time:</label>
        <input
          className="m-2 font-bold"
          name="prepTime"
          type="number"
          min="1"
          max="500"
        />
        <span>mins</span>
      </div>

      <div className="px-9 border-r">
        <label className="m-2">Cook time:</label>
        <input
          className="m-2 font-bold"
          name="cookTime"
          type="number"
          min="1"
          max="500"
        />
        <span>mins</span>
      </div>

      <div className="px-9 border-r">
        <label className="m-2">Serving:</label>
        <input
          className="m-2 font-bold"
          name="servings"
          type="number"
          min="1"
          max="500"
        />
      </div>

      <div className="px-9">
        <label className="m-2">Date:</label>
        <input
          className="m-2 font-bold"
          name="date"
          type="date"
          min="2026-01-01"
          max="2100-12-31"
        />
      </div>
    </div>
  );
};

export default Info;
