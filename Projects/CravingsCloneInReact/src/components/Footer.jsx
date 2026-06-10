
function Footer(){
    return(
        <>
        <div className="h-95 bg-[#3F3F46]">
        <div className="text-white flex flex-col items-center w-[82%]  ml-[9%] ">
            <div className="pt-9 text-[15px]">
            <p >--- Your favorite food delivery platform connecting customers with restaurants and riders. ---</p>
            </div>
            <div className="grid grid-cols-5 justify-between  w-full pt-10 pb-10">
                <div><img src="/circleLogo.png" alt="" className="w-30"/> </div>
                <div>
                    <p className="font-semibold text-xl">Quick Links</p>
                    <br/>
                    <div className="flex flex-col gap-1.5" >
                    <p className="text-[15px] hover:text-orange-700">Home</p>
                    <p className="text-[15px] hover:text-orange-700">About</p>
                    <p className="text-[15px] hover:text-orange-700">Order Now</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">For Restaurants</h3>
                    <br/>
                    <div className="flex flex-col gap-1.5">
                    <p className="text-[15px] hover:text-orange-700">Partner With Us</p>
                    <p className="text-[15px] hover:text-orange-700">Restaurant Dashboard</p>
                    </div>
                    </div>
                <div>
                    <h3 className="font-semibold text-xl">Quick Links</h3>
                    <br/>
                    <div className="flex flex-col gap-1.5">
                    <p className="text-[15px] hover:text-orange-700">Become a Rider</p>
                    <p className="text-[15px] hover:text-orange-700">Rider Dashboard</p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-xl">Feedback & Support</h3>
                    <br/>
                    <div className="flex flex-col gap-1.5">
                    <p className="text-[15px] hover:text-orange-700">Submit Feedback</p>
                    <p className="text-[15px] hover:text-orange-700">Help Center</p>
                    <p className="text-[15px] hover:text-orange-700">Contact Us</p>
                    </div>
                </div>
                
            </div>
            <div className="w-full h-[1px] bg-white"></div>
            <div className="flex justify-between w-full pt-10">
                <div>
                    <p className="text-[15px]">© 2026 Cravings. All rights reserved.</p>
                </div>
                <div className="flex gap-8">
                    <p className="text-[15px] hover:text-orange-700">Privacy Policy</p>
                    <p className="text-[15px] hover:text-orange-700">Terms of Service</p>
                    <p className="text-[15px] hover:text-orange-700">Site Map</p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Footer;