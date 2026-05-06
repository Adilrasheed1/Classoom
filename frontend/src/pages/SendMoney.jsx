import { useNavigate, useSearchParams } from 'react-router-dom';

import { useState } from 'react';
import {Ballpit} from './Ballpit'

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);
    const navigate=useNavigate();

    return <div className="relative flex justify-center items-center h-screen  overflow-hidden">
        
 <div  className="absolute " >
  <Ballpit
    count={100}
    gravity={0.01}
    friction={0.9975}
    wallBounce={0.95}
    followCursor={false}
  />
</div>
        <div className="relative z-10">
            <div
                class="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-[#0f172a] shadow-lg rounded-lg text-gray-200"
            >
                <div class="flex flex-col space-y-1.5 p-6">
                <h2 class="text-3xl font-bold text-center">Send Money</h2>
                </div>
                <div class="p-6">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span class="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 class="text-2xl font-semibold">{name}</h3>
                </div>
                <div class="space-y-4">
                    <div class="space-y-2">
                    <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="amount"
                    >
                        Amount (in Rs)
                    </label>
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        id="amount"
                        placeholder="Enter amount"
                    />
                    </div>
                    <button onClick={() => {
                        fetch("http://localhost:3001/account/transfer", 
                            
                            {
                      method: "POST",
                      headers: {
                         "Content-Type": "application/json",
                          "Authorization": "Bearer " + localStorage.getItem("token")
                  },
                     body: JSON.stringify({
                             to: id,
                             amount: Number(amount)
                          })
})
.then(async (res) => {
    const data = await res.json();

    if (res.ok) {
        alert("Funds transferred successfully ✅");
        navigate("/userDashboard");   // 🔥 redirect
    } else {
        alert(data.message || "Transfer failed ❌");
    }
})
.catch(() => {
    alert("Server error ❌");
});
                        
                        
                    }} class="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}