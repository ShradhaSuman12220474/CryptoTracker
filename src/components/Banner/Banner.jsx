import BannerImage from "../../assets/banner1.jpeg";

function Banner(){
    return (
        <div className="w-full h-[25rem] relative">
            <img src={BannerImage} alt="" 
            className="w-full h-full"
            />
        </div>

    )
}
export default Banner;