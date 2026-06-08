import transparentLogo from "../assets/transparentLogo.png"
function Header(){
    return(
        <>
            <div className="h-16 bg-[#C2410C] relative px-12 flex items-center justify-between">
                <div><img src={transparentLogo} alt="" className="abosolute w-22" /></div>
                <div className="flex gap-3 items-center pr-4"> 
                    <div className="text-white px-2.5 py-1 hover:border hover:rounded ">Login</div>
                    <div className="text-[#C2410C] bg-amber-50 px-3 py-1 border rounded hover:border-white hover:bg-[#C2410C] hover:text-white">Register</div>
                </div>
            </div>
        </>
    );
}
export default Header;