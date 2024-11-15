
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center px-10">
        <h1 className="text-xl font-semibold">Hello <br /> <span className="text-3xl font-bold">Shobhit 👋</span> </h1>
        <button className="text-white px-4 py-3 tecxt-2xl bg-red-500 hiver:bg-red-600 rounded-md">Logout</button>
    </div>
  )
}

export default Header