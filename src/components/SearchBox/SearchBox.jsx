import { useRef ,useCallback, useState,useEffect} from "react";
import { searchCoinData } from "../../services/searchCoin";

function SearchBox(){
    console.log("search box component trigred");
     const [coins, setCoins] = useState([]);
    const debounceRef = useRef(null);

    const [isVisible, setIsVisible] = useState('true');
    const divRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (divRef.current && !divRef.current.contains(event.target)) {
            setIsVisible(false); // Hide or disable the div
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    const fetchData = async (e) => {
        const query = e.target.value;
        const response = await searchCoinData(query);
        setCoins(response.data.coins);

        console.log(coins);
        // console.log(response);
    };

    const debouncedFetch = useCallback((e) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        // Clone the event to preserve it (React reuses event objects)
        const eventCopy = { ...e };
        debounceRef.current = setTimeout(() => {
            fetchData(eventCopy);
        }, 500);
    }, []);

    const handleOnChange = (e) => {
        setIsVisible('false');
        debouncedFetch(e);
    };

    return <>
    <div className="relative border-2  rounded-md border-black-900">
        <input 
        onChange={handleOnChange}
        type="text" placeholder=" Enter coin name"/>


        {isVisible && coins != null && coins.length > 0 && (
        
        <div ref={divRef} className="  absolute   z-10 bg-white border w-64  max-h-64  overflow-y-auto rounded shadow " >
            
          {coins.map((coin) => (
            <div key={coin.id} className="p-2 border rounded mb-2 flex items-center gap-2">
              <img src={coin.thumb} alt={coin.name} className="w-6 h-6" />
              <div>
                <p className="font-semibold">
                  {coin.name} ({coin.symbol.toUpperCase()})
                </p>
                <p className="text-sm text-gray-500">Rank: #{coin.market_cap_rank}</p>
              </div>
            </div>
          ))}
        </div>
      
    )}
        
    </div>

    {/* {coins && coins.length > 0 && console.log(coins)} */}
    
    
    </>
}

export default SearchBox;