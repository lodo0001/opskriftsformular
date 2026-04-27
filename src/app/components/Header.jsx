const Header = () => {
  return (
    <div className="flex text-4xl gap-3">
      <label className="text-[#142AA6] font-bold">This is a recipe for:</label>
      <input
        className="text-[#4146A6]"
        name="resname"
        type="text"
        placeholder="the name of the dish.."
      ></input>
    </div>
  );
};

export default Header;
